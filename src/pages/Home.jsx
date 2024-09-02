import BestSeller from "../components/BestSeller"
import HeroSection from "../components/HeroSection"
import LatestCollection from "../components/LatestCollection"
import Policy from "../components/Policy"


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
    </div>
  )
}

export default Home
