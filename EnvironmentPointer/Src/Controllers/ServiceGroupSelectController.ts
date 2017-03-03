import services = require('../Services');
import models = require('../Models');

export async function ServiceGroupSelectController(goTo: Function) {

    let serviceGroups = services.EnvironmentService.GetServiceGroups();

    let content = new models.MenuContent();
    content.ListItems = serviceGroups;
    content.TitlePrompt = 'Please choose a service group';
    content.TextPrompt = 'Make selection:';

    let text = await services.MenuService.PromptInput(content);

    services.AppStorage.SetServiceGroup(serviceGroups[parseInt(text)]);

    console.log('Service group: ' + services.AppStorage.GetServiceGroup());

    goTo('TargetEnvironmentSelect');
};