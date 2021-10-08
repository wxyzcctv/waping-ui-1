<demo>
常规使用
</demo>
<template>
	<Tabs v-model:selected="sel">
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
	setup() {
		const sel = ref("导航1");
		return { sel };
	},
};
</script>