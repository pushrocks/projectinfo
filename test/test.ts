import { tap, expect } from 'tapbundle'
import projectinfo = require('../ts/index')

let path = require('path')
let testBasePath = path.resolve(__dirname)

let myNpm = new projectinfo.ProjectinfoNpm(testBasePath, { gitAccessToken: 'sometoken' })
tap.test('should have .packageJson', async () => {
  expect(myNpm.packageJson).have.property('version', '1.0.0')
  expect(myNpm.packageJson).have.property('name', 'testpackage')
})

tap.test('should have .version', async () => {
  expect(myNpm).have.property('version', '1.0.0')
})

tap.test('should have .name', async () => {
  expect(myNpm).have.property('name', 'testpackage')
})

tap.test('should have .license', async () => {
  expect(myNpm).have.property('license', 'MIT')
})
tap.test('should have .git', async () => {
  expect(myNpm.git.httpsUrl).equal('https://sometoken@github.com/someuser/somerepo.git')
})
tap.test('should return a name', async () => {
  expect(projectinfo.getNpmNameForDir(testBasePath)
  ).equal('testpackage')
})

tap.start()
