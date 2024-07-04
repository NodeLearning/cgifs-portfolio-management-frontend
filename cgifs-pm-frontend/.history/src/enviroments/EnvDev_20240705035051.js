require("dotenv").config();

export const environment = {
  production: false,
  mapbox: {
    accessToken:
      process.env.MAP_BOX,
  },
};
