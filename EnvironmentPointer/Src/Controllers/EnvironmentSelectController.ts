import services = require('../Services');
import models = require('../Models');

export async function EnvironmentSelectController(goTo: Function) {

    let envs = services.EnvironmentService.GetAppEnvironments();

    let content = new models.MenuContent();
    content.ListItems = envs;
    content.TitlePrompt = 'Please choose an environment';
    content.TextPrompt = 'Make selection:';

    let text = await services.MenuService.PromptInput(content);

    services.AppStorage.SetAppEnvironment(envs[parseInt(text)]);

    console.log('App environment: ' + services.AppStorage.GetAppEnvironment());

    goTo('ApplicationSelect');
};