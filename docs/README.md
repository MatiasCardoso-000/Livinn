# Livinn - Sistema de Reservas de Restaurantes

## 📖 Descripción General

Livinn es una aplicación web moderna desarrollada con React, TypeScript y Tailwind CSS que permite a los usuarios buscar, explorar y reservar mesas en restaurantes. La aplicación ofrece una interfaz intuitiva y responsive con funcionalidades completas de gestión de reservas.

## 🚀 Características Principales

### 1. Exploración de Restaurantes
- **Listado de Restaurantes**: Vista en grid con tarjetas informativas
- **Filtrado por Búsqueda**: Búsqueda en tiempo real por nombre de restaurante
- **Información Detallada**: 
  - Nombre y categoría
  - Ubicación
  - Calificación
  - Precio promedio
  - Estado de disponibilidad
  - Descripción
  - Imágenes

### 2. Sistema de Reservas
- **Proceso de Reserva en 3 Pasos**:
  1. Selección de restaurante
  2. Formulario de reserva detallado
  3. Confirmación y resumen
- **Validación de Formularios**:
  - Campos requeridos
  - Validación de email
  - Límites de personas (1-20)
  - Fechas válidas
- **Confirmación de Reserva**:
  - Código único de reserva
  - Resumen detallado
  - Opción de descarga

### 3. Sistema de Autenticación
- **Gestión de Usuarios**:
  - Registro de nuevos usuarios
  - Inicio de sesión
  - Cierre de sesión
- **Menú de Usuario**:
  - Acceso rápido a funciones
  - Indicador de sesión activa

## 🛠️ Estructura Técnica

### Componentes Principales

#### 1. Header (`Header.tsx`)
```typescript
// Componente de navegación principal
- Menú de usuario con estado de autenticación
- Barra de búsqueda
- Enlaces de navegación
```

#### 2. RestaurantCard (`RestaurantCard.tsx`)
```typescript
// Tarjeta individual de restaurante
- Muestra información básica
- Botón de reserva condicional
- Enlace a detalles
```

#### 3. RestaurantReservation (`RestaurantReservation.tsx`)
```typescript
// Formulario de reserva
- Validación con Formik y Yup
- Selección de fecha y hora
- Datos de contacto
- Solicitudes especiales
```

#### 4. ReservationConfirmation (`ReservationConfirmation.tsx`)
```typescript
// Confirmación de reserva
- Muestra resumen de la reserva
- Código único
- Opciones post-reserva
```

### Gestión de Estado

#### 1. Contexto de Autenticación
```typescript
// AuthContext y AuthProvider
- Manejo de estado de autenticación
- Persistencia de sesión
- Funciones de login/logout
```

#### 2. Contexto de Restaurantes
```typescript
// RestaurantsContext y RestaurantsProvider
- Lista de restaurantes
- Estado global de restaurantes
- Filtrado y búsqueda
```

#### 3. Contexto de Búsqueda
```typescript
// SearchContext y SearchProvider
- Estado de búsqueda
- Filtrado en tiempo real
```

## 🔄 Flujos de Usuario

### 1. Flujo de Reserva
1. Usuario busca restaurante
2. Selecciona restaurante de interés
3. Hace clic en "Reservar"
4. Completa formulario de reserva
5. Recibe confirmación con código

### 2. Flujo de Autenticación
1. Usuario accede al menú de usuario
2. Selecciona iniciar sesión/registrarse
3. Completa credenciales
4. Accede a funcionalidades protegidas

## 🎨 Diseño y UI

### Estilos
- **Tailwind CSS**: Framework principal de estilos
- **Diseño Responsive**: Adaptable a todas las pantallas
- **Tema de Colores**:
  - Principal: Naranja (`orange-500`)
  - Secundario: Gris (`gray-600`)
  - Acentos: Verde para éxito, Rojo para errores

### Componentes UI
- **Botones**: Estados hover y focus definidos
- **Formularios**: Validación visual clara
- **Tarjetas**: Sombras y bordes suaves
- **Iconos**: SVG integrados para mejor rendimiento

## 🔒 Seguridad

### Validaciones
- Validación de formularios con Yup
- Protección de rutas autenticadas
- Sanitización de datos de entrada
- Manejo seguro de estado de autenticación

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Adaptaciones
- Menús colapsables en mobile
- Grid adaptativo de restaurantes
- Formularios responsivos
- Imágenes optimizadas

## 🔧 Mejores Prácticas

### Código
- TypeScript para tipo seguro
- Componentes funcionales y hooks
- Contextos para estado global
- Validación de formularios robusta

### Rendimiento
- Lazy loading de imágenes
- Componentes optimizados
- Estado eficiente con Context
- Rutas protegidas

## 📦 Gestión de Estado

### Local Storage
- Datos de sesión de usuario
- Preferencias de usuario
- Tokens de autenticación

### Context API
- Estado global de la aplicación
- Datos de restaurantes
- Estado de autenticación
- Estado de búsqueda

## 🚦 Control de Acceso

### Rutas Protegidas
- Reservas requieren autenticación
- Perfil de usuario protegido
- Gestión de permisos por rol

### Estados de Usuario
- No autenticado
- Autenticado
- Administrador (futuro)