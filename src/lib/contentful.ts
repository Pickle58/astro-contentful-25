import * as contentful from "contentful"
import pkg from "@contentful/rich-text-types";
const {Document} = pkg;

export interface BlogPost {
  contentTypeId: "blogPost",
  fields: {
    title: string,
    content: Document,
    date: string,
    description: string,
    slug: string
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});