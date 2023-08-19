import React, { useEffect, useState } from 'react'
import { CardPost } from '../cardPost/CardPost'
import Paginator from '../paginator/Paginator'
import Axios from '../../../../api/backOne'
import { IUser } from '../../../../../../back/src/domain/entities/user.entity'

interface Post {
  _id: string
  title: string
  content: string
  createAt: number
  user: IUser
  __v: number
}

interface ApiResponse {
  currentPage: number
  totalPages: number
  limit: number
  totalCount: number
  data: Post[]
}

const CardPostList: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await Axios.get(
          `/posts?page=${data?.currentPage || 1}&limit=3`
        )
        setData(response.data)
      } catch (error) {
        console.error('Error fetching posts', error)
      }
    }

    fetchPosts()
  }, [data?.currentPage])

  return (
    <div>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 12,
        }}
      >
        {data?.data.map((post) => (
          <CardPost key={post._id} text={post.title} content={post.content}
          date={post.createAt} user={post.user} />
        ))}
      </section>

      <Paginator
        currentPage={data?.currentPage || 1}
        totalPages={data?.totalPages || 1}
        onPageChange={(page: number) =>
          setData((prev) => ({ ...prev!, currentPage: page }))
        }
      />
    </div>
  )
}

export default CardPostList
