// test 
// it 
// import { sumar } from "../src/math.js"
const resta = require('../src/math.js')

// test('should add tow numbers', () => {
//     expect(sumar(2, 3)).toBe(5)
// } ) 

describe('should handler math functions', () => {
  
    it('should be a function', () => {
        expect(resta.restar());
    })
    
    it('should substract nubers', () => {
        expect(resta.restar(10, 8)).toBe(2);
    })
})



