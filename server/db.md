
⌨️Coding like I know what I'm doing.
⌨️me too

```prisma
// schema.prisma

datasource db {
  provider = "postgresql" // Cambia a tu base de datos si usas otro motor
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Usuario {
  id_usuario  Int       @id @default(autoincrement())
  nombre      String
  rol         Rol       @default(EMPLEADO)
  facturas    Factura[] // Relación 1:N con facturas
}

model Producto {
  id_producto      Int       @id @default(autoincrement())
  tipo             TipoProducto
  nombre           String
  precio_venta     Float
  costo_compra     Float
  stock_actual     Int
  ganancia_por_venta Float @default(0)

  detalles_factura Detalle_Factura[] // Relación 1:N con Detalle_Factura
}

model Factura {
  id_factura      Int       @id @default(autoincrement())
  usuario         Usuario   @relation(fields: [id_usuario], references: [id_usuario])
  id_usuario      Int       // FK a la tabla Usuario
  fecha_factura   DateTime  @default(now())
  total           Float
  tipo_pago       TipoPago  @default(EFECTIVO)
  descuento       Float     @default(0)
  razon_descuento String?
  
  detalles        Detalle_Factura[] // Relación 1:N con Detalle_Factura
}

model Detalle_Factura {
  id_detalle    Int       @id @default(autoincrement())
  factura       Factura   @relation(fields: [id_factura], references: [id_factura])
  id_factura    Int       // FK a la tabla Factura
  producto      Producto  @relation(fields: [id_producto], references: [id_producto])
  id_producto   Int       // FK a la tabla Producto
  cantidad      Int
  subtotal      Float
}

model Rol {
  id_rol        Int      @id @default(autoincrement())
  nombre_rol    String   @unique
  descripcion   String?
}

enum Rol {
  DUENO
  EMPLEADO
}

enum TipoProducto {
  REFRIGERIO
  VAPE
  CARWASH
}

enum TipoPago {
  EFECTIVO
  TARJETA
  TRANSFERENCIA
}
```

### Explicación de cada modelo:

- **Usuario**: Representa los usuarios del sistema (dueño y empleados).
  - Relación 1:N con **Factura**: Un usuario puede tener varias facturas asociadas.

- **Producto**: Incluye todos los productos y servicios. Los tipos se definen en un `enum` llamado `TipoProducto`.
  - Relación 1:N con **Detalle_Factura**: Un producto puede aparecer en varias facturas.

- **Factura**: Representa cada venta realizada, incluyendo detalles como descuento y tipo de pago.
  - Relación 1:N con **Detalle_Factura**: Una factura puede tener varios detalles de productos.

- **Detalle_Factura**: Cada detalle de una factura, asociando productos con facturas y manteniendo el subtotal de cada línea.

- **Rol**: Define los roles (`dueño` y `empleado`) y sus permisos.

- **Enums**:
  - **Rol**: Enum que categoriza los roles de usuario.
  - **TipoProducto**: Enum que define los tipos de productos (refrigerio, vape, carwash).
  - **TipoPago**: Enum para los métodos de pago aceptados.

... (1 línea restante)
Contraer
Aquí está el modelo Prisma que pued.txt
4 KB
BarkoRD — 15/11/2024 21:08
https://parsec.gg/g/2ouV6u01DuHJig1XFIZCgh6AsNr/a5698b63/
﻿
Aquí está el modelo Prisma que puedes usar en tu proyecto de Node.js para implementar la base de datos especificada en el servidor. Este modelo incorpora las relaciones y campos que mencionaste:

```prisma
// schema.prisma

datasource db {
  provider = "postgresql" // Cambia a tu base de datos si usas otro motor
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Usuario {
  id_usuario  Int       @id @default(autoincrement())
  nombre      String
  rol         Rol       @default(EMPLEADO)
  facturas    Factura[] // Relación 1:N con facturas
}

model Producto {
  id_producto      Int       @id @default(autoincrement())
  tipo             TipoProducto
  nombre           String
  precio_venta     Float
  costo_compra     Float
  stock_actual     Int
  ganancia_por_venta Float @default(0)

  detalles_factura Detalle_Factura[] // Relación 1:N con Detalle_Factura
}

model Factura {
  id_factura      Int       @id @default(autoincrement())
  usuario         Usuario   @relation(fields: [id_usuario], references: [id_usuario])
  id_usuario      Int       // FK a la tabla Usuario
  fecha_factura   DateTime  @default(now())
  total           Float
  tipo_pago       TipoPago  @default(EFECTIVO)
  descuento       Float     @default(0)
  razon_descuento String?
  
  detalles        Detalle_Factura[] // Relación 1:N con Detalle_Factura
}

model Detalle_Factura {
  id_detalle    Int       @id @default(autoincrement())
  factura       Factura   @relation(fields: [id_factura], references: [id_factura])
  id_factura    Int       // FK a la tabla Factura
  producto      Producto  @relation(fields: [id_producto], references: [id_producto])
  id_producto   Int       // FK a la tabla Producto
  cantidad      Int
  subtotal      Float
}

model Rol {
  id_rol        Int      @id @default(autoincrement())
  nombre_rol    String   @unique
  descripcion   String?
}

enum Rol {
  DUENO
  EMPLEADO
}

enum TipoProducto {
  REFRIGERIO
  VAPE
  CARWASH
}

enum TipoPago {
  EFECTIVO
  TARJETA
  TRANSFERENCIA
}
```

### Explicación de cada modelo:

- **Usuario**: Representa los usuarios del sistema (dueño y empleados).
  - Relación 1:N con **Factura**: Un usuario puede tener varias facturas asociadas.

- **Producto**: Incluye todos los productos y servicios. Los tipos se definen en un `enum` llamado `TipoProducto`.
  - Relación 1:N con **Detalle_Factura**: Un producto puede aparecer en varias facturas.

- **Factura**: Representa cada venta realizada, incluyendo detalles como descuento y tipo de pago.
  - Relación 1:N con **Detalle_Factura**: Una factura puede tener varios detalles de productos.

- **Detalle_Factura**: Cada detalle de una factura, asociando productos con facturas y manteniendo el subtotal de cada línea.

- **Rol**: Define los roles (`dueño` y `empleado`) y sus permisos.

- **Enums**:
  - **Rol**: Enum que categoriza los roles de usuario.
  - **TipoProducto**: Enum que define los tipos de productos (refrigerio, vape, carwash).
  - **TipoPago**: Enum para los métodos de pago aceptados.

Esto debería cubrir todos los requisitos básicos para gestionar productos, usuarios, roles y facturas en tu sistema Prisma. Si necesitas funcionalidades adicionales, como auditorías o un historial de inventario, podrías añadir tablas y relaciones similares.
Aquí está el modelo Prisma que pued.txt
4 KB