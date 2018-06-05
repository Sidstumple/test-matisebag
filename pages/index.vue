<template>
	<section class="container">
		<div>
			<form action="">
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
					input-type="text"
					input-name="example"
					input-id="text"
					label-text="Example"
					aria-label="Text input component example"/>
			</form>		
		<type-writer
		heading="Cyd is gek"
		:wait="showTyping"
		sub="This is the subtext"
		@doneTyping="show = true">
	</type-writer>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style>
</style>
