"use strict";
const services = require("../Services");
class MenuService {
}
MenuService.PromptInput = (content) => {
    console.log(content.TitlePrompt);
    let items = content.ListItems;
    for (let ind in items) {
        console.log(ind + ": " + items[ind]);
    }
    console.log(content.TextPrompt);
    return services.InputService.OnInput();
};
exports.MenuService = MenuService;
//# sourceMappingURL=MenuService.js.map