const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		"Query to get tracks array for the homepage grid"
		tracksForHome: [Track!]!
		"Fetch a specific track, provided a track's ID"
		track(id: ID!): Track
	}

	type Mutation {
		"Mutation to update the number of track views of a particular track"
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	type IncrementTrackViewsResponse {
		"Similar to HTTP status code, represents the status of the mutation"
		code: Int!
		"Indicates whether the mutation was successful"
		success: Boolean!
		"Human-readable message for the UI"
		message: String!
		"Newly updated track after a successful mutation"
		track: Track
	}

	"A track is a group of module that teaches about a specific topic."
	type Track {
		id: ID!
		"the track's title"
		title: String!
		"the track's main author"
		author: Author!
		"the track's main illustration to display in track card or track page detail"
		thumbnail: String
		"the track's approximate length to complete, in minutes"
		length: Int
		"the number of modules this track contains"
		modulesCount: Int
		"The track's complete, can be in markdown format"
		description: String
		"The number of times a track has been viewed"
		numberOfViews: Int
		"The track's complete array of modules"
		modules: [Module!]!
	}

	"A module is a single unit of teaching. Multiple modules compose a track."
	type Module {
		"The Module's unique identifier"
		id: ID!
		"The Module's title"
		title: String!
		"The Module's length in minutes"
		length: Int
	}

	"Author of  a complete track"
	type Author {
		id: ID!
		name: String!
		"Author's profile picture url"
		photo: String
	}
`;

module.exports = typeDefs;
