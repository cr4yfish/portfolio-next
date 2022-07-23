import Image from "next/image"

import logo_src from "/images/logo.png"

export default function Logo() {
    
    return (
    <>
    <span className="logo"><Image width={15} height={15} className="logo_image" src={logo_src} alt="logo" /><span style={{marginLeft: "5px"}}  className="brevia_bold">Manuel Fahmy</span></span>
    </>
    )
}