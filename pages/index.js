import Head from 'next/head'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/">
              <a>Blog</a>
            </Link>
          </div>
          <div>
            <Link href="/admin">
              <a className="border-2 border-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                Admin
              </a>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 font-medium">
                <Link href={`/posts/${post._id}`}>
                  <a>{post.title}</a>
                </Link>
              </div>
              <div className="p-4">{post.content}</div>
              <div className="bg-gray-100 px-4 py-2 text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
  const posts = await res.json()
  return { props: { posts } }
}
