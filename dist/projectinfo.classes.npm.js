"use strict";
require("typings-global");
const plugins = require("./projectinfo.plugins");
class ProjectinfoNpm {
    constructor(cwdArg, optionsArg = {}) {
        this.isNpm = false;
        let resolvedCwd = plugins.path.resolve(cwdArg);
        if (plugins.smartfile.fs.fileExists(plugins.path.join(resolvedCwd, 'package.json'))) {
            this.isNpm = true;
            this.packageJson = plugins.smartfile.fs.toObjectSync(plugins.path.join(resolvedCwd, 'package.json'), 'json');
            this.name = this.packageJson.name;
            this.version = this.packageJson.version;
            this.status = 'ok';
            this.license = this.packageJson.license;
            if (this.packageJson.repository) {
                this.git = new plugins.smartstring.GitRepo(this.packageJson.repository.url, optionsArg.gitAccessToken);
            }
            ;
        }
    }
    ;
}
exports.ProjectinfoNpm = ProjectinfoNpm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5ucG0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wcm9qZWN0aW5mby5jbGFzc2VzLm5wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLGlEQUFpRDtBQUNqRDtJQVNJLFlBQVksTUFBYyxFQUFFLGFBQTBDLEVBQUU7UUFSeEUsVUFBSyxHQUFZLEtBQUssQ0FBQTtRQVNsQixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM5QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDYixXQUFXLEVBQ1gsY0FBYyxDQUNqQixFQUNELE1BQU0sQ0FDVCxDQUFBO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7WUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMxRyxDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBN0JELHdDQTZCQyJ9