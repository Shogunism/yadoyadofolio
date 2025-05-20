import { client } from "@/libs/client";
import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params; 
  try {
    const blog = await client.get({
      endpoint: "blogs",
      contentId: resolvedParams.id, 
    });

    return (
      <div style={{ padding: "40px" }}>
        <h1>{blog.title}</h1>
        {blog.eyecatch && (
          <Image
            src={blog.eyecatch.url}
            alt="アイキャッチ画像"
            width={blog.eyecatch.width}
            height={blog.eyecatch.height}
            style={{
              maxWidth: "80%",
              display: "block",
              margin: "0 auto",
              height: "auto",
            }}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    );
  } catch {
    notFound();
  }
}
