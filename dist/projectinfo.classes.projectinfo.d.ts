import { ProjectinfoNpm } from './projectinfo.classes.npm';
export declare type TProjectType = 'git' | 'npm';
/**
 * class projectinfo automatically examines a given directory and exposes relevant info about it
 */
export declare class ProjectInfo {
    type: TProjectType;
    npm: ProjectinfoNpm;
    /**
     * this constructor
     */
    constructor(cwdArg: string);
}
