import { LoaderStyle } from './Loader.style'

export const Loader = () => {
  return (
    <LoaderStyle>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      <h2>Loading </h2>
    </LoaderStyle>
  )
}
