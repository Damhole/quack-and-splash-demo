(()=>{var jM=0,Z0=1,YM=2;var py=0,Al=1,ZM=2,Ci=3,ci=0,xt=1,Gn=2,cs=0,Dr=1,K0=2,$0=3,J0=4,KM=5,Fs=100,$M=101,JM=102,QM=103,e1=104,t1=200,n1=201,i1=202,s1=203,Gu=204,Wu=205,r1=206,o1=207,a1=208,c1=209,l1=210,h1=211,u1=212,d1=213,f1=214,Xu=0,qu=1,ju=2,Fr=3,Yu=4,Zu=5,Ku=6,$u=7,nf=0,p1=1,m1=2,ls=0,g1=1,y1=2,v1=3,x1=4,_1=5,b1=6,M1=7,Q0="attached",S1="detached",my=300,Vr=301,Hr=302,Ju=303,Qu=304,Tl=306,Yn=1e3,Xn=1001,oa=1002,Bt=1003,sf=1004;var Nr=1005;var zt=1006,na=1007;var ai=1008;var Pi=1009,gy=1010,yy=1011,aa=1012,rf=1013,Gs=1014,qn=1015,ya=1016,of=1017,af=1018,Gr=1020,vy=35902,xy=1021,_y=1022,In=1023,by=1024,My=1025,Ur=1026,Wr=1027,va=1028,cf=1029,Sy=1030,lf=1031;var hf=1033,Xc=33776,qc=33777,jc=33778,Yc=33779,ed=35840,td=35841,nd=35842,id=35843,sd=36196,rd=37492,od=37496,ad=37808,cd=37809,ld=37810,hd=37811,ud=37812,dd=37813,fd=37814,pd=37815,md=37816,gd=37817,yd=37818,vd=37819,xd=37820,_d=37821,Zc=36492,bd=36494,Md=36495,Ey=36283,Sd=36284,Ed=36285,wd=36286;var Xr=2300,qr=2301,cu=2302,eg=2400,tg=2401,ng=2402,E1=2500;var wy=0,Rl=1,xa=2,w1=3200,A1=3201;var Cl=0,T1=1,oi="",kt="srgb",Qt="srgb-linear",Il="linear",ft="srgb";var xr=7680;var ig=519,R1=512,C1=513,I1=514,Ay=515,k1=516,z1=517,P1=518,N1=519,Ad=35044,kl=35048;var sg="300 es",ki=2e3,Kc=2001,hs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rg=1234567,ia=Math.PI/180,jr=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function uf(i,e){return(i%e+e)%e}function L1(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function D1(i,e,t){return i!==e?(t-i)/(e-i):0}function sa(i,e,t){return(1-t)*i+t*e}function U1(i,e,t,n){return sa(i,e,1-Math.exp(-t*n))}function B1(i,e=1){return e-Math.abs(uf(i,e*2)-e)}function O1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function F1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function V1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function H1(i,e){return i+Math.random()*(e-i)}function G1(i){return i*(.5-Math.random())}function W1(i){i!==void 0&&(rg=i);let e=rg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X1(i){return i*ia}function q1(i){return i*jr}function j1(i){return(i&i-1)===0&&i!==0}function Y1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Z1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function K1(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rt={DEG2RAD:ia,RAD2DEG:jr,generateUUID:jn,clamp:Gt,euclideanModulo:uf,mapLinear:L1,inverseLerp:D1,lerp:sa,damp:U1,pingpong:B1,smoothstep:O1,smootherstep:F1,randInt:V1,randFloat:H1,randFloatSpread:G1,seededRandom:W1,degToRad:X1,radToDeg:q1,isPowerOfTwo:j1,ceilPowerOfTwo:Y1,floorPowerOfTwo:Z1,setQuaternionFromProperEuler:K1,normalize:ut,denormalize:Wn},Ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],_=s[4],x=s[7],T=s[2],w=s[5],R=s[8];return r[0]=o*y+a*v+c*T,r[3]=o*m+a*_+c*w,r[6]=o*p+a*x+c*R,r[1]=l*y+h*v+d*T,r[4]=l*m+h*_+d*w,r[7]=l*p+h*x+d*R,r[2]=u*y+f*v+g*T,r[5]=u*m+f*_+g*w,r[8]=u*p+f*x+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lu.makeScale(e,t)),this}rotate(e){return this.premultiply(lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lu=new Ge;function Ty(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $1(){let i=ca("canvas");return i.style.display="block",i}var og={};function ea(i){i in og||(og[i]=!0,console.warn(i))}function J1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Q1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eS(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(i.r=Br(i.r),i.g=Br(i.g),i.b=Br(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?Il:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ag=[.64,.33,.3,.6,.15,.06],cg=[.2126,.7152,.0722],lg=[.3127,.329],hg=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ug=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[Qt]:{primaries:ag,whitePoint:lg,transfer:Il,toXYZ:hg,fromXYZ:ug,luminanceCoefficients:cg,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:ag,whitePoint:lg,transfer:ft,toXYZ:hg,fromXYZ:ug,luminanceCoefficients:cg,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});var _r,Td=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=ca("canvas")),_r.width=e.width,_r.height=e.height;let n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ca("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tS=0,$c=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hu(s[o].image)):r.push(hu(s[o]))}else r=hu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nS=0,Xt=class i extends hs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=zt,o=ai,a=In,c=Pi,l=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=jn(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==my)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=my;Xt.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(f+1)/2,T=(p+1)/2,w=(h+u)/4,R=(d+y)/4,P=(g+m)/4;return _>x&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=R/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rd=class extends hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $c(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends Rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jc=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cd=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let T=Math.sqrt(_),w=Math.atan2(T,p*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}let x=a*v;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+y*x,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uu=new I,dg=new Pt,ct=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yc.copy(n.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),vc.subVectors(this.max,qo),br.subVectors(e.a,qo),Mr.subVectors(e.b,qo),Sr.subVectors(e.c,qo),ts.subVectors(Mr,br),ns.subVectors(Sr,Mr),Ps.subVectors(br,Sr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ps.z,Ps.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ps.z,0,-Ps.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ps.y,Ps.x,0];return!du(t,br,Mr,Sr,vc)||(t=[1,0,0,0,1,0,0,0,1],!du(t,br,Mr,Sr,vc))?!1:(xc.crossVectors(ts,ns),t=[xc.x,xc.y,xc.z],du(t,br,Mr,Sr,vc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,yc=new ct,br=new I,Mr=new I,Sr=new I,ts=new I,ns=new I,Ps=new I,qo=new I,vc=new I,xc=new I,Ns=new I;function du(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ns.fromArray(i,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var iS=new ct,jo=new I,fu=new I,Mn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):iS.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);let t=jo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(jo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(fu)),this.expandByPoint(jo.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new I,pu=new I,_c=new I,is=new I,mu=new I,bc=new I,gu=new I,Yr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pu.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),is.copy(this.origin).sub(pu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_c),a=is.dot(this.direction),c=-is.dot(_c),l=is.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pu).addScaledVector(_c,u),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){mu.subVectors(t,e),bc.subVectors(n,e),gu.crossVectors(mu,bc);let o=this.direction.dot(gu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);let c=a*this.direction.dot(bc.crossVectors(is,bc));if(c<0)return null;let l=a*this.direction.dot(mu.cross(is));if(l<0||c+l>o)return null;let h=-a*is.dot(gu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class i{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,g,y,m)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-y*l,t[9]=-a*c,t[2]=y-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,y=l*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+y,t[1]=c*d,t[5]=y*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,rS)}lookAt(e,t,n){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ss.crossVectors(n,_n),ss.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ss.crossVectors(n,_n)),ss.normalize(),Mc.crossVectors(_n,ss),s[0]=ss.x,s[4]=Mc.x,s[8]=_n.x,s[1]=ss.y,s[5]=Mc.y,s[9]=_n.y,s[2]=ss.z,s[6]=Mc.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],_=n[7],x=n[11],T=n[15],w=s[0],R=s[4],P=s[8],E=s[12],b=s[1],k=s[5],G=s[9],z=s[13],D=s[2],U=s[6],L=s[10],Y=s[14],O=s[3],j=s[7],ee=s[11],$=s[15];return r[0]=o*w+a*b+c*D+l*O,r[4]=o*R+a*k+c*U+l*j,r[8]=o*P+a*G+c*L+l*ee,r[12]=o*E+a*z+c*Y+l*$,r[1]=h*w+d*b+u*D+f*O,r[5]=h*R+d*k+u*U+f*j,r[9]=h*P+d*G+u*L+f*ee,r[13]=h*E+d*z+u*Y+f*$,r[2]=g*w+y*b+m*D+p*O,r[6]=g*R+y*k+m*U+p*j,r[10]=g*P+y*G+m*L+p*ee,r[14]=g*E+y*z+m*Y+p*$,r[3]=v*w+_*b+x*D+T*O,r[7]=v*R+_*k+x*U+T*j,r[11]=v*P+_*G+x*L+T*ee,r[15]=v*E+_*z+x*Y+T*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+y*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+m*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*d+t*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],v=d*m*l-y*u*l+y*c*f-a*m*f-d*c*p+a*u*p,_=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*y*l-g*d*l+g*a*f-o*y*f-h*a*p+o*d*p,T=g*d*c-h*y*c-g*a*u+o*y*u+h*a*m-o*d*m,w=t*v+n*_+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=v*R,e[1]=(y*u*r-d*m*r-y*s*f+n*m*f+d*s*p-n*u*p)*R,e[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*R,e[4]=_*R,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*R,e[8]=x*R,e[9]=(g*d*r-h*y*r-g*n*f+t*y*f+h*n*p-t*d*p)*R,e[10]=(o*y*r-g*a*r+g*n*l-t*y*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*R,e[12]=T*R,e[13]=(h*y*s-g*d*s+g*n*u-t*y*u-h*n*m+t*d*m)*R,e[14]=(g*a*s-o*y*s-g*n*c+t*y*c+o*n*m-t*a*m)*R,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*u+t*a*u)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,v=c*l,_=c*h,x=c*d,T=n.x,w=n.y,R=n.z;return s[0]=(1-(y+p))*T,s[1]=(f+x)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(u+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+_)*R,s[9]=(m-v)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Er.set(s[0],s[1],s[2]).length(),o=Er.set(s[4],s[5],s[6]).length(),a=Er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);let l=1/r,h=1/o,d=1/a;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ki){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),f,g;if(a===ki)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Kc)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ki){let c=this.elements,l=1/(t-e),h=1/(n-s),d=1/(o-r),u=(t+e)*l,f=(n+s)*h,g,y;if(a===ki)g=(o+r)*d,y=-2*d;else if(a===Kc)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Er=new I,Vn=new Fe,sS=new I(0,0,0),rS=new I(1,1,1),ss=new I,Mc=new I,_n=new I,fg=new Fe,pg=new Pt,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pg.setFromEuler(this),this.setFromQuaternion(pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Qc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},oS=0,mg=new I,wr=new Pt,wi=new Fe,Sc=new I,Yo=new I,aS=new I,cS=new Pt,gg=new I(1,0,0),yg=new I(0,1,0),vg=new I(0,0,1),xg={type:"added"},lS={type:"removed"},Ar={type:"childadded",child:null},yu={type:"childremoved",child:null},At=class i extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Sn,n=new Pt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ge}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(vg,e)}translateOnAxis(e,t){return mg.copy(e).applyQuaternion(this.quaternion),this.position.add(mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sc.copy(e):Sc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Yo,Sc,this.up):wi.lookAt(Sc,Yo,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(wi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xg),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lS),yu.child=e,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xg),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,aS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new I,Ai=new I,vu=new I,Ti=new I,Tr=new I,Rr=new I,_g=new I,xu=new I,_u=new I,bu=new I,Mu=new nt,Su=new nt,Eu=new nt,Vs=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),Ai.subVectors(n,t),vu.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(Ai),c=Hn.dot(vu),l=Ai.dot(Ai),h=Ai.dot(vu),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mu.setScalar(0),Su.setScalar(0),Eu.setScalar(0),Mu.fromBufferAttribute(e,t),Su.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mu,r.x),o.addScaledVector(Su,r.y),o.addScaledVector(Eu,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),Ai.subVectors(e,t),Hn.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Hn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Tr.subVectors(s,n),Rr.subVectors(r,n),xu.subVectors(e,n);let c=Tr.dot(xu),l=Rr.dot(xu);if(c<=0&&l<=0)return t.copy(n);_u.subVectors(e,s);let h=Tr.dot(_u),d=Rr.dot(_u);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Tr,o);bu.subVectors(e,r);let f=Tr.dot(bu),g=Rr.dot(bu);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Rr,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return _g.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(_g,a);let p=1/(m+y+u);return o=y*p,a=u*p,t.copy(n).addScaledVector(Tr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ry={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function wu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=uf(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wu(o,r,e+1/3),this.g=wu(o,r,e),this.b=wu(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Ry[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return $e.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Gt(Jt.r*255,0,255))*65536+Math.round(Gt(Jt.g*255,0,255))*256+Math.round(Gt(Jt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=kt){$e.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Ec);let n=sa(rs.h,Ec.h,t),s=sa(rs.s,Ec.s,t),r=sa(rs.l,Ec.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new be;be.NAMES=Ry;var hS=0,rn=class extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=jn(),this.name="",this.blending=Dr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gu&&(n.blendSrc=this.blendSrc),this.blendDst!==Wu&&(n.blendDst=this.blendDst),this.blendEquation!==Fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tt=class extends rn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new I,wc=new Ye,at=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ad&&(e.usage=this.usage),e}};var el=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var tl=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},uS=0,Cn=new Fe,Au=new At,Cr=new I,bn=new ct,Zo=new ct,Ht=new I,Mt=class i extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ty(e)?tl:el)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(bn.min,Zo.min),bn.expandByPoint(Ht),Ht.addVectors(bn.max,Zo.max),bn.expandByPoint(Ht)):(bn.expandByPoint(Zo.min),bn.expandByPoint(Zo.max))}bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ht.fromBufferAttribute(a,l),c&&(Cr.fromBufferAttribute(e,l),Ht.add(Cr)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;let l=new I,h=new I,d=new I,u=new Ye,f=new Ye,g=new Ye,y=new I,m=new I;function p(P,E,b){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,b),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(k),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(k),a[P].add(y),a[E].add(y),a[b].add(y),c[P].add(m),c[E].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){let b=v[P],k=b.start,G=b.count;for(let z=k,D=k+G;z<D;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new I,x=new I,T=new I,w=new I;function R(P){T.fromBufferAttribute(s,P),w.copy(T);let E=a[P];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(w,E);let k=x.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,k)}for(let P=0,E=v.length;P<E;++P){let b=v[P],k=b.start,G=b.count;for(let z=k,D=k+G;z<D;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new at(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bg=new Fe,Ls=new Yr,Ac=new Mn,Mg=new I,Tc=new I,Rc=new I,Cc=new I,Tu=new I,Ic=new I,Sg=new I,kc=new I,Je=class extends At{constructor(e=new Mt,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ic.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Tu.fromBufferAttribute(d,e),o?Ic.addScaledVector(Tu,h):Ic.addScaledVector(Tu.sub(t),h))}t.add(Ic)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Ac.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ac,Mg)===null||Ls.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(bg.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(bg),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=_;x<T;x+=3){let w=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);s=zc(this,p,e,n,l,h,d,w,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=zc(this,o,e,n,l,h,d,v,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=_;x<T;x+=3){let w=x,R=x+1,P=x+2;s=zc(this,p,e,n,l,h,d,w,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,_=m+1,x=m+2;s=zc(this,o,e,n,l,h,d,v,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dS(i,e,t,n,s,r,o,a){let c;if(e.side===xt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ci,a),c===null)return null;kc.copy(a),kc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(kc);return l<t.near||l>t.far?null:{distance:l,point:kc.clone(),object:i}}function zc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Tc),i.getVertexPosition(c,Rc),i.getVertexPosition(l,Cc);let h=dS(i,e,t,n,Tc,Rc,Cc,Sg);if(h){let d=new I;Vs.getBarycoord(Sg,Tc,Rc,Cc,d),s&&(h.uv=Vs.getInterpolatedAttribute(s,a,c,l,d,new Ye)),r&&(h.uv1=Vs.getInterpolatedAttribute(r,a,c,l,d,new Ye)),o&&(h.normal=Vs.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};Vs.getNormal(Tc,Rc,Cc,u.normal),h.face=u,h.barycoord=d}return h}var Ws=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function g(y,m,p,v,_,x,T,w,R,P,E){let b=x/R,k=T/P,G=x/2,z=T/2,D=w/2,U=R+1,L=P+1,Y=0,O=0,j=new I;for(let ee=0;ee<L;ee++){let $=ee*k-z;for(let J=0;J<U;J++){let Me=J*b-G;j[y]=Me*v,j[m]=$*_,j[p]=D,l.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[p]=w>0?1:-1,h.push(j.x,j.y,j.z),d.push(J/R),d.push(1-ee/P),Y+=1}}for(let ee=0;ee<P;ee++)for(let $=0;$<R;$++){let J=u+$+U*ee,Me=u+$+U*(ee+1),q=u+($+1)+U*(ee+1),ne=u+($+1)+U*ee;c.push(J,Me,ne),c.push(Me,q,ne),O+=6}a.addGroup(f,O,E),f+=O,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Zr(i[t]);for(let s in n)e[s]=n[s]}return e}function fS(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cy(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var pS={clone:Zr,merge:sn},mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends rn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=gS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=fS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},nl=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new I,Eg=new Ye,wg=new Ye,Ut=class extends nl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Eg,wg),t.subVectors(wg,Eg)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,kr=1,Id=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Ir,kr,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Ir,kr,e,t);r.layers=this.layers,this.add(r);let o=new Ut(Ir,kr,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Ir,kr,e,t);a.layers=this.layers,this.add(a);let c=new Ut(Ir,kr,e,t);c.layers=this.layers,this.add(c);let l=new Ut(Ir,kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},il=class extends Xt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Vr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kd=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new il(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ws(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:cs});r.uniforms.tEquirect.value=t;let o=new Je(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=zt),new Id(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ru=new I,yS=new I,vS=new Ge,Ii=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ru.subVectors(n,t).cross(yS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ru),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vS.getNormalMatrix(e),s=this.coplanarPoint(Ru).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new Mn,Pc=new I,la=class{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],v=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,u-l,m-f,x-p).normalize(),n[1].setComponents(c+r,u+l,m+f,x+p).normalize(),n[2].setComponents(c+o,u+h,m+g,x+v).normalize(),n[3].setComponents(c-o,u-h,m-g,x-v).normalize(),n[4].setComponents(c-a,u-d,m-y,x-_).normalize(),t===ki)n[5].setComponents(c+a,u+d,m+y,x+_).normalize();else if(t===Kc)n[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Pc.x=s.normal.x>0?e.max.x:e.min.x,Pc.y=s.normal.y>0?e.max.y:e.min.y,Pc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Iy(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xS(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sl=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<l;_++){let x=_*d-r;g.push(x,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let _=v+l*p,x=v+l*(p+1),T=v+1+l*(p+1),w=v+1+l*p;f.push(_,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(y,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bS=`#ifdef USE_ALPHAHASH
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
#endif`,MS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AS=`#ifdef USE_AOMAP
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
#endif`,TS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RS=`#ifdef USE_BATCHING
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
#endif`,CS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PS=`#ifdef USE_IRIDESCENCE
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
#endif`,NS=`#ifdef USE_BUMPMAP
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
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GS=`#define PI 3.141592653589793
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
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XS=`vec3 transformedNormal = objectNormal;
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
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
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
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
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
#endif`,vE=`struct PhysicalMaterial {
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
}`,xE=`
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
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
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
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
#endif`,DE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
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
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sw=`float getShadowMask() {
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
}`,rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ow=`#ifdef USE_SKINNING
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
#endif`,aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cw=`#ifdef USE_SKINNING
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
#endif`,lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,pw=`#ifdef USE_TRANSMISSION
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
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
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`#include <common>
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
}`,Aw=`#if DEPTH_PACKING == 3200
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
}`,Tw=`#define DISTANCE
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
}`,Rw=`#define DISTANCE
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`uniform float scale;
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
}`,zw=`uniform vec3 diffuse;
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
}`,Pw=`#include <common>
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Lw=`#define LAMBERT
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
}`,Dw=`#define LAMBERT
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
}`,Uw=`#define MATCAP
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
}`,Bw=`#define MATCAP
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
}`,Ow=`#define NORMAL
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
}`,Fw=`#define NORMAL
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
}`,Vw=`#define PHONG
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
}`,Hw=`#define PHONG
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
}`,Gw=`#define STANDARD
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
}`,Ww=`#define STANDARD
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
}`,Xw=`#define TOON
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
}`,qw=`#define TOON
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
}`,jw=`uniform float size;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,Kw=`uniform vec3 color;
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
}`,$w=`uniform float rotation;
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
}`,Jw=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:_S,alphahash_pars_fragment:bS,alphamap_fragment:MS,alphamap_pars_fragment:SS,alphatest_fragment:ES,alphatest_pars_fragment:wS,aomap_fragment:AS,aomap_pars_fragment:TS,batching_pars_vertex:RS,batching_vertex:CS,begin_vertex:IS,beginnormal_vertex:kS,bsdfs:zS,iridescence_fragment:PS,bumpmap_pars_fragment:NS,clipping_planes_fragment:LS,clipping_planes_pars_fragment:DS,clipping_planes_pars_vertex:US,clipping_planes_vertex:BS,color_fragment:OS,color_pars_fragment:FS,color_pars_vertex:VS,color_vertex:HS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:qS,displacementmap_vertex:jS,emissivemap_fragment:YS,emissivemap_pars_fragment:ZS,colorspace_fragment:KS,colorspace_pars_fragment:$S,envmap_fragment:JS,envmap_common_pars_fragment:QS,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:sE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:cE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:hE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:yE,lights_physical_pars_fragment:vE,lights_fragment_begin:xE,lights_fragment_maps:_E,lights_fragment_end:bE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:wE,map_fragment:AE,map_pars_fragment:TE,map_particle_fragment:RE,map_particle_pars_fragment:CE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:kE,morphinstance_vertex:zE,morphcolor_vertex:PE,morphnormal_vertex:NE,morphtarget_pars_vertex:LE,morphtarget_vertex:DE,normal_fragment_begin:UE,normal_fragment_maps:BE,normal_pars_fragment:OE,normal_pars_vertex:FE,normal_vertex:VE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:qE,opaque_fragment:jE,packing:YE,premultiplied_alpha_fragment:ZE,project_vertex:KE,dithering_fragment:$E,dithering_pars_fragment:JE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:ew,shadowmap_pars_fragment:tw,shadowmap_pars_vertex:nw,shadowmap_vertex:iw,shadowmask_pars_fragment:sw,skinbase_vertex:rw,skinning_pars_vertex:ow,skinning_vertex:aw,skinnormal_vertex:cw,specularmap_fragment:lw,specularmap_pars_fragment:hw,tonemapping_fragment:uw,tonemapping_pars_fragment:dw,transmission_fragment:fw,transmission_pars_fragment:pw,uv_pars_fragment:mw,uv_pars_vertex:gw,uv_vertex:yw,worldpos_vertex:vw,background_vert:xw,background_frag:_w,backgroundCube_vert:bw,backgroundCube_frag:Mw,cube_vert:Sw,cube_frag:Ew,depth_vert:ww,depth_frag:Aw,distanceRGBA_vert:Tw,distanceRGBA_frag:Rw,equirect_vert:Cw,equirect_frag:Iw,linedashed_vert:kw,linedashed_frag:zw,meshbasic_vert:Pw,meshbasic_frag:Nw,meshlambert_vert:Lw,meshlambert_frag:Dw,meshmatcap_vert:Uw,meshmatcap_frag:Bw,meshnormal_vert:Ow,meshnormal_frag:Fw,meshphong_vert:Vw,meshphong_frag:Hw,meshphysical_vert:Gw,meshphysical_frag:Ww,meshtoon_vert:Xw,meshtoon_frag:qw,points_vert:jw,points_frag:Yw,shadow_vert:Zw,shadow_frag:Kw,sprite_vert:$w,sprite_frag:Jw},le={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ri={basic:{uniforms:sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:sn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:sn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:sn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:sn([le.points,le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:sn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:sn([le.common,le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:sn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:sn([le.sprite,le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:sn([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:sn([le.lights,le.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ri.physical={uniforms:sn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Nc={r:0,b:0,g:0},Us=new Sn,Qw=new Fe;function eA(i,e,t,n,s,r,o){let a=new be(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function y(v){let _=!1,x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===Tl)?(h===void 0&&(h=new Je(new Ws(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Zr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Us.copy(_.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(Us)),h.material.toneMapped=$e.getTransfer(x.colorSpace)!==ft,(d!==x||u!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Je(new sl(2,2),new kn({name:"BackgroundMaterial",uniforms:Zr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(Nc,Cy(i)),n.buffers.color.setClear(Nc.r,Nc.g,Nc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:m}}function tA(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,k,G,z,D){let U=!1,L=d(z,G,k);r!==L&&(r=L,l(r.object)),U=f(b,z,G,D),U&&g(b,z,G,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(b,k,G,z),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,k,G){let z=G.wireframe===!0,D=n[b.id];D===void 0&&(D={},n[b.id]=D);let U=D[k.id];U===void 0&&(U={},D[k.id]=U);let L=U[z];return L===void 0&&(L=u(c()),U[z]=L),L}function u(b){let k=[],G=[],z=[];for(let D=0;D<t;D++)k[D]=0,G[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,k,G,z){let D=r.attributes,U=k.attributes,L=0,Y=G.getAttributes();for(let O in Y)if(Y[O].location>=0){let ee=D[O],$=U[O];if($===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),ee===void 0||ee.attribute!==$||$&&ee.data!==$.data)return!0;L++}return r.attributesNum!==L||r.index!==z}function g(b,k,G,z){let D={},U=k.attributes,L=0,Y=G.getAttributes();for(let O in Y)if(Y[O].location>=0){let ee=U[O];ee===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor));let $={};$.attribute=ee,ee&&ee.data&&($.data=ee.data),D[O]=$,L++}r.attributes=D,r.attributesNum=L,r.index=z}function y(){let b=r.newAttributes;for(let k=0,G=b.length;k<G;k++)b[k]=0}function m(b){p(b,0)}function p(b,k){let G=r.newAttributes,z=r.enabledAttributes,D=r.attributeDivisors;G[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),D[b]!==k&&(i.vertexAttribDivisor(b,k),D[b]=k)}function v(){let b=r.newAttributes,k=r.enabledAttributes;for(let G=0,z=k.length;G<z;G++)k[G]!==b[G]&&(i.disableVertexAttribArray(G),k[G]=0)}function _(b,k,G,z,D,U,L){L===!0?i.vertexAttribIPointer(b,k,G,D,U):i.vertexAttribPointer(b,k,G,z,D,U)}function x(b,k,G,z){y();let D=z.attributes,U=G.getAttributes(),L=k.defaultAttributeValues;for(let Y in U){let O=U[Y];if(O.location>=0){let j=D[Y];if(j===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){let ee=j.normalized,$=j.itemSize,J=e.get(j);if(J===void 0)continue;let Me=J.buffer,q=J.type,ne=J.bytesPerElement,ye=q===i.INT||q===i.UNSIGNED_INT||j.gpuType===rf;if(j.isInterleavedBufferAttribute){let re=j.data,Te=re.stride,Pe=j.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<O.locationSize;Ue++)p(O.location+Ue,re.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<O.locationSize;Ue++)m(O.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ue=0;Ue<O.locationSize;Ue++)_(O.location+Ue,$/O.locationSize,q,ee,Te*ne,(Pe+$/O.locationSize*Ue)*ne,ye)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<O.locationSize;re++)p(O.location+re,j.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<O.locationSize;re++)m(O.location+re);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let re=0;re<O.locationSize;re++)_(O.location+re,$/O.locationSize,q,ee,$*ne,$/O.locationSize*re*ne,ye)}}else if(L!==void 0){let ee=L[Y];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(O.location,ee);break;case 3:i.vertexAttrib3fv(O.location,ee);break;case 4:i.vertexAttrib4fv(O.location,ee);break;default:i.vertexAttrib1fv(O.location,ee)}}}}v()}function T(){P();for(let b in n){let k=n[b];for(let G in k){let z=k[G];for(let D in z)h(z[D].object),delete z[D];delete k[G]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let k=n[b.id];for(let G in k){let z=k[G];for(let D in z)h(z[D].object),delete z[D];delete k[G]}delete n[b.id]}function R(b){for(let k in n){let G=n[k];if(G[b.id]===void 0)continue;let z=G[b.id];for(let D in z)h(z[D].object),delete z[D];delete G[b.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function nA(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function iA(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==qn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function sA(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ii,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,_=v*4,x=p.clippingState||null;c.value=x,x=h(g,u,_,f);for(let T=0;T!==_;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==y;++_,x+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function rA(i){let e=new WeakMap;function t(o,a){return a===Ju?o.mapping=Vr:a===Qu&&(o.mapping=Hr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ju||a===Qu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new kd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Kr=class extends nl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lr=4,Ag=[.125,.215,.35,.446,.526,.582],Hs=20,Cu=new Kr,Tg=new be,Iu=null,ku=0,zu=0,Pu=!1,Os=(1+Math.sqrt(5))/2,zr=1/Os,Rg=[new I(-Os,zr,0),new I(Os,zr,0),new I(-zr,0,Os),new I(zr,0,Os),new I(0,Os,-zr),new I(0,Os,zr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],rl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Iu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu,ku,zu),this._renderer.xr.enabled=Pu,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ya,format:In,colorSpace:Qt,depthBuffer:!1},s=Cg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oA(r)),this._blurMaterial=aA(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Cu)}_sceneToCubeUV(e,t,n,s){let a=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Tg),h.toneMapping=ls,h.autoClear=!1;let f=new Tt({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),g=new Je(new Ws,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(Tg),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Lc(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Vr||e.mapping===Hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Lc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Cu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rg[(s-r-1)%Rg.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Je(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hs-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Hs;m>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);let p=[],v=0;for(let R=0;R<Hs;++R){let P=R/y,E=Math.exp(-P*P/2);p.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let x=this._sizeLods[s],T=3*x*(s>_-Lr?s-_+Lr:0),w=4*(this._cubeSize-x);Lc(t,T,w,3*x,2*x),c.setRenderTarget(t),c.render(d,Cu)}};function oA(i){let e=[],t=[],n=[],s=i,r=i-Lr+1+Ag.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Lr?c=Ag[o-i+Lr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,P=w>2?0:-1,E=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(E,y*g*w),_.set(u,m*g*w);let b=[w,w,w,w,w,w];x.set(b,p*g*w)}let T=new Mt;T.setAttribute("position",new at(v,y)),T.setAttribute("uv",new at(_,m)),T.setAttribute("faceIndex",new at(x,p)),e.push(T),s>Lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cg(i,e,t){let n=new Ni(i,e,t);return n.texture.mapping=Tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function aA(i,e,t){let n=new Float32Array(Hs),s=new I(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:df(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Ig(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function kg(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function df(){return`

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
	`}function cA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ju||c===Qu,h=c===Vr||c===Hr;if(l||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new rl(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new rl(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lA(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ea("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hA(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],i.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let _=0,x=v.length;_<x;_+=3){let T=v[_+0],w=v[_+1],R=v[_+2];u.push(T,w,w,R,R,T)}}else if(g!==void 0){let v=g.array;y=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){let T=_+0,w=_+1,R=_+2;u.push(T,w,w,R,R,T)}}else return;let m=new(Ty(u)?tl:el)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function uA(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*y[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function dA(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fA(i,e,t){let n=new WeakMap,s=new nt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let x=a.attributes.position.count*_,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*T*4*d),R=new Jc(w,x,T,d);R.type=qn,R.needsUpdate=!0;let P=_*4;for(let b=0;b<d;b++){let k=m[b],G=p[b],z=v[b],D=x*T*4*b;for(let U=0;U<k.count;U++){let L=U*P;f===!0&&(s.fromBufferAttribute(k,U),w[D+L+0]=s.x,w[D+L+1]=s.y,w[D+L+2]=s.z,w[D+L+3]=0),g===!0&&(s.fromBufferAttribute(G,U),w[D+L+4]=s.x,w[D+L+5]=s.y,w[D+L+6]=s.z,w[D+L+7]=0),y===!0&&(s.fromBufferAttribute(z,U),w[D+L+8]=s.x,w[D+L+9]=s.y,w[D+L+10]=s.z,w[D+L+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Ye(x,T)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function pA(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ol=class extends Xt{constructor(e,t,n,s,r,o,a,c,l,h=Ur){if(h!==Ur&&h!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ur&&(n=Gs),n===void 0&&h===Wr&&(n=Gr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=c!==void 0?c:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ky=new Xt,zg=new ol(1,1),zy=new Jc,Py=new Cd,Ny=new il,Pg=[],Ng=[],Lg=new Float32Array(16),Dg=new Float32Array(9),Ug=new Float32Array(4);function so(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pg[s];if(r===void 0&&(r=new Float32Array(s),Pg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mA(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function yA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function vA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function xA(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Ug.set(n),i.uniformMatrix2fv(this.addr,!1,Ug),Ft(t,n)}}function _A(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Dg.set(n),i.uniformMatrix3fv(this.addr,!1,Dg),Ft(t,n)}}function bA(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Lg.set(n),i.uniformMatrix4fv(this.addr,!1,Lg),Ft(t,n)}}function MA(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function SA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function EA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function wA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function AA(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function TA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function RA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function CA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function IA(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zg.compareFunction=Ay,r=zg):r=ky,t.setTexture2D(e||r,s)}function kA(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Py,s)}function zA(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ny,s)}function PA(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zy,s)}function NA(i){switch(i){case 5126:return mA;case 35664:return gA;case 35665:return yA;case 35666:return vA;case 35674:return xA;case 35675:return _A;case 35676:return bA;case 5124:case 35670:return MA;case 35667:case 35671:return SA;case 35668:case 35672:return EA;case 35669:case 35673:return wA;case 5125:return AA;case 36294:return TA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return PA}}function LA(i,e){i.uniform1fv(this.addr,e)}function DA(i,e){let t=so(e,this.size,2);i.uniform2fv(this.addr,t)}function UA(i,e){let t=so(e,this.size,3);i.uniform3fv(this.addr,t)}function BA(i,e){let t=so(e,this.size,4);i.uniform4fv(this.addr,t)}function OA(i,e){let t=so(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function FA(i,e){let t=so(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function VA(i,e){let t=so(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function HA(i,e){i.uniform1iv(this.addr,e)}function GA(i,e){i.uniform2iv(this.addr,e)}function WA(i,e){i.uniform3iv(this.addr,e)}function XA(i,e){i.uniform4iv(this.addr,e)}function qA(i,e){i.uniform1uiv(this.addr,e)}function jA(i,e){i.uniform2uiv(this.addr,e)}function YA(i,e){i.uniform3uiv(this.addr,e)}function ZA(i,e){i.uniform4uiv(this.addr,e)}function KA(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ky,r[o])}function $A(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Py,r[o])}function JA(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ny,r[o])}function QA(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zy,r[o])}function eT(i){switch(i){case 5126:return LA;case 35664:return DA;case 35665:return UA;case 35666:return BA;case 35674:return OA;case 35675:return FA;case 35676:return VA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return WA;case 35669:case 35673:return XA;case 5125:return qA;case 36294:return jA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return QA}}var zd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=NA(t.type)}},Pd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eT(t.type)}},Nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Nu=/(\w+)(\])?(\[|\.)?/g;function Bg(i,e){i.seq.push(e),i.map[e.id]=e}function tT(i,e,t){let n=i.name,s=n.length;for(Nu.lastIndex=0;;){let r=Nu.exec(n),o=Nu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bg(t,l===void 0?new zd(a,i,e):new Pd(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Nd(a),Bg(t,d)),t=d}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);tT(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Og(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var nT=37297,iT=0;function sT(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Fg=new Ge;function rT(i){$e._getMatrix(Fg,$e.workingColorSpace,i);let e=`mat3( ${Fg.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Il:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sT(i.getShaderSource(e),o)}else return s}function oT(i,e){let t=rT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function aT(i,e){let t;switch(e){case g1:t="Linear";break;case y1:t="Reinhard";break;case v1:t="Cineon";break;case x1:t="ACESFilmic";break;case b1:t="AgX";break;case M1:t="Neutral";break;case _1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dc=new I;function cT(){$e.getLuminanceCoefficients(Dc);let i=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function hT(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uT(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ta(i){return i!==""}function Hg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(i){return i.replace(dT,pT)}var fT=new Map;function pT(i,e){let t=je[e];if(t===void 0){let n=fT.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ld(t)}var mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(i){return i.replace(mT,gT)}function gT(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ZM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xT(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Hr&&(e="ENVMAP_MODE_REFRACTION"),e}function _T(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nf:e="ENVMAP_BLENDING_MULTIPLY";break;case p1:e="ENVMAP_BLENDING_MIX";break;case m1:e="ENVMAP_BLENDING_ADD";break}return e}function bT(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function MT(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=yT(t),l=vT(t),h=xT(t),d=_T(t),u=bT(t),f=lT(t),g=hT(r),y=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(m=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?je.tonemapping_pars_fragment:"",t.toneMapping!==ls?aT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,oT("linearToOutputTexel",t.outputColorSpace),cT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Ld(o),o=Hg(o,t),o=Gg(o,t),a=Ld(a),a=Hg(a,t),a=Gg(a,t),o=Wg(o),a=Wg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,x=v+p+a,T=Og(s,s.VERTEX_SHADER,_),w=Og(s,s.FRAGMENT_SHADER,x);s.attachShader(y,T),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(k){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(T).trim(),D=s.getShaderInfoLog(w).trim(),U=!0,L=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,w);else{let Y=Vg(s,T,"vertex"),O=Vg(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+Y+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||D==="")&&(L=!1);L&&(k.diagnostics={runnable:U,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:D,prefix:p}})}s.deleteShader(T),s.deleteShader(w),P=new Or(s,y),E=uT(s,y)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,nT)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}var ST=0,Dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ud(e),t.set(e,n)),n}},Ud=class{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}};function ET(i,e,t,n,s,r,o){let a=new Qc,c=new Dd,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,b,k,G,z){let D=G.fog,U=z.geometry,L=E.isMeshStandardMaterial?G.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||L),O=Y&&Y.mapping===Tl?Y.image.height:null,j=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let ee=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$=ee!==void 0?ee.length:0,J=0;U.morphAttributes.position!==void 0&&(J=1),U.morphAttributes.normal!==void 0&&(J=2),U.morphAttributes.color!==void 0&&(J=3);let Me,q,ne,ye;if(j){let ht=ri[j];Me=ht.vertexShader,q=ht.fragmentShader}else Me=E.vertexShader,q=E.fragmentShader,c.update(E),ne=c.getVertexShaderID(E),ye=c.getFragmentShaderID(E);let re=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Pe=z.isInstancedMesh===!0,Ue=z.isBatchedMesh===!0,se=!!E.map,ce=!!E.matcap,xe=!!Y,N=!!E.aoMap,pe=!!E.lightMap,ue=!!E.bumpMap,Ce=!!E.normalMap,_e=!!E.displacementMap,De=!!E.emissiveMap,de=!!E.metalnessMap,C=!!E.roughnessMap,S=E.anisotropy>0,H=E.clearcoat>0,te=E.dispersion>0,K=E.iridescence>0,Q=E.sheen>0,Re=E.transmission>0,he=S&&!!E.anisotropyMap,Se=H&&!!E.clearcoatMap,et=H&&!!E.clearcoatNormalMap,oe=H&&!!E.clearcoatRoughnessMap,Ee=K&&!!E.iridescenceMap,Le=K&&!!E.iridescenceThicknessMap,Be=Q&&!!E.sheenColorMap,we=Q&&!!E.sheenRoughnessMap,Qe=!!E.specularMap,qe=!!E.specularColorMap,pt=!!E.specularIntensityMap,B=Re&&!!E.transmissionMap,fe=Re&&!!E.thicknessMap,Z=!!E.gradientMap,ie=!!E.alphaMap,ve=E.alphaTest>0,me=!!E.alphaHash,Ve=!!E.extensions,wt=ls;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(wt=i.toneMapping);let Kt={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:q,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Qt,alphaToCoverage:!!E.alphaToCoverage,map:se,matcap:ce,envMap:xe,envMapMode:xe&&Y.mapping,envMapCubeUVHeight:O,aoMap:N,lightMap:pe,bumpMap:ue,normalMap:Ce,displacementMap:u&&_e,emissiveMap:De,normalMapObjectSpace:Ce&&E.normalMapType===T1,normalMapTangentSpace:Ce&&E.normalMapType===Cl,metalnessMap:de,roughnessMap:C,anisotropy:S,anisotropyMap:he,clearcoat:H,clearcoatMap:Se,clearcoatNormalMap:et,clearcoatRoughnessMap:oe,dispersion:te,iridescence:K,iridescenceMap:Ee,iridescenceThicknessMap:Le,sheen:Q,sheenColorMap:Be,sheenRoughnessMap:we,specularMap:Qe,specularColorMap:qe,specularIntensityMap:pt,transmission:Re,transmissionMap:B,thicknessMap:fe,gradientMap:Z,opaque:E.transparent===!1&&E.blending===Dr&&E.alphaToCoverage===!1,alphaMap:ie,alphaTest:ve,alphaHash:me,combine:E.combine,mapUv:se&&y(E.map.channel),aoMapUv:N&&y(E.aoMap.channel),lightMapUv:pe&&y(E.lightMap.channel),bumpMapUv:ue&&y(E.bumpMap.channel),normalMapUv:Ce&&y(E.normalMap.channel),displacementMapUv:_e&&y(E.displacementMap.channel),emissiveMapUv:De&&y(E.emissiveMap.channel),metalnessMapUv:de&&y(E.metalnessMap.channel),roughnessMapUv:C&&y(E.roughnessMap.channel),anisotropyMapUv:he&&y(E.anisotropyMap.channel),clearcoatMapUv:Se&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:et&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(E.sheenRoughnessMap.channel),specularMapUv:Qe&&y(E.specularMap.channel),specularColorMapUv:qe&&y(E.specularColorMap.channel),specularIntensityMapUv:pt&&y(E.specularIntensityMap.channel),transmissionMapUv:B&&y(E.transmissionMap.channel),thicknessMapUv:fe&&y(E.thicknessMap.channel),alphaMapUv:ie&&y(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ce||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(se||ie),fog:!!D,useFog:E.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:se&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:De&&E.emissiveMap.isVideoTexture===!0&&$e.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gn,flipSided:E.side===xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function p(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let k in E.defines)b.push(k),b.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(v(b,E),_(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function v(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function _(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let b=g[E.type],k;if(b){let G=ri[b];k=pS.clone(G.uniforms)}else k=E.uniforms;return k}function T(E,b){let k;for(let G=0,z=h.length;G<z;G++){let D=h[G];if(D.cacheKey===b){k=D,++k.usedTimes;break}}return k===void 0&&(k=new MT(i,b,E,r),h.push(k)),k}function w(E){if(--E.usedTimes===0){let b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:P}}function wT(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function AT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,g,y,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,u,f,g,y,m){let p=o(d,u,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||AT),n.length>1&&n.sort(u||qg),s.length>1&&s.sort(u||qg)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function TT(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new jg,i.set(n,[o])):s>=r.length?(o=new jg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function RT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new be};break;case"SpotLight":t={position:new I,direction:new I,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function CT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var IT=0;function kT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zT(i){let e=new RT,t=CT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Fe,o=new Fe;function a(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,_=0,x=0,T=0,w=0,R=0;l.sort(kT);for(let E=0,b=l.length;E<b;E++){let k=l[E],G=k.color,z=k.intensity,D=k.distance,U=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=G.r*z,d+=G.g*z,u+=G.b*z;else if(k.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(k.sh.coefficients[L],z);R++}else if(k.isDirectionalLight){let L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let Y=k.shadow,O=t.get(k);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=k.shadow.matrix,v++}n.directional[f]=L,f++}else if(k.isSpotLight){let L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(G).multiplyScalar(z),L.distance=D,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,n.spot[y]=L;let Y=k.shadow;if(k.map&&(n.spotLightMap[T]=k.map,T++,Y.updateMatrices(k),k.castShadow&&w++),n.spotLightMatrix[y]=Y.matrix,k.castShadow){let O=t.get(k);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=U,x++}y++}else if(k.isRectAreaLight){let L=e.get(k);L.color.copy(G).multiplyScalar(z),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=L,m++}else if(k.isPointLight){let L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){let Y=k.shadow,O=t.get(k);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,O.shadowCameraNear=Y.camera.near,O.shadowCameraFar=Y.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=k.shadow.matrix,_++}n.point[g]=L,g++}else if(k.isHemisphereLight){let L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(z),L.groundColor.copy(k.groundColor).multiplyScalar(z),n.hemi[p]=L,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==T||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=T,P.numLightProbes=R,n.version=IT++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Yg(i){let e=new zT(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function PT(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Yg(i),e.set(s,[a])):r>=o.length?(a=new Yg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Bd=class extends rn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=w1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Od=class extends rn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LT=`uniform sampler2D shadow_pass;
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
}`;function DT(i,e,t){let n=new la,s=new Ye,r=new Ye,o=new nt,a=new Bd({depthPacking:A1}),c=new Od,l={},h=t.maxTextureSize,d={[ci]:xt,[xt]:ci,[Gn]:Gn},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:NT,fragmentShader:LT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Je(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let p=this.type;this.render=function(w,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),G=i.state;G.setBlending(cs),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=p!==Ci&&this.type===Ci,D=p===Ci&&this.type!==Ci;for(let U=0,L=w.length;U<L;U++){let Y=w[U],O=Y.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let j=O.getFrameExtents();if(s.multiply(j),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||z===!0||D===!0){let $=this.type!==Ci?{minFilter:Bt,magFilter:Bt}:{};O.map!==null&&O.map.dispose(),O.map=new Ni(s.x,s.y,$),O.map.texture.name=Y.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let ee=O.getViewportCount();for(let $=0;$<ee;$++){let J=O.getViewport($);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),G.viewport(o),O.updateMatrices(Y,$),n=O.getFrustum(),x(R,P,O.camera,Y,this.type)}O.isPointLightShadow!==!0&&this.type===Ci&&v(O,P),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,k)};function v(w,R){let P=e.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ni(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,P,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,P,f,y,null)}function _(w,R,P,E){let b=null,k=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)b=k;else if(b=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=b.uuid,z=R.uuid,D=l[G];D===void 0&&(D={},l[G]=D);let U=D[z];U===void 0&&(U=b.clone(),D[z]=U,R.addEventListener("dispose",T)),b=U}if(b.visible=R.visible,b.wireframe=R.wireframe,E===Ci?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=P}return b}function x(w,R,P,E,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Ci)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let z=e.update(w),D=w.material;if(Array.isArray(D)){let U=z.groups;for(let L=0,Y=U.length;L<Y;L++){let O=U[L],j=D[O.materialIndex];if(j&&j.visible){let ee=_(w,j,E,b);w.onBeforeShadow(i,w,R,P,z,ee,O),i.renderBufferDirect(P,null,z,ee,w,O),w.onAfterShadow(i,w,R,P,z,ee,O)}}}else if(D.visible){let U=_(w,D,E,b);w.onBeforeShadow(i,w,R,P,z,U,null),i.renderBufferDirect(P,null,z,U,w,null),w.onAfterShadow(i,w,R,P,z,U,null)}}let G=w.children;for(let z=0,D=G.length;z<D;z++)x(G[z],R,P,E,b)}function T(w){w.target.removeEventListener("dispose",T);for(let P in l){let E=l[P],b=w.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var UT={[Xu]:qu,[ju]:Ku,[Yu]:$u,[Fr]:Zu,[qu]:Xu,[Ku]:ju,[$u]:Yu,[Zu]:Fr};function BT(i,e){function t(){let B=!1,fe=new nt,Z=null,ie=new nt(0,0,0,0);return{setMask:function(ve){Z!==ve&&!B&&(i.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){B=ve},setClear:function(ve,me,Ve,wt,Kt){Kt===!0&&(ve*=wt,me*=wt,Ve*=wt),fe.set(ve,me,Ve,wt),ie.equals(fe)===!1&&(i.clearColor(ve,me,Ve,wt),ie.copy(fe))},reset:function(){B=!1,Z=null,ie.set(-1,0,0,0)}}}function n(){let B=!1,fe=!1,Z=null,ie=null,ve=null;return{setReversed:function(me){if(fe!==me){let Ve=e.get("EXT_clip_control");fe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let wt=ve;ve=null,this.setClear(wt)}fe=me},getReversed:function(){return fe},setTest:function(me){me?re(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(me){Z!==me&&!B&&(i.depthMask(me),Z=me)},setFunc:function(me){if(fe&&(me=UT[me]),ie!==me){switch(me){case Xu:i.depthFunc(i.NEVER);break;case qu:i.depthFunc(i.ALWAYS);break;case ju:i.depthFunc(i.LESS);break;case Fr:i.depthFunc(i.LEQUAL);break;case Yu:i.depthFunc(i.EQUAL);break;case Zu:i.depthFunc(i.GEQUAL);break;case Ku:i.depthFunc(i.GREATER);break;case $u:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=me}},setLocked:function(me){B=me},setClear:function(me){ve!==me&&(fe&&(me=1-me),i.clearDepth(me),ve=me)},reset:function(){B=!1,Z=null,ie=null,ve=null,fe=!1}}}function s(){let B=!1,fe=null,Z=null,ie=null,ve=null,me=null,Ve=null,wt=null,Kt=null;return{setTest:function(ht){B||(ht?re(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!B&&(i.stencilMask(ht),fe=ht)},setFunc:function(ht,Bn,bi){(Z!==ht||ie!==Bn||ve!==bi)&&(i.stencilFunc(ht,Bn,bi),Z=ht,ie=Bn,ve=bi)},setOp:function(ht,Bn,bi){(me!==ht||Ve!==Bn||wt!==bi)&&(i.stencilOp(ht,Bn,bi),me=ht,Ve=Bn,wt=bi)},setLocked:function(ht){B=ht},setClear:function(ht){Kt!==ht&&(i.clearStencil(ht),Kt=ht)},reset:function(){B=!1,fe=null,Z=null,ie=null,ve=null,me=null,Ve=null,wt=null,Kt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,_=null,x=null,T=null,w=null,R=new be(0,0,0),P=0,E=!1,b=null,k=null,G=null,z=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,Y=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=Y>=2);let j=null,ee={},$=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),Me=new nt().fromArray($),q=new nt().fromArray(J);function ne(B,fe,Z,ie){let ve=new Uint8Array(4),me=i.createTexture();i.bindTexture(B,me),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Z;Ve++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(fe+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return me}let ye={};ye[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(Fr),ue(!1),Ce(Z0),re(i.CULL_FACE),N(cs);function re(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Te(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Pe(B,fe){return d[B]!==fe?(i.bindFramebuffer(B,fe),d[B]=fe,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ue(B,fe){let Z=f,ie=!1;if(B){Z=u.get(fe),Z===void 0&&(Z=[],u.set(fe,Z));let ve=B.textures;if(Z.length!==ve.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Ve=ve.length;me<Ve;me++)Z[me]=i.COLOR_ATTACHMENT0+me;Z.length=ve.length,ie=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Z)}function se(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let ce={[Fs]:i.FUNC_ADD,[$M]:i.FUNC_SUBTRACT,[JM]:i.FUNC_REVERSE_SUBTRACT};ce[QM]=i.MIN,ce[e1]=i.MAX;let xe={[t1]:i.ZERO,[n1]:i.ONE,[i1]:i.SRC_COLOR,[Gu]:i.SRC_ALPHA,[l1]:i.SRC_ALPHA_SATURATE,[a1]:i.DST_COLOR,[r1]:i.DST_ALPHA,[s1]:i.ONE_MINUS_SRC_COLOR,[Wu]:i.ONE_MINUS_SRC_ALPHA,[c1]:i.ONE_MINUS_DST_COLOR,[o1]:i.ONE_MINUS_DST_ALPHA,[h1]:i.CONSTANT_COLOR,[u1]:i.ONE_MINUS_CONSTANT_COLOR,[d1]:i.CONSTANT_ALPHA,[f1]:i.ONE_MINUS_CONSTANT_ALPHA};function N(B,fe,Z,ie,ve,me,Ve,wt,Kt,ht){if(B===cs){y===!0&&(Te(i.BLEND),y=!1);return}if(y===!1&&(re(i.BLEND),y=!0),B!==KM){if(B!==m||ht!==E){if((p!==Fs||x!==Fs)&&(i.blendEquation(i.FUNC_ADD),p=Fs,x=Fs),ht)switch(B){case Dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case K0:i.blendFunc(i.ONE,i.ONE);break;case $0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case J0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case K0:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case J0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,_=null,T=null,w=null,R.set(0,0,0),P=0,m=B,E=ht}return}ve=ve||fe,me=me||Z,Ve=Ve||ie,(fe!==p||ve!==x)&&(i.blendEquationSeparate(ce[fe],ce[ve]),p=fe,x=ve),(Z!==v||ie!==_||me!==T||Ve!==w)&&(i.blendFuncSeparate(xe[Z],xe[ie],xe[me],xe[Ve]),v=Z,_=ie,T=me,w=Ve),(wt.equals(R)===!1||Kt!==P)&&(i.blendColor(wt.r,wt.g,wt.b,Kt),R.copy(wt),P=Kt),m=B,E=!1}function pe(B,fe){B.side===Gn?Te(i.CULL_FACE):re(i.CULL_FACE);let Z=B.side===xt;fe&&(Z=!Z),ue(Z),B.blending===Dr&&B.transparent===!1?N(cs):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let ie=B.stencilWrite;a.setTest(ie),ie&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),De(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function Ce(B){B!==jM?(re(i.CULL_FACE),B!==k&&(B===Z0?i.cullFace(i.BACK):B===YM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),k=B}function _e(B){B!==G&&(L&&i.lineWidth(B),G=B)}function De(B,fe,Z){B?(re(i.POLYGON_OFFSET_FILL),(z!==fe||D!==Z)&&(i.polygonOffset(fe,Z),z=fe,D=Z)):Te(i.POLYGON_OFFSET_FILL)}function de(B){B?re(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+U-1),j!==B&&(i.activeTexture(B),j=B)}function S(B,fe,Z){Z===void 0&&(j===null?Z=i.TEXTURE0+U-1:Z=j);let ie=ee[Z];ie===void 0&&(ie={type:void 0,texture:void 0},ee[Z]=ie),(ie.type!==B||ie.texture!==fe)&&(j!==Z&&(i.activeTexture(Z),j=Z),i.bindTexture(B,fe||ye[B]),ie.type=B,ie.texture=fe)}function H(){let B=ee[j];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(B){Me.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function we(B){q.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),q.copy(B))}function Qe(B,fe){let Z=l.get(fe);Z===void 0&&(Z=new WeakMap,l.set(fe,Z));let ie=Z.get(B);ie===void 0&&(ie=i.getUniformBlockIndex(fe,B.name),Z.set(B,ie))}function qe(B,fe){let ie=l.get(fe).get(B);c.get(fe)!==ie&&(i.uniformBlockBinding(fe,ie,B.__bindingPointIndex),c.set(fe,ie))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ee={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,_=null,x=null,T=null,w=null,R=new be(0,0,0),P=0,E=!1,b=null,k=null,G=null,z=null,D=null,Me.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Te,bindFramebuffer:Pe,drawBuffers:Ue,useProgram:se,setBlending:N,setMaterial:pe,setFlipSided:ue,setCullFace:Ce,setLineWidth:_e,setPolygonOffset:De,setScissorTest:de,activeTexture:C,bindTexture:S,unbindTexture:H,compressedTexImage2D:te,compressedTexImage3D:K,texImage2D:Ee,texImage3D:Le,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:et,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Re,compressedTexSubImage2D:he,compressedTexSubImage3D:Se,scissor:Be,viewport:we,reset:pt}}function Zg(i,e,t,n){let s=OT(n);switch(t){case xy:return i*e;case by:return i*e;case My:return i*e*2;case va:return i*e/s.components*s.byteLength;case cf:return i*e/s.components*s.byteLength;case Sy:return i*e*2/s.components*s.byteLength;case lf:return i*e*2/s.components*s.byteLength;case _y:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case hf:return i*e*4/s.components*s.byteLength;case Xc:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jc:case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(i,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(i,8)*Math.max(e,8)/2;case sd:case rd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zc:case bd:case Md:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ey:case Sd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ed:case wd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OT(i){switch(i){case Pi:case gy:return{byteLength:1,components:1};case aa:case yy:case ya:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case Gs:case rf:case qn:return{byteLength:4,components:1};case vy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function FT(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):ca("canvas")}function y(C,S,H){let te=1,K=de(C);if((K.width>H||K.height>H)&&(te=H/Math.max(K.width,K.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Q=Math.floor(te*K.width),Re=Math.floor(te*K.height);d===void 0&&(d=g(Q,Re));let he=S?g(Q,Re):d;return he.width=Q,he.height=Re,he.getContext("2d").drawImage(C,0,0,Q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Q+"x"+Re+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,S,H,te,K=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=S;if(S===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),S===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){let Re=K?Il:$e.getTransfer(te);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=Re===ft?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(C,S){let H;return C?S===null||S===Gs||S===Gr?H=i.DEPTH24_STENCIL8:S===qn?H=i.DEPTH32F_STENCIL8:S===aa&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gs||S===Gr?H=i.DEPTH_COMPONENT24:S===qn?H=i.DEPTH_COMPONENT32F:S===aa&&(H=i.DEPTH_COMPONENT16),H}function T(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==zt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){let S=C.target;S.removeEventListener("dispose",w),P(S),S.isVideoTexture&&h.delete(S)}function R(C){let S=C.target;S.removeEventListener("dispose",R),b(S)}function P(C){let S=n.get(C);if(S.__webglInit===void 0)return;let H=C.source,te=u.get(H);if(te){let K=te[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(C),Object.keys(te).length===0&&u.delete(H)}n.remove(C)}function E(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let H=C.source,te=u.get(H);delete te[S.__cacheKey],o.memory.textures--}function b(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let K=0;K<S.__webglFramebuffer[te].length;K++)i.deleteFramebuffer(S.__webglFramebuffer[te][K]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=C.textures;for(let te=0,K=H.length;te<K;te++){let Q=n.get(H[te]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(H[te])}n.remove(C)}let k=0;function G(){k=0}function z(){let C=k;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function D(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function U(C,S){let H=n.get(C);if(C.isVideoTexture&&_e(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,C,S);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function L(C,S){let H=n.get(C);if(C.version>0&&H.__version!==C.version){q(H,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function Y(C,S){let H=n.get(C);if(C.version>0&&H.__version!==C.version){q(H,C,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function O(C,S){let H=n.get(C);if(C.version>0&&H.__version!==C.version){ne(H,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let j={[Yn]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},ee={[Bt]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},$={[R1]:i.NEVER,[N1]:i.ALWAYS,[C1]:i.LESS,[Ay]:i.LEQUAL,[I1]:i.EQUAL,[P1]:i.GEQUAL,[k1]:i.GREATER,[z1]:i.NOTEQUAL};function J(C,S){if(S.type===qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zt||S.magFilter===na||S.magFilter===Nr||S.magFilter===ai||S.minFilter===zt||S.minFilter===na||S.minFilter===Nr||S.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,j[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ee[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ee[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==Nr&&S.minFilter!==ai||S.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Me(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));let te=S.source,K=u.get(te);K===void 0&&(K={},u.set(te,K));let Q=D(S);if(Q!==C.__cacheKey){K[Q]===void 0&&(K[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[Q].usedTimes++;let Re=K[C.__cacheKey];Re!==void 0&&(K[C.__cacheKey].usedTimes--,Re.usedTimes===0&&E(S)),C.__cacheKey=Q,C.__webglTexture=K[Q].texture}return H}function q(C,S,H){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);let K=Me(C,S),Q=S.source;t.bindTexture(te,C.__webglTexture,i.TEXTURE0+H);let Re=n.get(Q);if(Q.version!==Re.__version||K===!0){t.activeTexture(i.TEXTURE0+H);let he=$e.getPrimaries($e.workingColorSpace),Se=S.colorSpace===oi?null:$e.getPrimaries(S.colorSpace),et=S.colorSpace===oi||he===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let oe=y(S.image,!1,s.maxTextureSize);oe=De(S,oe);let Ee=r.convert(S.format,S.colorSpace),Le=r.convert(S.type),Be=_(S.internalFormat,Ee,Le,S.colorSpace,S.isVideoTexture);J(te,S);let we,Qe=S.mipmaps,qe=S.isVideoTexture!==!0,pt=Re.__version===void 0||K===!0,B=Q.dataReady,fe=T(S,oe);if(S.isDepthTexture)Be=x(S.format===Wr,S.type),pt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Be,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Be,oe.width,oe.height,0,Ee,Le,null));else if(S.isDataTexture)if(Qe.length>0){qe&&pt&&t.texStorage2D(i.TEXTURE_2D,fe,Be,Qe[0].width,Qe[0].height);for(let Z=0,ie=Qe.length;Z<ie;Z++)we=Qe[Z],qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,we.width,we.height,Ee,Le,we.data):t.texImage2D(i.TEXTURE_2D,Z,Be,we.width,we.height,0,Ee,Le,we.data);S.generateMipmaps=!1}else qe?(pt&&t.texStorage2D(i.TEXTURE_2D,fe,Be,oe.width,oe.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Ee,Le,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Be,oe.width,oe.height,0,Ee,Le,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Be,Qe[0].width,Qe[0].height,oe.depth);for(let Z=0,ie=Qe.length;Z<ie;Z++)if(we=Qe[Z],S.format!==In)if(Ee!==null)if(qe){if(B)if(S.layerUpdates.size>0){let ve=Zg(we.width,we.height,S.format,S.type);for(let me of S.layerUpdates){let Ve=we.data.subarray(me*ve/we.data.BYTES_PER_ELEMENT,(me+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,me,we.width,we.height,1,Ee,Ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,oe.depth,Ee,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Be,we.width,we.height,oe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,oe.depth,Ee,Le,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Be,we.width,we.height,oe.depth,0,Ee,Le,we.data)}else{qe&&pt&&t.texStorage2D(i.TEXTURE_2D,fe,Be,Qe[0].width,Qe[0].height);for(let Z=0,ie=Qe.length;Z<ie;Z++)we=Qe[Z],S.format!==In?Ee!==null?qe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,we.width,we.height,Ee,Le,we.data):t.texImage2D(i.TEXTURE_2D,Z,Be,we.width,we.height,0,Ee,Le,we.data)}else if(S.isDataArrayTexture)if(qe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Be,oe.width,oe.height,oe.depth),B)if(S.layerUpdates.size>0){let Z=Zg(oe.width,oe.height,S.format,S.type);for(let ie of S.layerUpdates){let ve=oe.data.subarray(ie*Z/oe.data.BYTES_PER_ELEMENT,(ie+1)*Z/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,oe.width,oe.height,1,Ee,Le,ve)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Le,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,Ee,Le,oe.data);else if(S.isData3DTexture)qe?(pt&&t.texStorage3D(i.TEXTURE_3D,fe,Be,oe.width,oe.height,oe.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Le,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,Ee,Le,oe.data);else if(S.isFramebufferTexture){if(pt)if(qe)t.texStorage2D(i.TEXTURE_2D,fe,Be,oe.width,oe.height);else{let Z=oe.width,ie=oe.height;for(let ve=0;ve<fe;ve++)t.texImage2D(i.TEXTURE_2D,ve,Be,Z,ie,0,Ee,Le,null),Z>>=1,ie>>=1}}else if(Qe.length>0){if(qe&&pt){let Z=de(Qe[0]);t.texStorage2D(i.TEXTURE_2D,fe,Be,Z.width,Z.height)}for(let Z=0,ie=Qe.length;Z<ie;Z++)we=Qe[Z],qe?B&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ee,Le,we):t.texImage2D(i.TEXTURE_2D,Z,Be,Ee,Le,we);S.generateMipmaps=!1}else if(qe){if(pt){let Z=de(oe);t.texStorage2D(i.TEXTURE_2D,fe,Be,Z.width,Z.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Le,oe)}else t.texImage2D(i.TEXTURE_2D,0,Be,Ee,Le,oe);m(S)&&p(te),Re.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ne(C,S,H){if(S.image.length!==6)return;let te=Me(C,S),K=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let Q=n.get(K);if(K.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+H);let Re=$e.getPrimaries($e.workingColorSpace),he=S.colorSpace===oi?null:$e.getPrimaries(S.colorSpace),Se=S.colorSpace===oi||Re===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let et=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let ie=0;ie<6;ie++)!et&&!oe?Ee[ie]=y(S.image[ie],!0,s.maxCubemapSize):Ee[ie]=oe?S.image[ie].image:S.image[ie],Ee[ie]=De(S,Ee[ie]);let Le=Ee[0],Be=r.convert(S.format,S.colorSpace),we=r.convert(S.type),Qe=_(S.internalFormat,Be,we,S.colorSpace),qe=S.isVideoTexture!==!0,pt=Q.__version===void 0||te===!0,B=K.dataReady,fe=T(S,Le);J(i.TEXTURE_CUBE_MAP,S);let Z;if(et){qe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Qe,Le.width,Le.height);for(let ie=0;ie<6;ie++){Z=Ee[ie].mipmaps;for(let ve=0;ve<Z.length;ve++){let me=Z[ve];S.format!==In?Be!==null?qe?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,me.width,me.height,Be,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,Qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,0,0,me.width,me.height,Be,we,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve,Qe,me.width,me.height,0,Be,we,me.data)}}}else{if(Z=S.mipmaps,qe&&pt){Z.length>0&&fe++;let ie=de(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(oe){qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee[ie].width,Ee[ie].height,Be,we,Ee[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Ee[ie].width,Ee[ie].height,0,Be,we,Ee[ie].data);for(let ve=0;ve<Z.length;ve++){let Ve=Z[ve].image[ie].image;qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,Ve.width,Ve.height,Be,we,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,Qe,Ve.width,Ve.height,0,Be,we,Ve.data)}}else{qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,we,Ee[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Qe,Be,we,Ee[ie]);for(let ve=0;ve<Z.length;ve++){let me=Z[ve];qe?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,0,0,Be,we,me.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ve+1,Qe,Be,we,me.image[ie])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Q.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,H,te,K,Q){let Re=r.convert(H.format,H.colorSpace),he=r.convert(H.type),Se=_(H.internalFormat,Re,he,H.colorSpace),et=n.get(S),oe=n.get(H);if(oe.__renderTarget=S,!et.__hasExternalTextures){let Ee=Math.max(1,S.width>>Q),Le=Math.max(1,S.height>>Q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,Se,Ee,Le,S.depth,0,Re,he,null):t.texImage2D(K,Q,Se,Ee,Le,0,Re,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,K,oe.__webglTexture,0,ue(S)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,K,oe.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(C,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let te=S.depthTexture,K=te&&te.isDepthTexture?te.type:null,Q=x(S.stencilBuffer,K),Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=ue(S);Ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Q,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,C)}else{let te=S.textures;for(let K=0;K<te.length;K++){let Q=te[K],Re=r.convert(Q.format,Q.colorSpace),he=r.convert(Q.type),Se=_(Q.internalFormat,Re,he,Q.colorSpace),et=ue(S);H&&Ce(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Se,S.width,S.height):Ce(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);let K=te.__webglTexture,Q=ue(S);if(S.depthTexture.format===Ur)Ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===Wr)Ce(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pe(C){let S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let te=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",K)};te.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=te}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,C)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=i.createRenderbuffer(),re(S.__webglDepthbuffer[te],C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),re(S.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(C,S,H){let te=n.get(C);S!==void 0&&ye(te.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Pe(C)}function se(C){let S=C.texture,H=n.get(C),te=n.get(S);C.addEventListener("dispose",R);let K=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Re=K.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let Se=0;Se<S.mipmaps.length;Se++)H.__webglFramebuffer[he][Se]=i.createFramebuffer()}else H.__webglFramebuffer[he]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)H.__webglFramebuffer[he]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Re)for(let he=0,Se=K.length;he<Se;he++){let et=n.get(K[he]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ce(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<K.length;he++){let Se=K[he];H.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[he]);let et=r.convert(Se.format,Se.colorSpace),oe=r.convert(Se.type),Ee=_(Se.internalFormat,et,oe,Se.colorSpace,C.isXRRenderTarget===!0),Le=ue(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ee,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,H.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),re(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),J(i.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)ye(H.__webglFramebuffer[he][Se],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else ye(H.__webglFramebuffer[he],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let he=0,Se=K.length;he<Se;he++){let et=K[he],oe=n.get(et);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),J(i.TEXTURE_2D,et),ye(H.__webglFramebuffer,C,et,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),J(he,S),S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)ye(H.__webglFramebuffer[Se],C,S,i.COLOR_ATTACHMENT0,he,Se);else ye(H.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,he,0);m(S)&&p(he),t.unbindTexture()}C.depthBuffer&&Pe(C)}function ce(C){let S=C.textures;for(let H=0,te=S.length;H<te;H++){let K=S[H];if(m(K)){let Q=v(C),Re=n.get(K).__webglTexture;t.bindTexture(Q,Re),p(Q),t.unbindTexture()}}}let xe=[],N=[];function pe(C){if(C.samples>0){if(Ce(C)===!1){let S=C.textures,H=C.width,te=C.height,K=i.COLOR_BUFFER_BIT,Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(C),he=S.length>1;if(he)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]);let et=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,H,te,0,0,H,te,K,i.NEAREST),c===!0&&(xe.length=0,N.length=0,xe.push(i.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xe.push(Q),N.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]);let et=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ue(C){return Math.min(s.maxSamples,C.samples)}function Ce(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function De(C,S){let H=C.colorSpace,te=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Qt&&H!==oi&&($e.getTransfer(H)===ft?(te!==In||K!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=U,this.setTexture2DArray=L,this.setTexture3D=Y,this.setTextureCube=O,this.rebindTextures=Ue,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ce}function VT(i,e){function t(n,s=oi){let r,o=$e.getTransfer(s);if(n===Pi)return i.UNSIGNED_BYTE;if(n===of)return i.UNSIGNED_SHORT_4_4_4_4;if(n===af)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vy)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gy)return i.BYTE;if(n===yy)return i.SHORT;if(n===aa)return i.UNSIGNED_SHORT;if(n===rf)return i.INT;if(n===Gs)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ya)return i.HALF_FLOAT;if(n===xy)return i.ALPHA;if(n===_y)return i.RGB;if(n===In)return i.RGBA;if(n===by)return i.LUMINANCE;if(n===My)return i.LUMINANCE_ALPHA;if(n===Ur)return i.DEPTH_COMPONENT;if(n===Wr)return i.DEPTH_STENCIL;if(n===va)return i.RED;if(n===cf)return i.RED_INTEGER;if(n===Sy)return i.RG;if(n===lf)return i.RG_INTEGER;if(n===hf)return i.RGBA_INTEGER;if(n===Xc||n===qc||n===jc||n===Yc)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ed||n===td||n===nd||n===id)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ed)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===td)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===id)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sd||n===rd||n===od)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sd||n===rd)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===od)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ad||n===cd||n===ld||n===hd||n===ud||n===dd||n===fd||n===pd||n===md||n===gd||n===yd||n===vd||n===xd||n===_d)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ad)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ld)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ud)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===md)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xd)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_d)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===bd||n===Md)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zc)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Md)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ey||n===Sd||n===Ed||n===wd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ed)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Fd=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Wt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},HT={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(HT)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
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

}`,Vd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kn({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new sl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hd=class extends hs{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,y=new Vd,m=t.getContextAttributes(),p=null,v=null,_=[],x=[],T=new Ye,w=null,R=new Ut;R.viewport=new nt;let P=new Ut;P.viewport=new nt;let E=[R,P],b=new Fd,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=_[q];return ne===void 0&&(ne=new ra,_[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=_[q];return ne===void 0&&(ne=new ra,_[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=_[q];return ne===void 0&&(ne=new ra,_[q]=ne),ne.getHandSpace()};function z(q){let ne=x.indexOf(q.inputSource);if(ne===-1)return;let ye=_[ne];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",U);for(let q=0;q<_.length;q++){let ne=x[q];ne!==null&&(x[q]=null,_[q].disconnect(ne))}k=null,G=null,y.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",D),s.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ni(f.framebufferWidth,f.framebufferHeight,{format:In,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ye=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Wr:Ur,ye=m.stencil?Gr:Gs);let Te={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Te),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Ni(u.textureWidth,u.textureHeight,{format:In,type:Pi,depthTexture:new ol(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function U(q){for(let ne=0;ne<q.removed.length;ne++){let ye=q.removed[ne],re=x.indexOf(ye);re>=0&&(x[re]=null,_[re].disconnect(ye))}for(let ne=0;ne<q.added.length;ne++){let ye=q.added[ne],re=x.indexOf(ye);if(re===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=x.length){x.push(ye),re=Pe;break}else if(x[Pe]===null){x[Pe]=ye,re=Pe;break}if(re===-1)break}let Te=_[re];Te&&Te.connect(ye)}}let L=new I,Y=new I;function O(q,ne,ye){L.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);let re=L.distanceTo(Y),Te=ne.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,Ue=Te[14]/(Te[10]-1),se=Te[14]/(Te[10]+1),ce=(Te[9]+1)/Te[5],xe=(Te[9]-1)/Te[5],N=(Te[8]-1)/Te[0],pe=(Pe[8]+1)/Pe[0],ue=Ue*N,Ce=Ue*pe,_e=re/(-N+pe),De=_e*-N;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(_e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let de=Ue+_e,C=se+_e,S=ue-De,H=Ce+(re-De),te=ce*se/C*de,K=xe*se/C*de;q.projectionMatrix.makePerspective(S,H,te,K,de,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,ye=q.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),b.near=P.near=R.near=ne,b.far=P.far=R.far=ye,(k!==b.near||G!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,G=b.far),R.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,b.layers.mask=R.layers.mask|P.layers.mask;let re=q.parent,Te=b.cameras;j(b,re);for(let Pe=0;Pe<Te.length;Pe++)j(Te[Pe],re);Te.length===2?O(b,R,P):b.projectionMatrix.copy(R.projectionMatrix),ee(q,b,re)};function ee(q,ne,ye){ye===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let $=null;function J(q,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let re=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,re=!0);for(let Pe=0;Pe<ye.length;Pe++){let Ue=ye[Pe],se=null;if(f!==null)se=f.getViewport(Ue);else{let xe=d.getViewSubImage(u,Ue);se=xe.viewport,Pe===0&&(e.setRenderTargetTextures(v,xe.colorTexture,u.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(v))}let ce=E[Pe];ce===void 0&&(ce=new Ut,ce.layers.enable(Pe),ce.viewport=new nt,E[Pe]=ce),ce.matrix.fromArray(Ue.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ue.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(se.x,se.y,se.width,se.height),Pe===0&&(b.matrix.copy(ce.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),re===!0&&b.cameras.push(ce)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Pe=d.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&y.init(e,Pe,s.renderState)}}for(let ye=0;ye<_.length;ye++){let re=x[ye],Te=_[ye];re!==null&&Te!==void 0&&Te.update(re,ne,l||o)}$&&$(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Me=new Iy;Me.setAnimationLoop(J),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}},Bs=new Sn,XT=new Fe;function qT(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cy(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,Bs.copy(x),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Bs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jT(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let x=_.program;n.uniformBlockBinding(v,x)}function l(v,_){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));let T=_.program;n.updateUBOMapping(v,T);let w=e.render.frame;r[v.id]!==w&&(u(v),r[v.id]=w)}function h(v){let _=d();v.__bindingPointIndex=_;let x=i.createBuffer(),T=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],x=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,R=x.length;w<R;w++){let P=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,b=P.length;E<b;E++){let k=P[E];if(f(k,w,E,T)===!0){let G=k.__offset,z=Array.isArray(k.value)?k.value:[k.value],D=0;for(let U=0;U<z.length;U++){let L=z[U],Y=y(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,G+D,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,x,T){let w=v.value,R=_+"_"+x;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{let P=T[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){let _=v.uniforms,x=0,T=16;for(let R=0,P=_.length;R<P;R++){let E=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,k=E.length;b<k;b++){let G=E[b],z=Array.isArray(G.value)?G.value:[G.value];for(let D=0,U=z.length;D<U;D++){let L=z[D],Y=y(L),O=x%T,j=O%Y.boundary,ee=O+j;x+=j,ee!==0&&T-ee<Y.storage&&(x+=T-ee),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Y.storage}}}let w=x%T;return w>0&&(x+=T-w),v.__size=x,v.__cache={},this}function y(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var al=class{constructor(e={}){let{canvas:t=$1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=ls,this.toneMappingExposure=1;let x=this,T=!1,w=0,R=0,P=null,E=-1,b=null,k=new nt,G=new nt,z=null,D=new be(0),U=0,L=t.width,Y=t.height,O=1,j=null,ee=null,$=new nt(0,0,L,Y),J=new nt(0,0,L,Y),Me=!1,q=new la,ne=!1,ye=!1,re=new Fe,Te=new Fe,Pe=new I,Ue=new nt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function xe(){return P===null?O:1}let N=n;function pe(A,F){return t.getContext(A,F)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){let F="webgl2";if(N=pe(F,A),N===null)throw pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,Ce,_e,De,de,C,S,H,te,K,Q,Re,he,Se,et,oe,Ee,Le,Be,we,Qe,qe,pt,B;function fe(){ue=new lA(N),ue.init(),qe=new VT(N,ue),Ce=new iA(N,ue,e,qe),_e=new BT(N,ue),Ce.reverseDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),De=new dA(N),de=new wT,C=new FT(N,ue,_e,de,Ce,qe,De),S=new rA(x),H=new cA(x),te=new xS(N),pt=new tA(N,te),K=new hA(N,te,De,pt),Q=new pA(N,K,te,De),Be=new fA(N,Ce,C),oe=new sA(de),Re=new ET(x,S,H,ue,Ce,pt,oe),he=new qT(x,de),Se=new TT,et=new PT(ue),Le=new eA(x,S,H,_e,Q,f,c),Ee=new DT(x,Q,Ce),B=new jT(N,De,Ce,_e),we=new nA(N,ue,De),Qe=new uA(N,ue,De),De.programs=Re.programs,x.capabilities=Ce,x.extensions=ue,x.properties=de,x.renderLists=Se,x.shadowMap=Ee,x.state=_e,x.info=De}fe();let Z=new Hd(x,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(L,Y,!1))},this.getSize=function(A){return A.set(L,Y)},this.setSize=function(A,F,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,Y=F,t.width=Math.floor(A*O),t.height=Math.floor(F*O),W===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(L*O,Y*O).floor()},this.setDrawingBufferSize=function(A,F,W){L=A,Y=F,O=W,t.width=Math.floor(A*W),t.height=Math.floor(F*W),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,F,W,X){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,F,W,X),_e.viewport(k.copy($).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,F,W,X){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,F,W,X),_e.scissor(G.copy(J).multiplyScalar(O).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){_e.setScissorTest(Me=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(A=!0,F=!0,W=!0){let X=0;if(A){let V=!1;if(P!==null){let ae=P.texture.format;V=ae===hf||ae===lf||ae===cf}if(V){let ae=P.texture.type,ge=ae===Pi||ae===Gs||ae===aa||ae===Gr||ae===of||ae===af,Ie=Le.getClearColor(),ke=Le.getClearAlpha(),Oe=Ie.r,He=Ie.g,ze=Ie.b;ge?(g[0]=Oe,g[1]=He,g[2]=ze,g[3]=ke,N.clearBufferuiv(N.COLOR,0,g)):(y[0]=Oe,y[1]=He,y[2]=ze,y[3]=ke,N.clearBufferiv(N.COLOR,0,y))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Se.dispose(),et.dispose(),de.dispose(),S.dispose(),H.dispose(),Q.dispose(),pt.dispose(),B.dispose(),Re.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",V0),Z.removeEventListener("sessionend",H0),zs.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=De.autoReset,F=Ee.enabled,W=Ee.autoUpdate,X=Ee.needsUpdate,V=Ee.type;fe(),De.autoReset=A,Ee.enabled=F,Ee.autoUpdate=W,Ee.needsUpdate=X,Ee.type=V}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ve(A){let F=A.target;F.removeEventListener("dispose",Ve),wt(F)}function wt(A){Kt(A),de.remove(A)}function Kt(A){let F=de.get(A).programs;F!==void 0&&(F.forEach(function(W){Re.releaseProgram(W)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,W,X,V,ae){F===null&&(F=se);let ge=V.isMesh&&V.matrixWorld.determinant()<0,Ie=WM(A,F,W,X,V);_e.setMaterial(X,ge);let ke=W.index,Oe=1;if(X.wireframe===!0){if(ke=K.getWireframeAttribute(W),ke===void 0)return;Oe=2}let He=W.drawRange,ze=W.attributes.position,tt=He.start*Oe,mt=(He.start+He.count)*Oe;ae!==null&&(tt=Math.max(tt,ae.start*Oe),mt=Math.min(mt,(ae.start+ae.count)*Oe)),ke!==null?(tt=Math.max(tt,0),mt=Math.min(mt,ke.count)):ze!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,ze.count));let yt=mt-tt;if(yt<0||yt===1/0)return;pt.setup(V,X,Ie,W,ke);let dn,rt=we;if(ke!==null&&(dn=te.get(ke),rt=Qe,rt.setIndex(dn)),V.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*xe()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(V.isLine){let Ne=X.linewidth;Ne===void 0&&(Ne=1),_e.setLineWidth(Ne*xe()),V.isLineSegments?rt.setMode(N.LINES):V.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else V.isPoints?rt.setMode(N.POINTS):V.isSprite&&rt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)rt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ne=V._multiDrawStarts,Mi=V._multiDrawCounts,ot=V._multiDrawCount,On=ke?te.get(ke).bytesPerElement:1,vr=de.get(X).currentProgram.getUniforms();for(let xn=0;xn<ot;xn++)vr.setValue(N,"_gl_DrawID",xn),rt.render(Ne[xn]/On,Mi[xn])}else if(V.isInstancedMesh)rt.renderInstances(tt,yt,V.count);else if(W.isInstancedBufferGeometry){let Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mi=Math.min(W.instanceCount,Ne);rt.renderInstances(tt,yt,Mi)}else rt.render(tt,yt)};function ht(A,F,W){A.transparent===!0&&A.side===Gn&&A.forceSinglePass===!1?(A.side=xt,A.needsUpdate=!0,gc(A,F,W),A.side=ci,A.needsUpdate=!0,gc(A,F,W),A.side=Gn):gc(A,F,W)}this.compile=function(A,F,W=null){W===null&&(W=A),p=et.get(W),p.init(F),_.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let X=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ae=V.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Ie=ae[ge];ht(Ie,W,V),X.add(Ie)}else ht(ae,W,V),X.add(ae)}),_.pop(),p=null,X},this.compileAsync=function(A,F,W=null){let X=this.compile(A,F,W);return new Promise(V=>{function ae(){if(X.forEach(function(ge){de.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){V(A);return}setTimeout(ae,10)}ue.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Bn=null;function bi(A){Bn&&Bn(A)}function V0(){zs.stop()}function H0(){zs.start()}let zs=new Iy;zs.setAnimationLoop(bi),typeof self<"u"&&zs.setContext(self),this.setAnimationLoop=function(A){Bn=A,Z.setAnimationLoop(A),A===null?zs.stop():zs.start()},Z.addEventListener("sessionstart",V0),Z.addEventListener("sessionend",H0),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,P),p=et.get(A,_.length),p.init(F),_.push(p),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,ne=oe.init(this.clippingPlanes,ye),m=Se.get(A,v.length),m.init(),v.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&au(ae,F,-1/0,x.sortObjects)}au(A,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,ee),ce=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ce&&Le.addToRenderList(m,A),this.info.render.frame++,ne===!0&&oe.beginShadows();let W=p.state.shadowsArray;Ee.render(W,A,F),ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,V=m.transmissive;if(p.setupLights(),F.isArrayCamera){let ae=F.cameras;if(V.length>0)for(let ge=0,Ie=ae.length;ge<Ie;ge++){let ke=ae[ge];W0(X,V,A,ke)}ce&&Le.render(A);for(let ge=0,Ie=ae.length;ge<Ie;ge++){let ke=ae[ge];G0(m,A,ke,ke.viewport)}}else V.length>0&&W0(X,V,A,F),ce&&Le.render(A),G0(m,A,F);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,F),pt.resetDefaultState(),E=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],ne===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function au(A,F,W,X){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){X&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);let ge=Q.update(A),Ie=A.material;Ie.visible&&m.push(A,ge,Ie,W,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){let ge=Q.update(A),Ie=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){let ke=ge.groups;for(let Oe=0,He=ke.length;Oe<He;Oe++){let ze=ke[Oe],tt=Ie[ze.materialIndex];tt&&tt.visible&&m.push(A,ge,tt,W,Ue.z,ze)}}else Ie.visible&&m.push(A,ge,Ie,W,Ue.z,null)}}let ae=A.children;for(let ge=0,Ie=ae.length;ge<Ie;ge++)au(ae[ge],F,W,X)}function G0(A,F,W,X){let V=A.opaque,ae=A.transmissive,ge=A.transparent;p.setupLightsView(W),ne===!0&&oe.setGlobalState(x.clippingPlanes,W),X&&_e.viewport(k.copy(X)),V.length>0&&mc(V,F,W),ae.length>0&&mc(ae,F,W),ge.length>0&&mc(ge,F,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function W0(A,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ni(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ya:Pi,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ae=p.state.transmissionRenderTarget[X.id],ge=X.viewport||k;ae.setSize(ge.z,ge.w);let Ie=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(D),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear(),ce&&Le.render(W);let ke=x.toneMapping;x.toneMapping=ls;let Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ne===!0&&oe.setGlobalState(x.clippingPlanes,X),mc(A,W,X),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),ue.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ze=0,tt=F.length;ze<tt;ze++){let mt=F[ze],yt=mt.object,dn=mt.geometry,rt=mt.material,Ne=mt.group;if(rt.side===Gn&&yt.layers.test(X.layers)){let Mi=rt.side;rt.side=xt,rt.needsUpdate=!0,X0(yt,W,X,dn,rt,Ne),rt.side=Mi,rt.needsUpdate=!0,He=!0}}He===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}x.setRenderTarget(Ie),x.setClearColor(D,U),Oe!==void 0&&(X.viewport=Oe),x.toneMapping=ke}function mc(A,F,W){let X=F.isScene===!0?F.overrideMaterial:null;for(let V=0,ae=A.length;V<ae;V++){let ge=A[V],Ie=ge.object,ke=ge.geometry,Oe=X===null?ge.material:X,He=ge.group;Ie.layers.test(W.layers)&&X0(Ie,F,W,ke,Oe,He)}}function X0(A,F,W,X,V,ae){A.onBeforeRender(x,F,W,X,V,ae),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,F,W,X,A,ae),V.transparent===!0&&V.side===Gn&&V.forceSinglePass===!1?(V.side=xt,V.needsUpdate=!0,x.renderBufferDirect(W,F,X,V,A,ae),V.side=ci,V.needsUpdate=!0,x.renderBufferDirect(W,F,X,V,A,ae),V.side=Gn):x.renderBufferDirect(W,F,X,V,A,ae),A.onAfterRender(x,F,W,X,V,ae)}function gc(A,F,W){F.isScene!==!0&&(F=se);let X=de.get(A),V=p.state.lights,ae=p.state.shadowsArray,ge=V.state.version,Ie=Re.getParameters(A,V.state,ae,F,W),ke=Re.getProgramCacheKey(Ie),Oe=X.programs;X.environment=A.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(A.isMeshStandardMaterial?H:S).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Ve),Oe=new Map,X.programs=Oe);let He=Oe.get(ke);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===ge)return j0(A,Ie),He}else Ie.uniforms=Re.getUniforms(A),A.onBeforeCompile(Ie,x),He=Re.acquireProgram(Ie,ke),Oe.set(ke,He),X.uniforms=Ie.uniforms;let ze=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=oe.uniform),j0(A,Ie),X.needsLights=qM(A),X.lightsStateVersion=ge,X.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=He,X.uniformsList=null,He}function q0(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Or.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function j0(A,F){let W=de.get(A);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function WM(A,F,W,X,V){F.isScene!==!0&&(F=se),C.resetTextureUnits();let ae=F.fog,ge=X.isMeshStandardMaterial?F.environment:null,Ie=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qt,ke=(X.isMeshStandardMaterial?H:S).get(X.envMap||ge),Oe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ze=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color,yt=ls;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(yt=x.toneMapping);let dn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=dn!==void 0?dn.length:0,Ne=de.get(X),Mi=p.state.lights;if(ne===!0&&(ye===!0||A!==b)){let Rn=A===b&&X.id===E;oe.setState(X,A,Rn)}let ot=!1;X.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Mi.state.version||Ne.outputColorSpace!==Ie||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==ke||X.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==oe.numPlanes||Ne.numIntersection!==oe.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==He||Ne.morphTargets!==ze||Ne.morphNormals!==tt||Ne.morphColors!==mt||Ne.toneMapping!==yt||Ne.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Ne.__version=X.version);let On=Ne.currentProgram;ot===!0&&(On=gc(X,F,V));let vr=!1,xn=!1,Wo=!1,vt=On.getUniforms(),si=Ne.uniforms;if(_e.useProgram(On.program)&&(vr=!0,xn=!0,Wo=!0),X.id!==E&&(E=X.id,xn=!0),vr||b!==A){_e.buffers.depth.getReversed()?(re.copy(A.projectionMatrix),Q1(re),eS(re),vt.setValue(N,"projectionMatrix",re)):vt.setValue(N,"projectionMatrix",A.projectionMatrix),vt.setValue(N,"viewMatrix",A.matrixWorldInverse);let Qi=vt.map.cameraPosition;Qi!==void 0&&Qi.setValue(N,Pe.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&vt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,xn=!0,Wo=!0)}if(V.isSkinnedMesh){vt.setOptional(N,V,"bindMatrix"),vt.setOptional(N,V,"bindMatrixInverse");let Rn=V.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),vt.setValue(N,"boneTexture",Rn.boneTexture,C))}V.isBatchedMesh&&(vt.setOptional(N,V,"batchingTexture"),vt.setValue(N,"batchingTexture",V._matricesTexture,C),vt.setOptional(N,V,"batchingIdTexture"),vt.setValue(N,"batchingIdTexture",V._indirectTexture,C),vt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&vt.setValue(N,"batchingColorTexture",V._colorsTexture,C));let Xo=W.morphAttributes;if((Xo.position!==void 0||Xo.normal!==void 0||Xo.color!==void 0)&&Be.update(V,W,On),(xn||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,vt.setValue(N,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(si.envMap.value=ke,si.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(si.envMapIntensity.value=F.environmentIntensity),xn&&(vt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&XM(si,Wo),ae&&X.fog===!0&&he.refreshFogUniforms(si,ae),he.refreshMaterialUniforms(si,X,O,Y,p.state.transmissionRenderTarget[A.id]),Or.upload(N,q0(Ne),si,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Or.upload(N,q0(Ne),si,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(N,"center",V.center),vt.setValue(N,"modelViewMatrix",V.modelViewMatrix),vt.setValue(N,"normalMatrix",V.normalMatrix),vt.setValue(N,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Rn=X.uniformsGroups;for(let Qi=0,es=Rn.length;Qi<es;Qi++){let Y0=Rn[Qi];B.update(Y0,On),B.bind(Y0,On)}}return On}function XM(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function qM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,F,W){de.get(A.texture).__webglTexture=F,de.get(A.depthTexture).__webglTexture=W;let X=de.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){let W=de.get(A);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,W=0){P=A,w=F,R=W;let X=!0,V=null,ae=!1,ge=!1;if(A){let ke=de.get(A);if(ke.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(ke.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(ke.__hasExternalTextures)C.rebindTextures(A,de.get(A.texture).__webglTexture,de.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ze=A.depthTexture;if(ke.__boundDepthTexture!==ze){if(ze!==null&&de.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);let He=de.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[F])?V=He[F][W]:V=He[F],ae=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?V=de.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?V=He[W]:V=He,k.copy(A.viewport),G.copy(A.scissor),z=A.scissorTest}else k.copy($).multiplyScalar(O).floor(),G.copy(J).multiplyScalar(O).floor(),z=Me;if(_e.bindFramebuffer(N.FRAMEBUFFER,V)&&X&&_e.drawBuffers(A,V),_e.viewport(k),_e.scissor(G),_e.setScissorTest(z),ae){let ke=de.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ke.__webglTexture,W)}else if(ge){let ke=de.get(A.texture),Oe=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,Oe)}E=-1},this.readRenderTargetPixels=function(A,F,W,X,V,ae,ge){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(Ie=Ie[ge]),Ie){_e.bindFramebuffer(N.FRAMEBUFFER,Ie);try{let ke=A.texture,Oe=ke.format,He=ke.type;if(!Ce.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-X&&W>=0&&W<=A.height-V&&N.readPixels(F,W,X,V,qe.convert(Oe),qe.convert(He),ae)}finally{let ke=P!==null?de.get(P).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,F,W,X,V,ae,ge){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(Ie=Ie[ge]),Ie){let ke=A.texture,Oe=ke.format,He=ke.type;if(!Ce.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-X&&W>=0&&W<=A.height-V){_e.bindFramebuffer(N.FRAMEBUFFER,Ie);let ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(F,W,X,V,qe.convert(Oe),qe.convert(He),0);let tt=P!==null?de.get(P).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,tt);let mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await J1(N,mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(ze),N.deleteSync(mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,W=0){A.isTexture!==!0&&(ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);let X=Math.pow(2,-W),V=Math.floor(A.image.width*X),ae=Math.floor(A.image.height*X),ge=F!==null?F.x:0,Ie=F!==null?F.y:0;C.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,ge,Ie,V,ae),_e.unbindTexture()},this.copyTextureToTexture=function(A,F,W=null,X=null,V=0){A.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],F=arguments[2],V=arguments[3]||0,W=null);let ae,ge,Ie,ke,Oe,He,ze,tt,mt,yt=A.isCompressedTexture?A.mipmaps[V]:A.image;W!==null?(ae=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ie=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,Oe=W.min.y,He=W.isBox3?W.min.z:0):(ae=yt.width,ge=yt.height,Ie=yt.depth||1,ke=0,Oe=0,He=0),X!==null?(ze=X.x,tt=X.y,mt=X.z):(ze=0,tt=0,mt=0);let dn=qe.convert(F.format),rt=qe.convert(F.type),Ne;F.isData3DTexture?(C.setTexture3D(F,0),Ne=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Ne=N.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let Mi=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),On=N.getParameter(N.UNPACK_SKIP_PIXELS),vr=N.getParameter(N.UNPACK_SKIP_ROWS),xn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,yt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He);let Wo=A.isDataArrayTexture||A.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let si=de.get(A),Xo=de.get(F),Rn=de.get(si.__renderTarget),Qi=de.get(Xo.__renderTarget);_e.bindFramebuffer(N.READ_FRAMEBUFFER,Rn.__webglFramebuffer),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let es=0;es<Ie;es++)Wo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.get(A).__webglTexture,V,He+es),A.isDepthTexture?(vt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,de.get(F).__webglTexture,V,mt+es),N.blitFramebuffer(ke,Oe,ae,ge,ze,tt,ae,ge,N.DEPTH_BUFFER_BIT,N.NEAREST)):vt?N.copyTexSubImage3D(Ne,V,ze,tt,mt+es,ke,Oe,ae,ge):N.copyTexSubImage2D(Ne,V,ze,tt,mt+es,ke,Oe,ae,ge);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else vt?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ne,V,ze,tt,mt,ae,ge,Ie,dn,rt,yt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,V,ze,tt,mt,ae,ge,Ie,dn,yt.data):N.texSubImage3D(Ne,V,ze,tt,mt,ae,ge,Ie,dn,rt,yt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,ze,tt,ae,ge,dn,rt,yt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,ze,tt,yt.width,yt.height,dn,yt.data):N.texSubImage2D(N.TEXTURE_2D,V,ze,tt,ae,ge,dn,rt,yt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,On),N.pixelStorei(N.UNPACK_SKIP_ROWS,vr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,xn),V===0&&F.generateMipmaps&&N.generateMipmap(Ne),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,F,W=null,X=null,V=0){return A.isTexture!==!0&&(ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],F=arguments[3],V=arguments[4]||0),ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,W,X,V)},this.initRenderTarget=function(A){de.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,_e.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var cl=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ha=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ad,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new I,ua=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Kg=new I,$g=new nt,Jg=new nt,YT=new I,Qg=new Fe,Uc=new I,Lu=new Mn,ey=new Fe,Du=new Yr,ll=class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Q0,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ct),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uc),this.boundingBox.expandByPoint(Uc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uc),this.boundingSphere.expandByPoint(Uc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lu.copy(this.boundingSphere),Lu.applyMatrix4(s),e.ray.intersectsSphere(Lu)!==!1&&(ey.copy(s).invert(),Du.copy(e.ray).applyMatrix4(ey),!(this.boundingBox!==null&&Du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Q0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===S1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$g.fromBufferAttribute(s.attributes.skinIndex,e),Jg.fromBufferAttribute(s.attributes.skinWeight,e),Kg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Jg.getComponent(r);if(o!==0){let a=$g.getComponent(r);Qg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(YT.copy(Kg).applyMatrix4(Qg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},da=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},us=class extends Xt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Bt,h=Bt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ty=new Fe,ZT=new Fe,hl=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ZT;ty.multiplyMatrices(a,t[r]),ty.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new us(t,e,e,In,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new da),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Xs=class extends at{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pr=new Fe,ny=new Fe,Bc=[],iy=new ct,KT=new Fe,Ko=new Je,$o=new Mn,ul=class extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,KT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),iy.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(iy)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),$o.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union($o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(n),e.ray.intersectsSphere($o)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pr),ny.multiplyMatrices(n,Pr),Ko.matrixWorld=ny,Ko.raycast(e,Bc);for(let o=0,a=Bc.length;o<a;o++){let c=Bc[o];c.instanceId=r,c.object=this,t.push(c)}Bc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new us(new Float32Array(s*this.count),s,this.count,va,qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var fa=class extends rn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dl=new I,fl=new I,sy=new Fe,Jo=new Yr,Oc=new Mn,Uu=new I,ry=new I,$r=class extends At{constructor(e=new Mt,t=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)dl.fromBufferAttribute(t,s-1),fl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=dl.distanceTo(fl);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Oc.radius+=r,e.ray.intersectsSphere(Oc)===!1)return;sy.copy(s).invert(),Jo.copy(e.ray).applyMatrix4(sy);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),v=h.getX(y+1),_=Fc(this,e,Jo,c,p,v);_&&t.push(_)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Fc(this,e,Jo,c,y,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=Fc(this,e,Jo,c,y,y+1);p&&t.push(p)}if(this.isLineLoop){let y=Fc(this,e,Jo,c,g-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fc(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(dl.fromBufferAttribute(o,s),fl.fromBufferAttribute(o,r),t.distanceSqToSegment(dl,fl,Uu,ry)>n)return;Uu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Uu);if(!(c<e.near||c>e.far))return{distance:c,point:ry.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var oy=new I,ay=new I,pl=class extends $r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)oy.fromBufferAttribute(t,s),ay.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oy.distanceTo(ay);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ml=class extends $r{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},pa=class extends rn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cy=new Fe,Gd=new Yr,Vc=new Mn,Hc=new I,Jr=class extends At{constructor(e=new Mt,t=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(s),Vc.radius+=r,e.ray.intersectsSphere(Vc)===!1)return;cy.copy(s).invert(),Gd.copy(e.ray).applyMatrix4(cy);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=l.getX(g);Hc.fromBufferAttribute(d,m),ly(Hc,m,c,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)Hc.fromBufferAttribute(d,g),ly(Hc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ly(i,e,t,n,s,r,o){let a=Gd.distanceSqToPoint(i);if(a<t){let c=new I;Gd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ds=class extends Xt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wd=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ye:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],o=[],a=new I,c=new Fe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function ff(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Gc=new I,Bu=new ff,Ou=new ff,Fu=new ff,gl=class extends Wd{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Gc.subVectors(s[0],s[1]).add(s[0]),l=Gc);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Gc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bu.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,y,m),Ou.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,y,m),Fu.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Bu.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ou.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Fu.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Bu.calc(c),Ou.calc(c),Fu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var yl=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new Ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var vl=class i extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=e,u=(t-e)/s,f=new I,g=new Ye;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let v=p+m,_=v,x=v+n+1,T=v+n+2,w=v+1;a.push(_,x,w),a.push(x,T,w)}}this.setIndex(a),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qr=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new I,u=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],_=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let w=T/t;d.x=-e*Math.cos(s+w*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(w+x,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=h[p][v+1],x=h[p][v],T=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(_,x,w),(p!==n-1||c<Math.PI)&&f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(y,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var eo=class extends rn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends eo{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var to=class extends rn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wn=class extends rn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Wc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $T(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function JT(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hy(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Ly(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var fs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xd=class extends fs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eg,endingEnd:eg}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tg:r=e,a=2*t-n;break;case ng:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tg:o=e,c=2*n-t;break;case ng:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,v=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+v*o[l+T]+_*o[c+T]+x*o[d+T];return r}},qd=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},jd=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wc(t,this.TimeBufferType),this.values=Wc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wc(e.times,Array),values:Wc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case cu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&$T(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cu,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=qr;var ps=class extends zn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Xr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends zn{};xl.prototype.ValueTypeName="color";var Li=class extends zn{};Li.prototype.ValueTypeName="number";var Yd=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Pt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Di=class extends zn{InterpolantFactoryMethodLinear(e){return new Yd(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends zn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Xr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends zn{};Ui.prototype.ValueTypeName="vector";var _l=class{constructor(e="",t=-1,n=[],s=E1){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(eR(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=JT(c);c=hy(c,1,h),l=hy(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Li(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,g,y){if(f.length!==0){let m=[],p=[];Ly(f,m,p,g),m.length!==0&&y.push(new d(u,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let y=0;y<u[g].morphTargets.length;y++)f[u[g].morphTargets[y]]=-1;for(let y in f){let m=[],p=[];for(let v=0;v!==u[g].morphTargets.length;++v){let _=u[g];m.push(_.time),p.push(_.morphTarget===y?1:0)}s.push(new Li(".morphTargetInfluence["+y+"]",m,p))}c=f.length*o}else{let f=".bones["+t[d].name+"]";n(Ui,f+".position",u,"pos",s),n(Di,f+".quaternion",u,"rot",s),n(Ui,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function QT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return xl;case"quaternion":return Di;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function eR(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=QT(i.type);if(i.times===void 0){let t=[],n=[];Ly(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var as={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Zd=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},tR=new Zd,Bi=class{constructor(e){this.manager=e!==void 0?e:tR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},Kd=class extends Error{constructor(e,t){super(e),this.response=t}},ma=class extends Bi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=as.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ri[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,y=0,m=new ReadableStream({start(p){v();function v(){d.read().then(({done:_,value:x})=>{if(_)p.close();else{y+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let w=0,R=h.length;w<R;w++){let P=h[w];P.onProgress&&P.onProgress(T)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Kd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{as.add(e,l);let h=Ri[e];delete Ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $d=class extends Bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=as.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=ca("img");function c(){h(),as.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var bl=class extends Bi{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,o=new $d(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},no=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Vu=new Fe,uy=new I,dy=new I,ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;uy.setFromMatrixPosition(e.matrixWorld),t.position.copy(uy),dy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dy),t.updateMatrixWorld(),Vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jd=class extends ga{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ml=class extends no{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fy=new Fe,Qo=new I,Hu=new I,Qd=class extends ga{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qo),Hu.copy(n.position),Hu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hu),n.updateMatrixWorld(),s.makeTranslation(-Qo.x,-Qo.y,-Qo.z),fy.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fy)}},Sl=class extends no{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ef=class extends ga{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new ef}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},El=class extends no{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wl=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=as.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return as.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),as.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});as.add(e,c),r.manager.itemStart(e)}};var pf="\\[\\]\\.:\\/",nR=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",iR="[^"+pf.replace("\\.","")+"]",sR=/((?:WC+[\/:])*)/.source.replace("WC",mf),rR=/(WCOD+)?/.source.replace("WCOD",iR),oR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),aR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),cR=new RegExp("^"+sR+rR+oR+aR+"$"),lR=["material","materials","bones","map"],tf=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nR,"")}static parseTrackName(e){let t=cR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lR.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=tf;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var KP=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Pl="v663",Dy=`quack-and-splash-${Pl}`;var Nl=new Map;function fn(i,e){let t=Nl.get(i);return t||Nl.set(i,t=[]),t.push(e),()=>hR(i,e)}function hR(i,e){let t=Nl.get(i);if(!t)return;let n=t.indexOf(e);n>=0&&t.splice(n,1)}function bt(i,e){let t=Nl.get(i);if(t)for(let n=0;n<t.length;n++)t[n](e)}var uR=["start","pause","resume","mute","unmute","submit","useExtraLife"],dR={resetState:!1},on=null,_a=null,gf=!1,Ll=!1;function fR(){return new URLSearchParams(location.search).get("platforma")==="0"?!1:window.webkit?.messageHandlers?.callbackHandler||window._toDevice!=null?!0:window.self!==window.top}async function By(i){if(!fR()||!window.Gamee)return Uy(),null;on=window.Gamee.gamee;for(let e of uR){let t="platforma:"+e;on.on(e,n=>bt(t,n))}try{_a=await on.init({capabilities:i}),console.info(`[gamee] init ok \u2014 ${_a.platform}, kontext ${_a.gameContext}`)}catch(e){console.warn("[gamee] init selhal, hra jede mimo platformu:",e?.code||e),on=null,Uy()}return _a}function Oy(){console.info(`[gamee] gameReady za ${Math.round(performance.now())} ms (limit 2500)`),on?ba(on.gameReady()):bt("platforma:start",dR)}function Fy(){Ll=!0,on&&ba(on.gameStart())}function Vy(i,e){on&&Ll&&ba(on.updateScore({score:i,playTime:e,checksum:Dy}))}function yf(i,e){Ll&&(Ll=!1,on&&ba(on.gameOver({saveStateData:i,metadata:e})))}function Hy(i){on&&ba(on.gameSaveState(i))}function Gy(){return _a?.saveState??null}function vf(){return on!==null}function ba(i){i.catch(pR)}function pR(i){console.warn("[gamee]",i?.method,i?.code,i?.message)}function Uy(){addEventListener("keydown",i=>{i.key!=="p"&&i.key!=="P"||(gf=!gf,bt(gf?"platforma:pause":"platforma:resume"))})}var _f=1,Wy="quack-and-splash:ulozeni";function xf(){return{v:_f,level:1,mince:0,boostery:{}}}var Oi=xf();function Xy(){return Oi=mR(vf()?Gy():yR()),Oi}function Ma(){return Oi}function qy(i){Oi=Mf(i),vf()?Hy(Oi):vR(JSON.stringify(Oi))}function jy(i){return Oi=Mf(i),Oi}function bf(){return Oi}function mR(i){if(!i)return xf();try{return Mf(gR(JSON.parse(i)))}catch(e){return console.warn("[ulozeni] po\u0161kozen\xFD z\xE1znam, za\u010D\xEDn\xE1m od v\xFDchoz\xEDho stavu:",e.message),xf()}}function gR(i){if(!i||typeof i!="object")throw new Error("z\xE1znam nen\xED objekt");if(i.v!==_f)throw new Error(`nezn\xE1m\xE1 verze z\xE1znamu ${i.v}`);return i}function Mf(i){let e={};if(i.boostery&&typeof i.boostery=="object")for(let[t,n]of Object.entries(i.boostery))Number.isInteger(n)&&n>0&&(e[t]=n);return{v:_f,level:Number.isInteger(i.level)&&i.level>=1?i.level:1,mince:Number.isInteger(i.mince)&&i.mince>=0?i.mince:0,boostery:e}}function yR(){try{return localStorage.getItem(Wy)}catch{return null}}function vR(i){try{localStorage.setItem(Wy,i)}catch(e){console.warn("[ulozeni] nejde ulo\u017Eit:",e.message)}}var js=150,Nt=-600,$y=54,Yy=.45,Jy=$y,Ze=new Ut($y,1,1,8e3);function wf(i){Jy=i}var Zn=new I(0,210+js,560),Zy=new I(0,150+js,-400),wa=400,Ky=Zn.z-Nt,Sf=new I(0,Zn.y+(Zy.y-Zn.y)*(Nt-Zn.z)/(Zy.z-Zn.z),Nt);function Af(i){wa=Math.max(0,i)}function Qy(){return{x:Zn.x,y:Zn.y,z:Zn.z+wa}}function Tf(){return(Ky+wa)/Ky}var Dl=new I(0,60+js,420),li=Dl.clone();function xR(i,e){if(e<=Yy)return i;let t=Math.tan(i*Math.PI/360)*Yy/e;return 2*Math.atan(t)*180/Math.PI}var _R=1,bR=1;function ev(i,e){_R=i,bR=e,Ze.aspect=i/e;let t=2*Math.atan(Math.tan(Jy*Math.PI/360)/Tf())*180/Math.PI;Ze.fov=xR(t,Ze.aspect),Ze.updateProjectionMatrix()}var Aa={x:40,y:26},tv=Aa.x,Sa=Aa.y,Ea=Aa.y,Bl=Aa.y,Ol=Aa.y,Fl=!1,nv=0,iv=0,MR=new I(0,1,0),Vl=0,Ul=0;function sv(i){!i||typeof i!="object"||(typeof i.x=="number"&&(tv=Math.max(0,Math.min(200,i.x))),typeof i.y=="number"&&(Sa=Ea=Bl=Ol=Math.max(0,Math.min(200,i.y))))}var ys=i=>Math.max(0,Math.min(200,i));function rv(i){!i||typeof i!="object"||(typeof i.nahoru=="number"&&(Sa=ys(i.nahoru)),typeof i.dolu=="number"&&(Ea=ys(i.dolu)),typeof i.strika=="number"&&typeof i.strNahoru!="number"&&(Bl=ys(Sa*i.strika)),typeof i.strika=="number"&&typeof i.strDolu!="number"&&(Ol=ys(Ea*i.strika)),typeof i.mirNahoru=="number"&&(Sa=ys(i.mirNahoru)),typeof i.mirDolu=="number"&&(Ea=ys(i.mirDolu)),typeof i.strNahoru=="number"&&(Bl=ys(i.strNahoru)),typeof i.strDolu=="number"&&(Ol=ys(i.strDolu)),typeof i.rotaceMir=="number"&&(nv=Math.max(0,Math.min(15,i.rotaceMir))),typeof i.rotaceStr=="number"&&(iv=Math.max(0,Math.min(15,i.rotaceStr))))}function ov(i){Fl=!!i}var SR=5.5,qs=new I,av=new I;function Rf(i,e){Vl=i,Ul=e,cv()}function cv(){let i=Fl?Bl:Sa,e=Fl?Ol:Ea,t=Ul>0?-Ul*e:-Ul*i;av.set(Vl*tv,t,0)}var Ef=0;function Cf(i){Ef=Math.max(-200,Math.min(400,+i||0))}function ER(){let i=Fl?iv:nv;!i||!Vl||Ze.rotateOnWorldAxis(MR,-Vl*i*Math.PI/180)}function If(i){cv(),qs.lerp(av,1-Math.exp(-SR*i)),Ze.position.set(Zn.x+qs.x,Zn.y+qs.y+Ef,Zn.z+wa),Ze.lookAt(Sf.x+qs.x,Sf.y+qs.y+Ef,Sf.z),ER(),li.set(Dl.x+qs.x,Dl.y+qs.y,Dl.z+wa)}var fv={rozptyl:.74,rozptylBarva:"#8fa8c4",slunce:1.02,slunceBarva:"#ffffff",azimut:-34,vyska:54};var Ys={...fv},Ta=null,hi=null,kf=null,pv=new I(0,287,Nt),zf=2e3;function wR(){if(!Ta)return;Ta.color.set(Ys.rozptylBarva),Ta.intensity=Ys.rozptyl,hi.color.set(Ys.slunceBarva),hi.intensity=Ys.slunce;let i=Rt.degToRad(Ys.azimut),e=Rt.degToRad(Ys.vyska);hi.position.set(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)).multiplyScalar(zf).add(pv)}var lv={ostre:py,mekke:Al},mv="mekke",hv=1024,uv=400,dv=480,Hl=!1,Pf=null;function Nf(i,e){e=lv[e]!==void 0?e:!1,Pf=i;let t=e!==Hl;Hl=e,i.shadowMap.enabled=!!e,e&&(i.shadowMap.type=lv[e]),hi&&(hi.castShadow=!!e),t&&kf&&kf.traverse(n=>{for(let s of[].concat(n.material||[]))s.needsUpdate=!0})}function gv(){return Hl}function AR(){let i=hi.shadow;i.mapSize.set(hv,hv);let e=i.camera;e.left=-uv,e.right=uv,e.top=dv,e.bottom=-dv,e.near=zf-1200,e.far=zf+1200,e.updateProjectionMatrix(),i.bias=0,i.normalBias=.4}function yv(i){let e=new cl;e.background=new be(1778480),i&&typeof i=="object"&&(Ys={...fv,...i}),Ta=new El,hi=new io,hi.target.position.copy(pv),e.add(Ta,hi,hi.target),kf=e,AR(),wR(),Pf&&Nf(Pf,Hl);let t=new Je(new Qr(60,32,16),new to({color:16765503}));return t.position.set(0,260+js,Nt),e.add(t),{scena:e,kachna:t}}function Lf(i,e){if(e===wy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===xa||e===Rl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===xa)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Gl=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new np(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=gs.extractUrlBase(e);o=gs.resolveURL(l,this.path)}else o=gs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ma(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Mv){try{o[Ke.KHR_BINARY_GLTF]=new ip(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:o[d]=new Ff;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[d]=new sp(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[d]=new rp;break;case Ke.KHR_MESH_QUANTIZATION:o[d]=new op;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function TR(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Of=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Qt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new io(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sl(h),l.distance=d;break;case"spot":l=new Ml(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Ff=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(s)}},Vf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Hf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(a,a)}return Promise.all(r)}},Gf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},jf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}},Yf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Zf=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(r)}},Kf=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},$f=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Jf=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Qf=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ep=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tp=class{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},np=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Pn.TRIANGLES&&l.mode!==Pn.TRIANGLE_STRIP&&l.mode!==Pn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let y=new Fe,m=new I,p=new Pt,v=new I(1,1,1),_=new ul(g.geometry,g.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,y.compose(m,p,v));for(let x in c)if(x==="_COLOR_0"){let T=c[x];_.instanceColor=new Xs(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);At.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Mv="glTF",Ra=12,vv={JSON:1313821514,BIN:5130562},ip=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ra,r=new DataView(e,Ra),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===vv.JSON){let l=new Uint8Array(e,Ra+o,a);this.content=n.decode(l)}else if(c===vv.BIN){let l=Ra+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let d=cp[h]||h.toLowerCase();a[d]=o[h]}for(let h in e.attributes){let d=cp[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],f=ro[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}d(f)},a,l,Qt,u)})})}},rp=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},op=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Wl=class extends fs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,g=e*l,y=g-l,m=-2*f+3*u,p=f-u,v=1-m,_=p-u+d;for(let x=0;x!==a;x++){let T=o[y+x+a],w=o[y+x+c]*h,R=o[g+x+a],P=o[g+x]*h;r[x]=v*T+_*w+m*R+p*P}return r}},RR=new Pt,ap=class extends Wl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return RR.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xv={9728:Bt,9729:zt,9984:sf,9985:na,9986:Nr,9987:ai},_v={33071:Xn,33648:oa,10497:Yn},Df={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CR={CUBICSPLINE:void 0,LINEAR:qr,STEP:Xr},Uf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IR(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new eo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Zs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kR(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function zR(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PR(i){let e,t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bf(t.attributes):e=i.indices+":"+Bf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bf(i.targets[n]);return e}function Bf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function lp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NR(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var LR=new Fe,hp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new bl(this.options.manager):this.textureLoader=new wl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ma(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Zs(r,a,s),Fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(gs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Df[s.type],a=ro[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new at(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Df[s.type],l=ro[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==d){let p=Math.floor(u/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(v);_||(y=new l(a,p*f,s.count*f/h),_=new ha(y,f/h),t.cache.add(v,_)),m=new ua(_,c,u%f/h,g)}else a===null?y=new l(s.count*c):y=new l(a,u,s.count*c),m=new at(y,c,g);if(s.sparse!==void 0){let p=Df.SCALAR,v=ro[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new v(o[1],_,s.sparse.count*p),w=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new at(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=T.length;R<P;R++){let E=T[R];if(m.setX(E,w[R*c]),c>=2&&m.setY(E,w[R*c+1]),c>=3&&m.setZ(E,w[R*c+2]),c>=4&&m.setW(E,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=xv[u.magFilter]||zt,h.minFilter=xv[u.minFilter]||ai,h.wrapS=_v[u.wrapS]||Yn,h.wrapT=_v[u.wrapT]||Yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==zt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Xt(y);m.needsUpdate=!0,u(m)}),t.load(gs.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Fi(d,o),d.userData.mimeType=o.mimeType||NR(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new pa,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new fa,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return eo}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let d=s[Ke.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Qt),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,kt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Gn);let h=r.alphaMode||Uf.OPAQUE;if(h===Uf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Tt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Tt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Tt){let d=r.emissiveFactor;a.emissive=new be().setRGB(d[0],d[1],d[2],Qt)}return r.emissiveTexture!==void 0&&o!==Tt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,kt)),Promise.all(l).then(function(){let d=new o(a);return r.name&&(d.name=r.name),Fi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Zs(s,d,r),d})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return bv(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=PR(l),d=s[h];if(d)o.push(d.promise);else{let u;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=bv(new Mt,l,t),s[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?IR(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=o[f],p,v=l[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ll(y,v):new Je(y,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?p.geometry=Lf(p.geometry,Rl):m.mode===Pn.TRIANGLE_FAN&&(p.geometry=Lf(p.geometry,xa));else if(m.mode===Pn.LINES)p=new pl(y,v);else if(m.mode===Pn.LINE_STRIP)p=new $r(y,v);else if(m.mode===Pn.LINE_LOOP)p=new ml(y,v);else if(m.mode===Pn.POINTS)p=new Jr(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fi(p,r),m.extensions&&Zs(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Zs(s,d[0],r),d[0];let u=new Wt;r.extensions&&Zs(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Rt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Kr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let d=o[l];if(d){a.push(d);let u=new Fe;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hl(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],y=d[3],m=d[4],p=[];for(let v=0,_=u.length;v<_;v++){let x=u[v],T=f[v],w=g[v],R=y[v],P=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let E=n._createAnimationTracks(x,T,w,R,P);if(E)for(let b=0;b<E.length;b++)p.push(E[b])}return new _l(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,LR)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new da:l.length>1?h=new Wt:l.length===1?h=l[0]:h=new At,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=o),Fi(h,r),r.extensions&&Zs(n,h,r),r.matrix!==void 0){let d=new Fe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Wt;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&Zs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof rn||u instanceof Xt)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];vs[r.path]===vs.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(vs[r.path]){case vs.weights:l=Li;break;case vs.rotation:l=Di;break;case vs.position:case vs.scale:l=Ui;break;default:n.itemSize===1?l=Li:l=Ui;break}let h=s.interpolation!==void 0?CR[s.interpolation]:qr,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){let g=new l(c[u]+"."+vs[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=lp(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Di?ap:Wl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function DR(i,e,t){let n=e.attributes,s=new ct;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=lp(ro[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let y=lp(ro[u.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function bv(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=cp[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return $e.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Fi(i,e),DR(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?kR(i,e.targets,t):i})}var Ia=new us(new Uint8Array([120,200,255]),3,1,va);Ia.minFilter=Bt;Ia.magFilter=Bt;Ia.generateMipmaps=!1;Ia.needsUpdate=!0;var Av={value:.015},Tv={value:.015},gp={value:.015},Xl=new Tt({color:1316380,side:xt,fog:!1}),ql=new Tt({color:1316380,side:xt,fog:!1}),ka=new Tt({color:1316380,side:xt,fog:!1});Xl.userData.tloustka=Av;ql.userData.tloustka=Tv;ka.userData.tloustka=gp;ka.onBeforeCompile=ql.onBeforeCompile=Xl.onBeforeCompile=function(i){i.uniforms.uTloustka=this.userData.tloustka,i.vertexShader=`uniform float uTloustka;
attribute vec3 obrysNormal;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += obrysNormal * uTloustka;`)};function UR(i){if(i.attributes.obrysNormal)return;let e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Int32Array(n),r=new Int32Array(n),o=new Int32Array(n),a=new Int32Array(n),c=new Int32Array(n),l=new Map,h=0;for(let x=0;x<n;x++){let T=Math.round(e.getX(x)*1e5),w=Math.round(e.getY(x)*1e5),R=Math.round(e.getZ(x)*1e5),P=Math.imul(T,73856093)^Math.imul(w,19349663)^Math.imul(R,83492791),E=l.get(P),b=E===void 0?-1:E;for(;b!==-1&&!(r[b]===T&&o[b]===w&&a[b]===R);)b=c[b];b===-1&&(b=h++,r[b]=T,o[b]=w,a[b]=R,c[b]=E===void 0?-1:E,l.set(P,b)),s[x]=b}let d=new Float64Array(h),u=new Float64Array(h),f=new Float64Array(h);for(let x=0;x<n;x++){let T=s[x];d[T]+=t.getX(x),u[T]+=t.getY(x),f[T]+=t.getZ(x)}let g=new Float64Array(h),y=new Float64Array(h),m=new Float64Array(h),p=new Uint8Array(h);for(let x=0;x<h;x++){let T=Math.hypot(d[x],u[x],f[x]);T<1e-6||(p[x]=1,g[x]=d[x]/T,y[x]=u[x]/T,m[x]=f[x]/T)}let v=new Float64Array(h).fill(1);for(let x=0;x<n;x++){let T=s[x];if(!p[T])continue;let w=g[T]*t.getX(x)+y[T]*t.getY(x)+m[T]*t.getZ(x);w<v[T]&&(v[T]=w)}let _=new Float32Array(n*3);for(let x=0;x<n;x++){let T=s[x];if(!p[T]){_[x*3]=t.getX(x),_[x*3+1]=t.getY(x),_[x*3+2]=t.getZ(x);continue}let w=v[T]>=.5?1/v[T]:1;_[x*3]=g[T]*w,_[x*3+1]=y[T]*w,_[x*3+2]=m[T]*w}i.setAttribute("obrysNormal",new at(_,3))}function Rv(i){Av.value=i}function Cv(i){Xl.color.set(i)}function Iv(i){ql.color.set(i)}function kv(i){ka.color.set(i)}function zv(){return"#"+ka.color.getHexString()}function Pv(i){gp.value=i}function Nv(){return gp.value}function yp(i){i.traverse(e=>{e.userData.obrys&&(e.material=ka)})}function Lv(i){Tv.value=i}function Dv(i){i.traverse(e=>{e.userData.obrys&&(e.material=ql)})}var BR=["face","eyes"],Sv=i=>BR.some(e=>i===e||i.startsWith(e+"_")),Ca="normal",vp="hit",fp=i=>i==="eyes"||i.startsWith("eyes_"),Ev=i=>i==="eyes"?"":i.slice(5);function Uv(i){return i.userData.vyrazy||[]}function Bv(i,e){let t=e?`eyes_${e}`:"eyes",n=!1;return i.traverse(s=>{s.isMesh&&s.name===t&&(n=!0)}),n?(i.traverse(s=>{s.isMesh&&fp(s.name)&&(s.visible=s.name===t)}),i.userData.vyrazTed=e||"",!0):!1}var up=i=>i.parent&&i.parent.isGroup&&new RegExp(`^${i.parent.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}_\\d+$`).test(i.name),OR=new Set(["toon","malovany_obrys"]),FR={malovany:"malovany_obrys"},pp="toon",mp=new Map,dp=new Map,VR=new Gl;function Ov(i){i=FR[i]||i,OR.has(i)&&(pp=i,mp.clear())}function HR(i,e,t){let n=e&&e.color?e.color.getHex():16777215,s=e&&e.map||null,r=!!(e&&(e.transparent||e.alphaTest>0)),o=`${pp}|${i}|${n}|${s?s.uuid:"-"}|${t}|${r}`,a=mp.get(o);if(a)return a;let c={color:n,map:s,vertexColors:t,name:i,transparent:!1,alphaTest:r?.35:0};return a=pp==="toon"?new to({...c,gradientMap:Ia}):new wn(c),mp.set(o,a),a}function GR(i){let e=new Set,t=[],n=new Map;i.updateMatrixWorld(!0),i.traverse(r=>{if(!r.isMesh)return;let o=r.material,a=!o||!o.name&&o.isMeshStandardMaterial&&!o.map,c=up(r)?r.parent.name:r.name;if(a&&e.add(`\u201E${c}": \u010D\xE1st bez materi\xE1lu \u2014 p\u0159i\u0159a\u010F hlavn\xED materi\xE1l`),up(r)&&o){let d=n.get(r.parent)||new Set;d.has(o)&&e.add(`\u201E${c}": dva sloty se stejn\xFDm materi\xE1lem = draw call nav\xEDc \u2014 slou\u010D je do jednoho a pr\xE1zdn\xFD slot sma\u017E`),d.add(o),n.set(r.parent,d)}r.matrixWorld.determinant()<0&&e.add(`\u201E${c}": zrcadlen\xFD (z\xE1porn\xE9 m\u011B\u0159\xEDtko) \u2014 aplikuj Scale (Ctrl+A)`);let l=(o&&o.name||"hlavni").replace(/\.\d+$/,"").toLowerCase(),h=!!(r.geometry&&r.geometry.attributes.color);r.material=HR(l,o,h),Sv(c.replace(/\.\d+$/,"").toLowerCase())||t.push(r)});let s=[];if(i.traverse(r=>{r.isMesh&&fp(r.name)&&s.push(Ev(r.name))}),s.length){i.userData.vyrazy=s.sort();let r=s.includes("")?"":s.includes(Ca)?Ca:s[0];i.traverse(o=>{o.isMesh&&fp(o.name)&&(o.visible=Ev(o.name)===r)}),i.userData.vyrazTed=r}i.traverse(r=>{r.isMesh&&(r.castShadow=!Sv((up(r)?r.parent.name:r.name).replace(/\.\d+$/,"").toLowerCase()),r.receiveShadow=!0)});for(let r of t){UR(r.geometry);let o=new Je(r.geometry,Xl);o.name=r.name+"_obrys",o.userData.obrys=!0,r.add(o)}return[...e]}var an=400;function Ks(i){return i.scale.setScalar(an),i}function WR(i){let e=0,t=0,n=0,s=new Set;return i.traverse(r=>{if(!r.isMesh||!r.visible)return;if(r.userData.obrys){n++;return}t++,s.add(r.material.name||r.material.type);let o=r.geometry;e+=o.index?o.index.count/3:o.attributes.position.count/3}),{trojuhelniku:Math.round(e),dilu:t,obrysu:n,materialy:[...s]}}function Fv(i){return dp.has(i)||dp.set(i,VR.loadAsync(i).then(e=>(XR(e),e)).catch(e=>(console.warn(`[assety] model ${i} se nena\u010Detl: ${e.message}`),null))),dp.get(i)}var wv=new Map;function XR(i){if(!i||!wv.size)return 0;let e=new Set;return i.scene.traverse(t=>{let n=t.isMesh&&t.material&&t.material.map;if(!n||e.has(n))return;let s=wv.get(n.name);s&&(e.add(n),n.image!==s&&(n.image=s,n.dispose(),n.needsUpdate=!0))}),e.size}var qR="duck";async function An(i,e=qR,{volitelny:t=!1}={}){let n=await Fv(i);if(!n)return null;let s=n.scene.getObjectByName(e);if(!s)return t||console.warn(`[assety] ${i}: objekt \u201E${e}" v souboru nen\xED`),null;let r=s.clone(!0),o=GR(r);for(let a of o)console.warn(`[assety] ${i}: ${a}`);return{objekt:r,varovani:o,...WR(r)}}function Vv(i){return Promise.all(i.map(Fv))}var dt={verze:1,poznamka:"Generuje nastroje/balance.html. Ru\u010Dn\u011B upravovat jen `nastaveni`; `levely` se dopo\u010D\xEDt\xE1vaj\xED.",nastaveni:{levelu:120,bossPo:6,krokuZaBosse:1,kapitola:30,nastavenychKapitol:2,vzorKapitol:2,horniCil:20,dolniCil:7,tempo:.85,krivka:1.2,vodaNaKachnu:5,nasobE:.85,nasobM:1,nasobH:1.1,ozbrojenychOd:0,ozbrojenychDo:45,obranaCena:2.5,nadrzZaklad:140,nadrzKrok:11,plytvaniZbran:.64,plytvaniKrok:.1,rezieZaklad:16,rezieKrok:1,novaZbranNasob:1,plytvaniSlaby:.15,plytvaniDobry:.08,vzorec:"EMMHMH",kapitoly:[{od:4,do:12},{od:8,do:16},{od:12,do:19},{od:16,do:23}],bossy:[{vydrz:28,vydrzKrok:2,doprovod:2,doprovodKrok:1},{vydrz:55,vydrzKrok:5,doprovod:0,doprovodKrok:1},{vydrz:66,vydrzKrok:5,doprovod:3,doprovodKrok:1},{vydrz:90,vydrzKrok:6,doprovod:4,doprovodKrok:1}],voda:{barva:"#2cb3ce",pruhlednost:94,svitivost:135,obrysSila:114,obrysBarva:"#0d6a91",hran:7,polomer:7,tok:10.5,delkaVzoru:1450,sila:2500,nabeh:.2,zpozdeniMireni:.22,prekmitMireni:1,zpozdeniPistole:.9,prekmitPistole:.4},svetlo:{rozptyl:1.65,rozptylBarva:"#ffffff",slunce:2.4,slunceBarva:"#e5ebff",azimut:-14,vyska:23},vzhled:{styl:"toon",obrys:.0016,obrysRuka:.0012,obrysNabytek:.0042,obrysBarva:"#14161c",obrysBarvaRuka:"#333c52",obrysBarvaNabytek:"#49131a",pozadi:"#afc86a",stiny:"mekke",paralaxa:{x:40,y:26,mirNahoru:26,mirDolu:26,strNahoru:60,strDolu:100,rotaceMir:.25,rotaceStr:.25},kamera:{naklon:0,odstup:.45,uhel:54,mirNahoru:26,mirDolu:26,strNahoru:60,strDolu:100,rotaceMir:.25,rotaceStr:.25},pistole:{posunVlevo:8,posunVpravo:8,posunNahoru:40,dech:1,chveni:1,naklon:1,zkrut:1,skubDozadu:1,skubNadskok:1.35,skubZvednuti:1.15,skubZkrut:1,velikost:.9}},houpani:{sila:2.4,tuhost:50,tlumeni:2.5,maxUhel:33,prahVyrazu:12},rozstrik:{mnozstvi:.9,velikost:1.6,velkych:.5,rozlet:.5,kontakt:.8,kontaktBarva:"#ffffff",kontaktObrysBarva:"#edf8fd"},fyzika:{gravitace:1600,vaha:1,treni:.4},kachny:{nasobekTerce:2,dobaVyjeti:.22,dobaVenku:3,dobaSchovani:1.5,kloboukOdstrel:.4,bodyZaVodu:10,bodySestreleni:20}},levely:[{level:1,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:3,ozbrojenych:0,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:2,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:4,ozbrojenych:0,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:3,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:4,ozbrojenych:1,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:4,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:5,ozbrojenych:1,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:5,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:5,ozbrojenych:2,nadrz:140,plytvani:.64,rezie:16,stupnu:0},{level:6,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:2,ozbrojenych:2,nadrz:140,plytvani:.64,rezie:16,stupnu:0,bossCislo:1,bossSouboj:1,bossZivotu:5,bossVydrz:28},{level:7,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:4,ozbrojenych:2,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:8,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:5,ozbrojenych:3,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:9,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:6,ozbrojenych:3,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:10,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:7,ozbrojenych:3,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:11,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:6,ozbrojenych:4,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1},{level:12,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:3,ozbrojenych:4,nadrz:143.7,plytvani:.607,rezie:15.7,stupnu:1,bossCislo:1,bossSouboj:2,bossZivotu:4,bossVydrz:30},{level:13,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:6,ozbrojenych:5,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:14,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:7,ozbrojenych:5,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:15,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:7,ozbrojenych:5,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:16,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:8,ozbrojenych:6,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:17,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:8,ozbrojenych:6,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2},{level:18,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:6,nadrz:147.3,plytvani:.573,rezie:15.3,stupnu:2,bossCislo:1,bossSouboj:3,bossZivotu:3,bossVydrz:32},{level:19,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:7,ozbrojenych:7,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:20,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:7,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:21,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:8,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:22,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:10,ozbrojenych:8,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:23,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:10,ozbrojenych:8,nadrz:151,plytvani:.54,rezie:15,stupnu:3},{level:24,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:5,ozbrojenych:9,nadrz:151,plytvani:.54,rezie:15,stupnu:3,bossCislo:1,bossSouboj:4,bossZivotu:2,bossVydrz:34},{level:25,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:9,ozbrojenych:9,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:26,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:9,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:27,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:10,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:28,kapitola:1,zbran:1,stupen:"H",boss:!1,kachnicek:12,ozbrojenych:10,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:29,kapitola:1,zbran:1,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:11,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4},{level:30,kapitola:1,zbran:1,stupen:"B",boss:!0,kachnicek:6,ozbrojenych:11,nadrz:154.7,plytvani:.507,rezie:14.7,stupnu:4,bossCislo:1,bossSouboj:5,bossZivotu:1,bossVydrz:36},{level:31,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:7,ozbrojenych:11,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:32,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:8,ozbrojenych:12,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:33,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:8,ozbrojenych:12,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:34,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:9,ozbrojenych:12,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:35,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:13,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5},{level:36,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:0,ozbrojenych:13,nadrz:158.3,plytvani:.473,rezie:14.3,stupnu:5,bossCislo:2,bossSouboj:1,bossZivotu:5,bossVydrz:55},{level:37,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:8,ozbrojenych:14,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:38,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:9,ozbrojenych:14,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:39,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:10,ozbrojenych:14,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:40,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:11,ozbrojenych:15,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:41,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:10,ozbrojenych:15,nadrz:162,plytvani:.44,rezie:14,stupnu:6},{level:42,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:1,ozbrojenych:16,nadrz:162,plytvani:.44,rezie:14,stupnu:6,bossCislo:2,bossSouboj:2,bossZivotu:4,bossVydrz:60},{level:43,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:9,ozbrojenych:16,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:44,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:16,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:45,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:11,ozbrojenych:17,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:46,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:13,ozbrojenych:17,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:47,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:17,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7},{level:48,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:2,ozbrojenych:18,nadrz:165.7,plytvani:.407,rezie:13.7,stupnu:7,bossCislo:2,bossSouboj:3,bossZivotu:3,bossVydrz:65},{level:49,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:11,ozbrojenych:18,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:50,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:19,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:51,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:19,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:52,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:15,ozbrojenych:19,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:53,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:14,ozbrojenych:20,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8},{level:54,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:3,ozbrojenych:20,nadrz:169.3,plytvani:.373,rezie:13.3,stupnu:8,bossCislo:2,bossSouboj:4,bossZivotu:2,bossVydrz:70},{level:55,kapitola:2,zbran:2,stupen:"E",boss:!1,kachnicek:12,ozbrojenych:20,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:56,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:21,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:57,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:21,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:58,kapitola:2,zbran:2,stupen:"H",boss:!1,kachnicek:17,ozbrojenych:22,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:59,kapitola:2,zbran:2,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:22,nadrz:173,plytvani:.34,rezie:13,stupnu:9},{level:60,kapitola:2,zbran:2,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:22,nadrz:173,plytvani:.34,rezie:13,stupnu:9,bossCislo:2,bossSouboj:5,bossZivotu:1,bossVydrz:75},{level:61,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:10,ozbrojenych:23,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:62,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:23,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:63,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:12,ozbrojenych:23,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:64,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:14,ozbrojenych:24,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:65,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:24,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10},{level:66,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:3,ozbrojenych:25,nadrz:176.7,plytvani:.307,rezie:12.7,stupnu:10,bossCislo:3,bossSouboj:1,bossZivotu:5,bossVydrz:66},{level:67,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:11,ozbrojenych:25,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:68,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:25,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:69,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:13,ozbrojenych:26,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:70,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:15,ozbrojenych:26,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:71,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:14,ozbrojenych:26,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11},{level:72,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:27,nadrz:180.3,plytvani:.273,rezie:12.3,stupnu:11,bossCislo:3,bossSouboj:2,bossZivotu:4,bossVydrz:71},{level:73,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:12,ozbrojenych:27,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:74,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:28,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:75,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:28,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:76,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:17,ozbrojenych:28,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:77,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:15,ozbrojenych:29,nadrz:184,plytvani:.24,rezie:12,stupnu:12},{level:78,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:5,ozbrojenych:29,nadrz:184,plytvani:.24,rezie:12,stupnu:12,bossCislo:3,bossSouboj:3,bossZivotu:3,bossVydrz:76},{level:79,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:14,ozbrojenych:29,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:80,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:30,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:81,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:30,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:82,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:18,ozbrojenych:31,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:83,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:31,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13},{level:84,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:6,ozbrojenych:31,nadrz:187.7,plytvani:.207,rezie:11.7,stupnu:13,bossCislo:3,bossSouboj:4,bossZivotu:2,bossVydrz:81},{level:85,kapitola:3,zbran:3,stupen:"E",boss:!1,kachnicek:15,ozbrojenych:32,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:86,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:18,ozbrojenych:32,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:87,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:18,ozbrojenych:33,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:88,kapitola:3,zbran:3,stupen:"H",boss:!1,kachnicek:20,ozbrojenych:33,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:89,kapitola:3,zbran:3,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:33,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14},{level:90,kapitola:3,zbran:3,stupen:"B",boss:!0,kachnicek:7,ozbrojenych:34,nadrz:191.3,plytvani:.173,rezie:11.3,stupnu:14,bossCislo:3,bossSouboj:5,bossZivotu:1,bossVydrz:86},{level:91,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:14,ozbrojenych:34,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:92,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:34,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:93,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:16,ozbrojenych:35,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:94,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:18,ozbrojenych:35,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:95,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:36,nadrz:195,plytvani:.14,rezie:11,stupnu:15},{level:96,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:4,ozbrojenych:36,nadrz:195,plytvani:.14,rezie:11,stupnu:15,bossCislo:4,bossSouboj:1,bossZivotu:5,bossVydrz:90},{level:97,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:14,ozbrojenych:36,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:98,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:37,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:99,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:17,ozbrojenych:37,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:100,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:19,ozbrojenych:37,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:101,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:18,ozbrojenych:38,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16},{level:102,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:5,ozbrojenych:38,nadrz:198.7,plytvani:.107,rezie:10.7,stupnu:16,bossCislo:4,bossSouboj:2,bossZivotu:4,bossVydrz:96},{level:103,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:16,ozbrojenych:39,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:104,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:39,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:105,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:39,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:106,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:21,ozbrojenych:40,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:107,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:19,ozbrojenych:40,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17},{level:108,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:6,ozbrojenych:40,nadrz:202.3,plytvani:.073,rezie:10.3,stupnu:17,bossCislo:4,bossSouboj:3,bossZivotu:3,bossVydrz:102},{level:109,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:17,ozbrojenych:41,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:110,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:20,ozbrojenych:41,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:111,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:20,ozbrojenych:42,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:112,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:23,ozbrojenych:42,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:113,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:21,ozbrojenych:42,nadrz:206,plytvani:.04,rezie:10,stupnu:18},{level:114,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:7,ozbrojenych:43,nadrz:206,plytvani:.04,rezie:10,stupnu:18,bossCislo:4,bossSouboj:4,bossZivotu:2,bossVydrz:108},{level:115,kapitola:4,zbran:4,stupen:"E",boss:!1,kachnicek:18,ozbrojenych:43,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:116,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:22,ozbrojenych:43,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:117,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:22,ozbrojenych:44,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:118,kapitola:4,zbran:4,stupen:"H",boss:!1,kachnicek:25,ozbrojenych:44,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:119,kapitola:4,zbran:4,stupen:"M",boss:!1,kachnicek:23,ozbrojenych:45,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19},{level:120,kapitola:4,zbran:4,stupen:"B",boss:!0,kachnicek:8,ozbrojenych:45,nadrz:209.7,plytvani:.007,rezie:9.7,stupnu:19,bossCislo:4,bossSouboj:5,bossZivotu:1,bossVydrz:114}]};var YR=1,Hv={level:1,kapitola:1,zbran:1,stupen:"E",boss:!1,kachnicek:3,ozbrojenych:0,nadrz:140,plytvani:.64,rezie:16,stupnu:0};function ZR(){return!dt||dt.verze!==YR?(console.warn("[balanc] nezn\xE1m\xE1 verze souboru, jedu na nouzov\xFDch \u010D\xEDslech"),[]):!Array.isArray(dt.levely)||dt.levely.length===0?(console.warn("[balanc] v souboru chyb\xED tabulka level\u016F, jedu na nouzov\xFDch \u010D\xEDslech"),[]):dt.levely}var xp=ZR();function _p(i){if(xp.length===0)return Hv;let e=Math.min(xp.length,Math.max(1,Math.round(i||1)))-1;return{...Hv,...xp[e]}}function Gv(){return dt&&dt.nastaveni&&dt.nastaveni.voda||null}function Wv(){return dt&&dt.nastaveni&&dt.nastaveni.svetlo||null}function Xv(){return dt&&dt.nastaveni&&dt.nastaveni.vzhled||null}function qv(){return dt&&dt.nastaveni&&dt.nastaveni.level||null}function bp(){return dt&&dt.nastaveni&&dt.nastaveni.rozstrik||null}function Mp(){return dt&&dt.nastaveni&&dt.nastaveni.houpani||null}function Sp(){return dt&&dt.nastaveni&&dt.nastaveni.fyzika||null}function Ep(){let i=dt&&dt.nastaveni;if(!i||!i.kachny&&typeof i.vodaNaKachnu!="number")return null;let e={...i.kachny||{}};return typeof i.vodaNaKachnu=="number"&&(e.vodaNaKachnu=i.vodaNaKachnu),e}var _s=class i{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);let n=this.elements,s=e.x,r=e.y,o=e.z;return t.x=n[0]*s+n[1]*r+n[2]*o,t.y=n[3]*s+n[4]*r+n[5]*o,t.z=n[6]*s+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new i);let n=this.elements,s=e.elements,r=t.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],y=s[0],m=s[1],p=s[2],v=s[3],_=s[4],x=s[5],T=s[6],w=s[7],R=s[8];return r[0]=o*y+a*v+c*T,r[1]=o*m+a*_+c*w,r[2]=o*p+a*x+c*R,r[3]=l*y+h*v+d*T,r[4]=l*m+h*_+d*w,r[5]=l*p+h*x+d*R,r[6]=u*y+f*v+g*T,r[7]=u*m+f*_+g*w,r[8]=u*p+f*x+g*R,t}scale(e,t){t===void 0&&(t=new i);let n=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*n[3*r+0],s[3*r+1]=e.y*n[3*r+1],s[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new M);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+s*o]===0){for(a=o+1;a<l;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<l;a++){let f=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*f;while(--h)}}while(--c);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new i);let t=3,n=6,s=KR,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3]=1,s[9]=0,s[15]=0,s[4]=0,s[10]=1,s[16]=0,s[5]=0,s[11]=0,s[17]=1;let a=3,c=a,l,h=n,d;do{if(r=c-a,s[r+n*r]===0){for(o=r+1;o<c;o++)if(s[r+n*o]!==0){l=h;do d=h-l,s[d+n*r]+=s[d+n*o];while(--l);break}}if(s[r+n*r]!==0)for(o=r+1;o<c;o++){let u=s[r+n*o]/s[r+n*r];l=h;do d=h-l,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=s[r+n*o]/s[r+n*r];l=n;do d=n-l,s[d+n*o]=s[d+n*o]-s[d+n*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/s[r+n*r];l=n;do d=n-l,s[d+n*r]=s[d+n*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=s[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){let t=e.x,n=e.y,s=e.z,r=e.w,o=t+t,a=n+n,c=s+s,l=t*o,h=t*a,d=t*c,u=n*a,f=n*c,g=s*c,y=r*o,m=r*a,p=r*c,v=this.elements;return v[0]=1-(u+g),v[1]=h-p,v[2]=d+m,v[3]=h+p,v[4]=1-(l+g),v[5]=f-y,v[6]=d-m,v[7]=f+y,v[8]=1-(l+u),this}transpose(e){e===void 0&&(e=new i);let t=this.elements,n=e.elements,s;return n[0]=t[0],n[4]=t[4],n[8]=t[8],s=t[1],n[1]=t[3],n[3]=s,s=t[2],n[2]=t[6],n[6]=s,s=t[5],n[5]=t[7],n[7]=s,e}},KR=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],M=class i{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new i);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,c=this.z;return t.x=a*r-c*s,t.y=c*n-o*r,t.z=o*s-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new i(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new i(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new _s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,s=Math.sqrt(e*e+t*t+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=Math.sqrt(t*t+n*n+s*s);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z;return t.x=e*n,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new i),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new i),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){let n=this.length();if(n>0){let s=$R,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=JR;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let s=this.x,r=this.y,o=this.z;n.x=s+(e.x-s)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(jv),jv.almostEquals(e,t)}clone(){return new i(this.x,this.y,this.z)}};M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);var $R=new M,JR=new M,jv=new M,Tn=class i{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,Yv),l=Yv),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new i().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,c=s.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&n.x>=r.x&&t.y<=s.y&&n.y>=r.y&&t.z<=s.z&&n.z>=r.z}getCorners(e,t,n,s,r,o,a,c){let l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),s.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){let n=Zv,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=Zv,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*s,c=(this.upperBound.x-n.x)*s,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||f>g)}},Yv=new M,Zv=[new M,new M,new M,new M,new M,new M,new M,new M],Jl=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:s}=t;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(e,t,n){let{index:s}=e,{index:r}=t;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Ql=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let s=n[e].indexOf(t);return s!==-1&&n[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,e)}return this}},cn=class i{constructor(e,t,n,s){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=n,this.w=s}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let n=QR,s=e2;e.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+o*a+s*l-r*c,t.y=s*h+o*c+r*a-n*l,t.z=r*h+o*l+n*c-s*a,t.w=o*h-n*a-s*c-r*l,t}inverse(e){e===void 0&&(e=new i);let t=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(e);let o=1/(t*t+n*n+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new i),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);let n=e.x,s=e.y,r=e.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*s,d=l*s+c*n-o*r,u=l*r+o*s-a*n,f=-o*n-a*s-c*r;return t.x=h*l+f*-o+d*-c-u*-a,t.y=d*l+f*-a+u*-o-h*-c,t.z=u*l+f*-c+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,s,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),s=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=s,e.x=r}setFromEuler(e,t,n,s){s===void 0&&(s="XYZ");let r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):s==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,c=e.x,l=e.y,h=e.z,d=e.w,u,f,g,y,m;return f=s*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),y=Math.sin((1-t)*u)/g,m=Math.sin(t*u)/g):(y=1-t,m=t),n.x=y*s+m*c,n.y=y*r+m*l,n.z=y*o+m*h,n.w=y*a+m*d,n}integrate(e,t,n,s){s===void 0&&(s=new i);let r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return s.x+=u*(r*d+o*h-a*l),s.y+=u*(o*d+a*c-r*h),s.z+=u*(a*d+r*l-o*c),s.w+=u*(-r*c-o*l-a*h),s}},QR=new M,e2=new M,t2={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Ae=class i{constructor(e){e===void 0&&(e={}),this.id=i.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Ae.idCounter=0;Ae.types=t2;var lt=class i{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new cn,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return i.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return i.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,s){return s===void 0&&(s=new M),n.vsub(e,s),t.conjugate(Kv),Kv.vmult(s,s),s}static pointToWorldFrame(e,t,n,s){return s===void 0&&(s=new M),t.vmult(n,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,s){return s===void 0&&(s=new M),t.w*=-1,t.vmult(n,s),t.w*=-1,s}},Kv=new cn,eh=class i extends Ae{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:Ae.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let s=new M;for(let r=0;r!==e.length;r++){let o=e[r],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;t[o[c]].vsub(t[o[l]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);let t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){let n=this.faces[e],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,t)}static computeNormal(e,t,n,s){let r=new M,o=new M;t.vsub(e,o),n.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,n,s,r,o,a,c,l){let h=new M,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);let y=h.dot(o);y>u&&(u=y,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let y=n.vertices[n.faces[d][g]],m=new M;m.copy(y),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,c,l)}findSeparatingAxis(e,t,n,s,r,o,a,c){let l=new M,h=new M,d=new M,u=new M,f=new M,g=new M,y=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);let v=m.testSepAxis(l,e,t,n,s,r);if(v===!1)return!1;v<y&&(y=v,o.copy(l))}else{let p=a?a.length:m.faces.length;for(let v=0;v<p;v++){let _=a?a[v]:v;l.copy(m.faceNormals[_]),n.vmult(l,l);let x=m.testSepAxis(l,e,t,n,s,r);if(x===!1)return!1;x<y&&(y=x,o.copy(l))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){r.vmult(e.uniqueAxes[p],h);let v=m.testSepAxis(h,e,t,n,s,r);if(v===!1)return!1;v<y&&(y=v,o.copy(h))}else{let p=c?c.length:e.faces.length;for(let v=0;v<p;v++){let _=c?c[v]:v;h.copy(e.faceNormals[_]),r.vmult(h,h);let x=m.testSepAxis(h,e,t,n,s,r);if(x===!1)return!1;x<y&&(y=x,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(r.vmult(e.uniqueEdges[v],f),u.cross(f,g),!g.almostZero()){g.normalize();let _=m.testSepAxis(g,e,t,n,s,r);if(_===!1)return!1;_<y&&(y=_,o.copy(g))}}return s.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,s,r,o){let a=this;i.project(a,e,n,s,wp),i.project(t,e,r,o,Ap);let c=wp[0],l=wp[1],h=Ap[0],d=Ap[1];if(c<d||h<l)return!1;let u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(e,t){let n=new M,s=new M;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],s=this.vertices[t[0]];return-n.dot(s)}clipFaceAgainstHull(e,t,n,s,r,o,a){let c=new M,l=new M,h=new M,d=new M,u=new M,f=new M,g=new M,y=new M,m=this,p=[],v=s,_=p,x=-1,T=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){c.copy(m.faceNormals[b]),n.vmult(c,c);let k=c.dot(e);k<T&&(T=k,x=b)}if(x<0)return;let w=m.faces[x];w.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let k=0;k<m.faces[b].length;k++)w.indexOf(m.faces[b][k])!==-1&&b!==x&&w.connectedFaces.indexOf(b)===-1&&w.connectedFaces.push(b);let R=w.length;for(let b=0;b<R;b++){let k=m.vertices[w[b]],G=m.vertices[w[(b+1)%R]];k.vsub(G,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(k),n.vmult(f,f),t.vadd(f,f);let z=w.connectedFaces[b];g.copy(this.faceNormals[z]);let D=this.getPlaneConstantOfFace(z);y.copy(g),n.vmult(y,y);let U=D-y.dot(t);for(this.clipFaceAgainstPlane(v,_,y,U);v.length;)v.shift();for(;_.length;)v.push(_.shift())}g.copy(this.faceNormals[x]);let P=this.getPlaneConstantOfFace(x);y.copy(g),n.vmult(y,y);let E=P-y.dot(t);for(let b=0;b<v.length;b++){let k=y.dot(v[b])+E;if(k<=r&&(console.log(`clamped: depth=${k} to minDist=${r}`),k=r),k<=o){let G=v[b];if(k<=1e-6){let z={point:G,normal:y,depth:k};a.push(z)}}}}clipFaceAgainstPlane(e,t,n,s){let r,o,a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];r=n.dot(c)+s;for(let h=0;h<a;h++){if(l=e[h],o=n.dot(l)+s,r<0)if(o<0){let d=new M;d.copy(l),t.push(d)}else{let d=new M;c.lerp(l,r/(r-o),d),t.push(d)}else if(o<0){let d=new M;c.lerp(l,r/(r-o),d),t.push(d),t.push(l)}c=l,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let s=t[n].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,s){let r=this.vertices,o,a,c,l,h,d,u=new M;for(let f=0;f<r.length;f++){u.copy(r[f]),t.vmult(u,u),e.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),s.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<n;r++){let o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){let o=s[r];o.vadd(e,o)}}pointIsInside(e){let t=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=s[a],l=t[n[a][0]],h=new M;e.vsub(l,h);let d=c.dot(h),u=new M;o.vsub(l,u);let f=c.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(e,t,n,s,r){let o=e.vertices.length,a=i2,c=0,l=0,h=s2,d=e.vertices;h.setZero(),lt.vectorToLocalFrame(n,s,t,a),lt.pointToLocalFrame(n,s,h,h);let u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){let f=l;l=c,c=f}r[0]=c,r[1]=l}},wp=[],Ap=[],n2=new M,i2=new M,s2=new M,co=class i extends Ae{constructor(e){super({type:Ae.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,s=M,r=[new s(-e,-t,-n),new s(e,-t,-n),new s(e,t,-n),new s(-e,t,-n),new s(-e,-t,n),new s(e,-t,n),new s(e,t,n),new s(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new eh({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),i.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){let s=e;n.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){let n=e,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)xs.set(r[o][0],r[o][1],r[o][2]),t.vmult(xs,xs),e.vadd(xs,xs),n(xs.x,xs.y,xs.z)}calculateWorldAABB(e,t,n,s){let r=this.halfExtents;ui[0].set(r.x,r.y,r.z),ui[1].set(-r.x,r.y,r.z),ui[2].set(-r.x,-r.y,r.z),ui[3].set(-r.x,-r.y,-r.z),ui[4].set(r.x,-r.y,-r.z),ui[5].set(r.x,r.y,-r.z),ui[6].set(-r.x,r.y,-r.z),ui[7].set(r.x,-r.y,r.z);let o=ui[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=ui[a];t.vmult(c,c),e.vadd(c,c);let l=c.x,h=c.y,d=c.z;l>s.x&&(s.x=l),h>s.y&&(s.y=h),d>s.z&&(s.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},xs=new M,ui=[new M,new M,new M,new M,new M,new M,new M,new M],Vp={DYNAMIC:1,STATIC:2,KINEMATIC:4},Hp={AWAKE:0,SLEEPY:1,SLEEPING:2},We=class i extends Ql{constructor(e){e===void 0&&(e={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;let t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?i.STATIC:i.DYNAMIC,typeof e.type==typeof i.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new cn,this.initQuaternion=new cn,this.previousQuaternion=new cn,this.interpolatedQuaternion=new cn,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new _s,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new _s,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Tn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,e===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(i.sleepyEvent)):t===i.SLEEPY&&n>s?this.wakeUp():t===i.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){let s=new M,r=new cn;return t&&s.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,s=0;for(let r=0;r!==n;r++){let o=e[r];o.updateBoundingSphereRadius();let a=t[r].length(),c=o.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,s=e.length,r=r2,o=o2,a=this.quaternion,c=this.aabb,l=a2;for(let h=0;h!==s;h++){let d=e[h];a.vmult(t[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){let n=c2,s=l2;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(t,n),n.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=u2;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==i.DYNAMIC)return;let n=d2,s=f2;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyForce(n,s)}applyTorque(e){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=t,s=p2;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=m2;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==i.DYNAMIC)return;let n=g2,s=y2;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,s),this.applyImpulse(n,s)}updateMassProperties(){let e=v2;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),co.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let g=d.elements,y=this.angularFactor,m=c.x*y.x,p=c.y*y.y,v=c.z*y.z;r.x+=e*(g[0]*m+g[1]*p+g[2]*v),r.y+=e*(g[3]*m+g[4]*p+g[5]*v),r.z+=e*(g[6]*m+g[7]*p+g[8]*v),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};We.idCounter=0;We.COLLIDE_EVENT_NAME="collide";We.DYNAMIC=Vp.DYNAMIC;We.STATIC=Vp.STATIC;We.KINEMATIC=Vp.KINEMATIC;We.AWAKE=Hp.AWAKE;We.SLEEPY=Hp.SLEEPY;We.SLEEPING=Hp.SLEEPING;We.wakeupEvent={type:"wakeup"};We.sleepyEvent={type:"sleepy"};We.sleepEvent={type:"sleep"};var r2=new M,o2=new cn,a2=new Tn,c2=new _s,l2=new _s,h2=new _s,u2=new M,d2=new M,f2=new M,p2=new M,m2=new M,g2=new M,y2=new M,v2=new M,kp=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&We.STATIC)!==0||e.sleepState===We.SLEEPING)&&((t.type&We.STATIC)!==0||t.sleepState===We.SLEEPING))}intersectionTest(e,t,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,s):this.doBoundingSphereBroadphase(e,t,n,s)}doBoundingSphereBroadphase(e,t,n,s){let r=x2;t.position.vsub(e.position,r);let o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,n,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),s.push(t))}makePairsUnique(e,t){let n=_2,s=b2,r=M2,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){let c=s[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];e.push(s[l]),t.push(r[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new M;e.position.vsub(t.position,n);let s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},x2=new M;new M;new cn;new M;var _2={keys:[]},b2=[],M2=[];new M;var y3=new M;new M;var zp=class extends kp{constructor(){super()}collisionPairs(e,t,n){let s=e.bodies,r=s.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=s[c],a=s[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let s=0;s<e.bodies.length;s++){let r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},lo=class{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},cx,lx,hx,ux,dx,fx,px,Gp={CLOSEST:1,ANY:2,ALL:4};cx=Ae.types.SPHERE;lx=Ae.types.PLANE;hx=Ae.types.BOX;ux=Ae.types.CYLINDER;dx=Ae.types.CONVEXPOLYHEDRON;fx=Ae.types.HEIGHTFIELD;px=Ae.types.TRIMESH;var Nn=class i{get[cx](){return this._intersectSphere}get[lx](){return this._intersectPlane}get[hx](){return this._intersectBox}get[ux](){return this._intersectConvex}get[dx](){return this._intersectConvex}get[fx](){return this._intersectHeightfield}get[px](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new lo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||i.ANY,this.result=t.result||new lo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB($v),Tp.length=0,e.broadphase.aabbQuery(e,$v,Tp),this.intersectBodies(Tp),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let s=S2,r=E2;for(let o=0,a=e.shapes.length;o<a;o++){let c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(c,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,s=e.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,s){let r=this.from;if(F2(r,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,s,e)}_intersectBox(e,t,n,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,s,r)}_intersectPlane(e,t,n,s,r){let o=this.from,a=this.to,c=this.direction,l=new M(0,0,1);t.vmult(l,l);let h=new M;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let g=new M,y=new M,m=new M;o.vsub(n,g);let p=-l.dot(g)/f;c.scale(p,y),o.vadd(y,m),this.reportIntersection(l,m,r,s,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,n,s,r){e.data,e.elementSize;let o=w2;o.from.copy(this.from),o.to.copy(this.to),lt.pointToLocalFrame(n,t,o.from,o.from),lt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();let a=A2,c,l,h,d;c=l=0,h=d=e.data.length-1;let u=new Tn;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(f,g,!1),lt.pointToWorldFrame(n,t,e.pillarOffset,jl),this._intersectConvex(e.pillarConvex,t,jl,s,r,Jv),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),lt.pointToWorldFrame(n,t,e.pillarOffset,jl),this._intersectConvex(e.pillarConvex,t,jl,s,r,Jv)}}}_intersectSphere(e,t,n,s,r){let o=this.from,a=this.to,c=e.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=T2,g=R2;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1);else{let y=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(y>=0&&y<=1&&(o.lerp(a,y,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1))}}_intersectConvex(e,t,n,s,r,o){let a=C2,c=Qv,l=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,g=this.from,y=this.to,m=g.distanceTo(y),p=l?l.length:h.length,v=this.result;for(let _=0;!v.shouldStop&&_<p;_++){let x=l?l[_]:_,T=h[x],w=u[x],R=t,P=n;c.copy(d[T[0]]),R.vmult(c,c),c.vadd(P,c),c.vsub(g,c),R.vmult(w,a);let E=f.dot(a);if(Math.abs(E)<this.precision)continue;let b=a.dot(c)/E;if(!(b<0)){f.scale(b,pn),pn.vadd(g,pn),Kn.copy(d[T[0]]),R.vmult(Kn,Kn),P.vadd(Kn,Kn);for(let k=1;!v.shouldStop&&k<T.length-1;k++){di.copy(d[T[k]]),fi.copy(d[T[k+1]]),R.vmult(di,di),R.vmult(fi,fi),P.vadd(di,di),P.vadd(fi,fi);let G=pn.distanceTo(g);!(i.pointInTriangle(pn,Kn,di,fi)||i.pointInTriangle(pn,di,Kn,fi))||G>m||this.reportIntersection(a,pn,r,s,x)}}}}_intersectTrimesh(e,t,n,s,r,o){let a=z2,c=B2,l=O2,h=Qv,d=P2,u=N2,f=L2,g=U2,y=D2,m=e.indices;e.vertices;let p=this.from,v=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(t),lt.vectorToLocalFrame(n,t,_,d),lt.pointToLocalFrame(n,t,p,u),lt.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();let x=u.distanceSquared(f);e.tree.rayQuery(this,l,c);for(let T=0,w=c.length;!this.result.shouldStop&&T!==w;T++){let R=c[T];e.getNormal(R,a),e.getVertex(m[R*3],Kn),Kn.vsub(u,h);let P=d.dot(a),E=a.dot(h)/P;if(E<0)continue;d.scale(E,pn),pn.vadd(u,pn),e.getVertex(m[R*3+1],di),e.getVertex(m[R*3+2],fi);let b=pn.distanceSquared(u);!(i.pointInTriangle(pn,di,Kn,fi)||i.pointInTriangle(pn,Kn,di,fi))||b>x||(lt.vectorToWorldFrame(t,a,y),lt.pointToWorldFrame(n,t,pn,g),this.reportIntersection(y,g,r,s,R))}c.length=0}reportIntersection(e,t,n,s,r){let o=this.from,a=this.to,c=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,l.set(o,a,e,t,n,s,c),l.hasHit=!0,this.callback(l);break;case i.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,s,c));break;case i.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,s,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,s){s.vsub(t,Js),n.vsub(t,za),e.vsub(t,Rp);let r=Js.dot(Js),o=Js.dot(za),a=Js.dot(Rp),c=za.dot(za),l=za.dot(Rp),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};Nn.CLOSEST=Gp.CLOSEST;Nn.ANY=Gp.ANY;Nn.ALL=Gp.ALL;var $v=new Tn,Tp=[],za=new M,Rp=new M,S2=new M,E2=new cn,pn=new M,Kn=new M,di=new M,fi=new M;new M;new lo;var Jv={faceList:[0]},jl=new M,w2=new Nn,A2=[],T2=new M,R2=new M,C2=new M,I2=new M,k2=new M,Qv=new M,z2=new M,P2=new M,N2=new M,L2=new M,D2=new M,U2=new M;new Tn;var B2=[],O2=new lt,Js=new M,Yl=new M;function F2(i,e,t){t.vsub(i,Js);let n=Js.dot(e);return e.scale(n,Yl),Yl.vadd(i,Yl),t.distanceTo(Yl)}var th=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},Pp=class i{constructor(e,t,n){n===void 0&&(n={}),n=th.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){let e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}};Pp.idCounter=0;var nh=class{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},Da=class i{constructor(e,t,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new nh,this.jacobianElementB=new nh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let s=t,r=e,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,c=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,c)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,c=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,c)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,c=s.torque,l=n.invMassSolve,h=s.invMassSolve;return r.scale(l,ex),a.scale(h,tx),n.invInertiaWorldSolve.vmult(o,nx),s.invInertiaWorldSolve.vmult(c,ix),e.multiplyVectors(ex,nx)+t.multiplyVectors(tx,ix)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,c=s.invInertiaWorldSolve,l=r+o;return a.vmult(e.rotational,Zl),l+=Zl.dot(e.rotational),c.vmult(t.rotational,Zl),l+=Zl.dot(t.rotational),l}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=V2;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Da.idCounter=0;var ex=new M,tx=new M,nx=new M,ix=new M,Zl=new M,V2=new M,Np=class extends Da{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){let t=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,c=H2,l=G2,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let g=W2,y=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(y.spatial),c.negate(y.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);let v=p.dot(g),_=this.restitution+1,x=_*u.dot(p)-_*h.dot(p)+f.dot(l)-d.dot(c),T=this.computeGiMf();return-v*t-x*n-e*T}getImpactVelocityAlongNormal(){let e=X2,t=q2,n=j2,s=Y2,r=Z2;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}},H2=new M,G2=new M,W2=new M,X2=new M,q2=new M,j2=new M,Y2=new M,Z2=new M;var v3=new M,x3=new M;var _3=new M,b3=new M;new M;new M;var M3=new M,S3=new M;var E3=new M,w3=new M,ih=class extends Da{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=K2,o=$2,a=this.t;n.cross(a,r),s.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}},K2=new M,$2=new M,sh=class i{constructor(e,t,n){n=th.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};sh.idCounter=0;var rh=class i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}};rh.idCounter=0;var A3=new M,T3=new M,R3=new M,C3=new M,I3=new M,k3=new M,z3=new M,P3=new M,N3=new M,L3=new M,D3=new M;var U3=new M,B3=new M;new M;new M;new M;var O3=new M,F3=new M,V3=new M;new Nn;new M;var H3=new M,G3=new M,W3=[new M(1,0,0),new M(0,1,0),new M(0,0,1)],X3=new M;var q3=new M,j3=new M,Y3=new M;var Z3=new M,K3=new M,$3=new M,J3=new M;var Q3=new M,eN=new M,tN=new M;var nN=new M,iN=new M;var sN=new M,rN=new M,oN=new M,aN=new M,cN=new M,lN=new M,hN=new M,Ua=class extends eh{constructor(e,t,n,s){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),s===void 0&&(s=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=s,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new M(-t*u(0),-n*.5,t*d(0))),l.push(0),o.push(new M(-e*u(0),n*.5,e*d(0))),h.push(1);for(let g=0;g<r;g++){let y=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new M(-t*u(y),-n*.5,t*d(y))),l.push(2*g+2),o.push(new M(-e*u(y),n*.5,e*d(y))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new M(-u(m),0,d(m)))}c.push(l),a.push(new M(0,1,0));let f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=Ae.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=s}};var uN=new M;var dN=new M,fN=new M,pN=new M,mN=new M,gN=new M,yN=new M,vN=new M,xN=new M,_N=new M;var bN=new M,MN=new Tn;var SN=new M,EN=new Tn,wN=new M,AN=new M,TN=new M,RN=new M,CN=new M,IN=new M,kN=new M,zN=new Tn,PN=new M,NN=new lt,LN=new Tn,Lp=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},Dp=class extends Lp{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=t.bodies,l=c.length,h=e,d,u,f,g,y,m;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();let p=Q2,v=eC,_=J2;p.length=a,v.length=a,_.length=a;for(let x=0;x!==a;x++){let T=o[x];_[x]=0,v[x]=T.computeB(h),p[x]=1/T.computeC()}if(a!==0){for(let w=0;w!==l;w++){let R=c[w],P=R.vlambda,E=R.wlambda;P.set(0,0,0),E.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let w=0;w!==a;w++){let R=o[w];d=v[w],u=p[w],m=_[w],y=R.computeGWlambda(),f=u*(d-y-R.eps*m),m+f<R.minForce?f=R.minForce-m:m+f>R.maxForce&&(f=R.maxForce-m),_[w]+=f,g+=f>0?f:-f,R.addToWlambda(f)}if(g*g<r)break}for(let w=0;w!==l;w++){let R=c[w],P=R.velocity,E=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),P.vadd(R.vlambda,P),R.wlambda.vmul(R.angularFactor,R.wlambda),E.vadd(R.wlambda,E)}let x=o.length,T=1/h;for(;x--;)o[x].multiplier=_[x]*T}return n}},J2=[],Q2=[],eC=[];var DN=We.STATIC;var Up=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},Bp=class extends Up{constructor(){super(...arguments),this.type=M}constructObject(){return new M}},_t={sphereSphere:Ae.types.SPHERE,spherePlane:Ae.types.SPHERE|Ae.types.PLANE,boxBox:Ae.types.BOX|Ae.types.BOX,sphereBox:Ae.types.SPHERE|Ae.types.BOX,planeBox:Ae.types.PLANE|Ae.types.BOX,convexConvex:Ae.types.CONVEXPOLYHEDRON,sphereConvex:Ae.types.SPHERE|Ae.types.CONVEXPOLYHEDRON,planeConvex:Ae.types.PLANE|Ae.types.CONVEXPOLYHEDRON,boxConvex:Ae.types.BOX|Ae.types.CONVEXPOLYHEDRON,sphereHeightfield:Ae.types.SPHERE|Ae.types.HEIGHTFIELD,boxHeightfield:Ae.types.BOX|Ae.types.HEIGHTFIELD,convexHeightfield:Ae.types.CONVEXPOLYHEDRON|Ae.types.HEIGHTFIELD,sphereParticle:Ae.types.PARTICLE|Ae.types.SPHERE,planeParticle:Ae.types.PLANE|Ae.types.PARTICLE,boxParticle:Ae.types.BOX|Ae.types.PARTICLE,convexParticle:Ae.types.PARTICLE|Ae.types.CONVEXPOLYHEDRON,cylinderCylinder:Ae.types.CYLINDER,sphereCylinder:Ae.types.SPHERE|Ae.types.CYLINDER,planeCylinder:Ae.types.PLANE|Ae.types.CYLINDER,boxCylinder:Ae.types.BOX|Ae.types.CYLINDER,convexCylinder:Ae.types.CONVEXPOLYHEDRON|Ae.types.CYLINDER,heightfieldCylinder:Ae.types.HEIGHTFIELD|Ae.types.CYLINDER,particleCylinder:Ae.types.PARTICLE|Ae.types.CYLINDER,sphereTrimesh:Ae.types.SPHERE|Ae.types.TRIMESH,planeTrimesh:Ae.types.PLANE|Ae.types.TRIMESH},Op=class{get[_t.sphereSphere](){return this.sphereSphere}get[_t.spherePlane](){return this.spherePlane}get[_t.boxBox](){return this.boxBox}get[_t.sphereBox](){return this.sphereBox}get[_t.planeBox](){return this.planeBox}get[_t.convexConvex](){return this.convexConvex}get[_t.sphereConvex](){return this.sphereConvex}get[_t.planeConvex](){return this.planeConvex}get[_t.boxConvex](){return this.boxConvex}get[_t.sphereHeightfield](){return this.sphereHeightfield}get[_t.boxHeightfield](){return this.boxHeightfield}get[_t.convexHeightfield](){return this.convexHeightfield}get[_t.sphereParticle](){return this.sphereParticle}get[_t.planeParticle](){return this.planeParticle}get[_t.boxParticle](){return this.boxParticle}get[_t.convexParticle](){return this.convexParticle}get[_t.cylinderCylinder](){return this.convexConvex}get[_t.sphereCylinder](){return this.sphereConvex}get[_t.planeCylinder](){return this.planeConvex}get[_t.boxCylinder](){return this.boxConvex}get[_t.convexCylinder](){return this.convexConvex}get[_t.heightfieldCylinder](){return this.heightfieldCylinder}get[_t.particleCylinder](){return this.particleCylinder}get[_t.sphereTrimesh](){return this.sphereTrimesh}get[_t.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Bp,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Np(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&s.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||e.material,h=s.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){let n=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,y=g.length?g.pop():new ih(n,s,u*f),m=g.length?g.pop():new ih(n,s,u*f);return y.bi=m.bi=n,y.bj=m.bj=s,y.minForce=m.minForce=-u*f,y.maxForce=m.maxForce=u*f,y.ri.copy(e.ri),y.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(y.t,m.t),y.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),y.enabled=m.enabled=e.enabled,t.push(y,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];$s.setZero(),oo.setZero(),ao.setZero();let r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?($s.vadd(t.ni,$s),oo.vadd(t.ri,oo),ao.vadd(t.rj,ao)):($s.vsub(t.ni,$s),oo.vadd(t.rj,oo),ao.vadd(t.ri,ao));let o=1/e;oo.scale(o,n.ri),ao.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),$s.normalize(),$s.tangents(n.t,s.t)}getContacts(e,t,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let c=iC,l=sC,h=tC,d=nC;for(let u=0,f=e.length;u!==f;u++){let g=e[u],y=t[u],m=null;g.material&&y.material&&(m=n.getContactMaterial(g.material,y.material)||null);let p=g.type&We.KINEMATIC&&y.type&We.STATIC||g.type&We.STATIC&&y.type&We.KINEMATIC||g.type&We.KINEMATIC&&y.type&We.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);let _=g.shapes[v];for(let x=0;x<y.shapes.length;x++){y.quaternion.mult(y.shapeOrientations[x],l),y.quaternion.vmult(y.shapeOffsets[x],d),d.vadd(y.position,d);let T=y.shapes[x];if(!(_.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+T.boundingSphereRadius)continue;let w=null;_.material&&T.material&&(w=n.getContactMaterial(_.material,T.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;let R=_.type|T.type,P=this[R];if(P){let E=!1;_.type<T.type?E=P.call(this,_,T,h,d,c,l,g,y,_,T,p):E=P.call(this,T,_,d,h,l,c,y,g,_,T,p),E&&p&&(n.shapeOverlapKeeper.set(_.id,T.id),n.bodyOverlapKeeper.set(g.id,y.id))}}}}}sphereSphere(e,t,n,s,r,o,a,c,l,h,d){if(d)return n.distanceSquared(s)<(e.radius+t.radius)**2;let u=this.createContactEquation(a,c,e,t,l,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,s,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,e,t,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(s,Kl),u.ni.scale(u.ni.dot(Kl),sx),Kl.vsub(sx,u.rj),-Kl.dot(u.ni)<=e.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,s,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,s,r,o,a,c,e,t,d)}sphereBox(e,t,n,s,r,o,a,c,l,h,d){let u=this.v3pool,f=IC;n.vsub(s,$l),t.getSideNormals(f,o);let g=e.radius,y=!1,m=zC,p=PC,v=NC,_=null,x=0,T=0,w=0,R=null;for(let L=0,Y=f.length;L!==Y&&y===!1;L++){let O=TC;O.copy(f[L]);let j=O.length();O.normalize();let ee=$l.dot(O);if(ee<j+g&&ee>0){let $=RC,J=CC;$.copy(f[(L+1)%3]),J.copy(f[(L+2)%3]);let Me=$.length(),q=J.length();$.normalize(),J.normalize();let ne=$l.dot($),ye=$l.dot(J);if(ne<Me&&ne>-Me&&ye<q&&ye>-q){let re=Math.abs(ee-j-g);if((R===null||re<R)&&(R=re,T=ne,w=ye,_=j,m.copy(O),p.copy($),v.copy(J),x++,d))return!0}}}if(x){y=!0;let L=this.createContactEquation(a,c,e,t,l,h);m.scale(-g,L.ri),L.ni.copy(m),L.ni.negate(L.ni),m.scale(_,m),p.scale(T,p),m.vadd(p,m),v.scale(w,v),m.vadd(v,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.vadd(s,L.rj),L.rj.vsub(c.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}let P=u.get(),E=kC;for(let L=0;L!==2&&!y;L++)for(let Y=0;Y!==2&&!y;Y++)for(let O=0;O!==2&&!y;O++)if(P.set(0,0,0),L?P.vadd(f[0],P):P.vsub(f[0],P),Y?P.vadd(f[1],P):P.vsub(f[1],P),O?P.vadd(f[2],P):P.vsub(f[2],P),s.vadd(P,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;y=!0;let j=this.createContactEquation(a,c,e,t,l,h);j.ri.copy(E),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(P),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(s,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(P),P=null;let b=u.get(),k=u.get(),G=u.get(),z=u.get(),D=u.get(),U=f.length;for(let L=0;L!==U&&!y;L++)for(let Y=0;Y!==U&&!y;Y++)if(L%3!==Y%3){f[Y].cross(f[L],b),b.normalize(),f[L].vadd(f[Y],k),G.copy(n),G.vsub(k,G),G.vsub(s,G);let O=G.dot(b);b.scale(O,z);let j=0;for(;j===L%3||j===Y%3;)j++;D.copy(n),D.vsub(z,D),D.vsub(k,D),D.vsub(s,D);let ee=Math.abs(O),$=D.length();if(ee<f[j].length()&&$<g){if(d)return!0;y=!0;let J=this.createContactEquation(a,c,e,t,l,h);k.vadd(z,J.rj),J.rj.copy(J.rj),D.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(s,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(g,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(s,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}u.release(b,k,G,z,D)}planeBox(e,t,n,s,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,s,r,o,a,c,e,t,d)}convexConvex(e,t,n,s,r,o,a,c,l,h,d,u,f){let g=ZC;if(!(n.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,s,o,g,u,f)){let y=[],m=KC;e.clipAgainstHull(n,r,t,s,o,g,-100,100,y);let p=0;for(let v=0;v!==y.length;v++){if(d)return!0;let _=this.createContactEquation(a,c,e,t,l,h),x=_.ri,T=_.rj;g.negate(_.ni),y[v].normal.negate(m),m.scale(y[v].depth,m),y[v].point.vadd(m,x),T.copy(y[v].point),x.vsub(n,x),T.vsub(s,T),x.vadd(n,x),x.vsub(a.position,x),T.vadd(s,T),T.vsub(c.position,T),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,s,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(s,LC);let f=t.faceNormals,g=t.faces,y=t.vertices,m=e.radius,p=!1;for(let v=0;v!==y.length;v++){let _=y[v],x=OC;o.vmult(_,x),s.vadd(x,x);let T=BC;if(x.vsub(n,T),T.lengthSquared()<m*m){if(d)return!0;p=!0;let w=this.createContactEquation(a,c,e,t,l,h);w.ri.copy(T),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),x.vsub(s,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(s,w.rj),w.rj.vsub(c.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let v=0,_=g.length;v!==_&&p===!1;v++){let x=f[v],T=g[v],w=FC;o.vmult(x,w);let R=VC;o.vmult(y[T[0]],R),R.vadd(s,R);let P=HC;w.scale(-m,P),n.vadd(P,P);let E=GC;P.vsub(R,E);let b=E.dot(w),k=WC;if(n.vsub(R,k),b<0&&k.dot(w)>0){let G=[];for(let z=0,D=T.length;z!==D;z++){let U=u.get();o.vmult(y[T[z]],U),s.vadd(U,U),G.push(U)}if(AC(G,w,n)){if(d)return!0;p=!0;let z=this.createContactEquation(a,c,e,t,l,h);w.scale(-m,z.ri),w.negate(z.ni);let D=u.get();w.scale(-b,D);let U=u.get();w.scale(-m,U),n.vsub(s,z.rj),z.rj.vadd(U,z.rj),z.rj.vadd(D,z.rj),z.rj.vadd(s,z.rj),z.rj.vsub(c.position,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),u.release(D),u.release(U),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let L=0,Y=G.length;L!==Y;L++)u.release(G[L]);return}else for(let z=0;z!==T.length;z++){let D=u.get(),U=u.get();o.vmult(y[T[(z+1)%T.length]],D),o.vmult(y[T[(z+2)%T.length]],U),s.vadd(D,D),s.vadd(U,U);let L=DC;U.vsub(D,L);let Y=UC;L.unit(Y);let O=u.get(),j=u.get();n.vsub(D,j);let ee=j.dot(Y);Y.scale(ee,O),O.vadd(D,O);let $=u.get();if(O.vsub(n,$),ee>0&&ee*ee<L.lengthSquared()&&$.lengthSquared()<m*m){if(d)return!0;let J=this.createContactEquation(a,c,e,t,l,h);O.vsub(s,J.rj),O.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(m,J.ri),J.rj.vadd(s,J.rj),J.rj.vsub(c.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let Me=0,q=G.length;Me!==q;Me++)u.release(G[Me]);u.release(D),u.release(U),u.release(O),u.release($),u.release(j);return}u.release(D),u.release(U),u.release(O),u.release($),u.release(j)}for(let z=0,D=G.length;z!==D;z++)u.release(G[z])}}}planeConvex(e,t,n,s,r,o,a,c,l,h,d){let u=XC,f=qC;f.set(0,0,1),r.vmult(f,f);let g=0,y=jC;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(n,y),f.dot(y)<=0){if(d)return!0;let v=this.createContactEquation(a,c,e,t,l,h),_=YC;f.scale(f.dot(y),_),u.vsub(_,_),_.vsub(n,v.ri),v.ni.copy(f),u.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,s,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,s,r,o,a,c,e,t,d)}sphereHeightfield(e,t,n,s,r,o,a,c,l,h,d){let u=t.data,f=e.radius,g=t.elementSize,y=cI,m=aI;lt.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-f)/g)-1,v=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(v<0||x<0||p>u.length||_>u[0].length)return;p<0&&(p=0),v<0&&(v=0),_<0&&(_=0),x<0&&(x=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),x>=u[0].length&&(x=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let T=[];t.getRectMinMax(p,_,v,x,T);let w=T[0],R=T[1];if(m.z-f>R||m.z+f<w)return;let P=this.result;for(let E=p;E<v;E++)for(let b=_;b<x;b++){let k=P.length,G=!1;if(t.getConvexTrianglePillar(E,b,!1),lt.pointToWorldFrame(s,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,n,y,r,o,a,c,e,t,d)),d&&G||(t.getConvexTrianglePillar(E,b,!0),lt.pointToWorldFrame(s,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.sphereConvex(e,t.pillarConvex,n,y,r,o,a,c,e,t,d)),d&&G))return!0;if(P.length-k>2)return}}boxHeightfield(e,t,n,s,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,s,r,o,a,c,e,t,d)}convexHeightfield(e,t,n,s,r,o,a,c,l,h,d){let u=t.data,f=t.elementSize,g=e.boundingSphereRadius,y=rI,m=oI,p=sI;lt.pointToLocalFrame(s,o,n,p);let v=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,T=Math.ceil((p.y+g)/f)+1;if(_<0||T<0||v>u.length||x>u[0].length)return;v<0&&(v=0),_<0&&(_=0),x<0&&(x=0),T<0&&(T=0),v>=u.length&&(v=u.length-1),_>=u.length&&(_=u.length-1),T>=u[0].length&&(T=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);let w=[];t.getRectMinMax(v,x,_,T,w);let R=w[0],P=w[1];if(!(p.z-g>P||p.z+g<R))for(let E=v;E<_;E++)for(let b=x;b<T;b++){let k=!1;if(t.getConvexTrianglePillar(E,b,!1),lt.pointToWorldFrame(s,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.convexConvex(e,t.pillarConvex,n,y,r,o,a,c,null,null,d,m,null)),d&&k||(t.getConvexTrianglePillar(E,b,!0),lt.pointToWorldFrame(s,o,t.pillarOffset,y),n.distanceTo(y)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.convexConvex(e,t.pillarConvex,n,y,r,o,a,c,null,null,d,m,null)),d&&k))return!0}}sphereParticle(e,t,n,s,r,o,a,c,l,h,d){let u=eI;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;let g=this.createContactEquation(c,a,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,s,r,o,a,c,l,h,d){let u=$C;u.set(0,0,1),a.quaternion.vmult(u,u);let f=JC;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let y=this.createContactEquation(c,a,t,e,l,h);y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0);let m=QC;u.scale(u.dot(s),m),s.vsub(m,m),y.rj.copy(m),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}boxParticle(e,t,n,s,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,s,r,o,a,c,e,t,d)}convexParticle(e,t,n,s,r,o,a,c,l,h,d){let u=-1,f=nI,g=iI,y=null,m=tI;if(m.copy(s),m.vsub(n,m),r.conjugate(rx),rx.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let p=0,v=e.faces.length;p!==v;p++){let _=[e.worldVertices[e.faces[p][0]]],x=e.worldFaceNormals[p];s.vsub(_[0],ox);let T=-x.dot(ox);if(y===null||Math.abs(T)<Math.abs(y)){if(d)return!0;y=T,u=p,f.copy(x)}}if(u!==-1){let p=this.createContactEquation(c,a,t,e,l,h);f.scale(y,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let v=p.ri,_=p.rj;v.vadd(s,v),v.vsub(c.position,v),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,s,r,o,a,c,l,h,d){return this.convexHeightfield(t,e,s,n,o,r,c,a,l,h,d)}particleCylinder(e,t,n,s,r,o,a,c,l,h,d){return this.convexParticle(t,e,s,n,o,r,c,a,l,h,d)}sphereTrimesh(e,t,n,s,r,o,a,c,l,h,d){let u=dC,f=fC,g=pC,y=mC,m=gC,p=yC,v=bC,_=uC,x=lC,T=MC;lt.pointToLocalFrame(s,o,n,m);let w=e.radius;v.lowerBound.set(m.x-w,m.y-w,m.z-w),v.upperBound.set(m.x+w,m.y+w,m.z+w),t.getTrianglesInAABB(v,T);let R=hC,P=e.radius*e.radius;for(let z=0;z<T.length;z++)for(let D=0;D<3;D++)if(t.getVertex(t.indices[T[z]*3+D],R),R.vsub(m,x),x.lengthSquared()<=P){if(_.copy(R),lt.pointToWorldFrame(s,o,_,R),R.vsub(n,x),d)return!0;let U=this.createContactEquation(a,c,e,t,l,h);U.ni.copy(x),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(R),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let z=0;z<T.length;z++)for(let D=0;D<3;D++){t.getVertex(t.indices[T[z]*3+D],u),t.getVertex(t.indices[T[z]*3+(D+1)%3],f),f.vsub(u,g),m.vsub(f,p);let U=p.dot(g);m.vsub(u,p);let L=p.dot(g);if(L>0&&U<0&&(m.vsub(u,p),y.copy(g),y.normalize(),L=p.dot(y),y.scale(L,p),p.vadd(u,p),p.distanceTo(m)<e.radius)){if(d)return!0;let O=this.createContactEquation(a,c,e,t,l,h);p.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(e.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),lt.pointToWorldFrame(s,o,p,p),p.vsub(c.position,O.rj),lt.vectorToWorldFrame(o,O.ni,O.ni),lt.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}let E=vC,b=xC,k=_C,G=cC;for(let z=0,D=T.length;z!==D;z++){t.getTriangleVertices(T[z],E,b,k),t.getNormal(T[z],G),m.vsub(E,p);let U=p.dot(G);if(G.scale(U,p),m.vsub(p,p),U=p.distanceTo(m),Nn.pointInTriangle(p,E,b,k)&&U<e.radius){if(d)return!0;let L=this.createContactEquation(a,c,e,t,l,h);p.vsub(m,L.ni),L.ni.normalize(),L.ni.scale(e.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),lt.pointToWorldFrame(s,o,p,p),p.vsub(c.position,L.rj),lt.vectorToWorldFrame(o,L.ni,L.ni),lt.vectorToWorldFrame(o,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}T.length=0}planeTrimesh(e,t,n,s,r,o,a,c,l,h,d){let u=new M,f=rC;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);let y=new M;y.copy(u),lt.pointToWorldFrame(s,o,y,u);let m=oC;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let v=this.createContactEquation(a,c,e,t,l,h);v.ni.copy(f);let _=aC;f.scale(m.dot(f),_),u.vsub(_,_),v.ri.copy(_),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},$s=new M,oo=new M,ao=new M,tC=new M,nC=new M,iC=new cn,sC=new cn,rC=new M,oC=new M,aC=new M,cC=new M,lC=new M;new M;var hC=new M,uC=new M,dC=new M,fC=new M,pC=new M,mC=new M,gC=new M,yC=new M,vC=new M,xC=new M,_C=new M,bC=new Tn,MC=[],Kl=new M,sx=new M,SC=new M,EC=new M,wC=new M;function AC(i,e,t){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=SC;i[(r+1)%s].vsub(o,a);let c=EC;a.cross(e,c);let l=wC;t.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var $l=new M,TC=new M,RC=new M,CC=new M,IC=[new M,new M,new M,new M,new M,new M],kC=new M,zC=new M,PC=new M,NC=new M,LC=new M,DC=new M,UC=new M,BC=new M,OC=new M,FC=new M,VC=new M,HC=new M,GC=new M,WC=new M;new M;new M;var XC=new M,qC=new M,jC=new M,YC=new M,ZC=new M,KC=new M,$C=new M,JC=new M,QC=new M,eI=new M,rx=new cn,tI=new M;new M;var nI=new M,ox=new M,iI=new M,sI=new M,rI=new M,oI=[0],aI=new M,cI=new M,oh=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>s[a];)a++;l=h===s[a],l||ax(e,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=s[c];for(;h>n[a];)a++;l=n[a]===h,l||ax(t,h)}}};function ax(i,e){i.push((e&4294901760)>>16,e&65535)}var Cp=(i,e)=>i<e?`${i}-${e}`:`${e}-${i}`,Fp=class{constructor(){this.data={keys:[]}}get(e,t){let n=Cp(e,t);return this.data[n]}set(e,t,n){let s=Cp(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=n}delete(e,t){let n=Cp(e,t),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},ah=class extends Ql{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new zp,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Dp,this.constraints=[],this.narrowphase=new Op(this),this.collisionMatrix=new Jl,this.collisionMatrixPrevious=new Jl,this.bodyOverlapKeeper=new oh,this.shapeOverlapKeeper=new oh,this.contactmaterials=[],this.contactMaterialTable=new Fp,this.defaultMaterial=new rh("default"),this.defaultContactMaterial=new sh(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof lo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,s){return n===void 0&&(n={}),n.mode=Nn.ALL,n.from=e,n.to=t,n.callback=s,Ip.intersectWorld(this,n)}raycastAny(e,t,n,s){return n===void 0&&(n={}),n.mode=Nn.ANY,n.from=e,n.to=t,n.result=s,Ip.intersectWorld(this,n)}raycastClosest(e,t,n,s){return n===void 0&&(n={}),n.mode=Nn.CLOSEST,n.from=e,n.to=t,n.result=s,Ip.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof We&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,s=n.indexOf(e);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let s=t[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=Vt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let s=n-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let s=Vt.now(),r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Vt.now()-s>e*1e3)););this.accumulator=this.accumulator%e;let o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=fI,s=pI,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=We.DYNAMIC,u=-1/0,f=this.constraints,g=dI;c.length();let y=c.x,m=c.y,p=c.z,v=0;for(l&&(u=Vt.now()),v=0;v!==r;v++){let z=o[v];if(z.type===d){let D=z.force,U=z.mass;D.x+=U*y,D.y+=U*m,D.z+=U*p}}for(let z=0,D=this.subsystems.length;z!==D;z++)this.subsystems[z].update();l&&(u=Vt.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),l&&(h.broadphase=Vt.now()-u);let _=f.length;for(v=0;v!==_;v++){let z=f[v];if(!z.collideConnected)for(let D=n.length-1;D>=0;D-=1)(z.bodyA===n[D]&&z.bodyB===s[D]||z.bodyB===n[D]&&z.bodyA===s[D])&&(n.splice(D,1),s.splice(D,1))}this.collisionMatrixTick(),l&&(u=Vt.now());let x=uI,T=t.length;for(v=0;v!==T;v++)x.push(t[v]);t.length=0;let w=this.frictionEquations.length;for(v=0;v!==w;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,t,x,this.frictionEquations,g),l&&(h.narrowphase=Vt.now()-u),l&&(u=Vt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let R=t.length;for(let z=0;z!==R;z++){let D=t[z],U=D.bi,L=D.bj,Y=D.si,O=D.sj,j;if(U.material&&L.material?j=this.getContactMaterial(U.material,L.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,U.material&&L.material&&(U.material.friction>=0&&L.material.friction>=0&&U.material.friction*L.material.friction,U.material.restitution>=0&&L.material.restitution>=0&&(D.restitution=U.material.restitution*L.material.restitution)),a.addEquation(D),U.allowSleep&&U.type===We.DYNAMIC&&U.sleepState===We.SLEEPING&&L.sleepState===We.AWAKE&&L.type!==We.STATIC){let ee=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),$=L.sleepSpeedLimit**2;ee>=$*2&&(U.wakeUpAfterNarrowphase=!0)}if(L.allowSleep&&L.type===We.DYNAMIC&&L.sleepState===We.SLEEPING&&U.sleepState===We.AWAKE&&U.type!==We.STATIC){let ee=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),$=U.sleepSpeedLimit**2;ee>=$*2&&(L.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,L,!0),this.collisionMatrixPrevious.get(U,L)||(Pa.body=L,Pa.contact=D,U.dispatchEvent(Pa),Pa.body=U,L.dispatchEvent(Pa)),this.bodyOverlapKeeper.set(U.id,L.id),this.shapeOverlapKeeper.set(Y.id,O.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Vt.now()-u,u=Vt.now()),v=0;v!==r;v++){let z=o[v];z.wakeUpAfterNarrowphase&&(z.wakeUp(),z.wakeUpAfterNarrowphase=!1)}for(_=f.length,v=0;v!==_;v++){let z=f[v];z.update();for(let D=0,U=z.equations.length;D!==U;D++){let L=z.equations[D];a.addEquation(L)}}a.solve(e,this),l&&(h.solve=Vt.now()-u),a.removeAllEquations();let P=Math.pow;for(v=0;v!==r;v++){let z=o[v];if(z.type&d){let D=P(1-z.linearDamping,e),U=z.velocity;U.scale(D,U);let L=z.angularVelocity;if(L){let Y=P(1-z.angularDamping,e);L.scale(Y,L)}}}this.dispatchEvent(hI),l&&(u=Vt.now());let b=this.stepnumber%(this.quatNormalizeSkip+1)===0,k=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(e,b,k);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Vt.now()-u),this.stepnumber+=1,this.dispatchEvent(lI);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==r;v++){let z=o[v];z.sleepTick(this.time),z.sleepState!==We.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Vi,Hi),e){for(let r=0,o=Vi.length;r<o;r+=2)Na.bodyA=this.getBodyById(Vi[r]),Na.bodyB=this.getBodyById(Vi[r+1]),this.dispatchEvent(Na);Na.bodyA=Na.bodyB=null}if(t){for(let r=0,o=Hi.length;r<o;r+=2)La.bodyA=this.getBodyById(Hi[r]),La.bodyB=this.getBodyById(Hi[r+1]),this.dispatchEvent(La);La.bodyA=La.bodyB=null}Vi.length=Hi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Vi,Hi),n){for(let r=0,o=Vi.length;r<o;r+=2){let a=this.getShapeById(Vi[r]),c=this.getShapeById(Vi[r+1]);Gi.shapeA=a,Gi.shapeB=c,a&&(Gi.bodyA=a.body),c&&(Gi.bodyB=c.body),this.dispatchEvent(Gi)}Gi.bodyA=Gi.bodyB=Gi.shapeA=Gi.shapeB=null}if(s){for(let r=0,o=Hi.length;r<o;r+=2){let a=this.getShapeById(Hi[r]),c=this.getShapeById(Hi[r+1]);Wi.shapeA=a,Wi.shapeB=c,a&&(Wi.bodyA=a.body),c&&(Wi.bodyB=c.body),this.dispatchEvent(Wi)}Wi.bodyA=Wi.bodyB=Wi.shapeA=Wi.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let s=e[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Tn;var Ip=new Nn,Vt=globalThis.performance||{};if(!Vt.now){let i=Date.now();Vt.timing&&Vt.timing.navigationStart&&(i=Vt.timing.navigationStart),Vt.now=()=>Date.now()-i}new M;var lI={type:"postStep"},hI={type:"preStep"},Pa={type:We.COLLIDE_EVENT_NAME,body:null,contact:null},uI=[],dI=[],fI=[],pI=[],Vi=[],Hi=[],Na={type:"beginContact",bodyA:null,bodyB:null},La={type:"endContact",bodyA:null,bodyB:null},Gi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Wi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var gI={gravitace:2800,vaha:1,treni:.4},yI=110,Xi={...gI};function gx(i){if(Xi={...Xi,...i},delete Xi.sila,!!en){en.gravity.set(0,-Xi.gravitace,0),en.defaultContactMaterial.friction=Xi.treni;for(let e of bs)xx(e),e.wakeUp()}}var vI=1/60,en=null,bs=[];function Wp(){en=new ah({gravity:new M(0,-Xi.gravitace,0)}),en.allowSleep=!0,Sx++,en.defaultContactMaterial.friction=Xi.treni,en.defaultContactMaterial.restitution=.05,bs=[]}function yx(){en=null,bs=[]}var vx=4;function Xp(i,e=!1){let t=new We({mass:0,collisionFilterGroup:e?vx:1,shape:new co(new M((i.max.x-i.min.x)/2,(i.max.y-i.min.y)/2,(i.max.z-i.min.z)/2)),position:new M((i.min.x+i.max.x)/2,(i.min.y+i.max.y)/2,(i.min.z+i.max.z)/2)});return en.addBody(t),t}function xx(i){let e=i.zaklad,t=e.hmotnost*Xi.vaha;if(i.mass=t,i.updateMassProperties(),e.valec){let n=t*(3*e.polomer*e.polomer+e.vyska*e.vyska)/12;i.inertia.set(n,t*e.polomer*e.polomer/2,n),i.invInertia.set(1/i.inertia.x,1/i.inertia.y,1/i.inertia.z)}i.updateInertiaWorld(!0)}function _x({valec:i,polomer:e,pul:t,stred:n,quat:s,hmotnost:r,bezKachen:o=!1,hat:a=!1}){let c=new We({mass:r*Xi.vaha,collisionFilterMask:a?~vx:o?~bx:-1,shape:i?new Ua(e,e,t.y*2,10):new co(new M(t.x,t.y,t.z)),position:new M(n.x,n.y,n.z),linearDamping:.12,angularDamping:.25,sleepSpeedLimit:6,sleepTimeLimit:.4});return c.quaternion.set(s.x,s.y,s.z,s.w),c.zaklad={hmotnost:r,valec:i,polomer:e,vyska:t.y*2},xx(c),en.addBody(c),c.sleep(),bs.push(c),c}var bx=2;function Mx(i,e,t){let n=new We({mass:0,collisionFilterGroup:bx,shape:new Ua(e,e,t,10),position:new M(i.x,i.y,i.z)});return en.addBody(n),n}function qp(){return!!en}var Sx=0;function lh(){return Sx}function hh(i){if(!en)return;en.removeBody(i);let e=bs.indexOf(i);e>=0&&bs.splice(e,1)}var ch=.5,xI=2e3,$n=new M,mx=new M;function Ex(i,e,t,n=1,s=null){let r=Math.hypot(t.x,t.y,t.z);$n.set(t.x,t.y*.25,t.z);let o=$n.length();o<1e-6||s&&($n.scale((1-ch)/o,$n),$n.x-=s.x*ch,$n.y-=s.y*ch,$n.z-=s.z*ch,o=$n.length(),o<1e-6)||($n.scale(yI*n*Math.min(3,r/xI)/o,$n),mx.set(e.x-i.position.x,e.y-i.position.y,e.z-i.position.z),i.wakeUp(),i.applyImpulse($n,mx))}function wx(i){if(!en)return!1;let e=!1;for(let t=0;t<bs.length;t++)if(bs[t].sleepState!==We.SLEEPING){e=!0;break}return e?(en.step(vI,i,3),!0):!1}var qi={verze:1,poznamka:"Bojov\xE9 \xFAseky. P\xED\u0161e je m\u0159\xED\u017Ekov\xFD editor v nastroje/balance.html (re\u017Eim Level), hra je bude \u010D\xEDst. M\u0159\xED\u017Eka: 5 sloupc\u016F A\u2013E po 27 cm, patra 0\u20134 po 45 cm; hern\xED jsou patra 1\u20133 (GDD 3.5).",useky:[{jmeno:"usek_01",police:[{patro:0,od:0,do:4},{patro:1,od:0,do:4},{patro:2,od:0,do:4},{patro:3,od:0,do:4},{patro:4,od:0,do:4}],kachny:[{patro:2,sloupec:3,objeveni:2.3,mince:3,po:{patro:3,sloupec:1,zpozdeni:.2},venku:4.6,voda:2},{patro:1,sloupec:4,objeveni:7.5,mince:0,po:{patro:1,sloupec:0,zpozdeni:.2},venku:4.7,voda:2},{patro:1,sloupec:0,objeveni:4.6,mince:2,po:{patro:2,sloupec:3,zpozdeni:.2},venku:4.7,voda:2},{patro:3,sloupec:1,objeveni:0,mince:0,venku:4.7,voda:2}],zada:{seminko:40,pruh:.27,jednotka:.225,pasma:[{jmeno:"bar",vyska:4,typy:["bar_a","bar_b","bar_c"],dvojite:.6,nejdelsi:5,celych:1,diry:0,patina:["#6b8fa8","#7a4a8c","#b8506e","#5f7f9a"],patinaSila:1.5,stin:.55,rimsa:"pult"},{jmeno:"hra",vyska:8,typy:["hra_a","hra_b","hra_c"],dvojite:0,nejdelsi:5,celych:1,diry:0,otvor:{od:-2,do:0},patina:["#7d2f25","#c8703a"],kresba:"jemna",rimsa:"tram"},{jmeno:"vrch",vyska:4,typy:["vrch_a","vrch_b","vrch_c"],dvojite:.5,nejdelsi:5,celych:.7,diry:0,patina:["#c9744f","#d79a8a","#5f7f80"]}]},rekvizity:[{typ:"glass_striped",patro:4,misto:1},{typ:"glass_clear",patro:4,misto:2},{typ:"bottle_amber",patro:4,misto:5},{typ:"bottle_green",patro:4,misto:8},{typ:"glass_clear",patro:3,misto:4},{typ:"glass_striped",patro:3,misto:8},{typ:"glass_striped",patro:2,misto:9},{typ:"bottle_green",patro:0,misto:0},{typ:"bottle_green",patro:2,misto:3},{typ:"cactus_pot",patro:1,misto:2},{typ:"bottle_amber",patro:0,misto:6},{typ:"glass_striped",patro:0,misto:5}],bonusy:[{typ:"coin_silver",patro:3,misto:5},{typ:"coin_silver",patro:3,misto:6},{typ:"coin_silver",patro:2,misto:2},{typ:"coin_silver",patro:2,misto:1},{typ:"coin_silver",patro:1,misto:6},{typ:"coin_silver",patro:1,misto:5}]},{jmeno:"usek_02",police:[{patro:0,od:0,do:4},{patro:1,od:3,do:4},{patro:2,od:3,do:4},{patro:3,od:3,do:4},{patro:4,od:0,do:4}],kachny:[{patro:3,sloupec:3,objeveni:0,mince:2,venku:5},{patro:2,sloupec:4,objeveni:.6,mince:2,venku:5},{patro:1,sloupec:3,objeveni:1.3,mince:2,venku:5}],zada:{seminko:40,pruh:.27,jednotka:.225,pasma:[{jmeno:"bar",vyska:4,typy:["bar_a","bar_b","bar_c"],dvojite:.6,nejdelsi:5,celych:1,diry:0,patina:["#6b8fa8","#7a4a8c","#b8506e","#5f7f9a"],patinaSila:1.5,stin:.55,rimsa:"pult"},{jmeno:"hra",vyska:8,typy:["hra_a","hra_b","hra_c"],dvojite:0,nejdelsi:5,celych:1,diry:0,otvor:{od:-2,do:0},patina:["#7d2f25","#c8703a"],kresba:"jemna",rimsa:"tram"},{jmeno:"vrch",vyska:4,typy:["vrch_a","vrch_b","vrch_c"],dvojite:.5,nejdelsi:5,celych:.7,diry:0,patina:["#c9744f","#d79a8a","#5f7f80"]}]},rekvizity:[],bonusy:[{typ:"coin_silver",patro:3,misto:8},{typ:"coin_silver",patro:2,misto:6},{typ:"coin_silver",patro:1,misto:8}]}],levely:[{jmeno:"level_01",useky:[{usek:"usek_01"}]}]};var ho=512,jp=1024,Qs=224,Yp=2/ho,Zp=(Qs-2)/ho,Ba=Qs+16,bI=.5,Ax=(Ba+2)/ho,Tx=(Ba+Qs-2)/ho,Ss=(Ba+Qs+24)/ho,Kp=.82,Ms=null;function MI(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Rx(){if(Ms)return Ms;let i=ho,e=jp,t=Qs,n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=MI(1871);s.fillStyle="#fff",s.fillRect(0,0,i,e),s.save(),s.beginPath(),s.rect(0,0,t,e),s.clip();let o=Math.round(Kp*255);s.fillStyle=`rgb(${o},${o-2},${o-5})`,s.fillRect(0,0,t,e);let a=h=>{for(let d of[-e,0,e])s.save(),s.translate(0,d),h(),s.restore()};for(let h=0;h<16;h++){let d=r()*t,u=r()*e,f=50+r()*130,g=r()<.6;a(()=>{let y=s.createRadialGradient(d,u,0,d,u,f);y.addColorStop(0,g?"rgba(70,35,20,0.16)":"rgba(255,246,228,0.30)"),y.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=y,s.fillRect(d-f,u-f,f*2,f*2)})}let c=(h,d,u,f,g,y,m,p=0,v=e)=>{s.beginPath();for(let _=p;_<=v;_+=6){let x=h+d*Math.sin(_/e*Math.PI*2*u+f)+g*Math.sin(_/e*Math.PI*2*y+m);_===p?s.moveTo(x,_):s.lineTo(x,_)}s.stroke()},l=[.16+r()*.08,.46+r()*.1,.8+r()*.08];for(let h=0;h<40;h++){let d=r()<.45;s.strokeStyle=d?`rgba(255,244,224,${.22+r()*.3})`:`rgba(60,26,12,${.08+r()*.15})`,s.lineWidth=d?1.6+r()*4.5:1.1+r()*2.1;let u=r()<.75?(l[Math.floor(r()*3)]+(r()-.5)*.13)*t:r()*t;c(u,1+r()*5,1+Math.floor(r()*3),r()*6.28,r()*2.5,3+Math.floor(r()*4),r()*6.28)}for(let h=0;h<5;h++){let d=r()*e,u=80+r()*320;s.strokeStyle=`rgba(40,14,8,${.35+r()*.25})`,s.lineWidth=1.3+r()*1.3;let f=14+r()*(t-28),g=r()*3,y=r()*6.28;a(()=>c(f,g,2,y,.8,5,y*2,d,d+u))}for(let h=0;h<3;h++){let d=30+r()*(t-60),u=r()*e,f=5+r()*8,g=f*(1.5+r());a(()=>{for(let y=3;y>=0;y--)s.beginPath(),s.ellipse(d,u,f*(.35+y*.45),g*(.35+y*.45),0,0,Math.PI*2),s.strokeStyle=`rgba(50,20,10,${.34-y*.07})`,s.lineWidth=1.9,s.stroke();s.beginPath(),s.ellipse(d,u,f*.35,g*.35,0,0,Math.PI*2),s.fillStyle="rgba(45,18,10,0.45)",s.fill()})}for(let h=0;h<10;h++){let d=r()*t,u=r()*e;s.strokeStyle=`rgba(45,18,10,${.15+r()*.2})`,s.lineWidth=1.5,s.beginPath(),s.moveTo(d,u),s.lineTo(d+4+r()*12,u+(r()-.5)*2),s.stroke()}for(let[h,d]of[[0,26],[t,t-26]]){let u=s.createLinearGradient(h,0,d,0);u.addColorStop(0,"rgba(40,14,8,0.42)"),u.addColorStop(1,"rgba(40,14,8,0)"),s.fillStyle=u,s.fillRect(Math.min(h,d),0,26,e)}return s.fillStyle="rgba(255,238,210,0.22)",s.fillRect(5,0,2,e),s.restore(),s.fillStyle=`rgb(${o},${o-2},${o-5})`,s.fillRect(t,0,Ba,e),s.globalAlpha=bI,s.drawImage(n,0,0,t,e,Ba,0,t,e),s.globalAlpha=1,Ms=new ds(n),Ms.wrapS=Xn,Ms.wrapT=Yn,Ms.colorSpace=oi,Ms.anisotropy=4,Ms}var Es=i=>i*an,SI={bar_a:11883310,bar_b:9060202,bar_c:10504250,hra_a:11028523,hra_b:10108713,hra_c:11883310,vrch_a:7309956,vrch_b:8359808,vrch_c:12153166},Cx=3807766,EI=2363919,wI=11887663,AI=13204037,Ix=6959141,TI=5909794,RI=6042407,kx=2889234,pi=1,CI=Es(.2),$p=Es(.04),uh=110,dh=190,fh=40,Jp={hloubka:1.2,barvy:["#4b2a22","#432520"],police:!0,zadniStena:!0},Qp={seminko:40,pruh:.27,jednotka:.225,pasma:[{jmeno:"bar",vyska:4,typy:["bar_a","bar_b","bar_c"],dvojite:.6,nejdelsi:5,celych:1,diry:0,patina:["#6b8fa8","#7a4a8c","#b8506e","#5f7f9a"],patinaSila:1.5,stin:.55,rimsa:"pult"},{jmeno:"hra",vyska:8,typy:["hra_a","hra_b","hra_c"],dvojite:0,nejdelsi:5,celych:1,diry:0,otvor:{od:-2,do:0},patina:["#7d2f25","#c8703a"],kresba:"jemna",rimsa:"tram"},{jmeno:"vrch",vyska:4,typy:["vrch_a","vrch_b","vrch_c"],dvojite:.5,nejdelsi:5,celych:.7,diry:0,patina:["#c9744f","#d79a8a","#5f7f80"]}]};function em(i){let e=i>>>0||1;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function II(i,e){let t=em(i.seminko),n=[],s=0;if(i.pasma.forEach((r,o)=>{let a=!1,c=(e-1)/2,l=h=>!!r.otvor&&h-c>=r.otvor.od&&h-c<=r.otvor.do;for(let h=0;h<e;){if(l(h)){h++,a=!1;continue}let d=h+1<e&&!l(h+1)&&t()<(r.dvojite||0)?2:1,u=[],f=r.vyska,g=Math.min(r.nejdelsi||5,5);for(f<=g&&t()<(r.celych||0)&&(u.push(f),f=0);f>0;){let v=Math.min(g,f),_=1+Math.floor(Math.max(t(),t())*v);_===f&&u.length===0&&f>1&&(_=f-1),u.push(_),f-=_}let y=s,m=null,p=!1;for(let v of u){let _=!a&&!p&&d===1&&v<=3&&t()<(r.diry||0),x=null;if(_)p=!0;else{let T=r.typy.filter(w=>w!==m);x=(T.length?T:r.typy)[Math.floor(t()*(T.length||r.typy.length))],m=x}n.push({pruh:h,sirka:d,od:y,vyska:v,typ:x,pasmo:o}),y+=v}a=p,h+=d}s+=r.vyska}),Array.isArray(i.prepisy))for(let r of i.prepisy){let o=n.find(a=>a.pruh===r.pruh&&a.od===r.od);o&&(o.typ=r.typ==="dira"?null:r.typ)}return n}function kI(i,{sirka:e,spodek:t,vrsek:n}){i=i&&Array.isArray(i.pasma)&&i.pasma.length?i:Qp;let s=Es(i.pruh||Qp.pruh),r=Es(i.jednotka||Qp.jednotka),o=Math.max(1,Math.ceil(e/s-1e-6));o%2===0&&o++;let a=Math.ceil((n-t)/r-1e-6),c=i.pasma.map(d=>({...d})),l=c.reduce((d,u)=>d+u.vyska,0);c[c.length-1].vyska=Math.max(1,c[c.length-1].vyska+a-l);let h=II({...i,pasma:c},o);return{recept:i,pruh:s,jednotka:r,pruhu:o,jednotek:a,pasma:c,late:h}}var er=new wn({vertexColors:!0}),zI=.85;er.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`if ( vColor.a < 0.5 ) outgoingLight = diffuseColor.rgb * ${zI.toFixed(2)};
#include <opaque_fragment>`)};function zx(i,{sirka:e,spodek:t,vrsek:n,z:s}){let r=kI(i,{sirka:e,spodek:t,vrsek:n});i=r.recept;let{pruh:o,jednotka:a,pruhu:c,pasma:l,late:h}=r,d=o;e=c*o;let u=[];l.reduce((se,ce,xe)=>u[xe]=se+ce.vyska,0);let f=i.drevo!==!1,g=f?Rx():null;er.map!==g&&(er.map=g,er.needsUpdate=!0);let y=d*jp/Qs,m=em((i.seminko||1)*104729),p=f?.93/Kp:1,v=[],_=[],x=[],T=[],w=[],R=null,P=new be,E=1,b=(se,ce,xe,N,pe,ue,Ce=ue,_e=[0,0,1])=>{if(xe-se<=0||N-ce<=0)return;let De=v.length/3;if(v.push(se,ce,pe,xe,ce,pe,xe,N,pe,se,N,pe),R){let de=R.v+ce*R.m,C=R.v+N*R.m;T.push(R.u0,de,R.u1,de,R.u1,C,R.u0,C)}else T.push(Ss,.5,Ss,.5,Ss,.5,Ss,.5);for(let de=0;de<4;de++)_.push(_e[0],_e[1],_e[2]);for(let de of[ue,ue,Ce,Ce])P.set(de),x.push(P.r,P.g,P.b,E);w.push(De,De+1,De+2,De,De+2,De+3)},k=(se,ce,xe,N,pe,ue)=>{b(se,ce,xe,ce+pe,s,ue),b(se,N-pe,xe,N,s,ue),b(se,ce+pe,se+pe,N-pe,s,ue),b(xe-pe,ce+pe,xe,N-pe,s,ue)},G=(se,ce,xe)=>{let N=v.length/3;for(let K of se)v.push(K[0],K[1],K[2]),T.push(Ss,.5);for(let K=0;K<4;K++)_.push(ce[0],ce[1],ce[2]);for(let K=0;K<4;K++)P.set(Array.isArray(xe)?xe[K]:xe),x.push(P.r,P.g,P.b,E);let[pe,ue,Ce]=se,_e=ue[0]-pe[0],De=ue[1]-pe[1],de=ue[2]-pe[2],C=Ce[0]-pe[0],S=Ce[1]-pe[1],H=Ce[2]-pe[2];(De*H-de*S)*ce[0]+(de*C-_e*H)*ce[1]+(_e*S-De*C)*ce[2]>0?w.push(N,N+1,N+2,N,N+2,N+3):w.push(N,N+2,N+1,N,N+3,N+2)},z=(se,ce,xe,N,pe,ue,Ce)=>G([[se,xe,pe],[ce,xe,pe],[ce,xe,N],[se,xe,N]],[0,Ce?1:-1,0],ue),D=(se,ce,xe,N,pe,ue,Ce)=>G([[se,ce,N],[se,ce,pe],[se,xe,pe],[se,xe,N]],[Ce?1:-1,0,0],ue),U=Math.max(.8,Es(Nv())),L=zv(),Y={...Jp,...i.mistnost||{}},O=(Array.isArray(Y.barvy)&&Y.barvy.length?Y.barvy:Jp.barvy).map(se=>new be(se)),j=se=>new be(i.barvy&&i.barvy[se]||SI[se]||9387826),ee=em((i.seminko||1)*7919),$=-e/2;for(let se of h){let ce=$+se.pruh*d,xe=ce+se.sirka*d,N=t+se.od*a,pe=Math.min(n,N+se.vyska*a);if(se.typ===null){k(ce,N,xe,pe,U,L),Y.zadniStena!==!1&&(E=0,b(ce-fh,N-fh,xe+fh,pe+fh,s-CI,EI),E=1);continue}let ue=j(se.typ),Ce=(.88+ee()*.24)*p,_e=ue.clone().multiplyScalar(Ce*.95),De=ue.clone().multiplyScalar(Ce*1.03);k(ce,N,xe,pe,pi,Cx);let de=m()<.5,[C,S]=l[se.pasmo].kresba==="jemna"?[Ax,Tx]:[Yp,Zp];R={u0:de?S:C,u1:de?C:S,v:m(),m:1/(y*se.sirka)};let H=l[se.pasmo].patina;if(!H||!H.length){b(ce+pi,N+pi,xe-pi,pe-pi,s,_e,De),R=null;continue}let te=[];for(let K=0;K<=se.vyska;K++){let Q=_e.clone().lerp(De,K/se.vyska),Re=l[se.pasmo].patinaSila??1;ee()<.38*Re&&Q.lerp(P.set(H[Math.floor(ee()*H.length)]),Math.min(.85,(.2+ee()*.4)*Re));let he=l[se.pasmo].stin||0;he&&K>=se.vyska-1&&N+se.vyska*a>=t+u[se.pasmo]*a-.01&&Q.lerp(P.set(3807288),he*(K===se.vyska?1:.3)),te.push(Q)}for(let K=0;K<se.vyska;K++){let Q=K===0?N+pi:N+K*a,Re=K===se.vyska-1?pe-pi:Math.min(pe-pi,N+(K+1)*a);b(ce+pi,Q,xe-pi,Re,s,te[K].clone(),te[K+1].clone())}R=null}let J=t;for(let se of l){if(J+=se.vyska*a,!se.rimsa||J>=n)continue;let ce=se.rimsa==="pult",xe=Es(.05),N=Es(ce?.07:.05),pe=1,ue=J-xe+pe,Ce=J-pe,_e=s+N;b($,ue,$+e,ue+U,_e,L),b($,ue+U,$+e,Ce-U,_e,wI),b($,Ce-U,$+e,Ce,_e,L),z($,$+e,Ce,s,_e,AI,!0),z($,$+e,ue,s,_e,Cx,!1)}let Me=s-Es(Math.max(.1,+Y.hloubka||Jp.hloubka)),q=s-$p,ne=(c-1)/2,ye=t;for(let se of l){let ce=ye,xe=Math.min(n,ye+se.vyska*a);if(ye=xe,!se.otvor)continue;let N=$+Math.max(0,ne+se.otvor.od)*d,pe=$+Math.min(c,ne+se.otvor.do+1)*d;if(pe<=N)continue;b(N,ce,N+U,xe,s,L),b(pe-U,ce,pe,xe,s,L),b(N+U,ce,pe-U,ce+U,s,L),D(N,ce,xe,q,s,Ix,!0),D(pe,ce,xe,q,s,Ix,!1),z(N,pe,ce,q,s-2.5,TI,!0),z(N,pe,xe,q,s-2.5,kx,!1),E=0;let ue=N-uh,Ce=pe+uh,_e=d/2;if(Y.zadniStena!==!1){for(let De=ue,de=0;De<Ce-.01;De+=_e,de++){let C=O[de%O.length].clone().multiplyScalar(p);R={u0:Yp,u1:Zp,v:m(),m:2/y},b(De,ce-dh,Math.min(Ce,De+_e),xe+dh,Me,C,C.clone().multiplyScalar(.45)),R=null}if(Y.police!==!1)for(let De=1.4;De<se.vyska-1;De+=2){let de=ce+De*a;b(ue,de,Ce,de+12,Me+8,RI),b(ue,de-9,Ce,de,Me+8,kx)}}E=1}let re=new Mt;re.setAttribute("position",new it(v,3)),re.setAttribute("normal",new it(_,3)),re.setAttribute("uv",new it(T,2)),re.setAttribute("color",new it(x,4)),re.setIndex(w);let Te=new Je(re,er);Te.name="zada",Te.receiveShadow=!0,Te.castShadow=!1,Te.userData.late=h;let Pe=[],Ue=t;for(let se of l){let ce=Ue,xe=Math.min(n,Ue+se.vyska*a);Ue=xe;let N=pe=>!!se.otvor&&pe-ne>=se.otvor.od&&pe-ne<=se.otvor.do;for(let pe=0;pe<c;){if(N(pe)){pe++;continue}let ue=pe;for(;ue+1<c&&!N(ue+1);)ue++;Pe.push(new ct(new I($+pe*d,ce,s-$p),new I($+(ue+1)*d,xe,s))),pe=ue+1}if(se.otvor&&Y.zadniStena!==!1){let pe=$+Math.max(0,ne+se.otvor.od)*d,ue=$+Math.min(c,ne+se.otvor.do+1)*d;ue>pe&&Pe.push(new ct(new I(pe-uh,ce-dh,Me-$p),new I(ue+uh,xe+dh,Me)))}}return Te.userData.kolize=Pe,Te}var PI=i=>i*an,NI={kopce:{popis:"Kopce \u2014 den",obloha:["#5fa8d8","#dbe9b8"],vrstvy:["#7a9f6a","#4e7d4a"],detaily:"#ffe08a"},poust:{popis:"Pou\u0161\u0165 \u2014 stolov\xE9 hory a kaktusy",obloha:["#f3b56a","#ffe1a8"],vrstvy:["#c97a4a","#8c4a2c"],detaily:"#3e5e2a"},noc:{popis:"Noc \u2014 hv\u011Bzdy a m\u011Bs\xEDc",obloha:["#0d1430","#2b2c55"],vrstvy:["#1c2439","#111728"],detaily:"#f4f0d8"}},Px={typ:"kopce",hloubka:6};function LI(i){let e=i>>>0||1;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Nx(i,{sirka:e,spodek:t,vrsek:n,z:s,kameraY:r=360,kameraZ:o=960}){i={...Px,...i||{}};let a=NI[i.typ];if(!a)return null;let c={...a,...i.barvy||{}},l=PI(Math.max(1,Math.min(9,+i.hloubka||Px.hloubka))),h=s-l,d=(o-h)/(o-s),u=j=>r+(j-r)*d,f=e*d*1.6,g=u(t)-(n-t)*d*.3,y=u(n)+(n-t)*d*.3,m=-f/2,p=f/2,v=u(t+(n-t)*.42),_=LI((i.seminko||7)*31+11),x=[],T=[],w=[],R=[],P=[],E=new be,b=0,k=(j,ee,$)=>(x.push(j,ee,h+b),T.push(0,0,1),R.push(Ss,.5),E.set($),w.push(E.r,E.g,E.b,0),x.length/3-1),G=(j,ee,$,J,Me,q,ne,ye,re,Te=re)=>{let Pe=k(j,ee,re);k($,J,re),k(Me,q,Te),k(ne,ye,Te),P.push(Pe,Pe+1,Pe+2,Pe,Pe+2,Pe+3)},z=(j,ee,$,J,Me,q=Me)=>G(j,ee,$,ee,$,J,j,J,Me,q),D=(j,ee,$,J,Me=10)=>{let q=k(j,ee,J);for(let ne=0;ne<=Me;ne++)k(j+Math.cos(ne/Me*Math.PI*2)*$,ee+Math.sin(ne/Me*Math.PI*2)*$,J);for(let ne=0;ne<Me;ne++)P.push(q,q+1+ne,q+2+ne)},U=(j,ee,$,J,Me)=>{let q=_()*6.28,ne=_()*6.28,ye=_()*6.28,re=96,Te=f/re,Pe=null;for(let Ue=0;Ue<=re;Ue++){let se=m+Ue*Te,ce=se/f,xe=.5+.3*Math.sin(ce*$*6.28+q)+.15*Math.sin(ce*$*2.1*6.28+ne)+.08*Math.sin(ce*$*5.3*6.28+ye);J&&(xe=Math.round(xe*3)/3);let N=Me+Math.max(.05,Math.min(1,xe))*ee;Pe!==null&&G(se-Te,g,se,g,se,N,se-Te,Pe,j),Pe=N}};z(m,g,p,y,c.obloha[1],c.obloha[0]);let L=(y-v)*.38;if(b=2,i.typ==="noc"){for(let j=0;j<70;j++){let ee=m+_()*f,$=v+_()*(y-v),J=3+_()*5;z(ee,$,ee+J,$+J,c.detaily)}D(m+f*(.6+_()*.2),v+(y-v)*.65,f*.035,c.detaily,14)}else i.typ==="kopce"&&D(m+f*(.25+_()*.2),v+(y-v)*.6,f*.04,c.detaily,14);if(b=4,U(c.vrstvy[0],L,1.3,i.typ==="poust",v+L*.15),b=6,U(c.vrstvy[1],L*.55,2.2,i.typ==="poust",v-L*.05),b=10,i.typ==="poust")for(let j=0;j<6;j++){let ee=m+f*(.08+_()*.84),$=f*(.03+_()*.03),J=$*.18,Me=v-L*.05+L*.1;z(ee-J/2,Me,ee+J/2,Me+$,c.detaily),z(ee-J*1.6,Me+$*.45,ee-J/2,Me+$*.45+J,c.detaily),z(ee-J*1.6,Me+$*.45,ee-J*1.6+J,Me+$*.75,c.detaily),z(ee+J/2,Me+$*.3,ee+J*1.6,Me+$*.3+J,c.detaily),z(ee+J*.6,Me+$*.3,ee+J*1.6,Me+$*.65,c.detaily)}b=8,z(m,g,p,v-L*.05+1,c.vrstvy[1]);let Y=new Mt;Y.setAttribute("position",new it(x,3)),Y.setAttribute("normal",new it(T,3)),Y.setAttribute("uv",new it(R,2)),Y.setAttribute("color",new it(w,4)),Y.setIndex(P);let O=new Je(Y,er);return O.name="dalka",O.receiveShadow=!1,O.castShadow=!1,O.frustumCulled=!1,O.userData.kolize=[new ct(new I(m,g,h-1),new I(p,y,h))],O}var Xe={sloupcu:5,pater:5,bunka:.27,patro:.45,deska:.06,hloubka:.4,policeDopredu:-.05,policePredek:.3,stenaDozadu:.165,prekryv:.15};var DI=287,Lt=i=>i*an;function ws(i){return(i-(Xe.sloupcu-1)/2)*Lt(Xe.bunka)}function ji(i){return DI+(i-2)*Lt(Xe.patro)}var Ux=1.1,Lx=Rt.degToRad(20);function Bx(i){let e=(Xe.sloupcu-1)/2;return i<e?Lx:i>e?-Lx:0}var UI=new wn({color:9067059}),BI=new wn({color:9387826}),Dx=new Ws(1,1,1);function OI(){return Array.from({length:Xe.pater},(i,e)=>({patro:e,od:0,do:Xe.sloupcu-1}))}var Ox=i=>i.od===0,Fx=i=>i.do===Xe.sloupcu-1;function Vx(i){let e=i.do-i.od+1;return Math.min(Xe.sloupcu,e+(Ox(i)!==Fx(i)?1:0))}var FI=i=>i>=Xe.sloupcu?Xe.sloupcu*Xe.bunka+2*Xe.prekryv:i*Xe.bunka;function Hx(i){return`shelf_${Vx(i)}`}function VI(i){let e=Ox(i),t=Fx(i);if(e===t)return(ws(i.od)+ws(i.do))/2;let n=Lt(FI(Vx(i)))/2;return e?ws(i.do)+Lt(Xe.bunka)/2-n:ws(i.od)-Lt(Xe.bunka)/2+n}var Gx="wall_usek";function Wx(){let i=ph();return{x:i.sirka,y:i.vrsek-i.spodek}}function Xx(i,e,t={},n=null){let s=new Wt;s.name="usek",n&&s.position.set(n.x||0,n.y||0,0);let r=e&&e.police||OI(),o=[],{spodek:a,vrsek:c}=ph();if(e&&e.zada)s.add(zx(e.zada,ph()));else if(t.stena)t.stena.position.set(0,a,Nt-Lt(Xe.stenaDozadu)+Lt(.02)),t.stena.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),yp(t.stena),s.add(t.stena);else{let u=new Je(Dx,BI);u.name="stena",u.receiveShadow=!0,u.scale.set(Lt(Xe.bunka*Xe.sloupcu+2*Xe.prekryv),c-a,Lt(.04)),u.position.set(0,(a+c)/2,Nt-Lt(Xe.stenaDozadu)),s.add(u)}if(e&&e.dalka&&e.dalka.typ!=="zadna"){let u=Nx({seminko:e.zada&&e.zada.seminko,...e.dalka},ph());u&&s.add(u)}for(let u of r){let f=t.police&&t.police(u);if(f){f.position.set(VI(u),ji(u.patro),Nt+Lt(Xe.policeDopredu)),yp(f),s.add(f),o.push(f);continue}let g=u.od===0?Xe.prekryv:0,y=u.do===Xe.sloupcu-1?Xe.prekryv:0,m=(u.do-u.od+1)*Xe.bunka+g+y,p=new Je(Dx,UI);p.castShadow=!0,p.receiveShadow=!0,p.scale.set(Lt(m),Lt(Xe.deska),Lt(Xe.hloubka)),p.position.set((ws(u.od)+ws(u.do))/2+Lt(y-g)/2,ji(u.patro)-Lt(Xe.deska)/2,Nt+Lt(Xe.policeDopredu+Xe.policePredek-Xe.hloubka/2)),s.add(p),o.push(p)}i.add(s),s.updateMatrixWorld(!0);let l=new I;s.getWorldPosition(l);for(let u of o){let f=new ct().setFromObject(u).translate(l.clone().negate());tm(s,f)}let h=s.getObjectByName("zada");if(h)for(let u of h.userData.kolize||[])tm(s,u,!0);let d=s.getObjectByName("dalka");if(d)for(let u of d.userData.kolize||[])tm(s,u,!0);return s}var mh=new I;function tm(i,e,t=!1){i.getWorldPosition(mh),uo.push({usek:i,lokalni:e,box:e.clone().translate(mh),zed:t})}function qx(){for(let i of uo)i.usek.getWorldPosition(mh),i.box.copy(i.lokalni).translate(mh)}function ph(){let i=Qy();return{sirka:Lt(Xe.bunka*Xe.sloupcu+2*Xe.prekryv),spodek:ji(-2),vrsek:ji(Xe.pater+1),z:Nt-Lt(Xe.stenaDozadu)+Lt(.02),kameraY:i.y,kameraZ:i.z}}var uo=[],nm=1/30,Oa=new I,Fa=new I;function im(){return uo.filter(i=>i.usek.visible).map(i=>({box:i.box,zed:!!i.zed}))}function jx(i,e){let t=i.x-e.x*nm,n=i.y-e.y*nm,s=i.z-e.z*nm,r=i.x-t,o=i.y-n,a=i.z-s;for(let c=0;c<uo.length;c++){if(!uo[c].usek.visible)continue;let l=uo[c].box,h=0,d=1,u=-1,f=!1;for(let y=0;y<3;y++){let m=y===0?t:y===1?n:s,p=y===0?r:y===1?o:a,v=y===0?l.min.x:y===1?l.min.y:l.min.z,_=y===0?l.max.x:y===1?l.max.y:l.max.z;if(Math.abs(p)<1e-9){if(m<v||m>_){f=!0;break}continue}let x=(v-m)/p,T=(_-m)/p;if(x>T){let w=x;x=T,T=w}if(x>h&&(h=x,u=y),T<d&&(d=T),h>d){f=!0;break}}if(f)continue;Oa.set(t+r*h,n+o*h,s+a*h),u<0&&(u=Math.abs(e.y)>Math.abs(e.z)?Math.abs(e.y)>Math.abs(e.x)?1:0:Math.abs(e.z)>Math.abs(e.x)?2:0);let g=u===0?e.x:u===1?e.y:e.z;return Fa.set(0,0,0).setComponent(u,g>0?-1:1),Oa.addScaledVector(Fa,3),!0}return!1}var HI={barva:"#3cb8fb",pruhlednost:94,svitivost:135,obrysSila:122,obrysBarva:"#133544",hran:6,polomer:8,tok:3.75,delkaVzoru:900,sila:2e3,nabeh:.35,zpozdeniMireni:0,prekmitMireni:0,zpozdeniPistole:.5,prekmitPistole:.48},Ct={...HI},hm=1500,um=90,yo=100/30,GI=1.15,po=192,mo=Array.from({length:po},()=>({p:new I,v:new I,t:0,gen:0,s:0,zivy:!1})),gi=0,As=0,rm=i=>mo[(gi+i)%po],gh=0,mi=0,dm=0,Yx=!1;function e_(i,e,t){let n=e.x-i.x,s=e.y-i.y,r=e.z-i.z,a=(Math.hypot(n,r)||1)/Ct.sila;return t.set(n/a,(s+.5*hm*a*a)/a,r/a)}function WI(i,e){e_(li,i,e)}function t_(i,e,t){return e_(i,e,t).normalize()}function XI(i,e){As===po&&(mo[gi].zivy=!1,gi=(gi+1)%po,As--);let t=mo[(gi+As)%po];t.p.copy(li),WI(i,t.v),t.v.multiplyScalar(.3+.7*mi),t.v.x+=(Math.random()-.5)*40,t.v.y+=(Math.random()-.5)*40,t.v.y-=hm*e,t.p.addScaledVector(t.v,e),t.t=e,t.gen=dm,t.s=mi,t.zivy=!0,As++}var sm=new I,Zx=!1,Kx=new I,om=!1;function qI(i,e,t){for(let r=0;r<As;r++){let o=rm(r);o.zivy&&(o.t+=i,o.v.y-=hm*i,o.p.addScaledVector(o.v,i),lm&&lm(o.p,o.v,o.s)&&(o.zivy=!1))}for(;As&&(!mo[gi].zivy||mo[gi].t>GI);)mo[gi].zivy=!1,gi=(gi+1)%po,As--;t&&!Yx&&dm++,Yx=t;let n=Math.max(.02,Ct.nabeh);if(mi+=((t?1:0)-mi)*Math.min(1,i/n),!t&&mi<.02&&(mi=0),Zx||(sm.copy(e),Zx=!0),om=t||mi>.02,om){let r=um*i*mi;for(gh+=r;gh>=1;){gh-=1;let o=r>0?Math.min(1,gh/r):0;Kx.copy(e).lerp(sm,o),XI(Kx,o*i)}}sm.copy(e)}var vh=24,Mh=document.createElement("canvas");Mh.width=128;Mh.height=vh;function jI(i){let e=Mh.getContext("2d");e.fillStyle=i,e.fillRect(0,0,128,vh);for(let[t,n]of[[30,12]]){let s=e.createLinearGradient(t-n,0,t+n,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.15,"rgba(255,255,255,1)"),s.addColorStop(.85,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(t-n,0,n*2,vh)}for(let[t,n]of[[64,.45],[76,.3],[100,.5],[112,.35]]){let s=2+(n>.7?2:1),r=e.createLinearGradient(t-s,0,t+s,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.22,"rgba(238,250,255,"+n+")"),r.addColorStop(.78,"rgba(238,250,255,"+n+")"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(t-s,0,s*2,vh)}}var yi=new ds(Mh);yi.wrapS=yi.wrapT=Yn;yi.magFilter=zt;yi.minFilter=zt;yi.generateMipmaps=!1;yi.anisotropy=4;yi.repeat.set(1.4,1);var xh=new wn({map:yi,transparent:!0,depthWrite:!1}),n_=new Tt({side:xt,transparent:!0,opacity:1,depthWrite:!1}),ir=96,am=4,Sh=null,go=[],i_=0;function $x(i,e){let t=new Mt,n=(ir+1)*(i+1),s=new at(new Float32Array(n*3),3),r=new at(new Float32Array(n*3),3),o=new at(new Float32Array(n*2),2);s.setUsage(kl),r.setUsage(kl),o.setUsage(kl),t.setAttribute("position",s),t.setAttribute("normal",r),t.setAttribute("uv",o);let a=[];for(let l=0;l<ir;l++)for(let h=0;h<i;h++){let d=l*(i+1)+h,u=(l+1)*(i+1)+h,f=(l+1)*(i+1)+h+1,g=l*(i+1)+h+1;a.push(d,g,u,u,g,f)}t.setIndex(a);let c=new Je(t,e);return c.frustumCulled=!1,c.visible=!1,Sh.add(c),{m:c,geo:t,rad:i}}function YI(){for(let i of go)for(let e of[i.voda,i.obrys])e.geo.dispose(),Sh.remove(e.m);go=[];for(let i=0;i<am;i++){let e=$x(Ct.hran,n_);e.m.renderOrder=-1;let t=$x(Ct.hran,xh);t.m.renderOrder=0,go.push({voda:t,obrys:e,body:[],sily:[],krivka:new gl([])})}i_=Ct.hran}var bh=200,nr=new Float64Array(bh+1),Va=new I,Ha=new I,fo=new I,yh=new I,ZI=new Fe,Eh=()=>Array.from({length:ir+1},()=>new I),s_=Eh(),Ln=Eh(),tr=Eh(),cm=Eh();function KI(i){let e=bh+1,t=i*nr[e-1],n=0,s=e-1,r=0;for(;n<=s;){r=Math.floor(n+(s-n)/2);let c=nr[r]-t;if(c<0)n=r+1;else if(c>0)s=r-1;else{s=r;break}}if(r=s,nr[r]===t)return r/(e-1);let o=nr[r],a=nr[r+1];return(r+(t-o)/(a-o))/(e-1)}var _h=1;function $I(i){i.getPoint(0,Va);let e=0;nr[0]=0;for(let o=1;o<=bh;o++)i.getPoint(o/bh,Ha),e+=Ha.distanceTo(Va),nr[o]=e,Va.copy(Ha);_h=Math.max(1,e);for(let o=0;o<=ir;o++){let a=KI(o/ir);i.getPoint(a,s_[o]);let c=a-1e-4,l=a+1e-4;c<0&&(c=0),l>1&&(l=1),i.getPoint(c,Va),i.getPoint(l,Ha),Ln[o].copy(Ha).sub(Va).normalize()}let t=Number.MAX_VALUE,n=Math.abs(Ln[0].x),s=Math.abs(Ln[0].y),r=Math.abs(Ln[0].z);n<=t&&(t=n,yh.set(1,0,0)),s<=t&&(t=s,yh.set(0,1,0)),r<=t&&yh.set(0,0,1),fo.crossVectors(Ln[0],yh).normalize(),tr[0].crossVectors(Ln[0],fo),cm[0].crossVectors(Ln[0],tr[0]);for(let o=1;o<=ir;o++){if(tr[o].copy(tr[o-1]),fo.crossVectors(Ln[o-1],Ln[o]),fo.length()>Number.EPSILON){fo.normalize();let a=Math.acos(Rt.clamp(Ln[o-1].dot(Ln[o]),-1,1));tr[o].applyMatrix4(ZI.makeRotationAxis(fo,a))}cm[o].crossVectors(Ln[o],tr[o])}}var Jx=.5,JI=40,QI=12;function Qx(i,e,t,n,s,r){let o=i.rad,a=i.geo.attributes.position,c=i.geo.attributes.normal,l=i.geo.attributes.uv,h=ir;for(let d=0;d<=h;d++){let u=d/h,f=s_[d],g=tr[d],y=cm[d],m=r?1:Math.min(1,u*_h/QI),p=m*m*(3-2*m),v=1+p*(.2*Math.sin(u*15-t*11)+.11*Math.sin(u*26.3-t*7.4)+.07*Math.sin(u*41.7-t*17.1)),_=Jx+(1-Jx)*p,x=1-.45*u*u,T=Math.min(1,(1-u)*_h/JI),w=T*T*(3-2*T),R=r&&u<.1?Math.max(.02,u/.1):1,P=u>.7?1+.35*Math.sin(u*70-t*23)*((u-.7)/.3):1,E=n[Math.min(s-1,Math.round(u*(s-1)))],b=e*x*v*w*R*P*_*(.25+.75*E),k=7*u,G=Math.sin(u*9-t*8.5)*k,z=Math.sin(u*11.7-t*6.2)*k*.6,D=g.x*G+y.x*z,U=g.y*G+y.y*z,L=g.z*G+y.z*z;for(let Y=0;Y<=o;Y++){let O=Y/o*Math.PI*2,j=Math.cos(O),ee=Math.sin(O),$=j*g.x+ee*y.x,J=j*g.y+ee*y.y,Me=j*g.z+ee*y.z,q=d*(o+1)+Y;a.setXYZ(q,f.x+D+$*b,f.y+U+J*b,f.z+L+Me*b),c.setXYZ(q,$,J,Me),l.setXY(q,u*_h/Math.max(50,Ct.delkaVzoru||900),Y/o)}}a.needsUpdate=!0,c.needsUpdate=!0,l.needsUpdate=!0,i.geo.setDrawRange(0,h*o*6),i.m.visible=!0}function ek(i){let e=0,t=As-1;for(;t>=0&&e<am;){let n=rm(t);if(!n.zivy){t--;continue}let s=n.gen,r=go[e],o=0;for(e===0&&om&&s===dm&&n.p.distanceToSquared(li)>25&&(r.body[0]=li,r.sily[0]=mi,o=1);t>=0;t--){let c=rm(t);if(!c.zivy||c.gen!==s)break;r.body[o]=c.p,r.sily[o]=c.s,o++}if(r.body.length=o,o<4)continue;r.krivka.points=r.body,$I(r.krivka);let a=n.t<.05;Qx(r.voda,Ct.polomer,i,r.sily,o,!a),Qx(r.obrys,Ct.polomer*Ct.obrysSila/100,i,r.sily,o,!a),e++}for(;e<am;e++)go[e].voda.m.visible=!1,go[e].obrys.m.visible=!1}function r_(i,e){Sh=i,tk(e||Ct)}function tk(i){Ct={...Ct,...i},jI(Ct.barva),yi.needsUpdate=!0,xh.opacity=Ct.pruhlednost/100,xh.emissive.set(Ct.barva).multiplyScalar(.55),xh.emissiveIntensity=Ct.svitivost/100,n_.color.set(Ct.obrysBarva),Sh&&Ct.hran!==i_&&YI()}function Yi(){return Ct}function wh(){return mi}function o_(){return Math.max(.02,Ct.nabeh)}var lm=null;function a_(i){lm=i}function c_(i,e,t,n){qI(i,t,n),ek(e),yi.offset.x-=i*Ct.tok*.3}var Th=48,Rh=.64,nk=.36,ik=.86,sk=5e-4,Ah=1.41,l_=1.71,rk=3.5,ok=.03,ak=.04,ck=14,lk=9,gm=new be(2929614),hk=new be(16773754),uk=new be(16777215),dk=.2,fm=null,pm=new be,mm=null;function fk(){return mm||(mm=new vl(Rh,ik,Th,1,Math.PI/2,Math.PI*2)),mm.clone()}function pk(i,e){let t=i.attributes.position;for(let n=0;n<=Th;n++){let s=Math.PI/2+n/Th*Math.PI*2;t.setXY(n,e*Math.cos(s),e*Math.sin(s))}t.needsUpdate=!0}function h_(i,e,t,n){let s=new Tt({color:gm,side:xt,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),r=new Je(fk(),s);r.rotation.y=Math.PI,r.name="ukazatel_zivota",r.userData.ukazatel=!0,r.renderOrder=10,r.castShadow=!1,r.receiveShadow=!1,r.scale.setScalar(t),r.position.set(e.x,e.y,n+sk),r.geometry.setDrawRange(0,0),r.visible=!1,i.add(r),fm||(fm=new yl(dk,24));let o=new Tt({color:gm,side:xt,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),a=new Je(fm,o);a.name="ukazatel_stred",a.userData.ukazatel=!0,a.renderOrder=11,a.castShadow=!1,a.receiveShadow=!1,a.visible=!1,r.add(a);let c={mesh:r,mat:s,polomer:t,meritko:1,problesk:0,podil:0,vnitrni:Rh,z0:r.position.z,nadVsim:!0,tep:0,stredMesh:a,matStred:o};return i.userData.ukazatel=c,c}function u_(i,e){i.podil=Math.max(0,Math.min(1,e));let t=Math.round(i.podil*Th);i.mesh.geometry.setDrawRange(0,t*6),i.mesh.visible=t>0}function ym(i){i.problesk=1}function d_(i,e,t,n=!1){let s=n?l_:t?Ah:1;i.meritko+=(s-i.meritko)*Math.min(1,ck*e);let r=Math.max(0,Math.min(1,(i.meritko-1)/(Ah-1))),o=Math.max(0,Math.min(1,(i.meritko-Ah)/(l_-Ah)));i.tep=o>0?i.tep+e:0,i.mesh.scale.setScalar(i.polomer*i.meritko*(1+ok*o*Math.sin(i.tep*rk*Math.PI*2))),i.mesh.position.z=i.z0+ak*r;let a=r>(i.nadVsim?.08:.2);a!==i.nadVsim&&(i.nadVsim=a,i.mat.depthTest=!a,i.mat.depthWrite=!a,i.mesh.renderOrder=a?10:-5);let c=Rh+(nk-Rh)*r;Math.abs(c-i.vnitrni)>.002&&(i.vnitrni=c,pk(i.mesh.geometry,c)),pm.copy(gm).lerp(hk,o),i.problesk>0&&(i.problesk=Math.max(0,i.problesk-lk*e),pm.lerp(uk,i.problesk)),i.mat.color.copy(pm),o>.02?(i.stredMesh.visible=!0,i.stredMesh.scale.setScalar(o*(1+.35*Math.sin(o*Math.PI))),i.matStred.color.copy(i.mat.color)):i.stredMesh.visible&&(i.stredMesh.visible=!1)}var mk=yo/um,qt={SCHOVANA:"schovana",VYJIZDI:"vyjizdi",VENKU:"venku",ZAJIZDI:"zajizdi",SESTRELENA:"sestrelena",PRYC:"pryc"},vm=.25,gk=.4,M_={sila:1,tuhost:60,tlumeni:4,maxUhel:25,prahVyrazu:12},Zi={...M_};function S_(i){Zi={...Zi,...i}}var yk={vodaNaKachnu:5,nasobekTerce:2,dobaVyjeti:.22,dobaVenku:3,dobaSchovani:1.5,kloboukOdstrel:1,bodyZaVodu:10,bodySestreleni:20},Jn={...yk};function E_(i){Jn={...Jn,...i}}function Rm(){return{...Jn}}var mn=[],Ch=new ct,f_=new ct,kh="target";function vk(i){for(let e=i;e;e=e.parent)if(e.name===kh)return!0;return!1}var xk=-1.5,_k=.007,xm=new ct,Ts=new I;function w_(i,e){e.position.set(0,0,0),e.rotation.set(0,0,0),e.updateMatrixWorld(!0),xm.setFromObject(e).getCenter(Ts);let t=Rt.degToRad(xk),n=Math.cos(t),s=Math.sin(t);e.rotation.y=t,e.position.set(Ts.x-(Ts.x*n+Ts.z*s),_k,Ts.z-(-Ts.x*s+Ts.z*n)),i.add(e),xm.getSize(_m),h_(e,Ts,Math.max(_m.x,_m.y)/2,xm.max.z)}var _m=new I;function bk(i){for(let e=i;e;e=e.parent)if(e.name==="hat")return!0;return!1}var Mk=70,Sk=8;function bm(i){let e=i.getCenter(new I),t=i.getSize(new I).multiplyScalar(.5);return{c:e,r:t,klobouk:!1}}var Ga=0;function Cm(){return Ga}function A_(i,e={}){Ga++,i.updateMatrixWorld(!0);let t=new ct,n=new ct,s=new ct,r=null,o=null,a=null;i.traverse(u=>{if(u.name==="hat"&&!r&&(r=u),u.name===kh&&!o&&(o=u),u.userData.ukazatel===!0&&u.isMesh){typeof u.parent.userData.ukazatel=="object"&&(a=u.parent.userData.ukazatel);return}!u.isMesh||u.userData.obrys||(u.geometry.boundingBox||u.geometry.computeBoundingBox(),f_.copy(u.geometry.boundingBox).applyMatrix4(u.matrixWorld),(vk(u)?s:bk(u)?n:t).union(f_))});let c=[];if(t.isEmpty()||c.push(bm(t)),n.isEmpty()||c.push({...bm(n),klobouk:!0}),!s.isEmpty()){let u={...bm(s),terc:!0};u.r.z=Math.max(u.r.z,Sk),c.push(u)}Ch.copy(t).union(n);let l=Uv(i),h=!!e.staticka,d={objekt:i,elipsy:c,pata:Ch.min.y,vyska:Math.max(1,Ch.max.y-Ch.min.y),uhelX:0,uhelZ:0,rychX:0,rychZ:0,klidX:i.rotation.x,klidZ:i.rotation.z,vyrazZasahu:l.includes(vp)&&l.includes(Ca),odZasahu:99,koukaZasazene:!1,voda:0,odZasahuTerc:99,staticka:h,stav:h?qt.VENKU:qt.SCHOVANA,cas:0,ceka:h?0:e.po?1/0:+e.objeveni||0,po:e.po&&!h?{patro:e.po.patro,sloupec:e.po.sloupec,zpozdeni:typeof e.po.zpozdeni=="number"?e.po.zpozdeni:.5}:null,cekaNaNavazani:!!(e.po&&!h),venku:typeof e.venku=="number"&&e.venku>0?e.venku:null,schovana:typeof e.schovana=="number"&&e.schovana>0?e.schovana:null,zivot:typeof e.voda=="number"&&e.voda>0?e.voda:null,meritko:i.scale.clone(),sY:h?1:0,vY:0,kloboukObj:r,kloboukY0:r?r.position.y:0,kloboukDy:0,kloboukV:0,kloboukMeritko0:r?r.scale.clone():new I(1,1,1),vodaKlobouk:0,y0:i.position.y,klidY:i.rotation.y,tercObj:o,tercS:h?1:0,plneni:0,ukazatel:a,teklo:!1,data:{kachna:mn.length,patro:e.patro,sloupec:e.sloupec,mince:+e.mince||0,plneni:0,pridano:0,pridanoTerc:0,x:0,y:0,z:0}};h||(Rs(d,0,0),_o(d,0),i.visible=!1),mn.push(d)}function _o(i,e){i.tercS=e,i.tercObj&&i.tercObj.scale.setScalar(Math.max(1e-4,e))}function p_(i,e){i.kloboukObj&&(i.kloboukV=e)}function m_(i){i.kloboukDy=0,i.kloboukV=0,i.kloboukObj&&(i.kloboukObj.position.y=i.kloboukY0)}function Ek(i,e){!i.kloboukObj||i.kloboukDy<=0&&i.kloboukV<=0||(i.kloboukV-=Ik*e,i.kloboukDy+=i.kloboukV*e,i.kloboukDy<=0&&(i.kloboukDy=0,i.kloboukV=0),i.kloboukObj.position.y=i.kloboukY0+i.kloboukDy)}function vo(i,e){i.stav===qt.VENKU!=(e===qt.VENKU)&&Ga++,i.stav=e,i.cas=0}var wk=.3,g_=.2,Ak=.25,Tk=1.35,y_=1.4,Rk=1.1,Ck=.7,Ik=16,v_=.08,Mm=.12,xo=.1,kk=.45,Ih=.3,Sm=.75,zk=.16,Pk=.35,Em=.16,Nk=18,x_=40,Am=null,__=new I;function T_(i){Am=i}function R_(i,e=!1){if(!i.kloboukObj)return;let t=i.kloboukObj;i.kloboukObj=null;for(let n=i.elipsy.length-1;n>=0;n--)i.elipsy[n].klobouk&&i.elipsy.splice(n,1);if(Ga++,__.copy(i.meritko).multiply(i.kloboukMeritko0),Am?Am(t,i.objekt.parent,__):t.visible=!1,e){let n=i.objekt;i.data.x=n.position.x,i.data.y=n.position.y+i.vyska*1.05,i.data.z=n.position.z,bt("klobouk:odstrelen",i.data)}}var sr=i=>i*i*(3-2*i);function Rs(i,e,t=null){let n=Math.max(0,e),s;t===null?s=Math.min(Tk,Math.max(.7,1/Math.sqrt(Math.max(n,.05)))):s=Math.max(0,t)*(n>1?1/Math.sqrt(n):1),i.objekt.scale.set(i.meritko.x*Math.max(s,1e-4),i.meritko.y*Math.max(n,1e-4),i.meritko.z*Math.max(s,1e-4))}function b_(i,e,t){let n=Math.PI/Math.max(.05,Jn.dobaVyjeti);i.vY+=(n*n*(e-i.sY)-2*wk*n*i.vY)*t,i.sY+=i.vY*t}function Lk(i,e){for(let t of mn)!t.po||!t.cekaNaNavazani||t.po.patro!==i||t.po.sloupec!==e||(t.cekaNaNavazani=!1,t.cas=0,t.ceka=t.po.zpozdeni)}function Dk(i,e){let t=i.objekt;switch(i.stav){case qt.SCHOVANA:i.cas+=e,i.cas>=i.ceka&&(vo(i,qt.VYJIZDI),t.visible=!0,i.sY=0,i.vY=0,m_(i));break;case qt.VYJIZDI:i.cas+=e,b_(i,1,e),Rs(i,i.sY,Math.sqrt(Math.min(1,i.sY))),_o(i,sr(Math.min(1,Math.max(0,(i.cas-v_)/Mm)))),i.sY>=1&&(vo(i,qt.VENKU),i.rychX-=y_,p_(i,Rk),bt("kachna:objevena",i.data));break;case qt.VENKU:if(i.cas+=e,i.tercS<1&&_o(i,sr(Math.min(1,Math.max(0,(i.cas+Mm-v_)/Mm)))),(Math.abs(i.sY-1)>.002||Math.abs(i.vY)>.002)&&(b_(i,1,e),Rs(i,i.sY)),i.data.pridano>0&&(i.data.plneni=i.plneni,bt("kachna:zasazena",i.data),i.data.pridano=0,i.data.pridanoTerc=0,i.plneni>=(i.zivot??Jn.vodaNaKachnu))){vo(i,qt.SESTRELENA),i.ukazatel&&ym(i.ukazatel),i.data.x=t.position.x,i.data.y=t.position.y+i.vyska*.5,i.data.z=t.position.z,bt("kachna:sestrelena",i.data),Lk(i.data.patro,i.data.sloupec);break}i.cas>=(i.venku??Jn.dobaVenku)&&(vo(i,qt.ZAJIZDI),i.vY=0,p_(i,Ck));break;case qt.SESTRELENA:{i.cas+=e;let n=zk*an;if(i.cas<xo)i.kloboukOdskocil||(i.kloboukOdskocil=!0,R_(i,!1)),Rs(i,1-kk*sr(i.cas/xo));else if(i.cas<xo+Ih){let s=(i.cas-xo)/Ih*Sm;i.vyskocila||(i.vyskocila=!0,i.rychX-=y_*1.5),t.position.y=i.y0+n*4*s*(1-s);let r=1+Pk*(1-s/Sm)**2;Rs(i,r,1),t.rotation.y=i.klidY+Math.sign(t.position.x||1)*Rt.degToRad(x_)*sr(s/Sm),_o(i,Math.max(0,1-s*2))}else if(i.cas<xo+Ih+Em){let s=(i.cas-xo-Ih)/Em;i.praskla||(i.praskla=!0,i.data.x=t.position.x,i.data.y=t.position.y+i.vyska*.5,i.data.z=t.position.z,bt("kachna:prasknuti",i.data));let r=Math.sign(t.position.x||1);t.rotation.y=i.klidY+r*(Rt.degToRad(x_)+Nk*s*s*Em);let o=1-sr(s);Rs(i,o,o)}else vo(i,qt.PRYC),t.visible=!1,bt("kachna:pryc",i.data);break}case qt.ZAJIZDI:{i.cas+=e;let n=Math.max(.05,Jn.dobaVyjeti),s=n*Ak;if(i.cas<s)i.sY=1+g_*sr(i.cas/s),Rs(i,i.sY,1),_o(i,1-sr(i.cas/s));else{let r=Math.min(1,(i.cas-s)/(n-s));i.sY=(1+g_)*(1-r*r),Rs(i,i.sY,1-r*r*r)}i.cas>=n&&(vo(i,qt.SCHOVANA),i.ceka=i.schovana??Jn.dobaSchovani,t.visible=!1,i.sY=0,_o(i,0),m_(i),bt("kachna:schovana",i.data));break}default:break}}function C_(){Ga++,Tm=!1;for(let i of mn)i.objekt.rotation.x=i.klidX,i.objekt.rotation.z=i.klidZ;mn.length=0}var zh=new I,bo=new I,wm=1/30,Im=!1;function I_(i,e,t){let n=i.x-e.x*wm,s=i.y-e.y*wm,r=i.z-e.z*wm,o=i.x-n,a=i.y-s,c=i.z-r;if(!(o*o+a*a+c*c>=0))return!1;for(let l=0;l<mn.length;l++){let h=mn[l];if(h.stav!==qt.VENKU)continue;let d=2,u=null,f=null;for(let g=0;g<h.elipsy.length;g++){let y=h.elipsy[g];if(y.terc){let P=y.c.z+y.r.z;if(c===0)continue;let E=(P-r)/c;if(!(E>=0&&E<=1+Mk/Math.sqrt(o*o+a*a+c*c)))continue;let b=(n+o*E-y.c.x)/y.r.x,k=(s+a*E-y.c.y)/y.r.y;if(!(b*b+k*k<=1))continue;f=y,E<=1&&E<d&&(d=E,u=y);continue}let m=(n-y.c.x)/y.r.x,p=(s-y.c.y)/y.r.y,v=(r-y.c.z)/y.r.z,_=o/y.r.x,x=a/y.r.y,T=c/y.r.z,w=m*m+p*p+v*v-1,R;if(w<=0)R=0;else{let P=_*_+x*x+T*T,E=2*(m*_+p*x+v*T),b=E*E-4*P*w;if(!(b>=0)||!(P>0)||(R=(-E-Math.sqrt(b))/(2*P),!(R>=0&&R<=1)))continue}R<d&&(d=R,u=y)}if(u&&f&&!u.terc&&!u.klobouk&&(u=f),u){let g=n+o*d,y=s+a*d,m=r+c*d,p=(g-u.c.x)/u.r.x,v=(y-u.c.y)/u.r.y,_=(m-u.c.z)/u.r.z;u.terc?bo.set(0,0,1):bo.set(p/u.r.x,v/u.r.y,_/u.r.z).normalize(),zh.set(g,y,m).addScaledVector(bo,3),Im=!!u.terc;let x=Math.min(1,Math.max(0,(y-h.pata)/h.vyska)),T=Zi.sila*t*x*6e-5;h.rychX+=e.z*T,h.rychZ-=e.x*T,h.odZasahu=0,h.voda+=t;let w=t*mk*(u.terc?Jn.nasobekTerce:1);return h.plneni+=w,h.data.pridano+=w,u.terc&&(h.data.pridanoTerc+=w,h.odZasahuTerc=0),u.klobouk&&(h.vodaKlobouk+=w),!0}}return!1}function k_(i){let e=Rt.degToRad(Zi.maxUhel);for(let t=0;t<mn.length;t++){let n=mn[t];if(n.staticka||(Dk(n,i),Ek(n,i),n.kloboukObj&&n.vodaKlobouk>=Jn.kloboukOdstrel&&R_(n,!0)),n.rychX+=(-Zi.tuhost*n.uhelX-Zi.tlumeni*n.rychX)*i,n.rychZ+=(-Zi.tuhost*n.uhelZ-Zi.tlumeni*n.rychZ)*i,n.uhelX+=n.rychX*i,n.uhelZ+=n.rychZ*i,Math.abs(n.uhelX)>e&&(n.uhelX=Math.sign(n.uhelX)*e,n.rychX=0),Math.abs(n.uhelZ)>e&&(n.uhelZ=Math.sign(n.uhelZ)*e,n.rychZ=0),n.objekt.rotation.x=n.klidX+n.uhelX,n.objekt.rotation.z=n.klidZ+n.uhelZ,n.odZasahu+=i,n.odZasahuTerc+=i,n.ukazatel){let s=n.odZasahu<vm;n.teklo&&!s&&ym(n.ukazatel),n.teklo=s;let r=n.plneni/Math.max(.01,n.zivot??Jn.vodaNaKachnu);n.ukazatel.podil!==r&&u_(n.ukazatel,r),d_(n.ukazatel,i,s,n.odZasahuTerc<vm)}if(n.vyrazZasahu){n.voda*=Math.exp(-i/gk);let s=n.odZasahu<vm,r=n.koukaZasazene?s:s&&n.voda>=(Zi.prahVyrazu??M_.prahVyrazu);r!==n.koukaZasazene&&(Bv(n.objekt,r?vp:Ca),n.koukaZasazene=r)}}if(!Tm){let t=0,n=0;for(let s=0;s<mn.length;s++)mn[s].staticka||mn[s].cekaNaNavazani||(n++,mn[s].stav!==qt.PRYC&&t++);n>0&&t===0&&(Tm=!0,bt("usek:vycisten",null))}}var Tm=!1;function z_(){let i=[];for(let e of mn)if(e.stav===qt.VENKU)for(let t of e.elipsy)i.push({stred:t.c,polomery:t.r,klobouk:t.klobouk,terc:!!t.terc});return i}var F_="assets/rekvizity.glb",V_="assets/modely.glb",Eo=2,Um=Xe.sloupcu*Eo,Uk=Xe.bunka/Eo,H_={cactus_pot:2,jug:2,coin_stack:1,sack:2,barrel:2,crate:2,logs:2,wheel:3,skull:3,lantern:1};var Bk={coin_silver:.045,coin_gold:.045};var Ok=[{typ:"coin_silver",popis:"Mince st\u0159\xEDbrn\xE1",znak:"\u{1FA99}"}],Fk=new Set(Ok.map(i=>i.typ)),P_=i=>Fk.has(i);function G_(i){if(!i||!Array.isArray(i.rekvizity))return i;let e=i.rekvizity.filter(t=>P_(t.typ));return e.length?{...i,rekvizity:i.rekvizity.filter(t=>!P_(t.typ)),bonusy:[...i.bonusy||[],...e]}:i}var Vk={bottle_amber:12,bottle_green:12,glass_striped:180,glass_clear:180,coin_silver:0,coin_gold:0};function Hk(i,e,t){let n=Vk[i]??30,s=Math.sin(e*127.1+t*311.7)*43758.5453;return(s-Math.floor(s)-.5)*2*n}var Gk={cactus_pot:45};function Wk(i){if(i.rot!==void 0&&i.rot!==null)return i.rot;let e=Gk[i.typ];return e!==void 0?(Math.random()*2-1)*e:Hk(i.typ,i.patro,i.misto)}function Xk(i,e=1){return(i+(e-1)/2-(Um-1)/2)*wo(Uk)}function qk(i,e=[],t=null){let n=new Map,s=[],r=(a,c)=>!t||t.some(l=>l.patro===a&&Math.floor(c/Eo)>=l.od&&Math.floor(c/Eo)<=l.do),o=(a,c,l)=>{if(c<0||c>=Um){s.push(`${l}: m\xEDsto ${c} na pat\u0159e ${a} je mimo polici (0\u2013${Um-1})`);return}if(!r(a,c)){s.push(`${l}: na pat\u0159e ${a}, m\xEDsto ${c} nen\xED police`);return}let h=a+":"+c;n.has(h)?s.push(`${l} a ${n.get(h)}: oba na pat\u0159e ${a}, m\xEDsto ${c}`):n.set(h,l)};for(let a of e)for(let c=0;c<Eo;c++)o(a.patro,a.sloupec*Eo+c,"kachna");for(let a of i||[])for(let c=0;c<(H_[a.typ]||1);c++)o(a.patro,a.misto+c,a.typ);return s}var W_={bottle_amber:1.32,bottle_green:1.32,glass_striped:1.35,glass_clear:1.35,coin_silver:1.25,coin_gold:1.25,coin_stack:1.3,cactus_pot:1.2},X_=1.2,jk=Xe.policeDopredu+Xe.policePredek,Yk=.01,Zk=new ct,Ph=new I;function Kk(i,e){return i.position.set(0,0,0),i.quaternion.identity(),i.updateMatrixWorld(!0),Zk.setFromObject(i).getSize(Ph),(Fm.has(e)?Math.max(Ph.x,Ph.z):Ph.z)/2}var q_={coin_silver:1.7,coin_gold:1.7},Fm=new Set(["coin_silver","coin_gold"]),N_={glass_clear:.45},j_=2.4,$k=.16,Jk=.5,Qk=14,ez=.3,wo=i=>i*an,tz=new Set(["bottle_amber","bottle_green","glass_striped","glass_clear","cactus_pot","jug","barrel","coin_stack","lantern"]),nz=.9,iz={bottle_amber:.54,bottle_green:.54,glass_striped:.65,glass_clear:.65,cactus_pot:1.05,jug:.8,coin_stack:8,barrel:.4,crate:.35,wheel:.4,logs:.8,sack:.9,lantern:.4,skull:.55,hat:.3},sz=.6,rz=.9,oz=1e3/an**3,az=1,gn=[],Bh=new ct,qa=new I,km=new Pt,Mo=new I,rr=new I,Nh=new I,ja=[];function Vm(i){i.telo||!i.cekaNaTeleso||(i.cekaNaTeleso=!1,i.telo=_x({valec:i.valec,polomer:i.polomer,pul:i.pul,stred:i.stred,quat:i.q,hmotnost:i.hmotnost,bezKachen:!!i.bezKachen,hat:!!i.hat}))}function Y_(i,e,t=!1){let n=i.position.clone(),s=i.quaternion.clone();i.position.set(0,0,0),i.quaternion.identity(),i.updateMatrixWorld(!0),Bh.setFromObject(i),i.position.copy(n),i.quaternion.copy(s),i.updateMatrixWorld(!0),Bh.getSize(qa);let r=Bh.getCenter(new I),o=qa.clone().multiplyScalar(.5),a={m:i,telo:null,posun:r,pul:o,pul0:o.clone(),valec:!1,q:new Pt,stred:new I,dosah:0,mince:!1,bezKachen:!1,hat:e==="hat"};if(Fm.has(e))a.mince=!0,o.x=o.z=Math.max(o.x,o.z),a.stred.copy(r).add(i.position);else{a.valec=tz.has(e);let c=0;a.valec&&(c=Math.min(o.x,o.z)*nz,o.x=o.z=c),a.q.copy(i.quaternion),a.stred.copy(r).applyQuaternion(a.q).add(i.position);let l=(a.valec?Math.PI*c*c*o.y*2:8*o.x*o.y*o.z)*oz;a.hmotnost=(iz[e]??sz)*l*rz,a.polomer=c,a.cekaNaTeleso=!0,t?Vm(a):ja.push(a)}return a.dosah=o.length(),gn.push(a),a}function Z_(i,e,t=null){if(!i||!e)return null;if(e.attach(i),t&&i.scale.copy(t),i.updateMatrixWorld(!0),!qp()){Wp();for(let s of im())Xp(s.box,s.zed)}let n=Y_(i,"hat",!0);return n.telo&&n.telo.wakeUp(),Xa.push({k:n,cas:0,meritko:i.scale.clone()}),n}var zm=.8,Wa=.1,Pm=1,L_=.35,cz=.5,Xa=[];function lz(i){for(let e=Xa.length-1;e>=0;e--){let t=Xa[e],n=t.k.m;if(t.cas+=i,!n.visible){Xa.splice(e,1);continue}let s;if(t.cas<Wa)s=1-(1-zm)*(t.cas/Wa);else if(t.cas<Wa+Pm)s=zm;else{let o=Math.min(1,(t.cas-Wa-Pm)/L_);s=zm*(1-o*o*(3-2*o))}s=Math.max(s,1e-4),n.scale.copy(t.meritko).multiplyScalar(s);let r=t.k.telo;if(r&&r.shapes[0]&&r.shapes[0].halfExtents){let o=r.shapes[0],a=t.k.pul0,c=Math.max(cz*s,5e-4);o.halfExtents.set(a.x*c,a.y*c,a.z*c),o.updateConvexPolyhedronRepresentation(),r.updateBoundingRadius(),r.aabbNeedsUpdate=!0}if(t.k.mer=s,n.position.copy(t.k.posun).multiplyScalar(s).applyQuaternion(t.k.q).negate().add(t.k.stred),t.cas>=Wa+Pm+L_){t.k.telo&&hh(t.k.telo),t.k.telo=null;let o=gn.indexOf(t.k);o>=0&&gn.splice(o,1),n.visible=!1,n.parent&&n.parent.remove(n),Xa.splice(e,1)}}}var Nm="prop_coin_silver",D_="coin_silver",hz=1.25,Lh=5,uz=1.25,dz=3,U_=.05,fz=.16,pz=.9;async function K_(i,e,t=1,n=V_,s=F_){let r=Math.max(0,Math.round(t));if(r===0)return[];let o=n&&await An(n,Nm,{volitelny:!0})||await An(s,Nm,{volitelny:!0});if(o||console.warn("[rekvizity] mince z kachny: model "+Nm+" nen\xED v "+n+" ani v "+s),!o)return[];let a=r>1?Math.min(fz,pz/(r-1)):0,c=[],l=[o.objekt];for(let h=1;h<r;h++)l.push(o.objekt.clone(!0));for(let h=0;h<r;h++){let d=l[h];Ks(d),d.scale.multiplyScalar(W_[D_]||X_),d.scale.z*=q_[D_]||1,h===0&&(d.updateMatrixWorld(!0),Bh.setFromObject(d).getSize(qa));let u=Math.max(qa.x,qa.y),f=h/Lh|0,g=Math.min(Lh,r-f*Lh),y=h-f*Lh-(g-1)/2;d.position.set(e.x+y*u*hz,e.y+f*u*uz-Math.abs(y)*dz,e.z+u*.5),d.userData.odlesk=[],d.traverse(m=>{!m.isMesh||m.userData.obrys||!m.material.emissive||(m.material=m.material.clone(),d.userData.odlesk.push(m.material))}),d.userData.zKachny=!0,i.add(d),Q_(d,h*U_,Hm+h*Math.max(0,a-U_)),c.push(d)}return c}var mz=.85,So=[],Lm=-1;function gz(){if(!qp()){Lm=-1;return}if(!(Lm===Cm()&&So.svet===lh())){if(So.svet===lh())for(let i of So)hh(i);So=[],So.svet=lh(),Lm=Cm();for(let i of z_()){if(i.terc)continue;let e=i.polomery;So.push(Mx(i.stred,Math.max(e.x,e.z)*mz,e.y*2))}}}var Hm=.34,yz=.55,vz=40,xz=.4,_z=.45,B_=6,Bm=.6,$_=.9,bz=13,Mz=22,To={cil:null,doletela:null};function J_(i){To={...To,...i}}var or=[],Dh=new I,Dm=new I;function Q_(i,e=0,t=Hm){if(i.userData.sebrana=!0,bt("mince:sebrana",{zKachny:!!i.userData.zKachny,patro:i.userData.patro}),e>0)i.visible=!1;else{for(let n of i.userData.odlesk||[])n.emissive.setScalar($_);i.scale.multiplyScalar(1+Bm)}or.push({m:i,t:-e,cekani:t,leti:!1,zx:i.position.x,zy:i.position.y,zz:i.position.z,meritko:e>0?i.scale.clone():i.scale.clone().divideScalar(1+Bm)})}function Sz(i,e){let t=To.cil?To.cil():null;Dh.set(t?t.x:0,t?t.y:.8,.5).unproject(Ze).sub(Ze.position).normalize();let n=(i-Ze.position.z)/Dh.z;e.set(Ze.position.x+Dh.x*n,Ze.position.y+Dh.y*n,i)}function Ez(i){if(or.length){Ze.updateMatrixWorld();for(let e=or.length-1;e>=0;e--){let t=or[e],n=t.t;if(t.t+=i,t.t<0)continue;if(n<0&&(t.m.visible=!0),!t.leti){let o=Math.exp(-t.t*bz);t.m.rotation.y+=(B_+Mz*o)*i,t.m.scale.copy(t.meritko).multiplyScalar(1+Bm*o);for(let a of t.m.userData.odlesk||[])a.emissive.setScalar($_*o);if(t.m.position.y=t.zy+Math.sin(t.t*7)*3+t.t*22,t.t>=(t.cekani??Hm)){t.leti=!0,t.t=0,t.zy=t.m.position.y;for(let a of t.m.userData.odlesk||[])a.emissive.setScalar(0)}continue}t.m.rotation.y+=B_*i;let s=Math.min(1,t.t/yz),r=s*s*(3-2*s);if(Sz(t.zz,Dm),t.m.position.set(t.zx+(Dm.x-t.zx)*r,t.zy+(Dm.y-t.zy)*r-Math.sin(Math.PI*r)*vz,t.zz),t.m.position.lerp(Ze.position,_z*Math.sin(Math.PI*r)),t.m.scale.copy(t.meritko).multiplyScalar(1-xz*s),s>=1){if(t.m.visible=!1,t.m.userData.zKachny&&t.m.parent){t.m.parent.remove(t.m);for(let o of t.m.userData.odlesk)o.dispose()}or.splice(e,1),To.doletela&&To.doletela()}}}}var Ya=new I,Ao=new I,Uh=1/30;function eb(i,e,t=1){let n=Math.hypot(e.x,e.y,e.z)*Uh;for(let s=0;s<gn.length;s++){let r=gn[s],o=i.x-r.stred.x,a=i.y-r.stred.y,c=i.z-r.stred.z,l=r.dosah+n;if(o*o+a*a+c*c>l*l)continue;km.copy(r.q).invert(),rr.set(e.x*Uh,e.y*Uh,e.z*Uh),Mo.set(o,a,c).sub(rr).applyQuaternion(km),rr.applyQuaternion(km);let h=0,d=1,u=-1,f=!1;for(let g=0;g<3;g++){let y=Mo.getComponent(g),m=rr.getComponent(g),p=r.pul.getComponent(g);if(Math.abs(m)<1e-9){if(y<-p||y>p){f=!0;break}continue}let v=(-p-y)/m,_=(p-y)/m;if(v>_){let x=v;v=_,_=x}if(v>h&&(h=v,u=g),_<d&&(d=_),h>d){f=!0;break}}if(!f)return Mo.addScaledVector(rr,h),u<0?Nh.copy(rr).negate():r.valec&&u!==1?Nh.set(Mo.x,0,Mo.z):Nh.set(0,0,0).setComponent(u,rr.getComponent(u)>0?-1:1),Ao.copy(Nh).normalize().applyQuaternion(r.q),Ya.copy(Mo).applyQuaternion(r.q).add(r.stred).addScaledVector(Ao,3),!r.telo&&r.cekaNaTeleso&&Vm(r),r.telo?Ex(r.telo,Ya,e,t,Ao):r.mince&&(gn.splice(s,1),Q_(r.m)),!0}return!1}var Om=0;async function tb(i,e,t=F_,n=[],s=V_){let r=++Om;if(!Array.isArray(e)||!e.length)return null;for(let d of qk(e,n))console.warn("[rekvizity] "+d);let o=await Promise.all(e.map(async d=>s&&await An(s,"prop_"+d.typ,{volitelny:!0})||An(t,"prop_"+d.typ,{volitelny:!0})));if(r!==Om)return null;let a=new Wt;a.name="rekvizity",gn=[],ja=[],Wp();for(let d of im())Xp(d.box,d.zed);let c=[],l=[];e.forEach((d,u)=>{if(!o[u])return;let f=o[u].objekt;Ks(f),f.scale.multiplyScalar(d.mer||W_[d.typ]||X_),f.scale.z*=q_[d.typ]||1;let g=Kk(f,d.typ);f.position.set(Xk(d.misto,H_[d.typ]||1)+wo(d.dx||0),ji(d.patro)+wo(d.vyska??Bk[d.typ]??0),Nt+(d.dz!==void 0?wo(d.dz):wo(jk-Yk)-g)),f.rotation.y=Rt.degToRad(Wk(d)),N_[d.typ]&&f.traverse(y=>{if(!y.isMesh)return;let m=y.material;if(y.material=m.clone(),y.material.transparent=!0,l.push(y.material),y.userData.obrys){y.material.color=m.color,y.material.userData.tloustka=m.userData.tloustka,y.material.onBeforeCompile=m.onBeforeCompile,y.renderOrder=-2;return}y.material.opacity=N_[d.typ],y.renderOrder=-3,y.castShadow=!1}),Fm.has(d.typ)&&(f.userData.patro=d.patro,f.userData.odlesk=[],f.traverse(y=>{!y.isMesh||y.userData.obrys||!y.material.emissive||(y.material=y.material.clone(),f.userData.odlesk.push(y.material))}),c.push(f)),a.add(f),Y_(f,d.typ)});let h=new Map;for(let d of c)h.has(d.userData.patro)||h.set(d.userData.patro,[]),h.get(d.userData.patro).push(d);for(let d of h.values())d.sort((u,f)=>u.position.x-f.position.x),d.forEach((u,f)=>{u.userData.faze=-f*$k*(Math.PI*2/j_)});return a.userData.tocive=c,a.userData.kopie=l,i.add(a),Gm.add(a),a}var Gm=new Set,O_=0;function nb(i){O_+=i;let e=O_*(Math.PI*2/j_);for(let n of Gm)for(let s of n.userData.tocive){if(s.userData.sebrana)continue;let r=e+s.userData.faze;s.rotation.y=r;let o=Math.pow(Math.max(0,Math.cos(2*(r-ez))),Qk)*Jk;for(let a of s.userData.odlesk)a.emissive.setScalar(o)}for(Ez(i),lz(i);ja.length;){let n=ja.shift();if(n.cekaNaTeleso&&gn.includes(n)){Vm(n);break}}if(gz(),!wx(i))return;let t=ji(0)-wo(az);for(let n=gn.length-1;n>=0;n--){let s=gn[n];s.telo&&(s.q.set(s.telo.quaternion.x,s.telo.quaternion.y,s.telo.quaternion.z,s.telo.quaternion.w),s.stred.set(s.telo.position.x,s.telo.position.y,s.telo.position.z),s.m.quaternion.copy(s.q),s.m.position.copy(s.posun).multiplyScalar(s.mer??1).applyQuaternion(s.q).negate().add(s.stred),s.stred.y<t&&(s.m.visible=!1,hh(s.telo),gn.splice(n,1)))}}function ib(i,e){if(Om++,e){i.remove(e),Gm.delete(e),gn.length&&gn[0].m.parent===e&&(gn=[],ja=[],yx()),or=or.filter(t=>t.m.parent!==e);for(let t of e.userData.tocive||[])for(let n of t.userData.odlesk)n.dispose();for(let t of e.userData.kopie||[])t.dispose()}}var sb=1,wz={jmeno:"nouzovy",police:[{patro:1,od:0,do:4}],kachny:[{patro:1,sloupec:2}]};function Az(){return qi&&qi.verze===sb&&Array.isArray(qi.useky)?qi.useky:[]}function Wm(i=0){let e=Az(),t=typeof i=="string"&&!/^\d+$/.test(i)?e.find(s=>s&&s.jmeno===i):e[Number(i)];if(!t)return console.warn("[useky] \xFAsek "+i+" v data/useky.json nen\xED, jedu na nouzov\xE9m"),wz;let n=(t.kachny||[]).map(s=>({objeveni:0,...s,mince:typeof s.mince=="number"?Math.max(0,Math.round(s.mince)):s.mince?1:0}));return G_({police:[],...t,kachny:n})}function Tz(){return qi&&qi.verze===sb&&Array.isArray(qi.levely)?qi.levely:[]}function rb(i=0){let e=Tz(),t=typeof i=="string"&&!/^\d+$/.test(i)?e.find(o=>o&&o.jmeno===i):e[Number(i)];if(!t||!Array.isArray(t.useky)||!t.useky.length)return null;let n=0,s=0,r=[];for(let o of t.useky){let a=typeof o=="string"?o:o&&o.usek,c=o&&o.smer||null;r.length&&(c==="nahoru"?s++:c==="dolu"?s--:c==="vlevo"?n--:n++),r.push({usek:Wm(a),smer:c,sloupec:n,radek:s})}return{jmeno:t.jmeno||"level",useky:r}}function Ki(i,e){let t=e.parentElement||document.body;i.parentElement!==t&&(t.appendChild(i),i.style.position="absolute");let n=e.getBoundingClientRect(),s=t.getBoundingClientRect();return{left:n.left-s.left-t.clientLeft+t.scrollLeft,top:n.top-s.top-t.clientTop+t.scrollTop,width:n.width,height:n.height}}var Rz=54/Math.sqrt(740),Cz=28,ob="#fbf1dc",ab="#2c1a0d",yn=null,Xm=new I,cb=NaN,lb=NaN,hb=0,Za=null;function Iz(){let i='<circle cx="27" cy="27" r="15.5"/><path d="M27 5.5v11M27 37.5v11M5.5 27h11M37.5 27h11"/>';return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" style="display:block;width:100%;height:100%;background:none;border:0;border-radius:0;overflow:visible"><g fill="none" stroke="${ab}" stroke-width="7.5" stroke-linecap="round">${i}</g><g fill="none" stroke="${ob}" stroke-width="3.6" stroke-linecap="round">${i}</g><circle cx="27" cy="27" r="4.4" fill="${ab}"/><circle cx="27" cy="27" r="2.4" fill="${ob}"/></svg>`}function ub(){if(yn)return yn;yn=document.createElement("div"),yn.id="miridlo",yn.style.cssText="position:fixed;left:0;top:0;pointer-events:none;will-change:transform;z-index:5;visibility:hidden",yn.innerHTML=Iz(),document.body.appendChild(yn);for(let i of["resize","orientationchange"])window.addEventListener(i,()=>{Za=null});return yn}function db(i,e,t,n=!1){if(!yn)return;i.updateMatrixWorld(),Xm.set(e.x,e.y,e.z).project(i),(n||!Za||!Za.height)&&(Za=Ki(yn,t));let s=Za,r=Math.max(Cz,Math.round(Math.sqrt(s.width)*Rz)),o=Math.round((s.left+(Xm.x+1)/2*s.width-r/2)*2)/2,a=Math.round((s.top+(1-Xm.y)/2*s.height-r/2)*2)/2;r!==hb&&(yn.style.width=yn.style.height=r+"px",hb=r),(o!==cb||a!==lb)&&(yn.style.transform=`translate3d(${o}px,${a}px,0)`,cb=o,lb=a),yn.style.visibility=s.width>0&&s.height>0?"visible":"hidden"}var kz=.11,fb=.385,pb=.092,zz=34,qm="#fbf1dc",gb="#1a1d26",Pz="#262b3a",ln=null,Ro=null,Dn=null,Cs=null,Ka=null,mb="",jm={x:0,y:0},Ym=!1;function Nz(){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" style="display:block;width:100%;height:100%;background:none;border:0;border-radius:0;overflow:visible"><circle cx="30" cy="30" r="28" fill="${gb}"/><circle cx="30" cy="30" r="24.5" fill="#aeb2bb"/><circle cx="30" cy="28.5" r="23" fill="#d9dce2"/><circle cx="30" cy="29" r="17.5" fill="#bfc3cb"/><circle cx="30" cy="30" r="16.5" fill="#cfd2d9"/><path d="M19 37.5l-2.2-14 7.2 6.2L30 20l6 9.7 7.2-6.2-2.2 14z" fill="#f4f5f8" stroke="#8d929c" stroke-width="1.6" stroke-linejoin="round"/><rect x="19.5" y="39.3" width="21" height="3.6" rx="1.6" fill="#f4f5f8" stroke="#8d929c" stroke-width="1.4"/></svg>`}function yb(i=0){if(ln)return Oh(i),ln;ln=document.createElement("div"),ln.id="mince",ln.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:4;visibility:hidden",Dn=document.createElement("div"),Dn.style.cssText=`position:absolute;box-sizing:border-box;background:${Pz};border-style:solid;border-color:${gb};color:${qm};font-family:'Lilita One','Arial Rounded MT Bold',Arial,sans-serif;white-space:nowrap;display:flex;align-items:center;line-height:1`,Ro=document.createElement("span"),Ro.style.display="inline-block",Dn.appendChild(Ro),Cs=document.createElement("div"),Cs.style.cssText="position:absolute;left:0;top:0",Cs.innerHTML=Nz(),ln.append(Dn,Cs),document.body.appendChild(ln);for(let e of["resize","orientationchange"])window.addEventListener(e,()=>{Ka=null});return Oh(i),ln}function Oh(i){Ro&&(Ro.textContent=String(Math.max(0,Math.floor(i||0))))}function vb(i,e=!1){if(!ln)return;(e||!Ka||!Ka.height)&&(Ka=Ki(ln,i));let t=Ka,n=`${Math.round(t.left)}|${Math.round(t.top)}|${Math.round(t.width)}|${Math.round(t.height)}`;if(n===mb)return;if(mb=n,!(t.width>0&&t.height>0)){ln.style.visibility="hidden",Ym=!1;return}let s=Math.max(zz,Math.round(t.width*kz));ln.style.transform=`translate3d(${Math.round(t.left+t.width*fb)}px,${Math.round(t.top+t.height*pb-s/2)}px,0)`,Cs.style.width=Cs.style.height=s+"px",jm.x=(fb+s/2/t.width)*2-1,jm.y=1-pb*2,Ym=!0;let r=Math.round(s*.72);Dn.style.left=Math.round(s*.5)+"px",Dn.style.top=Math.round((s-r)/2)+"px",Dn.style.height=r+"px",Dn.style.minWidth=Math.round(s*1.72)+"px",Dn.style.padding=`0 ${Math.round(s*.26)}px 0 ${Math.round(s*.68)}px`,Dn.style.borderWidth=Math.max(2,Math.round(s*.07))+"px",Dn.style.borderRadius=r+"px",Dn.style.fontSize=Math.round(s*.53)+"px",ln.style.visibility="visible"}function xb(){return ln&&Ym?jm:null}function _b(){!ln||!Cs.animate||(Cs.animate([{transform:"scale(1)",filter:"brightness(1)"},{transform:"scale(1.30)",filter:"brightness(1.9)",offset:.22},{transform:"scale(.94)",filter:"brightness(1)",offset:.55},{transform:"scale(1)",filter:"brightness(1)"}],{duration:400,easing:"ease-out"}),Ro.animate([{transform:"scale(1)",color:qm},{transform:"scale(1.22)",color:"#ffffff",offset:.25},{transform:"scale(1)",color:qm}],{duration:400,easing:"ease-out"}))}function Fh(i,e,t=null,n=16){let s=[],r=(o,a,c)=>{for(let l=0;l<c;l++){let h=l/c*Math.PI*2;s.push(`${(o+e*Math.cos(h)).toFixed(3)}em ${(a+e*Math.sin(h)).toFixed(3)}em 0 ${i}`)}};return r(0,0,n),t&&(s.push(`${t.x}em ${t.y}em 0 ${i}`),r(t.x,t.y,Math.max(8,n>>1))),s.join(",")}var Lz=4,$m=1,bb=.18,Dz=.6,Zm=.55,Mb=.07,Uz=.058,Bz=16,Sb="#fbf1dc",Oz="#1a1d26",Is=[],Km=new I,Fz="#ffb21e";function Vz(i){for(let e=0;e<Lz;e++){let t=document.createElement("div");t.className="napis",t.style.cssText=`position:absolute;left:0;top:0;pointer-events:none;z-index:4;visibility:hidden;font-family:'Lilita One','Arial Rounded MT Bold',Arial,sans-serif;white-space:nowrap;color:${Sb};text-shadow:${Fh(Oz,.045,{x:0,y:.07})};transform-origin:50% 100%;will-change:transform,opacity`,Ki(t,i),Is.push({prvek:t,zivy:!1,t:0,p:new I,obrazovka:!1,nx:0,ny:0,doba:$m})}}function Eb(i){Is.length||Vz(i);let e=Is.find(t=>!t.zivy);if(!e){e=Is[0];for(let t of Is)t.t>e.t&&(e=t)}return e.zivy=!0,e.t=0,e.doba=$m,e}function wb(i,e,t,n=Sb){let s=Eb(t);s.obrazovka=!1,s.p.set(e.x,e.y,e.z),s.prvek.textContent=i,s.prvek.style.color=n,s.prvek.style.visibility="visible"}function Ab(i,e,t,n,{barva:s=Fz,doba:r=$m}={}){let o=Eb(n);o.obrazovka=!0,o.nx=e,o.ny=t,o.doba=r,o.prvek.textContent=i,o.prvek.style.color=s,o.prvek.style.visibility="visible"}function Tb(i,e,t){let n=0;for(let o of Is)o.zivy&&n++;if(!n)return;let s=Ki(Is[0].prvek,t),r=Math.max(Bz,s.width*Uz);for(let o of Is){if(!o.zivy)continue;o.t+=i;let a=o.t/o.doba;if(a>=1){o.zivy=!1,o.prvek.style.visibility="hidden";continue}let c,l;o.obrazovka?(c=s.left+o.nx*s.width,l=s.top+o.ny*s.height-a*Mb*.5*s.height):(Km.copy(o.p).project(e),c=s.left+(Km.x+1)/2*s.width,l=s.top+(1-Km.y)/2*s.height-a*Mb*s.height);let h=o.t<bb?1+Dz*(1-o.t/bb)**2:1,d=a<Zm?1:1-(a-Zm)/(1-Zm),u=o.prvek.style;u.fontSize=r+"px",u.transform=`translate(-50%,-100%) translate(${c}px,${l}px) scale(${h})`,u.opacity=d}}var vn={objem:140,voda:140,podil:1},Jm=!1;function Qm(i){vn.objem=Math.max(1,+i||vn.objem),vn.voda=vn.objem,vn.podil=1,Jm=!1,bt("voda:zmena",vn)}function Rb(i,e){Jm||!(e>0)||!(i>0)||(vn.voda=Math.max(0,vn.voda-yo*e*i),vn.podil=vn.voda/vn.objem,bt("voda:zmena",vn),vn.voda<=0&&(Jm=!0,bt("voda:dosla",vn)))}var Cb=.7,Ib=.245,kb=.092,Hz=.11*.72,Gz=14,zb="#1a1d26",Wz="linear-gradient(180deg,#3b4255 0%,#272c3b 38%,#1b1f29 100%)",Xz="inset 0 .18em .25em rgba(255,255,255,.14), inset 0 -.28em .35em rgba(0,0,0,.5)",Lb=(i,e,t)=>`linear-gradient(180deg,${i} 0%,${e} 48%,${t} 100%)`,i0=Lb(ar("#2cb3ce",255,.55),ar("#2cb3ce",255,.12),ar("#2cb3ce",0,.3)),qz=4,Pb=.45;function ar(i,e,t){let n=parseInt(i.replace("#",""),16),s=r=>Math.round(r+(e-r)*t);return`rgb(${s(n>>16&255)},${s(n>>8&255)},${s(n&255)})`}function Db(i){/^#[0-9a-f]{6}$/i.test(i||"")&&(i0=Lb(ar(i,255,.55),ar(i,255,.12),ar(i,0,.3)),cr=ar(i,255,.45),Qn&&(Qn.style.background=i0))}var St=null,Qn=null,e0=null,t0=null,cr="#8ae9fb",Vh="perspective(10em) rotateX(22deg) rotateY(-8deg)",jz=.34,Yz=.3,hn=null,Co=null,Qa=null,$a=[],Ja=null,Nb="",n0=1;function Ub(){if(St)return St;St=document.createElement("div"),St.id="voda",St.style.cssText=`position:fixed;left:0;top:0;pointer-events:none;z-index:4;visibility:hidden;box-sizing:border-box;background:${Wz};border-style:solid;border-color:${zb};overflow:hidden;box-shadow:${Xz}`,Qn=document.createElement("div"),Qn.style.cssText=`position:absolute;left:0;top:0;bottom:0;width:100%;background:${i0};box-shadow:inset 0 -.2em .3em rgba(0,0,0,.25);transition:width .12s linear`,e0=document.createElement("div"),e0.style.cssText="position:absolute;left:.3em;right:.1em;top:.16em;height:22%;border-radius:1em 0 0 1em;background:linear-gradient(90deg,rgba(255,255,255,.55),rgba(255,255,255,.18) 60%,rgba(255,255,255,.1))",Qn.appendChild(e0),t0=document.createElement("div"),t0.style.cssText="position:absolute;right:0;top:0;bottom:0;width:.14em;background:linear-gradient(180deg,rgba(255,255,255,.85),rgba(255,255,255,.35) 60%,rgba(255,255,255,.15))",Qn.appendChild(t0);for(let i=0;i<qz;i++){let e=document.createElement("div"),t=.1+i*7%5*.035,n=6+i*37%88;e.style.cssText=`position:absolute;left:${n}%;bottom:-${t}em;width:${t}em;height:${t}em;border-radius:50%;background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 .02em rgba(255,255,255,.45);opacity:0`,Qn.appendChild(e),e.animate&&e.animate([{transform:"translateY(0)",opacity:0},{opacity:Pb,offset:.2},{opacity:Pb,offset:.75},{transform:`translateY(calc(-1em - ${t}em))`,opacity:0}],{duration:2600+i*530%1500,delay:i*910%2600,iterations:1/0,easing:"cubic-bezier(.45,.05,.55,.95)"})}St.appendChild(Qn),document.body.appendChild(St),hn=document.createElement("div"),hn.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:5;visibility:hidden;display:flex;flex-direction:column;align-items:center;transform-origin:50% 100%;will-change:transform;font-family:'Lilita One','Arial Rounded MT Bold',Arial,sans-serif;line-height:1;white-space:nowrap",Co=document.createElement("div"),Co.style.cssText=`color:${cr};text-shadow:${Fh(zb,.045,{x:.04,y:.073})};transform-origin:50% 100%;transform:scaleY(0);will-change:transform`,Qa=document.createElement("div"),Qa.style.cssText=`height:.07em;width:100%;margin-top:.04em;border-radius:1em;background:${cr};box-shadow:0 0 .12em rgba(255,255,255,.6);transform:scaleX(0);will-change:transform`,hn.append(Co,Qa),hn.style.transform=Vh,document.body.appendChild(hn);for(let i of["resize","orientationchange"])window.addEventListener(i,()=>{Ja=null});return s0(1),St}function s0(i){if(!Qn)return;let e=Math.max(0,Math.min(1,i));(Math.abs(e-n0)>.002||e===0!=(n0===0))&&(n0=e,Qn.style.width=(e*100).toFixed(1)+"%")}function Bb(i,{doba:e=1.8}={}){if(!hn||!hn.animate)return;for(let u of $a)u.cancel();$a=[],Co.textContent=i,Co.style.color=cr,Qa.style.background=cr,hn.style.visibility="visible";let t=jz,n=Yz,s=1-n,r={duration:Math.round(e*1e3),fill:"both"},o="#ffffff",a="0 50%",c="100% 50%",l=(u,f,g)=>({offset:u,transform:`scaleX(${f})`,transformOrigin:g});$a.push(Qa.animate([l(0,0,a),l(.4*t,1,a),l(.7*t,1,a),l(.7*t+1e-4,1,c),l(t,0,c),l(s,0,a),l(s+.35*n,1,a),l(1-.3*n,1,a),l(1-.3*n+1e-4,1,c),l(1,0,c)],{...r,easing:"ease-out"}));let h=(u,f,g)=>({offset:u,transform:`scaleY(${f})`,color:g});$a.push(Co.animate([h(0,0,o),h(.4*t,0,o),h(.75*t,1.22,o),h(t,1,cr),h(s+.35*n,1,cr),h(s+.55*n,1.14,o),h(1-.3*n,0,o),h(1,0,o)],{...r,easing:"ease-out"}));let d=hn.animate([{transform:Vh+" translateY(0)"},{transform:Vh+" translateY(-.1em)"},{transform:Vh+" translateY(0)"}],{duration:r.duration,easing:"ease-in-out"});$a.push(d),d.onfinish=()=>{hn.style.visibility="hidden"},St.animate&&St.animate([{transform:St.style.transform+" scale(1)"},{transform:St.style.transform+" scale(1.07)",offset:.2},{transform:St.style.transform+" scale(1)"}],{duration:450,easing:"ease-out"})}function Ob(i,e=!1){if(!St)return;(e||!Ja||!Ja.height)&&(Ja=Ki(St,i));let t=Ja,n=`${Math.round(t.left)}|${Math.round(t.top)}|${Math.round(t.width)}|${Math.round(t.height)}`;if(n===Nb)return;if(Nb=n,!(t.width>0&&t.height>0)){St.style.visibility="hidden";return}let s=Math.max(Gz,Math.round(t.width*Hz)),r=Math.round(t.width*Ib);St.style.transform=`translate3d(${Math.round(t.left+t.width*Cb)}px,${Math.round(t.top+t.height*kb-s/2)}px,0)`,St.style.width=r+"px",St.style.height=s+"px",St.style.borderWidth=Math.max(2,Math.round(s*.1))+"px",St.style.borderRadius=s+"px",St.style.fontSize=s+"px",Qn.style.borderRadius=`${s}px 0 0 ${s}px`,St.style.visibility="visible",hn&&(hn.style.fontSize=Math.round(s*1.4)+"px",hn.style.left=Math.round(t.left+t.width*(Cb+Ib/2))+"px",hn.style.top=Math.round(t.top+t.height*kb-s/2-3)+"px",hn.style.translate="-50% -100%")}var Fb=1500,Wh=new be(4893149),tc=new be(16777215),Vb=new be;function Zz(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(16,16,13,0,Math.PI*2),e.fill();let t=new ds(i);return t.generateMipmaps=!1,t.minFilter=zt,t.magFilter=zt,t}var Xh=700,qh=260,jh=Xh+qh,hr=new Float32Array(jh*3),c0=new Float32Array(jh),l0=new Float32Array(jh),ur=new Float32Array(jh*3),Hb=Array.from({length:Xh},()=>({ziva:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,t:0,zivot:0,vel:0,r:1,g:1,b:1})),ti=new Mt;ti.setAttribute("position",new at(hr,3));ti.setAttribute("velikost",new at(c0,1));ti.setAttribute("kryti",new at(l0,1));ti.setAttribute("barva",new at(ur,3));ti.setDrawRange(0,0);var Gb=new kn({uniforms:{mapa:{value:Zz()},mer:{value:400}},transparent:!0,depthWrite:!1,vertexShader:`
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
    }`}),Wb=new Jr(ti,Gb);Wb.frustumCulled=!1;function Xb(i,e,t,n,s,r,o,a){for(let c=0;c<Xh;c++){let l=Hb[c];if(l.ziva)continue;l.ziva=!0,l.t=0,l.zivot=a,l.x=i,l.y=e,l.z=t,l.vx=n,l.vy=s,l.vz=r,l.vel=o;let h=Vb.copy(Wh).lerp(tc,Math.random()*.25);l.r=h.r,l.g=h.g,l.b=h.b;return}}var qb=Array.from({length:qh},()=>({ziva:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,t:0,zivot:0,r:1,g:1,b:1})),Kz=.95,d0=18,Hh={r:0,g:0,b:0};function jb(i,e,t,n,s,r){for(let o=0;o<qh;o++){let a=qb[o];if(!a.ziva){a.ziva=!0,a.t=0,a.zivot=.35+Math.random()*.4,a.x=i,a.y=e,a.z=t,a.vx=n,a.vy=s,a.vz=r,Vb.copy(tc).lerp(Wh,Math.random()<.5?0:.45+Math.random()*.55).getRGB(Hh,kt),a.r=Hh.r,a.g=Hh.g,a.b=Hh.b;return}}}var Yb=new us(new Uint8Array([255,255,255,255]),1,1);Yb.needsUpdate=!0;var Zb=new Qr(1,12,8),nc=new wn({color:4893149,map:Yb,transparent:!0,opacity:.94}),f0=new Tt({color:1258820,side:xt,transparent:!0,opacity:1,depthWrite:!1}),$i=new Je(Zb,nc),p0=new Je(Zb,f0);p0.scale.setScalar(1.18);p0.renderOrder=-1;$i.add(p0);$i.visible=!1;$i.name="kontakt-vody";var h0=new I,u0=new I,$z=new I(0,0,1),Gh=0,Io=0,ec=0,Kb=8;function Yh(i,e){Gh===0?(h0.copy(i),u0.copy(e)):(h0.lerp(i,.5),u0.lerp(e,.5)),Gh++}var Jz={mnozstvi:.9,velikost:1,velkych:.6,rozlet:.9,kontakt:.9,kontaktBarva:"#ffffff",kontaktObrysBarva:"#133544"},jt={...Jz};d0=18*jt.velikost;var r0=0;function $b(i){jt={...jt,...i},d0=18*jt.velikost,Jb()}function Jb(){let i=jt.kontaktBarva||Wh;nc.color.set(i),nc.emissive.set(i).multiplyScalar(.3),jt.kontaktObrysBarva&&f0.color.set(jt.kontaktObrysBarva)}function Qb(i){i.add(Wb),i.add($i)}function eM(i,e){Gb.uniforms.mer.value=i*.5*e}function tM(i){i&&(i.barva&&(Wh.set(i.barva),Jb()),i.obrysBarva&&!jt.kontaktObrysBarva&&f0.color.set(i.obrysBarva),i.polomer&&(Kb=i.polomer),typeof i.pruhlednost=="number"&&(nc.opacity=i.pruhlednost/100))}var ei=new I,vi=new I,o0=new I,lr=new I;function Zh(i,e,t,n,s=1){let r=Math.max(1,Math.round(n*jt.mnozstvi));Math.abs(e.y)>.9?o0.set(1,0,0):o0.set(0,1,0),ei.crossVectors(e,o0).normalize(),vi.crossVectors(e,ei).normalize();let o=t.length();for(lr.copy(t).addScaledVector(e,-t.dot(e)).normalize(),r0+=jt.velkych*Math.max(.4,s);r0>=1;){r0-=1;let a=Math.random()*Math.PI*2,c=o*(.04+Math.random()*.05)*jt.rozlet,l=c*(.25+Math.random()*.3),h=c*(.45+Math.random()*.3),d=c*(.5+Math.random()*.5);jb(i.x+e.x*2,i.y+e.y*2,i.z+e.z*2,ei.x*Math.cos(a)*l+vi.x*Math.sin(a)*l+e.x*h+lr.x*l,ei.y*Math.cos(a)*l+vi.y*Math.sin(a)*l+e.y*h+lr.y*l+d,ei.z*Math.cos(a)*l+vi.z*Math.sin(a)*l+e.z*h+lr.z*l)}for(let a=0;a<r;a++){let c=Math.random()<.65,l=Math.random()*Math.PI*2,h=Math.cos(l),d=Math.sin(l),u=o*(c?.05+Math.random()*.11:.11+Math.random()*.15),f=u*(.1+Math.random()*.22),g=u*(.25+Math.random()*.55),y=u*(.55+Math.random()*.75),m=(Math.random()-.5)*7,p=(Math.random()-.5)*7;Xb(i.x+ei.x*m+vi.x*p,i.y+ei.y*m+vi.y*p,i.z+ei.z*m+vi.z*p,ei.x*h*u+vi.x*d*u+e.x*f+lr.x*g,ei.y*h*u+vi.y*d*u+e.y*f+lr.y*g+y,ei.z*h*u+vi.z*d*u+e.z*f+lr.z*g,(c?6+Math.random()*4:11+Math.random()*6)*jt.velikost,c?.3+Math.random()*.26:.46+Math.random()*.36)}}var Qz=18,eP=80,tP=360,nP=.55,a0=14,xi=new I;function nM(i,e=1){let t=Math.round(Qz*e*Math.max(.4,jt.velkych)),n=Math.round(eP*e*jt.mnozstvi);for(let s=0;s<t+n;s++){let r=s<t,o=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*nP;xi.set(a*Math.cos(o),1,a*Math.sin(o)).normalize();let c=tP*(r?.55+Math.random()*.7:.3+Math.random()*.8)*jt.rozlet,l=(Math.random()*2-1)*a0,h=(Math.random()*2-1)*a0,d=(Math.random()*2-1)*a0,u=i.x+l+xi.x*4,f=i.y+h+xi.y*4,g=i.z+d+xi.z*4;r?jb(u,f,g,xi.x*c,xi.y*c,xi.z*c):Xb(u,f,g,xi.x*c,xi.y*c,xi.z*c,(8+Math.random()*7)*jt.velikost,.4+Math.random()*.4)}}var iP=2.8;function iM(i){ec+=i;let e=Math.min(1,Gh/2);if(Io+=(e-Io)*Math.min(1,i*(e>Io?22:9)),Gh=0,Io>.03&&jt.kontakt>0){let s=1+.16*Math.sin(ec*27)+.09*Math.sin(ec*11.3),r=Kb*(1.05+1.25*Io)*jt.kontakt*s;$i.visible=!0,$i.position.copy(h0),$i.quaternion.setFromUnitVectors($z,u0),$i.scale.set(r*(1+.09*Math.sin(ec*13.7)),r*(1+.09*Math.sin(ec*17)),r*.26),nc.opacity=.94*Math.min(1,Io*2.2)}else $i.visible=!1;let t=Math.exp(-iP*i),n=0;for(let s=0;s<Xh;s++){let r=Hb[s];if(!r.ziva)continue;if(r.t+=i,r.t>r.zivot){r.ziva=!1;continue}r.vy-=Fb*i,r.vx*=t,r.vy*=t,r.vz*=t,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i;let o=r.t/r.zivot;hr[n*3]=r.x,hr[n*3+1]=r.y,hr[n*3+2]=r.z,c0[n]=r.vel*(1-.2*o),l0[n]=o<.75?1:(1-o)*4;let a=Math.min(1,o*1.5);ur[n*3]=r.r+(tc.r-r.r)*a,ur[n*3+1]=r.g+(tc.g-r.g)*a,ur[n*3+2]=r.b+(tc.b-r.b)*a,n++}for(let s=0;s<qh;s++){let r=qb[s];if(r.ziva){if(r.t+=i,r.vy-=Fb*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,r.t>r.zivot){r.ziva=!1;continue}hr[n*3]=r.x,hr[n*3+1]=r.y,hr[n*3+2]=r.z,c0[n]=d0,l0[n]=Kz,ur[n*3]=r.r,ur[n*3+1]=r.g,ur[n*3+2]=r.b,n++}}return ti.setDrawRange(0,n),ti.attributes.position.needsUpdate=!0,ti.attributes.velikost.needsUpdate=!0,ti.attributes.kryti.needsUpdate=!0,ti.attributes.barva.needsUpdate=!0,n}var ni={x:0,y:260+js,z:Nt},Kh=new I,ko=null,zo=1,Un=1,$h=!1,dr=!1,x0=!1,fr=null,rc=null,Po=null,Jh=null,ic=0,sc=0;function No(i,e){x0||(Po=i,Jh=e,(fr===null||!(Yi().zpozdeniMireni>0))&&(fr=i,rc=e,ic=sc=0,oM()))}function oM(){let i=fr,e=rc,t=i/zo*2-1,n=e/Un*2-1;Rf(t,n),ni.z=Nt;let s=Math.tan(Ze.fov*Math.PI/360);Kh.set(t*s*Ze.aspect,-n*s,-1).applyQuaternion(Ze.quaternion);let r=(ni.z-Ze.position.z)/Kh.z;ni.x=Ze.position.x+Kh.x*r,ni.y=Ze.position.y+Kh.y*r}function aM(i){if(x0){rP(i);return}if(fr===null)return;let e=Yi().zpozdeniMireni;if(e>0){let t=4.74/Math.max(.04,e),n=1-.65*Math.min(1,Math.max(0,Yi().prekmitMireni||0)),s=Math.max(1,Math.ceil(i*t/.15)),r=i/s;for(let o=0;o<s;o++)ic+=(t*t*(Po-fr)-2*n*t*ic)*r,sc+=(t*t*(Jh-rc)-2*n*t*sc)*r,fr+=ic*r,rc+=sc*r}else fr=Po,rc=Jh,ic=sc=0;oM()}var sP=5.2,sM=0;function rP(i){sM+=i;let e=.5-.5*Math.cos(sM*Math.PI*2/sP);ni.z=Nt,ni.x=0,ni.y=-120+e*900,Rf(0,0)}var cM=.11,oP=1.8,lM=2;function hM(i){lM=i}var _0="nad-prstem";function uM(i){(i==="2d"||i==="nad-prstem")&&(_0=i)}function m0(i){return i.pointerType==="touch"||i.pointerType==="pen"}var g0=0,y0=0,v0=0;function aP(i,e){if(g0=i,y0=e,v0=performance.now(),_0==="2d"){Po===null&&No(zo/2,Un*.45);return}No(i,Math.max(Un*.04,e-Un*cM))}function cP(i,e){let t=performance.now(),n=Math.max(4,t-v0)/1e3,s=i-g0,r=e-y0;g0=i,y0=e,v0=t;let o=Math.hypot(s,r)/n,a=oP*(1+1.5*Math.pow(Math.min(o/2500,1),1.5)),c=Math.min(zo-8,Math.max(8,(Po??zo/2)+s*a)),l=(Jh??Un/2)+r*a;if(_0==="2d"){No(c,Math.min(Un*.78,Math.max(Un*.12,l)));return}let h=Math.max(Un*.04,e-Un*cM),d=Math.min(zo-8,Math.max(8,(Po??i)+s*lM));No(d,Math.min(h,Math.max(Un*.04,l)))}function rM(i){let e=ko.getBoundingClientRect();zo=e.width,Un=e.height;let t=i.clientX-e.left,n=i.clientY-e.top;return dM=m0(i)?1-n/Un*2:null,[t,n]}var dM=null;function fM(){return dM}function pM(i){ko=i;let e=t=>{t.cancelable&&t.preventDefault()};ko.addEventListener("touchstart",e,{passive:!1}),ko.addEventListener("touchmove",e,{passive:!1}),ko.addEventListener("pointermove",t=>{let[n,s]=rM(t);m0(t)?cP(n,s):No(n,s)}),ko.addEventListener("pointerdown",t=>{let[n,s]=rM(t);m0(t)?aP(n,s):No(n,s),dr=$h}),addEventListener("pointerup",()=>{dr=!1}),addEventListener("pointercancel",()=>{dr=!1}),addEventListener("keydown",t=>{t.code==="Space"&&$h&&(dr=!dr)})}function Qh(i){$h=i,i||(dr=!1)}function eu(){return $h&&(dr||x0)}var bM=330,A0=1,Uo=new I(10,-118,-158),lP=1,hP=.65,uP=40,MM=.22,SM=22,EM=8,T0=22,dP=.12,fP=.1,mM=90,pP=13,mP=.5;function gP(){let i=Yi();return i.zpozdeniPistole===void 0?{tuhost:Math.sqrt(mM),tlumeni:pP/(2*Math.sqrt(mM)),pomer:1}:i.zpozdeniPistole>0?{tuhost:4.74/Math.max(.04,i.zpozdeniPistole),tlumeni:1-.65*Math.min(1,Math.max(0,i.prekmitPistole||0)),pomer:mP/Math.max(.04,i.zpozdeniPistole)}:null}var wM=.004,R0=.35,AM=1.6,TM=.9,b0=1.7,RM=.7,CM=24,IM=.3,kM=7,zM=.1,yP=.25,vP=8.8,xP=.35,_P=.5,bP=.55,MP=1.6,SP=.42,EP=.28,_i={DECH_X:.9,DECH_Y:1.6,CHVENI:.7,NAKLON:.004,NAKLON_MAX:.35,ZKRUT:.22,SKUB_DOZADU:24,SKUB_NADSKOK:7,SKUB_ZVEDNUTI:.3,SKUB_ZKRUT:.1},wP={posunVlevo:22,posunVpravo:8,posunNahoru:22,dech:1,chveni:1,naklon:1,zkrut:1,skubDozadu:1,skubNadskok:1,skubZvednuti:1,skubZkrut:1,velikost:1};function PM(i){let e={...wP,...i||{}};SM=e.posunVlevo,EM=e.posunVpravo,T0=e.posunNahoru,TM=_i.DECH_X*e.dech,AM=_i.DECH_Y*e.dech,RM=_i.CHVENI*e.chveni,wM=_i.NAKLON*e.naklon,R0=_i.NAKLON_MAX*e.naklon,MM=_i.ZKRUT*e.zkrut,CM=_i.SKUB_DOZADU*e.skubDozadu,kM=_i.SKUB_NADSKOK*e.skubNadskok,IM=_i.SKUB_ZVEDNUTI*e.skubZvednuti,zM=_i.SKUB_ZKRUT*e.skubZkrut,A0=Math.max(.2,Math.min(3,e.velikost||1)),Dt&&Dt.scale.setScalar(bM*A0)}var NM=()=>Uo.z*Tf(),Dt=null,Bo=null,pr=new I,gM=new Pt,yM=new Pt,AP=new I,M0=new I,tu=new I,vM=new Pt,xM=new Pt,S0=new Sn,Ji=new I,ks=new I,oc=new I,Lo=0,C0=!0,E0=0,Do=0,w0=0,_M=new Pt,nu=0;async function LM(i,e){let t=++nu,[n,s]=await Promise.all([An(e,"hand",{volitelny:!0}),An(e,"gun",{volitelny:!0})]);return t!==nu||!n||!s?!1:(TP(),nu=t,Bo=s.objekt.getObjectByName("muzzle_anchor"),Bo?(Dt=new Wt,Dt.name="ruka",Dt.scale.setScalar(bM*A0),Dt.position.set(Uo.x,Uo.y,NM()),Ji.copy(Dt.position),ks.set(0,0,0),C0=!0,Dt.add(n.objekt,s.objekt),Dv(Dt),Dt.traverse(r=>{r.isMesh&&(r.castShadow=!1)}),Ze.add(Dt),Ze.parent||i.add(Ze),!0):(console.warn("[ruka] pistole nem\xE1 muzzle_anchor \u2014 voda z\u016Fstane v p\u016Fvodn\xEDm \xFAst\xED"),!1))}function TP(){nu++,Dt&&Ze.remove(Dt),Dt=null,Bo=null}function DM(i,e,t=!1){if(!Dt)return;if(Lo+=i,i>0){let u=wh(),f=yP/o_(),g=Rt.clamp(Math.pow(f,_P),bP,MP),y=(EP*u+(t?1-u:0))*g,m=vP*Math.pow(f,xP);w0+=((y-Do)*m*m-w0*2*SP*m)*Math.min(i,.5/m),Do+=w0*Math.min(i,.5/m)}Ze.updateMatrixWorld(),M0.set(e.x,e.y,e.z).project(Ze);let n=Rt.clamp(M0.x,-1,1),s=Rt.clamp(M0.y,-1,1),r=Uo.y+s*T0,o=fM();if(o!==null){Bo.getWorldPosition(tu),Ze.worldToLocal(tu);let u=-tu.z*Math.tan(Ze.fov*Math.PI/360);r=Math.min(fP,o+dP)*u-(tu.y-Dt.position.y),r=Math.min(r,Uo.y+T0)}oc.set(Uo.x+n*(n<0?SM:EM),r,NM());let a=gP();if(C0||i<=0||!a)Ji.copy(oc),ks.set(0,0,0),C0=!1;else{let u=Math.max(1,Math.ceil(i*a.tuhost/.15)),f=i/u,g=a.tuhost*a.tuhost,y=2*a.tlumeni*a.tuhost;for(let m=0;m<u;m++)ks.x+=((oc.x-Ji.x)*g-ks.x*y)*f,ks.y+=((oc.y-Ji.y)*g-ks.y*y)*f,Ji.addScaledVector(ks,f);Ji.z=oc.z}let c=t?RM:0;Dt.position.set(Ji.x+Math.sin(Lo*b0*.6)*TM+Math.sin(Lo*23)*c*.6,Ji.y+Math.sin(Lo*b0)*AM+Math.sin(Lo*31+1.3)*c+Do*kM,Ji.z+Do*CM),Dt.updateMatrixWorld(),Bo.getWorldPosition(li),t_(li,AP.set(e.x,e.y,e.z),pr),Ze.getWorldQuaternion(yM),pr.applyQuaternion(yM.invert());let l=Math.atan2(-pr.x,-pr.z),h=Math.atan2(pr.y,Math.hypot(pr.x,pr.z));gM.setFromEuler(S0.set(h*hP,l*lP,0,"YXZ")),vM.slerp(gM,i>0&&a?1-Math.exp(-uP*a.pomer*i):1);let d=Rt.clamp(-ks.x*wM,-R0,R0);E0+=(-n*MM-E0)*(i>0?1-Math.exp(-8*i):1),xM.setFromEuler(S0.set(0,0,E0+d+Math.sin(Lo*b0*.6)*.02,"XYZ")),_M.setFromEuler(S0.set(Do*IM,0,Do*zM,"XYZ")),Dt.quaternion.copy(vM).multiply(_M).multiply(xM),Dt.updateMatrixWorld(),Bo.getWorldPosition(li)}var IP=performance.now(),tn={start:IP},Vo="assets/modely.glb";Vv([Vo]).then(()=>{tn.modelStazen=performance.now()});var kP=["saveState"],Et=new al({antialias:!0});Et.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(Et.domElement);var{scena:Yt,kachna:zP}=yv(Wv());Yt.remove(zP);var un=new Set,lc=null;lc&&wf(lc);var k0=null;k0!==null&&Cf(k0);var hc=null;hc!==null&&Af(hc*an);var z0=null;z0&&uM(z0);var iu=null;iu&&hM(iu);var su=null,st=Xv()||{},yr=st.kamera||{};k0===null&&typeof yr.naklon=="number"&&Cf(yr.naklon);hc===null&&typeof yr.odstup=="number"&&Af(yr.odstup*an);!lc&&typeof yr.uhel=="number"&&wf(yr.uhel);st.pistole&&PM(st.pistole);st.pozadi&&Yt.background.set(st.pozadi);st.paralaxa&&sv(st.paralaxa);rv(yr);st.styl&&Ov(st.styl);typeof st.obrys=="number"&&Rv(st.obrys);typeof(st.obrysRuka??st.obrys)=="number"&&Lv(st.obrysRuka??st.obrys);typeof(st.obrysNabytek??st.obrys)=="number"&&Pv(st.obrysNabytek??st.obrys);st.obrysBarva&&Cv(st.obrysBarva);(st.obrysBarvaRuka||st.obrysBarva)&&Iv(st.obrysBarvaRuka||st.obrysBarva);(st.obrysBarvaNabytek||st.obrysBarva)&&kv(st.obrysBarvaNabytek||st.obrysBarva);var PP=un.has("stiny")?!1:st.stiny!==void 0?st.stiny:mv;Nf(Et,PP);tn.stiny=gv();Mp()&&S_(Mp());Ep()&&E_(Ep());Sp()&&gx(Sp());var U0=un.has("voda");U0||r_(Yt,Gv());var Ho=un.has("rozstrik");Ho||(Qb(Yt),bp()&&$b(bp()),tM(Yi()));a_((i,e,t)=>I_(i,e,t)?(Ho||(Zh(zh,bo,e,(Im?7:3)+(Math.random()*4|0),t),Yh(zh,bo)),!0):eb(i,e,t)?(Ho||(Zh(Ya,Ao,e,3+(Math.random()*4|0),t),Yh(Ya,Ao)),!0):jx(i,e)?(Ho||(Zh(Oa,Fa,e,3+(Math.random()*4|0),t),Yh(Oa,Fa)),!0):!1);pM(Et.domElement);un.has("miridlo")||(ub(),Et.domElement.style.cursor="none");var UM=null,NP=null,cc=(UM?null:rb(NP??0))||{jmeno:null,useky:[{usek:Wm(UM??0),smer:null,sloupec:0,radek:0}]},mr=0,Go=()=>cc.useky[mr].usek,gr=new Wt;gr.name="svet";Yt.add(gr);var BM=Wx(),FM=i=>({x:i.sloupec*BM.x,y:i.radek*BM.y});Go().pozadi&&Yt.background.set(Go().pozadi);var P0=[],N0=null;async function LP(){let i=performance.now(),e=un.has("ruka")?null:LM(Yt,Vo);e&&e.then(()=>{tn.rukaMs=performance.now()-i});let t=performance.now();if(!un.has("police")){let n=await An(Vo,Gx,{volitelny:!0});for(let s of cc.useky){let r=s.usek,o=await Promise.all(r.police.map(c=>An(Vo,Hx(c)))),a=0;Xx(gr,un.has("zada")?{...r,zada:null}:r,{police:()=>{let c=o[a++];return c?Ks(c.objekt):null},stena:n?Ks(n.objekt):null},FM(s))}tn.policeMs=performance.now()-t}await e,await VM(Go())}async function VM(i){let e=performance.now(),t=un.has("rekvizity")?null:tb(Yt,[...i.rekvizity||[],...i.bonusy||[]],void 0,i.kachny);if(t&&t.then(a=>{N0=a,tn.rekvizityMs=performance.now()-e}),await t,un.has("kachny"))return;let n=performance.now(),s=await Promise.all(i.kachny.map(()=>An(Vo))),r=un.has("terc")?[]:await Promise.all(i.kachny.map(()=>An(Vo,kh,{volitelny:!0})));tn.kachnyModelyMs=performance.now()-n;let o=performance.now();i.kachny.forEach((a,c)=>{if(!s[c])return;let l=s[c].objekt;if(r[c]&&w_(l,r[c].objekt),un.has("obrys")){let h=[];l.traverse(d=>{d.userData.obrys&&h.push(d)});for(let d of h)d.parent.remove(d)}Ks(l),l.scale.multiplyScalar(Ux),l.position.set(ws(a.sloupec),ji(a.patro),Nt),l.rotation.y=Bx(a.sloupec),Yt.add(l),P0.push(l),A_(l,a)}),tn.kachnyUsazeniMs=performance.now()-o}function DP(){for(let i of P0)Yt.remove(i);P0=[],C_(),ib(Yt,N0),N0=null}var UP=1.2,BP=()=>{let i=qv();return i&&typeof i.prejezd=="number"&&i.prejezd>0?i.prejezd:UP},ii=null;function OP(i){return i<.5?Math.pow(2*i,2)*((.53375+1)*2*i-.53375)/2:(Math.pow(2*i-2,2)*((.53375+1)*(2*i-2)+.53375)+2)/2}fn("usek:vycisten",()=>{if(ii)return;if(mr+1>=cc.useky.length){bt("level:hotovo",{level:cc.jmeno}),un.has("hud")||Ab("Level clear!",.5,.42,Et.domElement,{doba:2.5});return}let i=mr+1,e=FM(cc.useky[i]);ii={od:gr.position.clone(),do:new I(-e.x,-e.y,0),t:0,na:i},Qh(!1),DP(),bt("prejezd:start",{od:mr,na:i})});function FP(i){if(!ii)return;ii.t+=i;let e=Math.min(1,ii.t/BP());if(gr.position.lerpVectors(ii.od,ii.do,OP(e)),e<1)return;gr.position.copy(ii.do),gr.updateMatrixWorld(!0),qx(),mr=ii.na,ii=null,Go().pozadi&&Yt.background.set(Go().pozadi);let t=mr;VM(Go()).then(()=>{t===mr&&(fc(),bt("prejezd:konec",{na:t}))})}document.getElementById("verze").textContent=`Quack and Splash! ${Pl}`;var OM=3/4,VP=9/19.5;function HM(){let i=innerHeight,t=innerWidth/i>OM?VP:OM,n=Math.min(innerWidth,Math.floor(i*t));Et.setPixelRatio(Math.min(devicePixelRatio,2)),ev(n,i),Et.setSize(n,i),eM(i,Et.getPixelRatio())}HM();var ou=!1,dc=!1,Oo=0;function HP(i){if(su&&Oo&&i-Oo<1e3/su-1)return;let e=Oo?Math.min((i-Oo)/1e3,.05):0;Oo=i,ov(eu()),If(e),aM(e),db(Ze,ni,Et.domElement),vb(Et.domElement),Tb(e,Ze,Et.domElement),DM(e,ni,eu()),U0||(c_(e,i/1e3,ni,eu()),Rb(e,wh())),Ob(Et.domElement),jP(e),FP(e),k_(e),nb(e),WP(e),Ho||iM(e),Et.render(Yt,Ze)}function fc(){let i=ou&&!dc;Qh(i&&!F0&&!ii),i||(Oo=0),Et.setAnimationLoop(i?HP:null)}addEventListener("resize",()=>{HM(),ou&&!dc||Et.render(Yt,Ze)});T_(Z_);fn("kachna:sestrelena",i=>{i.mince>0&&!un.has("rekvizity")&&K_(Yt,i,i.mince)});Ho||fn("kachna:prasknuti",i=>nM(i));un.has("hud")||fn("klobouk:odstrelen",i=>wb("Hat shot!",i,Et.domElement));var GP=.25,pc=0,uc=0,ru=0,B0=0;fn("kachna:zasazena",i=>{pc+=i.pridano*Rm().bodyZaVodu});fn("kachna:sestrelena",()=>{pc+=Rm().bodySestreleni});function O0(){let i=Math.round(pc);i!==ru&&(ru=i,B0=uc,Vy(i,uc))}function WP(i){uc+=i,Math.round(pc)!==ru&&uc-B0>=GP&&O0()}var GM=8,XP=1.5,F0=!1,Fo=-1,I0=[.75,.5,.25],qP=GM+2,ac=0,L0=-1;function D0(i,e){Bb(i,e)}fn("voda:zmena",i=>{s0(i.podil);let e=i.voda/yo;for(;ac<I0.length&&i.podil<=I0[ac];)e>qP&&D0(`${Math.round(I0[ac]*100)} %`),ac++;if(i.voda>0&&e<=GM){let t=Math.ceil(e);t!==L0&&(L0=t,D0(String(t),{doba:.95}))}});fn("voda:dosla",()=>{F0=!0,Qh(!1),Fo=XP,D0("0",{doba:1.3})});function jP(i){Fo<0||(Fo-=i,!(Fo>0)&&(Fo=-1,O0(),yf(bf())))}fn("platforma:start",()=>{ou=!0,dc=!1,pc=0,uc=0,ru=0,B0=0,F0=!1,Fo=-1,ac=0,L0=-1,Qm(_p(Ma().level).nadrz),Fy(),fc()});fn("platforma:pause",()=>{dc=!0,fc()});fn("platforma:resume",()=>{dc=!1,fc()});fn("platforma:submit",()=>{ou=!1,fc(),O0(),yf(bf())});function YP(){let i=performance.now(),e=new Set;Yt.traverse(s=>{for(let r of[].concat(s.material||[])){for(let o of["map","gradientMap","alphaMap"])r[o]&&r[o].isTexture&&e.add(r[o]);if(r.uniforms)for(let o of Object.values(r.uniforms))o.value&&o.value.isTexture&&e.add(o.value)}});for(let s of e)Et.initTexture(s);let t=performance.now();Et.compile(Yt,Ze);let n=Et.getContext();for(let s of Et.info.programs)n.getProgramParameter(s.program,n.LINK_STATUS);tn.textury=t-i,tn.texturPocet=e.size,tn.shadery=performance.now()-t,tn.shaderuPocet=Et.info.programs.length}async function ZP(){tn.pripravaHotova=performance.now();let i=LP().then(()=>{tn.model=performance.now()});await By(kP),tn.platforma=performance.now();let e=Xy(),t=_p(e.level);Qm(t.nadrz),un.has("hud")||(yb(e.mince),Ub(),U0||Db(Yi().barva));let n=0;J_({cil:xb,doletela:()=>{let s=jy({...Ma(),mince:Ma().mince+1});Oh(s.mince),_b(),clearTimeout(n),n=setTimeout(()=>qy(Ma()),1e3)}}),document.getElementById("verze").textContent=`${Pl} \xB7 L${t.level} ${t.stupen}${t.boss?" boss":""} \xB7 ${t.kachnicek} kachen \xB7 n\xE1dr\u017E ${Math.round(t.nadrz)} \xB7 ${e.mince} minc\xED`+(lc?` \xB7 \xFAhel ${lc}\xB0`:"")+(z0?" \xB7 m\xED\u0159en\xED 2D":"")+(iu?` \xB7 do stran \xD7${iu}`:"")+(su?` \xB7 ${su} fps`:"")+(hc!==null?` \xB7 odstup +${hc} m`:""),await i,If(0),YP(),tn.predPrvnimSnimkem=performance.now(),Et.render(Yt,Ze),tn.prvniSnimek=performance.now(),Oy()}ZP();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
