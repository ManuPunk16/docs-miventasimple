# Graph Report - docs-miventasimple  (2026-11-12)

## Corpus Check
- 56 files · ~55,540 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 292 nodes · 240 edges · 60 communities (40 shown, 20 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ffa68524`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]

## God Nodes (most connected - your core abstractions)
1. `Theme: Light — Daylight Studio Style Reference` - 14 edges
2. `Components` - 11 edges
3. `Components (Light)` - 11 edges
4. `Theme: Dark (Default) — Linear Style Reference` - 7 edges
5. `Gestión de Ventas, Caja Chica y Cierre de Turno` - 7 edges
6. `scripts` - 6 edges
7. `Abarrotes, Minisúpers y Tiendas de Conveniencia` - 6 edges
8. `./CustomSidebarSublist.astro` - 5 edges
9. `Tokens — Spacing & Shapes` - 5 edges
10. `Barberías, Salones de Belleza y Estéticas` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AGENTS Development Guide` --semantically_similar_to--> `CLAUDE Development Guide`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Introducción a VentaSimple` --conceptually_related_to--> `Configuración del Sistema`  [INFERRED]
  src/content/docs/primeros-pasos/inicio.mdx → src/content/docs/configuracion/ajustes.mdx
- `Introducción a VentaSimple` --conceptually_related_to--> `Gestión de Inventario y Productos`  [INFERRED]
  src/content/docs/primeros-pasos/inicio.mdx → src/content/docs/inventario-productos/gestion.mdx
- `Introducción a VentaSimple` --conceptually_related_to--> `Gestión de Ventas y Caja Chica`  [INFERRED]
  src/content/docs/primeros-pasos/inicio.mdx → src/content/docs/ventas-caja/caja-chica.mdx
- `Graphify Workflow` --references--> `Graphify Rule`  [EXTRACTED]
  .agents/workflows/graphify.md → .agents/rules/graphify.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **VentaSimple User Help System** — docs_index_document, primeros_pasos_inicio_document, ventascaja_cajachica_document, inventarioproductos_gestion_document, configuracion_ajustes_document, faqs_preguntas_document [INFERRED 0.95]

## Communities (60 total, 20 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (26): Badge, Berkeley Mono — Monospaced font for code snippets, technical details, and certain data displays, ensuring consistent character alignment and technical clarity. · `--font-berkeley-mono`, Border Radius, Components, Default Card, Do, Do's and Don'ts, Don't (+18 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (18): Agent Prompt Guide, CSS Custom Properties, Do, Do's and Don'ts (Light), Don't, Elevation, Imagery, Layout (+10 more)

### Community 2 - "Community 2"
Cohesion: 0.47
Nodes (6): Configuración del Sistema, Centro de Ayuda VentaSimple, Preguntas Frecuentes (FAQs), Gestión de Inventario y Productos, Introducción a VentaSimple, Gestión de Ventas y Caja Chica

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (20): dependencies, astro, @astrojs/sitemap, @astrojs/starlight, mermaid, repomix, sharp, devDependencies (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (16): @astrojs/starlight/components, ./CustomSidebarSublist.astro, closeMenu(), constructor(), openMenu(), toggleMenu(), virtual:starlight/components/LanguageSelect, virtual:starlight/components/MobileMenuFooter (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.20
Nodes (9): Ajustes de último momento y guardado, Auditoría de compras, cancelación e impresión, Cancelación de compra con reversión automática, Comprobantes térmicos (Tickets 58 mm / 80 mm), Paso a paso para capturar la compra, ¿Qué sucede al presionar "Registrar compra"?, Registrar una compra en mostrador, Trazabilidad "Antes y Después" (+1 more)

### Community 6 - "Community 6"
Cohesion: 1.00
Nodes (3): Dark Theme (Default), VentaSimple Design System, Light Theme

### Community 10 - "Community 10"
Cohesion: 0.18
Nodes (11): Badge, Components (Light), Default Card, Elevated Card, Ghost Navigation Button, Input Field, Navigation Item Button, Nested Card (+3 more)

### Community 11 - "Community 11"
Cohesion: 0.25
Nodes (7): Cómo Administrar tu Directorio de Clientes, Cómo Cobrar y Registrar un Abono, Cómo Consultar la Cartera de Clientes que Deben, Cómo Enviar Recordatorios y Comprobantes por WhatsApp, Cómo Fiar una Venta en Mostrador, ¿Qué pasa cuando el cliente liquida toda su cuenta?, ¿Qué pasa si el cliente paga de más?

### Community 16 - "Community 16"
Cohesion: 0.29
Nodes (6): 1. Registra tu tienda, 2. Agrega tus primeros productos, 3. Abre tu caja chica y cobra, 3 Pasos para empezar a vender hoy mismo, ¿Cómo fluye el día en tu negocio con VentaSimple?, Instálalo en tu celular (Sin bajar aplicaciones pesadas)

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (5): Conceptos Clave, Creación de un Producto, Eliminación y Ajuste de Stock en 1 Clic, Importación Masiva desde Excel o CSV, Inventario y Productos

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (7): 1. Apertura de Turno (Fondo de Caja), 2. Entradas y Salidas Operativas de Efectivo, 3. Cierre y Arqueo de Turno, Circuito Diario del Efectivo, Gestión de Ventas, Caja Chica y Cierre de Turno, Impresión del Ticket de Corte Z, Tarjeta de Diferencia y Semáforo Visual

### Community 19 - "Community 19"
Cohesion: 0.40
Nodes (4): 🧞 Commands, 🚀 Project Structure, Starlight Starter Kit: Basics, 👀 Want to learn more?

### Community 21 - "Community 21"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 25 - "Community 25"
Cohesion: 0.29
Nodes (6): Compra por paquete o caja cerrada, Desempacar cajas y contenedores surtidos (Galletas, botanas, kits), Fraccionar a granel y embolsar (Gomitas, semillas, carnes), ¿Por qué cotizar antes de pagar?, Reutilizar plantillas con un solo clic, Transferir a Nueva Compra

### Community 33 - "Community 33"
Cohesion: 0.33
Nodes (5): Apertura de Cajón de Dinero (RJ11) y Autocutter, Formatos Soportados: 58 mm y 80 mm, Impresoras Térmicas y Emisión de Tickets, Motor de Impresión PWA Universal, Vinculación y Conexión Paso a Paso

### Community 34 - "Community 34"
Cohesion: 0.29
Nodes (6): 1. Lectores de Códigos de Barras, 2. Básculas y Pesaje Decimal (Venta a Granel), A. Escáner Físico USB o Bluetooth (Modo Emulación de Teclado / HID), B. Escáner con Cámara Trasera del Celular (`@zxing/browser`), C. Uso del Escáner en Conteos y Auditorías de Stock, Lectores de Código de Barras y Básculas de Pesaje

### Community 35 - "Community 35"
Cohesion: 0.29
Nodes (6): Análisis de Discrepancias y Conciliación Financiera, Buenas Prácticas para Reducir Errores en Auditorías, Características Técnicas del Escaneo Móvil, Escaneo Móvil en Estantería con Cámara Trasera, Flujo Operativo Paso a Paso, Tipos de Conteo en VentaSimple

### Community 36 - "Community 36"
Cohesion: 0.25
Nodes (7): 1. Tipos de Movimientos en el Kardex, 2. Tipificación y Registro de Mermas, 3. Impacto Financiero: Costo vs. Precio de Venta, 4. Trazabilidad y Filtros en la Consulta de Kardex, A. Movimientos Automáticos por Operación Continua, B. Movimientos Manuales y Extraordinarios, Movimientos de Stock y Kardex Histórico

### Community 42 - "Community 42"
Cohesion: 0.50
Nodes (3): 1. Tabla Oficial de Planes Vigentes, 2. Administración y Facturación de la Suscripción, Planes, Suscripción y Límites

### Community 52 - "Community 52"
Cohesion: 0.40
Nodes (4): 1. Hub Ejecutivo y Selector Global de Periodo, 2. Las 6 Áreas Especializadas, 3. Exportación y Respaldo de Información, Centro de Inteligencia y Reportes

### Community 55 - "Community 55"
Cohesion: 0.20
Nodes (9): 1. Cobro de Alta Velocidad para Retail, 2. Venta a Granel y Pesaje Decimal, 3. Libreta Digital de Fiados con Semáforo de Cobranza, 4. Estado de Cuenta y Recordatorio por WhatsApp, 5. Control de Mercancía, Inventario y Mermas, A. Báscula Serial en Vivo (Web Serial API), Abarrotes, Minisúpers y Tiendas de Conveniencia, B. Descuento de Tara (Charolas y Contenedores) (+1 more)

### Community 56 - "Community 56"
Cohesion: 0.20
Nodes (9): 1. Mostrador Ágil para Servicios Rápidos (Flujo 1-Tap), 2. Asignación de Barbero/Estilista y Cálculo de Comisiones, 3. Manejo de Propinas y Venta Mixta (Servicios + Productos), 4. Emisión de Tickets Digitales por WhatsApp, A. Chips de Servicio Rápido, A. Registro Inteligente de Propinas, B. Captura Ergonómica en Menos de 3 Segundos, B. Venta Mixta en un Mismo Ticket (+1 more)

### Community 57 - "Community 57"
Cohesion: 0.29
Nodes (6): 1. Configuración de Membresías y Planes con Vigencia Temporal, 2. Control de Socios y Cobro en Recepción, 3. Venta Cruzada en Mostrador (Barra de Suplementos y Bebidas), 4. Métodos de Pago Adaptados al Gimnasio, Gimnasios, Centros Fitness y Boxes de Crossfit, Parámetro de Vigencia (`duracionDias`)

### Community 58 - "Community 58"
Cohesion: 0.25
Nodes (7): 1. Órdenes de Trabajo Mixtas (Servicios + Refacciones Físicas), 2. Búsqueda Ágil en Mostrador de Refacciones, 3. Anticipos y Liquidación contra Entrega, 4. Emisión de Tickets con Póliza de Garantía, A. Diferenciación en el Catálogo, B. Flujo de Trabajo Consolidado, Talleres Mecánicos, de Motocicletas y Refaccionarias

## Knowledge Gaps
- **173 isolated node(s):** `name`, `type`, `version`, `dev`, `start` (+168 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **20 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Theme: Light — Daylight Studio Style Reference` connect `Community 1` to `Community 10`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `Theme: Dark (Default) — Linear Style Reference` connect `Community 0` to `Community 1`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _173 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.11578947368421053 - nodes in this community are weakly interconnected._