/// <reference path="./typings/main.d.ts" />
import plugins = require("./projectinfo.plugins");
class ProjectinfoNPM  {
    packageJson;
    name:string;
    version:string;

    constructor(cwdArg){
        this.packageJson = plugins.smartfile.readFileToObject(
            plugins.path.join(
                plugins.path.resolve(cwdArg),
                "package.json"
            )
        );
        this.name = this.packageJson.name;
        this.version = this.packageJson.version;
    }
}

export = ProjectinfoNPM;