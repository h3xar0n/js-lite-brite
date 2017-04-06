var main = function() {
  
  var colorClass = '';
  
  $('.select-color').on('click', 
    function() {
      var selectedColor = $(this).attr('class');
    
      switch (selectedColor) {
        case 'select-color magenta not-selected':
          colorClass = 'magenta';
        break;
        case 'select-color yellow not-selected':
          colorClass = 'yellow';
        break;
        case 'select-color cyan not-selected':
          colorClass = 'cyan';
        break;
      }
    
      $(this).removeClass('not-selected');
      $(this).siblings().addClass('not-selected');
  });
  
  $('.box').on('click',
    function() {
      $(this).addClass(colorClass);
  });
}

$(document).ready(main);