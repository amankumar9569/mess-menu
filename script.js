const messMenu = {
  monday: {
    b: "Veg Pasta & Ketchup, Tea/Coffee",
    l: "Dahi Onion Sabji, Chora, Roti, Dal, Rice, Buttermilk",
    d: "Dum Aloo, Roti, Dal, Rice, Onion Salad"
  },
  tuesday: {
    b: "Aloo Paratha Sandwich, Tea/Coffee",
    l: "Tinda Dry Fry, Matar, Roti, Dal, Rice",
    d: "Palak Moong Dal, Roti, Kadhi, Masala Rice"
  },
  wednesday: {
    b: "Farsi Puri, Tea/Coffee",
    l: "Dudhi Chana Dal, Math, Roti, Dal, Rice",
    d: "Dahi Vada, Roti, Chana Dal, Masala Rice"
  },
  thursday: {
    b: "Masala Poha, Tea/Coffee",
    l: "Dana Methi, Ringan Dal, Roti, Dal, Rice",
    d: "Aloo Kurma, Roti, Masala Rice"
  },
  friday: {
    b: "Idli & Peanut Chutney, Tea/Coffee",
    l: "Fansi Sabji, Desi Chana, Roti, Dal, Rice",
    d: "Green Mix Veg, Roti, Jeera Rice, Dal Fry"
  },
  saturday: {
    b: "Corn Peanut, Tea/Coffee",
    l: "Aloo Gobi, Roti, Dal, Rice",
    d: "Rajma Masala, Roti, Rice, Kadhi Pakoda"
  },
  sunday: {
    b: "Bread & Jam, Tea/Coffee",
    l: "Chole, Puri, Kadhi, Jeera Rice",
    d: "Veg Masala Khichdi, Sev Usal, Pav"
  }
};

function showMenu(day) {
  const menu = document.getElementById("menu");

  if (!messMenu[day]) {
    menu.innerHTML = "";
    return;
  }

  menu.innerHTML = `
    <h3>🍳 Breakfast</h3>
    <p>${messMenu[day].b}</p>

    <h3>🍛 Lunch</h3>
    <p>${messMenu[day].l}</p>

    <h3>🍽️ Dinner</h3>
    <p>${messMenu[day].d}</p>
  `;
}

/* 🌙 Dark mode toggle */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

/* Automatically detect today */
window.onload = function () {
  const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const todayStr = days[today];
  showMenu(todayStr);

  // Also set the dropdown to today if exists
  const select = document.getElementById("day");
  if (select) {
    select.value = todayStr;
  }
};
