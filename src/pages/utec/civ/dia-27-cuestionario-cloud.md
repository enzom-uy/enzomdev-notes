---
title: Datacenter y cloud.
description: Apuntes sobre los videos vistos acerca de datacneter y cloud para resolver el cuestionario 2.
date: 2023-01-27 12:57
layout: ../../../layouts/PostLayout.astro
---

<!--toc:start-->
- [Qué es la nube](#qué-es-la-nube)
- [Cómo se proveen estos servicios](#cómo-se-proveen-estos-servicios)
- [Tipos de cloud](#tipos-de-cloud)
- [Google Data Center](#google-data-center)
<!--toc:end-->

# Qué es la nube

La nube a grandes rasgos es **Internet** con una disposición de servicios que ponen los proveedores para clientes como nosotros.

# Cómo se proveen estos servicios

Estos servicios realmente son servidores que están en **Data centers**. Los data centers son como CPDs, y los CPDs son salas donde hay cantidad de servidores, con cantidad de almacenamiento,
con cantidad de procesamiento con buena conexión a internet redundante por si se cae uno.

Todo eso es una infraestructura.
La infraestructura está conformada por sistemas `hardware` y sistemas `software`.

En base a esa infraestructura los proveedores proporcionan multitud de servicios. Entonces la nube y la internet está compuesta por multitud de servicios proporcionados por proveedores.

El cloud está formado por proveedores con su infraestructura para proporcionar a los clientes múltiples servicios.

# Tipos de cloud

- Cloud pública.
  - Cuando el proveedor tiene una infraestructura donde se almacena la información de TODOS los clientes de manera compartimentada e independizada.
  - Una misma infraestructura está compartida para varios clientes.
  - El rendimiento y capacidad están compartidos independientemente de que no podamos acceder a los datos de otros clientes.
- Cloud privada.
  - Cuando una infraestructura está dedicada para cierto cliente. No se comparte entre clientes.
- Cloud híbrida.
  - Se puede dedicar una infraestructura a un cliente en específico, y otros datos menos importantes o críticos del mismo cliente pueden ser almacenados en la nube compartida.

# Google Data Center

El data center de Google tiene 6 capas de seguridad.

- Primera capa: señalización y cercas.
- Segunda capa: puerta de entrada principal, cercas intleignetes, cámaras, patrullas de vigilancia 24/7 y más.
  - En el momento que una persona entra, el personal sabe que está ahí. Hacen un análisis de correlación de dónde ha estado la persona.
  - Tienen guardias en vehículos, algunos a pie.
  - Tienen barreras de choque para prevenir vehículos cargados y pesados que puedan estrellarse contra la entrada principal.
  - Vallas antiescalada equipada con fibra. Tiene una tecnología para indicar si alguien está cerca o toca la valla.
  - Cámaras térmicas y cámaras estándar. Pueden ver videos de vigilancia nocturna con la misma claridad que durante el día.
- Tercera capa: acceso al edificio.
  - Lobby de seguridad.
  - Checkeo de tarjetas de personal.
  - Escáner de iris para corroborar quién es realmente la persona.
  - Sólo se permite cruzar las puertas de seguridad a una persona a la vez.
- Cuarta capa: centro de operaciones de seguridad.
  - Colmena de actividad que supervisa el centro de datos 24/7 los 365 días del año.
  - Toda la tecnología de seguridad del edificio está conectada ahí.
- Quinta capa: el piso del centro de datos.
  - Menos del 1% de los empleados de Google llega a poner un pie ahí.
  - Sólo los técnicos e ingenieros que TIENEN que estar ahí para mantener, actualizar o reparar el equipamiento pueden entrar.
  - Los que entran tienen acceso a los dispositivos donde se almacenan los datos, pero los datos están encriptados, y los clientes pueden mantener sus propias claves de encriptación.
- Sexta capa: donde los discos se borran y se destruyen.
  - Las unidades que deben retirarse del piso del centro de datos ingresan a esta sala a través de un sistema seguro de casilleros de dos vías, lo que significa que solo los técnicos asignados a esta sala pueden sacarlos de ese casillero para borrarlos
    o destruirlos.
    - Se escanea el disco duro y el software decide si debe ser destruido o no.

- Google Cloud contrata a una persona externa para que intente colarse en la infraestructura desde el exterior, junto con encargar a empleados de Google que intenten pasar por alto los protocolos de seguridad desde el interior.
- Salir del Data center es más difícil que entrar.
  - Todos tienen que pasar por una detección de metales completa cada vez que abandonan el piso del centro de datos.
- Google Cloud respalda el cumplimiento de más de 40 estándares, regulacoines y certificaciones globales, y el compromiso de probar, optimizar y mejorar onstantemente los sistemas.
- Para manejar los servidores a escala global utilizan herramientas como Borg, Colossus y Spanner, que son similares a Kubernetes, Google Cloud Storage y BigQuery.
- En la red y centro de datos utilizan Jupiter. Tiene un diseño jerárquico basado en un software de conexión de redes. Como con los servidores, asbtraen los detalles específicos de la red
  para operarlos como si fueran programas o datos.
- Un edificio puede albergar 75k máquinas y superar un petabit por segundo de banda ancha, lo que de hecho supera el total en Internet.
- Google usa su propia red central privada de alta eficiencia llamada B4 para conectar todos sus centros de datos y permitis a los servicios acceder a recursos eficientemente.
- Mientras los datos de duplican deben destruir o reciclar los discos duros usados para que nadie pueda acceder a los datos.
  - Desde que se borra un disco del servidor a que es eliminado se mantiene una estricta cadena de custodia.
- Tienen un área de enfriamiento para eliminar todo el calor generado en la sala de servidores. Tienen dos circuitos:
  - El de condensado de agua.
    - Usa tubos amarillos y verdes. Toman el agua fría de un depósito debajo, la pasan a los intercambiadores y sube a las torres refrigeradoras.
  - El de procesado de agua.
    - Usa tubos azules rojos. Extraen el calor de los servidores y lo transfieren a los intercambiadores de calor.
  - Tienen una refrigeradora para mantener la temperatura al nivel deseado cuando hace mucho calor.
- La torre de refrigeración usa evaporación para enfriar el agua rápidamente desde el condensador y la devuelve al depósito.
- Tienen una subestación energética propia.
  - Entra la energía de alto voltaje, se reduce y se envía a centros de distribución.
  - Si un centro de distribución pierde energía tienen generadores y recursos de soporte disponibles para mantener los servidores.
  - La energía viene de plantas hidroeléctricas cercanas.
