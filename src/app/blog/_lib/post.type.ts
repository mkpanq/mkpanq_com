export type PostMetadata = {
  publishDate: string;
  title: string;
  description?: string;
  tags?: string[];
};

export type Post = {
  slug: string;
  content: string;
  metadata: PostMetadata;
};
