<demo>
一键打开 Dialog
</demo>
<template>
	<div>
		<Button @click="showDialog">打开对话框</Button>
	</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { h, ref } from "vue";
export default {
	components: { Button },
	setup() {
		// 通过一个函数的方式进行调用Dialog
		const showDialog = () => {
			openDialog({
				title: h("strong", {}, "标题"),
				content: "你好",
				closeOnClickOverlay: true,
				ok() {
					console.log("ok");
				},
				cancel() {
					console.log("cancle");
				},
			});
		};
		return { showDialog };
	},
};
</script>