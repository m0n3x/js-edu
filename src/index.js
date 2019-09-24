/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
) {

    let DAY = 0;
    let weeks = 0;
    const EXP_PER_LEVEL = 168;
    let MAX_LEVEL = 800 + 500;

    let level = 0;
    let exp = 0;


    if (knowsProgramming) {
        MAX_LEVEL -= 500;
    }
    while (level <= MAX_LEVEL) {
        console.log(level);
        exp += config.top_peformance;
        if (exp >= EXP_PER_LEVEL) {
            level++;
            exp = EXP_PER_LEVEL - exp;
        }
        DAY++;
        if(DAY>6){
            DAY=0;
            weeks++;
        }
    }

    return weeks;
};
