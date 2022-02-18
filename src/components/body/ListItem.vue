<template>
    <div class="row mb-3">
        <div class="col-sm-3 d-flex align-items-center">
            <p class="mb-0">{{ date }}</p>
        </div>
        <div class="col-sm-9 d-flex align-items-center">
            <img v-if="hasImage" :alt="itemTitle" class="mr-2 rounded-circle" height="64"
                 :src="`${publicPath}assets/logos/${imageName}`"
                 width="64">
            <div>
                <p class="mb-0"><b>{{ itemTitle }} </b> – {{ place }}</p>
                <p class="mb-0"><i>{{ description }}</i></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListItem",
    props: {
        place: {
            type: String,
            required: true
        },
        itemTitle: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "",
        },
        imageName: {
            type: String,
            default: "",
        }
    },
    computed: {
        hasImage() {
            return this.imageName !== "";
        }
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