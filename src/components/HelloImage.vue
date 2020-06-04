<template>
	<div class="image">
		<div class="container">
			<div class="text-right" data-aos="fade-up-left" data-aos-duration="1000">
				<h1>ŻYCIE.</h1>
				<p>
					Tragedią życia nie jest śmierć,
					<br />ale to czemu pozwalamy umrzeć w sobie,
					<br />kiedy żyjemy.
				</p>
				<span>— Norman Cousins</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "hello-image"
};
</script>

<style lang="scss" scoped>
.image {
	width: 100%;
	height: 100vh;
	background-color: aqua;
	background: url("../assets/person-standing-near-lake-670720.jpg");
	background-attachment: fixed;
	background-size: cover;

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		h1 {
			color: whitesmoke;
			font-size: 9rem;
			opacity: 0.8;
			font-family: "Amatic SC";
		}

		p {
			font-size: 1.2rem;
			color: whitesmoke;
			opacity: 0.8;
		}

		span {
			color: whitesmoke;
			opacity: 0.7;
		}
	}
}
</style>