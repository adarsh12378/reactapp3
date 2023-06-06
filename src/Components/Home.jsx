import React from 'react'
import vg from '../Assets/2.webp';
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='Home' id="Home">
    <main>
<h1>Code With Gupta</h1>
<p>Solution to all your Problems Here </p>
    </main>
    </div>
<div className="divHome2">
    <img src={vg} alt="Graphics" />
    <div>
        <p>
        We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
        </p>
    </div>
</div>

<div className="Home3" id="about">


    <div>
        <h1>Who We Are?</h1>
        <p>IF you are a tech company seeking solutions and content related to technology, software development, data analysis, cloud computing, web development, artificial intelligence, or any other technical field, I can provide information, guidance, and generate content in response to your queries. Just let me know what specific topics or problems you need assistance with, and I'll do my best to provide relevant information and solutions.</p>
    </div>
</div>

<div className="Home4" id="brands">


<div>
    <h1>Brands</h1>
    <article>
        <div style={{animationDelay:"0.3s",}}>
<AiFillGoogleCircle>
    
</AiFillGoogleCircle>
<p>Google</p>
        </div>
        <div style={{animationDelay:"0.5s",}}>
<AiFillAmazonCircle>

</AiFillAmazonCircle>
<p>Amazon</p>
        </div>

        <div style={{animationDelay:"0.7s",}}>
<AiFillYoutube>

</AiFillYoutube>
<p>Youtube</p>
        </div>
        <div style={{animationDelay:"1.0s",}}>
<AiFillInstagram>
    
</AiFillInstagram>
<p>Instagram</p>
        </div>

    </article>
</div>

</div>
    </>
  ) 
}

export default Home
