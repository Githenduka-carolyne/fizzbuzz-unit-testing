
function isfizzbuzzornot (i){

    if (i % 3 ===0 && i % 5 === 0) {
      return "fizzbuzz"
    }
    if (i % 3 ===0) {
      return "fizz"
    }
    if (i % 5 === 0) {
      return "buzz"
    }
    if (i%3 !== 0 && i%5 !== 0) {
      return i;
    }
  }

module.exports = isfizzbuzzornot;
