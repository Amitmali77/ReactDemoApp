import Header from './Header'

const PublicLayout = ({children}) => {
  return (
    <>
       <Header/>
       {children}
    </>
  )
}

export default PublicLayout
