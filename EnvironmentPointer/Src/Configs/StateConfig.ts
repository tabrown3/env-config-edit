import models = require('../Models');

export class StateConfig {
    public static readonly Config: models.StateConfigEntry[] = [
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

}