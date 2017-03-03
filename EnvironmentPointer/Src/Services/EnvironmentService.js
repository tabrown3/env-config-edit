"use strict";
class EnvironmentService {
}
EnvironmentService.AppEnvironments = {
    dev: [
        "dev.example.com",
        "dev2.example.com",
        "dev3.example.com"
    ],
    qa: [
        "qa.example.com",
        "qa2.example.com",
        "qa3.example.com"
    ],
    uat: [
        "uat.example.com",
        "uat2.example.com",
        "uat3.example.com"
    ]
};
EnvironmentService.ServiceGroups = [
    "TO_CMS",
    "TO_JAVAWEBSERVICES",
    "TO_MATSAL_LEGACY"
];
EnvironmentService.Targets = {
    uat: [
        "back.uat.example.com",
        "back2.uat.example.com",
        "back3.uat.example.com"
    ],
    prod: [
        "back.prod.example.com",
        "back2.prod.example.com",
        "back3.prod.example.com"
    ]
};
EnvironmentService.GetAppEnvironments = () => {
    return Object.keys(EnvironmentService.AppEnvironments);
};
EnvironmentService.GetAppServers = (environment) => {
    return EnvironmentService.AppEnvironments[environment];
};
EnvironmentService.GetServiceGroups = () => {
    return EnvironmentService.ServiceGroups;
};
EnvironmentService.GetTargetEnvironments = () => {
    return Object.keys(EnvironmentService.Targets);
};
EnvironmentService.GetTargetServers = (environment) => {
    return EnvironmentService.Targets[environment];
};
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=EnvironmentService.js.map