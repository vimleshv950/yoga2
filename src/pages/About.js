import React from "react";
import Layout from "../component/Layouts/Layout";
import "../style/about.css";

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
                  ABOUT <span className="our">GURUJI</span>
                </span>
                <p>
                  Guruji Jamuna Prasad Mishra was Born in Ragoli, Madhya
                  Pradesh, and is descendant of an important Brahman family. His
                  father, Sri Ram Ratan Mishra, was an honoured priest and
                  prominent spiritual teacher.
                </p>
                <br />
                <p>
                  The family tradition goes way back in history for centuries,
                  as this family were running the Gurukula (training school for
                  offspring of teacher and royal cast). Already before Jamuna
                  Mishra took his doctorates in Ayurveda (university of
                  Allahabad) and Naturophaty (Delhi National Akademie of
                  Naturophaty), he was captioned “Guru” by the native
                  „Guru-council“ being composed of the most senior and most
                  important spiritual teachers of his country.
                </p>
                <br />
                <p>
                  Gurukula being under guidance of his Vater Sri Ram Ratan
                  Mishra had to be closed due to the Independance of India. For
                  that reason his son was assigned a completely new task. In
                  1984 Jamuna Mishra moved to Khajuraho and inaugurated a
                  Yoga-Centre near Niyar river, which moved into town 1995
                  („Hotel India“). Since 1996 Guruji is regularly invited to
                  Europa, even South America. Thorough knowledge of astrology as
                  well as palmistry is part of his spiritual work as a Guru in
                  India. Mishraji is well-versed in Ayurveda and acupressure.
                  The success by employing the healing method „Chakra-Healing
                  Therapy“ is impressive. Jamuna Mishra is despite his calling
                  enjoying family life. Since 1982 he is happily married to his
                  wife Sudha and father of two grown-up sons.
                </p>
              </div>
            </div>

            {/* ---------------------team------ */}
            <div className="team">
              <span>SOCIAL MEDIA</span>
            </div>
            <div className="team_member">
              <hr />
              <div className="content">
                <div className="team">
                  <div className="card">
                    <div>
                      <a href="https://www.facebook.com/jamunamishra">
                        <img
                          src="/image/media/facebook.png"
                          className="team_img"
                          alt="team member"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="card">
                  <div>
                      <a href="contact.html">
                        <img
                          src="/image/media/gmail.png"
                          className="team_img"
                          alt="team member"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="card">
                  <div>
                      <a href="https://www.youtube.com/channel/UCq0s0fsPfBxczyMsYGMRkVw">
                        <img
                          src="/image/media/youtube.png"
                          className="team_img"
                          alt="team member"
                        />
                      </a>
                    </div>
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
