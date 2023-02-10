/* SALESBOARD ACHIEVEMENTS AND GOALS */
// ⭐️ = $200 in revenue | $50 in commission
// 🔥 = $300 in revenue | $75 in commission>
// 🔔 = When user gets first sale
// 💰 = When user exceeds $2500 in revenue
// 🏆 = When user gets 15 sales

/* VARIABLES */
const starBtn = document.getElementById("star");
const fireBtn = document.getElementById("fire");

const salesTitle = document.getElementById("sales-title");
const achievementsTitle = document.getElementById("achievements-title");

const salesEl = document.getElementById("sales-input");
const achievementsEl = document.getElementById("achievements-input");
const revenueEl = document.getElementById("revenue-input");
const commissionEl = document.getElementById("commission-input");

const resetBtn = document.getElementById("reset-btn");

// Array for Achievement Emojis
const achievementsArr = ["🔔", "💰", "🏆"];

let totalSales = 0;
let totalAchievement = 0;
let totalRevenue = 0;
let totalCommission = 0;

let emojiIcon = 1; //Variable to help tally the number of emojis in the Live Sales title

/* PRODUCT STAR OBJECT */
const productStar = {
  emoji: "⭐",
  revenue: 200,
  commission: 50,
};

/* PRODUCT FIRE OBJECT */
const productFire = {
  emoji: "🔥",
  revenue: 300,
  commission: 75,
};

/* STAR BUTTON FUNCTION/ONCLICK EVENT*/
function addStar() {
  salesEl.textContent += productStar.emoji;
  salesTitle.textContent = `Live Sales - ${emojiIcon++}`;
  revenueEl.textContent = addRevenue(productStar.revenue);
  commissionEl.textContent = addCommission(productStar.commission);
  checkForAchievements();
}

/* FIREBUTTON FUNCTION/ONCLICK EVENT */
function addFire() {
  salesEl.textContent += productFire.emoji;
  salesTitle.textContent = `Live Sales - ${emojiIcon++}`;
  revenueEl.textContent = addRevenue(productFire.revenue);
  commissionEl.textContent = addCommission(productFire.commission);
  checkForAchievements();
}

/* LOGGING ACHIEVEMENTS */
function checkForAchievements() {
  if (productStar.revenue === 200 || productFire.revenue === 300) {
    achievementsEl.textContent = achievementsArr[0];
  }

  if (totalRevenue > 2500) {
    achievementsEl.textContent += achievementsArr[1];
  }
  //note: put greater than 15 instead of === 15 or it will provide the trophy at the count of 14
  if (emojiIcon > 15) {
    achievementsEl.textContent += achievementsArr[2];
  }
}

/* FUNCTIONS TO CALCULATE SUM OF REVENUES AND COMMISSIONS */
function addRevenue(num) {
  totalRevenue += num;
  return totalRevenue;
}

function addCommission(num) {
  totalCommission += num;
  return totalCommission;
}

/* RESET BUTTON */
function reset() {
  salesEl.textContent = "";
  achievementsEl.textContent = "";
  revenueEl.textContent = "";
  commissionEl.textContent = "";
  emojiIcon = 0;
  totalRevenue = 0;
  totalCommission = 0;
}
