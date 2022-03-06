export function calculateWinner(blocks) {
  const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < pattern.length; i++) {
    const [a, b, c] = pattern[i];

    if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
      return {
        // True if one of the patterns matches up
        winner: blocks[a],
        winningSquare: pattern[i],
      };
    }
  }
  return {
    winner: null,
    winningSquare: [],
  };
}
