
function CarritoPanel({ carrito, onQuitar, onVaciar }) {
  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.price,
    0
  );

  return (
    <aside className="carrito">
      <h2>🛒 Mi carrito ({carrito.length})</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div className="carrito-item" key={producto.id}>
              <span>{producto.title}</span>

              <span>$ {producto.price.toFixed(2)}</span>

              <button onClick={() => onQuitar(producto.id)}>
                Quitar
              </button>
            </div>
          ))}

          <h3>Total: $ {total.toFixed(2)}</h3>

          <button onClick={onVaciar}>
            Vaciar carrito
          </button>
        </>
      )}
    </aside>
  );
}

export default CarritoPanel;
