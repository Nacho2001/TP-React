const clienteRedis = redis.createClient({ url: "redis://nachoUsers@31.187.76.251:6379"});
export default clienteRedis;