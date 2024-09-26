// Levenshtein Distance algorithm to calculate similarity between two strings
const getLevenshteinDistance = (a, b) => {
  const matrix = [];

  // Increment along the first column of each row
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // Increment along the first row of each column
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

// Function to find the closest matching dish name
export const getCorrectDishName = (inputDishName, availableDishes) => {
  if (!availableDishes || availableDishes.length === 0) {
    return inputDishName; // Return original if no known dishes provided
  }

  const lowerCaseDish = inputDishName.toLowerCase();
  
  // Find the dish with the smallest Levenshtein distance
  let closestMatch = availableDishes[0];
  let minDistance = getLevenshteinDistance(lowerCaseDish, closestMatch.toLowerCase());

  for (const dish of availableDishes) {
    const distance = getLevenshteinDistance(lowerCaseDish, dish.toLowerCase());
    if (distance < minDistance) {
      minDistance = distance;
      closestMatch = dish;
    }
  }

  return closestMatch; // Return the closest match
};
