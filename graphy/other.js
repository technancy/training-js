function useOneInput(index, el) {   
    var $this = $(el);
    var value = $this.val();
    var $bar = $this.siblings().find('.bar');
    var maxWidth = $this.siblings('.barHolder').width();
    var newWidth = percentToWidth(value,maxWidth);
    setBarWidth($bar,newWidth);
    $bar.off('click');
    addBarClickEvent($bar,value);
}

function percentToWidth(percent,maxWidth) {
    var p = percent;
    var w = maxWidth;
    return  isNaN(p)?0:p<0?0:p>100?w:p/100*w;
}

function setBarWidth($bar,newWidth) {
    $bar.width(newWidth);
}

function regraph() {
    $allInputs = $('.barInput');
    $allInputs.each(useOneInput);
}

function addBarClickEvent($bar,value) {
    $bar.click(
        function(){
                alert(value);
            }
    );
}

$('document').ready(function() {
        createGraph($('#grapher'));
        $('#graphButton').click(regraph);
        regraph();
    }
);