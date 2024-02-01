// const {add} = require('../src/index.js')
import { add } from "../src/index.js"

describe('should handler math functions', () => {
    it('shoud add tow numbres', () => {
        expect(add(2, 3)).toBe(5)
    })
})