<template>
	<nav class="navbar navbar-expand-lg navbar-dark" :class="{'top': onTop}">
		<div class="container">
			<a class="navbar-brand" href="/" data-aos="fade-down-left">O wszystkim i o niczym</a>
			<button
				class="navbar-toggler"
				type="button"
				aria-label="Toggle navigation"
				@click="toggleCollapse()"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				class="collapse navbar-collapse"
				:class="{'show': colapseOpened}"
				id="navbarSupportedContent"
			>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="/">
							Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="http://github.com/Mvtthew" target="_blank">
							<i class="bx bxl-github"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			colapseOpened: false,
			onTop: true
		};
	},
	created() {
		window.addEventListener("scroll", this.checkOnTop);
	},
	methods: {
		toggleCollapse() {
			this.colapseOpened = !this.colapseOpened;
		},
		checkOnTop() {
			if (window.scrollY > 0) {
				this.onTop = false;
			} else {
				this.onTop = true;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: black;
	transition: 0.3s all;
	z-index: 5000;

	&.top {
		background: transparent;
	}
}
</style>