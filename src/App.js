import './App.css';
import Navbar from './components/navbar/Navbar';
import Axios from 'axios';
import {useState, useEffect} from "react"
import Card from './components/cards/Card';
import Footer from './components/footer/Footer';
import {Link} from "react-scroll"

function App() {
  const [houses, setHouses] = useState([])
  const [search,setSearch] = useState("")

  useEffect(() => {
     Axios.get("https://rentalbackend-production.up.railway.app/").then((res)=>{
      setHouses(res.data.houseData);
    }) 
  }, [])

  function handleCity(event) {
    setSearch(event.target.value)
  }

  function basement(){
    setSearch("basement")   
  }

  function firstfloor(){
    setSearch("firstFloor")
  }

  function secondfloor(){
    setSearch("secondFloor")
  }

  function noFilter(){
    setSearch("")
  }

  function priceSort(){
    setSearch("sort")
  }


  return (
    <div className="App">
      <Navbar />
          <div className="search">
            <h1 className="coin-text">Search Home</h1>
            <div className='container text-center'>
              <form>
                <input type="text" onChange={handleCity} placeholder='Search by City or House type' className="homeinput" />
              </form>

              <div class="btn-group">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Floor
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" onClick={noFilter} >Clear</a></li>
                  <li><a class="dropdown-item" onClick={priceSort} >Price Sort</a></li>
                  <li><a class="dropdown-item" onClick={basement} >Basement</a></li>
                  <li><a class="dropdown-item" onClick={firstfloor} >First Floor</a></li>
                  <li><a class="dropdown-item" onClick={secondfloor} >Second Floor</a></li>
                </ul>
              </div>
            </div>
            
           
          </div>
        
      

      <div className="container">
        <div className="flexBox row mx-auto gy-4 column-gap-4 container-fluid" >
          
          {houses.length===0?<div class="spinner spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div>:houses.filter((house)=>{
            if(search === "basement"){
              return house.basement === true && house.firstFloor === false && house.secondFloor === false;
            }
            else if(search === "firstFloor"){
              return house.basement === false && house.firstFloor === true && house.secondFloor === false;
            }
            else if(search === "secondFloor"){
              return house.basement === false && house.firstFloor === false && house.secondFloor === true;
            }
            else if(search === "sort"){
              return houses.sort((p1,p2)=>(p1.rent < p2.rent)?-1:1)
            }
            else{
              return house.city.toLowerCase().includes(search.toLowerCase())
            }
          }).map((house)=>{
                return (
                  <Card className="col" img={house.url} rent={house.rent} city={house.city} basement={house.basement} firstFloor={house.firstFloor} secondFloor={house.secondFloor} />
                )
            })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
