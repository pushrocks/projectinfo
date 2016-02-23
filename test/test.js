/// <reference path="../ts/typings/main.d.ts" />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN2RSxFQUFFLENBQUMsMEJBQTBCLEVBQUM7WUFDMUIsS0FBSyxDQUFDLFdBQVc7aUJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxXQUFXO2lCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztZQUNuQixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxrQkFBa0IsRUFBQztZQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVE7aUJBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsWUFBWSxFQUFDO1FBQ2xCLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztpQkFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgcHJvamVjdGluZm8gPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcbnZhciBzaG91bGQgPSByZXF1aXJlKFwic2hvdWxkXCIpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciB0ZXN0QmFzZVBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lKTtcblxuZGVzY3JpYmUoXCJwcm9qZWN0aW5mb1wiLGZ1bmN0aW9uKCl7XG4gICAgZGVzY3JpYmUoXCIubnBtKCkgcmV0dXJuXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIG15TnBtID0gcHJvamVjdGluZm8ubnBtKHRlc3RCYXNlUGF0aCx7Z2l0QWNjZXNzVG9rZW46XCJzb21ldG9rZW5cIn0pO1xuICAgICAgICBpdChcInNob3VsZCBoYXZlIC5wYWNrYWdlSnNvblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBteU5wbS5wYWNrYWdlSnNvblxuICAgICAgICAgICAgICAgLnNob3VsZC5oYXZlLnByb3BlcnR5KFwidmVyc2lvblwiLFwiMS4wLjBcIik7XG4gICAgICAgICAgICBteU5wbS5wYWNrYWdlSnNvblxuICAgICAgICAgICAgICAgLnNob3VsZC5oYXZlLnByb3BlcnR5KFwibmFtZVwiLFwidGVzdHBhY2thZ2VcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLnZlcnNpb25cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXlOcG1cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ2ZXJzaW9uXCIsXCIxLjAuMFwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcInNob3VsZCBoYXZlIC5uYW1lXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG15TnBtXG4gICAgICAgICAgICAgICAgLnNob3VsZC5oYXZlLnByb3BlcnR5KFwibmFtZVwiLFwidGVzdHBhY2thZ2VcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLmxpY2Vuc2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXlOcG1cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJsaWNlbnNlXCIsXCJNSVRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCBoYXZlIC5naXRcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXlOcG0uZ2l0Lmh0dHBzVXJsXG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcImh0dHBzOi8vc29tZXRva2VuQGdpdGh1Yi5jb20vc29tZXVzZXIvc29tZXJlcG8uZ2l0XCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoXCIuZ2V0TmFtZSgpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGEgbmFtZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0aW5mby5nZXROYW1lKHRlc3RCYXNlUGF0aClcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwidGVzdHBhY2thZ2VcIik7XG4gICAgICAgIH0pO1xuICAgIH0pXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
