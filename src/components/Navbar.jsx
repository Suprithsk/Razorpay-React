
import Logo from '../assets/logo.svg'
import IndiaFlag from '../assets/india-flag.svg'

function Navbar() {
    return (
        <div className="w-full flex justify-center bg-deepBlue h-24 font-mulish">
            <div className="w-5/6 flex items-center justify-between">
                <div className='cursor-pointer'>
                    <img width={`125px`} height={`30px`} src={Logo} alt="" />
                </div>
                <div className='w-9/12 mx-10 lg:flex justify-between hidden'>
                    <a className='text-white font-medium hover:text-lightBlue transition-all duration-200' href="#">Payments</a>
                    <a className='text-white font-medium hover:text-lightBlue transition-all duration-200' href="#">Banking</a>
                    <a className='text-white font-medium hover:text-lightBlue transition-all duration-200' href="#">Corporate card</a>
                    <a className='text-white font-medium hover:text-lightBlue transition-all duration-200' href="#">Payroll</a>
                    <a className='text-white font-medium hover:text-lightBlue transition-all duration-200' href="#">Resources</a>
                    <a className='text-white font-medium hover:text-lightBlue transition-all duration-200' href="#">Support</a>
                    <a className='text-white font-medium hover:text-lightBlue transition-all duration-200' href="#">Pricing</a>
                </div>
                <div className='w-3/12 flex items-center gap-2' >
                    <img className="hidden lg:block" src={IndiaFlag} alt="" />
                    <button className='px-3  py-2 font-semibold text-white border border-lightBlue rounded-sm border-solid'>Log in</button>
                    <button className='px-3 hidden lg:block py-2 font-semibold text-lightBlue300 bg-white rounded-sm hover:text-lightBlue500'>Sign up &#10132;</button>
                    <div className=" w-[18px] flex flex-col gap-1 ml-4 lg:hidden " >
                        <div className=" bg-white w-full h-[1.2px] " ></div>
                        <div className=" bg-white w-full h-[1.2px] " ></div>
                        <div className=" bg-white w-full h-[1.2px] " ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar