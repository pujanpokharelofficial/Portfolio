<script>
</script>

<div
	class="main_container mt-[100px] p-block max-w-[800px] min-h-screen flex space-y-block flex-col m-auto"
>
	<div class="content_section">
		<h1 class="title">Send Message</h1>
		<div class="inputs flex flex-col space-y-standard pt-small">
			<div class="input">
				<div class="lable">email</div>
				<input type="email" name="email" id="email" placeholder="Ex: yourname@domain.com" />
			</div>

			<div class="input">
				<div class="lable">phone number</div>
				<input type="number" name="phone_number" id="phone_number" placeholder="Ex: 986677****" />
			</div>

			<div class="input">
				<div class="lable">Message</div>
				<textarea
					name="Message"
					id="Message"
					placeholder="Ex: I really love what you are doing. Keep doing all these things."
				/>
			</div>

			<div
				class="send_message w-max h-max px-standard py-[15px] rounded-[2px] uppercase font-bold text-info text-white bg-blue-dark"
			>
				send Message
			</div>
		</div>
	</div>
	<div class="content_section">
		<h1 class="title">Socials</h1>
		<p class="mt-small">
			You can contact me at
			<a href="https://www.facebook.com/OfficialPujanPokharel" target="_blank"> facebook, </a>
			<a href="https://www.linkedin.com/in/pujanpokharelofficial" target="_blank"> linkedin, </a>
			<a href="https://www.twitter.com/pujanpokharel22" target="_blank"> twitter, </a>
			<a href="https://www.instagram.com/pujanpokharelofficial/" target="_blank"> instagram, </a>
			<a href="https://www.youtube.com/@PujanPokharelOfficial" target="_blank"> youtube. </a>
		</p>
	</div>
	<div class="content_section">
		<h1 class="title">Contact Number</h1>
		<p class="mt-small">
			<a href="tel:+977 9866776670"> +977 9866776670</a>, this contact number is available for
			contact during office time of Nepal.
		</p>
	</div>
</div>

<style>
	.title {
		font-size: 24px;
		text-transform: uppercase;
		font-weight: bold;
	}
	.lable {
		font-size: 14;
		font-weight: normal;
		color: #474747;
		text-transform: uppercase;
	}
	input,
	textarea {
		margin-top: 5px;
		border: 1px solid #8d8d8d;
		border-radius: 2px;
		padding: 10px 20px;
		width: 100%;
	}
	a {
		color: #3771c8;
	}
</style>
