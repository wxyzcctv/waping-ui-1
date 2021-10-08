<demo>
常规使用
</demo>
<template>
	<div>
		<Button @click="toggle">打开对话框</Button>
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
	</div>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
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
		return { showLog, toggle, f1, f2 };
	},
};
</script>