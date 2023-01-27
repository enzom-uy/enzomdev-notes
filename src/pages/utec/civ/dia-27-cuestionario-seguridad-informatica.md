---
title: Seguridad informática.
description: Apuntes sobre la lección acerca de ciberataques y seguridad informática para resolver el cuestionario 3.
date: 2023-01-27 14:16
layout: ../../../layouts/PostLayout.astro
---

# Qué son los Ataques Informáticos

<!--toc:start-->
- [Qué son los Ataques Informáticos](#qué-son-los-ataques-informáticos)
  - [Fases de un ataque informático](#fases-de-un-ataque-informático)
- [Tipos de hackers](#tipos-de-hackers)
  - [White hat](#white-hat)
  - [Gray hat](#gray-hat)
  - [Black hat](#black-hat)
  - [Blue hat](#blue-hat)
  - [Green hat](#green-hat)
  - [Red hat](#red-hat)
- [Tipos de ataques](#tipos-de-ataques)
  - [Afectar la disponibilidad](#afectar-la-disponibilidad)
  - [Afectar la integridad o confidencialidad](#afectar-la-integridad-o-confidencialidad)
  - [Ataque del día Cero](#ataque-del-día-cero)
<!--toc:end-->

Un ataque informático consiste en aprovechar alguna vulnerabilidad en el software, hardware, e incluso en las personas que forman parte de un ambiente informático.
En general cuenta con una serie de etapas, si bien estas no son todas requeridas, es un buen comienzo el poder representarlas ya que es importante ver qué tan expuesta se encuentra nuestra
infraestructura y nuestros sistemas a las diferentes fases.

## Fases de un ataque informático

- Primera fase - Reconocimiento.
  - Conocimiento del escenario en el cual estamos. Nos enfocamos en recabar información de la persona u organización.
  - Esta búsqueda exploratoria utiliza una serie de recursos desde los más habituales como usar internet y la propia información de la empresa u organización, así como también
    las redes sociales de las personas involucradas (personas objetivo o que pertenecen a la organización).
  - En esta fase se utiliza la ingeniería social, dumplster diving, sniffing, etc.
    - Ingeniería social: práctica de obtener información confidencial a través de la intrusión de usuarios específicos en la organización.
      - Se intenta obtener información a través de las personas. Puede ser desde datos genéricos, hábitos, hasta datos específicos como fechas, nombres, acceso a sistemas específicos o áreas específicas.
      Siempre con el foco de lograr avanzar en la realización de algún acto que perjudique o exponga la persona u organismo comprometido a riesgo o abusos.
      - Se basa en la falta de foco de los usuarios sobre todo cuando estamos en entornos diferentes a los habituales. Por ejemplo, si alguien nos aborda en la vía pública en la noche en una zona de baja luminosidad,
        nos parece inadecuado, nos hace sentir incómodos y lo rechazamos. Pero si la comunicación se da en un evento, en un entorno completamente diferente al anterior, sin dudas nuestra reacción cambia.
        En ambos casos si analizamos el contacto, tenemos la misma información previa, por ejemplo una persona desconocida inicia una comunicación con nosotros.
    - Dumpster Diving - trashing: la técnica de trashing o lo que es basarnos en la basura para obtener información, aunque parezca más asociada al cine o las novelas de investigación, en la práctica también se da.
- Segunda fase - Exploración.
  - Se utiliza la información obtenida en la etapa previa para sondear el blanco y tratar de obtener información sobre el sistema víctima como direcciones IPs, nombres de hosts, versiones de sistemas operativos,
    datos de usuarios y credenciales, etc.
    - Algunas de las herramientas para esta fase, pueden ser las de exploración de puertos, IPs, escáner de red, escáner de vulnerabilidades, etc.
- Tercera fase - Obtener acceso.
  - Es el momento donde se efectiviza el ataque.
  - Se explotan las vulnerabilidades y defectos del sistema. Estas vulnerabilidades que han sido exploradas y detectadas en las etapas previa.s
  - Aquí pueden utilizarse variedad de tcnicas, por ejemplo, Buffer Overflow, DDoS, uso de contraseñas, etc.
- Cuarta fase - Mantener el acceso.
  - En muchos casos lograr el acceso al sistema no es el foco de interés final del atacante, pero que son un buen punto de partida para acciones futuras.
  - En este sentido es común luego de lograr acceso a los sistemas, el implementar herramientas que nos pemitan mantener dicho aceso (como un recurso de uso futuro).
- Quinta fase - Borrar huellas.
  - Ya tenemos acceso y mantenemos el mismo en los sistemas, ahora es momento de borrar los rastros en los propios sistemas sobre las actividades realizadas.
  - El borrar datos implica la eliminación o modificación de los archivos de los, el bajar la sensibilidad de los sistemas tipo IDS entre otros.

# Tipos de hackers

Hay diferentes perfiles y formas de identificarlos. Uno de ellos se basa en la identificación por sombreros de colores. Estos sombreros se asocian con el trabajo del hacker,
basado en los valores del mismo. Es una forma simple de representar la forma de desenvolverse en un mundo que está en el límite entre la protección de datos y su invasión.

## White hat

Este se asocia con el hacker ético. Es el hacker contratado por parte de las empresas para atacar a sus propios sistemas con el fin de que detecten las fallas y vulnerabilidades de estos.

## Gray hat

Este individuo muestra y enseña sus logros y conocimientos para que otros puedan aprovecharlos, pero no tiene una actitud definida ya que puede estar del lado de la legalidad o de la ilegalidad,
de acuerdo a la conveniencia del momento para esta persona.

## Black hat

Este individuo es el clásico pirata informático quien trabaja de incógnito en la ilegalidad y en busca de beneficio propio.
En general se le conoce como "hacker", si bien el termino adecuado debe ser "cracker".

## Blue hat

Trabaja generalmente como freelancer para empresas que requieren atacar a sus propios sistemas.

## Green hat

Novato en el cibercrimen, quien pretende evolucoinar hasta llegar a ser un sombrero negro. Generalmente se vincula con ellos y se entrena con los sombreros negros.

## Red hat

Responsable de crear y mantener diferentes distribuciones de sistemas de la empresa (por ejemplo, versiones de Unix o Linux). Promueve el software libre y contribuye a su mantenimiento y mejora.

# Tipos de ataques

## Afectar la disponibilidad

Un ataque muy frecuente es el de denegación de servicio, o sea saturar a la fuente para que este no pueda procesar más consultas o requerimientos.
Esto se logra desde un único punto (DoS) o desde múltiples puntos (DDoS).

El servidor recibe peticiones legítimas, pero también recibe un volúmen no habitual de peticiones no legítimas, lo que hace que
en primera instancia el servidor intente responder a todas hasta que se queda sin recursos por lo que deja de procesar nuevas peticiones.
Es en este momento cuando los usuarios legítimos ya no pueden acceder a los recursos del sistema.

## Afectar la integridad o confidencialidad

Ataque hombre en el medio (MitM).
En este tipo de ataques se afectan dos de los pilares de la seguridad: la confidencialidad porque alguien que no debe acceder a cierta información
logra acceder a la misma; pero tamibén puede ser afectada la integridad  ya que esta información puede ser modificada.

Aquí el atacante logra interceder entre una comunicación entre pares o intercediendo entre los datos que viajan entre elos, con lo que puede leer y cambiar dichos datos.

Un ejemplo de ello es colocarse escuchando en un puerto bien conocido simulando ser algún servidor y luego reenviar las solicitudes recibidas al servidor real.

## Ataque del día Cero

Caso en el cual se logra explotar una vulnerabilidad una vez que esta es descubierta y publicada por el fabricante del sistema. El tiempo entre
el que se publica la vulnerabilidad y se publica la solución es el tiempo ventana que tienen los atacantes para explotar estas vulnerabilidades.

## Denegación de acceso a la información o Ransomware

Hace referencia a los casos en que los atacantes logran infiltrar un sistema (mediante el uso de redes sociales, emails, navegación, etc). Luego de lograr el acceso se procede a encriptar
la información de los sistemas accedidos, provocando incluso la afectación de la operación del sistema operativo.

Luego de esto se notifica al afectado que para poder "desencriptar" sus datos debe abonar un dinero en un medio de pago no rastreable.
