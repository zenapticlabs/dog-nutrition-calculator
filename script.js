function calculateDogNutrition(
  ageYears,
  ageMonths,
  ageWeeks,
  breed,
  weightPounds,
  activityLevel
) {
  let dailyKcalNeeds;
  const kgPerPound = 2.2;
  const kcalPerCup = 515;
  const cupsPerBag = 54;
  const bagCost = 89;
  const weightKg = weightPounds / kgPerPound;

  let totalAgeMonths =
    (ageYears !== null ? ageYears * 12 : 0) +
    (ageMonths !== null ? ageMonths : 0);

  if (totalAgeMonths === 0 && ageWeeks !== null) {
    totalAgeMonths = ageWeeks / 4.345;
  } else if (totalAgeMonths <= 2 && ageWeeks !== null) {
    totalAgeMonths += ageWeeks / 4.345;
  }

  if (totalAgeMonths < 12) {
    let kValue;

    if (breed === "small" || breed === "medium") {
      if (totalAgeMonths <= 2.53) {
        kValue = 375;
      } else if (totalAgeMonths <= 4) {
        kValue = 350;
      } else if (totalAgeMonths <= 7) {
        kValue = 225;
      } else {
        kValue = 160;
      }
    } else if (breed === "large" || breed === "giant") {
      if (totalAgeMonths <= 2.53) {
        kValue = 340;
      } else if (totalAgeMonths <= 4) {
        kValue = 300;
      } else if (totalAgeMonths <= 7) {
        kValue = 200;
      } else {
        kValue = 160;
      }
    }
    dailyKcalNeeds = Math.pow(weightKg, 0.67) * kValue;
  } else {
    let kcalCoefficient;
    switch (activityLevel) {
      case "less active":
        kcalCoefficient = 67.5;
        break;
      case "active":
        kcalCoefficient = 90;
        break;
      case "more active":
        kcalCoefficient = 110;
        break;
      case "very active":
        kcalCoefficient = 132;
        break;
      default:
        kcalCoefficient = 99;
    }
    dailyKcalNeeds = Math.pow(weightKg, 0.67) * kcalCoefficient;
  }

  const cupsPerDay = dailyKcalNeeds / kcalPerCup;
  const cupsPerMeal = cupsPerDay / 2;
  const daysPerBag = cupsPerBag / cupsPerDay;
  const costPerDay = bagCost / daysPerBag;

  return {
    dailyKcalNeeds: dailyKcalNeeds.toFixed(2),
    cupsPerDay: cupsPerDay.toFixed(2),
    cupsPerMeal: cupsPerMeal.toFixed(2),
    daysPerBag: daysPerBag.toFixed(2),
    costPerDay: costPerDay.toFixed(2),
    activityLevel: activityLevel,
  };
}

function calculateAndDisplay() {
  const ageYearsInput = document.getElementById("age-years").value;
  const ageMonthsInput = document.getElementById("age-months").value;
  const ageWeeksInput = document.getElementById("age-weeks").value;
  const breed = document.getElementById("breed").value;
  const weightPounds = parseFloat(document.getElementById("weight").value);
  const activityLevel = document.getElementById("activity").value;

  let ageYears = ageYearsInput ? parseInt(ageYearsInput) : null;
  let ageMonths = ageMonthsInput ? parseInt(ageMonthsInput) : null;
  let ageWeeks = ageWeeksInput ? parseInt(ageWeeksInput) : null;

  let isAgeValid = false;

  if (
    (ageYears !== null && ageYears >= 0 && ageYears <= 30) ||
    (ageMonths !== null && ageMonths >= 0 && ageMonths <= 11) ||
    (ageWeeks !== null && ageWeeks >= 0 && ageWeeks <= 52)
  ) {
    // If only years is provided, it's valid.
    if (ageYears !== null && ageMonths === null && ageWeeks === null) {
      isAgeValid = true;
    }
    // If years and months are provided, it's valid.
    else if (ageYears !== null && ageMonths !== null && ageWeeks === null) {
      isAgeValid = true;
    }
    // If only weeks is provided, it's valid.
    else if (ageWeeks !== null && ageYears === null && ageMonths === null) {
      isAgeValid = true;
    }
    // If weeks is provided along with years/months, prioritize weeks for puppy calculation, but still valid.
    else if (ageWeeks !== null && (ageYears !== null || ageMonths !== null)) {
      isAgeValid = true;
    }
  }

  if (!isAgeValid || !breed || isNaN(weightPounds) || !activityLevel) {
    alert("Please fill in all fields with valid age.");
    return;
  }

  const results = calculateDogNutrition(
    ageYears,
    ageMonths,
    ageWeeks,
    breed,
    weightPounds,
    activityLevel
  );

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
        <p><strong>Daily Caloric Needs:</strong> ${results.dailyKcalNeeds} kcal</p>
        <p><strong>Cups per Day:</strong> ${results.cupsPerDay}</p>
        <p><strong>Cups per Meal:</strong> ${results.cupsPerMeal}</p>
        <p><strong>Days per Bag:</strong> ${results.daysPerBag}</p>
        <p><strong>Cost per Day:</strong> $${results.costPerDay}</p>
    `;
}
