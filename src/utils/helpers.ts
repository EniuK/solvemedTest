import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export const emailFailStatus = {
  empty: "email is a required field",
  incorrect: "email must be a valid email",
}