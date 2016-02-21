/// <reference path="./typings/main.d.ts" />
import plugins = require("./projectinfo.plugins");
var projectinfo:any = {};

//classes
import ProjectinfoNPM = require("./projectinfo.npm");
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