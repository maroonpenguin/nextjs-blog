import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "my-blog-api",
  apiKey: process.env.API_KEY,
});
