module.exports = function check(str, bracketsConfig) {
    console.log(str);
    console.log(bracketsConfig);
    let openedBrackets = [];
    let closedBrackets = [];
    let stackOfBrackets = [];
    bracketsConfig.forEach((element) => {
        openedBrackets.push(element[0]);
        closedBrackets.push(element[1]);
    });
    str.split("").forEach((el) => {
        if (openedBrackets.includes(el) && closedBrackets.includes(el)) {
          if (stackOfBrackets.slice(-1).join('') === el){
            stackOfBrackets.pop();
          } else {
            stackOfBrackets.push(el);
          }
        } else if (openedBrackets.includes(el)) {
            stackOfBrackets.push(el);
        } else if (closedBrackets.includes(el)) {
            let bracketIndex = closedBrackets.indexOf(el);
            if (
                stackOfBrackets.slice(-1).join("") ===
                openedBrackets[bracketIndex]
            ) {
                stackOfBrackets.pop();
            } else {
                stackOfBrackets.push(el);
            }
        }
    });
    console.log(stackOfBrackets);
    if (stackOfBrackets.length === 0) {
        return true;
    } else {
        return false;
    }
};

