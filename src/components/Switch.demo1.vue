<demo>
常规用法
</demo>
<template>
	<Switch v-model:value="label" />
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
	components: { Switch },
	setup() {
		const label = ref(true);
		return { label };
	},
};
</script>