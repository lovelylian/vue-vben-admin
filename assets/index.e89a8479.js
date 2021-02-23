import{d as e,h as o,dg as t,dh as r,r as i,o as s,f as n,br as p,g as l,q as a}from"./index.8a947221.js";import{C as d}from"./index.81917b6c.js";import"./index.ef0a0ebf.js";import"./index.b59597c9.js";import{f as m}from"./BasicForm.205370b0.js";import{u as c}from"./useForm.5e8ab938.js";import f from"./PersonTable.db2b315e.js";import{_ as b}from"./index.ee861045.js";import"./vendor.3b1829c7.js";import"./index.4c43253e.js";import"./UpOutlined.66b37b38.js";import"./LeftOutlined.081aa009.js";import"./DownOutlined.e3879b2b.js";import"./RightOutlined.d3306906.js";import"./PlusOutlined.fcbfe0fd.js";import"./responsiveObserve.c545f1cc.js";import"./index.f1773ae9.js";import"./_baseClone.91fce584.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./findIndex.07496caf.js";import"./isEqual.563532de.js";import"./identity.e5918e80.js";import"./toString.861a9ae4.js";import"./_baseProperty.0fd6dbfc.js";import"./toInteger.a25ecc80.js";import"./index.2c4e33f6.js";import"./SearchOutlined.b19280fd.js";import"./EyeOutlined.3f7d1401.js";import"./index.6f85517b.js";import"./_baseSlice.6f42b8d2.js";import"./CheckOutlined.af985792.js";import"./index.aad67b3f.js";import"./index.36897cf3.js";import"./index.c47a44f7.js";import"./index.c8ff2abb.js";import"./RedoOutlined.58d0f99d.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./Tree.00294558.js";import"./util.2d6868a4.js";import"./useFormItem.cfc17307.js";import"./isEqual.222c6e0f.js";import"./_baseIsEqual.97cc6b34.js";import"./get.b2e237e3.js";/* empty css              */import"./uuid.03279e2e.js";import"./index.831f8df6.js";import"./DeleteOutlined.ce0659f5.js";import"./index.a5da0e53.js";import"./useModal.b05e4604.js";import"./useTimeout.4ab89dd3.js";import"./useWindowSizeFn.0acae6c2.js";import"./ScrollContainer.7c8aaa6b.js";import"./index.02b8894f.js";import"./domUtils.e0b91801.js";import"./useScrollTo.a0f2ab62.js";import"./FullscreenOutlined.88a165f5.js";import"./index.6704907b.js";import"./Dropdown.16737c14.js";import"./index.cdde649d.js";import"./download.93ef06c4.js";import"./uniqBy.5d345c52.js";import"./index.098be97c.js";import"./index.81c9b1dc.js";import"./DoubleLeftOutlined.6a700560.js";import"./DoubleRightOutlined.9ab318aa.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.249d7b30.js";import"./CaretDownFilled.e325b6bc.js";import"./useSortable.ca05ff1a.js";import"./clickOutside.1357c514.js";import"./useExpose.4645fd96.js";import"./useTable.0f298b62.js";import"./index.2698f41d.js";import"./index.c32e09a2.js";import"./usePageContext.5206dcb7.js";import"./ArrowLeftOutlined.5c44f118.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],x=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:m,PersonTable:f,PageWrapper:b,[d.name]:d},setup(){const e=o(null),[t,{validate:r}]=c({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[i,{validate:s}]=c({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1});return{register:t,registerTask:i,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([r(),s()])}catch(o){}},tableRef:e}}});const h=p("data-v-2d2b3260");t("data-v-2d2b3260");const q=a(" 提交 ");r();const O=h(((e,o,t,r,p,a)=>{const d=i("BasicForm"),m=i("a-card"),c=i("PersonTable"),f=i("a-button"),b=i("PageWrapper");return s(),n(b,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:h((()=>[l(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[q])),_:1},8,["onClick"])])),default:h((()=>[l(m,{title:"仓库管理",bordered:!1},{default:h((()=>[l(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(m,{title:"任务管理",bordered:!1,class:"mt-5"},{default:h((()=>[l(d,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),l(m,{title:"成员管理",bordered:!1,class:"mt-5"},{default:h((()=>[l(c,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=O,g.__scopeId="data-v-2d2b3260";export default g;