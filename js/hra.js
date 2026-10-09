(()=>{var Ab=0,r0=1,Tb=2;var wg=0,al=1,Rb=2,Ai=3,ri=0,xt=1,Vn=2,ss=0,Tr=1,o0=2,a0=3,c0=4,Cb=5,Ns=100,Ib=101,Pb=102,zb=103,kb=104,Nb=200,Lb=201,Db=202,Bb=203,bu=204,Mu=205,Ub=206,Ob=207,Fb=208,Vb=209,Hb=210,Gb=211,Wb=212,Xb=213,qb=214,Su=0,wu=1,Eu=2,Pr=3,Au=4,Tu=5,Ru=6,Cu=7,Nd=0,jb=1,Yb=2,rs=0,Zb=1,Kb=2,$b=3,Jb=4,Qb=5,eM=6,tM=7,l0="attached",nM="detached",Eg=300,zr=301,kr=302,Iu=303,Pu=304,cl=306,qn=1e3,Gn=1001,Zo=1002,Dt=1003,Ld=1004;var Er=1005;var Ct=1006,Xo=1007;var si=1008;var Ii=1009,Ag=1010,Tg=1011,Ko=1012,Dd=1013,Bs=1014,Wn=1015,oa=1016,Bd=1017,Ud=1018,Nr=1020,Rg=35902,Cg=1021,Ig=1022,An=1023,Pg=1024,zg=1025,Rr=1026,Lr=1027,aa=1028,Od=1029,kg=1030,Fd=1031;var Vd=1033,Tc=33776,Rc=33777,Cc=33778,Ic=33779,zu=35840,ku=35841,Nu=35842,Lu=35843,Du=36196,Bu=37492,Uu=37496,Ou=37808,Fu=37809,Vu=37810,Hu=37811,Gu=37812,Wu=37813,Xu=37814,qu=37815,ju=37816,Yu=37817,Zu=37818,Ku=37819,$u=37820,Ju=37821,Pc=36492,Qu=36494,ed=36495,Ng=36283,td=36284,nd=36285,id=36286;var Dr=2300,Br=2301,Fh=2302,h0=2400,u0=2401,d0=2402,iM=2500;var Lg=0,ll=1,ca=2,sM=3200,rM=3201;var hl=0,oM=1,ii="",Rt="srgb",$t="srgb-linear",ul="linear",lt="srgb";var hr=7680;var f0=519,aM=512,cM=513,lM=514,Dg=515,hM=516,uM=517,dM=518,fM=519,sd=35044,dl=35048;var p0="300 es",Ri=2e3,zc=2001,os=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],m0=1234567,qo=Math.PI/180,Ur=180/Math.PI;function Xn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function Hd(s,e){return(s%e+e)%e}function pM(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mM(s,e,t){return s!==e?(t-s)/(e-s):0}function jo(s,e,t){return(1-t)*s+t*e}function gM(s,e,t,n){return jo(s,e,1-Math.exp(-t*n))}function yM(s,e=1){return e-Math.abs(Hd(s,e*2)-e)}function vM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function _M(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bM(s,e){return s+Math.random()*(e-s)}function MM(s){return s*(.5-Math.random())}function SM(s){s!==void 0&&(m0=s);let e=m0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wM(s){return s*qo}function EM(s){return s*Ur}function AM(s){return(s&s-1)===0&&s!==0}function TM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function RM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function CM(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Et={DEG2RAD:qo,RAD2DEG:Ur,generateUUID:Xn,clamp:Vt,euclideanModulo:Hd,mapLinear:pM,inverseLerp:mM,lerp:jo,damp:gM,pingpong:yM,smoothstep:vM,smootherstep:xM,randInt:_M,randFloat:bM,randFloatSpread:MM,seededRandom:SM,degToRad:wM,radToDeg:EM,isPowerOfTwo:AM,ceilPowerOfTwo:TM,floorPowerOfTwo:RM,setQuaternionFromProperEuler:CM,normalize:ct,denormalize:Hn},qe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],x=i[1],_=i[4],v=i[7],T=i[2],A=i[5],R=i[8];return r[0]=o*y+a*x+c*T,r[3]=o*m+a*_+c*A,r[6]=o*p+a*v+c*R,r[1]=l*y+h*x+d*T,r[4]=l*m+h*_+d*A,r[7]=l*p+h*v+d*R,r[2]=u*y+f*x+g*T,r[5]=u*m+f*_+g*A,r[8]=u*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(i*l-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=u*y,e[4]=(h*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vh=new Ve;function Bg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $o(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function IM(){let s=$o("canvas");return s.style.display="block",s}var g0={};function Go(s){s in g0||(g0[s]=!0,console.warn(s))}function PM(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function zM(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kM(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?ul:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var y0=[.64,.33,.3,.6,.15,.06],v0=[.2126,.7152,.0722],x0=[.3127,.329],_0=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b0=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[$t]:{primaries:y0,whitePoint:x0,transfer:ul,toXYZ:_0,fromXYZ:b0,luminanceCoefficients:v0,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:y0,whitePoint:x0,transfer:lt,toXYZ:_0,fromXYZ:b0,luminanceCoefficients:v0,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var ur,rd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=$o("canvas")),ur.width=e.width,ur.height=e.height;let n=ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$o("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},NM=0,kc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hh(i[o].image)):r.push(Hh(i[o]))}else r=Hh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var LM=0,Ht=class s extends os{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Gn,i=Gn,r=Ct,o=si,a=An,c=Ii,l=s.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Xn(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Eg;Ht.DEFAULT_ANISOTROPY=1;var nt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(f+1)/2,T=(p+1)/2,A=(h+u)/4,R=(d+y)/4,z=(g+m)/4;return _>v&&_>T?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=R/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=z/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=z/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-y)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},od=class extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nc=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ad=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*y,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let T=Math.sqrt(_),A=Math.atan2(T,p*x);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}let v=a*x;if(c=c*m+u*v,l=l*m+f*v,h=h*m+g*v,d=d*m+y*v,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(M0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(M0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gh.copy(this).projectOnVector(e),this.sub(Gh)}reflect(e){return this.sub(Gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gh=new I,M0=new It,ht=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),ec.subVectors(this.max,Lo),dr.subVectors(e.a,Lo),fr.subVectors(e.b,Lo),pr.subVectors(e.c,Lo),$i.subVectors(fr,dr),Ji.subVectors(pr,fr),Ts.subVectors(dr,pr);let t=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-Ts.z,Ts.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,Ts.z,0,-Ts.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-Ts.y,Ts.x,0];return!Wh(t,dr,fr,pr,ec)||(t=[1,0,0,0,1,0,0,0,1],!Wh(t,dr,fr,pr,ec))?!1:(tc.crossVectors($i,Ji),t=[tc.x,tc.y,tc.z],Wh(t,dr,fr,pr,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_i=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,Qa=new ht,dr=new I,fr=new I,pr=new I,$i=new I,Ji=new I,Ts=new I,Lo=new I,ec=new I,tc=new I,Rs=new I;function Wh(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rs.fromArray(s,r);let a=i.x*Math.abs(Rs.x)+i.y*Math.abs(Rs.y)+i.z*Math.abs(Rs.z),c=e.dot(Rs),l=t.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var DM=new ht,Do=new I,Xh=new I,yn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):DM.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);let t=Do.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Do,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Xh)),this.expandByPoint(Do.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new I,qh=new I,nc=new I,Qi=new I,jh=new I,ic=new I,Yh=new I,Or=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qh.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(qh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(nc),a=Qi.dot(this.direction),c=-Qi.dot(nc),l=Qi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qh).addScaledVector(nc,u),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){jh.subVectors(t,e),ic.subVectors(n,e),Yh.crossVectors(jh,ic);let o=this.direction.dot(Yh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);let c=a*this.direction.dot(ic.crossVectors(Qi,ic));if(c<0)return null;let l=a*this.direction.dot(jh.cross(Qi));if(l<0||c+l>o)return null;let h=-a*Qi.dot(Yh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class s{constructor(e,t,n,i,r,o,a,c,l,h,d,u,f,g,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,d,u,f,g,y,m)}set(e,t,n,i,r,o,a,c,l,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-y*l,t[9]=-a*c,t[2]=y-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,UM)}lookAt(e,t,n){let i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),es.crossVectors(n,mn),es.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),es.crossVectors(n,mn)),es.normalize(),sc.crossVectors(mn,es),i[0]=es.x,i[4]=sc.x,i[8]=mn.x,i[1]=es.y,i[5]=sc.y,i[9]=mn.y,i[2]=es.z,i[6]=sc.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],T=n[15],A=i[0],R=i[4],z=i[8],w=i[12],b=i[1],P=i[5],G=i[9],k=i[13],D=i[2],V=i[6],N=i[10],Z=i[14],H=i[3],q=i[7],ie=i[11],le=i[15];return r[0]=o*A+a*b+c*D+l*H,r[4]=o*R+a*P+c*V+l*q,r[8]=o*z+a*G+c*N+l*ie,r[12]=o*w+a*k+c*Z+l*le,r[1]=h*A+d*b+u*D+f*H,r[5]=h*R+d*P+u*V+f*q,r[9]=h*z+d*G+u*N+f*ie,r[13]=h*w+d*k+u*Z+f*le,r[2]=g*A+y*b+m*D+p*H,r[6]=g*R+y*P+m*V+p*q,r[10]=g*z+y*G+m*N+p*ie,r[14]=g*w+y*k+m*Z+p*le,r[3]=x*A+_*b+v*D+T*H,r[7]=x*R+_*P+v*V+T*q,r[11]=x*z+_*G+v*N+T*ie,r[15]=x*w+_*k+v*Z+T*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+y*(+t*c*f-t*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+m*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*d+t*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=d*m*l-y*u*l+y*c*f-a*m*f-d*c*p+a*u*p,_=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,v=h*y*l-g*d*l+g*a*f-o*y*f-h*a*p+o*d*p,T=g*d*c-h*y*c-g*a*u+o*y*u+h*a*m-o*d*m,A=t*x+n*_+i*v+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=x*R,e[1]=(y*u*r-d*m*r-y*i*f+n*m*f+d*i*p-n*u*p)*R,e[2]=(a*m*r-y*c*r+y*i*l-n*m*l-a*i*p+n*c*p)*R,e[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*R,e[4]=_*R,e[5]=(h*m*r-g*u*r+g*i*f-t*m*f-h*i*p+t*u*p)*R,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*R,e[7]=(o*u*r-h*c*r+h*i*l-t*u*l-o*i*f+t*c*f)*R,e[8]=v*R,e[9]=(g*d*r-h*y*r-g*n*f+t*y*f+h*n*p-t*d*p)*R,e[10]=(o*y*r-g*a*r+g*n*l-t*y*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*R,e[12]=T*R,e[13]=(h*y*i-g*d*i+g*n*u-t*y*u-h*n*m+t*d*m)*R,e[14]=(g*a*i-o*y*i-g*n*c+t*y*c+o*n*m-t*a*m)*R,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*u+t*a*u)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,x=c*l,_=c*h,v=c*d,T=n.x,A=n.y,R=n.z;return i[0]=(1-(y+p))*T,i[1]=(f+v)*T,i[2]=(g-_)*T,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(u+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+_)*R,i[9]=(m-x)*R,i[10]=(1-(u+y))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=mr.set(i[0],i[1],i[2]).length(),o=mr.set(i[4],i[5],i[6]).length(),a=mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],On.copy(this);let l=1/r,h=1/o,d=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ri){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f,g;if(a===Ri)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zc)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ri){let c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*l,f=(n+i)*h,g,y;if(a===Ri)g=(o+r)*d,y=-2*d;else if(a===zc)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},mr=new I,On=new Ue,BM=new I(0,0,0),UM=new I(1,1,1),es=new I,sc=new I,mn=new I,S0=new Ue,w0=new It,vn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return w0.setFromEuler(this),this.setFromQuaternion(w0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Lc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},OM=0,E0=new I,gr=new It,Mi=new Ue,rc=new I,Bo=new I,FM=new I,VM=new It,A0=new I(1,0,0),T0=new I(0,1,0),R0=new I(0,0,1),C0={type:"added"},HM={type:"removed"},yr={type:"childadded",child:null},Zh={type:"childremoved",child:null},St=class s extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new vn,n=new It,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ve}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(A0,e)}rotateY(e){return this.rotateOnAxis(T0,e)}rotateZ(e){return this.rotateOnAxis(R0,e)}translateOnAxis(e,t){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(A0,e)}translateY(e){return this.translateOnAxis(T0,e)}translateZ(e){return this.translateOnAxis(R0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rc.copy(e):rc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Bo,rc,this.up):Mi.lookAt(rc,Bo,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),gr.setFromRotationMatrix(Mi),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HM),Zh.child=e,this.dispatchEvent(Zh),Zh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,VM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};St.DEFAULT_UP=new I(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new I,Si=new I,Kh=new I,wi=new I,vr=new I,xr=new I,I0=new I,$h=new I,Jh=new I,Qh=new I,eu=new nt,tu=new nt,nu=new nt,Ls=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fn.subVectors(i,t),Si.subVectors(n,t),Kh.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(Si),c=Fn.dot(Kh),l=Si.dot(Si),h=Si.dot(Kh),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return eu.setScalar(0),tu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(e,t),tu.fromBufferAttribute(e,n),nu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(eu,r.x),o.addScaledVector(tu,r.y),o.addScaledVector(nu,r.z),o}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),Si.subVectors(e,t),Fn.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Fn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;vr.subVectors(i,n),xr.subVectors(r,n),$h.subVectors(e,n);let c=vr.dot($h),l=xr.dot($h);if(c<=0&&l<=0)return t.copy(n);Jh.subVectors(e,i);let h=vr.dot(Jh),d=xr.dot(Jh);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(vr,o);Qh.subVectors(e,r);let f=vr.dot(Qh),g=xr.dot(Qh);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(xr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return I0.subVectors(r,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(I0,a);let p=1/(m+y+u);return o=y*p,a=u*p,t.copy(n).addScaledVector(vr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},oc={h:0,s:0,l:0};function iu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Hd(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=iu(o,r,e+1/3),this.g=iu(o,r,e),this.b=iu(o,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Ug[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return $e.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Vt(Zt.r*255,0,255))*65536+Math.round(Vt(Zt.g*255,0,255))*256+Math.round(Vt(Zt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Zt.copy(this),t);let n=Zt.r,i=Zt.g,r=Zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Rt){$e.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,i=Zt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(oc);let n=jo(ts.h,oc.h,t),i=jo(ts.s,oc.s,t),r=jo(ts.l,oc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new _e;_e.NAMES=Ug;var GM=0,nn=class extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Xn(),this.name="",this.blending=Tr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Mu,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bu&&(n.blendSrc=this.blendSrc),this.blendDst!==Mu&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pt=class extends nn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new I,ac=new qe,rt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sd&&(e.usage=this.usage),e}};var Dc=class extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bc=class extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},WM=0,En=new Ue,su=new St,_r=new I,gn=new ht,Uo=new ht,Ft=new I,zt=class s extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bg(e)?Bc:Dc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(gn.min,Uo.min),gn.expandByPoint(Ft),Ft.addVectors(gn.max,Uo.max),gn.expandByPoint(Ft)):(gn.expandByPoint(Uo.min),gn.expandByPoint(Uo.max))}gn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ft.fromBufferAttribute(a,l),c&&(_r.fromBufferAttribute(e,l),Ft.add(_r)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new I,c[z]=new I;let l=new I,h=new I,d=new I,u=new qe,f=new qe,g=new qe,y=new I,m=new I;function p(z,w,b){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,z),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[z].add(y),a[w].add(y),a[b].add(y),c[z].add(m),c[w].add(m),c[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let z=0,w=x.length;z<w;++z){let b=x[z],P=b.start,G=b.count;for(let k=P,D=P+G;k<D;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let _=new I,v=new I,T=new I,A=new I;function R(z){T.fromBufferAttribute(i,z),A.copy(T);let w=a[z];_.copy(w),_.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(A,w);let P=v.dot(c[z])<0?-1:1;o.setXYZW(z,_.x,_.y,_.z,P)}for(let z=0,w=x.length;z<w;++z){let b=x[z],P=b.start,G=b.count;for(let k=P,D=P+G;k<D;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new rt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},P0=new Ue,Cs=new Or,cc=new yn,z0=new I,lc=new I,hc=new I,uc=new I,ru=new I,dc=new I,k0=new I,fc=new I,tt=class extends St{constructor(e=new zt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){dc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(ru.fromBufferAttribute(d,e),o?dc.addScaledVector(ru,h):dc.addScaledVector(ru.sub(t),h))}t.add(dc)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(cc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(cc,z0)===null||Cs.origin.distanceToSquared(z0)>(e.far-e.near)**2))&&(P0.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(P0),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=_;v<T;v+=3){let A=a.getX(v),R=a.getX(v+1),z=a.getX(v+2);i=pc(this,p,e,n,l,h,d,A,R,z),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=pc(this,o,e,n,l,h,d,x,_,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=_;v<T;v+=3){let A=v,R=v+1,z=v+2;i=pc(this,p,e,n,l,h,d,A,R,z),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,_=m+1,v=m+2;i=pc(this,o,e,n,l,h,d,x,_,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function XM(s,e,t,n,i,r,o,a){let c;if(e.side===xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ri,a),c===null)return null;fc.copy(a),fc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(fc);return l<t.near||l>t.far?null:{distance:l,point:fc.clone(),object:s}}function pc(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,lc),s.getVertexPosition(c,hc),s.getVertexPosition(l,uc);let h=XM(s,e,t,n,lc,hc,uc,k0);if(h){let d=new I;Ls.getBarycoord(k0,lc,hc,uc,d),i&&(h.uv=Ls.getInterpolatedAttribute(i,a,c,l,d,new qe)),r&&(h.uv1=Ls.getInterpolatedAttribute(r,a,c,l,d,new qe)),o&&(h.normal=Ls.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};Ls.getNormal(lc,hc,uc,u.normal),h.face=u,h.barycoord=d}return h}var Us=class s extends zt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function g(y,m,p,x,_,v,T,A,R,z,w){let b=v/R,P=T/z,G=v/2,k=T/2,D=A/2,V=R+1,N=z+1,Z=0,H=0,q=new I;for(let ie=0;ie<N;ie++){let le=ie*P-k;for(let ne=0;ne<V;ne++){let De=ne*b-G;q[y]=De*x,q[m]=le*_,q[p]=D,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),d.push(ne/R),d.push(1-ie/z),Z+=1}}for(let ie=0;ie<z;ie++)for(let le=0;le<R;le++){let ne=u+le+V*ie,De=u+le+V*(ie+1),Y=u+(le+1)+V*(ie+1),te=u+(le+1)+V*ie;c.push(ne,De,te),c.push(De,Y,te),H+=6}a.addGroup(f,H,w),f+=H,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){let e={};for(let t=0;t<s.length;t++){let n=Fr(s[t]);for(let i in n)e[i]=n[i]}return e}function qM(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Og(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var jM={clone:Fr,merge:tn},YM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends nn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=qM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Uc=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ns=new I,N0=new qe,L0=new qe,Lt=class extends Uc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,N0,L0),t.subVectors(L0,N0)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},br=-90,Mr=1,cd=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Lt(br,Mr,e,t);i.layers=this.layers,this.add(i);let r=new Lt(br,Mr,e,t);r.layers=this.layers,this.add(r);let o=new Lt(br,Mr,e,t);o.layers=this.layers,this.add(o);let a=new Lt(br,Mr,e,t);a.layers=this.layers,this.add(a);let c=new Lt(br,Mr,e,t);c.layers=this.layers,this.add(c);let l=new Lt(br,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Oc=class extends Ht{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ld=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Oc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Us(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:ss});r.uniforms.tEquirect.value=t;let o=new tt(i,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=Ct),new cd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},ou=new I,KM=new I,$M=new Ve,Ti=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ou.subVectors(n,t).cross(KM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ou),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$M.getNormalMatrix(e),i=this.coplanarPoint(ou).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Is=new yn,mc=new I,Jo=class{constructor(e=new Ti,t=new Ti,n=new Ti,i=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],y=i[10],m=i[11],p=i[12],x=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-r,u-l,m-f,v-p).normalize(),n[1].setComponents(c+r,u+l,m+f,v+p).normalize(),n[2].setComponents(c+o,u+h,m+g,v+x).normalize(),n[3].setComponents(c-o,u-h,m-g,v-x).normalize(),n[4].setComponents(c-a,u-d,m-y,v-_).normalize(),t===Ri)n[5].setComponents(c+a,u+d,m+y,v+_).normalize();else if(t===zc)n[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(mc.x=i.normal.x>0?e.max.x:e.min.x,mc.y=i.normal.y>0?e.max.y:e.min.y,mc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function JM(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Fc=class s extends zt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*u-o;for(let _=0;_<l;_++){let v=_*d-r;g.push(v,-x,0),y.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let _=x+l*p,v=x+l*(p+1),T=x+1+l*(p+1),A=x+1+l*p;f.push(_,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,M1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",I1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ES=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ow=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:QM,alphahash_pars_fragment:e1,alphamap_fragment:t1,alphamap_pars_fragment:n1,alphatest_fragment:i1,alphatest_pars_fragment:s1,aomap_fragment:r1,aomap_pars_fragment:o1,batching_pars_vertex:a1,batching_vertex:c1,begin_vertex:l1,beginnormal_vertex:h1,bsdfs:u1,iridescence_fragment:d1,bumpmap_pars_fragment:f1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:y1,color_fragment:v1,color_pars_fragment:x1,color_pars_vertex:_1,color_vertex:b1,common:M1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:w1,displacementmap_pars_vertex:E1,displacementmap_vertex:A1,emissivemap_fragment:T1,emissivemap_pars_fragment:R1,colorspace_fragment:C1,colorspace_pars_fragment:I1,envmap_fragment:P1,envmap_common_pars_fragment:z1,envmap_pars_fragment:k1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:X1,envmap_vertex:L1,fog_vertex:D1,fog_pars_vertex:B1,fog_fragment:U1,fog_pars_fragment:O1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:V1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:G1,lights_pars_begin:W1,lights_toon_fragment:q1,lights_toon_pars_fragment:j1,lights_phong_fragment:Y1,lights_phong_pars_fragment:Z1,lights_physical_fragment:K1,lights_physical_pars_fragment:$1,lights_fragment_begin:J1,lights_fragment_maps:Q1,lights_fragment_end:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:nS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:sS,map_fragment:rS,map_pars_fragment:oS,map_particle_fragment:aS,map_particle_pars_fragment:cS,metalnessmap_fragment:lS,metalnessmap_pars_fragment:hS,morphinstance_vertex:uS,morphcolor_vertex:dS,morphnormal_vertex:fS,morphtarget_pars_vertex:pS,morphtarget_vertex:mS,normal_fragment_begin:gS,normal_fragment_maps:yS,normal_pars_fragment:vS,normal_pars_vertex:xS,normal_vertex:_S,normalmap_pars_fragment:bS,clearcoat_normal_fragment_begin:MS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:wS,iridescence_pars_fragment:ES,opaque_fragment:AS,packing:TS,premultiplied_alpha_fragment:RS,project_vertex:CS,dithering_fragment:IS,dithering_pars_fragment:PS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:kS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:LS,shadowmap_vertex:DS,shadowmask_pars_fragment:BS,skinbase_vertex:US,skinning_pars_vertex:OS,skinning_vertex:FS,skinnormal_vertex:VS,specularmap_fragment:HS,specularmap_pars_fragment:GS,tonemapping_fragment:WS,tonemapping_pars_fragment:XS,transmission_fragment:qS,transmission_pars_fragment:jS,uv_pars_fragment:YS,uv_pars_vertex:ZS,uv_vertex:KS,worldpos_vertex:$S,background_vert:JS,background_frag:QS,backgroundCube_vert:ew,backgroundCube_frag:tw,cube_vert:nw,cube_frag:iw,depth_vert:sw,depth_frag:rw,distanceRGBA_vert:ow,distanceRGBA_frag:aw,equirect_vert:cw,equirect_frag:lw,linedashed_vert:hw,linedashed_frag:uw,meshbasic_vert:dw,meshbasic_frag:fw,meshlambert_vert:pw,meshlambert_frag:mw,meshmatcap_vert:gw,meshmatcap_frag:yw,meshnormal_vert:vw,meshnormal_frag:xw,meshphong_vert:_w,meshphong_frag:bw,meshphysical_vert:Mw,meshphysical_frag:Sw,meshtoon_vert:ww,meshtoon_frag:Ew,points_vert:Aw,points_frag:Tw,shadow_vert:Rw,shadow_frag:Cw,sprite_vert:Iw,sprite_frag:Pw},ue={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ni={basic:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new _e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:tn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:tn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:tn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new _e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:tn([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:tn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:tn([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:tn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:tn([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:tn([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:tn([ue.lights,ue.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ni.physical={uniforms:tn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var gc={r:0,b:0,g:0},Ps=new vn,zw=new Ue;function kw(s,e,t,n,i,r,o){let a=new _e(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function y(x){let _=!1,v=g(x);v===null?p(a,c):v&&v.isColor&&(p(v,1),_=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===cl)?(h===void 0&&(h=new tt(new Us(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Fr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ps.copy(_.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zw.makeRotationFromEuler(Ps)),h.material.toneMapped=$e.getTransfer(v.colorSpace)!==lt,(d!==v||u!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new tt(new Fc(2,2),new Tn({name:"BackgroundMaterial",uniforms:Fr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(gc,Og(s)),n.buffers.color.setClear(gc.r,gc.g,gc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:y,addToRenderList:m}}function Nw(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(b,P,G,k,D){let V=!1,N=d(k,G,P);r!==N&&(r=N,l(r.object)),V=f(b,k,G,D),V&&g(b,k,G,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(b,P,G,k),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,P,G){let k=G.wireframe===!0,D=n[b.id];D===void 0&&(D={},n[b.id]=D);let V=D[P.id];V===void 0&&(V={},D[P.id]=V);let N=V[k];return N===void 0&&(N=u(c()),V[k]=N),N}function u(b){let P=[],G=[],k=[];for(let D=0;D<t;D++)P[D]=0,G[D]=0,k[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,P,G,k){let D=r.attributes,V=P.attributes,N=0,Z=G.getAttributes();for(let H in Z)if(Z[H].location>=0){let ie=D[H],le=V[H];if(le===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function g(b,P,G,k){let D={},V=P.attributes,N=0,Z=G.getAttributes();for(let H in Z)if(Z[H].location>=0){let ie=V[H];ie===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));let le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),D[H]=le,N++}r.attributes=D,r.attributesNum=N,r.index=k}function y(){let b=r.newAttributes;for(let P=0,G=b.length;P<G;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){let G=r.newAttributes,k=r.enabledAttributes,D=r.attributeDivisors;G[b]=1,k[b]===0&&(s.enableVertexAttribArray(b),k[b]=1),D[b]!==P&&(s.vertexAttribDivisor(b,P),D[b]=P)}function x(){let b=r.newAttributes,P=r.enabledAttributes;for(let G=0,k=P.length;G<k;G++)P[G]!==b[G]&&(s.disableVertexAttribArray(G),P[G]=0)}function _(b,P,G,k,D,V,N){N===!0?s.vertexAttribIPointer(b,P,G,D,V):s.vertexAttribPointer(b,P,G,k,D,V)}function v(b,P,G,k){y();let D=k.attributes,V=G.getAttributes(),N=P.defaultAttributeValues;for(let Z in V){let H=V[Z];if(H.location>=0){let q=D[Z];if(q===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){let ie=q.normalized,le=q.itemSize,ne=e.get(q);if(ne===void 0)continue;let De=ne.buffer,Y=ne.type,te=ne.bytesPerElement,ve=Y===s.INT||Y===s.UNSIGNED_INT||q.gpuType===Dd;if(q.isInterleavedBufferAttribute){let he=q.data,ke=he.stride,J=q.offset;if(he.isInstancedInterleavedBuffer){for(let se=0;se<H.locationSize;se++)p(H.location+se,he.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);s.bindBuffer(s.ARRAY_BUFFER,De);for(let se=0;se<H.locationSize;se++)_(H.location+se,le/H.locationSize,Y,ie,ke*te,(J+le/H.locationSize*se)*te,ve)}else{if(q.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)p(H.location+he,q.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let he=0;he<H.locationSize;he++)m(H.location+he);s.bindBuffer(s.ARRAY_BUFFER,De);for(let he=0;he<H.locationSize;he++)_(H.location+he,le/H.locationSize,Y,ie,le*te,le/H.locationSize*he*te,ve)}}else if(N!==void 0){let ie=N[Z];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(H.location,ie);break;case 3:s.vertexAttrib3fv(H.location,ie);break;case 4:s.vertexAttrib4fv(H.location,ie);break;default:s.vertexAttrib1fv(H.location,ie)}}}}x()}function T(){z();for(let b in n){let P=n[b];for(let G in P){let k=P[G];for(let D in k)h(k[D].object),delete k[D];delete P[G]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let G in P){let k=P[G];for(let D in k)h(k[D].object),delete k[D];delete P[G]}delete n[b.id]}function R(b){for(let P in n){let G=n[P];if(G[b.id]===void 0)continue;let k=G[b.id];for(let D in k)h(k[D].object),delete k[D];delete G[b.id]}}function z(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:z,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function Lw(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dw(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==An&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let z=R===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ii&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wn&&!z)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function Bw(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Ti,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,_=x*4,v=p.clippingState||null;c.value=v,v=h(g,u,_,f);for(let T=0;T!==_;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==y;++_,v+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Uw(s){let e=new WeakMap;function t(o,a){return a===Iu?o.mapping=zr:a===Pu&&(o.mapping=kr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Iu||a===Pu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ld(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vr=class extends Uc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ar=4,D0=[.125,.215,.35,.446,.526,.582],Ds=20,au=new Vr,B0=new _e,cu=null,lu=0,hu=0,uu=!1,ks=(1+Math.sqrt(5))/2,Sr=1/ks,U0=[new I(-ks,Sr,0),new I(ks,Sr,0),new I(-Sr,0,ks),new I(Sr,0,ks),new I(0,ks,-Sr),new I(0,ks,Sr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){cu=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,lu,hu),this._renderer.xr.enabled=uu,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:oa,format:An,colorSpace:$t,depthBuffer:!1},i=O0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O0(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ow(r)),this._blurMaterial=Fw(r,e,t)}return i}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,au)}_sceneToCubeUV(e,t,n,i){let a=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(B0),h.toneMapping=rs,h.autoClear=!1;let f=new Pt({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),g=new tt(new Us,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(B0),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;yc(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===zr||e.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=V0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;yc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,au)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=U0[(i-r-1)%U0.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new tt(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ds;m>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);let p=[],x=0;for(let R=0;R<Ds;++R){let z=R/y,w=Math.exp(-z*z/2);p.push(w),R===0?x+=w:R<m&&(x+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let v=this._sizeLods[i],T=3*v*(i>_-Ar?i-_+Ar:0),A=4*(this._cubeSize-v);yc(t,T,A,3*v,2*v),c.setRenderTarget(t),c.render(d,au)}};function Ow(s){let e=[],t=[],n=[],i=s,r=s-Ar+1+D0.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ar?c=D0[o-s+Ar-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,z=A>2?0:-1,w=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];x.set(w,y*g*A),_.set(u,m*g*A);let b=[A,A,A,A,A,A];v.set(b,p*g*A)}let T=new zt;T.setAttribute("position",new rt(x,y)),T.setAttribute("uv",new rt(_,m)),T.setAttribute("faceIndex",new rt(v,p)),e.push(T),i>Ar&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function O0(s,e,t){let n=new Pi(s,e,t);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Fw(s,e,t){let n=new Float32Array(Ds),i=new I(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function F0(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function V0(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vw(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Iu||c===Pu,h=c===zr||c===kr;if(l||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Vc(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Vc(s)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hw(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Go("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gw(s,e,t,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)e.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],s.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let _=0,v=x.length;_<v;_+=3){let T=x[_+0],A=x[_+1],R=x[_+2];u.push(T,A,A,R,R,T)}}else if(g!==void 0){let x=g.array;y=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let T=_+0,A=_+1,R=_+2;u.push(T,A,A,R,R,T)}}else return;let m=new(Bg(u)?Bc:Dc)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ww(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*y[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xw(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qw(s,e,t){let n=new WeakMap,i=new nt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let v=a.attributes.position.count*_,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*T*4*d),R=new Nc(A,v,T,d);R.type=Wn,R.needsUpdate=!0;let z=_*4;for(let b=0;b<d;b++){let P=m[b],G=p[b],k=x[b],D=v*T*4*b;for(let V=0;V<P.count;V++){let N=V*z;f===!0&&(i.fromBufferAttribute(P,V),A[D+N+0]=i.x,A[D+N+1]=i.y,A[D+N+2]=i.z,A[D+N+3]=0),g===!0&&(i.fromBufferAttribute(G,V),A[D+N+4]=i.x,A[D+N+5]=i.y,A[D+N+6]=i.z,A[D+N+7]=0),y===!0&&(i.fromBufferAttribute(k,V),A[D+N+8]=i.x,A[D+N+9]=i.y,A[D+N+10]=i.z,A[D+N+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new qe(v,T)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function jw(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Hc=class extends Ht{constructor(e,t,n,i,r,o,a,c,l,h=Rr){if(h!==Rr&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rr&&(n=Bs),n===void 0&&h===Lr&&(n=Nr),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vg=new Ht,H0=new Hc(1,1),Hg=new Nc,Gg=new ad,Wg=new Oc,G0=[],W0=[],X0=new Float32Array(16),q0=new Float32Array(9),j0=new Float32Array(4);function Zr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=G0[i];if(r===void 0&&(r=new Float32Array(i),G0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fl(s,e){let t=W0[e];t===void 0&&(t=new Int32Array(e),W0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Zw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function Kw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function $w(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function Jw(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,n))return;j0.set(n),s.uniformMatrix2fv(this.addr,!1,j0),Ut(t,n)}}function Qw(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,n))return;q0.set(n),s.uniformMatrix3fv(this.addr,!1,q0),Ut(t,n)}}function eE(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Bt(t,n))return;X0.set(n),s.uniformMatrix4fv(this.addr,!1,X0),Ut(t,n)}}function tE(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function iE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function sE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function rE(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function aE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function cE(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function lE(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(H0.compareFunction=Dg,r=H0):r=Vg,t.setTexture2D(e||r,i)}function hE(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gg,i)}function uE(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wg,i)}function dE(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hg,i)}function fE(s){switch(s){case 5126:return Yw;case 35664:return Zw;case 35665:return Kw;case 35666:return $w;case 35674:return Jw;case 35675:return Qw;case 35676:return eE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return sE;case 5125:return rE;case 36294:return oE;case 36295:return aE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return dE}}function pE(s,e){s.uniform1fv(this.addr,e)}function mE(s,e){let t=Zr(e,this.size,2);s.uniform2fv(this.addr,t)}function gE(s,e){let t=Zr(e,this.size,3);s.uniform3fv(this.addr,t)}function yE(s,e){let t=Zr(e,this.size,4);s.uniform4fv(this.addr,t)}function vE(s,e){let t=Zr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xE(s,e){let t=Zr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _E(s,e){let t=Zr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bE(s,e){s.uniform1iv(this.addr,e)}function ME(s,e){s.uniform2iv(this.addr,e)}function SE(s,e){s.uniform3iv(this.addr,e)}function wE(s,e){s.uniform4iv(this.addr,e)}function EE(s,e){s.uniform1uiv(this.addr,e)}function AE(s,e){s.uniform2uiv(this.addr,e)}function TE(s,e){s.uniform3uiv(this.addr,e)}function RE(s,e){s.uniform4uiv(this.addr,e)}function CE(s,e,t){let n=this.cache,i=e.length,r=fl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vg,r[o])}function IE(s,e,t){let n=this.cache,i=e.length,r=fl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Gg,r[o])}function PE(s,e,t){let n=this.cache,i=e.length,r=fl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Wg,r[o])}function zE(s,e,t){let n=this.cache,i=e.length,r=fl(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Hg,r[o])}function kE(s){switch(s){case 5126:return pE;case 35664:return mE;case 35665:return gE;case 35666:return yE;case 35674:return vE;case 35675:return xE;case 35676:return _E;case 5124:case 35670:return bE;case 35667:case 35671:return ME;case 35668:case 35672:return SE;case 35669:case 35673:return wE;case 5125:return EE;case 36294:return AE;case 36295:return TE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return zE}}var hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fE(t.type)}},ud=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kE(t.type)}},dd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},du=/(\w+)(\])?(\[|\.)?/g;function Y0(s,e){s.seq.push(e),s.map[e.id]=e}function NE(s,e,t){let n=s.name,i=n.length;for(du.lastIndex=0;;){let r=du.exec(n),o=du.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Y0(t,l===void 0?new hd(a,s,e):new ud(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new dd(a),Y0(t,d)),t=d}}}var Ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);NE(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Z0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var LE=37297,DE=0;function BE(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var K0=new Ve;function UE(s){$e._getMatrix(K0,$e.workingColorSpace,s);let e=`mat3( ${K0.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case ul:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+BE(s.getShaderSource(e),o)}else return i}function OE(s,e){let t=UE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FE(s,e){let t;switch(e){case Zb:t="Linear";break;case Kb:t="Reinhard";break;case $b:t="Cineon";break;case Jb:t="ACESFilmic";break;case eM:t="AgX";break;case tM:t="Neutral";break;case Qb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vc=new I;function VE(){$e.getLuminanceCoefficients(vc);let s=vc.x.toFixed(4),e=vc.y.toFixed(4),t=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function GE(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WE(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Wo(s){return s!==""}function J0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var XE=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(s){return s.replace(XE,jE)}var qE=new Map;function jE(s,e){let t=Xe[e];if(t===void 0){let n=qE.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fd(t)}var YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(s){return s.replace(YE,ZE)}function ZE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===al?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function $E(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zr:case kr:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JE(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===kr&&(e="ENVMAP_MODE_REFRACTION"),e}function QE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Nd:e="ENVMAP_BLENDING_MULTIPLY";break;case jb:e="ENVMAP_BLENDING_MIX";break;case Yb:e="ENVMAP_BLENDING_ADD";break}return e}function eA(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tA(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=KE(t),l=$E(t),h=JE(t),d=QE(t),u=eA(t),f=HE(t),g=GE(r),y=i.createProgram(),m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?Xe.tonemapping_pars_fragment:"",t.toneMapping!==rs?FE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,OE("linearToOutputTexel",t.outputColorSpace),VE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=fd(o),o=J0(o,t),o=Q0(o,t),a=fd(a),a=J0(a,t),a=Q0(a,t),o=eg(o),a=eg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===p0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===p0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+m+o,v=x+p+a,T=Z0(i,i.VERTEX_SHADER,_),A=Z0(i,i.FRAGMENT_SHADER,v);i.attachShader(y,T),i.attachShader(y,A),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function R(P){if(s.debug.checkShaderErrors){let G=i.getProgramInfoLog(y).trim(),k=i.getShaderInfoLog(T).trim(),D=i.getShaderInfoLog(A).trim(),V=!0,N=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,T,A);else{let Z=$0(i,T,"vertex"),H=$0(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Z+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||D==="")&&(N=!1);N&&(P.diagnostics={runnable:V,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:D,prefix:p}})}i.deleteShader(T),i.deleteShader(A),z=new Ir(i,y),w=WE(i,y)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(y,LE)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=A,this}var nA=0,pd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new md(e),t.set(e,n)),n}},md=class{constructor(e){this.id=nA++,this.code=e,this.usedTimes=0}};function iA(s,e,t,n,i,r,o){let a=new Lc,c=new pd,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,G,k){let D=G.fog,V=k.geometry,N=w.isMeshStandardMaterial?G.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),H=Z&&Z.mapping===cl?Z.image.height:null,q=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=ie!==void 0?ie.length:0,ne=0;V.morphAttributes.position!==void 0&&(ne=1),V.morphAttributes.normal!==void 0&&(ne=2),V.morphAttributes.color!==void 0&&(ne=3);let De,Y,te,ve;if(q){let at=ni[q];De=at.vertexShader,Y=at.fragmentShader}else De=w.vertexShader,Y=w.fragmentShader,c.update(w),te=c.getVertexShaderID(w),ve=c.getFragmentShaderID(w);let he=s.getRenderTarget(),ke=s.state.buffers.depth.getReversed(),J=k.isInstancedMesh===!0,se=k.isBatchedMesh===!0,xe=!!w.map,re=!!w.matcap,ce=!!Z,L=!!w.aoMap,Ke=!!w.lightMap,ze=!!w.bumpMap,Re=!!w.normalMap,fe=!!w.displacementMap,Ye=!!w.emissiveMap,Ce=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,O=w.clearcoat>0,$=w.dispersion>0,ee=w.iridescence>0,K=w.sheen>0,Ie=w.transmission>0,pe=S&&!!w.anisotropyMap,be=O&&!!w.clearcoatMap,Qe=O&&!!w.clearcoatNormalMap,oe=O&&!!w.clearcoatRoughnessMap,Me=ee&&!!w.iridescenceMap,Ne=ee&&!!w.iridescenceThicknessMap,Le=K&&!!w.sheenColorMap,Se=K&&!!w.sheenRoughnessMap,Je=!!w.specularMap,We=!!w.specularColorMap,ut=!!w.specularIntensityMap,B=Ie&&!!w.transmissionMap,de=Ie&&!!w.thicknessMap,j=!!w.gradientMap,Q=!!w.alphaMap,ye=w.alphaTest>0,me=!!w.alphaHash,Oe=!!w.extensions,Mt=rs;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Mt=s.toneMapping);let jt={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:De,fragmentShader:Y,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:se,batchingColor:se&&k._colorsTexture!==null,instancing:J,instancingColor:J&&k.instanceColor!==null,instancingMorph:J&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:$t,alphaToCoverage:!!w.alphaToCoverage,map:xe,matcap:re,envMap:ce,envMapMode:ce&&Z.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:Ke,bumpMap:ze,normalMap:Re,displacementMap:u&&fe,emissiveMap:Ye,normalMapObjectSpace:Re&&w.normalMapType===oM,normalMapTangentSpace:Re&&w.normalMapType===hl,metalnessMap:Ce,roughnessMap:C,anisotropy:S,anisotropyMap:pe,clearcoat:O,clearcoatMap:be,clearcoatNormalMap:Qe,clearcoatRoughnessMap:oe,dispersion:$,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:Le,sheenRoughnessMap:Se,specularMap:Je,specularColorMap:We,specularIntensityMap:ut,transmission:Ie,transmissionMap:B,thicknessMap:de,gradientMap:j,opaque:w.transparent===!1&&w.blending===Tr&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:ye,alphaHash:me,combine:w.combine,mapUv:xe&&y(w.map.channel),aoMapUv:L&&y(w.aoMap.channel),lightMapUv:Ke&&y(w.lightMap.channel),bumpMapUv:ze&&y(w.bumpMap.channel),normalMapUv:Re&&y(w.normalMap.channel),displacementMapUv:fe&&y(w.displacementMap.channel),emissiveMapUv:Ye&&y(w.emissiveMap.channel),metalnessMapUv:Ce&&y(w.metalnessMap.channel),roughnessMapUv:C&&y(w.roughnessMap.channel),anisotropyMapUv:pe&&y(w.anisotropyMap.channel),clearcoatMapUv:be&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(w.sheenRoughnessMap.channel),specularMapUv:Je&&y(w.specularMap.channel),specularColorMapUv:We&&y(w.specularColorMap.channel),specularIntensityMapUv:ut&&y(w.specularIntensityMap.channel),transmissionMapUv:B&&y(w.transmissionMap.channel),thicknessMapUv:de&&y(w.thicknessMap.channel),alphaMapUv:Q&&y(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Re||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(xe||Q),fog:!!D,useFog:w.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ke,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mt,decodeVideoTexture:xe&&w.map.isVideoTexture===!0&&$e.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:Ye&&w.emissiveMap.isVideoTexture===!0&&$e.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vn,flipSided:w.side===xt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(b,w),_(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let b=g[w.type],P;if(b){let G=ni[b];P=jM.clone(G.uniforms)}else P=w.uniforms;return P}function T(w,b){let P;for(let G=0,k=h.length;G<k;G++){let D=h[G];if(D.cacheKey===b){P=D,++P.usedTimes;break}}return P===void 0&&(P=new tA(s,b,w,r),h.push(P)),P}function A(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:z}}function sA(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function rA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ig(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,g,y,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||rA),n.length>1&&n.sort(u||ng),i.length>1&&i.sort(u||ng)}function h(){for(let d=e,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function oA(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new ig,s.set(n,[o])):i>=r.length?(o=new ig,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function aA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new _e};break;case"SpotLight":t={position:new I,direction:new I,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function cA(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var lA=0;function hA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uA(s){let e=new aA,t=cA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new Ue,o=new Ue;function a(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,_=0,v=0,T=0,A=0,R=0;l.sort(hA);for(let w=0,b=l.length;w<b;w++){let P=l[w],G=P.color,k=P.intensity,D=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*k,d+=G.g*k,u+=G.b*k;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],k);R++}else if(P.isDirectionalLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=N,f++}else if(P.isSpotLight){let N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(G).multiplyScalar(k),N.distance=D,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[y]=N;let Z=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[y]=Z.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=V,v++}y++}else if(P.isRectAreaLight){let N=e.get(P);N.color.copy(G).multiplyScalar(k),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=N,m++}else if(P.isPointLight){let N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=N,g++}else if(P.isHemisphereLight){let N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(k),N.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=N,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let z=n.hash;(z.directionalLength!==f||z.pointLength!==g||z.spotLength!==y||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==x||z.numPointShadows!==_||z.numSpotShadows!==v||z.numSpotMaps!==T||z.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,z.directionalLength=f,z.pointLength=g,z.spotLength=y,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=x,z.numPointShadows=_,z.numSpotShadows=v,z.numSpotMaps=T,z.numLightProbes=R,n.version=lA++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function sg(s){let e=new uA(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dA(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new sg(s),e.set(i,[a])):r>=o.length?(a=new sg(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var gd=class extends nn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yd=class extends nn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mA(s,e,t){let n=new Jo,i=new qe,r=new qe,o=new nt,a=new gd({depthPacking:rM}),c=new yd,l={},h=t.maxTextureSize,d={[ri]:xt,[xt]:ri,[Vn]:Vn},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:fA,fragmentShader:pA}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new zt;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new tt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let p=this.type;this.render=function(A,R,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),G=s.state;G.setBlending(ss),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let k=p!==Ai&&this.type===Ai,D=p===Ai&&this.type!==Ai;for(let V=0,N=A.length;V<N;V++){let Z=A[V],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let q=H.getFrameExtents();if(i.multiply(q),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||k===!0||D===!0){let le=this.type!==Ai?{minFilter:Dt,magFilter:Dt}:{};H.map!==null&&H.map.dispose(),H.map=new Pi(i.x,i.y,le),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ie=H.getViewportCount();for(let le=0;le<ie;le++){let ne=H.getViewport(le);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),G.viewport(o),H.updateMatrices(Z,le),n=H.getFrustum(),v(R,z,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Ai&&x(H,z),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,P)};function x(A,R){let z=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,z,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,z,f,y,null)}function _(A,R,z,w){let b=null,P=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=z.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=b.uuid,k=R.uuid,D=l[G];D===void 0&&(D={},l[G]=D);let V=D[k];V===void 0&&(V=b.clone(),D[k]=V,R.addEventListener("dispose",T)),b=V}if(b.visible=R.visible,b.wireframe=R.wireframe,w===Ai?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=s.properties.get(b);G.light=z}return b}function v(A,R,z,w,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Ai)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);let k=e.update(A),D=A.material;if(Array.isArray(D)){let V=k.groups;for(let N=0,Z=V.length;N<Z;N++){let H=V[N],q=D[H.materialIndex];if(q&&q.visible){let ie=_(A,q,w,b);A.onBeforeShadow(s,A,R,z,k,ie,H),s.renderBufferDirect(z,null,k,ie,A,H),A.onAfterShadow(s,A,R,z,k,ie,H)}}}else if(D.visible){let V=_(A,D,w,b);A.onBeforeShadow(s,A,R,z,k,V,null),s.renderBufferDirect(z,null,k,V,A,null),A.onAfterShadow(s,A,R,z,k,V,null)}}let G=A.children;for(let k=0,D=G.length;k<D;k++)v(G[k],R,z,w,b)}function T(A){A.target.removeEventListener("dispose",T);for(let z in l){let w=l[z],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var gA={[Su]:wu,[Eu]:Ru,[Au]:Cu,[Pr]:Tu,[wu]:Su,[Ru]:Eu,[Cu]:Au,[Tu]:Pr};function yA(s,e){function t(){let B=!1,de=new nt,j=null,Q=new nt(0,0,0,0);return{setMask:function(ye){j!==ye&&!B&&(s.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){B=ye},setClear:function(ye,me,Oe,Mt,jt){jt===!0&&(ye*=Mt,me*=Mt,Oe*=Mt),de.set(ye,me,Oe,Mt),Q.equals(de)===!1&&(s.clearColor(ye,me,Oe,Mt),Q.copy(de))},reset:function(){B=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let B=!1,de=!1,j=null,Q=null,ye=null;return{setReversed:function(me){if(de!==me){let Oe=e.get("EXT_clip_control");de?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);let Mt=ye;ye=null,this.setClear(Mt)}de=me},getReversed:function(){return de},setTest:function(me){me?he(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(me){j!==me&&!B&&(s.depthMask(me),j=me)},setFunc:function(me){if(de&&(me=gA[me]),Q!==me){switch(me){case Su:s.depthFunc(s.NEVER);break;case wu:s.depthFunc(s.ALWAYS);break;case Eu:s.depthFunc(s.LESS);break;case Pr:s.depthFunc(s.LEQUAL);break;case Au:s.depthFunc(s.EQUAL);break;case Tu:s.depthFunc(s.GEQUAL);break;case Ru:s.depthFunc(s.GREATER);break;case Cu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=me}},setLocked:function(me){B=me},setClear:function(me){ye!==me&&(de&&(me=1-me),s.clearDepth(me),ye=me)},reset:function(){B=!1,j=null,Q=null,ye=null,de=!1}}}function i(){let B=!1,de=null,j=null,Q=null,ye=null,me=null,Oe=null,Mt=null,jt=null;return{setTest:function(at){B||(at?he(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(at){de!==at&&!B&&(s.stencilMask(at),de=at)},setFunc:function(at,Dn,vi){(j!==at||Q!==Dn||ye!==vi)&&(s.stencilFunc(at,Dn,vi),j=at,Q=Dn,ye=vi)},setOp:function(at,Dn,vi){(me!==at||Oe!==Dn||Mt!==vi)&&(s.stencilOp(at,Dn,vi),me=at,Oe=Dn,Mt=vi)},setLocked:function(at){B=at},setClear:function(at){jt!==at&&(s.clearStencil(at),jt=at)},reset:function(){B=!1,de=null,j=null,Q=null,ye=null,me=null,Oe=null,Mt=null,jt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,_=null,v=null,T=null,A=null,R=new _e(0,0,0),z=0,w=!1,b=null,P=null,G=null,k=null,D=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=Z>=2);let q=null,ie={},le=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),De=new nt().fromArray(le),Y=new nt().fromArray(ne);function te(B,de,j,Q){let ye=new Uint8Array(4),me=s.createTexture();s.bindTexture(B,me),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<j;Oe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(de+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return me}let ve={};ve[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(s.DEPTH_TEST),o.setFunc(Pr),ze(!1),Re(r0),he(s.CULL_FACE),L(ss);function he(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function ke(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function J(B,de){return d[B]!==de?(s.bindFramebuffer(B,de),d[B]=de,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=de),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=de),!0):!1}function se(B,de){let j=f,Q=!1;if(B){j=u.get(de),j===void 0&&(j=[],u.set(de,j));let ye=B.textures;if(j.length!==ye.length||j[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Oe=ye.length;me<Oe;me++)j[me]=s.COLOR_ATTACHMENT0+me;j.length=ye.length,Q=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,Q=!0);Q&&s.drawBuffers(j)}function xe(B){return g!==B?(s.useProgram(B),g=B,!0):!1}let re={[Ns]:s.FUNC_ADD,[Ib]:s.FUNC_SUBTRACT,[Pb]:s.FUNC_REVERSE_SUBTRACT};re[zb]=s.MIN,re[kb]=s.MAX;let ce={[Nb]:s.ZERO,[Lb]:s.ONE,[Db]:s.SRC_COLOR,[bu]:s.SRC_ALPHA,[Hb]:s.SRC_ALPHA_SATURATE,[Fb]:s.DST_COLOR,[Ub]:s.DST_ALPHA,[Bb]:s.ONE_MINUS_SRC_COLOR,[Mu]:s.ONE_MINUS_SRC_ALPHA,[Vb]:s.ONE_MINUS_DST_COLOR,[Ob]:s.ONE_MINUS_DST_ALPHA,[Gb]:s.CONSTANT_COLOR,[Wb]:s.ONE_MINUS_CONSTANT_COLOR,[Xb]:s.CONSTANT_ALPHA,[qb]:s.ONE_MINUS_CONSTANT_ALPHA};function L(B,de,j,Q,ye,me,Oe,Mt,jt,at){if(B===ss){y===!0&&(ke(s.BLEND),y=!1);return}if(y===!1&&(he(s.BLEND),y=!0),B!==Cb){if(B!==m||at!==w){if((p!==Ns||v!==Ns)&&(s.blendEquation(s.FUNC_ADD),p=Ns,v=Ns),at)switch(B){case Tr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case o0:s.blendFunc(s.ONE,s.ONE);break;case a0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case c0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case o0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case a0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case c0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,_=null,T=null,A=null,R.set(0,0,0),z=0,m=B,w=at}return}ye=ye||de,me=me||j,Oe=Oe||Q,(de!==p||ye!==v)&&(s.blendEquationSeparate(re[de],re[ye]),p=de,v=ye),(j!==x||Q!==_||me!==T||Oe!==A)&&(s.blendFuncSeparate(ce[j],ce[Q],ce[me],ce[Oe]),x=j,_=Q,T=me,A=Oe),(Mt.equals(R)===!1||jt!==z)&&(s.blendColor(Mt.r,Mt.g,Mt.b,jt),R.copy(Mt),z=jt),m=B,w=!1}function Ke(B,de){B.side===Vn?ke(s.CULL_FACE):he(s.CULL_FACE);let j=B.side===xt;de&&(j=!j),ze(j),B.blending===Tr&&B.transparent===!1?L(ss):L(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Q=B.stencilWrite;a.setTest(Q),Q&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ye(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(B){b!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),b=B)}function Re(B){B!==Ab?(he(s.CULL_FACE),B!==P&&(B===r0?s.cullFace(s.BACK):B===Tb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),P=B}function fe(B){B!==G&&(N&&s.lineWidth(B),G=B)}function Ye(B,de,j){B?(he(s.POLYGON_OFFSET_FILL),(k!==de||D!==j)&&(s.polygonOffset(de,j),k=de,D=j)):ke(s.POLYGON_OFFSET_FILL)}function Ce(B){B?he(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function C(B){B===void 0&&(B=s.TEXTURE0+V-1),q!==B&&(s.activeTexture(B),q=B)}function S(B,de,j){j===void 0&&(q===null?j=s.TEXTURE0+V-1:j=q);let Q=ie[j];Q===void 0&&(Q={type:void 0,texture:void 0},ie[j]=Q),(Q.type!==B||Q.texture!==de)&&(q!==j&&(s.activeTexture(j),q=j),s.bindTexture(B,de||ve[B]),Q.type=B,Q.texture=de)}function O(){let B=ie[q];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Qe(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(B){De.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),De.copy(B))}function Se(B){Y.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Y.copy(B))}function Je(B,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let Q=j.get(B);Q===void 0&&(Q=s.getUniformBlockIndex(de,B.name),j.set(B,Q))}function We(B,de){let Q=l.get(de).get(B);c.get(de)!==Q&&(s.uniformBlockBinding(de,Q,B.__bindingPointIndex),c.set(de,Q))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,ie={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,_=null,v=null,T=null,A=null,R=new _e(0,0,0),z=0,w=!1,b=null,P=null,G=null,k=null,D=null,De.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:ke,bindFramebuffer:J,drawBuffers:se,useProgram:xe,setBlending:L,setMaterial:Ke,setFlipSided:ze,setCullFace:Re,setLineWidth:fe,setPolygonOffset:Ye,setScissorTest:Ce,activeTexture:C,bindTexture:S,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Ne,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:Qe,texStorage3D:oe,texSubImage2D:K,texSubImage3D:Ie,compressedTexSubImage2D:pe,compressedTexSubImage3D:be,scissor:Le,viewport:Se,reset:ut}}function rg(s,e,t,n){let i=vA(n);switch(t){case Cg:return s*e;case Pg:return s*e;case zg:return s*e*2;case aa:return s*e/i.components*i.byteLength;case Od:return s*e/i.components*i.byteLength;case kg:return s*e*2/i.components*i.byteLength;case Fd:return s*e*2/i.components*i.byteLength;case Ig:return s*e*3/i.components*i.byteLength;case An:return s*e*4/i.components*i.byteLength;case Vd:return s*e*4/i.components*i.byteLength;case Tc:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ku:case Lu:return Math.max(s,16)*Math.max(e,8)/4;case zu:case Nu:return Math.max(s,8)*Math.max(e,8)/2;case Du:case Bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ju:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Qu:case ed:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ng:case td:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vA(s){switch(s){case Ii:case Ag:return{byteLength:1,components:1};case Ko:case Tg:case oa:return{byteLength:2,components:1};case Bd:case Ud:return{byteLength:2,components:4};case Bs:case Dd:case Wn:return{byteLength:4,components:1};case Rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function xA(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):$o("canvas")}function y(C,S,O){let $=1,ee=Ce(C);if((ee.width>O||ee.height>O)&&($=O/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let K=Math.floor($*ee.width),Ie=Math.floor($*ee.height);d===void 0&&(d=g(K,Ie));let pe=S?g(K,Ie):d;return pe.width=K,pe.height=Ie,pe.getContext("2d").drawImage(C,0,0,K,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Ie+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,S,O,$,ee=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(O===s.FLOAT&&(K=s.R32F),O===s.HALF_FLOAT&&(K=s.R16F),O===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.R8UI),O===s.UNSIGNED_SHORT&&(K=s.R16UI),O===s.UNSIGNED_INT&&(K=s.R32UI),O===s.BYTE&&(K=s.R8I),O===s.SHORT&&(K=s.R16I),O===s.INT&&(K=s.R32I)),S===s.RG&&(O===s.FLOAT&&(K=s.RG32F),O===s.HALF_FLOAT&&(K=s.RG16F),O===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RG8UI),O===s.UNSIGNED_SHORT&&(K=s.RG16UI),O===s.UNSIGNED_INT&&(K=s.RG32UI),O===s.BYTE&&(K=s.RG8I),O===s.SHORT&&(K=s.RG16I),O===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGB8UI),O===s.UNSIGNED_SHORT&&(K=s.RGB16UI),O===s.UNSIGNED_INT&&(K=s.RGB32UI),O===s.BYTE&&(K=s.RGB8I),O===s.SHORT&&(K=s.RGB16I),O===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),O===s.UNSIGNED_INT&&(K=s.RGBA32UI),O===s.BYTE&&(K=s.RGBA8I),O===s.SHORT&&(K=s.RGBA16I),O===s.INT&&(K=s.RGBA32I)),S===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){let Ie=ee?ul:$e.getTransfer($);O===s.FLOAT&&(K=s.RGBA32F),O===s.HALF_FLOAT&&(K=s.RGBA16F),O===s.UNSIGNED_BYTE&&(K=Ie===lt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(C,S){let O;return C?S===null||S===Bs||S===Nr?O=s.DEPTH24_STENCIL8:S===Wn?O=s.DEPTH32F_STENCIL8:S===Ko&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bs||S===Nr?O=s.DEPTH_COMPONENT24:S===Wn?O=s.DEPTH_COMPONENT32F:S===Ko&&(O=s.DEPTH_COMPONENT16),O}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),z(S),S.isVideoTexture&&h.delete(S)}function R(C){let S=C.target;S.removeEventListener("dispose",R),b(S)}function z(C){let S=n.get(C);if(S.__webglInit===void 0)return;let O=C.source,$=u.get(O);if($){let ee=$[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(C),Object.keys($).length===0&&u.delete(O)}n.remove(C)}function w(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let O=C.source,$=u.get(O);delete $[S.__cacheKey],o.memory.textures--}function b(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ee=0;ee<S.__webglFramebuffer[$].length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[$][ee]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=C.textures;for(let $=0,ee=O.length;$<ee;$++){let K=n.get(O[$]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(C)}let P=0;function G(){P=0}function k(){let C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function D(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function V(C,S){let O=n.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){let $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,C,S);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function N(C,S){let O=n.get(C);if(C.version>0&&O.__version!==C.version){Y(O,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function Z(C,S){let O=n.get(C);if(C.version>0&&O.__version!==C.version){Y(O,C,S);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function H(C,S){let O=n.get(C);if(C.version>0&&O.__version!==C.version){te(O,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}let q={[qn]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[Zo]:s.MIRRORED_REPEAT},ie={[Dt]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[Er]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[Xo]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},le={[aM]:s.NEVER,[fM]:s.ALWAYS,[cM]:s.LESS,[Dg]:s.LEQUAL,[lM]:s.EQUAL,[dM]:s.GEQUAL,[hM]:s.GREATER,[uM]:s.NOTEQUAL};function ne(C,S){if(S.type===Wn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ct||S.magFilter===Xo||S.magFilter===Er||S.magFilter===si||S.minFilter===Ct||S.minFilter===Xo||S.minFilter===Er||S.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,q[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,q[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,q[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ie[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dt||S.minFilter!==Er&&S.minFilter!==si||S.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function De(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let $=S.source,ee=u.get($);ee===void 0&&(ee={},u.set($,ee));let K=D(S);if(K!==C.__cacheKey){ee[K]===void 0&&(ee[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[K].usedTimes++;let Ie=ee[C.__cacheKey];Ie!==void 0&&(ee[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&w(S)),C.__cacheKey=K,C.__webglTexture=ee[K].texture}return O}function Y(C,S,O){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);let ee=De(C,S),K=S.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+O);let Ie=n.get(K);if(K.version!==Ie.__version||ee===!0){t.activeTexture(s.TEXTURE0+O);let pe=$e.getPrimaries($e.workingColorSpace),be=S.colorSpace===ii?null:$e.getPrimaries(S.colorSpace),Qe=S.colorSpace===ii||pe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let oe=y(S.image,!1,i.maxTextureSize);oe=Ye(S,oe);let Me=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),Le=_(S.internalFormat,Me,Ne,S.colorSpace,S.isVideoTexture);ne($,S);let Se,Je=S.mipmaps,We=S.isVideoTexture!==!0,ut=Ie.__version===void 0||ee===!0,B=K.dataReady,de=T(S,oe);if(S.isDepthTexture)Le=v(S.format===Lr,S.type),ut&&(We?t.texStorage2D(s.TEXTURE_2D,1,Le,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Le,oe.width,oe.height,0,Me,Ne,null));else if(S.isDataTexture)if(Je.length>0){We&&ut&&t.texStorage2D(s.TEXTURE_2D,de,Le,Je[0].width,Je[0].height);for(let j=0,Q=Je.length;j<Q;j++)Se=Je[j],We?B&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,Se.width,Se.height,Me,Ne,Se.data):t.texImage2D(s.TEXTURE_2D,j,Le,Se.width,Se.height,0,Me,Ne,Se.data);S.generateMipmaps=!1}else We?(ut&&t.texStorage2D(s.TEXTURE_2D,de,Le,oe.width,oe.height),B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,Me,Ne,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Le,oe.width,oe.height,0,Me,Ne,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Le,Je[0].width,Je[0].height,oe.depth);for(let j=0,Q=Je.length;j<Q;j++)if(Se=Je[j],S.format!==An)if(Me!==null)if(We){if(B)if(S.layerUpdates.size>0){let ye=rg(Se.width,Se.height,S.format,S.type);for(let me of S.layerUpdates){let Oe=Se.data.subarray(me*ye/Se.data.BYTES_PER_ELEMENT,(me+1)*ye/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,me,Se.width,Se.height,1,Me,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,oe.depth,Me,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Le,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,oe.depth,Me,Ne,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,Le,Se.width,Se.height,oe.depth,0,Me,Ne,Se.data)}else{We&&ut&&t.texStorage2D(s.TEXTURE_2D,de,Le,Je[0].width,Je[0].height);for(let j=0,Q=Je.length;j<Q;j++)Se=Je[j],S.format!==An?Me!==null?We?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,j,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,Se.width,Se.height,Me,Ne,Se.data):t.texImage2D(s.TEXTURE_2D,j,Le,Se.width,Se.height,0,Me,Ne,Se.data)}else if(S.isDataArrayTexture)if(We){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Le,oe.width,oe.height,oe.depth),B)if(S.layerUpdates.size>0){let j=rg(oe.width,oe.height,S.format,S.type);for(let Q of S.layerUpdates){let ye=oe.data.subarray(Q*j/oe.data.BYTES_PER_ELEMENT,(Q+1)*j/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,oe.width,oe.height,1,Me,Ne,ye)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ne,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,Me,Ne,oe.data);else if(S.isData3DTexture)We?(ut&&t.texStorage3D(s.TEXTURE_3D,de,Le,oe.width,oe.height,oe.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Ne,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,Me,Ne,oe.data);else if(S.isFramebufferTexture){if(ut)if(We)t.texStorage2D(s.TEXTURE_2D,de,Le,oe.width,oe.height);else{let j=oe.width,Q=oe.height;for(let ye=0;ye<de;ye++)t.texImage2D(s.TEXTURE_2D,ye,Le,j,Q,0,Me,Ne,null),j>>=1,Q>>=1}}else if(Je.length>0){if(We&&ut){let j=Ce(Je[0]);t.texStorage2D(s.TEXTURE_2D,de,Le,j.width,j.height)}for(let j=0,Q=Je.length;j<Q;j++)Se=Je[j],We?B&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,Me,Ne,Se):t.texImage2D(s.TEXTURE_2D,j,Le,Me,Ne,Se);S.generateMipmaps=!1}else if(We){if(ut){let j=Ce(oe);t.texStorage2D(s.TEXTURE_2D,de,Le,j.width,j.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Ne,oe)}else t.texImage2D(s.TEXTURE_2D,0,Le,Me,Ne,oe);m(S)&&p($),Ie.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,O){if(S.image.length!==6)return;let $=De(C,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);let K=n.get(ee);if(ee.version!==K.__version||$===!0){t.activeTexture(s.TEXTURE0+O);let Ie=$e.getPrimaries($e.workingColorSpace),pe=S.colorSpace===ii?null:$e.getPrimaries(S.colorSpace),be=S.colorSpace===ii||Ie===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let Q=0;Q<6;Q++)!Qe&&!oe?Me[Q]=y(S.image[Q],!0,i.maxCubemapSize):Me[Q]=oe?S.image[Q].image:S.image[Q],Me[Q]=Ye(S,Me[Q]);let Ne=Me[0],Le=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),Je=_(S.internalFormat,Le,Se,S.colorSpace),We=S.isVideoTexture!==!0,ut=K.__version===void 0||$===!0,B=ee.dataReady,de=T(S,Ne);ne(s.TEXTURE_CUBE_MAP,S);let j;if(Qe){We&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Je,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){j=Me[Q].mipmaps;for(let ye=0;ye<j.length;ye++){let me=j[ye];S.format!==An?Le!==null?We?B&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,me.width,me.height,Le,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,me.width,me.height,Le,Se,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,Je,me.width,me.height,0,Le,Se,me.data)}}}else{if(j=S.mipmaps,We&&ut){j.length>0&&de++;let Q=Ce(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(oe){We?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Me[Q].width,Me[Q].height,Le,Se,Me[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Me[Q].width,Me[Q].height,0,Le,Se,Me[Q].data);for(let ye=0;ye<j.length;ye++){let Oe=j[ye].image[Q].image;We?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Oe.width,Oe.height,Le,Se,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,Je,Oe.width,Oe.height,0,Le,Se,Oe.data)}}else{We?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,Se,Me[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Le,Se,Me[Q]);for(let ye=0;ye<j.length;ye++){let me=j[ye];We?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Le,Se,me.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,Je,Le,Se,me.image[Q])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ve(C,S,O,$,ee,K){let Ie=r.convert(O.format,O.colorSpace),pe=r.convert(O.type),be=_(O.internalFormat,Ie,pe,O.colorSpace),Qe=n.get(S),oe=n.get(O);if(oe.__renderTarget=S,!Qe.__hasExternalTextures){let Me=Math.max(1,S.width>>K),Ne=Math.max(1,S.height>>K);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,be,Me,Ne,S.depth,0,Ie,pe,null):t.texImage2D(ee,K,be,Me,Ne,0,Ie,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Re(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,ee,oe.__webglTexture,0,ze(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,ee,oe.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(C,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let $=S.depthTexture,ee=$&&$.isDepthTexture?$.type:null,K=v(S.stencilBuffer,ee),Ie=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=ze(S);Re(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,K,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,C)}else{let $=S.textures;for(let ee=0;ee<$.length;ee++){let K=$[ee],Ie=r.convert(K.format,K.colorSpace),pe=r.convert(K.type),be=_(K.internalFormat,Ie,pe,K.colorSpace),Qe=ze(S);O&&Re(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,be,S.width,S.height):Re(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,be,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,be,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);let ee=$.__webglTexture,K=ze(S);if(S.depthTexture.format===Rr)Re(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Lr)Re(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function J(C){let S=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=$}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ke(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),he(S.__webglDepthbuffer[$],C,!1);else{let ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),he(S.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(C,S,O){let $=n.get(C);S!==void 0&&ve($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&J(C)}function xe(C){let S=C.texture,O=n.get(C),$=n.get(S);C.addEventListener("dispose",R);let ee=C.textures,K=C.isWebGLCubeRenderTarget===!0,Ie=ee.length>1;if(Ie||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let be=0;be<S.mipmaps.length;be++)O.__webglFramebuffer[pe][be]=s.createFramebuffer()}else O.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)O.__webglFramebuffer[pe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let pe=0,be=ee.length;pe<be;pe++){let Qe=n.get(ee[pe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Re(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){let be=ee[pe];O.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);let Qe=r.convert(be.format,be.colorSpace),oe=r.convert(be.type),Me=_(be.internalFormat,Qe,oe,be.colorSpace,C.isXRRenderTarget===!0),Ne=ze(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),he(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ne(s.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ve(O.__webglFramebuffer[pe][be],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else ve(O.__webglFramebuffer[pe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let pe=0,be=ee.length;pe<be;pe++){let Qe=ee[pe],oe=n.get(Qe);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),ne(s.TEXTURE_2D,Qe),ve(O.__webglFramebuffer,C,Qe,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),m(Qe)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,$.__webglTexture),ne(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)ve(O.__webglFramebuffer[be],C,S,s.COLOR_ATTACHMENT0,pe,be);else ve(O.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,pe,0);m(S)&&p(pe),t.unbindTexture()}C.depthBuffer&&J(C)}function re(C){let S=C.textures;for(let O=0,$=S.length;O<$;O++){let ee=S[O];if(m(ee)){let K=x(C),Ie=n.get(ee).__webglTexture;t.bindTexture(K,Ie),p(K),t.unbindTexture()}}}let ce=[],L=[];function Ke(C){if(C.samples>0){if(Re(C)===!1){let S=C.textures,O=C.width,$=C.height,ee=s.COLOR_BUFFER_BIT,K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(C),pe=S.length>1;if(pe)for(let be=0;be<S.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let be=0;be<S.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[be]);let Qe=n.get(S[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qe,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,ee,s.NEAREST),c===!0&&(ce.length=0,L.length=0,ce.push(s.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ce.push(K),L.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<S.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[be]);let Qe=n.get(S[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ze(C){return Math.min(i.maxSamples,C.samples)}function Re(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Ye(C,S){let O=C.colorSpace,$=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==$t&&O!==ii&&($e.getTransfer(O)===lt?($!==An||ee!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=se,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Re}function _A(s,e){function t(n,i=ii){let r,o=$e.getTransfer(i);if(n===Ii)return s.UNSIGNED_BYTE;if(n===Bd)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ud)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Rg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ag)return s.BYTE;if(n===Tg)return s.SHORT;if(n===Ko)return s.UNSIGNED_SHORT;if(n===Dd)return s.INT;if(n===Bs)return s.UNSIGNED_INT;if(n===Wn)return s.FLOAT;if(n===oa)return s.HALF_FLOAT;if(n===Cg)return s.ALPHA;if(n===Ig)return s.RGB;if(n===An)return s.RGBA;if(n===Pg)return s.LUMINANCE;if(n===zg)return s.LUMINANCE_ALPHA;if(n===Rr)return s.DEPTH_COMPONENT;if(n===Lr)return s.DEPTH_STENCIL;if(n===aa)return s.RED;if(n===Od)return s.RED_INTEGER;if(n===kg)return s.RG;if(n===Fd)return s.RG_INTEGER;if(n===Vd)return s.RGBA_INTEGER;if(n===Tc||n===Rc||n===Cc||n===Ic)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ic)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zu||n===ku||n===Nu||n===Lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ku)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Du||n===Bu||n===Uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Du||n===Bu)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===Fu||n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===qu||n===ju||n===Yu||n===Zu||n===Ku||n===$u||n===Ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ou)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ju)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ku)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$u)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ju)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Qu||n===ed)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pc)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ed)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ng||n===td||n===nd||n===id)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===td)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===id)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var vd=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Kt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},bA={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bA)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},MA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ht,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:MA,fragmentShader:SA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Fc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_d=class extends os{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,y=new xd,m=t.getContextAttributes(),p=null,x=null,_=[],v=[],T=new qe,A=null,R=new Lt;R.viewport=new nt;let z=new Lt;z.viewport=new nt;let w=[R,z],b=new vd,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=_[Y];return te===void 0&&(te=new Yo,_[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=_[Y];return te===void 0&&(te=new Yo,_[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=_[Y];return te===void 0&&(te=new Yo,_[Y]=te),te.getHandSpace()};function k(Y){let te=v.indexOf(Y.inputSource);if(te===-1)return;let ve=_[te];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",V);for(let Y=0;Y<_.length;Y++){let te=v[Y];te!==null&&(v[Y]=null,_[Y].disconnect(te))}P=null,G=null,y.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",D),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pi(f.framebufferWidth,f.framebufferHeight,{format:An,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ve=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Lr:Rr,ve=m.stencil?Nr:Bs);let ke={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(ke),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Pi(u.textureWidth,u.textureHeight,{format:An,type:Ii,depthTexture:new Hc(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(Y){for(let te=0;te<Y.removed.length;te++){let ve=Y.removed[te],he=v.indexOf(ve);he>=0&&(v[he]=null,_[he].disconnect(ve))}for(let te=0;te<Y.added.length;te++){let ve=Y.added[te],he=v.indexOf(ve);if(he===-1){for(let J=0;J<_.length;J++)if(J>=v.length){v.push(ve),he=J;break}else if(v[J]===null){v[J]=ve,he=J;break}if(he===-1)break}let ke=_[he];ke&&ke.connect(ve)}}let N=new I,Z=new I;function H(Y,te,ve){N.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);let he=N.distanceTo(Z),ke=te.projectionMatrix.elements,J=ve.projectionMatrix.elements,se=ke[14]/(ke[10]-1),xe=ke[14]/(ke[10]+1),re=(ke[9]+1)/ke[5],ce=(ke[9]-1)/ke[5],L=(ke[8]-1)/ke[0],Ke=(J[8]+1)/J[0],ze=se*L,Re=se*Ke,fe=he/(-L+Ke),Ye=fe*-L;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ye),Y.translateZ(fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ke[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ce=se+fe,C=xe+fe,S=ze-Ye,O=Re+(he-Ye),$=re*xe/C*Ce,ee=ce*xe/C*Ce;Y.projectionMatrix.makePerspective(S,O,$,ee,Ce,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function q(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,ve=Y.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),b.near=z.near=R.near=te,b.far=z.far=R.far=ve,(P!==b.near||G!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,G=b.far),R.layers.mask=Y.layers.mask|2,z.layers.mask=Y.layers.mask|4,b.layers.mask=R.layers.mask|z.layers.mask;let he=Y.parent,ke=b.cameras;q(b,he);for(let J=0;J<ke.length;J++)q(ke[J],he);ke.length===2?H(b,R,z):b.projectionMatrix.copy(R.projectionMatrix),ie(Y,b,he)};function ie(Y,te,ve){ve===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ur*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let le=null;function ne(Y,te){if(h=te.getViewerPose(l||o),g=te,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let he=!1;ve.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let J=0;J<ve.length;J++){let se=ve[J],xe=null;if(f!==null)xe=f.getViewport(se);else{let ce=d.getViewSubImage(u,se);xe=ce.viewport,J===0&&(e.setRenderTargetTextures(x,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(x))}let re=w[J];re===void 0&&(re=new Lt,re.layers.enable(J),re.viewport=new nt,w[J]=re),re.matrix.fromArray(se.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(se.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(xe.x,xe.y,xe.width,xe.height),J===0&&(b.matrix.copy(re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(re)}let ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")){let J=d.getDepthInformation(ve[0]);J&&J.isValid&&J.texture&&y.init(e,J,i.renderState)}}for(let ve=0;ve<_.length;ve++){let he=v[ve],ke=_[ve];he!==null&&ke!==void 0&&ke.update(he,te,l||o)}le&&le(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let De=new Fg;De.setAnimationLoop(ne),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}},zs=new vn,wA=new Ue;function EA(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Og(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),_=x.envMap,v=x.envMapRotation;_&&(m.envMap.value=_,zs.copy(v),zs.x*=-1,zs.y*=-1,zs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),m.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(zs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AA(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function l(x,_){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));let T=_.program;n.updateUBOMapping(x,T);let A=e.render.frame;r[x.id]!==A&&(u(x),r[x.id]=A)}function h(x){let _=d();x.__bindingPointIndex=_;let v=s.createBuffer(),T=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let _=i[x.id],v=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let A=0,R=v.length;A<R;A++){let z=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,b=z.length;w<b;w++){let P=z[w];if(f(P,A,w,T)===!0){let G=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],D=0;for(let V=0;V<k.length;V++){let N=k[V],Z=y(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,G+D,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,v,T){let A=x.value,R=_+"_"+v;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{let z=T[R];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return T[R]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(x){let _=x.uniforms,v=0,T=16;for(let R=0,z=_.length;R<z;R++){let w=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,P=w.length;b<P;b++){let G=w[b],k=Array.isArray(G.value)?G.value:[G.value];for(let D=0,V=k.length;D<V;D++){let N=k[D],Z=y(N),H=v%T,q=H%Z.boundary,ie=H+q;v+=q,ie!==0&&T-ie<Z.storage&&(v+=T-ie),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=Z.storage}}}let A=v%T;return A>0&&(v+=T-A),x.__size=v,x.__cache={},this}function y(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Gc=class{constructor(e={}){let{canvas:t=IM(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=rs,this.toneMappingExposure=1;let v=this,T=!1,A=0,R=0,z=null,w=-1,b=null,P=new nt,G=new nt,k=null,D=new _e(0),V=0,N=t.width,Z=t.height,H=1,q=null,ie=null,le=new nt(0,0,N,Z),ne=new nt(0,0,N,Z),De=!1,Y=new Jo,te=!1,ve=!1,he=new Ue,ke=new Ue,J=new I,se=new nt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function ce(){return z===null?H:1}let L=n;function Ke(E,U){return t.getContext(E,U)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){let U="webgl2";if(L=Ke(U,E),L===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ze,Re,fe,Ye,Ce,C,S,O,$,ee,K,Ie,pe,be,Qe,oe,Me,Ne,Le,Se,Je,We,ut,B;function de(){ze=new Hw(L),ze.init(),We=new _A(L,ze),Re=new Dw(L,ze,e,We),fe=new yA(L,ze),Re.reverseDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),Ye=new Xw(L),Ce=new sA,C=new xA(L,ze,fe,Ce,Re,We,Ye),S=new Uw(v),O=new Vw(v),$=new JM(L),ut=new Nw(L,$),ee=new Gw(L,$,Ye,ut),K=new jw(L,ee,$,Ye),Le=new qw(L,Re,C),oe=new Bw(Ce),Ie=new iA(v,S,O,ze,Re,ut,oe),pe=new EA(v,Ce),be=new oA,Qe=new dA(ze),Ne=new kw(v,S,O,fe,K,f,c),Me=new mA(v,K,Re),B=new AA(L,Ye,Re,fe),Se=new Lw(L,ze,Ye),Je=new Ww(L,ze,Ye),Ye.programs=Ie.programs,v.capabilities=Re,v.extensions=ze,v.properties=Ce,v.renderLists=be,v.shadowMap=Me,v.state=fe,v.info=Ye}de();let j=new _d(v,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(N,Z,!1))},this.getSize=function(E){return E.set(N,Z)},this.setSize=function(E,U,W=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,Z=U,t.width=Math.floor(E*H),t.height=Math.floor(U*H),W===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(N*H,Z*H).floor()},this.setDrawingBufferSize=function(E,U,W){N=E,Z=U,H=W,t.width=Math.floor(E*W),t.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,U,W,X){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,U,W,X),fe.viewport(P.copy(le).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,U,W,X){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,U,W,X),fe.scissor(G.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){fe.setScissorTest(De=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,U=!0,W=!0){let X=0;if(E){let F=!1;if(z!==null){let ae=z.texture.format;F=ae===Vd||ae===Fd||ae===Od}if(F){let ae=z.texture.type,ge=ae===Ii||ae===Bs||ae===Ko||ae===Nr||ae===Bd||ae===Ud,Ee=Ne.getClearColor(),Ae=Ne.getClearAlpha(),Be=Ee.r,Fe=Ee.g,Te=Ee.b;ge?(g[0]=Be,g[1]=Fe,g[2]=Te,g[3]=Ae,L.clearBufferuiv(L.COLOR,0,g)):(y[0]=Be,y[1]=Fe,y[2]=Te,y[3]=Ae,L.clearBufferiv(L.COLOR,0,y))}else X|=L.COLOR_BUFFER_BIT}U&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",me,!1),be.dispose(),Qe.dispose(),Ce.dispose(),S.dispose(),O.dispose(),K.dispose(),ut.dispose(),B.dispose(),Ie.dispose(),j.dispose(),j.removeEventListener("sessionstart",$m),j.removeEventListener("sessionend",Jm),As.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Ye.autoReset,U=Me.enabled,W=Me.autoUpdate,X=Me.needsUpdate,F=Me.type;de(),Ye.autoReset=E,Me.enabled=U,Me.autoUpdate=W,Me.needsUpdate=X,Me.type=F}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){let U=E.target;U.removeEventListener("dispose",Oe),Mt(U)}function Mt(E){jt(E),Ce.remove(E)}function jt(E){let U=Ce.get(E).programs;U!==void 0&&(U.forEach(function(W){Ie.releaseProgram(W)}),E.isShaderMaterial&&Ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,X,F,ae){U===null&&(U=xe);let ge=F.isMesh&&F.matrixWorld.determinant()<0,Ee=Sb(E,U,W,X,F);fe.setMaterial(X,ge);let Ae=W.index,Be=1;if(X.wireframe===!0){if(Ae=ee.getWireframeAttribute(W),Ae===void 0)return;Be=2}let Fe=W.drawRange,Te=W.attributes.position,et=Fe.start*Be,dt=(Fe.start+Fe.count)*Be;ae!==null&&(et=Math.max(et,ae.start*Be),dt=Math.min(dt,(ae.start+ae.count)*Be)),Ae!==null?(et=Math.max(et,0),dt=Math.min(dt,Ae.count)):Te!=null&&(et=Math.max(et,0),dt=Math.min(dt,Te.count));let gt=dt-et;if(gt<0||gt===1/0)return;ut.setup(F,X,Ee,W,Ae);let ln,it=Se;if(Ae!==null&&(ln=$.get(Ae),it=Je,it.setIndex(ln)),F.isMesh)X.wireframe===!0?(fe.setLineWidth(X.wireframeLinewidth*ce()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(F.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),fe.setLineWidth(Pe*ce()),F.isLineSegments?it.setMode(L.LINES):F.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else F.isPoints?it.setMode(L.POINTS):F.isSprite&&it.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Pe=F._multiDrawStarts,xi=F._multiDrawCounts,st=F._multiDrawCount,Bn=Ae?$.get(Ae).bytesPerElement:1,lr=Ce.get(X).currentProgram.getUniforms();for(let pn=0;pn<st;pn++)lr.setValue(L,"_gl_DrawID",pn),it.render(Pe[pn]/Bn,xi[pn])}else if(F.isInstancedMesh)it.renderInstances(et,gt,F.count);else if(W.isInstancedBufferGeometry){let Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xi=Math.min(W.instanceCount,Pe);it.renderInstances(et,gt,xi)}else it.render(et,gt)};function at(E,U,W){E.transparent===!0&&E.side===Vn&&E.forceSinglePass===!1?(E.side=xt,E.needsUpdate=!0,Ja(E,U,W),E.side=ri,E.needsUpdate=!0,Ja(E,U,W),E.side=Vn):Ja(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),p=Qe.get(W),p.init(U),_.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==W&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let X=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ae=F.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Ee=ae[ge];at(Ee,W,F),X.add(Ee)}else at(ae,W,F),X.add(ae)}),_.pop(),p=null,X},this.compileAsync=function(E,U,W=null){let X=this.compile(E,U,W);return new Promise(F=>{function ae(){if(X.forEach(function(ge){Ce.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){F(E);return}setTimeout(ae,10)}ze.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Dn=null;function vi(E){Dn&&Dn(E)}function $m(){As.stop()}function Jm(){As.start()}let As=new Fg;As.setAnimationLoop(vi),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(E){Dn=E,j.setAnimationLoop(E),E===null?As.stop():As.start()},j.addEventListener("sessionstart",$m),j.addEventListener("sessionend",Jm),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,z),p=Qe.get(E,_.length),p.init(U),_.push(p),ke.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(ke),ve=this.localClippingEnabled,te=oe.init(this.clippingPlanes,ve),m=be.get(E,x.length),m.init(),x.push(m),j.enabled===!0&&j.isPresenting===!0){let ae=v.xr.getDepthSensingMesh();ae!==null&&Oh(ae,U,-1/0,v.sortObjects)}Oh(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(q,ie),re=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,re&&Ne.addToRenderList(m,E),this.info.render.frame++,te===!0&&oe.beginShadows();let W=p.state.shadowsArray;Me.render(W,E,U),te===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){let ae=U.cameras;if(F.length>0)for(let ge=0,Ee=ae.length;ge<Ee;ge++){let Ae=ae[ge];e0(X,F,E,Ae)}re&&Ne.render(E);for(let ge=0,Ee=ae.length;ge<Ee;ge++){let Ae=ae[ge];Qm(m,E,Ae,Ae.viewport)}}else F.length>0&&e0(X,F,E,U),re&&Ne.render(E),Qm(m,E,U);z!==null&&(C.updateMultisampleRenderTarget(z),C.updateRenderTargetMipmap(z)),E.isScene===!0&&E.onAfterRender(v,E,U),ut.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],te===!0&&oe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Oh(E,U,W,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){X&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);let ge=K.update(E),Ee=E.material;Ee.visible&&m.push(E,ge,Ee,W,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let ge=K.update(E),Ee=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),se.copy(ge.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4(ke)),Array.isArray(Ee)){let Ae=ge.groups;for(let Be=0,Fe=Ae.length;Be<Fe;Be++){let Te=Ae[Be],et=Ee[Te.materialIndex];et&&et.visible&&m.push(E,ge,et,W,se.z,Te)}}else Ee.visible&&m.push(E,ge,Ee,W,se.z,null)}}let ae=E.children;for(let ge=0,Ee=ae.length;ge<Ee;ge++)Oh(ae[ge],U,W,X)}function Qm(E,U,W,X){let F=E.opaque,ae=E.transmissive,ge=E.transparent;p.setupLightsView(W),te===!0&&oe.setGlobalState(v.clippingPlanes,W),X&&fe.viewport(P.copy(X)),F.length>0&&$a(F,U,W),ae.length>0&&$a(ae,U,W),ge.length>0&&$a(ge,U,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function e0(E,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Pi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?oa:Ii,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ae=p.state.transmissionRenderTarget[X.id],ge=X.viewport||P;ae.setSize(ge.z,ge.w);let Ee=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(D),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),re&&Ne.render(W);let Ae=v.toneMapping;v.toneMapping=rs;let Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),te===!0&&oe.setGlobalState(v.clippingPlanes,X),$a(E,W,X),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Te=0,et=U.length;Te<et;Te++){let dt=U[Te],gt=dt.object,ln=dt.geometry,it=dt.material,Pe=dt.group;if(it.side===Vn&&gt.layers.test(X.layers)){let xi=it.side;it.side=xt,it.needsUpdate=!0,t0(gt,W,X,ln,it,Pe),it.side=xi,it.needsUpdate=!0,Fe=!0}}Fe===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}v.setRenderTarget(Ee),v.setClearColor(D,V),Be!==void 0&&(X.viewport=Be),v.toneMapping=Ae}function $a(E,U,W){let X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ae=E.length;F<ae;F++){let ge=E[F],Ee=ge.object,Ae=ge.geometry,Be=X===null?ge.material:X,Fe=ge.group;Ee.layers.test(W.layers)&&t0(Ee,U,W,Ae,Be,Fe)}}function t0(E,U,W,X,F,ae){E.onBeforeRender(v,U,W,X,F,ae),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,U,W,X,E,ae),F.transparent===!0&&F.side===Vn&&F.forceSinglePass===!1?(F.side=xt,F.needsUpdate=!0,v.renderBufferDirect(W,U,X,F,E,ae),F.side=ri,F.needsUpdate=!0,v.renderBufferDirect(W,U,X,F,E,ae),F.side=Vn):v.renderBufferDirect(W,U,X,F,E,ae),E.onAfterRender(v,U,W,X,F,ae)}function Ja(E,U,W){U.isScene!==!0&&(U=xe);let X=Ce.get(E),F=p.state.lights,ae=p.state.shadowsArray,ge=F.state.version,Ee=Ie.getParameters(E,F.state,ae,U,W),Ae=Ie.getProgramCacheKey(Ee),Be=X.programs;X.environment=E.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",Oe),Be=new Map,X.programs=Be);let Fe=Be.get(Ae);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===ge)return i0(E,Ee),Fe}else Ee.uniforms=Ie.getUniforms(E),E.onBeforeCompile(Ee,v),Fe=Ie.acquireProgram(Ee,Ae),Be.set(Ae,Fe),X.uniforms=Ee.uniforms;let Te=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=oe.uniform),i0(E,Ee),X.needsLights=Eb(E),X.lightsStateVersion=ge,X.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function n0(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Ir.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function i0(E,U){let W=Ce.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Sb(E,U,W,X,F){U.isScene!==!0&&(U=xe),C.resetTextureUnits();let ae=U.fog,ge=X.isMeshStandardMaterial?U.environment:null,Ee=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:$t,Ae=(X.isMeshStandardMaterial?O:S).get(X.envMap||ge),Be=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,dt=!!W.morphAttributes.color,gt=rs;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(gt=v.toneMapping);let ln=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=ln!==void 0?ln.length:0,Pe=Ce.get(X),xi=p.state.lights;if(te===!0&&(ve===!0||E!==b)){let wn=E===b&&X.id===w;oe.setState(X,E,wn)}let st=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xi.state.version||Pe.outputColorSpace!==Ee||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Ae||X.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==oe.numPlanes||Pe.numIntersection!==oe.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==Fe||Pe.morphTargets!==Te||Pe.morphNormals!==et||Pe.morphColors!==dt||Pe.toneMapping!==gt||Pe.morphTargetsCount!==it)&&(st=!0):(st=!0,Pe.__version=X.version);let Bn=Pe.currentProgram;st===!0&&(Bn=Ja(X,U,F));let lr=!1,pn=!1,ko=!1,yt=Bn.getUniforms(),ti=Pe.uniforms;if(fe.useProgram(Bn.program)&&(lr=!0,pn=!0,ko=!0),X.id!==w&&(w=X.id,pn=!0),lr||b!==E){fe.buffers.depth.getReversed()?(he.copy(E.projectionMatrix),zM(he),kM(he),yt.setValue(L,"projectionMatrix",he)):yt.setValue(L,"projectionMatrix",E.projectionMatrix),yt.setValue(L,"viewMatrix",E.matrixWorldInverse);let Zi=yt.map.cameraPosition;Zi!==void 0&&Zi.setValue(L,J.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,pn=!0,ko=!0)}if(F.isSkinnedMesh){yt.setOptional(L,F,"bindMatrix"),yt.setOptional(L,F,"bindMatrixInverse");let wn=F.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),yt.setValue(L,"boneTexture",wn.boneTexture,C))}F.isBatchedMesh&&(yt.setOptional(L,F,"batchingTexture"),yt.setValue(L,"batchingTexture",F._matricesTexture,C),yt.setOptional(L,F,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",F._indirectTexture,C),yt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",F._colorsTexture,C));let No=W.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0)&&Le.update(F,W,Bn),(pn||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,yt.setValue(L,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ti.envMap.value=Ae,ti.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(ti.envMapIntensity.value=U.environmentIntensity),pn&&(yt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&wb(ti,ko),ae&&X.fog===!0&&pe.refreshFogUniforms(ti,ae),pe.refreshMaterialUniforms(ti,X,H,Z,p.state.transmissionRenderTarget[E.id]),Ir.upload(L,n0(Pe),ti,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ir.upload(L,n0(Pe),ti,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(L,"center",F.center),yt.setValue(L,"modelViewMatrix",F.modelViewMatrix),yt.setValue(L,"normalMatrix",F.normalMatrix),yt.setValue(L,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let wn=X.uniformsGroups;for(let Zi=0,Ki=wn.length;Zi<Ki;Zi++){let s0=wn[Zi];B.update(s0,Bn),B.bind(s0,Bn)}}return Bn}function wb(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Eb(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,U,W){Ce.get(E.texture).__webglTexture=U,Ce.get(E.depthTexture).__webglTexture=W;let X=Ce.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let W=Ce.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){z=E,A=U,R=W;let X=!0,F=null,ae=!1,ge=!1;if(E){let Ae=Ce.get(E);if(Ae.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Ae.__hasExternalTextures)C.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Te=E.depthTexture;if(Ae.__boundDepthTexture!==Te){if(Te!==null&&Ce.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);let Fe=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?F=Fe[U][W]:F=Fe[U],ae=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[W]:F=Fe,P.copy(E.viewport),G.copy(E.scissor),k=E.scissorTest}else P.copy(le).multiplyScalar(H).floor(),G.copy(ne).multiplyScalar(H).floor(),k=De;if(fe.bindFramebuffer(L.FRAMEBUFFER,F)&&X&&fe.drawBuffers(E,F),fe.viewport(P),fe.scissor(G),fe.setScissorTest(k),ae){let Ae=Ce.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,W)}else if(ge){let Ae=Ce.get(E.texture),Be=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Be)}w=-1},this.readRenderTargetPixels=function(E,U,W,X,F,ae,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){fe.bindFramebuffer(L.FRAMEBUFFER,Ee);try{let Ae=E.texture,Be=Ae.format,Fe=Ae.type;if(!Re.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&W>=0&&W<=E.height-F&&L.readPixels(U,W,X,F,We.convert(Be),We.convert(Fe),ae)}finally{let Ae=z!==null?Ce.get(z).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,X,F,ae,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){let Ae=E.texture,Be=Ae.format,Fe=Ae.type;if(!Re.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-X&&W>=0&&W<=E.height-F){fe.bindFramebuffer(L.FRAMEBUFFER,Ee);let Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(U,W,X,F,We.convert(Be),We.convert(Fe),0);let et=z!==null?Ce.get(z).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,et);let dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await PM(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Te),L.deleteSync(dt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,W=0){E.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let X=Math.pow(2,-W),F=Math.floor(E.image.width*X),ae=Math.floor(E.image.height*X),ge=U!==null?U.x:0,Ee=U!==null?U.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ge,Ee,F,ae),fe.unbindTexture()},this.copyTextureToTexture=function(E,U,W=null,X=null,F=0){E.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,W=null);let ae,ge,Ee,Ae,Be,Fe,Te,et,dt,gt=E.isCompressedTexture?E.mipmaps[F]:E.image;W!==null?(ae=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Be=W.min.y,Fe=W.isBox3?W.min.z:0):(ae=gt.width,ge=gt.height,Ee=gt.depth||1,Ae=0,Be=0,Fe=0),X!==null?(Te=X.x,et=X.y,dt=X.z):(Te=0,et=0,dt=0);let ln=We.convert(U.format),it=We.convert(U.type),Pe;U.isData3DTexture?(C.setTexture3D(U,0),Pe=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Pe=L.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let xi=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Bn=L.getParameter(L.UNPACK_SKIP_PIXELS),lr=L.getParameter(L.UNPACK_SKIP_ROWS),pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe);let ko=E.isDataArrayTexture||E.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let ti=Ce.get(E),No=Ce.get(U),wn=Ce.get(ti.__renderTarget),Zi=Ce.get(No.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,wn.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ki=0;Ki<Ee;Ki++)ko&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(E).__webglTexture,F,Fe+Ki),E.isDepthTexture?(yt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,F,dt+Ki),L.blitFramebuffer(Ae,Be,ae,ge,Te,et,ae,ge,L.DEPTH_BUFFER_BIT,L.NEAREST)):yt?L.copyTexSubImage3D(Pe,F,Te,et,dt+Ki,Ae,Be,ae,ge):L.copyTexSubImage2D(Pe,F,Te,et,dt+Ki,Ae,Be,ae,ge);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Pe,F,Te,et,dt,ae,ge,Ee,ln,it,gt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,F,Te,et,dt,ae,ge,Ee,ln,gt.data):L.texSubImage3D(Pe,F,Te,et,dt,ae,ge,Ee,ln,it,gt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Te,et,ae,ge,ln,it,gt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Te,et,gt.width,gt.height,ln,gt.data):L.texSubImage2D(L.TEXTURE_2D,F,Te,et,ae,ge,ln,it,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,xi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bn),L.pixelStorei(L.UNPACK_SKIP_ROWS,lr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pn),F===0&&U.generateMipmaps&&L.generateMipmap(Pe),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,U,W=null,X=null,F=0){return E.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,W,X,F)},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){A=0,R=0,z=null,fe.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var Wc=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new I,ea=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var og=new I,ag=new nt,cg=new nt,TA=new I,lg=new Ue,xc=new I,fu=new yn,hg=new Ue,pu=new Or,Xc=class extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=l0,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ht),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xc),this.boundingBox.expandByPoint(xc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xc),this.boundingSphere.expandByPoint(xc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fu.copy(this.boundingSphere),fu.applyMatrix4(i),e.ray.intersectsSphere(fu)!==!1&&(hg.copy(i).invert(),pu.copy(e.ray).applyMatrix4(hg),!(this.boundingBox!==null&&pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===l0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ag.fromBufferAttribute(i.attributes.skinIndex,e),cg.fromBufferAttribute(i.attributes.skinWeight,e),og.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=cg.getComponent(r);if(o!==0){let a=ag.getComponent(r);lg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TA.copy(og).applyMatrix4(lg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ta=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},as=class extends Ht{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Dt,h=Dt,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ug=new Ue,RA=new Ue,qc=class s{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:RA;ug.multiplyMatrices(a,t[r]),ug.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new as(t,e,e,An,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ta),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Os=class extends rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new Ue,dg=new Ue,_c=[],fg=new ht,CA=new Ue,Oo=new tt,Fo=new yn,jc=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,CA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),fg.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(fg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Fo.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(n),e.ray.intersectsSphere(Fo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wr),dg.multiplyMatrices(n,wr),Oo.matrixWorld=dg,Oo.raycast(e,_c);for(let o=0,a=_c.length;o<a;o++){let c=_c[o];c.instanceId=r,c.object=this,t.push(c)}_c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(i*this.count),i,this.count,aa,Wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var na=class extends nn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yc=new I,Zc=new I,pg=new Ue,Vo=new Or,bc=new yn,mu=new I,mg=new I,Hr=class extends St{constructor(e=new zt,t=new na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Yc.fromBufferAttribute(t,i-1),Zc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(Zc);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(i),bc.radius+=r,e.ray.intersectsSphere(bc)===!1)return;pg.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(pg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),x=h.getX(y+1),_=Mc(this,e,Vo,c,p,x);_&&t.push(_)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Mc(this,e,Vo,c,y,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=Mc(this,e,Vo,c,y,y+1);p&&t.push(p)}if(this.isLineLoop){let y=Mc(this,e,Vo,c,g-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Mc(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Yc.fromBufferAttribute(o,i),Zc.fromBufferAttribute(o,r),t.distanceSqToSegment(Yc,Zc,mu,mg)>n)return;mu.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(mu);if(!(c<e.near||c>e.far))return{distance:c,point:mg.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var gg=new I,yg=new I,Kc=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gg.fromBufferAttribute(t,i),yg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gg.distanceTo(yg);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$c=class extends Hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ia=class extends nn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vg=new Ue,bd=new Or,Sc=new yn,wc=new I,Gr=class extends St{constructor(e=new zt,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(i),Sc.radius+=r,e.ray.intersectsSphere(Sc)===!1)return;vg.copy(i).invert(),bd.copy(e.ray).applyMatrix4(vg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=l.getX(g);wc.fromBufferAttribute(d,m),xg(wc,m,c,i,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)wc.fromBufferAttribute(d,g),xg(wc,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xg(s,e,t,n,i,r,o){let a=bd.distanceSqToPoint(s);if(a<t){let c=new I;bd.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var cs=class extends Ht{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Md=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new qe:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],r=[],o=[],a=new I,c=new Ue;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Vt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Vt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Wd(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ec=new I,gu=new Wd,yu=new Wd,vu=new Wd,Jc=class extends Md{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Ec.subVectors(i[0],i[1]).add(i[0]),l=Ec);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ec.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),gu.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,y,m),yu.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,y,m),vu.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(gu.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),yu.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),vu.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(gu.calc(c),yu.calc(c),vu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Qc=class s extends zt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],d=e,u=(t-e)/i,f=new I,g=new qe;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<i;y++){let m=y*(n+1);for(let p=0;p<n;p++){let x=p+m,_=x,v=x+n+1,T=x+n+2,A=x+1;a.push(_,v,A),a.push(v,T,A)}}this.setIndex(a),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Wr=class s extends zt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new I,u=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let x=[],_=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let A=T/t;d.x=-e*Math.cos(i+A*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(i+A*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(A+v,1-_),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let _=h[p][x+1],v=h[p][x],T=h[p+1][x],A=h[p+1][x+1];(p!==0||o>0)&&f.push(_,v,A),(p!==n-1||c<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xr=class extends nn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends Xr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qr=class extends nn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _n=class extends nn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ac(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function IA(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function PA(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _g(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Xg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ls=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sd=class extends ls{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:h0,endingEnd:h0}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case u0:r=e,a=2*t-n;break;case d0:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case u0:o=e,c=2*n-t;break;case d0:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,x=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+x*o[l+T]+_*o[c+T]+v*o[d+T];return r}},wd=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Ed=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ac(t,this.TimeBufferType),this.values=Ac(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ac(e.times,Array),values:Ac(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ed(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case Fh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&IA(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fh,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Br;var hs=class extends Rn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Dr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Rn{};el.prototype.ValueTypeName="color";var zi=class extends Rn{};zi.prototype.ValueTypeName="number";var Ad=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)It.slerpFlat(r,0,o,l-a,o,l,c);return r}},ki=class extends Rn{InterpolantFactoryMethodLinear(e){return new Ad(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Rn{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Dr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Rn{};Ni.prototype.ValueTypeName="vector";var tl=class{constructor(e="",t=-1,n=[],i=iM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kA(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=PA(c);c=_g(c,1,h),l=_g(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new zi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,g,y){if(f.length!==0){let m=[],p=[];Xg(f,m,p,g),m.length!==0&&y.push(new d(u,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let y=0;y<u[g].morphTargets.length;y++)f[u[g].morphTargets[y]]=-1;for(let y in f){let m=[],p=[];for(let x=0;x!==u[g].morphTargets.length;++x){let _=u[g];m.push(_.time),p.push(_.morphTarget===y?1:0)}i.push(new zi(".morphTargetInfluence["+y+"]",m,p))}c=f.length*o}else{let f=".bones["+t[d].name+"]";n(Ni,f+".position",u,"pos",i),n(ki,f+".quaternion",u,"rot",i),n(Ni,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zA(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return el;case"quaternion":return ki;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kA(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zA(s.type);if(s.times===void 0){let t=[],n=[];Xg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var is={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Td=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},NA=new Td,Li=class{constructor(e){this.manager=e!==void 0?e:NA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={},Rd=class extends Error{constructor(e,t){super(e),this.response=t}},sa=class extends Li{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=is.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:i});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ei[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,y=0,m=new ReadableStream({start(p){x();function x(){d.read().then(({done:_,value:v})=>{if(_)p.close();else{y+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let A=0,R=h.length;A<R;A++){let z=h[A];z.onProgress&&z.onProgress(T)}p.enqueue(v),x()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Rd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{is.add(e,l);let h=Ei[e];delete Ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Cd=class extends Li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=is.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=$o("img");function c(){h(),is.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var nl=class extends Li{constructor(e){super(e)}load(e,t,n,i){let r=new Ht,o=new Cd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},jr=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var xu=new Ue,bg=new I,Mg=new I,ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bg.setFromMatrixPosition(e.matrixWorld),t.position.copy(bg),Mg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mg),t.updateMatrixWorld(),xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Id=class extends ra{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},il=class extends jr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Id}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sg=new Ue,Ho=new I,_u=new I,Pd=class extends ra{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ho),_u.copy(n.position),_u.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_u),n.updateMatrixWorld(),i.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Sg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sg)}},sl=class extends jr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zd=class extends ra{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rl=class extends jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ds=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ol=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=is.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return is.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),is.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});is.add(e,c),r.manager.itemStart(e)}};var Xd="\\[\\]\\.:\\/",LA=new RegExp("["+Xd+"]","g"),qd="[^"+Xd+"]",DA="[^"+Xd.replace("\\.","")+"]",BA=/((?:WC+[\/:])*)/.source.replace("WC",qd),UA=/(WCOD+)?/.source.replace("WCOD",DA),OA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qd),FA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qd),VA=new RegExp("^"+BA+UA+OA+FA+"$"),HA=["material","materials","bones","map"],kd=class{constructor(e,t,n){let i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LA,"")}static parseTrackName(e){let t=VA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);HA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=kd;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wz=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var pl="v525",qg=`quack-and-splash-${pl}`;var ml=new Map;function Cn(s,e){let t=ml.get(s);return t||ml.set(s,t=[]),t.push(e),()=>GA(s,e)}function GA(s,e){let t=ml.get(s);if(!t)return;let n=t.indexOf(e);n>=0&&t.splice(n,1)}function qt(s,e){let t=ml.get(s);if(t)for(let n=0;n<t.length;n++)t[n](e)}var WA=["start","pause","resume","mute","unmute","submit","useExtraLife"],XA={resetState:!1},sn=null,la=null,jd=!1,gl=!1;function qA(){return new URLSearchParams(location.search).get("platforma")==="0"?!1:window.webkit?.messageHandlers?.callbackHandler||window._toDevice!=null?!0:window.self!==window.top}async function Yg(s){if(!qA()||!window.Gamee)return jg(),null;sn=window.Gamee.gamee;for(let e of WA){let t="platforma:"+e;sn.on(e,n=>qt(t,n))}try{la=await sn.init({capabilities:s}),console.info(`[gamee] init ok \u2014 ${la.platform}, kontext ${la.gameContext}`)}catch(e){console.warn("[gamee] init selhal, hra jede mimo platformu:",e?.code||e),sn=null,jg()}return la}function Zg(){console.info(`[gamee] gameReady za ${Math.round(performance.now())} ms (limit 2500)`),sn?ha(sn.gameReady()):qt("platforma:start",XA)}function Kg(){gl=!0,sn&&ha(sn.gameStart())}function $g(s,e){sn&&gl&&ha(sn.updateScore({score:s,playTime:e,checksum:qg}))}function Yd(s,e){gl&&(gl=!1,sn&&ha(sn.gameOver({saveStateData:s,metadata:e})))}function Jg(s){sn&&ha(sn.gameSaveState(s))}function Qg(){return la?.saveState??null}function Zd(){return sn!==null}function ha(s){s.catch(jA)}function jA(s){console.warn("[gamee]",s?.method,s?.code,s?.message)}function jg(){addEventListener("keydown",s=>{s.key!=="p"&&s.key!=="P"||(jd=!jd,qt(jd?"platforma:pause":"platforma:resume"))})}var $d=1,ey="quack-and-splash:ulozeni";function Kd(){return{v:$d,level:1,mince:0,boostery:{}}}var Di=Kd();function ty(){return Di=YA(Zd()?Qg():KA()),Di}function ua(){return Di}function ny(s){Di=Qd(s),Zd()?Jg(Di):$A(JSON.stringify(Di))}function iy(s){return Di=Qd(s),Di}function Jd(){return Di}function YA(s){if(!s)return Kd();try{return Qd(ZA(JSON.parse(s)))}catch(e){return console.warn("[ulozeni] po\u0161kozen\xFD z\xE1znam, za\u010D\xEDn\xE1m od v\xFDchoz\xEDho stavu:",e.message),Kd()}}function ZA(s){if(!s||typeof s!="object")throw new Error("z\xE1znam nen\xED objekt");if(s.v!==$d)throw new Error(`nezn\xE1m\xE1 verze z\xE1znamu ${s.v}`);return s}function Qd(s){let e={};if(s.boostery&&typeof s.boostery=="object")for(let[t,n]of Object.entries(s.boostery))Number.isInteger(n)&&n>0&&(e[t]=n);return{v:$d,level:Number.isInteger(s.level)&&s.level>=1?s.level:1,mince:Number.isInteger(s.mince)&&s.mince>=0?s.mince:0,boostery:e}}function KA(){try{return localStorage.getItem(ey)}catch{return null}}function $A(s){try{localStorage.setItem(ey,s)}catch(e){console.warn("[ulozeni] nejde ulo\u017Eit:",e.message)}}var Vs=150,kt=-600,ay=54,sy=.45,cy=ay,je=new Lt(ay,1,1,5e3);function ly(s){cy=s}var fs=new I(0,210+Vs,560),ry=new I(0,150+Vs,-400),vl=400,oy=fs.z-kt,ef=new I(0,fs.y+(ry.y-fs.y)*(kt-fs.z)/(ry.z-fs.z),kt);function hy(s){vl=Math.max(0,s)}function tf(){return(oy+vl)/oy}var yl=new I(0,60+Vs,420),oi=yl.clone();function JA(s,e){if(e<=sy)return s;let t=Math.tan(s*Math.PI/360)*sy/e;return 2*Math.atan(t)*180/Math.PI}function uy(s,e){je.aspect=s/e;let t=2*Math.atan(Math.tan(cy*Math.PI/360)/tf())*180/Math.PI;je.fov=JA(t,je.aspect),je.updateProjectionMatrix()}var QA=40,eT=26,tT=5.5,Fs=new I,dy=new I;function nf(s,e){dy.set(s*QA,-e*eT,0)}function sf(s){Fs.lerp(dy,1-Math.exp(-tT*s)),je.position.set(fs.x+Fs.x,fs.y+Fs.y,fs.z+vl),je.lookAt(ef.x+Fs.x,ef.y+Fs.y,ef.z),oi.set(yl.x+Fs.x,yl.y+Fs.y,yl.z+vl)}var yy={rozptyl:.74,rozptylBarva:"#8fa8c4",slunce:1.02,slunceBarva:"#ffffff",azimut:-34,vyska:54};var Hs={...yy},da=null,ai=null,rf=null,vy=new I(0,287,kt),of=2e3;function nT(){if(!da)return;da.color.set(Hs.rozptylBarva),da.intensity=Hs.rozptyl,ai.color.set(Hs.slunceBarva),ai.intensity=Hs.slunce;let s=Et.degToRad(Hs.azimut),e=Et.degToRad(Hs.vyska);ai.position.set(Math.sin(s)*Math.cos(e),Math.sin(e),Math.cos(s)*Math.cos(e)).multiplyScalar(of).add(vy)}var fy={ostre:wg,mekke:al},xy="mekke",py=1024,my=400,gy=480,xl=!1,af=null;function cf(s,e){e=fy[e]!==void 0?e:!1,af=s;let t=e!==xl;xl=e,s.shadowMap.enabled=!!e,e&&(s.shadowMap.type=fy[e]),ai&&(ai.castShadow=!!e),t&&rf&&rf.traverse(n=>{for(let i of[].concat(n.material||[]))i.needsUpdate=!0})}function _y(){return xl}function iT(){let s=ai.shadow;s.mapSize.set(py,py);let e=s.camera;e.left=-my,e.right=my,e.top=gy,e.bottom=-gy,e.near=of-1200,e.far=of+1200,e.updateProjectionMatrix(),s.bias=0,s.normalBias=.4}function by(s){let e=new Wc;e.background=new _e(1778480),s&&typeof s=="object"&&(Hs={...yy,...s}),da=new rl,ai=new Yr,ai.target.position.copy(vy),e.add(da,ai,ai.target),rf=e,iT(),nT(),af&&cf(af,xl);let t=new tt(new Wr(60,32,16),new qr({color:16765503}));return t.position.set(0,260+Vs,kt),e.add(t),{scena:e,kachna:t}}function lf(s,e){if(e===Lg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ca||e===ll){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ca)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var _l=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new If(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ds.extractUrlBase(e);o=ds.resolveURL(l,this.path)}else o=ds.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ay){try{o[Ze.KHR_BINARY_GLTF]=new Pf(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Uf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ze.KHR_MATERIALS_UNLIT:o[d]=new pf;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new zf(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[d]=new kf;break;case Ze.KHR_MESH_QUANTIZATION:o[d]=new Nf;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function sT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ff=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new _e(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],$t);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Yr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new sl(h),l.distance=d;break;case"spot":l=new il(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},pf=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){let i=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(i)}},mf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},gf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(a,a)}return Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},vf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_f=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},bf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}},Mf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Sf=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ef=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Af=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Tf=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rf=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Cf=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},If=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let y=new Ue,m=new I,p=new It,x=new I(1,1,1),_=new jc(g.geometry,g.material,u);for(let v=0;v<u;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,y.compose(m,p,x));for(let v in c)if(v==="_COLOR_0"){let T=c[v];_.instanceColor=new Os(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);St.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ay="glTF",fa=12,My={JSON:1313821514,BIN:5130562},Pf=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ay)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-fa,r=new DataView(e,fa),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===My.JSON){let l=new Uint8Array(e,fa+o,a);this.content=n.decode(l)}else if(c===My.BIN){let l=fa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let d=Df[h]||h.toLowerCase();a[d]=o[h]}for(let h in e.attributes){let d=Df[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Kr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}d(f)},a,l,$t,u)})})}},kf=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Nf=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},bl=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,y=g-l,m=-2*f+3*u,p=f-u,x=1-m,_=p-u+d;for(let v=0;v!==a;v++){let T=o[y+v+a],A=o[y+v+c]*h,R=o[g+v+a],z=o[g+v]*h;r[v]=x*T+_*A+m*R+p*z}return r}},rT=new It,Lf=class extends bl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return rT.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sy={9728:Dt,9729:Ct,9984:Ld,9985:Xo,9986:Er,9987:si},wy={33071:Gn,33648:Zo,10497:qn},hf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Df={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oT={CUBICSPLINE:void 0,LINEAR:Br,STEP:Dr},uf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),s.DefaultMaterial}function Gs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cT(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function lT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hT(s){let e,t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+df(t.attributes):e=s.indices+":"+df(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+df(s.targets[n]);return e}function df(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Bf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var dT=new Ue,Uf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new nl(this.options.manager):this.textureLoader=new ol(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Gs(r,a,i),Bi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ds.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=hf[i.type],a=Kr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new rt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=hf[i.type],l=Kr[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,y,m;if(f&&f!==d){let p=Math.floor(u/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(x);_||(y=new l(a,p*f,i.count*f/h),_=new Qo(y,f/h),t.cache.add(x,_)),m=new ea(_,c,u%f/h,g)}else a===null?y=new l(i.count*c):y=new l(a,u,i.count*c),m=new rt(y,c,g);if(i.sparse!==void 0){let p=hf.SCALAR,x=Kr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new x(o[1],_,i.sparse.count*p),A=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,z=T.length;R<z;R++){let w=T[R];if(m.setX(w,A[R*c]),c>=2&&m.setY(w,A[R*c+1]),c>=3&&m.setZ(w,A[R*c+2]),c>=4&&m.setW(w,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Sy[u.magFilter]||Ct,h.minFilter=Sy[u.minFilter]||si,h.wrapS=wy[u.wrapS]||qn,h.wrapT=wy[u.wrapT]||qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Dt&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Ht(y);m.needsUpdate=!0,u(m)}),t.load(ds.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Bi(d,o),d.userData.mimeType=o.mimeType||uT(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ia,nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new na,nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xr}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){let d=i[Ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],$t),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Rt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Vn);let h=r.alphaMode||uf.OPAQUE;if(h===uf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===uf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Pt){let d=r.emissiveFactor;a.emissive=new _e().setRGB(d[0],d[1],d[2],$t)}return r.emissiveTexture!==void 0&&o!==Pt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){let d=new o(a);return r.name&&(d.name=r.name),Bi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Gs(i,d,r),d})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ey(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=hT(l),d=i[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Ey(new zt,l,t),i[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?aT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=o[f],p,x=l[f];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Xc(y,x):new tt(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?p.geometry=lf(p.geometry,ll):m.mode===In.TRIANGLE_FAN&&(p.geometry=lf(p.geometry,ca));else if(m.mode===In.LINES)p=new Kc(y,x);else if(m.mode===In.LINE_STRIP)p=new Hr(y,x);else if(m.mode===In.LINE_LOOP)p=new $c(y,x);else if(m.mode===In.POINTS)p=new Gr(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bi(p,r),m.extensions&&Gs(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Gs(i,d[0],r),d[0];let u=new Kt;r.extensions&&Gs(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Et.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let d=o[l];if(d){a.push(d);let u=new Ue;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new qc(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],y=d[3],m=d[4],p=[];for(let x=0,_=u.length;x<_;x++){let v=u[x],T=f[x],A=g[x],R=y[x],z=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let w=n._createAnimationTracks(v,T,A,R,z);if(w)for(let b=0;b<w.length;b++)p.push(w[b])}return new tl(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,dT)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ta:l.length>1?h=new Kt:l.length===1?h=l[0]:h=new St,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Bi(h,r),r.extensions&&Gs(n,h,r),r.matrix!==void 0){let d=new Ue;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Kt;n.name&&(r.name=i.createUniqueName(n.name)),Bi(r,n),n.extensions&&Gs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);let l=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof nn||u instanceof Ht)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];ps[r.path]===ps.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(ps[r.path]){case ps.weights:l=zi;break;case ps.rotation:l=ki;break;case ps.position:case ps.scale:l=Ni;break;default:n.itemSize===1?l=zi:l=Ni;break}let h=i.interpolation!==void 0?oT[i.interpolation]:Br,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){let g=new l(c[u]+"."+ps[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ki?Lf:bl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fT(s,e,t){let n=e.attributes,i=new ht;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=Bf(Kr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let y=Bf(Kr[u.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new yn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ey(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Df[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return $e.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Bi(s,e),fT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cT(s,e.targets,t):s})}var ma=new as(new Uint8Array([120,200,255]),3,1,aa);ma.minFilter=Dt;ma.magFilter=Dt;ma.generateMipmaps=!1;ma.needsUpdate=!0;var Iy={value:.015},Py={value:.015},Wf={value:.015},Ml=new Pt({color:1316380,side:xt,fog:!1}),Sl=new Pt({color:1316380,side:xt,fog:!1}),ga=new Pt({color:1316380,side:xt,fog:!1});Ml.userData.tloustka=Iy;Sl.userData.tloustka=Py;ga.userData.tloustka=Wf;ga.onBeforeCompile=Sl.onBeforeCompile=Ml.onBeforeCompile=function(s){s.uniforms.uTloustka=this.userData.tloustka,s.vertexShader=`uniform float uTloustka;
attribute vec3 obrysNormal;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += obrysNormal * uTloustka;`)};function pT(s){if(s.attributes.obrysNormal)return;let e=s.attributes.position,t=s.attributes.normal,n=e.count,i=new Int32Array(n),r=new Int32Array(n),o=new Int32Array(n),a=new Int32Array(n),c=new Int32Array(n),l=new Map,h=0;for(let v=0;v<n;v++){let T=Math.round(e.getX(v)*1e5),A=Math.round(e.getY(v)*1e5),R=Math.round(e.getZ(v)*1e5),z=Math.imul(T,73856093)^Math.imul(A,19349663)^Math.imul(R,83492791),w=l.get(z),b=w===void 0?-1:w;for(;b!==-1&&!(r[b]===T&&o[b]===A&&a[b]===R);)b=c[b];b===-1&&(b=h++,r[b]=T,o[b]=A,a[b]=R,c[b]=w===void 0?-1:w,l.set(z,b)),i[v]=b}let d=new Float64Array(h),u=new Float64Array(h),f=new Float64Array(h);for(let v=0;v<n;v++){let T=i[v];d[T]+=t.getX(v),u[T]+=t.getY(v),f[T]+=t.getZ(v)}let g=new Float64Array(h),y=new Float64Array(h),m=new Float64Array(h),p=new Uint8Array(h);for(let v=0;v<h;v++){let T=Math.hypot(d[v],u[v],f[v]);T<1e-6||(p[v]=1,g[v]=d[v]/T,y[v]=u[v]/T,m[v]=f[v]/T)}let x=new Float64Array(h).fill(1);for(let v=0;v<n;v++){let T=i[v];if(!p[T])continue;let A=g[T]*t.getX(v)+y[T]*t.getY(v)+m[T]*t.getZ(v);A<x[T]&&(x[T]=A)}let _=new Float32Array(n*3);for(let v=0;v<n;v++){let T=i[v];if(!p[T]){_[v*3]=t.getX(v),_[v*3+1]=t.getY(v),_[v*3+2]=t.getZ(v);continue}let A=x[T]>=.5?1/x[T]:1;_[v*3]=g[T]*A,_[v*3+1]=y[T]*A,_[v*3+2]=m[T]*A}s.setAttribute("obrysNormal",new rt(_,3))}function zy(s){Iy.value=s}function ky(s){Ml.color.set(s)}function Ny(s){Sl.color.set(s)}function Ly(s){ga.color.set(s)}function Dy(){return"#"+ga.color.getHexString()}function By(s){Wf.value=s}function Uy(){return Wf.value}function Xf(s){s.traverse(e=>{e.userData.obrys&&(e.material=ga)})}function Oy(s){Py.value=s}function Fy(s){s.traverse(e=>{e.userData.obrys&&(e.material=Sl)})}var mT=["face","eyes"],Ty=s=>mT.some(e=>s===e||s.startsWith(e+"_")),pa="normal",qf="hit",Vf=s=>s==="eyes"||s.startsWith("eyes_"),Ry=s=>s==="eyes"?"":s.slice(5);function Vy(s){return s.userData.vyrazy||[]}function Hy(s,e){let t=e?`eyes_${e}`:"eyes",n=!1;return s.traverse(i=>{i.isMesh&&i.name===t&&(n=!0)}),n?(s.traverse(i=>{i.isMesh&&Vf(i.name)&&(i.visible=i.name===t)}),s.userData.vyrazTed=e||"",!0):!1}var Of=s=>s.parent&&s.parent.isGroup&&new RegExp(`^${s.parent.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}_\\d+$`).test(s.name),gT=new Set(["toon","malovany_obrys"]),yT={malovany:"malovany_obrys"},Hf="toon",Gf=new Map,Ff=new Map,vT=new _l;function Gy(s){s=yT[s]||s,gT.has(s)&&(Hf=s,Gf.clear())}function xT(s,e,t){let n=e&&e.color?e.color.getHex():16777215,i=e&&e.map||null,r=!!(e&&(e.transparent||e.alphaTest>0)),o=`${Hf}|${s}|${n}|${i?i.uuid:"-"}|${t}|${r}`,a=Gf.get(o);if(a)return a;let c={color:n,map:i,vertexColors:t,name:s,transparent:!1,alphaTest:r?.35:0};return a=Hf==="toon"?new qr({...c,gradientMap:ma}):new _n(c),Gf.set(o,a),a}function _T(s){let e=new Set,t=[],n=new Map;s.updateMatrixWorld(!0),s.traverse(r=>{if(!r.isMesh)return;let o=r.material,a=!o||!o.name&&o.isMeshStandardMaterial&&!o.map,c=Of(r)?r.parent.name:r.name;if(a&&e.add(`\u201E${c}": \u010D\xE1st bez materi\xE1lu \u2014 p\u0159i\u0159a\u010F hlavn\xED materi\xE1l`),Of(r)&&o){let d=n.get(r.parent)||new Set;d.has(o)&&e.add(`\u201E${c}": dva sloty se stejn\xFDm materi\xE1lem = draw call nav\xEDc \u2014 slou\u010D je do jednoho a pr\xE1zdn\xFD slot sma\u017E`),d.add(o),n.set(r.parent,d)}r.matrixWorld.determinant()<0&&e.add(`\u201E${c}": zrcadlen\xFD (z\xE1porn\xE9 m\u011B\u0159\xEDtko) \u2014 aplikuj Scale (Ctrl+A)`);let l=(o&&o.name||"hlavni").replace(/\.\d+$/,"").toLowerCase(),h=!!(r.geometry&&r.geometry.attributes.color);r.material=xT(l,o,h),Ty(c.replace(/\.\d+$/,"").toLowerCase())||t.push(r)});let i=[];if(s.traverse(r=>{r.isMesh&&Vf(r.name)&&i.push(Ry(r.name))}),i.length){s.userData.vyrazy=i.sort();let r=i.includes("")?"":i.includes(pa)?pa:i[0];s.traverse(o=>{o.isMesh&&Vf(o.name)&&(o.visible=Ry(o.name)===r)}),s.userData.vyrazTed=r}s.traverse(r=>{r.isMesh&&(r.castShadow=!Ty((Of(r)?r.parent.name:r.name).replace(/\.\d+$/,"").toLowerCase()),r.receiveShadow=!0)});for(let r of t){pT(r.geometry);let o=new tt(r.geometry,Ml);o.name=r.name+"_obrys",o.userData.obrys=!0,r.add(o)}return[...e]}var Pn=400;function Ws(s){return s.scale.setScalar(Pn),s}function bT(s){let e=0,t=0,n=0,i=new Set;return s.traverse(r=>{if(!r.isMesh||!r.visible)return;if(r.userData.obrys){n++;return}t++,i.add(r.material.name||r.material.type);let o=r.geometry;e+=o.index?o.index.count/3:o.attributes.position.count/3}),{trojuhelniku:Math.round(e),dilu:t,obrysu:n,materialy:[...i]}}function Wy(s){return Ff.has(s)||Ff.set(s,vT.loadAsync(s).then(e=>(MT(e),e)).catch(e=>(console.warn(`[assety] model ${s} se nena\u010Detl: ${e.message}`),null))),Ff.get(s)}var Cy=new Map;function MT(s){if(!s||!Cy.size)return 0;let e=new Set;return s.scene.traverse(t=>{let n=t.isMesh&&t.material&&t.material.map;if(!n||e.has(n))return;let i=Cy.get(n.name);i&&(e.add(n),n.image!==i&&(n.image=i,n.dispose(),n.needsUpdate=!0))}),e.size}var ST="duck";async function bn(s,e=ST,{volitelny:t=!1}={}){let n=await Wy(s);if(!n)return null;let i=n.scene.getObjectByName(e);if(!i)return t||console.warn(`[assety] ${s}: objekt \u201E${e}" v souboru nen\xED`),null;let r=i.clone(!0),o=_T(r);for(let a of o)console.warn(`[assety] ${s}: ${a}`);return{objekt:r,varovani:o,...bT(r)}}function Xy(s){return Promise.all(s.map(Wy))}var pt={verze:1,poznamka:"Generuje nastroje/balance.html. Ru\u010Dn\u011B upravovat jen `nastaveni`; `levely` se dopo\u010D\xEDt\xE1vaj\xED.",nastaveni:{levelu:120,bossPo:6,krokuZaBosse:1,kapitola:30,nastavenychKapitol:2,vzorKapitol:2,horniCil:20,dolniCil:7,tempo:.85,krivka:1.2,vodaNaKachnu:5,nasobE:.85,nasobM:1,nasobH:1.1,ozbrojenychOd:0,ozbrojenychDo:45,obranaCena:2.5,nadrzZaklad:140,nadrzKrok:11,plytvaniZbran:.64,plytvaniKrok:.1,rezieZaklad:16,rezieKrok:1,novaZbranNasob:1,plytvaniSlaby:.15,plytvaniDobry:.08,vzorec:"EMMHMH",kapitoly:[{od:4,do:12},{od:8,do:16},{od:12,do:19},{od:16,do:23}],bossy:[{vydrz:28,vydrzKrok:2,doprovod:2,doprovodKrok:1},{vydrz:55,vydrzKrok:5,doprovod:0,doprovodKrok:1},{vydrz:66,vydrzKrok:5,doprovod:3,doprovodKrok:1},{vydrz:90,vydrzKrok:6,doprovod:4,doprovodKrok:1}],voda:{barva:"#2cb3ce",pruhlednost:94,svitivost:135,obrysSila:114,obrysBarva:"#0d6a91",hran:7,polomer:7,tok:10.5,delkaVzoru:1450,sila:2200,nabeh:.2,zpozdeniMireni:.22,prekmitMireni:1,zpozdeniPistole:.9,prekmitPistole:.4},svetlo:{rozptyl:1.65,rozptylBarva:"#ffffff",slunce:2.4,slunceBarva:"#e5ebff",azimut:-14,vyska:23},vzhled:{styl:"toon",obrys:.0016,obrysRuka:.0012,obrysNabytek:.0042,obrysBarva:"#14161c",obrysBarvaRuka:"#333c52",obrysBarvaNabytek:"#49131a",pozadi:"#afc86a",stiny:"mekke"},houpani:{sila:2.4,tuhost:50,tlumeni:2.5,maxUhel:33,prahVyrazu:12},rozstrik:{mnozstvi:.9,velikost:1.6,velkych:.5,rozlet:.5,kontakt:.8,kontaktBarva:"#ffffff",kontaktObrysBarva:"#edf8fd"},fyzika:{gravitace:1600,vaha:1,treni:.4},kachny:{nasobekTerce:2,dobaVyjeti:.22,dobaVenku:3,dobaSchovani:1.5,kloboukOdstrel:1,bodyZaVodu:10,bodySestreleni:20}},levely:[{level:1,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:3,ozbrojenych:0,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:2,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:4,ozbrojenych:0,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:3,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:4,ozbrojenych:1,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:4,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:5,ozbrojenych:1,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:5,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:5,ozbrojenych:2,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:6,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:2,ozbrojenych:2,nadrz:140,plytvani:.64,rezie:16,stupnu:0,bossCislo:1,bossSouboj:1,bossZivotu:5,bossVydrz:28},{level:7,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:4,ozbrojenych:2,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:8,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:5,ozbrojenych:3,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:9,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:6,ozbrojenych:3,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:10,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:7,ozbrojenych:3,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:11,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:6,ozbrojenych:4,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:12,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:3,ozbrojenych:4,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1,bossCislo:1,bossSouboj:2,bossZivotu:4,bossVydrz:30},{level:13,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:6,ozbrojenych:5,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:14,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:7,ozbrojenych:5,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:15,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:7,ozbrojenych:5,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:16,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:8,ozbrojenych:6,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:17,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:8,ozbrojenych:6,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:18,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:6,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2,bossCislo:1,bossSouboj:3,bossZivotu:3,bossVydrz:32},{level:19,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:7,ozbrojenych:7,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:20,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:7,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:21,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:8,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:22,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:10,ozbrojenych:8,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:23,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:10,ozbrojenych:8,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:24,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:5,ozbrojenych:9,nadrz:151,plytvani:.54,rezie:15,stupnu:3,bossCislo:1,bossSouboj:4,bossZivotu:2,bossVydrz:34},{level:25,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:9,ozbrojenych:9,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:26,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:9,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:27,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:10,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:28,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:12,ozbrojenych:10,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:29,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:11,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:30,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:6,ozbrojenych:11,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4,bossCislo:1,bossSouboj:5,bossZivotu:1,bossVydrz:36},{level:31,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:7,ozbrojenych:11,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:32,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:8,ozbrojenych:12,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:33,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:8,ozbrojenych:12,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:34,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:9,ozbrojenych:12,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:35,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:13,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:36,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:0,ozbrojenych:13,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5,bossCislo:2,bossSouboj:1,bossZivotu:5,bossVydrz:55},{level:37,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:8,ozbrojenych:14,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:38,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:14,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:39,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:10,ozbrojenych:14,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:40,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:11,ozbrojenych:15,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:41,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:10,ozbrojenych:15,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:42,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:1,ozbrojenych:16,nadrz:162,plytvani:.44,rezie:14,stupnu:6,bossCislo:2,bossSouboj:2,bossZivotu:4,bossVydrz:60},{level:43,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:9,ozbrojenych:16,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:44,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:16,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:45,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:17,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:46,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:13,ozbrojenych:17,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:47,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:17,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:48,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:2,ozbrojenych:18,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7,bossCislo:2,bossSouboj:3,bossZivotu:3,bossVydrz:65},{level:49,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:11,ozbrojenych:18,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:50,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:19,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:51,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:19,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:52,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:15,ozbrojenych:19,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:53,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:14,ozbrojenych:20,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:54,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:3,ozbrojenych:20,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8,bossCislo:2,bossSouboj:4,bossZivotu:2,bossVydrz:70},{level:55,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:12,ozbrojenych:20,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:56,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:21,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:57,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:21,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:58,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:17,ozbrojenych:22,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:59,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:22,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:60,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:22,nadrz:173,plytvani:.34,rezie:13,stupnu:9,bossCislo:2,bossSouboj:5,bossZivotu:1,bossVydrz:75},{level:61,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:10,ozbrojenych:23,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:62,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:23,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:63,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:23,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:64,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:14,ozbrojenych:24,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:65,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:24,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:66,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:3,ozbrojenych:25,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10,bossCislo:3,bossSouboj:1,bossZivotu:5,bossVydrz:66},{level:67,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:11,ozbrojenych:25,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:68,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:25,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:69,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:26,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:70,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:15,ozbrojenych:26,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:71,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:14,ozbrojenych:26,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:72,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:27,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11,bossCislo:3,bossSouboj:2,bossZivotu:4,bossVydrz:71},{level:73,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:12,ozbrojenych:27,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:74,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:28,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:75,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:28,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:76,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:17,ozbrojenych:28,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:77,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:29,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:78,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:5,ozbrojenych:29,nadrz:184,plytvani:.24,rezie:12,stupnu:12,bossCislo:3,bossSouboj:3,bossZivotu:3,bossVydrz:76},{level:79,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:14,ozbrojenych:29,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:80,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:30,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:81,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:30,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:82,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:18,ozbrojenych:31,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:83,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:31,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:84,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:6,ozbrojenych:31,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13,bossCislo:3,bossSouboj:4,bossZivotu:2,bossVydrz:81},{level:85,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:15,ozbrojenych:32,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:86,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:18,ozbrojenych:32,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:87,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:18,ozbrojenych:33,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:88,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:20,ozbrojenych:33,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:89,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:33,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:90,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:7,ozbrojenych:34,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14,bossCislo:3,bossSouboj:5,bossZivotu:1,bossVydrz:86},{level:91,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:14,ozbrojenych:34,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:92,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:34,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:93,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:35,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:94,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:18,ozbrojenych:35,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:95,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:36,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:96,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:36,nadrz:195,plytvani:.14,rezie:11,stupnu:15,bossCislo:4,bossSouboj:1,bossZivotu:5,bossVydrz:90},{level:97,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:14,ozbrojenych:36,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:98,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:37,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:99,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:37,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:100,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:19,ozbrojenych:37,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:101,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:18,ozbrojenych:38,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:102,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:5,ozbrojenych:38,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16,bossCislo:4,bossSouboj:2,bossZivotu:4,bossVydrz:96},{level:103,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:16,ozbrojenych:39,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:104,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:39,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:105,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:39,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:106,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:21,ozbrojenych:40,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:107,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:40,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:108,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:6,ozbrojenych:40,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17,bossCislo:4,bossSouboj:3,bossZivotu:3,bossVydrz:102},{level:109,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:17,ozbrojenych:41,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:110,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:20,ozbrojenych:41,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:111,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:20,ozbrojenych:42,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:112,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:23,ozbrojenych:42,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:113,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:21,ozbrojenych:42,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:114,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:7,ozbrojenych:43,nadrz:206,plytvani:.04,rezie:10,stupnu:18,bossCislo:4,bossSouboj:4,bossZivotu:2,bossVydrz:108},{level:115,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:18,ozbrojenych:43,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:116,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:22,ozbrojenych:43,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:117,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:22,ozbrojenych:44,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:118,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:25,ozbrojenych:44,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:119,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:23,ozbrojenych:45,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:120,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:8,ozbrojenych:45,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19,bossCislo:4,bossSouboj:5,bossZivotu:1,bossVydrz:114}]};var ET=1,qy={level:1,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:3,ozbrojenych:0,nadrz:140,plytvani:.64,rezie:16,stupnu:0};function AT(){return!pt||pt.verze!==ET?(console.warn("[balanc] nezn\xE1m\xE1 verze souboru, jedu na nouzov\xFDch \u010D\xEDslech"),[]):!Array.isArray(pt.levely)||pt.levely.length===0?(console.warn("[balanc] v souboru chyb\xED tabulka level\u016F, jedu na nouzov\xFDch \u010D\xEDslech"),[]):pt.levely}var jf=AT();function Yf(s){if(jf.length===0)return qy;let e=Math.min(jf.length,Math.max(1,Math.round(s||1)))-1;return{...qy,...jf[e]}}function jy(){return pt&&pt.nastaveni&&pt.nastaveni.voda||null}function Yy(){return pt&&pt.nastaveni&&pt.nastaveni.svetlo||null}function Zy(){return pt&&pt.nastaveni&&pt.nastaveni.vzhled||null}function Zf(){return pt&&pt.nastaveni&&pt.nastaveni.rozstrik||null}function Kf(){return pt&&pt.nastaveni&&pt.nastaveni.houpani||null}function $f(){return pt&&pt.nastaveni&&pt.nastaveni.fyzika||null}function Jf(){let s=pt&&pt.nastaveni;if(!s||!s.kachny&&typeof s.vodaNaKachnu!="number")return null;let e={...s.kachny||{}};return typeof s.vodaNaKachnu=="number"&&(e.vodaNaKachnu=s.vodaNaKachnu),e}var gs=class s{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);let n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new s);let n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],y=i[0],m=i[1],p=i[2],x=i[3],_=i[4],v=i[5],T=i[6],A=i[7],R=i[8];return r[0]=o*y+a*x+c*T,r[1]=o*m+a*_+c*A,r[2]=o*p+a*v+c*R,r[3]=l*y+h*x+d*T,r[4]=l*m+h*_+d*A,r[5]=l*p+h*v+d*R,r[6]=u*y+f*x+g*T,r[7]=u*m+f*_+g*A,r[8]=u*p+f*v+g*R,t}scale(e,t){t===void 0&&(t=new s);let n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new M);let n=3,i=4,r=[],o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+i*o]===0){for(a=o+1;a<l;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<l;a++){let f=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*f;while(--h)}}while(--c);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new s);let t=3,n=6,i=TT,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,c=a,l,h=n,d;do{if(r=c-a,i[r+n*r]===0){for(o=r+1;o<c;o++)if(i[r+n*o]!==0){l=h;do d=h-l,i[d+n*r]+=i[d+n*o];while(--l);break}}if(i[r+n*r]!==0)for(o=r+1;o<c;o++){let u=i[r+n*o]/i[r+n*r];l=h;do d=h-l,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=i[r+n*o]/i[r+n*r];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/i[r+n*r];l=n;do d=n-l,i[d+n*r]=i[d+n*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=i[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,c=i+i,l=t*o,h=t*a,d=t*c,u=n*a,f=n*c,g=i*c,y=r*o,m=r*a,p=r*c,x=this.elements;return x[0]=1-(u+g),x[1]=h-p,x[2]=d+m,x[3]=h+p,x[4]=1-(l+g),x[5]=f-y,x[6]=d-m,x[7]=f+y,x[8]=1-(l+u),this}transpose(e){e===void 0&&(e=new s);let t=this.elements,n=e.elements,i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}},TT=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],M=class s{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new s);let n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,c=this.z;return t.x=a*r-c*i,t.y=c*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new s(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new s(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new gs([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new s);let t=this.x,n=this.y,i=this.z,r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new s);let n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new s),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new s),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new s),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let i=RT,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=CT;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Ky),Ky.almostEquals(e,t)}clone(){return new s(this.x,this.y,this.z)}};M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);var RT=new M,CT=new M,Ky=new M,Mn=class s{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,$y),l=$y),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new s().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,c){let l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){let n=Jy,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=Jy,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}},$y=new M,Jy=[new M,new M,new M,new M,new M,new M,new M,new M],Cl=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Il=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}},rn=class s{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=IT,i=PT;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new s);let n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+o*a+i*l-r*c,t.y=i*h+o*c+r*a-n*l,t.z=r*h+o*l+n*c-i*a,t.w=o*h-n*a-i*c-r*l,t}inverse(e){e===void 0&&(e=new s);let t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new s),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);let n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,d=l*i+c*n-o*r,u=l*r+o*i-a*n,f=-o*n-a*i-c*r;return t.x=h*l+f*-o+d*-c-u*-a,t.y=d*l+f*-a+u*-o-h*-c,t.z=u*l+f*-c+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new s);let i=this.x,r=this.y,o=this.z,a=this.w,c=e.x,l=e.y,h=e.z,d=e.w,u,f,g,y,m;return f=i*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),y=Math.sin((1-t)*u)/g,m=Math.sin(t*u)/g):(y=1-t,m=t),n.x=y*i+m*c,n.y=y*r+m*l,n.z=y*o+m*h,n.w=y*a+m*d,n}integrate(e,t,n,i){i===void 0&&(i=new s);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(r*d+o*h-a*l),i.y+=u*(o*d+a*c-r*h),i.z+=u*(a*d+r*l-o*c),i.w+=u*(-r*c-o*l-a*h),i}},IT=new M,PT=new M,zT={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},we=class s{constructor(e){e===void 0&&(e={}),this.id=s.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};we.idCounter=0;we.types=zT;var ot=class s{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new rn,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return s.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return s.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(Qy),Qy.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}},Qy=new rn,Pl=class s extends we{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:we.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let i=new M;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;t[o[c]].vsub(t[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);let t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];s.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){let r=new M,o=new M;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,c,l){let h=new M,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);let y=h.dot(o);y>u&&(u=y,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let y=n.vertices[n.faces[d][g]],m=new M;m.copy(y),r.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,c,l)}findSeparatingAxis(e,t,n,i,r,o,a,c){let l=new M,h=new M,d=new M,u=new M,f=new M,g=new M,y=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);let x=m.testSepAxis(l,e,t,n,i,r);if(x===!1)return!1;x<y&&(y=x,o.copy(l))}else{let p=a?a.length:m.faces.length;for(let x=0;x<p;x++){let _=a?a[x]:x;l.copy(m.faceNormals[_]),n.vmult(l,l);let v=m.testSepAxis(l,e,t,n,i,r);if(v===!1)return!1;v<y&&(y=v,o.copy(l))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){r.vmult(e.uniqueAxes[p],h);let x=m.testSepAxis(h,e,t,n,i,r);if(x===!1)return!1;x<y&&(y=x,o.copy(h))}else{let p=c?c.length:e.faces.length;for(let x=0;x<p;x++){let _=c?c[x]:x;h.copy(e.faceNormals[_]),r.vmult(h,h);let v=m.testSepAxis(h,e,t,n,i,r);if(v===!1)return!1;v<y&&(y=v,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let x=0;x!==e.uniqueEdges.length;x++)if(r.vmult(e.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();let _=m.testSepAxis(g,e,t,n,i,r);if(_===!1)return!1;_<y&&(y=_,o.copy(g))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){let a=this;s.project(a,e,n,i,Qf),s.project(t,e,r,o,ep);let c=Qf[0],l=Qf[1],h=ep[0],d=ep[1];if(c<d||h<l)return!1;let u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(e,t){let n=new M,i=new M;this.computeLocalAABB(i,n);let r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){let c=new M,l=new M,h=new M,d=new M,u=new M,f=new M,g=new M,y=new M,m=this,p=[],x=i,_=p,v=-1,T=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){c.copy(m.faceNormals[b]),n.vmult(c,c);let P=c.dot(e);P<T&&(T=P,v=b)}if(v<0)return;let A=m.faces[v];A.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let P=0;P<m.faces[b].length;P++)A.indexOf(m.faces[b][P])!==-1&&b!==v&&A.connectedFaces.indexOf(b)===-1&&A.connectedFaces.push(b);let R=A.length;for(let b=0;b<R;b++){let P=m.vertices[A[b]],G=m.vertices[A[(b+1)%R]];P.vsub(G,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[v]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),t.vadd(f,f);let k=A.connectedFaces[b];g.copy(this.faceNormals[k]);let D=this.getPlaneConstantOfFace(k);y.copy(g),n.vmult(y,y);let V=D-y.dot(t);for(this.clipFaceAgainstPlane(x,_,y,V);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[v]);let z=this.getPlaneConstantOfFace(v);y.copy(g),n.vmult(y,y);let w=z-y.dot(t);for(let b=0;b<x.length;b++){let P=y.dot(x[b])+w;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){let G=x[b];if(P<=1e-6){let k={point:G,normal:y,depth:P};a.push(k)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o,a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];r=n.dot(c)+i;for(let h=0;h<a;h++){if(l=e[h],o=n.dot(l)+i,r<0)if(o<0){let d=new M;d.copy(l),t.push(d)}else{let d=new M;c.lerp(l,r/(r-o),d),t.push(d)}else if(o<0){let d=new M;c.lerp(l,r/(r-o),d),t.push(d),t.push(l)}c=l,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);let n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);let n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){let r=this.vertices,o,a,c,l,h,d,u=new M;for(let f=0;f<r.length;f++){u.copy(r[f]),t.vmult(u,u),e.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){let o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=i[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a],l=t[n[a][0]],h=new M;e.vsub(l,h);let d=c.dot(h),u=new M;o.vsub(l,u);let f=c.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,n,i,r){let o=e.vertices.length,a=NT,c=0,l=0,h=LT,d=e.vertices;h.setZero(),ot.vectorToLocalFrame(n,i,t,a),ot.pointToLocalFrame(n,i,h,h);let u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){let f=l;l=c,c=f}r[0]=c,r[1]=l}},Qf=[],ep=[],kT=new M,NT=new M,LT=new M,Qr=class s extends we{constructor(e){super({type:we.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Pl({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),s.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){let n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)ms.set(r[o][0],r[o][1],r[o][2]),t.vmult(ms,ms),e.vadd(ms,ms),n(ms.x,ms.y,ms.z)}calculateWorldAABB(e,t,n,i){let r=this.halfExtents;ci[0].set(r.x,r.y,r.z),ci[1].set(-r.x,r.y,r.z),ci[2].set(-r.x,-r.y,r.z),ci[3].set(-r.x,-r.y,-r.z),ci[4].set(r.x,-r.y,-r.z),ci[5].set(r.x,r.y,-r.z),ci[6].set(-r.x,r.y,-r.z),ci[7].set(r.x,-r.y,r.z);let o=ci[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=ci[a];t.vmult(c,c),e.vadd(c,c);let l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},ms=new M,ci=[new M,new M,new M,new M,new M,new M,new M,new M],mp={DYNAMIC:1,STATIC:2,KINEMATIC:4},gp={AWAKE:0,SLEEPY:1,SLEEPING:2},He=class s extends Il{constructor(e){e===void 0&&(e={}),super(),this.id=s.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?s.STATIC:s.DYNAMIC,typeof e.type==typeof s.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=s.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new rn,this.initQuaternion=new rn,this.previousQuaternion=new rn,this.interpolatedQuaternion=new rn,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new gs,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new gs,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Mn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=s.AWAKE,this.wakeUpAfterNarrowphase=!1,e===s.SLEEPING&&this.dispatchEvent(s.wakeupEvent)}sleep(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===s.AWAKE&&n<i?(this.sleepState=s.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(s.sleepyEvent)):t===s.SLEEPY&&n>i?this.wakeUp():t===s.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}}updateSolveMassProperties(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){let i=new M,r=new rn;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,i=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=DT,o=BT,a=this.quaternion,c=this.aabb,l=UT;for(let h=0;h!==i;h++){let d=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=OT,i=FT;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=HT;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;let n=GT,i=WT;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===s.DYNAMIC&&(this.sleepState===s.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=t,i=XT;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let r=qT;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==s.DYNAMIC)return;let n=jT,i=YT;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){let e=ZT;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Qr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===s.DYNAMIC||this.type===s.KINEMATIC)||this.sleepState===s.SLEEPING)return;let i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;let g=d.elements,y=this.angularFactor,m=c.x*y.x,p=c.y*y.y,x=c.z*y.z;r.x+=e*(g[0]*m+g[1]*p+g[2]*x),r.y+=e*(g[3]*m+g[4]*p+g[5]*x),r.z+=e*(g[6]*m+g[7]*p+g[8]*x),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};He.idCounter=0;He.COLLIDE_EVENT_NAME="collide";He.DYNAMIC=mp.DYNAMIC;He.STATIC=mp.STATIC;He.KINEMATIC=mp.KINEMATIC;He.AWAKE=gp.AWAKE;He.SLEEPY=gp.SLEEPY;He.SLEEPING=gp.SLEEPING;He.wakeupEvent={type:"wakeup"};He.sleepyEvent={type:"sleepy"};He.sleepEvent={type:"sleep"};var DT=new M,BT=new rn,UT=new Mn,OT=new gs,FT=new gs,VT=new gs,HT=new M,GT=new M,WT=new M,XT=new M,qT=new M,jT=new M,YT=new M,ZT=new M,rp=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&He.STATIC)!==0||e.sleepState===He.SLEEPING)&&((t.type&He.STATIC)!==0||t.sleepState===He.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){let r=KT;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){let n=$T,i=JT,r=QT,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(r[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new M;e.position.vsub(t.position,n);let i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},KT=new M;new M;new rn;new M;var $T={keys:[]},JT=[],QT=[];new M;var Xz=new M;new M;var op=class extends rp{constructor(){super()}collisionPairs(e,t,n){let i=e.bodies,r=i.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){let r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},eo=class{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}},uv,dv,fv,pv,mv,gv,yv,yp={CLOSEST:1,ANY:2,ALL:4};uv=we.types.SPHERE;dv=we.types.PLANE;fv=we.types.BOX;pv=we.types.CYLINDER;mv=we.types.CONVEXPOLYHEDRON;gv=we.types.HEIGHTFIELD;yv=we.types.TRIMESH;var zn=class s{get[uv](){return this._intersectSphere}get[dv](){return this._intersectPlane}get[fv](){return this._intersectBox}get[pv](){return this._intersectConvex}get[mv](){return this._intersectConvex}get[gv](){return this._intersectHeightfield}get[yv](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new eo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||s.ANY,this.result=t.result||new eo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ev),tp.length=0,e.broadphase.aabbQuery(e,ev,tp),this.intersectBodies(tp),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=eR,r=tR;for(let o=0,a=e.shapes.length;o<a;o++){let c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(c,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){let r=this.from;if(yR(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){let o=this.from,a=this.to,c=this.direction,l=new M(0,0,1);t.vmult(l,l);let h=new M;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let g=new M,y=new M,m=new M;o.vsub(n,g);let p=-l.dot(g)/f;c.scale(p,y),o.vadd(y,m),this.reportIntersection(l,m,r,i,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;let o=nR;o.from.copy(this.from),o.to.copy(this.to),ot.pointToLocalFrame(n,t,o.from,o.from),ot.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=iR,c,l,h,d;c=l=0,h=d=e.data.length-1;let u=new Mn;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(f,g,!1),ot.pointToWorldFrame(n,t,e.pillarOffset,wl),this._intersectConvex(e.pillarConvex,t,wl,i,r,tv),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),ot.pointToWorldFrame(n,t,e.pillarOffset,wl),this._intersectConvex(e.pillarConvex,t,wl,i,r,tv)}}}_intersectSphere(e,t,n,i,r){let o=this.from,a=this.to,c=e.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=sR,g=rR;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1);else{let y=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(y>=0&&y<=1&&(o.lerp(a,y,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){let a=oR,c=nv,l=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,g=this.from,y=this.to,m=g.distanceTo(y),p=l?l.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<p;_++){let v=l?l[_]:_,T=h[v],A=u[v],R=t,z=n;c.copy(d[T[0]]),R.vmult(c,c),c.vadd(z,c),c.vsub(g,c),R.vmult(A,a);let w=f.dot(a);if(Math.abs(w)<this.precision)continue;let b=a.dot(c)/w;if(!(b<0)){f.scale(b,hn),hn.vadd(g,hn),jn.copy(d[T[0]]),R.vmult(jn,jn),z.vadd(jn,jn);for(let P=1;!x.shouldStop&&P<T.length-1;P++){li.copy(d[T[P]]),hi.copy(d[T[P+1]]),R.vmult(li,li),R.vmult(hi,hi),z.vadd(li,li),z.vadd(hi,hi);let G=hn.distanceTo(g);!(s.pointInTriangle(hn,jn,li,hi)||s.pointInTriangle(hn,li,jn,hi))||G>m||this.reportIntersection(a,hn,r,i,v)}}}}_intersectTrimesh(e,t,n,i,r,o){let a=lR,c=mR,l=gR,h=nv,d=hR,u=uR,f=dR,g=pR,y=fR,m=e.indices;e.vertices;let p=this.from,x=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(t),ot.vectorToLocalFrame(n,t,_,d),ot.pointToLocalFrame(n,t,p,u),ot.pointToLocalFrame(n,t,x,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();let v=u.distanceSquared(f);e.tree.rayQuery(this,l,c);for(let T=0,A=c.length;!this.result.shouldStop&&T!==A;T++){let R=c[T];e.getNormal(R,a),e.getVertex(m[R*3],jn),jn.vsub(u,h);let z=d.dot(a),w=a.dot(h)/z;if(w<0)continue;d.scale(w,hn),hn.vadd(u,hn),e.getVertex(m[R*3+1],li),e.getVertex(m[R*3+2],hi);let b=hn.distanceSquared(u);!(s.pointInTriangle(hn,li,jn,hi)||s.pointInTriangle(hn,jn,li,hi))||b>v||(ot.vectorToWorldFrame(t,a,y),ot.pointToWorldFrame(n,t,hn,g),this.reportIntersection(y,g,r,i,R))}c.length=0}reportIntersection(e,t,n,i,r){let o=this.from,a=this.to,c=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case s.ALL:this.hasHit=!0,l.set(o,a,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case s.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c));break;case s.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,qs),n.vsub(t,ya),e.vsub(t,np);let r=qs.dot(qs),o=qs.dot(ya),a=qs.dot(np),c=ya.dot(ya),l=ya.dot(np),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};zn.CLOSEST=yp.CLOSEST;zn.ANY=yp.ANY;zn.ALL=yp.ALL;var ev=new Mn,tp=[],ya=new M,np=new M,eR=new M,tR=new rn,hn=new M,jn=new M,li=new M,hi=new M;new M;new eo;var tv={faceList:[0]},wl=new M,nR=new zn,iR=[],sR=new M,rR=new M,oR=new M,aR=new M,cR=new M,nv=new M,lR=new M,hR=new M,uR=new M,dR=new M,fR=new M,pR=new M;new Mn;var mR=[],gR=new ot,qs=new M,El=new M;function yR(s,e,t){t.vsub(s,qs);let n=qs.dot(e);return e.scale(n,El),El.vadd(s,El),t.distanceTo(El)}var zl=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},ap=class s{constructor(e,t,n){n===void 0&&(n={}),n=zl.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=s.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};ap.idCounter=0;var kl=class{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},ba=class s{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kl,this.jacobianElementB=new kl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,c)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,c)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,iv),a.scale(h,sv),n.invInertiaWorldSolve.vmult(o,rv),i.invInertiaWorldSolve.vmult(c,ov),e.multiplyVectors(iv,rv)+t.multiplyVectors(sv,ov)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=r+o;return a.vmult(e.rotational,Al),l+=Al.dot(e.rotational),c.vmult(t.rotational,Al),l+=Al.dot(t.rotational),l}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=vR;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ba.idCounter=0;var iv=new M,sv=new M,rv=new M,ov=new M,Al=new M,vR=new M,cp=class extends ba{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){let t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,c=xR,l=_R,h=i.velocity,d=i.angularVelocity;i.force,i.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let g=bR,y=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(y.spatial),c.negate(y.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);let x=p.dot(g),_=this.restitution+1,v=_*u.dot(p)-_*h.dot(p)+f.dot(l)-d.dot(c),T=this.computeGiMf();return-x*t-v*n-e*T}getImpactVelocityAlongNormal(){let e=MR,t=SR,n=wR,i=ER,r=AR;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}},xR=new M,_R=new M,bR=new M,MR=new M,SR=new M,wR=new M,ER=new M,AR=new M;var qz=new M,jz=new M;var Yz=new M,Zz=new M;new M;new M;var Kz=new M,$z=new M;var Jz=new M,Qz=new M,Nl=class extends ba{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,r=TR,o=RR,a=this.t;n.cross(a,r),i.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}},TR=new M,RR=new M,Ll=class s{constructor(e,t,n){n=zl.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Ll.idCounter=0;var Dl=class s{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=s.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};Dl.idCounter=0;var e3=new M,t3=new M,n3=new M,i3=new M,s3=new M,r3=new M,o3=new M,a3=new M,c3=new M,l3=new M,h3=new M;var u3=new M,d3=new M;new M;new M;new M;var f3=new M,p3=new M,m3=new M;new zn;new M;var g3=new M,y3=new M,v3=[new M(1,0,0),new M(0,1,0),new M(0,0,1)],x3=new M;var _3=new M,b3=new M,M3=new M;var S3=new M,w3=new M,E3=new M,A3=new M;var T3=new M,R3=new M,C3=new M;var I3=new M,P3=new M;var z3=new M,k3=new M,N3=new M,L3=new M,D3=new M,B3=new M,U3=new M,Ma=class extends Pl{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new M(-t*u(0),-n*.5,t*d(0))),l.push(0),o.push(new M(-e*u(0),n*.5,e*d(0))),h.push(1);for(let g=0;g<r;g++){let y=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new M(-t*u(y),-n*.5,t*d(y))),l.push(2*g+2),o.push(new M(-e*u(y),n*.5,e*d(y))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new M(-u(m),0,d(m)))}c.push(l),a.push(new M(0,1,0));let f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=we.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}};var O3=new M;var F3=new M,V3=new M,H3=new M,G3=new M,W3=new M,X3=new M,q3=new M,j3=new M,Y3=new M;var Z3=new M,K3=new Mn;var $3=new M,J3=new Mn,Q3=new M,ek=new M,tk=new M,nk=new M,ik=new M,sk=new M,rk=new M,ok=new Mn,ak=new M,ck=new ot,lk=new Mn,lp=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},hp=class extends lp{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=t.bodies,l=c.length,h=e,d,u,f,g,y,m;if(a!==0)for(let v=0;v!==l;v++)c[v].updateSolveMassProperties();let p=IR,x=PR,_=CR;p.length=a,x.length=a,_.length=a;for(let v=0;v!==a;v++){let T=o[v];_[v]=0,x[v]=T.computeB(h),p[v]=1/T.computeC()}if(a!==0){for(let A=0;A!==l;A++){let R=c[A],z=R.vlambda,w=R.wlambda;z.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==a;A++){let R=o[A];d=x[A],u=p[A],m=_[A],y=R.computeGWlambda(),f=u*(d-y-R.eps*m),m+f<R.minForce?f=R.minForce-m:m+f>R.maxForce&&(f=R.maxForce-m),_[A]+=f,g+=f>0?f:-f,R.addToWlambda(f)}if(g*g<r)break}for(let A=0;A!==l;A++){let R=c[A],z=R.velocity,w=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),z.vadd(R.vlambda,z),R.wlambda.vmul(R.angularFactor,R.wlambda),w.vadd(R.wlambda,w)}let v=o.length,T=1/h;for(;v--;)o[v].multiplier=_[v]*T}return n}},CR=[],IR=[],PR=[];var hk=He.STATIC;var up=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},dp=class extends up{constructor(){super(...arguments),this.type=M}constructObject(){return new M}},vt={sphereSphere:we.types.SPHERE,spherePlane:we.types.SPHERE|we.types.PLANE,boxBox:we.types.BOX|we.types.BOX,sphereBox:we.types.SPHERE|we.types.BOX,planeBox:we.types.PLANE|we.types.BOX,convexConvex:we.types.CONVEXPOLYHEDRON,sphereConvex:we.types.SPHERE|we.types.CONVEXPOLYHEDRON,planeConvex:we.types.PLANE|we.types.CONVEXPOLYHEDRON,boxConvex:we.types.BOX|we.types.CONVEXPOLYHEDRON,sphereHeightfield:we.types.SPHERE|we.types.HEIGHTFIELD,boxHeightfield:we.types.BOX|we.types.HEIGHTFIELD,convexHeightfield:we.types.CONVEXPOLYHEDRON|we.types.HEIGHTFIELD,sphereParticle:we.types.PARTICLE|we.types.SPHERE,planeParticle:we.types.PLANE|we.types.PARTICLE,boxParticle:we.types.BOX|we.types.PARTICLE,convexParticle:we.types.PARTICLE|we.types.CONVEXPOLYHEDRON,cylinderCylinder:we.types.CYLINDER,sphereCylinder:we.types.SPHERE|we.types.CYLINDER,planeCylinder:we.types.PLANE|we.types.CYLINDER,boxCylinder:we.types.BOX|we.types.CYLINDER,convexCylinder:we.types.CONVEXPOLYHEDRON|we.types.CYLINDER,heightfieldCylinder:we.types.HEIGHTFIELD|we.types.CYLINDER,particleCylinder:we.types.PARTICLE|we.types.CYLINDER,sphereTrimesh:we.types.SPHERE|we.types.TRIMESH,planeTrimesh:we.types.PLANE|we.types.TRIMESH},fp=class{get[vt.sphereSphere](){return this.sphereSphere}get[vt.spherePlane](){return this.spherePlane}get[vt.boxBox](){return this.boxBox}get[vt.sphereBox](){return this.sphereBox}get[vt.planeBox](){return this.planeBox}get[vt.convexConvex](){return this.convexConvex}get[vt.sphereConvex](){return this.sphereConvex}get[vt.planeConvex](){return this.planeConvex}get[vt.boxConvex](){return this.boxConvex}get[vt.sphereHeightfield](){return this.sphereHeightfield}get[vt.boxHeightfield](){return this.boxHeightfield}get[vt.convexHeightfield](){return this.convexHeightfield}get[vt.sphereParticle](){return this.sphereParticle}get[vt.planeParticle](){return this.planeParticle}get[vt.boxParticle](){return this.boxParticle}get[vt.convexParticle](){return this.convexParticle}get[vt.cylinderCylinder](){return this.convexConvex}get[vt.sphereCylinder](){return this.sphereConvex}get[vt.planeCylinder](){return this.planeConvex}get[vt.boxCylinder](){return this.boxConvex}get[vt.convexCylinder](){return this.convexConvex}get[vt.heightfieldCylinder](){return this.heightfieldCylinder}get[vt.particleCylinder](){return this.particleCylinder}get[vt.sphereTrimesh](){return this.sphereTrimesh}get[vt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new dp,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new cp(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){let n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,y=g.length?g.pop():new Nl(n,i,u*f),m=g.length?g.pop():new Nl(n,i,u*f);return y.bi=m.bi=n,y.bj=m.bj=i,y.minForce=m.minForce=-u*f,y.maxForce=m.maxForce=u*f,y.ri.copy(e.ri),y.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(y.t,m.t),y.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),y.enabled=m.enabled=e.enabled,t.push(y,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Xs.setZero(),$r.setZero(),Jr.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Xs.vadd(t.ni,Xs),$r.vadd(t.ri,$r),Jr.vadd(t.rj,Jr)):(Xs.vsub(t.ni,Xs),$r.vadd(t.rj,$r),Jr.vadd(t.ri,Jr));let o=1/e;$r.scale(o,n.ri),Jr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Xs.normalize(),Xs.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=NR,l=LR,h=zR,d=kR;for(let u=0,f=e.length;u!==f;u++){let g=e[u],y=t[u],m=null;g.material&&y.material&&(m=n.getContactMaterial(g.material,y.material)||null);let p=g.type&He.KINEMATIC&&y.type&He.STATIC||g.type&He.STATIC&&y.type&He.KINEMATIC||g.type&He.KINEMATIC&&y.type&He.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);let _=g.shapes[x];for(let v=0;v<y.shapes.length;v++){y.quaternion.mult(y.shapeOrientations[v],l),y.quaternion.vmult(y.shapeOffsets[v],d),d.vadd(y.position,d);let T=y.shapes[v];if(!(_.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+T.boundingSphereRadius)continue;let A=null;_.material&&T.material&&(A=n.getContactMaterial(_.material,T.material)||null),this.currentContactMaterial=A||m||n.defaultContactMaterial;let R=_.type|T.type,z=this[R];if(z){let w=!1;_.type<T.type?w=z.call(this,_,T,h,d,c,l,g,y,_,T,p):w=z.call(this,T,_,d,h,l,c,y,g,_,T,p),w&&p&&(n.shapeOverlapKeeper.set(_.id,T.id),n.bodyOverlapKeeper.set(g.id,y.id))}}}}}sphereSphere(e,t,n,i,r,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;let u=this.createContactEquation(a,c,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,e,t,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,Tl),u.ni.scale(u.ni.dot(Tl),av),Tl.vsub(av,u.rj),-Tl.dot(u.ni)<=e.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,c,e,t,d)}sphereBox(e,t,n,i,r,o,a,c,l,h,d){let u=this.v3pool,f=aC;n.vsub(i,Rl),t.getSideNormals(f,o);let g=e.radius,y=!1,m=lC,p=hC,x=uC,_=null,v=0,T=0,A=0,R=null;for(let N=0,Z=f.length;N!==Z&&y===!1;N++){let H=sC;H.copy(f[N]);let q=H.length();H.normalize();let ie=Rl.dot(H);if(ie<q+g&&ie>0){let le=rC,ne=oC;le.copy(f[(N+1)%3]),ne.copy(f[(N+2)%3]);let De=le.length(),Y=ne.length();le.normalize(),ne.normalize();let te=Rl.dot(le),ve=Rl.dot(ne);if(te<De&&te>-De&&ve<Y&&ve>-Y){let he=Math.abs(ie-q-g);if((R===null||he<R)&&(R=he,T=te,A=ve,_=q,m.copy(H),p.copy(le),x.copy(ne),v++,d))return!0}}}if(v){y=!0;let N=this.createContactEquation(a,c,e,t,l,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(_,m),p.scale(T,p),m.vadd(p,m),x.scale(A,x),m.vadd(x,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let z=u.get(),w=cC;for(let N=0;N!==2&&!y;N++)for(let Z=0;Z!==2&&!y;Z++)for(let H=0;H!==2&&!y;H++)if(z.set(0,0,0),N?z.vadd(f[0],z):z.vsub(f[0],z),Z?z.vadd(f[1],z):z.vsub(f[1],z),H?z.vadd(f[2],z):z.vsub(f[2],z),i.vadd(z,w),w.vsub(n,w),w.lengthSquared()<g*g){if(d)return!0;y=!0;let q=this.createContactEquation(a,c,e,t,l,h);q.ri.copy(w),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(z),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(c.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(z),z=null;let b=u.get(),P=u.get(),G=u.get(),k=u.get(),D=u.get(),V=f.length;for(let N=0;N!==V&&!y;N++)for(let Z=0;Z!==V&&!y;Z++)if(N%3!==Z%3){f[Z].cross(f[N],b),b.normalize(),f[N].vadd(f[Z],P),G.copy(n),G.vsub(P,G),G.vsub(i,G);let H=G.dot(b);b.scale(H,k);let q=0;for(;q===N%3||q===Z%3;)q++;D.copy(n),D.vsub(k,D),D.vsub(P,D),D.vsub(i,D);let ie=Math.abs(H),le=D.length();if(ie<f[q].length()&&le<g){if(d)return!0;y=!0;let ne=this.createContactEquation(a,c,e,t,l,h);P.vadd(k,ne.rj),ne.rj.copy(ne.rj),D.negate(ne.ni),ne.ni.normalize(),ne.ri.copy(ne.rj),ne.ri.vadd(i,ne.ri),ne.ri.vsub(n,ne.ri),ne.ri.normalize(),ne.ri.scale(g,ne.ri),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(c.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}}u.release(b,P,G,k,D)}planeBox(e,t,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,c,e,t,d)}convexConvex(e,t,n,i,r,o,a,c,l,h,d,u,f){let g=AC;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,g,u,f)){let y=[],m=TC;e.clipAgainstHull(n,r,t,i,o,g,-100,100,y);let p=0;for(let x=0;x!==y.length;x++){if(d)return!0;let _=this.createContactEquation(a,c,e,t,l,h),v=_.ri,T=_.rj;g.negate(_.ni),y[x].normal.negate(m),m.scale(y[x].depth,m),y[x].point.vadd(m,v),T.copy(y[x].point),v.vsub(n,v),T.vsub(i,T),v.vadd(n,v),v.vsub(a.position,v),T.vadd(i,T),T.vsub(c.position,T),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(i,dC);let f=t.faceNormals,g=t.faces,y=t.vertices,m=e.radius,p=!1;for(let x=0;x!==y.length;x++){let _=y[x],v=gC;o.vmult(_,v),i.vadd(v,v);let T=mC;if(v.vsub(n,T),T.lengthSquared()<m*m){if(d)return!0;p=!0;let A=this.createContactEquation(a,c,e,t,l,h);A.ri.copy(T),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(m,A.ri),v.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(c.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&p===!1;x++){let v=f[x],T=g[x],A=yC;o.vmult(v,A);let R=vC;o.vmult(y[T[0]],R),R.vadd(i,R);let z=xC;A.scale(-m,z),n.vadd(z,z);let w=_C;z.vsub(R,w);let b=w.dot(A),P=bC;if(n.vsub(R,P),b<0&&P.dot(A)>0){let G=[];for(let k=0,D=T.length;k!==D;k++){let V=u.get();o.vmult(y[T[k]],V),i.vadd(V,V),G.push(V)}if(iC(G,A,n)){if(d)return!0;p=!0;let k=this.createContactEquation(a,c,e,t,l,h);A.scale(-m,k.ri),A.negate(k.ni);let D=u.get();A.scale(-b,D);let V=u.get();A.scale(-m,V),n.vsub(i,k.rj),k.rj.vadd(V,k.rj),k.rj.vadd(D,k.rj),k.rj.vadd(i,k.rj),k.rj.vsub(c.position,k.rj),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),u.release(D),u.release(V),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult);for(let N=0,Z=G.length;N!==Z;N++)u.release(G[N]);return}else for(let k=0;k!==T.length;k++){let D=u.get(),V=u.get();o.vmult(y[T[(k+1)%T.length]],D),o.vmult(y[T[(k+2)%T.length]],V),i.vadd(D,D),i.vadd(V,V);let N=fC;V.vsub(D,N);let Z=pC;N.unit(Z);let H=u.get(),q=u.get();n.vsub(D,q);let ie=q.dot(Z);Z.scale(ie,H),H.vadd(D,H);let le=u.get();if(H.vsub(n,le),ie>0&&ie*ie<N.lengthSquared()&&le.lengthSquared()<m*m){if(d)return!0;let ne=this.createContactEquation(a,c,e,t,l,h);H.vsub(i,ne.rj),H.vsub(n,ne.ni),ne.ni.normalize(),ne.ni.scale(m,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(c.position,ne.rj),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(let De=0,Y=G.length;De!==Y;De++)u.release(G[De]);u.release(D),u.release(V),u.release(H),u.release(le),u.release(q);return}u.release(D),u.release(V),u.release(H),u.release(le),u.release(q)}for(let k=0,D=G.length;k!==D;k++)u.release(G[k])}}}planeConvex(e,t,n,i,r,o,a,c,l,h,d){let u=MC,f=SC;f.set(0,0,1),r.vmult(f,f);let g=0,y=wC;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,y),f.dot(y)<=0){if(d)return!0;let x=this.createContactEquation(a,c,e,t,l,h),_=EC;f.scale(f.dot(y),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,c,e,t,d)}sphereHeightfield(e,t,n,i,r,o,a,c,l,h,d){let u=t.data,f=e.radius,g=t.elementSize,y=OC,m=UC;ot.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,v=Math.ceil((m.y+f)/g)+1;if(x<0||v<0||p>u.length||_>u[0].length)return;p<0&&(p=0),x<0&&(x=0),_<0&&(_=0),v<0&&(v=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),v>=u[0].length&&(v=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let T=[];t.getRectMinMax(p,_,x,v,T);let A=T[0],R=T[1];if(m.z-f>R||m.z+f<A)return;let z=this.result;for(let w=p;w<x;w++)for(let b=_;b<v;b++){let P=z.length,G=!1;if(t.getConvexTrianglePillar(w,b,!1),ot.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,n,y,r,o,a,c,e,t,d)),d&&G||(t.getConvexTrianglePillar(w,b,!0),ot.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,n,y,r,o,a,c,e,t,d)),d&&G))return!0;if(z.length-P>2)return}}boxHeightfield(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,c,e,t,d)}convexHeightfield(e,t,n,i,r,o,a,c,l,h,d){let u=t.data,f=t.elementSize,g=e.boundingSphereRadius,y=DC,m=BC,p=LC;ot.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,v=Math.floor((p.y-g)/f)-1,T=Math.ceil((p.y+g)/f)+1;if(_<0||T<0||x>u.length||v>u[0].length)return;x<0&&(x=0),_<0&&(_=0),v<0&&(v=0),T<0&&(T=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),T>=u[0].length&&(T=u[0].length-1),v>=u[0].length&&(v=u[0].length-1);let A=[];t.getRectMinMax(x,v,_,T,A);let R=A[0],z=A[1];if(!(p.z-g>z||p.z+g<R))for(let w=x;w<_;w++)for(let b=v;b<T;b++){let P=!1;if(t.getConvexTrianglePillar(w,b,!1),ot.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,n,y,r,o,a,c,null,null,d,m,null)),d&&P||(t.getConvexTrianglePillar(w,b,!0),ot.pointToWorldFrame(i,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,n,y,r,o,a,c,null,null,d,m,null)),d&&P))return!0}}sphereParticle(e,t,n,i,r,o,a,c,l,h,d){let u=PC;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;let g=this.createContactEquation(c,a,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,c,l,h,d){let u=RC;u.set(0,0,1),a.quaternion.vmult(u,u);let f=CC;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let y=this.createContactEquation(c,a,t,e,l,h);y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0);let m=IC;u.scale(u.dot(i),m),i.vsub(m,m),y.rj.copy(m),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,c,e,t,d)}convexParticle(e,t,n,i,r,o,a,c,l,h,d){let u=-1,f=kC,g=NC,y=null,m=zC;if(m.copy(i),m.vsub(n,m),r.conjugate(cv),cv.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let p=0,x=e.faces.length;p!==x;p++){let _=[e.worldVertices[e.faces[p][0]]],v=e.worldFaceNormals[p];i.vsub(_[0],lv);let T=-v.dot(lv);if(y===null||Math.abs(T)<Math.abs(y)){if(d)return!0;y=T,u=p,f.copy(v)}}if(u!==-1){let p=this.createContactEquation(c,a,t,e,l,h);f.scale(y,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let x=p.ri,_=p.rj;x.vadd(i,x),x.vsub(c.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,c,l,h,d){return this.convexHeightfield(t,e,i,n,o,r,c,a,l,h,d)}particleCylinder(e,t,n,i,r,o,a,c,l,h,d){return this.convexParticle(t,e,i,n,o,r,c,a,l,h,d)}sphereTrimesh(e,t,n,i,r,o,a,c,l,h,d){let u=GR,f=WR,g=XR,y=qR,m=jR,p=YR,x=JR,_=HR,v=FR,T=QR;ot.pointToLocalFrame(i,o,n,m);let A=e.radius;x.lowerBound.set(m.x-A,m.y-A,m.z-A),x.upperBound.set(m.x+A,m.y+A,m.z+A),t.getTrianglesInAABB(x,T);let R=VR,z=e.radius*e.radius;for(let k=0;k<T.length;k++)for(let D=0;D<3;D++)if(t.getVertex(t.indices[T[k]*3+D],R),R.vsub(m,v),v.lengthSquared()<=z){if(_.copy(R),ot.pointToWorldFrame(i,o,_,R),R.vsub(n,v),d)return!0;let V=this.createContactEquation(a,c,e,t,l,h);V.ni.copy(v),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.copy(R),V.rj.vsub(c.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(let k=0;k<T.length;k++)for(let D=0;D<3;D++){t.getVertex(t.indices[T[k]*3+D],u),t.getVertex(t.indices[T[k]*3+(D+1)%3],f),f.vsub(u,g),m.vsub(f,p);let V=p.dot(g);m.vsub(u,p);let N=p.dot(g);if(N>0&&V<0&&(m.vsub(u,p),y.copy(g),y.normalize(),N=p.dot(y),y.scale(N,p),p.vadd(u,p),p.distanceTo(m)<e.radius)){if(d)return!0;let H=this.createContactEquation(a,c,e,t,l,h);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(e.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),ot.pointToWorldFrame(i,o,p,p),p.vsub(c.position,H.rj),ot.vectorToWorldFrame(o,H.ni,H.ni),ot.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}let w=ZR,b=KR,P=$R,G=OR;for(let k=0,D=T.length;k!==D;k++){t.getTriangleVertices(T[k],w,b,P),t.getNormal(T[k],G),m.vsub(w,p);let V=p.dot(G);if(G.scale(V,p),m.vsub(p,p),V=p.distanceTo(m),zn.pointInTriangle(p,w,b,P)&&V<e.radius){if(d)return!0;let N=this.createContactEquation(a,c,e,t,l,h);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),ot.pointToWorldFrame(i,o,p,p),p.vsub(c.position,N.rj),ot.vectorToWorldFrame(o,N.ni,N.ni),ot.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}T.length=0}planeTrimesh(e,t,n,i,r,o,a,c,l,h,d){let u=new M,f=DR;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);let y=new M;y.copy(u),ot.pointToWorldFrame(i,o,y,u);let m=BR;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let x=this.createContactEquation(a,c,e,t,l,h);x.ni.copy(f);let _=UR;f.scale(m.dot(f),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},Xs=new M,$r=new M,Jr=new M,zR=new M,kR=new M,NR=new rn,LR=new rn,DR=new M,BR=new M,UR=new M,OR=new M,FR=new M;new M;var VR=new M,HR=new M,GR=new M,WR=new M,XR=new M,qR=new M,jR=new M,YR=new M,ZR=new M,KR=new M,$R=new M,JR=new Mn,QR=[],Tl=new M,av=new M,eC=new M,tC=new M,nC=new M;function iC(s,e,t){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=eC;s[(r+1)%i].vsub(o,a);let c=tC;a.cross(e,c);let l=nC;t.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var Rl=new M,sC=new M,rC=new M,oC=new M,aC=[new M,new M,new M,new M,new M,new M],cC=new M,lC=new M,hC=new M,uC=new M,dC=new M,fC=new M,pC=new M,mC=new M,gC=new M,yC=new M,vC=new M,xC=new M,_C=new M,bC=new M;new M;new M;var MC=new M,SC=new M,wC=new M,EC=new M,AC=new M,TC=new M,RC=new M,CC=new M,IC=new M,PC=new M,cv=new rn,zC=new M;new M;var kC=new M,lv=new M,NC=new M,LC=new M,DC=new M,BC=[0],UC=new M,OC=new M,Bl=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||hv(e,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||hv(t,h)}}};function hv(s,e){s.push((e&4294901760)>>16,e&65535)}var ip=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`,pp=class{constructor(){this.data={keys:[]}}get(e,t){let n=ip(e,t);return this.data[n]}set(e,t,n){let i=ip(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){let n=ip(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},Ul=class extends Il{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new op,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new hp,this.constraints=[],this.narrowphase=new fp(this),this.collisionMatrix=new Cl,this.collisionMatrixPrevious=new Cl,this.bodyOverlapKeeper=new Bl,this.shapeOverlapKeeper=new Bl,this.contactmaterials=[],this.contactMaterialTable=new pp,this.defaultMaterial=new Dl("default"),this.defaultContactMaterial=new Ll(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof eo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=zn.ALL,n.from=e,n.to=t,n.callback=i,sp.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=zn.ANY,n.from=e,n.to=t,n.result=i,sp.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=zn.CLOSEST,n.from=e,n.to=t,n.result=i,sp.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof He&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let i=t[n].shapes;for(let r=0;r<i.length;r++){let o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=Ot.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let i=Ot.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Ot.now()-i>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=WC,i=XC,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=He.DYNAMIC,u=-1/0,f=this.constraints,g=GC;c.length();let y=c.x,m=c.y,p=c.z,x=0;for(l&&(u=Ot.now()),x=0;x!==r;x++){let k=o[x];if(k.type===d){let D=k.force,V=k.mass;D.x+=V*y,D.y+=V*m,D.z+=V*p}}for(let k=0,D=this.subsystems.length;k!==D;k++)this.subsystems[k].update();l&&(u=Ot.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Ot.now()-u);let _=f.length;for(x=0;x!==_;x++){let k=f[x];if(!k.collideConnected)for(let D=n.length-1;D>=0;D-=1)(k.bodyA===n[D]&&k.bodyB===i[D]||k.bodyB===n[D]&&k.bodyA===i[D])&&(n.splice(D,1),i.splice(D,1))}this.collisionMatrixTick(),l&&(u=Ot.now());let v=HC,T=t.length;for(x=0;x!==T;x++)v.push(t[x]);t.length=0;let A=this.frictionEquations.length;for(x=0;x!==A;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,v,this.frictionEquations,g),l&&(h.narrowphase=Ot.now()-u),l&&(u=Ot.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);let R=t.length;for(let k=0;k!==R;k++){let D=t[k],V=D.bi,N=D.bj,Z=D.si,H=D.sj,q;if(V.material&&N.material?q=this.getContactMaterial(V.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,V.material&&N.material&&(V.material.friction>=0&&N.material.friction>=0&&V.material.friction*N.material.friction,V.material.restitution>=0&&N.material.restitution>=0&&(D.restitution=V.material.restitution*N.material.restitution)),a.addEquation(D),V.allowSleep&&V.type===He.DYNAMIC&&V.sleepState===He.SLEEPING&&N.sleepState===He.AWAKE&&N.type!==He.STATIC){let ie=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),le=N.sleepSpeedLimit**2;ie>=le*2&&(V.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===He.DYNAMIC&&N.sleepState===He.SLEEPING&&V.sleepState===He.AWAKE&&V.type!==He.STATIC){let ie=V.velocity.lengthSquared()+V.angularVelocity.lengthSquared(),le=V.sleepSpeedLimit**2;ie>=le*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(V,N,!0),this.collisionMatrixPrevious.get(V,N)||(va.body=N,va.contact=D,V.dispatchEvent(va),va.body=V,N.dispatchEvent(va)),this.bodyOverlapKeeper.set(V.id,N.id),this.shapeOverlapKeeper.set(Z.id,H.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ot.now()-u,u=Ot.now()),x=0;x!==r;x++){let k=o[x];k.wakeUpAfterNarrowphase&&(k.wakeUp(),k.wakeUpAfterNarrowphase=!1)}for(_=f.length,x=0;x!==_;x++){let k=f[x];k.update();for(let D=0,V=k.equations.length;D!==V;D++){let N=k.equations[D];a.addEquation(N)}}a.solve(e,this),l&&(h.solve=Ot.now()-u),a.removeAllEquations();let z=Math.pow;for(x=0;x!==r;x++){let k=o[x];if(k.type&d){let D=z(1-k.linearDamping,e),V=k.velocity;V.scale(D,V);let N=k.angularVelocity;if(N){let Z=z(1-k.angularDamping,e);N.scale(Z,N)}}}this.dispatchEvent(VC),l&&(u=Ot.now());let b=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(e,b,P);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ot.now()-u),this.stepnumber+=1,this.dispatchEvent(FC);let G=!0;if(this.allowSleep)for(G=!1,x=0;x!==r;x++){let k=o[x];k.sleepTick(this.time),k.sleepState!==He.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Ui,Oi),e){for(let r=0,o=Ui.length;r<o;r+=2)xa.bodyA=this.getBodyById(Ui[r]),xa.bodyB=this.getBodyById(Ui[r+1]),this.dispatchEvent(xa);xa.bodyA=xa.bodyB=null}if(t){for(let r=0,o=Oi.length;r<o;r+=2)_a.bodyA=this.getBodyById(Oi[r]),_a.bodyB=this.getBodyById(Oi[r+1]),this.dispatchEvent(_a);_a.bodyA=_a.bodyB=null}Ui.length=Oi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Ui,Oi),n){for(let r=0,o=Ui.length;r<o;r+=2){let a=this.getShapeById(Ui[r]),c=this.getShapeById(Ui[r+1]);Fi.shapeA=a,Fi.shapeB=c,a&&(Fi.bodyA=a.body),c&&(Fi.bodyB=c.body),this.dispatchEvent(Fi)}Fi.bodyA=Fi.bodyB=Fi.shapeA=Fi.shapeB=null}if(i){for(let r=0,o=Oi.length;r<o;r+=2){let a=this.getShapeById(Oi[r]),c=this.getShapeById(Oi[r+1]);Vi.shapeA=a,Vi.shapeB=c,a&&(Vi.bodyA=a.body),c&&(Vi.bodyB=c.body),this.dispatchEvent(Vi)}Vi.bodyA=Vi.bodyB=Vi.shapeA=Vi.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new Mn;var sp=new zn,Ot=globalThis.performance||{};if(!Ot.now){let s=Date.now();Ot.timing&&Ot.timing.navigationStart&&(s=Ot.timing.navigationStart),Ot.now=()=>Date.now()-s}new M;var FC={type:"postStep"},VC={type:"preStep"},va={type:He.COLLIDE_EVENT_NAME,body:null,contact:null},HC=[],GC=[],WC=[],XC=[],Ui=[],Oi=[],xa={type:"beginContact",bodyA:null,bodyB:null},_a={type:"endContact",bodyA:null,bodyB:null},Fi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Vi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var jC={gravitace:2800,vaha:1,treni:.4},YC=110,Hi={...jC};function xv(s){if(Hi={...Hi,...s},delete Hi.sila,!!on){on.gravity.set(0,-Hi.gravitace,0),on.defaultContactMaterial.friction=Hi.treni;for(let e of js)_v(e),e.wakeUp()}}var ZC=1/60,on=null,js=[];function vp(){on=new Ul({gravity:new M(0,-Hi.gravitace,0)}),on.allowSleep=!0,Sv++,on.defaultContactMaterial.friction=Hi.treni,on.defaultContactMaterial.restitution=.05,js=[]}function xp(s){let e=new He({mass:0,shape:new Qr(new M((s.max.x-s.min.x)/2,(s.max.y-s.min.y)/2,(s.max.z-s.min.z)/2)),position:new M((s.min.x+s.max.x)/2,(s.min.y+s.max.y)/2,(s.min.z+s.max.z)/2)});return on.addBody(e),e}function _v(s){let e=s.zaklad,t=e.hmotnost*Hi.vaha;if(s.mass=t,s.updateMassProperties(),e.valec){let n=t*(3*e.polomer*e.polomer+e.vyska*e.vyska)/12;s.inertia.set(n,t*e.polomer*e.polomer/2,n),s.invInertia.set(1/s.inertia.x,1/s.inertia.y,1/s.inertia.z)}s.updateInertiaWorld(!0)}function bv({valec:s,polomer:e,pul:t,stred:n,quat:i,hmotnost:r}){let o=new He({mass:r*Hi.vaha,shape:s?new Ma(e,e,t.y*2,10):new Qr(new M(t.x,t.y,t.z)),position:new M(n.x,n.y,n.z),linearDamping:.12,angularDamping:.25,sleepSpeedLimit:6,sleepTimeLimit:.4});return o.quaternion.set(i.x,i.y,i.z,i.w),o.zaklad={hmotnost:r,valec:s,polomer:e,vyska:t.y*2},_v(o),on.addBody(o),o.sleep(),js.push(o),o}function Mv(s,e,t){let n=new He({mass:0,shape:new Ma(e,e,t,10),position:new M(s.x,s.y,s.z)});return on.addBody(n),n}function _p(){return!!on}var Sv=0;function Fl(){return Sv}function Vl(s){if(!on)return;on.removeBody(s);let e=js.indexOf(s);e>=0&&js.splice(e,1)}var Ol=.5,KC=2e3,Yn=new M,vv=new M;function wv(s,e,t,n=1,i=null){let r=Math.hypot(t.x,t.y,t.z);Yn.set(t.x,t.y*.25,t.z);let o=Yn.length();o<1e-6||i&&(Yn.scale((1-Ol)/o,Yn),Yn.x-=i.x*Ol,Yn.y-=i.y*Ol,Yn.z-=i.z*Ol,o=Yn.length(),o<1e-6)||(Yn.scale(YC*n*Math.min(3,r/KC)/o,Yn),vv.set(e.x-s.position.x,e.y-s.position.y,e.z-s.position.z),s.wakeUp(),s.applyImpulse(Yn,vv))}function Ev(s){if(!on)return!1;let e=!1;for(let t=0;t<js.length;t++)if(js[t].sleepState!==He.SLEEPING){e=!0;break}return e?(on.step(ZC,s,3),!0):!1}var Sa={verze:1,poznamka:"Bojov\xE9 \xFAseky. P\xED\u0161e je m\u0159\xED\u017Ekov\xFD editor v nastroje/balance.html (re\u017Eim Level), hra je bude \u010D\xEDst. M\u0159\xED\u017Eka: 5 sloupc\u016F A\u2013E po 27 cm, patra 0\u20134 po 45 cm; hern\xED jsou patra 1\u20133 (GDD 3.5).",useky:[{jmeno:"usek_01",police:[{patro:0,od:0,do:4},{patro:1,od:0,do:4},{patro:2,od:0,do:4},{patro:3,od:0,do:4},{patro:4,od:0,do:4}],kachny:[{patro:2,sloupec:3,objeveni:.3,mince:3},{patro:1,sloupec:4,objeveni:1.2,mince:0},{patro:1,sloupec:0,objeveni:2.1,mince:2},{patro:3,sloupec:1,objeveni:3,mince:0}],zada:{seminko:40,pruh:.27,jednotka:.225,pasma:[{jmeno:"bar",vyska:4,typy:["bar_a","bar_b","bar_c"],dvojite:.6,nejdelsi:5,celych:1,diry:0,patina:["#6b8fa8","#7a4a8c","#b8506e","#5f7f9a"],patinaSila:1.5,stin:.55,rimsa:"pult"},{jmeno:"hra",vyska:8,typy:["hra_a","hra_b","hra_c"],dvojite:0,nejdelsi:5,celych:1,diry:0,otvor:{od:-2,do:0},patina:["#7d2f25","#c8703a"],kresba:"jemna",rimsa:"tram"},{jmeno:"vrch",vyska:4,typy:["vrch_a","vrch_b","vrch_c"],dvojite:.5,nejdelsi:5,celych:.7,diry:0,patina:["#c9744f","#d79a8a","#5f7f80"]}]},rekvizity:[{typ:"glass_striped",patro:4,misto:1},{typ:"glass_clear",patro:4,misto:2},{typ:"bottle_amber",patro:4,misto:5},{typ:"bottle_green",patro:4,misto:8},{typ:"glass_clear",patro:3,misto:4},{typ:"coin_silver",patro:3,misto:5},{typ:"coin_silver",patro:3,misto:6},{typ:"glass_striped",patro:3,misto:8},{typ:"bottle_amber",patro:2,misto:1},{typ:"coin_silver",patro:2,misto:3},{typ:"coin_silver",patro:2,misto:4},{typ:"coin_silver",patro:2,misto:5},{typ:"glass_striped",patro:2,misto:9},{typ:"coin_silver",patro:1,misto:2},{typ:"cactus_pot",patro:1,misto:4},{typ:"bottle_green",patro:1,misto:7},{typ:"bottle_green",patro:0,misto:0},{typ:"cactus_pot",patro:0,misto:2},{typ:"bottle_amber",patro:0,misto:9}]}]};var JC=1,QC={jmeno:"nouzovy",police:[{patro:1,od:0,do:4}],kachny:[{patro:1,sloupec:2}]};function Av(s=0){let e=Sa&&Sa.verze===JC&&Array.isArray(Sa.useky)?Sa.useky[s]:null;if(!e)return console.warn("[useky] \xFAsek "+s+" v data/useky.json nen\xED, jedu na nouzov\xE9m"),QC;let t=(e.kachny||[]).map(n=>({objeveni:0,...n,mince:typeof n.mince=="number"?Math.max(0,Math.round(n.mince)):n.mince?1:0}));return{police:[],...e,kachny:t}}function Gi(s,e){let t=e.parentElement||document.body;s.parentElement!==t&&(t.appendChild(s),s.style.position="absolute");let n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return{left:n.left-i.left-t.clientLeft+t.scrollLeft,top:n.top-i.top-t.clientTop+t.scrollTop,width:n.width,height:n.height}}var e2=54/Math.sqrt(740),t2=28,Tv="#fbf1dc",Rv="#2c1a0d",un=null,bp=new I,Cv=NaN,Iv=NaN,Pv=0,wa=null;function n2(){let s='<circle cx="27" cy="27" r="15.5"/><path d="M27 5.5v11M27 37.5v11M5.5 27h11M37.5 27h11"/>';return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" style="display:block;width:100%;height:100%;background:none;border:0;border-radius:0;overflow:visible"><g fill="none" stroke="${Rv}" stroke-width="7.5" stroke-linecap="round">${s}</g><g fill="none" stroke="${Tv}" stroke-width="3.6" stroke-linecap="round">${s}</g><circle cx="27" cy="27" r="4.4" fill="${Rv}"/><circle cx="27" cy="27" r="2.4" fill="${Tv}"/></svg>`}function zv(){if(un)return un;un=document.createElement("div"),un.id="miridlo",un.style.cssText="position:fixed;left:0;top:0;pointer-events:none;will-change:transform;z-index:5;visibility:hidden",un.innerHTML=n2(),document.body.appendChild(un);for(let s of["resize","orientationchange"])window.addEventListener(s,()=>{wa=null});return un}function kv(s,e,t,n=!1){if(!un)return;s.updateMatrixWorld(),bp.set(e.x,e.y,e.z).project(s),(n||!wa||!wa.height)&&(wa=Gi(un,t));let i=wa,r=Math.max(t2,Math.round(Math.sqrt(i.width)*e2)),o=Math.round((i.left+(bp.x+1)/2*i.width-r/2)*2)/2,a=Math.round((i.top+(1-bp.y)/2*i.height-r/2)*2)/2;r!==Pv&&(un.style.width=un.style.height=r+"px",Pv=r),(o!==Cv||a!==Iv)&&(un.style.transform=`translate3d(${o}px,${a}px,0)`,Cv=o,Iv=a),un.style.visibility=i.width>0&&i.height>0?"visible":"hidden"}var i2=.11,Nv=.385,Lv=.092,s2=34,Mp="#fbf1dc",Bv="#1a1d26",r2="#262b3a",an=null,to=null,kn=null,ys=null,Ea=null,Dv="",Sp={x:0,y:0},wp=!1;function o2(){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="display:block;width:100%;height:100%;background:none;border:0;border-radius:0;overflow:visible"><circle cx="30" cy="30" r="28" fill="${Bv}"/><circle cx="30" cy="30" r="24.5" fill="#aeb2bb"/><circle cx="30" cy="28.5" r="23" fill="#d9dce2"/><circle cx="30" cy="29" r="17.5" fill="#bfc3cb"/><circle cx="30" cy="30" r="16.5" fill="#cfd2d9"/><path d="M19 37.5l-2.2-14 7.2 6.2L30 20l6 9.7 7.2-6.2-2.2 14z" fill="#f4f5f8" stroke="#8d929c" stroke-width="1.6" stroke-linejoin="round"/><rect x="19.5" y="39.3" width="21" height="3.6" rx="1.6" fill="#f4f5f8" stroke="#8d929c" stroke-width="1.4"/></svg>`}function Uv(s=0){if(an)return Hl(s),an;an=document.createElement("div"),an.id="mince",an.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:4;visibility:hidden",kn=document.createElement("div"),kn.style.cssText=`position:absolute;box-sizing:border-box;background:${r2};border-style:solid;border-color:${Bv};color:${Mp};font-family:'Lilita One','Arial Rounded MT Bold',Arial,sans-serif;white-space:nowrap;display:flex;align-items:center;line-height:1`,to=document.createElement("span"),to.style.display="inline-block",kn.appendChild(to),ys=document.createElement("div"),ys.style.cssText="position:absolute;left:0;top:0",ys.innerHTML=o2(),an.append(kn,ys),document.body.appendChild(an);for(let e of["resize","orientationchange"])window.addEventListener(e,()=>{Ea=null});return Hl(s),an}function Hl(s){to&&(to.textContent=String(Math.max(0,Math.floor(s||0))))}function Ov(s,e=!1){if(!an)return;(e||!Ea||!Ea.height)&&(Ea=Gi(an,s));let t=Ea,n=`${Math.round(t.left)}|${Math.round(t.top)}|${Math.round(t.width)}|${Math.round(t.height)}`;if(n===Dv)return;if(Dv=n,!(t.width>0&&t.height>0)){an.style.visibility="hidden",wp=!1;return}let i=Math.max(s2,Math.round(t.width*i2));an.style.transform=`translate3d(${Math.round(t.left+t.width*Nv)}px,${Math.round(t.top+t.height*Lv-i/2)}px,0)`,ys.style.width=ys.style.height=i+"px",Sp.x=(Nv+i/2/t.width)*2-1,Sp.y=1-Lv*2,wp=!0;let r=Math.round(i*.72);kn.style.left=Math.round(i*.5)+"px",kn.style.top=Math.round((i-r)/2)+"px",kn.style.height=r+"px",kn.style.minWidth=Math.round(i*1.72)+"px",kn.style.padding=`0 ${Math.round(i*.26)}px 0 ${Math.round(i*.68)}px`,kn.style.borderWidth=Math.max(2,Math.round(i*.07))+"px",kn.style.borderRadius=r+"px",kn.style.fontSize=Math.round(i*.53)+"px",an.style.visibility="visible"}function Fv(){return an&&wp?Sp:null}function Vv(){!an||!ys.animate||(ys.animate([{transform:"scale(1)",filter:"brightness(1)"},{transform:"scale(1.30)",filter:"brightness(1.9)",offset:.22},{transform:"scale(.94)",filter:"brightness(1)",offset:.55},{transform:"scale(1)",filter:"brightness(1)"}],{duration:400,easing:"ease-out"}),to.animate([{transform:"scale(1)",color:Mp},{transform:"scale(1.22)",color:"#ffffff",offset:.25},{transform:"scale(1)",color:Mp}],{duration:400,easing:"ease-out"}))}function Gl(s,e,t=null,n=16){let i=[],r=(o,a,c)=>{for(let l=0;l<c;l++){let h=l/c*Math.PI*2;i.push(`${(o+e*Math.cos(h)).toFixed(3)}em ${(a+e*Math.sin(h)).toFixed(3)}em 0 ${s}`)}};return r(0,0,n),t&&(i.push(`${t.x}em ${t.y}em 0 ${s}`),r(t.x,t.y,Math.max(8,n>>1))),i.join(",")}var a2=4,Wv=1,Hv=.18,c2=.6,Ep=.55,Gv=.07,l2=.058,h2=16,Xv="#fbf1dc",u2="#1a1d26",vs=[],Ap=new I;function d2(s){for(let e=0;e<a2;e++){let t=document.createElement("div");t.className="napis",t.style.cssText=`position:absolute;left:0;top:0;pointer-events:none;z-index:4;visibility:hidden;font-family:'Lilita One','Arial Rounded MT Bold',Arial,sans-serif;white-space:nowrap;color:${Xv};text-shadow:${Gl(u2,.045,{x:0,y:.07})};transform-origin:50% 100%;will-change:transform,opacity`,Gi(t,s),vs.push({prvek:t,zivy:!1,t:0,p:new I,obrazovka:!1,nx:0,ny:0,doba:Wv})}}function f2(s){vs.length||d2(s);let e=vs.find(t=>!t.zivy);if(!e){e=vs[0];for(let t of vs)t.t>e.t&&(e=t)}return e.zivy=!0,e.t=0,e.doba=Wv,e}function qv(s,e,t,n=Xv){let i=f2(t);i.obrazovka=!1,i.p.set(e.x,e.y,e.z),i.prvek.textContent=s,i.prvek.style.color=n,i.prvek.style.visibility="visible"}function jv(s,e,t){let n=0;for(let o of vs)o.zivy&&n++;if(!n)return;let i=Gi(vs[0].prvek,t),r=Math.max(h2,i.width*l2);for(let o of vs){if(!o.zivy)continue;o.t+=s;let a=o.t/o.doba;if(a>=1){o.zivy=!1,o.prvek.style.visibility="hidden";continue}let c,l;o.obrazovka?(c=i.left+o.nx*i.width,l=i.top+o.ny*i.height-a*Gv*.5*i.height):(Ap.copy(o.p).project(e),c=i.left+(Ap.x+1)/2*i.width,l=i.top+(1-Ap.y)/2*i.height-a*Gv*i.height);let h=o.t<Hv?1+c2*(1-o.t/Hv)**2:1,d=a<Ep?1:1-(a-Ep)/(1-Ep),u=o.prvek.style;u.fontSize=r+"px",u.transform=`translate(-50%,-100%) translate(${c}px,${l}px) scale(${h})`,u.opacity=d}}var no=512,Tp=1024,Ys=224,Rp=2/no,Cp=(Ys-2)/no,Aa=Ys+16,p2=.5,Yv=(Aa+2)/no,Zv=(Aa+Ys-2)/no,io=(Aa+Ys+24)/no,Ip=.82,xs=null;function m2(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Kv(){if(xs)return xs;let s=no,e=Tp,t=Ys,n=document.createElement("canvas");n.width=s,n.height=e;let i=n.getContext("2d"),r=m2(1871);i.fillStyle="#fff",i.fillRect(0,0,s,e),i.save(),i.beginPath(),i.rect(0,0,t,e),i.clip();let o=Math.round(Ip*255);i.fillStyle=`rgb(${o},${o-2},${o-5})`,i.fillRect(0,0,t,e);let a=h=>{for(let d of[-e,0,e])i.save(),i.translate(0,d),h(),i.restore()};for(let h=0;h<16;h++){let d=r()*t,u=r()*e,f=50+r()*130,g=r()<.6;a(()=>{let y=i.createRadialGradient(d,u,0,d,u,f);y.addColorStop(0,g?"rgba(70,35,20,0.16)":"rgba(255,246,228,0.30)"),y.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=y,i.fillRect(d-f,u-f,f*2,f*2)})}let c=(h,d,u,f,g,y,m,p=0,x=e)=>{i.beginPath();for(let _=p;_<=x;_+=6){let v=h+d*Math.sin(_/e*Math.PI*2*u+f)+g*Math.sin(_/e*Math.PI*2*y+m);_===p?i.moveTo(v,_):i.lineTo(v,_)}i.stroke()},l=[.16+r()*.08,.46+r()*.1,.8+r()*.08];for(let h=0;h<40;h++){let d=r()<.45;i.strokeStyle=d?`rgba(255,244,224,${.22+r()*.3})`:`rgba(60,26,12,${.08+r()*.15})`,i.lineWidth=d?1.6+r()*4.5:1.1+r()*2.1;let u=r()<.75?(l[Math.floor(r()*3)]+(r()-.5)*.13)*t:r()*t;c(u,1+r()*5,1+Math.floor(r()*3),r()*6.28,r()*2.5,3+Math.floor(r()*4),r()*6.28)}for(let h=0;h<5;h++){let d=r()*e,u=80+r()*320;i.strokeStyle=`rgba(40,14,8,${.35+r()*.25})`,i.lineWidth=1.3+r()*1.3;let f=14+r()*(t-28),g=r()*3,y=r()*6.28;a(()=>c(f,g,2,y,.8,5,y*2,d,d+u))}for(let h=0;h<3;h++){let d=30+r()*(t-60),u=r()*e,f=5+r()*8,g=f*(1.5+r());a(()=>{for(let y=3;y>=0;y--)i.beginPath(),i.ellipse(d,u,f*(.35+y*.45),g*(.35+y*.45),0,0,Math.PI*2),i.strokeStyle=`rgba(50,20,10,${.34-y*.07})`,i.lineWidth=1.9,i.stroke();i.beginPath(),i.ellipse(d,u,f*.35,g*.35,0,0,Math.PI*2),i.fillStyle="rgba(45,18,10,0.45)",i.fill()})}for(let h=0;h<10;h++){let d=r()*t,u=r()*e;i.strokeStyle=`rgba(45,18,10,${.15+r()*.2})`,i.lineWidth=1.5,i.beginPath(),i.moveTo(d,u),i.lineTo(d+4+r()*12,u+(r()-.5)*2),i.stroke()}for(let[h,d]of[[0,26],[t,t-26]]){let u=i.createLinearGradient(h,0,d,0);u.addColorStop(0,"rgba(40,14,8,0.42)"),u.addColorStop(1,"rgba(40,14,8,0)"),i.fillStyle=u,i.fillRect(Math.min(h,d),0,26,e)}return i.fillStyle="rgba(255,238,210,0.22)",i.fillRect(5,0,2,e),i.restore(),i.fillStyle=`rgb(${o},${o-2},${o-5})`,i.fillRect(t,0,Aa,e),i.globalAlpha=p2,i.drawImage(n,0,0,t,e,Aa,0,t,e),i.globalAlpha=1,xs=new cs(n),xs.wrapS=Gn,xs.wrapT=qn,xs.colorSpace=ii,xs.anisotropy=4,xs}var _s=s=>s*Pn,g2={bar_a:11883310,bar_b:9060202,bar_c:10504250,hra_a:11028523,hra_b:10108713,hra_c:11883310,vrch_a:7309956,vrch_b:8359808,vrch_c:12153166},$v=3807766,y2=2363919,v2=11887663,x2=13204037,_2=[4925986,4400416],Jv=6959141,b2=5909794,M2=6042407,Qv=2889234,ui=1,S2=_s(.2),w2=_s(1.2),Pp=_s(.04),Wl=110,Xl=190,ql=40,zp={seminko:40,pruh:.27,jednotka:.225,pasma:[{jmeno:"bar",vyska:4,typy:["bar_a","bar_b","bar_c"],dvojite:.6,nejdelsi:5,celych:1,diry:0,patina:["#6b8fa8","#7a4a8c","#b8506e","#5f7f9a"],patinaSila:1.5,stin:.55,rimsa:"pult"},{jmeno:"hra",vyska:8,typy:["hra_a","hra_b","hra_c"],dvojite:0,nejdelsi:5,celych:1,diry:0,otvor:{od:-2,do:0},patina:["#7d2f25","#c8703a"],kresba:"jemna",rimsa:"tram"},{jmeno:"vrch",vyska:4,typy:["vrch_a","vrch_b","vrch_c"],dvojite:.5,nejdelsi:5,celych:.7,diry:0,patina:["#c9744f","#d79a8a","#5f7f80"]}]};function kp(s){let e=s>>>0||1;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function E2(s,e){let t=kp(s.seminko),n=[],i=0;return s.pasma.forEach((r,o)=>{let a=!1,c=(e-1)/2,l=h=>!!r.otvor&&h-c>=r.otvor.od&&h-c<=r.otvor.do;for(let h=0;h<e;){if(l(h)){h++,a=!1;continue}let d=h+1<e&&!l(h+1)&&t()<(r.dvojite||0)?2:1,u=[],f=r.vyska,g=Math.min(r.nejdelsi||5,5);for(f<=g&&t()<(r.celych||0)&&(u.push(f),f=0);f>0;){let x=Math.min(g,f),_=1+Math.floor(Math.max(t(),t())*x);_===f&&u.length===0&&f>1&&(_=f-1),u.push(_),f-=_}let y=i,m=null,p=!1;for(let x of u){let _=!a&&!p&&d===1&&x<=3&&t()<(r.diry||0),v=null;if(_)p=!0;else{let T=r.typy.filter(A=>A!==m);v=(T.length?T:r.typy)[Math.floor(t()*(T.length||r.typy.length))],m=v}n.push({pruh:h,sirka:d,od:y,vyska:x,typ:v,pasmo:o}),y+=x}a=p,h+=d}i+=r.vyska}),n}var Ta=new _n({vertexColors:!0}),A2=.85;Ta.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`if ( vColor.a < 0.5 ) outgoingLight = diffuseColor.rgb * ${A2.toFixed(2)};
#include <opaque_fragment>`)};function ex(s,{sirka:e,spodek:t,vrsek:n,z:i}){s=s&&Array.isArray(s.pasma)&&s.pasma.length?s:zp;let r=_s(s.pruh||zp.pruh),o=_s(s.jednotka||zp.jednotka),a=Math.max(1,Math.ceil(e/r-1e-6));a%2===0&&a++;let c=r;e=a*r;let l=Math.ceil((n-t)/o-1e-6),h=s.pasma.map(J=>({...J})),d=h.reduce((J,se)=>J+se.vyska,0);h[h.length-1].vyska=Math.max(1,h[h.length-1].vyska+l-d);let u=E2({...s,pasma:h},a),f=[];h.reduce((J,se,xe)=>f[xe]=J+se.vyska,0);let g=s.drevo!==!1,y=g?Kv():null;Ta.map!==y&&(Ta.map=y,Ta.needsUpdate=!0);let m=c*Tp/Ys,p=kp((s.seminko||1)*104729),x=g?.93/Ip:1,_=[],v=[],T=[],A=[],R=[],z=null,w=new _e,b=1,P=(J,se,xe,re,ce,L,Ke=L,ze=[0,0,1])=>{if(xe-J<=0||re-se<=0)return;let Re=_.length/3;if(_.push(J,se,ce,xe,se,ce,xe,re,ce,J,re,ce),z){let fe=z.v+se*z.m,Ye=z.v+re*z.m;A.push(z.u0,fe,z.u1,fe,z.u1,Ye,z.u0,Ye)}else A.push(io,.5,io,.5,io,.5,io,.5);for(let fe=0;fe<4;fe++)v.push(ze[0],ze[1],ze[2]);for(let fe of[L,L,Ke,Ke])w.set(fe),T.push(w.r,w.g,w.b,b);R.push(Re,Re+1,Re+2,Re,Re+2,Re+3)},G=(J,se,xe,re,ce,L)=>{P(J,se,xe,se+ce,i,L),P(J,re-ce,xe,re,i,L),P(J,se+ce,J+ce,re-ce,i,L),P(xe-ce,se+ce,xe,re-ce,i,L)},k=(J,se,xe)=>{let re=_.length/3;for(let O of J)_.push(O[0],O[1],O[2]),A.push(io,.5);for(let O=0;O<4;O++)v.push(se[0],se[1],se[2]);for(let O=0;O<4;O++)w.set(Array.isArray(xe)?xe[O]:xe),T.push(w.r,w.g,w.b,b);let[ce,L,Ke]=J,ze=L[0]-ce[0],Re=L[1]-ce[1],fe=L[2]-ce[2],Ye=Ke[0]-ce[0],Ce=Ke[1]-ce[1],C=Ke[2]-ce[2];(Re*C-fe*Ce)*se[0]+(fe*Ye-ze*C)*se[1]+(ze*Ce-Re*Ye)*se[2]>0?R.push(re,re+1,re+2,re,re+2,re+3):R.push(re,re+2,re+1,re,re+3,re+2)},D=(J,se,xe,re,ce,L,Ke)=>k([[J,xe,ce],[se,xe,ce],[se,xe,re],[J,xe,re]],[0,Ke?1:-1,0],L),V=(J,se,xe,re,ce,L,Ke)=>k([[J,se,re],[J,se,ce],[J,xe,ce],[J,xe,re]],[Ke?1:-1,0,0],L),N=Math.max(.8,_s(Uy())),Z=Dy(),H=kp((s.seminko||1)*7919),q=-e/2;for(let J of u){let se=q+J.pruh*c,xe=se+J.sirka*c,re=t+J.od*o,ce=Math.min(n,re+J.vyska*o);if(J.typ===null){G(se,re,xe,ce,N,Z),b=0,P(se-ql,re-ql,xe+ql,ce+ql,i-S2,y2),b=1;continue}let L=new _e(g2[J.typ]??9387826),Ke=(.88+H()*.24)*x,ze=L.clone().multiplyScalar(Ke*.95),Re=L.clone().multiplyScalar(Ke*1.03);G(se,re,xe,ce,ui,$v);let fe=p()<.5,[Ye,Ce]=h[J.pasmo].kresba==="jemna"?[Yv,Zv]:[Rp,Cp];z={u0:fe?Ce:Ye,u1:fe?Ye:Ce,v:p(),m:1/(m*J.sirka)};let C=h[J.pasmo].patina;if(!C||!C.length){P(se+ui,re+ui,xe-ui,ce-ui,i,ze,Re),z=null;continue}let S=[];for(let O=0;O<=J.vyska;O++){let $=ze.clone().lerp(Re,O/J.vyska),ee=h[J.pasmo].patinaSila??1;H()<.38*ee&&$.lerp(w.set(C[Math.floor(H()*C.length)]),Math.min(.85,(.2+H()*.4)*ee));let K=h[J.pasmo].stin||0;K&&O>=J.vyska-1&&re+J.vyska*o>=t+f[J.pasmo]*o-.01&&$.lerp(w.set(3807288),K*(O===J.vyska?1:.3)),S.push($)}for(let O=0;O<J.vyska;O++){let $=O===0?re+ui:re+O*o,ee=O===J.vyska-1?ce-ui:Math.min(ce-ui,re+(O+1)*o);P(se+ui,$,xe-ui,ee,i,S[O].clone(),S[O+1].clone())}z=null}let ie=t;for(let J of h){if(ie+=J.vyska*o,!J.rimsa||ie>=n)continue;let se=J.rimsa==="pult",xe=_s(.05),re=_s(se?.07:.05),ce=1,L=ie-xe+ce,Ke=ie-ce,ze=i+re;P(q,L,q+e,L+N,ze,Z),P(q,L+N,q+e,Ke-N,ze,v2),P(q,Ke-N,q+e,Ke,ze,Z),D(q,q+e,Ke,i,ze,x2,!0),D(q,q+e,L,i,ze,$v,!1)}let le=i-w2,ne=i-Pp,De=(a-1)/2,Y=t;for(let J of h){let se=Y,xe=Math.min(n,Y+J.vyska*o);if(Y=xe,!J.otvor)continue;let re=q+Math.max(0,De+J.otvor.od)*c,ce=q+Math.min(a,De+J.otvor.do+1)*c;if(ce<=re)continue;P(re,se,re+N,xe,i,Z),P(ce-N,se,ce,xe,i,Z),P(re+N,se,ce-N,se+N,i,Z),V(re,se,xe,ne,i,Jv,!0),V(ce,se,xe,ne,i,Jv,!1),D(re,ce,se,ne,i-2.5,b2,!0),D(re,ce,xe,ne,i-2.5,Qv,!1),b=0;let L=re-Wl,Ke=ce+Wl,ze=c/2;for(let Re=L,fe=0;Re<Ke-.01;Re+=ze,fe++){let Ye=new _e(_2[fe%2]).multiplyScalar(x);z={u0:Rp,u1:Cp,v:p(),m:2/m},P(Re,se-Xl,Math.min(Ke,Re+ze),xe+Xl,le,Ye,Ye.clone().multiplyScalar(.45)),z=null}for(let Re=1.4;Re<J.vyska-1;Re+=2){let fe=se+Re*o;P(L,fe,Ke,fe+12,le+8,M2),P(L,fe-9,Ke,fe,le+8,Qv)}b=1}let te=new zt;te.setAttribute("position",new _t(_,3)),te.setAttribute("normal",new _t(v,3)),te.setAttribute("uv",new _t(A,2)),te.setAttribute("color",new _t(T,4)),te.setIndex(R);let ve=new tt(te,Ta);ve.name="zada",ve.receiveShadow=!0,ve.castShadow=!1,ve.userData.late=u;let he=[],ke=t;for(let J of h){let se=ke,xe=Math.min(n,ke+J.vyska*o);ke=xe;let re=ce=>!!J.otvor&&ce-De>=J.otvor.od&&ce-De<=J.otvor.do;for(let ce=0;ce<a;){if(re(ce)){ce++;continue}let L=ce;for(;L+1<a&&!re(L+1);)L++;he.push(new ht(new I(q+ce*c,se,i-Pp),new I(q+(L+1)*c,xe,i))),ce=L+1}if(J.otvor){let ce=q+Math.max(0,De+J.otvor.od)*c,L=q+Math.min(a,De+J.otvor.do+1)*c;L>ce&&he.push(new ht(new I(ce-Wl,se-Xl,le-Pp),new I(L+Wl,xe+Xl,le)))}}return ve.userData.kolize=he,ve}var Ge={sloupcu:5,pater:5,bunka:.27,patro:.45,deska:.06,hloubka:.4,policeDopredu:-.05,policePredek:.3,stenaDozadu:.165,prekryv:.15};var T2=287,Nt=s=>s*Pn;function bs(s){return(s-(Ge.sloupcu-1)/2)*Nt(Ge.bunka)}function Wi(s){return T2+(s-2)*Nt(Ge.patro)}var ix=1.1,tx=Et.degToRad(20);function sx(s){let e=(Ge.sloupcu-1)/2;return s<e?tx:s>e?-tx:0}var R2=new _n({color:9067059}),C2=new _n({color:9387826}),nx=new Us(1,1,1);function I2(){return Array.from({length:Ge.pater},(s,e)=>({patro:e,od:0,do:Ge.sloupcu-1}))}var rx=s=>s.od===0,ox=s=>s.do===Ge.sloupcu-1;function ax(s){let e=s.do-s.od+1;return Math.min(Ge.sloupcu,e+(rx(s)!==ox(s)?1:0))}var P2=s=>s>=Ge.sloupcu?Ge.sloupcu*Ge.bunka+2*Ge.prekryv:s*Ge.bunka;function cx(s){return`shelf_${ax(s)}`}function z2(s){let e=rx(s),t=ox(s);if(e===t)return(bs(s.od)+bs(s.do))/2;let n=Nt(P2(ax(s)))/2;return e?bs(s.do)+Nt(Ge.bunka)/2-n:bs(s.od)-Nt(Ge.bunka)/2+n}var lx="wall_usek";function hx(s,e,t={}){let n=new Kt;n.name="usek";let i=e&&e.police||I2(),r=[],o=Wi(-2),a=Wi(Ge.pater+1);if(t.stena)t.stena.position.set(0,o,kt-Nt(Ge.stenaDozadu)+Nt(.02)),t.stena.traverse(l=>{l.isMesh&&(l.castShadow=!1)}),Xf(t.stena),n.add(t.stena);else if(e&&e.zada)n.add(ex(e.zada,{sirka:Nt(Ge.bunka*Ge.sloupcu+2*Ge.prekryv),spodek:o,vrsek:a,z:kt-Nt(Ge.stenaDozadu)+Nt(.02)}));else{let l=new tt(nx,C2);l.receiveShadow=!0,l.scale.set(Nt(Ge.bunka*Ge.sloupcu+2*Ge.prekryv),a-o,Nt(.04)),l.position.set(0,(o+a)/2,kt-Nt(Ge.stenaDozadu)),n.add(l)}for(let l of i){let h=t.police&&t.police(l);if(h){h.position.set(z2(l),Wi(l.patro),kt+Nt(Ge.policeDopredu)),Xf(h),n.add(h),r.push(h);continue}let d=l.od===0?Ge.prekryv:0,u=l.do===Ge.sloupcu-1?Ge.prekryv:0,f=(l.do-l.od+1)*Ge.bunka+d+u,g=new tt(nx,R2);g.castShadow=!0,g.receiveShadow=!0,g.scale.set(Nt(f),Nt(Ge.deska),Nt(Ge.hloubka)),g.position.set((bs(l.od)+bs(l.do))/2+Nt(u-d)/2,Wi(l.patro)-Nt(Ge.deska)/2,kt+Nt(Ge.policeDopredu+Ge.policePredek-Ge.hloubka/2)),n.add(g),r.push(g)}s.add(n),n.updateMatrixWorld(!0);for(let l of r)so.push({usek:n,box:new ht().setFromObject(l)});let c=n.getObjectByName("zada");if(c)for(let l of c.userData.kolize||[])so.push({usek:n,box:l});return n}var so=[],Np=1/30,Ra=new I,Ca=new I;function Lp(){return so.filter(s=>s.usek.visible).map(s=>s.box)}function ux(s,e){let t=s.x-e.x*Np,n=s.y-e.y*Np,i=s.z-e.z*Np,r=s.x-t,o=s.y-n,a=s.z-i;for(let c=0;c<so.length;c++){if(!so[c].usek.visible)continue;let l=so[c].box,h=0,d=1,u=-1,f=!1;for(let y=0;y<3;y++){let m=y===0?t:y===1?n:i,p=y===0?r:y===1?o:a,x=y===0?l.min.x:y===1?l.min.y:l.min.z,_=y===0?l.max.x:y===1?l.max.y:l.max.z;if(Math.abs(p)<1e-9){if(m<x||m>_){f=!0;break}continue}let v=(x-m)/p,T=(_-m)/p;if(v>T){let A=v;v=T,T=A}if(v>h&&(h=v,u=y),T<d&&(d=T),h>d){f=!0;break}}if(f)continue;Ra.set(t+r*h,n+o*h,i+a*h),u<0&&(u=Math.abs(e.y)>Math.abs(e.z)?Math.abs(e.y)>Math.abs(e.x)?1:0:Math.abs(e.z)>Math.abs(e.x)?2:0);let g=u===0?e.x:u===1?e.y:e.z;return Ca.set(0,0,0).setComponent(u,g>0?-1:1),Ra.addScaledVector(Ca,3),!0}return!1}var k2={barva:"#3cb8fb",pruhlednost:94,svitivost:135,obrysSila:122,obrysBarva:"#133544",hran:6,polomer:8,tok:3.75,delkaVzoru:900,sila:2e3,nabeh:.35,zpozdeniMireni:0,prekmitMireni:0,zpozdeniPistole:.5,prekmitPistole:.48},At={...k2},Hp=1500,Gp=90,lo=100/30,N2=1.15,oo=192,ao=Array.from({length:oo},()=>({p:new I,v:new I,t:0,gen:0,s:0,zivy:!1})),fi=0,Ms=0,Bp=s=>ao[(fi+s)%oo],jl=0,di=0,Wp=0,dx=!1;function vx(s,e,t){let n=e.x-s.x,i=e.y-s.y,r=e.z-s.z,a=(Math.hypot(n,r)||1)/At.sila;return t.set(n/a,(i+.5*Hp*a*a)/a,r/a)}function L2(s,e){vx(oi,s,e)}function xx(s,e,t){return vx(s,e,t).normalize()}function D2(s,e){Ms===oo&&(ao[fi].zivy=!1,fi=(fi+1)%oo,Ms--);let t=ao[(fi+Ms)%oo];t.p.copy(oi),L2(s,t.v),t.v.multiplyScalar(.3+.7*di),t.v.x+=(Math.random()-.5)*40,t.v.y+=(Math.random()-.5)*40,t.v.y-=Hp*e,t.p.addScaledVector(t.v,e),t.t=e,t.gen=Wp,t.s=di,t.zivy=!0,Ms++}var Dp=new I,fx=!1,px=new I,Up=!1;function B2(s,e,t){for(let r=0;r<Ms;r++){let o=Bp(r);o.zivy&&(o.t+=s,o.v.y-=Hp*s,o.p.addScaledVector(o.v,s),Vp&&Vp(o.p,o.v,o.s)&&(o.zivy=!1))}for(;Ms&&(!ao[fi].zivy||ao[fi].t>N2);)ao[fi].zivy=!1,fi=(fi+1)%oo,Ms--;t&&!dx&&Wp++,dx=t;let n=Math.max(.02,At.nabeh);if(di+=((t?1:0)-di)*Math.min(1,s/n),!t&&di<.02&&(di=0),fx||(Dp.copy(e),fx=!0),Up=t||di>.02,Up){let r=Gp*s*di;for(jl+=r;jl>=1;){jl-=1;let o=r>0?Math.min(1,jl/r):0;px.copy(e).lerp(Dp,o),D2(px,o*s)}}Dp.copy(e)}var Zl=24,Ql=document.createElement("canvas");Ql.width=128;Ql.height=Zl;function U2(s){let e=Ql.getContext("2d");e.fillStyle=s,e.fillRect(0,0,128,Zl);for(let[t,n]of[[30,12]]){let i=e.createLinearGradient(t-n,0,t+n,0);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.15,"rgba(255,255,255,1)"),i.addColorStop(.85,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(t-n,0,n*2,Zl)}for(let[t,n]of[[64,.45],[76,.3],[100,.5],[112,.35]]){let i=2+(n>.7?2:1),r=e.createLinearGradient(t-i,0,t+i,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.22,"rgba(238,250,255,"+n+")"),r.addColorStop(.78,"rgba(238,250,255,"+n+")"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(t-i,0,i*2,Zl)}}var pi=new cs(Ql);pi.wrapS=pi.wrapT=qn;pi.magFilter=Ct;pi.minFilter=Ct;pi.generateMipmaps=!1;pi.anisotropy=4;pi.repeat.set(1.4,1);var Kl=new _n({map:pi,transparent:!0,depthWrite:!1}),_x=new Pt({side:xt,transparent:!0,opacity:1,depthWrite:!1}),$s=96,Op=4,eh=null,co=[],bx=0;function mx(s,e){let t=new zt,n=($s+1)*(s+1),i=new rt(new Float32Array(n*3),3),r=new rt(new Float32Array(n*3),3),o=new rt(new Float32Array(n*2),2);i.setUsage(dl),r.setUsage(dl),o.setUsage(dl),t.setAttribute("position",i),t.setAttribute("normal",r),t.setAttribute("uv",o);let a=[];for(let l=0;l<$s;l++)for(let h=0;h<s;h++){let d=l*(s+1)+h,u=(l+1)*(s+1)+h,f=(l+1)*(s+1)+h+1,g=l*(s+1)+h+1;a.push(d,g,u,u,g,f)}t.setIndex(a);let c=new tt(t,e);return c.frustumCulled=!1,c.visible=!1,eh.add(c),{m:c,geo:t,rad:s}}function O2(){for(let s of co)for(let e of[s.voda,s.obrys])e.geo.dispose(),eh.remove(e.m);co=[];for(let s=0;s<Op;s++){let e=mx(At.hran,_x);e.m.renderOrder=-1;let t=mx(At.hran,Kl);t.m.renderOrder=0,co.push({voda:t,obrys:e,body:[],sily:[],krivka:new Jc([])})}bx=At.hran}var Jl=200,Ks=new Float64Array(Jl+1),Ia=new I,Pa=new I,ro=new I,Yl=new I,F2=new Ue,th=()=>Array.from({length:$s+1},()=>new I),Mx=th(),Nn=th(),Zs=th(),Fp=th();function V2(s){let e=Jl+1,t=s*Ks[e-1],n=0,i=e-1,r=0;for(;n<=i;){r=Math.floor(n+(i-n)/2);let c=Ks[r]-t;if(c<0)n=r+1;else if(c>0)i=r-1;else{i=r;break}}if(r=i,Ks[r]===t)return r/(e-1);let o=Ks[r],a=Ks[r+1];return(r+(t-o)/(a-o))/(e-1)}var $l=1;function H2(s){s.getPoint(0,Ia);let e=0;Ks[0]=0;for(let o=1;o<=Jl;o++)s.getPoint(o/Jl,Pa),e+=Pa.distanceTo(Ia),Ks[o]=e,Ia.copy(Pa);$l=Math.max(1,e);for(let o=0;o<=$s;o++){let a=V2(o/$s);s.getPoint(a,Mx[o]);let c=a-1e-4,l=a+1e-4;c<0&&(c=0),l>1&&(l=1),s.getPoint(c,Ia),s.getPoint(l,Pa),Nn[o].copy(Pa).sub(Ia).normalize()}let t=Number.MAX_VALUE,n=Math.abs(Nn[0].x),i=Math.abs(Nn[0].y),r=Math.abs(Nn[0].z);n<=t&&(t=n,Yl.set(1,0,0)),i<=t&&(t=i,Yl.set(0,1,0)),r<=t&&Yl.set(0,0,1),ro.crossVectors(Nn[0],Yl).normalize(),Zs[0].crossVectors(Nn[0],ro),Fp[0].crossVectors(Nn[0],Zs[0]);for(let o=1;o<=$s;o++){if(Zs[o].copy(Zs[o-1]),ro.crossVectors(Nn[o-1],Nn[o]),ro.length()>Number.EPSILON){ro.normalize();let a=Math.acos(Et.clamp(Nn[o-1].dot(Nn[o]),-1,1));Zs[o].applyMatrix4(F2.makeRotationAxis(ro,a))}Fp[o].crossVectors(Nn[o],Zs[o])}}var gx=.5,G2=40,W2=12;function yx(s,e,t,n,i,r){let o=s.rad,a=s.geo.attributes.position,c=s.geo.attributes.normal,l=s.geo.attributes.uv,h=$s;for(let d=0;d<=h;d++){let u=d/h,f=Mx[d],g=Zs[d],y=Fp[d],m=r?1:Math.min(1,u*$l/W2),p=m*m*(3-2*m),x=1+p*(.2*Math.sin(u*15-t*11)+.11*Math.sin(u*26.3-t*7.4)+.07*Math.sin(u*41.7-t*17.1)),_=gx+(1-gx)*p,v=1-.45*u*u,T=Math.min(1,(1-u)*$l/G2),A=T*T*(3-2*T),R=r&&u<.1?Math.max(.02,u/.1):1,z=u>.7?1+.35*Math.sin(u*70-t*23)*((u-.7)/.3):1,w=n[Math.min(i-1,Math.round(u*(i-1)))],b=e*v*x*A*R*z*_*(.25+.75*w),P=7*u,G=Math.sin(u*9-t*8.5)*P,k=Math.sin(u*11.7-t*6.2)*P*.6,D=g.x*G+y.x*k,V=g.y*G+y.y*k,N=g.z*G+y.z*k;for(let Z=0;Z<=o;Z++){let H=Z/o*Math.PI*2,q=Math.cos(H),ie=Math.sin(H),le=q*g.x+ie*y.x,ne=q*g.y+ie*y.y,De=q*g.z+ie*y.z,Y=d*(o+1)+Z;a.setXYZ(Y,f.x+D+le*b,f.y+V+ne*b,f.z+N+De*b),c.setXYZ(Y,le,ne,De),l.setXY(Y,u*$l/Math.max(50,At.delkaVzoru||900),Z/o)}}a.needsUpdate=!0,c.needsUpdate=!0,l.needsUpdate=!0,s.geo.setDrawRange(0,h*o*6),s.m.visible=!0}function X2(s){let e=0,t=Ms-1;for(;t>=0&&e<Op;){let n=Bp(t);if(!n.zivy){t--;continue}let i=n.gen,r=co[e],o=0;for(e===0&&Up&&i===Wp&&n.p.distanceToSquared(oi)>25&&(r.body[0]=oi,r.sily[0]=di,o=1);t>=0;t--){let c=Bp(t);if(!c.zivy||c.gen!==i)break;r.body[o]=c.p,r.sily[o]=c.s,o++}if(r.body.length=o,o<4)continue;r.krivka.points=r.body,H2(r.krivka);let a=n.t<.05;yx(r.voda,At.polomer,s,r.sily,o,!a),yx(r.obrys,At.polomer*At.obrysSila/100,s,r.sily,o,!a),e++}for(;e<Op;e++)co[e].voda.m.visible=!1,co[e].obrys.m.visible=!1}function Sx(s,e){eh=s,q2(e||At)}function q2(s){At={...At,...s},U2(At.barva),pi.needsUpdate=!0,Kl.opacity=At.pruhlednost/100,Kl.emissive.set(At.barva).multiplyScalar(.55),Kl.emissiveIntensity=At.svitivost/100,_x.color.set(At.obrysBarva),eh&&At.hran!==bx&&O2()}function Xi(){return At}function nh(){return di}function wx(){return Math.max(.02,At.nabeh)}var Vp=null;function Ex(s){Vp=s}function Ax(s,e,t,n){B2(s,t,n),X2(e),pi.offset.x-=s*At.tok*.3}var ih=48,sh=.64,j2=.36,Y2=.86,Z2=5e-4,Tx=2.3,K2=.04,$2=14,J2=9,Rx=new _e(2929614),Q2=new _e(16757278),eI=new _e(16777215),Xp=new _e,qp=null;function tI(){return qp||(qp=new Qc(sh,Y2,ih,1,Math.PI/2,Math.PI*2)),qp.clone()}function nI(s,e){let t=s.attributes.position;for(let n=0;n<=ih;n++){let i=Math.PI/2+n/ih*Math.PI*2;t.setXY(n,e*Math.cos(i),e*Math.sin(i))}t.needsUpdate=!0}function Cx(s,e,t,n){let i=new Pt({color:Rx,side:xt,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),r=new tt(tI(),i);r.rotation.y=Math.PI,r.name="ukazatel_zivota",r.userData.ukazatel=!0,r.renderOrder=10,r.castShadow=!1,r.receiveShadow=!1,r.scale.setScalar(t),r.position.set(e.x,e.y,n+Z2),r.geometry.setDrawRange(0,0),r.visible=!1,s.add(r);let o={mesh:r,mat:i,polomer:t,meritko:1,problesk:0,podil:0,vnitrni:sh,z0:r.position.z,nadVsim:!0};return s.userData.ukazatel=o,o}function Ix(s,e){s.podil=Math.max(0,Math.min(1,e));let t=Math.round(s.podil*ih);s.mesh.geometry.setDrawRange(0,t*6),s.mesh.visible=t>0}function jp(s){s.problesk=1}function Px(s,e,t){let n=t?Tx:1;s.meritko+=(n-s.meritko)*Math.min(1,$2*e),s.mesh.scale.setScalar(s.polomer*s.meritko);let i=Math.max(0,Math.min(1,(s.meritko-1)/(Tx-1)));s.mesh.position.z=s.z0+K2*i;let r=i>(s.nadVsim?.08:.2);r!==s.nadVsim&&(s.nadVsim=r,s.mat.depthTest=!r,s.mat.depthWrite=!r,s.mesh.renderOrder=r?10:-5);let o=sh+(j2-sh)*i;Math.abs(o-s.vnitrni)>.002&&(s.vnitrni=o,nI(s.mesh.geometry,o)),Xp.copy(Rx).lerp(Q2,i),s.problesk>0&&(s.problesk=Math.max(0,s.problesk-J2*e),Xp.lerp(eI,s.problesk)),s.mat.color.copy(Xp)}var iI=lo/Gp,Gt={SCHOVANA:"schovana",VYJIZDI:"vyjizdi",VENKU:"venku",ZAJIZDI:"zajizdi",SESTRELENA:"sestrelena",PRYC:"pryc"},zx=.25,sI=.4,Gx={sila:1,tuhost:60,tlumeni:4,maxUhel:25,prahVyrazu:12},qi={...Gx};function Wx(s){qi={...qi,...s}}var rI={vodaNaKachnu:5,nasobekTerce:2,dobaVyjeti:.22,dobaVenku:3,dobaSchovani:1.5,kloboukOdstrel:1,bodyZaVodu:10,bodySestreleni:20},Zn={...rI};function Xx(s){Zn={...Zn,...s}}function tm(){return{...Zn}}var mi=[],rh=new ht,kx=new ht,ah="target";function oI(s){for(let e=s;e;e=e.parent)if(e.name===ah)return!0;return!1}var aI=-1.5,cI=.007,Yp=new ht,Ss=new I;function qx(s,e){e.position.set(0,0,0),e.rotation.set(0,0,0),e.updateMatrixWorld(!0),Yp.setFromObject(e).getCenter(Ss);let t=Et.degToRad(aI),n=Math.cos(t),i=Math.sin(t);e.rotation.y=t,e.position.set(Ss.x-(Ss.x*n+Ss.z*i),cI,Ss.z-(-Ss.x*i+Ss.z*n)),s.add(e),Yp.getSize(Zp),Cx(e,Ss,Math.max(Zp.x,Zp.y)/2,Yp.max.z)}var Zp=new I;function lI(s){for(let e=s;e;e=e.parent)if(e.name==="hat")return!0;return!1}function Kp(s){let e=s.getCenter(new I),t=s.getSize(new I).multiplyScalar(.5);return{c:e,r:t,klobouk:!1}}var ch=0;function nm(){return ch}function jx(s,e={}){ch++,s.updateMatrixWorld(!0);let t=new ht,n=new ht,i=new ht,r=null,o=null,a=null;s.traverse(u=>{if(u.name==="hat"&&!r&&(r=u),u.name===ah&&!o&&(o=u),u.userData.ukazatel&&u.isMesh){a=u.parent.userData.ukazatel;return}!u.isMesh||u.userData.obrys||(u.geometry.boundingBox||u.geometry.computeBoundingBox(),kx.copy(u.geometry.boundingBox).applyMatrix4(u.matrixWorld),(oI(u)?i:lI(u)?n:t).union(kx))});let c=[];t.isEmpty()||c.push(Kp(t)),n.isEmpty()||c.push({...Kp(n),klobouk:!0}),i.isEmpty()||c.push({...Kp(i),terc:!0}),rh.copy(t).union(n);let l=Vy(s),h=!!e.staticka,d={objekt:s,elipsy:c,pata:rh.min.y,vyska:Math.max(1,rh.max.y-rh.min.y),uhelX:0,uhelZ:0,rychX:0,rychZ:0,klidX:s.rotation.x,klidZ:s.rotation.z,vyrazZasahu:l.includes(qf)&&l.includes(pa),odZasahu:99,koukaZasazene:!1,voda:0,staticka:h,stav:h?Gt.VENKU:Gt.SCHOVANA,cas:0,ceka:h?0:+e.objeveni||0,meritko:s.scale.clone(),sY:h?1:0,vY:0,kloboukObj:r,kloboukY0:r?r.position.y:0,kloboukDy:0,kloboukV:0,kloboukMeritko0:r?r.scale.clone():new I(1,1,1),vodaKlobouk:0,y0:s.position.y,klidY:s.rotation.y,tercObj:o,tercS:h?1:0,plneni:0,ukazatel:a,teklo:!1,data:{kachna:mi.length,patro:e.patro,sloupec:e.sloupec,mince:+e.mince||0,plneni:0,pridano:0,x:0,y:0,z:0}};h||(ws(d,0,0),fo(d,0),s.visible=!1),mi.push(d)}function fo(s,e){s.tercS=e,s.tercObj&&s.tercObj.scale.setScalar(Math.max(1e-4,e))}function Nx(s,e){s.kloboukObj&&(s.kloboukV=e)}function Lx(s){s.kloboukDy=0,s.kloboukV=0,s.kloboukObj&&(s.kloboukObj.position.y=s.kloboukY0)}function hI(s,e){!s.kloboukObj||s.kloboukDy<=0&&s.kloboukV<=0||(s.kloboukV-=gI*e,s.kloboukDy+=s.kloboukV*e,s.kloboukDy<=0&&(s.kloboukDy=0,s.kloboukV=0),s.kloboukObj.position.y=s.kloboukY0+s.kloboukDy)}function ho(s,e){s.stav===Gt.VENKU!=(e===Gt.VENKU)&&ch++,s.stav=e,s.cas=0}var uI=.3,Dx=.2,dI=.25,fI=1.35,Bx=1.4,pI=1.1,mI=.7,gI=16,Ux=.08,$p=.12,uo=.1,yI=.45,oh=.3,Jp=.75,vI=.16,xI=.35,Qp=.16,_I=18,Ox=40,bI=560,MI=110,SI=300,em=null,Fx=new I;function Yx(s){em=s}function Zx(s,e,t=0,n=!1){if(!s.kloboukObj)return;let i=s.kloboukObj;s.kloboukObj=null;for(let r=s.elipsy.length-1;r>=0;r--)s.elipsy[r].klobouk&&s.elipsy.splice(r,1);if(ch++,Fx.copy(s.meritko).multiply(s.kloboukMeritko0),em?em(i,s.objekt.parent,e,Fx,t):i.visible=!1,n){let r=s.objekt;s.data.x=r.position.x,s.data.y=r.position.y+s.vyska*1.05,s.data.z=r.position.z,qt("klobouk:odstrelen",s.data)}}var Js=s=>s*s*(3-2*s);function ws(s,e,t=null){let n=Math.max(0,e),i;t===null?i=Math.min(fI,Math.max(.7,1/Math.sqrt(Math.max(n,.05)))):i=Math.max(0,t)*(n>1?1/Math.sqrt(n):1),s.objekt.scale.set(s.meritko.x*Math.max(i,1e-4),s.meritko.y*Math.max(n,1e-4),s.meritko.z*Math.max(i,1e-4))}function Vx(s,e,t){let n=Math.PI/Math.max(.05,Zn.dobaVyjeti);s.vY+=(n*n*(e-s.sY)-2*uI*n*s.vY)*t,s.sY+=s.vY*t}function wI(s,e){let t=s.objekt;switch(s.stav){case Gt.SCHOVANA:s.cas+=e,s.cas>=s.ceka&&(ho(s,Gt.VYJIZDI),t.visible=!0,s.sY=0,s.vY=0,Lx(s));break;case Gt.VYJIZDI:s.cas+=e,Vx(s,1,e),ws(s,s.sY,Math.sqrt(Math.min(1,s.sY))),fo(s,Js(Math.min(1,Math.max(0,(s.cas-Ux)/$p)))),s.sY>=1&&(ho(s,Gt.VENKU),s.rychX-=Bx,Nx(s,pI),qt("kachna:objevena",s.data));break;case Gt.VENKU:if(s.cas+=e,s.tercS<1&&fo(s,Js(Math.min(1,Math.max(0,(s.cas+$p-Ux)/$p)))),(Math.abs(s.sY-1)>.002||Math.abs(s.vY)>.002)&&(Vx(s,1,e),ws(s,s.sY)),s.data.pridano>0&&(s.data.plneni=s.plneni,qt("kachna:zasazena",s.data),s.data.pridano=0,s.plneni>=Zn.vodaNaKachnu)){ho(s,Gt.SESTRELENA),s.ukazatel&&jp(s.ukazatel),s.data.x=t.position.x,s.data.y=t.position.y+s.vyska*.5,s.data.z=t.position.z,qt("kachna:sestrelena",s.data);break}s.cas>=Zn.dobaVenku&&(ho(s,Gt.ZAJIZDI),s.vY=0,Nx(s,mI));break;case Gt.SESTRELENA:{s.cas+=e;let n=vI*Pn;if(s.cas<uo)s.kloboukOdskocil||(s.kloboukOdskocil=!0,Zx(s,bI,Math.sign(t.position.x)*MI)),ws(s,1-yI*Js(s.cas/uo));else if(s.cas<uo+oh){let i=(s.cas-uo)/oh*Jp;s.vyskocila||(s.vyskocila=!0,s.rychX-=Bx*1.5),t.position.y=s.y0+n*4*i*(1-i);let r=1+xI*(1-i/Jp)**2;ws(s,r,1),t.rotation.y=s.klidY+Math.sign(t.position.x||1)*Et.degToRad(Ox)*Js(i/Jp),fo(s,Math.max(0,1-i*2))}else if(s.cas<uo+oh+Qp){let i=(s.cas-uo-oh)/Qp;s.praskla||(s.praskla=!0,s.data.x=t.position.x,s.data.y=t.position.y+s.vyska*.5,s.data.z=t.position.z,qt("kachna:prasknuti",s.data));let r=Math.sign(t.position.x||1);t.rotation.y=s.klidY+r*(Et.degToRad(Ox)+_I*i*i*Qp);let o=1-Js(i);ws(s,o,o)}else ho(s,Gt.PRYC),t.visible=!1,qt("kachna:pryc",s.data);break}case Gt.ZAJIZDI:{s.cas+=e;let n=Math.max(.05,Zn.dobaVyjeti),i=n*dI;if(s.cas<i)s.sY=1+Dx*Js(s.cas/i),ws(s,s.sY,1),fo(s,1-Js(s.cas/i));else{let r=Math.min(1,(s.cas-i)/(n-i));s.sY=(1+Dx)*(1-r*r),ws(s,s.sY,1-r*r*r)}s.cas>=n&&(ho(s,Gt.SCHOVANA),s.ceka=Zn.dobaSchovani,t.visible=!1,s.sY=0,fo(s,0),Lx(s),qt("kachna:schovana",s.data));break}default:break}}var lh=new I,za=new I;function Kx(s,e,t){for(let n=0;n<mi.length;n++){let i=mi[n];if(i.stav===Gt.VENKU)for(let r=0;r<i.elipsy.length;r++){let o=i.elipsy[r],a=(s.x-o.c.x)/o.r.x,c=(s.y-o.c.y)/o.r.y,l=(s.z-o.c.z)/o.r.z;if(a*a+c*c+l*l>1)continue;za.set(a/o.r.x,c/o.r.y,l/o.r.z).normalize(),lh.copy(s).addScaledVector(za,3);let h=Math.min(1,Math.max(0,(s.y-i.pata)/i.vyska)),d=qi.sila*t*h*6e-5;i.rychX+=e.z*d,i.rychZ-=e.x*d,i.odZasahu=0,i.voda+=t;let u=t*iI*(o.terc?Zn.nasobekTerce:1);return i.plneni+=u,i.data.pridano+=u,o.klobouk&&(i.vodaKlobouk+=u),!0}}return!1}function $x(s){let e=Et.degToRad(qi.maxUhel);for(let t=0;t<mi.length;t++){let n=mi[t];if(n.staticka||(wI(n,s),hI(n,s),n.kloboukObj&&n.vodaKlobouk>=Zn.kloboukOdstrel&&Zx(n,SI,0,!0)),n.rychX+=(-qi.tuhost*n.uhelX-qi.tlumeni*n.rychX)*s,n.rychZ+=(-qi.tuhost*n.uhelZ-qi.tlumeni*n.rychZ)*s,n.uhelX+=n.rychX*s,n.uhelZ+=n.rychZ*s,Math.abs(n.uhelX)>e&&(n.uhelX=Math.sign(n.uhelX)*e,n.rychX=0),Math.abs(n.uhelZ)>e&&(n.uhelZ=Math.sign(n.uhelZ)*e,n.rychZ=0),n.objekt.rotation.x=n.klidX+n.uhelX,n.objekt.rotation.z=n.klidZ+n.uhelZ,n.odZasahu+=s,n.ukazatel){let i=n.odZasahu<zx;n.teklo&&!i&&jp(n.ukazatel),n.teklo=i;let r=n.plneni/Math.max(.01,Zn.vodaNaKachnu);n.ukazatel.podil!==r&&Ix(n.ukazatel,r),Px(n.ukazatel,s,i)}if(n.vyrazZasahu){n.voda*=Math.exp(-s/sI);let i=n.odZasahu<zx,r=n.koukaZasazene?i:i&&n.voda>=(qi.prahVyrazu??Gx.prahVyrazu);r!==n.koukaZasazene&&(Hy(n.objekt,r?qf:pa),n.koukaZasazene=r)}}if(!Hx){let t=0,n=0;for(let i=0;i<mi.length;i++)mi[i].staticka||(n++,mi[i].stav!==Gt.PRYC&&t++);n>0&&t===0&&(Hx=!0,qt("usek:vycisten",null))}}var Hx=!1;function Jx(){let s=[];for(let e of mi)if(e.stav===Gt.VENKU)for(let t of e.elipsy)s.push({stred:t.c,polomery:t.r,klobouk:t.klobouk,terc:!!t.terc});return s}var o_="assets/rekvizity.glb",a_="assets/modely.glb",gh=2,am=Ge.sloupcu*gh,EI=Ge.bunka/gh,c_={cactus_pot:2,jug:2,coin_stack:1,sack:2,barrel:2,crate:2,logs:2,wheel:3,skull:3,lantern:1},AI={coin_silver:.045,coin_gold:.045},TI={bottle_amber:12,bottle_green:12,glass_striped:180,glass_clear:180,coin_silver:0,coin_gold:0};function RI(s,e,t){let n=TI[s]??30,i=Math.sin(e*127.1+t*311.7)*43758.5453;return(i-Math.floor(i)-.5)*2*n}var CI={cactus_pot:45};function II(s){if(s.rot!==void 0&&s.rot!==null)return s.rot;let e=CI[s.typ];return e!==void 0?(Math.random()*2-1)*e:RI(s.typ,s.patro,s.misto)}function PI(s,e=1){return(s+(e-1)/2-(am-1)/2)*go(EI)}function zI(s,e=[]){let t=new Map,n=[],i=(r,o,a)=>{if(o<0||o>=am){n.push(`${a}: m\xEDsto ${o} na pat\u0159e ${r} je mimo polici (0\u2013${am-1})`);return}let c=r+":"+o;t.has(c)?n.push(`${a} a ${t.get(c)}: oba na pat\u0159e ${r}, m\xEDsto ${o}`):t.set(c,a)};for(let r of e)for(let o=0;o<gh;o++)i(r.patro,r.sloupec*gh+o,"kachna");for(let r of s||[])for(let o=0;o<(c_[r.typ]||1);o++)i(r.patro,r.misto+o,r.typ);return n}var l_={bottle_amber:1.32,bottle_green:1.32,glass_striped:1.35,glass_clear:1.35,coin_silver:1.25,coin_gold:1.25,coin_stack:1.3,cactus_pot:1.2},h_=1.2,kI=Ge.policeDopredu+Ge.policePredek,NI=.01,LI=new ht,hh=new I;function DI(s,e){return s.position.set(0,0,0),s.quaternion.identity(),s.updateMatrixWorld(!0),LI.setFromObject(s).getSize(hh),(lm.has(e)?Math.max(hh.x,hh.z):hh.z)/2}var u_={coin_silver:1.7,coin_gold:1.7},lm=new Set(["coin_silver","coin_gold"]),Qx={glass_clear:.45},d_=2.4,BI=.16,UI=.5,OI=14,FI=.3,go=s=>s*Pn,VI=new Set(["bottle_amber","bottle_green","glass_striped","glass_clear","cactus_pot","jug","barrel","coin_stack","lantern"]),HI=.9,GI={bottle_amber:.54,bottle_green:.54,glass_striped:.65,glass_clear:.65,cactus_pot:1.05,jug:.8,coin_stack:8,barrel:.4,crate:.35,wheel:.4,logs:.8,sack:.9,lantern:.4,skull:.55,hat:.3},WI=.6,XI=.9,qI=1e3/Pn**3,jI=1,Kn=[],mh=new ht,La=new I,im=new It,po=new I,Qs=new I,uh=new I,yh=[];function hm(s){s.telo||!s.cekaNaTeleso||(s.cekaNaTeleso=!1,s.telo=bv({valec:s.valec,polomer:s.polomer,pul:s.pul,stred:s.stred,quat:s.q,hmotnost:s.hmotnost}))}function f_(s,e,t=!1){let n=s.position.clone(),i=s.quaternion.clone();s.position.set(0,0,0),s.quaternion.identity(),s.updateMatrixWorld(!0),mh.setFromObject(s),s.position.copy(n),s.quaternion.copy(i),s.updateMatrixWorld(!0),mh.getSize(La);let r=mh.getCenter(new I),o=La.clone().multiplyScalar(.5),a={m:s,telo:null,posun:r,pul:o,valec:!1,q:new It,stred:new I,dosah:0,mince:!1};if(lm.has(e))a.mince=!0,o.x=o.z=Math.max(o.x,o.z),a.stred.copy(r).add(s.position);else{a.valec=VI.has(e);let c=0;a.valec&&(c=Math.min(o.x,o.z)*HI,o.x=o.z=c),a.q.copy(s.quaternion),a.stred.copy(r).applyQuaternion(a.q).add(s.position);let l=(a.valec?Math.PI*c*c*o.y*2:8*o.x*o.y*o.z)*qI;a.hmotnost=(GI[e]??WI)*l*XI,a.polomer=c,a.cekaNaTeleso=!0,t?hm(a):yh.push(a)}return a.dosah=o.length(),Kn.push(a),a}function p_(s,e,t,n=null,i=0,r=2){if(!s||!e)return null;if(e.attach(s),n&&s.scale.copy(n),s.updateMatrixWorld(!0),!_p()){vp();for(let a of Lp())xp(a)}let o=f_(s,"hat",!0);return o.telo&&(o.telo.wakeUp(),o.telo.velocity.set(i,t,0),o.telo.angularVelocity.set(0,0,i?-Math.sign(i)*r:r)),ka.push({k:o,cas:0,meritko:s.scale.clone()}),o}var e_=.3,YI=.3,ZI=18,ka=[];function KI(s){for(let e=ka.length-1;e>=0;e--){let t=ka[e],n=t.k.m;if(t.cas+=s,!n.visible){ka.splice(e,1);continue}if(t.cas<e_)continue;let i=Math.min(1,(t.cas-e_)/YI),r=1-i*i*(3-2*i);if(n.scale.copy(t.meritko).multiplyScalar(Math.max(r,1e-4)),t.k.mer=Math.max(r,1e-4),n.position.copy(t.k.posun).multiplyScalar(t.k.mer).applyQuaternion(t.k.q).negate().add(t.k.stred),t.k.telo&&(t.k.telo.angularVelocity.y=ZI),i>=1){t.k.telo&&Vl(t.k.telo),t.k.telo=null;let o=Kn.indexOf(t.k);o>=0&&Kn.splice(o,1),n.visible=!1,n.parent&&n.parent.remove(n),ka.splice(e,1)}}}var sm="prop_coin_silver",t_="coin_silver",$I=1.25,dh=5,JI=1.25,QI=3,n_=.05,eP=.16,tP=.9;async function m_(s,e,t=1,n=a_,i=o_){let r=Math.max(0,Math.round(t));if(r===0)return[];let o=n&&await bn(n,sm,{volitelny:!0})||await bn(i,sm,{volitelny:!0});if(o||console.warn("[rekvizity] mince z kachny: model "+sm+" nen\xED v "+n+" ani v "+i),!o)return[];let a=r>1?Math.min(eP,tP/(r-1)):0,c=[],l=[o.objekt];for(let h=1;h<r;h++)l.push(o.objekt.clone(!0));for(let h=0;h<r;h++){let d=l[h];Ws(d),d.scale.multiplyScalar(l_[t_]||h_),d.scale.z*=u_[t_]||1,h===0&&(d.updateMatrixWorld(!0),mh.setFromObject(d).getSize(La));let u=Math.max(La.x,La.y),f=h/dh|0,g=Math.min(dh,r-f*dh),y=h-f*dh-(g-1)/2;d.position.set(e.x+y*u*$I,e.y+f*u*JI-Math.abs(y)*QI,e.z+u*.5),d.userData.odlesk=[],d.traverse(m=>{!m.isMesh||m.userData.obrys||!m.material.emissive||(m.material=m.material.clone(),d.userData.odlesk.push(m.material))}),d.userData.zKachny=!0,s.add(d),v_(d,h*n_,um+h*Math.max(0,a-n_)),c.push(d)}return c}var nP=.85,mo=[],rm=-1;function iP(){if(!_p()){rm=-1;return}if(!(rm===nm()&&mo.svet===Fl())){if(mo.svet===Fl())for(let s of mo)Vl(s);mo=[],mo.svet=Fl(),rm=nm();for(let s of Jx()){if(s.terc)continue;let e=s.polomery;mo.push(Mv(s.stred,Math.max(e.x,e.z)*nP,e.y*2))}}}var um=.34,sP=.55,rP=40,oP=.4,aP=.45,i_=6,cm=.6,g_=.9,cP=13,lP=22,vo={cil:null,doletela:null};function y_(s){vo={...vo,...s}}var Na=[],fh=new I,om=new I;function v_(s,e=0,t=um){if(s.userData.sebrana=!0,e>0)s.visible=!1;else{for(let n of s.userData.odlesk||[])n.emissive.setScalar(g_);s.scale.multiplyScalar(1+cm)}Na.push({m:s,t:-e,cekani:t,leti:!1,zx:s.position.x,zy:s.position.y,zz:s.position.z,meritko:e>0?s.scale.clone():s.scale.clone().divideScalar(1+cm)})}function hP(s,e){let t=vo.cil?vo.cil():null;fh.set(t?t.x:0,t?t.y:.8,.5).unproject(je).sub(je.position).normalize();let n=(s-je.position.z)/fh.z;e.set(je.position.x+fh.x*n,je.position.y+fh.y*n,s)}function uP(s){if(Na.length){je.updateMatrixWorld();for(let e=Na.length-1;e>=0;e--){let t=Na[e],n=t.t;if(t.t+=s,t.t<0)continue;if(n<0&&(t.m.visible=!0),!t.leti){let o=Math.exp(-t.t*cP);t.m.rotation.y+=(i_+lP*o)*s,t.m.scale.copy(t.meritko).multiplyScalar(1+cm*o);for(let a of t.m.userData.odlesk||[])a.emissive.setScalar(g_*o);if(t.m.position.y=t.zy+Math.sin(t.t*7)*3+t.t*22,t.t>=(t.cekani??um)){t.leti=!0,t.t=0,t.zy=t.m.position.y;for(let a of t.m.userData.odlesk||[])a.emissive.setScalar(0)}continue}t.m.rotation.y+=i_*s;let i=Math.min(1,t.t/sP),r=i*i*(3-2*i);if(hP(t.zz,om),t.m.position.set(t.zx+(om.x-t.zx)*r,t.zy+(om.y-t.zy)*r-Math.sin(Math.PI*r)*rP,t.zz),t.m.position.lerp(je.position,aP*Math.sin(Math.PI*r)),t.m.scale.copy(t.meritko).multiplyScalar(1-oP*i),i>=1){if(t.m.visible=!1,t.m.userData.zKachny&&t.m.parent){t.m.parent.remove(t.m);for(let o of t.m.userData.odlesk)o.dispose()}Na.splice(e,1),vo.doletela&&vo.doletela()}}}}var Da=new I,yo=new I,ph=1/30;function x_(s,e,t=1){let n=Math.hypot(e.x,e.y,e.z)*ph;for(let i=0;i<Kn.length;i++){let r=Kn[i],o=s.x-r.stred.x,a=s.y-r.stred.y,c=s.z-r.stred.z,l=r.dosah+n;if(o*o+a*a+c*c>l*l)continue;im.copy(r.q).invert(),Qs.set(e.x*ph,e.y*ph,e.z*ph),po.set(o,a,c).sub(Qs).applyQuaternion(im),Qs.applyQuaternion(im);let h=0,d=1,u=-1,f=!1;for(let g=0;g<3;g++){let y=po.getComponent(g),m=Qs.getComponent(g),p=r.pul.getComponent(g);if(Math.abs(m)<1e-9){if(y<-p||y>p){f=!0;break}continue}let x=(-p-y)/m,_=(p-y)/m;if(x>_){let v=x;x=_,_=v}if(x>h&&(h=x,u=g),_<d&&(d=_),h>d){f=!0;break}}if(!f)return po.addScaledVector(Qs,h),u<0?uh.copy(Qs).negate():r.valec&&u!==1?uh.set(po.x,0,po.z):uh.set(0,0,0).setComponent(u,Qs.getComponent(u)>0?-1:1),yo.copy(uh).normalize().applyQuaternion(r.q),Da.copy(po).applyQuaternion(r.q).add(r.stred).addScaledVector(yo,3),!r.telo&&r.cekaNaTeleso&&hm(r),r.telo?wv(r.telo,Da,e,t,yo):r.mince&&(Kn.splice(i,1),v_(r.m)),!0}return!1}var s_=0;async function __(s,e,t=o_,n=[],i=a_){let r=++s_;if(!Array.isArray(e)||!e.length)return null;for(let d of zI(e,n))console.warn("[rekvizity] "+d);let o=await Promise.all(e.map(async d=>i&&await bn(i,"prop_"+d.typ,{volitelny:!0})||bn(t,"prop_"+d.typ,{volitelny:!0})));if(r!==s_)return null;let a=new Kt;a.name="rekvizity",Kn=[],yh=[],vp();for(let d of Lp())xp(d);let c=[],l=[];e.forEach((d,u)=>{if(!o[u])return;let f=o[u].objekt;Ws(f),f.scale.multiplyScalar(d.mer||l_[d.typ]||h_),f.scale.z*=u_[d.typ]||1;let g=DI(f,d.typ);f.position.set(PI(d.misto,c_[d.typ]||1)+go(d.dx||0),Wi(d.patro)+go(d.vyska??AI[d.typ]??0),kt+(d.dz!==void 0?go(d.dz):go(kI-NI)-g)),f.rotation.y=Et.degToRad(II(d)),Qx[d.typ]&&f.traverse(y=>{if(!y.isMesh)return;let m=y.material;if(y.material=m.clone(),y.material.transparent=!0,l.push(y.material),y.userData.obrys){y.material.color=m.color,y.material.userData.tloustka=m.userData.tloustka,y.material.onBeforeCompile=m.onBeforeCompile,y.renderOrder=-2;return}y.material.opacity=Qx[d.typ],y.renderOrder=-3,y.castShadow=!1}),lm.has(d.typ)&&(f.userData.patro=d.patro,f.userData.odlesk=[],f.traverse(y=>{!y.isMesh||y.userData.obrys||!y.material.emissive||(y.material=y.material.clone(),f.userData.odlesk.push(y.material))}),c.push(f)),a.add(f),f_(f,d.typ)});let h=new Map;for(let d of c)h.has(d.userData.patro)||h.set(d.userData.patro,[]),h.get(d.userData.patro).push(d);for(let d of h.values())d.sort((u,f)=>u.position.x-f.position.x),d.forEach((u,f)=>{u.userData.faze=-f*BI*(Math.PI*2/d_)});return a.userData.tocive=c,a.userData.kopie=l,s.add(a),b_.add(a),a}var b_=new Set,r_=0;function M_(s){r_+=s;let e=r_*(Math.PI*2/d_);for(let n of b_)for(let i of n.userData.tocive){if(i.userData.sebrana)continue;let r=e+i.userData.faze;i.rotation.y=r;let o=Math.pow(Math.max(0,Math.cos(2*(r-FI))),OI)*UI;for(let a of i.userData.odlesk)a.emissive.setScalar(o)}for(uP(s),KI(s);yh.length;){let n=yh.shift();if(n.cekaNaTeleso&&Kn.includes(n)){hm(n);break}}if(iP(),!Ev(s))return;let t=Wi(0)-go(jI);for(let n=Kn.length-1;n>=0;n--){let i=Kn[n];i.telo&&(i.q.set(i.telo.quaternion.x,i.telo.quaternion.y,i.telo.quaternion.z,i.telo.quaternion.w),i.stred.set(i.telo.position.x,i.telo.position.y,i.telo.position.z),i.m.quaternion.copy(i.q),i.m.position.copy(i.posun).multiplyScalar(i.mer??1).applyQuaternion(i.q).negate().add(i.stred),i.stred.y<t&&(i.m.visible=!1,Vl(i.telo),Kn.splice(n,1)))}}var dn={objem:140,voda:140,podil:1},dm=!1;function fm(s){dn.objem=Math.max(1,+s||dn.objem),dn.voda=dn.objem,dn.podil=1,dm=!1,qt("voda:zmena",dn)}function S_(s,e){dm||!(e>0)||!(s>0)||(dn.voda=Math.max(0,dn.voda-lo*e*s),dn.podil=dn.voda/dn.objem,qt("voda:zmena",dn),dn.voda<=0&&(dm=!0,qt("voda:dosla",dn)))}var w_=.7,E_=.245,A_=.092,dP=.11*.72,fP=14,T_="#1a1d26",pP="linear-gradient(180deg,#3b4255 0%,#272c3b 38%,#1b1f29 100%)",mP="inset 0 .18em .25em rgba(255,255,255,.14), inset 0 -.28em .35em rgba(0,0,0,.5)",I_=(s,e,t)=>`linear-gradient(180deg,${s} 0%,${e} 48%,${t} 100%)`,ym=I_(er("#2cb3ce",255,.55),er("#2cb3ce",255,.12),er("#2cb3ce",0,.3)),gP=4,R_=.45;function er(s,e,t){let n=parseInt(s.replace("#",""),16),i=r=>Math.round(r+(e-r)*t);return`rgb(${i(n>>16&255)},${i(n>>8&255)},${i(n&255)})`}function P_(s){/^#[0-9a-f]{6}$/i.test(s||"")&&(ym=I_(er(s,255,.55),er(s,255,.12),er(s,0,.3)),tr=er(s,255,.45),$n&&($n.style.background=ym))}var bt=null,$n=null,pm=null,mm=null,tr="#8ae9fb",vh="perspective(10em) rotateX(22deg) rotateY(-8deg)",yP=.34,vP=.3,cn=null,xo=null,Oa=null,Ba=[],Ua=null,C_="",gm=1;function z_(){if(bt)return bt;bt=document.createElement("div"),bt.id="voda",bt.style.cssText=`position:fixed;left:0;top:0;pointer-events:none;z-index:4;visibility:hidden;box-sizing:border-box;background:${pP};border-style:solid;border-color:${T_};overflow:hidden;box-shadow:${mP}`,$n=document.createElement("div"),$n.style.cssText=`position:absolute;left:0;top:0;bottom:0;width:100%;background:${ym};box-shadow:inset 0 -.2em .3em rgba(0,0,0,.25);transition:width .12s linear`,pm=document.createElement("div"),pm.style.cssText="position:absolute;left:.3em;right:.1em;top:.16em;height:22%;border-radius:1em 0 0 1em;background:linear-gradient(90deg,rgba(255,255,255,.55),rgba(255,255,255,.18) 60%,rgba(255,255,255,.1))",$n.appendChild(pm),mm=document.createElement("div"),mm.style.cssText="position:absolute;right:0;top:0;bottom:0;width:.14em;background:linear-gradient(180deg,rgba(255,255,255,.85),rgba(255,255,255,.35) 60%,rgba(255,255,255,.15))",$n.appendChild(mm);for(let s=0;s<gP;s++){let e=document.createElement("div"),t=.1+s*7%5*.035,n=6+s*37%88;e.style.cssText=`position:absolute;left:${n}%;bottom:-${t}em;width:${t}em;height:${t}em;border-radius:50%;background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 .02em rgba(255,255,255,.45);opacity:0`,$n.appendChild(e),e.animate&&e.animate([{transform:"translateY(0)",opacity:0},{opacity:R_,offset:.2},{opacity:R_,offset:.75},{transform:`translateY(calc(-1em - ${t}em))`,opacity:0}],{duration:2600+s*530%1500,delay:s*910%2600,iterations:1/0,easing:"cubic-bezier(.45,.05,.55,.95)"})}bt.appendChild($n),document.body.appendChild(bt),cn=document.createElement("div"),cn.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:5;visibility:hidden;display:flex;flex-direction:column;align-items:center;transform-origin:50% 100%;will-change:transform;font-family:'Lilita One','Arial Rounded MT Bold',Arial,sans-serif;line-height:1;white-space:nowrap",xo=document.createElement("div"),xo.style.cssText=`color:${tr};text-shadow:${Gl(T_,.045,{x:.04,y:.073})};transform-origin:50% 100%;transform:scaleY(0);will-change:transform`,Oa=document.createElement("div"),Oa.style.cssText=`height:.07em;width:100%;margin-top:.04em;border-radius:1em;background:${tr};box-shadow:0 0 .12em rgba(255,255,255,.6);transform:scaleX(0);will-change:transform`,cn.append(xo,Oa),cn.style.transform=vh,document.body.appendChild(cn);for(let s of["resize","orientationchange"])window.addEventListener(s,()=>{Ua=null});return vm(1),bt}function vm(s){if(!$n)return;let e=Math.max(0,Math.min(1,s));(Math.abs(e-gm)>.002||e===0!=(gm===0))&&(gm=e,$n.style.width=(e*100).toFixed(1)+"%")}function k_(s,{doba:e=1.8}={}){if(!cn||!cn.animate)return;for(let u of Ba)u.cancel();Ba=[],xo.textContent=s,xo.style.color=tr,Oa.style.background=tr,cn.style.visibility="visible";let t=yP,n=vP,i=1-n,r={duration:Math.round(e*1e3),fill:"both"},o="#ffffff",a="0 50%",c="100% 50%",l=(u,f,g)=>({offset:u,transform:`scaleX(${f})`,transformOrigin:g});Ba.push(Oa.animate([l(0,0,a),l(.4*t,1,a),l(.7*t,1,a),l(.7*t+1e-4,1,c),l(t,0,c),l(i,0,a),l(i+.35*n,1,a),l(1-.3*n,1,a),l(1-.3*n+1e-4,1,c),l(1,0,c)],{...r,easing:"ease-out"}));let h=(u,f,g)=>({offset:u,transform:`scaleY(${f})`,color:g});Ba.push(xo.animate([h(0,0,o),h(.4*t,0,o),h(.75*t,1.22,o),h(t,1,tr),h(i+.35*n,1,tr),h(i+.55*n,1.14,o),h(1-.3*n,0,o),h(1,0,o)],{...r,easing:"ease-out"}));let d=cn.animate([{transform:vh+" translateY(0)"},{transform:vh+" translateY(-.1em)"},{transform:vh+" translateY(0)"}],{duration:r.duration,easing:"ease-in-out"});Ba.push(d),d.onfinish=()=>{cn.style.visibility="hidden"},bt.animate&&bt.animate([{transform:bt.style.transform+" scale(1)"},{transform:bt.style.transform+" scale(1.07)",offset:.2},{transform:bt.style.transform+" scale(1)"}],{duration:450,easing:"ease-out"})}function N_(s,e=!1){if(!bt)return;(e||!Ua||!Ua.height)&&(Ua=Gi(bt,s));let t=Ua,n=`${Math.round(t.left)}|${Math.round(t.top)}|${Math.round(t.width)}|${Math.round(t.height)}`;if(n===C_)return;if(C_=n,!(t.width>0&&t.height>0)){bt.style.visibility="hidden";return}let i=Math.max(fP,Math.round(t.width*dP)),r=Math.round(t.width*E_);bt.style.transform=`translate3d(${Math.round(t.left+t.width*w_)}px,${Math.round(t.top+t.height*A_-i/2)}px,0)`,bt.style.width=r+"px",bt.style.height=i+"px",bt.style.borderWidth=Math.max(2,Math.round(i*.1))+"px",bt.style.borderRadius=i+"px",bt.style.fontSize=i+"px",$n.style.borderRadius=`${i}px 0 0 ${i}px`,bt.style.visibility="visible",cn&&(cn.style.fontSize=Math.round(i*1.4)+"px",cn.style.left=Math.round(t.left+t.width*(w_+E_/2))+"px",cn.style.top=Math.round(t.top+t.height*A_-i/2-3)+"px",cn.style.translate="-50% -100%")}var L_=1500,bh=new _e(4893149),Va=new _e(16777215),D_=new _e;function xP(){let s=document.createElement("canvas");s.width=s.height=32;let e=s.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(16,16,13,0,Math.PI*2),e.fill();let t=new cs(s);return t.generateMipmaps=!1,t.minFilter=Ct,t.magFilter=Ct,t}var Mh=700,Sh=260,wh=Mh+Sh,ir=new Float32Array(wh*3),Mm=new Float32Array(wh),Sm=new Float32Array(wh),sr=new Float32Array(wh*3),B_=Array.from({length:Mh},()=>({ziva:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,t:0,zivot:0,vel:0,r:1,g:1,b:1})),Qn=new zt;Qn.setAttribute("position",new rt(ir,3));Qn.setAttribute("velikost",new rt(Mm,1));Qn.setAttribute("kryti",new rt(Sm,1));Qn.setAttribute("barva",new rt(sr,3));Qn.setDrawRange(0,0);var U_=new Tn({uniforms:{mapa:{value:xP()},mer:{value:400}},transparent:!0,depthWrite:!1,vertexShader:`
    attribute float velikost;
    attribute float kryti;
    attribute vec3 barva;
    uniform float mer;
    varying float vKryti;
    varying vec3 vBarva;
    void main(){
      vKryti = kryti;
      vBarva = barva;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = velikost * (mer / -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    uniform sampler2D mapa;
    varying float vKryti;
    varying vec3 vBarva;
    void main(){
      vec4 t = texture2D(mapa, gl_PointCoord);
      if(t.a * vKryti < 0.01) discard;
      gl_FragColor = vec4(t.rgb * vBarva, t.a * vKryti);
    }`}),O_=new Gr(Qn,U_);O_.frustumCulled=!1;function F_(s,e,t,n,i,r,o,a){for(let c=0;c<Mh;c++){let l=B_[c];if(l.ziva)continue;l.ziva=!0,l.t=0,l.zivot=a,l.x=s,l.y=e,l.z=t,l.vx=n,l.vy=i,l.vz=r,l.vel=o;let h=D_.copy(bh).lerp(Va,Math.random()*.25);l.r=h.r,l.g=h.g,l.b=h.b;return}}var V_=Array.from({length:Sh},()=>({ziva:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,t:0,zivot:0,r:1,g:1,b:1})),_P=.95,Am=18,xh={r:0,g:0,b:0};function H_(s,e,t,n,i,r){for(let o=0;o<Sh;o++){let a=V_[o];if(!a.ziva){a.ziva=!0,a.t=0,a.zivot=.35+Math.random()*.4,a.x=s,a.y=e,a.z=t,a.vx=n,a.vy=i,a.vz=r,D_.copy(Va).lerp(bh,Math.random()<.5?0:.45+Math.random()*.55).getRGB(xh,Rt),a.r=xh.r,a.g=xh.g,a.b=xh.b;return}}}var G_=new as(new Uint8Array([255,255,255,255]),1,1);G_.needsUpdate=!0;var W_=new Wr(1,12,8),Ha=new _n({color:4893149,map:G_,transparent:!0,opacity:.94}),Tm=new Pt({color:1258820,side:xt,transparent:!0,opacity:1,depthWrite:!1}),ji=new tt(W_,Ha),Rm=new tt(W_,Tm);Rm.scale.setScalar(1.18);Rm.renderOrder=-1;ji.add(Rm);ji.visible=!1;ji.name="kontakt-vody";var wm=new I,Em=new I,bP=new I(0,0,1),_h=0,_o=0,Fa=0,X_=8;function Eh(s,e){_h===0?(wm.copy(s),Em.copy(e)):(wm.lerp(s,.5),Em.lerp(e,.5)),_h++}var MP={mnozstvi:.9,velikost:1,velkych:.6,rozlet:.9,kontakt:.9,kontaktBarva:"#ffffff",kontaktObrysBarva:"#133544"},Wt={...MP};Am=18*Wt.velikost;var xm=0;function q_(s){Wt={...Wt,...s},Am=18*Wt.velikost,j_()}function j_(){let s=Wt.kontaktBarva||bh;Ha.color.set(s),Ha.emissive.set(s).multiplyScalar(.3),Wt.kontaktObrysBarva&&Tm.color.set(Wt.kontaktObrysBarva)}function Y_(s){s.add(O_),s.add(ji)}function Z_(s,e){U_.uniforms.mer.value=s*.5*e}function K_(s){s&&(s.barva&&(bh.set(s.barva),j_()),s.obrysBarva&&!Wt.kontaktObrysBarva&&Tm.color.set(s.obrysBarva),s.polomer&&(X_=s.polomer),typeof s.pruhlednost=="number"&&(Ha.opacity=s.pruhlednost/100))}var Jn=new I,gi=new I,_m=new I,nr=new I;function Ah(s,e,t,n,i=1){let r=Math.max(1,Math.round(n*Wt.mnozstvi));Math.abs(e.y)>.9?_m.set(1,0,0):_m.set(0,1,0),Jn.crossVectors(e,_m).normalize(),gi.crossVectors(e,Jn).normalize();let o=t.length();for(nr.copy(t).addScaledVector(e,-t.dot(e)).normalize(),xm+=Wt.velkych*Math.max(.4,i);xm>=1;){xm-=1;let a=Math.random()*Math.PI*2,c=o*(.04+Math.random()*.05)*Wt.rozlet,l=c*(.25+Math.random()*.3),h=c*(.45+Math.random()*.3),d=c*(.5+Math.random()*.5);H_(s.x+e.x*2,s.y+e.y*2,s.z+e.z*2,Jn.x*Math.cos(a)*l+gi.x*Math.sin(a)*l+e.x*h+nr.x*l,Jn.y*Math.cos(a)*l+gi.y*Math.sin(a)*l+e.y*h+nr.y*l+d,Jn.z*Math.cos(a)*l+gi.z*Math.sin(a)*l+e.z*h+nr.z*l)}for(let a=0;a<r;a++){let c=Math.random()<.65,l=Math.random()*Math.PI*2,h=Math.cos(l),d=Math.sin(l),u=o*(c?.05+Math.random()*.11:.11+Math.random()*.15),f=u*(.1+Math.random()*.22),g=u*(.25+Math.random()*.55),y=u*(.55+Math.random()*.75),m=(Math.random()-.5)*7,p=(Math.random()-.5)*7;F_(s.x+Jn.x*m+gi.x*p,s.y+Jn.y*m+gi.y*p,s.z+Jn.z*m+gi.z*p,Jn.x*h*u+gi.x*d*u+e.x*f+nr.x*g,Jn.y*h*u+gi.y*d*u+e.y*f+nr.y*g+y,Jn.z*h*u+gi.z*d*u+e.z*f+nr.z*g,(c?6+Math.random()*4:11+Math.random()*6)*Wt.velikost,c?.3+Math.random()*.26:.46+Math.random()*.36)}}var SP=18,wP=80,EP=360,AP=.55,bm=14,yi=new I;function $_(s,e=1){let t=Math.round(SP*e*Math.max(.4,Wt.velkych)),n=Math.round(wP*e*Wt.mnozstvi);for(let i=0;i<t+n;i++){let r=i<t,o=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*AP;yi.set(a*Math.cos(o),1,a*Math.sin(o)).normalize();let c=EP*(r?.55+Math.random()*.7:.3+Math.random()*.8)*Wt.rozlet,l=(Math.random()*2-1)*bm,h=(Math.random()*2-1)*bm,d=(Math.random()*2-1)*bm,u=s.x+l+yi.x*4,f=s.y+h+yi.y*4,g=s.z+d+yi.z*4;r?H_(u,f,g,yi.x*c,yi.y*c,yi.z*c):F_(u,f,g,yi.x*c,yi.y*c,yi.z*c,(8+Math.random()*7)*Wt.velikost,.4+Math.random()*.4)}}var TP=2.8;function J_(s){Fa+=s;let e=Math.min(1,_h/2);if(_o+=(e-_o)*Math.min(1,s*(e>_o?22:9)),_h=0,_o>.03&&Wt.kontakt>0){let i=1+.16*Math.sin(Fa*27)+.09*Math.sin(Fa*11.3),r=X_*(1.05+1.25*_o)*Wt.kontakt*i;ji.visible=!0,ji.position.copy(wm),ji.quaternion.setFromUnitVectors(bP,Em),ji.scale.set(r*(1+.09*Math.sin(Fa*13.7)),r*(1+.09*Math.sin(Fa*17)),r*.26),Ha.opacity=.94*Math.min(1,_o*2.2)}else ji.visible=!1;let t=Math.exp(-TP*s),n=0;for(let i=0;i<Mh;i++){let r=B_[i];if(!r.ziva)continue;if(r.t+=s,r.t>r.zivot){r.ziva=!1;continue}r.vy-=L_*s,r.vx*=t,r.vy*=t,r.vz*=t,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s;let o=r.t/r.zivot;ir[n*3]=r.x,ir[n*3+1]=r.y,ir[n*3+2]=r.z,Mm[n]=r.vel*(1-.2*o),Sm[n]=o<.75?1:(1-o)*4;let a=Math.min(1,o*1.5);sr[n*3]=r.r+(Va.r-r.r)*a,sr[n*3+1]=r.g+(Va.g-r.g)*a,sr[n*3+2]=r.b+(Va.b-r.b)*a,n++}for(let i=0;i<Sh;i++){let r=V_[i];if(r.ziva){if(r.t+=s,r.vy-=L_*s,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s,r.t>r.zivot){r.ziva=!1;continue}ir[n*3]=r.x,ir[n*3+1]=r.y,ir[n*3+2]=r.z,Mm[n]=Am,Sm[n]=_P,sr[n*3]=r.r,sr[n*3+1]=r.g,sr[n*3+2]=r.b,n++}}return Qn.setDrawRange(0,n),Qn.attributes.position.needsUpdate=!0,Qn.attributes.velikost.needsUpdate=!0,Qn.attributes.kryti.needsUpdate=!0,Qn.attributes.barva.needsUpdate=!0,n}var ei={x:0,y:260+Vs,z:kt},Th=new I,bo=null,Mo=1,Ln=1,Rh=!1,rr=!1,km=!1,or=null,Xa=null,So=null,Ch=null,Ga=0,Wa=0;function wo(s,e){km||(So=s,Ch=e,(or===null||!(Xi().zpozdeniMireni>0))&&(or=s,Xa=e,Ga=Wa=0,tb()))}function tb(){let s=or,e=Xa,t=s/Mo*2-1,n=e/Ln*2-1;nf(t,n),ei.z=kt;let i=Math.tan(je.fov*Math.PI/360);Th.set(t*i*je.aspect,-n*i,-1).applyQuaternion(je.quaternion);let r=(ei.z-je.position.z)/Th.z;ei.x=je.position.x+Th.x*r,ei.y=je.position.y+Th.y*r}function nb(s){if(km){CP(s);return}if(or===null)return;let e=Xi().zpozdeniMireni;if(e>0){let t=4.74/Math.max(.04,e),n=1-.65*Math.min(1,Math.max(0,Xi().prekmitMireni||0)),i=Math.max(1,Math.ceil(s*t/.15)),r=s/i;for(let o=0;o<i;o++)Ga+=(t*t*(So-or)-2*n*t*Ga)*r,Wa+=(t*t*(Ch-Xa)-2*n*t*Wa)*r,or+=Ga*r,Xa+=Wa*r}else or=So,Xa=Ch,Ga=Wa=0;tb()}var RP=5.2,Q_=0;function CP(s){Q_+=s;let e=.5-.5*Math.cos(Q_*Math.PI*2/RP);ei.z=kt,ei.x=0,ei.y=-120+e*900,nf(0,0)}var ib=.11,IP=1.8,sb=2;function rb(s){sb=s}var Nm="nad-prstem";function ob(s){(s==="2d"||s==="nad-prstem")&&(Nm=s)}function Cm(s){return s.pointerType==="touch"||s.pointerType==="pen"}var Im=0,Pm=0,zm=0;function PP(s,e){if(Im=s,Pm=e,zm=performance.now(),Nm==="2d"){So===null&&wo(Mo/2,Ln*.45);return}wo(s,Math.max(Ln*.04,e-Ln*ib))}function zP(s,e){let t=performance.now(),n=Math.max(4,t-zm)/1e3,i=s-Im,r=e-Pm;Im=s,Pm=e,zm=t;let o=Math.hypot(i,r)/n,a=IP*(1+1.5*Math.pow(Math.min(o/2500,1),1.5)),c=Math.min(Mo-8,Math.max(8,(So??Mo/2)+i*a)),l=(Ch??Ln/2)+r*a;if(Nm==="2d"){wo(c,Math.min(Ln*.78,Math.max(Ln*.12,l)));return}let h=Math.max(Ln*.04,e-Ln*ib),d=Math.min(Mo-8,Math.max(8,(So??s)+i*sb));wo(d,Math.min(h,Math.max(Ln*.04,l)))}function eb(s){let e=bo.getBoundingClientRect();Mo=e.width,Ln=e.height;let t=s.clientX-e.left,n=s.clientY-e.top;return ab=Cm(s)?1-n/Ln*2:null,[t,n]}var ab=null;function cb(){return ab}function lb(s){bo=s;let e=t=>{t.cancelable&&t.preventDefault()};bo.addEventListener("touchstart",e,{passive:!1}),bo.addEventListener("touchmove",e,{passive:!1}),bo.addEventListener("pointermove",t=>{let[n,i]=eb(t);Cm(t)?zP(n,i):wo(n,i)}),bo.addEventListener("pointerdown",t=>{let[n,i]=eb(t);Cm(t)?PP(n,i):wo(n,i),rr=Rh}),addEventListener("pointerup",()=>{rr=!1}),addEventListener("pointercancel",()=>{rr=!1}),addEventListener("keydown",t=>{t.code==="Space"&&Rh&&(rr=!rr)})}function Lm(s){Rh=s,s||(rr=!1)}function Dm(){return Rh&&(rr||km)}var kP=330,To=new I(10,-118,-158),NP=1,LP=.65,DP=40,BP=.22,UP=22,OP=8,hb=22,FP=.12,VP=.1,ub=90,HP=13,GP=.5;function WP(){let s=Xi();return s.zpozdeniPistole===void 0?{tuhost:Math.sqrt(ub),tlumeni:HP/(2*Math.sqrt(ub)),pomer:1}:s.zpozdeniPistole>0?{tuhost:4.74/Math.max(.04,s.zpozdeniPistole),tlumeni:1-.65*Math.min(1,Math.max(0,s.prekmitPistole||0)),pomer:GP/Math.max(.04,s.zpozdeniPistole)}:null}var XP=.004,db=.35,qP=1.6,jP=.9,Bm=1.7,YP=.7,ZP=24,KP=.3,$P=7,JP=.1,QP=.25,ez=8.8,tz=.35,nz=.5,iz=.55,sz=1.6,rz=.42,oz=.28,vb=()=>To.z*tf(),Xt=null,Ro=null,ar=new I,fb=new It,pb=new It,az=new I,Um=new I,Ih=new I,mb=new It,gb=new It,Om=new vn,Yi=new I,Es=new I,qa=new I,Eo=0,Hm=!0,Fm=0,Ao=0,Vm=0,yb=new It,Ph=0;async function xb(s,e){let t=++Ph,[n,i]=await Promise.all([bn(e,"hand",{volitelny:!0}),bn(e,"gun",{volitelny:!0})]);return t!==Ph||!n||!i?!1:(cz(),Ph=t,Ro=i.objekt.getObjectByName("muzzle_anchor"),Ro?(Xt=new Kt,Xt.name="ruka",Xt.scale.setScalar(kP),Xt.position.set(To.x,To.y,vb()),Yi.copy(Xt.position),Es.set(0,0,0),Hm=!0,Xt.add(n.objekt,i.objekt),Fy(Xt),Xt.traverse(r=>{r.isMesh&&(r.castShadow=!1)}),je.add(Xt),je.parent||s.add(je),!0):(console.warn("[ruka] pistole nem\xE1 muzzle_anchor \u2014 voda z\u016Fstane v p\u016Fvodn\xEDm \xFAst\xED"),!1))}function cz(){Ph++,Xt&&je.remove(Xt),Xt=null,Ro=null}function _b(s,e,t=!1){if(!Xt)return;if(Eo+=s,s>0){let u=nh(),f=QP/wx(),g=Et.clamp(Math.pow(f,nz),iz,sz),y=(oz*u+(t?1-u:0))*g,m=ez*Math.pow(f,tz);Vm+=((y-Ao)*m*m-Vm*2*rz*m)*Math.min(s,.5/m),Ao+=Vm*Math.min(s,.5/m)}je.updateMatrixWorld(),Um.set(e.x,e.y,e.z).project(je);let n=Et.clamp(Um.x,-1,1),i=Et.clamp(Um.y,-1,1),r=To.y+i*hb,o=cb();if(o!==null){Ro.getWorldPosition(Ih),je.worldToLocal(Ih);let u=-Ih.z*Math.tan(je.fov*Math.PI/360);r=Math.min(VP,o+FP)*u-(Ih.y-Xt.position.y),r=Math.min(r,To.y+hb)}qa.set(To.x+n*(n<0?UP:OP),r,vb());let a=WP();if(Hm||s<=0||!a)Yi.copy(qa),Es.set(0,0,0),Hm=!1;else{let u=Math.max(1,Math.ceil(s*a.tuhost/.15)),f=s/u,g=a.tuhost*a.tuhost,y=2*a.tlumeni*a.tuhost;for(let m=0;m<u;m++)Es.x+=((qa.x-Yi.x)*g-Es.x*y)*f,Es.y+=((qa.y-Yi.y)*g-Es.y*y)*f,Yi.addScaledVector(Es,f);Yi.z=qa.z}let c=t?YP:0;Xt.position.set(Yi.x+Math.sin(Eo*Bm*.6)*jP+Math.sin(Eo*23)*c*.6,Yi.y+Math.sin(Eo*Bm)*qP+Math.sin(Eo*31+1.3)*c+Ao*$P,Yi.z+Ao*ZP),Xt.updateMatrixWorld(),Ro.getWorldPosition(oi),xx(oi,az.set(e.x,e.y,e.z),ar),je.getWorldQuaternion(pb),ar.applyQuaternion(pb.invert());let l=Math.atan2(-ar.x,-ar.z),h=Math.atan2(ar.y,Math.hypot(ar.x,ar.z));fb.setFromEuler(Om.set(h*LP,l*NP,0,"YXZ")),mb.slerp(fb,s>0&&a?1-Math.exp(-DP*a.pomer*s):1);let d=Et.clamp(-Es.x*XP,-db,db);Fm+=(-n*BP-Fm)*(s>0?1-Math.exp(-8*s):1),gb.setFromEuler(Om.set(0,0,Fm+d+Math.sin(Eo*Bm*.6)*.02,"XYZ")),yb.setFromEuler(Om.set(Ao*KP,0,Ao*JP,"XYZ")),Xt.quaternion.copy(mb).multiply(yb).multiply(gb),Xt.updateMatrixWorld(),Ro.getWorldPosition(oi)}var hz=performance.now(),Qt={start:hz},Co="assets/modely.glb";Xy([Co]).then(()=>{Qt.modelStazen=performance.now()});var uz=["saveState"],wt=new Gc({antialias:!0});wt.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(wt.domElement);var{scena:fn,kachna:dz}=by(Yy());fn.remove(dz);var Sn=new Set,zh=null;zh&&ly(zh);var kh=null;kh!==null&&hy(kh*Pn);var Wm=null;Wm&&ob(Wm);var Nh=null;Nh&&rb(Nh);var Lh=null,mt=Zy()||{};mt.pozadi&&fn.background.set(mt.pozadi);mt.styl&&Gy(mt.styl);typeof mt.obrys=="number"&&zy(mt.obrys);typeof(mt.obrysRuka??mt.obrys)=="number"&&Oy(mt.obrysRuka??mt.obrys);typeof(mt.obrysNabytek??mt.obrys)=="number"&&By(mt.obrysNabytek??mt.obrys);mt.obrysBarva&&ky(mt.obrysBarva);(mt.obrysBarvaRuka||mt.obrysBarva)&&Ny(mt.obrysBarvaRuka||mt.obrysBarva);(mt.obrysBarvaNabytek||mt.obrysBarva)&&Ly(mt.obrysBarvaNabytek||mt.obrysBarva);var fz=Sn.has("stiny")?!1:mt.stiny!==void 0?mt.stiny:xy;cf(wt,fz);Qt.stiny=_y();Kf()&&Wx(Kf());Jf()&&Xx(Jf());$f()&&xv($f());var jm=Sn.has("voda");jm||Sx(fn,jy());var zo=Sn.has("rozstrik");zo||(Y_(fn),Zf()&&q_(Zf()),K_(Xi()));Ex((s,e,t)=>Kx(s,e,t)?(zo||(Ah(lh,za,e,3+(Math.random()*4|0),t),Eh(lh,za)),!0):x_(s,e,t)?(zo||(Ah(Da,yo,e,3+(Math.random()*4|0),t),Eh(Da,yo)),!0):ux(s,e)?(zo||(Ah(Ra,Ca,e,3+(Math.random()*4|0),t),Eh(Ra,Ca)),!0):!1);lb(wt.domElement);Sn.has("miridlo")||(zv(),wt.domElement.style.cursor="none");var cr=Av(0);async function pz(){let s=performance.now(),e=Sn.has("ruka")?null:xb(fn,Co);e&&e.then(()=>{Qt.rukaMs=performance.now()-s});let t=performance.now();if(!Sn.has("police")){let[l,...h]=await Promise.all([bn(Co,lx,{volitelny:!0}),...cr.police.map(u=>bn(Co,cx(u)))]),d=0;hx(fn,cr,{police:()=>{let u=h[d++];return u?Ws(u.objekt):null},stena:l?Ws(l.objekt):null}),Qt.policeMs=performance.now()-t}let n=performance.now(),i=Sn.has("rekvizity")?null:__(fn,cr.rekvizity,void 0,cr.kachny);if(i&&i.then(()=>{Qt.rekvizityMs=performance.now()-n}),await e,await i,Sn.has("kachny"))return;let r=performance.now(),o=await Promise.all(cr.kachny.map(()=>bn(Co))),a=Sn.has("terc")?[]:await Promise.all(cr.kachny.map(()=>bn(Co,ah,{volitelny:!0})));Qt.kachnyModelyMs=performance.now()-r;let c=performance.now();cr.kachny.forEach((l,h)=>{if(!o[h])return;let d=o[h].objekt;if(a[h]&&qx(d,a[h].objekt),Sn.has("obrys")){let u=[];d.traverse(f=>{f.userData.obrys&&u.push(f)});for(let f of u)f.parent.remove(f)}Ws(d),d.scale.multiplyScalar(ix),d.position.set(bs(l.sloupec),Wi(l.patro),kt),d.rotation.y=sx(l.sloupec),fn.add(d),jx(d,l)}),Qt.kachnyUsazeniMs=performance.now()-c}document.getElementById("verze").textContent=`Quack and Splash! ${pl}`;var mz=3/4;function bb(){let s=innerHeight,e=Math.min(innerWidth,Math.floor(s*mz));wt.setPixelRatio(Math.min(devicePixelRatio,2)),uy(e,s),wt.setSize(e,s),Z_(s,wt.getPixelRatio())}bb();var Bh=!1,Za=!1,Io=0;function gz(s){if(Lh&&Io&&s-Io<1e3/Lh-1)return;let e=Io?Math.min((s-Io)/1e3,.05):0;Io=s,sf(e),nb(e),kv(je,ei,wt.domElement),Ov(wt.domElement),jv(e,je,wt.domElement),_b(e,ei,Dm()),jm||(Ax(e,s/1e3,ei,Dm()),S_(e,nh())),N_(wt.domElement),bz(e),$x(e),M_(e),vz(e),zo||J_(e),wt.render(fn,je)}function Uh(){let s=Bh&&!Za;Lm(s&&!Km),s||(Io=0),wt.setAnimationLoop(s?gz:null)}addEventListener("resize",()=>{bb(),Bh&&!Za||wt.render(fn,je)});Yx(p_);Cn("kachna:sestrelena",s=>{s.mince>0&&!Sn.has("rekvizity")&&m_(fn,s,s.mince)});zo||Cn("kachna:prasknuti",s=>$_(s));Sn.has("hud")||Cn("klobouk:odstrelen",s=>qv("Hat shot!",s,wt.domElement));var yz=.25,Ka=0,Ya=0,Dh=0,Ym=0;Cn("kachna:zasazena",s=>{Ka+=s.pridano*tm().bodyZaVodu});Cn("kachna:sestrelena",()=>{Ka+=tm().bodySestreleni});function Zm(){let s=Math.round(Ka);s!==Dh&&(Dh=s,Ym=Ya,$g(s,Ya))}function vz(s){Ya+=s,Math.round(Ka)!==Dh&&Ya-Ym>=yz&&Zm()}var Mb=8,xz=1.5,Km=!1,Po=-1,Gm=[.75,.5,.25],_z=Mb+2,ja=0,Xm=-1;function qm(s,e){k_(s,e)}Cn("voda:zmena",s=>{vm(s.podil);let e=s.voda/lo;for(;ja<Gm.length&&s.podil<=Gm[ja];)e>_z&&qm(`${Math.round(Gm[ja]*100)} %`),ja++;if(s.voda>0&&e<=Mb){let t=Math.ceil(e);t!==Xm&&(Xm=t,qm(String(t),{doba:.95}))}});Cn("voda:dosla",()=>{Km=!0,Lm(!1),Po=xz,qm("0",{doba:1.3})});function bz(s){Po<0||(Po-=s,!(Po>0)&&(Po=-1,Zm(),Yd(Jd())))}Cn("platforma:start",()=>{Bh=!0,Za=!1,Ka=0,Ya=0,Dh=0,Ym=0,Km=!1,Po=-1,ja=0,Xm=-1,fm(Yf(ua().level).nadrz),Kg(),Uh()});Cn("platforma:pause",()=>{Za=!0,Uh()});Cn("platforma:resume",()=>{Za=!1,Uh()});Cn("platforma:submit",()=>{Bh=!1,Uh(),Zm(),Yd(Jd())});function Mz(){let s=performance.now(),e=new Set;fn.traverse(i=>{for(let r of[].concat(i.material||[])){for(let o of["map","gradientMap","alphaMap"])r[o]&&r[o].isTexture&&e.add(r[o]);if(r.uniforms)for(let o of Object.values(r.uniforms))o.value&&o.value.isTexture&&e.add(o.value)}});for(let i of e)wt.initTexture(i);let t=performance.now();wt.compile(fn,je);let n=wt.getContext();for(let i of wt.info.programs)n.getProgramParameter(i.program,n.LINK_STATUS);Qt.textury=t-s,Qt.texturPocet=e.size,Qt.shadery=performance.now()-t,Qt.shaderuPocet=wt.info.programs.length}async function Sz(){Qt.pripravaHotova=performance.now();let s=pz().then(()=>{Qt.model=performance.now()});await Yg(uz),Qt.platforma=performance.now();let e=ty(),t=Yf(e.level);fm(t.nadrz),Sn.has("hud")||(Uv(e.mince),z_(),jm||P_(Xi().barva));let n=0;y_({cil:Fv,doletela:()=>{let i=iy({...ua(),mince:ua().mince+1});Hl(i.mince),Vv(),clearTimeout(n),n=setTimeout(()=>ny(ua()),1e3)}}),document.getElementById("verze").textContent=`${pl} \xB7 L${t.level} ${t.stupen}${t.boss?" boss":""} \xB7 ${t.kachnicek} kachen \xB7 n\xE1dr\u017E ${Math.round(t.nadrz)} \xB7 ${e.mince} minc\xED`+(zh?` \xB7 \xFAhel ${zh}\xB0`:"")+(Wm?" \xB7 m\xED\u0159en\xED 2D":"")+(Nh?` \xB7 do stran \xD7${Nh}`:"")+(Lh?` \xB7 ${Lh} fps`:"")+(kh!==null?` \xB7 odstup +${kh} m`:""),await s,sf(0),Mz(),Qt.predPrvnimSnimkem=performance.now(),wt.render(fn,je),Qt.prvniSnimek=performance.now(),Zg()}Sz();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
