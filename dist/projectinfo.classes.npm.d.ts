import 'typings-global';
import plugins = require('./projectinfo.plugins');
export declare class ProjectinfoNpm {
    isNpm: boolean;
    packageJson: any;
    name: string;
    version: string;
    status: string;
    license: string;
    git: plugins.smartstring.GitRepo;
    constructor(cwdArg: string, optionsArg?: {
        gitAccessToken?: string;
    });
}
