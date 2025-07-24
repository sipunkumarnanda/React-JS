
import { useState } from "react";
import ResturantCard from "./ResturantCard";
import { restaurantList } from "../config";

  const Body = () => {

    const [resturants, setResturants] = useState(restaurantList)

    const searchTxt = "kfc"  // local variable in js 

    // searchText is local state variable 
    const [searchInput , setsearchInput] = useState("kfc") // use to create state local variable 

    const [searchClicked, setSearchClicked] = useState("false")

    const onChangeInput = (e) => {
      setsearchInput(e.target.value)
    }

    const filterData = (searchInput , restur) => {
      const filteredData = restur.filter((resturant)=>{
          return resturant.info.name.includes(searchInput)
        })

       return filteredData
    }
  
    return (
     <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search" value={searchInput} 
        onChange={(e)=> onChangeInput(e)}
        />
        {/* <h1>{searchClicked}</h1>
        <button className="search-btn"
        onClick={()=>{
          {searchClicked == "true" ? setSearchClicked("false") : setSearchClicked("true")}
        }}
        >search</button> */}

        <button className="search-btn"
        onClick={()=>{
          // need to filter the data
          const data = filterData(searchInput , resturants)
          setResturants(data)
        }}
        >search</button>
      </div>

      <div className="resturant-list">
      {resturants.map((resturant)=>{
        return (
          <ResturantCard {...resturant.info} key={resturant.info.id} />
        )
      })}
      </div>
     </>
    )
  };

  export default Body