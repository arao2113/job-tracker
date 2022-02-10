module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: `mongodb+srv://arao2113:${process.env.MONGODB_KEY}@cluster0.s6f9p.mongodb.net/job-tracker?retryWrites=true&w=majority`,
  },
};
