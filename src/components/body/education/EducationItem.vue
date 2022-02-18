<template>
    <div class="row mb-3">
        <div class="col-sm-3 d-flex align-items-center">
            <p class="mb-0">{{ date }}</p>
        </div>
        <div class="col-sm-9 d-flex align-items-center">
            <img :alt="diploma" class="mr-2" height="64" :src="`${publicPath}assets/logos/${imageName}`"
                 width="64">
            <div>
                <p class="mb-0"><b>{{ diploma }} </b> – {{ city }}</p>
                <p class="mb-0"><i>{{ description }}</i></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EducationItem",
    props: {
        diploma: String,
        city: String,
        description: String,
        imageName: String,
        date: String
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