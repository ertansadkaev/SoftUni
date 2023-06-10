function Architect(ArchitectProjects){

    let firstName = (ArchitectProjects[0]);
    let lastName = (ArchitectProjects[1]);
    let number = (ArchitectProjects[2]);
    let hoursperprojects = 3;

    let Projects ="The Architect "+ firstName + lastName + " will need "+ (number * hoursperprojects) + " Hours to complete " + ArchitectProjects[2] + " Pojects.";
    console.log(Projects);

}

Architect([" Ertan ", " Sadkaev ", 4]);

