import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HistoricalPlaceCard from "./HistoricalPlaceCard"

function TopReatedPlace() {

    return <>
        <div>
            <div className="container space-y-5">
                <div className="flex justify-between">
                    <h2 className="ps-3 border-l-5 border-green-700 rounded-l font-bold text-3xl text-primary-600">Famous archaeological sites</h2>
                    <div className="flex items-center">
                        <span className="text-lg text-primary-600">View All Sites</span>
                        <FontAwesomeIcon icon={faArrowRight} className="w-6 ps-2 text-primary-600" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <HistoricalPlaceCard />
                    <HistoricalPlaceCard />
                    <HistoricalPlaceCard />
                    <HistoricalPlaceCard />
                    <HistoricalPlaceCard />
                    <HistoricalPlaceCard />
                </div>
            </div>
        </div>
    </>
}
export default TopReatedPlace