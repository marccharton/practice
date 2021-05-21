import { Formik, Form, Field } from "formik";


const sleep = (ms) => { return new Promise((r) => setTimeout(r, ms))};

const SimpleForm = () => {
    
    const handleSubmit = async (values) => {
        await sleep(5000);
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <div>

            <h1> Création de compte </h1>
            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={handleSubmit}
            >

            {({ isSubmitting }) => (
                <Form>

                    <label htmlFor="firstName">Prénom</label>
                    <Field id="firstName" name="firstName" placeholder="Francis" />

                    <label htmlFor="lastName">Nom</label>
                    <Field id="lastName" name="lastName" placeholder="Dubois" />

                    <label htmlFor="email">Adresse Mail</label>
                    <Field id="email" name="email" placeholder="f.dubois@gmail.com" type="email" />
                
                    <button type="submit" disabled={isSubmitting}>Submit</button>

                </Form>
            )}

            </Formik>

        </div>
    );
};

export default SimpleForm;