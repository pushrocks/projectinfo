"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5naXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wcm9qZWN0aW5mby5jbGFzc2VzLmdpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUVoRDtJQU1JLFlBQVksTUFBYztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQTtRQUNqQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0I7UUFDZCxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0IsQ0FBQyxZQUFvQjtRQUNyQyxJQUFJLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3JFLENBQUM7Q0FDSjtBQTFCRCx3Q0EwQkMifQ==