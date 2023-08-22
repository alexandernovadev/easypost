export const generateSubstrWithUnderline = (
  text: string,
  searchTerm: string
) => {
  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'))
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span style={{background:'#C646AA'}} key={index}>{part}</span>
    ) : (
      part
    )
  )
}
