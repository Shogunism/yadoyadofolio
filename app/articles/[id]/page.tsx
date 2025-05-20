import { client } from "@/libs/client";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function ArticleDetailPage({ params }: Props) {
  try {
    const blog = await client.get({
      endpoint: "blogs",
      contentId: params.id,
    });

    return (
      <div style={{ padding: "40px" }}>
        <style>
          {`
            img {
              max-width: 80%;
              center: 50%;
              height: auto;
            }
          `}
        </style>
        <h1>{blog.title}</h1>
        {blog.eyecatch && (
          <img
            src={blog.eyecatch.url}
            alt="アイキャッチ画像"
            width={blog.eyecatch.width}
            height={blog.eyecatch.height}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    );
  } catch (e) {
    notFound(); // microCMSに記事が存在しない場合に 404 にします
  }
}
