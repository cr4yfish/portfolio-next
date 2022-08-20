// components
import Image from 'next/image'
import Header from '../components/Header'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import { Navigation, Pagination, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from 'react-medium-image-zoom'

// styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-medium-image-zoom/dist/styles.css";

// functions
import client from '../functions/SanityClient'
import GetImageUrl from '../functions/GetImageUrl'

// icons
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaBehanceSquare, FaTimes, FaBars } from "react-icons/fa"

// images
import Logo from "../components/Logo"
import lines from "/images/lines.webp"
import selfie from "/images/selfie.webp"
import books from "/images/books.webp"
import computer from "/images/computer.webp"
import music from "/images/music.webp"

export default function Home({ data }) {
return (
  <div>
    <Header title="Manuel Fahmy" description="Hello" />

    <div id="checker"></div>
    <div id="bg"></div>
    <div id="colorOverlay"></div>

    <Navbar />

  <div id="mainContent">
  {console.log(data)}
    <section id="page1" className="content_wrapper">
      <div className="page1_leftside">
        <div className="h1">Hi there,</div>
        <p className="p">I&apos;m Manuel.<br/>I am a <span id="typed"></span></p>
      
        <div id="page1BtnWrapper">
          <Button title="About me" color="primary" />
        </div>
      </div>

      <div id="lines"><Image layout='fill' src={lines} className="unselectable" alt="lines" /></div>
      <span className="picture_wrapper"><Image  width={250} height={250} src={selfie} className="picture unselectable" alt="selfie" /></span>    
    </section>

    <div id="lower_content">

      <section id="page2" className="content_wrapper pages">
        <div className="arrow_wrapper"><i className="fa-solid fa-arrow-down"></i></div>
        <h1 id="scrollHere" className="pages_header brevia_bold">Who I am</h1>
        <div className="fancy_spacer"></div>

        <div className="parahraph_wrapper">
          <p className="block_text rubik_light">I&apos;m Manuel Fahmy and I&apos;m currently studying computer science at <a href="https://www.fh-aachen.de/">FH Aachen</a> while also working as a Javascript & C# developer.</p>
        </div>

        <div className="arrow_wrapper arrow_wrapper_mobile">
          <i className="fa-solid fa-arrow-down" ></i>
        </div>

        <div className="collapsible_content">

          <h2 className="rubik_light smallHeader">fun facts about me</h2>

          <div className="card about-me-card collapsible_card ">
            <div className="about-me-card-left">
              <div className="card-content rubik_light about-me-card-title">Learning new things</div>
              <div className="about-me-card-content rubik_light">A core philosophy of mine is to always keep on learning new things.</div>
            </div>
            <div className="about-me-card-right">
              <Image layout='intrinsic' className="about-me-card-image" src={books} alt="" />
            </div>
          </div>

          <div className="card about-me-card collapsible_card ">
            <div className="about-me-card-left">
              <div className="card-content rubik_light about-me-card-title">Coding is life</div>
              <div className="about-me-card-content rubik_light">Through coding I can create new things and solve problems. It also frequently  provides new challenges for me to tackle.</div>
            </div>
            <div className="about-me-card-right">
              <Image layout='intrinsic' className="about-me-card-image" src={computer} alt="" />
            </div>
          </div>

          <div className="card about-me-card collapsible_card ">
            <div className="about-me-card-left">
              <div className="card-content rubik_light about-me-card-title">Music is nice</div>
              <div className="about-me-card-content rubik_light">Composing and playing music is great for thinking and relaxing. Especially great to clear your head after coding for an extensive amount of time.</div>
            </div>
            <div className="about-me-card-right">
              <Image layout='intrinsic' className="about-me-card-image" src={music} alt="" />
            </div>
          </div>

        </div>
      </section>

      <div className="move">
        <section id="page3" className="content_wrapper pages">
          <h1 className="pages_header brevia_bold">What I do</h1>
          <div className="fancy_spacer"></div>
          <div className="parahraph_wrapper">
            <p className="block_text rubik_light">Currently, I focus on learning Data Science while also continuing to learn fullstack web development.</p>
          </div>
          <div id="projects">
          {/*<div id="projects_wrapper"></div>*/}
           <Swiper 
            modules={[ Pagination, Scrollbar ]}
            spaceBetween={75}
            slidesPerView={1}
            className="swiper"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            direction='horizontal'
            loop={true}
            style={{ width: "inherit", height: "inherit" }}
           >
            {data.map(project => {
              const year = new Date(project.publishedAt).getFullYear();
              return (
              <>
              <SwiperSlide>

               
              <h1 style={{zIndex: 1, textAlign: "right", width: "97%", fontSize: 50, color: "#fff5", position: "absolute"}}>{year}</h1>
              <div key={project.slug} className="latest-projects-card ">
                
                <div className='latest-projects-card-left'>
                  <Swiper 
                    modules={[ Pagination ]}
                    spaceBetween={35}
                    slidesPerView={1}
                    className="imageSwiper"
                    pagination={{ clickable: true }}
                    direction='horizontal'
                    loop={true}
                    style={{ width: "inherit", height: "inherit" }}
                  >
                    {project.images.map(image => {
                      const imageUrl = GetImageUrl(image)
                      return(
                        <SwiperSlide key={image._key}>
                          <Zoom><Image style={{width: "100%", height:"100%", boxSizing: "border-box"}} key={image._key} width={500} height={500} className="latest-projects-card-image" src={imageUrl} alt="aaaa" /></Zoom>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
              
                <div className="latest-projects-card-right">

                  <h1 style={{color: "white"}}>{project.title}</h1>
                  <div className='latest-projects-card-tags'>
                    {project.categories.map(tag => (
                      <span key={tag} className="latest-projects-card-tag">{tag}</span>
                    ))}
                  </div>

                  <div>
                    <h3>Description</h3>
                    <div style={{color: "white", fontWeight: 300}}>{project.description}</div>
                  </div>

                  <div style={{backgroundColor: "#fff8", height: ".1rem", width: "100%", margin: "1rem 0"}}></div>

                  <div>
                    <h3>What I learned</h3>
                    <div style={{color: "white", fontWeight: 300}}>{project.learned}</div>
                  </div>
          
                </div>

              </div>
              </SwiperSlide>
              </>
            )})}
            </Swiper>
          </div>
        </section>
      </div>

      <section id="page4" className="content_wrapper pages" style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 className="pages_header brevia_bold">Contact me</h1>
          <div className="fancy_spacer"></div>
          <div className="parahraph_wrapper">
            <p className="block_text rubik_light">If you&apos;re interested in collaborating with me, or for any other reason, feel free to contact me.</p></div>
          <Button link="https://www.linkedin.com/in/cr4yfish/" title="Contact me" color="purple" />
      </section>
    </div>

    <footer>
      <div className="footer_inner unselectable">
        <span className="social_media">
          <FaGithubSquare />
          <FaInstagramSquare />
          <FaLinkedin />
          <FaBehanceSquare />
        </span>
        <span className="logo_wrapper unselectable"><Logo /></span>
      </div>
    </footer>
  </div>

  </div>

  )
}


export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "post"] {
    ...,
    projecttype->,
    author->

  }`)

  return { props: { data } }
}