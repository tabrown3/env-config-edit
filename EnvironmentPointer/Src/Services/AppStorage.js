"use strict";
class AppStorage {
}
AppStorage.GetAppEnvironment = () => {
    return AppStorage.AppEnvironment;
};
AppStorage.SetAppEnvironment = (appEnv) => {
    AppStorage.AppEnvironment = appEnv;
};
AppStorage.GetAppServer = () => {
    return AppStorage.AppServer;
};
AppStorage.SetAppServer = (appServer) => {
    AppStorage.AppServer = appServer;
};
AppStorage.GetServiceGroup = () => {
    return AppStorage.ServiceGroup;
};
AppStorage.SetServiceGroup = (serviceGroup) => {
    AppStorage.ServiceGroup = serviceGroup;
};
AppStorage.GetTargetEnvironment = () => {
    return AppStorage.TargetEnvironment;
};
AppStorage.SetTargetEnvironment = (targetEnv) => {
    AppStorage.TargetEnvironment = targetEnv;
};
AppStorage.GetTargetServer = () => {
    return AppStorage.TargetServer;
};
AppStorage.SetTargetServer = (targetServer) => {
    AppStorage.TargetServer = targetServer;
};
exports.AppStorage = AppStorage;
//# sourceMappingURL=AppStorage.js.map