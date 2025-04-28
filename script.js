function calculateDogNutrition(age, breed, weightPounds, activityLevel) {
  let dailyKcalNeeds;
  const kgPerPound = 2.2;
  const kcalPerCup = 515;
  const cupsPerBag = 54;
  const bagCost = 89;
  const weightKg = weightPounds / kgPerPound;
  const puppyKValues = {
    small: {
      "0.2115": 375,
      "1.3333": 350,
      "2.3333": 225,
      "4": 160,
      "Infinity": 132
    },
    medium: {
      "0.2115": 375,
      "1.3333": 350,
      "2.3333": 225,
      "4": 160,
      "Infinity": 132
    },
    large: {
      "0.2115": 340,
      "1.3333": 300,
      "2.3333": 200,
      "4": 160,
      "Infinity": 132
    },
    giant: {
      "0.2115": 340,
      "1.3333": 300,
      "2.3333": 200,
      "4": 160,
      "Infinity": 132
    }
  };

  if (age <= 1) {
    let kValue = 132;
    if (puppyKValues.hasOwnProperty(breed)) {
      const breedValues = puppyKValues[breed];
      for (let ageThreshold in breedValues) {
        if (age <= parseFloat(ageThreshold)) {
          kValue = breedValues[ageThreshold];
          break;
        }
      }
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
    activityLevel: activityLevel
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
