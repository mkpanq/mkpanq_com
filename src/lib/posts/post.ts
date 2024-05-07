// TODO: Fix types for those to matter format and others !
// TODO: Think about short description & keywords / tags -> better SEO !
export type PostYAMLFrontMatter = {
  title: string;
  // TODO: Unify data format
  date: string;
};

export type Post = {
  slug: string;
  data: PostYAMLFrontMatter;
  content: string;
};
