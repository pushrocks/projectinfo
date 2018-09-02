import * as plugins from './projectinfo.plugins';
import { ProjectinfoNpm } from './projectinfo.classes.npm';
import { ProjectinfoGit } from './projectinfo.classes.git';
export type TProjectType = 'git' | 'npm';

/**
 * class projectinfo automatically examines a given directory and exposes relevant info about it
 */
export class ProjectInfo {
  type: TProjectType;
  npm: ProjectinfoNpm;
  git: ProjectinfoGit;
  /**
   * constructor of class ProjectInfo
   */
  constructor(cwdArg: string) {
    this.npm = new ProjectinfoNpm(cwdArg);
    this.git = new ProjectinfoGit(cwdArg);
  }
}
