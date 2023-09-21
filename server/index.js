const { PubSub, withFilter, GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const config = require('./utils/config');
const logger = require('./utils/logger');

mongoose.set("strictQuery", false);

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info("connected to MongoDB");
    })
    .catch((error) => {
        logger.error("error not connected to MongoDB:", error.message);
    });
