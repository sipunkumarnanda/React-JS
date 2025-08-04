import { useParams } from "react-router"

const RestaurantMenu = () => {
    const params = useParams()
    console.log(params);
  return (
    <div>
        <h1>Restaurant is : 123</h1>
        <h2>Namaste</h2>
    </div>
  )
}

export default RestaurantMenu