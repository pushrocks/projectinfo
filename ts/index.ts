import "typings-global"
import plugins = require("./projectinfo.plugins");

//npm
import {ProjectinfoNpm} from "./projectinfo.classes.npm";
export {ProjectinfoNpm} from "./projectinfo.classes.npm";
export let npm = function(cwdArg,optionsArg){
    return new ProjectinfoNpm(cwdArg,optionsArg);
};

//quick functions
export let getName = function(cwdArg){
    var localNpm = new ProjectinfoNpm(cwdArg);
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