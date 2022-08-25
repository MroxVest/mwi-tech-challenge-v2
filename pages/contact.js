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
        <div id="contact-body">
            <div id="contact-left">
                <div id="contact-text-row">
                    <h1>Heading One</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.</p>
                    <p>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</p>
              </div>
            </div>
            <div id="contact-right">
                <div id="contact-form-row">
                    <h2>Heading Two</h2>
                    <form id="contact-form">
                        <div className="textfield" id="fname">
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="textfield" id="lname">
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="textfield" id="title">
                            <input type="text" placeholder="Title" />
                        </div>
                        <div className="textfield" id="email">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="textfield" id="message">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}