import * as plugins from './projectinfo.plugins';

export class ProjectinfoGit {
  isGit: boolean;
  githost: string;
  gituser: string;
  gitrepo: string;
  cwd: string;
  constructor(cwdArg: string) {
    this.cwd = cwdArg;
    this.getGitInfoFromPath();
  }

  /**
   * get git info from path
   */
  getGitInfoFromPath() {
    let localSmartpath = new plugins.smartpath.Smartpath(this.cwd);
    this.gitrepo = localSmartpath.pathLevelsBackwards[0];
    this.gituser = localSmartpath.pathLevelsBackwards[1];
  }

  /**
   * get git info from remote url
   */
  getGitInfoFromRemote(remoteUrlArg: string) {
    let gitRepoParsed = new plugins.smartstring.GitRepo(remoteUrlArg);
  }
}
