import { IoMdSearch } from "react-icons/io";



function Hero() {

    const sentences = [
        "Exploring Places, Connecting People",
        "Discover New Horizons, Embrace Adventure",
        "Uncover Hidden Gems, Share the Journey",
        "Venture Beyond the Ordinary, Connect with Locals",
        "Experience the World, Build Connections",
        "Explore Diverse Destinations, Meet New Faces",
        "Travel Far, Make Memories, Connect with Cultures",
        "Journey to the World's Wonders, Unite with Travelers",
        "Adventure Awaits, Connections Await You",
        "Wander the Globe, Build Lasting Friendships"
    ];


    return (
        <div
            className="w-full h-[500px] relative bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('/herobg.webp')" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            <div className="flex flex-col items-center gap-4 justify-center text-white relative z-10">
                <h1 className="text-4xl font-extrabold ">
                    Making Travel Easy, Memorable & Magical
                </h1>
                <p className="text-2xl font-bold">{sentences[0]}</p>

                <div className="flex items-center justify-between mt-10 text-xl font-semibold w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-4xl bg-white px-4 py-1 border-4 border-orange-300">
                    <input
                        type="text"
                        name="destination"
                        id="destination"
                        className="text-black px-2 w-full focus:outline-none py-1 sm:px-3 sm:py-2"
                        placeholder='Search destination "Rajasthan"'
                    />
                    <IoMdSearch className="text-xxl sm:text-4xl cursor-pointer text-black" />
                </div>

            </div>
            <div className="w-full">

            </div>
        </div>
    )
}

export default Hero
