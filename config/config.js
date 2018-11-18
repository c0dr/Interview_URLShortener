const config = {};

config.defaultHashLength = process.env.defaultURLLength || 6;
config.maxHashLength = process.env.maxurllength || 6;
config.baseURL = process.env.baseURL || 'http://localhost:3001/Links';

module.exports =  config;