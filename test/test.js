/// <reference path="../ts/typings/main.d.ts" />
var projectinfo = require("../dist/index.js");
var should = require("should");
var path = require("path");
var testBasePath = path.resolve(__dirname);
describe("projectinfo", function () {
    describe(".npm() return", function () {
        var myNpm = projectinfo.npm(testBasePath);
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
                .should.equal("https://github.com/someuser/somerepo.git");
        });
    });
    describe(".getName()", function () {
        it("should return a name", function () {
            projectinfo.getName(testBasePath)
                .should.equal("testpackage");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsMEJBQTBCLEVBQUM7WUFDMUIsS0FBSyxDQUFDLFdBQVc7aUJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxXQUFXO2lCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztZQUNuQixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxrQkFBa0IsRUFBQztZQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVE7aUJBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsWUFBWSxFQUFDO1FBQ2xCLEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztpQkFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgcHJvamVjdGluZm8gPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcbnZhciBzaG91bGQgPSByZXF1aXJlKFwic2hvdWxkXCIpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciB0ZXN0QmFzZVBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lKTtcblxuZGVzY3JpYmUoXCJwcm9qZWN0aW5mb1wiLGZ1bmN0aW9uKCl7XG4gICAgZGVzY3JpYmUoXCIubnBtKCkgcmV0dXJuXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIG15TnBtID0gcHJvamVjdGluZm8ubnBtKHRlc3RCYXNlUGF0aCk7XG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLnBhY2thZ2VKc29uXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG15TnBtLnBhY2thZ2VKc29uXG4gICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ2ZXJzaW9uXCIsXCIxLjAuMFwiKTtcbiAgICAgICAgICAgIG15TnBtLnBhY2thZ2VKc29uXG4gICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJuYW1lXCIsXCJ0ZXN0cGFja2FnZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJzaG91bGQgaGF2ZSAudmVyc2lvblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBteU5wbVxuICAgICAgICAgICAgICAgIC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcInZlcnNpb25cIixcIjEuMC4wXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLm5hbWVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXlOcG1cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJuYW1lXCIsXCJ0ZXN0cGFja2FnZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJzaG91bGQgaGF2ZSAubGljZW5zZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBteU5wbVxuICAgICAgICAgICAgICAgIC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcImxpY2Vuc2VcIixcIk1JVFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLmdpdFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBteU5wbS5naXQuaHR0cHNVcmxcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiaHR0cHM6Ly9naXRodWIuY29tL3NvbWV1c2VyL3NvbWVyZXBvLmdpdFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKFwiLmdldE5hbWUoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhIG5hbWVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdGluZm8uZ2V0TmFtZSh0ZXN0QmFzZVBhdGgpXG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcInRlc3RwYWNrYWdlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KVxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
