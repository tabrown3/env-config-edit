import services = require('../Services');
import models = require('../Models');

export async function ApplicationSelectController(goTo: Function) {

    let selectedEnv = services.AppStorage.GetAppEnvironment();

    if (!selectedEnv)
        goTo("EnvironmentSelect");

    let servers = services.EnvironmentService.GetAppServers(selectedEnv);

    let content = new models.MenuContent();
    content.ListItems = servers;
    content.TitlePrompt = 'Please choose an app server';
    content.TextPrompt = 'Make selection:';

    let text = await services.MenuService.PromptInput(content);

    services.AppStorage.SetAppServer(servers[parseInt(text)]);

    console.log("App server: " + services.AppStorage.GetAppServer());

    goTo("ServiceGroupSelect");
};