import { makeExecutableSchema } from "@graphql-tools/schema";

// Core domains
import config from './config';
import user from './user';
//import page from './page';
//import post from './post';

// Hotel domains
import room from './room';
import booking from './booking';

// Restaurant domains
//import table from './table';
//import reservation from './reservation';

// Import root and unassigned
import { query, utils } from './types';
import { mutation } from './mutations';
import { resolvers } from './resolvers';

// Export executable schema for server use
export const schema = makeExecutableSchema({
	typeDefs: [
		query,
		mutation,
		utils,
		config.types,
		user.types,
//		page.types,
//		post.types,
		room.types,
		booking.types,
//		table.types,
//		reservation.types
	],
	resolvers: [
		resolvers,
		config.resolvers,
		user.resolvers,
//		page.resolvers,
//		post.resolvers,
		room.resolvers,
		booking.resolvers,
//		table.resolvers,
//		reservation.resolvers
	]
})

// Export models for API data sources
export const models = {
	config: config.model,
	user: user.model,
//	page: page.model,
//	post: post.model,
	room: room.model,
	booking: booking.model,
//	table: table.model,
//	reservation: reservation.model
}