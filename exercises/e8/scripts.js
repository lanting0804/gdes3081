fetch("data.json")
.then(function (response) {
    console.log(response);
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.dogs.length; i++) {
        $(".dogs").append(
            '<div class="dog-item">' +
            '<a href="' + data.dogs[i].link + '" target=_blank>' +
            '<img src="images/' + data.dogs[i].photo + '">' +
            '<div class="dog-content">' +
            '<h2>' + data.dogs[i].name + '</h2>' +
            '<p>' + data.dogs[i].description + '</p>' +
            '</div>' +
            '</a>' +
            '</div>'
        )
    }
})
.catch(function (error) {
    $('h1').html('Error!')
    console.log(error);
})

  
  
  
