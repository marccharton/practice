import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import validationSchema from './signup.validation';
import { sleep } from '../../utils';

const SignupForm = () => {

    const handleSubmit = async (values) => {
        await sleep(1000);
        alert(JSON.stringify(values, null, 2));
        console.log(values);
    };

    const formik = useFormik({
        initialValues : {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        onSubmit : handleSubmit,
        validationSchema : validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
        
            <TextField 
                fullWidth
                id="firstName"
                name="firstName"
                label="Firstname"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
        
            <TextField 
                fullWidth
                id="lastName"
                name="lastName"
                label="Lastname"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
        
            <TextField 
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
                fullWidth
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="Confirmation Password"
                type="password"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
            />

            <Button 
                fullWidth
                color="primary" 
                variant="contained"
                type="submit"
            >
                Submit
            </Button>

        </form>
    
    );
};

export default SignupForm;