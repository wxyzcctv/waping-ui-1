<template>
	<div class="topnav">
		<router-link to="/" class="logo">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-zuanshi"></use>
			</svg>
		</router-link>
		<ul class="menu">
			<li>
				<a
					href="https://github.com/wxyzcctv/waping-ui-1"
					target="_blank"
					>github</a
				>
			</li>
			<li>
				<router-link to="/doc">文档</router-link>
			</li>
		</ul>
		<svg
			v-if="toggleMenuButtonVisible"
			class="icon toggleAside"
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
// $color: #647294;
$color: #2d2942;

.topnav {
	color: $color;
	position: fixed;
	display: flex;
	padding: 16px;
	width: 100%;
	z-index: 20;
	justify-content: center;
	align-items: center;
	// -webkit-box-shadow: 0px 4px 5px -1px rgba(0, 0, 0, 0.48);
	// -moz-box-shadow: 0px 4px 5px -1px rgba(0, 0, 0, 0.48);
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
		position: fixed;
		top: 2rem;
		left: 1rem;
		width: 24px;
		height: 24px;
		// position: absolute;
		// left: 16px;
		// top: 50%;
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