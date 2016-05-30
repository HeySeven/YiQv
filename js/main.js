/**
 * Created by shang on 16/5/29.
 */
$(function() {
    //fastclick插件
    FastClick.attach(document.body);
    $("body").on("click",'[data-dismiss="alert"]',function(){
        $(this).closest(".alert").fadeOut();
    })
    $("body").on("click",'.audio-btn',function(){
        var eleAudio = $(this).children("audio").get(0);
        var $iconVoice = $(this).children(".icon-voice");
        eleAudio.play();
        $iconVoice.addClass("working");
        eleAudio.onended=function(){
            $iconVoice.removeClass("working");
        }
    })


});