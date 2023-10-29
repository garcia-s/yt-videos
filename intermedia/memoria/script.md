#EL CONCEPTO MAS OLVIDADO EN LA PROGRAMACION MODERNA: MEMORIA - PROGRAMACION INTERMEDIA PT 1

Uno mas comun que cometen los programadores es no preocuparse por la memoria. Dejenme explicar.

En lenguajes de alto nivel, como Javascript o Dart, asumimos que no es necesario preocuparse por la memoria, en parte porque estos lenguajes dicen manejarla por nosotros, lo cual es cierto en la mayoria de los casos. Una memoria administrada significa que no necesito preocuparme. Cierto? Lamentablemente esto es solo parcialmente cierto.


Lo primero es como funciona la memoria en un nivel mas bajo.

En lenguajes como C y C++ la memoria es administrada de forma manual, los programadores de C tiene que asignar memoria y luego liberarla cuando decidan que esto ya no es necesario. Gracias a esto hay ciertos errores que pueden ocurrir. 


1. Fugas de memoria: (Memory Leak) Puedes olvidar liberar la memoria en sectores imporantes de la aplicacion lo que haria la memoria crecer fuera de control, dañando por completo el rendimiento de tu aplicacion. *ver ejemplo memleak.c*

2. Error de doble libre o de corrupcion: (Double free or corruption) No, no se refiere al gobierno. Se refiera intentar liberar un espacio en memoria que ya habia sido liberado. *ver ejemplo en corruption.c*

Para simplificar las cosas y evitar esta clase de situaciones se inventaron algunos algoritmos para el manejo automatico de la memoria, pero como todo en la programacion, estos tienen un costo.


En general podemos reducir estos algoritmos en 2 grupos principales:

1. Conteo de referencias (Reference Counting).
2. Marcar y limpiar, tambien conocido como recoleccion de basur. (Mark and Sweep).

El conteo de referencias es en esencia bastante simple, mantiene un contador de las referencias que existen de alguna variable u objeto, y si el contador es 0, lo borra de memoria. (*ver ejemplo referencecount.py*). Esta es la forma mas simple de administracion de memoria pero como todo en la programacion viene acompañada de ciertos problemas.

A veces existen algunos "objetos" que se referencian a si mismos, tambien pueden existir 2 "objetos" que se referencian entre si, esto causaria que el conteo de referencia para esos "objetos" nunca sea cero. esto es un error conocido como *Ciclo de referencias* (Reference Cycle). (vea el ejemplo refcycle.py).

La necesidad de un sistema mas sofisticado que evite los ciclos de referencia nos lleva al segundo tipo de manejo de memoria; Marcar y limpiar.

Marcar y limpiar rastrea que objetos ya no son accesibles, estos objetos podemos divirlos en 2 tipos: Objetos "root" que incluyen variables globales, la funcion en ejecucion sus parametros y variables internas. Y los objetos que se estan en cadena de referencia de esos objetos "root".(vea el ejemplo en reach.js).

Entonces el algoritmo de Mark and sweep, marca estos objetos "root" como accesibles, recorre de forma recursiva el objeto y marca los objetos referenciados en el objeto "root" como accesibles y borra los objetos que no son accesibles.

Entonces es asi de simple? No.

Existen algunas mejoras y tecnicas que hacen el algoritmo mark and sweep un poco mas eficiente, en concreto voy explicar 3, pero ten en cuenta que puede que existan mas. Las 3 optimizaciones que vamos a revisar son: GC (Garbage Collection) generacional, GC incremental y Idle-time GC
