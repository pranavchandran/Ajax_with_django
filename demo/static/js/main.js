$(document).ready(function(){

    var csrf = $("input[name=csrfmiddlewaretoken]").val();
    $(".btn").click(function(){
        $.ajax({
            url: '',
            type: 'get',
            data: {
                button_text: $(this).text()
            },
            success: function(response) {
                $(".btn").text(response.seconds)
                $("#seconds").append('<li class="list-group-item">' + response.seconds + '</li>')
            }
        })
    })

    $("#seconds").on('click', 'li', function(){
        $.ajax({
            url: '',
            type: 'post',
            data: {
                text: $(this).text(),
                csrfmiddlewaretoken: csrf
            },
            success: function(response) {
                // alert(response.data)
                $("#right").append('<li class="list-group">'+response.data+'</li>')
            }
        })
    })
})