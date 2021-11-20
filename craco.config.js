module.exports = {
  style: {
    postcss: {
      plugins: [
        require('./node_modules/tailwindcss'),
        require('./node_modules/autoprefixer'),
      ],
    },
  },
}