<template>
	<section class="container">
		<div>
			<form action="">
			<field-input

	input-type="radio"
	input-name="radio-test"
	input-id="radio 1"
	label-text="Radio button 1"
	aria-label="Radio button component code example"/>

	<field-input
input-type="radio"
input-name="radio-test"
input-id="radio 2"
label-text="Radio button 2"
aria-label="Radio button component code example"/>

<field-input
input-type="radio"
input-name="radio-test"
input-id="radio 3"
label-text="Radio button 3"
aria-label="Radio button component code example"/>

<field-input
	input-type="text"
	input-name="example"
	input-id="text"
	label-text="Example"
	aria-label="Text input component example"/>
</form>

<type-writer
	heading="HGAHA IK BEN DNENIS!!!"
	:wait="showTyping"
	sub="Gekke componenten enzo "
	@doneTyping="show = true">
</type-writer>
		</div>
	</section>
</template>

<script>

export default {
}
</script>

<style>
.typewriter__title h1 {
	font-size: 1.4rem;
	color: hotpink;
}
</style>
