var players = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];


function createList(addplayers[])
{
  var topScores = [];
  for (i=0; i<addplayers.length; i++)
  {
   topScores.push(addplayers[i]);
  }
  return topScores;
}
createList(players);
console.log(players);
