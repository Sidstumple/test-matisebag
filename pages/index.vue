<template>
	<section class="container">
		<div>

			<type-writer
	heading="Tim is een gekkie"
	:wait="showTyping"
	sub="En Jacko ook"
	@doneTyping="show = true">
</type-writer>

		<form>
			<field-input
					input-type="radio"
					input-name="radio-test"
					input-id="radio1"
					label-text="Radio button"
					aria-label="Radio button component code example"/>

		<field-input
				input-type="radio"
				input-name="radio-test"
				input-id="radio2"
				label-text="Radio button"
				aria-label="Radio button component code example"/>

		<field-input
				input-type="radio"
				input-name="radio-test"
				input-id="radio3"
				label-text="Radio button"
				aria-label="Radio button component code example"/>

		<field-input
				input-type="text"
				input-name="example"
				input-id="text"
				label-text="Example"
				aria-label="Text input component example"/>

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
