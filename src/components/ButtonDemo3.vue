<demo>
支持 level
</demo>
<template>
	<div>
		<Button level="main"> 主要按钮 </Button>
		<Button> 普通按钮 </Button>
		<Button level="safe"> 安全按钮 </Button>
		<Button level="warning"> 警告按钮 </Button>
		<Button level="danger"> 危险按钮 </Button>
	</div>
	<div>
		<Button theme="link" level="main"> 主要链接 </Button>
		<Button theme="link"> 普通链接 </Button>
		<Button theme="link" level="safe"> 安全链接 </Button>
		<Button theme="link" level="warning"> 警告链接 </Button>
		<Button theme="link" level="danger"> 危险链接 </Button>
	</div>
	<div>
		<Button theme="text" level="main"> 主要文本按钮 </Button>
		<Button theme="text"> 普通文本按钮 </Button>
		<Button theme="text" level="safe"> 安全文本按钮 </Button>
		<Button theme="text" level="warning"> 警告文本按钮 </Button>
		<Button theme="text" level="danger"> 危险文本按钮 </Button>
	</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
	components: { Button },
};
</script>