"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
require("typings-global");
// direct access to classes
__export(require("./projectinfo.classes.git"));
__export(require("./projectinfo.classes.npm"));
__export(require("./projectinfo.classes.projectinfo"));
// npm
const projectinfo_classes_npm_1 = require("./projectinfo.classes.npm");
// quick functions
/**
 * gets the name from package.json in a specified directory
 */
exports.getNpmNameForDir = function (cwdArg) {
    let localNpm = new projectinfo_classes_npm_1.ProjectinfoNpm(cwdArg);
    if (localNpm.status === 'ok') {
        return localNpm.name;
    }
};
/* TODO
projectinfo.git = function(){

};

projectinfo.mojo = function(){

};
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMEJBQXVCO0FBR3ZCLDJCQUEyQjtBQUMzQiwrQ0FBeUM7QUFDekMsK0NBQXlDO0FBQ3pDLHVEQUFpRDtBQUVqRCxNQUFNO0FBQ04sdUVBQTBEO0FBRTFELGtCQUFrQjtBQUVsQjs7R0FFRztBQUNRLFFBQUEsZ0JBQWdCLEdBQUcsVUFBUyxNQUFNO0lBQ3pDLElBQUksUUFBUSxHQUFHLElBQUksd0NBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUE7SUFDeEIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUVEOzs7Ozs7OztFQVFFIn0=