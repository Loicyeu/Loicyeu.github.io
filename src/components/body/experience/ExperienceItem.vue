<template>
    <div class="row mb-3">
        <div class="col-sm-3 d-flex align-items-center">
            <p class="mb-0">{{ date }}</p>
        </div>
        <div class="col-sm-9 d-flex align-items-center">
            <img alt="Logo Viviers de Vendée" class="mr-2 rounded-circle" height="64"
                 :src="`${publicPath}assets/logos/${imageName}`"
                 width="64">
            <div>
                <p class="mb-0"><b>Employé de vente</b> – Les Viviers de Vendée, Bouguenais <br></p>
                <p class="mb-0"><i>Vendeur et conseiller clientèle</i></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExperienceItem",
    props: {
        date: String,
        imageName: String,

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