<template v-if="hasSkills">
    <hr class="my-0">
    <div class="d-flex justify-content-around">
        <div v-for="skill in skills" :key="skill.name" class="flex-fill pt-3 pb-2" :class="classActive(skill.name)"
             @click="skillClicked(skill.name)">
            <img :src="`${publicPath}assets/images/logos/${skill.image}`" :alt="skill.name" height="64"
                 :title="skill.name" class="d-block mx-auto">
        </div>
    </div>
    <hr class="my-0">
</template>

<script>
import {store} from "@/components/body/projects/store";

export default {
    name: "SkillList",
    props: {
        skills: {
            type: Object,
            required: true
        }
    },
    methods: {
        classActive(skill) {
            return {active: this.store.actives.includes(skill)};
        },
        skillClicked(skill) {
            if (this.store.actives.includes(skill)) {
                this.store.actives = this.store.actives.filter(value => value !== skill);
            } else {
                this.store.actives.push(skill);
            }
        }
    },
    computed: {
        hasSkills() {
            return this.skills.length >= 1;
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
div.flex-fill {
    border-bottom: 0.5rem solid transparent;
}

div.flex-fill.active {
    border-bottom: 0.5rem solid rgba(0, 0, 0, 0.1);
}

div.flex-fill:hover {
    border-bottom: 0.5rem solid rgba(0, 0, 0, 0.2);
}
</style>