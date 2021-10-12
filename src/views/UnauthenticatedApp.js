import { FormField } from 'components/molecules/FormField/FormField';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/atoms/Button/Button';

export const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      onSubmit={handleSubmit(auth.signIn)}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login ? <span>Login is required</span> : null}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password ? <span>Password is required</span> : null}
      <Button isBig type="submit">
        Sign in
      </Button>
    </form>
  );
};
