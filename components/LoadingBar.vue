<template>
		<div v-if="loading" class="loader-wrap">
			<div class="loader">
				<span class="dot dot-1"></span>
				<span class="dot dot-2"></span>
				<span class="dot dot-3"></span>
				<span class="dot dot-4"></span>
			</div>
		</div>
</template>
<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
				this.$nextTick(() => {
					setTimeout(() => this.loading = false, 500)
					
				})
      }
    }
  }
</script>
<style lang="scss" scoped>
.loader-wrap {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000;
	color: #fff;
}
.loader>span {
  width: 8px;
  height: 8px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: relative;
  margin: 0 2px;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot-1 {
  animation: anim 1s linear 0s infinite;
}

.dot-2 {
  animation: anim 1s linear 0.25s infinite;
}

.dot-3 {
  animation: anim 1s linear 0.50s infinite;
}

.dot-4 {
  animation: anim 1s linear 0.75s infinite;
}

@keyframes anim {
  0% {
    top: 0;
  }

  50% {
    top: 15px;
  }

  100% {
    top: 0;
  }
}

</style>
