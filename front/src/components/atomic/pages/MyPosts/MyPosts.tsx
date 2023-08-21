import React, { useContext } from 'react'
import { AuthContext } from '../../../../contexts/auth/AuthContext'
import { useForm } from 'react-hook-form'
import { AppHomeLayout } from '../../layouts/AppHomeLayout'
import CardPostList from '../../molecules/cardPostList/CardPostList'
import { Input } from '../../atoms/input/Input'
import { MyPostStyle } from './MyPost.style'

interface FormData {
  selectedDate: string
}

export const MyPosts: React.FC = () => {
  const { authState } = useContext(AuthContext)
  const { register, watch } = useForm<FormData>()

  const convertToUnix = (date: string): number => {
    return Math.floor(new Date(date).getTime() / 1000)
  }

  const selectedDate = watch('selectedDate') 

  return (
    <AppHomeLayout title="My Publications">
      <MyPostStyle>
        <div className="infopagination">
          <span>Showing 2/15 Post</span>
        </div>
        <form>
          <Input
            label={'Date Select'}
            variant="fill"
            type="date"
            {...register('selectedDate')}
          />
        </form>
        {authState?.user.userId && (
          <CardPostList
            user={String(authState?.user.userId)}
            createAt={convertToUnix(selectedDate)}
          />
        )}
      </MyPostStyle>
    </AppHomeLayout>
  )
}
