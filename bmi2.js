
function calculer() {
    var weight = document.getElementById("n1").value;
    var height = document.getElementById("n2").value;
    var bmi = weight / ((height / 100) ** 2);
    var result = document.getElementById("result");
    var img = document.getElementById("img");
    if (bmi < 16) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img1.jpeg";
    }
    else if (bmi >= 16 && bmi < 17) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img2.jpeg";
    }
    else if (bmi >= 17 && bmi < 18.5) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img3.jpeg";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img4.jpeg";
    }
    else if (bmi >= 25 && bmi < 30) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img5.jpeg";
    }
    else if (bmi >= 30 && bmi < 35) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img6.jpeg";
    }
    else if (bmi >= 35 && bmi < 40) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img7.jpeg";
    }
    else if (bmi >= 40) {
        result.innerHTML="your BMI: " + bmi;
        img.src = "img8.jpeg";
    }
}
