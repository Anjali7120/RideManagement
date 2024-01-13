import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Js Project for Ride management',
      version: '1.0.0',
      description: 'It is an App to Manage Rides',
    },
    servers:[
      {
          url: "http://localhost:8010/"
      }
    ] 
  },
  apis: [ path.join(__dirname, 'swaggerDef.js'),], // Updated path to include the files
};
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
