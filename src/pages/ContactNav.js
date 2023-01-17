import React from 'react'
import Layout from '../component/Layouts/Layout'
import '../style/contact.css'

const ContactNav = () => {
  return (
    <Layout>
       <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>Reach out to us in below mentioned address</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src="/image/img1.jpg" alt="" />
                </div>
                <div className="details">
                  <h1>Contact Address :</h1>
                  <h4>Dr. Jamuna Mishra</h4>
                  <p>
                 EurostarINN Hotel Khajuraho 471606 MP India
                  </p>
                  <br />
                  <p>Phone: +91 9425143823</p>
                  <p>Phone: +91 7686274386</p>
                  <p>Email:  jamunamishra@yahoo.com</p>
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname'  onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone'  onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject'  onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>ENTER QUERY/FEEDBACK </span>
                  <textarea cols='30' rows='10' name='message' onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND QUERY <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactNav
