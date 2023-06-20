const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://www.bing.com/search?form=MY0291&OCID=MY0291&q=Bing+Al&showconv=1";//your website url
  //   if (
  //     req.url.startsWith("/api") ||
  //     req.url.startsWith("/auth") ||
  //     req.url.startsWith("/banner") ||
  //     req.url.startsWith("/CollegeTask")
  //   ) {
  //     target = "http://106.15.2.32:6969";
  //   }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://bing.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
