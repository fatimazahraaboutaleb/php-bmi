$("button").on("click",function(){
    var weight=$("#n1").val();
    var height=$("#n2").val();
    var bmi=weight/((height/100)**2);
    var result=$("#result");
    var img=$("#img");
    if (bmi < 16){
        result.text("your BMI:"+bmi);
        img.attr("src","img1.jpeg");
    }
    else if(bmi >= 16 && bmi < 17){
        result.text("your BMI:"+bmi);
        img.attr("src","img2.jpeg");
    }
    else if(bmi >= 17 && bmi < 18.5){
        result.text("your BMI:"+bmi);
        img.attr("src","img3.jpeg");
    }
    else if(bmi >= 18.5 && bmi < 25){
        result.text("your BMI:"+bmi);
        img.attr("src","img4.jpeg");
    }
    else if(bmi >= 25 && bmi < 30){
        result.text("your BMI:"+bmi);
        img.attr("src","img5.jpeg");
    }
    else if(bmi >= 30 && bmi < 35){
        result.text("your BMI:"+bmi);
        img.attr("src","img6.jpeg");
    }
    else if(bmi >= 35 && bmi < 40){
        result.text("your BMI:"+bmi);
        img.attr("src","img7.jpeg");
    }
    else if(bmi >= 40){
        result.text("your BMI:"+bmi);
        img.attr("src","img8.jpeg");
    }
})
