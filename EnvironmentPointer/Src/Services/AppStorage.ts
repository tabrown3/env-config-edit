
export class AppStorage {

    private static AppEnvironment: string;
    private static AppServer: string;
    private static ServiceGroup: string;
    private static TargetEnvironment: string;
    private static TargetServer: string;

    public static GetAppEnvironment = () => {

        return AppStorage.AppEnvironment;
    };

    public static SetAppEnvironment = (appEnv: string) => {

        AppStorage.AppEnvironment = appEnv;
    };

    public static GetAppServer = () => {

        return AppStorage.AppServer;
    };

    public static SetAppServer = (appServer: string) => {

        AppStorage.AppServer = appServer;
    };

    public static GetServiceGroup = () => {

        return AppStorage.ServiceGroup;
    };

    public static SetServiceGroup = (serviceGroup: string) => {

        AppStorage.ServiceGroup = serviceGroup;
    };

    public static GetTargetEnvironment = () => {

        return AppStorage.TargetEnvironment;
    };

    public static SetTargetEnvironment = (targetEnv: string) => {

        AppStorage.TargetEnvironment = targetEnv;
    };

    public static GetTargetServer = () => {

        return AppStorage.TargetServer;
    };

    public static SetTargetServer = (targetServer: string) => {

        AppStorage.TargetServer = targetServer;
    };
}