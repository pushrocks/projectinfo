"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5ucG0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wcm9qZWN0aW5mby5jbGFzc2VzLm5wbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2QixpREFBaUQ7QUFDakQ7SUFTSSxZQUFZLE1BQWMsRUFBRSxhQUEwQyxFQUFFO1FBUnhFLFVBQUssR0FBWSxLQUFLLENBQUE7UUFTbEIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2IsV0FBVyxFQUNYLGNBQWMsQ0FDakIsRUFDRCxNQUFNLENBQ1QsQ0FBQTtZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUE7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQTtZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFBO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDMUcsQ0FBQztZQUFBLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQTdCRCx3Q0E2QkMifQ==