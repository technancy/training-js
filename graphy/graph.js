// This function takes a text box as input and adjusts the bar graph. 
// You have to fill in missing pieces in the other functions.
  function useOneInput(index, el) {
      
      // Use $ to turn the HTML element into a jQuery object
      var $this = $(el);
      
      // Get the value from the input box. $this.val()
      // returns a string; parseInt() makes it a number.
      var value = $this.val();
      // Find the bar corresponding to this input
      var $bar = $this.siblings().find('.bar');
      
      // Use percentToWidth to set the new width of the bar
      var maxWidth = $this.siblings('.barHolder').width();
      var newWidth = percentToWidth(value,maxWidth);
      

      setBarWidth($bar,newWidth);
      
      
      // Remove the old event on the bar
      $bar.off('click');
      
      addBarClickEvent($bar,value);
      
  }

    // Exercise 2
    function percentToWidth(percent,maxWidth) {

        // Takes a number between 0 and 100 and a maximum
        // width, and returns the fraction of the maximum width
        // that is given by the number out of 100.
        // percentToWidth(50,250) = 125
        // percentToWidth(75,1000) = 750
        // if percent is not a number, it should return 0
        // if percent is smaller than 0, it should return 0
        // if percent is greater than 100, it should return maxWidth
        var perc = percent;
        var maxW = maxWidth;

        return isNaN(perc) ? 0 : 
        perc < 0 ? 0 : 
        perc > 100 ? maxW : 
        (perc / 100) * maxW; 

        /*if(isNaN(perc) || perc < 0 ){
            return 0;
        }
        else if(perc > 100) {
            return maxW;
        }
        else {
            var out = (perc / 100) * maxW;
            return out;
        }*/
        
    }


    // Exercise 3
    function setBarWidth($bar,newWidth) {
        // set the width of $bar to width
        // using $bar.width(newWidth);
        $bar.width(newWidth);
    }

    // Exercise 4
    function regraph() {
        // the function that gets called when
        // the user clicks.
        $allInputs = $('.barInput');
        
        // jQuery code that selects all the inputs
        $allInputs.each(useOneInput);
            
    }

    // Exercise 5
    function addBarClickEvent($bar,value) {
        // add a click event to the bar that 
        // pops up an alert with the bars value
        $bar.click(
             function(){
                    console.log("Look:" + value);
                }
        );
    }

// Provided jQuery code that creates the graph, attaches a click 
// handler, and draws the initial bar graph.
    $('document').ready(function() {
        createGraph($('#grapher'));
        $('#graphButton').click(regraph);
        regraph();
    }
    
);