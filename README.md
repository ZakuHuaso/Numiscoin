![Logo](src/assets/Logo-beige.png)

![Last Release](https://img.shields.io/github/v/release/usuario/repositorio?label=release&style=flat-square)
![Issues](https://img.shields.io/github/issues/usuario/repositorio?style=flat-square)
![Forks](https://img.shields.io/github/forks/usuario/repositorio?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/usuario/repositorio?style=flat-square)
![License](https://img.shields.io/github/license/usuario/repositorio?style=flat-square)


# Numiscoin

Una aplicación móvil multiplataforma diseñada para coleccionistas numismáticos, que permite gestionar, organizar y clasificar monedas de forma eficiente. La app incorpora funciones avanzadas como un sistema de compraventa entre usuarios, una calculadora de divisas integrada y actualización automática de valores de referencia como el dólar y el oro.

## ✨ Características principales 
 
### 👤 Gestión de usuarios
- Registro e inicio de sesión con correo electrónico
- Recuperación de contraseña
- Mantener sesión activa entre paginas o al reiniciar la aplicación

### 💵​ Colección numismática
- Crear, editar y eliminar colecciones de articulos numismáticos
- Añadir, editar y eliminar articulo dentro de una colección
- Clasificación según filtro (país, época, rareza y material)
- Subida de imágenes del articulo, minimo dos por articulo (frontal y trasera)

### 📈 Seguimiento de valores
- Actualización en tiempo real del valor de dolar y oro mediante API externa

### Calculadora
- Calculadora integrada para realizar calculos de manera rapida dentro de la aplicación.

### 🌙 Extras
- Notificaciones push (nuevas ofertas, mensajes, alertas de valor)
- Interfaz moderna y adaptable a móviles 

## 🛣️ Roadmap

### Autenticacion

- [ ] Registro con correo y contraseña
- [ ] Inicio de sesión con correo
- [ ] Iniciar sesion con Google
- [ ] Iniciar sesion con Apple
- [ ] Iniciar sesion con Facebook
- [ ] Recuperar contraseña
- [ ] Mantener activa la sesión entre paginas

### Colecciones
- [ ] Crear, editar y eliminar colecciones de articulos
- [ ] Crear, editar y eliminar articulos dentro de coleccion
- [ ] Filtrar colecciones por region y pais

### Calculadora
- [ ] Calculadora funcional para sumar, restar, dividir y multiplicar. 

### Divisas
- [ ] Integración para visualizar dolar y euro en tiempo real en la divisa local
- [ ] Conversor de divisa local a USD o EURO
- [ ] Integración para visualizar Oro G y Oro Oz en USD y EURO en tiempo real

### Perfil
- [ ] Visualizar perfil del usuario, con nombre, ubicación, foto de perfil y descripción.
- [ ] Visualizar el total de colecciones y articulos del usuario.
- [ ] Visualizar los proximos eventos en los que el usuario va a participar.

### UI/UX
- [ ] Configuración base del proyecto con Ionic y Angular Standalone
- [ ] Menú de navegación por pestañas (tabs)
- [ ] Skeleton loaders o feedback de carga
- [ ] Componentes visuales consistentes (botones, tarjetas)
- [ ] Validaciones visuales de formularios
- [ ] Notificaciones Push

## 🧱 Tech Stack


| Herramientas        | Descripción                                      |
|--------------------|--------------------------------------------------|
| **TypeScript**     | Lenguaje principal para desarrollo               |
| **Angular**     | Framework frontend con arquitectura standalone   |
| **Ionic**       | Componentes UI y herramientas móviles            |
| **Capacitor**     | API nativa para ejecutar en Android/iOS         |
| **Node.js**     | Entorno de ejecución para herramientas y scripts |
| **npm**            | Gestor de dependencias                          |


## 🚀 Pre-requisitos


### NodeJS
En Windows (con Chocolatey)
```shell
# Descargar e instalar Chocolatey:
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"

# Descargar e instalar Node.js:
choco install nodejs --version="22.17.1"

# Verificar version de Node.js:
node -v # Debería ser "v22.17.1".

# Verificar version de npm :
npm -v # Debería ser "10.9.2".

```

En Mac
```shell
# Descargar e instalar nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Luego
\. "$HOME/.nvm/nvm.sh"

# Descargar e instalar Node.js:
nvm install 22

# Verificar la version de Node.js:
node -v # Debería ser "v22.17.1".
nvm current # Debería ser "v22.17.1".

# Verificar la version de npm:
npm -v # Debería ser "10.9.2".
```

### Ionic v7.2.0
```bash
npm install -g @ionic/cli@7.2.0
```

### Swiper
```bash
npm install swiper@latest
```

## Ejecutar

Siga las siguientes instrucciones:

```shell
# Verifica si Git está instalado
git --version

# Clonar el repositorio
git clone 

# Navegar al directorio del proyecto
cd numiscoin/

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
ionic serve

```