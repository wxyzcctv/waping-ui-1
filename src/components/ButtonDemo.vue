<template>
	<h1>Button示例</h1>
	<ExampleDemo :component="ButtonDemo1" />
	<ExampleDemo :component="ButtonDemo2" />
	<ExampleDemo :component="ButtonDemo3" />
	<ExampleDemo :component="ButtonDemo4" />
	<ExampleDemo :component="ButtonDemo5" />
	<ExampleDemo :component="ButtonDemo6" />
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import ExampleDemo from "../components/ExampleDemo.vue";
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo4.vue";
import ButtonDemo5 from "./ButtonDemo5.vue";
import ButtonDemo6 from "./ButtonDemo6.vue";
export default {
	components: { Button, ExampleDemo },
	setup() {
		return {
			ButtonDemo1,
			ButtonDemo2,
			ButtonDemo3,
			ButtonDemo4,
			ButtonDemo5,
			ButtonDemo6,
		};
	},
};
</script>