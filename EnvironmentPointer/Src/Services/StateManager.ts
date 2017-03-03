
import configs = require('../Configs');
import models = require('../Models');
import services = require('../Services');

export interface IStateManager {
    RegisterStates(stateConfig: configs.StateConfig): void;
    GoToNextState(): void;
}

export class StateManager implements IStateManager {
    
    private CurrentState: models.StateConfigEntry;
    private StateDictionary: { [K: string]: models.StateConfigEntry; };
    private ControllerLocator: services.ControllerLocator;
    private IsControllerComplete: boolean = false;
    private IsReadyForNext: boolean = false;
    private NextStateName: string;
    private PendingStateChange: boolean = false;

    constructor() {

        this.StateDictionary = {};
        this.ControllerLocator = new services.ControllerLocator();
    }

    public RegisterStates = (stateConfigEntries: models.StateConfigEntry[]) => {

        for (let stateConfigEntry of stateConfigEntries) {

            this.StateDictionary[stateConfigEntry.StateName] = stateConfigEntry;
        }
        
        this.NextStateName = stateConfigEntries[0].StateName;
    };

    public GoToNextState = () => {

        if (!this.PendingStateChange) {

            this.PendingStateChange = true;

            process.nextTick(() => {
                this.PendingStateChange = false;
                this.Transition();
                this.ExecuteCurrentController();
            });
        }
    };

    private Transition = () => {

        let nextState = this.StateDictionary[this.NextStateName];
        this.NextStateName = null;
        
        this.CurrentState = nextState;

        this.IsReadyForNext = false;
        this.IsControllerComplete = false;
    };

    private ExecuteCurrentController = () => {

        let controller = this.ControllerLocator.FindController(this.CurrentState.ControllerName);

        let isReadySet = false;

        controller((stateName: string) => {

            if (!isReadySet) {
                isReadySet = true;
                this.ReadyForNext(stateName);
            }
        });

        this.IsControllerComplete = true;

        if (this.IsReadyForNext) {
            
            this.GoToNextState();
        }
    };

    private ReadyForNext = (stateName: string) => {

        this.IsReadyForNext = true;
        this.NextStateName = stateName;
        
        if (this.IsControllerComplete) {
            
            this.GoToNextState();
        }
    };
};