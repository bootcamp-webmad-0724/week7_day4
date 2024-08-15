import { Routes, Route } from 'react-router-dom'
import CoastersGalleryPage from '../pages/CoastersGalleryPage/CoastersGalleryPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path={'/'} element={<h1>INICIO</h1>} />
                <Route path={'/galeria'} element={<CoastersGalleryPage />} />
                <Route path={'/detalles/:id'} element={<CoasterDetailsPage />} />
                <Route path={'/registro'} element={<h1>SIGNUP</h1>} />
                <Route path={'/iniciar-sesion'} element={<h1>LOGIN</h1>} />
                <Route path={'/perfil'} element={<h1>PERFIL</h1>} />
            </Routes>
        </div>
    )
}

export default AppRoutes