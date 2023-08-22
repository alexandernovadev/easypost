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
    console.log({total,show});
    // setPagintatorInfo({
    //   show:12,
    //   total
    // })
    // setPagintatorInfo Si colocolo esto aqui me vota un error deepMaximun
    
  }

  return (
    <FiltersCardPostStyle>
      {/* Mover esto a molecules*/}
      <div className="infopagination">
        <span>
          Showing {pagintatorInfo.show}/{pagintatorInfo.total} Post
        </span>
      </div>
      <form action="" noValidate>
        <Input label="Words to Search?" placeholder="post" variant="fill" />
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
        setTotalAndPost={setTotalAndPost}
        createAt={selectedDate}
        />

      </div>
    </FiltersCardPostStyle>
  )
}
