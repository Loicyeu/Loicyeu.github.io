<template>
    <div class="bg-light">
        <div class="container">
            <div class="mt-5 py-5 text-center">

                <SocialItem v-for="(s, index) in social" :key="index"
                            :social-name="s.name" :social-link="s.url" :social-image="s.logo"/>

            </div>
        </div>
        <div class="custom-control custom-switch text-center pb-3 mx-auto">
            <input class="custom-control-input" id="darkMode" type="checkbox">
            <label class="custom-control-label" for="darkMode">Mode sombre</label>
        </div>
        <div class="d-flex justify-content-center pb-3">
            <p>© 2022 Copyright:&nbsp;</p>
            <a href="https://loicyeu.fr">Loicyeu.fr</a>
        </div>
    </div>
</template>

<script>
import SocialItem from "@/components/footer/SocialItem";

export default {
    name: "Footer",
    components: {SocialItem},
    props: {
        social: {
            type: Object,
            required: true
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