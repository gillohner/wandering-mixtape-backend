module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: [
        "http://wmt.lohner.cloud",
        "https://wmt.lohner.cloud",
      ],
      headers: ["*"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    },
  },
});
