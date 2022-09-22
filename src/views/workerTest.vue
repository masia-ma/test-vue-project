<template>
  <div>
    <div>test worker</div>
    <button @click="sendMessage('w1')">w1 sendMessage</button>
    <button @click="sendMessage('w2')">w2 sendMessage</button>
  </div>
</template>

<script>

function workerThreadFunction() {
  let a = 0;

  self.onconnect = (ev) => {
    console.log(ev);
    const port = ev.ports[0];

    port.onmessage = (ev) => {
      console.log("shared-worker-thread-onmessage", ev);
      port.postMessage({
        from: "shared-worker-thread",
        data: a++
      })
    };

    port.start();

    port.postMessage({
      from: "shared-worker-thread",
      data: "shared worker thread connect succeed!"
    })
  }
}

let w1 = null
let w2 = null

export default {
  data() {
    return {
      w: null
    }
  },
  mounted() {
    w1 = this.createWorker();
    w2 = this.createWorker();
  },
  methods: {
    createWorker() {
      const blob = new Blob([`(${workerThreadFunction.toString()})();`]);
      const url = window.URL.createObjectURL(blob);
      const w = new SharedWorker(url, { name: "test-worker" });

      w.port.onmessage = (ev) => {
        console.log("main-onmessage", ev);
      }

      return w;
    },
    sendMessage(who) {
      if (who === "w1") {
        w1.port.postMessage({
          from: "main-thread",
          data: "main thread send message"
        })
      } else {
        w2.port.postMessage({
          from: "main-thread",
          data: "main thread send message"
        })
      }
    }
  }
}
</script>
