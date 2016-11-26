"use strict";
const projectinfo_classes_npm_1 = require("./projectinfo.classes.npm");
const projectinfo_classes_git_1 = require("./projectinfo.classes.git");
/**
 * class projectinfo automatically examines a given directory and exposes relevant info about it
 */
class ProjectInfo {
    /**
     * constructor of class ProjectInfo
     */
    constructor(cwdArg) {
        this.npm = new projectinfo_classes_npm_1.ProjectinfoNpm(cwdArg);
        this.git = new projectinfo_classes_git_1.ProjectinfoGit(cwdArg);
    }
}
exports.ProjectInfo = ProjectInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5wcm9qZWN0aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Byb2plY3RpbmZvLmNsYXNzZXMucHJvamVjdGluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVFQUEwRDtBQUMxRCx1RUFBMEQ7QUFHMUQ7O0dBRUc7QUFDSDtJQUlJOztPQUVHO0lBQ0gsWUFBWSxNQUFjO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSx3Q0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSx3Q0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Q0FDSjtBQVhELGtDQVdDIn0=