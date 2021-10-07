<demo>
支持 disabled
</demo>
<template>
	<Switch v-model:value="label" disabled />
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
	components: { Switch },
	setup() {
		const label = ref(false);
		return { label };
	},
};
</script>