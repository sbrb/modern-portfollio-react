// import React from "react";
// import AutoTyping, { BlinkCursor } from "react-auto-typing";
// import "./AboutSection.css";

// import ModelMan from "../../img/model.jpg";

// function AboutSection() {
//   return (
//     <section className="about section" id="about">

//       <h2 className="section_title">
//         <AutoTyping
//           active
//           textRef="About"
//           I
//           writeSpeed={170}
//           deleteSpeed={150}
//           delayToWrite={1400}
//           delayToDelete={100000}
//         />
//         <BlinkCursor
//           active
//           blinkSpeed={10000}
//         />
//       </h2>

//       <div className="about_container bd_grid">
//         <div className="about_image">
//           <img src={ModelMan} alt="ModelMan" />
//         </div>
//         {/* about-right */}
//         <div className="about-right">
//           <div className="about-right-heading">Education</div>
//           <div className="about-right-second">
//             <ul>
//               <li>Master of Computer Application:</li><br />
//               <p> MCA from Manipal University (2023 march - 2025 march).</p><br />
//               <li>Fullstack Intern trainee:</li>
//               <p>Internship from FunctionUp (2022 july - 2023 march).</p>
//               {/* <li>Bachelor of Arts:</li>
//                 <p>
//                   BA from Murshidabad Adarsha Mahavidyalaya (2019 july - 2022
//                   july). With 80%.
//                 </p>
//                 <li>Diploma in Elementary Education:</li>
//                 <p>
//                   D.El.Ed from Deshbandhu B.Ed College (2019 july - 2021 july).
//                   With 84%.
//                 </p>
//                 <li>Higher Secondary:</li>
//                 <p>
//                   HS (10+2) from Dhulauri Rabindra Vidyaniketan high school (2017
//                   july - 2019 july). With 81%.
//                 </p>
//                 <li>Matriculation:</li>
//                 <p>
//                   10th from Dhulauri Rabindra Vidyaniketan high school (2016
//                   january - 2017 june). With 60%.
//                 </p> */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;









import React from "react";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import "./AboutSection.css";

import ModelMan from "../../img/model.jpg";

function AboutSection() {
  return (
    <section className="about section" id="about">

      <h2 className="section_title">
        <AutoTyping
          active
          textRef="About"
          I
          writeSpeed={170}
          deleteSpeed={150}
          delayToWrite={1400}
          delayToDelete={100000}
        />
        <BlinkCursor
          active
          blinkSpeed={10000}
        />
      </h2>

      <div className="about_container ">
        <div className="about_image">
          <img src={ModelMan} alt="ModelMan" />
        </div>
        {/* about-right */}
        <div className="about-right">
          <div className="about-right-heading">Education</div>
          <div className="about-right-second">
            <ul>
              <li>Master of Computer Application:</li><br />
              <p> MCA from Manipal University (2023 march - 2025 march).</p><br />
              <li>Fullstack Intern trainee:</li>
              <p>Internship from FunctionUp (2022 july - 2023 march).</p>
              {/* <li>Bachelor of Arts:</li>
                <p>
                  BA from Murshidabad Adarsha Mahavidyalaya (2019 july - 2022
                  july). With 80%.
                </p>
                <li>Diploma in Elementary Education:</li>
                <p>
                  D.El.Ed from Deshbandhu B.Ed College (2019 july - 2021 july).
                  With 84%.
                </p>
                <li>Higher Secondary:</li>
                <p>
                  HS (10+2) from Dhulauri Rabindra Vidyaniketan high school (2017
                  july - 2019 july). With 81%.
                </p>
                <li>Matriculation:</li>
                <p>
                  10th from Dhulauri Rabindra Vidyaniketan high school (2016
                  january - 2017 june). With 60%.
                </p> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
