import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              {/* <TitleLogo title='creative' caption='7' className='logomin' /> */}
              CloudOpsClan
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='#home' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='#about' className={activeLink == "/about" ? "activeLink" : "none"}>
              About
            </Link>
            <Link href='#services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href='#contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <Link href='#tools' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Tools
            </Link>
            {/* <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Team
            </Link> */}
            {/* <Link href='/' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link>
            <Link href='/' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link> */}
            <button className='button-primary'>book a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
