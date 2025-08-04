
import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { restaurantList } from "../config";
import ShimmerUi from "./ShimmerUi";

  const Body = () => {

    const [allResturants, setAllResturants] = useState([])
    const [filteredResturants, setFilteredResturants] = useState([])

    // searchText is local state variable 
    const [searchText , setsearchText] = useState("kfc") // use to create state local variable 
    const [isLoading, setIsLoading] = useState(true)

    // console.log(searchInput);

    const onChangeInput = (e) => {
      setsearchText(e.target.value)
    }

    const filterData = (searchInput , restur) => {
      const filteredData = restur.filter((restaurant)=>{
          return restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
        })

       return filteredData
    }

    // Search logic 
     useEffect(()=>{
       const filteredData = filterData(searchText, allResturants)
      searchText.length == 0 ? setFilteredResturants(allResturants) : setFilteredResturants(filteredData)
    },[searchText])


    // Empty dependency array => once after render
    // if dependency array is [searchInput] => once after render + everytime after rerender when my search text changes 
    useEffect(()=>{
      // API call
      getRestaurants()
    },[])

    async function  getRestaurants() {
     setIsLoading(true)
     try {
       const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2959847&lng=85.8246101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const data = await response.json()
      // console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setAllResturants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredResturants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     } catch (error) {
      console.log("Failed to fetch restaurants");
     }finally{
      setIsLoading(false)
     }
    }

    console.log("Render");


    // Conditional rendering
    // if restaurant is empty => shimmer ui 
    // if restaurant has data => then acutual data UI 
  
    // not render component (early return)
    if(!allResturants) return null

    if(isLoading) return <ShimmerUi />

    if(filteredResturants.length == 0) return <h1>No restaurant match your filter</h1>

    return (
     <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search" value={searchText} 
        onChange={(e)=> onChangeInput(e)}
        />

        <button className="search-btn"
        onClick={()=>{
          // need to filter the data
          const filteredData = filterData(searchText , allResturants)
          setFilteredResturants(filteredData)
        }}
        >search</button>
      </div>

      {/* ------------------------------------- */}

      <div className="resturant-list">
        {/* // you have to write the logic for no restaurant found here  */}
      {filteredResturants.map((resturant)=>{
        return (
          <ResturantCard {...resturant.info} key={resturant.info.id} />
        )
      })}
      </div>
     </>
    )
  };

  export default Body