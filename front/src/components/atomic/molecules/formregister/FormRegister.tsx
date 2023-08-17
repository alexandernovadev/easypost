import { FormRegisterStyle } from './formregister.style'
import { Typography } from '../../atoms/typography/Typography'
import { Anchor } from '../../atoms/anchor/Anchor'
import { Button } from '../../atoms/button/Button'
import { Input } from '../../atoms/input/Input'
import logo from '../../../../assets/imagelogo.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import Axios from '../../../../api/backOne'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type InputsLogin = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsLogin>()
  // console.log(errors)

  const navigate = useNavigate()

  const [errorForm, setErrorForm] = useState('')

  const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
    setErrorForm('')

    const { name, email, password } = data

    try {
      const response = await Axios.post('/auth/register', {
        name,
        email,
        password,
      })
      console.log('Response from server:', response.data)

      const { token } = response.data
      if (token) {
        localStorage.setItem('token', token)
      }
      navigate('/allposthome')

      
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setErrorForm(error.response.data.message || 'Invalid password or email')
    }
  }

  // Watchers
  const passwordW = watch('password')

  return (
    <FormRegisterStyle>
      <section className="imgtiles">
        <img src={logo} alt="logo" />
        <div className="title">
          <Typography variant="title" text="Easy Media" />
        </div>
        <div className="subtitle">
          <Typography variant="subtitle" text="Now, share is easy" />{' '}
        </div>
        <div className="titleForm">
          <Typography variant="titleForm" text="Sign In" />{' '}
        </div>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <section className="inputs">
          <Input
            label="nombre"
            error={errors.name?.message}
            placeholder="Camilo Cifuentes"
            {...register('name', {
              required: {
                message: 'Please provide a name',
                value: true,
              },
              min: {
                message: 'Should be has 10 characters',
                value: 12,
              },
            })}
          />
          <Input
            label="email"
            error={errors.email?.message}
            placeholder="example@email.com"
            {...register('email', {
              required: {
                message: 'Please provide a mail',
                value: true,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          <Input
            error={errors.password?.message}
            label="password"
            {...register('password', {
              required: {
                message: 'Please provide a password',
                value: true,
              },
              minLength: {
                message: 'The field should be min 8 characters',
                value: 8,
              },
            })}
            type="password"
            placeholder="•••••••••"
          />
          <Input
            error={errors.confirmPassword?.message}
            label="Confirm password"
            type="password"
            placeholder="•••••••••"
            {...register('confirmPassword', {
              validate: (value) =>
                value === passwordW || 'The passwords do not match',
              required: {
                message: 'This field is required',
                value: true,
              },
            })}
          />
        </section>

        <section className="buttonpluslin">
          <Button text="SIGN UP" type="submit" />

          {errorForm.length > 0 && (
            <div className="errorFormL">
              <span>Invalid email or password</span>
            </div>
          )}
          <div>
            <Typography variant="capion" text="Already have an account? " />{' '}
            <Anchor
              text="Login"
              href="/login"
              type="BLANCK"
              variant="default"
            />
          </div>
        </section>
      </form>
    </FormRegisterStyle>
  )
}
