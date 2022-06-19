export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://localhost:3000/callback";
const clientId = "060ff238f14140e993e68aa686c80654";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// lây token đăng nhập từ URL
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((init, item) => {
      var parts = item.split("=");
      init[parts[0]] = decodeURIComponent(parts[1]);
      return init;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
