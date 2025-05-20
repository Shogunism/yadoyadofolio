import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "yadoyado",
  apiKey: process.env.MICROCMS_API_KEY,
});
