// Check off specific tasks by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Delete a task with the trashcan icon
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// add a new task
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var newTask = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + newTask + "</li>")
    }
});

// Toggle the text input on the To Do List
$(".fa-edit").click(function() {
    $("input[type='text']").fadeToggle();
});