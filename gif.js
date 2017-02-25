var animals = ["Horse", "Dog", "Cat", "Parrot"];
var moreGifs = [];

function getGif(event) {
    
	 event.preventDefault();
     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + this.textContent + "&api_key=dc6zaTOxFJmzC&r=json";         
	 $.ajax({url: queryURL, success: function(response){
	    	console.log(response);
	    	 
         var results = response.data;

         for (var i = 0; i < results.length; i++) {

        var gifDiv = $("<div>");
        var p = $("<p>");

        p.text(results[i].rating);

        var gifImage = $("<img>");

        gifImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.append(p);

        gifDiv.append(gifImage);


        $("#gif-view").prepend(gifDiv);
      
        }
	    	
	    	
	    	//$('#gifInfo').html(result.Id + "<img src='" + result.Url + "'>");
	     }});
}
    
function renderButtons(event) {

	if (event){
		event.preventDefault();
	};
	
    $("#buttons-view").empty();

    var textBox =  $("#gif-input");
    
    if (textBox[0].value){
        animals.push(textBox[0].value);
    }

    for (var i = 0; i < animals.length; i++) {

      // dynamicaly generating buttons for each item in the array
      // $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class to button
      a.addClass("animal, btn btn-default");
      // Adding a data-attribute
      a.attr("data-name", animals[i]);
      // Providing the initial button text
      a.text(animals[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
      
      a.click(getGif);
      
    }
}
     
$(document).ready(function() {
    	      	 
    	 $(document).on("click", "#addGif", renderButtons);
    	 renderButtons();

});