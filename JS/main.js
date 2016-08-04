/* Start script on page load */
$(document).ready(function () {
    // Create draggable element
    $("#draggable").draggable();
    // Create droppable elment
    $("#droppable").droppable({
        drop: function (event, ui) {
            // At dropping, add Class and show label
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
});

