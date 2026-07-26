# Graph Report - .  (2026-07-26)

## Corpus Check
- Corpus is ~10,617 words - fits in a single context window. You may not need a graph.

## Summary
- 50 nodes · 39 edges · 16 communities (8 shown, 8 thin omitted)
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Dependencies and Tailwind CSS|Dependencies and Tailwind CSS]]
- [[_COMMUNITY_Mermaid and Diagrams|Mermaid and Diagrams]]
- [[_COMMUNITY_User Documentation|User Documentation]]
- [[_COMMUNITY_Astro Scripts|Astro Scripts]]
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Accessibility Controls|Accessibility Controls]]
- [[_COMMUNITY_Design System & Theme|Design System & Theme]]
- [[_COMMUNITY_Agent Development Guides|Agent Development Guides]]
- [[_COMMUNITY_Houston Mascot Asset|Houston Mascot Asset]]
- [[_COMMUNITY_Graphify Integration Rules|Graphify Integration Rules]]
- [[_COMMUNITY_Content Collections Config|Content Collections Config]]
- [[_COMMUNITY_Example Documentation Guide|Example Documentation Guide]]
- [[_COMMUNITY_Project README Intro|Project README Intro]]
- [[_COMMUNITY_Example Reference Document|Example Reference Document]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `Centro de Ayuda VentaSimple` - 4 edges
3. `Introducción a VentaSimple` - 3 edges
4. `mermaid` - 2 edges
5. `VentaSimple Design System` - 2 edges
6. `Dark Theme (Default)` - 2 edges
7. `Light Theme` - 2 edges
8. `Configuración del Sistema` - 2 edges
9. `Gestión de Inventario y Productos` - 2 edges
10. `Gestión de Ventas y Caja Chica` - 2 edges

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

## Communities (16 total, 8 thin omitted)

### Community 0 - "Dependencies and Tailwind CSS"
Cohesion: 0.25
Nodes (7): devDependencies, @astrojs/starlight-tailwind, tailwindcss, @tailwindcss/vite, name, type, version

### Community 1 - "Mermaid and Diagrams"
Cohesion: 0.29
Nodes (5): dependencies, astro, @astrojs/starlight, mermaid, sharp

### Community 2 - "User Documentation"
Cohesion: 0.47
Nodes (6): Configuración del Sistema, Centro de Ayuda VentaSimple, Preguntas Frecuentes (FAQs), Gestión de Inventario y Productos, Introducción a VentaSimple, Gestión de Ventas y Caja Chica

### Community 3 - "Astro Scripts"
Cohesion: 0.33
Nodes (6): scripts, astro, build, dev, preview, start

### Community 4 - "TypeScript Configuration"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 6 - "Design System & Theme"
Cohesion: 1.00
Nodes (3): Dark Theme (Default), VentaSimple Design System, Light Theme

## Knowledge Gaps
- **28 isolated node(s):** `name`, `type`, `version`, `dev`, `start` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Mermaid and Diagrams` to `Dependencies and Tailwind CSS`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `scripts` connect `Astro Scripts` to `Dependencies and Tailwind CSS`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Introducción a VentaSimple` (e.g. with `Configuración del Sistema` and `Gestión de Inventario y Productos`) actually correct?**
  _`Introducción a VentaSimple` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._