"use strict";
require("typings-test");
var projectinfo = require("../dist/index.js");
var should = require("should");
var path = require("path");
var testBasePath = path.resolve(__dirname);
describe("projectinfo", function () {
    describe(".npm() return", function () {
        var myNpm = projectinfo.npm(testBasePath, { gitAccessToken: "sometoken" });
        it("should have .packageJson", function () {
            myNpm.packageJson
                .should.have.property("version", "1.0.0");
            myNpm.packageJson
                .should.have.property("name", "testpackage");
        });
        it("should have .version", function () {
            myNpm
                .should.have.property("version", "1.0.0");
        });
        it("should have .name", function () {
            myNpm
                .should.have.property("name", "testpackage");
        });
        it("should have .license", function () {
            myNpm
                .should.have.property("license", "MIT");
        });
        it("should have .git", function () {
            myNpm.git.httpsUrl
                .should.equal("https://sometoken@github.com/someuser/somerepo.git");
        });
    });
    describe(".getName()", function () {
        it("should return a name", function () {
            projectinfo.getName(testBasePath)
                .should.equal("testpackage");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFzQjtBQUN0QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFM0MsUUFBUSxDQUFDLGFBQWEsRUFBQztJQUNuQixRQUFRLENBQUMsZUFBZSxFQUFDO1FBQ3JCLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7UUFDdkUsRUFBRSxDQUFDLDBCQUEwQixFQUFDO1lBQzFCLEtBQUssQ0FBQyxXQUFXO2lCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsV0FBVztpQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUM7WUFDdEIsS0FBSztpQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUM7WUFDbkIsS0FBSztpQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsc0JBQXNCLEVBQUM7WUFDdEIsS0FBSztpQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsa0JBQWtCLEVBQUM7WUFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRO2lCQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFlBQVksRUFBQztRQUNsQixFQUFFLENBQUMsc0JBQXNCLEVBQUM7WUFDdEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7aUJBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=