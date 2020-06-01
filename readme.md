# @pushrocks/projectinfo
gather information about projects. supports npm, git etc.

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/projectinfo)
* [gitlab.com (source)](https://gitlab.com/pushrocks/projectinfo)
* [github.com (source mirror)](https://github.com/pushrocks/projectinfo)
* [docs (typedoc)](https://pushrocks.gitlab.io/projectinfo/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/projectinfo/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/projectinfo/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/projectinfo)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/projectinfo)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/projectinfo)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/projectinfo)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/projectinfo)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import { ProjectInfo } from 'projectinfo';

let myProjectInfo = new ProjectInfo('/some/path/to/proejct');
let npmName = myProjectInfo.npm.name; // returns npm name from package.json
let npmVersion = myProjectInfo.npm.version; // returns version from package.json
let gitRepo = myProjectInfo.git.gitrepo; // returns the name of the gitrepo
let gitRemotes = myProjectInfo.git.remotes; // returns array with registered remotes

// for more info check out the module in your IDE with TypeScript intellisense enabled
```

## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)