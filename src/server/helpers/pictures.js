module.exports = (elements) => {
  let pictures = []
  for (e in elements) {
    pictures.push(elements[e].picture)
  }
  return pictures
}