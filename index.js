/**
 * Created by che on 09.06.16.
 */
'use strict';

const Hapi = require('hapi');
const renderProduct = require('./worker/products/product');
const pathname = __dirname;

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/catalog/{filename}',
    handler: function (request, reply) {

        //reply.view('templates/template.jade', 'hello');
        renderProduct.product(reply, request.url.path, pathname);
    }
});

server.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: {
            html: {
                module: require('jade')
            }
        },
        relativeTo: __dirname,
        path: 'templates',
        compileMode: 'async'
    })
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});