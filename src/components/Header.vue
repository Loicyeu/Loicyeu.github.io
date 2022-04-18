<template>
    <div class="d-flex">
        <img alt="Photo de profile" class="mr-4 rounded" height="300" id="profilePicture"
             :src="`${publicPath}assets/images/profile_picture.jpg`">
        <div class="flex-fill">
            <h1 class="display-4">Loïc HENRY</h1>
            <p class="lead mb-0">Étudiant en Informatique</p>
            <hr class="my-4 presentationHide">
            <ul class="presentationHide">
                <li :style="`list-style: url('${publicPath}assets/images/icon/house-door-fill.svg');`">
                    1, Triangle de la Gagnerie, 44340 BOUGUENAIS
                </li>
                <li :style="`list-style: url('${publicPath}assets/images/icon/phone.svg');`">
                    <a href="tel:+782250938">(+33) 07 82 25 09 38</a>
                </li>
                <li :style="`list-style: url('${publicPath}assets/images/icon/envelope-fill.svg');`">
                    <a href="mailto:loic.henry2001@gmail.com">loic.henry2001@gmail.com</a>
                </li>
                <li :style="`list-style: url('${publicPath}assets/images/icon/github.svg');`">
                    <a href="https://github.com/Loicyeu">https://github.com/Loicyeu</a>
                </li>
                <li :style="`list-style: url('${publicPath}assets/images/icon/person-fill.svg');`">20 ans</li>
                <li :style="`list-style: url('${publicPath}assets/images/icon/car-solid.svg');`">Permis B (Véhiculé)</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    }
};
</script>

<style scoped>

</style>