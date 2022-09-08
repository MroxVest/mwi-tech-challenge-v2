import Image from 'next/image'
import  '../styles/Home.module.css'
import './api/content.js'

export default function Home(data) {
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
      <div id="home">
      <header>
          <div id="logo">
              <Image src={data.logo.link} alt="Midwestern Interactive logo and MIDWESTERN in text" width={280} height={65} />
          </div>
          <div id="contact">
              <a href="\contact">contact</a>
          </div>
  </header>
  <div id="box-row">
      <div id="box-1">
          <Image src={data.talkie.link} alt="microphone with lightning bolts coming out the top to show electricity or sound" width={50} height={90} />
          <h2>{data.h2.content}</h2>
          <p>{data.box1.content}</p>
          <button>{data.button.content}</button>
      </div>
      <div id="box-2">
          <Image src={data.rabbit.link} alt="rabbit with lines behind it to show motion" width={85} height={65} />
          <h2>{data.h2.content}</h2>
          <p>{data.box2.content}</p>
          <button>{data.button.content}</button>
      </div>
      <div id="box-3">
          <Image src={data.shield.link} alt="circular shield with lines in grid pattern" width={80} height={80} />
          <h2>{data.h2.content}</h2>
          <p>{data.box3.content}</p>
          <button>{data.button.content}</button>
      </div>
  </div>
  <div id="text-row">
      <h1>{data.h1.content}</h1>
      <hr />
    <p>{data.h1text.content}</p>
  </div>
  <div id="array-row" className="arrayHide">
      <ul>
      {resultArray.map((name) => (
        <li key={name}>{name}</li>
      ))}
      </ul>
      <p id="array-notice" className="arrayHide">The array is already showing.</p>
  </div>
  </div>
  );
}
