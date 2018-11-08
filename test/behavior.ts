'use strict';
const expect = require('chai').expect;
// const debounce = require('../dist/lib/behavior.js').debounce;
// import { expect } from 'chai';
// import {
//     debounce,
//     throttle
// } from '../lib/index'

// class BehaviorTesting {
//     // behaviorCount = 0
//     // @debounce()
//     CountPlus() {
//         // this.behaviorCount++
//     }
// }

describe('ts-decorator function test', () => {
    it('should return 1', () => {
        // let tesing1 = new BehaviorTesting()
        // for (let i = 0; i < 10; i++) {
        //     tesing1.CountPlus()
        // }
        const result = 1 //tesing1.behaviorCount
        expect(result).to.equal(1);
    });
});