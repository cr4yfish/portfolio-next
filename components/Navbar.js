import Link from "next/link"
import { FaBars } from "react-icons/fa"

import Logo from "./Logo"

export default function Navbar() {


return (
<>
    <span className="content_wrapper">
      <header>
        <span className="logo_wrapper unselectable"><Logo /></span>
            
        <div className="header_menu unselectable">
          <Link href="code"><a className="pointer rubik_regular menu_item">Coding</a></Link>
          <Link href="https://www.behance.net/cr4yfish"        target="_blank"><a className="rubik_regular menu_item">Design <i className="fa-solid fa-arrow-up-right-from-square"></i></a></Link>
          <Link href="https://www.instagram.com/manuelfahmyz/" target="_blank"><a className="pointer rubik_regular menu_item">Photography <i className="fa-solid fa-arrow-up-right-from-square"></i></a></Link>
          <Link href="https://soundcloud.com/cr4yfish"         target="_blank"><a className="pointer rubik_regular menu_item">Music <i className="fa-solid fa-arrow-up-right-from-square"></i></a></Link>
        </div>

        <FaBars id="navbarOpener" className='pointer' />

      </header>
    </span>
</>
)
}