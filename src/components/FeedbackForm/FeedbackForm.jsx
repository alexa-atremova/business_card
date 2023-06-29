import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";

import { Description, StyledFeedbackForm } from "./styles";

import { DisclaimerButton } from "../Start/Start";
import { Paragraph1, ParagraphItalic } from "../Story/Story";
import Phrase from "../Phrase/Phrase";

export default function FeedbackForm() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  emailjs.init("LWiX1fH5uhdPCg5Iu");

  const sendEmail = (templateParams) =>
    emailjs.send("service_6g878jv", "template_3yolkz8", templateParams).then(
      function (response) {
        setSubmitted(true);
        setShowSuccessMessage(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledFeedbackForm>
      <div className="wrapper">
        <div className="centerBlock">
          <div className="right">
            <div className="feedback">
              <Formik
                initialValues={{ name: "", phone: "", email: "", message: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Please enter your name";
                  } else if (!values.email) {
                    errors.email = "Please enter email";
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
                      to_name: "Avgust",
                      from_name: values.name,
                      from_phone: values.phone,
                      reply_to: values.email,
                      message: values.message,
                    };
                    sendEmail(templateParams)
                      .then(() => {
                        console.log("Email sent successfully!");
                        setSubmitting(false);
                      })
                      .catch((error) => {
                        console.log("Email sending failed: ", error);
                        setSubmitting(false);
                      });
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
                        placeholder="Your name"
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
                      </div>
                      <div className="block">
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
                    <DisclaimerButton type="submit">
                      Send message
                    </DisclaimerButton>
                    {showSuccessMessage && (
                      <Description className="successMessage">
                        Your message has been sent!
                      </Description>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Phrase />
    </StyledFeedbackForm>
  );
}
