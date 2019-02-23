var rS = require('r-squared')

module.exports = adjRSquared = (x, y, cb) => {
  var calc = (rsquared, n, k) => {
    return 1 - ((1 - rsquared) * (n - 1)) / (n - k - 1)
  }

  rS.rSquared(x, y, (err, r2) => {
    if (err) cb(err)
    adjR2 = calc(r2, x.length,  1)
  cb(null, adjR2)
  })
}
