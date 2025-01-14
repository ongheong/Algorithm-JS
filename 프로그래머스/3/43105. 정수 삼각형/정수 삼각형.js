function solution(triangle) {
    dp = triangle
    depth = dp.length
    
    for (let i = 1; i < depth; i++) {
        for (let j = 0; j < i+1; j++) {
            if (j === 0) dp[i][j] += dp[i-1][j]
            else if (j === i) dp[i][j] += dp[i-1][j-1]
            else dp[i][j] += Math.max(dp[i-1][j], dp[i-1][j-1])
        }
        
    }
    
    return Math.max(...dp[depth - 1]);
}