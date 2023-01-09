import { useState, useEffect } from 'react'
import type { MarkdownInstance } from 'astro'
import Fuse from 'fuse.js'
import { FaSearch } from 'react-icons/fa/index'
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

  return (
    <div className="mt-4 flex w-full flex-col gap-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Nombre del post"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-slate-800 bg-transparent py-4 pl-14 pr-4 font-semibold dark:border-zinc-700 dark:text-zinc-300"
        />
        <FaSearch className="absolute top-[1rem] left-[1rem] text-2xl opacity-70" />
      </div>
      {searchedPosts && (
        <ul className="flex flex-col gap-2">
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
          No se encontraron posts relacionados a {input}
        </p>
      )}
    </div>
  )
}

export default Search
