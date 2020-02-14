module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester'
  },
  moduleFileExtensions: ['js', 'svelte'],
  bail: false,
  verbose: true
};
