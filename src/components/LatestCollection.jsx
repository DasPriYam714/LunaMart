import { useContext } from "react"
import { ShopContext } from "../context/ContextShop"
import Title from "./Title";


const LatestCollection = () => {
    const { products } = useContext(ShopContext);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
        Step into Style: Discover the Latest Trends and Elevate Your Wardrobe Today!
        </p>

      </div>
    </div>
  )
}

export default LatestCollection
