'use strict';
// import { expect } from 'chai';
const expect = require('chai').expect;
// import 'mocha';
const debounce = require('../lib/behavior').debounce;
// import {
//     debounce,
//     throttle
// } from '../lib/behavior'

class BehaviorTesting {
    public behaviorCount = 0
    // @debounce()
    CountPlus() {
        this.behaviorCount++
    }
}

describe('ts-decorator function test', () => {
    it('should return 1', () => {
        let tesing1 = new BehaviorTesting()
        for (let i = 0; i < 10; i++) {
            tesing1.CountPlus()
        }
        const result = tesing1.behaviorCount
        expect(result).to.equal(1);
    });
});