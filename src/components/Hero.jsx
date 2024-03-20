
function Hero() {

    return (
        <div>
            <div className="w-full h-[500px] bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <div className="w-5/6 text-white">
                    <h1 className="text-4xl font-semibold">The future of business banking is here</h1>
                    <p className="text-lg mt-2">Open a new business account or switch to us in minutes.</p>
                    <div className="mt-4 flex gap-4">
                        <button className="px-4 py-2 bg-white text-lightBlue font-semibold rounded-md">Open an account</button>
                        <button className="px-4 py-2 bg-transparent border border-white text-white font-medium rounded-md">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero