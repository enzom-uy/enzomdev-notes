export interface Props {
  title: string
  date: string
  description: string
  href: string
}
const PostCard: React.FC<Props> = ({ title, date, description, href }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <a className="card-title" href={href}>
          {title}
        </a>
        <span className="date">{date}</span>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default PostCard
