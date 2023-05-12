import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";

import FeedbackFormButton from "./FeedbackFormButton";
import { StyledFeedbackForm } from "./styles";
import { Description, MainTitle } from "../Services/Services";

export default function FeedbackForm() {
  const [isSubmitted, setSubmitted] = useState(false);
  emailjs.init("K3f3TYoiRPS2K5iBz");

  const sendEmail = (templateParams) =>
    emailjs.send("service_zzgwce5", "template_15djijo", templateParams).then(
      function (response) {
        setSubmitted(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

  return (
    <StyledFeedbackForm id="Contacts_block">
      <MainTitle>Contacts</MainTitle>

      <div className="wrapper">
        <div className="centerBlock">
          <div className="left">
            <div className="contactsBlock">
              <h1>Share with us your ideas, thoughts or just say hello</h1>
              <div className="contacts">
                <div className="contact">
                  <a href="tel:+380 11 222 33 44">+38-066-022-83-74</a>
                </div>
                <div className="contact">
                  <a href="mailto:artkdev@gmail.com">artkdev2020@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="feedback">
              <Formik
                initialValues={{ name: "", phone: "", email: "", message: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "required";
                  } else if (!values.email) {
                    errors.email = "required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  } else if (!values.phone) {
                    errors.phone = "required";
                  } else if (!values.message) {
                    errors.message = "required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    var templateParams = {
                      to_name: "ArtKDev",
                      from_name: values.name,
                      from_phone: values.phone,
                      reply_to: values.email,
                      message: values.message,
                    };
                    sendEmail(templateParams);
                    // alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="form">
                    <div>
                      <Field
                        className="field"
                        type="name"
                        name="name"
                        placeholder="Fitrst name"
                      />
                      <ErrorMessage
                        className="error"
                        name="name"
                        component="div"
                      />
                    </div>
                    <div className="userContacts">
                      <div className="block">
                        <Field
                          className="field"
                          type="phone"
                          name="phone"
                          placeholder="Mobile phone"
                        />

                        <ErrorMessage
                          className="error"
                          name="phone"
                          component="div"
                        />

                        <Field
                          className="field"
                          type="email"
                          name="email"
                          placeholder="Mail"
                        />
                        <ErrorMessage
                          className="error"
                          name="email"
                          component="div"
                        />
                      </div>
                      <div>
                        <Field
                          className="textarea"
                          name="message"
                          placeholder="Your message"
                          component="textarea"
                        />
                        <ErrorMessage
                          className="error"
                          name="message"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="contactsBlock">
                      <div className="contacts">
                        <div className="contact">
                          <a href="tel:+380 11 222 33 44">+38-066-022-83-74</a>
                        </div>
                        <div className="contact">
                          <a href="mailto:artkdev@gmail.com">
                            artkdev2020@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <FeedbackFormButton
                      isSubmitting={isSubmitting}
                      isSubmitted={isSubmitted}
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </StyledFeedbackForm>
  );
}
