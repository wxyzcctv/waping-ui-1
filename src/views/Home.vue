<template>
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
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
	components: { Topnav },
};
</script>
<style lang="scss" scoped>
.topnavAndBanner {
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(247, 221, 217, 1) 100%
	);
}
.banner {
	padding: 100px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	> .actions {
		padding: 8px 0;
		a {
			margin: 0 8px;
			background: #fff;
			display: inline-block;
			$h: 28px;
			height: $h;
			line-height: $h;
			border-radius: $h/2;
			padding: 0 8px;
		}
	}
}
</style>