<template>
    <div class="container-fluid px-5" id="skills">
        <h1 class="mb-4">COMPÉTENCES</h1>
        <div class="d-flex justify-content-around mb-5">
            <!-- HTML CSS -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de HTML" height="100" :src="`${publicPath}assets/images/logos/HTML5.svg`">
                    <img alt="Logo de CSS" height="100" :src="`${publicPath}assets/images/logos/CSS3.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Bases du web</h5>
                    <p class="card-text text-justify">Réalisation d'un jeu pur CSS, et plusieurs sites en utilisant
                        HTML et CSS. Utilisation du framework CSS Bootstrap.</p>
                    <a class="card-link" href="https://savethefish.loicyeu.fr" target="_blank">Projet SaveTheFish</a>
                </div>
            </div>

            <!-- PHP -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de PHP" height="100" :src="`${publicPath}assets/images/logos/PHP.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Web dynamique</h5>
                    <p class="card-text text-justify">Réalisation d'un 2048 en PHP sans utilisation de Javascript.
                        Utilisation des sessions, des urls longues et des requêtes POST. Utilisation du framework
                        CodeIgniter.</p>
                    <a class="card-link" href="https://2048.loicyeu.fr" target="_blank">Projet 2048</a>
                </div>
            </div>

            <!-- Javascript Node.js -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de JavaScript" height="100" :src="`${publicPath}assets/images/logos/Javascript.svg`">
                    <img alt="Logo de Node.js" height="100" :src="`${publicPath}assets/images/logos/Nodejs.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Web serveur</h5>
                    <p class="card-text text-justify">J'ai réalisé un site utilisant Express permettant de se créer un
                        compte, se connecter et personnaliser son profil.</p>
                    <a class="card-link" data-placement="right" data-toggle="tooltip"
                       href="https://github.com/Loicyeu/loicyeu/tree/front-end-dev" target="_blank"
                       title="Projet non abouti">Projet Loicyeu.fr</a>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-around mb-5">
            <!-- Java -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de Java" height="100" :src="`${publicPath}assets/images/logos/Java.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Prog. orientée objet</h5>
                    <p class="card-text text-justify">Réalisation d'une application JavaFX permettant aux professeurs de
                        classer les dossiers Parcoursup plus facilement.</p>
                    <a class="card-link text-secondary">Projet indisponible</a>
                </div>
            </div>

            <!-- C -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de C" height="100" :src="`${publicPath}assets/images/logos/C.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Prog. procédurale</h5>
                    <p class="card-text text-justify">Réalisation de listes chainées. Utilisation des pointeurs, des
                        interruptions systèmes et des forks.</p>
                </div>
            </div>

            <!-- Python -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de Python" height="100" :src="`${publicPath}assets/images/logos/Python.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Python</h5>
                    <p class="card-text text-justify">Réalisation de divers programmes de probabilités, de statistiques
                        et
                        de mathématiques en général. Utilisation de SciPy, Numpy et Matplotlib.</p>
                </div>
            </div>

            <!-- SQL -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de MySQL" height="100" :src="`${publicPath}assets/images/logos/Mysql.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Base de données</h5>
                    <p class="card-text text-justify">Utilisation de MySQL et Oracle SQL.</p>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-around">
            <!-- Office -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo d'Office" height="100" :src="`${publicPath}assets/images/logos/Office.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Pack Office</h5>
                    <p class="card-text text-justify">Utilisation d'Excel, Word et Powerpoint.</p>
                </div>
            </div>

            <!-- JetBrains -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <a href="https://www.jetbrains.com" target="_blank">
                        <img alt="Logo de JetBrains"
                             height="100"
                             :src="`${publicPath}assets/images/logos/JetBrains.svg`"></a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Suite JetBrains</h5>
                    <p class="card-text text-justify">Utilisation d'IntelliJ IDEA, PhpStorm et WebStorm</p>
                </div>
            </div>

            <!-- Bash -->
            <div class="card pt-3">
                <div class="d-flex justify-content-around">
                    <img alt="Logo de Bash" height="100" :src="`${publicPath}assets/images/logos/Bash.svg`">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Bash</h5>
                    <p class="card-text text-justify">Connaissance de base en Bash et en utilisation de terminaux de
                        commandes.</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    }
};
</script>

<style scoped>

</style>