function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}module.exports=function(e,i){var o=window,l=i.scrollMode,d=i.block,h=i.inline,s=i.boundary,u=i.skipOverflowHiddenElements,a="function"==typeof s?s:function(t){return t!==s};if(!t(e))throw new TypeError("Invalid target");for(var f,c=document.scrollingElement||document.documentElement,p=[],g=e;t(g)&&a(g)&&((f=g)===f.ownerDocument.body||"fixed"!==getComputedStyle(f,null).position);){if((g=g.parentElement)===c){p.push(g);break}null!=g&&g===document.body&&n(g)&&!n(document.documentElement)||null!=g&&n(g,u)&&p.push(g)}for(var m=o.visualViewport?o.visualViewport.width:innerWidth,w=o.visualViewport?o.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),y=W.height,H=W.width,M=W.top,x=W.right,E=W.bottom,C=W.left,I="start"===d||"nearest"===d?M:"end"===d?E:M+y/2,T="center"===h?C+H/2:"end"===h?x:C,V=[],k=0;k<p.length;k++){var B=p[k],O=B.getBoundingClientRect(),R=O.height,S=O.width,X=O.top,Y=O.right,L=O.bottom,j=O.left;if("if-needed"===l&&M>=0&&C>=0&&E<=w&&x<=m&&M>=X&&E<=L&&C>=j&&x<=Y)return V;var D=getComputedStyle(B),q=parseInt(D.borderLeftWidth,10),z=parseInt(D.borderTopWidth,10),A=parseInt(D.borderRightWidth,10),F=parseInt(D.borderBottomWidth,10),G=0,J=0,K="offsetWidth"in B?B.offsetWidth-B.clientWidth-q-A:0,N="offsetHeight"in B?B.offsetHeight-B.clientHeight-z-F:0;if(c===B)G="start"===d?I:"end"===d?I-w:"nearest"===d?r(b,b+w,w,z,F,b+I,b+I+y,y):I-w/2,J="start"===h?T:"center"===h?T-m/2:"end"===h?T-m:r(v,v+m,m,q,A,v+T,v+T+H,H),G=Math.max(0,G+b),J=Math.max(0,J+v);else{G="start"===d?I-X-z:"end"===d?I-L+F+N:"nearest"===d?r(X,L,R,z,F+N,I,I+y,y):I-(X+R/2)+N/2,J="start"===h?T-j-q:"center"===h?T-(j+S/2)+K/2:"end"===h?T-Y+A+K:r(j,Y,S,q,A+K,T,T+H,H);var P=B.scrollLeft,Q=B.scrollTop;I+=Q-(G=Math.max(0,Math.min(Q+G,B.scrollHeight-R+N))),T+=P-(J=Math.max(0,Math.min(P+J,B.scrollWidth-S+K)))}V.push({el:B,top:G,left:J})}return V};
//# sourceMappingURL=index.js.map
