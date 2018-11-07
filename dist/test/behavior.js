'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { expect } from 'chai';
const expect = require('chai').expect;
// import 'mocha';
const debounce = require('../lib/behavior').debounce;
// import {
//     debounce,
//     throttle
// } from '../lib/behavior'
class BehaviorTesting {
    constructor() {
        this.behaviorCount = 0;
    }
    CountPlus() {
        this.behaviorCount++;
    }
}
__decorate([
    debounce(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BehaviorTesting.prototype, "CountPlus", null);
describe('ts-decorator function test', () => {
    it('should return 1', () => {
        let tesing1 = new BehaviorTesting();
        for (let i = 0; i < 10; i++) {
            tesing1.CountPlus();
        }
        const result = tesing1.behaviorCount;
        expect(result).to.equal(1);
    });
});
