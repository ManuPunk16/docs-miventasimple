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
				ThemeSelect: './src/components/AccessibilitySelect.astro',
			},
			head: [
				{ tag: 'meta', attrs: { name: 'google-site-verification', content: 'oB-Z2hnHZOGw4LaVA6sPzDU06jFlWJGDqYVa0cXsVhg' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.miventasimple.com/og-image.png' } },
			],
			sidebar: [
				{
					label: 'Primeros Pasos',
					items: [{ autogenerate: { directory: 'primeros-pasos' } }],
				},
				{
					label: 'Vender y Cobrar',
					items: [{ autogenerate: { directory: 'ventas-caja' } }],
				},
				{
					label: 'Inventario y Productos',
					items: [{ autogenerate: { directory: 'inventario-productos' } }],
				},
				{
					label: 'Configuración de Tienda',
					items: [
						{
							label: 'Administración y Personal',
							items: [
								{ label: 'Perfil de Usuario', link: '/configuracion/perfil/' },
								{ label: 'Usuarios y Roles', link: '/configuracion/usuarios/' },
								{ label: 'Sucursales y Almacenes', link: '/configuracion/sucursales/' },
								{ label: 'Mi Plan y Facturación', link: '/configuracion/plan/' },
							],
						},
						{
							label: 'Ajustes del POS',
							items: [
								{ label: 'Giro de Negocio', link: '/configuracion/giro/' },
								{ label: 'Catálogo Público Web', link: '/configuracion/catalogo/' },
								{ label: 'Promociones y Descuentos', link: '/configuracion/promociones/' },
							],
						},
						{
							label: 'Fidelización y Crédito',
							items: [
								{ label: 'Fidelidad y Visitas', link: '/configuracion/fidelidad/' },
								{ label: 'Programa de Puntos', link: '/configuracion/puntos/' },
								{ label: 'Fiados y Cuentas por Cobrar', link: '/configuracion/fiados/' },
							],
						},
						{
							label: 'Finanzas y Control',
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
					items: [{ autogenerate: { directory: 'faqs' } }],
				},
			],
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});

