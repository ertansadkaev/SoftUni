function graduation (input){
    let name = input[0];
    let index = 1;
    let grade = Number(input[index]);
    let exclusion = 0;
    index++;
    let classAtSchool = 1;
    let totalGrade = 0;
    while (classAtSchool <= 12){
        if (grade >= 4.00){
            classAtSchool++;
            totalGrade += grade;
        } else {
            exclusion++;
        }
        if (exclusion > 1){
            console.log(`${name} has been excluded at ${classAtSchool} grade`);
            break;
        }
        grade = Number(input[index]);
        index++;

    }
    if (exclusion < 2){
    console.log(`${name} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`);
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])