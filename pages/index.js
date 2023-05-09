import React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <ul className="space-y-4">
            <li>
              <a href="/posts/1">
                <h3 className="text-xl font-bold">First Post</h3>
                <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
              </a>
            </li>
            <li>
              <a href="/posts/2">
                <h3 className="text-xl font-bold">Second Post</h3>
                <p className="text-gray-500">Consectetur adipiscing elit</p>
              </a>
            </li>
            <li>
              <a href="/posts/3">
                <h3 className="text-xl font-bold">Third Post</h3>
                <p className="text-gray-500">Sed do eiusmod tempor incididunt</p>
              </a>
            </li>
          </ul>
        </div>
    </Layout>
  )
}

export default IndexPage
