// Password
const correctPassword = "21 may";


// Gift click
function openGift() {

    document.getElementById("passwordModal")
        .classList.remove("hidden");

    document.getElementById("passwordInput").focus();
}


// Check Password
function checkPassword() {

    const input = document
        .getElementById("passwordInput")
        .value
        .toLowerCase()
        .trim();

    const error = document
        .getElementById("errorMessage");

    if (input === correctPassword) {

        // Close password popup
        document.getElementById("passwordModal")
            .classList.add("hidden");

        // Hide gift screen
        document.getElementById("giftBox")
            .classList.add("hidden");

        // Show birthday screen
        document.getElementById("birthday")
            .classList.remove("hidden");

        // Start celebration
        startCelebration();

    } else {

        error.innerText =
            "❌ Wrong Password! Try Again ❤️";

        document.getElementById("passwordInput")
            .value = "";

    }
}


// Close Password
function closePassword() {

    document.getElementById("passwordModal")
        .classList.add("hidden");

    document.getElementById("passwordInput")
        .value = "";

    document.getElementById("errorMessage")
        .innerText = "";
}


// Enter key se bhi unlock
document.getElementById("passwordInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });


// Celebration
function startCelebration() {

    // Confetti
    createConfetti();

    // Fireworks
    createFireworks();

    // Repeat fireworks
    setInterval(createFireworks, 2500);

}


// Falling Confetti
function createConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "🌟",
        "🎈"
    ];

    for (let i = 0; i < 50; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerText =
            emojis[Math.floor(
                Math.random() * emojis.length
            )];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 7000);

    }

}


// Fireworks / Crackers
function createFireworks() {

    const crackers = [
        "🎆",
        "🎇",
        "✨",
        "💥"
    ];

    for (let i = 0; i < 8; i++) {

        const firework =
            document.createElement("div");

        firework.classList.add("firework");

        firework.innerText =
            crackers[Math.floor(
                Math.random() * crackers.length
            )];

        firework.style.left =
            Math.random() * 90 + "vw";

        firework.style.top =
            Math.random() * 70 + "vh";

        firework.style.animationDelay =
            Math.random() * 1 + "s";

        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);

    }

}


// Make A Wish button
function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.innerText = "❤️";

        heart.style.position = "fixed";
        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "0";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "999";

        heart.style.transition =
            "transform 3s, opacity 3s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-100vh) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 3500);

    }

}