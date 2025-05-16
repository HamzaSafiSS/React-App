const lectureData = [
  {
    title:"Usul1",
    speaker:"Ustaz Muhammad",
    length:120,
    category:"Tawheed",
    poster:"/quran-holy-book-of-muslims.webp",
    isAvailable:true

  },
  {
    title:"Usul2",
    speaker:"Ustaz Muhammad",
    length:120,
    category:"Tawheed",
    poster:"/quran-holy-book-of-muslims.webp",
    isAvailable:false

  },
  {
    title:"Usul3",
    speaker:"Ustaz Muhammad",
    length:120,
    category:"Tawheed",
    poster:"/quran-holy-book-of-muslims.webp",
    isAvailable:false

  },
  {
    title:"Usul4",
    speaker:"Ustaz Muhammad",
    length:120,
    category:"Tawheed",
    poster:"/quran-holy-book-of-muslims.webp",
    isAvailable:true

  },
  {
    title:"Usul5",
    speaker:"Sheikh Muhammad",
    length:120,
    category:"Tawheed",
    poster:"/quran-holy-book-of-muslims.webp",
    isAvailable:true
  },
]

function App() {

  return (
    <>
     <Header/>
     <LectureList/>
     <AvailableLectures  />
    </>
  )
}

function Header() {
  return <header className="header">
            <h1>Islamic lecture catalog App</h1>
         </header>
}

function LectureList() {
  if (lectureData.length < 1) return <span className="updatedSoon">Updated Soon</span>
  if(lectureData.length >=1) return <ul className="container">
          {
            lectureData.map((lecture)=><Lecture lecture={lecture} key={lecture.title}></Lecture>)
          }
        </ul>
}

function Lecture({lecture}) {
  
  return     <li className="lecture">
                <img src={lecture.poster}></img>
                <h2>{lecture.title}</h2>
                <h3>{lecture.speaker}</h3>
                <p>{lecture.category}</p>
                <p>{lecture.isAvailable ? lecture.length+" min" : "Coming Soon"}</p>
                <p>{lecture.isAvailable ? "Available Now" : "Not Available"}</p>
             </li>
}

function AvailableLectures() {
        return <ul className="availabel-aontainer">
        <h3 className="availabeheader">AvailableLectures List</h3>
        {
          /*{ lectureData.map((lecture)=> {
            if(lecture.isAvailable) return <AvailableLecture Available={lecture}></AvailableLecture> } */
            lectureData.filter((lecture)=>lecture.isAvailable).map((lecture)=> {
             return <AvailableLecture Available={lecture}></AvailableLecture>
            })
            
          } 
              </ul>
}
function AvailableLecture({Available}) {
  return  <li className="Available">
                <img src={Available.poster}></img>
                <h2>{Available.title}</h2>
                <h3>{Available.speaker}</h3>
                <p>{Available.category}</p>
                <p>{Available.length} min</p>
                <p>{Available.isAvailable}</p>
             </li>
}
export default App
