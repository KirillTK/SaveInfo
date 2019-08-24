import { GET_USER_SAGA, SIGN_IN_SAGA } from 'auth/saga';
import Auth from 'auth/services/auth';
import { runSaga } from '@redux-saga/core';
import { put } from '@redux-saga/core/effects';
import { setUser } from 'auth/actions';
import {getUserSuccess, logInFailed, logInSuccess} from './__mocks__';
import {SET_ERROR} from 'message/actions';


describe('Test Auth Saga', () => {
  it('should check if sign in success finish and save user to store', async () => {
    const response = { data: { user: 'email@email.com' } };
    Auth.logIn = logInSuccess;
    const generator = SIGN_IN_SAGA({ email: 'test@mail.com' });
    generator.next(response).value;

    expect(generator.next(response).value).toEqual(put(setUser({ user: response.data.user })));
  });

  it('should check if log in failed and ', async () => {
    let dispatchedAction;
    Auth.logIn = logInFailed;
    const fakeStore = {
      dispatch: action => dispatchedAction = action,
    };
    await runSaga(fakeStore, SIGN_IN_SAGA, { email: 'test@mail.com' }).done;
    expect(dispatchedAction.type).toBe(SET_ERROR);
  });

  it('should check if get user saga put in store user info', async () => {
    const dispatchedActions = [];
    const expectedResponse = { email: 'test@gmail.com' };
    Auth.getUser = getUserSuccess;
    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, GET_USER_SAGA).done;
    const expectedResult = {
      type: '@@auth/SET_USER',
      payload: { email: 'test@gmail.com' },
    };
    expect(dispatchedActions).toContainEqual(expectedResult);
  });
});
