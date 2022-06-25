import axios from 'axios';
import {APIKey, url} from '../constants';
import { newsFeedInterface} from '../types.tsx'

export const getTopNews  = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${url}/top-headlines`,
      params: {
        apiKey: APIKey,
        country: 'us',
      },
    });
    console.log(response.data.articles);
    return response.data.articles;
  } catch (err) {
    console.log(err);
  }
};

export const searchInNews = async (keyword: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${url}/everything`,
      params: {
        apiKey: APIKey,
        q: keyword,
      },
    });
    return response.data.articles;
  } catch (err) {
    console.log(err);
  }
};
