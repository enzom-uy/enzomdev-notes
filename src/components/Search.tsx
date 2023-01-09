import { useState, useEffect } from 'react'
import type { MarkdownInstance } from 'astro'
import Fuse from 'fuse.js'
import PostCard from './PostCard'

type Post = MarkdownInstance<Record<string, any>>

interface Props {
  posts: Post[]
}

const Search: React.FC<Props> = ({ posts }) => {
  const [input, setInput] = useState('')
  const [searchedPosts, setSearchedPosts] = useState<Fuse.FuseResult<Post>[]>()
  const fuseOptions: Fuse.IFuseOptions<Post> = {
    keys: ['frontmatter.title']
  }
  const fuse = new Fuse(posts, fuseOptions)

  useEffect(() => {
    setSearchedPosts(fuse.search(input))
  }, [input])

  console.log(searchedPosts)

  return (
    <div className="mt-4 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nombre del post..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="dark:text-zinc-700 "
      />
      {searchedPosts && (
        <ul>
          {searchedPosts.map(({ item: { frontmatter, url } }) => (
            <li key={frontmatter.title}>
              <PostCard
                title={frontmatter.title}
                date={frontmatter.date}
                description={frontmatter.description}
                href={url as string}
              />
            </li>
          ))}
        </ul>
      )}
      {input !== '' && searchedPosts?.length === 0 && (
        <p className="text-lg">
          No se encontraron posts relacionados a ${input}
        </p>
      )}
    </div>
  )
}

export default Search
