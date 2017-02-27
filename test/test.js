"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUI7QUFDckIsNkNBQTZDO0FBQzdDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM5QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUUxQyxRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBQyxFQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFBO1FBQ3RGLEVBQUUsQ0FBQywwQkFBMEIsRUFBQztZQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsYUFBYSxDQUFDLENBQUE7UUFDakUsQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUM7WUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xELENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLG1CQUFtQixFQUFDO1lBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUNyRCxDQUFDLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsa0JBQWtCLEVBQUM7WUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUE7UUFDMUYsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxxQkFBcUIsRUFBQztRQUMzQixFQUFFLENBQUMsc0JBQXNCLEVBQUM7WUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FDNUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=