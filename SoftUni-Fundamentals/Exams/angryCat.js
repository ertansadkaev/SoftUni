function angryCat(items, entryPoint, valuable) {
    let left = items.slice(0, entryPoint);
    let right = items.slice(entryPoint + 1);
    let sumL = 0;
    let sumR = 0;
    let num = items[entryPoint];
 
    if (valuable === "expensive") {
        sumL = left.filter(n => n >= num);
        sumL.length === 0 ? sumL = 0 : sumL = sumL.reduce((el, x) => el + x);
        sumR = right.filter(n => n >= num);
        sumR.length === 0 ? sumR = 0 : sumR = sumR.reduce((el, x) => el + x);
 
    } else if (valuable === "cheap") {
        sumL = left.filter(n => n < num);
        sumL.length === 0 ? sumL = 0 : sumL = sumL.reduce((el, x) => el + x);
        sumR = right.filter(n => n < num);
        sumR.length === 0 ? sumR = 0 : sumR = sumR.reduce((el, x) => el + x);
    }
    sumL >= sumR ? console.log(`Left - ${sumL}`) : console.log(`Right - ${sumR}`);
}
angryCat([6, 2, 3, 4, 0, 6, 7, 8], 5, "expensive")
angryCat([6, 2, 3, 4, 0, 6, 7, 3, 5, -8], 5, "cheap")
angryCat([1, 5, 1], 1, "cheap")                                         //Left - 1
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap")                            // Right - 4
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")      //Left - 20