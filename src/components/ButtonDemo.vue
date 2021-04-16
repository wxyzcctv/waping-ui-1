<template>
	<div>Button示例</div>
	<h1>示例1</h1>
	<div>
		<Button> 默认 </Button>
		<Button theme="button"> 按鈕 </Button>
		<Button theme="link"> link </Button>
		<Button theme="text"> text </Button>
	</div>
	<h1>示例2</h1>
	<div>
		<Button size="big"> 大按钮 </Button>
		<Button> 普通 </Button>
		<Button size="small"> 小按钮 </Button>
	</div>
	<div>
		<Button theme="link" size="big"> 大按钮 </Button>
		<Button theme="link"> 普通 </Button>
		<Button theme="link" size="small"> 小按钮 </Button>
	</div>
	<div>
		<Button theme="text" size="big"> 大按钮 </Button>
		<Button theme="text"> 普通 </Button>
		<Button theme="text" size="small"> 小按钮 </Button>
	</div>
	<h1>示例3</h1>
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
	<h1>示例4</h1>
	<div>
		<Button disabled> 禁用按鈕 </Button>
		<Button theme="link" :disabled="true"> 禁用链接 </Button>
		<Button theme="text" :disabled="true"> 禁用文本 </Button>
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