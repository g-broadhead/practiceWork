const adder = (a, b) => {
  a = parseInt(a)
  b = parseInt(b)

  if (isNaN(a) || isNaN(b)) {
    return null
  }

  return a + b
}


module.exports = adder