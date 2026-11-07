
import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

function TiendaApp() {
  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {
    setCarrito((actual) => [...actual, producto]);
  }

  function quitarProducto(id) {
    setCarrito((actual) =>
      actual.filter((producto) => producto.id !== id)
    );
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  return (
    <main className="tienda">
      <h1>🛍️ Mini Tienda</h1>

      <CarritoPanel
        carrito={carrito}
        onQuitar={quitarProducto}
        onVaciar={vaciarCarrito}
      />

      {cargando && <p>Cargando...</p>}

      {error && <p className="error">Error: {error}</p>}

      {!cargando && !error && (
        <ProductoList
          productos={productos}
          carrito={carrito}
          onAgregar={agregarProducto}
        />
      )}
    </main>
  );
}

export default TiendaApp;
