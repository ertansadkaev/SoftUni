function employees (input){
    let employeeList = {};
    
    for (let index = 0; index < input.length; index++) {
        employeeList.employeeName = input[index];
        employeeList.personalNum = input[index].length; 
        for (const key in employeeList) {
            console.log(`Name: ${employeeList.employeeName} -- Personal Number: ${employeeList.personalNum}`);
            break;
        } 
    } 
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);