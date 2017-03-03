"use strict";
const controllers = require("../Controllers");
class ControllerLocator {
    constructor() {
        this.FindController = (controllerName) => {
            return controllers[controllerName];
        };
    }
}
exports.ControllerLocator = ControllerLocator;
//# sourceMappingURL=ControllerLocator.js.map