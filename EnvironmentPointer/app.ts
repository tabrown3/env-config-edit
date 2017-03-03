import configs = require('./Src/Configs');
import services = require('./Src/Services');

var stateManager = new services.StateManager();
stateManager.RegisterStates(configs.StateConfig.Config);

stateManager.GoToNextState();