function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)}return!1}function o(t,e,n,o,i,r,l,d){return r<t&&l>e||r>t&&l<e?0:r<=t&&d<=n||l>=e&&d>=n?r-t-o:l>e&&d<n||r<t&&d>n?l-e+i:0}var i=function(e,i){var r=window,l=i.scrollMode,d=i.block,h=i.inline,f=i.boundary,s=i.skipOverflowHiddenElements,a="function"==typeof f?f:function(t){return t!==f};if(!t(e))throw new TypeError("Invalid target");for(var u,c,g,p=document.scrollingElement||document.documentElement,m=[],w=e;t(w)&&a(w)&&((g=w)===g.ownerDocument.body||"fixed"!==getComputedStyle(g,null).position);){if((w=null==(c=(u=w).parentElement)?u.getRootNode().host||null:c)===p){m.push(w);break}null!=w&&w===document.body&&n(w)&&!n(document.documentElement)||null!=w&&n(w,s)&&m.push(w)}for(var v=r.visualViewport?r.visualViewport.width:innerWidth,b=r.visualViewport?r.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),M=y.height,x=y.width,E=y.top,C=y.right,I=y.bottom,R=y.left,T="start"===d||"nearest"===d?E:"end"===d?I:E+M/2,V="center"===h?R+x/2:"end"===h?C:R,k=[],B=0;B<m.length;B++){var O=m[B],S=p===O?{height:b,width:v,top:0,right:v,bottom:b,left:0}:O.getBoundingClientRect(),X=S.height,Y=S.width,L=S.top,j=S.right,D=S.bottom,N=S.left;if("if-needed"===l&&E>=0&&R>=0&&I<=b&&C<=v&&E>=L&&I<=D&&R>=N&&C<=j)return k;var q=getComputedStyle(O),z=parseInt(q.borderLeftWidth,10),A=parseInt(q.borderTopWidth,10),F=parseInt(q.borderRightWidth,10),G=parseInt(q.borderBottomWidth,10),J=0,K=0,P="offsetWidth"in O?O.offsetWidth-O.clientWidth-z-F:0,Q="offsetHeight"in O?O.offsetHeight-O.clientHeight-A-G:0,U="offsetWidth"in O?0===O.offsetWidth?0:Y/O.offsetWidth:0,Z="offsetHeight"in O?0===O.offsetHeight?0:X/O.offsetHeight:0;if(p===O)J="start"===d?T:"end"===d?T-b:"nearest"===d?o(H,H+b,b,A,G,H+T,H+T+M,M):T-b/2,K="start"===h?V:"center"===h?V-v/2:"end"===h?V-v:o(W,W+v,v,z,F,W+V,W+V+x,x),J=Math.max(0,J+H),K=Math.max(0,K+W);else{J="start"===d?T-L-A:"end"===d?T-D+G+Q:"nearest"===d?o(L,D,X,A,G+Q,T,T+M,M):T-(L+X/2)+Q/2,K="start"===h?V-N-z:"center"===h?V-(N+Y/2)+P/2:"end"===h?V-j+F+P:o(N,j,Y,z,F+P,V,V+x,x);var $=O.scrollLeft,_=O.scrollTop;T+=_-(J=Math.max(0,Math.min(_+J/Z,O.scrollHeight-X/Z+Q))),V+=$-(K=Math.max(0,Math.min($+K/U,O.scrollWidth-Y/U+P)))}k.push({el:O,top:J,left:K})}return k};export{i as default};
//# sourceMappingURL=index.mjs.map
