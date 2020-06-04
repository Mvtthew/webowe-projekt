<template>
	<div class="container mb-5 pb-5">
		<div class="row">
			<div class="col-lg-7 ml-auto">
				<div class="card">
					<div class="card-header">
						<h1 class="mb-0">Kontakt</h1>
					</div>
					<div class="card-body">
						<div class="form-group">
							<label for="name">Twoje imię</label>
							<input type="text" name="name" id="name" class="form-control" placeholder="Jan" />
						</div>
						<div class="form-group">
							<label for="surname">Twoje nazwisko</label>
							<input type="text" name="surname" id="surname" class="form-control" placeholder="Kowalski" />
						</div>
						<div class="form-group">
							<label for="nickname">Twoje przezwisko</label>
							<input type="text" name="nickname" id="nickname" class="form-control" />
						</div>
						<div class="form-group">
							<label for="message">Twoja wiadomość</label>
							<textarea name="message" id="message" rows="5" class="form-control" placeholder="Aa..."></textarea>
						</div>
						<div class="text-right">
							<button class="btn btn-success">
								Wyślij wiadomość
								<i class="bx bx-envelope"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>