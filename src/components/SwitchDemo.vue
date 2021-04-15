<template>
	<div>
		<Switch :value="label" @input="label = $event" />
	</div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
	components: { Switch },
	setup(props) {
		const label = ref(true);
		return { label };
	},
};
</script>