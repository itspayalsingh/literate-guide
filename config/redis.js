const { url } = require('inspector');
const  { createClient } = require('redis');

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

client.connect({
    url:`redis-12077.c264.ap-south-1-1.ec2.cloud.redislabs.com:12077`
});

module.exports={client};