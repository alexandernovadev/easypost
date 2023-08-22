import { useEffect } from 'react'
import { Filters, useGetPosts } from '../../../../hooks/useGetPosts'
import { CardPost } from '../cardPost/CardPost'
import Paginator from '../paginator/Paginator'

interface setDataPagination {
  setTotalAndPost?: (total: number, postActual: number) => void
}

const CardPostList = ({
  page = 1,
  limit = 3,
  user,
  createAt,
  title,
  setTotalAndPost,
}: Filters & setDataPagination) => {
  const {
    posts,
    currentPage,
    totalPages,
    setFilters,
    totalCount,
    loading,
    error,
  } = useGetPosts({ page, limit, user, createAt })

  useEffect(() => {
    setFilters({ page, limit, user, createAt, title })
  }, [page, limit, user, createAt, setFilters, title])

  useEffect(() => {
    if (setTotalAndPost) {
      setTotalAndPost(totalCount || 0, posts?.length || 0)
    }
  }, [posts, setTotalAndPost, totalCount])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      {posts?.length === 0 ? (
        <>No hay posdt</>
      ) : (
        <div className="cardPostList">
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
                date={new Date(post.createAt)}
                user={post.user}
                highlightTitle={title}
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
      )}
    </>
  )
}

export default CardPostList
