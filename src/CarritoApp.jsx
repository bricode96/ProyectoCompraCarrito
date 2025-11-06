import { NavBar } from "./components/NavBar"
import { Navigate, Route, Routes } from "react-router-dom";
import { CompraPage } from "./pages/CompraPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar> </NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<CompraPage />}></Route>
                        <Route path="/carrito" element={<CarritoPage />}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
