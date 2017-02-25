var animals = ["Horse", "Dog", "Cat", "Parrot"];
var moreGifs = [];

  
     function getGif() {
       
       // var name = $(this).attr('data-name');
       var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC&r=json";
              
       $.ajax({
         url: queryURL
         , method: 'GET'
       }).done(function(response){
         $('#gifInfo').html(response.Id + "<img src='" + response.Url + "'>");
       });
     }

    
     function renderButtons() {

       $("#buttons-view").empty();

       
       for (var i = 0; i < animals.length; i++) {

         // dynamicaly generating buttons for each item in the array
         // $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
         var a = $("<button>");
         // Adding a class to button
         a.addClass("animal");
         // Adding a data-attribute
         a.attr("data-name", animals[i]);
         // Providing the initial button text
         a.text(animals[i]);
         // Adding the button to the buttons-view div
         $("#buttons-view").append(a);
       }
     }

     // function handles events where one button is clicked
     $("#add-gif").on("click", function(event) {
       event.preventDefault();

       // This line grabs the input from the textbox
       var gif = $("#gif-input").val().trim();

       // The item from the textbox is then added to our array
       animals.push(gif);

       // Calling renderButtons which handles the processing of array
       renderButtons();

     });

     // Generic function for displaying the gif
     $(document).on("click", ".gif", getGif);

     // Calling the renderButtons function to display the intial buttons
     renderButtons();