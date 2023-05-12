import React from "react";
import { DisclaimerButton } from "../Start/Start";

export default function FeedbackFormButton({ isSubmitting, isSubmitted }) {
  return (
    <DisclaimerButton
      className={isSubmitting || isSubmitted ? "disabled" : ""}
      type="submit"
      disabled={isSubmitting || isSubmitted}
    >
      {isSubmitting
        ? "Sending"
        : isSubmitted
        ? "Thanks for your feedback"
        : "Send message"}
    </DisclaimerButton>
  );
}
