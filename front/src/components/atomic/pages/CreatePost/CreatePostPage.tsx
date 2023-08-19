import { AppHomeLayout } from '../../layouts/AppHomeLayout'
import { CreatePost } from '../../organisms/CreatePost/CreatePost'

export const CreatePostPage = () => (
  <AppHomeLayout title='Create message'>
    <CreatePost />
  </AppHomeLayout>
)
