<template>
  <div>
    <p>You're on post with the ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>

export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>