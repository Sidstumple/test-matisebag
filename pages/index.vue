<template>
	<section class="container">
		<type-writer
			heading="Type writer"
			:wait="showTyping"
			sub="Hoi"
			@doneTyping="show = true">
		</type-writer>
		<div>
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
		</div>
	</section>
</template>

<script>

export default {
}
</script>

<style>

</style>
