import { faTruck, faGlobe, faShieldHalved, faHeadset } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Features() {
    const feature = [
        {
            icon: faTruck,
            title: "Safe Transfer",
            discription: "We provide safe and reliable  ",
        },
        {
            icon: faGlobe,
            title: "Global Search",
            discription: "Find the best places to visit ",
        },
        {
            icon: faShieldHalved,
            title: "Secure Payment",
            discription: "Your transactions are protected ",
        },
        {
            icon: faHeadset,
            title: "24/7 Support",
            discription: " help you anytime.",
        }
    ]

    return (
        <section className="py-5 ">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  *:bg-gray-100/30 rounded-2xl py-3 px-3">
                    {feature.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-shadow-amber-500 bg-white">
                            <div className=" ">
                                <FontAwesomeIcon icon={item.icon} className="w-5 text-primary-600" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-primary-600">{item.title}</h3>
                                <p className=" opacity-90  text-gray-500">
                                    {item.discription} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features

