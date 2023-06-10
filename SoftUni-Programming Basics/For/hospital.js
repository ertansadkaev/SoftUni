function hospital (input){
    let period = Number(input[0]);
    let doctors = 7;
    let checked = 0;
    let nonChecked = 0;
    let patients = 0;
    
    for (i = 1; i <= period; i++){
        let patients = Number(input[i]);
        if(i % 3 === 0 && nonChecked > checked){
            doctors++;
        }
        if (patients >= doctors){
            nonChecked += patients - doctors;
            checked += doctors;
        } else {
            checked += patients;
        }
    }
    console.log(`Treated patients: ${checked}.`);
    console.log(`Untreated patients: ${nonChecked}.`);
}
hospital(["6","25","25","25","25","25","2"]);