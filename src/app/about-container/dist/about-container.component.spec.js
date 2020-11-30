"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var about_container_component_1 = require("./about-container.component");
describe('AboutContainerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [about_container_component_1.AboutContainerComponent],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(about_container_component_1.AboutContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
