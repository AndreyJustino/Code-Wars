// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
  // pegar o array de idades e coloca em ordem crescente
  ages.sort((v1, v2) => {
    return v1 - v2;
  });
  // vai retornar, o menor numero (mais novo), o maior numero (mais velho) e a diferença entre o menor e o maior
  return [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]];
}
