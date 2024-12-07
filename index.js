import incrementAllUserCurrency from "./incrementCurrency.js";

async function main() {
  try {
    await incrementAllUserCurrency();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
