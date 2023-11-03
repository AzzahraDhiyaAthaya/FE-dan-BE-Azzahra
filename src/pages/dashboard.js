import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProtectedInfo, onLogout } from '../api/auth'
// import Layout from '../components/layout'
import { ReactDOM } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './notes/Home'
import Layout from './notes/Layout'
import Addnote from './notes/Addnote'
import EditNote from './notes/EditNote'
import NoPage from './notes/NoPage'
import { unauthenticateUser } from '../redux/slices/authSlice'

const Notes = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)

  const logout = async () => {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo()

      setProtectedData(data.info)

      setLoading(false)
    } catch (error) {
      logout()
    }
  }

  useEffect(() => {
    protectedInfo()
  }, )

  // return loading ? (
  //   <Layout>
  //     <h1>Loading...</h1>
  //   </Layout>
  // ) : (
  //   <div>
  //     <Notes />
  //   </div>
  // )

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Addnote" element={<Addnote />} />
            <Route path="Editnote/:id" element={<EditNote />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Notes
