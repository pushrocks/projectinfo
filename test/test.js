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
                .should.have.property("name", "testpackage");
        });
        it("should have .name", function () {
            myNpm
                .should.have.property("name", "testpackage");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsMEJBQTBCLEVBQUM7WUFDMUIsS0FBSyxDQUFDLFdBQVc7aUJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxXQUFXO2lCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztZQUNuQixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgcHJvamVjdGluZm8gPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcbnZhciBzaG91bGQgPSByZXF1aXJlKFwic2hvdWxkXCIpO1xudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbnZhciB0ZXN0QmFzZVBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lKTtcblxuZGVzY3JpYmUoXCJwcm9qZWN0aW5mb1wiLGZ1bmN0aW9uKCl7XG4gICAgZGVzY3JpYmUoXCIubnBtKCkgcmV0dXJuXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIG15TnBtID0gcHJvamVjdGluZm8ubnBtKHRlc3RCYXNlUGF0aCk7XG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLnBhY2thZ2VKc29uXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG15TnBtLnBhY2thZ2VKc29uXG4gICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ2ZXJzaW9uXCIsXCIxLjAuMFwiKTtcbiAgICAgICAgICAgIG15TnBtLnBhY2thZ2VKc29uXG4gICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJuYW1lXCIsXCJ0ZXN0cGFja2FnZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJzaG91bGQgaGF2ZSAudmVyc2lvblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBteU5wbVxuICAgICAgICAgICAgICAgIC5zaG91bGQuaGF2ZS5wcm9wZXJ0eShcIm5hbWVcIixcInRlc3RwYWNrYWdlXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLm5hbWVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXlOcG1cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJuYW1lXCIsXCJ0ZXN0cGFja2FnZVwiKTtcbiAgICAgICAgfSlcblxuICAgIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
