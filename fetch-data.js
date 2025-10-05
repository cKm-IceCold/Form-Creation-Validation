// 1️⃣ Define an asynchronous function to handle fetching and displaying user data
async function fetchUserData() {
  // 2️⃣ Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 3️⃣ Get the HTML element where data will be displayed
  const dataContainer = document.getElementById('api-data');

  try {
    // 4️⃣ Fetch data from the API
    const response = await fetch(apiUrl);

    // 5️⃣ Convert the response to JSON
    const users = await response.json();

    // 6️⃣ Clear the "Loading user data..." message
    dataContainer.innerHTML = '';

    // 7️⃣ Create a <ul> to hold the user names
    const userList = document.createElement('ul');

    // 8️⃣ Loop through the array of users
    users.forEach(user => {
      const listItem = document.createElement('li'); // Create <li>
      listItem.textContent = user.name; // Add user's name
      userList.appendChild(listItem); // Add <li> to <ul>
    });

    // 9️⃣ Append the <ul> to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // 🔟 Handle errors
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// 1️⃣1️⃣ Run fetchUserData when the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
