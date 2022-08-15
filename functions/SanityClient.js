// sanity stuff
import { createClient } from 'next-sanity'
import ProjectId from "../constants/ProjectId";

const client = createClient({
  projectId: ProjectId,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export default client;