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
  background-color: --bg-color: #0f1017;
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

.column {
  min-width: 20rem;
  margin-left: 20%;
  margin-right: 20%;
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
.fr {
  float: right;  
  margin-left: 0rem;
  position: relative;
  top: -5rem;
  right: -1rem;
  z-index: -1;
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
h2, .title-m {
  margin-top: 3rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 137%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
  <img class="fr" src="assets/2024/seville-night.png">
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

  <div class="mt6 sponsors center">
    <h2 class="title-m">Sponsors</h2>
    <div>
     <a href="https://www.f1re.nl/" alt="F1RE"><img class="logo2" src="assets/2024/sponsors/f1re-logo.svg"></a>
     <a href="https://strumenta.com/"><img class="logo2" alt="Strumenta" src="assets/2024/sponsors/strumenta.png"></a>
     <a href="https://metadev.pro/"><img class="logo2" alt="Metadev" src="assets/2024/sponsors/metadev-dark.svg"></a>
   </div>
   <a class="btn tertiary" href="https://metadev.pro/contact/">Become a sponsor &rarr;</a>
  </div>
  <div class="collaborators center">
   <h2 class="title-m">Collaborators</h2>
   <a class="btn tertiary" href="https://metadev.pro/contact/">Collaborate with us &rarr;</a>
  </div>
</div>

## Sponsors

The following companies are sponsoring the event:

<div markdown="0">
</div>

**Sponsoring is open.** [Contact for inquiries.](https://metadev.pro/contact/)

<div class="column">

The Language Developer’s Workshop (LangDev) is an informal meeting where language engineering enthusiasts from both industry and academia can come together to discuss the _state-of-the-art_ and _state-of-the-practice_ of language engineering.

## Topics & Goals

LangDev is celebrated on an yearly basis around Europe. It brings together the community working & researching around Language Engineering, MDE, DSLs with a clear focus on showing progress on the state of the art with working tooling. Talks with running software demonstrations are encouraged over just theoretical papers.

**Model Driven Engineering** is gaining traction as one of the Key competences to be developed to foster progress (as recognized by the European Union in different programs).

## Special Edition

Seville's edition is putting the emphasis on **Aerospace** sector and **Security**.

Seville has an enterprise cluster of companies devoted to Aerospace. The organization want to take the opportunity to reunite and promote the interchange between the industry and research to align research & transfer technologies as a meeting point for a unique networking opportunity.

On the other hand, **Security** and cybersecurity is a central topic for any digital system. Sophistication of attacks demands better security tools, process and analysis tools. Models. modeling tools & DSLs for security are on the rise.

## Location

**Escuela Técnica Superior de Ingeniería Informática** - Universidad de Sevilla

Avenida Reina Mercedes, s/n. 41012 Seville, Spain

[Map](https://maps.app.goo.gl/dWGjuFmpbTh4NbFeA)

Registration takes place directly on site. Please have your ticket and passport or European identification card at hand.

### Registration

Tickets will be announced soon. Registration is strictly required. Please use your full name as shown on your passport.
Registration is available until **1st of October, 2024**.

### Important Dates

- **04.06.2024**: Call for Presentations
- **15.07.2024**: Submission Deadline
- **15.09.2024**: Acceptance Notification
- **01.10.2024**: Registration Deadline
- **17.10.2024-19.10.2024**: LangDev’24

### Preliminary Schedule

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

<table class="schedule" markdown="0">
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

<table class="schedule" markdown="0">
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

<table class="schedule" markdown="0">
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

## Call for Papers

**To be open in June, 2024.**

We solicit talk proposals concerning the application, development, and innovation of language engineering. Topics of interest include, but are not limited to:

- Novel meta languages for language construction and composition
- Holistic approaches to language engineering that cross-cut multiple language aspects (e.g., abstract and concrete syntax, semantics, transformations) and/or integrate with program analysis, validation, testing, or other advanced techniques.
- New language workbenches or novel extensions of existing language workbenches.
- Backend infrastructure of (web-based) language workbenches explaining solutions to collaboration, synchronization, or communication.
- Industrial case studies: experience reports, large-scale evaluations, best practices, and human factors to adoption.
- Low-Code / No-Code approaches using appropriate languages
  - Languages for describing and deriving digital twins
  - Languages for non-engineering issues, such as science, legal, social, or environmental sustainability issues
  - DSLs engineered on the basis of GPLs and GPMLs (general-purpose languages)

LangDev seeks presentations that demonstrate applied aspects of language engineering. Presentations explaining the theory behind language engineering are also welcome, but they need to showcase the practical applicability of the presented approaches. Presentations about preliminary or unfinished work are welcome.  

We encourage presenters to demonstrate their work with a **demo or live coding** over “just” showing slides. Additionally, we encourage speakers to accompany their presentations with a **reproduction package** that helps the participants to (easily) run the presented tools, experiment with them, or tweak benchmark experiments. This helps to create a lasting contribution.

### Program Committee

Program Committee:

- Arjan Oortgiese - _Belastingdienst (Dutch Tax Office)_
- Bernhard Rumpe, _Software Engineering - RWTH Aachen_
- Nico Jansen -  _RWTH Aachen_
- Federico Tomassetti - _Strumenta S.R.L._
- Tijs van der Storm - _Centrum Wiskunde & Informatica_
- Antonia Reina - _University of Seville_
- Angel J. Varela - _University of Seville_
- Pedro J. Molina - _Metadev S.L._

All proposals will undergo reviewing by the program committee.  

### Organization

In case you have any further questions, please contact: [langdev2024@metadev.pro](mailto:langdev2024@metadev.pro)

Organizers:

- Antonia Reina - _University of Seville_
- Pablo Fernandez - _University of Seville_
- Angel J. Varela - _University of Seville_
- Lucía Enríquez - _Metadev S.L._
- Nuria Serrano - _Metadev S.L._
- Pedro J. Molina - _Metadev S.L._

### Previous Editions

- [Utrecth, 2023](Langdev2023.html)
- [Aachen, 2022](Langdev2022.html)
- [Mainz, 2020](langdev2020.html)
- [Amsterdam, 2019](Langdev2019.html)
- [Amsterdam, 2018](Langdev2018.html)

---

**LangDev'24** is organized by the [University of Seville](https://www.us.es/) & [Metadev](https://metadev.pro/).

  <div markdown="0">
    <a href="https://www.us.es/" alt="University of Seville"><img class="logo" src="https://www.us.es/sites/default/files/inline-images/US-marca-monocromo.png"></a>
    <a href="https://metadev.pro/"><img class="logo2" alt="Metadev" src="assets/2024/sponsors/metadev-dark.svg"></a>
  </div>

</div>
