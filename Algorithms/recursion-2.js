const familyTree = {
  name: 'A',
  age: '100',
  children: [
    {
      name: 'B',
      age: '80',
      children: [
        {
          name: 'D',
          age: '55',
          children: [
            {
              name: 'J',
              age: '35',
              children: [
                {
                  name: 'K',
                  age: '8'
                },
                {
                  name: 'L',
                  age: '4'
                }
              ]
            },
            {
              name: 'M',
              age: '30'
            },
            {
              name: 'N',
              age: '25'
            }
          ]
        }
      ]
    },
    {
      name: 'C',
      age: '75',
      children: [
        {
          name: 'F',
          age: '40'
        },
        {
          name: 'G',
          age: '38',
          children: [
            {
              name: 'H',
              age: '12'
            },
            {
              name: 'I',
              age: '10'
            }
          ]
        }
      ]
    }
  ]
};
function getFamilyMembers(family, newArray = []) {
  if (Array.isArray(family)) {
    let members = family.reduce((accumulator, currentValue) => {
      getFamilyMembers(currentValue, newArray);
      return accumulator.concat(currentValue.name);
    }, []);
    newArray.push(...members);
  } else {
    for (let subdep of Object.values(family)) {
      if (Array.isArray(subdep)) {
        getFamilyMembers(subdep, newArray);
      }
    }
  }
  return newArray;
}
var returnedArray = getFamilyMembers(familyTree);
//console.log(returnedArray);
