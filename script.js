
// add click events to all cells
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }

// on color selection return color:
var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value; // sets color to default(black);
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
});
