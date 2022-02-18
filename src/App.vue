<template>
    <Header id="presentation" class="jumbotron overflow-hidden fixed-top"/>
    <BodyContent/>
    <Footer :social="data.social"/>
</template>

<script>
import Header from "@/components/Header";
import BodyContent from "@/components/BodyContent";
import Footer from "@/components/Footer";
import dataJSON from "@/assets/data.json";

export default {
    name: "App",
    components: {Footer, BodyContent, Header},
    data() {
        return {data: dataJSON};
    }
};
</script>

<style>

</style>
