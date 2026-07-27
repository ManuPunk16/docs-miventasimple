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
			logo: {
				src: './src/assets/logo.png',
			},
			customCss: ['./src/styles/global.css'],
			components: {
				Header: './src/components/Header.astro',
				MobileMenuToggle: './src/components/MobileMenuToggle.astro',
				MobileTableOfContents: './src/components/MobileTableOfContents.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			head: [
				{ tag: 'meta', attrs: { name: 'google-site-verification', content: 'oB-Z2hnHZOGw4LaVA6sPzDU06jFlWJGDqYVa0cXsVhg' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.miventasimple.com/og-image.png' } },
			],
			sidebar: [
				{
					label: 'Primeros Pasos',
					collapsed: true,
					items: [{ autogenerate: { directory: 'primeros-pasos', collapsed: true } }],
				},
				{
					label: 'Vender y Cobrar',
					collapsed: true,
					items: [{ autogenerate: { directory: 'ventas-caja', collapsed: true } }],
				},
				{
					label: 'Inventario y Productos',
					collapsed: true,
					items: [{ autogenerate: { directory: 'inventario-productos', collapsed: true } }],
				},
				{
					label: 'Configuración de Tienda',
					collapsed: true,
					items: [
						{
							label: 'Administración y Personal',
							collapsed: true,
							items: [
								{ label: 'Perfil de Usuario', link: '/configuracion/perfil/' },
								{ label: 'Usuarios y Roles', link: '/configuracion/usuarios/' },
								{ label: 'Sucursales y Almacenes', link: '/configuracion/sucursales/' },
								{ label: 'Mi Plan y Facturación', link: '/configuracion/plan/' },
							],
						},
						{
							label: 'Ajustes del POS',
							collapsed: true,
							items: [
								{ label: 'Giro de Negocio', link: '/configuracion/giro/' },
								{ label: 'Catálogo Público Web', link: '/configuracion/catalogo/' },
								{ label: 'Promociones y Descuentos', link: '/configuracion/promociones/' },
							],
						},
						{
							label: 'Fidelización y Crédito',
							collapsed: true,
							items: [
								{ label: 'Fidelidad y Visitas', link: '/configuracion/fidelidad/' },
								{ label: 'Programa de Puntos', link: '/configuracion/puntos/' },
								{ label: 'Fiados y Cuentas por Cobrar', link: '/configuracion/fiados/' },
							],
						},
						{
							label: 'Finanzas y Control',
							collapsed: true,
							items: [
								{ label: 'Inteligencia Financiera', link: '/configuracion/inteligencia/' },
								{ label: 'Egresos de Caja', link: '/configuracion/egresos/' },
								{ label: 'Auditoría de Operaciones', link: '/configuracion/auditoria/' },
								{ label: 'Exportación de Datos (CSV)', link: '/configuracion/exportar/' },
							],
						},
					],
				},
				{
					label: 'Preguntas Frecuentes',
					collapsed: true,
					items: [{ autogenerate: { directory: 'faqs', collapsed: true } }],
				},
			],
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});

