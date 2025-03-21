import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                 </div>
            </header>
            <div className="body">
              <h3>Avant-garde ( Client -Tata Motors )
              </h3>
              <p> Contributed to avant-garde projects by resolving interface challenges and test case issues, enhancing user experience while balancing dual roles as a front-end developer and manual tester. Gained valuable knowledge of automotive manufacturing through plant visits, focusing on chassis, engine, and BIW processes, and collaborated with engineers to develop software supporting automotive design and production. Played a key role in ensuring seamless integration of design and functionality.</p></div>
            <footer> <ul className="tech-list"> <li>React JS</li> <li>Selienium</li> <li> Java</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              </div>
            </header>
            <div className="body">
              <h3>MBSE Integration ( Client - Tata Motors )</h3>
              <p>
              Worked on developing and enhancing Java applications to support MBSE initiatives, focusing on automating processes to improve software deployment efficiency, reliability, and collaboration between software and mechanical teams. Implemented MBSE initiatives using Java, JFrog, and Jenkins, and streamlined the integration of software tools with automotive engineering systems.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Jira</li>
               
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Tusharthakre20/Summarize" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://tusharthakre20.github.io/Summarize/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Summarize ( Personal Project )</h3>
              <p>
              The reactjs-ai-summarizer project aims to deliver a seamless, AI-powered text summarization experience. Inspired by a YouTube tutorial, it focuses on enhancing user experience by enabling quick and intuitive generation of concise summaries from lengthy articles or documents.</p> </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Redux</li>
               
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Tusharthakre20/UrbanCart" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://tusharthakre20.github.io/UrbanCart/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>UrbanCart( Personal Project )</h3>
              <p>UrbanCart is a fully responsive shopping platform built with modern technologies. We offer a wide range of products, including fashion for men and women, electronics, and jewelry. Our goal is to provide a smooth and enjoyable shopping experience with high-quality products and excellent customer service.</p></div>
              <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Redux</li>
                <li>Bootstrap</li>
               
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Tusharthakre20/magic-card-game" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://card-match-game-hritik-sharma.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Magic Card Game( Personal Project )</h3>
              <p>In these website you have to choose the two matching card. If both of your selected card is matched then card will stay flipped if they do not matched the card will flipped back to card back cover. It also have sound when you filp card, if they matched and when you win the game also.</p></div> <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>css</li>
                <li>React confetti</li>
               
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}