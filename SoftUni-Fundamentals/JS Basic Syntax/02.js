function student(name,age,grade){
    let studentName = name;
    let studentAge = age;
    let studentGrade = grade;

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`);

}
student(`John`, 15, 5.54678);