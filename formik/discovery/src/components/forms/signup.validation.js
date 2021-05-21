import * as yup from 'yup';

const validationSchema = yup.object({
    firstName: yup
        .string("Enter your firstname")
        .required("Firstname is required")
        ,
    lastName: yup
        .string("Enter your lastname")
        .required("Lastname is required")
        ,
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required")
        ,
    password: yup
        .string("Enter your password")
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
        ,
    passwordConfirmation: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        ,
});

export default validationSchema;