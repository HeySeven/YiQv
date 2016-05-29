/**
 * Created by shang on 16/5/29.
 */
$(function() {
    //fastclick插件
    FastClick.attach(document.body);
    $("body").on("click",'[data-dismiss="alert"]',function(){
        $(this).closest(".alert").fadeOut();
    })

});