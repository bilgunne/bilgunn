// 1-р бодлого: Цифрүүдийн нийлбэр палиндром эсэх
function checkPalindromeSum() {
    const input = parseInt(document.getElementById("task1Input").value);
    if (isNaN(input)) {
        document.getElementById("task1Result").innerText = "Та тоо оруулна уу!";
        return;
    }
    let sum = 0, num = input;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    const isPalindrome = sum.toString() === sum.toString().split('').reverse().join('');
    document.getElementById("task1Result").innerText = 
        `Нийлбэр ${sum} нь ${isPalindrome ? "палиндром байна." : "палиндром биш байна."}`;
}

// 2-р бодлого: Чоно туулайг гүйцэх хугацаа
function calculateCatchUpTime() {
    const distance = parseFloat(document.getElementById("distanceInput").value);
    const wolfSpeed = 25, rabbitSpeed = 18;
    if (isNaN(distance) || distance <= 0) {
        document.getElementById("task2Result").innerText = "Зөв утга оруулна уу!";
        return;
    }
    const relativeSpeed = wolfSpeed - rabbitSpeed;
    const timeInSeconds = (distance / relativeSpeed) * 3600;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.round(timeInSeconds % 60);
    document.getElementById("task2Result").innerText = 
        `${minutes} минут ${seconds} секунд`;
}

// 3-р бодлого: Орц, давхар, хаалгыг тооцох
function findApartmentDetails() {
    const apartmentNumber = parseInt(document.getElementById("apartmentInput").value);
    const apartmentsPerFloor = 4, floorsPerEntrance = 9, entrances = 3;
    const totalApartmentsPerEntrance = apartmentsPerFloor * floorsPerEntrance;
    if (isNaN(apartmentNumber) || apartmentNumber <= 0 || 
        apartmentNumber > totalApartmentsPerEntrance * entrances) {
        document.getElementById("task3Result").innerText = "Буруу тоот өгөгдсөн байна!";
        return;
    }
    const entrance = Math.ceil(apartmentNumber / totalApartmentsPerEntrance);
    const remaining = apartmentNumber - (entrance - 1) * totalApartmentsPerEntrance;
    const floor = Math.ceil(remaining / apartmentsPerFloor);
    const door = remaining - (floor - 1) * apartmentsPerFloor;
    document.getElementById("task3Result").innerText = 
        `${entrance}-р орц, ${floor}-р давхар, ${door}-р хаалга`;
}

// 4-р бодлого: Хамгийн бага ерөнхий хуваагдагч
function calculateArrayLCM() {
    const input = document.getElementById("arrayInput").value.split(',').map(Number);
    if (input.some(isNaN)) {
        document.getElementById("task4Result").innerText = "Зөв тоонууд оруулна уу!";
        return;
    }
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => (a * b) / gcd(a, b);
    const result = input.reduce((acc, curr) => lcm(acc, curr), input[0]);
    document.getElementById("task4Result").innerText = `Хамгийн бага ерөнхий хуваагдагч: ${result}`;
}

// 5-р бодлого: Өглөө ба оройны тооцоолол
function calculateBasedOnTime() {
    const userInput = parseFloat(document.getElementById("userInput").value);

    if (isNaN(userInput)) {
        document.getElementById("result").innerText = "Зөв тоо оруулна уу!";
        return;
    }

    // Одоогийн цагийг авах
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let result;
    if (currentHour >= 0 && currentHour < 12) {
        // Өглөө: Тооны 2 зэрэг
        result = `Өглөө байна. ${userInput}-ийн квадрат: ${userInput ** 2}`;
    } else {
        // Орой: Тооны язгуур
        result = `Орой байна. ${userInput}-ийн язгуур: ${Math.sqrt(userInput).toFixed(2)}`;
    }

    // Үр дүнг харуулах
    document.getElementById("result").innerText = result;
}
