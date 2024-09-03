<template>
  <div class="text-size-20">
    {{ textValue }}
  </div>
</template>

<script>
export default {
  name: 'TextSize20',
  props: {
    textValue: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.text-size-20 {
  font-size: 20px;
}
</style>
