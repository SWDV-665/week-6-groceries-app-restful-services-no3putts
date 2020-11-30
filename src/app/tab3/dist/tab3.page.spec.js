"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var about_container_module_1 = require("../about-container/about-container.module");
var tab3_page_1 = require("./tab3.page");
describe('Tab3Page', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tab3_page_1.Tab3Page],
            imports: [angular_1.IonicModule.forRoot(), about_container_module_1.AboutContainerComponentModule]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(tab3_page_1.Tab3Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
