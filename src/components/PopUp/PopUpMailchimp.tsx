import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import PopUp from "./PopUp";
const MailchimpFormContainer = ({ onClose }: any) => {
  const postUrl = `https://solvemed.us21.list-manage.com/subscribe/post?u=c93c3fe2f3e154caa4df2ce41&id=5e7e7dce89`;
  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }: any) => <PopUp onClose={onClose} status={status} message={message} onValidated={(formData: any) => subscribe(formData)} />}
      />
    </div>
  );
};

export default MailchimpFormContainer;
