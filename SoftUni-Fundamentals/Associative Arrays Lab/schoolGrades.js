function schoolGrade(input) {
    let studentBook = {};
    
    for (let line of input){
        let grade = line.split(' ');
        let student = grade.shift();
        let gradeToNum = grade.map(el => parseInt(el));
        
        if (studentBook.hasOwnProperty(student)){
            studentBook[student] = studentBook[student].concat(gradeToNum);
        } else {
            studentBook[student] = gradeToNum;
        }
    }
    let sortedBook = Object.entries(studentBook).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [student, value] of sortedBook){
        let count = 0;
        let sum = 0;
        for (let counter of value){
        sum += counter;
        count++
        }
        totalSum = (sum / count).toFixed(2);
        console.log(`${student}: ${totalSum}`);
    }
}
schoolGrade(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);