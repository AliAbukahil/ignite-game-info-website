// Base URL
const base_url =
  "https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af&dates=2019-09-01,2019-09-30&platforms=18,1,7";
//"https://api.rawg.io/api/games?key=b5d97dce451641c3aba31c04a4a7f7af";

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

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// the finishing product
export const popularGameURL = () => `${base_url}${popular_games}`;
