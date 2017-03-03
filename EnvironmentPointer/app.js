"use strict";
const configs = require("./Src/Configs");
const services = require("./Src/Services");
var stateManager = new services.StateManager();
stateManager.RegisterStates(configs.StateConfig.Config);
stateManager.GoToNextState();
//# sourceMappingURL=app.js.map