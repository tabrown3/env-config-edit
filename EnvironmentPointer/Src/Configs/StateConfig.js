"use strict";
class StateConfig {
}
StateConfig.Config = [
    {
        StateName: "EnvironmentSelect",
        ControllerName: "EnvironmentSelectController",
        MovableTo: [
            "ApplicationSelect"
        ]
    },
    {
        StateName: "ApplicationSelect",
        ControllerName: "ApplicationSelectController",
        MovableTo: []
    },
    {
        StateName: "ServiceGroupSelect",
        ControllerName: "ServiceGroupSelectController",
        MovableTo: []
    },
    {
        StateName: "TargetEnvironmentSelect",
        ControllerName: "TargetEnvironmentSelectController",
        MovableTo: []
    },
    {
        StateName: "TargetApplicationSelect",
        ControllerName: "TargetApplicationSelectController",
        MovableTo: []
    }
];
exports.StateConfig = StateConfig;
//# sourceMappingURL=StateConfig.js.map