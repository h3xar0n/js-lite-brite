var main = function() {
  $('select-color').on('click', 
    function () {
      var selectedColor = $(this).attr('class');
  });
};

($document).ready(main);