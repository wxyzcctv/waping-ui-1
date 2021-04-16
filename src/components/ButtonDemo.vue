<template>
	<div>Button示例</div>
	<h1>示例1</h1>
	<div>
		<Button> 默认 </Button>
		<Button theme="button"> button </Button>
		<Button theme="link"> text </Button>
		<Button theme="text"> link </Button>
	</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
	components: { Button },
	setup(props, context) {
		const onClick = () => {
			console.log("hi");
		};
		return { onClick };
	},
};
</script>