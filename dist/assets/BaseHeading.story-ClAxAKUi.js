import { ap as defineComponent, aq as createElementBlock, as as createCommentVNode, at as renderSlot, ar as openBlock, aw as resolveComponent, ax as createBlock, ay as withCtx, az as createVNode, aA as createTextVNode, aB as createBaseVNode, aC as Fragment, aD as renderList, aE as toDisplayString } from "./vendor-BDCGgBjB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseHeading",
  props: {
    tag: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "text-3xl font-semibold"
};
const _hoisted_2$1 = {
  key: 1,
  class: "text-2xl font-semibold"
};
const _hoisted_3$1 = {
  key: 2,
  class: "text-xl font-semibold"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.tag === "h1" ? (openBlock(), createElementBlock("h1", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ])) : $props.tag === "h2" ? (openBlock(), createElementBlock("h2", _hoisted_2$1, [
    renderSlot(_ctx.$slots, "default")
  ])) : $props.tag === "h3" ? (openBlock(), createElementBlock("h3", _hoisted_3$1, [
    renderSlot(_ctx.$slots, "default")
  ])) : createCommentVNode("v-if", true);
}
_sfc_main$1.__file = "src/components/Common/BaseHeading/BaseHeading.vue";
const BaseHeading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/fujimmm331/projects/ThankQ/frontend/src/components/Common/BaseHeading/BaseHeading.vue"]]);
const __default__ = {
  data() {
    return {
      state: {
        tag: "h1",
        text: "サンプル見出し"
      }
    };
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "BaseHeading.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const __returned__ = { tags, BaseHeading };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "space-y-4" };
const _hoisted_2 = { class: "space-y-6" };
const _hoisted_3 = { class: "space-y-3" };
const _hoisted_4 = { class: "ml-4" };
const _hoisted_5 = { class: "ml-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstText = resolveComponent("HstText");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    group: "common",
    layout: { type: "single", iframe: false },
    title: "Common/BaseHeading"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode($setup["BaseHeading"], { tag: "h1" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode(" デフォルトの見出し ")
            ])),
            _: 1,
            __: [2]
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "All Heading Levels" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList($setup.tags, (tag) => {
                return createBaseVNode("div", { key: tag }, [
                  createVNode($setup["BaseHeading"], { tag }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(tag.toUpperCase()) + ": このレベルの見出しです ",
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["tag"])
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
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", null, [
              createVNode($setup["BaseHeading"], { tag: "h1" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode(" メインタイトル ")
                ])),
                _: 1,
                __: [3]
              }),
              _cache[4] || (_cache[4] = createBaseVNode(
                "p",
                { class: "mt-2 text-base-content/70" },
                " これはメインタイトルの例です。最も重要な見出しに使用します。 ",
                -1
                /* HOISTED */
              ))
            ]),
            createBaseVNode("div", null, [
              createVNode($setup["BaseHeading"], { tag: "h2" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode(" セクションタイトル ")
                ])),
                _: 1,
                __: [5]
              }),
              _cache[6] || (_cache[6] = createBaseVNode(
                "p",
                { class: "mt-2 text-base-content/70" },
                " これはセクションタイトルの例です。コンテンツの大きな区分に使用します。 ",
                -1
                /* HOISTED */
              ))
            ]),
            createBaseVNode("div", null, [
              createVNode($setup["BaseHeading"], { tag: "h3" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode(" サブセクションタイトル ")
                ])),
                _: 1,
                __: [7]
              }),
              _cache[8] || (_cache[8] = createBaseVNode(
                "p",
                { class: "mt-2 text-base-content/70" },
                " これはサブセクションタイトルの例です。セクション内の小見出しに使用します。 ",
                -1
                /* HOISTED */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Interactive Example" }, {
        controls: withCtx(() => [
          createVNode(_component_HstSelect, {
            modelValue: $data.state.tag,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.state.tag = $event),
            options: $setup.tags.map((t) => ({ value: t, label: t.toUpperCase() })),
            title: "Tag"
          }, null, 8, ["modelValue", "options"]),
          createVNode(_component_HstText, {
            modelValue: $data.state.text,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.state.text = $event),
            title: "Text"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createVNode($setup["BaseHeading"], {
            tag: $data.state.tag
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
          }, 8, ["tag"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Hierarchy Example" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["BaseHeading"], { tag: "h1" }, {
              default: withCtx(() => _cache[9] || (_cache[9] = [
                createTextVNode(" 1. ドキュメントタイトル ")
              ])),
              _: 1,
              __: [9]
            }),
            createBaseVNode("div", _hoisted_4, [
              createVNode($setup["BaseHeading"], { tag: "h2" }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode(" 1.1 章タイトル ")
                ])),
                _: 1,
                __: [10]
              }),
              createBaseVNode("div", _hoisted_5, [
                createVNode($setup["BaseHeading"], { tag: "h3" }, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createTextVNode(" 1.1.1 節タイトル ")
                  ])),
                  _: 1,
                  __: [11]
                }),
                _cache[12] || (_cache[12] = createBaseVNode(
                  "p",
                  { class: "ml-4 mt-2 text-base-content/70" },
                  " ここに本文が入ります。見出しの階層構造を示すサンプルです。 ",
                  -1
                  /* HOISTED */
                ))
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Common/BaseHeading/BaseHeading.story.vue";
const BaseHeading_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fujimmm331/projects/ThankQ/frontend/src/components/Common/BaseHeading/BaseHeading.story.vue"]]);
export {
  BaseHeading_story as default
};
