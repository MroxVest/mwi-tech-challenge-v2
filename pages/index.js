import Image from 'next/image'
import logo from '../public/Logo.png'
import talkie from '../public/Talkie.png'
import rabbit from '../public/Rabbit.png'
import shield from '../public/Shield.png'
import  '../styles/Home.module.css'

export default function Home() {
  const array1 = ['Matt Johnson', 'Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm'];
  const array2 = ['Matt Johnson', 'Bart Paden', 'Bart Paden', 'Jordan Heigle', 'Jordan Heigle', 'Tyler Viles'];
  const addedArray = array1.concat(array2);
  const resultArray = [...new Set(addedArray)];

  function handleClick(){
      if (document.getElementById("array-row").classList.contains("arrayShow")) {
          document.getElementById("array-notice").classList.add("arrayShow");
          document.getElementById("array-notice").classList.remove("arrayHide");
      }
      else {
          document.getElementById("array-row").classList.add("arrayShow");
          document.getElementById("array-row").classList.remove("arrayHide");
      }
  }

  return (
      <>
      <header>
          <div id="logo">
              <Image src={logo} alt="Midwestern Interactive logo and MIDWESTERN in text" width={280} height={65} />
          </div>
          <div id="contact">
              <a href="\contact">contact</a>
          </div>
  </header>
  <div id="box-row">
      <div id="box-1">
          <Image src={talkie} alt="microphone with lightning bolts coming out the top to show electricity or sound" width={50} height={90} />
          <h2>Heading Two</h2>
          <p>Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus.</p>
          <button>Learn More</button>
      </div>
      <div id="box-2">
          <Image src={rabbit} alt="rabbit with lines behind it to show motion" width={85} height={65} />
          <h2>Heading Two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <button>Learn More</button>
      </div>
      <div id="box-3">
          <Image src={shield} alt="circular shield with lines in grid pattern" width={80} height={80} />
          <h2>Heading Two</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
          <button>Learn More</button>
      </div>
  </div>
  <div id="text-row">
      <h1>Heading One</h1>
      <hr />
      <p>Remove the duplicates in 2 Javascript arrays (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <a onClick={handleClick}>this link</a> is clicked. If the operation has been completed already, notify the user that this has already been done.</p>
  </div>
  <div id="array-row" className="arrayHide">
      <ul>
      {resultArray.map((name) => (
        <li key={name}>{name}</li>
      ))}
      </ul>
      <p id="array-notice" className="arrayHide">The array is already showing.</p>
  </div>
  </>
  );
}
