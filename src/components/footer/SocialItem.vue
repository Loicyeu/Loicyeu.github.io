<template>
    <a class="mr-5" data-placement="top" data-toggle="tooltip" :href="socialLink" target="_blank" :title="socialName">
        <img :alt="`Logo de ${socialName}`" height="50" :src="`${publicPath}assets/logos/${socialImage}`">
    </a>
</template>

<script>
export default {
    name: "SocialItem",
    props: {
        socialImage: {
            type: String,
            required: true
        },
        socialLink: {
            type: String,
            required: true,
        },
        socialName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    }
};
</script>

<style scoped>

</style>