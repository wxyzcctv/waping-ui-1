<template>
	<div class="layout">
		<Topnav toggleMenuButtonVisible class="nav" />
		<div class="content">
			<aside v-if="asideVisible">
				<h2>文档</h2>
				<ol>
					<li>
						<router-link to="/doc/intro">介绍</router-link>
					</li>
					<li>
						<router-link to="/doc/install">安装</router-link>
					</li>
					<li>
						<router-link to="/doc/get-started"
							>开始使用</router-link
						>
					</li>
				</ol>
				<h2>组件列表</h2>
				<ol>
					<li>
						<router-link to="/doc/switch">Switch 组件</router-link>
					</li>
					<li>
						<router-link to="/doc/button">Button 组件</router-link>
					</li>
					<li>
						<router-link to="/doc/dialog">Dialog 组件</router-link>
					</li>
					<li>
						<router-link to="/doc/tabs">Tabs 组件</router-link>
					</li>
				</ol>
			</aside>
			<main>
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
	components: { Topnav },
	setup() {
		const asideVisible = inject<Ref<boolean>>("asideVisible");
		return { asideVisible };
	},
};
</script>
<style lang="scss" scoped>
$aside-zindex: 10;
// $aside-main-color: #1890ff;
// $active-color: #e6f7ff;
$aside-main-color: #ff6c69;
$active-color: rgba(255, 231, 214, 0.5);
.layout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	> .nav {
		flex-shrink: 0;
		background: #fff;
		box-shadow: 0px 4px 5px -1px rgba(0, 0, 0, 0.2);
	}
	> .content {
		flex-grow: 1;
		padding-top: 120px;
		padding-left: 156px;
		@media (max-width: 500px) {
			padding-left: 0;
		}
	}
}
.content {
	display: flex;
	> aside {
		flex-shrink: 0;
	}
	> main {
		flex-grow: 1;
		padding: 16px;
		background: white;
	}
}
aside {
	background: #fff;
	width: 150px;
	padding: 16px 0;
	position: fixed;
	top: 0;
	left: 0;
	padding-top: 80px;
	height: 100%;
	z-index: $aside-zindex;
	border-right: 1px solid #efefef;
	box-shadow: 2px 0px 5px -1px rgba(0, 0, 0, 0.2);
	> h2 {
		margin-bottom: 4px;
		padding: 10px 16px;
		color: #2d2942;
	}
	> ol {
		> li {
			a {
				display: block;
				padding: 10px 16px;
				text-decoration: none;
				color: #2d2942;
			}
			.router-link-active {
				background: $active-color;
				color: $aside-main-color;
				position: relative;
				&::before {
					position: absolute;
					content: "";
					top: 0;
					right: 0;
					bottom: 0;
					border-right: 3px solid $aside-main-color;
				}
			}
		}
	}
}
main {
	overflow: auto;
}
</style> 