const movies = [{ title: 'life of Pie', body: 'save animals' },
{ title: 'jurassic park', body: 'based on Dianosur' }]

function getMovies() {
    movies.forEach((movie, index) => {
        console.log(movie.title);
        //console.log(movie.body);
    })
}
function creatMovies(movie) {
    return new Promise((resolve, reject) => {
        movies.push(movie);
        const error = false;
        if (!error) {
            resolve();
        }
        else {
            reject('Error:something went wrong');
        }
    })
}
async function init(){
    await creatMovies({title:'The Lion King',body:'save life of lions'}).catch((e) => {console.log('In last catch block') });
    getMovies();
}
init();