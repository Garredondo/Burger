$(function(){
    $("#submit").on("click", function (event) {
        event.preventDefault();

        var newEntry = {
            name: $("#new-burger").val()
        };
        console.log(newEntry);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newEntry
        }).then(function () {
            location.reload();
        });
        
    });


    $(".moveBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        var eatIt = {
            id: $(this).data("id")
        };
    
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatIt
        }).then(function () {
            location.reload();
        });
    });
});
