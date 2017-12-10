<template lang="html">
  <div class="cover" v-show="display">
    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: ['display']
}
</script>

<style scoped>
.cover{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.5);
  z-index: 99999;
}
.spinner {
  -webkit-animation: rotator 1.4s linear infinite;
          animation: rotator 1.4s linear infinite;
  right: 0;
  top: 0;
  left: 0;
  bottom:0;
  position: absolute;
  margin:auto;
}

@-webkit-keyframes rotator {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
}

@keyframes rotator {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
          transform-origin: center;
  -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
          animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
}

@-webkit-keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}

@keyframes colors {
  0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg);
  }
}
@keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg);
  }
}

</style>
