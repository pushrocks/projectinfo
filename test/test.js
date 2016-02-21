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
    });
    describe(".getName()", function () {
        it("should return a name", function () {
            projectinfo.getName(testBasePath)
                .should.equal("testpackage");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUUzQyxRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsMEJBQTBCLEVBQUM7WUFDMUIsS0FBSyxDQUFDLFdBQVc7aUJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxXQUFXO2lCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztZQUNuQixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQkFBc0IsRUFBQztZQUN0QixLQUFLO2lCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFlBQVksRUFBQztRQUNsQixFQUFFLENBQUMsc0JBQXNCLEVBQUM7WUFDdEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7aUJBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxudmFyIHByb2plY3RpbmZvID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIik7XG52YXIgc2hvdWxkID0gcmVxdWlyZShcInNob3VsZFwiKTtcbnZhciBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG52YXIgdGVzdEJhc2VQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSk7XG5cbmRlc2NyaWJlKFwicHJvamVjdGluZm9cIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLm5wbSgpIHJldHVyblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBteU5wbSA9IHByb2plY3RpbmZvLm5wbSh0ZXN0QmFzZVBhdGgpO1xuICAgICAgICBpdChcInNob3VsZCBoYXZlIC5wYWNrYWdlSnNvblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBteU5wbS5wYWNrYWdlSnNvblxuICAgICAgICAgICAgICAgLnNob3VsZC5oYXZlLnByb3BlcnR5KFwidmVyc2lvblwiLFwiMS4wLjBcIik7XG4gICAgICAgICAgICBteU5wbS5wYWNrYWdlSnNvblxuICAgICAgICAgICAgICAgLnNob3VsZC5oYXZlLnByb3BlcnR5KFwibmFtZVwiLFwidGVzdHBhY2thZ2VcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLnZlcnNpb25cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXlOcG1cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJ2ZXJzaW9uXCIsXCIxLjAuMFwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcInNob3VsZCBoYXZlIC5uYW1lXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG15TnBtXG4gICAgICAgICAgICAgICAgLnNob3VsZC5oYXZlLnByb3BlcnR5KFwibmFtZVwiLFwidGVzdHBhY2thZ2VcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgLmxpY2Vuc2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbXlOcG1cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmhhdmUucHJvcGVydHkoXCJsaWNlbnNlXCIsXCJNSVRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShcIi5nZXROYW1lKClcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSBuYW1lXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3RpbmZvLmdldE5hbWUodGVzdEJhc2VQYXRoKVxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJ0ZXN0cGFja2FnZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
