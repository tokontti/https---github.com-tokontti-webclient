// Funktio kaikkien käyttäjien hankkimiseksi
async function getUsers() {
    const response = await fetch("/api/v1/user");
    if (!response.ok) {
        console.error('Server returned an error:', await response.text());
        return;
    }
    const data = await response.json();
    displayResult(data);
}

// Funktio uuden käyttäjän luomiseksi
async function createUser(username, password, age, role) {
    const response = await fetch('/api/v1/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, age, role })
    });
    const data = await response.json();
    displayResult(data);
}

// Funktio käyttäjän päivittämiseksi
async function updateUser(id, username, age, role) {
    const response = await fetch(`/api/v1/user/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, username, age, role })
    });
    const data = await response.json();
    displayResult(data);
}

// Funktio käyttäjän poistamiseksi
async function deleteUser(id) {
    const response = await fetch(`/api/v1/user/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    displayResult(data);
}

// Funktio käyttäjän hakemiseksi ID:n perusteella 
async function getUserById(id) {
    const response = await fetch(`/api/v1/user/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    displayResult(data);
}
// Funktio käyttäjän salasanan päivittämiseksi
async function updateUserPassword(id, password) {
    const response = await fetch(`/api/v1/user/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
    });

    if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
    }

    const data = await response.json();
    displayResult(data);
}

// Funktio tuloksen näyttämiseksi
function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = JSON.stringify(data, null, 2);
}

// Tapahtumankuuntelija "Luo käyttäjä" -lomakkeen lähetykselle
document.getElementById('create-user').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('create-username').value;
    const password = document.getElementById('create-password').value;
    const age = document.getElementById('create-age').value;
    const role = document.getElementById('create-role').value;
    createUser(username, password, age, role);
});

// Tapahtumankuuntelija "Päivitä käyttäjä" -lomakkeen lähetykselle
document.getElementById('update-user').addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('update-id').value;
    const username = document.getElementById('update-username').value;
    const age = document.getElementById('update-age').value;
    const role = document.getElementById('update-role').value;
    updateUser(id, username, age, role);
});

// Tapahtumankuuntelija "Päivitä salasana" -lomakkeen lähetykselle
document.getElementById('update-password').addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('password-id').value;
    const password = document.getElementById('new-password').value;
    updateUserPassword(id, password);
});

// Tapahtumankuuntelija "Poista käyttäjä" -lomakkeen lähetykselle
document.getElementById('delete-user').addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('delete-id').value;
    deleteUser(id);
});

// Tapahtumankuuntelija "Hae käyttäjä" -lomakkeen lähetykselle
document.getElementById('get-user').addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.getElementById('get-id').value;
    getUserById(id);
});

// Tapahtumankuuntelija "Hae kaikki käyttäjät" -painikkeelle
document.getElementById('get-all-users').addEventListener('click', getUsers);
