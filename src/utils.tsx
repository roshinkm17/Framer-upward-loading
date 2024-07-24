function generateSortedRandomNumbers() {
  // Generate 10 random numbers between 0 and 100
  console.log("Generating random numbers");
  const randomNumbers: number[] = Array.from(
    { length: 12 },
    () => Math.random() * 100
  );

  randomNumbers.push(0, 100);

  // Sort the numbers in ascending order
  const sortedNumbers: number[] = randomNumbers.sort((a, b) => a - b);

  // Map the sorted numbers to li elements
  return sortedNumbers.map((number, index) => {
    return (
      <li key={index} style={{ marginTop: 0 }}>
        {number.toFixed(0)}%
      </li>
    );
  });
}

const getRandomNumberBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export { generateSortedRandomNumbers, getRandomNumberBetween };
