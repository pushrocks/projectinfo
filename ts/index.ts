/// <reference path="./typings/main.d.ts" />
import plugins = require("./projectinfo.plugins");
var projectinfo:any = {};

//npm
import {ProjectinfoNpm} from "./projectinfo.classes.npm";
export {ProjectinfoNpm} from "./projectinfo.classes.npm";
export let npm = function(cwdArg,optionsArg){
    return new ProjectinfoNpm(cwdArg,optionsArg);
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