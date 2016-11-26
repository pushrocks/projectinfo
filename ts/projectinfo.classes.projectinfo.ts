import * as plugins from './projectinfo.plugins'
import { ProjectinfoNpm } from './projectinfo.classes.npm'

export type TProjectType = 'git' | 'npm'

/**
 * class projectinfo automatically examines a given directory and exposes relevant info about it
 */
export class ProjectInfo {
    type: TProjectType
    npm: ProjectinfoNpm
    /**
     * this constructor 
     */
    constructor(cwdArg: string) {
        this.npm = new ProjectinfoNpm(cwdArg)
    }



}