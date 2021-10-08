<template>
	<div>
		<div class="topnavAndBanner">
			<Topnav />
			<div class="banner">
				<h1>风UI</h1>
				<h2>一个简约的UI框架</h2>
				<p class="actions">
					<a
						href="https://github.com/wxyzcctv/waping-ui-1"
						target="_blank"
						>Github</a
					>
					<router-link to="doc">开始</router-link>
				</p>
			</div>
		</div>
		<div class="features">
			<ul>
				<li>
					<svg class="icon">
						<use xlink:href="#icon-Vue"></use>
					</svg>
					<h3>基于 Vue 3</h3>
					<p>使用了 Vue 3 Composition API</p>
				</li>
				<li>
					<svg class="icon">
						<use xlink:href="#icon-Ts"></use>
					</svg>
					<h3>基于 TypeScript</h3>
					<p>源代码采用 TypeScript 书写</p>
				</li>
				<li>
					<svg class="icon">
						<use xlink:href="#icon-easyRead"></use>
					</svg>
					<h3>代码易读</h3>
					<p>每个组件的源代码都非常简洁</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
	components: { Topnav },
};
</script>
<style lang="scss" scoped>
$blue: #0355ff;
$border-radius: 4px;
$color: #647294;
.topnavAndBanner {
	height: 500px;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(247, 221, 217, 1) 100%
	);
	// 方法一
	// border-bottom-left-radius: 50% 40px;
	// border-bottom-right-radius: 50% 40px;
	// 方法二
	clip-path: ellipse(80% 60% at 50% 40%);
	@media (max-width: 600px) {
		height: 300px;
	}
}
.features {
	margin: 64px auto;
	padding: 0 16px;

	@media (min-width: 800px) {
		width: 800px;
		> ul {
			> li {
				width: 50%;
			}
		}
	}
	@media (min-width: 1200px) {
		width: 1200px;
		> ul {
			> li {
				width: 33.3333%;
			}
		}
	}
	> ul {
		display: flex;
		flex-wrap: wrap;
		> li {
			margin: 16px 0;
			display: grid;
			justify-content: start;
			align-content: space-between;
			grid-template-areas:
				"icon title"
				"icon text";
			grid-template-columns: 80px auto;
			grid-template-rows: 1fr auto;

			> svg {
				grid-area: icon;
				width: 64px;
				height: 64px;
			}

			> h3 {
				grid-area: title;
				font-size: 28px;
			}

			> p {
				grid-area: text;
			}
		}
	}
}
.banner {
	color: $color;
	padding: 250px 0;
	@media (max-width: 600px) {
		padding: 100px 0;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	> .actions {
		padding: 8px 0;
		a {
			margin: 0 8px;
			background: $blue;
			color: white;
			display: inline-block;
			padding: 8px 24px;
			border-radius: $border-radius;
			&:hover {
				text-decoration: none;
			}
		}
	}
}
</style>