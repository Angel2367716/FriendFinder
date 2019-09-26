//Form inputs
$("#submit").on("click", function(){

    //validation 
    function validateForm(){
        let isItValid = true;
        $(".form-control").each(function(){
            if($(this).val()=== ""){
                isItValid = false;
            }
        });

        $(".chosen-select").each(function(){
            if($(this).val()===""){
                isItValid = false; 
            }
        });
        return isItValid;
    }
    if (validateForm()){
        let userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        let currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", userData, function(data){
            alert("working");
        })
    }
})