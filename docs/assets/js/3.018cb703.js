(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{353:function(t,s,a){t.exports=a.p+"assets/img/type-date-picker.c9cc1bfd.jpg"},354:function(t,s,a){t.exports=a.p+"assets/img/date-picker-1.472ddfa4.jpg"},355:function(t,s,a){t.exports=a.p+"assets/img/date-picker.acdcd95c.jpg"},371:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"组件配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件配置"}},[t._v("#")]),t._v(" 组件配置")]),t._v(" "),n("p",[t._v("表单组件、行组件都是通过"),n("code",[t._v("render-custom-component")]),t._v("进行动态生成的。"),n("br"),t._v("\n每一列的配置中有三处地方可以配置component：")]),t._v(" "),n("ol",[n("li",[t._v("column.form.component = 表单组件配置")]),t._v(" "),n("li",[t._v("column.component = 表格行展示组件配置")]),t._v(" "),n("li",[t._v("column.search.component = 查询表单组件配置")])]),t._v(" "),n("p",[t._v("通过component.name 配置组件名称"),n("br"),t._v("\n通过component.props 配置组件参数"),n("br"),t._v("\n默认监听input和change事件"),n("br"),t._v("\n使用相关组件前，需要通过"),n("code",[t._v("Vue.use")]),t._v(" 或 "),n("code",[t._v("Vue.component")]),t._v("引入组件")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dict-select'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//组件的名称")]),t._v("\n    props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件的配置，具体有哪些参数请查看相关组件的说明文档")]),t._v("\n       multiple"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       elProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果该组件封装了element组件，则此属性下面配置封装组件的配置")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类似的还有 uploader、cropper等")]),t._v("\n       uploader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果该组件封装了uploader，此属性下配置uploader的配置   ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),n("h2",{attrs:{id:"我想要配置组件的某个功能改如何查找文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我想要配置组件的某个功能改如何查找文档"}},[t._v("#")]),t._v(" 我想要配置组件的某个功能改如何查找文档")]),t._v(" "),n("p",[t._v("下面以"),n("code",[t._v("日期选择器禁用今天之前的日期")]),t._v("这个需求为例")]),t._v(" "),n("h3",{attrs:{id:"_1-查看type对应使用的什么组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看type对应使用的什么组件"}},[t._v("#")]),t._v(" 1. 查看type对应使用的什么组件")]),t._v(" "),n("p",[t._v("日期选择器我们配置的 "),n("code",[t._v("type=date")]),n("br"),t._v("\n所以先去"),n("RouterLink",{attrs:{to:"/types.html"}},[t._v("字段类型列表")]),t._v("，查找"),n("code",[t._v("type=date")]),t._v("里面用的是什么组件"),n("br"),t._v("\n在"),n("RouterLink",{attrs:{to:"/types.html#日期时间选择"}},[t._v("日期时间选择")]),t._v("这一条中我们找到了"),n("code",[t._v("type=date")]),t._v("的配置")],1),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    form"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'el-date-picker'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date-format'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" format"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("从这里知道"),n("code",[t._v("type=date")]),t._v("使用的"),n("code",[t._v("el-date-picker")]),t._v("组件")]),t._v(" "),n("h3",{attrs:{id:"_2-查找该组件的文档，确定参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-查找该组件的文档，确定参数"}},[t._v("#")]),t._v(" 2.查找该组件的文档，确定参数")]),t._v(" "),n("p",[t._v("在"),n("RouterLink",{attrs:{to:"/types.html#日期时间选择"}},[t._v("日期时间选择")]),t._v(" 拉到下方"),n("br"),t._v("\n可以看到相关组件的文档链接（如果没有文档链接，请告诉我，我会尽快加上的）")],1),t._v(" "),n("p",[n("img",{attrs:{src:a(353),alt:""}})]),t._v(" "),n("p",[t._v("点击"),n("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/date-picker",target:"_blank",rel:"noopener noreferrer"}},[t._v("el-date-picker"),n("OutboundLink")],1),t._v("\n跳转到elementUI的文档页面，找到禁用日期相关参数")]),t._v(" "),n("p",[n("img",{attrs:{src:a(354),alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(355),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_3-给component添加参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-给component添加参数"}},[t._v("#")]),t._v(" 3.给component添加参数")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("crudOptions")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    columns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'日期'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        form"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              pickerOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("disabledDate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("time")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);