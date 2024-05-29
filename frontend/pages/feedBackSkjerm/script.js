document.getElementById('continue-btn').addEventListener('click', function() {
    document.getElementById('feedback-modal').style.display = 'block'; // Viser tilbakemeldingsmodalen
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('feedback-modal').style.display = 'none'; // Skjuler tilbakemeldingsmodalen
});

document.querySelectorAll('.emoji-ratings span').forEach(function(emoji) {
    emoji.addEventListener('click', function() {
        alert('You rated: ' + emoji.textContent); // Varsel som viser hvilken emoji som ble klikket
    });
});
