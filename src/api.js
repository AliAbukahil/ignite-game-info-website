// Base URL
const base_url =
  "https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=2021-09-01,2021-09-30&platforms=18,1,7";

// Getting the current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Getting the current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// variables for current Day/Month/Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// // data URL My Pick
// const date_url = `&dates=${currentDate},${nextYear}&platforms=18,1,7`;
// // base URL My pick
// const base_url = `https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&${date_url}`;

// Popular Games
const popular_games = `games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// the finished product
export const popularGameURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
// Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

// Game Details My Pick
// export const gameDetailsURL = (game_id) =>
//   `https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&/${game_id}`;
// Game ScreenShots My Pick
// export const gameScreenshotURL = (game_id) =>
//   `https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&/${game_id}/screenshots`;

// Game Details My Pick 2
// export const gameDetailsURL = (game_id) =>
//   `https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&${game_id}`;
// Game ScreenShots My Pick 2
// export const gameScreenshotURL = (game_id) =>
//   `https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&${game_id}/screenshots`;
