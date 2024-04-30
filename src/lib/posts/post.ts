// TODO: Fix types for those to matter format and others !
export type PostYAMLFrontMatter = {
  title: string;
  date: string;
}

export type Post = {
  slug: string;
  data: PostYAMLFrontMatter
  content: string;
}
