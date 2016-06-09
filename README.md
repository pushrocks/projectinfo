# projectinfo
returns a projectoinfo object for a directory path. TypeScript ready.

## Status
[![build status](https://gitlab.com/pushrocks/projectinfo/badges/master/build.svg)](https://gitlab.com/pushrocks/projectinfo/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/projectinfo.svg)](https://david-dm.org/pushrocks/projectinfo)
[![devDependency Status](https://david-dm.org/pushrocks/projectinfo/dev-status.svg)](https://david-dm.org/pushrocks/projectinfo#info=devDependencies)

## Usage

```TypeScript
var projectinfo = require("projectinfo")

myProject = new ProjectinfoNpm("/somepath/to/projectroot");
myProject.version // displays version
```