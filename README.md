# Winning Team's software requirements specification (SRS)

## Descripción de la página
Esta página tiene como propósito general describir los requerimientos de software para el proyecto de la empresa Winning Team. La empresa se dedica a la venta de productos y servicios relacionados al vape, a su carwash y refrigerios para consumo en el local. La página debe ser capaz de llevar un inventario de los productos y servicios que se venden, facturar y llevar un historial de las facturas.

## Requirements
- Hacer un inventariado de las cosas que se venden, los precios de esas cosas y la cantidad que hay.
- Facturar, ya sea facturar alguno de los productos del inventario, facturar un servicio como algún tipo de lavado de auto o algún servicio relacionado al vape.

## Home

- Ventana principal de la aplicacion: La ventana principal de la aplicación básicamente será el historial de facturas y arriba se verán las opciones, facturar, ver resumen, una opción llamada imprimir copia que estará desactivada a menos que se clickee una factura, a la derecha estarán las demás funciones de la aplicación, aquí estará el botón de gestión de inventario, Resumen financiero de la empresa y por ultimo el boton de cambiar usuario.

## Definición de el boton facturar
menu que sirve para facturar cualquiera de los 3 servicios, es un formulario con varios inputs, obviamente uno de ellos es un **select** con 3 opciones:
- Refrigerio.
- Vape.
- Carwash.

Al seleccionar una de estas opciones algunos de los inputs del formulario cambiará para adaptarse a lo que se facturará.

### Refrigerio seleccionado

- **Cantidad:** no necesita explicación.

- **Total:** se muestra el total automáticamente haciendo el cálculo de cantidad y producto.

- **Nombre:** se mostrará por defecto el nombre de quien inicio sesión y no es modificable.

- **Descuento:** se podrá escribir en DOP no en % algún descuento que se le hizo, en caso de colocar algun valor en esta opcion aparecera un input de texto para explicar este descuento.

- **razon del Descuento:** input para escribir un texto explicando la razon del descuento

- **Tipo de pago:** un input type option para el método de pago, por defecto será efectivo y tendrá 2 opciones mas: *transferencia* y *tarjeta*.

- **Input de facturar:** este creará la factura y mostrará un preview de impresión de como saldrá la factura, al facturar lo que sucederá sera reducir el producto del inventario aumentar el dinero ingresado y todas las gestiones correspondientes.

**El preview:** el preview que se mostrará al darle click al input de facturar será en formato pdf listo para imprimir. A pesar de no imprimirlo ya el producto estará facturado y se agregará a la lista de facturas.


## Ventana de inventario
Será parecida a la ventana principal de la aplicación aquí se verán todos los productos o servicios inventariados en la ventana de inventario estarán las opciones de ver servicios de **carwash**, ver servicios de vape y ver refrigerios o consumibles  al clickear alguna de estas opciones la lista de productos o servicios cambiará, por defecto estará clickeada o seleccionada refrigerios también estarán las opciónes **agregar**, **eliminar** y **editar precio**.

### Opción agregar
Se abrirá un fomulario parecido a la de facturación, este formulario tendrá un **select** donde seleccionarás el tipo de producto que inventariaras, ya sea **refrigerio**, **carwash** o **vape** y sucederá lo mismo que en el formulario de facturas al seleccionar alguna de estas opciones cambiarán algunos de los inputs.

Inputs en caso de inventarear un refrigerio:
- Producto: aquí se selecciona un producto de la lista de producto y cuenta con la opción de agregar un producto nuevo.
- Id: no es editable y se quedará en blanco hasta que se seleccione un producto si se selecciona uno nuevo osea uno que no tenga id se le asignara uno nuevo automáticamente    
- Cantidad: cantidad que se agregara.
- Coste total: precio al que se compró toda la cantidad si es producto viejo estara por defecto el precio anterior.
- Precio de venta: precio al que se venderá el producto al público si es producto viejo estara por defecto el precio anterior.

- Opcion editar precio
Estará desactivada a menos de que haya un producto o servicio del inventario seleccionado, un formulario que diga el precio anterior de venta y el precio nuevo de venta.

- Opcion eliminar
borrar <3



La aplicación debe tener 2 puntos de vista el dueño y el empleado


# Winning Team's database requirements specification (SRS)

### 1. **Usuarios**  
   - **Descripción**: Almacena los datos de los empleados y del dueño.
   - **Campos**:
     - `id_usuario` (PK): Identificador único del usuario.
     - `nombre`: Nombre completo del usuario.
     - `rol`: Rol del usuario (`dueño` o `empleado`).

### 2. **Productos**  
   - **Descripción**: Detalles de cada producto en inventario, incluyendo refrigerios, productos de vape y servicios de carwash.
   - **Campos**:
     - `id_producto` (PK): Identificador único del producto.
     - `tipo`: Tipo de producto (`refrigerio`, `vape`, `carwash`).
     - `nombre`: Nombre del producto.
     - `precio_venta`: Precio de venta al público.
     - `costo_compra`: Precio de compra del producto.
     - `stock_actual`: Cantidad actual en inventario.
     - `ganancia_por_venta`: resultado de restar el precio de venta por el coste de compra
### 3. **Facturas**  
   - **Descripción**: Guarda la información de cada venta, incluyendo los productos y servicios vendidos.
   - **Campos**:
     - `id_factura` (PK): Identificador único de la factura.
     - `id_usuario` (FK de `Usuarios`): Usuario que creó la factura.
     - `fecha_factura`: Fecha de la factura.
     - `total`: Total de la factura.
     - `tipo_pago`: Tipo de pago (efectivo, tarjeta, transferencia).
     - `descuento`: Descuento aplicado.
     - `razon_descuento`: Razón del descuento.

### 4. **Detalle_Factura**  
   - **Descripción**: Detalle de cada producto o servicio en una factura específica.
   - **Campos**:
     - `id_detalle` (PK): Identificador único del detalle.
     - `id_factura` (FK de `Facturas`): Factura a la que pertenece el detalle.
     - `id_producto` (FK de `Productos`): Producto o servicio facturado.
     - `cantidad`: Cantidad vendida.
     - `subtotal`: Subtotal del detalle (cantidad * precio de venta).

### 5. **Roles y Permisos**  
   - **Descripción**: Define roles de usuario (dueño, empleado) y sus permisos de acceso.
   - **Campos**:
     - `id_rol` (PK): Identificador único del rol.
     - `nombre_rol`: Nombre del rol.
     - `descripcion`: Descripción de los permisos del rol.

### Relación entre Tablas

1. **Usuarios** a **Facturas**: Relación 1:N, un usuario puede tener varias facturas.
2. **Facturas** a **Detalle_Factura**: Relación 1:N, una factura puede tener varios productos/servicios.
3. **Productos** a **Detalle_Factura**: Relación 1:N, un producto/servicio puede aparecer en varios detalles de facturas.

Este esquema permite mantener un historial detallado de ventas, inventario y roles de usuario. ¿Quieres agregar algo más, como reportes específicos o algún flujo adicional para descuentos y promociones?


# Winning Team's financial tables requirements specification (SRS)

Para obtener una visión financiera completa del negocio de Winning Team, te recomiendo agregar tablas para el seguimiento detallado de ingresos, egresos, beneficios, y reportes específicos como balances diarios y resúmenes mensuales. A continuación te muestro un esquema con tablas adicionales:

### 1. **Ingresos_Diarios**
   - **Descripción**: Registra los ingresos generados diariamente por ventas, categorizados por tipo de producto/servicio.
   - **Campos**:
     - `id_ingreso` (PK): Identificador único del ingreso.
     - `fecha`: Fecha del ingreso.
     - `tipo`: Categoría de ingreso (`refrigerio`, `vape`, `carwash`).
     - `monto`: Monto total de ingresos para esa fecha y categoría.

### 2. **Egresos**
   - **Descripción**: Registra todos los gastos o egresos, como compras de inventario, mantenimiento de equipo, y otros gastos operativos.
   - **Campos**:
     - `id_egreso` (PK): Identificador único del egreso.
     - `fecha_egreso`: Fecha del egreso.
     - `descripcion`: Descripción del gasto (e.g., compra de inventario, reparación de equipo).
     - `tipo_egreso`: Tipo de gasto (`compra_inventario`, `mantenimiento`, `servicios`, `otros`).
     - `monto`: Monto del egreso.
     - `id_producto` (FK de `Productos`, opcional): Producto asociado al gasto, si aplica.

### 3. **Balance_Diario**
   - **Descripción**: Calcula el balance diario entre ingresos y egresos, útil para análisis rápido de flujo de caja diario.
   - **Campos**:
     - `id_balance` (PK): Identificador único del balance.
     - `fecha_balance`: Fecha del balance.
     - `ingresos_totales`: Suma de ingresos del día.
     - `egresos_totales`: Suma de egresos del día.
     - `balance`: Resultado de `ingresos_totales - egresos_totales`.

### 4. **Resumen_Mensual**
   - **Descripción**: Proporciona una visión mensual de ingresos, egresos, y balance total.
   - **Campos**:
     - `id_resumen` (PK): Identificador único del resumen.
     - `mes`: Mes del resumen.
     - `ano`: Año del resumen.
     - `ingresos_mensuales`: Suma de ingresos del mes.
     - `egresos_mensuales`: Suma de egresos del mes.
     - `balance_mensual`: Ingresos menos egresos del mes.

### 5. **Reporte_Productos_Vendidos**
   - **Descripción**: Detalle mensual de ventas de cada producto/servicio.
   - **Campos**:
     - `id_reporte` (PK): Identificador único del reporte.
     - `id_producto` (FK de `Productos`): Producto/servicio vendido.
     - `mes`: Mes del reporte.
     - `ano`: Año del reporte.
     - `cantidad_vendida`: Total de unidades vendidas en el mes.
     - `ingreso_generado`: Ingresos generados por la venta del producto/servicio.

### 6. **Reporte_Descuentos**
   - **Descripción**: Registro de todos los descuentos aplicados y su impacto financiero, con razones de descuentos.
   - **Campos**:
     - `id_descuento` (PK): Identificador único del descuento.
     - `id_factura` (FK de `Facturas`): Factura a la que se aplicó el descuento.
     - `fecha`: Fecha del descuento.
     - `monto_descuento`: Monto descontado.
     - `razon`: Razón o explicación del descuento.

### 7. **Reporte_Flujo_Caja**
   - **Descripción**: Proporciona un desglose de ingresos y egresos por método de pago y por categoría para ver el flujo de efectivo.
   - **Campos**:
     - `id_flujo` (PK): Identificador único del flujo.
     - `fecha`: Fecha de registro.
     - `tipo`: Tipo de flujo (`ingreso` o `egreso`).
     - `categoria`: Categoría del flujo (`refrigerio`, `vape`, `carwash`, `mantenimiento`, etc.).
     - `metodo_pago`: Método de pago (efectivo, tarjeta, transferencia).
     - `monto`: Monto del flujo de caja.

### Relaciones y Reportes

1. **Balance_Diario** puede generarse automáticamente sumando los registros de **Ingresos_Diarios** y **Egresos** por día.
2. **Resumen_Mensual** puede consolidarse con los datos de **Balance_Diario** para obtener un balance de cada mes.
3. **Reporte_Productos_Vendidos** proporciona una visión mensual de cada producto, útil para identificar los productos con mejor y peor desempeño.
4. **Reporte_Descuentos** ayuda a analizar el impacto de descuentos en las ventas.
5. **Reporte_Flujo_Caja** permite analizar las entradas y salidas de dinero, categorizadas por tipo de servicio o producto y por método de pago.

Este modelo permite generar los siguientes reportes financieros:
   - **Reporte diario** de ingresos, egresos y balance.
   - **Reporte mensual** con el balance general.
   - **Análisis de ventas por producto** y su contribución a los ingresos.
   - **Resumen de flujo de caja** según el método de pago.
   - **Evaluación del impacto de descuentos** en las finanzas. 

¿Te gustaría ver detalles adicionales en alguno de estos reportes o necesitas un esquema para consultas SQL específicas?