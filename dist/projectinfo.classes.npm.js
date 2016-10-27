"use strict";
require("typings-global");
const plugins = require("./projectinfo.plugins");
class ProjectinfoNpm {
    constructor(cwdArg, optionsArg = {}) {
        this.packageJson = plugins.smartfile.fs.toObjectSync(plugins.path.join(plugins.path.resolve(cwdArg), "package.json"), "json");
        this.name = this.packageJson.name;
        this.version = this.packageJson.version;
        this.status = "ok";
        this.license = this.packageJson.license;
        if (this.packageJson.repository) {
            this.git = new plugins.smartstring.GitRepo(this.packageJson.repository.url, optionsArg.gitAccessToken);
        }
        ;
    }
    ;
}
exports.ProjectinfoNpm = ProjectinfoNpm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5ucG0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wcm9qZWN0aW5mby5jbGFzc2VzLm5wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLGlEQUFrRDtBQUNsRDtJQVFJLFlBQVksTUFBYSxFQUFDLGFBQXNDLEVBQUU7UUFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUM1QixjQUFjLENBQ2pCLEVBQ0QsTUFBTSxDQUNULENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBSSxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0csQ0FBQztRQUFBLENBQUM7SUFFTixDQUFDO0lBQUEsQ0FBQztDQUNMO0FBekJELHdDQXlCQyJ9