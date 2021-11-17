export const query = `
	type Query {
		_empty: String
	}
`;

export const utils = `
	"Date object as string or standard string"
	scalar Date

	type PageInfo {
		total: Int!
		perPage: Int!
		pageCount: Int!
		currentPage: Int!
		hasNextPage: Boolean!
		hasPreviousPage: Boolean!
	}
`;