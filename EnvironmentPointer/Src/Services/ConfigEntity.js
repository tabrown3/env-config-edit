"use strict";
const fs = require("fs");
const xml2js = require("xml2js");
var parser = new xml2js.Parser(), builder = new xml2js.Builder();
class ConfigEntity {
    constructor(appToPoint, appEnv, serviceGroup, appTarget) {
        this.appToPoint = appToPoint;
        this.appEnv = appEnv;
        this.serviceGroup = serviceGroup;
        this.appTarget = appTarget;
        this.point = () => {
            return new Promise((resolve, reject) => {
                fs.readFile(__dirname + `../../${this.appToPoint}.xml`, (err, data) => {
                    if (err)
                        return reject(err);
                    parser.parseString(data.toString(), (err2, result) => {
                        if (err2)
                            return reject(err2);
                        let addArray = result.configuration.appSettings[0].add;
                        var mapped = addArray.find((element) => {
                            return element.$.key === this.appEnv.toUpperCase() + "_" + this.serviceGroup;
                        }).$;
                        mapped.value = this.appTarget;
                        var xml = builder.buildObject(result);
                        fs.writeFile(__dirname + '../../../bar.xml', xml, (err3) => {
                            if (err3)
                                return reject(err3);
                            return resolve();
                        });
                    });
                });
            });
        };
    }
}
exports.ConfigEntity = ConfigEntity;
//# sourceMappingURL=ConfigEntity.js.map