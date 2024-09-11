import React, { useEffect } from "react";
import "../myArticles/style.css";
import FirstConf from '../myArticles/articles/first-conf.png'
import SecondConf from '../myArticles/articles/second-conf.png'
import ThirdConf from '../myArticles/articles/third-conf.png'


function Confession() {

  return (
    <div className="article-holder">
      <>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
            {" "}
            @shivamycodee/confession
          </span>
        </h1>
        <h4 style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
            {" "}
            11th September 2024
          </span>
        </h4>

        <h2 style={{marginTop:100}} >Why need this package?</h2>
<p>&nbsp;</p>
<p>I have created a simple react vite webiste &amp; node.js server to expalin the usage...</p>
<p>&nbsp;</p>

<ol>
<li>As you can see in the image below i'm running my webiste , which is sending a post request to the server at endpoint&nbsp;checkData, i'm sending a JWT Bearer token and encrypted payload with my request.<br /><br /><br /><br />
<img src={FirstConf} alt="" width="100%" height="500" />
<img src={SecondConf} alt="" width="100%" height="100" style={{marginTop:20}} />
</li>

<p>&nbsp;</p>
<p>&nbsp;</p>

<li>The issue with the current procedure i took (and many people do this too) that i assumed that using JWT with short expiry time (mine is 30 seconds) and sending encrypted paylaod is enough to protect your server from replay attack, DOS attack, DDOS attack , etc... WHICH is not. here in the below image i'm doing a replay attack using a third party POSTMAN DESKTOP , and able to easily fetch/manipulate my data by
  simply taking the JWT (before it expires) and the encrypted payload and enter it in postman.<br /><br /><br />
<img src={ThirdConf} alt="" width="100%" height="700" style={{marginBottom:20}} />

Now you will say but what is i keep the expire time of my JWT too short like new few seconds, although client side had to call it multiple times but the hacker won't be able to do anything , right? NO. Your JWT endpoint would be open for anyone to call so hacker can just call for a new JWT and use the OLD encrypted
payload to get the data.
</li>
</ol>

        <p>&nbsp;</p>

<p>My package @shivamycodee/confession resolves this issue, and my packge is using <a style={{ color: "lightblue" }} href='https://bun.sh' target="_blank" >bun</a> to make it optamized and fast.
</p>


<p>If you find any problem/issue in my package, please create an <a style={{ color: "lightblue" }} href="https://github.com/Shivamycodee/confession/issues/new" target="_blank" >issue thread here.</a></p>
       
<strong>
              If you are interested in this idea, hit me up at
              twitter/linkedin/telegram , links are in{" "}
              <a
                href="https://shivamyadav.codes/about"
                style={{ color: "lightblue" }}
              >
                About Me
              </a>{" "}
              Section.
            </strong>

      </>
    </div>
  );
}

export default Confession;
