var movies = 
    ["https://m.media-amazon.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOWQ4OTdlODQtMDc3Yy00MGVmLWExYjUtOGI0Yjg4MDQzNDNhXkEyXkFqcGdeQXVyNjIzMzkyMzk@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTYwMzMwMzgxNl5BMl5BanBnXkFtZTgwMTA0MTUzMDI@._V1_UX182_CR0,0,182,268_AL_.jpg",]

var moviesNames = ["Twelve Monkeys", "Hush", "Noctunal Animals"]

var moviesLinks = 
    ["https://www.imdb.com/title/tt0114746/?ref_=fn_al_tt_1",
    "https://www.imdb.com/title/tt5022702/?ref_=nv_sr_srsg_0",
    "https://www.imdb.com/title/tt4550098/?ref_=nv_sr_srsg_0"]

for (var i=0; i < movies.length; i++) {
    document.write("<figure>" + "<a href=" + moviesLinks + " target='_blank'>" + "<img src='" + movies[i] + "' alt='IMDb'></a><figcaption>" + moviesNames[i] + "</figcaption></figure>")
}