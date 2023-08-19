import { Filters, useGetPosts } from '../../../../hooks/useGetPosts'
import { CardPost } from '../cardPost/CardPost'
import Paginator from '../paginator/Paginator'

const CardPostList = ({ page = 1, limit = 3, user }: Filters) => {
  const { posts, currentPage, totalPages, setFilters, loading, error } =
    useGetPosts({ page, limit, user })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className='cardPostList'>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 12,
        }}
      >
        {posts?.map((post) => (
          <CardPost
            key={post._id}
            text={post.title}
            content={post.content}
            date={post.createAt}
            user={post.user}
          />
        ))}
      </section>

      <Paginator
        currentPage={currentPage || 1}
        totalPages={totalPages || 1}
        onPageChange={(page: number) =>
          setFilters((prev) => ({ ...prev, page }))
        }
      />
    </div>
  )
}

export default CardPostList
