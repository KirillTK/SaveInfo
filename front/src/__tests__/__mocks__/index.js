export const logInSuccess = jest.fn(() => Promise.resolve({data: {user: 'email@email.com'}}));

export const logInFailed = jest.fn(() => Promise.reject({
    response: {
      statusText: 'Invalid credentials'
    }
}));

export const getUserSuccess = jest.fn(() => Promise.resolve({data: {email: 'test@gmail.com'}}));

export const getUserFailed = jest.fn(() => Promise.resolve({}));

export const logOut = jest.fn(() => Promise.resolve({}));
