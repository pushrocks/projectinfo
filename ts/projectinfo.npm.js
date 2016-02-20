/// <reference path="./typings/main.d.ts" />
var plugins = require("./projectinfo.plugins");
var ProjectinfoNPM = (function () {
    function ProjectinfoNPM(cwdArg) {
        this.packageJson = plugins.smartfile.readFileToObject(plugins.path.join(plugins.path.resolve(cwdArg), "package.json"));
        this.name = this.packageJson.name;
        this.version = this.packageJson.version;
    }
    return ProjectinfoNPM;
})();
module.exports = ProjectinfoNPM;
//# sourceMappingURL=projectinfo.npm.js.map