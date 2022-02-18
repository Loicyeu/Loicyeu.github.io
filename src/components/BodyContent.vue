<template>
    <Skills></Skills>
    <Experience></Experience>
    <Education></Education>
</template>

<script>
import Skills from "@/components/body/Skills";
import Experience from "@/components/body/Experience";
import Education from "@/components/body/Education";

export default {
    name: "BodyContent",
    components: {Education, Experience, Skills}
};
</script>

<style scoped>

</style>