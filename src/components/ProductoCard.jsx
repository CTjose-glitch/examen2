
function ProductoCard({ producto, agregado, onAgregar }) {
  return (
    <article className={`producto-card ${agregado ? "agregado" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />

      <h3>{producto.title}</h3>

      <p className="precio">
        $ {producto.price.toFixed(2)}
      </p>

      <button
        onClick={() => onAgregar(producto)}
        disabled={agregado}
      >
        {agregado ? "Agregado" : "Agregar al carrito"}
      </button>
    </article>
  );
}

export default ProductoCard;
