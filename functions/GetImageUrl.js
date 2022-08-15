import imageUrlBuilder from '@sanity/image-url'
import client from "./SanityClient";
import ProjectId from "../constants/ProjectId";

const builder = imageUrlBuilder(client);
builder.dataset("production"); builder.projectId(ProjectId);

function GetImageUrl( image ) {
    let imageUrl = builder.image(image.asset._ref).url();
    return imageUrl;
}

export default GetImageUrl;