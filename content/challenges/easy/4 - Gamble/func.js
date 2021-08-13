// profitable gamble is a game that yields a positive net profit
// net profit is calculated in the following manner: net profit = probaliity * prize - cost of playing
// return ture if you think you can win
module.exports = (probabilityOfWinning, prize, costOfPlaying) => {
    let netProfit = (probabilityOfWinning * prize) - costOfPlaying;
    let profitable = false;

    //Self-Notes: Using Math.sign() to check for positive or negatives
    if (Math.sign(netProfit) == 1){
        profitable = true;
        return profitable;
    }else{return profitable;}

    //Self-Notes: Using Math.sign() to check for positive or negatives
    // if (netProfit > 0) {
    //     profitable = true;
    //     return profitable;
    // }else{
    //     return profitable;
    // }

};
