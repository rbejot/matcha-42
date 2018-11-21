module.exports = (ft) => {
  return (req, res, next) => {
    Promise.resolve(ft(req, res, next)).catch(next)
  }
}