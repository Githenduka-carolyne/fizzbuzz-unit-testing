const fizzbuzz = require("./main");

describe ("fizzbuzz" , ()=>{
    it("returns fizzbuzz if divisible by both 3 and 5",() => {
        expect(fizzbuzz(30)).toBe("fizzbuzz")
    })
    it("returns fizz if divisible by 3",() => {
        expect(fizzbuzz(9)).toBe("fizz")
    })
    it("returns buzz if divisible by 5",() => {
        expect(fizzbuzz(50)).toBe("buzz")
    })
    it("returns number if not divisible by both 3 and 5",() => {
        expect(fizzbuzz(7)).toBe(7)
    })
});