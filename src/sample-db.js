export const NEXT_ID = {
  VALUE: 1,
};

const addDummyData = (amount) => {
  for (let i=0; i<amount; i++) {
    NOTES.push({
      id: i,
      title: `Sample - ${i}`,
      details: `${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu laudantium aliquip natus voluptatem.`,
      date: `January ${i + 1}, 2000`
    })
  }
}

export const NOTES = [];
addDummyData(10)