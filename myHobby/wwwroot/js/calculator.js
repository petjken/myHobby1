$(document).ready(function () {
    // This triggers when the button is clicked
    $("#btnCalculate").click(function () {

        // 1. Get the values from the input boxes
        var hours = $("#hours").val();
        var rate = $("#rate").val();

        // 2. Requirement: Validation for a positive number
        // (Even though the HTML has min=1, we check here too for safety)
        if (hours > 0 && !isNaN(hours)) {

            // 3. Perform the calculation
            var total = (parseFloat(hours) * parseFloat(rate)).toFixed(2);

            // 4. Requirement: Output the total to the non-editable box
            $("#totalOutput").val("$" + total);

        } else {
            // If they entered 0 or a negative number
            alert("Please enter a valid, positive number of hours.");
            $("#totalOutput").val("");
        }
    });
});