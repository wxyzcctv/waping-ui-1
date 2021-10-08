<template>
	<h1>Tabs 事例</h1>
	<ExampleDemo :component="TabsDemo1" />
</template>
<script lang="ts">
import ExampleDemo from "../components/ExampleDemo.vue";
import TabsDemo1 from "./TabsDemo1.vue";
export default {
	components: { ExampleDemo },
	setup() {
		return { TabsDemo1 };
	},
};
</script>