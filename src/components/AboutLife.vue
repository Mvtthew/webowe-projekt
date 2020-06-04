<template>
	<div class="container mt-5 pt-5">
		<div class="row">
			<div class="col-md-6 pr-5">
				<h1 class="mb-4">
					Czym jest życie
					<i class="bx bx-question-mark"></i>
				</h1>
				<p
					data-aos="zoom-in-right"
				>Jak dotąd tak naprawdę nikt jeszcze tego nie wie, nie wyłączając biologii i medycyny. Nikt nie podał dotychczas adekwatnej definicji życia.</p>
				<p class="text-right p-5 m-5 hand" data-aos="zoom-in-left">
					Bóg jest komikiem grającym dla publiczności zbyt przestraszonej,
					<br />by się śmiać.
					<small>- Wolter</small>
				</p>
				<p
					data-aos="zoom-in-left"
				>[...] przez wiele lat świat oczekiwał, że lada chwila uda się materię nieożywioną powołać do życia. Musiało jednak wiele czasu upłynąć, zanim zrozumiano, że nie da się tego osiągnąć, bo życie to proces znacznie ważniejszy i bardziej skomplikowany niż dotychczas przypuszczano. [...]</p>
			</div>
			<div class="col-md-6 photo-1" data-aos="fade-down-right"></div>
		</div>

		<div class="row mt-5 pt-5">
			<div class="col-md-10">
				<div class="all-p">
					<p class="display-1">Strach</p>
					<p class="display-3">Złość</p>
					<p class="display-2">Niepokój</p>
					<p class="display-4">Valorant</p>
					<p class="display-4">Grymas</p>
					<p class="display-4">Spokój</p>
					<p class="display-4">Relacje</p>
					<p class="display-4">Ludzie</p>
					<p class="display-2">Miłość</p>
					<p class="display-4">Dobroć</p>
					<p class="display-1">Zło</p>
					<p class="display-3">Dobro</p>
					<p class="display-4">Złośliwość</p>
					<p class="display-1">Nienawiść</p>
					<p class="display-4">Pożądanie</p>
					<p class="display-2">Plany</p>
					<p class="display-2">Marzenia</p>
					<p class="display-3">Sny</p>
					<p class="display-4">Rodzice</p>
					<p class="display-1">Problemy</p>
					<p class="display-1">Stres</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "about-life",
	created() {
		setTimeout(() => {
			this.moveDreams();

			setInterval(() => {
				this.moveDreams();
			}, 5000);
		}, 10);
	},
	methods: {
		moveDreams() {
			document.querySelectorAll(".all-p p").forEach(parag => {
				parag.style.top = Math.random() * 70 + "%";
				parag.style.left = Math.random() * 90 + "%";
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
.photo-1 {
	background: url("../assets/top-banner.png");
	background-size: contain;
	background-position: left bottom;
}

.all-p {
	width: 100%;
	position: relative;
	height: 300px;
	@media screen and(max-width: 1000px) {
		width: 30%;
		margin-right: auto;
	}

	p {
		position: absolute;
		display: inline-block;
		transition: 4.9s all;
		left: 0;
		top: 0;
		font-family: "Amatic SC";
		opacity: 0.1;
	}
}
</style>