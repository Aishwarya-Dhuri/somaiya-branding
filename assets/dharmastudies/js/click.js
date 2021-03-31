 $(".one").change(function () {
        
        $(this).find("option:selected").each(function () {
        
        var optionValue = $(this).attr("value");
        if (optionValue) {
            $(".box1").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else {
            $(".box1").hide();
        }
        });
        }).change();
        $(".two").change(function () {
        
        $(this).find("option:selected").each(function () {
        
        var optionValue = $(this).attr("value");
        if (optionValue) {
            $(".box2").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else {
            $(".box2").hide();
        }
        });
        }).change();
        $(".three").change(function () {
        
        $(this).find("option:selected").each(function () {
        
        var optionValue = $(this).attr("value");
        if (optionValue) {
            $(".box3").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else {
            $(".box3").hide();
        }
        });
        }).change();
        $(".four").change(function () {
        
        $(this).find("option:selected").each(function () {
        
        var optionValue = $(this).attr("value");
        if (optionValue) {
            $(".box4").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else {
            $(".box4").hide();
        }
        });
        }).change();
        $(".one").change(function () {
        $(".boxs").hide();
        
        });
        $(".two").change(function () {
        $(".boxs2").hide();
        
        });
        $(".three").change(function () {
        $(".boxs3").hide();
        
        });
        $(".four").change(function () {
        $(".boxs4").hide();
        
        });