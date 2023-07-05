const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

let shipping = null;
let currency = null;

const userLocation = "NAM";
const customers = 1;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const totalCost = shoes + toys + shirts + batteries + pens;

console.log(currency + totalCost);

if (userLocation === "RSA") {
  shipping = 400;
  currency = "R";
}

if (userLocation === "NAM") {
  shipping = 600;
  currency = "$";
}

if (userLocation === "Other") {
  shipping = 800;
  currency = "$";
}

if (userLocation === "NK") {
  console.log(BANNED_WARNING);
}

if (customers > 1 && userLocation != "NK") {
  console.log(FREE_WARNING);
} else if (customers === 1) {
  if (totalCost >= 1000 && userLocation === "RSA") {
    shipping = 0;
    currency = "R";
  }

  if (totalCost >= 60 && userLocation === "NAM") {
    shipping = 0;
    currency = "$";
  } 
}

console.log(currency + (totalCost + shipping));
