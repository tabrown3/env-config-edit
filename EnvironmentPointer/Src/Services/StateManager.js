"use strict";
const services = require("../Services");
class StateManager {
    constructor() {
        this.IsControllerComplete = false;
        this.IsReadyForNext = false;
        this.PendingStateChange = false;
        this.RegisterStates = (stateConfigEntries) => {
            for (let stateConfigEntry of stateConfigEntries) {
                this.StateDictionary[stateConfigEntry.StateName] = stateConfigEntry;
            }
            this.NextStateName = stateConfigEntries[0].StateName;
        };
        this.GoToNextState = () => {
            if (!this.PendingStateChange) {
                this.PendingStateChange = true;
                process.nextTick(() => {
                    this.PendingStateChange = false;
                    this.Transition();
                    this.ExecuteCurrentController();
                });
            }
        };
        this.Transition = () => {
            let nextState = this.StateDictionary[this.NextStateName];
            this.NextStateName = null;
            this.CurrentState = nextState;
            this.IsReadyForNext = false;
            this.IsControllerComplete = false;
        };
        this.ExecuteCurrentController = () => {
            let controller = this.ControllerLocator.FindController(this.CurrentState.ControllerName);
            let isReadySet = false;
            controller((stateName) => {
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
        this.ReadyForNext = (stateName) => {
            this.IsReadyForNext = true;
            this.NextStateName = stateName;
            if (this.IsControllerComplete) {
                this.GoToNextState();
            }
        };
        this.StateDictionary = {};
        this.ControllerLocator = new services.ControllerLocator();
    }
}
exports.StateManager = StateManager;
;
//# sourceMappingURL=StateManager.js.map