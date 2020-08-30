module.exports = ({ env }) => ({
  host: env('HOST', '45.136.29.31'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2dff7551645e8e95502d8f6a7a4332a1'),
    },
  },
  proxy: {
    enabled: true,
    ssl: true,
    host: "api.gis-netzwerk.com",
    port: 1337
  }
});
