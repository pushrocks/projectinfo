"use strict";
const plugins = require("./projectinfo.plugins");
class ProjectinfoGit {
    constructor(cwdArg) {
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
    getGitInfoFromRemote(remoteUrlArg) {
        let gitRepoParsed = new plugins.smartstring.GitRepo(remoteUrlArg);
    }
}
exports.ProjectinfoGit = ProjectinfoGit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5naXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wcm9qZWN0aW5mby5jbGFzc2VzLmdpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaURBQWdEO0FBRWhEO0lBTUksWUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNkLElBQUksY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQixDQUFDLFlBQW9CO1FBQ3JDLElBQUksYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDckUsQ0FBQztDQUNKO0FBMUJELHdDQTBCQyJ9