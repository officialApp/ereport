(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-test~e7def479"],{bd8c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.test}},[t._v("test")])])},o=[],s=(a("159b"),a("bc3a")),c=a.n(s),r=a("8aa5"),l=a.n(r),i=l.a.firestore(),u={data:function(){return{}},methods:{test:function(){var t=this,e=new FormData;e.append("data","select * from sdd_laporan where id_user='2'"),e.append("database","infolay3_test"),c.a.post("https://infolayanans.space/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){e.data.forEach((function(t){i.collection("users/2zqezMmcOyc27lEOg45AA5m7ntM2/laporan").doc().set(t,{merge:!0}).then((function(t){console.log("berhasil")}))})),t.$forceUpdate()}))}},mounted:function(){}},p=u,d=a("2877"),f=Object(d["a"])(p,n,o,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=page-test~e7def479.f68b3a01.js.map