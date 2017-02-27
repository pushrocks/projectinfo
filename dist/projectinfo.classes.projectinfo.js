"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5wcm9qZWN0aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Byb2plY3RpbmZvLmNsYXNzZXMucHJvamVjdGluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1RUFBMEQ7QUFDMUQsdUVBQTBEO0FBRzFEOztHQUVHO0FBQ0g7SUFJSTs7T0FFRztJQUNILFlBQVksTUFBYztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksd0NBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksd0NBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0NBQ0o7QUFYRCxrQ0FXQyJ9