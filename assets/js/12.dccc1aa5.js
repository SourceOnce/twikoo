(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{388:function(_,e,v){"use strict";v.r(e);var r=v(46),t=Object(r.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[_._v("#")]),_._v(" 配置")]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),v("p",[v("strong",[_._v("因图形化配置界面已上线，此文档已废弃且不再维护，其中的内容可能已经过时")])]),_._v(" "),v("ul",[v("li",[_._v("配置是可选的，即使没有配置也可以使用。")]),_._v(" "),v("li",[_._v("请确保 config 表的权限"),v("strong",[_._v("不是")]),_._v("“所有用户可读”，以保证 SMTP 密码等信息不会泄露。"),v("br"),_._v("\n不过放心，默认权限是安全的，您不需要更改。")]),_._v(" "),v("li",[_._v("请将配置项放在一条数据记录中。")])])]),_._v(" "),v("h2",{attrs:{id:"通用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通用"}},[_._v("#")]),_._v(" 通用")]),_._v(" "),v("h3",{attrs:{id:"site-name"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#site-name"}},[_._v("#")]),_._v(" SITE_NAME")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: 虹墨空间站")]),_._v(" "),v("p",[_._v("博客、站点名称。")]),_._v(" "),v("h3",{attrs:{id:"site-url"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#site-url"}},[_._v("#")]),_._v(" SITE_URL")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: https://www.imaegoo.com")]),_._v(" "),v("p",[_._v("博客、站点地址。")]),_._v(" "),v("h3",{attrs:{id:"blogger-email"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#blogger-email"}},[_._v("#")]),_._v(" BLOGGER_EMAIL")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: 12345@qq.com")]),_._v(" "),v("p",[_._v("博主的邮箱地址，用于邮件通知、博主标识。")]),_._v(" "),v("h2",{attrs:{id:"反垃圾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#反垃圾"}},[_._v("#")]),_._v(" 反垃圾")]),_._v(" "),v("h3",{attrs:{id:"akismet-key"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#akismet-key"}},[_._v("#")]),_._v(" AKISMET_KEY")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: 8651783ed123")]),_._v(" "),v("p",[_._v("反垃圾评论 API key。")]),_._v(" "),v("h2",{attrs:{id:"微信通知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信通知"}},[_._v("#")]),_._v(" 微信通知")]),_._v(" "),v("h3",{attrs:{id:"sc-sendkey"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sc-sendkey"}},[_._v("#")]),_._v(" SC_SENDKEY")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: SCT1364TKdsiGjGvyAZNYDVnuHW12345")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"}},[_._v("Server酱"),v("OutboundLink")],1),_._v("微信推送的 "),v("code",[_._v("SCKEY")])]),_._v(" "),v("h2",{attrs:{id:"邮件通知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#邮件通知"}},[_._v("#")]),_._v(" 邮件通知")]),_._v(" "),v("h3",{attrs:{id:"sender-email"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sender-email"}},[_._v("#")]),_._v(" SENDER_EMAIL")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: blog@imaegoo.com")]),_._v(" "),v("p",[_._v("邮件通知邮箱地址。对于大多数邮箱服务商，"),v("code",[_._v("SENDER_EMAIL")]),_._v(" 必须和 "),v("code",[_._v("SMTP_USER")]),_._v(" 保持一致，否则无法发送邮件。")]),_._v(" "),v("h3",{attrs:{id:"sender-name"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sender-name"}},[_._v("#")]),_._v(" SENDER_NAME")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: 虹墨空间站评论提醒")]),_._v(" "),v("p",[_._v("邮件通知标题。")]),_._v(" "),v("h3",{attrs:{id:"smtp-service"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#smtp-service"}},[_._v("#")]),_._v(" SMTP_SERVICE")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: qiye.aliyun")]),_._v(" "),v("p",[_._v("邮件通知邮箱服务商。"),v("br"),_._v("\n完整列表请参考："),v("a",{attrs:{href:"https://nodemailer.com/smtp/well-known/#supported-services",target:"_blank",rel:"noopener noreferrer"}},[_._v("Supported services"),v("OutboundLink")],1)]),_._v(" "),v("h3",{attrs:{id:"smtp-user"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#smtp-user"}},[_._v("#")]),_._v(" SMTP_USER")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: blog@imaegoo.com")]),_._v(" "),v("p",[_._v("邮件通知邮箱用户名。")]),_._v(" "),v("h3",{attrs:{id:"smtp-pass"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#smtp-pass"}},[_._v("#")]),_._v(" SMTP_PASS")]),_._v(" "),v("p",[_._v("类型: "),v("code",[_._v("String")]),v("br"),_._v("\n默认值: "),v("code",[_._v("null")]),v("br"),_._v("\n必要性: "),v("code",[_._v("false")]),v("br"),_._v("\n示例: password")]),_._v(" "),v("p",[_._v("邮件通知邮箱密码，QQ邮箱请填写授权码。")])])}),[],!1,null,null,null);e.default=t.exports}}]);