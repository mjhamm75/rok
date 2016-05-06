module.exports = function() {
  if(process.env.NODE_ENV === 'production') {
    return 'pk_live_HokmMuGhJc1aXfTeUzGKlWLz'
  } else {
    return 'pk_test_w9KGS6vArMrXk5kTzmQB1KKP';
  }
}

// module.exports = function() {
//   return 'pk_test_w9KGS6vArMrXk5kTzmQB1KKP';
// }
