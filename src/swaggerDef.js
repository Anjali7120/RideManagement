/**
 * @swagger
 * definitions:
 *   Rides:
 *     properties:
 *       rideID:
 *         type: integer
 *       startLat:
 *         type: integer
 *       startLong:
 *         type: integer
 *       endLat:
 *         type: integer
 *       endLong:
 *         type: integer
 *       riderName:
 *         type: string
 *       driverName:
 *         type: string
 *       driverVehicle:
 *         type: string
 *       created:
 *         type: string
 */

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check the health of the API
 *     description: Endpoint to check the health status of the API.
 *     responses:
 *       200:
 *         description: API is healthy.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: The health status of the API.
 *                   enum: [healthy]
 */



/**
 * @swagger
 * /rides:
 *   get:
 *     summary: Get a list of rides
 *     description: Retrieve a list of rides
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of rides
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Rides'
 */


/**
 * @swagger
 * /rides:
 *   post:
 *     summary: Create a new ride
 *     description: Endpoint to request a new ride.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               start_lat:
 *                 type: number
 *                 description: The starting latitude for the ride.
 *               start_long:
 *                 type: number
 *                 description: The starting longitude for the ride.
 *               end_lat:
 *                 type: number
 *                 description: The ending latitude for the ride.
 *               end_long:
 *                 type: number
 *                 description: The ending longitude for the ride.
 *               rider_name:
 *                 type: string
 *                 description: The name of the rider.
 *               driver_name:
 *                 type: string
 *                 description: The name of the driver.
 *               driver_vehicle:
 *                 type: string
 *                 description: The vehicle used by the driver.
 *     responses:
 *       201:
 *         description: Ride requested successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *           items:
 *             $ref: '#/definitions/Rides'
 *       400:
 *         description: Bad request. Invalid input data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 */


/**
 * @swagger
 * /rides/{rideId}:
 *   get:
 *     summary: Get information about a specific ride
 *     description: Endpoint to retrieve information about a specific ride based on the provided ride ID.
 *     parameters:
 *       - in: path
 *         name: rideId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier for the ride.
 *     responses:
 *       200:
 *         description: Ride information retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *           items:
 *             $ref: '#/definitions/Rides'
 *       404:
 *         description: Ride not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the error.
 */

