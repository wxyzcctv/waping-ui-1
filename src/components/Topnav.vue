<template>
	<div class="topnav">
		<router-link to="/" class="logo">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-zuanshi"></use>
			</svg>
		</router-link>
		<ul class="menu">
			<li>
				<router-link to="/doc">文档</router-link>
			</li>
		</ul>
		<svg
			v-if="toggleMenuButtonVisible"
			class="icon toggleAside"
			aria-hidden="true"
			@click="toggleMenu"
		>
			<use xlink:href="#icon-caidan"></use>
		</svg>
	</div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
	props: {
		toggleMenuButtonVisible: {
			type: Boolean,
			default: false,
		},
	},
	setup() {
		const asideVisible = inject<Ref<boolean>>("asideVisible");
		const toggleMenu = () => {
			asideVisible.value = !asideVisible.value;
		};
		return { toggleMenu };
	},
};
</script>
<style lang="scss" scoped>
$color: #647294;

.topnav {
	color: $color;
	display: flex;
	padding: 16px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	justify-content: center;
	align-items: center;
	> .logo {
		max-width: 6em;
		margin-right: auto;
		> svg {
			width: 32px;
			height: 32px;
		}
	}
	> .menu {
		display: flex;
		white-space: nowrap;
		flex-wrap: nowrap;
		> li {
			margin: 0 1em;
		}
	}
	> .toggleAside {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
		display: none;
	}
	@media (max-width: 500px) {
		> .menu {
			display: none;
		}
		> .logo {
			margin: 0 auto;
		}
		> .toggleAside {
			display: inline-block;
		}
	}
}
</style>