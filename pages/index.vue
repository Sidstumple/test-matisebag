<template>
	<section class="container">
		<div>
			<type-writer
				heading="Cyd is gek"
				:wait="showTyping"
				sub="Hahahahahah"
				@doneTyping="show = true">
			</type-writer>

			<form>
				<field-input
					input-type="radio"
					input-name="radio-test"
					input-id="radio"
					label-text="Radio button"
					aria-label="Radio button component code example"/>
				<field-input
					input-type="radio"
					input-name="radio-test"
					input-id="radio2"
					label-text="Radio button2"
					aria-label="Radio button component code example2"/>
				<field-input
					input-type="text"
					input-name="example"
					input-id="text1"
					label-text="Cyd is gek"
					aria-label="Ik weet eigenlijk niet waar dit te zien gaat zijn"/>
			</form>
		</div>
	</section>
</template>

<script>

export default {
}
</script>

<style>

</style>
