import services = require('../Services');
import models = require('../Models');

export async function TargetApplicationSelectController(goTo: Function) {

    let selectedEnv = services.AppStorage.GetTargetEnvironment();

    if (!selectedEnv)
        goTo("TargetEnvironmentSelect");

    let servers = services.EnvironmentService.GetTargetServers(selectedEnv);

    let content = new models.MenuContent();
    content.ListItems = servers;
    content.TitlePrompt = 'Please choose a target server';
    content.TextPrompt = 'Make selection:';

    let text = await services.MenuService.PromptInput(content);

    services.AppStorage.SetTargetServer(servers[parseInt(text)]);

    console.log("App server: " + services.AppStorage.GetTargetServer());

    let configEntity = new services.ConfigEntity(
        services.AppStorage.GetAppServer(),
        services.AppStorage.GetAppEnvironment(),
        services.AppStorage.GetServiceGroup(),
        services.AppStorage.GetTargetServer()
    );

    configEntity.point().then(() => {

        console.log("SUCCESS");
    }).catch(err => {

        console.log(err);
    });
};