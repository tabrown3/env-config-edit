
export class EnvironmentService {

    private static readonly AppEnvironments: { [K: string]: string[] } = {
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

    private static readonly ServiceGroups: string[] = [
        "TO_CMS",
        "TO_JAVAWEBSERVICES",
        "TO_MATSAL_LEGACY"
    ];

    private static readonly Targets: { [K: string]: string[] } = {
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

    public static GetAppEnvironments = (): string[] => {

        return Object.keys(EnvironmentService.AppEnvironments);
    };

    public static GetAppServers = (environment: string): string[] => {

        return EnvironmentService.AppEnvironments[environment];
    };

    public static GetServiceGroups = (): string[] => {

        return EnvironmentService.ServiceGroups;
    };

    public static GetTargetEnvironments = (): string[] => {

        return Object.keys(EnvironmentService.Targets);
    };

    public static GetTargetServers = (environment: string): string[] => {

        return EnvironmentService.Targets[environment];
    };
}