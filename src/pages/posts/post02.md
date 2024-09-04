# Ejercicios

### 1. 
Dado el siguiente código:

```sh
const sistemaOperativo = 'Linux';
const cantidad : 4;
const ropa : 'botas';
const estudiar : false;
```

Indica/Escribe lo que sacaria el navegador en la web según las siguientes expresiones :
**1.** <p>{sistemaOperativo}</p>
**2.**  {estudiar &&<p> sigo estudiando</p>}
**3.** <p> tengo {cantidad - 2} pares de {ropa}</p>
**4.** {sistemaOperativo == "macOs" ? <p>Uso el ordenador de la manzanita</p> : <p> no se como manejar mi Os }</p>

**1.** <p>Linux</p>
**2.** "" (no se muestra nada por estudiar es false)
**3.** <p> tengo 2 pares de botas</p>
**4.** <p> no se como manejar mi Os </p>