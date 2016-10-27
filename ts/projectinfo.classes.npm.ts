import "typings-global"
import plugins = require("./projectinfo.plugins");
export class ProjectinfoNpm  {
    packageJson;
    name:string;
    version:string;
    status:string;
    license:string;
    git;

    constructor(cwdArg:string,optionsArg:{gitAccessToken?:string} = {}){
        this.packageJson = plugins.smartfile.fs.toObjectSync(
            plugins.path.join(
                plugins.path.resolve(cwdArg),
                "package.json"
            ),
            "json"
        );
        this.name = this.packageJson.name;
        this.version = this.packageJson.version;
        this.status = "ok";
        this.license = this.packageJson.license;
        if (this.packageJson.repository){
            this.git =  new plugins.smartstring.GitRepo(this.packageJson.repository.url,optionsArg.gitAccessToken);
        };

    };
}