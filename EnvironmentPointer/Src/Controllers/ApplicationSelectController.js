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
function ApplicationSelectController(goTo) {
    return __awaiter(this, void 0, void 0, function* () {
        let selectedEnv = services.AppStorage.GetAppEnvironment();
        if (!selectedEnv)
            goTo("EnvironmentSelect");
        let servers = services.EnvironmentService.GetAppServers(selectedEnv);
        let content = new models.MenuContent();
        content.ListItems = servers;
        content.TitlePrompt = 'Please choose an app server';
        content.TextPrompt = 'Make selection:';
        let text = yield services.MenuService.PromptInput(content);
        services.AppStorage.SetAppServer(servers[parseInt(text)]);
        console.log("App server: " + services.AppStorage.GetAppServer());
        goTo("ServiceGroupSelect");
    });
}
exports.ApplicationSelectController = ApplicationSelectController;
;
//# sourceMappingURL=ApplicationSelectController.js.map