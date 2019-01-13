(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c499294a"],{3278:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form"},[a("section",{staticClass:"x-switch"},[a("h1",{ref:"switch",staticClass:"title"},[t._v("Switch 开关")]),t._m(0),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("x-switch",{model:{value:t.type1,callback:function(s){t.type1=s},expression:"type1"}}),a("br"),a("x-switch",{attrs:{disabled:""}}),a("br"),a("x-switch",{attrs:{"false-color":"black","true-color":"blue"},model:{value:t.type2,callback:function(s){t.type2=s},expression:"type2"}}),a("br"),a("x-switch",{attrs:{"false-text":"按月付费","true-text":"按年付费"},model:{value:t.type3,callback:function(s){t.type3=s},expression:"type3"}})],1),t._m(1)]),a("h2",[t._v("Attributes")]),t._m(2),a("h2",[t._v("Events")]),t._m(3)]),a("section",{staticClass:"x-input"},[a("h2",{ref:"input",staticClass:"title"},[t._v("Iput 输入框")]),t._m(4),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("div",{staticClass:"wrapper"},[a("x-input",{attrs:{placeholder:"请输入"}}),a("x-input",{attrs:{icon:"user",placeholder:"请输入用户名"}}),a("x-input",{attrs:{icon:"lock"},model:{value:t.someString,callback:function(s){t.someString=s},expression:"someString"}}),a("span",[t._v(t._s(t.someString))]),a("x-input",{attrs:{disabled:"",value:"禁用状态"}}),a("x-input",{attrs:{error:"",value:"错误状态"}}),a("x-input",{attrs:{type:"textarea"}})],1)]),t._m(5)]),a("h2",[t._v("Attributes")]),t._m(6)]),a("section",{staticClass:"x-radio"},[a("h1",{ref:"radio",staticClass:"title"},[t._v("Radio 单选框")]),a("p",{staticClass:"des"},[t._v("\n        适用于在多个互斥的选项中选择的场景。\n      ")]),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("x-radio",{attrs:{options:t.options},on:{"value-change":function(s){t.radioOnChange(s)}}}),a("br"),a("x-radio",{attrs:{options:t.options,vertical:""},on:{"value-change":function(s){t.radioOnChange(s)}}})],1),t._m(7)]),a("h2",[t._v("Attributes")]),t._m(8),a("h2",[t._v("Events")]),t._m(9)]),a("section",{staticClass:"x-cascader"},[a("h2",{ref:"cascader",staticClass:"title"},[t._v("Cascader 级联选择器")]),t._m(10),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example",staticStyle:{display:"flex","jusitfy-content":"flex-start","align-items":"center"}},[a("x-cascader",{attrs:{source:t.shcool,selected:t.selected},on:{"update:selected":function(s){t.selected=s}}})],1),t._m(11)]),a("h2",[t._v("Attributes")]),t._m(12)]),a("section",{staticClass:"x-date-picker"},[a("h2",{ref:"datepicker",staticClass:"title"},[t._v("DatePicker 日期选择器")]),t._m(13),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("x-date-picker",{attrs:{"default-value":t.today},model:{value:t.date,callback:function(s){t.date=s},expression:"date"}})],1),a("p",{staticClass:"des"},[t._v("当前所选日期为："),a("span",{staticClass:"code"},[t._v(t._s(t.date))])]),t._m(14)]),a("h2",[t._v("Attributes")]),t._m(15)]),a("section",{staticClass:"x-time-picker"},[a("h2",{ref:"timepicker",staticClass:"title"},[t._v("TimePicker 时间选择器")]),t._m(16),a("h2",[t._v("基础用法")]),a("div",{staticClass:"container"},[a("div",{staticClass:"example"},[a("x-time-picker",{attrs:{"default-value":"12:00:00"},model:{value:t.time,callback:function(s){t.time=s},expression:"time"}})],1),a("p",{staticClass:"des"},[t._v("当前所选时间为："),a("span",{staticClass:"code"},[t._v(t._s(t.time))])]),t._m(17)]),a("h2",[t._v("Attributes")]),t._m(18)]),a("x-linker",{attrs:{back:{path:"components/basic/icon",text:"基础"},to:{path:"components/layout/grid",text:"布局"}}})],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[t._v("\n        在两种状态间切换时用到的开关选择器。使用"),a("span",{staticClass:"code"},[t._v("v-model")]),t._v("绑定一个布尔值，或者监听"),a("span",{staticClass:"code"},[t._v("on-change")]),t._v("事件，滑块在左侧时值为"),a("span",{staticClass:"code"},[t._v("false")]),t._v("，滑块在右侧时值为"),a("span",{staticClass:"code"},[t._v("true")]),t._v("。\n      ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-switch")]),t._v(" "),a("span",{staticClass:"key"},[t._v("v-model")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"type1"')]),a("span",{staticClass:"tag"},[t._v("></x-switch>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-switch")]),t._v(" "),a("span",{staticClass:"key"},[t._v("disabled")]),a("span",{staticClass:"tag"},[t._v("></x-switch>")]),a("br"),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-switch")]),t._v("\n        "),a("span",{staticClass:"key"},[t._v("v-model")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"type2"')]),t._v(" \n        "),a("span",{staticClass:"key"},[t._v("false-color")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"black"')]),t._v(" \n        "),a("span",{staticClass:"key"},[t._v("true-color")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"blue"')]),a("span",{staticClass:"tag"},[t._v(">\n</x-switch>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-switch")]),t._v(" \n        "),a("span",{staticClass:"key"},[t._v("false-text")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"按月付费"')]),t._v(" \n        "),a("span",{staticClass:"key"},[t._v("true-text")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"按年付费"')]),t._v(" \n        "),a("span",{staticClass:"key"},[t._v("v-model")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"type3"')]),a("span",{staticClass:"tag"},[t._v(">\n</x-switch>")]),t._v("\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("x-width")]),a("td",{staticClass:"des"},[t._v("switch 开关的宽度")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("40px")])]),a("tr",[a("td",[t._v("disabled")]),a("td",{staticClass:"des"},[t._v("禁用状态")]),a("td",{staticClass:"type"},[t._v("Boolean")]),a("td",[t._v("——")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("false-color / true-color")]),a("td",{staticClass:"des"},[t._v("switch 开关不同状态对应的背景颜色")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("false-text / true-text")]),a("td",{staticClass:"des"},[t._v("switch 开关不同状态对应的提示文字")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[t._v("value-change")]),a("td",{staticClass:"des"},[t._v("value 改变时触发")]),a("td",{staticClass:"type"},[t._v("改变后的 value 值")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[t._v("\n        基础表单组件，支持"),a("span",{staticClass:"code"},[t._v("v-model")]),t._v("绑定和原生事件。\n      ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-input")]),t._v(" "),a("span",{staticClass:"key"},[t._v("placeholder")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"请输入"')]),a("span",{staticClass:"tag"},[t._v("></x-input>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-input")]),t._v(" "),a("span",{staticClass:"key"},[t._v("icon")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"username"')]),t._v(" "),a("span",{staticClass:"key"},[t._v("placeholder")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"请输入用户名"')]),a("span",{staticClass:"tag"},[t._v("></x-input>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-input")]),t._v(" "),a("span",{staticClass:"key"},[t._v("icon")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"lock"')]),t._v(" "),a("span",{staticClass:"key"},[t._v("v-model")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"someString"')]),a("span",{staticClass:"tag"},[t._v("></x-input>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-input")]),t._v(" "),a("span",{staticClass:"key"},[t._v("disabled")]),a("span",{staticClass:"tag"},[t._v("></x-input>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-input")]),t._v(" "),a("span",{staticClass:"key"},[t._v("error")]),a("span",{staticClass:"tag"},[t._v("></x-input>")]),t._v("\n"),a("span",{staticClass:"tag"},[t._v("<x-input")]),t._v(" "),a("span",{staticClass:"key"},[t._v("type")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"textarea"')]),a("span",{staticClass:"tag"},[t._v("></x-input>")]),t._v("\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("placeholder")]),a("td",{staticClass:"des"},[t._v("原生属性")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("type")]),a("td",{staticClass:"des"},[t._v("原生属性(当type为textarea时渲染为文本输入框)")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("icon")]),a("td",{staticClass:"des"},[t._v("icon 图标名")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("disabled")]),a("td",{staticClass:"des"},[t._v("disabled 状态")]),a("td",{staticClass:"type"},[t._v("Boolean")]),a("td",[t._v("——")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("error")]),a("td",{staticClass:"des"},[t._v("error 状态")]),a("td",{staticClass:"type"},[t._v("Boolean")]),a("td",[t._v("——")]),a("td",[t._v("false")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-radio")]),t._v(" "),a("span",{staticClass:"key"},[t._v(":options")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"options"')]),t._v(" "),a("span",{staticClass:"key"},[t._v("@on-change")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"radioOnChange($event)"')]),a("span",{staticClass:"tag"},[t._v("></x-radio>")]),t._v("\n\n"),a("span",{staticClass:"tag"},[t._v("<x-radio")]),t._v(" "),a("span",{staticClass:"key"},[t._v(":options")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"options"')]),t._v(" "),a("span",{staticClass:"key"},[t._v("@on-change")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"radioOnChange($event)"')]),t._v(" "),a("span",{staticClass:"key"},[t._v("vertical")]),a("span",{staticClass:"tag"},[t._v("></x-radio>")]),t._v("\n\n"),a("span",{staticClass:"str"},[t._v("options 数据结构如下")]),t._v("\n                options: [\n                    { label: '苹果', value: 'Apple' },\n                    { label: '梨', value: 'Pear' },\n                    { label: '橘子', value: 'Orange' }\n                ]\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("options")]),a("td",{staticClass:"des"},[t._v("radio 的选项数组")]),a("td",{staticClass:"type"},[t._v("Array")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("vertical")]),a("td",{staticClass:"des"},[t._v("垂直排列的 radio")]),a("td",{staticClass:"type"},[t._v("Boolean")]),a("td",[t._v("——")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("default-index")]),a("td",{staticClass:"des"},[t._v("默认选中选项的 index 值")]),a("td",{staticClass:"type"},[t._v("Number")]),a("td",[t._v("——")]),a("td",[t._v("——")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("事件名称")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[t._v("value-change")]),a("td",{staticClass:"des"},[t._v("选中项改变时触发")]),a("td",{staticClass:"type"},[t._v("选中项的 value 值")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[t._v("\n        从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。"),a("br"),t._v("\n        级联选择器对数据有较严格要求，每个数据为一个对象，具有"),a("span",{staticClass:"code"},[t._v("value")]),t._v("、"),a("span",{staticClass:"code"},[t._v("lable")]),t._v("和"),a("span",{staticClass:"code"},[t._v("children")]),t._v("属性，子集为"),a("span",{staticClass:"code"},[t._v("children")]),t._v("，以此类推。"),a("span",{staticClass:"code"},[t._v("selected")]),t._v("为当前选中数据"),a("span",{staticClass:"code"},[t._v("value")]),t._v("值组成的数组，比如 ['北京市', '市辖区', '东城区'] ，按照层级次序排序，使用"),a("span",{staticClass:"code"},[t._v(".sync")]),t._v("进行绑定。\n      ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-cascader")]),t._v(" \n        "),a("span",{staticClass:"key"},[t._v(":source")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"shcool"')]),t._v(" \n        "),a("span",{staticClass:"key"},[t._v(":selected.sync")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"selected"')]),a("span",{staticClass:"tag"},[t._v(">\n</x-cascader>")]),t._v("\n\n"),a("span",{staticClass:"str"},[t._v("source 数据结构如下")]),t._v('\n{\n    "label": "某学校",\n    "value": 10000,\n    "children": [{\n            "label": "高中部",\n            "value": 110000,\n            "children": [{\n                "label": "一年级",\n                "value": 11100,\n                "children": [{\n                        "label": "一班",\n                        "value": 11101\n                    },\n                    {\n                        "label": "二班",\n                        "value": 11102\n                    }\n                ]\n            }, {\n                "label": "二年级",\n                "value": 11200,\n                "children": [{\n                    "label": "一班",\n                    "value": 11201\n                }]\n            }, {\n                "label": "三年级",\n                "value": 11300,\n                "children": [{\n                        "label": "一班",\n                        "value": 11301\n                    },\n                    {\n                        "label": "二班",\n                        "value": 11302\n                    },\n                    {\n                        "label": "三班",\n                        "value": 11303\n                    }\n                ]\n            }]\n        },\n        {\n            "label": "初中部",\n            "value": 120000,\n            "children": [{\n                "label": "一年级",\n                "value": 12100,\n                "children": [{\n                    "label": "一班",\n                    "value": 12101\n                }]\n            }, {\n                "label": "二年级",\n                "value": 12200,\n                "children": [{\n                        "label": "一班",\n                        "value": 12201\n                    },\n                    {\n                        "label": "二班",\n                        "value": 12202\n                    },\n                    {\n                        "label": "三班",\n                        "value": 12203\n                    }\n                ]\n            }, {\n                "label": "三年级",\n                "value": 12300,\n                "children": [{\n                        "label": "一班",\n                        "value": 12301\n                    },\n                    {\n                        "label": "二班",\n                        "value": 12302\n                    }\n                ]\n            }]\n        }\n    ]\n}\n')])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("source")]),a("td",{staticClass:"des"},[t._v("级联选择器的数据源，格式较严格")]),a("td",{staticClass:"type"},[t._v("Array")]),a("td",[t._v("——")]),a("td",[t._v("——")])]),a("tr",[a("td",[t._v("selected")]),a("td",{staticClass:"des"},[t._v("当前选中的数据 value 值的集合，按层级次序排序，用 .sync 绑定")]),a("td",{staticClass:"type"},[t._v("Array")]),a("td",[t._v("——")]),a("td",[t._v("——")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[t._v("\n        输入或选择日期的组件。使用"),a("span",{staticClass:"code"},[t._v("v-model")]),t._v("绑定。\n      ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-date-picker")]),t._v(" "),a("span",{staticClass:"key"},[t._v("v-model")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"date"')]),t._v(" "),a("span",{staticClass:"key"},[t._v(":default-value")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"today"')]),a("span",{staticClass:"tag"},[t._v("></x-date-picker>")]),t._v("\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("default-value")]),a("td",{staticClass:"des"},[t._v("默认选中日期，必须为能转换为日期时间对象的字符串")]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"des"},[t._v("\n        输入或选择时间的组件。使用"),a("span",{staticClass:"code"},[t._v("v-model")]),t._v("绑定。\n      ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{staticClass:"code"},[a("span",{staticClass:"tag"},[t._v("<x-time-picker")]),t._v(" "),a("span",{staticClass:"key"},[t._v("v-model")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"time"')]),t._v(" "),a("span",{staticClass:"key"},[t._v(":default-value")]),a("span",{staticClass:"tag"},[t._v("=")]),a("span",{staticClass:"str"},[t._v('"12:00:00"')]),a("span",{staticClass:"tag"},[t._v("></x-time-picker>")]),t._v("\n")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticClass:"des"},[t._v("说明")]),a("th",{staticClass:"type"},[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("default-value")]),a("td",{staticClass:"des"},[t._v('默认选中时间，必须为"00:00:00"格式的字符串')]),a("td",{staticClass:"type"},[t._v("String")]),a("td",[t._v("——")]),a("td",[t._v("——")])])])])])}],l=a("e09c"),i={name:"Form",mixins:[l["a"]],data:function(){return{type1:!0,type2:!0,type3:!0,selected:[],someString:"v-model 绑定",shcool:{label:"某学校",value:1e4,children:[{label:"高中部",value:11e4,children:[{label:"一年级",value:11100,children:[{label:"一班",value:11101},{label:"二班",value:11102}]},{label:"二年级",value:11200,children:[{label:"一班",value:11201}]},{label:"三年级",value:11300,children:[{label:"一班",value:11301},{label:"二班",value:11302},{label:"三班",value:11303}]}]},{label:"初中部",value:12e4,children:[{label:"一年级",value:12100,children:[{label:"一班",value:12101}]},{label:"二年级",value:12200,children:[{label:"一班",value:12201},{label:"二班",value:12202},{label:"三班",value:12203}]},{label:"三年级",value:12300,children:[{label:"一班",value:12301},{label:"二班",value:12302}]}]}]},date:"",today:"",time:"",now:"",options:[{label:"苹果",value:"Apple"},{label:"梨",value:"Pear"},{label:"橘子",value:"Orange"}]}},created:function(){var t=new Date,s=t.getFullYear(),a=t.getMonth()+1,e=t.getDate(),n=a>9?a:"0".concat(a),l=e>9?e:"0".concat(e);this.today="".concat(s,"-").concat(n,"-").concat(l)},methods:{radioOnChange:function(t){console.log(t)}}},c=i,v=(a("4a26"),a("2877")),r=Object(v["a"])(c,e,n,!1,null,"dd19f768",null);r.options.__file="Form.vue";s["default"]=r.exports},"456d":function(t,s,a){var e=a("4bf8"),n=a("0d58");a("5eda")("keys",function(){return function(t){return n(e(t))}})},"4a26":function(t,s,a){"use strict";var e=a("c3da"),n=a.n(e);n.a},"5eda":function(t,s,a){var e=a("5ca1"),n=a("8378"),l=a("79e5");t.exports=function(t,s){var a=(n.Object||{})[t]||Object[t],i={};i[t]=s(a),e(e.S+e.F*l(function(){a(1)}),"Object",i)}},c3da:function(t,s,a){},e09c:function(t,s,a){"use strict";a("ac6a"),a("456d"),a("7f7f"),a("3b2b"),a("4917");var e=a("682a"),n=a.n(e);function l(t){requestAnimationFrame(l),n.a.update(t)}function i(t,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,e=null;e="string"===typeof t?document.querySelector(t):t;var l=0,i=0;t===window?(l=window.scrollX,i=window.scrollY):(l=e.scrollLeft,i=e.scrollTop);var c={x:l,y:i};new n.a.Tween(c).to({x:s.x,y:s.y},a).easing(n.a.Easing.Quadratic.Out).onUpdate(function(){e.scrollTo(c.x,c.y)}).start()}requestAnimationFrame(l);var c=i;s["a"]={data:function(){return{currentComponent:"",timer:null,min:""}},inject:["eventBus"],mounted:function(){var t=this;this.$route.path.match(/^\/\w+\/\w+\/(\w+)$/);var s=RegExp.$1;s&&setTimeout(function(){t.smoothScroll(s)},0),window.addEventListener("scroll",this.listenScroll),this.eventBus.$on("link-component",this.smoothScroll)},methods:{smoothScroll:function(t){if(this.$refs[t]){var s=this.$refs[t].offsetTop-88;s!==window.scrollY&&c(window,{x:0,y:s})}},listenScroll:function(){var t=this;this.timer&&window.clearTimeout(this.timer),this.timer=setTimeout(function(){var s=document.body.scrollTop||document.documentElement.scrollTop,a=document.body.scrollHeight,e=document.documentElement.clientHeight,n=t.$refs,l=Object.keys(n);if(t.min=t.min||l[0],l.forEach(function(s){var a=Math.abs(n[s].getBoundingClientRect().top);a<Math.abs(t.$refs[t.min].getBoundingClientRect().top)&&a<e-100&&(t.min=s)}),a-s<=e+88&&(t.min=l[l.length-1]),t.currentComponent!==t.min){t.currentComponent=t.min,t.$route.path.match(/^\/(\w+\/\w+\/)\w+$/);var i=RegExp.$1;t.eventBus.$emit("instage-component",i+t.currentComponent)}},400)}},beforeDestroy:function(){this.eventBus.$off("click-tab",this.smoothScroll),window.removeEventListener("scroll",this.listenScroll),this.timer&&window.clearTimeout(this.timer),this.timer=null}}}}]);
//# sourceMappingURL=chunk-c499294a.eabb47e1.js.map