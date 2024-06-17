<template>
  <component :is="tag" :class="classes" @click="onClick" :style="style">
    {{ text }}<span v-if="showDot" class="t-text-primary">.</span>
  </component>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "typography",

  props: {
    text: {
      type: String,
      required: true,
    },
    showDot: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (value) {
        return (
          [
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "t-text-xl",
            "t-text-lg",
            "t-text-md",
            "t-text-sm",
            "t-text-xs",
          ].indexOf(value) !== -1
        );
      },
      default: "h1",
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);

    return {
      tag: computed(() => (props.type.includes("t-text") ? "p" : props.type)),
      classes: computed(() => {
        if (props.type.includes("p")) {
          return `t-text-${props.type.replace("p-", "")}`;
        } else if (props.type.includes("t-text")) {
          return props.type;
        } else {
          return `hp-title-${props.type}`;
        }
      }),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
