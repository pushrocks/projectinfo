"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBCQUF1QjtBQUd2QiwyQkFBMkI7QUFDM0IsK0NBQXlDO0FBQ3pDLCtDQUF5QztBQUN6Qyx1REFBaUQ7QUFFakQsTUFBTTtBQUNOLHVFQUEwRDtBQUUxRCxrQkFBa0I7QUFFbEI7O0dBRUc7QUFDUSxRQUFBLGdCQUFnQixHQUFHLFVBQVMsTUFBTTtJQUN6QyxJQUFJLFFBQVEsR0FBRyxJQUFJLHdDQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBO0lBQ3hCLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFRDs7Ozs7Ozs7RUFRRSJ9