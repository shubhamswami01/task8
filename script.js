const container = document.getElementById('user-container');
const reloadBtn = document.getElementById('reload');

async function fetchUserData() {
  container.innerHTML = 'Loading...';
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  container.innerHTML = '';
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    container.appendChild(card);
  });
}

reloadBtn.addEventListener('click', fetchUserData);

// Load data on page load
fetchUserData();
