function addComment(beach_num){
    console.log($("#user_name").val());
    console.log($("#user_star").val());
    console.log($("#user_content").val());
    var data={
        "name": $("#user_name").val(),
        "password": $("#user_pwd").val(),
        "content": $("#user_content").val(),
        "star": $("#user_star").val()
    }
    // let _urlParams = new URL(window.location.href);
    // _urlParams = _urlParams.searchParams;
    // let _beach_num=_urlParams.get('num');

    $("#comments_list").append('<hr>'+'<h6 id="comment_name" class="fw-bold">'+$("#user_name").val()+'</h6><p>평점: '+$("#user_star").val()+'</p><p >'+$("#user_content").val()+'</p>');

    $.ajax({
        'url':'/board/write?bn='+String(beach_num), //express에서의 url
        'data':data, 
        'dataType':'json',
        'type':'POST',
        success:function(result){
          console.log(result);
        },complete:function(){
            console.log('완료');
        }
    });
}