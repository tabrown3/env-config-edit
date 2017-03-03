import services = require('../Services');
import models = require('../Models');

export class MenuService {

    public static PromptInput = (content: models.MenuContent): Promise<string> => {

        console.log(content.TitlePrompt);

        let items = content.ListItems;

        for (let ind in items) {

            console.log(ind + ": " + items[ind]);
        }

        console.log(content.TextPrompt);
        return services.InputService.OnInput();
    };
}