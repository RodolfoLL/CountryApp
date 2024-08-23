# CountryApp
CountryApp es una SPA realizada con el framework Angular en su version 16.0.0 con ngmodules.

CountryApp usa la api [RestCountries](https://restcountries.com/)
el cual nos brinda informacion de diferentes paises, tambien podemos obtener paises por region,capital o por su alphaCode un ejemplo para Bolivia seria BL.

Para hacer la busqueda de los paises por su capital,region o su alphacode se utiliza diferentes endpoits que nos provee la api en su pagina oficial.
## Estructura del proyecto
La estructura del proyecto es compuesta con dos modulos estos son el modulo countires y el modulo shared.
El modulo countries contiene las siguientes carpetas que son propias del modulo:

- components : contiene todos los componentes propios del modulo.
- interfaces : son los contratos que se tienen que cumplir cuando nos llega informacion de un pais o cuando tenemos un tipo de region.
- pages : contiene todas las paginas para mostrar las paginas.
- services : contiene toda la logica para hacer la busqueda de los paises y tambien para hacer la persistencia de datos al cambiar entre pantallas o al recargar la pagina.

En este proyecto ya utilizamos rutas, configurando el RouterModule para poder tener tambien rutas hijas y lazyLoad.

El modulo shared contiene todos componentes que pueden ser reutilizables en distintos modulos, para eso tenemos que importar el modulo shared en el modulo destino.

## Componentes y paginas
Para la descripcion de las diferentes paginas y componetes lo revisaremos desde los modulos.
### Modulo Countries
El modulo contiene las tres paginas que son by-capital,by-country,by-region y country-page este ultimo es el que muestra la informacion de un pais en particular al mandar al endpoint su alphaCode.

#### By-capital-page
![by-capital-page](/src/assets/inico.png)

La paginas solo contiene un searchBox para hacer la busqueda de un pais por su capital.

#### By-country-page
![by-country-page](/src/assets/pais.png)

Al igual que la pagina by-capital-page solo tiene un searchBox.

#### By-region-page
![by-region-page](/src/assets/region.png)

Esta pagina tiene botones que al pasar por uno de ellos se activa un hover y luego al dar click muestran los paises de esa region.

#### Country-page-alphaCode
![country-alphacode](/src/assets/alphacode.png)

Esta pagina solo muestra la informacion de un pais, esta informacion se muestra cuando se da click al enlace ver mas que aparece en los paises encontrados.
### Componentes del modulo countries
El modulo contries solo contiene un componente que es el country-table el cual muestra en una tabla los paises encontrados en las distintas paginas, cada pagina utiliza este mismo modulo para mostrar sus paises, tambien mencionar que el componente searchBox es un componente universal que esta en el modulo shared.
![country-table](/src/assets/table.png)

## Modulo Shared
El modulo shared solo tiene componentes que pueden ser utilizados por otros componentes, estos modulos son el searchBox, lazySearch que es un componente para mostrar un loader y el side bar.
![shared-module](/src/assets/shared.png)



