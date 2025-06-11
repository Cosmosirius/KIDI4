// MATH
function showForm() {
    let shape = document.getElementById("shapeSelect").value;
    document.getElementById("rectangleForm").style.display = (shape == "1") ? "block" : "none";
    document.getElementById("triangleForm").style.display = (shape == "2") ? "block" : "none";
    document.getElementById("circleForm").style.display = (shape == "3") ? "block" : "none";
    document.getElementById("result").innerHTML = "";
}

function calculateArea() {
    let shape = document.getElementById("shapeSelect").value;
    let result = "";

    if (shape == "1") {
        let length = document.getElementById("inputLength").value;
        let width = document.getElementById("inputWidth").value;
        let area = length * width;
        result = `Length × Width = ... cm<sup>2</sup><br>${length} × ${width} = ${area} cm<sup>2</sup>`;
    } else if (shape == "2") {
        let base = document.getElementById("inputBase").value;
        let height = document.getElementById("inputHeight").value;
        let area = (base * height) / 2;
        result = `½ × base × height = ... cm<sup>2</sup><br>½ × ${base} × ${height} = ${area} cm<sup>2</sup>`;
    } else if (shape == "3") {
        let radius = document.getElementById("inputRadius").value;
        let area = Math.PI * radius * radius;
        result = `π × radius<sup>2</sup> ≈ ... cm<sup>2</sup><br>π × ${radius}² ≈ ${area.toFixed(2)} cm<sup>2</sup>`;
    }

    document.getElementById("result").innerHTML = `<strong>Result:</strong><br>${result}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("shapeSelect").addEventListener("change", showForm);
    document.querySelector(".btn.btn-primary").addEventListener("click", function (e) {
        e.preventDefault();
        calculateArea();
    });
});

// INFORMATICS
function conversionBin() {
    let dec = document.getElementById("inputDecimal").value;
    let bin = "";
    let num = parseInt(dec);

    if (isNaN(num) || num < 0) {
        document.getElementById("resultM").innerHTML = `<strong>Please enter a valid non-negative number.</strong>`;
        return;
    }

    if (num === 0) {
        bin = "0";
    } else {
        while (num >= 1) {
            bin = (num % 2) + bin;
            num = Math.floor(num / 2);
        }
    }

    document.getElementById("resultM").innerHTML = `<strong>Result:</strong><br>${bin}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnInfo").addEventListener("click", function (e) {
        e.preventDefault();
        conversionBin();
    });
});

// Physic
function calculateForce() {
    let mass = document.getElementById("inputMass").value;
    let accel = document.getElementById("inputAcceleration").value;

    if (mass === "" || accel === "") {
        document.getElementById("resultF").innerHTML = `<strong>Result:</strong><br>Masukkan nilai massa dan percepatan!`;
        return;
    }

    let force = mass * accel;
    let resultF = `F = m × a<br>F = ${mass} × ${accel}<br>F = ${force} N (Newton)`;

    document.getElementById("resultF").innerHTML = `<strong>Result:</strong><br>${resultF}`;
}

document.getElementById("btnPhysic").addEventListener("click", calculateForce);

// CHEMISTRY
function convertTemperature() {
    let inputTemp = parseFloat(document.getElementById("inputForm").value);
    let fromUnit = document.getElementById("formSelect1").value;
    let toUnit = document.getElementById("toSelect").value;
    let result = "";
    let explanation = "";

    if (isNaN(inputTemp)) {
        document.getElementById("resultT").innerHTML = `<strong>Result:</strong><br>Masukkan nilai suhu yang valid!`;
        return;
    }

    if (fromUnit === "1" && toUnit === "2") {
        let calculation = (inputTemp * 9 / 5) + 32;
        result = `${calculation.toFixed(2)} °F`;
        explanation = `F = (C × 9/5) + 32 <br> F = (${inputTemp} × 9/5) + 32 <br> F = ${result}`;
    } else if (fromUnit === "1" && toUnit === "3") { 
        let calculation = inputTemp + 273.15;
        result = `${calculation.toFixed(2)} K`;
        explanation = `K = C + 273.15 <br> K = ${inputTemp} + 273.15 <br> K = ${result}`;
    } else if (fromUnit === "2" && toUnit === "1") { 
        let calculation = (inputTemp - 32) * 5 / 9;
        result = `${calculation.toFixed(2)} °C`;
        explanation = `C = (F - 32) × 5/9 <br> C = (${inputTemp} - 32) × 5/9 <br> C = ${result}`;
    } else if (fromUnit === "2" && toUnit === "3") { 
        let calculation = ((inputTemp - 32) * 5 / 9) + 273.15;
        result = `${calculation.toFixed(2)} K`;
        explanation = `K = ((F - 32) × 5/9) + 273.15 <br> K = ((${inputTemp} - 32) × 5/9) + 273.15 <br> K = ${result}`;
    } else if (fromUnit === "3" && toUnit === "1") { 
        let calculation = inputTemp - 273.15;
        result = `${calculation.toFixed(2)} °C`;
        explanation = `C = K - 273.15 <br> C = ${inputTemp} - 273.15 <br> C = ${result}`;
    } else if (fromUnit === "3" && toUnit === "2") { 
        let calculation = ((inputTemp - 273.15) * 9 / 5) + 32;
        result = `${calculation.toFixed(2)} °F`;
        explanation = `F = ((K - 273.15) × 9/5) + 32 <br> F = ((${inputTemp} - 273.15) × 9/5) + 32 <br> F = ${result}`;
    } else {
        result = `${inputTemp}`;
        explanation = `Nilai tetap: ${inputTemp}`;
    }

    document.getElementById("resultT").innerHTML = `<strong>Result:</strong><br>${explanation}`;
}

document.getElementById("btnChemistry").addEventListener("click", convertTemperature);

// BIOLOGY
function calculateBMI() {
    let weight = parseFloat(document.getElementById("inputW").value);
    let heightCm = parseFloat(document.getElementById("inputH").value);
    let heightM = heightCm / 100;

    if (isNaN(weight) || isNaN(heightM) || heightM <= 0 || weight <= 0) {
        document.getElementById("resultBmi").innerHTML = `<strong>Result:</strong><br>Masukkan berat dan tinggi yang valid!`;
        return;
    }

    let bmi = weight / (heightM * heightM);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    let result = `BMI = weight (kg) ÷ (height (m) × height (m))<br>
                      BMI = ${weight} ÷ (${heightM} × ${heightM})<br>
                      BMI = ${bmi.toFixed(2)}<br><br>
                      <strong>Kategori:</strong> ${category}`;

    document.getElementById("resultBmi").innerHTML = `<strong>Result:</strong><br>${result}`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnBiology").addEventListener("click", calculateBMI);
});