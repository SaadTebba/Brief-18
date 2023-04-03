import{a as r}from"./vuex.esm.8fdeb4b6.js";import{B as n}from"./Checkbox.60ba2f56.js";import{B as l}from"./RadioToggle.e6e54396.js";import{C as p}from"./Card.db2ec99d.js";import{C as d}from"./ExcludePosts.30c31e5b.js";import{C as c}from"./PostTypeOptions.5681b4ee.js";import{C as h}from"./SettingsRow.edbb3005.js";import{C as u,a as m,b as _,d as g}from"./Caret.d93b302e.js";import{C as $,k as f}from"./index.4b67d3e2.js";import{n as a}from"./_plugin-vue2_normalizer.61652a7c.js";import{C as v}from"./DisplayInfo.aeb834a3.js";import{C as b}from"./Tooltip.68a8a92b.js";import{S as y}from"./External.4c957e9a.js";import"./Checkmark.f26f6201.js";import"./Slide.15a07930.js";import"./WpTable.e2f412d1.js";import"./helpers.de7566d0.js";import"./index.ec9852b3.js";import"./isArrayLikeObject.9b4b678d.js";import"./default-i18n.3a91e0e5.js";import"./attachments.437fe1f4.js";import"./cleanForSlug.51ef7354.js";import"./constants.0d8c074c.js";import"./html.14f2a8b9.js";import"./Index.5f7ddb17.js";import"./JsonValues.870a4901.js";import"./SaveChanges.e40a9083.js";import"./AddPlus.9af097bc.js";import"./HighlightToggle.62b97732.js";import"./Radio.7965b35c.js";import"./Row.830f6397.js";import"./_commonjsHelpers.f84db168.js";import"./CheckSolid.731d2c48.js";const S={props:{description:{type:String},attributes:{type:Array,required:!0}}};var x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-attributes"},[e("div",{staticClass:"aioseo-description"},[t._v(t._s(t.description))]),e("ul",{staticClass:"aioseo-attributes-list"},t._l(t.attributes,function(s,o){return e("li",{key:o},[e("div",[e("code",[t._v(t._s(s.name))])]),e("div",[e("span",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.description)}})])])}),0)])},T=[],k=a(S,x,T,!1,null,"4823ddd8",null,null);const D=k.exports;const L={components:{CoreAlert:$,CoreAttributesList:D,CoreDisplayInfo:v,CoreLoader:u,CoreTooltip:b,SvgCircleCheck:m,SvgCircleClose:_,SvgExternal:y,SvgFile:f},props:{displayOptions:{type:Object,required:!0},url:{type:String}},data(){return{pageUrl:"",currentPageUrl:"",buttonLocked:!0,error:!1,isLoading:!1,showResults:!1,showAdvancedSettings:!1,strings:{label:this.$t.__("Display HTML Sitemap",this.$td),page:this.$t.__("Dedicated Page",this.$td),placeholder:this.$t.sprintf(this.$t.__("e.g. %1$s",this.$td),`${this.$aioseo.urls.home}/new-page`),pageButton:this.$t.__("Open HTML Sitemap",this.$td),errorMessage:this.$t.__("The page that you have entered is invalid or already exists. Please enter a page with a unique slug.",this.$td),errorMessageDisabled:this.$t.sprintf(this.$t.__('Dedicated HTML Sitemaps do not work while using "plain" permalinks. Please update your %1$spermalink structure%2$s to use this option.',this.$td),'<a href="'+this.$aioseo.urls.home+'/wp-admin/options-permalink.php">',"</a>"),shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),editAndSaveFirst:this.$t.__("To view the sitemap, enter a URL and save changes.",this.$td),saveFirst:this.$t.__("To view the new sitemap, first save changes.",this.$td)},attributes:[{name:"post_types",description:this.$t.__("The post types (by slug, comma-separated) that are included in the sitemap.",this.$td)},{name:"taxonomies",description:this.$t.__("The taxonomies (by slug, comma-separated) that are included in the sitemap.",this.$td)},{name:"label_tag",description:this.$t.sprintf(this.$t.__("The HTML tag that is used for the label of each section. Defaults to %1$s.",this.$td),"<code>h4</code>")},{name:"show_label",description:this.$t.sprintf(this.$t.__("Whether the labels should be shown or not. Defaults to %1$s.",this.$td),"<code>true</code>")},{name:"publication_date",description:this.$t.__("Whether the publication date of posts should be shown.",this.$td)},{name:"archives",description:this.$t.__("Whether the regular sitemap or compact date archive sitemap is output.",this.$td)},{name:"order",description:this.$t.sprintf(this.$t.__("The sort direction. The supported values are %1$s and %2$s.",this.$td),"<code>ASC</code>","<code>DESC</code>")},{name:"order_by",description:this.$t.sprintf(this.$t.__("The sort order. The supported values are %1$s, %2$s, %3$s and %4$s.",this.$td),"<code>publish_date</code>","<code>last_updated</code>","<code>alphabetical</code>","<code>id</code>")}]}},created(){this.pageUrl=this.dedicatedPageDisabled?"":this.options.sitemap.html.pageUrl,this.addSiteUrl(),this.pageUrl&&(this.buttonLocked=!1),this.$bus.$on("changes-saved",()=>{this.processChangesSaved()})},computed:{...r(["options"]),sitemapButtonDisabled(){return this.pageUrl?this.strings.saveFirst:this.strings.editAndSaveFirst},dedicatedPageDisabled(){return this.$aioseo.data.permalinkStructure===""}},methods:{addSiteUrl(){this.pageUrl&&!this.pageUrl.startsWith(`http://${window.aioseo.urls.domain}`)&&!this.pageUrl.startsWith(`https://${window.aioseo.urls.domain}`)&&(this.pageUrl=this.$aioseo.data.isSsl?`https://${window.aioseo.urls.domain}/${this.pageUrl}`:`http://${window.aioseo.urls.domain}/${this.pageUrl}`)},validateNewSlug(i){if(this.pageUrl=i.target.value,!this.pageUrl){this.options.sitemap.html.pageUrl="";return}if(this.currentPageUrl===this.pageUrl){this.buttonLocked=!1,this.error=!1;return}else this.buttonLocked=!0;this.isLoading=!0,g(()=>{if(/\s/.test(this.pageUrl)){this.error=!0,this.isLoading=!1;return}this.$http.post(this.$links.restUrl("sitemap/validate-html-sitemap-slug")).send({pageUrl:this.pageUrl}).then(t=>{t.body.exists?(this.error=!0,this.showResults=!0):(this.error=!1,this.options.sitemap.html.pageUrl=this.pageUrl),this.isLoading=!1}).catch(()=>{this.error=!0,this.isLoading=!1})},500)},processChangesSaved(){if(!this.pageUrl){this.buttonLocked=!0;return}this.currentPageUrl=this.pageUrl,this.buttonLocked=!1}}};var w=function(){var t=this,e=t._self._c;return e("core-display-info",{attrs:{label:t.strings.label,options:t.displayOptions,url:t.url},scopedSlots:t._u([{key:"shortcodeAdvanced",fn:function(){return[e("core-attributes-list",{attrs:{description:t.strings.shortcodeAttributesDescription,attributes:t.attributes}})]},proxy:!0},{key:"phpAdvanced",fn:function(){return[e("core-attributes-list",{attrs:{description:t.strings.phpArgumentsDescription,attributes:t.attributes}})]},proxy:!0},{key:"extra",fn:function(){return[e("svg-file"),e("p",[t._v(t._s(t.strings.page))])]},proxy:!0},{key:"extraBox",fn:function({item:s}){return[e("div",{staticClass:"new-page"},[e("div",{staticClass:"aioseo-row"},[e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s.desc?e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.desc)}}):t._e()]),e("div",{staticClass:"aioseo-col col-xs-12 col-md-7 text-xs-left"},[e("base-input",{class:{"aioseo-error":t.error,"aioseo-active":!t.error&&t.pageUrl&&!t.dedicatedPageDisabled},attrs:{disabled:t.dedicatedPageDisabled,size:"medium",placeholder:t.strings.placeholder},on:{keyup:t.validateNewSlug,blur:t.addSiteUrl,focus:function(o){t.showResults=!0}},scopedSlots:t._u([{key:"append-icon",fn:function(){return[e("div",{staticClass:"append-icon"},[t.isLoading?t._e():[t.error?e("svg-circle-close"):t._e(),!t.error&&t.pageUrl&&!t.dedicatedPageDisabled?e("svg-circle-check"):t._e()],t.isLoading?e("core-loader",{attrs:{dark:""}}):t._e()],2)]},proxy:!0}],null,!0),model:{value:t.pageUrl,callback:function(o){t.pageUrl=o},expression:"pageUrl"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 col-md-5 text-xs-left"},[!t.pageUrl||t.buttonLocked||t.error||t.dedicatedPageDisabled?e("core-tooltip",{attrs:{type:"action",tag:"div"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.sitemapButtonDisabled)+" ")]},proxy:!0}],null,!0)},[e("base-button",{staticClass:"aioseo-html-sitemaps-disabled-button",attrs:{disabled:t.dedicatedPageDisabled,size:"medium",type:"blue",tag:"button"}},[e("svg-external"),t._v(" "+t._s(t.strings.pageButton)+" ")],1)],1):t._e(),t.pageUrl&&!t.buttonLocked&&!t.error&&!t.dedicatedPageDisabled?e("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.pageUrl,target:"_blank"}},[e("svg-external"),t._v(" "+t._s(t.strings.pageButton)+" ")],1):t._e()],1),t.showResults&&t.error||t.dedicatedPageDisabled?e("core-alert",{attrs:{type:t.dedicatedPageDisabled?"yellow":"red",size:"medium"}},[e("span",{domProps:{innerHTML:t._s(t.dedicatedPageDisabled?t.strings.errorMessageDisabled:t.strings.errorMessage)}})]):t._e()],1)])]}}])})},C=[],A=a(L,w,C,!1,null,null,null,null);const U=A.exports;const P={components:{BaseCheckbox:n,BaseRadioToggle:l,CoreCard:p,CoreExcludePosts:d,CorePostTypeOptions:c,CoreSettingsRow:h,HtmlSitemapDisplayInfo:U},data(){return{sortOrders:[{label:this.$t.__("Publish Date",this.$td),value:"publish_date"},{label:this.$t.__("Last Updated Date",this.$td),value:"last_updated"},{label:this.$t.__("Alphabetical",this.$td),value:"alphabetical"},{label:this.$t.__("Post/Term ID",this.$td),value:"id"}],sortDirections:[{label:this.$t.__("Ascending",this.$td),value:"asc"},{label:this.$t.__("Descending",this.$td),value:"desc"}],displayOptions:{extra:{desc:this.$t.__("Display the sitemap on a dedicated page:",this.$td)},block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the %1$s"%2$s - HTML Sitemap"%3$s block.',this.$td),"<strong>","AIOSEO","</strong>")},shortcode:{copy:"[aioseo_html_sitemap]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the HTML Sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapShortcode",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the %3$s"%4$s - HTML Sitemap"%5$s widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","<strong>","AIOSEO","</strong>")},php:{copy:"<?php if( function_exists( 'aioseo_html_sitemap' ) ) aioseo_html_sitemap(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapFunction",!0))}},strings:{title:this.$t.__("HTML Sitemap",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),settings:this.$t.__("HTML Sitemap Settings",this.$td),description:this.$t.__("Using the custom-built tools below, you can add an HTML sitemap to your website and help visitors discover all your content. Adding an HTML sitemap to your website may also help search engines find your content more easily.",this.$td),displayLabel:this.$t.__("Display HTML Sitemap",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap.",this.$td),sortOrder:this.$t.__("Sort Order",this.$td),sortDirection:this.$t.__("Sort Direction",this.$td),publicationDate:this.$t.__("Publication Date",this.$td),publicationDateDescription:this.$t.__("This setting only applies to posts and pages.",this.$td),compactArchives:this.$t.__("Compact Archives",this.$td),compactArchivesDescription:this.$t.sprintf(this.$t.__("This setting allows you to toggle between the regular sitemap or the compact date archive sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapCompactArchives",!0)),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td)}}},computed:{...r(["options","internalOptions"])},methods:{getSortOrder(i){return this.sortOrders.find(t=>t.value===i)},getSortDirection(i){return this.sortDirections.find(t=>t.value===i)}}};var O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-html-sitemap"},[e("core-card",{attrs:{slug:"htmlSitemap"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.title))])]},proxy:!0}])},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemap",!0))}})]),e("core-settings-row",{attrs:{name:t.strings.enableSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-toggle",{model:{value:t.options.sitemap.html.enable,callback:function(s){t.$set(t.options.sitemap.html,"enable",s)},expression:"options.sitemap.html.enable"}})]},proxy:!0}])}),t.options.sitemap.html.enable?e("html-sitemap-display-info",{attrs:{label:t.strings.displayLabel,displayOptions:t.displayOptions,url:t.options.sitemap.html.pageUrl}}):t._e()],1),t.options.sitemap.html.enable?e("core-card",{staticClass:"aioseo-html-sitemap-settings",attrs:{slug:"htmlSitemapSettings"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.settings))])]},proxy:!0}],null,!1,3943519705)},[e("core-settings-row",{attrs:{name:t.strings.postTypes},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.sitemap.html.postTypes.all,callback:function(s){t.$set(t.options.sitemap.html.postTypes,"all",s)},expression:"options.sitemap.html.postTypes.all"}},[t._v(" "+t._s(t.strings.includeAllPostTypes)+" ")]),t.options.sitemap.html.postTypes.all?t._e():e("core-post-type-options",{attrs:{options:t.options.sitemap.html,type:"postTypes",excluded:["attachment"]}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectPostTypes)+" ")])]},proxy:!0}],null,!1,1879190995)}),e("core-settings-row",{attrs:{name:t.strings.taxonomies},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.sitemap.html.taxonomies.all,callback:function(s){t.$set(t.options.sitemap.html.taxonomies,"all",s)},expression:"options.sitemap.html.taxonomies.all"}},[t._v(" "+t._s(t.strings.includeAllTaxonomies)+" ")]),t.options.sitemap.html.taxonomies.all?t._e():e("core-post-type-options",{attrs:{options:t.options.sitemap.html,type:"taxonomies"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectTaxonomies)+" ")])]},proxy:!0}],null,!1,2105218266)}),e("core-settings-row",{staticClass:"aioseo-sort-order",attrs:{name:t.strings.sortOrder,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.sortOrders,value:t.getSortOrder(t.options.sitemap.html.sortOrder)},on:{input:s=>t.options.sitemap.html.sortOrder=s.value}})]},proxy:!0}],null,!1,1973041532)}),e("core-settings-row",{staticClass:"aioseo-sort-direction",attrs:{name:t.strings.sortDirection,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.sortDirections,value:t.getSortDirection(t.options.sitemap.html.sortDirection)},on:{input:s=>t.options.sitemap.html.sortDirection=s.value}})]},proxy:!0}],null,!1,3610521404)}),e("core-settings-row",{attrs:{name:t.strings.publicationDate,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"publicationDate",options:[{label:t.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:t.options.sitemap.html.publicationDate,callback:function(s){t.$set(t.options.sitemap.html,"publicationDate",s)},expression:"options.sitemap.html.publicationDate"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.publicationDateDescription)+" ")])]},proxy:!0}],null,!1,2741867663)}),e("core-settings-row",{attrs:{name:t.strings.compactArchives,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"compactArchives",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.sitemap.html.compactArchives,callback:function(s){t.$set(t.options.sitemap.html,"compactArchives",s)},expression:"options.sitemap.html.compactArchives"}}),e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(t.strings.compactArchivesDescription)}})]},proxy:!0}],null,!1,1373752516)})],1):t._e(),t.options.sitemap.html.enable?e("core-card",{attrs:{slug:"htmlSitemapAdvancedSettings",toggles:t.options.sitemap.html.advancedSettings.enable},scopedSlots:t._u([{key:"header",fn:function(){return[e("base-toggle",{model:{value:t.options.sitemap.html.advancedSettings.enable,callback:function(s){t.$set(t.options.sitemap.html.advancedSettings,"enable",s)},expression:"options.sitemap.html.advancedSettings.enable"}}),e("span",[t._v(t._s(t.strings.advancedSettings))])]},proxy:!0}],null,!1,4077915650)},[t.options.sitemap.html.advancedSettings.enable?e("div",[e("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:t.strings.excludePostsPages,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.sitemap.html.advancedSettings,type:"posts"}})]},proxy:!0}],null,!1,241377281)}),e("core-settings-row",{staticClass:"aioseo-exclude-terms",attrs:{name:t.strings.excludeTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.sitemap.html.advancedSettings,type:"terms"}})]},proxy:!0}],null,!1,279405175)})],1):t._e()]):t._e()],1)},M=[],H=a(P,O,M,!1,null,null,null,null);const _t=H.exports;export{_t as default};
