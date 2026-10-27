// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
	site: 'https://docs.miventasimple.com',
	integrations: [
		starlight({
			title: 'VentaSimple Docs',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			logo: {
				src: './src/assets/logo.png',
			},
			customCss: ['./src/styles/global.css'],
			components: {
				Header: './src/components/Header.astro',
				MobileMenuToggle: './src/components/MobileMenuToggle.astro',
				MobileTableOfContents: './src/components/MobileTableOfContents.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				Sidebar: './src/components/Sidebar.astro',
			},
			head: [
				{ tag: 'meta', attrs: { name: 'google-site-verification', content: 'oB-Z2hnHZOGw4LaVA6sPzDU06jFlWJGDqYVa0cXsVhg' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.miventasimple.com/og-image.png' } },
				{
					tag: 'script',
					attrs: {
						async: true,
						src: 'https://www.googletagmanager.com/gtag/js?id=G-482E246E42',
					},
				},
				{
					tag: 'script',
					content: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-482E246E42');
`,
				},
			],
			sidebar: [
				{
					label: 'Primeros Pasos',
					collapsed: false,
					items: [
						{ label: 'Guía Rápida de Inicio', slug: 'primeros-pasos' },
						{ label: 'Perfil de Negocio', slug: 'primeros-pasos/configuracion-cuenta-perfil' },
						{ label: 'Usuarios y Roles', slug: 'primeros-pasos/empleados-permisos' },
					],
				},
				{
					label: 'Compras y Proveedores',
					collapsed: false,
					items: [
						{ label: 'Cotizador de Pasillo y Bultos', slug: 'guias/cotizador-compras' },
						{ label: 'Registro de Compras y Stock', slug: 'guias/registrar-compras' },
					],
				},
				{
					label: 'El Mostrador (Caja y Ventas)',
					collapsed: false,
					items: [
						{ label: 'Cobro Rápido y Métodos de Pago', slug: 'punto-de-venta/como-vender-y-metodos-de-cobro' },
						{ label: 'Caja Chica y Cortes de Caja', slug: 'punto-de-venta/caja-chica-aperturas-cierres' },
						{ label: 'Libreta de Fiados y Créditos', slug: 'punto-de-venta/fiados-ventas-credito-abonos' },
						{ label: 'Promociones y Descuentos', slug: 'punto-de-venta/promociones-descuentos' },
					],
				},
				{
					label: 'Inventario y Catálogo',
					collapsed: true,
					items: [
						{ label: 'Alta de Productos y Precios', slug: 'inventario-y-productos/alta-productos-variantes' },
						{ label: 'Movimientos de Stock y Kardex', slug: 'inventario-y-productos/movimientos-stock-kardex' },
						{ label: 'Recetas e Insumos', slug: 'inventario-y-productos/recetas-insumos' },
						{ label: 'Auditorías y Conteos de Inventario', slug: 'inventario-y-productos/cortes-auditorias-inventario' },
					],
				},
				{
					label: 'Giros Especializados',
					badge: { text: 'Arquetipos', variant: 'tip' },
					collapsed: false,
					items: [
						{ label: 'Abarrotes y Tiendas', slug: 'giros/abarrotes-y-retail' },
						{ label: 'Barberías y Salones', slug: 'giros/barberias-y-esteticas' },
						{ label: 'Gimnasios y Centros Fitness', slug: 'giros/gimnasios-y-fitness' },
						{ label: 'Talleres y Refaccionarias', slug: 'giros/talleres-y-refaccionarias' },
					],
				},
				{
					label: 'Hardware y Periféricos',
					collapsed: true,
					items: [
						{ label: 'Impresoras Térmicas Bluetooth y USB', slug: 'hardware-y-perifericos/impresoras-tickets' },
						{ label: 'Lectores de Códigos y Básculas', slug: 'hardware-y-perifericos/lectores-codigo-barras' },
					],
				},
				{
					label: 'Reportes y Finanzas',
					collapsed: true,
					items: [
						{ label: 'Dashboard Financiero y Utilidades', slug: 'reportes-y-auditoria/dashboard-utilidades-metricas' },
						{ label: 'Exportación a Excel / CSV', slug: 'reportes-y-auditoria/exportacion-informacion-excel-csv' },
						{ label: 'Historial de Auditoría', slug: 'reportes-y-auditoria/historial-auditoria-personal' },
					],
				},
			],
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
