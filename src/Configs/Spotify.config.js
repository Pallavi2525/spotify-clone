//Spotify authentication request url
export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirect to this uri if login was successful
const redirectUri = "http://localhost:3000/";

//unique id generated from spotify dev website
const clientId = "3e6c62e21d194b21b2055a33db42980c";

//permissions to be asked for from Spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//getting access token from the url after successful login
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

//final login url for auth
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;