import 'typings-global';
export * from './projectinfo.classes.git';
export * from './projectinfo.classes.npm';
export * from './projectinfo.classes.projectinfo';
/**
 * gets the name from package.json in a specified directory
 */
export declare let getNpmNameForDir: (cwdArg: any) => string;
