// const {sumar} = require('../src/math') 
import {sumar} from '../src/math'

test('should add tow numbers', () => {
    expect(sumar(2, 3)).toBe(5)
})