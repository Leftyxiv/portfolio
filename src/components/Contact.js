import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';


const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const { register, handleSubmit, errors} = useForm();
  
  const serviceid = 'service_id'
  const templateid = 'template_id'
  const userid = 'user_6J5dWE6JwGSpGkWDXZGBD'
  

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceid,
      templateid,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userid
    )
    reset.target.reset()
  }

    const sendEmail = (serviceid, templateid, variables, userid) => {
  
      emailjs.send(serviceid, templateid, variables, userid)
        .then(() => {
            setSuccessMessage('Form sent successfully!  I\'ll contact you as soon as possible!')
        }).catch(err => console.error(`Something went very wrong! ${err}`))
    }

  return (



    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={
                    register({
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={
                    register({
                      required: "Please add your phone number",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={
                    register({
                      required: "Please provide you email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={
                    register({
                      required: "OOPS, you forget to add the subject.",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  ref={
                    register({
                      required: "Please describe shortly your project needs...",
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>












    );
  };
  
  export default Contact;



































    // <div className="contacts">
    //   <div className="text-center">
    //     <h1>contact me</h1>
    //     <p>Please fill out the form and I will contact you as soon as possible </p>
    //     <span className='success-message'>{ successMessage }</span>
    //   </div>
    //   <div className="container">
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //     <div className="col-md-6 col-xs-12">
    //       {/* name input */}
    //       <div className="text-center">
    //         <input id="name" type="text" 
    //         className="form-control" 
    //         placeholder="Name" 
    //         name="name" 
    //         ref={ 
    //           register({ 
    //             required: "Please enter your name",
    //             maxLength: {
    //               value: 50,
    //               message: 'Name is too long!  Please use less than 50 characters!'
    //             }
    //             })}
    //             />
            
    //         <div className="line"></div>
    //       <span className='error-message'>{ errors.name && errors.name.message }</span>
    //       </div>
    //       {/* phone input */}
    //       <div className="text-center">
    //         <input 
    //         id="phone" 
    //         type="text" 
    //         className="form-control" 
    //         placeholder="Phone Number" 
    //         name="phone" 
    //         ref={ 
    //           register({ 
    //             required: "Please enter your phone number",
    //             maxLength: {
    //               value: 15,
    //               message: 'Phone numbers aren\'t that long!'
    //             }
    //           })}
    //         />
    //         <div className="line"></div>
    //             <span className='error-message'>{ errors.phone && errors.phone.message }</span>
    //       </div>
    //       {/* email input */}
    //       <div className="text-center">
    //         <input 
    //         id="email" 
    //         type="email" 
    //         className="form-control" 
    //         placeholder="Email" 
    //         name="email" 
    //         ref={ 
    //           register({ 
    //             required: "Please enter your email",
    //             maxLength: {
    //               value: 50,
    //               message: 'Email is too long!  Please use less than 50 characters!'
    //             }, 
    //             pattern: {
    //               value: /^[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //               message: 'Invalid email!'
    //           },
    //         })}
    //         />
    //         <div className="line"></div>
    //         <span className='error-message'>{ errors.email && errors.email.message }</span>
    //       </div>
    //       {/* subject input */}
    //       <div className="text-center">
    //         <input 
    //         id="subject" 
    //         type="text" 
    //         className="form-control" 
    //         placeholder="Subject" 
    //         name="subject" 
    //         ref={ 
    //           register({ 
    //             required: "Please enter a subject",
    //             maxLength: {
    //               value: 50,
    //               message: 'Subject is too long!  Please use less than 50 characters!'
    //             }
    //           })}
    //         />
    //         <div className="line"></div>
    //         <span className='error-message'>{ errors.subject && errors.subject.message }</span>
    //       </div>
    //     </div>
    //     <div className="col-md-6 col-xs-12">
    //       {/* description input */}
    //       <div className="text-center">
    //         <textarea
    //           id="description"
    //           type="text"
    //           className="form-control"
    //           placeholder="Description"
    //           name="description"
    //           ref={ 
    //             register({ 
    //               required: "Please enter a description",
    //             })}
    //         ></textarea>
    //         <div className="line"></div>
    //             <span className='error-message'>{ errors.description && errors.description.message }</span>
    //     <button className="btn-main-offer contact-btn" id="contactBtn" type="submit">
    //       Contact me
    //     </button>
    //       </div>
    //     </div>
    //   </form>
    //   </div>
    //   {/* <div className="contact-button-container">
    //   </div> */}
    // </div>
