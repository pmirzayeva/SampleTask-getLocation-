// /?first method/
// const getLocation = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }

// const showPosition = (position) => {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     console.log(latitude, longitude);
// }

// const showError = (error) => {
//     console.log(error);
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             alert("User denied the request for Geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             alert("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             alert("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             alert("An unknown error occurred.");
//             break;
//         default:
//             alert("An unknown error occurred.");
//     }
// }



// /?second method/
document.addEventListener("DOMContentLoaded", async () => {
    try {
        if ("geolocation" in navigator) { /// object from API //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
            const position = await getCurrentPosition();
            const { latitude, longitude } = position.coords;
            document.querySelector("#latitude").textContent = `Latitude: ${latitude}`;
            document.querySelector("#longitude").textContent = `Longitude: ${longitude}`;
        } else {
            console.log("no location");
        }
    } catch (error) {
        console.error("Error", error);
    }
});

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

