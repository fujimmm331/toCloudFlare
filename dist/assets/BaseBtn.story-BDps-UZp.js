import { ap as defineComponent, aq as createElementBlock, ar as openBlock, as as createCommentVNode, at as renderSlot, au as normalizeClass, av as computed, aw as resolveComponent, ax as createBlock, ay as withCtx, az as createVNode, aA as createTextVNode, aB as createBaseVNode, aC as Fragment, aD as renderList, aE as toDisplayString } from "./vendor-BDCGgBjB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseBtn",
  props: {
    size: { type: String, required: true },
    color: { type: String, required: false },
    variant: { type: String, required: false },
    behavior: { type: String, required: false },
    loading: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const btnColor = computed(() => {
      if (!props.color) return "";
      const colorClass = {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "accent": "btn-accent",
        "info": "btn-info",
        "success": "btn-success",
        "warning": "btn-warning",
        "error": "btn-error",
        "neutral": "btn-neutral",
        "base-100": "btn-base-100",
        "base-200": "btn-base-200",
        "base-300": "btn-base-300"
      };
      return colorClass[props.color];
    });
    const btnSize = computed(() => {
      const sizeClass = {
        "xs": "btn-xs",
        "sm": "btn-sm",
        "md": "btn-md",
        "lg": "btn-lg",
        "xl": "btn-xl"
      };
      return sizeClass[props.size];
    });
    const btnVariant = computed(() => {
      if (!props.variant) {
        return "";
      }
      const variantClass = {
        "active": "btn-active",
        "dash": "btn-dash",
        "link": "btn-link",
        "outline": "btn-outline",
        "soft": "btn-soft"
      };
      return variantClass[props.variant];
    });
    const btnBehavior = computed(() => {
      if (!props.behavior) {
        return "";
      }
      const behaviorClass = {
        "block": "btn-block",
        "circle": "btn-circle",
        "square": "btn-square",
        "wide": "btn-wide"
      };
      return behaviorClass[props.behavior];
    });
    const __returned__ = { props, btnColor, btnSize, btnVariant, btnBehavior };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "loading loading-spinner"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass(["btn", $setup.btnSize, $setup.btnColor, $setup.btnVariant, $setup.btnBehavior])
    },
    [
      $props.loading ? (openBlock(), createElementBlock("span", _hoisted_1$1)) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/Common/BaseBtn/BaseBtn.vue";
const BaseBtn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/fujimmm331/projects/ThankQ/frontend/src/components/Common/BaseBtn/BaseBtn.vue"]]);
const __default__ = {
  data() {
    return {
      state: {
        size: "md",
        color: void 0,
        variant: void 0,
        behavior: void 0,
        loading: false,
        text: "ボタン"
      }
    };
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "BaseBtn.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const sizes = ["xs", "sm", "md", "lg", "xl"];
    const colors = [
      void 0,
      "primary",
      "secondary",
      "accent",
      "info",
      "success",
      "warning",
      "error",
      "neutral",
      "base-100",
      "base-200",
      "base-300"
    ];
    const variants = [void 0, "outline", "dash", "soft", "link", "active"];
    const behaviors = [void 0, "wide", "block", "square", "circle"];
    const __returned__ = { sizes, colors, variants, behaviors, BaseBtn };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex gap-2 items-center" };
const _hoisted_2 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_3 = { class: "flex flex-wrap gap-2" };
const _hoisted_4 = { class: "space-y-2" };
const _hoisted_5 = { class: "flex gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstText = resolveComponent("HstText");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    group: "common",
    layout: { type: "grid", width: "200px" },
    title: "Common/BaseBtn"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["BaseBtn"], { size: "md" }, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode(" ボタン ")
            ])),
            _: 1,
            __: [6]
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Sizes" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.sizes, (size) => {
                return createVNode($setup["BaseBtn"], {
                  key: size,
                  size
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(size),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["size"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Colors" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.colors, (color) => {
                return createVNode($setup["BaseBtn"], {
                  key: color || "default",
                  color,
                  size: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(color || "default"),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["color"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Variants" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.variants, (variant) => {
                return createVNode($setup["BaseBtn"], {
                  key: variant || "default",
                  color: "primary",
                  size: "md",
                  variant
                }, {
                  default: withCtx(() => [
                    createTextVNode(
                      toDisplayString(variant || "default"),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["variant"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Behaviors" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.behaviors, (behavior) => {
                return createBaseVNode("div", {
                  key: behavior || "default",
                  class: "w-full"
                }, [
                  createVNode($setup["BaseBtn"], {
                    behavior,
                    color: "primary",
                    size: "md"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(behavior || "default"),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["behavior"])
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Loading State" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createVNode($setup["BaseBtn"], {
              color: "primary",
              loading: false,
              size: "md"
            }, {
              default: withCtx(() => _cache[7] || (_cache[7] = [
                createTextVNode(" Normal ")
              ])),
              _: 1,
              __: [7]
            }),
            createVNode($setup["BaseBtn"], {
              color: "primary",
              loading: true,
              size: "md"
            }, {
              default: withCtx(() => _cache[8] || (_cache[8] = [
                createTextVNode(" Loading ")
              ])),
              _: 1,
              __: [8]
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Interactive Example" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $data.state.size,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.state.size = $event),
            options: $setup.sizes,
            title: "Size"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $data.state.color,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.state.color = $event),
            options: [{ value: void 0, label: "None" }, ...$setup.colors.filter((c) => c).map((c) => ({ value: c, label: c }))],
            title: "Color"
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $data.state.variant,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.state.variant = $event),
            options: [{ value: void 0, label: "None" }, ...$setup.variants.filter((v) => v).map((v) => ({ value: v, label: v }))],
            title: "Variant"
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstSelect, {
            modelValue: $data.state.behavior,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.state.behavior = $event),
            options: [{ value: void 0, label: "None" }, ...$setup.behaviors.filter((b) => b).map((b) => ({ value: b, label: b }))],
            title: "Behavior"
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $data.state.loading,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.state.loading = $event),
            title: "Loading"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $data.state.text,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.state.text = $event),
            title: "Text"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode($setup["BaseBtn"], {
            behavior: $data.state.behavior,
            color: $data.state.color,
            loading: $data.state.loading,
            size: $data.state.size,
            variant: $data.state.variant
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($data.state.text),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["behavior", "color", "loading", "size", "variant"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Common/BaseBtn/BaseBtn.story.vue";
const BaseBtn_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fujimmm331/projects/ThankQ/frontend/src/components/Common/BaseBtn/BaseBtn.story.vue"]]);
export {
  BaseBtn_story as default
};
