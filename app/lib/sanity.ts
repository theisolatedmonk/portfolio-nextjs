import { createClient } from "next-sanity";

const projectId = "rfqk5o8o";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
