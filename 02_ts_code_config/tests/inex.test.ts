// import {add} from '../src/index'
const {add} = require('../src/index')

describe('should handler math functions', () => {
    it('should add tow numbers', () => {
        expect(add(2, 3)).toBe(5)
    })
})