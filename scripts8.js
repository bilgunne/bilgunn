// Нийлбэр палиндром мөн эсэхийг шалгах
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function checkPalindromeSum() {
    const num = parseInt(document.getElementById("palindromeInput").value);
    const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const result = isPalindrome(sum) ? "Палимдром мөн байна." : "Палимдром биш байна.";
    document.getElementById("palindromeResult").innerText = `Sum is ${sum}. ${result}`;
}

//
function timeToCatchRabbit() {
    const distance = parseFloat(document.getElementById("distanceInput").value);
    const wolfSpeed = 25;
    const rabbitSpeed = 18;
    const relativeSpeed = wolfSpeed - rabbitSpeed;
    const timeInHours = distance / relativeSpeed;
    const minutes = Math.floor(timeInHours * 60);
    const seconds = Math.floor((timeInHours * 3600) % 60);
    document.getElementById("catchResult").innerText = `${minutes} minutes and ${seconds} seconds`;
}

// Problem 3: Find Entrance and Floor
function findEntranceAndFloor() {
    const doorNumber = parseInt(document.getElementById("doorInput").value);
    const floors = 9;
    const entrances = 3;
    const familiesPerFloor = 4;
    const totalDoors = floors * entrances * familiesPerFloor;
    const totalDoorsPerEntrance = floors * familiesPerFloor;
    
    const entrance = Math.ceil(doorNumber / totalDoorsPerEntrance);
    const floor = Math.ceil((doorNumber % totalDoorsPerEntrance || totalDoorsPerEntrance) / familiesPerFloor);
    
    document.getElementById("floorResult").innerText = 
        `Тоот: ${doorNumber}\n` +
        `Нийт орц: ${entrances}, Нийт давхрын тоо: ${floors}, Хаалгын тоо: ${totalDoors}\n` +
        `Орц: ${entrance}, Хаалга: ${floor}`;
}

// Хамгийн их ерөнхий хуваагч
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function calculateLCM() {
    const arr = document.getElementById("arrayInput").value.split(',').map(Number);
    if (arr.length !== 5) {
        document.getElementById("lcmResult").innerText = "Тоогоо гүйцэт оруулна уу.";
        return;
    }
    const lcmValue = arr.reduce((acc, num) => lcm(acc, num));
    document.getElementById("lcmResult").innerText = `ХИЕХ: ${lcmValue}`;
}

// Problem 5: Square or Square Root based on time of day
function calculatePowerOrRoot() {
    const number = parseFloat(document.getElementById("numberInput").value);
    const isMorning = document.getElementById("timeOfDay").value === "morning";
    const result = isMorning ? Math.pow(number, 2) : Math.sqrt(number);
    document.getElementById("powerResult").innerText = `Result: ${result}`;
}
