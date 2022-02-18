<template>
    <div class="container-fluid p-5" id="education">
        <h1 class="mb-4">FORMATION ET DIPLÔMES</h1>

        <ListItem date="2021 à Aujourd'hui" item-title="École d'Ingénieur en Informatique"
                  place="Polytech' Nantes" description="Préparation d'un diplôme d'ingénieur en informatique."
                  image-name="Polytech.svg"/>

        <ListItem date="2019 à 2021" item-title="DUT Informatique" place="Polytech' Nantes / IUT Nantes"
                  description="DUT informatique dans le cadre du Parcours des écoles d'ingénieurs Polytech (prépa intégrée PeiP)."
                  image-name="IUTNantes.svg"/>

        <ListItem date="2016 à 2019" item-title="Baccalauréat STI2D" place="Lycée Jean Perrin, Rezé"
                  description="Bac STI2D spécialité SIN, mention Très Bien." image-name="academieNantes.png"/>

        <ListItem date="2012 à 2016" item-title="Diplôme National du Brevet" place="Collège La Neustrie, Bouguenais"
                  description="Brevet série générale, mention Bien" image-name="academieNantes.png"/>
    </div>
</template>

<script>
import ListItem from "@/components/body/ListItem";

export default {
    name: "Education",
    components: {ListItem},
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    }
};
</script>

<style scoped>

</style>