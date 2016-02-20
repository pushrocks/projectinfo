/// <reference path="./typings/main.d.ts" />
import plugins = require("./projectinfo.plugins");

//import classes
import ProjectinfoNPM = require("./projectinfo.npm");

var projectinfo:any = {};

projectinfo.npm = function(cwdArg){
    return new ProjectinfoNPM(cwdArg);
};

/* TODO
projectinfo.git = function(){

};

projectinfo.mojo = function(){

};
*/

export = projectinfo;