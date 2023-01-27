---
title: Videoconferencia de Infraestructura
description: Apuntes sobre la videoconferencia sobre infraestructuras.
date: 2023-01-27 14:57
layout: ../../../layouts/PostLayout.astro
---

<!--toc:start-->
- [Videoconferencia de Infraestructura](#videoconferencia-de-infraestructura)
  - [Hardware de Servidores vs PC](#hardware-de-servidores-vs-pc)
  - [Perspectivas de Redes](#perspectivas-de-redes)
  - [Seguridad en capas](#seguridad-en-capas)
  - [Siguientes pasos](#siguientes-pasos)
<!--toc:end-->

# Videoconferencia de Infraestructura

## Hardware de Servidores vs PC

El equipo domiciliario.

- Tablets, pcs, celulares.
- Tenemos puntos de acceso en internet.
- No tenemos una necedidad de administración de los equipos. No voy a tener inferencias políticas de seguridad. Puedo tener un antivirus o un firewall para la conectividad
  para indegar en el tema de la seguridad navegando.
- No es lo mismo que un equipo empresarial. El equipo domiciliario si se rompe puedo meterle mano yo.
- Si se rompe, no tengo una pérdida económica equiparable a una empresa.
- No tiene redundancia, tengo un solo procesador, puedo tener cuatro o cinco discos pero no tengo la estructura que puedo llegar a tener en un servidor, el cual está pensado en un entorno empresarial.

El equipo de entorno empresarial.

- Tenemos racks: muebles metálicos en el cual uno rackea los servidores. Luego de que le configure determinadas cosas al servidor, se coloca físicamente en los muebles de metal (racks).
- Estos equipos son tolerantes a fallas. Por lo general tienen doble fuente, una amplia bahía de discos, pueden tener más de un procesador, varios bancos de memoria.
- Ante una eventual falla (si falla la fuente por ejemplo) hay una alerta del equipo en el cual voy a poder hacer mantenimiento en el data center.
- Deben estar monitoreados las 24 horas ante una falla. Resiliencia: fallas que puedo ir y repararla. El equipo puede seguir andando sin que yo requiera que apague y prenda el dispositivo.
- Todo lo que yo pueda sacar sin cortar el funcionamiento del dispositivo se llama Hot Swap.
- Puedo tener el equipo físico como también con una virtualización.
  - Distintos hipervisores: Hyper-V, VMWare.
- El entorno empresarial requiere un entorno de seguridad tanto lógica como física.
- Lo común es encontrarse servidors con doble procesador de muchos núcleos.
  - Puede ser configurado para que funcionen simultáneamente o individualmente.
- Los bancos de memoria suelen ser de 64gb.
- Cuentan con UPS, unidades de poder ininterrumpidas. Si me quedo sin luz el equipo sigue funcionando por cierto lapso de tiempo.

## Perspectivas de Redes

- Internet no es seguro, sobretodo para el ámbito empresarial. Cuando navegamos estamos accediendo a un servidor. No sabemos lo que hay en la transmisión entre el cliente y servidor.
- El firewall sniffea todo tráfico y es lo que me aporta robustez a mi navegación. El firewall lo ve todo.
- El analista de infraestructura puede sacar un reporte de cuáles son los sitios más visitados y tener un panorama de cuánto tiempo está cada usuario en cada lugar.
- Todo lo que sea de mi red o ámbito local es un ámbito relativamente seguro en el que confío. Todo lo que está puertas afuera es el ámbito inseguro.

## Seguridad en capas

- Seguridad física.
  - El campo físico.
- Seguridad lógica.
  - Bloqueos del lado del sistema.
- Seguridad en profundidad.
  - Auditoría y monitoreo constante.
  - Ningún sistema va a ser 100% seguro ni seguro por toda la vida.

## Siguientes pasos

- IoT está presente ahora.

---

Las normas de la empresa deben ser revisadas por lo menos una vez al año o dos.
Hay que contratar externos para intentar vulnerar mi sistema y presentar un informe.
