
function calculer() {
    var weight = document.getElementById("n1").value;
    var height = document.getElementById("n2").value;
    var bmi=weight/((height/100)**2);
    if (bmi < 16){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img1.jpeg";
    }
    else if(bmi >= 16 && bmi < 17){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img2.jpeg";
    }
    else if(bmi >= 17 && bmi < 18.5){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img3.jpeg";
    }
    else if(bmi >= 18.5 && bmi < 25){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img4.jpeg";
    }
    else if(bmi >= 25 && bmi < 30){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img5.jpeg";
    }
    else if(bmi >= 30 && bmi < 35){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img6.jpeg";
    }
    else if(bmi >= 35 && bmi < 40){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img7.jpeg";
    }
    else if(bmi >= 40){
        document.getElementById("result").append("your BMI: "+ bmi)
        document.getElementById("img").src="img8.jpeg";
    }
}
