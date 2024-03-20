

function Navbar() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-5/6">
                <nav className="flex justify-between items-center py-4">
                    <div>
                        <a href="#" className="text-2xl font-bold">Logo</a>
                    </div>
                        <ul className="flex w-2/6 justify-between">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar