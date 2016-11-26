# projectinfo
gather information about projects. supports npm, git etc.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/projectinfo)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/projectinfo)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/projectinfo)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/projectinfo/)

## Status for master
[![build status](https://GitLab.com/pushrocks/projectinfo/badges/master/build.svg)](https://GitLab.com/pushrocks/projectinfo/commits/master)
[![coverage report](https://GitLab.com/pushrocks/projectinfo/badges/master/coverage.svg)](https://GitLab.com/pushrocks/projectinfo/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/projectinfo.svg)](https://www.npmjs.com/package/projectinfo)
[![Dependency Status](https://david-dm.org/pushrocks/projectinfo.svg)](https://david-dm.org/pushrocks/projectinfo)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/projectinfo/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/projectinfo/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/projectinfo/badges/code.svg)](https://www.bithound.io/github/pushrocks/projectinfo)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

```javascript
import { ProjectInfo } from 'projectinfo'

let myProjectInfo = new ProjectInfo('/some/path/to/proejct')
let npmName = myProjectInfo.npm.name // returns npm name from package.json
let npmVersion = myProjectInfo.npm.version // returns version from package.json
let gitRepo = myProjectInfo.git.gitrepo // returns the name of the gitrepo
let gitRemotes = myProjectInfo.git.remotes // returns array with registered remotes

// for more info check out the module in your IDE with TypeScript intellisense enabled
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
