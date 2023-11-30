import { Link } from "react-router-dom"
import { DarkButton } from "../DarkButton/DarkButton"
import NavLink from "./NavLink"

const Header = () => {
    return (
        <header className="w-full py-7 bg-28293E">
            <div className="container">
                <div className="flex items-center">
                    <Link to="/" className="logHeader">
                        <img src="/assets/images/logo.svg" alt="" />
                    </Link>
                    <div className="navBar flex items-center mx-auto">
                        <ul className="nav flex items-center gap-16">
                            <li className="nav-item">
                                <NavLink to="/about" className="text-base text-white text-center py-4" activeClassName={"active"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="text-base text-white text-center py-4" activeClassName={"active"}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" className="text-base text-white text-center py-4" activeClassName={"active"}>Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="text-base text-white text-center py-4" activeClassName={"active"}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <DarkButton
                        buttonClassName="btn btn-default py-4 px-9"
                        text="CONTACT"
                        buttonLink="/contact"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header