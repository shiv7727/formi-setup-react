import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FocusError from './Formik/components/FocusError.jsx';
import FormikControl from './Formik/components/FormikControl.jsx';

const Login = () => {
	const [error, setError] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	/**
	 * Show / Hide Password
	 */
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	/***
	 * Initial values of Login Form
	 * ***/
	const initialValues = {
		email: '',
		password: '',
	};

	/***
	 * Validation Schema of login Form
	 * ***/
	const validationSchema = Yup.object({
		email: Yup.string()
			.required('Email id is Required')
			.email('Please enter valid email id'),
		password: Yup.string().required('Please enter your password'),
	});

	const handleSubmit = (values, { setSubmitting }) => {
		console.log('values');
	};

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
				<h1 className='text-2xl font-semibold text-center mb-6'>Login</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					<Form>
						<FocusError />
						<div className='mb-4'>
							<FormikControl
								label='Enter Email ID'
								name='email'
								control='input'
								className='w-full p-2 border border-gray-300 rounded'
								placeholder='Email address'
								type='email'
							/>
						</div>
						<div className='mb-4 relative'>
							<FormikControl
								label='Enter Password'
								control='input'
								name='password'
								className='w-full p-2 border border-gray-300 rounded'
								placeholder='Enter password'
								type={showPassword ? 'text' : 'password'}
							/>
							<button
								type='button'
								onClick={toggleShowPassword}
								className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600'
							>
								<span>{showPassword ? 'Hide' : 'Show'}</span>
							</button>
						</div>
						<div className='text-center mt-6'>
							<button
								type='submit'
								className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300'
							>
								Sign In
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default Login;
