import React, { useContext } from 'react'
import { AuthContext } from '../../../../contexts/auth/AuthContext'
import { useForm } from 'react-hook-form'
import { AppHomeLayout } from '../../layouts/AppHomeLayout'
import CardPostList from '../../molecules/cardPostList/CardPostList'
import { Input } from '../../atoms/input/Input'
import { MyPostStyle } from './MyPost.style'
import { DATEDEFAULT } from '../../../../utils/dateDefault'

interface FormData {
  selectedDate: Date   
}

export const MyPosts: React.FC = () => {
  const { authState } = useContext(AuthContext)
  const { register, watch, reset } = useForm<FormData>()

  const selectedDate = watch('selectedDate')

  const resetDateValue = () => {
    reset({
      selectedDate: DATEDEFAULT.date,
    })
  }

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
            actualValue={selectedDate}
            resetDateValue={resetDateValue}
            {...register('selectedDate', {
            })}
          />
        </form>
        {authState?.user.userId && (
          <CardPostList
            user={String(authState?.user.userId)}
            createAt={selectedDate}
          />
        )}
      </MyPostStyle>
    </AppHomeLayout>
  )
}
