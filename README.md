# Amigo Secreto

Una aplicación web sencilla para sortear un "amigo secreto" de forma aleatoria.

## Descripción

Esta aplicación permite a los usuarios ingresar nombres de amigos, visualizarlos en una lista, eliminar alguno si es necesario y, finalmente, realizar un sorteo para asignar a cada participante un amigo secreto, asegurando que nadie se asigne a sí mismo.

## Características

- **Agregar Amigos:**  
  Permite agregar nombres a la lista, validando que el campo no esté vacío y evitando nombres duplicados.

- **Eliminar Amigos:**  
  Cada nombre en la lista cuenta con un botón que permite eliminarlo.

- **Sortear Amigo Secreto:**  
  Asigna aleatoriamente un amigo secreto a cada participante, siempre y cuando haya al menos 2 amigos en la lista.

## Tecnologías Utilizadas

- **HTML5** para la estructura de la aplicación.
- **CSS3** para los estilos visuales.
- **JavaScript** para la lógica de interacción (agregar, eliminar y sortear amigos).

## Estructura del Proyecto

- `index.html`  
  Contiene la estructura principal de la aplicación.

- `style.css`  
  Contiene los estilos que dan diseño y estructura visual a la aplicación.

- `app.js`  
  Contiene la lógica en JavaScript para agregar amigos, actualizar la lista, eliminar elementos y realizar el sorteo del amigo secreto.

## Cómo Utilizar

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa el nombre de un amigo en el campo de texto y haz clic en el botón **Añadir** para agregarlo a la lista.
3. Visualiza la lista actualizada en la sección de amigos. Si deseas eliminar un nombre, haz clic en el botón de eliminación (X) junto al nombre.
4. Una vez que tengas al menos dos amigos en la lista, haz clic en el botón **Sortear amigo** para asignar de forma aleatoria un amigo secreto a cada participante.
5. El resultado del sorteo se mostrará en la sección de resultados.

## Notas

- Se valida que el campo de entrada no esté vacío y que no se ingresen nombres duplicados.
- Es necesario contar con al menos dos amigos para poder realizar el sorteo.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la aplicación o agregar nuevas funcionalidades, siéntete libre de enviar un pull request o sugerir mejoras.

## Licencia

Este proyecto es de código abierto y se puede modificar libremente.
