var main = function() {

  var colorClass = '';

  $('select-color').on('click', 
    function () {
      var selectedColor = $(this).attr('class');

      switch (selectedColor) {
        case 'select-color magenta not-selected':
          colorClass = 'magenta';
        break;
        case 'select-color cyan not-selected':
          colorClass = 'cyan';
        break;
        case 'select-color yellow not-selected':
          colorClass = 'yellow';
        break;
      }

      $(this).removeClass('not-selected');
      $(this).siblings().addClass('not-selected');
  });
};

($document).ready(main);