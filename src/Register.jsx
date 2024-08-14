import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const phoneDigit = 20;
const phoneRegExp =
	/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/im;
//  const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/im;
/***Password  validation Regex****/
const passwordRegExp =
	/^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	/***
	 * Initial values of Register Form
	 ***/
	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		confirmPassword: '',
		acceptTerms: false,
	};

	/***
	 * Validation Schema of register Form
	 ***/
	const validationSchema = Yup.object({
		firstName: Yup.string()
			.required('First Name is required')
			.matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
		lastName: Yup.string()
			.required('Last Name is required')
			.matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
		email: Yup.string()
			.required('Email id is Required')
			.email('Please enter a valid email id'),
		phone: Yup.string()
			.required('Mobile number is required')
			.matches(phoneRegExp, 'Mobile number is not valid'),
		password: Yup.string()
			.required('Please enter your password')
			.matches(
				passwordRegExp,
				'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number',
			),
		confirmPassword: Yup.string().test(
			'passwords-match',
			'Passwords must match',
			function (value) {
				return this.parent.password === value;
			},
		),
		acceptTerms: Yup.bool().oneOf(
			[true],
			'Accept Terms & Conditions is required',
		),
	});

	/***
	 * Form Submission method
	 ***/
	const handleSubmit = (values) => {
		const { firstName, lastName, email, password, phone } = values;
		let registerObj = {
			name: `${firstName} ${lastName}`,
			email,
			phone,
			password,
		};
		console.log(registerObj);
		// dispatch(registerApi(registerObj))
	};

	/**
	 * Show / Hide Password
	 */
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const toggleShowConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<section className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
				{/* <div className='text-center mb-6'>
					<img src='/dist/img/formlogo.png' alt='Logo' className='mx-auto' />
				</div> */}
				<h4 className='text-2xl font-semibold text-center mb-2'>Sign Up</h4>
				<p className='text-center text-gray-600 mb-6'>
					Register with Your email
				</p>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{(formik) => {
						return (
							<Form>
								<div className='mb-4'>
									<Field
										name='firstName'
										placeholder='First Name'
										type='text'
										className='w-full p-2 border border-gray-300 rounded'
									/>
									<ErrorMessage
										name='firstName'
										component='span'
										className='text-red-600 text-sm'
									/>
								</div>
								<div className='mb-4'>
									<Field
										name='lastName'
										placeholder='Last Name'
										type='text'
										className='w-full p-2 border border-gray-300 rounded'
									/>
									<ErrorMessage
										name='lastName'
										component='span'
										className='text-red-600 text-sm'
									/>
								</div>
								<div className='mb-4'>
									<Field
										name='phone'
										placeholder='971 x xxx xxxx/800 xxxxx xxxx/600 xxxxxx'
										type='tel'
										className='w-full p-2 border border-gray-300 rounded'
									/>
									<ErrorMessage
										name='phone'
										component='span'
										className='text-red-600 text-sm'
									/>
								</div>
								<div className='mb-4'>
									<Field
										name='email'
										placeholder='Email address'
										type='email'
										className='w-full p-2 border border-gray-300 rounded'
									/>
									<ErrorMessage
										name='email'
										component='span'
										className='text-red-600 text-sm'
									/>
								</div>
								<div className='mb-4 relative'>
									<Field
										name='password'
										placeholder='Enter password'
										type={showPassword ? 'text' : 'password'}
										className='w-full p-2 border border-gray-300 rounded'
									/>
									<button
										type='button'
										onClick={toggleShowPassword}
										onMouseDown={handleMouseDownPassword}
										className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-center'
									>
										{showPassword ? (
											<i className='fas fa-eye-slash'></i>
										) : (
											<i className='fas fa-eye'></i>
										)}
									</button>
									<ErrorMessage
										name='password'
										component='span'
										className='text-red-600 text-sm'
									/>
								</div>
								<div className='mb-4 relative'>
									<Field
										name='confirmPassword'
										placeholder='Confirm password'
										type={showConfirmPassword ? 'text' : 'password'}
										className='w-full p-2 border border-gray-300 rounded'
									/>
									<button
										type='button'
										onClick={toggleShowConfirmPassword}
										onMouseDown={handleMouseDownPassword}
										className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-center'
									>
										{showConfirmPassword ? (
											<i className='fas fa-eye-slash'></i>
										) : (
											<i className='fas fa-eye'></i>
										)}
									</button>
									<ErrorMessage
										name='confirmPassword'
										component='span'
										className='text-red-600 text-sm'
									/>
								</div>
								<div className='mb-4'>
									<label className='inline-flex items-center'>
										<Field
											type='checkbox'
											name='acceptTerms'
											className='form-checkbox h-4 w-4 text-blue-600'
										/>
										<span className='ml-2 text-gray-700'>
											I agree to Terms & Conditions and Privacy Policy
										</span>
									</label>
									<ErrorMessage
										name='acceptTerms'
										component='span'
										className='text-red-600 text-sm'
									/>
								</div>
								<div className='text-center mt-6'>
									<button
										type='submit'
										className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300'
									>
										Create Account
									</button>
								</div>
								<p className='text-center text-gray-600 mt-4'>
									Already Have an account?{' '}
									<p className='text-blue-600'>Sign In</p>
								</p>
							</Form>
						);
					}}
				</Formik>
			</div>
		</section>
	);
};

export default Register;
