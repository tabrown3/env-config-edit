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
function TargetEnvironmentSelectController(goTo) {
    return __awaiter(this, void 0, void 0, function* () {
        let envs = services.EnvironmentService.GetTargetEnvironments();
        let content = new models.MenuContent();
        content.ListItems = envs;
        content.TitlePrompt = 'Please choose a target environment';
        content.TextPrompt = 'Make selection:';
        let text = yield services.MenuService.PromptInput(content);
        services.AppStorage.SetTargetEnvironment(envs[parseInt(text)]);
        console.log('Target environment: ' + services.AppStorage.GetTargetEnvironment());
        goTo('TargetApplicationSelect');
    });
}
exports.TargetEnvironmentSelectController = TargetEnvironmentSelectController;
;
//# sourceMappingURL=TargetEnvironmentSelectController.js.map