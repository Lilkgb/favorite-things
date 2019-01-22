$(document).ready(function() {
  $("#favoriteThing").submit(function(event) {
    var stuff = ["favoriteFood","favoriteColor",'favoriteMovie'];
    stuff.forEach(function(favorite) {
      var userInput = $("input#" + favorite).val();
      $("ul").append("<li>" + userInput + "</li>");
    });

      $("#results").show();

    event.preventDefault();
    });
  });


//
    // var favoriteFood = $("input#favoriteFood").val();
    // console.log(favoriteFood);
    // var favoriteColor = $("input#favoriteColor").val();
    // // console.log(favoriteColor);
    // var favoriteMovie = $("input#favoriteMovie").val();
    // console.log(favoriteMovie);
    // var results = document.getElementById("list");
    //
    // for(var i=0;i<stuff.length;i++){
    //   var item = stuff[i];
    //   var elem = document.createElement("li");
    //     elem.value=item[0];
    //     elem.innerHTML= item[1];
    //
    //     results.appendChild(elem);
