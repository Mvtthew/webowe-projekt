<template>
	<div id="app">
		<navbar></navbar>
		<hello-image></hello-image>
		<main>
			<about-life></about-life>
			<quotes></quotes>
		</main>
		<Form></Form>
		<Footer></Footer>
	</div>
</template>

<script>
import HelloImage from "./components/HelloImage.vue";
import Navbar from "./components/Navbar.vue";
import Quotes from "./components/Quotes.vue";
import AboutLife from "./components/AboutLife.vue";
import Footer from "./components/Footer.vue";
import Form from "./components/Form.vue";

export default {
	name: "App",
	components: {
		Quotes,
		HelloImage,
		Navbar,
		AboutLife,
		Footer,
		Form
	}
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/boxicons/css/boxicons.min.css";

@import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");

html {
	font-size: 1rem;
}

#app {
	font-family: "Dosis";
}

.hand {
	font-family: "Amatic SC";
	font-size: 2rem;
	line-height: 1.8rem;
}

[data-scroll] {
	transition: opacity 1s;
}

[data-scroll="in"] {
	opacity: 1;
}

[data-scroll="out"] {
	opacity: 0;
}
</style>
