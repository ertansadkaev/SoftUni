function grades (input){
    let studentCount = Number(input[0]);
    let fail = 0;
    let between3 = 0;
    let between4 = 0;
    let excellent = 0;
    let sum = 0;
    for (index = 1; index <= studentCount; index++){
        let studenResults = Number(input[index]);
        sum += studenResults;
        if (studenResults < 3){
            fail++;
        } else if (studenResults < 4){
            between3++;
        } else if (studenResults < 5){
            between4++;
        } else {
            excellent++;
        }
    }
    let totalFailed = (fail / studentCount * 100).toFixed(2);
    let totalBetween3 = (between3 / studentCount * 100).toFixed(2);
    let totalBetween4 = (between4 / studentCount * 100).toFixed(2);
    let totalExcellent = (excellent / studentCount * 100).toFixed(2);

    let avgCount = (sum / studentCount).toFixed(2);

    console.log(`Top students: ${totalExcellent}%`);
    console.log(`Between 4.00 and 4.99: ${totalBetween4}%`);
    console.log(`Between 3.00 and 3.99: ${totalBetween3}%`);
    console.log(`Fail: ${totalFailed}%`);
    console.log(`Average: ${avgCount}`);

}
grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"]);