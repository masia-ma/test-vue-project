<template>
  <div class="about">
    <h1>This is text translate to audio page.</h1>
    <audio :src="audioSrouce" controls ref="audioRef" loop></audio>
    <button @click="play">播放</button>
    <button @click="stop">停止</button>


    <div>
      <h1>new Audio()</h1>
       <button @click="play2">播放</button>
      <button @click="stop2">停止</button>
    </div>
  </div>
</template>

<script>
const audioSrouce = require("@/assets/audio/6027.mp3");
export default {
  data() {
    return {
      audioSrouce,
      audioObj: null
    }
  },
  methods: {
    play() {
      this.$refs.audioRef.play()
    },
    stop() {
      this.$refs.audioRef.pause()
      this.$refs.audioRef.currentTime = 0;
    },
    play2() {
      this.audioObj = new Audio(audioSrouce);
      this.audioObj.controls = true;
      this.audioObj.loop = true;
      this.audioObj.play();
    },
    stop2() {
      this.audioObj.pause();
      this.audioObj = null;
    }
  },
  mounted() {

  }
}
</script>

