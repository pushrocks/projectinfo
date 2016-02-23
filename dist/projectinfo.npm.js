/// <reference path="./typings/main.d.ts" />
var plugins = require("./projectinfo.plugins");
var ProjectinfoNPM = (function () {
    function ProjectinfoNPM(cwdArg) {
        this.packageJson = plugins.smartfile.readFileToObject(plugins.path.join(plugins.path.resolve(cwdArg), "package.json"));
        this.name = this.packageJson.name;
        this.version = this.packageJson.version;
        this.status = "ok";
        this.license = this.packageJson.license;
        if (this.packageJson.repository) {
            this.git = plugins.smartstring.git(this.packageJson.repository.url);
        }
        ;
    }
    return ProjectinfoNPM;
})();
module.exports = ProjectinfoNPM;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RpbmZvLm5wbS50cyJdLCJuYW1lcyI6WyJQcm9qZWN0aW5mb05QTSIsIlByb2plY3RpbmZvTlBNLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7QUFDNUMsSUFBTyxPQUFPLFdBQVcsdUJBQXVCLENBQUMsQ0FBQztBQUNsRDtJQVFJQSx3QkFBWUEsTUFBYUE7UUFDckJDLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLGdCQUFnQkEsQ0FDakRBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQ2JBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLEVBQzVCQSxjQUFjQSxDQUNqQkEsQ0FDSkEsQ0FBQ0E7UUFDRkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDbENBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBO1FBQ3hDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNuQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDeENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFVBQVVBLENBQUNBLENBQUFBLENBQUNBO1lBQzdCQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxPQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4RUEsQ0FBQ0E7UUFBQUEsQ0FBQ0E7SUFFTkEsQ0FBQ0E7SUFDTEQscUJBQUNBO0FBQURBLENBeEJBLEFBd0JDQSxJQUFBO0FBRUQsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6InByb2plY3RpbmZvLm5wbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vcHJvamVjdGluZm8ucGx1Z2luc1wiKTtcbmNsYXNzIFByb2plY3RpbmZvTlBNICB7XG4gICAgcGFja2FnZUpzb247XG4gICAgbmFtZTpzdHJpbmc7XG4gICAgdmVyc2lvbjpzdHJpbmc7XG4gICAgc3RhdHVzOnN0cmluZztcbiAgICBsaWNlbnNlOnN0cmluZztcbiAgICBnaXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjd2RBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wYWNrYWdlSnNvbiA9IHBsdWdpbnMuc21hcnRmaWxlLnJlYWRGaWxlVG9PYmplY3QoXG4gICAgICAgICAgICBwbHVnaW5zLnBhdGguam9pbihcbiAgICAgICAgICAgICAgICBwbHVnaW5zLnBhdGgucmVzb2x2ZShjd2RBcmcpLFxuICAgICAgICAgICAgICAgIFwicGFja2FnZS5qc29uXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wYWNrYWdlSnNvbi5uYW1lO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLnBhY2thZ2VKc29uLnZlcnNpb247XG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJva1wiO1xuICAgICAgICB0aGlzLmxpY2Vuc2UgPSB0aGlzLnBhY2thZ2VKc29uLmxpY2Vuc2U7XG4gICAgICAgIGlmICh0aGlzLnBhY2thZ2VKc29uLnJlcG9zaXRvcnkpe1xuICAgICAgICAgICAgdGhpcy5naXQgPSBwbHVnaW5zLnNtYXJ0c3RyaW5nLmdpdCh0aGlzLnBhY2thZ2VKc29uLnJlcG9zaXRvcnkudXJsKTtcbiAgICAgICAgfTtcblxuICAgIH1cbn1cblxuZXhwb3J0ID0gUHJvamVjdGluZm9OUE07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
