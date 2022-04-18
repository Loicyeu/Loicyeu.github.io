<template>
    <div class="container-fluid p-5" id="projects">
        <h1 class="mb-4">PROJETS</h1>
        <Skills :skills="projects.skills"/>
        <div v-if="hasProjects" class="bg-light rounded-bottom">
            <div class="container p-4">
                <div v-for="(project, index) in getDisplayProjects" :key="project.name">
                    <ProjectItem :project="project" :skills="projects.skills" class=""/>
                    <hr v-if="index !== projectsSize-1" class="my-4">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Skills from "@/components/body/projects/Skills";
import ProjectItem from "@/components/body/projects/ProjectItem";
import {store} from "@/components/body/projects/store";

export default {
    name: "Project",
    components: {Skills, ProjectItem},

    props: {
        projects: {
            type: Object,
            required: true
        }
    },
    computed: {
        hasProjects() {
            return this.projects.projects.filter(project => project.skills.some(skill => this.store.actives.includes(skill))).length > 0;
        },
        projectsSize() {
            return this.projects.projects.filter(project => project.skills.some(skill => this.store.actives.includes(skill))).length;
        },
        getDisplayProjects() {
            return this.projects.projects.filter(project => project.skills.some(skill => this.store.actives.includes(skill)));
        }
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            store,
        };
    }
};
</script>

<style scoped>

</style>