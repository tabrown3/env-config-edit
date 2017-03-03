import controllers = require('../Controllers');

export class ControllerLocator {
    public FindController = (controllerName: string): Function => {

        return (<any>controllers)[controllerName];
    }
}