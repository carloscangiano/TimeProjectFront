import http from 'axios';
import Config from '../utils/config';
export default class HomeService {
  static getTimeSV = async () => {
    let response = {
      data: '',
      error: ''
    };
    const config = Config.getHeaderConfig();
    const urlBack = Config.getUrlBack();
    await http
      .get(
        `${urlBack}/time`,
        config
      )
      .then(res => {
        response.data = res.data;
      })
      .catch(error => {
        response.error = error;
      });
    return response;
  };

  static getMetrics = async () => {
    let response = {
      data: '',
      error: ''
    };
    const config = Config.getHeaderConfig();
    const urlBack = Config.getUrlBack();
    await http
      .get(
        `${urlBack}/metrics`,
        config
      )
      .then(res => {
        response.data = res.data;
      })
      .catch(error => {
        response.error = error;
      });
    return response;
  };
}