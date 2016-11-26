export declare class ProjectinfoGit {
    isGit: boolean;
    githost: string;
    gituser: string;
    gitrepo: string;
    cwd: string;
    constructor(cwdArg: string);
    /**
     * get git info from path
     */
    getGitInfoFromPath(): void;
    /**
     * get git info from remote url
     */
    getGitInfoFromRemote(remoteUrlArg: string): void;
}
