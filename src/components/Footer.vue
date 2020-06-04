<template>
	<div class="footer">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<h3 class="text-light">Linki</h3>
					<a href="/">
						<i class="bx bx-chevron-right"></i>
						Link do tej strony
					</a>
					<a href="https://google.com">
						<i class="bx bx-chevron-right"></i>
						Google
					</a>
					<a href="https://youtube.com">
						<i class="bx bx-chevron-right"></i>
						Youtube
					</a>
					<a href="https://twitch.com/levvvy">
						<i class="bx bx-chevron-right"></i>
						Twitch
					</a>
				</div>
				<div class="col-md-6 col-lg-4">
					<h3 class="text-light">
						Więcej
						<small>tych samych</small> linków
					</h3>
					<a href="/">
						<i class="bx bx-chevron-right"></i>
						Link do tej strony
					</a>
					<a href="https://google.com">
						<i class="bx bx-chevron-right"></i>
						Google
					</a>
					<a href="https://youtube.com">
						<i class="bx bx-chevron-right"></i>
						Youtube
					</a>
					<a href="https://twitch.com/levvvy">
						<i class="bx bx-chevron-right"></i>
						Twitch
					</a>
				</div>
				<div class="col-md-12 col-lg-4 text-light">
					&copy; Mateusz Ożóg 2020
					<br />
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCafUOxRBwBsNbSoHg2QRDkmwhIEBnM4YXi18vJY2YxIwVk_Em&usqp=CAU"
						alt="
Pinterest
painting. thinking... how about a crayon drip background and then ..."
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "footer"
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: black;
	padding: 2rem;

	a {
		color: white;
		display: block;
		margin-bottom: 0.2rem;
	}

	img {
		width: 60px;
		height: auto;
	}
}
</style>