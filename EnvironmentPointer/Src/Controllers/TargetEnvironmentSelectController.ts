import services = require('../Services');
import models = require('../Models');

export async function TargetEnvironmentSelectController(goTo: Function) {

    let envs = services.EnvironmentService.GetTargetEnvironments();

    let content = new models.MenuContent();
    content.ListItems = envs;
    content.TitlePrompt = 'Please choose a target environment';
    content.TextPrompt = 'Make selection:';

    let text = await services.MenuService.PromptInput(content);

    services.AppStorage.SetTargetEnvironment(envs[parseInt(text)]);

    console.log('Target environment: ' + services.AppStorage.GetTargetEnvironment());

    goTo('TargetApplicationSelect');
};