import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { useError } from 'hooks/useError';
import { UnauthenticatedApp } from './UnauthenticatedApp';
import { AuthenticatedApp } from './AuthenticatedApp';

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
