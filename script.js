function calculateDogNutrition(age, breed, weightPounds, activityLevel) {
  const kgPerPound = 2.2;
  const kcalPerCup = 515;
  const cupsPerBag = 54;
  const bagCost = 89;

  const weightKg = weightPounds / kgPerPound;

  let dailyKcalNeeds;

  if (age <= 1) {
    let kValue;

    if (breed === "small" || breed === "medium") {
      if (age <= 11 / 52) kValue = 375;
      else if (age <= 4 / 3) kValue = 350;
      else if (age <= 7 / 3) kValue = 225;
      else if (age <= 12 / 3) kValue = 160;
      else kValue = 132;
    } else if (breed === "large" || breed === "giant") {
      if (age <= 11 / 52) kValue = 340;
      else if (age <= 4 / 3) kValue = 300;
      else if (age <= 7 / 3) kValue = 200;
      else if (age <= 12 / 3) kValue = 160;
      else kValue = 132;
    }

    dailyKcalNeeds = Math.pow(weightKg, 0.67) * kValue;
  } else {
    const kcalCoefficient = 132;
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
  };
}

function calculateAndDisplay() {
  const age = parseFloat(document.getElementById("age").value);
  const breed = document.getElementById("breed").value;
  const weightPounds = parseFloat(document.getElementById("weight").value);
  const activityLevel = document.getElementById("activity").value;

  if (!age || !breed || !weightPounds || !activityLevel) {
    alert("Please fill in all fields.");
    return;
  }

  const results = calculateDogNutrition(
    age,
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
