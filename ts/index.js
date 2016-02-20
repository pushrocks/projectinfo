//import classes
var ProjectinfoNPM = require("./projectinfo.npm");
var projectinfo = {};
projectinfo.npm = function (cwdArg) {
    return new ProjectinfoNPM(cwdArg);
};
module.exports = projectinfo;
//# sourceMappingURL=index.js.map