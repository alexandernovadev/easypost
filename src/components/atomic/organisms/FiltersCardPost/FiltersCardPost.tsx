import { Input } from '../../atoms/input/Input'
import { FiltersCardPostStyle } from './FiltersCardPost.style'
import CardPostList from '../../molecules/cardPostList/CardPostList'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DATEDEFAULT } from '../../../../utils/dateDefault'

interface FormData {
  selectedDate: Date
  title: string
}

export const FiltersCardPost = () => {
  const { register, watch, reset } = useForm<FormData>()

  const [show, setShow] = useState(0)
  const [total, setTotal] = useState(0)
  const selectedDate = watch('selectedDate')
  const title = watch('title')

  const resetDateValue = () => {
    reset({
      selectedDate: DATEDEFAULT.date,
    })
  }

  const setTotalAndPost = (total: number, show: number) => {
    setTotal(total)
    setShow(show)
  }

  return (
    <FiltersCardPostStyle>
      <div className="infopagination">
        <span>
          Showing {show}/{total} Post
        </span>
      </div>
      <form action="" noValidate>
        <Input
          label="Words to Search?"
          placeholder="post"
          variant="fill"
          {...register('title')}
        />
        <Input
          label="Date Select"
          placeholder="Select a date"
          variant="fill"
          type="date"
          actualValue={selectedDate}
          resetDateValue={resetDateValue}
          {...register('selectedDate', {})}
        />
      </form>

      <div>
        <CardPostList
          title={title}
          setTotalAndPost={setTotalAndPost}
          createAt={selectedDate}
        />
      </div>
    </FiltersCardPostStyle>
  )
}
