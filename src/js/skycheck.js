function getUserStats() {    
    // Redirect the user to the new URL with the username as a parameter
    const username = document.getElementById("username").value;


    // Use the extracted username to make the API request
    const apiEndpoint = "https://sky.shiiyu.moe/api/v2/profile/";
    fetch(`${apiEndpoint}${username}`)
        .then(response => response.json())
        .then(data => {
            // Show the data about the user
            const content = document.getElementById("content");
            content.innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error(error);
        });
}
