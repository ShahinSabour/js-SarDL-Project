$(document).ready(function () {

    $(".js-spot").click(function (){
        $(".js-menu").slideToggle()
    })


    $(".media .fa-heart").click(function (){
        if($(".heart-fill").css('display') != 'none'){
            $(".heart-fill").css({"display":"none"})
            $(".heart-empty").css({"display":"inline"})
        }else{
            $(".heart-empty").css({"display":"none"})
            $(".heart-fill").css({"display":"inline"})
        }
    })


    $(".sections .sections-head span").click(function(){
        s = $(this).attr('data-s')

        $(this).parents(".sections").find(".s").fadeOut("none")
        $(this).parents(".sections").find("."+s).fadeIn("inline-block")

        $(this).parents(".sections-head").find("span").removeClass("active-span")
        $(this).addClass("active-span")

    })

    $(".download-files .content-head span").click(function(){
        d = $(this).attr('data-download')

        $(this).parents(".download-files").find(".coverage .content-info").fadeOut("none")
        $(this).parents(".download-files").find('.coverage').find("."+d).fadeIn("block")

        $(this).parents(".content-head").find("span").removeClass("active-span")
        $(this).addClass("active-span")

    })

    $(".js-item").click(function (){
        $(this).parents(".items").find(".delete").fadeToggle()

        $("#id").css("display", "none");
        $("#id").css("display", "block");
    })


    $(".js-search").click(function (){
        $(this).parents(".submenu_7").find(".link-groups").hide()
        $(this).parents(".submenu_7").find(".menu").hide()
        $(this).parents(".submenu_7").find(".center-menu").show()

    })

    $(".delete-search").click(function (){
        $(this).parents(".submenu_7").find(".center-menu").hide()
        $(this).parents(".submenu_7").find(".link-groups").show()
        $(this).parents(".submenu_7").find(".menu").show()
    })


    $(".products-3 .equipment-box").click(function (){
        $(this).parents(".conner-cover").find(".equipment-box").removeClass("active-box")
        $(this).addClass("active-box")
    })



})
