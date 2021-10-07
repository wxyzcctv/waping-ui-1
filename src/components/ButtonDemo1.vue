<demo>
常规用法
</demo>
<template>
	<div>
		<Button> 默认 </Button>
		<Button theme="button"> 按鈕 </Button>
		<Button theme="link"> link </Button>
		<Button theme="text"> text </Button>
		<Button @click="onClick"> click事件 </Button>
		<Button @focus="onFocus"> focus事件 </Button>
		<Button @mouseenter="onMouseenter"> mouseenter事件 </Button>
	</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
	components: { Button },
	setup() {
		const onClick = () => {
			console.log("click事件");
		};
		const onFocus = () => {
			console.log("focus事件");
		};
		const onMouseenter = () => {
			console.log("mouseenter事件");
		};
		return { onClick, onFocus, onMouseenter };
	},
};
</script>