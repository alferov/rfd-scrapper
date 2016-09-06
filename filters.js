module.exports = {
  trim: (value) => {
    return typeof value === 'string' ? value.trim() : value
  }
}
