export async function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
        json.forEach((user, index) => {
            let userContainer = document.createElement("div"); // Create a new container for each user
            userContainer.setAttribute("class", "userInfo");

            let userInfo = document.createElement("p"); // Create a <p> element for user info; because it is a text othrwise would be 'img'
            userInfo.textContent = `${index + 1}: ${user.name}`; // Change 'title' to 'name' for user name(+1 starts with #1)

            userContainer.appendChild(userInfo); // Append user info to the container
            document.querySelector(".usersInfo").appendChild(userContainer); // Append the container to the main users info div
        });
    });
    }

