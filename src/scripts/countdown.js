// Set the target date and time for the countdown using UTC (UTC-5), if Daylight Savings (UTC-6)
const targetDate = new Date('2024-04-08T18:36:30Z').getTime();

// Function to update the countdown clock
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  if (timeLeft <= 0) {
    // If the target date has passed, handle it here
    document.getElementById('countdown').innerHTML = 'Countdown expired';
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML element with the countdown
    document.getElementById('countdown').innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
  }
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);