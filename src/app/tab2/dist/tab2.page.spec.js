"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var explore_container_module_1 = require("../explore-container/explore-container.module");
var tab2_page_1 = require("./tab2.page");
describe('Tab2Page', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tab2_page_1.Tab2Page],
            imports: [angular_1.IonicModule.forRoot(), explore_container_module_1.ExploreContainerComponentModule]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(tab2_page_1.Tab2Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
