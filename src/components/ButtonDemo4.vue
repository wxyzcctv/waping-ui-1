<demo>
支持 disabled
</demo>
<template>
	<div>
		<Button disabled> 禁用按钮 </Button>
		<Button theme="link" :disabled="true"> 禁用链接 </Button>
		<Button theme="text" :disabled="true"> 禁用文本 </Button>
	</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
	components: { Button },
};
</script>