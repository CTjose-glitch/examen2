
import ProductoCard from "./ProductoCard";

function ProductoList({ productos, carrito, onAgregar }) {
  return (
    <section className="productos-grid">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          agregado={carrito.some(
            (item) => item.id === producto.id
          )}
          onAgregar={onAgregar}
        />
      ))}
    </section>
  );
}

export default ProductoList;
