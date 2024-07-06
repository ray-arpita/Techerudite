
import * as Yup from 'yup';
const validationSchema = Yup.object({
    name: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    budget: Yup.string().required('Budget is required'),
    description: Yup.string().required('Description is required'),
});

export default validationSchema;