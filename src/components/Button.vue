<template>
    <button :type="type" :disabled="disabled">{{btnTitle}}</button>
</template>

<script>
	export default {
        name: 'Button',
		props: {
            type: {
                type: String,
                required: true,
                default: 'submit'
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
			btnTitle:{
				type: String,
				required: true,
				default: ''
			}
		}
	}
</script>

<style scoped>
    button{
        position: relative;
        width: 200px;
        height: 40px;
        font-weight: bold;
        border-radius: 20px;
        border: none;
        background: linear-gradient(#006aff,#00fafa);
        color: #ffffff;
    }
    button:hover{
        background: linear-gradient(#00fafa,#006aff);
    }
    button:focus{
        outline: none;
        box-shadow: 0px 0px 5px 1px #404040;
    }
    button:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
</style>