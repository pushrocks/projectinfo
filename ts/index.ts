/// <reference path="./typings/main.d.ts" />
import plugins = require("./projectinfo.plugins");

//import classes
import ProjectinfoNPM = require("./projectinfo.npm");

var projectinfo:any = {};

//specific classes
projectinfo.npm = function(cwdArg){
    return new ProjectinfoNPM(cwdArg);
};

//quick functions
projectinfo.getName = function(cwdArg){
    var localNpm = projectinfo.npm(cwdArg);
    if (localNpm.status === "ok"){
        return localNpm.name;
    }
};

/* TODO
projectinfo.git = function(){

};

projectinfo.mojo = function(){

};
*/

export = projectinfo;