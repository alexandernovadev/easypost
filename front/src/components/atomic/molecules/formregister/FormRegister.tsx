import { FormRegisterStyle } from './formregister.style'
import { Typography } from '../../atoms/typography/Typography'
import { Anchor } from '../../atoms/anchor/Anchor'
import { Button } from '../../atoms/button/Button'
import { Input } from '../../atoms/input/Input'
import logo from '../../../../assets/imagelogo.svg'
import { SubmitHandler, useForm } from 'react-hook-form'

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

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    console.log('ehre', { data })
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
            })}
          />
        </section>

        <section className="buttonpluslin">
          <Button text="SIGN UP" type="submit" />
          <div className="errorFormL">
            <span>Invalid email or password</span>
          </div>
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
