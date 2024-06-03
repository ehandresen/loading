document.getElementById("avatar-image").addEventListener("click", function () {
  document.getElementById("avatar-modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("avatar-modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  resetPlayerDetails();
});

document.getElementById("time-stat").addEventListener("click", function () {
  updateTimeStatistics();
});

document.getElementById("stats-stat").addEventListener("click", function () {
  updateGameStatistics();
  document.getElementById("game-stats").style.display = "block"; // Show stats on click
});

document.getElementById("details-stat").addEventListener("click", function () {
  updatePlayerDetails();
  document.getElementById("details-stats").style.display = "flex"; // Show details on click
});

function updateTimeStatistics() {
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-text">Time Statistics</div>
    <div class="timer-container">
      <div class="timer">
        <div class="timer-text" id="timer-text">30:00</div>
      </div>
    </div>
    <div class="modal-stats">
      <div class="stat" id="time-stat">
        <div>Time</div>
        <img
          src="/frontend/pictures/time.png"
          alt="Time"
          class="stat-icon"
        />
      </div>
      <div class="stat" id="stats-stat">
        <div>Stats</div>
        <img
          src="/frontend/pictures/stats.png"
          alt="Stats"
          class="stat-icon"
        />
      </div>
      <div class="stat" id="details-stat">
        <div>Details</div>
        <img
          src="/frontend/pictures/details.png"
          alt="Details"
          class="stat-icon"
        />
      </div>
    </div>
  `;
  startTimer();
  addStatEventListeners();
}

function updateGameStatistics() {
  document.getElementById("modal-content").innerHTML = `
  <div class="modal-text">Game Statistics</div>
        <div class="stats-container">

          <h3 class="stats-title">Stats</h3>
          <div class="stat-flex stat hp">
            <p class="stat-label">HP</p>
            <p class="stat-value">55</p>
            <div class="stat-bar">
              <div class="stat-bar-fill"></div>
            </div>
          </div>
          <div class="stat-flex stat attack">
            <p class="stat-label">Attack</p>
            <p class="stat-value">46</p>
            <div class="stat-bar">
              <div class="stat-bar-fill"></div>
            </div>
          </div>
          <div class="stat-flex stat defense">
            <p class="stat-label">Defense</p>
            <p class="stat-value">46</p>
            <div class="stat-bar">
              <div class="stat-bar-fill"></div>
            </div>
          </div>
          <div class="stat-flex stat sp-atk">
            <p class="stat-label">Sp.Atk</p>
            <p class="stat-value">33</p>
            <div class="stat-bar">
              <div class="stat-bar-fill"></div>
            </div>
          </div>
          <div class="stat-flex stat sp-def">
            <p class="stat-label">Sp.Def</p>
            <p class="stat-value">44</p>
            <div class="stat-bar">
              <div class="stat-bar-fill"></div>
            </div>
          </div>
          <div class="stat-flex stat speed">
            <p class="stat-label">Speed</p>
            <p class="stat-value">34</p>
            <div class="stat-bar">
              <div class="stat-bar-fill"></div>
            </div>
          </div>
        </div>
        <div class="modal-stats">
          <div class="stat" id="time-stat">
            <div>Time</div>
            <img
              src="/frontend/pictures/time.png"
              alt="Time"
              class="stat-icon"
            />
          </div>
          <div class="stat" id="stats-stat">
            <div>Stats</div>
            <img
              src="/frontend/pictures/stats.png"
              alt="Stats"
              class="stat-icon"
            />
          </div>
          <div class="stat" id="details-stat">
            <div>Details</div>
            <img
              src="/frontend/pictures/details.png"
              alt="Details"
              class="stat-icon"
            />
          </div>
        </div>
      </div>
    </div>
  `;
  addStatEventListeners();
}

function updatePlayerDetails() {
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-text">Player Details</div>
    
    <div class="details-stats" id="details-stats">
      <div class="details-item">
        <div class="details-icon">⭐</div>
        <div class="details-info">
          <div class="details-label">POINTS</div>
          <div class="details-value">590</div>
        </div>
      </div>
      <div class="details-item">
        <div class="details-icon">🌍</div>
        <div class="details-info">
          <div class="details-label">COUNTRY</div>
          <div class="details-value">#1,438</div>
        </div>
      </div>
      <div class="details-item">
        <div class="details-icon">🔄</div>
        <div class="details-info">
          <div class="details-label">Antall</div>
          <div class="details-value">#12</div>
        </div>
      </div>
    </div>
    <div class="modal-stats">
      <div class="stat" id="time-stat">
        <div>Time</div>
        <img
          src="/frontend/pictures/time.png"
          alt="Time"
          class="stat-icon"
        />
      </div>
      <div class="stat" id="stats-stat">
        <div>Stats</div>
        <img
          src="/frontend/pictures/stats.png"
          alt="Stats"
          class="stat-icon"
        />
      </div>
      <div class="stat" id="details-stat">
        <div>Details</div>
        <img
          src="/frontend/pictures/details.png"
          alt="Details"
          class="stat-icon"
        />
      </div>
    </div>
  `;
  addStatEventListeners();
}

function addStatEventListeners() {
  document.getElementById("time-stat").addEventListener("click", function () {
    updateTimeStatistics();
  });
  document.getElementById("stats-stat").addEventListener("click", function () {
    updateGameStatistics();
    document.getElementById("game-stats").style.display = "block"; // Show stats on click
  });
  document
    .getElementById("details-stat")
    .addEventListener("click", function () {
      updatePlayerDetails();
      document.getElementById("details-stats").style.display = "flex"; // Show details on click
    });
}

function resetPlayerDetails() {
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-text">Madelyn Dias</div>
    <div class="modal-level">Level 21</div>
    <div class="modal-stats">
      <div class="stat" id="time-stat">
        <div>Time</div>
        <img
          src="/frontend/pictures/time.png"
          alt="Time"
          class="stat-icon"
        />
      </div>
      <div class="stat" id="stats-stat">
        <div>Stats</div>
        <img
          src="/frontend/pictures/stats.png"
          alt="Stats"
          class="stat-icon"
        />
      </div>
      <div class="stat" id="details-stat">
        <div>Details</div>
        <img
          src="/frontend/pictures/details.png"
          alt="Details"
          class="stat-icon"
        />
      </div>
    </div>
  `;
  addStatEventListeners();
}

function startTimer() {
  let timeLeft = 1800; // 30 minutes in seconds
  const timerText = document.getElementById("timer-text");

  const interval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerText.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      timerText.textContent = "00:00";
    }

    timeLeft--;
  }, 1000);
}

setTimeout(function () {
  window.location.href = "/frontend/pages/loadingScreen/secondloadingpage.html"; // Change this to the path of your final HTML file
}, 20000); // 20000 milliseconds = 20 seconds
