$(function () {
    let Page = 0;
    let name = "";
    $("header").hide();
    $(".loading").fadeOut(1500, function () {
        $(".main").fadeIn(1000, function () {
            $(".title h1").animate(
                {letterSpacing: 20},
                800,
                "swing",
                function () {
                    $(".title").fadeOut(2000).queue(function () {
                        $(".main").remove();
                        $(".loading").remove();
                        $("html").css("background-color", "#F5F5F5")
                        $(".content").fadeIn(500)
                        $("#ham-menu").fadeIn(1200)
                        $("header").fadeIn(1000);
                        $("footer").fadeIn(1000)
                        Page=1;
                    });
                }
            );
        });

    });
    let id;
    $("#top").click(function () {
        if(Page===1){
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        }else{
            switch (Page) {
                case 1:
                    name=".content";
                    break;
                case 2:
                    name=".main_member";
                    break;
                case 3:
                    name=".join_contents";
                    break;
                case 4:
                    name=".connect_contents";
                    break;
            }
            $(name).fadeOut(500,function () {
                $(".content").fadeIn(500)
                Page=1;
            });

        }
    });

    $("#member").click(function () {
        if(Page===2){
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        }else{
            switch (Page) {
                case 1:
                    name=".content";
                    break;
                case 2:
                    name=".main_member";
                    break;
                case 3:
                    name=".join_contents";
                    break;
                case 4:
                    name=".connect_contents";
                    break;
            }
            $(name).fadeOut(500,function () {
                $(".main_member").fadeIn(500)
                Page=2;
            });

        }
    });

    $("#join").click(function () {
        if(Page===3){
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        }else{
            switch (Page) {
                case 1:
                    name=".content";
                    break;
                case 2:
                    name=".main_member";
                    break;
                case 3:
                    name=".join_contents";
                    break;
                case 4:
                    name=".connect_contents";
                    break;
            }
            $(name).fadeOut(500,function () {
                $(".join_contents").fadeIn(500)
                Page=3;
            });

        }
    });

    $("#connect").click(function () {
        if(Page===4){
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        }else{
            switch (Page) {
                case 1:
                    name=".content";
                    break;
                case 2:
                    name=".main_member";
                    break;
                case 3:
                    name=".join_contents";
                    break;
                case 4:
                    name=".connect_contents";
                    break;
            }
            $(name).fadeOut(500,function () {
                $(".connect_contents").fadeIn(500)
                Page=4;
            });

        }
    });


})


