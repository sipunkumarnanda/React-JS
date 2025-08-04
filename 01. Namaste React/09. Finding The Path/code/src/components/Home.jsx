

import { useState } from "react"
import Resturants from "./Resturants"
import SearchBox from "./SearchBox"

const Home = () => {
    const [searchtext, setsearchText] = useState("kfc")
  return (
  <>
   <SearchBox searchtext={searchtext} setsearchText={setsearchText} />
   <Resturants searchtext={searchtext}/>
  </>
  )
}

export default Home