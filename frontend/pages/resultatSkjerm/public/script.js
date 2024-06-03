document.addEventListener("DOMContentLoaded", () => {
  const setupTimer = () => {
    const timerElement = document.querySelector(".timer");
    const nextButton = document.getElementById("next-button");
    let timerValue = Math.floor(Math.random() * 6) + 3; // 3 til 8 sekunder
    timerElement.textContent = timerValue.toString().padStart(2, "0");

    const countdown = () => {
      if (timerValue > 0) {
        timerValue--;
        timerElement.textContent = timerValue.toString().padStart(2, "0");
      } else {
        clearInterval(timerInterval);
        timerElement.style.display = "none";
        nextButton.style.display = "block";
      }
    };

    // Start nedtellingstimeren
    const timerInterval = setInterval(countdown, 1000);
  };

  const generateRandomStatistics = (count) => {
    let total = 100;
    let stats = [];

    for (let i = 0; i < count - 1; i++) {
      let value = Math.floor(Math.random() * total);
      stats.push(value);
      total -= value;
    }
    stats.push(total);
    return stats;
  };

  const createOptionElement = (option) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.innerHTML = `
            <span>${option.text}</span>
            <div class="progress-bar">
                <div class="progress" style="width: ${option.value}%;"></div>
            </div>
            <span>${option.value}%</span>
        `;
    return optionElement;
  };

  const setupOptions = () => {
    const optionsContainer = document.getElementById("options-container");
    const optionTexts = [
      "Hjelp dem!",
      "Forlat dem!",
      "Be om belønning",
      "Stjel fra dem",
    ];
    const statistics = generateRandomStatistics(optionTexts.length);

    let options = optionTexts.map((text, index) => ({
      text,
      value: statistics[index],
    }));

    // Sorter alternativene etter verdi i synkende rekkefølge
    options.sort((a, b) => b.value - a.value);

    // Legg til alternativene i DOM-en
    options.forEach((option) => {
      optionsContainer.appendChild(createOptionElement(option));
    });

    // Oppdater bekreftelsesmeldingen for å gjenspeile det mest stemte alternativet
    document.getElementById(
      "confirmation-message"
    ).textContent = `${options[0].text.toUpperCase()} ER PÅ VEI!`;
  };

  setupTimer();
  setupOptions();
});

setTimeout(function () {
  window.location.href =
    "/frontend/pages/feedBackSkjerm/sluttenAvForestillingen.html"; // Change this to the path of your final HTML file
}, 10000); // 5000 milliseconds = 5 seconds
