export default {
  intRange: function (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },
}
