

const LetterBox = () => {
  return (
    <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">Subscribe now and get 20% discount</p>
            <p className="text-gray-500 mt-3">Join Today and Save 20% on Your First Purchase—Exclusive Discounts Await Our Subscribers!</p>
            <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-5 border pl-3">
                <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email" />
                <button className="bg-blue-950 text-white text-xs px-10 py-4">SUBSCRIBE</button>
            </form>
      
    </div>
  )
}

export default LetterBox
