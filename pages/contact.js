import Image from 'next/image'
import logo from '../public/Logo.png'

export default function ContactPage () {
    return (
    <div id="contact-page">
        <header>
          <div id="logo">
              <Image src={logo} alt="Midwestern Interactive logo and MIDWESTERN in text" width={280} height={65} />
          </div>
          <div id="home-link">
              <a href="\">home</a>
          </div>
        </header>
        <div id="contact-text-row">
            <h1>Heading One</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.</p>
            <p>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</p>
        </div>
    </div>
    );
}