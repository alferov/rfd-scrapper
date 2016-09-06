const filters = require('./filters')
const xray = require('x-ray')({ filters });
const item = '.row-item';
const schema = [{
  title: `${item} .topic_title_link | trim`,
  url: `${item} .topic_title_link@href | trim`,
  created_at: `${item} .first-post-time | trim`,
  updated_at: `${item} .last-post-time | trim`,
  rating: `${item} .total_count_selector | trim`
}];

module.exports = (options = { limit: 3, days: 7, direction: 'd' }) => {
  const { limit, days, direction } = options;
  return new Promise((resolve, reject) => {
    const url = [
      `http://forums.redflagdeals.com/hot-deals-f9/?st=0`,
      `rfd_sk=tt`,
      `sd=${direction}`
    ];
    xray(url.join('&'), `${item}`, schema)((err, data) => {
      if (err) reject(err);
      resolve(data);
    })
    .paginate('.pagination_next@href')
    .limit(limit);
  })
}
