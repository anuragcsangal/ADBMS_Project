import Head from 'next/head'
import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{post.title}</title>
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
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-500 mb-4">
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post._id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}
