---
title: Arquitectura de Internet - Apuntes de los videos.
description: Apuntes sobre los videos vistos acerca de la arquitectura del internet para resolver el cuestionario 1.
date: 2023-01-27 10:23
layout: ../../../layouts/PostLayout.astro
---

# Arquitectura de Internet

<!--toc:start-->
- [Arquitectura de Internet](#arquitectura-de-internet)
  - [Cómo funciona el internet](#cómo-funciona-el-internet)
  - [Dirección IP](#dirección-ip)
- [The hidden network that makes the internet possible](#the-hidden-network-that-makes-the-internet-possible)
  - [Cómo hace la luz para vijaar dentro del vidrio y no a través de él](#cómo-hace-la-luz-para-vijaar-dentro-del-vidrio-y-no-a-través-de-él)
- [Cómo funcionan los cables de fibra óptica](#cómo-funcionan-los-cables-de-fibra-óptica)
<!--toc:end-->

## Cómo funciona el internet

Los videos que vemos en Youtube viajan miles de kilómetros desde un centro de datos de google
hasta llegar a la computadora.

Un centro de datos tiene el vídeo almacenado, cómo llegan estos datos a nuestros dispositivos?
Una manera fácil de lograr el objetivo sería con el uso de satelites, enviando una señal a través de una antena,
y luego desde el satélite enviar otra señal a una antena cercana a nuestro dispositivo.

Sin embargo, este proceso no es una buena idea. El satélite está estacionado a casi 22k millas
sobre el ecuador de la tierra, así que para que la transmisión de datos tenga éxito, los datos tendrían
que recorrer una distancia total de 44k millas. Una distancia tan larga causa un retraso significativo en
la recepción de la señal: una latencia enorme inaceptable para la mayoría de las aplicaciones de internet.

En realidad, este proceso se hace principalmente gracias a una compleja red de cables de fibra óptica que se concentran
desde la red de datos hasta los dispositivos. Aunque un teléfono o notebook esté conectado mediante datos o wifi, en última instancia
en algún momento estará conectado a esta red de cables de fibra óptica.

Los datos de los videos se almacenan dentro de un dispositivo de estado sólido dentro del centro de datos.
Este SSD actúa como la memoria interna de un servidor.
El servidor es un ordenador potente que su trabajo es proporcionar el video o los datos.

El reto es como transferir los datos requeridos a tu dispositivo a través de la red de cables.

## Dirección IP

Cada dispositivo conectado a internet se identifica de manera única con la dirección IP.
El servidor del centro de datos tiene una dirección IP. De hecho, todas las páginas en realidad
son direcciones IP, pero al ser complicado acordarse de tantas direcciones IP como páginas por las que navegamos,
se utilizan los dominios como referencia a su dirección.

Un servidor tiene la capacidad de almacenar varios sitios web.
No se puede acceder a los sitios web que almacene sólamente desde la IP del servidor,
en ese caso se usa la cabecera `Header` para saber a qué página se refiere.

Los sitios web gigantes dedican toda la infraestructura del centro de datos a almacenar su información.

Para acceder a internet siempre usamos los dominios en vez de la IP.
De donde obtiene Internet las direcciones IP a las que queremos acceder mediante estos dominios?

- Internet usa una "agenda" llamada `DNS`.
- Los proveedores de internet pueden administrar el servidor de `DNS`.

**Resúmen de la operación:**

- Se introduce el dominio al que queremos acceder.
- El navegador envía una solicitud al servidor DNS para obtener la IP.
- Cuando se obtiene, el navegador reenvía la solicitud al centro de datos, al servidor correspondiente.
- Cuando esto se recibe, se inicia el flujo de datos.
- Los datos se transmiten en formato digital a través de cables de fibra óptica en forma de impulsos de luz.
  - Estos pulsos de luz a veces tienen que viajar miles de km a través del cable para llegar a su destino.
  - Durante este viaje puede ser que tengan que atravesar sitios mas complejos, como bosques, otros terrenos o el mismo mar.
    Para esto, hay compañías que se encargan de mantener este sistema tan complejo: AT&T, orange, Verizon y Google, por ejemplo.
  - Para colocar los cables por el mar se ayudan de barcos, arrojando desde uno un harado que crea una zanja en el lecho marino,
    donde se coloca el cable de fibra óptica.
- La información que viaja a través de los cables de fibra óptica termina llegando a nuestro Router, convirtiendose
  de señal de luz a señales eléctricas.
- Estas señales eléctricas se transmiten a nuestra computadora por un cable Ethernet, o en el caso de los datos móviles,
  la señal debe ser enviada a una torre celular y desde la torre a nuestro dispositivo, en formas de ondas electromagnéticas.

---
Dada la complejidad del funcionamiento del internet, es requerido tener alguna forma de regular y gestionar
cosas como la asignación de IP y los registros de dominio.
Todo esto se administra por una institución llamada **ICANN** (Internet Corporation for Assigned Names and Numbers), ubicada en Estados Unidos.

El video que nos llega a nuestro dispositivo llega en formato de ceros y uno, y lo que optimiza tan bien esta transferencia de datos
en comparación a otros sistemas, es cómo estos ceros y uno se dividen en lo que se llaman `paquetes`.

Supongamos que estos flujos de binarios están divididos en paquetes por el servidor donde cada paquete consiste en 6 bits.
Junto con los bits del video, cada paquete también consiste en el número de secuencia y las direcciones IP del servidor
y del dispositivo.

Con esta información, los paquetes viajan hasta el dispositivo. No es necesario que estos viajen a través de la misma ruta,
y cada paquete toma independientemente la mejor ruta disponible en ese momento.

Al llegar a nuestro dispositivo, los paquetes son reensamblados de acuerdo a su número de secuencia.
Si es el caso de que algún paquete no llega, se envía una una señal desde nuestro dispositivo para reenviar los paquetes pedidos.

---

En internet también usamos unas cosas llamadas Protocolos para gestionar el complejo flujo de paquetes de datos.
Los protocolos establecen las reglas para la conversión de paquetes de datos,la conexión de las direcciones de origen y destino a cada paquete,
y las reglas para los enrutadores.

Para las diferentes aplicaciones, los protocolos utilizados son diferentes.

# The hidden network that makes the internet possible

En 2012 un equipo de japoneses y daneses estableció un nuevo récord mundial: transmitir un petabit de datos.
Esto equivale a 10k horas de video en alta definición, mediante un cable de 50km en un segundo.

Este cable era de fibra óptica con alimentación, la red oculta que conecta todo el planeta y posibilita el internet.

Durante décadas la comunicación a larga distancia se realizaba por medio de señales eléctricas a través de cables de cobre.
Esto era lento e ineficiente ya que los cbales metálicos limitaban la velocidad y se desperdiciaba energía.

A finales del siglo 20 los ingenieros idearon un método mejor.
En vez de metal, el vidrio se puede derretir meticulosamente y fundirse en flexibles hebras de fibra
de cientos de km y tan finas como hebras de cabello. En vez de electricidad, estas hebras transportan pulsos de luz
que representan información digital.

## Cómo hace la luz para vijaar dentro del vidrio y no a través de él

El truco consiste en un fenómeno conocido como **reflexión interna total**.

Desde la época de Newton los fabricantes de lentes y científicos saben que la luz dobla al pasar del aire a materiales como el agua o el vidrio.
Cuando un rayo de luz dentro del vidrio golpea su superficie en un ángulo pronunciado se refracta o dobla al salir al aire.
Pero si el rayo produce un ángulo menos pronunciado, se doblará tan rápido que permanecerá atrapado rebotando dentro del vidrio.

Bajo las condiciones adecuadas, lo normalmente transparente a la luz puede permanecer invisible a la vista.

En comparación con la electricidad o la radio, las señales de fibra óptica apenas se degradan en largas distancias, aunque sí se pierde un poquito de poder,
y las fibras no deben doblarse demasiado para que la luz no se escape.

Hoy en día, una única fibra óptica transporta muchas longitudes de onda de luz, cada una es un canal diferente de información.
Y un cable de fibra óptica contiene cientos de estas hebras de fibra.

Más de 1 millón de km d ecable atraviesan el fondo de los océanos y enlazan a los continentes.
Esto equivale a rodear la Tierra casi 30 veces.

Con la fibra óptica la distancia casi no limita la información. Esto permitió que internet evolucionara a una computadora planetaria.
Cada vez más, nuestro trabajo móvil y pasatiempos dependen de legiones de servidores sobrecargados, lamacenados en enormes centros de
procesamiento de datos por todo el mundo. Esto se denomina `cloud computing` y conlleva dos grandes problemas:

- Calor residual
  - La mayor parte del tráfico de internet viaja dentro de centros de procesamiento de datos donde hay miles de servidores conectados por cables eléctircos traidicionales.
    La mitad de la energía que consumen se desperdicia como calor.
- Demanda de ancho de banda.
  - La demanda de ancho de banda es cada vez mayor y los gigahercios que emplean nuestros dispositivos alcanzan su límite de envío de datos.

Parece que la fibra óptica puede ser mejor hasta cierto punto, pero una tecnología similar, la **fotónica integrada** apareció.
La luz puede desplazarse no únicamente a travs de la fibra óptica, sino también por medio de cables de silicona ultradelgados.

- Estos cables no transportan la luz tan bien como la fibra, pero sí permiten que los ingenieros reduzcan todos los dispositivos en una red de fibra óptica
  de cientos de km a diminutos chips fotónicos que se conectan a los servidores y convierten las señales eléctricas en señales ópticas y viceversa.
  - Estos chips que convierten la electricidad en luz permiten cambiar los cables eléctricos en los centros de datos por fibras de menor consumo.
  - Los chips fotónicos pueden también contribuir a resolver limitaciones de banda ancha.
  - Los investigadores intentan reemplazar los gigahercios móviles por frecuencias de terahercios para transportar datos miles de veces más rápido, pero se trata de
    señales de corto alcance que son absorbidas por la humedad del aire o bloqueadas por edificios altos.
    Contando con diinutos chips fotónicos distribuidos por varias ciudades, las señales de terahercios pueden transmitirse a larga distancia
    gracias a un intermediario, la fibra óptica, y hacer de esta forma la conectividad inalámbrica hiperrápida una realidad.

# Cómo funcionan los cables de fibra óptica

IR  = índice de refracción.
RIL = reflexión interna total.

- Está compuesto de miles de filamentos de fibra. Un solo filamento de fibra es tan delgado como un cabello humano.
- Las fibras ópticas transforman información en forma de luz.
  - La velocidad de la luz cambia cuando pasa a través de un médium. Este cambio en la velocidad se expresa por el `índice de refracción` (velocidad en el vacío / velocidad en el médium).
  - Cuando la luz pasa a través de un prisma, la luz se dobla en vez de ir derecha. Esto es `refracción`.
    - Ocurre cuando la luz pasa por un médium con un índice de refracción a uno con otro índice de `refracción`.
    - Es la razón por la que un lápiz se ve doblado en un vaso de agua.
  - Usando algunos dopantes podemos aumentar el IR del vidrio en tiempo real. Mientras más IR, más inclinación tiene la luz hacia la superficie.
    Después de un tiempo vemos que la luz pasa a través de la superficie del vidrio. Aumentando aún más el IR, la luz va a regresar
    al médium como un reflejo puro. Esto se llama `reflexión interna total`.
    - La RIL es posible si aumentamos el ángulo de incidencia en vez del IR. En este caso a un cierto ángulo (llamado ángulo crítico), la luz volverá al primer médium.
- Si el láser golpea la interfaz en un ángulo mayor que el ángulo crítico se producirá una RIL, y la luz llegará al otro extremo. Esto significa
  que la luz puede ser combinada en la fibra óptica a larga distancia sin importar la forma compleja que tenga la fibra.
- Las fibras ópticas necesitan una capa protectora, y si se utiliza un material como capa protectora reemplazando la posición del aire, detendrá el fenómeno de RIL.
  - Una forma fácil de solucionar este problema es introducir un vidrio de bajo IR sobre el vidrio central conocido como Revestimiento.
    De esta manera se producirá una RIL y podremos utilizar una capa protectora.
    - Tanto el núcleo como el revestimiento utilizan silitec como material base. La diferencia en el IR se puede conseguir añadiendo diferentes tipos de dopantes.
- Esta fibra óptica no podrá transportar señales por más de 100km debido a las diversas pérdidas que se producen.
  Esta perdida se denomina generalmente como "atenuación". La absorción y la dispersión son las principales razonas de la atenuación de la señal.
  Es por eso que se ven los amplificadores en los cables después de una cierta distancia. Aumentan la intensidad y permiten que se transmitan a larga distancia.
  La potencia necesaria de este amplificador se obtiene de fuentes cercanas.

---

Cualquier información puede ser representada en forma binaria. Supongamos que queremos enviar un mensaje de texto a través del celular:

- Primero, la palabra se va a convertir en binario.
- Se transmite este binario en forma de ondas electromagnéticas.
  - 1 es alta frecuencia, 0 baja.
- La torre de telefonía capta las ondas.
  - Si detecta una onda de alta frecuencia se genera un pulso de luz.
  - Si no se detecta no se genera.
- Los pulsos se transmiten a través de la fibra óptica.
- Viajan a su destino a través de la red de fibra óptica mundial.
- Si vemos un cable de fibra óptica por dentro que pasa por el océano, vamos a ver que solo una parte de la estructura sostiene el cable,
  mientras que el resto funciona como protección usnado alambre de acero y polietileno.
- Una fina cubierta de cobre dentro del cable transporta la energía eléctrica a lo largo del cable para que los amplificadores pudan ser alimentados.
- Comparando los cables de fibra óptica con los cables tradicionales de cobre son muy superiores.
  - La fibra óptica proporciona un mayor ancho de banda y transmiten datos a velocidades mucho mayores.
    Esto es porque la velocidad de la luz es siempre mayor que la velocidad de los electrones.
    - El flujo de los electrones en un cable de cobre genera un campo magnético incluso fuera del cable que puede causar interferencia electromagnética.
    - Cualquier señal de luz que entra por un lado tiene una posibilidad mínima de viajar a lo largo del cable. Así, los cables de fibra óptica proporcionan una alta seguridad de datos.
