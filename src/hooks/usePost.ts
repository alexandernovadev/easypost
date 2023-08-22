import { useState } from 'react'
import { Post } from '../interfaces/Post'
import Axios from '../api/backOne'

export const usePost = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | unknown>(null)
  const [postSaved, setPostSaved] = useState(false)

  const savePost = async (data: Post) => {
    setLoading(true)
    setError(null)
    try {
     await Axios.post('/posts', data)
      setPostSaved(true)
    } catch (error) {
      console.log('err', error)
      setError(true)
      setPostSaved(false)
    } finally {
      setLoading(false)
    }
  }

  const editPost = () => {}
  const deletePost = () => {}

  return {
    savePost,
    editPost,
    deletePost,
    loading,
    error,
    postSaved,
  }
}
