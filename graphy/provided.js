// Generates a bar graph in the provided DOM element
function createGraph($element) {
    var rowCount = 5;
    
    for (var i=0; i < rowCount; i++) {
        
        $element.append(
            $('<div/>')
                
                .append(
                    $('<div/>')
                        .addClass('barHolder')
                        .append(
                            $('<div/>').addClass('bar')
                        )
                )
                .append(
                    $('<input/>')
                        .attr('type','text')
                        .addClass('barInput')
                        .val("100")
                )
        );
        
    }
}