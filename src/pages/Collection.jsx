import { useContext, useState } from "react"
import { ShopContext } from "../context/ContextShop"


const Collection = () => { 
  const{ products }= useContext(ShopContext);

  const [showFilter, setFilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>

        {/* Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
          <p className="mb-3 text-sm font-medium">CATAGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} /> Men

            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} /> Women

            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} /> Kids

            </p>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Collection
