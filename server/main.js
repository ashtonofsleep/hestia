// Import dependencies
import {ApolloError, ApolloServer} from "apollo-server";
import mongoose from "mongoose";

// Import utilities and components
import log from './util/logger';
import { schema, models } from './src';

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/hestia`).then(() => {
	mongoose.set('debug', true);
}, () => {
	throw new ApolloError("Database connection unavailable");
});

/**
 * Configuration
 */
const config = {
	port: 4000, // Port used by the API server
}

// Construct GraphQL server instance
const server = new ApolloServer({
	schema,
	context: ({req, res}) => {
		// Define global values
		const globals = {
			version: '0.0.1'
		}

		return { globals }
	},
	dataSources: () => {
		return {
			config: models.config,
			user: models.user,
//			page: models.page,
//			post: models.post,
			room: models.room,
			booking: models.booking,
//			table: models.table,
//			reservation: models.reservation
		}
	}
});

// Start GraphQL server
server.listen({ port: config.port }).then(({url}) => {
	log.success(`Hestia API standing by at ${url}`)
});