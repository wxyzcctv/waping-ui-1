<template>
	<div>Tabs 事例</div>
	<h1>事例1</h1>
	<Tabs v-model:selected="x">
		<Tab title="导航1">内容一</Tab>
		<Tab title="导航2">内容二</Tab>
	</Tabs>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
	components: { Tabs, Tab },
	setup(props) {
		const x = ref("导航1");
		return { x };
	},
};
</script>