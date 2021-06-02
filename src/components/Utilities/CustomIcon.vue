<template>
    <lord-icon
        :src="source"
        trigger="loop"
        :colors="`primary:${primaryColor},secondary:${secondaryColor}`"
        :style="`width:${width};height:${height}`">
    </lord-icon>
</template>

<script>
export default {
    props: {
        width: {
            required: false,
            default: '100px'
        },
        height: {
            required: false,
            default: '100px'
        },
        source: {
            required: true
        },
        primaryColor: {
            required: false,
            default: '#ffffff'
        },
        secondaryColor: {
            required: false,
            default: '#E91E63'
        }
    }

}
</script>

<style>

</style>