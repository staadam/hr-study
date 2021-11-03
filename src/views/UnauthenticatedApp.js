import { FormField } from 'components/molecules/FormField/FormField';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper } from './UnauthenticatedApp.styled';
import React from 'react';
import { SEO } from '../components/molecules/SEO/SEO';

export const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <SEO directory={'Login'} />
      <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
        <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
        {errors.login ? <span>Login is required</span> : null}
        <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
        {errors.password ? <span>Password is required</span> : null}
        <Button isBig type="submit">
          Sign in
        </Button>
      </FormWrapper>
    </>
  );
};
