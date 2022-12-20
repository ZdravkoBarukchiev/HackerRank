function climbingLeaderboard(ranked, player) {
    const rankedCopy = [...new Set(ranked)];
    const result = [];
    let j = 0;
    for (let i = player.length - 1; i >= 0; i--) {
        while (j < rankedCopy.length && player[i] < rankedCopy[j]) {
            j++;
        }
        result.unshift(j + 1);
    }
    return result;

}
console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]))
