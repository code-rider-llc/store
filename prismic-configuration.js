module.exports = {
  apiEndpoint: process.env.prismicEndpoint,
  snipcartKey: process.env.snipcartKey,
  accessToken: process.env.accessToken,
  linkResolver: function (doc) {
    if (doc.type == 'category') {
      return '/category/' + doc.uid;
    }
    if (doc.type == 'product') {
      return '/product/' + doc.uid;
    }
    return '/';
  }
};