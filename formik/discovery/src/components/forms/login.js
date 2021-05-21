import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import validationSchema from './login.validation';
import sleep from '../../utils/sleep';

const LoginForm = () => {

    const handleSubmit = async (values) => {
        await sleep(1000);
        alert(JSON.stringify(values, null, 2));
        console.log(values);
    };

    const formik = useFormik({
        initialValues : {
            email: '',
            password: '',
        },
        onSubmit : handleSubmit,
        validationSchema : validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
        
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

export default LoginForm;