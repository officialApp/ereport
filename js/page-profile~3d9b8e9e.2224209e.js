(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-profile~3d9b8e9e"],{"996f":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("p",{staticClass:"text-center font-bold text-sm p-3 uppercase"},[t._v(" Profile : ")]),t._m(0),e("div",{staticClass:"p-3"},[e("form",{attrs:{action:""},on:{submit:function(a){return a.preventDefault(),t.ganti(a)}}},[e("div",{staticClass:"sm-form "},[e("label",{staticClass:"capitalize",attrs:{for:"nip"}},[t._v("nip")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nip,expression:"vdata.nip"}],staticClass:"form-control form-control-sm",attrs:{type:"text",disabled:"",id:"nip",name:"nip",placeholder:"nip"},domProps:{value:t.vdata.nip},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nip",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{staticClass:"capitalize",attrs:{for:"nama"}},[t._v("nama")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.nama,expression:"vdata.nama"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"nama",name:"nama",placeholder:"nama"},domProps:{value:t.vdata.nama},on:{input:function(a){a.target.composing||t.$set(t.vdata,"nama",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{staticClass:"capitalize",attrs:{for:"jabatan"}},[t._v("jabatan")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.jabatan,expression:"vdata.jabatan"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"jabatan",name:"jabatan",placeholder:"jabatan"},domProps:{value:t.vdata.jabatan},on:{input:function(a){a.target.composing||t.$set(t.vdata,"jabatan",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{staticClass:"capitalize",attrs:{for:"unit_kerja"}},[t._v("unit_kerja")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.unit_kerja,expression:"vdata.unit_kerja"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"unit_kerja",name:"unit_kerja",placeholder:"unit_kerja"},domProps:{value:t.vdata.unit_kerja},on:{input:function(a){a.target.composing||t.$set(t.vdata,"unit_kerja",a.target.value)}}})]),e("br"),t._m(1)])])])])])},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"text-center p-3"},[n("img",{staticClass:"kinoLightBox img-fluid ",attrs:{src:e("c8f1")}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"submit"}},[t._v("Simpan")])])}],i=e("4b97"),o=new i["a"],r={data:function(){return{vdata:{}}},methods:{ganti:function(){var t=this;this.vdata.id=this.$store.state.users.id,o.collection("tbuser").doc().set(this.vdata).then((function(a){console.log(a),o.collection().ceklogin(t.$store).then((function(t){})).catch((function(t){}))}))}},mounted:function(){var t=this;setTimeout((function(){t.vdata.nama=t.$store.state.users.nama,t.vdata.nip=t.$store.state.users.nip,t.vdata.jabatan=t.$store.state.users.jabatan,t.vdata.unit_kerja=t.$store.state.users.unit_kerja,t.$forceUpdate()}),1500)},layout:"kominfo"},l=r,c=e("2877"),m=Object(c["a"])(l,n,s,!1,null,null,null);a["default"]=m.exports},c8f1:function(t,a,e){t.exports=e.p+"img/kopdiskominfo.bdcc1330.png"}}]);
//# sourceMappingURL=page-profile~3d9b8e9e.2224209e.js.map