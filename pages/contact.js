import Image from 'next/image'
import logo from '../public/Logo.png'

export default function ContactPage () {
    return (
        <div id="contact">
        <header>
          <div id="logo">
              <Image src={logo} alt="Midwestern Interactive logo and MIDWESTERN in text" width={280} height={65} />
          </div>
          <div id="home-link">
              <a href="\">home</a>
          </div>
  </header>
  </div>
    );
}