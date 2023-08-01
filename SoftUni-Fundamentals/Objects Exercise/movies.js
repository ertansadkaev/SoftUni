function movies(array){
    let moviesInfo = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index].includes(`addMovie`)){
            let name = array[index].split('addMovie ')[1];
            moviesInfo.push({name})
        } 
        else if (array[index].includes(`directedBy`)){
            let [name, director] = array[index].split(' directedBy ');
            let movie = moviesInfo.find(m => m.name === name);
            if (movie){
                movie.director = director;
            }
        } 
        else if (array[index].includes(`onDate`)){
            let [name, date] = array[index].split(' onDate ');
            let movie = moviesInfo.find(m => m.name === name);
            if (movie){
                movie.date = date;
            }
        }
    }
    moviesInfo.forEach(movie => {
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);