export const ComprasConstant = {
  table: {
    headers: [
      {field: 'codigoBarras', header: 'Código barras.', widthForCell: '150px'},
      {field: 'descripcion', header: 'Dscripción', widthForCell: '230px'},
      {field: 'precio', header: 'Precio', widthForCell: '150px'},
      {field: 'existencia', header: 'Existencia', widthForCell: 'auto'}
    ],
    headersCompra: [
      {field: 'codigoBarras', header: 'Código barras.', widthForCell: '150px'},
      {field: 'descripcion', header: 'Dscripción', widthForCell: '230px'},
      {field: 'precio', header: 'Precio', widthForCell: '150px'},
      {field: 'cantidad', header: 'Cantidad', widthForCell: 'auto'}
    ]
  },
  titles: {
    articulos: 'Lista de articulos disponibles',
    articulosCompra: 'Artículos seleccionados',
    compraLabel: 'Comprar',
    registro: 'Compra realizada exitosamente.',
    sinExistencia: 'Este artículo no posee la cantidad que desea comprar.',
    sinArticulos: 'Debe seleccionar un artículo.',
    sinCantidad: 'Debe ingresar cantidades mayores a cero para realizar la compra.',
  }
};
