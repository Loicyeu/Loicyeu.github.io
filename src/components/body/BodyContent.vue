<template>
    <Project :projects="projects"></Project>
    <Experience></Experience>
    <Education></Education>
</template>

<script>
import Project from "@/components/body/projects/Project";
import Experience from "@/components/body/experience/Experience";
import Education from "@/components/body/education/Education";

export default {
    name: "BodyContent",
    components: {Project, Education, Experience},
    props: {
        projects: {
            type: Object,
            required: true,
        }
    }
};
</script>

<style scoped>

</style>