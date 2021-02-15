var list;
$(document).ready(function () {
    var url = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json"
    $.ajax({
        type: "GET",
        url: url,
        data: "",
        dataType: "json",
        success: function (response) {
            var i =0;
            var select = $('#departamento');
            list = response;

            response.forEach(element => {
                console.log(element['ciudad']);
                var str = '<option value="'+element['departamento']+'">'+element['departamento']+'</option>';
                select.append(str);
                i++;
            });
        }
    });
});

function country(){  
    var depaName = $('#departamento').val();
    var city = $('#city');
    console.log(list);
    city.empty();
    list.forEach(element =>{
        if(element['departamento'] == depaName){
            console.log(element['ciudades']);
            element['ciudades'].forEach(ciudad =>{
                var str = '<option value="' + ciudad + '">'+ ciudad +'</option>';
                city.append(str);
            });
        }
    });
}

function validatePass(){
    const contraseña = $("#password").val();

    if (contraseña !== undefined && $("#Cpassword")!==undefined)
    {
        if (contraseña !== $("#Cpassword"))
        {
            alert("Contraseñas diferentes");
        }
    }
}
