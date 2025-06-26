export default ({ env }) => ({
    "gen-types": {
        enabled: true,
        config: {
            outputLocation: "myTypes.ts",
            // If this is true, then the outputLocation should be the location to a .ts file
            singleFile: true,
        },
    },
});