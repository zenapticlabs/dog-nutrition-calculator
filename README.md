# Dog Nutrition Calculator

This calculator helps estimate the daily caloric needs of dogs based on several factors. It provides information on feeding amounts, bag duration, and cost per day.

## User Inputs

The calculator takes the following inputs:

* **Age:** The dog's age, which can be provided in years, months, or weeks.
* **Breed:** The dog's breed size category (small, medium, large, or giant).
* **Weight:** The dog's weight in pounds.
* **Activity Level:** The dog's activity level (e.g., active, less active).

## Calculation Logic

The calculator uses the following general logic:

1.  **Estimates daily caloric needs:** The primary calculation determines the required kilocalories per day.
2.  **Adjusts for activity level:** Caloric needs are modified based on whether the dog is active or less active.
3.  **Provides feeding guidelines:** The calculator outputs the recommended amount to feed per day and per meal.
4.  **Calculates bag usage:** It estimates how long a bag of food will last based on daily feeding amounts.
5.  **Calculates cost per day:** It also calculates the daily cost of feeding.

The calculations are based on established formulas and data points to ensure accuracy. [cite: 56]

## Outputs

The calculator provides the following outputs:

* Amount to feed per day (cups)
* Amount to feed per meal (cups, assuming two meals per day)
* How long a bag of food will last (days)
* Cost per day

## `calculateDogNutrition` Function Details

This JavaScript function is the core of the nutrition calculator. It takes several pieces of information about a dog as input and returns an object containing the calculated nutritional recommendations.

### Function Signature

```javascript
function calculateDogNutrition(ageYears, ageMonths, ageWeeks, breed, weightPounds, activityLevel) {
  // ... function body ...
}
