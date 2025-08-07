import { ap as defineComponent, aq as createElementBlock, at as renderSlot, au as normalizeClass, av as computed, ar as openBlock, aw as resolveComponent, ax as createBlock, ay as withCtx, az as createVNode, aB as createBaseVNode, aC as Fragment, aD as renderList, aE as toDisplayString, as as createCommentVNode } from "./vendor-BDCGgBjB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseCard",
  props: {
    shadow: { type: String, required: false },
    bgColor: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const shadow = computed(() => {
      if (!props.shadow) return "";
      const _shadow = {
        "xs": "shadow-xs",
        "sm": "shadow-sm",
        "md": "shadow-md",
        "lg": "shadow-lg",
        "xl": "shadow-xl"
      };
      return _shadow[props.shadow];
    });
    const __returned__ = { props, shadow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["card bg-base-200 p-4", [$setup.shadow]])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/components/Common/BaseCard/BaseCard.vue";
const BaseCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/fujimmm331/projects/ThankQ/frontend/src/components/Common/BaseCard/BaseCard.vue"]]);
const __default__ = {
  data() {
    return {
      state: {
        shadow: "md",
        title: "カードタイトル",
        content: "カードの内容です。ここに任意のコンテンツを配置できます。"
      }
    };
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "BaseCard.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const shadows = [void 0, "xs", "sm", "md", "lg", "xl"];
    const bgColors = [
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
    const __returned__ = { shadows, bgColors, BaseCard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "space-y-4" };
const _hoisted_2 = { class: "font-semibold" };
const _hoisted_3 = { class: "text-sm" };
const _hoisted_4 = { class: "space-y-4" };
const _hoisted_5 = {
  key: 0,
  class: "text-lg font-bold"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstTextarea = resolveComponent("HstTextarea");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    group: "common",
    layout: { type: "grid", width: "300px" },
    title: "Common/BaseCard"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["BaseCard"], null, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createBaseVNode(
                "h3",
                { class: "text-lg font-bold" },
                " カードタイトル ",
                -1
                /* HOISTED */
              ),
              createBaseVNode(
                "p",
                { class: "mt-2" },
                " カードの内容です。ここに任意のコンテンツを配置できます。 ",
                -1
                /* HOISTED */
              )
            ])),
            _: 1,
            __: [3]
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Shadow Variations" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.shadows, (shadow) => {
                return createBaseVNode("div", {
                  key: shadow || "none"
                }, [
                  createVNode($setup["BaseCard"], { shadow }, {
                    default: withCtx(() => [
                      createBaseVNode(
                        "h4",
                        _hoisted_2,
                        " Shadow: " + toDisplayString(shadow || "none"),
                        1
                        /* TEXT */
                      ),
                      createBaseVNode(
                        "p",
                        _hoisted_3,
                        " シャドウサイズ「" + toDisplayString(shadow || "なし") + "」のカードです。 ",
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["shadow"])
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
      createVNode(_component_Variant, { title: "Content Examples" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode($setup["BaseCard"], { shadow: "md" }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createBaseVNode(
                  "div",
                  { class: "flex items-center gap-3" },
                  [
                    createBaseVNode("div", { class: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold" }, " U "),
                    createBaseVNode("div", null, [
                      createBaseVNode("h4", { class: "font-semibold" }, " ユーザー情報 "),
                      createBaseVNode("p", { class: "text-sm text-base-content/70" }, " user@example.com ")
                    ])
                  ],
                  -1
                  /* HOISTED */
                )
              ])),
              _: 1,
              __: [4]
            }),
            createVNode($setup["BaseCard"], { shadow: "lg" }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createBaseVNode(
                  "h3",
                  { class: "text-lg font-bold mb-3" },
                  " 統計情報 ",
                  -1
                  /* HOISTED */
                ),
                createBaseVNode(
                  "div",
                  { class: "grid grid-cols-2 gap-4" },
                  [
                    createBaseVNode("div", { class: "text-center" }, [
                      createBaseVNode("div", { class: "text-2xl font-bold text-primary" }, " 1,234 "),
                      createBaseVNode("div", { class: "text-sm text-base-content/70" }, " 訪問者数 ")
                    ]),
                    createBaseVNode("div", { class: "text-center" }, [
                      createBaseVNode("div", { class: "text-2xl font-bold text-success" }, " 567 "),
                      createBaseVNode("div", { class: "text-sm text-base-content/70" }, " コンバージョン ")
                    ])
                  ],
                  -1
                  /* HOISTED */
                )
              ])),
              _: 1,
              __: [5]
            }),
            createVNode($setup["BaseCard"], { shadow: "sm" }, {
              default: withCtx(() => _cache[6] || (_cache[6] = [
                createBaseVNode(
                  "div",
                  { class: "flex items-center justify-between" },
                  [
                    createBaseVNode("div", null, [
                      createBaseVNode("h4", { class: "font-semibold" }, " 通知設定 "),
                      createBaseVNode("p", { class: "text-sm text-base-content/70" }, " メール通知を受け取る ")
                    ]),
                    createBaseVNode("input", {
                      checked: "",
                      class: "toggle toggle-primary",
                      type: "checkbox"
                    })
                  ],
                  -1
                  /* HOISTED */
                )
              ])),
              _: 1,
              __: [6]
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Interactive Example" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $data.state.shadow,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.state.shadow = $event),
            options: [{ value: void 0, label: "None" }, ...$setup.shadows.filter((s) => s).map((s) => ({ value: s, label: s }))],
            title: "Shadow"
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $data.state.title,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.state.title = $event),
            title: "Title"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstTextarea, {
            modelValue: $data.state.content,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.state.content = $event),
            title: "Content"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode($setup["BaseCard"], {
            shadow: $data.state.shadow
          }, {
            default: withCtx(() => [
              $data.state.title ? (openBlock(), createElementBlock(
                "h3",
                _hoisted_5,
                toDisplayString($data.state.title),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true),
              $data.state.content ? (openBlock(), createElementBlock(
                "p",
                {
                  key: 1,
                  class: normalizeClass($data.state.title ? "mt-2" : "")
                },
                toDisplayString($data.state.content),
                3
                /* TEXT, CLASS */
              )) : createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["shadow"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Common/BaseCard/BaseCard.story.vue";
const BaseCard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fujimmm331/projects/ThankQ/frontend/src/components/Common/BaseCard/BaseCard.story.vue"]]);
export {
  BaseCard_story as default
};
