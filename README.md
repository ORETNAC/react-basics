## Índice
- [Comandos recurrentes para yarn create vite](#comandos-recurrentes-para-yarn-create-vite)
    - [`yarn create vite`](#yarn-create-vite)
    - [`npm install` || `yarn` (dentro del proyecto)](#npm-install--yarn-dentro-del-proyecto)
- [React-basics](#react-basics)
    - [Cuáles son las características principales de React?](#cuáles-son-las-características-principales-de-react)
    - [Qué es un componente?](#qué-es-un-componente)
    - [JSX](#jsx)
    - [Diferencia entre "componente" y "elemento" en React](#diferencia-entre-componente-y-elemento-en-react)
    - [Crear componentes en React](#crear-componentes-en-react)
    - [Qué son las props en React?](#qué-son-las-props-en-react)
    - [Qué es y para qué sirve la prop `children` en React?](#qué-es-y-para-qué-sirve-la-prop-children-en-react)
    - [ Qué diferencia hay entre props y state?](#qué-diferencia-hay-entre-props-y-state)
    - [Qué significa la expresión "subir el estado"](#qué-significa-la-expresión-subir-el-estado)
# Comandos recurrentes para yarn create vite

### `yarn create vite`
### `npm install` || `yarn` (dentro del proyecto)



# React-basics 

***React*** es una biblioteca de ***JavaScript*** de código abierto para construir interfaces de usuario. Está basada en la componetización de la UI: la interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

Esto hace que React sea una herramienta muy útil para construir interfaces complejas, ya que permite dividir la interfaz en piezas más pequeñas y reutilizables.

### Cuáles son las características principales de React?

Las características principales de React son:

- **Componentes**: React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

    Dichos componente deben ser declarados en PascalCase
    ```javascript
    const CreateButton = ({texto}) => {//React no renderiza componentes que no estén en este formato
        return (
            <button>{texto}</button>
        );
    }

    //Llamada
    <CreateButton texto='Hola Button1' />
    <CreateButton texto={'Hola buton3'}/>
    ```

- **Virtual DOM**: React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.

- **Declarativo**: React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.
    ```javascript
    // Declarativo
    const element = <h1>Hello, world</h1>

    // Imperativo
    const element = document.createElement('h1')
    element.innerHTML = 'Hello, world'
    ```


- **Unidireccional**: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.

- **Universal**: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.

**[⬆ Volver a índice](#índice)**
### Qué es un componente?
Un componente es una pieza de código que renderiza una parte de la interfaz. Los componentes pueden ser parametrizados, reutilizados y pueden contener su propio estado.

En React los componentes se crean usando funciones o clases.

**[⬆ Volver a índice](#índice)**

### JSX 

React usa JSX para declarar qué debe renderizar. JSX es una extensión de JavaScript que permite escribir un código más cercano visualmente a HTML, que mejora la legibilidad del código y hace que sea más fácil de entender.

Sin JSX, deberíamos usar `React.createElement` para crear los elementos de la interfaz manualmente de esta forma:

```js
import { createElement } from 'react'

function Hello () { // un componente es una función! 👀
  return React.createElement(
    'h1', // elemento a renderizar
     null, // atributos del elemento
    'Hola Mundo 👋🌍!' // contenido del elemento
  )
}
```

Esto es muy tedioso y poco legible. Por eso, React usa JSX para declarar qué debe renderizar. Por eso usamos JSX de esta forma:

```jsx
function Hello () {
  return <h1>Hola Mundo 👋🌍!</h1>
}
```

***Ambos códigos son equivalentes.***

**[⬆ Volver a índice](#índice)**

### Diferencia entre "componente" y "elemento" en React

Un componente es una función o clase que recibe props y devuelve un elemento.
Un elemento es un objeto que representa un nodo del DOM o una instancia de un componente de React.

```js
// Elemento que representa un nodo del DOM
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

// Elemento que representa una instancia de un componente
{
  type: Button,
  props: {
    color: 'blue',
    children: 'OK!'
  }
}
```
**[⬆ Volver a índice](#índice)**

### Crear componentes en React

Los componentes en React son funciones o clases que devuelven un elemento de React. Hoy en día lo más recomendado es usar funciones:

```jsx
function HelloWorld() {
  return <h1>Hello World!</h1>
}
```

Pero también puedes usar una clase para crear un componente React:

```jsx
import { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return <h1>Hello World!</h1>
  }
}
```

Lo importante es que el nombre de la función o clase empiece con una letra mayúscula. Esto es necesario para que React pueda distinguir entre componentes y elementos HTML.

**[⬆ Volver a índice](#índice)**

### Qué son las props en React?

Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. Por ejemplo, si tienes un componente `Button` que muestra un botón, puedes pasarle una prop `text` para que el botón muestre ese texto:

```jsx
function Button(props) {
  return <button>{props.text}</button>
}
```

Podríamos entender que el componente `Button` es un botón genérico, y que la prop `text` es el texto que se muestra en el botón. Así estamos creando un componente reutilizable.

Debe considerarse además que al usar cualquier expresión JavaScript dentro de JSX debe envolverlos con `{}`, en este caso el objeto `props`, de otra forma JSX lo considerará como texto plano.

Para usarlo, indicamos el nombre del componente y le pasamos las props que queremos:

```jsx
<Button text="Haz clic aquí" />
<Button text="Seguir a @midudev" />
```

Las props son una forma de parametrizar nuestros componentes igual que hacemos con las funciones. Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.

**[⬆ Volver a índice](#índice)**

### Qué es y para qué sirve la prop `children` en React?

La prop `children` es una prop especial que se pasa a los componentes. Es un objeto que contiene los elementos que envuelve un componente.

Por ejemplo, si tenemos un componente `Card` que muestra una tarjeta con un título y un contenido, podemos usar la prop `children` para mostrar el contenido:

```jsx
function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  )
}
```

Y luego podemos usarlo de la siguiente forma:

```jsx
<Card title="Título de la tarjeta">
  <p>Contenido de la tarjeta</p>
</Card>
```

En este caso, la prop `children` contiene el elemento `<p>Contenido de la tarjeta</p>`.

Conocer y saber usar la prop `children` es muy importante para crear componentes reutilizables en React.

**[⬆ Volver a índice](#índice)**

###  Qué diferencia hay entre props y state?

Las *props* son un objeto que **se pasan como argumentos de un componente padre a un componente hijo**. Son inmutables y no se pueden modificar desde el componente hijo.

El *state* es un valor que **se define dentro de un componente**. Su valor es inmutable (no se puede modificar directamente) pero se puede establecer un valor nuevo del estado para que React vuelva a renderizar el componente.

Así que mientras tanto *props* como *state* afectan al renderizado del componente, su gestión es diferente.

**[⬆ Volver a índice](#índice)**

### Qué significa la expresión "subir el estado"

Cuando varios componentes necesitan compartir los mismos datos de un estado, entonces se recomienda elevar ese estado compartido hasta su ancestro común más cercano.

Dicho de otra forma. Si dos componentes hijos comparten los mismos datos de su padre, entonces mueve el estado al padre en lugar de mantener un estado local en sus hijos.

Para entenderlo, lo mejor es que lo veamos con un ejemplo. Imagina que tenemos una lista de regalos deseados y queremos poder añadir regalos y mostrar el total de regalos que hay en la lista.

```jsx
import { useState } from 'react'

export default function App () {
  return (
    <>
      <h1>Lista de regalos</h1>
      <GiftList />
      <TotalGifts />
    </>
  )
}

function GiftList () {
  const [gifts, setGifts] = useState([])

  const addGift = () => {
    const newGift = prompt('¿Qué regalo quieres añadir?')
    setGifts([...gifts, newGift])
  }

  return (
    <>
      <h2>Regalos</h2>
      <ul>
        {gifts.map(gift => (
          <li key={gift}>{gift}</li>
        ))}
      </ul>
      <button onClick={addGift}>Añadir regalo</button>
    </>
  )
}

function TotalGifts () {
  const [totalGifts, setTotalGifts] = useState(0)

  return (
    <>
      <h2>Total de regalos</h2>
      <p>{totalGifts}</p>
    </>
  )
}
```

¿Qué pasa si queremos que el total de regalos se actualice cada vez que añadimos un regalo? Como podemos ver, no es posible porque el estado de `totalGifts` está en el componente `TotalGifts` y no en el componente `GiftList`. Y como no podemos acceder al estado de `GiftList` desde `TotalGifts`, no podemos actualizar el estado de `totalGifts` cuando añadimos un regalo.

Tenemos que subir el estado de `gifts` al componente padre `App` y le pasaremos el número de regalos como prop al componente `TotalGifts`.

```jsx
import { useState } from 'react'

export default function App () {
  const [gifts, setGifts] = useState([])

  const addGift = () => {
    const newGift = prompt('¿Qué regalo quieres añadir?')
    setGifts([...gifts, newGift])
  }

  return (
    <>
      <h1>Lista de regalos</h1>
      <GiftList gifts={gifts} addGift={addGift} />
      <TotalGifts totalGifts={gifts.length} />
    </>
  )
}

function GiftList ({ gifts, addGift }) {
  return (
    <>
      <h2>Regalos</h2>
      <ul>
        {gifts.map(gift => (
          <li key={gift}>{gift}</li>
        ))}
      </ul>
      <button onClick={addGift}>Añadir regalo</button>
    </>
  )
}

function TotalGifts ({ totalGifts }) {
  return (
    <>
      <h2>Total de regalos</h2>
      <p>{totalGifts}</p>
    </>
  )
}
```

Con esto, lo que hemos hecho es *elevar el estado*. Lo hemos movido desde el componente `GiftList` al componente `App`. Ahora pasamos como prop los regalos al componente `GiftList` y una forma de actualizar el estado, y también hemos pasado como prop al componente `TotalGifts` el número de regalos.

**[⬆ Volver a índice](#índice)**