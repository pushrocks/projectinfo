import { ProjectinfoNpm } from './projectinfo.classes.npm';
import { ProjectinfoGit } from './projectinfo.classes.git';
export declare type TProjectType = 'git' | 'npm';
/**
 * class projectinfo automatically examines a given directory and exposes relevant info about it
 */
export declare class ProjectInfo {
    type: TProjectType;
    npm: ProjectinfoNpm;
    git: ProjectinfoGit;
    /**
     * constructor of class ProjectInfo
     */
    constructor(cwdArg: string);
}
