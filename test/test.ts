import 'typings-test'
import projectinfo = require('../dist/index')
let should = require('should')
let path = require('path')
let testBasePath = path.resolve(__dirname)

describe('projectinfo',function(){
    describe('.npm() return',function(){
        let myNpm = new projectinfo.ProjectinfoNpm(testBasePath,{gitAccessToken: 'sometoken'})
        it('should have .packageJson',function(){
            should(myNpm.packageJson).have.property('version','1.0.0')
            should(myNpm.packageJson).have.property('name','testpackage')
        })

        it('should have .version',function(){
            should(myNpm).have.property('version','1.0.0')
        })

        it('should have .name',function(){
            should(myNpm).have.property('name','testpackage')
        })

        it('should have .license',function(){
            should(myNpm).have.property('license','MIT')
        })
        it('should have .git',function(){
            should(myNpm.git.httpsUrl).equal('https://sometoken@github.com/someuser/somerepo.git')
        })

    })

    describe('.getNpmNameForDir()',function(){
        it('should return a name',function(){
            should(projectinfo.getNpmNameForDir(testBasePath)
                ).equal('testpackage')
        })
    })
})
