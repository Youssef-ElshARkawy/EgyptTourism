import DealsBanner from "../components/Bannar"
import Features from "../components/Features"
import NewsLatter from "../components/NewsLatter"
import Slider from "../components/Slider"
import TypeOfTourism from "../components/TypeOfTourism"

function HomeScreen() {
    return <>
        <div className="container space-y-3">
            <Slider />

            <Features />

            <TypeOfTourism />

            <DealsBanner />

            <NewsLatter />
        </div>
    </>
}

export default HomeScreen