import React from "react";
import Layout from "../component/Layouts/Layout";
import "../style/about.css";
import t1 from "../pic/t1.jpg";
import t2 from "../pic/t2.jpg";
import t3 from "../pic/t3.jpg";

const About = () => {
  return (
    <Layout>
      <section className="Contact about" id="about">
        <div className="container top">
          <div className="heading text-center">
            <h4>Life comes from the earth and life returns to the earth.</h4>
            <h1>ABOUT</h1>
          </div>

          <div>
            {/* ---------------------company------ */}
            <div className="company about_grid">
              <div className="about_img">
                <img src="/image/hero.png" className="about_hero_img" alt="" />
              </div>
              <div className="company-info">
                <span>
                  PHOTOS <span className="our">FOR EVERYONE</span>
                </span>
                <p>
                  <b>Guruji Jamuna Prasad Mishra</b> Guruji Jamuna Prasad Mishra
                  was born in Ragoli, Madhya Pradesh, and is descendant of an
                  important Brahman family. His father, Sri Ram Ratan Mishra,
                  was an honoured priest and prominent spiritual teacher. The
                  family tradition goes way back in history for centuries, as
                  this family were running the Gurukula (training school for
                  offspring of teacher and royal cast). Already before Jamuna
                  Mishra took his doctorates in Ayurveda (university of
                  Allahabad) and Naturophaty (Delhi National Akademie of
                  Naturophaty), he was captioned “Guru” by the native
                  „Guru-council“ being composed of the most senior and most
                  important spiritual teachers of his country. Gurukula being
                  under guidance of his Vater Sri Ram Ratan Mishra had to be
                  closed due to the Independance of India. For that reason his
                  son was assigned a completely new task. In 1984 Jamuna Mishra
                  moved to Khajuraho and inaugurated a Yoga-Centre near Niyar
                  river, which moved into town 1995 („Hotel India“). Since 1996
                  Guruji is regularly invited to Europa, even South America.
                  Thorough knowledge of astrology as well as palmistry is part
                  of his spiritual work as a Guru in India. Mishraji is
                  well-versed in Ayurveda and acupressure. The success by
                  employing the healing method „Chakra-Healing Therapy“ is
                  impressive. Jamuna Mishra is despite his calling enjoying
                  family life. Since 1982 he is happily married to his wife
                  Sudha and father of two grown-up sons.
                </p>
              </div>
            </div>

            {/* ---------------------team------ */}
            <div className="team">
              <span>OUR TEAM</span>
            </div>
            <div className="team_member">
              <hr />
              <div className="content">
               
                <div className="team">
                  <div className="card"> 
                    <div>
                      <img src={t3} className="team_img"/>
                    </div>
                    <h4>Jhon Doe</h4>
                    <span>CEO</span>
                    <p>
                      One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin.
                    </p>
                  </div>
                  <div className="card">
                    <div>
                      <img src={t2} className="team_img"/>
                    </div>
                    <h4>Jhon Smith</h4>
                    <span>Manager</span>
                    <p>
                      One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin.
                    </p>
                  </div>
                  <div className="card">
                    <div>
                      <img src={t1} className="team_img"/>
                    </div>
                    <h4>Riya Bhatta</h4>
                    <span>CTO</span>
                    <p>
                      One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
