import plugins = require('./projectinfo.plugins');

// direct access to classes
export * from './projectinfo.classes.git';
export * from './projectinfo.classes.npm';
export * from './projectinfo.classes.projectinfo';

// npm
import { ProjectinfoNpm } from './projectinfo.classes.npm';

// quick functions

/**
 * gets the name from package.json in a specified directory
 */
export let getNpmNameForDir = function(cwdArg) {
  let localNpm = new ProjectinfoNpm(cwdArg);
  if (localNpm.status === 'ok') {
    return localNpm.name;
  }
};
