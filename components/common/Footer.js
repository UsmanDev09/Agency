import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              {/* <TitleLogo title='creative' caption='7' className='logobg' /> */}
              CloudOpsClan
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+1 001 234 5678</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            {/* <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About agency</Link>
              </li>
              <li>
                <Link href='/'>Our team</Link>
              </li>
              <li>
                <Link href='/'>Showcase</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Demo design system</Link>
              </li>
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul> */}
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>GitOps</Link>
              </li>
              <li>
                <Link href='/'>DevOps</Link>
              </li>
              <li>
                <Link href='/'>FinOps</Link>
              </li>
              <li>
                <Link href='/'>CloudOps</Link>
              </li>
            </ul>
            {/* <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul> */}
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 CloudOpsClan.</span>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
