export default class Config {
  static getHeaderConfig = () => {
    const config = {
      headers: { authorization: 'mysecrettoken' }
    };
    return config;
  };
  static getUrlBack = () => {
    return process.env.REACT_APP_API_URL || 'http://localhost:4000';
  }
}