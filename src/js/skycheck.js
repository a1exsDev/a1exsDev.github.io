function getUserInfo() {    
    // Redirect the user to the new URL with the username as a parameter
    const username = document.getElementById("username").value;
    window.location.href = `https://a1exsDev.github.io/skycheck.html/${username}`;

    // Extract the username from the URL
    const url = new URL(window.location.href);
    const usernameFromUrl = url.pathname.split("/").pop();

    // Use the extracted username to make the API request
    const apiEndpoint = "https://sky.shiiyu.moe/api/v2/profile/";
    fetch(`${apiEndpoint}${usernameFromUrl}`)
        .then(response => response.json())
        .then(data => {
            // Show the data about the user
            const output = document.getElementById("output");
            output.innerHTML = JSON.stringify(data);
        })
        .catch(error => {
            console.error(error);
        });
}
