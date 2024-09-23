// Function to generate current date and time
function addNewdiv() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-based
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Return the date and time as a formatted string
    return `Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds}`;
}

// alart
