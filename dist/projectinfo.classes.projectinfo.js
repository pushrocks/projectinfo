"use strict";
const projectinfo_classes_npm_1 = require("./projectinfo.classes.npm");
/**
 * class projectinfo automatically examines a given directory and exposes relevant info about it
 */
class ProjectInfo {
    /**
     * this constructor
     */
    constructor(cwdArg) {
        this.npm = new projectinfo_classes_npm_1.ProjectinfoNpm(cwdArg);
    }
}
exports.ProjectInfo = ProjectInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGluZm8uY2xhc3Nlcy5wcm9qZWN0aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3Byb2plY3RpbmZvLmNsYXNzZXMucHJvamVjdGluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVFQUEwRDtBQUkxRDs7R0FFRztBQUNIO0lBR0k7O09BRUc7SUFDSCxZQUFZLE1BQWM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLHdDQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekMsQ0FBQztDQUlKO0FBWkQsa0NBWUMifQ==