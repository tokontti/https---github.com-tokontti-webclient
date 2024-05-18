// Haetaan kirjautumislomake 
const loginForm = document.getElementById('login');

// Tehdään fetch-pyyntö käyttäjän tilin tietojen hakemiseksi
fetch('/api/v1/user/account').then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}).then((account) => {
    const button = document.createElement('BUTTON');
    const text = document.createTextNode("Hei " + account.username + "!");

    button.innerText = 'kirjaudu ulos';
    button.addEventListener('click', () => {
        fetch('/api/v1/user/logout', {
            method: 'POST',
        }).then((response) => {
            if (response.ok) {
                button.remove();
                text.remove();
            }
        }).catch((error) => {
            console.log(error);
        });
    });
    document.body.appendChild(button);
    document.body.appendChild(text);
}).catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
});

// Lisätään tapahtumakuuntelija kirjautumislomakkeen lähetykselle
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(loginForm);
    const credentials = Object.fromEntries(data);

    fetch('/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then((data) => {
        console.log(data);

        fetch('/api/v1/user/account').then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((account) => {
            const button = document.createElement('BUTTON');
            const text = document.createTextNode("Hei " + account.username + "!");

            button.innerText = 'kirjaudu ulos';
            button.addEventListener('click', () => {
                fetch('/api/v1/user/logout', {
                    method: 'POST',
                }).then((response) => {
                    if (response.ok) {
                        button.remove();
                        text.remove();
                    }
                }).catch((error) => {
                    console.log(error);
                });
            });

            document.body.appendChild(button);
            document.body.appendChild(text);
        });

        // Ohjataan käyttäjä toiselle sivulle roolin perusteella
        if (data.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'notes.html';
        }
    }).catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
});
