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
});

document.getElementById("details-stat").addEventListener("click", function () {
  updatePlayerDetails();
});

function updateTimeStatistics() {
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-text">Time Statistics</div>
    <div class="modal-info">Time spent: 10 hours</div>
    <div class="modal-info">Average time per session: 30 minutes</div>
    <div class="modal-info">Time rank: Top 10%</div>
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
  document.getElementById("time-stat").addEventListener("click", function () {
    updateTimeStatistics();
  });
  document.getElementById("stats-stat").addEventListener("click", function () {
    updateGameStatistics();
  });
  document
    .getElementById("details-stat")
    .addEventListener("click", function () {
      updatePlayerDetails();
    });
}

function updateGameStatistics() {
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-text">Game Statistics</div>
    <div class="modal-info">Wins: 100</div>
    <div class="modal-info">Losses: 50</div>
    <div class="modal-info">Total games played: 150</div>
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
  document.getElementById("time-stat").addEventListener("click", function () {
    updateTimeStatistics();
  });
  document.getElementById("stats-stat").addEventListener("click", function () {
    updateGameStatistics();
  });
  document
    .getElementById("details-stat")
    .addEventListener("click", function () {
      updatePlayerDetails();
    });
}

function updatePlayerDetails() {
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-text">Player Details</div>
    <div class="modal-info">Username: Madelyn Dias</div>
    <div class="modal-info">Level: 21</div>
    <div class="modal-info">Experience: 5000</div>
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
  document.getElementById("time-stat").addEventListener("click", function () {
    updateTimeStatistics();
  });
  document.getElementById("stats-stat").addEventListener("click", function () {
    updateGameStatistics();
  });
  document
    .getElementById("details-stat")
    .addEventListener("click", function () {
      updatePlayerDetails();
    });
}
function resetPlayerDetails() {
  document.getElementById("modal-content").innerHTML = `
    <div class="modal-text"></div>
    <div class="modal-content" id="modal-content">
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
    </div>
  `;
  document.getElementById("time-stat").addEventListener("click", function () {
    updateTimeStatistics();
  });
  document.getElementById("stats-stat").addEventListener("click", function () {
    updateGameStatistics();
  });
  document
    .getElementById("details-stat")
    .addEventListener("click", function () {
      updatePlayerDetails();
    });
}
