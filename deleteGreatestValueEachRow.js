grid = [
  [
    [
      50, 72, 65, 6, 81, 92, 18, 51, 10, 50, 32, 64, 32, 14, 54, 16, 45, 64, 27,
      45, 15, 94, 40, 51, 7, 4, 17, 81, 69, 96, 79, 88, 11, 60, 91, 21, 82, 56,
      30, 38, 19,
    ],
  ],
]

function deleteGreatestValue(grid) {
  let temp
  let greaters = []
  let iterador = 0
  let sum = 0

  if (grid.length === 1) {
    return grid
  }

  while (grid[0].length !== 0) {
    let mayor = -Infinity
    greaters.push([])

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length - 1; j++) {
        if (grid[i][j] > grid[i][j + 1]) {
          temp = grid[i][j]
          grid[i][j] = grid[i][j + 1]
          grid[i][j + 1] = temp
        }
      }

      greaters[iterador].push(grid[i].pop())

      if (greaters[iterador][i] >= mayor) {
        mayor = greaters[iterador][i]
      }
    }
    sum += mayor
    iterador++
  }

  return sum
}

console.log(deleteGreatestValue(grid))
