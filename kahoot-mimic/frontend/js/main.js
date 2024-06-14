document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('/api/text');
    const data = await res.json();
    document.getElementById('displayText').innerText = data.text;
});