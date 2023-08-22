import { LeftDoubleArrow } from '../../../../assets/Components/LeftDoubleArrow'
import { LeftSingleArrow } from '../../../../assets/Components/LeftSingleArrow'
import { RightDoubleArrow } from '../../../../assets/Components/RightDoubleArrow'
import { RightSingleArrow } from '../../../../assets/Components/RightSingleArrow'
import { PaginatorStyle } from './Paginator.style'

interface PaginatorProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Paginator = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorProps) => {
  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page)
    }
  }

  return (
    <PaginatorStyle>
      <button
        onClick={() => changePage(1)}
        disabled={currentPage === 1}
        style={{ position: 'relative', right: 7 }}
      >
        <LeftDoubleArrow />
      </button>

      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <LeftSingleArrow />
      </button>

      {[...Array(totalPages).keys()].map((i) => (
        <button
          className="btnNumber"
          key={i}
          style={{
            margin: '0 5px',
            fontWeight: currentPage === i + 1 ? '700' : '300',
          }}
          onClick={() => changePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <RightSingleArrow />
      </button>

      <button
        onClick={() => changePage(totalPages)}
        disabled={currentPage === 1}
        style={{ position: 'relative', left: 7 }}
      >
        <RightDoubleArrow />
      </button>
    </PaginatorStyle>
  )
}

export default Paginator
