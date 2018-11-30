module.exports = (elements) => {
  let tags = []
  for (e in elements) {
    tags.push(elements[e].interest)
  }
  return tags
}