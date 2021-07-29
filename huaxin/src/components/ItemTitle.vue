<template>
    <div class="w-full">
        <div class="mt-20 flex flex-col items-center h-17.5">
            <div class="flex items-center h-9">
                <div class="w-7.5 h-1 bg-myorange rounded-sm"></div>
                <div class="mx-2.5 leading-9 text-3xl text-mypurple tracking-normal font-bold">{{msg.cntitle}}</div>
                <div class="w-7.5 h-1 bg-myorange rounded-sm"></div>
            </div>
            <div class="mt-2.5 text-lg text-mytitledesc tracking-normal font-bold">{{msg.engtitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        msg: Object
    },
    setup(props, context) {
        const msg = props.msg
        return { msg }
    }
}
</script>

<style lang="scss">

</style>