"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const services = require("../Services");
const models = require("../Models");
function EnvironmentSelectController(goTo) {
    return __awaiter(this, void 0, void 0, function* () {
        let envs = services.EnvironmentService.GetAppEnvironments();
        let content = new models.MenuContent();
        content.ListItems = envs;
        content.TitlePrompt = 'Please choose an environment';
        content.TextPrompt = 'Make selection:';
        let text = yield services.MenuService.PromptInput(content);
        services.AppStorage.SetAppEnvironment(envs[parseInt(text)]);
        console.log('App environment: ' + services.AppStorage.GetAppEnvironment());
        goTo('ApplicationSelect');
    });
}
exports.EnvironmentSelectController = EnvironmentSelectController;
;
//# sourceMappingURL=EnvironmentSelectController.js.map