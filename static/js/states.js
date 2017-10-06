$(document).ready(function(){
    var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var states, substringRegex;

    // an array that will be populated with substring matches
    states = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        states.push(str);
      }
    });

    cb(states);
  };
};

var states = ['AL', 'AS', 'AZ', 'AK', 'CA',
  'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
  'ME', 'MD', 'MA', 'MI', 'MN',
  'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
  'NJ', 'NM', 'NY', 'NC', 'ND',
  'OH', 'OK', 'OR', 'PA', 'RI',
  'SC', 'SD', 'TN', 'TX', 'UT', 'VT',
  'VA', 'WA', 'WV', 'WI', 'WY'
];

$('#states .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});
    
   
    });
  