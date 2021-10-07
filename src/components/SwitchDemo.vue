<template>
	<div>
		<h1>Switch 组件示例</h1>
		<ExampleDemo :component="SwitchDemo1" />
		<ExampleDemo :component="SwitchDemo2" />
	</div>
</template>
<script lang="ts">
import { ref } from "vue";
import SwitchDemo1 from "../components/Switch.demo1.vue";
import SwitchDemo2 from "../components/Switch.demo2.vue";
import ExampleDemo from "../components/ExampleDemo.vue";
export default {
	components: { ExampleDemo },
	setup(props) {
		const label = ref(true);
		return { label, SwitchDemo1, SwitchDemo2 };
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