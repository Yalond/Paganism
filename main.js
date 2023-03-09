import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
*/

document.querySelector('#app').innerHTML = `
  <!--
  <main>
    <div id="main1"></div>
    <div id="placeholdersoyoucanscroll">
    </div>
  </main>-->
    <div class="backgroundContainer", style="max-width:80rem;flex:center">
      <div class="mainContent">

        <img src="https://i.postimg.cc/WzhG7cyJ/thor.png" alt="Thor" style="padding:0rem;padding-bottom:3rem;padding-top:3rem">
        <div class="main1"></div>
        <div class="placeholdersoyoucanscroll"style="font-size:1.2em;text-align:justify;text-justify:inter-word;padding:2rem;padding-top:0rem;color:#d8d8d8">

          <h2> Paganism </h2> 
          Paganism is a term used to describe a broad range of spiritual and religious beliefs and practices that are typically characterized by a connection to nature, the worship of multiple gods and goddesses, and a focus on individual spiritual experience and personal responsibility. The term "pagan" originally referred to people who practiced religions other than Judaism, Christianity, or Islam.
          </br>
          </br>
          There are many different forms of paganism, including Wicca, Druidism, Asatru, and various forms of neo-paganism. Some pagan traditions have their roots in ancient religions, while others are more recent developments.
          </br>
          </br>
          Paganism is often associated with practices such as magic, divination, and ritual, and it is often seen as a spiritual path that emphasizes personal transformation and growth. Some pagans see themselves as part of a broader movement that seeks to challenge dominant religious and cultural norms, while others simply seek to connect with nature and the divine on a personal level.
          </br>
          </br>
          Paganism has experienced a resurgence in popularity in recent decades, particularly in Western countries, and many people are drawn to its focus on nature, community, and individual spirituality.
          
          </br> 

          <h2> Thor </h2> 
          Thor is a prominent figure in Norse mythology and has gained widespread popularity in popular culture through the Marvel Cinematic Universe. He is often depicted as a mighty warrior and god of thunder, wielding a magical hammer named Mjolnir that only he can lift. As the son of Odin, the ruler of the gods, Thor is one of the most powerful and respected beings in Norse mythology.

          </br>
          </br>
          In many tales, Thor is portrayed as a protector of humans, battling against evil creatures and defending the realm of the gods, Asgard. He is also known for his great strength and bravery, as well as his hot-headed nature and occasional fits of anger. Despite his formidable power, Thor is not invincible and faces many challenges throughout his adventures, including battles against powerful enemies such as the frost giants and the fire demon Surtur.
          </br>
          </br>
          Thor's hammer, Mjolnir, is perhaps his most iconic weapon and is said to have the power to control lightning and thunder. It is also said to be unbreakable, and only those deemed worthy by the gods can lift it. This has been a recurring theme in both mythology and the Marvel Cinematic Universe, where Thor's worthiness is often tested.

          </br>
          </br>
            In addition to his physical prowess, Thor is also a skilled diplomat and is known for his wisdom and cunning. He is a beloved figure in Norse mythology and continues to captivate audiences around the world through his many appearances in popular culture.

          </br>
          </br>
          Thor is a prominent figure in Norse mythology and is often depicted as a powerful and benevolent god. He is known as the god of thunder and lightning, and is often seen as a protector of humanity against evil forces. In Norse mythology, Thor is depicted as a courageous and strong warrior, who is willing to risk his life to defend the people he cares about.
          </br>
          </br>
          For some individuals, believing in Thor and the other gods of Norse mythology can offer a sense of connection to their cultural heritage and history. They may find comfort in the idea that there are powerful deities watching over them, and that they can call upon these gods for guidance and protection.
          </br> 
          </br> 
          Ultimately, whether or not to believe in Thor or any other deity is a personal choice, based on one's individual beliefs and experiences. While some may find solace in the idea of a powerful protector god, others may find meaning and purpose in different belief systems.
          </br> 
          </br> 
          </br> 
          </br> 
          </br> 
        </div>
  </div>
`
document.getElementById("body").onscroll = function myFunction() {  
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("main1");
  var xvalue = "center";
  var factor = 0.5;
  var yvalue = scrolltotop * factor;
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}


/*
(function () {
  var body = document.body,
          e = document.documentElement,
          scrollPercent;
  $(window).unbind("scroll").scroll(function () {
      scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
      body.style.backgroundPosition = "0px " + scrollPercent + "%";
  });
})();
*/
//setupCounter(document.querySelector('#counter'))
