import React from 'react'
import { Routes,Route } from 'react-router'
import YouTubeSearchPage from '../pages/YoutubeDisplayPage'
import UserForm from '../components/UserForm'
import Home from '../pages/Home'
import { HomeLayout } from '../layout/HomeLayout'
import LandingPage from '../components/LandingPage'
export const MainRoutes = () => {
  return (
    <Routes>
  <Route index element={<LandingPage />} />
  {/* <Route path="about" element={<About />} /> */}

  {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

  <Route path="user">
    <Route index element={<HomeLayout />} />
    <Route path="requirements" element={<UserForm />} />
    <Route path="search/:diet/:timing/:language*" element={<YouTubeSearchPage />} />
  </Route>
</Routes>

  )
}
