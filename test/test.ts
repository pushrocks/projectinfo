/// <reference path="../ts/typings/main.d.ts" />
var projectinfo = require("../dist/index.js");
var should = require("should");
var path = require("path");
var testBasePath = path.resolve(__dirname);

describe("projectinfo",function(){
    describe(".npm() return",function(){
        var myNpm = projectinfo.npm(testBasePath);
        it("should have .packageJson",function(){
            myNpm.packageJson
               .should.have.property("version","1.0.0");
            myNpm.packageJson
               .should.have.property("name","testpackage");
        });

        it("should have .version",function(){
            myNpm
                .should.have.property("name","testpackage")
        });

        it("should have .name",function(){
            myNpm
                .should.have.property("name","testpackage");
        })

    });
});