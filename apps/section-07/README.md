# Temas puntuales de la sección

En esta sección aprenderemos a darle el control a nuestro usuario o compañero de trabajo sobre las propiedades y estado
de nuestro componente, usualmente este patrón es el que se utiliza de manera tradicional en formularios, es decir:

```
<input
    value={  algún valor de solo lectura }
    onChange={ alguna función que cambia el valor }
/>
```

Este patrón es el que implementaremos a continuación