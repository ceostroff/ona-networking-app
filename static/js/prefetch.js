function searchPublication(){
    var data = 'static/data/ona.csv'
    var search_data = data.map(function(d){return d['fullname']});
    
    var matches = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: matches
    });
    
    $('#states .typeahead').typeahead({
        highlight: true,
        minLength: 2
    },
                                      
    {
     name: 'states-data',
        source: matches
    });
    