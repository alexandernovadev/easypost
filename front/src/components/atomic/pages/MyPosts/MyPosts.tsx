import React, { useContext, useState } from 'react'
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
  const [pagintatorInfo, setPagintatorInfo] = useState({
    total: 0,
    show: 0,
  })
  const { register, watch, reset } = useForm<FormData>()

  const selectedDate = watch('selectedDate')

  const resetDateValue = () => {
    reset({
      selectedDate: DATEDEFAULT.date,
    })
  }

  const setTotalAndPost = (total: number, show: number) => {
    setPagintatorInfo({
      show,
      total,
    })
  }
  return (
    <AppHomeLayout title="My Publications">
      <MyPostStyle>
        <div className="infopagination">
          <span>
            Showing {pagintatorInfo.show}/{pagintatorInfo.total} Post
          </span>
        </div>
        <form>
          <Input
            label={'Date Select'}
            variant="fill"
            type="date"
            actualValue={selectedDate}
            resetDateValue={resetDateValue}
            {...register('selectedDate', {})}
          />
        </form>
        {authState?.user.userId && (
          <CardPostList
            setTotalAndPost={setTotalAndPost}
            user={String(authState?.user.userId)}
            createAt={selectedDate}
          />
        )}
      </MyPostStyle>
    </AppHomeLayout>
  )
}
