<template>
	<div>Button示例</div>
	<h1>示例1</h1>
	<div>
		<Button> 默认 </Button>
		<Button theme="button"> 按鈕 </Button>
		<Button theme="link"> link </Button>
		<Button theme="text"> text </Button>
		<Button @click="onClick"> click事件 </Button>
		<Button @focus="onFocus"> focus事件 </Button>
		<Button @mouseenter="onMouseenter"> mouseenter事件 </Button>
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
		<Button disabled> 禁用按钮 </Button>
		<Button theme="link" :disabled="true"> 禁用链接 </Button>
		<Button theme="text" :disabled="true"> 禁用文本 </Button>
	</div>
	<h1>示例5</h1>
	<div>
		<Button loading disabled> 加载中 </Button>
	</div>
	<h1>示例6</h1>
	<div>
		<Button beat="down"> 上下跳动 </Button>
		<Button beat="up"> 上下跳动 </Button>
        <span style="margin-left:32px">
		    <Button beat="left"> 左右跳动 </Button>
        </span>
        <span style="margin-left:32px">
		    <Button beat="right"> 左右跳动 </Button>
        </span>
	</div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
	components: { Button },
	setup(props, context) {
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