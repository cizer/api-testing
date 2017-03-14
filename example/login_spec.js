const request = require('request');
const baseUrl = 'http://localhost:3000/login';

describe('login', () => {
  describe('on providing valid credentials', () => {
    const validCredentials = { username: 'user1', password: 'password1' };
    let response;

    it('call login', (done) => {
      request.post({ url: baseUrl, json: validCredentials }, (error, res) => {
        response = res;
        done();
      });
    });

    it('statusCode is 200', () => {
      expect(response.statusCode).toEqual(200);
    });

    it('username is returned', () => {
      expect(response.body.username).toEqual(validCredentials.username);
    });

    it('token type is returned', () => {
      expect(response.body.token_type).toEqual('Bearer');
    });

    it('access token is defined', () => {
      console.log(response.body.access_token);
      expect(response.body.access_token).toBeDefined();
    });
  });

  it('on providing invalid credentials', (done) => {
    const invalidCredentials = { username: 'invalid_user', password: 'invalid_password' };

    request.post({ url: baseUrl, json: invalidCredentials }, (error, response) => {
      expect(response.statusCode).toEqual(401);
      done();
    });
  });
});
