$(function(){
    $("#submit").on("click", function (event) {
        event.preventDefault();

        var newEntry = {
            burger_name: $("#newBurger").val()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newEntry
        }).then(function () {
            console.log("JS - Created new burger!");
            location.reload();
        });
    });


    $(".moveBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        var eatIt = {
            devoured: true
        }

        $.ajax("/api/bugers/" + id, {
            type: "PUT",
            data: eatIt
        }).then(function () {
            console.log("JS - Burger has been eaten." + eatIt.devoured);
            location.reload();
        });
    });
});
