"use strict";
require("typings-global");
//npm
const projectinfo_classes_npm_1 = require("./projectinfo.classes.npm");
var projectinfo_classes_npm_2 = require("./projectinfo.classes.npm");
exports.ProjectinfoNpm = projectinfo_classes_npm_2.ProjectinfoNpm;
exports.npm = function (cwdArg, optionsArg) {
    return new projectinfo_classes_npm_1.ProjectinfoNpm(cwdArg, optionsArg);
};
//quick functions
exports.getName = function (cwdArg) {
    var localNpm = new projectinfo_classes_npm_1.ProjectinfoNpm(cwdArg);
    if (localNpm.status === "ok") {
        return localNpm.name;
    }
};
/* TODO
projectinfo.git = function(){

};

projectinfo.mojo = function(){

};
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBR3ZCLEtBQUs7QUFDTCx1RUFBeUQ7QUFDekQscUVBQXlEO0FBQWpELG1EQUFBLGNBQWMsQ0FBQTtBQUNYLFFBQUEsR0FBRyxHQUFHLFVBQVMsTUFBTSxFQUFDLFVBQVU7SUFDdkMsTUFBTSxDQUFDLElBQUksd0NBQWMsQ0FBQyxNQUFNLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBRUYsaUJBQWlCO0FBQ04sUUFBQSxPQUFPLEdBQUcsVUFBUyxNQUFNO0lBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksd0NBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGOzs7Ozs7OztFQVFFIn0=