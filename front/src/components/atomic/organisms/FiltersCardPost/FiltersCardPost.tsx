import { Input } from '../../atoms/input/Input'
import { FiltersCardPostStyle } from './FiltersCardPost.style'
import CardPostList from '../../molecules/cardPostList/CardPostList'

export const FiltersCardPost = () => {
  return (
    <FiltersCardPostStyle>
      {/* Mover esto a molecules*/}
      <form action="" noValidate>
        <Input label="Words to Search?" placeholder="post" variant="fill" />
        <Input
          label="Date Select"
          placeholder="Select a date"
          variant="fill"
          type="date"
        />
      </form>

      <div>
        <CardPostList />
      </div>
    </FiltersCardPostStyle>
  )
}
