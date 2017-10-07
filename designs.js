// Color a square
$('#pixel_canvas').on("click", "td", function() {
    console.log('quack');
    $(this).css('background-color', $('#colorPicker').val());
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
    const row = '<tr></tr>';
    const square ='<td></td>';

    while (width > 0) {
        $('#pixel_canvas').append(row);
            let i = height
            while (i > 0) {
                $('#pixel_canvas tr:last').append(square);
                i --;
            }
        width --;
    }
}

// Default to 10/10
makeGrid(10,10);