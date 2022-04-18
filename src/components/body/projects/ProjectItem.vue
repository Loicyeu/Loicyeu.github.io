<template>
    <div>
        <div class="d-flex justify-content-between">
            <h5 class="mb-0">{{ project.name }}</h5>
            <div class="d-flex">
                <img v-for="skill in project.skills" :key="skill" class="mr-2"
                     :src="`${publicPath}assets/images/logos/${skills[skill].image}`" alt="" height="32">
            </div>
        </div>
        <p class="mb-1 text-justify">{{ project.description }}</p>
        <a v-if="hasGit" :href="project.git" class="text-decoration-none" target="_blank">
            <img :src="`${publicPath}assets/images/social/Github.svg`" alt="Git logo" height="20"
                 class="align-text-bottom mr-1">
            Voir le dépôt git
        </a>
<!--        <hr class="mt-2">-->
    </div>
</template>

<script>
export default {
    name: "ProjectItem",
    props: {
        project: {
            type: Object,
            required: true
        },
        skills: {
            type: Object
        }
    },
    computed: {
        hasGit() {
            return Object.prototype.hasOwnProperty.call(this.project, "git");
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