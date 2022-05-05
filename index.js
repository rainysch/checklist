$(document).ready(function(){
    $("#add-button").click(function(){
        //doesn't submit task if text field is empty
        if($("#task-input").val()===""){
            return
        }

        $("#container").append('<span><input type="checkbox" />' + $("#task-input").val() + '<br /></span>');
        $("#task-input").val("");

        $("input:checkbox").click(function(){
            $(this).parent().toggleClass("completed");
        });
    });

    //submits task when pressing enter
    $("#task-input").keypress(function(e){
        if(e.keyCode===13){
            $("#add-button").click();
        }
    })

    $("#task-input").focus()
});