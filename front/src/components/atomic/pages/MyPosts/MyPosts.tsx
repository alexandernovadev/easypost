import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/auth/AuthContext'
import { AppHomeLayout } from '../../layouts/AppHomeLayout'
import CardPostList from '../../molecules/cardPostList/CardPostList'
import { Input } from '../../atoms/input/Input'
import { MyPostStyle } from './MyPost.style'

export const MyPosts = () => {
  const { authState } = useContext(AuthContext)
  return (
    <AppHomeLayout title="My Publications">
      <MyPostStyle>
        <div className='infopagination'>
          <span>Showing 2/15 Post</span>
        </div>
        <Input label={'Date Select'} variant="fill" type="date" />
        <CardPostList user={String(authState?.user.userId)} />
      </MyPostStyle>
    </AppHomeLayout>
  )
}
