import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ContextShop"
import Title from "./Title";
import ProductItem from "./ProductItem";


const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);
    const [dataLenght, setDataLenght] = useState(5);

    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[])
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
        Step into Style: Discover the Latest Trends and Elevate Your Wardrobe Today!
        </p>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            latestProduct.slice(0,dataLenght).map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }

      </div>
      <div className={dataLenght === latestProduct.length ? 'hidden' : ''}>
      <button 
                    onClick={()=> setDataLenght(latestProduct.length)}
                    className="justify-center"
                    >View All</button>
      </div>
    </div>
  )
}

export default LatestCollection
