// Color a square
$('#pixel_canvas').on("click", "td", function() {
    console.log('quack');
    $(this).css('background-color', $('#colorPicker').val());
})



$('#colorPicker').change(function() {
    console.log("Test")
    color = $(this).val();
    console.log(color);
})

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function() {
    // Stop Page refresh
    event.preventDefault();
    // Reset table
    $('#pixel_canvas tr').remove();

    // Pull current values.
    let width = $('#input_width').val();
    let height = $('#input_height').val();

    //Create the table
    makeGrid(width, height);
});


function makeGrid(height, width) {
    // Define elments:
    const row = '<tr><td></td></tr>';
    const square ='<td></td>';

    while (height > 0) {
        $('#pixel_canvas').append(row);
            let i = width
            while (i > 1) {
                $('#pixel_canvas tr:last').append(square);
                i --;
            }
        height --;
    }
}

// Default to 10/10
$(document).ready(makeGrid(10,10));