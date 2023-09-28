names = ['Alice', 'Bob', 'Bob']
heights = [155, 185, 150]

function sortPeople(names, heights) {
  let map = new Map()

  for (let i = 0; i < names.length; i++) {
    map.set('Nombre', names[i])
    map.set('Altura', heights[i])
  }
  return map
}

console.log(sortPeople(names, heights))
