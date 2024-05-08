export type PostMetadata = {
  publishDate: Date;
  title: string;
  description?: string;
  tags?: string[];
};

export type Post = {
  slug: string;
  content: string;
  metadata: PostMetadata;
};
