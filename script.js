// REAL mess menu data
const menuData = {
  0: `
🍳 Breakfast: Bread & Jam, Tea / Coffee

🍛 Lunch:
• Chole
• Puri
• Kadhi
• Jeera Rice
• Fries
• Chilli Fry

🍽️ Dinner:
• Veg Masala Khichdi
• Sev Usal
• Pav
• Pickle
  `,
  1: `
🍳 Breakfast: Veg Pasta & Ketchup, Tea / Coffee

🍛 Lunch:
• Dahi Onion Sabji
• Chora
• Roti
• Dal
• Rice
• Butter Milk

🍽️ Dinner:
• Dum Aloo
• Roti
• Dal
• Rice
• Onion Salad
  `,
  2: `
🍳 Breakfast: Aloo Paratha Sandwich, Tea / Coffee

🍛 Lunch:
• Tinda Dry Fry
• Matar
• Roti
• Dal
• Rice
• Butter Milk

🍽️ Dinner:
• Palak Moong Dal
• Roti
• Kadhi (Sweet/Spicy)
• Masala Rice
• Cabbage Sambharo
  `,
  3: `
🍳 Breakfast: Farsi Puri, Tea / Coffee

🍛 Lunch:
• Dudhi Chana Dal
• Math
• Roti
• Dal
• Rice
• Butter Milk

🍽️ Dinner:
• Dahi Vada (Sweet & Salted)
• Roti
• Chana Dal
• Masala Rice
  `,
  4: `
🍳 Breakfast: Masala Poha, Tea / Coffee

🍛 Lunch:
• Dana Methi
• Ringan Dal
• Roti
• Dal (Sweet/Spicy)
• Plain Rice
• Butter Milk
• Salad

🍽️ Dinner:
• Aloo Kurma
• Roti
• Chas Bharo Aloo
• Masala Rice / Biryani
  `,
  5: `
🍳 Breakfast: Idli & Peanut Chutney, Tea / Coffee

🍛 Lunch:
• Fansi Sabji
• Desi Chana
• Roti
• Dal
• Rice
• Butter Milk
• Salad

🍽️ Dinner:
• Green Mix Veg
• Roti
• Jeera Rice
• Dal Fry
  `,
  6: `
🍳 Breakfast: Corn Peanut, Tea / Coffee

🍛 Lunch:
• Aloo Gobi
• Roti
• Dal
• Rice
• Butter Milk
• Salad

🍽️ Dinner:
• Rajma Masala
• Roti
• Rice
• Kadhi Pakoda
• Lachha Pyaz
  `
};

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Format date
function formatDate(date) {
  return date.toDateString();
}

// Load today & tomorrow
function loadTodayAndTomorrow() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  document.getElementById("todayTitle").innerText =
    `📌 Today (${days[today.getDay()]}) - ${formatDate(today)}`;
  document.getElementById("todayMenu").innerText =
    menuData[today.getDay()];

  document.getElementById("tomorrowTitle").innerText =
    `⏭️ Tomorrow (${days[tomorrow.getDay()]}) - ${formatDate(tomorrow)}`;
  document.getElementById("tomorrowMenu").innerText =
    menuData[tomorrow.getDay()];
}

// Show selected day
function showSelectedDay() {
  const val = document.getElementById("daySelect").value;
  const box = document.getElementById("selectedMenu");
  box.innerText = val === "" ? "" : `📅 ${days[val]} Menu:\n${menuData[val]}`;
}

/* 🌙 THEME TOGGLE */
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  document.getElementById("themeBtn").innerText =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
}

// Load theme + menu on start
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeBtn").innerText = "☀️";
  }
  loadTodayAndTomorrow();
};

