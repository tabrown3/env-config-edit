import fs = require('fs');
import xml2js = require('xml2js');

import services = require('../Services');
import models = require('../Models');

var parser = new xml2js.Parser(),
    builder = new xml2js.Builder();

export class ConfigEntity {

    constructor(public appToPoint: string, public appEnv: string, public serviceGroup: string, public appTarget: string) {

    }

    public point = (): Promise<any> => {

        return new Promise((resolve, reject) => {

            fs.readFile(__dirname + `../../../${this.appToPoint}.xml`, (err, data) => {

                if (err)
                    return reject(err);

                parser.parseString(data.toString(), (err2: any, result: any) => {

                    if (err2)
                        return reject(err2);

                    let addArray: models.Add[] = result.configuration.appSettings[0].add;

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