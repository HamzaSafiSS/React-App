const movieData = [
  {
    title:"Al-Risalah",
    rating:5,
    poster:"/battleimage1.webp",
    isReleased:true
  },
  {
    title:"Al-Ahli",
    rating:3,
    poster:"/battleimage1.webp",
    isReleased:false
  },
  {
    title:"Al-hilal",
    rating:2,
    poster:"/battleimage1.webp",
    isReleased:false
  },
  {
    title:"Al-Nasr",
    rating:4,
    poster:"/battleimage1.webp",
    isReleased:true
  },
]

 function App() {
return <div className="app">
        <Header/>
        <MovieList/>
        <Footer/>
       </div>
}

function Header() {
        return <h1>Movie Catalog App</h1>
}

function MovieList() {
  const movieNum = movieData.length
  if (movieNum ===0) return <p>Our catalog is coming soon. Stay tuned!"</p>
        return <ul className="container">
       {  
        movieData.map((movie)=> <Movie movie={movie} key={movie.title}></Movie>)
        }
              </ul>
}

function Movie({movie}) {
  let rate = movie.rating >=1 && movie.rating <=5 ? '⭐'.repeat(movie.rating) : "Invalid Rating"
   return  <li className="movieList">
            <img src={movie.poster}></img>
            <h3>{movie.isReleased ? rate : "Coming Soon"}</h3>
            <div className="leftSide">
            <h2>{movie.title}</h2>
            <h3>{movie.isReleased ? "Released" : "Not Released"}</h3>
            </div>
           </li>     
}

function Footer() {
  const hour = new Date()
  const curHour = hour.getHours()
  if(curHour > 9 && curHour < 21)
return <footer>
<span>
Open for Movie Suggestions
</span>
</footer>
return <footer>
<span>
We're offline now. Catch you later!
</span>
</footer>
}



export default App