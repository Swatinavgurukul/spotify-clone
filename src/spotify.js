//  export const authEndpoint = "https://accounts.spotify.com/#authorize"

// const redirectUri = "http://localhost:3000"

// // "8bda6508f3f245c0baf9977626e81e24"

// const clientId = "02e9cdb2888d406ca9ef4907a60dbbb4"

// // "cff76213089a4e228206c8bf120d67cb"

// const scopes = [
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
// ]

// export const getTokenFromResponse = () => {
//     return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial,item) => {
//         var parts = item.split("=");
//         initial[parts[0]] = decodeURIComponent(parts[1]);

//         return initial;
//     },  {})
// }

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "8bda6508f3f245c0baf9977626e81e24";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;