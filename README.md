# react-basics

***React*** es una biblioteca de ***JavaScript*** de código abierto para construir interfaces de usuario. Está basada en la componetización de la UI: la interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

Esto hace que React sea una herramienta muy útil para construir interfaces complejas, ya que permite dividir la interfaz en piezas más pequeñas y reutilizables.

### ¿Cuáles son las características principales de React?

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

- **Unidireccional**: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.

- **Universal**: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.


# Comandos recurrentes

### `yarn create vite`
### `npm install`
dentro del proyecto
