import { useEffect, useState } from 'react'
import Axios from '../api/backOne'

export interface Filters {
  page?: number
  limit?: number
  user?: string
  createAt?: Date
}

interface User {
  _id: string
  name: string
  email: string
  password: string
  __v: number
}

interface Post {
  _id: string
  title: string
  content: string
  createAt: number
  user: User | null  | undefined
  __v: number
}

interface ApiResponse {
  currentPage: number
  totalPages: number
  limit: number
  totalCount: number
  data: Post[]
}

export const useGetPosts = (initialFilters: Filters = {}) => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<Filters>(initialFilters)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await Axios.get('/posts', {
          params: {
            page: filters.page || 1,
            limit: filters.limit || 3,
            user:   filters.user,
            createAt: filters.createAt || '1990-01-01T00:00:00Z'
          },
        })

        setData(response.data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching posts', err)
        setError('Unknown error occurred')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [filters])

  return {
    posts: data?.data,
    currentPage: data?.currentPage,
    totalPages: data?.totalPages,
    loading,
    error,
    setFilters,
  }
}
