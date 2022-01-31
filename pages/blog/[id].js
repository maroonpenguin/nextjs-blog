import Link from "next/link";
import Layout from "../../components/Layout";
import { client } from "../../libs/client";
import Moment from "react-moment";

const BlogId = ({ blog }) => {
  return (
    <Layout title={blog.title}>
      <div className="container flex flex-col mx-auto w-full items-left justify-center bg-white dark:bg-gray-800 rounded-lg shadow p-5">
        <main className="p-10 ">
          <h1 className="mb-5 text-2xl font-bold text-indigo-700">
            {blog.title}
          </h1>
          <h3 className="mb-12">
            <Moment format="YYYY/MM/DD">{blog.publishedAt}</Moment>
          </h3>
          <h2
            className="px-10"
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </main>
      </div>
      <div className="flex justify-center">
        <Link href="/" passHref>
          <button
            type="button"
            className="inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded text-white bg-teal-600 hover:bg-teal-700 transition-colors mt-12"
          >
            前へ戻る
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default BlogId;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
    revalidate: 3,
  };
};
