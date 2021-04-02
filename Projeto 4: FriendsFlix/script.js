var movies = 
    ["https://m.media-amazon.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOWQ4OTdlODQtMDc3Yy00MGVmLWExYjUtOGI0Yjg4MDQzNDNhXkEyXkFqcGdeQXVyNjIzMzkyMzk@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTYwMzMwMzgxNl5BMl5BanBnXkFtZTgwMTA0MTUzMDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var moviesNames = ["Twelve Monkeys", "Hush", "Noctunal Animals", "Inglourious Bastards", "Django Unchained", "Pulp Fiction",
                    "Eternal Sunshine of the Spotless Mind", "Captain Fantastic", "Coherence", "Get Out", "Mr. Nobody"]

var moviesLinks = 
    ["https://www.imdb.com/title/tt0114746",
    "https://www.imdb.com/title/tt5022702",
    "https://www.imdb.com/title/tt4550098",
    "https://www.imdb.com/title/tt0361748",
    "https://www.imdb.com/title/tt1853728",
    "https://www.imdb.com/title/tt0110912",
    "https://www.imdb.com/title/tt0338013",
    "https://www.imdb.com/title/tt3553976",
    "https://www.imdb.com/title/tt2866360",
    "https://www.imdb.com/title/tt5052448",
    "https://www.imdb.com/title/tt0485947"]

for (var i=0; i < movies.length; i++) {
    document.write("<div class='column'><figure>" + "<a href=" + moviesLinks + " target='_blank'>" + "<img src='" + movies[i] + "' alt='IMDb'></a><div class='titulo'><figcaption>" + moviesNames[i] + "</figcaption></div></figure></div>")
}