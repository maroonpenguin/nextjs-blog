import Link from "next/link";
import Layout from "../components/Layout";

const Custom404 = () => {
  return (
    <Layout title="404 Not Found">
      <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow p-5">
        <main className="main">
          <p className="font-bold flex justify-center text-3xl">
            404 Not Found
          </p>
          <p className="font-bold flex justify-center text-2xl">
            ページがありません。
          </p>
        </main>
        <Link href="/" passHref>
          <button
            type="button"
            className="inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded text-white bg-teal-600 hover:bg-teal-700 transition-colors mt-12"
          >
            ホームへ戻る
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;
