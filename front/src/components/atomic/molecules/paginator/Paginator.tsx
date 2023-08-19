import React from 'react'

interface PaginatorProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page)
    }
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {[...Array(totalPages).keys()].map((i) => (
        <button
          key={i}
          style={{
            margin: '0 5px',
            background: currentPage === i + 1 ? 'grey' : 'white',
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
        Siguiente
      </button>
    </div>
  )
}

export default Paginator
