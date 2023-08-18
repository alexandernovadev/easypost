interface props {
  fillColor?: string
  className?: string
}
export const ArrowDown = (props: props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={8}
    fill="none"
    className={props.className}
    {...props}
  >
    <path
      fill={props.fillColor || '#5F5E5E'}
      d="M7.87 7.79a2.47 2.47 0 0 1-1.75-.725L.214 1.157a.684.684 0 0 1 0-.96.684.684 0 0 1 .96 0l5.908 5.908a1.116 1.116 0 0 0 1.577 0L14.565.197a.684.684 0 0 1 .96 0 .684.684 0 0 1 0 .96L9.619 7.066a2.47 2.47 0 0 1-1.748.725Z"
    />
  </svg>
)

