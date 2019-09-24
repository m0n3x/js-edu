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
    let weeks = 0;
    let MAX_LEVEL = 800 + 500;
    let level = 0;

    if (knowsProgramming) {
        MAX_LEVEL -= 500;
    }
    while (level < MAX_LEVEL) {
      level+=config[focus];
      weeks++;
    }

    return weeks;
};
