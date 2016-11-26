import 'typings-global';
export declare class ProjectinfoNpm {
    isNpm: boolean;
    packageJson: any;
    name: string;
    version: string;
    status: string;
    license: string;
    git: any;
    constructor(cwdArg: string, optionsArg?: {
        gitAccessToken?: string;
    });
}
