import Home from './Home';
import fetch from '../../../shared/utils/fetch';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/api/news', {
      method: 'get',
    });
    const { news } = await resp.json();
    if (!news) {
      throw new Error('Failed to load the news feed.');
    }

    return <Home news={news} />;
  },

};
