/// <reference path="./typings/main.d.ts" />
import plugins = require("./projectinfo.plugins");
class ProjectinfoNPM  {
    packageJson;
    name:string;
    version:string;
    status:string;
    license:string;

    constructor(cwdArg:string){
        this.packageJson = plugins.smartfile.readFileToObject(
            plugins.path.join(
                plugins.path.resolve(cwdArg),
                "package.json"
            )
        );
        this.name = this.packageJson.name;
        this.version = this.packageJson.version;
        this.license = this.packageJson.license;
        this.status = "ok";
    }
}

export = ProjectinfoNPM;