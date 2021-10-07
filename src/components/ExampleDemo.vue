<template>
	<div class="demo">
		<h2>{{ component.__sourceCodeTitle }}</h2>
		<div class="demo-component">
			<component :is="component" />
		</div>
		<div class="demo-actions">
			<Button @click="showCode">查看代码</Button>
		</div>
		<div class="demo-code" v-if="demoCodeVisibel">
			<pre class="language-html" v-html="html" />
		</div>
	</div>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
export default {
	components: { Button },
	props: {
		component: Object,
	},
	setup(props) {
		const html = ref<string>("");
		html.value = Prism.highlight(
			props.component.__sourceCode,
			Prism.languages.html,
			"html"
		);
		const demoCodeVisibel = ref<boolean>(false);
		const showCode = () => {
			demoCodeVisibel.value = !demoCodeVisibel.value;
		};
		return { html, Prism, demoCodeVisibel, showCode };
	},
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
	border: 1px solid $border-color;
	margin: 16px 0 32px;
	> h2 {
		font-size: 20px;
		padding: 8px 16px;
		border-bottom: 1px solid $border-color;
	}
	&-component {
		padding: 16px;
	}
	&-actions {
		padding: 8px 16px;
		border-top: 1px dashed $border-color;
	}
	&-code {
		padding: 8px 16px;
		border-top: 1px dashed $border-color;
		> pre {
			line-height: 1.1;
			font-family: Consolas, "Courier New", Courier, monospace;
			margin: 0;
		}
	}
}
</style>