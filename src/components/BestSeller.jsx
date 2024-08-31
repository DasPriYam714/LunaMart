import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ContextShop"
import Title from "./Title"
import ProductItem from "./ProductItem"

const BestSeller = () => {
    const { products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [allData, setAllData] = useState(5)

    useEffect(()=>{
        const bestProduct= products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct);
    },[])
  return (
    <div className="my-10">
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">Top Picks Everyone Loves: Shop Our Bestsellers and Stand Out Effortlessly!</p>

        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestSeller.slice(0,allData).map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
        </div>
        <div className={allData === bestSeller.length ? 'hidden' : ''}>
      <button 
                    onClick={()=> setAllData(bestSeller.length)}
                    className="justify-center"
                    >View All</button>
      </div>
      
    </div>
  )
}

export default BestSeller
