$("button").on("click",function(){
    var weight=$("#n1").val();
    var height=$("#n2").val();
    var bmi=weight/((height/100)**2);
    if (bmi < 16){
        $("#img").attr("src","img1.jpeg");
    }
    else if(bmi >= 16 && bmi < 17){
        $("#img").attr("src","img2.jpeg");
    }
    else if(bmi >= 17 && bmi < 18.5){
        $("#img").attr("src","img3.jpeg");
    }
    else if(bmi >= 18.5 && bmi < 25){
        $("#img").attr("src","img4.jpeg");
    }
    else if(bmi >= 25 && bmi < 30){
        $("#img").attr("src","img5.jpeg");
    }
    else if(bmi >= 30 && bmi < 35){
        $("#img").attr("src","img6.jpeg");
    }
    else if(bmi >= 35 && bmi < 40){
        $("#img").attr("src","img7.jpeg");
    }
    else if(bmi >= 40){
        $("#img").attr("src","img8.jpeg");
    }
})
