<demo>
支持 beat
</demo>
<template>
	<div>
		<Button beat="down"> 上下跳动 </Button>
		<Button beat="up"> 上下跳动 </Button>
		<span style="margin-left: 32px">
			<Button beat="left"> 左右跳动 </Button>
		</span>
		<span style="margin-left: 32px">
			<Button beat="right"> 左右跳动 </Button>
		</span>
	</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
	components: { Button },
};
</script>