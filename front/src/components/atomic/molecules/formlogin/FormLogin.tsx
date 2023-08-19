import { useForm } from 'react-hook-form'
import logo from '../../../../assets/imagelogo.svg'
import { Anchor } from '../../atoms/anchor/Anchor'
import { Button } from '../../atoms/button/Button'
import { Input } from '../../atoms/input/Input'
import { Typography } from '../../atoms/typography/Typography'
import { FormLoginStyle } from './formlogin.style'
import { useAuth } from '../../../../contexts/auth/AuthContext'
import { useNavigate } from 'react-router-dom'

type Inputs = {
  email: string
  password: string
}

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const { signin, error: authErrors } = useAuth()

  const navigate = useNavigate()

  const onSubmit = (data: Inputs) => {
    signin(data)
    navigate('/allposthome')
  }

  return (
    <FormLoginStyle>
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="inputs">
          <Input
            label="email"
            placeholder="example@email.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            error={errors.email?.message}
          />
          <Input
            label="password"
            type="password"
            placeholder="•••••••••"
            {...register('password', {
              required: 'Password is required',
            })}
            error={errors.password?.message}
          />
        </section>

        <section className="buttonpluslin">
          <Button text="SIGN IN" type="submit" />

          {authErrors && (
            <div className="errorFormL">
              <span>{authErrors}</span>
            </div>
          )}

          <div>
            <Typography variant="capion" text="Don’t have an account?" />{' '}
            <Anchor
              text="Sing up Here"
              href="/register"
              type="BLANCK"
              variant="default"
            />
            <br />
            <Anchor
              text="Sisadasdasdasd"
              href="/allposthome"
              type="BLANCK"
              variant="default"
            />
          </div>
        </section>
      </form>
    </FormLoginStyle>
  )
}
