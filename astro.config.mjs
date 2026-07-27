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
			],
			sidebar: [
				{
					label: 'Primeros Pasos',
					collapsed: false,
					items: [{ autogenerate: { directory: 'primeros-pasos' } }],
				},
				{
					label: 'Punto de Venta (POS)',
					collapsed: true,
					items: [{ autogenerate: { directory: 'punto-de-venta' } }],
				},
				{
					label: 'Control de Inventario',
					collapsed: true,
					items: [{ autogenerate: { directory: 'inventario-y-productos' } }],
				},
				{
					label: 'Clientes y Fidelidad',
					collapsed: true,
					items: [{ autogenerate: { directory: 'clientes-y-fidelidad' } }],
				},
				{
					label: 'Compras y Proveedores',
					collapsed: true,
					items: [{ autogenerate: { directory: 'compras-y-proveedores' } }],
				},
				{
					label: 'Giros Especializados',
					collapsed: true,
					items: [{ autogenerate: { directory: 'giros-especializados' } }],
				},
				{
					label: 'Reportes y Auditoría',
					collapsed: true,
					items: [{ autogenerate: { directory: 'reportes-y-auditoria' } }],
				},
				{
					label: 'Facturación y Cuenta',
					collapsed: true,
					items: [{ autogenerate: { directory: 'facturacion-y-cuenta' } }],
				},
				{
					label: 'Hardware y Periféricos',
					collapsed: true,
					items: [{ autogenerate: { directory: 'hardware-y-perifericos' } }],
				},
			],
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});

