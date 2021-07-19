const resolvers = {
	Query: {
		// returns an array of Tracks that will be used to populate
		// the homepage grid of our web client
		tracksForHome: (_, __, { dataSources }) => {
			return dataSources.trackAPI.getTracksForHome();
		},
		// get a single track by id, for the Track page
		track: (_, { id }, { dataSources }) => {
			console.log(_);
			return dataSources.trackAPI.getTrack(id);
		},
	},

	Track: {
		// returns the author of a particular Track
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
	},
};

module.exports = resolvers;
