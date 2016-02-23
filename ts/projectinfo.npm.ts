/// <reference path="./typings/main.d.ts" />
import plugins = require("./projectinfo.plugins");
class ProjectinfoNPM  {
    packageJson;
    name:string;
    version:string;
    status:string;
    license:string;
    git;

    constructor(cwdArg:string,optionsArg:{gitAccessToken?:string} = {}){
        this.packageJson = plugins.smartfile.readFileToObject(
            plugins.path.join(
                plugins.path.resolve(cwdArg),
                "package.json"
            )
        );
        this.name = this.packageJson.name;
        this.version = this.packageJson.version;
        this.status = "ok";
        this.license = this.packageJson.license;
        if (this.packageJson.repository){
            this.git = plugins.smartstring.git(this.packageJson.repository.url,optionsArg.gitAccessToken);
        };

    }
}

export = ProjectinfoNPM;