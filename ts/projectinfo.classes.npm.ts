import plugins = require('./projectinfo.plugins');
export class ProjectinfoNpm {
  isNpm: boolean = false;
  packageJson: any;
  name: string;
  version: string;
  status: string;
  license: string;
  git: plugins.smartstring.GitRepo;

  constructor(cwdArg: string, optionsArg: { gitAccessToken?: string } = {}) {
    let resolvedCwd = plugins.path.resolve(cwdArg);
    if (plugins.smartfile.fs.fileExists(plugins.path.join(resolvedCwd, 'package.json'))) {
      this.isNpm = true;
      this.packageJson = plugins.smartfile.fs.toObjectSync(
        plugins.path.join(resolvedCwd, 'package.json'),
        'json'
      );
      this.name = this.packageJson.name;
      this.version = this.packageJson.version;
      this.status = 'ok';
      this.license = this.packageJson.license;
      if (this.packageJson.repository) {
        this.git = new plugins.smartstring.GitRepo(
          this.packageJson.repository.url,
          optionsArg.gitAccessToken
        );
      }
    }
  }
}
