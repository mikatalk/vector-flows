<template>
  <div id="app">

    <div class="canvas-container" ref="canvas-container"></div>

    <header>
      <span class="prefix">f(x,y) = </span>
      <span class="inputs-wrapper">
        <input 
          v-model="input1" 
          :class="{'invalid':input1Func === null}"
          type="text" />
        <input 
          v-model="input2" 
          :class="{'invalid':input2Func === null}"
          type="text" />
      </span>
      <!-- <button
        @click="evaluate"
        :class="{'invalid':input1Func === null || input2Func === null}">
        Evaluate
      </button>  -->
</header>
    
  </div>
</template>

<script>
import Stage from './engine/Stage'

import { evaluate } from 'mathjs'

const noop = () => 0

export default {
  name: 'App',
  data: () => ({
    // input1: 'x',
    // input2: 'y',
    input1: 'sin(y)-cos(x)',
    input2: 'sin(x)+sin(y)',
    input1Func: noop,
    input2Func: noop,
  }),
  mounted () {
      Stage.initialize(this.$refs['canvas-container'])
      this.input1Func = evaluate(`f(x, y) = ${this.input1}`)
      this.input2Func = evaluate(`f(x, y) = ${this.input2}`)
      Stage.updateFunctions(this.input1Func, this.input2Func)
  },
  beforeDestroy () {
    Stage.destroy()
  },
  watch: {
    input1 () {
      const text = this.input1.trim().toLowerCase()
      if (text === '') {
        this.input1Func = noop
      } else {
        const input = `f(x, y) = ${text}`
        try {
          this.input1Func = evaluate(input)
          this.sendToTracer()
        } catch (error) {
          this.input1Func = null
        }
      }
    },
    input2 () {
      const text = this.input2.trim().toLowerCase()
      if (text === '') {
        this.input2Func = noop
      } else {
        const input = `f(x, y) = ${text}`
        try {
          this.input2Func = evaluate(input)
          this.sendToTracer()
        } catch (error) {
          this.input2Func = null
        }
      }
    }
  },
  methods: {
    sendToTracer () {
      if (this.input1Func && this.input2Func) {
        Stage.updateFunctions(this.input1Func, this.input2Func)
      }
    }
  }
}
</script>

<style lang="scss">
body {
  background: white;
  margin: 0;
  overflow: hidden;
  font-size: 19px;
  .canvas-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    canvas {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
  header {
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    z-index: +1;
    background: rgba(white, 0.8);
    font-family: Bradley Hand, Brush Script MT, Chalkduster, Comic Sans MS;
    font-weight: 100;
    font-size: 2rem;
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .prefix {
    }
    .inputs-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      padding: 0rem 2rem;
      position: relative;
      &:before,
      &:after {
        content: " ";
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        border: 2px solid black;
        width: 1rem;
        border-radius: 4px;
      }
      &:before {
        right: auto;
        left: 0;
        border-right: 4px solid transparent;
      }
      &:after {
        right: 0;
        left: auto;
        border-left: 4px solid transparent;
      }

      input {
        background: transparent;
        outline: none;
        color: black;
        border: none;
        border: 2px solid transparent;
        border-bottom-color: #4c73b4;
        font-size: 1.6rem;
        width: 100%;
        max-width: 160px;
        text-align: center;
        margin: 0.5rem 0;
        transition: all ease-out 1000ms;
        border-radius: 2px;
        font-family: Comic Sans MS;
        font-weight: 100;
        &.invalid,
        &.invalid:focus {
          background: rgba(#ff7364, 0.3);
          border-bottom-color: lighten(#ff7364, 10%);
        }
        &:focus {
          transition: all ease-in 120ms;
          outline: none;
          background: rgba(#4c73b4, 0.3);
          border-bottom-color: lighten(#4c73b4, 10%);
        }
      }
    }
    
    button {
      border: 2px solid #4c73b4;
      border-radius: 5px;
      color: black;
      background: white;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 0.25rem 1rem;
      font-family: Comic Sans MS;
      font-weight: 100;
      transition: all ease-out 500ms;
      cursor: pointer;
      &:hover {
        transition: all ease-in 120ms;
        color: white;
        border: 2px solid darken(#4c73b4, 10%);
        background: rgba(#4c73b4, 0.9);
      }
      &.invalid,
      &.invalid:focus {
        background: rgba(#ff7364, 0.3);
        border-color: lighten(#ff7364, 10%);
        color: lighten(#ff7364, 10%);
        opacity: 0.8;
      }
      &:focus {
        outline: none;
        border: 2px solid darken(#4c73b4, 10%);
        background: rgba(#4c73b4, 0.2);
      }
    }
  }
}
</style>