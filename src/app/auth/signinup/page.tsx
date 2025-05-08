/* eslint-disable import/extensions */
/* eslint-disable max-len */

'use client';

import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { createUser } from '@/lib/dbActions';

type SignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

/** The sign in/up page. */
const SignInUp = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(validationSchema),
  });

  const [signInError, setSignInError] = useState('');

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignInError('');

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error('Sign in failed: ', result.error);
      setSignInError('Invalid email or password');
    } else {
      window.location.href = '/dashboard';
    }
  };

  const onSubmit = async (data: SignUpForm) => {
    await createUser(data);
    await signIn('credentials', { callbackUrl: '/add', ...data });
  };
  /** */
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        paddingTop: '5rem',
        paddingBottom: '10rem',
      }}
    >
      <div
        className={`container slider-form-container ${isRightPanelActive ? 'right-panel-active' : ''}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <Form onSubmit={handleSubmit(onSubmit)} className="signin-form">
            <h1>Create Account</h1>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className={errors.email ? 'input-error' : ''}
            />
            <div className="error-text">{errors.email?.message}</div>

            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className={errors.password ? 'input-error' : ''}
            />
            <div className="error-text">{errors.password?.message}</div>

            <input
              type="password"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            <div className="error-text">{errors.confirmPassword?.message}</div>

            <Button variant="outline-success" type="submit">
              Register
            </Button>
          </Form>
        </div>

        <div className="form-container sign-in-container">
          <Form onSubmit={handleSignIn} className="signin-form">
            <h1>Sign in</h1>
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            {signInError && <div className="error-text mb-2">{signInError}</div>}
            <Button variant="outline-success" type="submit">
              Sign In
            </Button>
          </Form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <Image src="/cpm-nohands.png" alt="Campus Plate Mate Logo" width={200} />
              <h2>Hello There!</h2>
              <hr />
              <p>Already have an account? Click the button below.</p>
              <Button onClick={() => setIsRightPanelActive(false)} variant="outline-light">
                Sign In
              </Button>
            </div>
            <div className="overlay-panel overlay-right">
              <Image src="/cpm-nohands.png" alt="Campus Plate Mate Logo" width={200} />
              <h2>Welcome Back!</h2>
              <hr />
              <p>Don&apos;t have an account? Click the button below.</p>
              <Button onClick={() => setIsRightPanelActive(true)} variant="outline-light">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
