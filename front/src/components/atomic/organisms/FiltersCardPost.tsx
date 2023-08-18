import React from 'react'
import { Typography } from '../atoms/typography/Typography'
import { Input } from '../atoms/input/Input'
import { CardPost } from '../molecules/cardPost/CardPost'
import { FiltersCardPostStyle } from './FiltersCardPost.style'

export const FiltersCardPost = () => {
  return (
    <FiltersCardPostStyle>
      <span className='titlecard'>
        <Typography variant="title" text="All Publications" />
      </span>
      <form action="" noValidate>
        <Input label="Words to Search?" placeholder="post" variant="fill" />
        <Input
          label="Date Select"
          placeholder="Select a date"
          variant="fill"
          type="date"
        />
      </form>


      <CardPost text="Mi texto " />
    </FiltersCardPostStyle>
  )
}
