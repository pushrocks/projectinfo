"use strict";
require("typings-test");
const projectinfo = require("../dist/index");
let should = require('should');
let path = require('path');
let testBasePath = path.resolve(__dirname);
describe('projectinfo', function () {
    describe('.npm() return', function () {
        let myNpm = new projectinfo.ProjectinfoNpm(testBasePath, { gitAccessToken: 'sometoken' });
        it('should have .packageJson', function () {
            should(myNpm.packageJson).have.property('version', '1.0.0');
            should(myNpm.packageJson).have.property('name', 'testpackage');
        });
        it('should have .version', function () {
            should(myNpm).have.property('version', '1.0.0');
        });
        it('should have .name', function () {
            should(myNpm).have.property('name', 'testpackage');
        });
        it('should have .license', function () {
            should(myNpm).have.property('license', 'MIT');
        });
        it('should have .git', function () {
            should(myNpm.git.httpsUrl).equal('https://sometoken@github.com/someuser/somerepo.git');
        });
    });
    describe('.getNpmNameForDir()', function () {
        it('should return a name', function () {
            should(projectinfo.getNpmNameForDir(testBasePath)).equal('testpackage');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQiw2Q0FBNkM7QUFDN0MsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQzlCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMxQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRTFDLFFBQVEsQ0FBQyxhQUFhLEVBQUM7SUFDbkIsUUFBUSxDQUFDLGVBQWUsRUFBQztRQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFDLEVBQUMsY0FBYyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUE7UUFDdEYsRUFBRSxDQUFDLDBCQUEwQixFQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLENBQUE7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUNqRSxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsbUJBQW1CLEVBQUM7WUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3JELENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLHNCQUFzQixFQUFDO1lBQ3RCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQztZQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQTtRQUMxRixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLHFCQUFxQixFQUFDO1FBQzNCLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUM1QyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==