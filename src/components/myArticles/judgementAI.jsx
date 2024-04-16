import React, { useEffect } from "react";
import "../myArticles/style.css";

import V4 from "../myArticles/articles/4v.mp4";

function JudgementAI() {

  return (
    <div className="article-holder">
      <>
        <h1 style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
            {" "}
            Judgment AI (Build-1)
          </span>
        </h1>
        <h4 style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
            {" "}
            16th April 2024
          </span>
        </h4>

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p style={{ textAlign: "justify" }}>
          <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
            Before be began with our AI let's go through some basic data. in
            India their a 3 level of courts , the top level is Supreme Court
            with the highest Authority in India&nbsp;then comes High Court which
            is present in every state and have appellate jurisdiction over
            state.&nbsp; and finally District &amp; Taluka court which have
            jurisdiction over a district. now let's talk about their numbers and
            total cases they have pending state.
          </span>
        </p>
        <p>&nbsp;</p>
        <table
          style={{ borderCollapse: "collapse", width: "100.015%" }}
          border={1}
        >
          <colgroup>
            <col style={{ width: "33.2826%" }} />
            <col style={{ width: "33.2826%" }} />
            <col style={{ width: "33.2826%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>Courts</td>
              <td style={{ textAlign: "center" }}>Total in India</td>
              <td style={{ textAlign: "center" }}>Pending Cases (1994-2024)</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Supreme Court</td>
              <td style={{ textAlign: "center" }}>1</td>
              <td style={{ textAlign: "center" }}>80,094</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>High Court</td>
              <td style={{ textAlign: "center" }}>25</td>
              <td style={{ textAlign: "center" }}>6,206,315</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                District &amp; Taluka Court
              </td>
              <td style={{ textAlign: "center" }}>6322 (672 + 5,650 )</td>
              <td style={{ textAlign: "center" }}>44,460,237</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>
          Now the big number of cases you have seen are divided into two type of
          cases, Civil &amp; Criminal Cases. blow is the data how the much these
          2 contribute in pending cases...
          <br />
          <br />
        </p>
        <table
          style={{
            borderCollapse: "collapse",
            width: "99.9692%",
            height: "89.6px",
          }}
          border={1}
        >
          <colgroup>
            <col style={{ width: "33.3796%" }} />
            <col style={{ width: "33.3796%" }} />
            <col style={{ width: "33.3025%" }} />
          </colgroup>
          <tbody>
            <tr style={{ height: "22.4px" }}>
              <td style={{ height: "22.4px", textAlign: "center" }}>Courts</td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                Civil Cases
              </td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                Criminal Cases
              </td>
            </tr>
            <tr style={{ height: "22.4px" }}>
              <td style={{ textAlign: "center", height: "22.4px" }}>
                Supreme Court
              </td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                62,804&nbsp; (78.41%)
              </td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                17,290 (21.59%)
              </td>
            </tr>
            <tr style={{ height: "22.4px" }}>
              <td style={{ textAlign: "center", height: "22.4px" }}>
                High Court
              </td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                4,445,505&nbsp; (71.63%)
              </td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                1,760,810 (28.37%)
              </td>
            </tr>
            <tr style={{ height: "22.4px" }}>
              <td style={{ textAlign: "center", height: "22.4px" }}>
                District &amp; Taluka Court
              </td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                10,983,473 (24.7%)
              </td>
              <td style={{ height: "22.4px", textAlign: "center" }}>
                33,476,764 (75.30%)
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p>
          Their is a dialog used a lot in India's legal system "100 apradhi kule
          chuut jae par beghuna ko zaha nahi honi chahiye " The dialogue is a
          powerful statement about ensuring that the innocent are not wronged,
          even if it means letting a hundred criminals go free. The dialogue
          reflects the theme of justice and the protection of the innocent in
          the legal system of India. An appreciable legal system but because of
          this the timeline of a case is tends to be longer compare to any other
          country's. their are other reasons like:
        </p>
        <ol>
          <li>
            <strong>Shortage of judges</strong>: One of the main reasons for the
            delay in disposing of cases is the shortage of judges in India.
            <a
              href="https://www.deccanherald.com/india/indias-judge-population-ratio-stands-at-21-law-minister-meghwal-tells-ls-2803510#:~:text=Representative%20image%20of%20a%20judge%20with%20a%20gavel.&text=New%20Delhi%2C%20Dec%208%20(PTI,Sabha%20was%20informed%20on%20Friday."
              target="_blank"
              rel="noopener"
            >
              {" "}
              India has 21 judges per million population
            </a>
            , which is significantly lower than countries like the United States
            which has{" "}
            <a
              href="https://twitter.com/LiveLawIndia/status/1226400202078089218?lang=en"
              target="_blank"
              rel="noopener"
            >
              110 judges per million population
            </a>{" "}
            and way lower then china which has{" "}
            <a
              href="https://twitter.com/LiveLawIndia/status/1226400202078089218?lang=en"
              target="_blank"
              rel="noopener"
            >
              300+ judges per million
            </a>
          </li>
          <li>
            <strong>Inadequate infrastructure and resources</strong>: The{" "}
            <a
              href="https://theprint.in/opinion/indian-judiciary-is-crying-for-basic-infrastructure-heres-what-centre-states-need-to-do/1046393/"
              target="_blank"
              rel="noopener"
            >
              Indian judiciary lacks adequate infrastructure
            </a>{" "}
            and resources, such as courtrooms, facilities, and staff, to handle
            the increasing number of cases This includes modernization and
            computerization, which have not reached all courts in the country.
          </li>
          <li>
            <strong>Corruption and lack of accountability</strong>: The{" "}
            <a
              href="https://economictimes.indiatimes.com/news/india/common-man-bogged-down-by-corruption-in-india-need-to-fix-accountability-at-all-levels-supreme-court/articleshow/98216824.cms?from=mdr"
              target="_blank"
              rel="noopener"
            >
              Indian court system is also affected by corruption and lack of
              accountability
            </a>
            , which can lead to delays and miscarriages of justice.
          </li>
          <li>
            <strong>Government-sponsored litigation</strong>: The Indian
            government is the largest litigant in the country, responsible for
            nearly half of the pending cases. Many of these cases involve one
            department of the government suing another, leading to delays in
            decision-making.
          </li>
          <li>
            <strong>Lack of public faith in the justice system</strong>: The{" "}
            <a
              href="https://www.outlookindia.com/magazine/story/india-news-indias-judiciary-is-facing-an-increasing-lack-of-trust-by-public/302545"
              target="_blank"
              rel="noopener"
            >
              common man's faith in the justice system
            </a>{" "}
            is at an all-time low, which can contribute to the large number of
            unsolved cases.
          </li>
          <li>
            <strong>Limitation of Human</strong>: Their is a limit on how&nbsp;
            many cases a human can judge.
          </li>
        </ol>
        <p>
          <br />
          So, to help the Indian government lower the number of cases, I present{" "}
          <strong>JUDGMENT AI </strong>,
        </p>

        <video
          style={{ height: "50%", width: "85%", margin: "1% 0 2% 0" }}
          src={V4}
          loop
          autoPlay
        ></video>

        <>
          <p>
            "Isn't it crazy that the life of a human will be decide by an AI,
            what the heck are you even suggesting". this can be your common
            thought , I understand but judgment AI will be trained to handle
            only the Civil Cases not Criminal cases. From total pending cases ,
            civil cases make up for 30% 😱 ,&nbsp; it's around 15,491,782.&nbsp;
          </p>
          <p>&nbsp;</p>
          <p>List of cases Civil Cases which will be handled by Judgment AI:</p>
          <p>&nbsp;</p>
          <ol>
            <li>Property disputes.</li>
            <li>Contractual disputes.</li>
            <li>Intellectual Property Rights.</li>
            <li>Trust &amp; E-state disputes.</li>
            <li>Environmental Law cases.</li>
            <li>Cyber Crime (off-course)</li>
            <li>Traffic &amp; Road cases.</li>
          </ol>
          <p>&nbsp;</p>
          <>
            <p>
              The reason of using AI as a judge is quite simple. it cannot be
              bribed, it can work efficiently (it won't need breaks). it would
              be able to take discussion with a wider point of view and give a
              fair judgment.&nbsp; it will be totally impartial and will take a
              fair judgment, and the most important part is blockchain
              technology will be merged with it. rather than training our AI
              with data of one person or organization we can get{" "}
              <a
                href="https://www.ibm.com/topics/blockchain-ai"
                target="_blank"
                rel="noopener"
              >
                authentic data from the blockchain
              </a>
              .&nbsp;
            </p>
            <p>
              <span style={{ fontSize: "14pt" }}>
                <strong>How Does it works ?</strong>
              </span>
            </p>
            <p>
              Judgment AI works the same way a normal judge proceed with his/her
              hearing. The moment it starts running it will listen and
              understand the standing of both sides and will keep asking
              questions until it has properly understand the cases and is ready
              for judgment. the AI will keep asking questions until it has
              understand both minimum 80% from it's own perspective. judgment
              will be made on the basis of cases database it's trained on and
              it's own understand of Indian law through the history.
              <br />
              <br />
              <br />
            </p>

            <p>
              <span style={{ fontSize: "14pt" }}>
                <strong>
                  Is Their no human intersection in decision making ?
                </strong>
              </span>
            </p>
            <p>
              Of course not, The decision will be overseen by senior students
              who are studying to become judges or advocates., if they found the
              judgment is not fair they can apply to the higher Authority to
              review the judgment. with this they will help AI to learn more and
              make it more efficient.
              <br />
              <br />
              <br />
            </p>

            <p>
              <span style={{ fontSize: "14pt" }}>
                <strong>
                  What can people in question can do if they find the judgment
                  unfair ?
                </strong>
              </span>
            </p>
            <p>
              If individuals find a judgment unfair, they have the option to
              apply to the district court for a review. The district court has
              the authority to re-examine the judgment and issue a new ruling on
              the case. You might wonder, 'What is the point of using AI when,
              in the end, people are going to apply to a higher authority?' The
              primary goal of using AI in the judicial process is to reduce the
              number of cases and expedite the judgment process. For instance,
              if an AI judge can handle 100 cases in a day, while a human judge
              can manage only 10 cases, the number of cases would be reduced by
              90%
              <br />
              <br />
              <br />
            </p>

            <strong >
             That's all for now, I hope you like the idea of Judgment AI.
             build-2 will be coming soon... 🤘
            </strong>
          </>
        </>
      </>
    </div>
  );
}

export default JudgementAI;
