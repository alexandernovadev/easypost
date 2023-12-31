interface props {
  fillColor?: string
}
export const CloseCircle = (props: props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill={props.fillColor || '#5F5E5E'}
      d="M8.431 0C3.786 0 0 3.786 0 8.431c0 4.646 3.786 8.431 8.431 8.431 4.646 0 8.431-3.785 8.431-8.43C16.862 3.785 13.077 0 8.432 0Zm2.833 10.37a.636.636 0 0 1 0 .894.626.626 0 0 1-.447.186c-.16 0-.32-.06-.447-.186l-1.939-1.94-1.939 1.94a.626.626 0 0 1-.447.186c-.16 0-.32-.06-.447-.186a.636.636 0 0 1 0-.894l1.94-1.939-1.94-1.939a.636.636 0 0 1 0-.894.636.636 0 0 1 .894 0l1.94 1.94 1.938-1.94a.636.636 0 0 1 .894 0 .636.636 0 0 1 0 .894l-1.94 1.94 1.94 1.938Z"
    />
  </svg>
)
