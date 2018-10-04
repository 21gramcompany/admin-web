/**
 * axios 공통 옵션
 */
const sendOption = {
  timeout: 2500,
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
  maxContentLength: 2000,
  validateStatus (status) {
    return status >= 200 && status < 300;
  },
  maxRedirects: 0,
};

// TODO: swagger 옵션
/**
 * swagger 옵션
 */
const swaggerOption = Object.assign({}, sendOption, {
  baseURL: '/swagger',
});

/**
 * mock 옵션
 */
const serverMockOption = Object.assign({}, sendOption, {
  baseURL: 'http://localhost:3000/mock',
});

export default sendOption;

export {
  swaggerOption,
  serverMockOption,
};