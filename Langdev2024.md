<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

:root {
    --main-color: #e6e9ff;
    --accent-color: #e16c17;
    --bg-color: #0f1017;
    --bg-light-color: #22242e;
    --bg-dark-color: #0b0c0f;
    --tertiary-color: #7e8b9e;
}
.markdown-body img {
  background-color: var(--bg-color);
}
html: {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 18px;
  line-height: 1.7rem;
  color: var(--main-color);
  background-color:  var(--bg-color);
}
.langdev-logo {
  margin-top: 2rem;
  border: 0;
}
.langdev-logo img {
  height: 4rem;
}
.langdev-logo:hover {
  underline: none;  
}

.content {
  min-width: 20rem;
  margin-left: 15%;
  margin-right: 15%;
}

p {
  margin-top: 1.5rem;
}
.logo {
  margin: 2rem;
  height: 6rem;
}
.logo2 {
  margin: 3rem;
  height: 4rem;
}
.title-xl {
   font-family: "Poppins", sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 47px;
   line-height: 137%;
   color: #fff;
}
.title-dates {
   font-family: "Poppins", sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 34px;
   line-height: 120%;
   color: #fff;
}
.title-l {
   font-family: "Poppins", sans-serif;
   font-style: normal;
   font-weight: 600;
   font-size: 21px;
   line-height: 137%;
   letter-spacing: 0.08em;
   text-transform: uppercase;
   color: var(--accent-color);
}
.btn {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: .8rem 1.5rem;
  border-radius: .5rem;
  font-weight: 500;
  font-size: 1.1rem;
}
.cta {
  background-color: var(--accent-color);
  color: #ffffff;
}
.secondary {
  background-color: var(--bg-color);
  color: #ffffff;
  border: 1px solid rgba(255,255,255, 0.42);
}
.tertiary {
   font-family: "Poppins", sans-serif;
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 137%;
   letter-spacing: 0.08em;
   text-transform: uppercase;
   color: var(--tertiary-color);
}
a, a:visited {
  color: var(--main-color);
}
a:hover {
  color: #fff;
}
.ml2 {
  margin-left: 3rem;
}
.xh2 {
   text-align: center;
   font-family: "Poppins", sans-serif;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
}
h3 {
   font-family: "Poppins", sans-serif;
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
}
.markdown-body h2, .title-m {
  margin-top: 3rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 137%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: none;
}

.top-bar {
  margin-top: 1rem;
}
.top-menu {
  margin-top: 3rem;
  float: right;
}
.sponsors {
  padding: 3rem 3rem;
  background-color: var(--bg-light-color);
}
.collaborators {
  padding: 3rem 3rem;
  background-color: var(--bg-color);
}
.mt12 {
  margin-top: 12rem;
}
.mt6 {
  margin-top: 6rem;
}
.mt3 {
  margin-top: 3rem;
}
.center {
  text-align: center;
}
.markdown-body hr {
  border: 0;
  heigth: 1px;
  color: #fff;
}
.banner {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.c1 {
  width: 50%;
  min-width: 25rem;
}
.flex {
  display: flex;
}
.sponsors img {
  background-color: var(--bg-light-color);
}
@media (max-width: 480px) {
  .c1 {
    width: 99%;
  }
  .content {
    min-width: unset;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>

<div markdown="0">
  <div class="top-bar">
    <a class="langdev-logo" href="https://langdevcon.org" alt="langdev 2024"><img src="./assets/2024/langdev2024-logo.svg"></a>
    <div class="top-menu">
      <nav>
        <a class="ml2 current">Home</a>
        <a href="2024/program" class="ml2">Program</a>
        <a href="2024/speakers" class="ml2">Speakers</a>
        <a href="2024/venue" class="ml2">Venue</a>
        <a class="ml2 btn cta">Get Tickets</a>
      </nav>
    </div>
  </div>

  <div class="banner">
    <div class="c1">
      <h1 class="mt12 title-xl" >&num;langdev2024</h1>
      <div class="title-l">Aerospace Edition</div>
      <div class="mt6 title-dates">LangDev Conference</div>
      <div class="title-dates">Seville, 17-19 October 2024.</div>
      <p>Where language engineering enthusiasts from both industry and academia
    come together to discuss the <em>state of the art</em> &amp; <em>state of the practice</em> of language enginering.
      </p>
      <div class="mt3">
        <a class="btn secondary" href="2024/venue">Plan your travel</a>
        <a class="btn cta ml2" href="">Get Tickets</a>
      </div>
      </div>
    <div class="c1">
      <img class="fr" src="assets/2024/seville-night.png">
    </div>
  </div>

  <div class="mt6 sponsors center">
    <h2 class="title-m">Sponsors</h2>
    <div class="flex">
     <a href="https://www.f1re.nl/" alt="F1RE"><img class="logo2" src="assets/2024/sponsors/f1re-logo.svg"></a>
     <a href="https://strumenta.com/"><img class="logo2" alt="Strumenta" src="assets/2024/sponsors/strumenta.png"></a>
     <a href="https://metadev.pro/"><img class="logo2" alt="Metadev" src="assets/2024/sponsors/metadev-dark.svg"></a>
   </div>
   <a class="btn tertiary" href="https://metadev.pro/contact/">Become a sponsor &rarr;</a>
  </div>
  <div class="collaborators center">
   <h2 class="title-m">Collaborators</h2>
   <div class="flex">
   </div>
   <a class="btn tertiary" href="https://metadev.pro/contact/">Collaborate with us &rarr;</a>
  </div>
</div>

<div class="content" markdown="0">
  <h2>Topics & Goals</h2>

<p>LangDev is celebrated on an yearly basis around Europe. It brings together the community working & researching around Language Engineering, MDE, DSLs with a clear focus on showing progress on the state of the art with working tooling. Talks with running software demonstrations are encouraged over just theoretical papers.
</p>

<p><strong>Model Driven Engineering</strong> is gaining traction as one of the Key competences to be developed to foster progress (as recognized by the European Union in different programs).
</p>

  <h2>Special Edition</h2>

  <p>Seville's edition is putting the emphasis on <strong>Aerospace</strong> sector and <strong>Security</strong>.
  </p>
  <p>Seville has an enterprise cluster of companies devoted to Aerospace. The organization want to take the opportunity to reunite and promote the interchange between the industry and research to align research & transfer technologies as a meeting point for a unique networking opportunity.
  </p>

<p>On the other hand, <strong>Security</strong> and cybersecurity is a central topic for any digital system. Sophistication of attacks demands better security tools, process and analysis tools. Models. modeling tools & DSLs for security are on the rise.</p>

<h2>Location</h2>

<p>
<strong>Escuela Técnica Superior de Ingeniería Informática</strong><br/>
Universidad de Sevilla<br/>
Avenida Reina Mercedes, s/n. 41012 Seville, Spain<br/>

<a href="https://maps.app.goo.gl/dWGjuFmpbTh4NbFeA">Map</a>
</p>

<p>
Registration takes place directly on site. Please have your ticket and passport or European identification card at hand.
</p>

<h2>Registration</h2>

<p>
Tickets will be announced soon. Registration is strictly required. Please use your full name as shown on your passport.
Registration is available until <strong>1st of October, 2024</strong>
</p>

<h2> Important Dates</h2>

<ul>
  <li><strong>04.06.2024</strong>: Call for Presentations</li>
  <li><strong>15.07.2024</strong>: Submission Deadline</li>
  <li><strong>15.09.2024</strong>: Acceptance Notification</li>
  <li><strong>01.10.2024</strong>: Registration Deadline</li>
  <li><strong>17.10.2024-19.10.2024</strong>: LangDev’24</li>
</ul>

<h2> Preliminary Schedule</h2>

<style>
    table.schedule {
        border-collapse: collapse;
        border: 1px solid;
        display: table;
        width: 100%;
    }

    table.schedule:nth-child(even) {
        margin-top: 20px;
    }

    table.schedule td:nth-child(1) {
        width: 50px;
        text-align: right;
    }

    table.schedule td:nth-child(2) {
        width: 60%;
    }

    table.schedule td:nth-child(3) {
        width: 30%;
    }

    table.schedule th, td {
        border: 1px solid black;
        text-align: left;
        vertical-align: center;
        padding: 8px;
    }

    table.schedule tr.day {
        background-color: midnightblue;
    }

    table.schedule tr.day td {
        color: white;
        font-weight: bold;
        text-align: left;
    }

    table.schedule tr.break {
        background-color: lightgray;
        color: black;
    }
    table.schedule tr.social {
        background-color: #e0ccff;
        color: black;
    }

    table.schedule tr.break td:nth-child(2) {
        text-align: center;
    }
</style>

<table class="schedule">
    <tr class="day">
        <td colspan="3">Thursday, October 17</td>
    </tr>
    <tr>
        <td>8:30</td>
        <td colspan="2">Registration</td>
    </tr>
    <tr>
        <td>9:00</td>
        <td colspan="2">Welcome</td>
    </tr>
    <tr>
        <td>9:30</td>
        <td>
          Slot 1
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>10:00</td>
        <td>
          Slot 2
        </td>
         <td>to be announced</td>
    </tr>
    <tr class="break">
        <td>10:30</td>
        <td colspan="2">Coffee break</td>
    </tr>
    <tr>
        <td>11:00</td>
        <td>
          Slot 3
        </td>
         <td>to be announced</td>
    </tr>
    <tr>
        <td>11:30</td>
       <td>
          Slot 4
        </td>
         <td>to be announced</td>
    </tr>
    <tr>
        <td>12:00</td>
        <td>
          Slot 5
        </td>
         <td>to be announced</td>
    </tr>
    <tr class="break">
        <td>12:30</td>
        <td colspan="2">Lunch</td>
    </tr>
    <tr>
        <td>14:00</td>
        <td>
          Slot 6
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>14:30</td>
        <td>
          Slot 7
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>15:00</td>
        <td>
          Slot 8
        </td>
        <td>to be announced</td>
    </tr>
    <tr class="break">
        <td>15:30</td>
        <td colspan="2">Coffee break</td>
    </tr>
    <tr>
        <td>16:00</td>
        <td>
          Slot 9
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>16:30</td>
        <td>
          Slot 10
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>17:00</td>
        <td>
          Slot 11
        </td>
        <td>to be announced</td>
    </tr>
     <tr>
        <td></td>
        <td>
        </td>
        <td></td>
    </tr>
     <tr class="social">
        <td>21:00</td>
        <td colspan="2">
          Gala Dinner
        </td>
    </tr>
</table>

<table class="schedule" >
    <tr class="day">
        <td colspan="3">Friday, October 18</td>
    </tr>
    <tr>
        <td>8:30</td>
        <td colspan="2">Registration</td>
    </tr>
    <tr>
        <td>9:00</td>
       <td>
          Slot 1
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>9:30</td>
        <td>
          Slot 2
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>10:00</td>
        <td>
          Slot 3
        </td>
        <td>to be announced</td>
    </tr>
    <tr class="break">
        <td>10:30</td>
        <td colspan="2">Coffee break</td>
    </tr>
    <tr>
        <td>11:00</td>
       <td>
          Slot 4
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>11:30</td>
        <td>
          Slot 5
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>12:00</td>
        <td>
          Slot 6
        </td>
        <td>to be announced</td>
    </tr>
    <tr class="break">
        <td>12:30</td>
        <td colspan="2">Lunch</td>
    </tr>
    <tr>
        <td>14:00</td>
        <td>
          Slot 7
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>14:30</td>
        <td>
          Slot 8
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>15:00</td>
        <td>
          Slot 9
        </td>
        <td>to be announced</td>
    </tr>
    <tr class="break">
        <td>15:30</td>
        <td colspan="2">Coffee break</td>
    </tr>
    <tr>
        <td>16:00</td>
        <td>
          Slot 10
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>16:30</td>
        <td>
          Slot 11
        </td>
        <td>to be announced</td>
    </tr>
    <tr>
        <td>17:00</td>
        <td colspan="2">Closing</td>
    </tr>
</table>

<table class="schedule">
    <tr class="day">
        <td colspan="3">Saturday, October 19</td>
    </tr>
    <tr class="social">
        <td>9:00<br/>12:00</td>
        <td>
          Guided City Tour
        </td>
        <td>to be announced</td>
    </tr>
</table>

<h2>Call for Presentation</h2>

<p>
  <em>To be open in June, 2024.</em>
</p>

<p>
We solicit talk proposals concerning the application, development, and innovation of language engineering. Topics of interest include, but are not limited to:
</p>

<ul>
  <li>Novel meta languages for language construction and composition</li>
  <li>Holistic approaches to language engineering that cross-cut multiple language aspects (e.g., abstract and concrete syntax, semantics, transformations) and/or integrate with program analysis, validation, testing, or other advanced techniques.</li>
  <li>New language workbenches or novel extensions of existing language workbenches.</li>
  <li>Backend infrastructure of (web-based) language workbenches explaining solutions to collaboration, synchronization, or communication.</li>
  <li>Industrial case studies: experience reports, large-scale evaluations, best practices, and human factors to adoption.</li>
  <li>Low-Code / No-Code approaches using appropriate languages
  <ul>
      <li>Languages for describing and deriving digital twins</li>
      <li>Languages for non-engineering issues, such as science, legal, social, or environmental sustainability issues</li>
      <li>DSLs engineered on the basis of GPLs and GPMLs (general-purpose languages)</li>
    </ul>
  </li>
  <li>LangDev seeks presentations that demonstrate applied aspects of language engineering. Presentations explaining the theory behind language engineering are also welcome, but they need to showcase the practical applicability of the presented approaches. Presentations about preliminary or unfinished work are welcome.</li>
</ul>

<p>
We encourage presenters to demonstrate their work with a <strong>demo or live coding</strong> over “just” showing slides. Additionally, we encourage speakers to accompany their presentations with a <strong>reproduction package</strong> that helps the participants to (easily) run the presented tools, experiment with them, or tweak benchmark experiments. This helps to create a lasting contribution.
</p>

<h2> Program Committee</h2>

<ul>
  <li>Arjan Oortgiese - <em>Belastingdienst (Dutch Tax Office)</em></li>
  <li>Bernhard Rumpe, <em>Software Engineering - RWTH Aachen</em></li>
  <li>Nico Jansen -  <em>RWTH Aachen</em></li>
  <li>Federico Tomassetti - <em>Strumenta S.R.L.</em></li>
  <li>Tijs van der Storm - <em>Centrum Wiskunde & Informatica</em></li>
  <li>Antonia Reina - <em>University of Seville</em></li>
  <li>Angel J. Varela - <em>University of Seville</em></li>
  <li>Pedro J. Molina - <em>Metadev S.L.</em></li>
</ul>

All proposals will undergo reviewing by the program committee.  

<h2> Organization</h2>

<p>
In case you have any further questions, please contact: [langdev2024@metadev.pro](mailto:langdev2024@metadev.pro)
</p>

<p>Organizers:</p>
<ul>
  <li>Antonia Reina - <em>University of Seville</em></li>
  <li>Pablo Fernandez - <em>University of Seville</em></li>
  <li>Angel J. Varela - <em>University of Seville</em></li>
  <li>Lucía Enríquez - <em>Metadev S.L.</em></li>
  <li>Nuria Serrano - <em>Metadev S.L.</em></li>
  <li>Pedro J. Molina - <em>Metadev S.L.</em></li>
</ul>

<h2>Previous Editions</h2>

  <ul>
    <li><a href="Langdev2023.html">Utrecth, 2023</a></li>
    <li><a href="Langdev2022.html">Aachen, 2022</a></li>
    <li><a href="langdev2020.html">Mainz, 2020</a></li>
    <li><a href="Langdev2019.html">Amsterdam, 2019</a></li>
    <li><a href="Langdev2018.html">Amsterdam, 2018</a></li>
  </ul>

  <hr/>
  <p>
  <strong>LangDev'24</strong> is organized by the <a href="https://www.us.es/">University of Seville</a> &amp; <a href="https://metadev.pro/">Metadev</a>.
  </p>

  <div markdown="0">
    <a href="https://www.us.es/" alt="University of Seville"><img class="logo" src="https://www.us.es/sites/default/files/inline-images/US-marca-monocromo.png"></a>
    <a href="https://metadev.pro/"><img class="logo2" alt="Metadev" src="assets/2024/sponsors/metadev-dark.svg"></a>
  </div>

</div>
