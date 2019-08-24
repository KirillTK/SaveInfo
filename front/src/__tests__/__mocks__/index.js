export const logInSuccess = jest.fn(() => Promise.resolve({data: {user: 'email@email.com'}}));

export const logInFailed = jest.fn(() => Promise.reject({message: 'Incorrect details'}));

export const getUserSuccess = jest.fn(() => Promise.resolve({data: {email: 'test@gmail.com'}}));

export const getUserFailed = jest.fn(() => Promise.resolve({}));
