// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
    // TODO: Add code to display the current date in the header of the page.
    var currentDay = dayjs().format("MMMM D, YYYY");
    $("#currentDay").text(currentDay);
  
    
    var currentHour = dayjs().format("H");
  
    
    var timeBlocks = $(".time-block");
  
    
    timeBlocks.each(function() {
      
      var blockHour = $(this).attr("id").split("-")[1];
  
    
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
  
      
      var textarea = $(this).find("textarea");
  
      
      var savedEvent = localStorage.getItem($(this).attr("id"));
  
    
      if (savedEvent) {
        textarea.val(savedEvent);
      }
  
        // TODO: Add a listener for click events on the save button. This code should
        // use the id in the containing time-block as a key to save the user input in
        // local storage. HINT: What does `this` reference in the click listener
        // function? How can DOM traversal be used to get the "hour-x" id of the
        // time-block containing the button that was clicked? How might the id be
        // useful when saving the description in local storage?
      var saveButton = $(this).find(".saveBtn");
      saveButton.on("click", function() {
        
        var eventText = textarea.val();
  
        
        localStorage.setItem($(this).closest(".time-block").attr("id"), eventText);
      });
    });
  });

  