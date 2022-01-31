import Link from "next/link";
import Layout from "../components/Layout";
import { client } from "../libs/client";
import Moment from "react-moment";
import Image from "next/image";

export default function Home({ blog }) {
  return (
    <Layout>
      <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow p-5">
        <h1 className="text-3xl mb-5">Home</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {blog.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
            >
              <Link href={`/blog/${blog.id}`}>
                <a className="w-full block h-full">
                  <Image
                    alt="blog thumbnail"
                    src={blog.thumbnail.url}
                    width={320}
                    height={200}
                  />
                  {/* <div className="bg-green-500 h-40 w-full ">{blog.image}</div> */}
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-700 text-md font-medium">
                      {blog.title}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                      <Moment format="YYYY/MM/DD">{blog.publishedAt}</Moment>
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                      {blog.comment}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
    revalidate: 3,
  };
};
