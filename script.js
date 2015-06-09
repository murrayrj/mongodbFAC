var search = $('#search'),
    create = $('#create'),
    fact = $('#fact'),
    facName = $('#facName'),
    addUser = $('#addUser'),
    results = $('#results');

search.click(function() {
    var name = facName.val();
    $.get( '/read&' + name, function(data) {
        if (data === "[]"){
            addUser.removeClass('hidden');
            search.addClass('hidden');
        } else {
            var dataFormat = JSON.parse(data)[0];
            console.log(data);
            results.append("<p>Name: " + dataFormat.name + "</p>");
            results.append("<p>Fun fact: " + dataFormat.fact + "</p>");
        }
    });
});

create.click(function() {
    var user = JSON.stringify({name : facName.val(), fact : fact.val()});
    $.post('/create', user, function(data) {
        console.log('User Created');
    });
});
