<template>
	<h1>Dialog事例</h1>
	<ExampleDemo :component="DialogDemo1" />
	<ExampleDemo :component="DialogDemo2" />
</template>
<script lang="ts">
import ExampleDemo from "../components/ExampleDemo.vue";
import DialogDemo2 from "./DialogDemo2.vue";
import DialogDemo1 from "./DialogDemo1.vue";
export default {
	components: { ExampleDemo },
	setup(props) {
		return { DialogDemo1, DialogDemo2 };
	},
};
</script>