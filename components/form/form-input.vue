<script setup></script>
<template>
    <div class="form-field <?= $item['content']['rules']['required'] === '1' ? 'required' : '' ?> <?= $item['field_style'] ?: 'outlined' ?>">
	<span class="field-title"><?= $item['content']['title'] ?></span>
	<input type="text" placeholder="<?= $item['content']['placeholder'] ?>" name="<?= $item['content']['name'] ?>">
	<span class="error"></span>
</div>
</template>

<style lang="scss" scoped></style>
