<template>
	<div>Dialog事例</div>
	<h1>事例1</h1>
	<Button @click="toggle">toggle</Button>
	<Dialog
		v-model:visible="showLog"
		:closeOnClickOverlay="false"
		:ok="f1"
		:cancel="f2"
	>
		<template v-slot:title> <strong> 加粗标题 </strong> </template>
		<template v-slot:content>
			<div>以下文字是加粗的</div>
			<strong>你好</strong>
		</template>
	</Dialog>
	<h1>事例2</h1>
	<Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { h, ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
	components: { Dialog, Button },
	setup(props) {
		const showLog = ref(false);
		const toggle = () => {
			showLog.value = !showLog.value;
		};
		const f1 = () => {
			return false;
		};
		const f2 = () => {};
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
		return { showLog, toggle, f1, f2, showDialog };
	},
};
</script>