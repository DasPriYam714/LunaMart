import BestSeller from "../components/BestSeller"
import HeroSection from "../components/HeroSection"
import LatestCollection from "../components/LatestCollection"
import LetterBox from "../components/LetterBox"
import Policy from "../components/Policy"


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <LetterBox/>
    </div>
  )
}

export default Home
