document.getElementById('textForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = document.getElementById('text').value;
    const token = localStorage.getItem('token');

    const res = await fetch('/api/admin/text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ text })
    });

    const data = await res.json();

    if (data.message) {
        document.getElementById('message').innerText = data.message;
    }
});