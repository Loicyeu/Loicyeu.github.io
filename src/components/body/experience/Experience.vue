<template>
    <div class="container-fluid p-5" id="experience">
        <h1 class="mb-4">EXPÉRIENCES PROFESSIONNELLES</h1>

        <ListItem date="Septembre à Décembre 2021" item-title="Employé de vente"
                  place="Les Viviers de Vendée, Bouguenais" description="Vendeur et conseiller clientèle"
                  image-name="viviersDeVendee.png"/>

        <ListItem date="Juillet à Août 2021" item-title="Employé de vente saisonnier"
                  place="Poissonnerie Hennequin-Taraud, Île d’Yeu"
                  description="Employé de vente, manutention et préparation du poisson."
                  image-name="Hennequin-Taraud.jpg"/>

        <ListItem date="Vacances de Noël 2020" item-title="Employé de vente"
                  place="Poissonnerie E. Leclerc Atlantis, St Herblain" image-name="ELeclerc.svg"/>

        <ListItem date="Juillet à Août 2020" item-title="Employé de vente saisonnier"
                  place="Poissonnerie Hennequin, Île d’Yeu"
                  description="Employé de vente, manutention et préparation du poisson." image-name="Hennequin.jpg"/>

        <ListItem date="Décembre 2015" item-title="Stage d’observation" place="SemiTAN, Nantes"
                  description="Semaine de stage d’observation de 3ème, découverte du monde de l’entreprise et de
                        différents corps de métiers" image-name="Semitan.svg"/>

    </div>
</template>

<script>
import ListItem from "@/components/body/ListItem";

export default {
    name: "Experience",
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