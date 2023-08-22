import { useForm, SubmitHandler } from 'react-hook-form'
import { CreatePostStyle } from './CreatePost.style'
import { Input } from '../../atoms/input/Input'
import { TextArea } from '../../atoms/textarea/TextArea'
import { Button } from '../../atoms/button/Button'
import { CardPost } from '../../molecules/cardPost/CardPost'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../contexts/auth/AuthContext'
import { User } from '../../../../interfaces/User'
import { Post } from '../../../../interfaces/Post'
import { usePost } from '../../../../hooks/usePost'
import { ModalPosts } from '../../molecules/modalsPosts/ModalPosts'

export const CreatePost = () => {
  const [modalSucces, setModalSucces] = useState(false)
  const [modalError, setModalError] = useState(false)

  const { authState } = useContext(AuthContext)
  const userSession = authState?.user as User

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: {
      title: '',
      content: '',
      createAt: new Date(),
      user: '',
    },
  })
  const title = watch('title')
  const content = watch('content')
  const createAtW = watch('createAt')

  const { savePost, error } = usePost()

  useEffect(() => {
    if (error) {
      setModalError(true)
    }
  }, [error])

  const onSubmit: SubmitHandler<Post> = async (data) => {
    setModalSucces(false)
    setModalError(false)

    const form = {
      ...data,
      user: userSession.userId,
    } as Post

    console.log(form)
    

    savePost(form)

    if (!error) {
      setModalSucces(true)
    }
  }

  return (
    <>
      <ModalPosts
        modalOpen={modalSucces}
        setmodalOpen={() => setModalSucces(false)}
      />

      <ModalPosts
        modalOpen={modalError}
        setmodalOpen={() => setModalError(false)}
        variant="ERROR"
      />

      <CreatePostStyle>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="Title messages"
            placeholder="Your post title"
            variant="fill"
            error={errors.title?.message}
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 10,
                message: 'Title should be at least 10 characters',
              },
              maxLength: {
                value: 20,
                message: 'Title should not exceed 20 characters',
              },
            })}
          />
          <TextArea
            label="Messages"
            error={errors.content?.message}
            placeholder="Create message for share with your friends."
            variant="fill"
            {...register('content', {
              required: 'Content is required',
              minLength: {
                value: 100,
                message: 'Content should be at least 100 characters',
              },
              maxLength: {
                value: 300,
                message: 'Content should not exceed 300 characters',
              },
            })}
            limitText={300}
            actualLenght={content ? content.length : 0}
          />

          <section className="buttonsection">
            <Button text="SHARE" type="submit" />
          </section>
        </form>
        <CardPost
          content={content}
          text={title}
          date={createAtW}
          user={userSession}
        />
      </CreatePostStyle>
    </>
  )
}
