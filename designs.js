// Select color input
// Select size input


//   // Your code goes here!


// const canvas = document.querySelector('#pixelCanvas');
// const canvas = document.getElementById('#pixelCanvas');

function makeGrid() {
  let h = document.getElementById('inputHeight').value;
  let w = document.getElementById('inputWidth').value;

  let	canvas = $('#pixelCanvas');

canvas.children().remove();
  const table = document.querySelector('table');
  let c ;
  let r;
    for (let i = 1; i <= h; i++) {
      r =  document.createElement('tr');
      table.appendChild(r);
      for (let j = 1; j<= w; j++) {
        c = document.createElement('td');
        r.appendChild(c);
      }
      table.appendChild(r);
    }
    document.body.appendChild(table);

let cell = canvas.find('td');
cell.click(function() {
  const color = document.getElementById('colorPicker').value;
		$(this).attr('bgcolor', color);
	});
}

let submitQuery = $('input[type="submit"]');

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
