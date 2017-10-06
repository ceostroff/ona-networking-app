$(document).ready(function(){
var publications = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // url points to a json file that contains an array of country names, see
  // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
  prefetch: '../data/ona.json'
});

// passing in `null` for the `options` arguments will result in the default
// options being used
$('#publications .typeahead').typeahead(null, {
  name: 'data',
  source: publications
});
    });
  