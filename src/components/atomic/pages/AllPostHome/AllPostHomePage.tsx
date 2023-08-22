import { AppHomeLayout } from '../../layouts/AppHomeLayout'
import { FiltersCardPost } from '../../organisms/FiltersCardPost/FiltersCardPost'

export const AllPostHomePage = () => (
  <AppHomeLayout title='All Publications'>
    <FiltersCardPost />
  </AppHomeLayout>
)
