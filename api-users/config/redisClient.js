const redis = require('redis');
exports.clienteRedis = redis.createClient({ url: "redis://default:password@localhost:6379"});