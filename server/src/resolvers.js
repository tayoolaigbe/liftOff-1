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

	Mutation: {
		// increment's a track's numberOfView property
		incrementTrackViews: async (_, { id }, { dataSources }) => {
			const track = await dataSources.trackAPI.incrementTrackViews(id);

			return {
				code: 200,
				success: true,
				message: `Successfully incremented number of views for track ${id}`,
				track,
			};
		},
	},

	Track: {
		// returns the author of a particular Track
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
		modules: ({ id }, _, { dataSources }) => {
			return dataSources.trackAPI.getTrackModules(id);
		},
	},
};

module.exports = resolvers;
