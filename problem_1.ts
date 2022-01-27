const multiplesOf3_5 = (limit: number) => {
  const multiples: number[] = [];
  Array.from({ length: limit + 1 }).forEach((_, index) => {
    if (index % 3 === 0 || index % 5 === 0) {
      multiples.push(index);
    }
  });
  return multiples;
};

console.log(multiplesOf3_5(16));
