import Image from "next/image"

import Button from "../components/Button"
import Navbar from "../components/Navbar"

// images
import Pfad66 from "/images/code/Pfad66.webp"
import Pfad65 from "/images/code/Pfad65.webp"

export default function Code() {

return (
<>
    <div id="checker"></div>
    <div id="bg"></div>
    <div id="colorOverlay"></div>

    <Navbar />


<div id="scrollToTop">
    <i className="fas fa-arrow-alt-circle-up"></i>
</div>

<script src="script_2.js" async defer></script>
<script src="code/codeScript_2.js" async defer></script>

<div id="artWrapper">

    <Image layout="fill" alt="fancyBackgroundArt" className="bgArt" src={Pfad66} />
    <Image layout="fill" alt="fancyBackgroundArt" className="bgArt" src={Pfad65} />

</div>

<div id="content_wrapper">

    <Button link="" title="Back" color="purple" />

    <h1 id="title" className="poppins">Code</h1>

    <h2 className="languagesHeader smallHeader brevia_medium">My tech stack</h2>

    <div id="skillsWrapper">

        <fieldset className="skillGroup">
            <legend className="rubik_light">Web Development</legend>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/js.png" alt="frontend icon" />
                <div className="roboto ">JS</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/nodejs.png" alt="frontend icon" />
                <div className="roboto ">Node.js</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/react.png" alt="frontend icon" />
                <div className="roboto ">React.js</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/next.png" alt="frontend icon" />
                <div className="roboto ">Next.js</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/express.png" alt="frontend icon" />
                <div className="roboto ">Express.js</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/ejs.png" alt="frontend icon" />
                <div className="roboto ">ejs</div>
            </div>
        </fieldset>

        <fieldset className="skillGroup">
            <legend className="rubik_light">Computing</legend>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/cpp.png" alt="frontend icon" />
                <div className="roboto ">C++</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/cs.png" alt="frontend icon" />
                <div className="roboto ">C#</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/python.png" alt="frontend icon" />
                <div className="roboto ">Python</div>
            </div>

            <div className="skillCard">
                <Image  layout="fill" className="about-me-card-image code_image " src="/images/code/seaborn.png" alt="frontend icon" />
                <div className="roboto ">Seaborn</div>
            </div>

        </fieldset>

        <fieldset className="skillGroup">
            <legend className="rubik_light">Database/CMS</legend>

            <div className="skillCard">
                <Image layout="fill" className="about-me-card-image code_image " src="/images/code/sql.png" alt="frontend icon" />
                <div className="roboto">SQL</div>
            </div>

            <div className="skillCard">
                <Image layout="fill" className="about-me-card-image code_image " src="/images/code/nedb.png" alt="frontend icon" />
                <div className="roboto ">Nedb</div>
            </div>

            <div className="skillCard">
                <Image layout="fill" className="about-me-card-image code_image " src="/images/code/sanity.png" alt="frontend icon" />
                <div className="roboto ">Sanity</div>
            </div>

            <div className="skillCard">
                <Image layout="fill" className="about-me-card-image code_image " src="/images/code/wordpress.png" alt="frontend icon" />
                <div className="roboto ">Wordpr.</div>
            </div>

        </fieldset>
    </div>

    

    <h2  className="smallHeader brevia_medium unselectable">Scroll down to view my projects</h2>

    <h2 className="languagesHeader smallHeader brevia_medium">My Projects</h2>

    <div id="filter">
        <div>
            <select name="project-type-filter" id="projectFilter">
                <option value="all">All</option>
                <option value="web">Web Projects</option>
                <option value="desktop">Desktop Projects</option>
            </select>
        </div>
        <div>
            <input id="projectSearch" type="text" />
            <label className="roboto light" htmlFor="projectSearch" id="projectLabel">search</label>
        </div>

    </div>

    <div id="timelineWrapper">

        <span id="no-javascript" className="smallHeader rubik_regular">Please enable Javascript.</span>

    </div>

    <span id="sureTheresMore" className="rubik_light">...and more to come</span>

</div>



</>
)
}