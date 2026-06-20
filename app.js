var Xp=0,Hu=1,Kp=2;var pd=1,Yp=2,jn=3,gi=0,Jt=1,pn=2,pi=0,Cs=1,Vu=2,Gu=3,Wu=4,Jp=5,zi=100,Zp=101,Qp=102,em=103,tm=104,nm=200,im=201,sm=202,rm=203,Uc=204,Oc=205,am=206,om=207,cm=208,lm=209,um=210,hm=211,dm=212,fm=213,pm=214,mm=0,_m=1,gm=2,Ma=3,vm=4,ym=5,xm=6,wm=7,md=0,Mm=1,bm=2,mi=0,Sm=1,Tm=2,Em=3,Am=4,Cm=5,Rm=6,Pm=7;var _d=300,Ls=301,ks=302,Fc=303,Bc=304,to=306,xr=1e3,Vi=1001,zc=1002,mn=1003,Im=1004;var Kr=1005;var Tn=1006,Zo=1007;var Gi=1008;var vi=1009,Lm=1010,km=1011,ba=1012,gd=1013,Ns=1014,fi=1015,no=1016,vd=1017,yd=1018,Ds=1020,Nm=35902,Dm=1021,Um=1022,Ln=1023,Om=1024,Fm=1025,Rs=1026,Us=1027,Bm=1028,xd=1029,zm=1030,wd=1031,Md=1033,Qo=33776,ec=33777,tc=33778,nc=33779,$u=35840,qu=35841,ju=35842,Xu=35843,Ku=36196,Yu=37492,Ju=37496,Zu=37808,Qu=37809,eh=37810,th=37811,nh=37812,ih=37813,sh=37814,rh=37815,ah=37816,oh=37817,ch=37818,lh=37819,uh=37820,hh=37821,ic=36492,dh=36494,fh=36495,Hm=36283,ph=36284,mh=36285,_h=36286;var Sa=2300,Hc=2301,sc=2302,gh=2400,vh=2401,yh=2402;var Vm=3200,Gm=3201,bd=0,Wm=1,di="",Yt="srgb",Mi="srgb-linear",Rl="display-p3",io="display-p3-linear",Ta="linear",ct="srgb",Ea="rec709",Aa="p3";var as=7680;var xh=519,$m=512,qm=513,jm=514,Sd=515,Xm=516,Km=517,Ym=518,Jm=519,Vc=35044;var wh="300 es",Kn=2e3,Ca=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rc=Math.PI/180,Gc=180/Math.PI;function _i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function Zm(n,e){return(n%e+e)%e}function ac(n,e,t){return(1-t)*n+t*e}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],_=s[6],S=s[1],b=s[4],T=s[7],k=s[2],E=s[5],R=s[8];return r[0]=a*v+o*S+c*k,r[3]=a*m+o*b+c*E,r[6]=a*_+o*T+c*R,r[1]=l*v+u*S+d*k,r[4]=l*m+u*b+d*E,r[7]=l*_+u*T+d*R,r[2]=f*v+p*S+g*k,r[5]=f*m+p*b+g*E,r[8]=f*_+p*T+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,p=l*r-a*c,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oc=new ze;function Td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qm(){let n=Ra("canvas");return n.style.display="block",n}var Mh={};function Pl(n){n in Mh||(Mh[n]=!0,console.warn(n))}function e_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var bh=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sh=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Mi]:{transfer:Ta,primaries:Ea,toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:ct,primaries:Ea,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[io]:{transfer:Ta,primaries:Aa,toReference:n=>n.applyMatrix3(Sh),fromReference:n=>n.applyMatrix3(bh)},[Rl]:{transfer:ct,primaries:Aa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sh),fromReference:n=>n.applyMatrix3(bh).convertLinearToSRGB()}},t_=new Set([Mi,io]),st={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!t_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Yr[e].toReference,s=Yr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Yr[n].primaries},getTransfer:function(n){return n===di?Ta:Yr[n].transfer}};function Ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var os,Wc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Ra("canvas")),os.width=e.width,os.height=e.height;let i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ra("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ps(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ps(t[i]/255)*255):t[i]=Ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n_=0,Pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lc(s[a].image)):r.push(lc(s[a]))}else r=lc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function lc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var i_=0,an=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Vi,s=Vi,r=Tn,a=Gi,o=Ln,c=vi,l=n.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=_i(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=_d;an.DEFAULT_ANISOTROPY=1;var Pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,T=(p+1)/2,k=(_+1)/2,E=(u+f)/4,R=(d+v)/4,B=(g+m)/4;return b>T&&b>k?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=R/i):T>k?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=E/s,r=B/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=R/r,s=B/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new an(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends $c{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ia=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qc=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==p||u!==g){let m=1-o,_=c*f+l*p+u*g+d*v,S=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){let k=Math.sqrt(b),E=Math.atan2(k,_*S);m=Math.sin(m*E)/k,o=Math.sin(o*E)/k}let T=o*S;if(c=c*m+f*T,l=l*m+p*T,u=u*m+g*T,d=d*m+v*T,m===1-o){let k=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=k,l*=k,u*=k,d*=k}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-o*p,e[t+2]=l*g+u*p+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new N,Th=new xi,$i=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Zr.subVectors(this.max,lr),cs.subVectors(e.a,lr),ls.subVectors(e.b,lr),us.subVectors(e.c,lr),ai.subVectors(ls,cs),oi.subVectors(us,ls),ki.subVectors(cs,us);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-ki.z,ki.y,ai.z,0,-ai.x,oi.z,0,-oi.x,ki.z,0,-ki.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-ki.y,ki.x,0];return!hc(t,cs,ls,us,Zr)||(t=[1,0,0,0,1,0,0,0,1],!hc(t,cs,ls,us,Zr))?!1:(Qr.crossVectors(ai,oi),t=[Qr.x,Qr.y,Qr.z],hc(t,cs,ls,us,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vn=[new N,new N,new N,new N,new N,new N,new N,new N],Mn=new N,Jr=new $i,cs=new N,ls=new N,us=new N,ai=new N,oi=new N,ki=new N,lr=new N,Zr=new N,Qr=new N,Ni=new N;function hc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ni.fromArray(n,r);let o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var s_=new $i,ur=new N,dc=new N,wr=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):s_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(dc)),this.expandByPoint(ur.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new N,fc=new N,ea=new N,ci=new N,pc=new N,ta=new N,mc=new N,jc=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fc.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(fc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=ci.dot(this.direction),c=-ci.dot(ea),l=ci.lengthSq(),u=Math.abs(1-a*a),d,f,p,g;if(u>0)if(d=a*c-o,f=a*o-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fc).addScaledVector(ea,f),p}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){pc.subVectors(t,e),ta.subVectors(i,e),mc.crossVectors(pc,ta);let a=this.direction.dot(mc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);let c=o*this.direction.dot(ta.crossVectors(ci,ta));if(c<0)return null;let l=o*this.direction.dot(pc.cross(ci));if(l<0||c+l>a)return null;let u=-o*ci.dot(mc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class n{constructor(e,t,i,s,r,a,o,c,l,u,d,f,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,d,f,p,g,v,m)}set(e,t,i,s,r,a,o,c,l,u,d,f,p,g,v,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=d,_[14]=f,_[3]=p,_[7]=g,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,v=l*d;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,v=l*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,a_)}lookAt(e,t,i){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),li.crossVectors(i,nn),li.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),li.crossVectors(i,nn)),li.normalize(),na.crossVectors(nn,li),s[0]=li.x,s[4]=na.x,s[8]=nn.x,s[1]=li.y,s[5]=na.y,s[9]=nn.y,s[2]=li.z,s[6]=na.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],_=i[14],S=i[3],b=i[7],T=i[11],k=i[15],E=s[0],R=s[4],B=s[8],M=s[12],y=s[1],L=s[5],H=s[9],z=s[13],j=s[2],K=s[6],q=s[10],ee=s[14],O=s[3],Z=s[7],re=s[11],ve=s[15];return r[0]=a*E+o*y+c*j+l*O,r[4]=a*R+o*L+c*K+l*Z,r[8]=a*B+o*H+c*q+l*re,r[12]=a*M+o*z+c*ee+l*ve,r[1]=u*E+d*y+f*j+p*O,r[5]=u*R+d*L+f*K+p*Z,r[9]=u*B+d*H+f*q+p*re,r[13]=u*M+d*z+f*ee+p*ve,r[2]=g*E+v*y+m*j+_*O,r[6]=g*R+v*L+m*K+_*Z,r[10]=g*B+v*H+m*q+_*re,r[14]=g*M+v*z+m*ee+_*ve,r[3]=S*E+b*y+T*j+k*O,r[7]=S*R+b*L+T*K+k*Z,r[11]=S*B+b*H+T*q+k*re,r[15]=S*M+b*z+T*ee+k*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],_=e[15];return g*(+r*c*d-s*l*d-r*o*f+i*l*f+s*o*p-i*c*p)+v*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+t*l*d-t*o*p-r*a*d+i*a*p+r*o*u-i*l*u)+_*(-s*o*u-t*c*d+t*o*f+s*a*d-i*a*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],_=e[15],S=d*m*l-v*f*l+v*c*p-o*m*p-d*c*_+o*f*_,b=g*f*l-u*m*l-g*c*p+a*m*p+u*c*_-a*f*_,T=u*v*l-g*d*l+g*o*p-a*v*p-u*o*_+a*d*_,k=g*d*c-u*v*c-g*o*f+a*v*f+u*o*m-a*d*m,E=t*S+i*b+s*T+r*k;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=S*R,e[1]=(v*f*r-d*m*r-v*s*p+i*m*p+d*s*_-i*f*_)*R,e[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*_+i*c*_)*R,e[3]=(d*c*r-o*f*r-d*s*l+i*f*l+o*s*p-i*c*p)*R,e[4]=b*R,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*_+t*f*_)*R,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*_-t*c*_)*R,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*p+t*c*p)*R,e[8]=T*R,e[9]=(g*d*r-u*v*r-g*i*p+t*v*p+u*i*_-t*d*_)*R,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*_+t*o*_)*R,e[11]=(u*o*r-a*d*r-u*i*l+t*d*l+a*i*p-t*o*p)*R,e[12]=k*R,e[13]=(u*v*s-g*d*s+g*i*f-t*v*f-u*i*m+t*d*m)*R,e[14]=(g*o*s-a*v*s-g*i*c+t*v*c+a*i*m-t*o*m)*R,e[15]=(a*d*s-u*o*s+u*i*c-t*d*c-a*i*f+t*o*f)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,p=r*u,g=r*d,v=a*u,m=a*d,_=o*d,S=c*l,b=c*u,T=c*d,k=i.x,E=i.y,R=i.z;return s[0]=(1-(v+_))*k,s[1]=(p+T)*k,s[2]=(g-b)*k,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(f+_))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+b)*R,s[9]=(m-S)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),a=hs.set(s[4],s[5],s[6]).length(),o=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);let l=1/r,u=1/a,d=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Kn){let c=this.elements,l=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(o===Kn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ca)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Kn){let c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(a-r),f=(t+e)*l,p=(i+s)*u,g,v;if(o===Kn)g=(a+r)*d,v=-2*d;else if(o===Ca)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},hs=new N,bn=new vt,r_=new N(0,0,0),a_=new N(1,1,1),li=new N,na=new N,nn=new N,Eh=new vt,Ah=new xi,kn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},o_=0,Ch=new N,ds=new xi,Wn=new vt,ia=new N,hr=new N,c_=new N,l_=new xi,Rh=new N(1,0,0),Ph=new N(0,1,0),Ih=new N(0,0,1),Lh={type:"added"},u_={type:"removed"},fs={type:"childadded",child:null},_c={type:"childremoved",child:null},Bt=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new kn,i=new xi,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new ze}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ia.copy(e):ia.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(hr,ia,this.up):Wn.lookAt(ia,hr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Wn),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u_),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,c_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,l_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Bt.DEFAULT_UP=new N(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new N,$n=new N,gc=new N,qn=new N,ps=new N,ms=new N,kh=new N,vc=new N,yc=new N,xc=new N,Wi=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Sn.subVectors(s,t),$n.subVectors(i,t),gc.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot($n),c=Sn.dot(gc),l=$n.dot($n),u=$n.dot(gc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static isFrontFacing(e,t,i,s){return Sn.subVectors(i,t),$n.subVectors(e,t),Sn.cross($n).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Sn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,i),ms.subVectors(r,i),vc.subVectors(e,i);let c=ps.dot(vc),l=ms.dot(vc);if(c<=0&&l<=0)return t.copy(i);yc.subVectors(e,s);let u=ps.dot(yc),d=ms.dot(yc);if(u>=0&&d<=u)return t.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ps,a);xc.subVectors(e,r);let p=ps.dot(xc),g=ms.dot(xc);if(g>=0&&p<=g)return t.copy(r);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(ms,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return kh.subVectors(r,s),o=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(kh,o);let _=1/(m+v+f);return a=v*_,o=f*_,t.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},sa={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Zm(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=wc(a,r,e+1/3),this.g=wc(a,r,e),this.b=wc(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=Ed[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return st.fromWorkingColorSpace(Ft.copy(this),e),Math.round(kt(Ft.r*255,0,255))*65536+Math.round(kt(Ft.g*255,0,255))*256+Math.round(kt(Ft.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Ft.copy(this),t);let i=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Yt){st.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,s=Ft.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(sa);let i=ac(ui.h,sa.h,t),s=ac(ui.s,sa.s,t),r=ac(ui.l,sa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new We;We.NAMES=Ed;var h_=0,wi=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Cs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Oc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uc&&(i.blendSrc=this.blendSrc),this.blendDst!==Oc&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nn=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new N,ra=new pe,rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}};var ka=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Na=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var It=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},d_=0,fn=new vt,Mc=new Bt,_s=new N,sn=new $i,dr=new $i,Rt=new N,on=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?Na:ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(sn.min,dr.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,dr.max),sn.expandByPoint(Rt)):(sn.expandByPoint(dr.min),sn.expandByPoint(dr.max))}sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(e,l),Rt.add(_s)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let B=0;B<i.count;B++)o[B]=new N,c[B]=new N;let l=new N,u=new N,d=new N,f=new pe,p=new pe,g=new pe,v=new N,m=new N;function _(B,M,y){l.fromBufferAttribute(i,B),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,B),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[B].add(v),o[M].add(v),o[y].add(v),c[B].add(m),c[M].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let B=0,M=S.length;B<M;++B){let y=S[B],L=y.start,H=y.count;for(let z=L,j=L+H;z<j;z+=3)_(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let b=new N,T=new N,k=new N,E=new N;function R(B){k.fromBufferAttribute(s,B),E.copy(k);let M=o[B];b.copy(M),b.sub(k.multiplyScalar(k.dot(M))).normalize(),T.crossVectors(E,M);let L=T.dot(c[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,L)}for(let B=0,M=S.length;B<M;++B){let y=S[B],L=y.start,H=y.count;for(let z=L,j=L+H;z<j;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,u=new N,d=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let _=0;_<u;_++)f[g++]=l[p++]}return new rn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new vt,Di=new jc,aa=new wr,Dh=new N,gs=new N,vs=new N,ys=new N,bc=new N,oa=new N,ca=new pe,la=new pe,ua=new pe,Uh=new N,Oh=new N,Fh=new N,ha=new N,da=new N,lt=class extends Bt{constructor(e=new on,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(bc.fromBufferAttribute(d,e),a?oa.addScaledVector(bc,u):oa.addScaledVector(bc.sub(t),u))}t.add(oa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(aa.containsPoint(Di.origin)===!1&&(Di.intersectSphere(aa,Dh)===null||Di.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Nh),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],_=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,k=b;T<k;T+=3){let E=o.getX(T),R=o.getX(T+1),B=o.getX(T+2);s=fa(this,_,e,i,l,u,d,E,R,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,_=v;m<_;m+=3){let S=o.getX(m),b=o.getX(m+1),T=o.getX(m+2);s=fa(this,a,e,i,l,u,d,S,b,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],_=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,k=b;T<k;T+=3){let E=T,R=T+1,B=T+2;s=fa(this,_,e,i,l,u,d,E,R,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,_=v;m<_;m+=3){let S=m,b=m+1,T=m+2;s=fa(this,a,e,i,l,u,d,S,b,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function f_(n,e,t,i,s,r,a,o){let c;if(e.side===Jt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===gi,o),c===null)return null;da.copy(o),da.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(da);return l<t.near||l>t.far?null:{distance:l,point:da.clone(),object:n}}function fa(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,gs),n.getVertexPosition(c,vs),n.getVertexPosition(l,ys);let u=f_(n,e,t,i,gs,vs,ys,ha);if(u){s&&(ca.fromBufferAttribute(s,o),la.fromBufferAttribute(s,c),ua.fromBufferAttribute(s,l),u.uv=Wi.getInterpolation(ha,gs,vs,ys,ca,la,ua,new pe)),r&&(ca.fromBufferAttribute(r,o),la.fromBufferAttribute(r,c),ua.fromBufferAttribute(r,l),u.uv1=Wi.getInterpolation(ha,gs,vs,ys,ca,la,ua,new pe)),a&&(Uh.fromBufferAttribute(a,o),Oh.fromBufferAttribute(a,c),Fh.fromBufferAttribute(a,l),u.normal=Wi.getInterpolation(ha,gs,vs,ys,Uh,Oh,Fh,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};Wi.getNormal(gs,vs,ys,d.normal),u.face=d}return u}var qi=class n extends on{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(d,2));function g(v,m,_,S,b,T,k,E,R,B,M){let y=T/R,L=k/B,H=T/2,z=k/2,j=E/2,K=R+1,q=B+1,ee=0,O=0,Z=new N;for(let re=0;re<q;re++){let ve=re*L-z;for(let Ae=0;Ae<K;Ae++){let Ke=Ae*y-H;Z[v]=Ke*S,Z[m]=ve*b,Z[_]=j,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[_]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(Ae/R),d.push(1-re/B),ee+=1}}for(let re=0;re<B;re++)for(let ve=0;ve<R;ve++){let Ae=f+ve+K*re,Ke=f+ve+K*(re+1),Y=f+(ve+1)+K*(re+1),se=f+(ve+1)+K*re;c.push(Ae,Ke,se),c.push(Ke,Y,se),O+=6}o.addGroup(p,O,M),p+=O,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=Os(n[t]);for(let s in i)e[s]=i[s]}return e}function p_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ad(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var m_={clone:Os,merge:Wt},__=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dn=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Da=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new N,Bh=new pe,zh=new pe,$t=class extends Da{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gc*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,zh),t.subVectors(zh,Bh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xs=-90,ws=1,Xc=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(xs,ws,e,t);s.layers=this.layers,this.add(s);let r=new $t(xs,ws,e,t);r.layers=this.layers,this.add(r);let a=new $t(xs,ws,e,t);a.layers=this.layers,this.add(a);let o=new $t(xs,ws,e,t);o.layers=this.layers,this.add(o);let c=new $t(xs,ws,e,t);c.layers=this.layers,this.add(c);let l=new $t(xs,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ua=class extends an{constructor(e,t,i,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kc=class extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ua(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:pi});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Tn),new Xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Sc=new N,v_=new N,y_=new ze,Xn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sc.subVectors(i,t).cross(v_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Sc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||y_.getNormalMatrix(e),s=this.coplanarPoint(Sc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new wr,pa=new N,Mr=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],_=s[12],S=s[13],b=s[14],T=s[15];if(i[0].setComponents(c-r,f-l,m-p,T-_).normalize(),i[1].setComponents(c+r,f+l,m+p,T+_).normalize(),i[2].setComponents(c+a,f+u,m+g,T+S).normalize(),i[3].setComponents(c-a,f-u,m-g,T-S).normalize(),i[4].setComponents(c-o,f-d,m-v,T-b).normalize(),t===Kn)i[5].setComponents(c+o,f+d,m+v,T+b).normalize();else if(t===Ca)i[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function x_(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let u=c.array,d=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,o),d.count===-1&&f.length===0&&n.bufferSubData(l,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){let v=f[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ji=class n extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,p=[],g=[],v=[],m=[];for(let _=0;_<u;_++){let S=_*f-a;for(let b=0;b<l;b++){let T=b*d-r;g.push(T,-S,0),v.push(0,0,1),m.push(b/o),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){let b=S+l*_,T=S+l*(_+1),k=S+1+l*(_+1),E=S+1+l*_;p.push(b,T,E),p.push(T,k,E)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},w_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M_=`#ifdef USE_ALPHAHASH
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
#endif`,b_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,D_=`#ifdef USE_BUMPMAP
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
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,W_=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,$_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
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
}`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
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
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
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
#endif`,yg=`struct PhysicalMaterial {
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
}`,xg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
	#endif
}`,C0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,F0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,z0=`#define NORMAL
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
}`,H0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,G0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,j0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,Z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Q0=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:w_,alphahash_pars_fragment:M_,alphamap_fragment:b_,alphamap_pars_fragment:S_,alphatest_fragment:T_,alphatest_pars_fragment:E_,aomap_fragment:A_,aomap_pars_fragment:C_,batching_pars_vertex:R_,batching_vertex:P_,begin_vertex:I_,beginnormal_vertex:L_,bsdfs:k_,iridescence_fragment:N_,bumpmap_pars_fragment:D_,clipping_planes_fragment:U_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:F_,clipping_planes_vertex:B_,color_fragment:z_,color_pars_fragment:H_,color_pars_vertex:V_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:$_,defaultnormal_vertex:q_,displacementmap_pars_vertex:j_,displacementmap_vertex:X_,emissivemap_fragment:K_,emissivemap_pars_fragment:Y_,colorspace_fragment:J_,colorspace_pars_fragment:Z_,envmap_fragment:Q_,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:fg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:ag,fog_pars_fragment:og,gradientmap_pars_fragment:cg,lightmap_pars_fragment:lg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:hg,lights_pars_begin:dg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:_g,lights_phong_pars_fragment:gg,lights_physical_fragment:vg,lights_physical_pars_fragment:yg,lights_fragment_begin:xg,lights_fragment_maps:wg,lights_fragment_end:Mg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:Eg,map_fragment:Ag,map_pars_fragment:Cg,map_particle_fragment:Rg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Lg,morphinstance_vertex:kg,morphcolor_vertex:Ng,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ug,morphtarget_vertex:Og,normal_fragment_begin:Fg,normal_fragment_maps:Bg,normal_pars_fragment:zg,normal_pars_vertex:Hg,normal_vertex:Vg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:qg,iridescence_pars_fragment:jg,opaque_fragment:Xg,packing:Kg,premultiplied_alpha_fragment:Yg,project_vertex:Jg,dithering_fragment:Zg,dithering_pars_fragment:Qg,roughnessmap_fragment:e0,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:a0,skinning_pars_vertex:o0,skinning_vertex:c0,skinnormal_vertex:l0,specularmap_fragment:u0,specularmap_pars_fragment:h0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:_0,uv_pars_vertex:g0,uv_vertex:v0,worldpos_vertex:y0,background_vert:x0,background_frag:w0,backgroundCube_vert:M0,backgroundCube_frag:b0,cube_vert:S0,cube_frag:T0,depth_vert:E0,depth_frag:A0,distanceRGBA_vert:C0,distanceRGBA_frag:R0,equirect_vert:P0,equirect_frag:I0,linedashed_vert:L0,linedashed_frag:k0,meshbasic_vert:N0,meshbasic_frag:D0,meshlambert_vert:U0,meshlambert_frag:O0,meshmatcap_vert:F0,meshmatcap_frag:B0,meshnormal_vert:z0,meshnormal_frag:H0,meshphong_vert:V0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:$0,meshtoon_vert:q0,meshtoon_frag:j0,points_vert:X0,points_frag:K0,shadow_vert:Y0,shadow_frag:J0,sprite_vert:Z0,sprite_frag:Q0},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pn={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Pn.physical={uniforms:Wt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var ma={r:0,b:0,g:0},Oi=new kn,ev=new vt;function tv(n,e,t,i,s,r,a){let o=new We(0),c=r===!0?0:1,l,u,d=null,f=0,p=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function v(S){let b=!1,T=g(S);T===null?_(o,c):T&&T.isColor&&(_(T,1),b=!0);let k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,b){let T=g(b);T&&(T.isCubeTexture||T.mapping===to)?(u===void 0&&(u=new lt(new qi(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Os(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Oi.copy(b.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(Oi)),u.material.toneMapped=st.getTransfer(T.colorSpace)!==ct,(d!==T||f!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new lt(new ji(2,2),new Dn({name:"BackgroundMaterial",uniforms:Os(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,f=T.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function _(S,b){S.getRGB(ma,Ad(n)),i.buffers.color.setClear(ma.r,ma.g,ma.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),c=b,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,_(o,c)},render:v,addToRenderList:m}}function nv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(y,L,H,z,j){let K=!1,q=d(z,H,L);r!==q&&(r=q,l(r.object)),K=p(y,z,H,j),K&&g(y,z,H,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,T(y,L,H,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,L,H){let z=H.wireframe===!0,j=i[y.id];j===void 0&&(j={},i[y.id]=j);let K=j[L.id];K===void 0&&(K={},j[L.id]=K);let q=K[z];return q===void 0&&(q=f(c()),K[z]=q),q}function f(y){let L=[],H=[],z=[];for(let j=0;j<t;j++)L[j]=0,H[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,L,H,z){let j=r.attributes,K=L.attributes,q=0,ee=H.getAttributes();for(let O in ee)if(ee[O].location>=0){let re=j[O],ve=K[O];if(ve===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(y,L,H,z){let j={},K=L.attributes,q=0,ee=H.getAttributes();for(let O in ee)if(ee[O].location>=0){let re=K[O];re===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));let ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),j[O]=ve,q++}r.attributes=j,r.attributesNum=q,r.index=z}function v(){let y=r.newAttributes;for(let L=0,H=y.length;L<H;L++)y[L]=0}function m(y){_(y,0)}function _(y,L){let H=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;H[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),j[y]!==L&&(n.vertexAttribDivisor(y,L),j[y]=L)}function S(){let y=r.newAttributes,L=r.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==y[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function b(y,L,H,z,j,K,q){q===!0?n.vertexAttribIPointer(y,L,H,j,K):n.vertexAttribPointer(y,L,H,z,j,K)}function T(y,L,H,z){v();let j=z.attributes,K=H.getAttributes(),q=L.defaultAttributeValues;for(let ee in K){let O=K[ee];if(O.location>=0){let Z=j[ee];if(Z===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let re=Z.normalized,ve=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;let Ke=Ae.buffer,Y=Ae.type,se=Ae.bytesPerElement,xe=Y===n.INT||Y===n.UNSIGNED_INT||Z.gpuType===gd;if(Z.isInterleavedBufferAttribute){let de=Z.data,qe=de.stride,He=Z.offset;if(de.isInstancedInterleavedBuffer){for(let Qe=0;Qe<O.locationSize;Qe++)_(O.location+Qe,de.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Qe=0;Qe<O.locationSize;Qe++)m(O.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Qe=0;Qe<O.locationSize;Qe++)b(O.location+Qe,ve/O.locationSize,Y,re,qe*se,(He+ve/O.locationSize*Qe)*se,xe)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<O.locationSize;de++)_(O.location+de,Z.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<O.locationSize;de++)m(O.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let de=0;de<O.locationSize;de++)b(O.location+de,ve/O.locationSize,Y,re,ve*se,ve/O.locationSize*de*se,xe)}}else if(q!==void 0){let re=q[ee];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(O.location,re);break;case 3:n.vertexAttrib3fv(O.location,re);break;case 4:n.vertexAttrib4fv(O.location,re);break;default:n.vertexAttrib1fv(O.location,re)}}}}S()}function k(){B();for(let y in i){let L=i[y];for(let H in L){let z=L[H];for(let j in z)u(z[j].object),delete z[j];delete L[H]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;let L=i[y.id];for(let H in L){let z=L[H];for(let j in z)u(z[j].object),delete z[j];delete L[H]}delete i[y.id]}function R(y){for(let L in i){let H=i[L];if(H[y.id]===void 0)continue;let z=H[y.id];for(let j in z)u(z[j].object),delete z[j];delete H[y.id]}}function B(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:M,dispose:k,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function iv(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(l[p],u[p]);else{f.multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<f.length;v++)t.update(g,i,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Ln&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let R=E===no&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==vi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==fi&&!R)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,k=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:T,maxSamples:k}}function rv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Xn,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,_=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:i,b=S*4,T=_.clippingState||null;c.value=T,T=u(g,f,b,p);for(let k=0;k!==b;++k)T[k]=t[k];_.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let _=p+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let b=0,T=p;b!==v;++b,T+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function av(n){let e=new WeakMap;function t(a,o){return o===Fc?a.mapping=Ls:o===Bc&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fc||o===Bc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Kc(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Oa=class extends Da{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},As=4,Hh=[.125,.215,.35,.446,.526,.582],Hi=20,Tc=new Oa,Vh=new We,Ec=null,Ac=0,Cc=0,Rc=!1,Bi=(1+Math.sqrt(5))/2,Ms=1/Bi,Gh=[new N(-Bi,Ms,0),new N(Bi,Ms,0),new N(-Ms,0,Bi),new N(Ms,0,Bi),new N(0,Bi,-Ms),new N(0,Bi,Ms),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,Ac,Cc),this._renderer.xr.enabled=Rc,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:no,format:Ln,colorSpace:Mi,depthBuffer:!1},s=Wh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ov(r)),this._blurMaterial=cv(r,e,t)}return s}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,i,s){let o=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Vh),u.toneMapping=mi,u.autoClear=!1;let p=new Nn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new lt(new qi,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Vh),v=!0);for(let _=0;_<6;_++){let S=_%3;S===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):S===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));let b=this._cubeSize;_a(s,S*b,_>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ls||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;_a(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Tc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gh[(s-r-1)%Gh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new lt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let _=[],S=0;for(let R=0;R<Hi;++R){let B=R/v,M=Math.exp(-B*B/2);_.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<_.length;R++)_[R]=_[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let T=this._sizeLods[s],k=3*T*(s>b-As?s-b+As:0),E=4*(this._cubeSize-T);_a(t,k,E,3*T,2*T),c.setRenderTarget(t),c.render(d,Tc)}};function ov(n){let e=[],t=[],i=[],s=n,r=n-As+1+Hh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-As?c=Hh[a-n+As-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,_=1,S=new Float32Array(v*g*p),b=new Float32Array(m*g*p),T=new Float32Array(_*g*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,B=E>2?0:-1,M=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];S.set(M,v*g*E),b.set(f,m*g*E);let y=[E,E,E,E,E,E];T.set(y,_*g*E)}let k=new on;k.setAttribute("position",new rn(S,v)),k.setAttribute("uv",new rn(b,m)),k.setAttribute("faceIndex",new rn(T,_)),e.push(k),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wh(n,e,t){let i=new Yn(n,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cv(n,e,t){let i=new Float32Array(Hi),s=new N(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function $h(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function qh(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function lv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Fc||c===Bc,u=c===Ls||c===ks;if(l||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Fa(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Fa(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function uv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Pl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hv(n,e,t,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,_=v.length;m<_;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let v=p[g];for(let m=0,_=v.length;m<_;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,g=d.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let b=0,T=S.length;b<T;b+=3){let k=S[b+0],E=S[b+1],R=S[b+2];f.push(k,E,E,R,R,k)}}else if(g!==void 0){let S=g.array;v=g.version;for(let b=0,T=S.length/3-1;b<T;b+=3){let k=b+0,E=b+1,R=b+2;f.push(k,E,E,R,R,k)}}else return;let m=new(Td(f)?Na:ka)(f,1);m.version=v;let _=r.get(d);_&&e.remove(_),r.set(d,m)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function dv(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*a,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(f[m]/a,p[m]);else{v.multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_];t.update(m,i,1)}}function d(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f.length;_++)l(f[_]/a,p[_],v[_]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let _=0;for(let S=0;S<g;S++)_+=p[S];for(let S=0;S<v.length;S++)t.update(_,i,v[S])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function pv(n,e,t){let i=new WeakMap,s=new Pt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let T=o.attributes.position.count*b,k=1;T>e.maxTextureSize&&(k=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let E=new Float32Array(T*k*4*d),R=new Ia(E,T,k,d);R.type=fi,R.needsUpdate=!0;let B=b*4;for(let y=0;y<d;y++){let L=m[y],H=_[y],z=S[y],j=T*k*4*y;for(let K=0;K<L.count;K++){let q=K*B;p===!0&&(s.fromBufferAttribute(L,K),E[j+q+0]=s.x,E[j+q+1]=s.y,E[j+q+2]=s.z,E[j+q+3]=0),g===!0&&(s.fromBufferAttribute(H,K),E[j+q+4]=s.x,E[j+q+5]=s.y,E[j+q+6]=s.z,E[j+q+7]=0),v===!0&&(s.fromBufferAttribute(z,K),E[j+q+8]=s.x,E[j+q+9]=s.y,E[j+q+10]=s.z,E[j+q+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new pe(T,k)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function mv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Ba=class extends an{constructor(e,t,i,s,r,a,o,c,l,u=Rs){if(u!==Rs&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=Ns),i===void 0&&u===Us&&(i=Ds),super(null,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rd=new an,Pd=new Ba(1,1);Pd.compareFunction=Sd;var Id=new Ia,Ld=new qc,kd=new Ua,jh=[],Xh=[],Kh=new Float32Array(16),Yh=new Float32Array(9),Jh=new Float32Array(4);function zs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=jh[s];if(r===void 0&&(r=new Float32Array(s),jh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function so(n,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _v(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Jh.set(i),n.uniformMatrix2fv(this.addr,!1,Jh),Et(t,i)}}function wv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Yh.set(i),n.uniformMatrix3fv(this.addr,!1,Yh),Et(t,i)}}function Mv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Kh.set(i),n.uniformMatrix4fv(this.addr,!1,Kh),Et(t,i)}}function bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function Av(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Pd:Rd;t.setTexture2D(e||r,s)}function Lv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ld,s)}function kv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||kd,s)}function Nv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Id,s)}function Dv(n){switch(n){case 5126:return _v;case 35664:return gv;case 35665:return vv;case 35666:return yv;case 35674:return xv;case 35675:return wv;case 35676:return Mv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return Tv;case 35669:case 35673:return Ev;case 5125:return Av;case 36294:return Cv;case 36295:return Rv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Uv(n,e){n.uniform1fv(this.addr,e)}function Ov(n,e){let t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function Fv(n,e){let t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function Bv(n,e){let t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function zv(n,e){let t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hv(n,e){let t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vv(n,e){let t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gv(n,e){n.uniform1iv(this.addr,e)}function Wv(n,e){n.uniform2iv(this.addr,e)}function $v(n,e){n.uniform3iv(this.addr,e)}function qv(n,e){n.uniform4iv(this.addr,e)}function jv(n,e){n.uniform1uiv(this.addr,e)}function Xv(n,e){n.uniform2uiv(this.addr,e)}function Kv(n,e){n.uniform3uiv(this.addr,e)}function Yv(n,e){n.uniform4uiv(this.addr,e)}function Jv(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Rd,r[a])}function Zv(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ld,r[a])}function Qv(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kd,r[a])}function ey(n,e,t){let i=this.cache,s=e.length,r=so(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Id,r[a])}function ty(n){switch(n){case 5126:return Uv;case 35664:return Ov;case 35665:return Fv;case 35666:return Bv;case 35674:return zv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return $v;case 35669:case 35673:return qv;case 5125:return jv;case 36294:return Xv;case 36295:return Kv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ey}}var Yc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}},Jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},Zc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Zh(n,e){n.seq.push(e),n.map[e.id]=e}function ny(n,e,t){let i=n.name,s=i.length;for(Pc.lastIndex=0;;){let r=Pc.exec(i),a=Pc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Zh(t,l===void 0?new Yc(o,n,e):new Jc(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Zc(o),Zh(t,d)),t=d}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ny(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Qh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iy=37297,sy=0;function ry(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ay(n){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n),i;switch(e===t?i="":e===Aa&&t===Ea?i="LinearDisplayP3ToLinearSRGB":e===Ea&&t===Aa&&(i="LinearSRGBToLinearDisplayP3"),n){case Mi:case io:return[i,"LinearTransferOETF"];case Yt:case Rl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ed(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ry(n.getShaderSource(e),a)}else return s}function oy(n,e){let t=ay(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cy(n,e){let t;switch(e){case Sm:t="Linear";break;case Tm:t="Reinhard";break;case Em:t="OptimizedCineon";break;case Am:t="ACESFilmic";break;case Rm:t="AgX";break;case Pm:t="Neutral";break;case Cm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ly(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function uy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _r(n){return n!==""}function td(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(dy,py)}var fy=new Map;function py(n,e){let t=Be[e];if(t===void 0){let i=fy.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}var my=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(n){return n.replace(my,_y)}function _y(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function vy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case ks:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ks&&(e="ENVMAP_MODE_REFRACTION"),e}function xy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case Mm:e="ENVMAP_BLENDING_MIX";break;case bm:e="ENVMAP_BLENDING_ADD";break}return e}function wy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function My(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=gy(t),l=vy(t),u=yy(t),d=xy(t),f=wy(t),p=ly(t),g=uy(r),v=s.createProgram(),m,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),_.length>0&&(_+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),_=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Be.tonemapping_pars_fragment:"",t.toneMapping!==mi?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=Qc(a),a=td(a,t),a=nd(a,t),o=Qc(o),o=td(o,t),o=nd(o,t),a=id(a),o=id(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let b=S+m+a,T=S+_+o,k=Qh(s,s.VERTEX_SHADER,b),E=Qh(s,s.FRAGMENT_SHADER,T);s.attachShader(v,k),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(k).trim(),j=s.getShaderInfoLog(E).trim(),K=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,k,E);else{let ee=ed(s,k,"vertex"),O=ed(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ee+`
`+O)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||j==="")&&(q=!1);q&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:_}})}s.deleteShader(k),s.deleteShader(E),B=new Is(s,v),M=hy(s,v)}let B;this.getUniforms=function(){return B===void 0&&R(this),B};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,iy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=E,this}var by=0,el=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tl(e),t.set(e,i)),i}},tl=class{constructor(e){this.id=by++,this.code=e,this.usedTimes=0}};function Sy(n,e,t,i,s,r,a){let o=new La,c=new el,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,H,z){let j=H.fog,K=z.geometry,q=M.isMeshStandardMaterial?H.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),O=ee&&ee.mapping===to?ee.image.height:null,Z=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=re!==void 0?re.length:0,Ae=0;K.morphAttributes.position!==void 0&&(Ae=1),K.morphAttributes.normal!==void 0&&(Ae=2),K.morphAttributes.color!==void 0&&(Ae=3);let Ke,Y,se,xe;if(Z){let rt=Pn[Z];Ke=rt.vertexShader,Y=rt.fragmentShader}else Ke=M.vertexShader,Y=M.fragmentShader,c.update(M),se=c.getVertexShaderID(M),xe=c.getFragmentShaderID(M);let de=n.getRenderTarget(),qe=z.isInstancedMesh===!0,He=z.isBatchedMesh===!0,Qe=!!M.map,I=!!M.matcap,Ze=!!ee,Ye=!!M.aoMap,ft=!!M.lightMap,Ie=!!M.bumpMap,et=!!M.normalMap,je=!!M.displacementMap,Fe=!!M.emissiveMap,Mt=!!M.metalnessMap,A=!!M.roughnessMap,x=M.anisotropy>0,X=M.clearcoat>0,te=M.dispersion>0,ne=M.iridescence>0,ie=M.sheen>0,Ce=M.transmission>0,ue=x&&!!M.anisotropyMap,he=X&&!!M.clearcoatMap,Ve=X&&!!M.clearcoatNormalMap,ae=X&&!!M.clearcoatRoughnessMap,be=ne&&!!M.iridescenceMap,Xe=ne&&!!M.iridescenceThicknessMap,De=ie&&!!M.sheenColorMap,fe=ie&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,Je=!!M.specularColorMap,xt=!!M.specularIntensityMap,P=Ce&&!!M.transmissionMap,me=Ce&&!!M.thicknessMap,J=!!M.gradientMap,Q=!!M.alphaMap,ce=M.alphaTest>0,Ue=!!M.alphaHash,tt=!!M.extensions,wt=mi;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(wt=n.toneMapping);let At={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:Y,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:He,batchingColor:He&&z._colorsTexture!==null,instancing:qe,instancingColor:qe&&z.instanceColor!==null,instancingMorph:qe&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mi,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:I,envMap:Ze,envMapMode:Ze&&ee.mapping,envMapCubeUVHeight:O,aoMap:Ye,lightMap:ft,bumpMap:Ie,normalMap:et,displacementMap:f&&je,emissiveMap:Fe,normalMapObjectSpace:et&&M.normalMapType===Wm,normalMapTangentSpace:et&&M.normalMapType===bd,metalnessMap:Mt,roughnessMap:A,anisotropy:x,anisotropyMap:ue,clearcoat:X,clearcoatMap:he,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ae,dispersion:te,iridescence:ne,iridescenceMap:be,iridescenceThicknessMap:Xe,sheen:ie,sheenColorMap:De,sheenRoughnessMap:fe,specularMap:Ge,specularColorMap:Je,specularIntensityMap:xt,transmission:Ce,transmissionMap:P,thicknessMap:me,gradientMap:J,opaque:M.transparent===!1&&M.blending===Cs&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:Ue,combine:M.combine,mapUv:Qe&&v(M.map.channel),aoMapUv:Ye&&v(M.aoMap.channel),lightMapUv:ft&&v(M.lightMap.channel),bumpMapUv:Ie&&v(M.bumpMap.channel),normalMapUv:et&&v(M.normalMap.channel),displacementMapUv:je&&v(M.displacementMap.channel),emissiveMapUv:Fe&&v(M.emissiveMap.channel),metalnessMapUv:Mt&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:ue&&v(M.anisotropyMap.channel),clearcoatMapUv:he&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(M.sheenRoughnessMap.channel),specularMapUv:Ge&&v(M.specularMap.channel),specularColorMapUv:Je&&v(M.specularColorMap.channel),specularIntensityMapUv:xt&&v(M.specularIntensityMap.channel),transmissionMapUv:P&&v(M.transmissionMap.channel),thicknessMapUv:me&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(et||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Qe||Q),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:wt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:tt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function _(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(y,M),b(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),M.push(o.mask)}function T(M){let y=g[M.type],L;if(y){let H=Pn[y];L=m_.clone(H.uniforms)}else L=M.uniforms;return L}function k(M,y){let L;for(let H=0,z=u.length;H<z;H++){let j=u[H];if(j.cacheKey===y){L=j,++L.usedTimes;break}}return L===void 0&&(L=new My(n,y,M,r),u.push(L)),L}function E(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function R(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:T,acquireProgram:k,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:B}}function Ty(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ad(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,p,g,v,m){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=v,_.group=m),e++,_}function o(d,f,p,g,v,m){let _=a(d,f,p,g,v,m);p.transmission>0?i.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(d,f,p,g,v,m){let _=a(d,f,p,g,v,m);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function l(d,f){t.length>1&&t.sort(d||Ey),i.length>1&&i.sort(f||rd),s.length>1&&s.sort(f||rd)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Ay(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ad,n.set(i,[a])):s>=r.length?(a=new ad,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new We};break;case"SpotLight":t={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Ry(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Py=0;function Iy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ly(n){let e=new Cy,t=Ry(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let s=new N,r=new vt,a=new vt;function o(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,_=0,S=0,b=0,T=0,k=0,E=0,R=0;l.sort(Iy);for(let M=0,y=l.length;M<y;M++){let L=l[M],H=L.color,z=L.intensity,j=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*z,d+=H.g*z,f+=H.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],z);R++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,O=t.get(L);O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,S++}i.directional[p]=q,p++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(z),q.distance=j,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[v]=q;let ee=L.shadow;if(L.map&&(i.spotLightMap[k]=L.map,k++,ee.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[v]=ee.matrix,L.castShadow){let O=t.get(L);O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=K,T++}v++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(H).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let ee=L.shadow,O=t.get(L);O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,O.shadowCameraNear=ee.camera.near,O.shadowCameraFar=ee.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=L.shadow.matrix,b++}i.point[g]=q,g++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[_]=q,_++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let B=i.hash;(B.directionalLength!==p||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==_||B.numDirectionalShadows!==S||B.numPointShadows!==b||B.numSpotShadows!==T||B.numSpotMaps!==k||B.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+k-E,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,B.directionalLength=p,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=_,B.numDirectionalShadows=S,B.numPointShadows=b,B.numSpotShadows=T,B.numSpotMaps=k,B.numLightProbes=R,i.version=Py++)}function c(l,u){let d=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let _=0,S=l.length;_<S;_++){let b=l[_];if(b.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(b.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let T=i.rectArea[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let T=i.hemi[v];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function od(n){let e=new Ly(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ky(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new od(n),e.set(s,[o])):r>=a.length?(o=new od(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var nl=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},il=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dy=`uniform sampler2D shadow_pass;
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
}`;function Uy(n,e,t){let i=new Mr,s=new pe,r=new pe,a=new Pt,o=new nl({depthPacking:Gm}),c=new il,l={},u=t.maxTextureSize,d={[gi]:Jt,[Jt]:gi,[pn]:pn},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Ny,fragmentShader:Dy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let _=this.type;this.render=function(E,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(pi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=_!==jn&&this.type===jn,j=_===jn&&this.type!==jn;for(let K=0,q=E.length;K<q;K++){let ee=E[K],O=ee.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Z=O.getFrameExtents();if(s.multiply(Z),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||z===!0||j===!0){let ve=this.type!==jn?{minFilter:mn,magFilter:mn}:{};O.map!==null&&O.map.dispose(),O.map=new Yn(s.x,s.y,ve),O.map.texture.name=ee.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();let re=O.getViewportCount();for(let ve=0;ve<re;ve++){let Ae=O.getViewport(ve);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),H.viewport(a),O.updateMatrices(ee,ve),i=O.getFrustum(),T(R,B,O.camera,ee,this.type)}O.isPointLightShadow!==!0&&this.type===jn&&S(O,B),O.needsUpdate=!1}_=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,L)};function S(E,R){let B=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,B,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,B,p,v,null)}function b(E,R,B,M){let y=null,L=B.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)y=L;else if(y=B.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=y.uuid,z=R.uuid,j=l[H];j===void 0&&(j={},l[H]=j);let K=j[z];K===void 0&&(K=y.clone(),j[z]=K,R.addEventListener("dispose",k)),y=K}if(y.visible=R.visible,y.wireframe=R.wireframe,M===jn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=n.properties.get(y);H.light=B}return y}function T(E,R,B,M,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===jn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld);let z=e.update(E),j=E.material;if(Array.isArray(j)){let K=z.groups;for(let q=0,ee=K.length;q<ee;q++){let O=K[q],Z=j[O.materialIndex];if(Z&&Z.visible){let re=b(E,Z,M,y);E.onBeforeShadow(n,E,R,B,z,re,O),n.renderBufferDirect(B,null,z,re,E,O),E.onAfterShadow(n,E,R,B,z,re,O)}}}else if(j.visible){let K=b(E,j,M,y);E.onBeforeShadow(n,E,R,B,z,K,null),n.renderBufferDirect(B,null,z,K,E,null),E.onAfterShadow(n,E,R,B,z,K,null)}}let H=E.children;for(let z=0,j=H.length;z<j;z++)T(H[z],R,B,M,y)}function k(E){E.target.removeEventListener("dispose",k);for(let B in l){let M=l[B],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Oy(n){function e(){let P=!1,me=new Pt,J=null,Q=new Pt(0,0,0,0);return{setMask:function(ce){J!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),J=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Ue,tt,wt,At){At===!0&&(ce*=wt,Ue*=wt,tt*=wt),me.set(ce,Ue,tt,wt),Q.equals(me)===!1&&(n.clearColor(ce,Ue,tt,wt),Q.copy(me))},reset:function(){P=!1,J=null,Q.set(-1,0,0,0)}}}function t(){let P=!1,me=null,J=null,Q=null;return{setTest:function(ce){ce?xe(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ce){me!==ce&&!P&&(n.depthMask(ce),me=ce)},setFunc:function(ce){if(J!==ce){switch(ce){case mm:n.depthFunc(n.NEVER);break;case _m:n.depthFunc(n.ALWAYS);break;case gm:n.depthFunc(n.LESS);break;case Ma:n.depthFunc(n.LEQUAL);break;case vm:n.depthFunc(n.EQUAL);break;case ym:n.depthFunc(n.GEQUAL);break;case xm:n.depthFunc(n.GREATER);break;case wm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ce}},setLocked:function(ce){P=ce},setClear:function(ce){Q!==ce&&(n.clearDepth(ce),Q=ce)},reset:function(){P=!1,me=null,J=null,Q=null}}}function i(){let P=!1,me=null,J=null,Q=null,ce=null,Ue=null,tt=null,wt=null,At=null;return{setTest:function(rt){P||(rt?xe(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(rt){me!==rt&&!P&&(n.stencilMask(rt),me=rt)},setFunc:function(rt,Cn,Rn){(J!==rt||Q!==Cn||ce!==Rn)&&(n.stencilFunc(rt,Cn,Rn),J=rt,Q=Cn,ce=Rn)},setOp:function(rt,Cn,Rn){(Ue!==rt||tt!==Cn||wt!==Rn)&&(n.stencilOp(rt,Cn,Rn),Ue=rt,tt=Cn,wt=Rn)},setLocked:function(rt){P=rt},setClear:function(rt){At!==rt&&(n.clearStencil(rt),At=rt)},reset:function(){P=!1,me=null,J=null,Q=null,ce=null,Ue=null,tt=null,wt=null,At=null}}}let s=new e,r=new t,a=new i,o=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,g=!1,v=null,m=null,_=null,S=null,b=null,T=null,k=null,E=new We(0,0,0),R=0,B=!1,M=null,y=null,L=null,H=null,z=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,q=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=q>=1):ee.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=q>=2);let O=null,Z={},re=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Ae=new Pt().fromArray(re),Ke=new Pt().fromArray(ve);function Y(P,me,J,Q){let ce=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(P,Ue),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<J;tt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(me+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ue}let se={};se[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),r.setFunc(Ma),Ie(!1),et(Hu),xe(n.CULL_FACE),Ye(pi);function xe(P){l[P]!==!0&&(n.enable(P),l[P]=!0)}function de(P){l[P]!==!1&&(n.disable(P),l[P]=!1)}function qe(P,me){return u[P]!==me?(n.bindFramebuffer(P,me),u[P]=me,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function He(P,me){let J=f,Q=!1;if(P){J=d.get(me),J===void 0&&(J=[],d.set(me,J));let ce=P.textures;if(J.length!==ce.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,tt=ce.length;Ue<tt;Ue++)J[Ue]=n.COLOR_ATTACHMENT0+Ue;J.length=ce.length,Q=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Q=!0);Q&&n.drawBuffers(J)}function Qe(P){return p!==P?(n.useProgram(P),p=P,!0):!1}let I={[zi]:n.FUNC_ADD,[Zp]:n.FUNC_SUBTRACT,[Qp]:n.FUNC_REVERSE_SUBTRACT};I[em]=n.MIN,I[tm]=n.MAX;let Ze={[nm]:n.ZERO,[im]:n.ONE,[sm]:n.SRC_COLOR,[Uc]:n.SRC_ALPHA,[um]:n.SRC_ALPHA_SATURATE,[cm]:n.DST_COLOR,[am]:n.DST_ALPHA,[rm]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[lm]:n.ONE_MINUS_DST_COLOR,[om]:n.ONE_MINUS_DST_ALPHA,[hm]:n.CONSTANT_COLOR,[dm]:n.ONE_MINUS_CONSTANT_COLOR,[fm]:n.CONSTANT_ALPHA,[pm]:n.ONE_MINUS_CONSTANT_ALPHA};function Ye(P,me,J,Q,ce,Ue,tt,wt,At,rt){if(P===pi){g===!0&&(de(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),P!==Jp){if(P!==v||rt!==B){if((m!==zi||b!==zi)&&(n.blendEquation(n.FUNC_ADD),m=zi,b=zi),rt)switch(P){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFunc(n.ONE,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,S=null,T=null,k=null,E.set(0,0,0),R=0,v=P,B=rt}return}ce=ce||me,Ue=Ue||J,tt=tt||Q,(me!==m||ce!==b)&&(n.blendEquationSeparate(I[me],I[ce]),m=me,b=ce),(J!==_||Q!==S||Ue!==T||tt!==k)&&(n.blendFuncSeparate(Ze[J],Ze[Q],Ze[Ue],Ze[tt]),_=J,S=Q,T=Ue,k=tt),(wt.equals(E)===!1||At!==R)&&(n.blendColor(wt.r,wt.g,wt.b,At),E.copy(wt),R=At),v=P,B=!1}function ft(P,me){P.side===pn?de(n.CULL_FACE):xe(n.CULL_FACE);let J=P.side===Jt;me&&(J=!J),Ie(J),P.blending===Cs&&P.transparent===!1?Ye(pi):Ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);let Q=P.stencilWrite;a.setTest(Q),Q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Fe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){M!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),M=P)}function et(P){P!==Xp?(xe(n.CULL_FACE),P!==y&&(P===Hu?n.cullFace(n.BACK):P===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),y=P}function je(P){P!==L&&(K&&n.lineWidth(P),L=P)}function Fe(P,me,J){P?(xe(n.POLYGON_OFFSET_FILL),(H!==me||z!==J)&&(n.polygonOffset(me,J),H=me,z=J)):de(n.POLYGON_OFFSET_FILL)}function Mt(P){P?xe(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function A(P){P===void 0&&(P=n.TEXTURE0+j-1),O!==P&&(n.activeTexture(P),O=P)}function x(P,me,J){J===void 0&&(O===null?J=n.TEXTURE0+j-1:J=O);let Q=Z[J];Q===void 0&&(Q={type:void 0,texture:void 0},Z[J]=Q),(Q.type!==P||Q.texture!==me)&&(O!==J&&(n.activeTexture(J),O=J),n.bindTexture(P,me||se[P]),Q.type=P,Q.texture=me)}function X(){let P=Z[O];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){Ae.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ae.copy(P))}function fe(P){Ke.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ke.copy(P))}function Ge(P,me){let J=c.get(me);J===void 0&&(J=new WeakMap,c.set(me,J));let Q=J.get(P);Q===void 0&&(Q=n.getUniformBlockIndex(me,P.name),J.set(P,Q))}function Je(P,me){let Q=c.get(me).get(P);o.get(me)!==Q&&(n.uniformBlockBinding(me,Q,P.__bindingPointIndex),o.set(me,Q))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},O=null,Z={},u={},d=new WeakMap,f=[],p=null,g=!1,v=null,m=null,_=null,S=null,b=null,T=null,k=null,E=new We(0,0,0),R=0,B=!1,M=null,y=null,L=null,H=null,z=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:de,bindFramebuffer:qe,drawBuffers:He,useProgram:Qe,setBlending:Ye,setMaterial:ft,setFlipSided:Ie,setCullFace:et,setLineWidth:je,setPolygonOffset:Fe,setScissorTest:Mt,activeTexture:A,bindTexture:x,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:be,texImage3D:Xe,updateUBOMapping:Ge,uniformBlockBinding:Je,texStorage2D:Ve,texStorage3D:ae,texSubImage2D:ie,texSubImage3D:Ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:De,viewport:fe,reset:xt}}function Fy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):Ra("canvas")}function v(A,x,X){let te=1,ne=Mt(A);if((ne.width>X||ne.height>X)&&(te=X/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ie=Math.floor(te*ne.width),Ce=Math.floor(te*ne.height);d===void 0&&(d=g(ie,Ce));let ue=x?g(ie,Ce):d;return ue.width=ie,ue.height=Ce,ue.getContext("2d").drawImage(A,0,0,ie,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ie+"x"+Ce+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==mn&&A.minFilter!==Tn}function _(A){n.generateMipmap(A)}function S(A,x,X,te,ne=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=x;if(x===n.RED&&(X===n.FLOAT&&(ie=n.R32F),X===n.HALF_FLOAT&&(ie=n.R16F),X===n.UNSIGNED_BYTE&&(ie=n.R8)),x===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ie=n.R8UI),X===n.UNSIGNED_SHORT&&(ie=n.R16UI),X===n.UNSIGNED_INT&&(ie=n.R32UI),X===n.BYTE&&(ie=n.R8I),X===n.SHORT&&(ie=n.R16I),X===n.INT&&(ie=n.R32I)),x===n.RG&&(X===n.FLOAT&&(ie=n.RG32F),X===n.HALF_FLOAT&&(ie=n.RG16F),X===n.UNSIGNED_BYTE&&(ie=n.RG8)),x===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ie=n.RG8UI),X===n.UNSIGNED_SHORT&&(ie=n.RG16UI),X===n.UNSIGNED_INT&&(ie=n.RG32UI),X===n.BYTE&&(ie=n.RG8I),X===n.SHORT&&(ie=n.RG16I),X===n.INT&&(ie=n.RG32I)),x===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),x===n.RGBA){let Ce=ne?Ta:st.getTransfer(te);X===n.FLOAT&&(ie=n.RGBA32F),X===n.HALF_FLOAT&&(ie=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ie=Ce===ct?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(A,x){let X;return A?x===null||x===Ns||x===Ds?X=n.DEPTH24_STENCIL8:x===fi?X=n.DEPTH32F_STENCIL8:x===ba&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ns||x===Ds?X=n.DEPTH_COMPONENT24:x===fi?X=n.DEPTH_COMPONENT32F:x===ba&&(X=n.DEPTH_COMPONENT16),X}function T(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==mn&&A.minFilter!==Tn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function k(A){let x=A.target;x.removeEventListener("dispose",k),R(x),x.isVideoTexture&&u.delete(x)}function E(A){let x=A.target;x.removeEventListener("dispose",E),M(x)}function R(A){let x=i.get(A);if(x.__webglInit===void 0)return;let X=A.source,te=f.get(X);if(te){let ne=te[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(A),Object.keys(te).length===0&&f.delete(X)}i.remove(A)}function B(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let X=A.source,te=f.get(X);delete te[x.__cacheKey],a.memory.textures--}function M(A){let x=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ne=0;ne<x.__webglFramebuffer[te].length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[te][ne]);else n.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)n.deleteFramebuffer(x.__webglFramebuffer[te]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=A.textures;for(let te=0,ne=X.length;te<ne;te++){let ie=i.get(X[te]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(X[te])}i.remove(A)}let y=0;function L(){y=0}function H(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function z(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function j(A,x){let X=i.get(A);if(A.isVideoTexture&&je(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(X,A,x);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+x)}function K(A,x){let X=i.get(A);if(A.version>0&&X.__version!==A.version){Ke(X,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+x)}function q(A,x){let X=i.get(A);if(A.version>0&&X.__version!==A.version){Ke(X,A,x);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+x)}function ee(A,x){let X=i.get(A);if(A.version>0&&X.__version!==A.version){Y(X,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+x)}let O={[xr]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},Z={[mn]:n.NEAREST,[Im]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Zo]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},re={[$m]:n.NEVER,[Jm]:n.ALWAYS,[qm]:n.LESS,[Sd]:n.LEQUAL,[jm]:n.EQUAL,[Ym]:n.GEQUAL,[Xm]:n.GREATER,[Km]:n.NOTEQUAL};function ve(A,x){if(x.type===fi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tn||x.magFilter===Zo||x.magFilter===Kr||x.magFilter===Gi||x.minFilter===Tn||x.minFilter===Zo||x.minFilter===Kr||x.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,O[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,O[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,O[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Z[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Z[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mn||x.minFilter!==Kr&&x.minFilter!==Gi||x.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(A,x){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",k));let te=x.source,ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));let ie=z(x);if(ie!==A.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[ie].usedTimes++;let Ce=ne[A.__cacheKey];Ce!==void 0&&(ne[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&B(x)),A.__cacheKey=ie,A.__webglTexture=ne[ie].texture}return X}function Ke(A,x,X){let te=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=n.TEXTURE_3D);let ne=Ae(A,x),ie=x.source;t.bindTexture(te,A.__webglTexture,n.TEXTURE0+X);let Ce=i.get(ie);if(ie.version!==Ce.__version||ne===!0){t.activeTexture(n.TEXTURE0+X);let ue=st.getPrimaries(st.workingColorSpace),he=x.colorSpace===di?null:st.getPrimaries(x.colorSpace),Ve=x.colorSpace===di||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ae=v(x.image,!1,s.maxTextureSize);ae=Fe(x,ae);let be=r.convert(x.format,x.colorSpace),Xe=r.convert(x.type),De=S(x.internalFormat,be,Xe,x.colorSpace,x.isVideoTexture);ve(te,x);let fe,Ge=x.mipmaps,Je=x.isVideoTexture!==!0,xt=Ce.__version===void 0||ne===!0,P=ie.dataReady,me=T(x,ae);if(x.isDepthTexture)De=b(x.format===Us,x.type),xt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,be,Xe,null));else if(x.isDataTexture)if(Ge.length>0){Je&&xt&&t.texStorage2D(n.TEXTURE_2D,me,De,Ge[0].width,Ge[0].height);for(let J=0,Q=Ge.length;J<Q;J++)fe=Ge[J],Je?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,be,Xe,fe.data):t.texImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,be,Xe,fe.data);x.generateMipmaps=!1}else Je?(xt&&t.texStorage2D(n.TEXTURE_2D,me,De,ae.width,ae.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,be,Xe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,be,Xe,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Je&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,De,Ge[0].width,Ge[0].height,ae.depth);for(let J=0,Q=Ge.length;J<Q;J++)if(fe=Ge[J],x.format!==Ln)if(be!==null)if(Je){if(P)if(x.layerUpdates.size>0){for(let ce of x.layerUpdates){let Ue=fe.width*fe.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ce,fe.width,fe.height,1,be,fe.data.slice(Ue*ce,Ue*(ce+1)),0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ae.depth,be,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,De,fe.width,fe.height,ae.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ae.depth,be,Xe,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,De,fe.width,fe.height,ae.depth,0,be,Xe,fe.data)}else{Je&&xt&&t.texStorage2D(n.TEXTURE_2D,me,De,Ge[0].width,Ge[0].height);for(let J=0,Q=Ge.length;J<Q;J++)fe=Ge[J],x.format!==Ln?be!==null?Je?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,be,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,be,Xe,fe.data):t.texImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,be,Xe,fe.data)}else if(x.isDataArrayTexture)if(Je){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,De,ae.width,ae.height,ae.depth),P)if(x.layerUpdates.size>0){let J;switch(Xe){case n.UNSIGNED_BYTE:switch(be){case n.ALPHA:J=1;break;case n.LUMINANCE:J=1;break;case n.LUMINANCE_ALPHA:J=2;break;case n.RGB:J=3;break;case n.RGBA:J=4;break;default:throw new Error(`Unknown texel size for format ${be}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:J=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}let Q=ae.width*ae.height*J;for(let ce of x.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ae.width,ae.height,1,be,Xe,ae.data.slice(Q*ce,Q*(ce+1)));x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,Xe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,be,Xe,ae.data);else if(x.isData3DTexture)Je?(xt&&t.texStorage3D(n.TEXTURE_3D,me,De,ae.width,ae.height,ae.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,Xe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,be,Xe,ae.data);else if(x.isFramebufferTexture){if(xt)if(Je)t.texStorage2D(n.TEXTURE_2D,me,De,ae.width,ae.height);else{let J=ae.width,Q=ae.height;for(let ce=0;ce<me;ce++)t.texImage2D(n.TEXTURE_2D,ce,De,J,Q,0,be,Xe,null),J>>=1,Q>>=1}}else if(Ge.length>0){if(Je&&xt){let J=Mt(Ge[0]);t.texStorage2D(n.TEXTURE_2D,me,De,J.width,J.height)}for(let J=0,Q=Ge.length;J<Q;J++)fe=Ge[J],Je?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,be,Xe,fe):t.texImage2D(n.TEXTURE_2D,J,De,be,Xe,fe);x.generateMipmaps=!1}else if(Je){if(xt){let J=Mt(ae);t.texStorage2D(n.TEXTURE_2D,me,De,J.width,J.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Xe,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,be,Xe,ae);m(x)&&_(te),Ce.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Y(A,x,X){if(x.image.length!==6)return;let te=Ae(A,x),ne=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+X);let ie=i.get(ne);if(ne.version!==ie.__version||te===!0){t.activeTexture(n.TEXTURE0+X);let Ce=st.getPrimaries(st.workingColorSpace),ue=x.colorSpace===di?null:st.getPrimaries(x.colorSpace),he=x.colorSpace===di||Ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Ve=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,be=[];for(let Q=0;Q<6;Q++)!Ve&&!ae?be[Q]=v(x.image[Q],!0,s.maxCubemapSize):be[Q]=ae?x.image[Q].image:x.image[Q],be[Q]=Fe(x,be[Q]);let Xe=be[0],De=r.convert(x.format,x.colorSpace),fe=r.convert(x.type),Ge=S(x.internalFormat,De,fe,x.colorSpace),Je=x.isVideoTexture!==!0,xt=ie.__version===void 0||te===!0,P=ne.dataReady,me=T(x,Xe);ve(n.TEXTURE_CUBE_MAP,x);let J;if(Ve){Je&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ge,Xe.width,Xe.height);for(let Q=0;Q<6;Q++){J=be[Q].mipmaps;for(let ce=0;ce<J.length;ce++){let Ue=J[ce];x.format!==Ln?De!==null?Je?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Ge,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,De,fe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Ge,Ue.width,Ue.height,0,De,fe,Ue.data)}}}else{if(J=x.mipmaps,Je&&xt){J.length>0&&me++;let Q=Mt(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be[Q].width,be[Q].height,De,fe,be[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,be[Q].width,be[Q].height,0,De,fe,be[Q].data);for(let ce=0;ce<J.length;ce++){let tt=J[ce].image[Q].image;Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,tt.width,tt.height,De,fe,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Ge,tt.width,tt.height,0,De,fe,tt.data)}}else{Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,fe,be[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,De,fe,be[Q]);for(let ce=0;ce<J.length;ce++){let Ue=J[ce];Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,De,fe,Ue.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Ge,De,fe,Ue.image[Q])}}}m(x)&&_(n.TEXTURE_CUBE_MAP),ie.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function se(A,x,X,te,ne,ie){let Ce=r.convert(X.format,X.colorSpace),ue=r.convert(X.type),he=S(X.internalFormat,Ce,ue,X.colorSpace);if(!i.get(x).__hasExternalTextures){let ae=Math.max(1,x.width>>ie),be=Math.max(1,x.height>>ie);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,he,ae,be,x.depth,0,Ce,ue,null):t.texImage2D(ne,ie,he,ae,be,0,Ce,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0,Ie(x)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(A,x,X){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let te=x.depthTexture,ne=te&&te.isDepthTexture?te.type:null,ie=b(x.stencilBuffer,ne),Ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Ie(x);et(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ie,x.width,x.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ie,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ie,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,A)}else{let te=x.textures;for(let ne=0;ne<te.length;ne++){let ie=te[ne],Ce=r.convert(ie.format,ie.colorSpace),ue=r.convert(ie.type),he=S(ie.internalFormat,Ce,ue,ie.colorSpace),Ve=Ie(x);X&&et(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,he,x.width,x.height):et(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,he,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,he,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let te=i.get(x.depthTexture).__webglTexture,ne=Ie(x);if(x.depthTexture.format===Rs)et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(x.depthTexture.format===Us)et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function qe(A){let x=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");de(x.__webglFramebuffer,A)}else if(X){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=n.createRenderbuffer(),xe(x.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),xe(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(A,x,X){let te=i.get(A);x!==void 0&&se(te.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&qe(A)}function Qe(A){let x=A.texture,X=i.get(A),te=i.get(x);A.addEventListener("dispose",E);let ne=A.textures,ie=A.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=x.version,a.memory.textures++),ie){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let he=0;he<x.mipmaps.length;he++)X.__webglFramebuffer[ue][he]=n.createFramebuffer()}else X.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)X.__webglFramebuffer[ue]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ue=0,he=ne.length;ue<he;ue++){let Ve=i.get(ne[ue]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&et(A)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){let he=ne[ue];X.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);let Ve=r.convert(he.format,he.colorSpace),ae=r.convert(he.type),be=S(he.internalFormat,Ve,ae,he.colorSpace,A.isXRRenderTarget===!0),Xe=Ie(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ve(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)se(X.__webglFramebuffer[ue][he],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else se(X.__webglFramebuffer[ue],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(x)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ue=0,he=ne.length;ue<he;ue++){let Ve=ne[ue],ae=i.get(Ve);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ve(n.TEXTURE_2D,Ve),se(X.__webglFramebuffer,A,Ve,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ve)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),ve(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)se(X.__webglFramebuffer[he],A,x,n.COLOR_ATTACHMENT0,ue,he);else se(X.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,ue,0);m(x)&&_(ue),t.unbindTexture()}A.depthBuffer&&qe(A)}function I(A){let x=A.textures;for(let X=0,te=x.length;X<te;X++){let ne=x[X];if(m(ne)){let ie=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(ne).__webglTexture;t.bindTexture(ie,Ce),_(ie),t.unbindTexture()}}}let Ze=[],Ye=[];function ft(A){if(A.samples>0){if(et(A)===!1){let x=A.textures,X=A.width,te=A.height,ne=n.COLOR_BUFFER_BIT,ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(A),ue=x.length>1;if(ue)for(let he=0;he<x.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let he=0;he<x.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[he]);let Ve=i.get(x[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ne,n.NEAREST),c===!0&&(Ze.length=0,Ye.length=0,Ze.push(n.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(ie),Ye.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let he=0;he<x.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[he]);let Ve=i.get(x[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ie(A){return Math.min(s.maxSamples,A.samples)}function et(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function je(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Fe(A,x){let X=A.colorSpace,te=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==Mi&&X!==di&&(st.getTransfer(X)===ct?(te!==Ln||ne!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=ee,this.rebindTextures=He,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=et}function By(n,e){function t(i,s=di){let r,a=st.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===vd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lm)return n.BYTE;if(i===km)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===gd)return n.INT;if(i===Ns)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===no)return n.HALF_FLOAT;if(i===Dm)return n.ALPHA;if(i===Um)return n.RGB;if(i===Ln)return n.RGBA;if(i===Om)return n.LUMINANCE;if(i===Fm)return n.LUMINANCE_ALPHA;if(i===Rs)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===Bm)return n.RED;if(i===xd)return n.RED_INTEGER;if(i===zm)return n.RG;if(i===wd)return n.RG_INTEGER;if(i===Md)return n.RGBA_INTEGER;if(i===Qo||i===ec||i===tc||i===nc)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ec)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$u||i===qu||i===ju||i===Xu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$u)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ju)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ku||i===Yu||i===Ju)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ku||i===Yu)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ju)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zu||i===Qu||i===eh||i===th||i===nh||i===ih||i===sh||i===rh||i===ah||i===oh||i===ch||i===lh||i===uh||i===hh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zu)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qu)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ah)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ch)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===dh||i===fh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hm||i===ph||i===mh||i===_h)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var sl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},_n=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zy={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),_=this._getHandJoint(l,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
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

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new an,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Dn({vertexShader:Hy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}},al=class extends yi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,v=new rl,m=t.getContextAttributes(),_=null,S=null,b=[],T=[],k=new pe,E=null,R=new $t;R.layers.enable(1),R.viewport=new Pt;let B=new $t;B.layers.enable(2),B.viewport=new Pt;let M=[R,B],y=new sl;y.layers.enable(1),y.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=b[Y];return se===void 0&&(se=new gr,b[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=b[Y];return se===void 0&&(se=new gr,b[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=b[Y];return se===void 0&&(se=new gr,b[Y]=se),se.getHandSpace()};function z(Y){let se=T.indexOf(Y.inputSource);if(se===-1)return;let xe=b[se];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<b.length;Y++){let se=T[Y];se!==null&&(T[Y]=null,b[Y].disconnect(se))}L=null,H=null,v.reset(),e.setRenderTarget(_),p=null,f=null,d=null,s=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,xe=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Us:Rs,xe=m.stencil?Ds:Ns);let qe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Yn(f.textureWidth,f.textureHeight,{format:Ln,type:vi,depthTexture:new Ba(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function K(Y){for(let se=0;se<Y.removed.length;se++){let xe=Y.removed[se],de=T.indexOf(xe);de>=0&&(T[de]=null,b[de].disconnect(xe))}for(let se=0;se<Y.added.length;se++){let xe=Y.added[se],de=T.indexOf(xe);if(de===-1){for(let He=0;He<b.length;He++)if(He>=T.length){T.push(xe),de=He;break}else if(T[He]===null){T[He]=xe,de=He;break}if(de===-1)break}let qe=b[de];qe&&qe.connect(xe)}}let q=new N,ee=new N;function O(Y,se,xe){q.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);let de=q.distanceTo(ee),qe=se.projectionMatrix.elements,He=xe.projectionMatrix.elements,Qe=qe[14]/(qe[10]-1),I=qe[14]/(qe[10]+1),Ze=(qe[9]+1)/qe[5],Ye=(qe[9]-1)/qe[5],ft=(qe[8]-1)/qe[0],Ie=(He[8]+1)/He[0],et=Qe*ft,je=Qe*Ie,Fe=de/(-ft+Ie),Mt=Fe*-ft;se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let A=Qe+Fe,x=I+Fe,X=et-Mt,te=je+(de-Mt),ne=Ze*I/x*A,ie=Ye*I/x*A;Y.projectionMatrix.makePerspective(X,te,ne,ie,A,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Z(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),y.near=B.near=R.near=Y.near,y.far=B.far=R.far=Y.far,(L!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,H=y.far,R.near=L,R.far=H,B.near=L,B.far=H,R.updateProjectionMatrix(),B.updateProjectionMatrix(),Y.updateProjectionMatrix());let se=Y.parent,xe=y.cameras;Z(y,se);for(let de=0;de<xe.length;de++)Z(xe[de],se);xe.length===2?O(y,R,B):y.projectionMatrix.copy(R.projectionMatrix),re(Y,y,se)};function re(Y,se,xe){xe===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ve=null;function Ae(Y,se){if(u=se.getViewerPose(l||a),g=se,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let de=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let He=0;He<xe.length;He++){let Qe=xe[He],I=null;if(p!==null)I=p.getViewport(Qe);else{let Ye=d.getViewSubImage(f,Qe);I=Ye.viewport,He===0&&(e.setRenderTargetTextures(S,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(S))}let Ze=M[He];Ze===void 0&&(Ze=new $t,Ze.layers.enable(He),Ze.viewport=new Pt,M[He]=Ze),Ze.matrix.fromArray(Qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(I.x,I.y,I.width,I.height),He===0&&(y.matrix.copy(Ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(Ze)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){let He=d.getDepthInformation(xe[0]);He&&He.isValid&&He.texture&&v.init(e,He,s.renderState)}}for(let xe=0;xe<b.length;xe++){let de=T[xe],qe=b[xe];de!==null&&qe!==void 0&&qe.update(de,se,l||a)}ve&&ve(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let Ke=new Cd;Ke.setAnimationLoop(Ae),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}},Fi=new kn,Gy=new vt;function Wy(n,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function i(m,_){_.color.getRGB(m.fogColor.value,Ad(n)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function s(m,_,S,b,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(m,_):_.isMeshToonMaterial?(r(m,_),d(m,_)):_.isMeshPhongMaterial?(r(m,_),u(m,_)):_.isMeshStandardMaterial?(r(m,_),f(m,_),_.isMeshPhysicalMaterial&&p(m,_,T)):_.isMeshMatcapMaterial?(r(m,_),g(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),v(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?c(m,_,S,b):_.isSpriteMaterial?l(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Jt&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Jt&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let S=e.get(_),b=S.envMap,T=S.envMapRotation;b&&(m.envMap.value=b,Fi.copy(T),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Fi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function c(m,_,S,b){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*S,m.scale.value=b*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function l(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function f(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function p(m,_,S){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jt&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,_){_.matcap&&(m.matcap.value=_.matcap)}function v(m,_){let S=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $y(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let T=b.program;i.uniformBlockBinding(S,T)}function l(S,b){let T=s[S.id];T===void 0&&(g(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",m));let k=b.program;i.updateUBOMapping(S,k);let E=e.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){let b=d();S.__bindingPointIndex=b;let T=n.createBuffer(),k=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,k,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=s[S.id],T=S.uniforms,k=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,R=T.length;E<R;E++){let B=Array.isArray(T[E])?T[E]:[T[E]];for(let M=0,y=B.length;M<y;M++){let L=B[M];if(p(L,E,M,k)===!0){let H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],j=0;for(let K=0;K<z.length;K++){let q=z[K],ee=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+j,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,b,T,k){let E=S.value,R=b+"_"+T;if(k[R]===void 0)return typeof E=="number"||typeof E=="boolean"?k[R]=E:k[R]=E.clone(),!0;{let B=k[R];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return k[R]=E,!0}else if(B.equals(E)===!1)return B.copy(E),!0}return!1}function g(S){let b=S.uniforms,T=0,k=16;for(let R=0,B=b.length;R<B;R++){let M=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,L=M.length;y<L;y++){let H=M[y],z=Array.isArray(H.value)?H.value:[H.value];for(let j=0,K=z.length;j<K;j++){let q=z[j],ee=v(q),O=T%k;O!==0&&k-O<ee.boundary&&(T+=k-O),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=ee.storage}}}let E=T%k;return E>0&&(T+=k-E),S.__size=T,S.__cache={},this}function v(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function _(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:_}}var za=class{constructor(e={}){let{canvas:t=Qm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,_=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=mi,this.toneMappingExposure=1;let b=this,T=!1,k=0,E=0,R=null,B=-1,M=null,y=new Pt,L=new Pt,H=null,z=new We(0),j=0,K=t.width,q=t.height,ee=1,O=null,Z=null,re=new Pt(0,0,K,q),ve=new Pt(0,0,K,q),Ae=!1,Ke=new Mr,Y=!1,se=!1,xe=new vt,de=new N,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Qe(){return R===null?ee:1}let I=i;function Ze(w,D){return t.getContext(w,D)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r165"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",Q,!1),I===null){let D="webgl2";if(I=Ze(D,w),I===null)throw Ze(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,ft,Ie,et,je,Fe,Mt,A,x,X,te,ne,ie,Ce,ue,he,Ve,ae,be,Xe,De,fe,Ge,Je;function xt(){Ye=new uv(I),Ye.init(),fe=new By(I,Ye),ft=new sv(I,Ye,e,fe),Ie=new Oy(I),et=new fv(I),je=new Ty,Fe=new Fy(I,Ye,Ie,je,ft,fe,et),Mt=new av(b),A=new lv(b),x=new x_(I),Ge=new nv(I,x),X=new hv(I,x,et,Ge),te=new mv(I,X,x,et),be=new pv(I,ft,Fe),he=new rv(je),ne=new Sy(b,Mt,A,Ye,ft,Ge,he),ie=new Wy(b,je),Ce=new Ay,ue=new ky(Ye),ae=new tv(b,Mt,A,Ie,te,f,c),Ve=new Uy(b,te,ft),Je=new $y(I,et,ft,Ie),Xe=new iv(I,Ye,et),De=new dv(I,Ye,et),et.programs=ne.programs,b.capabilities=ft,b.extensions=Ye,b.properties=je,b.renderLists=Ce,b.shadowMap=Ve,b.state=Ie,b.info=et}xt();let P=new al(b,I);this.xr=P,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(K,q,!1))},this.getSize=function(w){return w.set(K,q)},this.setSize=function(w,D,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,q=D,t.width=Math.floor(w*ee),t.height=Math.floor(D*ee),V===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(K*ee,q*ee).floor()},this.setDrawingBufferSize=function(w,D,V){K=w,q=D,ee=V,t.width=Math.floor(w*V),t.height=Math.floor(D*V),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,D,V,W){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,D,V,W),Ie.viewport(y.copy(re).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,D,V,W){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,D,V,W),Ie.scissor(L.copy(ve).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Ie.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(w=!0,D=!0,V=!0){let W=0;if(w){let F=!1;if(R!==null){let oe=R.texture.format;F=oe===Md||oe===wd||oe===xd}if(F){let oe=R.texture.type,_e=oe===vi||oe===Ns||oe===ba||oe===Ds||oe===vd||oe===yd,ye=ae.getClearColor(),Me=ae.getClearAlpha(),Le=ye.r,Ne=ye.g,Re=ye.b;_e?(p[0]=Le,p[1]=Ne,p[2]=Re,p[3]=Me,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Le,g[1]=Ne,g[2]=Re,g[3]=Me,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}D&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ce.dispose(),ue.dispose(),je.dispose(),Mt.dispose(),A.dispose(),te.dispose(),Ge.dispose(),Je.dispose(),ne.dispose(),P.dispose(),P.removeEventListener("sessionstart",Cn),P.removeEventListener("sessionend",Rn),Ii.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=et.autoReset,D=Ve.enabled,V=Ve.autoUpdate,W=Ve.needsUpdate,F=Ve.type;xt(),et.autoReset=w,Ve.enabled=D,Ve.autoUpdate=V,Ve.needsUpdate=W,Ve.type=F}function Q(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let D=w.target;D.removeEventListener("dispose",ce),Ue(D)}function Ue(w){tt(w),je.remove(w)}function tt(w){let D=je.get(w).programs;D!==void 0&&(D.forEach(function(V){ne.releaseProgram(V)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,V,W,F,oe){D===null&&(D=qe);let _e=F.isMesh&&F.matrixWorld.determinant()<0,ye=Wp(w,D,V,W,F);Ie.setMaterial(W,_e);let Me=V.index,Le=1;if(W.wireframe===!0){if(Me=X.getWireframeAttribute(V),Me===void 0)return;Le=2}let Ne=V.drawRange,Re=V.attributes.position,nt=Ne.start*Le,_t=(Ne.start+Ne.count)*Le;oe!==null&&(nt=Math.max(nt,oe.start*Le),_t=Math.min(_t,(oe.start+oe.count)*Le)),Me!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Me.count)):Re!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,Re.count));let gt=_t-nt;if(gt<0||gt===1/0)return;Ge.setup(F,W,ye,V,Me);let tn,it=Xe;if(Me!==null&&(tn=x.get(Me),it=De,it.setIndex(tn)),F.isMesh)W.wireframe===!0?(Ie.setLineWidth(W.wireframeLinewidth*Qe()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(F.isLine){let Te=W.linewidth;Te===void 0&&(Te=1),Ie.setLineWidth(Te*Qe()),F.isLineSegments?it.setMode(I.LINES):F.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else F.isPoints?it.setMode(I.POINTS):F.isSprite&&it.setMode(I.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)it.renderInstances(nt,gt,F.count);else if(V.isInstancedBufferGeometry){let Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vt=Math.min(V.instanceCount,Te);it.renderInstances(nt,gt,Vt)}else it.render(nt,gt)};function wt(w,D,V){w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,jr(w,D,V),w.side=gi,w.needsUpdate=!0,jr(w,D,V),w.side=pn):jr(w,D,V)}this.compile=function(w,D,V=null){V===null&&(V=w),m=ue.get(V),m.init(D),S.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let W=new Set;return w.traverse(function(F){let oe=F.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){let ye=oe[_e];wt(ye,V,F),W.add(ye)}else wt(oe,V,F),W.add(oe)}),S.pop(),m=null,W},this.compileAsync=function(w,D,V=null){let W=this.compile(w,D,V);return new Promise(F=>{function oe(){if(W.forEach(function(_e){je.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){F(w);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let At=null;function rt(w){At&&At(w)}function Cn(){Ii.stop()}function Rn(){Ii.start()}let Ii=new Cd;Ii.setAnimationLoop(rt),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(w){At=w,P.setAnimationLoop(w),w===null?Ii.stop():Ii.start()},P.addEventListener("sessionstart",Cn),P.addEventListener("sessionend",Rn),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(D),D=P.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,D,R),m=ue.get(w,S.length),m.init(D),S.push(m),xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ke.setFromProjectionMatrix(xe),se=this.localClippingEnabled,Y=he.init(this.clippingPlanes,se),v=Ce.get(w,_.length),v.init(),_.push(v),P.enabled===!0&&P.isPresenting===!0){let oe=b.xr.getDepthSensingMesh();oe!==null&&Xo(oe,D,-1/0,b.sortObjects)}Xo(w,D,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(O,Z),He=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,He&&ae.addToRenderList(v,w),this.info.render.frame++,Y===!0&&he.beginShadows();let V=m.state.shadowsArray;Ve.render(V,w,D),Y===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=v.opaque,F=v.transmissive;if(m.setupLights(),D.isArrayCamera){let oe=D.cameras;if(F.length>0)for(let _e=0,ye=oe.length;_e<ye;_e++){let Me=oe[_e];Uu(W,F,w,Me)}He&&ae.render(w);for(let _e=0,ye=oe.length;_e<ye;_e++){let Me=oe[_e];Du(v,w,Me,Me.viewport)}}else F.length>0&&Uu(W,F,w,D),He&&ae.render(w),Du(v,w,D);R!==null&&(Fe.updateMultisampleRenderTarget(R),Fe.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(b,w,D),Ge.resetDefaultState(),B=-1,M=null,S.pop(),S.length>0?(m=S[S.length-1],Y===!0&&he.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function Xo(w,D,V,W){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ke.intersectsSprite(w)){W&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let _e=te.update(w),ye=w.material;ye.visible&&v.push(w,_e,ye,V,de.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ke.intersectsObject(w))){let _e=te.update(w),ye=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),de.copy(_e.boundingSphere.center)),de.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(ye)){let Me=_e.groups;for(let Le=0,Ne=Me.length;Le<Ne;Le++){let Re=Me[Le],nt=ye[Re.materialIndex];nt&&nt.visible&&v.push(w,_e,nt,V,de.z,Re)}}else ye.visible&&v.push(w,_e,ye,V,de.z,null)}}let oe=w.children;for(let _e=0,ye=oe.length;_e<ye;_e++)Xo(oe[_e],D,V,W)}function Du(w,D,V,W){let F=w.opaque,oe=w.transmissive,_e=w.transparent;m.setupLightsView(V),Y===!0&&he.setGlobalState(b.clippingPlanes,V),W&&Ie.viewport(y.copy(W)),F.length>0&&qr(F,D,V),oe.length>0&&qr(oe,D,V),_e.length>0&&qr(_e,D,V),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Uu(w,D,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Yn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?no:vi,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let oe=m.state.transmissionRenderTarget[W.id],_e=W.viewport||y;oe.setSize(_e.z,_e.w);let ye=b.getRenderTarget();b.setRenderTarget(oe),b.getClearColor(z),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),He?ae.render(V):b.clear();let Me=b.toneMapping;b.toneMapping=mi;let Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Y===!0&&he.setGlobalState(b.clippingPlanes,W),qr(w,V,W),Fe.updateMultisampleRenderTarget(oe),Fe.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Re=0,nt=D.length;Re<nt;Re++){let _t=D[Re],gt=_t.object,tn=_t.geometry,it=_t.material,Te=_t.group;if(it.side===pn&&gt.layers.test(W.layers)){let Vt=it.side;it.side=Jt,it.needsUpdate=!0,Ou(gt,V,W,tn,it,Te),it.side=Vt,it.needsUpdate=!0,Ne=!0}}Ne===!0&&(Fe.updateMultisampleRenderTarget(oe),Fe.updateRenderTargetMipmap(oe))}b.setRenderTarget(ye),b.setClearColor(z,j),Le!==void 0&&(W.viewport=Le),b.toneMapping=Me}function qr(w,D,V){let W=D.isScene===!0?D.overrideMaterial:null;for(let F=0,oe=w.length;F<oe;F++){let _e=w[F],ye=_e.object,Me=_e.geometry,Le=W===null?_e.material:W,Ne=_e.group;ye.layers.test(V.layers)&&Ou(ye,D,V,Me,Le,Ne)}}function Ou(w,D,V,W,F,oe){w.onBeforeRender(b,D,V,W,F,oe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(b,D,V,W,w,oe),F.transparent===!0&&F.side===pn&&F.forceSinglePass===!1?(F.side=Jt,F.needsUpdate=!0,b.renderBufferDirect(V,D,W,F,w,oe),F.side=gi,F.needsUpdate=!0,b.renderBufferDirect(V,D,W,F,w,oe),F.side=pn):b.renderBufferDirect(V,D,W,F,w,oe),w.onAfterRender(b,D,V,W,F,oe)}function jr(w,D,V){D.isScene!==!0&&(D=qe);let W=je.get(w),F=m.state.lights,oe=m.state.shadowsArray,_e=F.state.version,ye=ne.getParameters(w,F.state,oe,D,V),Me=ne.getProgramCacheKey(ye),Le=W.programs;W.environment=w.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(w.isMeshStandardMaterial?A:Mt).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",ce),Le=new Map,W.programs=Le);let Ne=Le.get(Me);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===_e)return Bu(w,ye),Ne}else ye.uniforms=ne.getUniforms(w),w.onBuild(V,ye,b),w.onBeforeCompile(ye,b),Ne=ne.acquireProgram(ye,Me),Le.set(Me,Ne),W.uniforms=ye.uniforms;let Re=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=he.uniform),Bu(w,ye),W.needsLights=qp(w),W.lightsStateVersion=_e,W.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function Fu(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Is.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Bu(w,D){let V=je.get(w);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Wp(w,D,V,W,F){D.isScene!==!0&&(D=qe),Fe.resetTextureUnits();let oe=D.fog,_e=W.isMeshStandardMaterial?D.environment:null,ye=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mi,Me=(W.isMeshStandardMaterial?A:Mt).get(W.envMap||_e),Le=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color,gt=mi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=b.toneMapping);let tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,it=tn!==void 0?tn.length:0,Te=je.get(W),Vt=m.state.lights;if(Y===!0&&(se===!0||w!==M)){let dn=w===M&&W.id===B;he.setState(W,w,dn)}let at=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Vt.state.version||Te.outputColorSpace!==ye||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Me||W.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==he.numPlanes||Te.numIntersection!==he.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ne||Te.morphTargets!==Re||Te.morphNormals!==nt||Te.morphColors!==_t||Te.toneMapping!==gt||Te.morphTargetsCount!==it)&&(at=!0):(at=!0,Te.__version=W.version);let Hn=Te.currentProgram;at===!0&&(Hn=jr(W,D,F));let Xr=!1,Li=!1,Ko=!1,Ct=Hn.getUniforms(),ri=Te.uniforms;if(Ie.useProgram(Hn.program)&&(Xr=!0,Li=!0,Ko=!0),W.id!==B&&(B=W.id,Li=!0),Xr||M!==w){Ct.setValue(I,"projectionMatrix",w.projectionMatrix),Ct.setValue(I,"viewMatrix",w.matrixWorldInverse);let dn=Ct.map.cameraPosition;dn!==void 0&&dn.setValue(I,de.setFromMatrixPosition(w.matrixWorld)),ft.logarithmicDepthBuffer&&Ct.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Li=!0,Ko=!0)}if(F.isSkinnedMesh){Ct.setOptional(I,F,"bindMatrix"),Ct.setOptional(I,F,"bindMatrixInverse");let dn=F.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ct.setValue(I,"boneTexture",dn.boneTexture,Fe))}F.isBatchedMesh&&(Ct.setOptional(I,F,"batchingTexture"),Ct.setValue(I,"batchingTexture",F._matricesTexture,Fe),Ct.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Ct.setValue(I,"batchingColorTexture",F._colorsTexture,Fe));let Yo=V.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&be.update(F,V,Hn),(Li||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,Ct.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ri.envMap.value=Me,ri.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&D.environment!==null&&(ri.envMapIntensity.value=D.environmentIntensity),Li&&(Ct.setValue(I,"toneMappingExposure",b.toneMappingExposure),Te.needsLights&&$p(ri,Ko),oe&&W.fog===!0&&ie.refreshFogUniforms(ri,oe),ie.refreshMaterialUniforms(ri,W,ee,q,m.state.transmissionRenderTarget[w.id]),Is.upload(I,Fu(Te),ri,Fe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Is.upload(I,Fu(Te),ri,Fe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(I,"center",F.center),Ct.setValue(I,"modelViewMatrix",F.modelViewMatrix),Ct.setValue(I,"normalMatrix",F.normalMatrix),Ct.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let dn=W.uniformsGroups;for(let Jo=0,jp=dn.length;Jo<jp;Jo++){let zu=dn[Jo];Je.update(zu,Hn),Je.bind(zu,Hn)}}return Hn}function $p(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function qp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,V){je.get(w.texture).__webglTexture=D,je.get(w.depthTexture).__webglTexture=V;let W=je.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let V=je.get(w);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,V=0){R=w,k=D,E=V;let W=!0,F=null,oe=!1,_e=!1;if(w){let Me=je.get(w);Me.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Me.__webglFramebuffer===void 0?Fe.setupRenderTarget(w):Me.__hasExternalTextures&&Fe.rebindTextures(w,je.get(w.texture).__webglTexture,je.get(w.depthTexture).__webglTexture);let Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(_e=!0);let Ne=je.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?F=Ne[D][V]:F=Ne[D],oe=!0):w.samples>0&&Fe.useMultisampledRTT(w)===!1?F=je.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[V]:F=Ne,y.copy(w.viewport),L.copy(w.scissor),H=w.scissorTest}else y.copy(re).multiplyScalar(ee).floor(),L.copy(ve).multiplyScalar(ee).floor(),H=Ae;if(Ie.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&Ie.drawBuffers(w,F),Ie.viewport(y),Ie.scissor(L),Ie.setScissorTest(H),oe){let Me=je.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me.__webglTexture,V)}else if(_e){let Me=je.get(w.texture),Le=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Le)}B=-1},this.readRenderTargetPixels=function(w,D,V,W,F,oe,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Ie.bindFramebuffer(I.FRAMEBUFFER,ye);try{let Me=w.texture,Le=Me.format,Ne=Me.type;if(!ft.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-W&&V>=0&&V<=w.height-F&&I.readPixels(D,V,W,F,fe.convert(Le),fe.convert(Ne),oe)}finally{let Me=R!==null?je.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,D,V,W,F,oe,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Ie.bindFramebuffer(I.FRAMEBUFFER,ye);try{let Me=w.texture,Le=Me.format,Ne=Me.type;if(!ft.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-W&&V>=0&&V<=w.height-F){let Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),I.readPixels(D,V,W,F,fe.convert(Le),fe.convert(Ne),0),I.flush();let nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await e_(I,nt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe)}finally{I.deleteBuffer(Re),I.deleteSync(nt)}return oe}}finally{let Me=R!==null?je.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(w,D=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-V),F=Math.floor(w.image.width*W),oe=Math.floor(w.image.height*W),_e=D!==null?D.x:0,ye=D!==null?D.y:0;Fe.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,_e,ye,F,oe),Ie.unbindTexture()},this.copyTextureToTexture=function(w,D,V=null,W=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],D=arguments[2],F=arguments[3]||0,V=null);let oe,_e,ye,Me,Le,Ne;V!==null?(oe=V.max.x-V.min.x,_e=V.max.y-V.min.y,ye=V.min.x,Me=V.min.y):(oe=w.image.width,_e=w.image.height,ye=0,Me=0),W!==null?(Le=W.x,Ne=W.y):(Le=0,Ne=0);let Re=fe.convert(D.format),nt=fe.convert(D.type);Fe.setTexture2D(D,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let _t=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tn=I.getParameter(I.UNPACK_SKIP_PIXELS),it=I.getParameter(I.UNPACK_SKIP_ROWS),Te=I.getParameter(I.UNPACK_SKIP_IMAGES),Vt=w.isCompressedTexture?w.mipmaps[F]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Me),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Le,Ne,oe,_e,Re,nt,Vt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Le,Ne,Vt.width,Vt.height,Re,Vt.data):I.texSubImage2D(I.TEXTURE_2D,F,Le,Ne,Re,nt,Vt),I.pixelStorei(I.UNPACK_ROW_LENGTH,_t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,it),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te),F===0&&D.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,D,V=null,W=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],D=arguments[3],F=arguments[4]||0);let oe,_e,ye,Me,Le,Ne,Re,nt,_t,gt=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(oe=V.max.x-V.min.x,_e=V.max.y-V.min.y,ye=V.max.z-V.min.z,Me=V.min.x,Le=V.min.y,Ne=V.min.z):(oe=gt.width,_e=gt.height,ye=gt.depth,Me=0,Le=0,Ne=0),W!==null?(Re=W.x,nt=W.y,_t=W.z):(Re=0,nt=0,_t=0);let tn=fe.convert(D.format),it=fe.convert(D.type),Te;if(D.isData3DTexture)Fe.setTexture3D(D,0),Te=I.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Fe.setTexture2DArray(D,0),Te=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let Vt=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Hn=I.getParameter(I.UNPACK_SKIP_PIXELS),Xr=I.getParameter(I.UNPACK_SKIP_ROWS),Li=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Te,F,Re,nt,_t,oe,_e,ye,tn,it,gt.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,F,Re,nt,_t,oe,_e,ye,tn,gt.data):I.texSubImage3D(Te,F,Re,nt,_t,oe,_e,ye,tn,it,gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Li),F===0&&D.generateMipmaps&&I.generateMipmap(Te),Ie.unbindTexture()},this.initRenderTarget=function(w){je.get(w).__webglFramebuffer===void 0&&Fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Fe.setTextureCube(w,0):w.isData3DTexture?Fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Fe.setTexture2DArray(w,0):Fe.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){k=0,E=0,R=null,Ie.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===io?"display-p3":"srgb"}};var Ha=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Va=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ol=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new N,Ga=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},br=class extends wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bs,fr=new N,Ss=new N,Ts=new N,Es=new pe,pr=new pe,Nd=new vt,ga=new N,mr=new N,va=new N,cd=new pe,Ic=new pe,ld=new pe,Wa=class extends Bt{constructor(e=new br){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new on;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ol(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Ga(i,3,0,!1)),bs.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=bs,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ts.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ya(ga.set(-.5,-.5,0),Ts,a,Ss,s,r),ya(mr.set(.5,-.5,0),Ts,a,Ss,s,r),ya(va.set(.5,.5,0),Ts,a,Ss,s,r),cd.set(0,0),Ic.set(1,0),ld.set(1,1);let o=e.ray.intersectTriangle(ga,mr,va,!1,fr);if(o===null&&(ya(mr.set(-.5,.5,0),Ts,a,Ss,s,r),Ic.set(0,1),o=e.ray.intersectTriangle(ga,va,mr,!1,fr),o===null))return;let c=e.ray.origin.distanceTo(fr);c<e.near||c>e.far||t.push({distance:c,point:fr.clone(),uv:Wi.getInterpolation(fr,ga,mr,va,cd,Ic,ld,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ya(n,e,t,i,s,r){Es.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(pr.x=r*Es.x-s*Es.y,pr.y=s*Es.x+r*Es.y):pr.copy(Es),n.copy(e),n.x+=pr.x,n.y+=pr.y,n.applyMatrix4(Nd)}var Fs=class extends an{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let u=i[s],f=i[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new pe:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new N,s=[],r=[],a=[],o=new N,c=new vt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends gn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*d+this.aX,l=f*d+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cl=class extends Sr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+d)+(c-o)/d;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var xa=new N,Lc=new Ll,kc=new Ll,Nc=new Ll,ll=class extends gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),l=xa);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Lc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,v,m),kc.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,v,m),Nc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),kc.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Nc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Lc.calc(c),kc.calc(c),Nc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ud(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function qy(n,e){let t=1-n;return t*t*e}function jy(n,e){return 2*(1-n)*n*e}function Xy(n,e){return n*n*e}function vr(n,e,t,i){return qy(n,e)+jy(n,t)+Xy(n,i)}function Ky(n,e){let t=1-n;return t*t*t*e}function Yy(n,e){let t=1-n;return 3*t*t*n*e}function Jy(n,e){return 3*(1-n)*n*n*e}function Zy(n,e){return n*n*n*e}function yr(n,e,t,i,s){return Ky(n,e)+Yy(n,t)+Jy(n,i)+Zy(n,s)}var $a=class extends gn{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ul=class extends gn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends gn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends gn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends gn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends gn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(vr(e,s.x,r.x,a.x),vr(e,s.y,r.y,a.y),vr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(ud(o,c.x,l.x,u.x,d.x),ud(o,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},hd=Object.freeze({__proto__:null,ArcCurve:cl,CatmullRomCurve3:ll,CubicBezierCurve:$a,CubicBezierCurve3:ul,EllipseCurve:Sr,LineCurve:qa,LineCurve3:hl,QuadraticBezierCurve:ja,QuadraticBezierCurve3:dl,SplineCurve:Xa}),fl=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new hd[s.type]().fromJSON(s))}return this}},pl=class extends fl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qa(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ja(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new $a(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Sr(e,t,i,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ml=class n extends on{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=kt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,d=new N,f=new pe,p=new N,g=new N,v=new N,m=0,_=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,_=e[S+1].y-e[S].y,p.x=_*1,p.y=-m,p.z=_*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,_=e[S+1].y-e[S].y,p.x=_*1,p.y=-m,p.z=_*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let S=0;S<=t;S++){let b=i+S*u*s,T=Math.sin(b),k=Math.cos(b);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*T,d.y=e[E].y,d.z=e[E].x*k,a.push(d.x,d.y,d.z),f.x=S/t,f.y=E/(e.length-1),o.push(f.x,f.y);let R=c[3*E+0]*T,B=c[3*E+1],M=c[3*E+0]*k;l.push(R,B,M)}}for(let S=0;S<t;S++)for(let b=0;b<e.length-1;b++){let T=b+S*e.length,k=T,E=T+e.length,R=T+e.length+1,B=T+1;r.push(k,E,B),r.push(R,B,E)}this.setIndex(r),this.setAttribute("position",new It(a,3)),this.setAttribute("uv",new It(o,2)),this.setAttribute("normal",new It(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ka=class n extends ml{constructor(e=1,t=1,i=4,s=8){let r=new pl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}};var _l=class n extends on{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],g=0,v=[],m=i/2,_=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2));function S(){let T=new N,k=new N,E=0,R=(t-e)/i;for(let B=0;B<=r;B++){let M=[],y=B/r,L=y*(t-e)+e;for(let H=0;H<=s;H++){let z=H/s,j=z*c+o,K=Math.sin(j),q=Math.cos(j);k.x=L*K,k.y=-y*i+m,k.z=L*q,d.push(k.x,k.y,k.z),T.set(K,R,q).normalize(),f.push(T.x,T.y,T.z),p.push(z,1-y),M.push(g++)}v.push(M)}for(let B=0;B<s;B++)for(let M=0;M<r;M++){let y=v[M][B],L=v[M+1][B],H=v[M+1][B+1],z=v[M][B+1];u.push(y,L,z),u.push(L,H,z),E+=6}l.addGroup(_,E,0),_+=E}function b(T){let k=g,E=new pe,R=new N,B=0,M=T===!0?e:t,y=T===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let L=g;for(let H=0;H<=s;H++){let j=H/s*c+o,K=Math.cos(j),q=Math.sin(j);R.x=M*q,R.y=m*y,R.z=M*K,d.push(R.x,R.y,R.z),f.push(0,y,0),E.x=K*.5+.5,E.y=q*.5*y+.5,p.push(E.x,E.y),g++}for(let H=0;H<s;H++){let z=k+H,j=L+H;T===!0?u.push(j,j+1,z):u.push(j+1,j,z),B+=3}l.addGroup(_,B,T===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ya=class n extends _l{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Un=class n extends on{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new N,f=new N,p=[],g=[],v=[],m=[];for(let _=0;_<=i;_++){let S=[],b=_/i,T=0;_===0&&a===0?T=.5/t:_===i&&c===Math.PI&&(T=-.5/t);for(let k=0;k<=t;k++){let E=k/t;d.x=-e*Math.cos(s+E*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(s+E*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(E+T,1-b),S.push(l++)}u.push(S)}for(let _=0;_<i;_++)for(let S=0;S<t;S++){let b=u[_][S+1],T=u[_][S],k=u[_+1][S],E=u[_+1][S+1];(_!==0||a>0)&&p.push(b,T,E),(_!==i-1||c<Math.PI)&&p.push(T,k,E)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var En=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function wa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Qy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Bs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gl=class extends Bs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vh:r=e,o=2*t-i;break;case yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case vh:a=e,c=2*i-t;break;case yh:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,_=-f*m+2*f*v-f*g,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,T=p*m-p*v;for(let k=0;k!==o;++k)r[k]=_*a[u+k]+S*a[l+k]+b*a[c+k]+T*a[d+k];return r}},vl=class extends Bs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*u;return r}},yl=class extends Bs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case Hc:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return Hc;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Qy(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Hc;var Xi=class extends An{constructor(e,t,i){super(e,t,i)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Sa;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends An{};xl.prototype.ValueTypeName="color";var wl=class extends An{};wl.prototype.ValueTypeName="number";var Ml=class extends Bs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)xi.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ja=class extends An{InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}};Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends An{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Sa;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends An{};bl.prototype.ValueTypeName="vector";var Sl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},ex=new Sl,Tl=class{constructor(e){this.manager=e!==void 0?e:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Za=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Qa=class extends Za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dc=new vt,dd=new N,fd=new N,El=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Al=class extends El{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Al}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var kl="\\[\\]\\.:\\/",tx=new RegExp("["+kl+"]","g"),Nl="[^"+kl+"]",nx="[^"+kl.replace("\\.","")+"]",ix=/((?:WC+[\/:])*)/.source.replace("WC",Nl),sx=/(WCOD+)?/.source.replace("WCOD",nx),rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),ox=new RegExp("^"+ix+sx+rx+ax+"$"),cx=["material","materials","bones","map"],Cl=class{constructor(e,t,i){let s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(e){let t=ox.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);cx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Cl;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"165"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="165");var Dl="kana_quiz_settings_v2",Ul="kana_quiz_stats_v2",yt={module:"kana",content:["kana"],modes:["rm_mc","jp_mc"],modesKana:["rm_mc","jp_mc"],modesWord:["rm_mc","jp_mc"],modesKanji:["kanji_read","read_kanji"],modesN2:["kanji_read","read_kanji"],sentenceMode:"progressive",sentenceProgress:0,n2Cats:["kanji_reading","orthography","context_vocab","paraphrase","grammar"],jlptLevel:"n2",jlptMode:"quiz",jlptProgress:{},jlptProgressOrders:{},kanaMode:"hira",sessionSize:20,kanaSets:["seion"],hideMeaning:!1,wrongFirst:!1,wordMatchBest:0,wordMatchMusicOn:!0,wordMatchSfxOn:!0,wordMatchVoiceOn:!0,wordMatchKana:["hira","kata"],wordMatchDifficulty:"easy",cultivateScripts:["hira","kata","kanji"]};function Dd(){let n=localStorage.getItem(Dl);if(!n)return structuredClone(yt);try{let e=JSON.parse(n);return{...structuredClone(yt),...e,module:e.module||"kana",content:Array.isArray(e.content)?e.content:yt.content,modes:Array.isArray(e.modes)?e.modes:yt.modes,modesKana:Array.isArray(e.modesKana)?e.modesKana:yt.modesKana,modesWord:Array.isArray(e.modesWord)?e.modesWord:yt.modesWord,modesKanji:Array.isArray(e.modesKanji)?e.modesKanji:yt.modesKanji,modesN2:Array.isArray(e.modesN2)?e.modesN2:yt.modesN2,sentenceMode:["progressive","study","quiz_jp_zh","quiz_zh_jp"].includes(e.sentenceMode)?e.sentenceMode:yt.sentenceMode,sentenceProgress:Number.isInteger(+e.sentenceProgress)&&+e.sentenceProgress>=0?+e.sentenceProgress:yt.sentenceProgress,n2Cats:Array.isArray(e.n2Cats)?e.n2Cats:yt.n2Cats,jlptLevel:["n1","n2","n3","n4","n5"].includes(e.jlptLevel)?e.jlptLevel:yt.jlptLevel,jlptMode:["quiz","study","progressive"].includes(e.jlptMode)?e.jlptMode:yt.jlptMode,jlptProgress:e.jlptProgress&&typeof e.jlptProgress=="object"&&!Array.isArray(e.jlptProgress)?e.jlptProgress:{},jlptProgressOrders:e.jlptProgressOrders&&typeof e.jlptProgressOrders=="object"&&!Array.isArray(e.jlptProgressOrders)?e.jlptProgressOrders:{},kanaSets:Array.isArray(e.kanaSets)?e.kanaSets:yt.kanaSets,kanaMode:e.kanaMode==="kata"?"kata":"hira",sessionSize:Number.isFinite(+e.sessionSize)?+e.sessionSize:yt.sessionSize,hideMeaning:e.hideMeaning===!0,wrongFirst:e.wrongFirst===!0,wordMatchBest:Number.isFinite(+e.wordMatchBest)?Math.max(0,+e.wordMatchBest):yt.wordMatchBest,wordMatchMusicOn:e.wordMatchMusicOn!==!1,wordMatchSfxOn:e.wordMatchSfxOn!==!1,wordMatchVoiceOn:e.wordMatchVoiceOn!==!1,wordMatchKana:Array.isArray(e.wordMatchKana)&&e.wordMatchKana.some(t=>t==="hira"||t==="kata")?[...new Set(e.wordMatchKana.filter(t=>t==="hira"||t==="kata"))]:yt.wordMatchKana,wordMatchDifficulty:["easy","medium","hard"].includes(e.wordMatchDifficulty)?e.wordMatchDifficulty:yt.wordMatchDifficulty,cultivateScripts:Array.isArray(e.cultivateScripts)&&e.cultivateScripts.some(t=>t==="hira"||t==="kata"||t==="kanji")?[...new Set(e.cultivateScripts.filter(t=>t==="hira"||t==="kata"||t==="kanji"))]:yt.cultivateScripts}}catch{return structuredClone(yt)}}function pt(n){localStorage.setItem(Dl,JSON.stringify(n))}function Ud(){return localStorage.setItem(Dl,JSON.stringify(yt)),structuredClone(yt)}function ro(){let n=new Date,e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function ao(){let n=localStorage.getItem(Ul),e={day:ro(),daily:{total:0,ok:0,ng:0,streak:0,rounds:0},session:{active:!1,size:20,done:0,ok:0,ng:0,round:0},wrong:{}};if(!n)return e;try{let t=JSON.parse(n);return t.day!==ro()&&(t.day=ro(),t.daily={total:0,ok:0,ng:0,streak:0,rounds:0}),t.daily||=e.daily,t.daily.rounds??=0,t.session||=e.session,t.session.round??=0,t.wrong||={},t}catch{return e}}function vn(n){localStorage.setItem(Ul,JSON.stringify(n))}function Od(n){n.day=ro(),n.daily={total:0,ok:0,ng:0,streak:0,rounds:0},vn(n)}function Fd(){localStorage.removeItem(Ul)}var oo=[],Ol=!1,Bd=!1,co=0,Tr=null,Er=null,Hs=null,zd=!1,bi=null;function ux(n){let e=new TextEncoder().encode(String(n||"")),t=2166136261;for(let i of e)t^=i,t=Math.imul(t,16777619)>>>0;return`${t.toString(16).padStart(8,"0")}_${e.length}`}async function Vd(){if(zd)return Hs;zd=!0;try{let n=await fetch("./assets/tts/ja/manifest.json?v=2026-06-19.13",{cache:"force-cache"});if(!n.ok)throw new Error(`manifest ${n.status}`);let e=await n.json(),t=Array.isArray(e?.items)?e.items:[];Hs=new Set(t)}catch{Hs=new Set}return Hs}Vd();function Gd(){if(bi){try{bi.pause(),bi.src="",bi.load?.()}catch{}bi=null}}function hx(n,e={}){let t=String(n||"").trim();if(!t||!Hs)return!1;let i=ux(t);if(!Hs.has(i))return!1;Gd();let s=++co;Vs(),"speechSynthesis"in window&&speechSynthesis.cancel();let r=new Audio(`./assets/tts/ja/${i}.m4a`);bi=r,r.preload="auto",r.volume=1;let a=!1,o=()=>s===co&&bi===r,c=(l,u="")=>{o()&&(Vs(),Zt(e,"onProgress",1),bi=null,Zt(e,"onEnd",{ok:l,reason:u,prebuilt:!0}))};return r.onplay=()=>{o()&&(a=!0,Zt(e,"onStart",{text:t,estimatedMs:Math.max(800,(r.duration||1)*1e3),prebuilt:!0}),Zt(e,"onProgress",.03))},r.ontimeupdate=()=>{!o()||!r.duration||Zt(e,"onProgress",Math.min(.98,r.currentTime/r.duration))},r.onended=()=>c(!0),r.onerror=()=>c(!1,"prebuilt-error"),Zt(e,"onQueued",{text:t,estimatedMs:0,prebuilt:!0}),r.play().catch(()=>{a||c(!1,"prebuilt-play-blocked")}),!0}var dx=["nanami","keita","online","natural","microsoft","edge","haruka","ichiro","ayumi"];function Hd(){oo=speechSynthesis.getVoices(),oo.length>0&&(Ol=!0)}"speechSynthesis"in window&&(Hd(),speechSynthesis.onvoiceschanged=Hd);function lo(){if(Vd(),!("speechSynthesis"in window)||Bd)return;speechSynthesis.cancel();let n=new SpeechSynthesisUtterance("");n.volume=0,speechSynthesis.speak(n),Bd=!0}function fx(){if(!("speechSynthesis"in window))return[];let n=speechSynthesis.getVoices();return n.length&&(oo=n,Ol=!0),Ol?oo:n}function px(n){if(!(n.lang||"").toLowerCase().startsWith("ja"))return-1;let t=`${n.name||""} ${n.voiceURI||""}`.toLowerCase(),i=10;return dx.forEach((s,r)=>{t.includes(s)&&(i+=100-r*6)}),n.localService===!1&&(i+=8),n.default&&(i+=2),i}function mx(){return fx().map(e=>({voice:e,score:px(e)})).filter(e=>e.score>=0).sort((e,t)=>t.score-e.score)[0]?.voice||null}function Vs(){Tr&&(clearInterval(Tr),Tr=null),Er&&(clearTimeout(Er),Er=null)}function Zt(n,e,t){try{n?.[e]?.(t)}catch{}}function _x(n,e=1){let t=String(n||"").replace(/\s+/g,"").length;return Math.max(900,Math.min(18e3,t*150/Math.max(.5,e)+700))}function Lt(n,e={}){if(hx(n,e))return!0;if(!("speechSynthesis"in window))return Zt(e,"onError",{reason:"unsupported"}),Zt(e,"onEnd",{ok:!1,reason:"unsupported"}),!1;let t=String(n||"").trim();if(!t)return Zt(e,"onEnd",{ok:!1,reason:"empty"}),!1;let i=++co;Vs(),Gd(),speechSynthesis.cancel();let s=new SpeechSynthesisUtterance(t),r=mx();r&&(s.voice=r),s.lang=r?.lang||"ja-JP",s.rate=r&&/online|natural|nanami|keita/i.test(`${r.name} ${r.voiceURI}`)?1:.9,s.volume=1;let a=0,o=0,c=!1,l=_x(t,s.rate),u=()=>i===co,d=p=>{if(!u()||c)return;let g=Math.max(o,Math.min(1,Number(p)||0));o=g,Zt(e,"onProgress",g)},f=(p,g="")=>{!u()||c||(Vs(),d(1),c=!0,Zt(e,"onEnd",{ok:p,reason:g}))};return s.onstart=()=>{u()&&(a=Date.now(),Zt(e,"onStart",{text:t,estimatedMs:l}),d(.03),Vs(),Tr=setInterval(()=>{if(!u()||c)return;let p=Date.now()-a;d(Math.min(.96,p/l))},120),Er=setTimeout(()=>f(!0,"timeout"),l+2500))},s.onboundary=p=>{!u()||c||typeof p.charIndex=="number"&&t.length>0&&d(Math.min(.98,p.charIndex/t.length))},s.onend=()=>f(!0),s.onerror=p=>f(!1,p?.error||"error"),Zt(e,"onQueued",{text:t,estimatedMs:l}),speechSynthesis.speak(s),setTimeout(()=>{!u()||c||a||(a=Date.now(),Zt(e,"onStart",{text:t,estimatedMs:l}),d(.03),Vs(),Tr=setInterval(()=>{!u()||c||d(Math.min(.96,(Date.now()-a)/l))},120),Er=setTimeout(()=>f(!0,"timeout"),l+2500))},120),!0}var Ar=null,Cr=null,Rr=null;function qt(){return Ar||(Ar=new(window.AudioContext||window.webkitAudioContext)),Ar.state==="suspended"&&Ar.resume(),Ar}function fo(){let n=qt();return Cr||(Cr=n.createGain(),Cr.gain.value=1,Cr.connect(n.destination)),Cr}function On(){let n=qt();return Rr||(Rr=n.createGain(),Rr.gain.value=1,Rr.connect(n.destination)),Rr}function po(){qt(),fo(),On()}var Wd=0;function qd(){let n=Date.now();return n-Wd<100?!1:(Wd=n,!0)}function jt(){if(qd())try{let n=qt(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(On()),e.frequency.value=880,e.type="sine",t.gain.setValueAtTime(.3,n.currentTime),t.gain.exponentialRampToValueAtTime(.01,n.currentTime+.1),e.start(n.currentTime),e.stop(n.currentTime+.1);let i=n.createOscillator(),s=n.createGain();i.connect(s),s.connect(On()),i.frequency.value=1046,i.type="sine",s.gain.setValueAtTime(.3,n.currentTime+.12),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.25),i.start(n.currentTime+.12),i.stop(n.currentTime+.25)}catch{}}function yn(){if(qd())try{let n=qt(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(On()),e.frequency.value=220,e.type="sine",t.gain.setValueAtTime(.3,n.currentTime),t.gain.exponentialRampToValueAtTime(.01,n.currentTime+.2),e.start(n.currentTime),e.stop(n.currentTime+.2)}catch{}}var gx=new URL("../assets/audio/word-match-bg.mp3",import.meta.url).href,Nt=null,Fl=null,ho=0;function uo(n,e,t,i,s,r="sine",a=.035){let o=n.createOscillator(),c=n.createGain();o.type=r,o.frequency.setValueAtTime(t,i),c.gain.setValueAtTime(1e-4,i),c.gain.exponentialRampToValueAtTime(a,i+.025),c.gain.exponentialRampToValueAtTime(1e-4,i+s),o.connect(c),c.connect(e),o.start(i),o.stop(i+s+.03)}function vx(n,e,t,i=.035,s=.018){let r=Math.max(1,Math.floor(n.sampleRate*i)),a=n.createBuffer(1,r,n.sampleRate),o=a.getChannelData(0),c=1234567;for(let f=0;f<r;f++)c=c*1664525+1013904223>>>0,o[f]=(c/4294967295*2-1)*(1-f/r);let l=n.createBufferSource();l.buffer=a;let u=n.createBiquadFilter();u.type="highpass",u.frequency.value=5e3;let d=n.createGain();d.gain.setValueAtTime(s,t),d.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(u),u.connect(d),d.connect(e),l.start(t),l.stop(t+i)}function $d(){try{let n=qt(),e=n.createGain(),t=n.createDelay(),i=n.createGain(),s=n.createGain();e.gain.value=.18,t.delayTime.value=.28,i.gain.value=.22,s.gain.value=.18,t.connect(i),i.connect(t),t.connect(s),e.connect(fo()),e.connect(t),s.connect(fo());let a=60/92,o=24,c=o*4*a,l=n.currentTime+.05,u=[261.63,311.13,392,466.16,523.25,622.25,783.99,932.33],d=[130.81,155.56,196,174.61],f=g=>{for(let v=0;v<o;v++){let m=g+v*4*a,_=v>=16?1:0;uo(n,e,d[v%d.length],m,a*1.7,"triangle",.028+_*.006),uo(n,e,d[(v+2)%d.length]*2,m+a*2,a*1.25,"sine",.018);for(let S=0;S<8;S++){let b=m+S*a/2,T=u[(S*2+v+(_?2:0))%u.length];uo(n,e,T,b,a*.22,S%2?"triangle":"sine",_?.026:.021),(S%2===1||_)&&vx(n,e,b+a*.08,.028,_?.014:.009)}v%4===3&&uo(n,e,u[6],m+a*3.25,a*.45,"square",.012)}};f(l);let p=setInterval(()=>{if(!Nt)return;let g=n.currentTime;for(;Nt.nextStart<g+8;)f(Nt.nextStart),Nt.nextStart+=c},1e3);Nt={master:e,interval:p,nextStart:l+c}}catch{}}async function yx(n){return Fl||(Fl=fetch(gx,{cache:"force-cache"}).then(e=>{if(!e.ok)throw new Error("music load failed");return e.arrayBuffer()}).then(e=>n.decodeAudioData(e))),Fl}function xx(n,e){if(Nt)return;let t=n.createBufferSource(),i=n.createGain();t.buffer=e,t.loop=!0,i.gain.setValueAtTime(1e-4,n.currentTime),i.gain.exponentialRampToValueAtTime(.16,n.currentTime+.28),t.connect(i),i.connect(fo()),t.start(n.currentTime+.02),Nt={type:"buffer",source:t,gain:i}}function Bl(){if(Nt)return;let n=++ho;try{let e=qt();yx(e).then(t=>{n===ho&&xx(e,t)}).catch(()=>{n===ho&&!Nt&&$d()})}catch{$d()}}function Yi(){ho++;try{if(!Nt)return;if(Nt.type==="buffer"){let t=qt(),{source:i,gain:s}=Nt;s.gain.cancelScheduledValues(t.currentTime),s.gain.setValueAtTime(Math.max(s.gain.value||1e-4,1e-4),t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.22),setTimeout(()=>{try{i.stop()}catch{}try{i.disconnect()}catch{}try{s.disconnect()}catch{}},260),Nt=null;return}clearInterval(Nt.interval);let n=qt(),e=Nt.master;e.gain.cancelScheduledValues(n.currentTime),e.gain.setValueAtTime(e.gain.value,n.currentTime),e.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.25),setTimeout(()=>{try{e.disconnect()}catch{}},320),Nt=null}catch{Nt=null}}function cn(){try{let n=qt(),e=n.currentTime,t=n.createGain();t.gain.setValueAtTime(.48,e),t.gain.exponentialRampToValueAtTime(.001,e+.62),t.connect(On()),[784,1046,1397,1760,2093].forEach((l,u)=>{let d=n.createOscillator(),f=n.createGain();d.type=u%2?"triangle":"square",d.frequency.setValueAtTime(l,e+u*.025),d.frequency.exponentialRampToValueAtTime(l*.42,e+.34+u*.02),f.gain.setValueAtTime(.13,e+u*.018),f.gain.exponentialRampToValueAtTime(.001,e+.34+u*.025),d.connect(f),f.connect(t),d.start(e+u*.018),d.stop(e+.4+u*.025)});let i=Math.floor(n.sampleRate*.3),s=n.createBuffer(1,i,n.sampleRate),r=s.getChannelData(0),a=24681357;for(let l=0;l<i;l++)a=a*1664525+1013904223>>>0,r[l]=(a/4294967295*2-1)*(1-l/i);let o=n.createBufferSource(),c=n.createBiquadFilter();c.type="highpass",c.frequency.value=1800,o.buffer=s,o.connect(c),c.connect(t),o.start(e),o.stop(e+.3),setTimeout(()=>{try{t.disconnect()}catch{}},720)}catch{}}function mo(){try{let n=qt(),e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="triangle",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(90,e+.16),i.gain.setValueAtTime(.16,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(i),i.connect(On()),t.start(e),t.stop(e+.2)}catch{}}function Xt(){try{let n=qt(),e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(520,e),t.frequency.setValueAtTime(620,e+.07),i.gain.setValueAtTime(.08,e),i.gain.exponentialRampToValueAtTime(.001,e+.14),t.connect(i),i.connect(On()),t.start(e),t.stop(e+.15)}catch{}}function jd(n){try{let e=qt(),t=e.currentTime,i=Number(n),s=!Number.isFinite(i),r=s?1046:i===1?880:i===2?740:622,a=e.createOscillator(),o=e.createGain();a.type=s?"square":"triangle",a.frequency.setValueAtTime(r,t),s&&a.frequency.exponentialRampToValueAtTime(r*1.5,t+.18),o.gain.setValueAtTime(s?.34:.25,t),o.gain.exponentialRampToValueAtTime(.001,t+(s?.34:.22)),a.connect(o),o.connect(On()),a.start(t),a.stop(t+(s?.36:.24))}catch{}}function Xd(n=10){try{let e=qt(),t=e.currentTime,i=Math.max(0,Math.min(10,Number(n)||0)),s=(11-i)/10,r=e.createGain();r.gain.setValueAtTime(.18+s*.22,t),r.gain.exponentialRampToValueAtTime(.001,t+.16+s*.05),r.connect(On());let a=e.createOscillator();if(a.type=i<=3?"square":"triangle",a.frequency.setValueAtTime(620+s*620,t),a.frequency.exponentialRampToValueAtTime(760+s*900,t+.06),a.connect(r),a.start(t),a.stop(t+.18),i<=5){let o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(180+s*120,t+.045),o.frequency.exponentialRampToValueAtTime(90+s*80,t+.18),o.connect(r),o.start(t+.045),o.stop(t+.2)}setTimeout(()=>{try{r.disconnect()}catch{}},260)}catch{}}function _o(n,e=.18,t="sine"){try{let i=qt(),s=On(),r=i.currentTime;n.forEach(([a,o,c,l=1])=>{let u=i.createOscillator(),d=i.createGain();u.type=t,u.frequency.setValueAtTime(a,r+o),d.gain.setValueAtTime(.001,r+o),d.gain.exponentialRampToValueAtTime(Math.max(.002,e*l),r+o+.015),d.gain.exponentialRampToValueAtTime(.001,r+o+c),u.connect(d),d.connect(s),u.start(r+o),u.stop(r+o+c+.02)})}catch{}}function zl(){_o([[392,0,.1],[523,.09,.12],[659,.18,.18]],.16,"triangle")}function go(){_o([[196,0,.16,1.2],[294,.07,.14],[392,.14,.2]],.22,"sawtooth")}function Hl(){_o([[740,0,.08],[988,.08,.1],[1318,.17,.22]],.18,"sine")}function Vl(){_o([[523,0,.1],[659,.08,.1],[784,.16,.12],[1046,.28,.35,1.3]],.22,"square")}var wx=null,vo=null,Gs=!1,Gl=new TextEncoder,Mx=new TextDecoder;function yo(){try{let n=new Uint32Array(1);return crypto.getRandomValues(n),n[0]>>>0}catch{let n=typeof performance<"u"&&performance.now?performance.now():0;return Date.now()>>>0^Math.trunc(n*1e3)>>>0}}function Wl(n){let e=Number(n)>>>0;return e?yo()%e:null}function Kd(n){let e=Number(n)>>>0,t=Array.from({length:e},(i,s)=>s);for(let i=e-1;i>0;i-=1){let s=yo()%(i+1);[t[i],t[s]]=[t[s],t[i]]}return t}function Si(){return wx?.exports||null}function $l(n){let e=Si();if(!e?.alloc||!vo)return null;let t=e.alloc(n.length);return new Uint8Array(vo.buffer,t,n.length).set(n),{ptr:t,len:n.length}}function Pr(n){let e=Si();if(!n||!e?.free_result||!vo)return"";let t=new Uint8Array(vo.buffer),i=t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24,s=t.slice(n+4,n+4+i);return e.free_result(n),Mx.decode(s)}function Yd(n){let e=Si();if(!Gs||!e?.normalize_romaji||!e?.dealloc)return null;let t=Gl.encode(String(n||"")),i=$l(t);if(!i)return null;try{let s=e.normalize_romaji(i.ptr,i.len);return Pr(s)}finally{e.dealloc(i.ptr,i.len)}}function Jd(n,e){let t=Si();if(!Gs||!t?.record_result)return null;let i=n?.daily||{},s=n?.session||{},r=t.record_result(i.total>>>0,i.ok>>>0,i.ng>>>0,i.streak>>>0,s.active?1:0,s.done>>>0,s.ok>>>0,s.ng>>>0,s.size>>>0,s.round>>>0,e?1:0),o=Pr(r).split(",").map(c=>Number.parseInt(c,10));return o.length!==10||o.some(c=>!Number.isFinite(c))?null:{daily:{total:o[0],ok:o[1],ng:o[2],streak:o[3]},session:{active:o[4]===1,done:o[5],ok:o[6],ng:o[7],round:o[9]},finished:o[8]===1}}function Zd(n,e){let t=Si();if(!Gs||!t?.pct_value)return null;let i=t.pct_value(n>>>0,e>>>0);return Pr(i)}function xo(n,e=yo()){let t=Si();if(!Gs||!t?.weighted_pick||!t?.dealloc)return null;let i=(n||[]).map(a=>Math.max(0,Number(a)||0)).join(","),s=Gl.encode(i),r=$l(s);if(!r)return null;try{let a=t.weighted_pick(r.ptr,r.len,e>>>0);return Number.isInteger(a)&&a>=0&&a<n.length?a:null}finally{t.dealloc(r.ptr,r.len)}}function ql(n,e,t=yo()){let i=Si();if(!Gs||!i?.ranked_indices||!i?.dealloc)return null;let s=(n||[]).map(o=>Number.isFinite(Number(o))?Math.trunc(Number(o)):0).join(","),r=Gl.encode(s),a=$l(r);if(!a)return null;try{let o=i.ranked_indices(a.ptr,a.len,e>>>0,t>>>0),c=Pr(o);if(!c)return[];let l=c.split(",").filter(Boolean).map(u=>Number.parseInt(u,10));return l.every(u=>Number.isInteger(u)&&u>=0&&u<n.length)?l:null}finally{i.dealloc(a.ptr,a.len)}}function Qd(n,e){let t=Si();if(!Gs||!t?.start_session)return null;let i=t.start_session(n>>>0,e>>>0),r=Pr(i).split(",").map(a=>Number.parseInt(a,10));return r.length!==6||r.some(a=>!Number.isFinite(a))?null:{active:r[0]===1,size:r[1],done:r[2],ok:r[3],ng:r[4],round:r[5]}}var bx={si:"shi",ti:"chi",tu:"tsu",hu:"fu",nn:"n"};function ef(n){let e=Yd(n);if(e!==null)return e;let t=n.trim().toLowerCase();return bx[t]||t}function Mo(n,e){return Zd(n,e)??(e?`${Math.round(n/e*100)}%`:"0%")}function wo(n){return`${n.type}:${n.rm}:${n.hira}`}function Sx(n,e){let t=e.kanaSets?.length?e.kanaSets:["seion"],i=new Set(t),s=n.kana.filter(l=>i.has(l.set||"seion")).map(l=>({...l,type:"kana"})),r=n.words.map(l=>({...l,type:"word"})),a=(n.kanji||[]).map(l=>({...l,type:"kanji"})),o=(n.n2||[]).map(l=>({...l,type:"n2"})),c=n.wordRelations||[];return{kana:s,word:r,kanji:a,n2:o,wordRelations:c,all:[...s,...r,...a,...o]}}function $s(n){if(!n.length)return;let e=xo(n.map(()=>1))??Wl(n.length);return n[e??0]}function Jn(n){let e=n.slice(),t=ql(e.map(()=>1),e.length);if(t?.length===e.length)return t.map(s=>e[s]);let i=Kd(e.length);return i.length===e.length?i.map(s=>e[s]):e}function Tx(n){let e=n.modes?.length?n.modes:["rm_mc","jp_mc"];return $s(e)}var tf={word_synonym:"synonym",word_near:"near",word_antonym:"antonym"};function jl(n,e){return n?typeof n=="string"?e.get(n)||null:{...n,type:"word"}:null}function Ws(n,e,t=i=>i.item.rm){let i=[],s=new Set;for(let a of n){let o=t(a);!o||s.has(o)||(i.push(a),s.add(o))}let r=ql(i.map(a=>a.score),e);return r?r.map(a=>i[a].item):i.slice().sort((a,o)=>o.score-a.score).slice(0,e).map(a=>a.item)}function Ex(n,e){let t=tf[n];if(!t)return null;let i=new Map(e.word.map(u=>[u.rm,u])),s=(e.wordRelations||[]).filter(u=>u.kind===t).map(u=>({raw:u,source:jl(u.source,i),target:jl(u.target,i),distractors:(u.distractors||[]).map(d=>jl(d,i)).filter(Boolean)})).filter(u=>u.source&&u.target);if(!s.length)return null;let r=$s(s),a=new Set([r.source.rm,r.target.rm]),o=[];for(let u of Jn(r.distractors)){if(o.length>=3)break;a.has(u.rm)||(o.push(u),a.add(u.rm))}let c=Jn(e.word.filter(u=>!a.has(u.rm)));for(let u of c){if(o.length>=3)break;o.push(u),a.add(u.rm)}let l=Jn([r.target,...o]);return{mode:n,relationKind:t,source:r.source,correct:r.target,choices:l,correctIndex:l.findIndex(u=>u.rm===r.target.rm)}}function nf(n,e,t){let i=Sx(n,e),s=e.content.includes("kana"),r=e.content.includes("word"),a=e.content.includes("kanji"),o=e.content.includes("n2"),c=e.wrongFirst===!0,l,u=[];s&&i.kana.length&&u.push(i.kana),r&&i.word.length&&u.push(i.word),a&&i.kanji.length&&u.push(i.kanji),o&&i.n2.length&&u.push(i.n2),u.length>0?l=u[xo(u.map(()=>1))??Wl(u.length)??0]:l=i.all;let d=[];for(let H of l){let z=t.wrong[wo(H)]||0;if(d.push(H),z>0){let j=c?Math.min(12,z*3):Math.min(4,z);for(let K=0;K<j;K++)d.push(H)}}if(!d.length)return null;let f=["kanji_read","read_kanji","kanji_mean"],p=["rm_mean","mean_rm"],g=Object.keys(tf),v=["rm_mc","jp_mc","rm_in","jp_in"],m=Tx(e);if(g.includes(m)){let H=Ex(m,i);if(H)return H;m="rm_mean"}let _=i.kana.length>0&&s,S=i.word.length>0&&r,b=i.kanji.length>0&&a,T=i.n2.length>0&&o,k=b||T;f.includes(m)&&!k&&(m=S?$s(p):"jp_mc"),p.includes(m)&&!S&&!k&&(m="jp_mc"),m==="mean_rm"&&!S&&k&&(m=$s(f)),v.includes(m)&&!_&&!S&&k&&(m=$s(f));let E=d;if(p.includes(m)&&(E=d.filter(H=>H.type==="word"),E.length||(E=i.word.length?i.word:d)),f.includes(m)&&(E=d.filter(H=>H.type==="kanji"||H.type==="n2"),!E.length)){let H=[...i.kanji,...i.n2];E=H.length?H:d}let R=E.map(H=>{let z=t.wrong[wo(H)]||0;return 1+(c&&z>0?Math.min(12,z*3):z>0?Math.min(4,z):0)}),B=xo(R),M=B===null?$s(E):E[B],y={mode:m,correct:M},L=[...i.kanji,...i.n2];if(m==="rm_mc"||m==="jp_mc"){let H=M.hira.length,z=M.type==="kana",j=z?i.kana.filter(Ae=>Ae.hira.length===H):i.word,K=z?i.kana:[...i.word,...i.kana],q=j.filter(Ae=>Ae.rm!==M.rm);q.length<3&&(q=K.filter(Ae=>Ae.rm!==M.rm));let ee=M.hira[0],O=Ae=>{let Ke=0,Y=Math.abs(Ae.hira.length-H);return Y===0?Ke+=10:Y===1&&(Ke+=5),Ae.hira[0]===ee&&(Ke+=8),Ke},Z=q.map(Ae=>({item:Ae,score:O(Ae)}));Z.sort((Ae,Ke)=>Ke.score-Ae.score);let re=Ws(Z,3,Ae=>Ae.item.rm),ve=Jn([M,...re]);y.choices=ve,y.correctIndex=ve.findIndex(Ae=>Ae.rm===M.rm)}if(m==="rm_mean"){let H=i.word.filter(O=>O.rm!==M.rm),z=(M.meaning||"").length,j=O=>{let Z=0,re=Math.abs((O.meaning||"").length-z);return re===0?Z+=10:re===1&&(Z+=5),Z},K=H.map(O=>({item:O,score:j(O)}));K.sort((O,Z)=>Z.score-O.score);let q=Ws(K,3,O=>O.item.rm),ee=Jn([M,...q]);y.choices=ee,y.correctIndex=ee.findIndex(O=>O.rm===M.rm)}if(m==="mean_rm"){let H=i.word.filter(Z=>Z.rm!==M.rm),z=M.hira.length,j=M.hira[0],K=Z=>{let re=0,ve=Math.abs(Z.hira.length-z);return ve===0?re+=10:ve===1&&(re+=5),Z.hira[0]===j&&(re+=8),re},q=H.map(Z=>({item:Z,score:K(Z)}));q.sort((Z,re)=>re.score-Z.score);let ee=Ws(q,3,Z=>Z.item.rm),O=Jn([M,...ee]);y.choices=O,y.correctIndex=O.findIndex(Z=>Z.rm===M.rm)}if(m==="kanji_read"){let H=L.filter(Z=>Z.rm!==M.rm&&Z.hira!==M.hira),z=M.hira.length,j=M.hira[0],K=Z=>{let re=0,ve=Math.abs(Z.hira.length-z);return ve===0?re+=10:ve===1&&(re+=5),Z.hira[0]===j&&(re+=8),re},q=H.map(Z=>({item:Z,score:K(Z)}));q.sort((Z,re)=>re.score-Z.score);let ee=Ws(q,3,Z=>Z.item.hira),O=Jn([M,...ee]);y.choices=O,y.correctIndex=O.findIndex(Z=>Z.rm===M.rm)}if(m==="read_kanji"){let H=L.filter(O=>O.rm!==M.rm&&O.kanji!==M.kanji),z=M.kanji.length,j=O=>{let Z=0,re=Math.abs(O.kanji.length-z);return re===0?Z+=10:re===1&&(Z+=5),Z},K=H.map(O=>({item:O,score:j(O)}));K.sort((O,Z)=>Z.score-O.score);let q=Ws(K,3,O=>O.item.kanji),ee=Jn([M,...q]);y.choices=ee,y.correctIndex=ee.findIndex(O=>O.rm===M.rm)}if(m==="kanji_mean"){let H=L.filter(O=>O.rm!==M.rm&&O.meaning!==M.meaning),z=(M.meaning||"").length,j=O=>{let Z=0,re=Math.abs((O.meaning||"").length-z);return re===0?Z+=10:re===1&&(Z+=5),Z},K=H.map(O=>({item:O,score:j(O)}));K.sort((O,Z)=>Z.score-O.score);let q=Ws(K,3,O=>O.item.meaning),ee=Jn([M,...q]);y.choices=ee,y.correctIndex=ee.findIndex(O=>O.rm===M.rm)}return y}function sf(n,e){n.session=Qd(n.daily.rounds||0,e)||{active:!0,size:e,done:0,ok:0,ng:0,round:(n.daily.rounds||0)+1}}function Ir(n,e,t){let i=Jd(n,t);if(i){if(n.daily.total=i.daily.total,n.daily.ok=i.daily.ok,n.daily.ng=i.daily.ng,n.daily.streak=i.daily.streak,n.session.active=i.session.active,n.session.done=i.session.done,n.session.ok=i.session.ok,n.session.ng=i.session.ng,n.session.round=i.session.round,!t){let s=wo(e.correct);n.wrong[s]=(n.wrong[s]||0)+1}return i.finished&&(n.daily.rounds=n.session.round),{finished:i.finished}}if(n.daily.total++,t?(n.daily.ok++,n.daily.streak++):(n.daily.ng++,n.daily.streak=0),n.session.active&&(n.session.done++,t?n.session.ok++:n.session.ng++),!t){let s=wo(e.correct);n.wrong[s]=(n.wrong[s]||0)+1}return n.session.active&&n.session.done>=n.session.size?(n.session.active=!1,n.daily.rounds=n.session.round,{finished:!0}):{finished:!1}}var bo={"zh-CN":{title:"\u65E5\u672C\u8BED\u540C\u5B66\u4F1A",subtitle:"\u9009\u62E9\u7EC3\u4E60\u6A21\u5757",mod_kana:"50\u97F3\u57FA\u7840",mod_kana_desc:"\u6E05\u97F3\u30FB\u6D4A\u97F3\u30FB\u62D7\u97F3",mod_word:"\u65E5\u5E38\u77ED\u8BCD",mod_word_desc:"\u8BCD\u6C47\u30FB\u540C\u8FD1\u53CD\u4E49\u8BCD",mod_games_icon:"\u6E38",mod_games:"\u6E38\u620F",mod_games_desc:"\u6D88\u9664\u30FB\u4FEE\u884C",games_title:"\u9009\u62E9\u6E38\u620F",mod_word_match_icon:"\u6D88",mod_word_match:"\u77ED\u8BCD\u6D88\u9664",mod_word_match_desc:"3\u5BF9\u6301\u7EED\u6D88\u9664",mod_cultivate_game:"\u65E5\u8BED\u4FEE\u884C",mod_cultivate_game_desc:"\u4FEE\u70BC\u30FB\u88C5\u5907\u30FB\u6311\u6218",mod_blade_game:"\u77ED\u8BCD\u5200\u738B",mod_blade_game_desc:"\u65CB\u8F6C\u98DE\u5200\u30FB\u78B0\u5BF9\u8BCD",blade_new:"\u91CD\u5F00",blade_score:"\u5F97\u5206",blade_knives:"\u98DE\u5200",blade_level:"\u7B49\u7EA7",blade_time:"\u65F6\u95F4",blade_help:"\u62D6\u52A8\u79FB\u52A8\u3002\u5934\u9876\u4F1A\u51FA\u77ED\u8BCD\uFF0C\u649E\u5230\u5BF9\u5E94\u7B54\u6848\u624D\u80FD\u51FB\u8D25\u76EE\u6807\u5E76\u589E\u52A0\u98DE\u5200\uFF1B\u649E\u9519\u4F1A\u6389\u5200\u3002",cultivate_title:"\u65E5\u8BED\u4FEE\u884C",cultivate_reset:"\u91CD\u7F6E",cultivate_train:"\u4FEE\u70BC\u4E00\u6B21",cultivate_challenge:"\u6311\u6218\u8BCD\u5996",cultivate_power:"\u6218\u529B",cultivate_jade:"\u7075\u7389",cultivate_stage:"\u5173\u5361",cultivate_equipment:"\u88C5\u5907",cultivate_current_equip:"\u5F53\u524D\u88C5\u5907",cultivate_new_drop:"\u65B0\u6389\u843D",cultivate_wear:"\u7A7F\u6234",cultivate_battle:"\u8BCD\u5996\u6311\u6218",cultivate_insight:"\u609F\u9053\u95EE\u7B54",cultivate_insight_empty:"\u4FEE\u70BC\u540E\u4F1A\u51FA\u73B0\u609F\u9053\u9898\u3002",cultivate_q_meaning:"\u9009\u62E9\u610F\u601D",cultivate_q_reading:"\u9009\u62E9\u8BFB\u97F3",cultivate_reset_confirm:"\u786E\u5B9A\u91CD\u7F6E\u65E5\u8BED\u4FEE\u884C\u8FDB\u5EA6\uFF1F",cultivate_enemy_name:"\u7B2C{0}\u5173 \u8BCD\u5996",cultivate_realm_0:"\u5047\u540D\u5C0F\u5996",cultivate_realm_1:"\u4E94\u5341\u97F3\u7AE5\u5B50",cultivate_realm_2:"N5\u4FEE\u58EB",cultivate_realm_3:"N4\u6CD5\u5E08",cultivate_realm_4:"N3\u771F\u4EBA",cultivate_realm_5:"N2\u5B97\u5E08",cultivate_realm_6:"N1\u5927\u80FD",cultivate_realm_7:"\u65E5\u672C\u8BED\u5927\u5E08",cultivate_q_normal:"\u666E\u901A",cultivate_q_rare:"\u7A00\u6709",cultivate_q_epic:"\u53F2\u8BD7",cultivate_q_legend:"\u4F20\u8BF4",cultivate_stat_vocab:"\u8BED\u6C47",cultivate_stat_listen:"\u542C\u529B",cultivate_stat_combo:"\u8FDE\u51FB",cultivate_stat_focus:"\u4E13\u6CE8",cultivate_kanji:"\u6C49\u5B57",cultivate_setup_title:"\u4FEE\u884C\u5185\u5BB9",cultivate_setup_sub:"\u8FDB\u5165\u524D\u9009\u62E9\u4F1A\u51FA\u73B0\u7684\u9898\u76EE\u7C7B\u578B\uFF0C\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u3002",cultivate_start:"\u5F00\u59CB\u4FEE\u884C",cultivate_select_one_script:"\u81F3\u5C11\u9009\u62E9\u5E73\u5047\u540D\u3001\u7247\u5047\u540D\u3001\u6C49\u5B57\u4E2D\u7684\u4E00\u4E2A\u3002",cultivate_log_start:"\u5F00\u59CB\u4FEE\u884C\u3002\u70B9\u51FB\u4FEE\u70BC\u83B7\u5F97\u7ECF\u9A8C\u3001\u7075\u7389\u548C\u88C5\u5907\u3002",cultivate_log_train:"\u4FEE\u70BC +{0}\u7ECF\u9A8C +{1}\u7075\u7389\uFF0C\u83B7\u5F97{3}\u88C5\u5907\u300C{2}\u300D\u3002",cultivate_log_equip:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\u3002",cultivate_log_replace:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\uFF0C\u66FF\u6362\u300C{1}\u300D\u3002",cultivate_log_realm_up:"\u5883\u754C\u7A81\u7834\uFF1A{0}\uFF01",cultivate_log_win:"\u6311\u6218\u80DC\u5229\uFF01+{0}\u7ECF\u9A8C +{1}\u7075\u7389\u3002",cultivate_log_lose:"\u6311\u6218\u5931\u8D25\uFF0C\u4F46\u83B7\u5F97 +{0}\u7ECF\u9A8C\u3002",cultivate_log_insight_ok:"\u609F\u9053\u6210\u529F\uFF01+{0}\u7ECF\u9A8C +{1}\u7075\u7389\uFF0C\u88C5\u5907\u6218\u529B+2\u3002",cultivate_log_insight_ng:"\u609F\u9053\u5931\u8D25\u3002\u6B63\u786E\u7B54\u6848\uFF1A{0}\u3002",cultivate_log_finish_current:"\u5148\u5B8C\u6210\u5F53\u524D\u609F\u9053/\u6311\u6218\uFF0C\u518D\u8FDB\u884C\u4E0B\u4E00\u6B65\u3002",cultivate_train_style_vocab:"\u8BED\u6C47\u4FEE\u70BC",cultivate_train_style_listen:"\u542C\u529B\u4FEE\u70BC",cultivate_train_style_focus:"\u4E13\u6CE8\u51A5\u60F3",cultivate_log_train_start:"\u5F00\u59CB{0}\uFF1A\u5B8C\u6210\u609F\u9053\u53EF\u83B7\u5F97\u57FA\u7840 +{1}\u7ECF\u9A8C +{2}\u7075\u7389\uFF0C\u5E76\u51B3\u5B9A\u88C5\u5907\u54C1\u8D28\u3002",cultivate_train_question:"\u4FEE\u70BC\u609F\u9053",cultivate_train_question_desc:"{0}\u8FDB\u884C\u4E2D",cultivate_battle_question:"\u8BCD\u5996\u653B\u9632",cultivate_battle_question_desc:"\u6211\u65B9{0} vs \u8BCD\u5996{1}",cultivate_log_train_success:"\u4FEE\u70BC\u6210\u529F\uFF01+{0}\u7ECF\u9A8C +{1}\u7075\u7389\uFF0C\u83B7\u5F97{3}\u88C5\u5907\u300C{2}\u300D\u3002",cultivate_log_train_fail:"\u4FEE\u70BC\u8D70\u706B\u3002\u6B63\u786E\u7B54\u6848\uFF1A{0}\u3002\u4ECD\u83B7\u5F97 +{1}\u7ECF\u9A8C +{2}\u7075\u7389\u3002",cultivate_log_battle_start:"\u8BCD\u5996\u73B0\u8EAB\uFF01\u6211\u65B9\u6218\u529B{0}\uFF0C\u8BCD\u5996\u6218\u529B{1}\u3002\u7B54\u5BF9\u624D\u80FD\u51FA\u62DB\u3002",cultivate_log_battle_win:"\u7834\u62DB\u6210\u529F\uFF01\u6700\u7EC8\u6218\u529B{0}/{1}\uFF0C\u6311\u6218\u80DC\u5229\uFF01+{2}\u7ECF\u9A8C +{3}\u7075\u7389\u3002",cultivate_log_battle_not_enough:"\u7B54\u5BF9\u4F46\u6218\u529B\u4E0D\u8DB3\uFF1A{0}/{1}\u3002\u83B7\u5F97 +{2}\u7ECF\u9A8C\uFF0C\u5148\u4FEE\u70BC\u6216\u6362\u88C5\u5907\u3002",cultivate_log_battle_lose:"\u88AB\u8BCD\u5996\u8BC6\u7834\u3002\u6B63\u786E\u7B54\u6848\uFF1A{0}\u3002\u83B7\u5F97 +{1}\u7ECF\u9A8C\u3002",mod_kanji:"\u6C49\u5B57\u77ED\u8BCD",mod_kanji_desc:"\u6C49\u5B57\u8BFB\u5199\u8BAD\u7EC3",mod_n2:"\u65E5\u672C\u8BED\u6D4B\u8BD5",mod_n2_desc:"N1-N5 \u6A21\u62DF\u7EC3\u4E60",mod_grammar:"\u8BED\u6CD5\u5B66\u4E60",mod_grammar_icon:"\u8BED\u6CD5",mod_grammar_desc:"\u52A8\u8BCD\u5206\u7EC4\u30FB\u53E5\u578B",mod_sentence:"800\u53E5\u5E38\u7528\u53E5",mod_sentence_icon:"800",mod_sentence_desc:"\u5E38\u7528\u53E5\u5F0F\u30FB\u53D1\u97F3\u5B66\u4E60",mod_songs:"\u65E5\u6587\u6B4C\u66F2",mod_songs_icon:"\u6B4C",mod_songs_desc:"\u672C\u5730\u6B4C\u8BCD\u30FB\u9010\u884C\u5B66\u4E60",songs_title:"\u65E5\u6587\u6B4C\u66F2",songs_intro_title:"\u672C\u5730\u6B4C\u8BCD\u5B66\u4E60",songs_intro:"\u9009\u62E9\u6B4C\u66F2\u540E\u7C98\u8D34\u4F60\u81EA\u5DF1\u7684\u65E5\u6587\u6B4C\u8BCD\uFF0C\u5185\u5BB9\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF1B\u6BCF\u884C\u4F1A\u81EA\u52A8\u6807\u8BFB\u97F3\u5E76\u53EF\u5355\u72EC\u64AD\u653E\u3002",song_close:"\u6536\u8D77",song_local_notice:"\u4E0D\u4F1A\u5185\u7F6E\u6216\u4E0A\u4F20\u5B8C\u6574\u6B4C\u8BCD\uFF1B\u4F60\u7C98\u8D34\u7684\u6B4C\u8BCD\u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u672C\u5730\u3002",song_paste_label:"\u7C98\u8D34\u65E5\u6587\u6B4C\u8BCD",song_paste_placeholder:"\u6BCF\u884C\u4E00\u53E5\u65E5\u6587\u6B4C\u8BCD\u3002\u53EF\u9009\uFF1A\u65E5\u6587\u6B4C\u8BCD<Tab>\u81EA\u5DF1\u7684\u89E3\u91CA\u3002",song_save:"\u4FDD\u5B58\u5E76\u751F\u6210\u8BFB\u97F3",song_clear:"\u6E05\u7A7A\u672C\u6B4C\u6B4C\u8BCD",song_clear_confirm:"\u786E\u5B9A\u6E05\u7A7A\u8FD9\u9996\u6B4C\u5728\u672C\u673A\u4FDD\u5B58\u7684\u6B4C\u8BCD\uFF1F",song_no_lyrics:"\u8FD8\u6CA1\u6709\u6B4C\u8BCD\u3002\u8BF7\u7C98\u8D34\u4F60\u81EA\u5DF1\u62E5\u6709\u7684\u65E5\u6587\u6B4C\u8BCD\u540E\u4FDD\u5B58\u3002",song_line_play:"\u64AD\u653E\u8FD9\u4E00\u884C",song_lines_count:"{0} \u884C",song_not_added:"\u672A\u6DFB\u52A0",song_reading_label:"\u8BFB\u97F3\uFF1A",song_translation_label:"\u7FFB\u8BD1/\u89E3\u91CA\uFF1A",grammar_practice_btn:"\u5F00\u59CB\u7EC3\u4E60",grammar_practice_title:"\u7EC3\u4E60",gp_submit:"\u63D0\u4EA4",gp_right:"\u6B63\u786E\uFF1A",gp_answer:"\u7B54\u6848\uFF1A",gp_wrong:"\u9519\u4E86\u3002",gp_again:"\u518D\u6765\u4E00\u6B21",gp_summary_sub:"\u5171 {0} \u9898 \xB7 \u6B63\u786E {1} \xB7 \u9519\u8BEF {2}",gp_summary_time:"\u7528\u65F6 ",jlpt_level_label:"\u7B49\u7EA7",jlpt_mode_label:"\u5B66\u4E60\u65B9\u5F0F",jlpt_mode_quiz:"\u6D4B\u8BD5\u6A21\u5F0F",jlpt_mode_study:"\u7B54\u6848\u5B66\u4E60",jlpt_mode_progressive:"\u5FAA\u5E8F\u5B66\u4E60",jlpt_study_answer:"\u5B66\u4E60\uFF1A",jlpt_study_done:"\u5DF2\u5B66\u4E60 {0} \u9898",jlpt_progress_badge:"\u5B66\u4E60\u8FDB\u5EA6 {0} / {1}",jlpt_reset_progress:"\u91CD\u7F6E\u5B66\u4E60\u8FDB\u5EA6",sentence_mode_label:"\u5B66\u4E60\u65B9\u5F0F",sentence_mode_progressive:"\u5FAA\u5E8F\u5B66\u4E60",sentence_mode_study:"\u968F\u673A\u5B66\u4E60",sentence_mode_quiz_jp_zh:"\u65E5\u6587\u2192\u9009\u4E2D\u6587",sentence_mode_quiz_zh_jp:"\u4E2D\u6587\u2192\u9009\u65E5\u6587",sentence_reset_progress:"\u91CD\u7F6E800\u53E5\u8FDB\u5EA6",sentence_progress_badge:"800\u53E5\u8FDB\u5EA6 {0} / {1}",sentence_pattern_label:"\u53E5\u5F0F\uFF1A",sentence_level_label:"\u7B49\u7EA7\uFF1A",sentence_translation_label:"\u8BD1\u6587\uFF1A",sentence_note_label:"\u8BF4\u660E\uFF1A",sentence_note_generic:"\u5B66\u4E60\u91CD\u70B9\uFF1A\u672C\u53E5\u7684\u5173\u952E\u8868\u8FBE\u662F\u300C{0}\u300D\u3002\u8BF7\u7ED3\u5408\u8BD1\u6587\u7406\u89E3\u6574\u53E5\uFF0C\u5E76\u6CE8\u610F\u5B83\u524D\u540E\u7684\u63A5\u7EED\u3002",sentence_why_not_label:"\u4E3A\u4EC0\u4E48\u4E0D\u7528\u5176\u4ED6\u5F62\u5F0F\uFF1A",sentence_quiz_jp_zh:"\u9009\u62E9\u8FD9\u53E5\u65E5\u6587\u7684\u4E2D\u6587\u610F\u601D",sentence_quiz_zh_jp:"\u9009\u62E9\u8FD9\u53E5\u4E2D\u6587\u5BF9\u5E94\u7684\u65E5\u6587",sentence_study_answer:"\u5B66\u4E60\uFF1A",sentence_study_done:"\u5DF2\u5B66\u4E60 {0} \u53E5",no_questions:"\u6CA1\u6709\u53EF\u7528\u9898\u76EE",n2_cat_label:"\u9898\u76EE\u7C7B\u578B\uFF08\u53EF\u591A\u9009\uFF09",n2_kanji_reading:"\u6C49\u5B57\u8BFB\u97F3",n2_orthography:"\u6C49\u5B57\u5199\u6CD5",n2_context_vocab:"\u8BED\u5883\u8BCD\u6C47",n2_paraphrase:"\u8FD1\u4E49\u66FF\u6362",n2_usage:"\u7528\u6CD5",n2_grammar:"\u8BED\u6CD5",n2_q_reading:"\u4E0B\u5212\u7EBF\u8BCD\u7684\u8BFB\u97F3\u662F\uFF1F",n2_q_ortho:"\u4E0B\u5212\u7EBF\u8BCD\u7684\u6C49\u5B57\u5199\u6CD5\u662F\uFF1F",n2_q_context:"\u9009\u62E9\u6700\u5408\u9002\u7684\u8BCD\u586B\u5165\u62EC\u53F7",n2_q_para:"\u4E0B\u5212\u7EBF\u8BCD\u7684\u8FD1\u4E49\u8868\u8FBE\u662F\uFF1F",n2_q_usage:"\u54EA\u4E2A\u53E5\u5B50\u7528\u6CD5\u6B63\u786E\uFF1F",n2_q_grammar:"\u9009\u62E9\u6700\u5408\u9002\u7684\u8BED\u6CD5\u586B\u5165\u7A7A\u683C",content_label:"\u5185\u5BB9\uFF08\u53EF\u591A\u9009\uFF09",content_kana:"50\u97F3",content_word:"\u65E5\u5E38\u77ED\u8BCD",content_kanji:"\u6C49\u5B57\u77ED\u8BCD",content_wrong:"\u9519\u9898\u4F18\u5148",group_kana_title:"50\u97F3\u8BBE\u7F6E",group_word_title:"\u65E5\u5E38\u77ED\u8BCD\u8BBE\u7F6E",group_kanji_title:"\u6C49\u5B57\u77ED\u8BCD\u8BBE\u7F6E",mode_type:"\u9898\u578B",set_label:"\u96C6\u5408",kana_mode_label:"\u5047\u540D\u6A21\u5F0F",session_size_label:"\u672C\u6B21\u9898\u6570",other_options:"\u5176\u4ED6\u9009\u9879",kana_hira:"\u5E73\u5047\u540D",kana_kata:"\u7247\u5047\u540D",mode_rm_mc:"\u7F57\u9A6C\u97F3\u2192\u9009\u5047\u540D",mode_jp_mc:"\u5047\u540D\u2192\u9009\u7F57\u9A6C\u97F3",mode_rm_in:"\u7F57\u9A6C\u97F3\u8F93\u5165",mode_jp_in:"\u5047\u540D\u8F93\u5165",mode_rm_mean:"\u8BFB\u97F3\u2192\u9009\u610F\u601D",mode_mean_rm:"\u610F\u601D\u2192\u9009\u8BFB\u97F3",word_relation_label:"\u8BCD\u4E49\u5173\u7CFB",mode_word_synonym:"\u540C\u4E49\u8BCD",mode_word_near:"\u8FD1\u4E49\u8BCD",mode_word_antonym:"\u53CD\u4E49\u8BCD",mode_kanji_read:"\u6C49\u5B57\u2192\u9009\u8BFB\u97F3",mode_read_kanji:"\u8BFB\u97F3\u2192\u9009\u6C49\u5B57",mode_kanji_mean:"\u6C49\u5B57\u2192\u9009\u610F\u601D",set_seion:"\u6E05\u97F3",set_dakuon:"\u6D4A\u97F3",set_handakuon:"\u534A\u6D4A\u97F3",set_yoon:"\u62D7\u97F3",start_btn:"\u5F00\u59CB\u7EC3\u4E60",word_match_new:"\u6362\u4E00\u5C40",word_match_invite:"\u9080\u8BF7\u597D\u53CB",word_match_guide_btn:"\u65B0\u624B\u6559\u5B66",word_match_setup_title:"\u5F00\u59CB\u524D\u8BBE\u7F6E",word_match_kana_label:"\u5DE6\u8FB9\u5047\u540D\u663E\u793A",word_match_hira:"\u5E73\u5047\u540D",word_match_kata:"\u7247\u5047\u540D",word_match_difficulty:"\u96BE\u5EA6",word_match_easy:"\u5BB9\u6613\uFF1A\u4ECE1\u5217\xD73\u884C\u5F00\u59CB",word_match_medium:"\u4E2D\u7B49\uFF1A\u4ECE2\u5217\xD73\u884C\u5F00\u59CB",word_match_hard:"\u96BE\uFF1A\u4ECE3\u5217\xD73\u884C\u5F00\u59CB",word_match_start_game:"\u5F00\u59CB\u6E38\u620F",word_match_select_one_kana:"\u81F3\u5C11\u9009\u62E9\u4E00\u79CD\u5047\u540D\u3002",word_match_guide_level:"\u65B0\u624B\u6559\u5B66",word_match_guide_title:"\u77ED\u8BCD\u6D88\u9664\u65B0\u624B\u6559\u5B66",word_match_guide_prompt_0:"\u5148\u70B9\u5DE6\u8FB9\u53D1\u5149\u7684\u5047\u540D\uFF1A\u306D\u3053\u3002",word_match_guide_prompt_1:"\u518D\u70B9\u53F3\u8FB9\u5BF9\u5E94\u7684\u6C49\u5B57\uFF1A\u732B\u3002",word_match_guide_prompt_2:"\u7B2C1\u5BF9\u4F1A\u5148\u88AB\u5708\u4F4F\uFF0C\u4E0D\u9A6C\u4E0A\u6D88\u9664\uFF1B\u7EE7\u7EED\u70B9\u4E0B\u4E00\u5BF9\u5047\u540D\u3002",word_match_guide_prompt_3:"\u9009\u4E2D\u540E\uFF0C\u518D\u70B9\u5BF9\u5E94\u6C49\u5B57\uFF1A\u6C34\u3002",word_match_guide_prompt_4:"\u73B0\u5728\u67092\u5BF9\u88AB\u5708\u4F4F\uFF0C\u989C\u8272\u53D8\u4E86\uFF0C\u8FDE\u9501\u500D\u7387\u63D0\u9AD8\u3002\u70B9\u53D1\u5149\u7684\u201C\u4E0B\u4E00\u6B65\u201D\u6F14\u793A\u65F6\u95F4\u53D8\u5C11\u3002",word_match_guide_prompt_5:"\u65F6\u95F4\u8D8A\u5C11\uFF0C\u5708\u4F4F\u7684\u8BCD\u5757\u4F1A\u52A8\u5F97\u8D8A\u5FEB\u3002\u7EE7\u7EED\u70B9\u201C\u4E0B\u4E00\u6B65\u201D\u770B\u7ED3\u7B97\u3002",word_match_guide_prompt_6:"\u8FDE\u9501\u7ED3\u675F\u540E\uFF0C\u6240\u6709\u5708\u4F4F\u7684\u8BCD\u5757\u4E00\u8D77\u7206\u70B8\u6D88\u9664\u5E76\u6389\u843D\u8865\u4F4D\u3002",word_match_guide_prompt_7:"\u73B0\u5728\u6F14\u793A\u9009\u9519\uFF1A\u5148\u70B9\u53D1\u5149\u7684 \u3084\u307E\u3002",word_match_guide_prompt_7b:"\u518D\u6545\u610F\u70B9\u9519\u8BEF\u7684 \u6C34\uFF0C\u770B\u6263\u5FC3\u53CD\u9988\u3002",word_match_guide_prompt_7c:"\u9009\u9519\u4F1A\u9707\u52A8\u5E76\u6263\u4E00\u9897\u5FC3\u3002\u70B9\u4E0B\u4E00\u6B65\u7EE7\u7EED\u9053\u5177\u3002",word_match_guide_prompt_8:"\u65B0\u624B\u6559\u5B66\uFF1A\u73B0\u5728\u70B9\u53D1\u5149\u7684\u70B8\u5F39\u3002",word_match_guide_prompt_8_pick:"\u70B8\u5F39\u5DF2\u9009\u4E2D\u3002\u73B0\u5728\u70B9\u53D1\u5149\u7684\u4E2D\u5FC3\u5757\uFF0C\u50CF\u6B63\u5F0F\u6E38\u620F\u4E00\u6837\u9009\u62E9\u7206\u70B8\u70B9\u3002",word_match_guide_prompt_8b:"\u70B8\u5F39\u4F1A\u7206\u70B8\u6D88\u9664\u4E00\u7247\u3002\u70B9\u4E0B\u4E00\u6B65\u6F14\u793A\u653E\u5927\u955C\u3002",word_match_guide_prompt_8c:"\u73B0\u5728\u70B9\u53D1\u5149\u7684\u653E\u5927\u955C\u3002",word_match_guide_prompt_8d:"\u653E\u5927\u955C\u4F1A\u628A3\u7EC4\u914D\u5BF9\u6807\u6210 \u2460\u2461\u2462\uFF1A\u540C\u6570\u5B57\u540C\u989C\u8272\u5C31\u662F\u4E00\u7EC4\uFF0C\u6301\u7EED5\u79D2\u3002\u70B9\u4E0B\u4E00\u6B65\u5F00\u59CB\u6B63\u5F0F\u6E38\u620F\u3002",word_match_guide_prompt_9:"\u73B0\u5728\u8FDB\u5165\u6B63\u5F0F\u6E38\u620F\u3002",word_match_guide_tool_prompt:"\u9053\u5177\u7A0D\u540E\u4F1A\u4EAE\u8D77\u3002",word_match_guide_next:"\u4E0B\u4E00\u6B65",word_match_guide_basic:"\u5DE6\u8FB9\u662F\u5047\u540D\u8BFB\u97F3\uFF0C\u53F3\u8FB9\u662F\u5BF9\u5E94\u6C49\u5B57/\u8BCD\u4E49\uFF1B\u70B9\u4E00\u5DE6\u4E00\u53F3\uFF0C\u914D\u5BF9\u6B63\u786E\u5C31\u5148\u5708\u4F4F\u3002",word_match_guide_chain:"\u7B2C1\u5BF9\u67098\u79D2\u7EE7\u7EED\u627E\u4E0B\u4E00\u5BF9\uFF1B\u6BCF\u591A\u4E00\u5BF9\u65F6\u95F4\u5C110.5\u79D2\u3002\u5708\u4F4F\u7684\u5757\u4F1A\u8D8A\u52A8\u8D8A\u5FEB\uFF0C\u8D85\u65F6\u540E\u4E00\u8D77\u6D88\u9664\u5E76\u9AD8\u500D\u7387\u7ED3\u7B97\u3002",word_match_guide_wrong:"\u9009\u9519\u4F1A\u4E2D\u65AD\u5F53\u524D\u8FDE\u9501\u5E76\u6263\u4E00\u9897\u5FC3\uFF1B5\u9897\u5FC3\u6263\u5B8C\u5C31 GAME OVER\u3002",word_match_guide_tools:"\u70B8\u5F39\u70B9\u4E2D\u5FC3\u70B83\xD73\uFF1B\u653E\u5927\u955C\u4F1A\u75283\u79CD\u989C\u8272\u63D0\u793A3\u7EC4\u914D\u5BF9\uFF0C\u6301\u7EED5\u79D2\u3002",word_match_guide_score:"\u5206\u6570\u6309\u8BCD\u957F\u3001\u5E38\u7528\u5EA6\u3001Combo\u3001\u500D\u7387\u548C\u8FDE\u9501\u6570\u91CF\u8BA1\u7B97\uFF1B5\u5206\u949F\u5185\u5C3D\u91CF\u51B2\u9AD8\u5206\u3002",word_match_guide_start:"\u77E5\u9053\u4E86\uFF0C\u5F00\u59CB",word_match_goal:"\u5173\u5361",word_match_level_label:"\u7B2C{0}\u5173 {1}\u5217\xD7{2}\u5C42",word_match_level_clear:"\u7B2C{0}\u5173\u901A\u8FC7\uFF01",word_match_level_clear_hint:"\u8FC7\u5173\uFF01\u51C6\u5907\u4E0B\u4E00\u5173\u2026\u2026",word_match_power:"\u500D\u7387",word_match_goal_pairs:"\u6D88\u9664{0}\u5BF9",word_match_goal_score:"\u5F97\u5206{0}",word_match_goal_combo:"\u8FDE\u51FB{0}",word_match_goal_done_bonus:"\u76EE\u6807\u5B8C\u6210 +15\u79D2 \u4E0B\u6B21\xD72",word_match_life_title:"\u5269\u4F59\u751F\u547D {0}/5",word_match_life_empty:"\u751F\u547D\u7528\u5B8C",word_match_bomb_hint:"\u{1F4A3} \u9009\u62E9\u4E2D\u5FC3\u5757\uFF0C\u70B8\u6389\u5468\u56F43\xD73",word_match_invite_title:"\u77ED\u8BCD\u6D88\u9664 - \u65E5\u6587\u914D\u5BF9\u6D88\u6D88\u4E50",word_match_invite_text:"\u6765\u6311\u6218\u8FD9\u4E2A\u65E5\u6587\u77ED\u8BCD\u914D\u5BF9\u6E38\u620F\uFF1A\u8FDE\u9501\u6D88\u9664\u3001\u9053\u5177\u3001\u5173\u5361\uFF0C\u4E00\u8FB9\u73A9\u4E00\u8FB9\u8BB0\u5355\u8BCD\uFF01",word_match_invite_copied:"\u6E38\u620F\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236",word_match_music_toggle:"\u80CC\u666F\u97F3\u4E50",word_match_sfx_toggle:"\u6E38\u620F\u97F3\u6548",word_match_voice_toggle:"\u8BFB\u97F3\u8BED\u97F3",word_match_music_short:"\u97F3\u4E50",word_match_sfx_short:"\u97F3\u6548",word_match_voice_short:"\u8BFB\u97F3",word_match_special_seconds:"+{0}\u79D2",word_match_special_hint:"\u63D0\u793A",word_match_special_mult:"\u4E0B\u6B21\xD72",word_match_start:"\u5F00\u59CB",word_match_game_over:"GAME OVER",word_match_chain_tip:"\u7B2C1\u5BF9\u5708\u4F4F\u540E\uFF0C8\u79D2\u5185\u7EE7\u7EED\u914D\u5BF9\u53EF\u8FDE\u9501\u52A0\u500D",word_match_score:"\u5F97\u5206",word_match_best:"\u6700\u9AD8",word_match_time:"\u65F6\u95F4",word_match_timeup:"\u65F6\u95F4\u5230\uFF01",word_match_plus:"+",word_match_combo:"\u8FDE\u51FB",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"\u8BFB\u97F3",word_match_word:"\u6C49\u5B57",word_match_hint:"\u5DE6\u8FB9\u8BFB\u97F3\uFF0C\u53F3\u8FB9\u6C49\u5B57\u3002\u914D\u5BF9\u6B63\u786E\u4F1A\u5148\u5708\u4F4F\uFF0C\u7EE7\u7EED\u8FDE\u9501\u6216\u8D85\u65F6\u540E\u4E00\u8D77\u6D88\u9664\u3002",word_match_complete:"\u5B8C\u6210\uFF01\u5168\u90E8\u6D88\u9664\u3002",hide_meaning:"\u9690\u85CF\u4E2D\u6587\u91CA\u4E49",reset_settings:"\u590D\u4F4D\u8BBE\u7F6E",reset_today:"\u91CD\u7F6E\u4ECA\u65E5",clear_all:"\u6E05\u7A7A\u5168\u90E8",refresh_app:"\u5237\u65B0/\u66F4\u65B0",refreshing_app:"\u6B63\u5728\u5237\u65B0...",today_label:"\u4ECA\u65E5\uFF1A",today_unit:" \u9898",correct_label:"\u6B63\u786E\uFF1A",wrong_label:"\u9519\u8BEF\uFF1A",done_label:"\u5B8C\u6210\uFF1A",rounds_unit:" \u8F6E",round_prefix:"\u7B2C",round_suffix:"\u8F6E",btn_back:"\u9000\u51FA",btn_next:"\u4E0B\u4E00\u9898",btn_speak:"\u64AD\u653E\u53D1\u97F3",btn_speaking:"\u64AD\u653E\u4E2D",btn_check:"\u63D0\u4EA4",btn_answer:"\u7B54\u9898",btn_show:"\u663E\u793A\u7B54\u6848",btn_finish:"\u7ED3\u675F",q_what_meaning:" \u662F\u4EC0\u4E48\u610F\u601D\uFF1F",q_how_read_meaning:"\u300D\u600E\u4E48\u8BFB\uFF1F",q_how_read_meaning_pre:"\u300C",q_how_read:" \u600E\u4E48\u8BFB\uFF1F",q_kanji_of:" \u7684\u6C49\u5B57\u662F\uFF1F",q_kana_of:" \u7684\u5047\u540D\u662F\uFF1F",q_writing_of:" \u7684\u5199\u6CD5\u662F\uFF1F",q_word_synonym:" \u7684\u540C\u4E49\u8BCD\u662F\uFF1F",q_word_near:" \u7684\u8FD1\u4E49\u8BCD\u662F\uFF1F",q_word_antonym:" \u7684\u53CD\u4E49\u8BCD\u662F\uFF1F",rel_synonym:"\u540C\u4E49",rel_near:"\u8FD1\u4E49",rel_antonym:"\u53CD\u4E49",input_kana:"\u8F93\u5165\u5047\u540D",input_romaji:"\u8F93\u5165\u7F57\u9A6C\u97F3",input_placeholder:"\u8F93\u5165\u7B54\u6848",result_correct:"\u6B63\u786E\uFF1A",result_wrong:"\u9519\u4E86\u3002\u6B63\u786E\uFF1A",result_wrong2:"\u4E0D\u5BF9\u3002\u6B63\u786E\uFF1A",result_answer:"\u7B54\u6848\uFF1A",n2_original:"\u539F\u6587\uFF1A",n2_translation:"\u8BD1\u6587\uFF1A",meaning_label:"\u91CA\u4E49\uFF1A",meaning_hidden:"\u91CA\u4E49\uFF1A***",alert_reset_settings:"\u5DF2\u590D\u4F4D\u8BBE\u7F6E",alert_reset_today:"\u5DF2\u91CD\u7F6E\u4ECA\u65E5\u7EDF\u8BA1",alert_clear_all:"\u5DF2\u6E05\u7A7A\u5168\u90E8\u6570\u636E",alert_reset_jlpt_progress:"\u5DF2\u91CD\u7F6E JLPT \u5B66\u4E60\u8FDB\u5EA6",alert_reset_sentence_progress:"\u5DF2\u91CD\u7F6E 800 \u53E5\u5B66\u4E60\u8FDB\u5EA6",confirm_clear_all:"\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u7EDF\u8BA1\u548C\u9519\u9898\u8BB0\u5F55\uFF1F",please_answer:"\u8BF7\u5148\u7B54\u9898\uFF01",please_input:"\u8BF7\u8F93\u5165\u7B54\u6848",ready:"\u51C6\u5907\u5F00\u59CB...",finish_done:"\u5B8C\u6210\uFF01\u7528\u65F6 ",finish_acc:"\uFF0C\u6B63\u786E\u7387 ",data_error:"\u52A0\u8F7D\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u786E\u4FDD\u901A\u8FC7 HTTP \u670D\u52A1\u5668\u8BBF\u95EE\uFF08\u5982 GitHub Pages \u6216\u672C\u5730\u670D\u52A1\u5668\uFF09"},"zh-TW":{title:"\u65E5\u672C\u8A9E\u540C\u5B78\u6703",subtitle:"\u9078\u64C7\u7DF4\u7FD2\u6A21\u7D44",mod_kana:"50\u97F3\u57FA\u790E",mod_kana_desc:"\u6E05\u97F3\u30FB\u6FC1\u97F3\u30FB\u62D7\u97F3",mod_word:"\u65E5\u5E38\u77ED\u8A5E",mod_word_desc:"\u8A5E\u5F59\u30FB\u540C\u8FD1\u53CD\u7FA9\u8A5E",mod_games_icon:"\u904A",mod_games:"\u904A\u6232",mod_games_desc:"\u6D88\u9664\u30FB\u4FEE\u884C",games_title:"\u9078\u64C7\u904A\u6232",mod_word_match_icon:"\u6D88",mod_word_match:"\u77ED\u8A5E\u6D88\u9664",mod_word_match_desc:"3\u5C0D\u6301\u7E8C\u6D88\u9664",mod_cultivate_game:"\u65E5\u8A9E\u4FEE\u884C",mod_cultivate_game_desc:"\u4FEE\u7149\u30FB\u88DD\u5099\u30FB\u6311\u6230",mod_blade_game:"\u77ED\u8A5E\u5200\u738B",mod_blade_game_desc:"\u65CB\u8F49\u98DB\u5200\u30FB\u78B0\u5C0D\u8A5E",blade_new:"\u91CD\u958B",blade_score:"\u5F97\u5206",blade_knives:"\u98DB\u5200",blade_level:"\u7B49\u7D1A",blade_time:"\u6642\u9593",blade_help:"\u62D6\u52D5\u79FB\u52D5\u3002\u982D\u9802\u6703\u51FA\u77ED\u8A5E\uFF0C\u649E\u5230\u5C0D\u61C9\u7B54\u6848\u624D\u80FD\u64CA\u6557\u76EE\u6A19\u4E26\u589E\u52A0\u98DB\u5200\uFF1B\u649E\u932F\u6703\u6389\u5200\u3002",cultivate_title:"\u65E5\u8A9E\u4FEE\u884C",cultivate_reset:"\u91CD\u7F6E",cultivate_train:"\u4FEE\u7149\u4E00\u6B21",cultivate_challenge:"\u6311\u6230\u8A5E\u5996",cultivate_power:"\u6230\u529B",cultivate_jade:"\u9748\u7389",cultivate_stage:"\u95DC\u5361",cultivate_equipment:"\u88DD\u5099",cultivate_current_equip:"\u76EE\u524D\u88DD\u5099",cultivate_new_drop:"\u65B0\u6389\u843D",cultivate_wear:"\u7A7F\u6234",cultivate_battle:"\u8A5E\u5996\u6311\u6230",cultivate_insight:"\u609F\u9053\u554F\u7B54",cultivate_insight_empty:"\u4FEE\u7149\u5F8C\u6703\u51FA\u73FE\u609F\u9053\u984C\u3002",cultivate_q_meaning:"\u9078\u64C7\u610F\u601D",cultivate_q_reading:"\u9078\u64C7\u8B80\u97F3",cultivate_reset_confirm:"\u78BA\u5B9A\u91CD\u7F6E\u65E5\u8A9E\u4FEE\u884C\u9032\u5EA6\uFF1F",cultivate_enemy_name:"\u7B2C{0}\u95DC \u8A5E\u5996",cultivate_realm_0:"\u5047\u540D\u5C0F\u5996",cultivate_realm_1:"\u4E94\u5341\u97F3\u7AE5\u5B50",cultivate_realm_2:"N5\u4FEE\u58EB",cultivate_realm_3:"N4\u6CD5\u5E2B",cultivate_realm_4:"N3\u771F\u4EBA",cultivate_realm_5:"N2\u5B97\u5E2B",cultivate_realm_6:"N1\u5927\u80FD",cultivate_realm_7:"\u65E5\u672C\u8A9E\u5927\u5E2B",cultivate_q_normal:"\u666E\u901A",cultivate_q_rare:"\u7A00\u6709",cultivate_q_epic:"\u53F2\u8A69",cultivate_q_legend:"\u50B3\u8AAA",cultivate_stat_vocab:"\u8A9E\u5F59",cultivate_stat_listen:"\u807D\u529B",cultivate_stat_combo:"\u9023\u64CA",cultivate_stat_focus:"\u5C08\u6CE8",cultivate_kanji:"\u6F22\u5B57",cultivate_setup_title:"\u4FEE\u884C\u5167\u5BB9",cultivate_setup_sub:"\u9032\u5165\u524D\u9078\u64C7\u6703\u51FA\u73FE\u7684\u984C\u76EE\u985E\u578B\uFF0C\u81F3\u5C11\u9078\u64C7\u4E00\u500B\u3002",cultivate_start:"\u958B\u59CB\u4FEE\u884C",cultivate_select_one_script:"\u81F3\u5C11\u9078\u64C7\u5E73\u5047\u540D\u3001\u7247\u5047\u540D\u3001\u6F22\u5B57\u4E2D\u7684\u4E00\u500B\u3002",cultivate_log_start:"\u958B\u59CB\u4FEE\u884C\u3002\u9EDE\u64CA\u4FEE\u7149\u7372\u5F97\u7D93\u9A57\u3001\u9748\u7389\u548C\u88DD\u5099\u3002",cultivate_log_train:"\u4FEE\u7149 +{0}\u7D93\u9A57 +{1}\u9748\u7389\uFF0C\u7372\u5F97{3}\u88DD\u5099\u300C{2}\u300D\u3002",cultivate_log_equip:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\u3002",cultivate_log_replace:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\uFF0C\u66FF\u63DB\u300C{1}\u300D\u3002",cultivate_log_realm_up:"\u5883\u754C\u7A81\u7834\uFF1A{0}\uFF01",cultivate_log_win:"\u6311\u6230\u52DD\u5229\uFF01+{0}\u7D93\u9A57 +{1}\u9748\u7389\u3002",cultivate_log_lose:"\u6311\u6230\u5931\u6557\uFF0C\u4F46\u7372\u5F97 +{0}\u7D93\u9A57\u3002",cultivate_log_insight_ok:"\u609F\u9053\u6210\u529F\uFF01+{0}\u7D93\u9A57 +{1}\u9748\u7389\uFF0C\u88DD\u5099\u6230\u529B+2\u3002",cultivate_log_insight_ng:"\u609F\u9053\u5931\u6557\u3002\u6B63\u78BA\u7B54\u6848\uFF1A{0}\u3002",cultivate_log_finish_current:"\u5148\u5B8C\u6210\u76EE\u524D\u609F\u9053/\u6311\u6230\uFF0C\u518D\u9032\u884C\u4E0B\u4E00\u6B65\u3002",cultivate_train_style_vocab:"\u8A9E\u5F59\u4FEE\u7149",cultivate_train_style_listen:"\u807D\u529B\u4FEE\u7149",cultivate_train_style_focus:"\u5C08\u6CE8\u51A5\u60F3",cultivate_log_train_start:"\u958B\u59CB{0}\uFF1A\u5B8C\u6210\u609F\u9053\u53EF\u7372\u5F97\u57FA\u790E +{1}\u7D93\u9A57 +{2}\u9748\u7389\uFF0C\u4E26\u6C7A\u5B9A\u88DD\u5099\u54C1\u8CEA\u3002",cultivate_train_question:"\u4FEE\u7149\u609F\u9053",cultivate_train_question_desc:"{0}\u9032\u884C\u4E2D",cultivate_battle_question:"\u8A5E\u5996\u653B\u9632",cultivate_battle_question_desc:"\u6211\u65B9{0} vs \u8A5E\u5996{1}",cultivate_log_train_success:"\u4FEE\u7149\u6210\u529F\uFF01+{0}\u7D93\u9A57 +{1}\u9748\u7389\uFF0C\u7372\u5F97{3}\u88DD\u5099\u300C{2}\u300D\u3002",cultivate_log_train_fail:"\u4FEE\u7149\u8D70\u706B\u3002\u6B63\u78BA\u7B54\u6848\uFF1A{0}\u3002\u4ECD\u7372\u5F97 +{1}\u7D93\u9A57 +{2}\u9748\u7389\u3002",cultivate_log_battle_start:"\u8A5E\u5996\u73FE\u8EAB\uFF01\u6211\u65B9\u6230\u529B{0}\uFF0C\u8A5E\u5996\u6230\u529B{1}\u3002\u7B54\u5C0D\u624D\u80FD\u51FA\u62DB\u3002",cultivate_log_battle_win:"\u7834\u62DB\u6210\u529F\uFF01\u6700\u7D42\u6230\u529B{0}/{1}\uFF0C\u6311\u6230\u52DD\u5229\uFF01+{2}\u7D93\u9A57 +{3}\u9748\u7389\u3002",cultivate_log_battle_not_enough:"\u7B54\u5C0D\u4F46\u6230\u529B\u4E0D\u8DB3\uFF1A{0}/{1}\u3002\u7372\u5F97 +{2}\u7D93\u9A57\uFF0C\u5148\u4FEE\u7149\u6216\u63DB\u88DD\u5099\u3002",cultivate_log_battle_lose:"\u88AB\u8A5E\u5996\u8B58\u7834\u3002\u6B63\u78BA\u7B54\u6848\uFF1A{0}\u3002\u7372\u5F97 +{1}\u7D93\u9A57\u3002",mod_kanji:"\u6F22\u5B57\u77ED\u8A5E",mod_kanji_desc:"\u6F22\u5B57\u8B80\u5BEB\u8A13\u7DF4",mod_n2:"\u65E5\u672C\u8A9E\u6E2C\u8A66",mod_n2_desc:"N1-N5 \u6A21\u64EC\u7DF4\u7FD2",mod_grammar:"\u8A9E\u6CD5\u5B78\u7FD2",mod_grammar_icon:"\u8A9E\u6CD5",mod_grammar_desc:"\u52D5\u8A5E\u5206\u7D44\u30FB\u53E5\u578B",mod_sentence:"800\u53E5\u5E38\u7528\u53E5",mod_sentence_icon:"800",mod_sentence_desc:"\u5E38\u7528\u53E5\u578B\u30FB\u767C\u97F3\u5B78\u7FD2",mod_songs:"\u65E5\u6587\u6B4C\u66F2",mod_songs_icon:"\u6B4C",mod_songs_desc:"\u672C\u5730\u6B4C\u8A5E\u30FB\u9010\u884C\u5B78\u7FD2",songs_title:"\u65E5\u6587\u6B4C\u66F2",songs_intro_title:"\u672C\u5730\u6B4C\u8A5E\u5B78\u7FD2",songs_intro:"\u9078\u64C7\u6B4C\u66F2\u5F8C\u8CBC\u4E0A\u4F60\u81EA\u5DF1\u7684\u65E5\u6587\u6B4C\u8A5E\uFF0C\u5167\u5BB9\u53EA\u4FDD\u5B58\u5728\u672C\u6A5F\uFF1B\u6BCF\u884C\u6703\u81EA\u52D5\u6A19\u8B80\u97F3\u4E26\u53EF\u55AE\u7368\u64AD\u653E\u3002",song_close:"\u6536\u8D77",song_local_notice:"\u4E0D\u6703\u5167\u7F6E\u6216\u4E0A\u50B3\u5B8C\u6574\u6B4C\u8A5E\uFF1B\u4F60\u8CBC\u4E0A\u7684\u6B4C\u8A5E\u50C5\u4FDD\u5B58\u5728\u76EE\u524D\u700F\u89BD\u5668\u672C\u5730\u3002",song_paste_label:"\u8CBC\u4E0A\u65E5\u6587\u6B4C\u8A5E",song_paste_placeholder:"\u6BCF\u884C\u4E00\u53E5\u65E5\u6587\u6B4C\u8A5E\u3002\u53EF\u9078\uFF1A\u65E5\u6587\u6B4C\u8A5E<Tab>\u81EA\u5DF1\u7684\u89E3\u91CB\u3002",song_save:"\u4FDD\u5B58\u4E26\u751F\u6210\u8B80\u97F3",song_clear:"\u6E05\u7A7A\u672C\u6B4C\u6B4C\u8A5E",song_clear_confirm:"\u78BA\u5B9A\u6E05\u7A7A\u9019\u9996\u6B4C\u5728\u672C\u6A5F\u4FDD\u5B58\u7684\u6B4C\u8A5E\uFF1F",song_no_lyrics:"\u9084\u6C92\u6709\u6B4C\u8A5E\u3002\u8ACB\u8CBC\u4E0A\u4F60\u81EA\u5DF1\u64C1\u6709\u7684\u65E5\u6587\u6B4C\u8A5E\u5F8C\u4FDD\u5B58\u3002",song_line_play:"\u64AD\u653E\u9019\u4E00\u884C",song_lines_count:"{0} \u884C",song_not_added:"\u672A\u6DFB\u52A0",song_reading_label:"\u8B80\u97F3\uFF1A",song_translation_label:"\u7FFB\u8B6F/\u89E3\u91CB\uFF1A",grammar_practice_btn:"\u958B\u59CB\u7DF4\u7FD2",grammar_practice_title:"\u7DF4\u7FD2",gp_submit:"\u63D0\u4EA4",gp_right:"\u6B63\u78BA\uFF1A",gp_answer:"\u7B54\u6848\uFF1A",gp_wrong:"\u932F\u4E86\u3002",gp_again:"\u518D\u4F86\u4E00\u6B21",gp_summary_sub:"\u5171 {0} \u984C \xB7 \u6B63\u78BA {1} \xB7 \u932F\u8AA4 {2}",gp_summary_time:"\u7528\u6642 ",jlpt_level_label:"\u7B49\u7D1A",jlpt_mode_label:"\u5B78\u7FD2\u65B9\u5F0F",jlpt_mode_quiz:"\u6E2C\u8A66\u6A21\u5F0F",jlpt_mode_study:"\u7B54\u6848\u5B78\u7FD2",jlpt_mode_progressive:"\u5FAA\u5E8F\u5B78\u7FD2",jlpt_study_answer:"\u5B78\u7FD2\uFF1A",jlpt_study_done:"\u5DF2\u5B78\u7FD2 {0} \u984C",jlpt_progress_badge:"\u5B78\u7FD2\u9032\u5EA6 {0} / {1}",jlpt_reset_progress:"\u91CD\u7F6E\u5B78\u7FD2\u9032\u5EA6",sentence_mode_label:"\u5B78\u7FD2\u65B9\u5F0F",sentence_mode_progressive:"\u5FAA\u5E8F\u5B78\u7FD2",sentence_mode_study:"\u96A8\u6A5F\u5B78\u7FD2",sentence_mode_quiz_jp_zh:"\u65E5\u6587\u2192\u9078\u4E2D\u6587",sentence_mode_quiz_zh_jp:"\u4E2D\u6587\u2192\u9078\u65E5\u6587",sentence_reset_progress:"\u91CD\u7F6E800\u53E5\u9032\u5EA6",sentence_progress_badge:"800\u53E5\u9032\u5EA6 {0} / {1}",sentence_pattern_label:"\u53E5\u578B\uFF1A",sentence_level_label:"\u7B49\u7D1A\uFF1A",sentence_translation_label:"\u8B6F\u6587\uFF1A",sentence_note_label:"\u8AAA\u660E\uFF1A",sentence_note_generic:"\u5B78\u7FD2\u91CD\u9EDE\uFF1A\u672C\u53E5\u7684\u95DC\u9375\u8868\u9054\u662F\u300C{0}\u300D\u3002\u8ACB\u7D50\u5408\u8B6F\u6587\u7406\u89E3\u6574\u53E5\uFF0C\u4E26\u6CE8\u610F\u5B83\u524D\u5F8C\u7684\u63A5\u7E8C\u3002",sentence_why_not_label:"\u70BA\u4EC0\u9EBC\u4E0D\u7528\u5176\u4ED6\u5F62\u5F0F\uFF1A",sentence_quiz_jp_zh:"\u9078\u64C7\u9019\u53E5\u65E5\u6587\u7684\u4E2D\u6587\u610F\u601D",sentence_quiz_zh_jp:"\u9078\u64C7\u9019\u53E5\u4E2D\u6587\u5C0D\u61C9\u7684\u65E5\u6587",sentence_study_answer:"\u5B78\u7FD2\uFF1A",sentence_study_done:"\u5DF2\u5B78\u7FD2 {0} \u53E5",no_questions:"\u6C92\u6709\u53EF\u7528\u984C\u76EE",n2_cat_label:"\u984C\u76EE\u985E\u578B\uFF08\u53EF\u591A\u9078\uFF09",n2_kanji_reading:"\u6F22\u5B57\u8B80\u97F3",n2_orthography:"\u6F22\u5B57\u5BEB\u6CD5",n2_context_vocab:"\u8A9E\u5883\u8A5E\u5F59",n2_paraphrase:"\u8FD1\u7FA9\u66FF\u63DB",n2_usage:"\u7528\u6CD5",n2_grammar:"\u6587\u6CD5",n2_q_reading:"\u756B\u7DDA\u8A5E\u7684\u8B80\u97F3\u662F\uFF1F",n2_q_ortho:"\u756B\u7DDA\u8A5E\u7684\u6F22\u5B57\u5BEB\u6CD5\u662F\uFF1F",n2_q_context:"\u9078\u64C7\u6700\u5408\u9069\u7684\u8A5E\u586B\u5165\u62EC\u865F",n2_q_para:"\u756B\u7DDA\u8A5E\u7684\u8FD1\u7FA9\u8868\u9054\u662F\uFF1F",n2_q_usage:"\u54EA\u500B\u53E5\u5B50\u7528\u6CD5\u6B63\u78BA\uFF1F",n2_q_grammar:"\u9078\u64C7\u6700\u5408\u9069\u7684\u8A9E\u6CD5\u586B\u5165\u7A7A\u683C",content_label:"\u5167\u5BB9\uFF08\u53EF\u591A\u9078\uFF09",content_kana:"50\u97F3",content_word:"\u65E5\u5E38\u77ED\u8A5E",content_kanji:"\u6F22\u5B57\u77ED\u8A5E",content_wrong:"\u932F\u984C\u512A\u5148",group_kana_title:"50\u97F3\u8A2D\u7F6E",group_word_title:"\u65E5\u5E38\u77ED\u8A5E\u8A2D\u7F6E",group_kanji_title:"\u6F22\u5B57\u77ED\u8A5E\u8A2D\u7F6E",mode_type:"\u984C\u578B",set_label:"\u96C6\u5408",kana_mode_label:"\u5047\u540D\u6A21\u5F0F",session_size_label:"\u672C\u6B21\u984C\u6578",other_options:"\u5176\u4ED6\u9078\u9805",kana_hira:"\u5E73\u5047\u540D",kana_kata:"\u7247\u5047\u540D",mode_rm_mc:"\u7F85\u99AC\u97F3\u2192\u9078\u5047\u540D",mode_jp_mc:"\u5047\u540D\u2192\u9078\u7F85\u99AC\u97F3",mode_rm_in:"\u7F85\u99AC\u97F3\u8F38\u5165",mode_jp_in:"\u5047\u540D\u8F38\u5165",mode_rm_mean:"\u8B80\u97F3\u2192\u9078\u610F\u601D",mode_mean_rm:"\u610F\u601D\u2192\u9078\u8B80\u97F3",word_relation_label:"\u8A5E\u7FA9\u95DC\u4FC2",mode_word_synonym:"\u540C\u7FA9\u8A5E",mode_word_near:"\u8FD1\u7FA9\u8A5E",mode_word_antonym:"\u53CD\u7FA9\u8A5E",mode_kanji_read:"\u6F22\u5B57\u2192\u9078\u8B80\u97F3",mode_read_kanji:"\u8B80\u97F3\u2192\u9078\u6F22\u5B57",mode_kanji_mean:"\u6F22\u5B57\u2192\u9078\u610F\u601D",set_seion:"\u6E05\u97F3",set_dakuon:"\u6FC1\u97F3",set_handakuon:"\u534A\u6FC1\u97F3",set_yoon:"\u62D7\u97F3",start_btn:"\u958B\u59CB\u7DF4\u7FD2",word_match_new:"\u63DB\u4E00\u5C40",word_match_invite:"\u9080\u8ACB\u597D\u53CB",word_match_guide_btn:"\u65B0\u624B\u6559\u5B78",word_match_setup_title:"\u958B\u59CB\u524D\u8A2D\u5B9A",word_match_kana_label:"\u5DE6\u908A\u5047\u540D\u986F\u793A",word_match_hira:"\u5E73\u5047\u540D",word_match_kata:"\u7247\u5047\u540D",word_match_difficulty:"\u96E3\u5EA6",word_match_easy:"\u5BB9\u6613\uFF1A\u5F9E1\u5217\xD73\u884C\u958B\u59CB",word_match_medium:"\u4E2D\u7B49\uFF1A\u5F9E2\u5217\xD73\u884C\u958B\u59CB",word_match_hard:"\u96E3\uFF1A\u5F9E3\u5217\xD73\u884C\u958B\u59CB",word_match_start_game:"\u958B\u59CB\u904A\u6232",word_match_select_one_kana:"\u81F3\u5C11\u9078\u64C7\u4E00\u7A2E\u5047\u540D\u3002",word_match_guide_level:"\u65B0\u624B\u6559\u5B78",word_match_guide_title:"\u77ED\u8A5E\u6D88\u9664\u65B0\u624B\u6559\u5B78",word_match_guide_prompt_0:"\u5148\u9EDE\u5DE6\u908A\u767C\u5149\u7684\u5047\u540D\uFF1A\u306D\u3053\u3002",word_match_guide_prompt_1:"\u518D\u9EDE\u53F3\u908A\u5C0D\u61C9\u7684\u6F22\u5B57\uFF1A\u732B\u3002",word_match_guide_prompt_2:"\u7B2C1\u5C0D\u6703\u5148\u88AB\u5708\u4F4F\uFF0C\u4E0D\u99AC\u4E0A\u6D88\u9664\uFF1B\u7E7C\u7E8C\u9EDE\u4E0B\u4E00\u5C0D\u5047\u540D\u3002",word_match_guide_prompt_3:"\u9078\u4E2D\u5F8C\uFF0C\u518D\u9EDE\u5C0D\u61C9\u6F22\u5B57\uFF1A\u6C34\u3002",word_match_guide_prompt_4:"\u73FE\u5728\u67092\u5C0D\u88AB\u5708\u4F4F\uFF0C\u984F\u8272\u8B8A\u4E86\uFF0C\u9023\u9396\u500D\u7387\u63D0\u9AD8\u3002\u9EDE\u767C\u5149\u7684\u300C\u4E0B\u4E00\u6B65\u300D\u6F14\u793A\u6642\u9593\u8B8A\u5C11\u3002",word_match_guide_prompt_5:"\u6642\u9593\u8D8A\u5C11\uFF0C\u5708\u4F4F\u7684\u8A5E\u584A\u6703\u52D5\u5F97\u8D8A\u5FEB\u3002\u7E7C\u7E8C\u9EDE\u300C\u4E0B\u4E00\u6B65\u300D\u770B\u7D50\u7B97\u3002",word_match_guide_prompt_6:"\u9023\u9396\u7D50\u675F\u5F8C\uFF0C\u6240\u6709\u5708\u4F4F\u7684\u8A5E\u584A\u4E00\u8D77\u7206\u70B8\u6D88\u9664\u4E26\u6389\u843D\u88DC\u4F4D\u3002",word_match_guide_prompt_7:"\u73FE\u5728\u6F14\u793A\u9078\u932F\uFF1A\u5148\u9EDE\u767C\u5149\u7684 \u3084\u307E\u3002",word_match_guide_prompt_7b:"\u518D\u6545\u610F\u9EDE\u932F\u8AA4\u7684 \u6C34\uFF0C\u770B\u6263\u5FC3\u53CD\u994B\u3002",word_match_guide_prompt_7c:"\u9078\u932F\u6703\u9707\u52D5\u4E26\u6263\u4E00\u9846\u5FC3\u3002\u9EDE\u4E0B\u4E00\u6B65\u7E7C\u7E8C\u9053\u5177\u3002",word_match_guide_prompt_8:"\u65B0\u624B\u6559\u5B78\uFF1A\u73FE\u5728\u9EDE\u767C\u5149\u7684\u70B8\u5F48\u3002",word_match_guide_prompt_8_pick:"\u70B8\u5F48\u5DF2\u9078\u4E2D\u3002\u73FE\u5728\u9EDE\u767C\u5149\u7684\u4E2D\u5FC3\u584A\uFF0C\u50CF\u6B63\u5F0F\u904A\u6232\u4E00\u6A23\u9078\u64C7\u7206\u70B8\u9EDE\u3002",word_match_guide_prompt_8b:"\u70B8\u5F48\u6703\u7206\u70B8\u6D88\u9664\u4E00\u7247\u3002\u9EDE\u4E0B\u4E00\u6B65\u6F14\u793A\u653E\u5927\u93E1\u3002",word_match_guide_prompt_8c:"\u73FE\u5728\u9EDE\u767C\u5149\u7684\u653E\u5927\u93E1\u3002",word_match_guide_prompt_8d:"\u653E\u5927\u93E1\u6703\u628A3\u7D44\u914D\u5C0D\u6A19\u6210 \u2460\u2461\u2462\uFF1A\u540C\u6578\u5B57\u540C\u984F\u8272\u5C31\u662F\u4E00\u7D44\uFF0C\u6301\u7E8C5\u79D2\u3002\u9EDE\u4E0B\u4E00\u6B65\u958B\u59CB\u6B63\u5F0F\u904A\u6232\u3002",word_match_guide_prompt_9:"\u73FE\u5728\u9032\u5165\u6B63\u5F0F\u904A\u6232\u3002",word_match_guide_tool_prompt:"\u9053\u5177\u7A0D\u5F8C\u6703\u4EAE\u8D77\u3002",word_match_guide_next:"\u4E0B\u4E00\u6B65",word_match_guide_basic:"\u5DE6\u908A\u662F\u5047\u540D\u8B80\u97F3\uFF0C\u53F3\u908A\u662F\u5C0D\u61C9\u6F22\u5B57/\u8A5E\u7FA9\uFF1B\u9EDE\u4E00\u5DE6\u4E00\u53F3\uFF0C\u914D\u5C0D\u6B63\u78BA\u5C31\u5148\u5708\u4F4F\u3002",word_match_guide_chain:"\u7B2C1\u5C0D\u67098\u79D2\u7E7C\u7E8C\u627E\u4E0B\u4E00\u5C0D\uFF1B\u6BCF\u591A\u4E00\u5C0D\u6642\u9593\u5C110.5\u79D2\u3002\u5708\u4F4F\u7684\u584A\u6703\u8D8A\u52D5\u8D8A\u5FEB\uFF0C\u8D85\u6642\u5F8C\u4E00\u8D77\u6D88\u9664\u4E26\u9AD8\u500D\u7387\u7D50\u7B97\u3002",word_match_guide_wrong:"\u9078\u932F\u6703\u4E2D\u65B7\u76EE\u524D\u9023\u9396\u4E26\u6263\u4E00\u9846\u5FC3\uFF1B5\u9846\u5FC3\u6263\u5B8C\u5C31 GAME OVER\u3002",word_match_guide_tools:"\u70B8\u5F48\u9EDE\u4E2D\u5FC3\u70B83\xD73\uFF1B\u653E\u5927\u93E1\u6703\u75283\u7A2E\u984F\u8272\u63D0\u793A3\u7D44\u914D\u5C0D\uFF0C\u6301\u7E8C5\u79D2\u3002",word_match_guide_score:"\u5206\u6578\u6309\u8A5E\u9577\u3001\u5E38\u7528\u5EA6\u3001Combo\u3001\u500D\u7387\u548C\u9023\u9396\u6578\u91CF\u8A08\u7B97\uFF1B5\u5206\u9418\u5167\u76E1\u91CF\u885D\u9AD8\u5206\u3002",word_match_guide_start:"\u77E5\u9053\u4E86\uFF0C\u958B\u59CB",word_match_goal:"\u95DC\u5361",word_match_level_label:"\u7B2C{0}\u95DC {1}\u5217\xD7{2}\u5C64",word_match_level_clear:"\u7B2C{0}\u95DC\u901A\u904E\uFF01",word_match_level_clear_hint:"\u904E\u95DC\uFF01\u6E96\u5099\u4E0B\u4E00\u95DC\u2026\u2026",word_match_power:"\u500D\u7387",word_match_goal_pairs:"\u6D88\u9664{0}\u5C0D",word_match_goal_score:"\u5F97\u5206{0}",word_match_goal_combo:"\u9023\u64CA{0}",word_match_goal_done_bonus:"\u76EE\u6A19\u5B8C\u6210 +15\u79D2 \u4E0B\u6B21\xD72",word_match_life_title:"\u5269\u9918\u751F\u547D {0}/5",word_match_life_empty:"\u751F\u547D\u7528\u5B8C",word_match_bomb_hint:"\u{1F4A3} \u9078\u64C7\u4E2D\u5FC3\u584A\uFF0C\u70B8\u6389\u5468\u570D3\xD73",word_match_invite_title:"\u77ED\u8A5E\u6D88\u9664 - \u65E5\u6587\u914D\u5C0D\u6D88\u6D88\u6A02",word_match_invite_text:"\u4F86\u6311\u6230\u9019\u500B\u65E5\u6587\u77ED\u8A5E\u914D\u5C0D\u904A\u6232\uFF1A\u9023\u9396\u6D88\u9664\u3001\u9053\u5177\u3001\u95DC\u5361\uFF0C\u4E00\u908A\u73A9\u4E00\u908A\u8A18\u55AE\u5B57\uFF01",word_match_invite_copied:"\u904A\u6232\u9080\u8ACB\u9023\u7D50\u5DF2\u8907\u88FD",word_match_music_toggle:"\u80CC\u666F\u97F3\u6A02",word_match_sfx_toggle:"\u904A\u6232\u97F3\u6548",word_match_voice_toggle:"\u8B80\u97F3\u8A9E\u97F3",word_match_music_short:"\u97F3\u6A02",word_match_sfx_short:"\u97F3\u6548",word_match_voice_short:"\u8B80\u97F3",word_match_special_seconds:"+{0}\u79D2",word_match_special_hint:"\u63D0\u793A",word_match_special_mult:"\u4E0B\u6B21\xD72",word_match_start:"\u958B\u59CB",word_match_game_over:"GAME OVER",word_match_chain_tip:"\u7B2C1\u5C0D\u5708\u4F4F\u5F8C\uFF0C8\u79D2\u5167\u7E7C\u7E8C\u914D\u5C0D\u53EF\u9023\u9396\u52A0\u500D",word_match_score:"\u5F97\u5206",word_match_best:"\u6700\u9AD8",word_match_time:"\u6642\u9593",word_match_timeup:"\u6642\u9593\u5230\uFF01",word_match_plus:"+",word_match_combo:"\u9023\u64CA",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"\u8B80\u97F3",word_match_word:"\u6F22\u5B57",word_match_hint:"\u5DE6\u908A\u8B80\u97F3\uFF0C\u53F3\u908A\u6F22\u5B57\u3002\u914D\u5C0D\u6B63\u78BA\u6703\u5148\u5708\u4F4F\uFF0C\u7E7C\u7E8C\u9023\u9396\u6216\u8D85\u6642\u5F8C\u4E00\u8D77\u6D88\u9664\u3002",word_match_complete:"\u5B8C\u6210\uFF01\u5168\u90E8\u6D88\u9664\u3002",hide_meaning:"\u96B1\u85CF\u4E2D\u6587\u91CB\u7FA9",reset_settings:"\u5FA9\u4F4D\u8A2D\u7F6E",reset_today:"\u91CD\u7F6E\u4ECA\u65E5",clear_all:"\u6E05\u7A7A\u5168\u90E8",refresh_app:"\u5237\u65B0/\u66F4\u65B0",refreshing_app:"\u6B63\u5728\u5237\u65B0...",today_label:"\u4ECA\u65E5\uFF1A",today_unit:" \u984C",correct_label:"\u6B63\u78BA\uFF1A",wrong_label:"\u932F\u8AA4\uFF1A",done_label:"\u5B8C\u6210\uFF1A",rounds_unit:" \u8F2A",round_prefix:"\u7B2C",round_suffix:"\u8F2A",btn_back:"\u9000\u51FA",btn_next:"\u4E0B\u4E00\u984C",btn_speak:"\u64AD\u653E\u767C\u97F3",btn_speaking:"\u64AD\u653E\u4E2D",btn_check:"\u63D0\u4EA4",btn_answer:"\u7B54\u984C",btn_show:"\u986F\u793A\u7B54\u6848",btn_finish:"\u7D50\u675F",q_what_meaning:" \u662F\u4EC0\u9EBC\u610F\u601D\uFF1F",q_how_read_meaning:"\u300D\u600E\u9EBC\u8B80\uFF1F",q_how_read_meaning_pre:"\u300C",q_how_read:" \u600E\u9EBC\u8B80\uFF1F",q_kanji_of:" \u7684\u6F22\u5B57\u662F\uFF1F",q_kana_of:" \u7684\u5047\u540D\u662F\uFF1F",q_writing_of:" \u7684\u5BEB\u6CD5\u662F\uFF1F",q_word_synonym:" \u7684\u540C\u7FA9\u8A5E\u662F\uFF1F",q_word_near:" \u7684\u8FD1\u7FA9\u8A5E\u662F\uFF1F",q_word_antonym:" \u7684\u53CD\u7FA9\u8A5E\u662F\uFF1F",rel_synonym:"\u540C\u7FA9",rel_near:"\u8FD1\u7FA9",rel_antonym:"\u53CD\u7FA9",input_kana:"\u8F38\u5165\u5047\u540D",input_romaji:"\u8F38\u5165\u7F85\u99AC\u97F3",input_placeholder:"\u8F38\u5165\u7B54\u6848",result_correct:"\u6B63\u78BA\uFF1A",result_wrong:"\u932F\u4E86\u3002\u6B63\u78BA\uFF1A",result_wrong2:"\u4E0D\u5C0D\u3002\u6B63\u78BA\uFF1A",n2_original:"\u539F\u6587\uFF1A",n2_translation:"\u8B6F\u6587\uFF1A",result_answer:"\u7B54\u6848\uFF1A",meaning_label:"\u91CB\u7FA9\uFF1A",meaning_hidden:"\u91CB\u7FA9\uFF1A***",alert_reset_settings:"\u5DF2\u5FA9\u4F4D\u8A2D\u7F6E",alert_reset_today:"\u5DF2\u91CD\u7F6E\u4ECA\u65E5\u7D71\u8A08",alert_clear_all:"\u5DF2\u6E05\u7A7A\u5168\u90E8\u6578\u64DA",alert_reset_jlpt_progress:"\u5DF2\u91CD\u7F6E JLPT \u5B78\u7FD2\u9032\u5EA6",alert_reset_sentence_progress:"\u5DF2\u91CD\u7F6E 800 \u53E5\u5B78\u7FD2\u9032\u5EA6",confirm_clear_all:"\u78BA\u5B9A\u6E05\u7A7A\u5168\u90E8\u7D71\u8A08\u548C\u932F\u984C\u8A18\u9304\uFF1F",please_answer:"\u8ACB\u5148\u7B54\u984C\uFF01",please_input:"\u8ACB\u8F38\u5165\u7B54\u6848",ready:"\u6E96\u5099\u958B\u59CB...",finish_done:"\u5B8C\u6210\uFF01\u7528\u6642 ",finish_acc:"\uFF0C\u6B63\u78BA\u7387 ",data_error:"\u8F09\u5165\u8CC7\u6599\u5931\u6557\uFF0C\u8ACB\u78BA\u4FDD\u900F\u904E HTTP \u4F3A\u670D\u5668\u5B58\u53D6\uFF08\u5982 GitHub Pages \u6216\u672C\u5730\u4F3A\u670D\u5668\uFF09"},ja:{title:"\u65E5\u672C\u8A9E\u30AF\u30E9\u30B9\u30E1\u30FC\u30C8",subtitle:"\u7DF4\u7FD2\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u9078\u629E",mod_kana:"50\u97F3\u57FA\u790E",mod_kana_desc:"\u6E05\u97F3\u30FB\u6FC1\u97F3\u30FB\u62D7\u97F3",mod_word:"\u65E5\u5E38\u5358\u8A9E",mod_word_desc:"\u8A9E\u5F59\u30FB\u985E\u7FA9\u8A9E\u30FB\u53CD\u5BFE\u8A9E",mod_games_icon:"\u904A",mod_games:"\u30B2\u30FC\u30E0",mod_games_desc:"\u6D88\u3057\u30FB\u4FEE\u884C",games_title:"\u30B2\u30FC\u30E0\u3092\u9078\u3076",mod_word_match_icon:"\u6D88",mod_word_match:"\u5358\u8A9E\u6D88\u3057",mod_word_match_desc:"3\u7D44\u3067\u7D9A\u304F\u6D88\u3057\u30B2\u30FC\u30E0",mod_cultivate_game:"\u65E5\u672C\u8A9E\u4FEE\u884C",mod_cultivate_game_desc:"\u4FEE\u884C\u30FB\u88C5\u5099\u30FB\u6311\u6226",mod_blade_game:"\u77ED\u8A9E\u5200\u738B",mod_blade_game_desc:"\u56DE\u8EE2\u30CA\u30A4\u30D5\u30FB\u6B63\u89E3\u306B\u5F53\u305F\u308B",blade_new:"\u30EA\u30B9\u30BF\u30FC\u30C8",blade_score:"\u30B9\u30B3\u30A2",blade_knives:"\u30CA\u30A4\u30D5",blade_level:"\u30EC\u30D9\u30EB",blade_time:"\u6642\u9593",blade_help:"\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u3002\u982D\u4E0A\u306E\u77ED\u8A9E\u306B\u5BFE\u5FDC\u3059\u308B\u7B54\u3048\u306B\u5F53\u305F\u308B\u3068\u6483\u7834\u3057\u3066\u30CA\u30A4\u30D5\u5897\u52A0\u3002\u9593\u9055\u3046\u3068\u30CA\u30A4\u30D5\u3092\u5931\u3044\u307E\u3059\u3002",cultivate_title:"\u65E5\u672C\u8A9E\u4FEE\u884C",cultivate_reset:"\u30EA\u30BB\u30C3\u30C8",cultivate_train:"\u4FEE\u884C\u3059\u308B",cultivate_challenge:"\u8A9E\u5F59\u5996\u602A\u306B\u6311\u6226",cultivate_power:"\u6226\u529B",cultivate_jade:"\u970A\u7389",cultivate_stage:"\u30B9\u30C6\u30FC\u30B8",cultivate_equipment:"\u88C5\u5099",cultivate_current_equip:"\u73FE\u5728\u306E\u88C5\u5099",cultivate_new_drop:"\u65B0\u30C9\u30ED\u30C3\u30D7",cultivate_wear:"\u88C5\u5099\u3059\u308B",cultivate_battle:"\u8A9E\u5F59\u5996\u602A\u30D0\u30C8\u30EB",cultivate_insight:"\u609F\u9053\u30AF\u30A4\u30BA",cultivate_insight_empty:"\u4FEE\u884C\u3059\u308B\u3068\u609F\u9053\u30AF\u30A4\u30BA\u304C\u51FA\u307E\u3059\u3002",cultivate_q_meaning:"\u610F\u5473\u3092\u9078\u3076",cultivate_q_reading:"\u8AAD\u307F\u3092\u9078\u3076",cultivate_reset_confirm:"\u65E5\u672C\u8A9E\u4FEE\u884C\u306E\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3059\u304B\uFF1F",cultivate_enemy_name:"\u7B2C{0}\u95A2 \u8A9E\u5F59\u5996\u602A",cultivate_realm_0:"\u304B\u306A\u5C0F\u5996",cultivate_realm_1:"\u4E94\u5341\u97F3\u7AE5\u5B50",cultivate_realm_2:"N5\u4FEE\u58EB",cultivate_realm_3:"N4\u6CD5\u5E2B",cultivate_realm_4:"N3\u771F\u4EBA",cultivate_realm_5:"N2\u5B97\u5E2B",cultivate_realm_6:"N1\u5927\u80FD",cultivate_realm_7:"\u65E5\u672C\u8A9E\u30DE\u30B9\u30BF\u30FC",cultivate_q_normal:"\u666E\u901A",cultivate_q_rare:"\u30EC\u30A2",cultivate_q_epic:"\u30A8\u30D4\u30C3\u30AF",cultivate_q_legend:"\u4F1D\u8AAC",cultivate_stat_vocab:"\u8A9E\u5F59",cultivate_stat_listen:"\u8074\u529B",cultivate_stat_combo:"\u9023\u6483",cultivate_stat_focus:"\u96C6\u4E2D",cultivate_kanji:"\u6F22\u5B57",cultivate_setup_title:"\u4FEE\u884C\u5185\u5BB9",cultivate_setup_sub:"\u958B\u59CB\u524D\u306B\u51FA\u984C\u30BF\u30A4\u30D7\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u5C11\u306A\u304F\u3068\u30821\u3064\u5FC5\u8981\u3067\u3059\u3002",cultivate_start:"\u4FEE\u884C\u958B\u59CB",cultivate_select_one_script:"\u3072\u3089\u304C\u306A\u3001\u30AB\u30BF\u30AB\u30CA\u3001\u6F22\u5B57\u304B\u3089\u5C11\u306A\u304F\u3068\u30821\u3064\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",cultivate_log_start:"\u4FEE\u884C\u958B\u59CB\u3002\u4FEE\u884C\u3067\u7D4C\u9A13\u3001\u970A\u7389\u3001\u88C5\u5099\u3092\u7372\u5F97\u3002",cultivate_log_train:"\u4FEE\u884C +{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3001{3}\u88C5\u5099\u300C{2}\u300D\u3092\u7372\u5F97\u3002",cultivate_log_equip:"\u300C{0}\u300D\u3092\u88C5\u5099\u3057\u307E\u3057\u305F\u3002",cultivate_log_replace:"\u300C{0}\u300D\u3092\u88C5\u5099\u3057\u3001\u300C{1}\u300D\u3092\u4EA4\u63DB\u3057\u307E\u3057\u305F\u3002",cultivate_log_realm_up:"\u5883\u754C\u7A81\u7834\uFF1A{0}\uFF01",cultivate_log_win:"\u52DD\u5229\uFF01+{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3002",cultivate_log_lose:"\u6557\u5317\u3002\u3067\u3082 +{0}\u7D4C\u9A13\u3002",cultivate_log_insight_ok:"\u609F\u9053\u6210\u529F\uFF01+{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3001\u88C5\u5099\u6226\u529B+2\u3002",cultivate_log_insight_ng:"\u609F\u9053\u5931\u6557\u3002\u6B63\u89E3\uFF1A{0}\u3002",cultivate_log_finish_current:"\u5148\u306B\u73FE\u5728\u306E\u609F\u9053/\u6311\u6226\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044\u3002",cultivate_train_style_vocab:"\u8A9E\u5F59\u4FEE\u884C",cultivate_train_style_listen:"\u8074\u89E3\u4FEE\u884C",cultivate_train_style_focus:"\u96C6\u4E2D\u7791\u60F3",cultivate_log_train_start:"{0}\u958B\u59CB\uFF1A\u609F\u9053\u306B\u6210\u529F\u3059\u308B\u3068\u57FA\u672C +{1}\u7D4C\u9A13 +{2}\u970A\u7389\u3001\u88C5\u5099\u54C1\u8CEA\u3082\u6C7A\u307E\u308A\u307E\u3059\u3002",cultivate_train_question:"\u4FEE\u884C\u609F\u9053",cultivate_train_question_desc:"{0}\u4E2D",cultivate_battle_question:"\u8A00\u970A\u5996\u602A\u30D0\u30C8\u30EB",cultivate_battle_question_desc:"\u81EA\u5206{0} vs \u6575{1}",cultivate_log_train_success:"\u4FEE\u884C\u6210\u529F\uFF01+{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3001{3}\u88C5\u5099\u300C{2}\u300D\u3092\u7372\u5F97\u3002",cultivate_log_train_fail:"\u4FEE\u884C\u5931\u6557\u3002\u6B63\u89E3\uFF1A{0}\u3002\u305D\u308C\u3067\u3082 +{1}\u7D4C\u9A13 +{2}\u970A\u7389\u3002",cultivate_log_battle_start:"\u8A00\u970A\u5996\u602A\u51FA\u73FE\uFF01\u81EA\u5206\u306E\u6226\u529B{0}\u3001\u6575\u306E\u6226\u529B{1}\u3002\u6B63\u89E3\u3067\u653B\u6483\u3002",cultivate_log_battle_win:"\u7834\u62DB\u6210\u529F\uFF01\u6700\u7D42\u6226\u529B{0}/{1}\u3001\u52DD\u5229\uFF01+{2}\u7D4C\u9A13 +{3}\u970A\u7389\u3002",cultivate_log_battle_not_enough:"\u6B63\u89E3\u3057\u305F\u304C\u6226\u529B\u4E0D\u8DB3\uFF1A{0}/{1}\u3002+{2}\u7D4C\u9A13\u3002\u5148\u306B\u4FEE\u884C\u304B\u88C5\u5099\u5909\u66F4\u3092\u3002",cultivate_log_battle_lose:"\u6575\u306B\u898B\u7834\u3089\u308C\u305F\u3002\u6B63\u89E3\uFF1A{0}\u3002+{1}\u7D4C\u9A13\u3002",mod_kanji:"\u6F22\u5B57\u5358\u8A9E",mod_kanji_desc:"\u6F22\u5B57\u306E\u8AAD\u307F\u66F8\u304D",mod_n2:"JLPT\u5BFE\u7B56",mod_n2_desc:"N1-N5 \u6A21\u64EC\u7DF4\u7FD2",mod_grammar:"\u6587\u6CD5\u5B66\u7FD2",mod_grammar_icon:"\u6587\u6CD5",mod_grammar_desc:"\u52D5\u8A5E\u30B0\u30EB\u30FC\u30D7\u30FB\u6587\u578B",mod_sentence:"800\u5E38\u7528\u6587",mod_sentence_icon:"800",mod_sentence_desc:"\u6587\u578B\u30FB\u767A\u97F3\u5B66\u7FD2",mod_songs:"\u65E5\u672C\u8A9E\u306E\u6B4C",mod_songs_icon:"\u6B4C",mod_songs_desc:"\u30ED\u30FC\u30AB\u30EB\u6B4C\u8A5E\u30FB\u4E00\u884C\u305A\u3064\u5B66\u7FD2",songs_title:"\u65E5\u672C\u8A9E\u306E\u6B4C",songs_intro_title:"\u30ED\u30FC\u30AB\u30EB\u6B4C\u8A5E\u5B66\u7FD2",songs_intro:"\u66F2\u3092\u9078\u3093\u3067\u81EA\u5206\u306E\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3092\u8CBC\u308A\u4ED8\u3051\u307E\u3059\u3002\u5185\u5BB9\u306F\u3053\u306E\u7AEF\u672B\u3060\u3051\u306B\u4FDD\u5B58\u3055\u308C\u3001\u5404\u884C\u306B\u8AAD\u307F\u4EEE\u540D\u3092\u4ED8\u3051\u3066\u4E00\u884C\u305A\u3064\u518D\u751F\u3067\u304D\u307E\u3059\u3002",song_close:"\u9589\u3058\u308B",song_local_notice:"\u5B8C\u5168\u306A\u6B4C\u8A5E\u306F\u5185\u8535\u30FB\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u305B\u3093\u3002\u8CBC\u308A\u4ED8\u3051\u305F\u6B4C\u8A5E\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u5185\u3060\u3051\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002",song_paste_label:"\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3092\u8CBC\u308A\u4ED8\u3051",song_paste_placeholder:"\u4E00\u884C\u306B\u4E00\u3064\u306E\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3002\u4EFB\u610F\uFF1A\u6B4C\u8A5E<Tab>\u81EA\u5206\u7528\u30E1\u30E2\u3002",song_save:"\u4FDD\u5B58\u3057\u3066\u8AAD\u307F\u3092\u751F\u6210",song_clear:"\u3053\u306E\u66F2\u306E\u6B4C\u8A5E\u3092\u6D88\u53BB",song_clear_confirm:"\u3053\u306E\u66F2\u306E\u30ED\u30FC\u30AB\u30EB\u4FDD\u5B58\u6B4C\u8A5E\u3092\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F",song_no_lyrics:"\u307E\u3060\u6B4C\u8A5E\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u81EA\u5206\u3067\u6301\u3063\u3066\u3044\u308B\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u4FDD\u5B58\u3057\u3066\u304F\u3060\u3055\u3044\u3002",song_line_play:"\u3053\u306E\u884C\u3092\u518D\u751F",song_lines_count:"{0} \u884C",song_not_added:"\u672A\u8FFD\u52A0",song_reading_label:"\u8AAD\u307F\uFF1A",song_translation_label:"\u7FFB\u8A33/\u30E1\u30E2\uFF1A",grammar_practice_btn:"\u7DF4\u7FD2\u958B\u59CB",grammar_practice_title:"\u7DF4\u7FD2",gp_submit:"\u9001\u4FE1",gp_right:"\u6B63\u89E3\uFF1A",gp_answer:"\u7B54\u3048\uFF1A",gp_wrong:"\u4E0D\u6B63\u89E3\u3002",gp_again:"\u3082\u3046\u4E00\u5EA6",gp_summary_sub:"\u8A08 {0} \u554F \xB7 \u6B63\u89E3 {1} \xB7 \u4E0D\u6B63\u89E3 {2}",gp_summary_time:"\u6642\u9593 ",jlpt_level_label:"\u30EC\u30D9\u30EB",jlpt_mode_label:"\u5B66\u7FD2\u65B9\u6CD5",jlpt_mode_quiz:"\u30C6\u30B9\u30C8\u30E2\u30FC\u30C9",jlpt_mode_study:"\u7B54\u3048\u5B66\u7FD2",jlpt_mode_progressive:"\u9806\u756A\u306B\u5B66\u7FD2",jlpt_study_answer:"\u5B66\u7FD2\uFF1A",jlpt_study_done:"{0}\u554F\u3092\u5B66\u7FD2\u3057\u307E\u3057\u305F",jlpt_progress_badge:"\u5B66\u7FD2\u9032\u5EA6 {0} / {1}",jlpt_reset_progress:"\u5B66\u7FD2\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8",sentence_mode_label:"\u5B66\u7FD2\u65B9\u6CD5",sentence_mode_progressive:"\u9806\u756A\u306B\u5B66\u7FD2",sentence_mode_study:"\u30E9\u30F3\u30C0\u30E0\u5B66\u7FD2",sentence_mode_quiz_jp_zh:"\u65E5\u672C\u8A9E\u2192\u4E2D\u56FD\u8A9E\u3092\u9078\u629E",sentence_mode_quiz_zh_jp:"\u4E2D\u56FD\u8A9E\u2192\u65E5\u672C\u8A9E\u3092\u9078\u629E",sentence_reset_progress:"800\u6587\u306E\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8",sentence_progress_badge:"800\u6587\u9032\u5EA6 {0} / {1}",sentence_pattern_label:"\u6587\u578B\uFF1A",sentence_level_label:"\u30EC\u30D9\u30EB\uFF1A",sentence_translation_label:"\u8A33\u6587\uFF1A",sentence_note_label:"\u8AAC\u660E\uFF1A",sentence_note_generic:"\u5B66\u7FD2\u30DD\u30A4\u30F3\u30C8\uFF1A\u3053\u306E\u6587\u306E\u30AD\u30FC\u30D5\u30EC\u30FC\u30BA\u306F\u300C{0}\u300D\u3067\u3059\u3002\u8A33\u6587\u3068\u5408\u308F\u305B\u3066\u6587\u5168\u4F53\u3092\u7406\u89E3\u3057\u3001\u524D\u5F8C\u306E\u63A5\u7D9A\u306B\u6CE8\u610F\u3057\u307E\u3057\u3087\u3046\u3002",sentence_why_not_label:"\u4ED6\u306E\u5F62\u3092\u4F7F\u308F\u306A\u3044\u7406\u7531\uFF1A",sentence_quiz_jp_zh:"\u3053\u306E\u65E5\u672C\u8A9E\u6587\u306E\u4E2D\u56FD\u8A9E\u8A33\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044",sentence_quiz_zh_jp:"\u3053\u306E\u4E2D\u56FD\u8A9E\u306B\u5408\u3046\u65E5\u672C\u8A9E\u6587\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044",sentence_study_answer:"\u5B66\u7FD2\uFF1A",sentence_study_done:"{0}\u6587\u3092\u5B66\u7FD2\u3057\u307E\u3057\u305F",no_questions:"\u5229\u7528\u3067\u304D\u308B\u554F\u984C\u304C\u3042\u308A\u307E\u305B\u3093",n2_cat_label:"\u554F\u984C\u30BF\u30A4\u30D7\uFF08\u8907\u6570\u9078\u629E\u53EF\uFF09",n2_kanji_reading:"\u6F22\u5B57\u8AAD\u307F",n2_orthography:"\u8868\u8A18",n2_context_vocab:"\u6587\u8108\u898F\u5B9A",n2_paraphrase:"\u8A00\u3044\u63DB\u3048",n2_usage:"\u7528\u6CD5",n2_grammar:"\u6587\u6CD5",n2_q_reading:"\u4E0B\u7DDA\u306E\u8A00\u8449\u306E\u8AAD\u307F\u306F\uFF1F",n2_q_ortho:"\u4E0B\u7DDA\u306E\u8A00\u8449\u306E\u6F22\u5B57\u306F\uFF1F",n2_q_context:"\uFF08\u3000\u3000\uFF09\u306B\u5165\u308B\u6700\u3082\u9069\u5207\u306A\u8A00\u8449\u306F\uFF1F",n2_q_para:"\u4E0B\u7DDA\u306E\u8A00\u8449\u306B\u8FD1\u3044\u610F\u5473\u306F\uFF1F",n2_q_usage:"\u6B63\u3057\u3044\u4F7F\u3044\u65B9\u306F\u3069\u308C\uFF1F",n2_q_grammar:"\uFF08\u3000\u3000\uFF09\u306B\u5165\u308B\u6700\u3082\u9069\u5207\u306A\u3082\u306E\u306F\uFF1F",content_label:"\u5185\u5BB9\uFF08\u8907\u6570\u9078\u629E\u53EF\uFF09",content_kana:"50\u97F3",content_word:"\u65E5\u5E38\u5358\u8A9E",content_kanji:"\u6F22\u5B57\u5358\u8A9E",content_wrong:"\u9593\u9055\u3044\u512A\u5148",group_kana_title:"50\u97F3\u8A2D\u5B9A",group_word_title:"\u65E5\u5E38\u5358\u8A9E\u8A2D\u5B9A",group_kanji_title:"\u6F22\u5B57\u5358\u8A9E\u8A2D\u5B9A",mode_type:"\u554F\u984C\u30BF\u30A4\u30D7",set_label:"\u30BB\u30C3\u30C8",kana_mode_label:"\u4EEE\u540D\u30E2\u30FC\u30C9",session_size_label:"\u554F\u984C\u6570",other_options:"\u305D\u306E\u4ED6",kana_hira:"\u3072\u3089\u304C\u306A",kana_kata:"\u30AB\u30BF\u30AB\u30CA",mode_rm_mc:"\u30ED\u30FC\u30DE\u5B57\u2192\u4EEE\u540D\u9078\u629E",mode_jp_mc:"\u4EEE\u540D\u2192\u30ED\u30FC\u30DE\u5B57\u9078\u629E",mode_rm_in:"\u30ED\u30FC\u30DE\u5B57\u5165\u529B",mode_jp_in:"\u4EEE\u540D\u5165\u529B",mode_rm_mean:"\u8AAD\u307F\u2192\u610F\u5473\u9078\u629E",mode_mean_rm:"\u610F\u5473\u2192\u8AAD\u307F\u9078\u629E",word_relation_label:"\u8A9E\u5F59\u95A2\u4FC2",mode_word_synonym:"\u985E\u7FA9\u8A9E",mode_word_near:"\u8FD1\u3044\u610F\u5473",mode_word_antonym:"\u53CD\u5BFE\u8A9E",mode_kanji_read:"\u6F22\u5B57\u2192\u8AAD\u307F\u9078\u629E",mode_read_kanji:"\u8AAD\u307F\u2192\u6F22\u5B57\u9078\u629E",mode_kanji_mean:"\u6F22\u5B57\u2192\u610F\u5473\u9078\u629E",set_seion:"\u6E05\u97F3",set_dakuon:"\u6FC1\u97F3",set_handakuon:"\u534A\u6FC1\u97F3",set_yoon:"\u62D7\u97F3",start_btn:"\u7DF4\u7FD2\u958B\u59CB",word_match_new:"\u65B0\u3057\u3044\u5C40",word_match_invite:"\u53CB\u3060\u3061\u62DB\u5F85",word_match_guide_btn:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",word_match_setup_title:"\u958B\u59CB\u524D\u8A2D\u5B9A",word_match_kana_label:"\u5DE6\u5074\u306E\u4EEE\u540D\u8868\u793A",word_match_hira:"\u3072\u3089\u304C\u306A",word_match_kata:"\u30AB\u30BF\u30AB\u30CA",word_match_difficulty:"\u96E3\u6613\u5EA6",word_match_easy:"\u304B\u3093\u305F\u3093\uFF1A1\u5217\xD73\u6BB5\u304B\u3089",word_match_medium:"\u3075\u3064\u3046\uFF1A2\u5217\xD73\u6BB5\u304B\u3089",word_match_hard:"\u3080\u305A\u304B\u3057\u3044\uFF1A3\u5217\xD73\u6BB5\u304B\u3089",word_match_start_game:"\u30B2\u30FC\u30E0\u958B\u59CB",word_match_select_one_kana:"\u4EEE\u540D\u3092\u5C11\u306A\u304F\u3068\u30821\u3064\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",word_match_guide_level:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",word_match_guide_title:"\u5358\u8A9E\u6D88\u3057\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",word_match_guide_prompt_0:"\u5DE6\u306E\u5149\u308B\u304B\u306A\uFF1A\u306D\u3053 \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_1:"\u6B21\u306B\u53F3\u306E\u5BFE\u5FDC\u3059\u308B\u6F22\u5B57\uFF1A\u732B \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_2:"1\u7D44\u76EE\u306F\u3059\u3050\u6D88\u3048\u305A\u3001\u307E\u305A\u56F2\u307E\u308C\u307E\u3059\u3002\u6B21\u306E\u8AAD\u307F\u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_3:"\u9078\u3093\u3060\u3089\u5BFE\u5FDC\u3059\u308B\u6F22\u5B57\uFF1A\u6C34 \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_4:"2\u7D44\u304C\u56F2\u307E\u308C\u307E\u3057\u305F\u3002\u8272\u304C\u5909\u308F\u308A\u3001\u30C1\u30A7\u30FC\u30F3\u500D\u7387\u304C\u4E0A\u304C\u308A\u307E\u3059\u3002\u5149\u308B\u300C\u6B21\u3078\u300D\u3092\u62BC\u3057\u3066\u6642\u9593\u6E1B\u5C11\u3092\u898B\u307E\u3059\u3002",word_match_guide_prompt_5:"\u6B8B\u308A\u6642\u9593\u304C\u5C11\u306A\u3044\u307B\u3069\u3001\u56F2\u307E\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u306F\u901F\u304F\u52D5\u304D\u307E\u3059\u3002\u6B21\u3078\u3067\u7CBE\u7B97\u3092\u898B\u307E\u3059\u3002",word_match_guide_prompt_6:"\u30C1\u30A7\u30FC\u30F3\u7D42\u4E86\u3067\u56F2\u307E\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u304C\u307E\u3068\u3081\u3066\u7206\u767A\u3057\u3001\u88DC\u5145\u3055\u308C\u307E\u3059\u3002",word_match_guide_prompt_7:"\u30DF\u30B9\u306E\u4F53\u9A13\uFF1A\u307E\u305A\u5149\u308B \u3084\u307E \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_7b:"\u6B21\u306B\u308F\u3056\u3068\u9055\u3046 \u6C34 \u3092\u30BF\u30C3\u30D7\u3057\u3066\u30E9\u30A4\u30D5\u6E1B\u5C11\u3092\u898B\u307E\u3059\u3002",word_match_guide_prompt_7c:"\u30DF\u30B9\u3059\u308B\u3068\u63FA\u308C\u3066\u30E9\u30A4\u30D5\u304C1\u3064\u6E1B\u308A\u307E\u3059\u3002\u6B21\u3078\u3067\u9053\u5177\u3078\u3002",word_match_guide_prompt_8:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\uFF1A\u5149\u308B\u7206\u5F3E\u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_8_pick:"\u7206\u5F3E\u3092\u9078\u3073\u307E\u3057\u305F\u3002\u6B63\u5F0F\u30B2\u30FC\u30E0\u3068\u540C\u3058\u3088\u3046\u306B\u3001\u5149\u308B\u4E2D\u5FC3\u30D6\u30ED\u30C3\u30AF\u3092\u30BF\u30C3\u30D7\u3057\u3066\u7206\u767A\u70B9\u3092\u9078\u3073\u307E\u3059\u3002",word_match_guide_prompt_8b:"\u7206\u5F3E\u306F\u5E83\u304F\u7206\u767A\u6D88\u53BB\u3057\u307E\u3059\u3002\u6B21\u3078\u3067\u866B\u773C\u93E1\u3078\u3002",word_match_guide_prompt_8c:"\u5149\u308B\u866B\u773C\u93E1\u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_8d:"\u866B\u773C\u93E1\u306F3\u7D44\u306E\u30DA\u30A2\u3092\u2460\u2461\u2462\u3067\u8868\u793A\u3057\u307E\u3059\u3002\u540C\u3058\u6570\u5B57\u30FB\u540C\u3058\u8272\u304C1\u7D44\u3067\u30015\u79D2\u7D9A\u304D\u307E\u3059\u3002\u6B21\u3078\u3067\u672C\u756A\u958B\u59CB\u3002",word_match_guide_prompt_9:"\u672C\u756A\u30B2\u30FC\u30E0\u3078\u9032\u307F\u307E\u3059\u3002",word_match_guide_tool_prompt:"\u9053\u5177\u306F\u5F8C\u3067\u5149\u308A\u307E\u3059\u3002",word_match_guide_next:"\u6B21\u3078",word_match_guide_basic:"\u5DE6\u306F\u304B\u306A\u8AAD\u307F\u3001\u53F3\u306F\u5BFE\u5FDC\u3059\u308B\u6F22\u5B57/\u8A9E\u3002\u5DE6\u3068\u53F3\u30921\u3064\u305A\u3064\u9078\u3073\u3001\u6B63\u89E3\u3059\u308B\u3068\u307E\u305A\u56F2\u307E\u308C\u307E\u3059\u3002",word_match_guide_chain:"1\u7D44\u76EE\u306F8\u79D2\u4EE5\u5185\u306B\u6B21\u306E\u7D44\u3078\u30021\u7D44\u5897\u3048\u308B\u3054\u3068\u306B0.5\u79D2\u77ED\u304F\u306A\u308A\u307E\u3059\u3002\u56F2\u307E\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u306F\u3060\u3093\u3060\u3093\u901F\u304F\u52D5\u304D\u3001\u6642\u9593\u5207\u308C\u3067\u307E\u3068\u3081\u3066\u6D88\u3048\u3066\u9AD8\u500D\u7387\u306B\u306A\u308A\u307E\u3059\u3002",word_match_guide_wrong:"\u9593\u9055\u3048\u308B\u3068\u73FE\u5728\u306E\u30C1\u30A7\u30FC\u30F3\u304C\u5207\u308C\u3066\u30E9\u30A4\u30D5\u30921\u3064\u5931\u3044\u307E\u3059\u30025\u3064\u5931\u3046\u3068 GAME OVER\u3002",word_match_guide_tools:"\u7206\u5F3E\u306F\u4E2D\u5FC3\u304B\u30893\xD73\u3092\u6D88\u3057\u307E\u3059\u3002\u866B\u773C\u93E1\u306F3\u7D44\u30923\u8272\u30675\u79D2\u9593\u30D2\u30F3\u30C8\u8868\u793A\u3057\u307E\u3059\u3002",word_match_guide_score:"\u5F97\u70B9\u306F\u9577\u3055\u3001\u4F7F\u7528\u983B\u5EA6\u3001Combo\u3001\u500D\u7387\u3001\u30C1\u30A7\u30FC\u30F3\u6570\u3067\u6C7A\u307E\u308A\u307E\u3059\u30025\u5206\u3067\u30CF\u30A4\u30B9\u30B3\u30A2\u3092\u72D9\u3044\u307E\u3057\u3087\u3046\u3002",word_match_guide_start:"\u308F\u304B\u3063\u305F\u3001\u958B\u59CB",word_match_goal:"\u30B9\u30C6\u30FC\u30B8",word_match_level_label:"\u7B2C{0}\u9762 {1}\u5217\xD7{2}\u6BB5",word_match_level_clear:"\u7B2C{0}\u9762\u30AF\u30EA\u30A2\uFF01",word_match_level_clear_hint:"\u30AF\u30EA\u30A2\uFF01\u6B21\u306E\u30B9\u30C6\u30FC\u30B8\u3078\u2026\u2026",word_match_power:"\u500D\u7387",word_match_goal_pairs:"{0}\u7D44\u6D88\u3059",word_match_goal_score:"{0}\u70B9",word_match_goal_combo:"{0}\u9023\u7D9A",word_match_goal_done_bonus:"\u76EE\u6A19\u9054\u6210 +15\u79D2 \u6B21\u56DE\xD72",word_match_life_title:"\u6B8B\u308A\u30E9\u30A4\u30D5 {0}/5",word_match_life_empty:"\u30E9\u30A4\u30D5\u5207\u308C",word_match_bomb_hint:"\u{1F4A3} \u4E2D\u5FC3\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076\u3068\u5468\u56F23\xD73\u3092\u6D88\u3057\u307E\u3059",word_match_invite_title:"\u77ED\u8A5E\u6D88\u3057 - \u65E5\u672C\u8A9E\u30DE\u30C3\u30C1\u30D1\u30BA\u30EB",word_match_invite_text:"\u65E5\u672C\u8A9E\u306E\u77ED\u8A5E\u30DE\u30C3\u30C1\u30D1\u30BA\u30EB\u306B\u6311\u6226\uFF01\u30C1\u30A7\u30FC\u30F3\u3001\u30A2\u30A4\u30C6\u30E0\u3001\u30B9\u30C6\u30FC\u30B8\u3092\u904A\u3073\u306A\u304C\u3089\u5358\u8A9E\u3092\u899A\u3048\u3088\u3046\u3002",word_match_invite_copied:"\u30B2\u30FC\u30E0\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",word_match_music_toggle:"BGM",word_match_sfx_toggle:"\u52B9\u679C\u97F3",word_match_voice_toggle:"\u8AAD\u307F\u4E0A\u3052",word_match_music_short:"BGM",word_match_sfx_short:"\u52B9\u679C",word_match_voice_short:"\u8AAD\u97F3",word_match_special_seconds:"+{0}\u79D2",word_match_special_hint:"\u30D2\u30F3\u30C8",word_match_special_mult:"\u6B21\u56DE\xD72",word_match_start:"\u30B9\u30BF\u30FC\u30C8",word_match_game_over:"GAME OVER",word_match_chain_tip:"1\u7D44\u76EE\u3092\u56F2\u3093\u3060\u5F8C\u30018\u79D2\u4EE5\u5185\u306B\u7D9A\u3051\u308B\u3068\u30C1\u30A7\u30FC\u30F3\u500D\u7387\u30A2\u30C3\u30D7",word_match_score:"\u5F97\u70B9",word_match_best:"\u6700\u9AD8",word_match_time:"\u6642\u9593",word_match_timeup:"\u6642\u9593\u5207\u308C\uFF01",word_match_plus:"+",word_match_combo:"\u9023\u7D9A",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"\u8AAD\u307F",word_match_word:"\u6F22\u5B57",word_match_hint:"\u5DE6\u306F\u8AAD\u307F\u3001\u53F3\u306F\u6F22\u5B57\u3002\u6B63\u89E3\u3059\u308B\u3068\u307E\u305A\u56F2\u307E\u308C\u3001\u30C1\u30A7\u30FC\u30F3\u7D99\u7D9A\u307E\u305F\u306F\u6642\u9593\u5207\u308C\u3067\u307E\u3068\u3081\u3066\u6D88\u3048\u307E\u3059\u3002",word_match_complete:"\u5B8C\u4E86\uFF01\u3059\u3079\u3066\u6D88\u3048\u307E\u3057\u305F\u3002",hide_meaning:"\u610F\u5473\u3092\u96A0\u3059",reset_settings:"\u8A2D\u5B9A\u30EA\u30BB\u30C3\u30C8",reset_today:"\u4ECA\u65E5\u30EA\u30BB\u30C3\u30C8",clear_all:"\u5168\u6D88\u53BB",refresh_app:"\u66F4\u65B0/\u518D\u8AAD\u307F\u8FBC\u307F",refreshing_app:"\u66F4\u65B0\u4E2D...",today_label:"\u4ECA\u65E5\uFF1A",today_unit:" \u554F",correct_label:"\u6B63\u89E3\uFF1A",wrong_label:"\u4E0D\u6B63\u89E3\uFF1A",done_label:"\u5B8C\u4E86\uFF1A",rounds_unit:" \u56DE",round_prefix:"\u7B2C",round_suffix:"\u56DE",btn_back:"\u623B\u308B",btn_next:"\u6B21\u3078",btn_speak:"\u767A\u97F3\u518D\u751F",btn_speaking:"\u518D\u751F\u4E2D",btn_check:"\u9001\u4FE1",btn_answer:"\u89E3\u7B54",btn_show:"\u7B54\u3048\u3092\u898B\u308B",btn_finish:"\u7D42\u4E86",q_what_meaning:" \u306F\u3069\u3046\u3044\u3046\u610F\u5473\uFF1F",q_how_read_meaning:"\u300D\u306E\u8AAD\u307F\u306F\uFF1F",q_how_read_meaning_pre:"\u300C",q_how_read:" \u306E\u8AAD\u307F\u306F\uFF1F",q_kanji_of:" \u306E\u6F22\u5B57\u306F\uFF1F",q_kana_of:" \u306E\u4EEE\u540D\u306F\uFF1F",q_writing_of:" \u306E\u66F8\u304D\u65B9\u306F\uFF1F",q_word_synonym:" \u306E\u985E\u7FA9\u8A9E\u306F\uFF1F",q_word_near:" \u306B\u8FD1\u3044\u610F\u5473\u306E\u8A9E\u306F\uFF1F",q_word_antonym:" \u306E\u53CD\u5BFE\u8A9E\u306F\uFF1F",rel_synonym:"\u985E\u7FA9",rel_near:"\u8FD1\u7FA9",rel_antonym:"\u53CD\u5BFE",input_kana:"\u4EEE\u540D\u3092\u5165\u529B",input_romaji:"\u30ED\u30FC\u30DE\u5B57\u3092\u5165\u529B",input_placeholder:"\u7B54\u3048\u3092\u5165\u529B",result_correct:"\u6B63\u89E3\uFF1A",result_wrong:"\u4E0D\u6B63\u89E3\u3002\u6B63\u89E3\uFF1A",result_wrong2:"\u9055\u3044\u307E\u3059\u3002\u6B63\u89E3\uFF1A",n2_original:"\u539F\u6587\uFF1A",n2_translation:"\u8A33\u6587\uFF1A",result_answer:"\u7B54\u3048\uFF1A",meaning_label:"\u610F\u5473\uFF1A",meaning_hidden:"\u610F\u5473\uFF1A***",alert_reset_settings:"\u8A2D\u5B9A\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",alert_reset_today:"\u4ECA\u65E5\u306E\u7D71\u8A08\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",alert_clear_all:"\u5168\u30C7\u30FC\u30BF\u3092\u6D88\u53BB\u3057\u307E\u3057\u305F",alert_reset_jlpt_progress:"JLPT\u5B66\u7FD2\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",alert_reset_sentence_progress:"800\u6587\u306E\u5B66\u7FD2\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",confirm_clear_all:"\u5168\u3066\u306E\u7D71\u8A08\u3068\u9593\u9055\u3044\u8A18\u9332\u3092\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F",please_answer:"\u5148\u306B\u7B54\u3048\u3066\u304F\u3060\u3055\u3044\uFF01",please_input:"\u7B54\u3048\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",ready:"\u6E96\u5099\u4E2D...",finish_done:"\u5B8C\u4E86\uFF01\u6240\u8981\u6642\u9593 ",finish_acc:"\u3001\u6B63\u89E3\u7387 ",data_error:"\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002HTTP\u30B5\u30FC\u30D0\u30FC\u7D4C\u7531\u3067\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u304F\u3060\u3055\u3044"},en:{title:"Nihongo Class",subtitle:"Choose a practice module",mod_kana:"50 Kana",mod_kana_desc:"Seion, Dakuon, Yoon",mod_word:"Daily Words",mod_word_desc:"Vocab, synonyms & antonyms",mod_games_icon:"Game",mod_games:"Games",mod_games_desc:"Match\u30FBTraining",games_title:"Choose a game",mod_word_match_icon:"\u6D88",mod_word_match:"Word Match",mod_word_match_desc:"Endless 3-pair clear",mod_cultivate_game:"Japanese Cultivation",mod_cultivate_game_desc:"Train\u30FBGear\u30FBBattle",mod_blade_game:"Word Blade King",mod_blade_game_desc:"Spinning blades, match words",blade_new:"Restart",blade_score:"Score",blade_knives:"Blades",blade_level:"Level",blade_time:"Time",blade_help:"Drag to move. Match the word above your head with the correct answer to defeat targets and gain blades; wrong hits lose blades.",cultivate_title:"Japanese Cultivation",cultivate_reset:"Reset",cultivate_train:"Train once",cultivate_challenge:"Challenge Word Demon",cultivate_power:"Power",cultivate_jade:"Jade",cultivate_stage:"Stage",cultivate_equipment:"Equipment",cultivate_current_equip:"Current gear",cultivate_new_drop:"New drop",cultivate_wear:"Equip",cultivate_battle:"Word Demon Battle",cultivate_insight:"Insight Quiz",cultivate_insight_empty:"Train to reveal an insight quiz.",cultivate_q_meaning:"Choose the meaning",cultivate_q_reading:"Choose the reading",cultivate_reset_confirm:"Reset Japanese Cultivation progress?",cultivate_enemy_name:"Stage {0} Word Demon",cultivate_realm_0:"Kana Imp",cultivate_realm_1:"Gojuon Adept",cultivate_realm_2:"N5 Cultivator",cultivate_realm_3:"N4 Mage",cultivate_realm_4:"N3 Sage",cultivate_realm_5:"N2 Master",cultivate_realm_6:"N1 Archmaster",cultivate_realm_7:"Japanese Master",cultivate_q_normal:"Normal",cultivate_q_rare:"Rare",cultivate_q_epic:"Epic",cultivate_q_legend:"Legendary",cultivate_stat_vocab:"Vocabulary",cultivate_stat_listen:"Listening",cultivate_stat_combo:"Combo",cultivate_stat_focus:"Focus",cultivate_kanji:"Kanji",cultivate_setup_title:"Training Content",cultivate_setup_sub:"Choose which question types can appear. Select at least one.",cultivate_start:"Start Training",cultivate_select_one_script:"Select at least one: Hiragana, Katakana, or Kanji.",cultivate_log_start:"Cultivation begins. Train to gain EXP, jade, and gear.",cultivate_log_train:"Training +{0} EXP +{1} jade, got {3} gear \u201C{2}\u201D.",cultivate_log_equip:"Equipped \u201C{0}\u201D.",cultivate_log_replace:"Equipped \u201C{0}\u201D, replacing \u201C{1}\u201D.",cultivate_log_realm_up:"Realm breakthrough: {0}!",cultivate_log_win:"Victory! +{0} EXP +{1} jade.",cultivate_log_lose:"Defeated, but gained +{0} EXP.",cultivate_log_insight_ok:"Insight success! +{0} EXP +{1} jade, gear power +2.",cultivate_log_insight_ng:"Insight failed. Answer: {0}.",cultivate_log_finish_current:"Finish the current insight/challenge first.",cultivate_train_style_vocab:"vocabulary training",cultivate_train_style_listen:"listening training",cultivate_train_style_focus:"focus meditation",cultivate_log_train_start:"Started {0}: answer the insight to earn base +{1} EXP +{2} jade and determine gear quality.",cultivate_train_question:"Training Insight",cultivate_train_question_desc:"{0} in progress",cultivate_battle_question:"Word Demon Battle",cultivate_battle_question_desc:"You {0} vs Demon {1}",cultivate_log_train_success:"Training success! +{0} EXP +{1} jade, gained {3} gear \u201C{2}\u201D.",cultivate_log_train_fail:"Training failed. Answer: {0}. Still gained +{1} EXP +{2} jade.",cultivate_log_battle_start:"Word demon appeared! Your power {0}, demon power {1}. Answer correctly to attack.",cultivate_log_battle_win:"Breakthrough! Final power {0}/{1}, victory! +{2} EXP +{3} jade.",cultivate_log_battle_not_enough:"Correct but not strong enough: {0}/{1}. Gained +{2} EXP. Train or equip first.",cultivate_log_battle_lose:"The demon saw through you. Answer: {0}. Gained +{1} EXP.",mod_kanji:"Kanji Words",mod_kanji_desc:"Kanji reading & writing",mod_n2:"JLPT Exam",mod_n2_desc:"N1-N5 Mock Practice",mod_grammar:"Grammar",mod_grammar_icon:"Grammar",mod_grammar_desc:"Verb groups, patterns",mod_sentence:"800 Common Sentences",mod_sentence_icon:"800",mod_sentence_desc:"Patterns & pronunciation",mod_songs:"Japanese Songs",mod_songs_icon:"Song",mod_songs_desc:"Local lyrics, line study",songs_title:"Japanese Songs",songs_intro_title:"Local lyrics study",songs_intro:"Choose a song and paste your own Japanese lyrics. They stay in this browser only; each line gets furigana and can be played separately.",song_close:"Close",song_local_notice:"Full lyrics are not built in or uploaded. Pasted lyrics are saved only in this browser.",song_paste_label:"Paste Japanese lyrics",song_paste_placeholder:"One Japanese lyric line per row. Optional: lyric<Tab>your note.",song_save:"Save & add readings",song_clear:"Clear this song",song_clear_confirm:"Clear the locally saved lyrics for this song?",song_no_lyrics:"No lyrics yet. Paste Japanese lyrics you own, then save.",song_line_play:"Play this line",song_lines_count:"{0} lines",song_not_added:"Not added",song_reading_label:"Reading: ",song_translation_label:"Translation/note: ",grammar_practice_btn:"Start Practice",grammar_practice_title:"Practice",gp_submit:"Submit",gp_right:"Right: ",gp_answer:"Answer: ",gp_wrong:"Wrong. ",gp_again:"Try again",gp_summary_sub:"Total {0} \xB7 Correct {1} \xB7 Wrong {2}",gp_summary_time:"Time ",jlpt_level_label:"Level",jlpt_mode_label:"Study Type",jlpt_mode_quiz:"Quiz Mode",jlpt_mode_study:"Answer Study",jlpt_mode_progressive:"Progressive Study",jlpt_study_answer:"Study: ",jlpt_study_done:"Studied {0} questions",jlpt_progress_badge:"Progress {0} / {1}",jlpt_reset_progress:"Reset Study Progress",sentence_mode_label:"Study mode",sentence_mode_progressive:"Progressive study",sentence_mode_study:"Random study",sentence_mode_quiz_jp_zh:"Japanese\u2192Chinese",sentence_mode_quiz_zh_jp:"Chinese\u2192Japanese",sentence_reset_progress:"Reset 800-sentence progress",sentence_progress_badge:"800-sentence progress {0} / {1}",sentence_pattern_label:"Pattern: ",sentence_level_label:"Level: ",sentence_translation_label:"Translation: ",sentence_note_label:"Note: ",sentence_note_generic:"Study point: the key expression in this sentence is \u201C{0}\u201D. Read it with the translation and notice how it connects to the surrounding words.",sentence_why_not_label:"Why not the other forms:",sentence_quiz_jp_zh:"Choose the Chinese meaning of this Japanese sentence",sentence_quiz_zh_jp:"Choose the Japanese sentence for this Chinese meaning",sentence_study_answer:"Study: ",sentence_study_done:"Studied {0} sentences",no_questions:"No questions available",n2_cat_label:"Question Types (multi-select)",n2_kanji_reading:"Kanji Reading",n2_orthography:"Orthography",n2_context_vocab:"Contextual Vocab",n2_paraphrase:"Paraphrase",n2_usage:"Usage",n2_grammar:"Grammar",n2_q_reading:"What is the reading of the underlined word?",n2_q_ortho:"What is the kanji for the underlined word?",n2_q_context:"Choose the best word for the blank",n2_q_para:"Which is closest in meaning?",n2_q_usage:"Which sentence uses the word correctly?",n2_q_grammar:"Choose the best grammar for the blank",content_label:"Content (multi-select)",content_kana:"50 Kana",content_word:"Daily Words",content_kanji:"Kanji Words",content_wrong:"Wrong First",group_kana_title:"Kana Settings",group_word_title:"Daily Words Settings",group_kanji_title:"Kanji Words Settings",mode_type:"Mode",set_label:"Set",kana_mode_label:"Kana Mode",session_size_label:"Questions",other_options:"Options",kana_hira:"Hiragana",kana_kata:"Katakana",mode_rm_mc:"Romaji \u2192 Kana",mode_jp_mc:"Kana \u2192 Romaji",mode_rm_in:"Romaji Input",mode_jp_in:"Kana Input",mode_rm_mean:"Reading \u2192 Meaning",mode_mean_rm:"Meaning \u2192 Reading",word_relation_label:"Word Relations",mode_word_synonym:"Synonyms",mode_word_near:"Near Synonyms",mode_word_antonym:"Antonyms",mode_kanji_read:"Kanji \u2192 Reading",mode_read_kanji:"Reading \u2192 Kanji",mode_kanji_mean:"Kanji \u2192 Meaning",set_seion:"Seion",set_dakuon:"Dakuon",set_handakuon:"Handakuon",set_yoon:"Y\u014Don",start_btn:"Start Practice",word_match_new:"New round",word_match_invite:"Invite",word_match_guide_btn:"Tutorial",word_match_setup_title:"Before start",word_match_kana_label:"Left kana display",word_match_hira:"Hiragana",word_match_kata:"Katakana",word_match_difficulty:"Difficulty",word_match_easy:"Easy: starts at 1 column \xD7 3 rows",word_match_medium:"Medium: starts at 2 columns \xD7 3 rows",word_match_hard:"Hard: starts at 3 columns \xD7 3 rows",word_match_start_game:"Start game",word_match_select_one_kana:"Select at least one kana type.",word_match_guide_level:"Tutorial",word_match_guide_title:"Word Match tutorial",word_match_guide_prompt_0:"Tap the glowing kana on the left: \u306D\u3053.",word_match_guide_prompt_1:"Now tap the matching kanji on the right: \u732B.",word_match_guide_prompt_2:"The 1st pair is marked, not cleared yet. Continue with another kana.",word_match_guide_prompt_3:"After selecting it, tap the matching kanji: \u6C34.",word_match_guide_prompt_4:"Two pairs are marked. The color changed and chain multiplier is higher. Tap the glowing Next button to see time pressure.",word_match_guide_prompt_5:"As time runs down, marked tiles move faster. Tap Next to see scoring.",word_match_guide_prompt_6:"When the chain ends, all marked tiles burst together and refill.",word_match_guide_prompt_7:"Now try a wrong match: tap the glowing \u3084\u307E first.",word_match_guide_prompt_7b:"Now intentionally tap the wrong \u6C34 and watch the heart penalty.",word_match_guide_prompt_7c:"Wrong matches shake and cost one heart. Tap Next for tools.",word_match_guide_prompt_8:"Tutorial: tap the glowing bomb.",word_match_guide_prompt_8_pick:"Bomb armed. Now tap the glowing center tile, just like the real game, to choose the blast point.",word_match_guide_prompt_8b:"Bombs burst a wide area. Tap Next for magnifier.",word_match_guide_prompt_8c:"Tap the glowing magnifier.",word_match_guide_prompt_8d:"Magnifier marks 3 pairs as \u2460\u2461\u2462: same number and same color mean one pair, lasting 5 seconds. Tap Next to start.",word_match_guide_prompt_9:"Now start the real game.",word_match_guide_tool_prompt:"Tools will light up later.",word_match_guide_next:"Next",word_match_guide_basic:"Left side is kana reading; right side is the matching kanji/word. Pick one from each side. Correct pairs are marked first.",word_match_guide_chain:"After the 1st pair you have 8 seconds to find another; each extra pair shortens the window by 0.5s. Marked tiles move faster, then clear together for a high chain score.",word_match_guide_wrong:"A wrong match breaks the current chain and costs one heart. Lose all 5 hearts and it is GAME OVER.",word_match_guide_tools:"Bomb clears a 3\xD73 area from the center tile. Magnifier highlights 3 matching pairs in 3 colors for 5 seconds.",word_match_guide_score:"Score depends on word length, frequency, Combo, power multiplier, and chain size. Aim for a high score within 5 minutes.",word_match_guide_start:"Got it",word_match_goal:"Level",word_match_level_label:"Level {0} {1} cols \xD7 {2} rows",word_match_level_clear:"Level {0} clear!",word_match_level_clear_hint:"Cleared! Preparing next level...",word_match_power:"Power",word_match_goal_pairs:"Clear {0} pairs",word_match_goal_score:"Score {0}",word_match_goal_combo:"Combo {0}",word_match_goal_done_bonus:"Goal complete +15s Next \xD72",word_match_life_title:"Lives left {0}/5",word_match_life_empty:"No lives left",word_match_bomb_hint:"\u{1F4A3} Choose a center tile to clear the surrounding 3\xD73",word_match_invite_title:"Word Match - Japanese puzzle game",word_match_invite_text:"Try this Japanese word matching puzzle with chains, tools, and levels!",word_match_invite_copied:"Game invite link copied",word_match_music_toggle:"Background music",word_match_sfx_toggle:"Game sound effects",word_match_voice_toggle:"Reading voice",word_match_music_short:"Music",word_match_sfx_short:"SFX",word_match_voice_short:"Voice",word_match_special_seconds:"+{0}s",word_match_special_hint:"Hint",word_match_special_mult:"Next \xD72",word_match_start:"START",word_match_game_over:"GAME OVER",word_match_chain_tip:"First pair marked. Continue within 8s for chain multiplier",word_match_score:"Score",word_match_best:"Best",word_match_time:"Time",word_match_timeup:"Time up!",word_match_plus:"+",word_match_combo:"Combo",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"Reading",word_match_word:"Kanji",word_match_hint:"Left is reading, right is kanji. Correct pairs are marked first, then clear together when the chain ends.",word_match_complete:"Complete! All cleared.",hide_meaning:"Hide Meanings",reset_settings:"Reset Settings",reset_today:"Reset Today",clear_all:"Clear All",refresh_app:"Refresh/Update",refreshing_app:"Refreshing...",today_label:"Today: ",today_unit:" Q",correct_label:"Correct: ",wrong_label:"Wrong: ",done_label:"Done: ",rounds_unit:" rounds",round_prefix:"Round ",round_suffix:"",btn_back:"Exit",btn_next:"Next",btn_speak:"Play Audio",btn_speaking:"Playing",btn_check:"Submit",btn_answer:"Answer",btn_show:"Show Answer",btn_finish:"Finish",q_what_meaning:" \u2014 what does it mean?",q_how_read_meaning:'" \u2014 how to read?',q_how_read_meaning_pre:'"',q_how_read:" \u2014 how to read?",q_kanji_of:" \u2014 which kanji?",q_kana_of:" \u2014 which kana?",q_writing_of:" \u2014 how to write?",q_word_synonym:" \u2014 synonym?",q_word_near:" \u2014 near synonym?",q_word_antonym:" \u2014 antonym?",rel_synonym:"Synonym",rel_near:"Near synonym",rel_antonym:"Antonym",input_kana:"Type kana",input_romaji:"Type romaji",input_placeholder:"Type answer",result_correct:"Correct: ",result_wrong:"Wrong. Answer: ",result_wrong2:"Wrong. Answer: ",n2_original:"Original: ",n2_translation:"Translation: ",result_answer:"Answer: ",meaning_label:"Meaning: ",meaning_hidden:"Meaning: ***",alert_reset_settings:"Settings reset",alert_reset_today:"Today's stats reset",alert_clear_all:"All data cleared",alert_reset_jlpt_progress:"JLPT study progress reset",alert_reset_sentence_progress:"800-sentence study progress reset",confirm_clear_all:"Clear all stats and wrong records?",please_answer:"Please answer first!",please_input:"Please type an answer",ready:"Ready...",finish_done:"Done! Time: ",finish_acc:", Accuracy: ",data_error:"Failed to load data. Please access via HTTP server (e.g. GitHub Pages or local server)"}},rf="kana_quiz_lang",So=localStorage.getItem(rf)||"zh-CN";function C(n,...e){let i=(bo[So]||bo["zh-CN"])[n]??bo["zh-CN"][n]??n;return e.forEach((s,r)=>{i=i.replace(`{${r}}`,s)}),i}function xn(){return So}function af(n){bo[n]&&(So=n,localStorage.setItem(rf,n),To())}function To(){document.querySelectorAll("[data-i18n]").forEach(n=>{let e=n.getAttribute("data-i18n");if(n.tagName==="OPTION")n.textContent=C(e);else if(!(n.tagName==="INPUT"&&n.type==="checkbox"))if(n.tagName==="LABEL"){let t=n.querySelector("input");if(t){let i=C(e);n.textContent="",n.appendChild(t),n.append(" "+i)}else n.textContent=C(e)}else n.textContent=C(e)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(n=>{n.setAttribute("placeholder",C(n.getAttribute("data-i18n-placeholder")))}),document.title=C("title"),document.querySelectorAll(".lang-btn").forEach(n=>{n.classList.toggle("active",n.dataset.lang===So)})}var of=null,qs=null,Qt=!1,js=new TextEncoder,Ax=new TextDecoder;function Lr(){try{let n=new Uint32Array(1);return crypto.getRandomValues(n),n[0]>>>0}catch{let n=typeof performance<"u"&&performance.now?performance.now():0;return Date.now()>>>0^Math.trunc(n*1e3)>>>0}}function Pe(n){let e=Number(n)>>>0;return e?Lr()%e:null}function Zn(n){let e=Number(n)>>>0,t=Array.from({length:e},(i,s)=>s);for(let i=e-1;i>0;i-=1){let s=Lr()%(i+1);[t[i],t[s]]=[t[s],t[i]]}return t}function ln(){return of?.exports||null}function Xs(n){let e=ln();if(!e?.alloc||!qs)return null;let t=e.alloc(n.length);return new Uint8Array(qs.buffer,t,n.length).set(n),{ptr:t,len:n.length}}function Ks(n){let e=ln();if(!n||!e?.free_result||!qs)return"";let t=new Uint8Array(qs.buffer),i=t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24,s=t.slice(n+4,n+4+i);return e.free_result(n),Ax.decode(s)}async function cf(n="./wasm/furigana_engine.wasm"){if(!("WebAssembly"in window))return!1;try{let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`WASM load failed: ${e.status}`);let t=await e.arrayBuffer(),{instance:i}=await WebAssembly.instantiate(t,{});return of=i,qs=i.exports.memory,Qt=!!(qs&&i.exports.kana_reading&&i.exports.choice_indices&&i.exports.normalize_romaji&&i.exports.record_result&&i.exports.weighted_pick&&i.exports.pct_value&&i.exports.ranked_indices&&i.exports.start_session&&i.exports.inflected_surface&&i.exports.parse_song_lyrics),Qt}catch(e){return console.warn("WASM furigana engine unavailable; using JS fallback",e),Qt=!1,!1}}function lf(n,e){let t=ln();if(!Qt||!t?.kana_reading||!t?.dealloc)return null;let i=(e||[]).filter(c=>c?.kanji&&c?.reading).map(c=>`${c.kanji}	${c.reading}`).join(`
`),s=js.encode(String(n||"")),r=js.encode(i),a=Xs(s),o=Xs(r);if(!a||!o)return null;try{let c=t.kana_reading(a.ptr,a.len,o.ptr,o.len);return Ks(c)}finally{t.dealloc(a.ptr,a.len),t.dealloc(o.ptr,o.len)}}function kr(n,e,t,i=Lr()){let s=ln();if(!Qt||!s?.choice_indices)return null;let r=s.choice_indices(n>>>0,e>>>0,t>>>0,i>>>0),a=Ks(r);if(!a||!a.includes("|"))return null;let[o,c]=a.split("|"),l=o.split(",").filter(Boolean).map(d=>Number.parseInt(d,10)),u=Number.parseInt(c,10);return!l.length||!Number.isFinite(u)||u<0||u>=l.length||l.some(d=>!Number.isInteger(d)||d<0||d>=n)?null:{indices:l,correctSlot:u}}function Nr(n,e){let t=ln();return!Qt||!t?.is_correct_choice?null:t.is_correct_choice(Number(n)|0,Number(e)|0)===1}function uf(n,e){let t=ln();if(!Qt||!t?.pct_value)return null;let i=t.pct_value(n>>>0,e>>>0);return Ks(i)}function Eo(n,e=Lr()){let t=ln();if(!Qt||!t?.weighted_pick||!t?.dealloc)return null;let i=(n||[]).map(a=>Math.max(0,Number(a)||0)).join(","),s=js.encode(i),r=Xs(s);if(!r)return null;try{let a=t.weighted_pick(r.ptr,r.len,e>>>0);return Number.isInteger(a)&&a>=0&&a<n.length?a:null}finally{t.dealloc(r.ptr,r.len)}}function hf(n,e,t,i){let s=ln();if(!Qt||!s?.word_match_score)return null;let r=s.word_match_score(n>>>0,e>>>0,t>>>0,i>>>0);return Number.isFinite(r)?Number(r):null}function df(n,e){let t=ln();if(!Qt||!t?.word_match_remaining)return null;let i=t.word_match_remaining(n>>>0,e>>>0);return Number.isFinite(i)?Number(i):null}function ff(n,e){let t=ln();return!Qt||!t?.word_match_is_match?null:t.word_match_is_match(n>>>0,e>>>0)===1}function Xl(n,e,t=Lr()){let i=ln();if(!Qt||!i?.word_match_indices)return null;let s=i.word_match_indices(n>>>0,e>>>0,t>>>0),r=Ks(s);if(!r)return[];let a=r.split(",").filter(Boolean).map(o=>Number.parseInt(o,10));return a.every(o=>Number.isInteger(o)&&o>=0&&o<n)?a:null}function pf(n,e){let t=ln();if(!Qt||!t?.inflected_surface||!t?.dealloc)return null;let i=js.encode(String(n||"")),s=js.encode(String(e||"")),r=Xs(i),a=Xs(s);if(!r||!a)return null;try{let o=t.inflected_surface(r.ptr,r.len,a.ptr,a.len),c=Ks(o);if(!c||!c.includes("|"))return null;let[l,u]=c.split("|");return l&&u?{stem:l,surface:u}:null}finally{t.dealloc(r.ptr,r.len),t.dealloc(a.ptr,a.len)}}function mf(n){let e=ln();if(!Qt||!e?.parse_song_lyrics||!e?.dealloc)return null;let t=js.encode(String(n||"")),i=Xs(t);if(!i)return null;try{let s=e.parse_song_lyrics(i.ptr,i.len),r=Ks(s);return r?r.split(`
`).filter(Boolean).map(a=>{let[o,...c]=a.split("	");return{jp:(o||"").trim(),note:c.join(" ").trim()}}).filter(a=>a.jp):[]}finally{e.dealloc(i.ptr,i.len)}}var Bf=cf("./wasm/furigana_engine.wasm").catch(()=>!1),U=n=>document.getElementById(n),h={moduleScreen:U("moduleScreen"),gamesScreen:U("gamesScreen"),cultivateScreen:U("cultivateScreen"),bladeKingScreen:U("bladeKingScreen"),settingsScreen:U("settingsScreen"),quizScreen:U("quizScreen"),grammarScreen:U("grammarScreen"),grammarTopicScreen:U("grammarTopicScreen"),songsScreen:U("songsScreen"),wordMatchScreen:U("wordMatchScreen"),grammarTopics:U("grammarTopics"),grammarContent:U("grammarContent"),grammarTopicTitle:U("grammarTopicTitle"),btnGrammarBack:U("btnGrammarBack"),btnGrammarTopicBack:U("btnGrammarTopicBack"),btnGrammarPractice:U("btnGrammarPractice"),grammarPracticeScreen:U("grammarPracticeScreen"),btnGrammarPracticeBack:U("btnGrammarPracticeBack"),gpHint:U("gpHint"),gpQ:U("gpQ"),gpOpts:U("gpOpts"),gpResult:U("gpResult"),btnGpNext:U("btnGpNext"),btnGpSubmit:U("btnGpSubmit"),gpProgressFill:U("gpProgressFill"),gpDone:U("gpDone"),gpTotal:U("gpTotal"),gpOk:U("gpOk"),gpNg:U("gpNg"),songsList:U("songsList"),songDetail:U("songDetail"),songDetailTitle:U("songDetailTitle"),songDetailMeta:U("songDetailMeta"),songLyricsInput:U("songLyricsInput"),songLines:U("songLines"),btnSongsBack:U("btnSongsBack"),btnSongClose:U("btnSongClose"),btnSongSave:U("btnSongSave"),btnSongClear:U("btnSongClear"),settingsTitle:U("settingsTitle"),btnBackToModules:U("btnBackToModules"),settingsKana:U("settingsKana"),settingsWord:U("settingsWord"),settingsKanji:U("settingsKanji"),settingsN2:U("settingsN2"),settingsSentence:U("settingsSentence"),q:U("q"),meaning:U("meaning"),opts:U("opts"),inputWrap:U("inputWrap"),inp:U("inp"),result:U("result"),modeChecksKana:U("modeChecksKana"),modeChecksWord:U("modeChecksWord"),modeChecksKanji:U("modeChecksKanji"),modeChecks:U("modeChecks"),n2CatChecks:U("n2CatChecks"),jlptLevelChecks:U("jlptLevelChecks"),jlptModeChecks:U("jlptModeChecks"),btnResetJlptProgress:U("btnResetJlptProgress"),sentenceModeChecks:U("sentenceModeChecks"),btnResetSentenceProgress:U("btnResetSentenceProgress"),kanaSetChecks:U("kanaSetChecks"),kanaMode:U("kanaMode"),sessionSize:U("sessionSize"),hideMeaning:U("hideMeaning"),wrongFirst:U("wrongFirst"),btnNew:U("btnNew"),btnSpeak:U("btnSpeak"),btnCheck:U("btnCheck"),btnShow:U("btnShow"),btnStartSession:U("btnStartSession"),btnBack:U("btnBack"),btnResetSettings:U("btnResetSettings"),btnResetDay:U("btnResetDay"),btnRefreshApp:U("btnRefreshApp"),btnResetAllStats:U("btnResetAllStats"),btnGamesBack:U("btnGamesBack"),btnCultivateBack:U("btnCultivateBack"),btnCultivateReset:U("btnCultivateReset"),cultivateSetup:U("cultivateSetup"),cultivateUseHira:U("cultivateUseHira"),cultivateUseKata:U("cultivateUseKata"),cultivateUseKanji:U("cultivateUseKanji"),btnCultivateStart:U("btnCultivateStart"),cultivateSetupHint:U("cultivateSetupHint"),btnCultivateTrain:U("btnCultivateTrain"),btnCultivateChallenge:U("btnCultivateChallenge"),btnCultivateEquip:U("btnCultivateEquip"),cultivateRealm:U("cultivateRealm"),cultivateExpText:U("cultivateExpText"),cultivateExpFill:U("cultivateExpFill"),cultivatePower:U("cultivatePower"),cultivateJade:U("cultivateJade"),cultivateStage:U("cultivateStage"),cultivateEquip:U("cultivateEquip"),cultivateDrop:U("cultivateDrop"),cultivateInsight:U("cultivateInsight"),cultivateInsightQ:U("cultivateInsightQ"),cultivateInsightOptions:U("cultivateInsightOptions"),cultivateEnemy:U("cultivateEnemy"),cultivateEnemyPower:U("cultivateEnemyPower"),cultivateLog:U("cultivateLog"),btnBladeBack:U("btnBladeBack"),btnBladeNew:U("btnBladeNew"),bladeCanvas:U("bladeCanvas"),bladeOverlay:U("bladeOverlay"),bladeScore:U("bladeScore"),bladeKnives:U("bladeKnives"),bladeLevel:U("bladeLevel"),bladeTime:U("bladeTime"),btnWordMatchBack:U("btnWordMatchBack"),btnWordMatchNew:U("btnWordMatchNew"),btnWordMatchMusic:U("btnWordMatchMusic"),btnWordMatchSfx:U("btnWordMatchSfx"),btnWordMatchVoice:U("btnWordMatchVoice"),btnWordMatchInvite:U("btnWordMatchInvite"),btnWordMatchGuide:U("btnWordMatchGuide"),btnWordMatchBomb:U("btnWordMatchBomb"),btnWordMatchMagnifier:U("btnWordMatchMagnifier"),wmSetup:U("wmSetup"),wmKanaHira:U("wmKanaHira"),wmKanaKata:U("wmKanaKata"),btnWordMatchStart:U("btnWordMatchStart"),wmSetupHint:U("wmSetupHint"),wmScore:U("wmScore"),wmLeft:U("wmLeft"),wmWrong:U("wmWrong"),wmTime:U("wmTime"),wmCombo:U("wmCombo"),wmGoal:U("wmGoal"),wmPower:U("wmPower"),wmTools:U("wmTools"),wmLives:U("wmLives"),wmReadings:U("wmReadings"),wmWords:U("wmWords"),wmMessage:U("wmMessage"),wmOverlay:U("wmOverlay"),wmGuide:U("wmGuide"),wmGuideClose:U("wmGuideClose"),wmGuideStart:U("wmGuideStart"),wmGuidePrompt:U("wmGuidePrompt"),wmGuideScore:U("wmGuideScore"),wmGuideCombo:U("wmGuideCombo"),wmGuideHearts:U("wmGuideHearts"),wmGuideToolLabel:U("wmGuideToolLabel"),s_done:U("s_done"),s_size:U("s_size"),s_ok:U("s_ok"),s_ng:U("s_ng"),streak:U("streak"),progressFill:U("progressFill"),timer:U("timer"),s_acc_display:U("s_acc_display"),d_total_start:U("d_total_start"),d_ok_start:U("d_ok_start"),d_ng_start:U("d_ng_start"),d_rounds_start:U("d_rounds_start"),s_round:U("s_round"),d_total:U("d_total"),d_ok:U("d_ok"),d_ng:U("d_ng"),d_acc:U("d_acc"),s_acc:U("s_acc"),tips:U("tips")},G=Dd(),ge=ao(),Oe={kana:[],words:[],wordRelations:[],kanji:[],sentences:[],songs:[],n2Questions:[],jlptBanks:{},meanings:{},furiganaExtra:{}},$=null,mt=!1,Dt=G.module||"kana",sr=[],fu=[],ti=new Set,Pi=new Set,Se=null,Ci=null,wn=null,Br=0,Js=null,ni=null,Zi=null,Ro=0,Kl=null,we=0,Ql=null,pu=3,eu=4;function ts(n="",e=""){h.wmOverlay&&(h.wmOverlay.textContent=n,h.wmOverlay.className=`wm-overlay${n?"":" hide"}${e?" "+e:""}`,h.wmOverlay.setAttribute("aria-hidden",n?"false":"true"))}function or(n=""){h.wmOverlay&&(!n||h.wmOverlay.classList.contains(n))&&ts("")}function _f(n){n&&(n.chainActive=!1,n.chainDeadline=0,n.chainMultiplier=1,n.chainCount=0,n.chainPendingPairs=[],n.chainPendingBaseIds=new Set,n.chainPendingIds=new Set,or("chain"))}function Cx(n){return`chain-mark-${Math.min(6,Math.max(1,Number(n)||1))}`}function Rx(){let n=Se;if(!n||!n.chainActive||n.finished)return!1;if(n.busy)return!0;let e=(n.chainDeadline||0)-Date.now();if(e<=0)return tu(),!1;let t=Math.max(.12,Math.min(1.35,.16+e/7e3));return document.querySelectorAll("#wordMatchScreen .wm-tile.paired").forEach(i=>i.style.setProperty("--wm-chain-speed",`${t}s`)),or("chain"),!0}function Px(){let n=Se;if(!n)return 1;let e=n.chainActive&&Date.now()<=(n.chainDeadline||0);n.chainCount=e?(n.chainCount||1)+1:1,n.chainMultiplier=Math.min(64,2**Math.max(0,n.chainCount-1)),n.chainActive=!0;let t=Math.max(0,8500-n.chainCount*500);return n.chainDeadline=Date.now()+t,n.chainMultiplier}function zf(n){if(!n||n.guideMode)return!1;let e=new Set([...n.leftSlots||[],...n.rightSlots||[]].map(i=>i._wmBaseId));if(!e.size)return!1;let t=n.chainPendingBaseIds||new Set;return[...e].every(i=>t.has(i))}function tu(){let n=Se;if(!n)return;let e=Array.isArray(n.chainPendingPairs)?n.chainPendingPairs.slice():[];if(!e.length){_f(n),ht();return}let t=new Set,i=new Set,s=zf(n),r=0,a="";e.forEach((l,u)=>{i.add(l.baseId),t.add(l.leftId),t.add(l.rightId);let d=Math.min(64,2**u);r+=Math.round((l.baseGain||10)*(l.comboMult||1)*(l.powerMult||1)*d)+(l.fastBonus||0);let f=fw(n,l.specialItem);f&&(a=a?`${a} ${f}`:f)}),s&&(r*=2),n.busy=!0,n.lastGain=r,n.score+=r;let o=ap(n);mp(n.score),n.removingIds=t,op(t),n.selectedReading=null,n.selectedWord=null,n.selectedAt=0,n.lastNudgeAt=0,or("chain"),Ee(cn),Fo("wm-hit");let c=e[e.length-1]?.rightId||e[0]?.leftId;Gr(c,Math.min(70,22+e.length*12)),Su(c,`+${r}${e.length>1?" \xD7"+e.length:""}${s?" ALL\xD72":""}${a?" "+a:""}${o?" \u2605":""}`,e.length>1||a||o?"special":""),ht(),setTimeout(()=>{n.leftSlots=(n.leftSlots||[]).filter(l=>!i.has(l._wmBaseId)),n.rightSlots=(n.rightSlots||[]).filter(l=>!i.has(l._wmBaseId)),n.removingIds.clear(),_f(n),n.finiteLevel||Ru(n),!sp(n)&&(n.droppingIds=new Set([...n.leftSlots||[],...n.rightSlots||[]].map(l=>l._wmId)),Ee(mo),ht(),setTimeout(()=>{Se&&(n.droppingIds.clear(),n.busy=!1,ht())},430))},430)}function ss(n){let e=Math.floor(n/60),t=n%60;return`${e}:${t.toString().padStart(2,"0")}`}function Ix(){ni=Date.now(),Js&&clearInterval(Js),Js=setInterval(()=>{let n=Math.floor((Date.now()-ni)/1e3);h.timer.textContent=ss(n)},1e3),h.timer.textContent="0:00"}function Ri(){Js&&(clearInterval(Js),Js=null)}function Dr(n){return[...n.querySelectorAll('input[type="checkbox"]:checked')].map(e=>e.value)}function Ys(n,e){let t=new Set(e);n.querySelectorAll('input[type="checkbox"]').forEach(i=>{i.checked=t.has(i.value)})}function Lx(n,e,t,i){let s=parseInt(n,10);return Number.isFinite(s)?Math.max(e,Math.min(t,s)):i}var nu={kana:"mod_kana",word:"mod_word",kanji:"mod_kanji",n2:"mod_n2",sentence:"mod_sentence",songs:"mod_songs",wordMatch:"mod_word_match"},kx={kanji_reading:"n2_q_reading",orthography:"n2_q_ortho",context_vocab:"n2_q_context",paraphrase:"n2_q_para",usage:"n2_q_usage",grammar:"n2_q_grammar"},Nx={kanji_reading:"n2_kanji_reading",orthography:"n2_orthography",context_vocab:"n2_context_vocab",paraphrase:"n2_paraphrase",usage:"n2_usage",grammar:"n2_grammar"},Hf=["kanji_reading","orthography","context_vocab","paraphrase","usage","grammar"],Dx=["word_synonym","word_near","word_antonym"],Ux=[["\u81EA\u5206","\u3058\u3076\u3093"],["\u7121\u4E8B","\u3076\u3058"],["\u53CB\u4EBA","\u3086\u3046\u3058\u3093"],["\u5BB6\u65CF","\u304B\u305E\u304F"],["\u5834\u5408","\u3070\u3042\u3044"],["\u7406\u7531","\u308A\u3086\u3046"],["\u65B9\u6CD5","\u307B\u3046\u307B\u3046"],["\u7D50\u679C","\u3051\u3063\u304B"],["\u5FC5\u8981","\u3072\u3064\u3088\u3046"],["\u91CD\u8981","\u3058\u3085\u3046\u3088\u3046"],["\u554F\u984C","\u3082\u3093\u3060\u3044"],["\u610F\u5473","\u3044\u307F"],["\u8A00\u8449","\u3053\u3068\u3070"],["\u6642\u9593","\u3058\u304B\u3093"],["\u4ED5\u4E8B","\u3057\u3054\u3068"],["\u4F1A\u8B70","\u304B\u3044\u304E"],["\u4E88\u5B9A","\u3088\u3066\u3044"],["\u8CC7\u6599","\u3057\u308A\u3087\u3046"],["\u8AAC\u660E","\u305B\u3064\u3081\u3044"],["\u78BA\u8A8D","\u304B\u304F\u306B\u3093"],["\u9023\u7D61","\u308C\u3093\u3089\u304F"],["\u96FB\u8A71","\u3067\u3093\u308F"],["\u90E8\u5C4B","\u3078\u3084"],["\u6599\u7406","\u308A\u3087\u3046\u308A"],["\u98DF\u4E8B","\u3057\u3087\u304F\u3058"],["\u5929\u6C17","\u3066\u3093\u304D"],["\u65C5\u884C","\u308A\u3087\u3053\u3046"],["\u5199\u771F","\u3057\u3083\u3057\u3093"],["\u6620\u753B","\u3048\u3044\u304C"],["\u97F3\u697D","\u304A\u3093\u304C\u304F"],["\u65B0\u805E","\u3057\u3093\u3076\u3093"],["\u56F3\u66F8\u9928","\u3068\u3057\u3087\u304B\u3093"],["\u75C5\u9662","\u3073\u3087\u3046\u3044\u3093"],["\u9280\u884C","\u304E\u3093\u3053\u3046"],["\u5E97\u54E1","\u3066\u3093\u3044\u3093"],["\u99C5\u54E1","\u3048\u304D\u3044\u3093"],["\u65E5\u672C","\u306B\u307B\u3093"],["\u65E5\u672C\u8A9E","\u306B\u307B\u3093\u3054"],["\u4E2D\u56FD","\u3061\u3085\u3046\u3054\u304F"],["\u97D3\u56FD","\u304B\u3093\u3053\u304F"],["\u82F1\u8A9E","\u3048\u3044\u3054"],["\u6771\u4EAC","\u3068\u3046\u304D\u3087\u3046"],["\u5927\u962A","\u304A\u304A\u3055\u304B"],["\u4EAC\u90FD","\u304D\u3087\u3046\u3068"],["\u5FD8\u308C\u308B","\u308F\u3059\u308C\u308B"],["\u899A\u3048\u308B","\u304A\u307C\u3048\u308B"],["\u6559\u3048\u308B","\u304A\u3057\u3048\u308B"],["\u4F1D\u3048\u308B","\u3064\u305F\u3048\u308B"],["\u8003\u3048\u308B","\u304B\u3093\u304C\u3048\u308B"],["\u7B54\u3048\u308B","\u3053\u305F\u3048\u308B"],["\u5909\u3048\u308B","\u304B\u3048\u308B"],["\u5E30\u308B","\u304B\u3048\u308B"],["\u59CB\u3081\u308B","\u306F\u3058\u3081\u308B"],["\u7D9A\u3051\u308B","\u3064\u3065\u3051\u308B"],["\u7D42\u308F\u308B","\u304A\u308F\u308B"],["\u623B\u308B","\u3082\u3069\u308B"],["\u9032\u3080","\u3059\u3059\u3080"],["\u901A\u3046","\u304B\u3088\u3046"],["\u9045\u308C\u308B","\u304A\u304F\u308C\u308B"],["\u6B8B\u308B","\u306E\u3053\u308B"],["\u63A2\u3059","\u3055\u304C\u3059"],["\u898B\u3064\u3051\u308B","\u307F\u3064\u3051\u308B"],["\u5C4A\u304F","\u3068\u3069\u304F"],["\u9810\u3051\u308B","\u3042\u305A\u3051\u308B"],["\u8A8D\u3081\u308B","\u307F\u3068\u3081\u308B"],["\u8FF0\u3079\u308B","\u306E\u3079\u308B"],["\u9078\u3076","\u3048\u3089\u3076"],["\u6C7A\u3081\u308B","\u304D\u3081\u308B"],["\u4F7F\u3046","\u3064\u304B\u3046"],["\u4F5C\u308B","\u3064\u304F\u308B"],["\u6301\u3064","\u3082\u3064"],["\u5F85\u3064","\u307E\u3064"],["\u8CB7\u3046","\u304B\u3046"],["\u58F2\u308B","\u3046\u308B"],["\u8AAD\u3080","\u3088\u3080"],["\u66F8\u304F","\u304B\u304F"],["\u805E\u304F","\u304D\u304F"],["\u8A71\u3059","\u306F\u306A\u3059"],["\u8A00\u3046","\u3044\u3046"],["\u898B\u308B","\u307F\u308B"],["\u6765\u308B","\u304F\u308B"],["\u884C\u304F","\u3044\u304F"],["\u98DF\u3079\u308B","\u305F\u3079\u308B"],["\u98F2\u3080","\u306E\u3080"],["\u5165\u308B","\u306F\u3044\u308B"],["\u51FA\u308B","\u3067\u308B"],["\u6FC0\u3057\u3044","\u306F\u3052\u3057\u3044"],["\u7D20\u6674\u3089\u3057\u3044","\u3059\u3070\u3089\u3057\u3044"],["\u65B0\u3057\u3044","\u3042\u305F\u3089\u3057\u3044"],["\u53E4\u3044","\u3075\u308B\u3044"],["\u9AD8\u3044","\u305F\u304B\u3044"],["\u5B89\u3044","\u3084\u3059\u3044"],["\u8FD1\u3044","\u3061\u304B\u3044"],["\u9060\u3044","\u3068\u304A\u3044"],["\u65E9\u3044","\u306F\u3084\u3044"],["\u901F\u3044","\u306F\u3084\u3044"],["\u9045\u3044","\u304A\u305D\u3044"]];function Zs(n){return Dx.includes(n)}function ke(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function rr(n){return/[\u4e00-\u9fff々]/.test(String(n||""))}function Vf(n){return/[ァ-ヺー]/.test(String(n||""))}function Ox(n){return String(n||"").replace(/[ァ-ヶ]/g,e=>String.fromCharCode(e.charCodeAt(0)-96))}function Gf(n,e){let t=n.slice(e).match(/^[ァ-ヺー]+/);if(!t)return null;let i=t[0];return!i||/^ー+$/.test(i)?null:{surface:i,reading:Ox(i)}}function Po(n,e,t=""){return!n||!e||!rr(n)&&!Vf(n)?ke(n||""):`<ruby${t?` class="${t}"`:""}>${ke(n)}<rt>${ke(e)}</rt></ruby>`}function Ei(n,e,t){!e||!t||!rr(e)||e.length>18||t.length>32||/^[ぁ-ゖァ-ヺー]+$/.test(t)&&(n.has(e)||n.set(e,t))}function mu(n){let e=n.kanji.match(/^([\u4e00-\u9fff々]+)([ぁ-ゖァ-ヺー]+)$/);if(!e||!n.reading.endsWith(e[2]))return null;let t=n.reading.slice(0,-e[2].length);return t?{stem:e[1],baseTail:e[2],readingStem:t}:null}function Wf(n,e,t){if(!t||!n.startsWith(t.stem,e))return null;let s=n.slice(e+t.stem.length).match(/^[ぁ-ゖァ-ヺー]+/)?.[0]||"",r=jf(s,!1);return!r||r===t.baseTail?null:{surface:`${t.stem}${r}`,reading:`${t.readingStem}${r}`}}function $f(n){let e=[];if(!n||!Array.isArray(n.options)||typeof n.answer!="number")return e;let t=n.options[n.answer]||"";return n.cat==="kanji_reading"?(n.target&&t&&e.push({kanji:n.target,reading:t}),n._targetSurface&&t&&e.push({kanji:n._targetSurface,reading:t})):n.cat==="orthography"&&n.target&&t&&e.push({kanji:t,reading:n.target}),e}function iu(){let n=new Map;(Oe.kanji||[]).forEach(e=>{Ei(n,e.kanji,e.hira)}),Ux.forEach(([e,t])=>Ei(n,e,t)),Object.entries(Oe.furiganaExtra||{}).forEach(([e,t])=>{Ei(n,e,t)}),Object.values(Oe.jlptBanks||{}).flat().forEach(e=>{if(!e||!Array.isArray(e.options)||typeof e.answer!="number")return;let t=e.options[e.answer]||"";if(e.cat==="kanji_reading"){Ei(n,e.target,t);let i=gu(e);if(i&&e.target){let s=i.stem,r=e.target.slice(s.length),a=i.surface.slice(s.length);Ei(n,i.surface,Xf(t,r,a))}}else e.cat==="orthography"&&Ei(n,t,e.target)}),sr=[...n.entries()].map(([e,t])=>({kanji:e,reading:t})).sort((e,t)=>t.kanji.length-e.kanji.length),fu=sr.map(mu).filter(Boolean).sort((e,t)=>t.stem.length-e.stem.length||t.baseTail.length-e.baseTail.length)}function en(n,e=[],t={}){let i=String(n||"");if(!i)return"";if(!rr(i)&&!Vf(i))return ke(i);let s=Array.isArray(t.skip)?t.skip.filter(Boolean):[],r=Array.isArray(e)&&e.length>0,a=sr,o=fu;if(r){let d=new Map;[...e,...sr].forEach(f=>Ei(d,f.kanji,f.reading)),a=[...d.entries()].map(([f,p])=>({kanji:f,reading:p})).sort((f,p)=>p.kanji.length-f.kanji.length),o=a.map(mu).filter(Boolean).sort((f,p)=>p.stem.length-f.stem.length||p.baseTail.length-f.baseTail.length)}let c=a.filter(d=>i.includes(d.kanji)).sort((d,f)=>f.kanji.length-d.kanji.length),l=o.filter(d=>i.includes(d.stem)),u="";for(let d=0;d<i.length;){let f=s.find(g=>g&&i.startsWith(g,d));if(f){u+=ke(f),d+=f.length;continue}let p=c.find(g=>i.startsWith(g.kanji,d));if(p)u+=Po(p.kanji,p.reading),d+=p.kanji.length;else{let g=l.map(v=>Wf(i,d,v)).find(Boolean);if(g)u+=Po(g.surface,g.reading),d+=g.surface.length;else{let v=Gf(i,d);v?(u+=Po(v.surface,v.reading,"kata-ruby"),d+=v.surface.length):(u+=ke(i[d]),d+=1)}}}return u}function _u(n){return n?.kanji?n.hira?Po(n.kanji,n.hira):en(n.kanji):""}function qf(n,e="speak"){if(!n)return"";if(n.cat==="usage")return e==="full"&&n.options[n.answer]||"";let t=n.sentence||"",i=n.options[n.answer]||"",s=/[（(][\s　_＿]+[)）]|＿+|_{2,}/g,r=s.test(t);if(s.lastIndex=0,r){let a=e==="full"?i:"B";t=t.replace(s,a)}else e==="full"&&n.cat==="orthography"&&n.target&&i&&(t=t.replace(n.target,i));return t}function Fx(n){return String(n).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var Bx=["\u307E\u305B\u3093\u3067\u3057\u305F","\u3066\u3057\u307E\u3044\u307E\u3057\u305F","\u3067\u3057\u307E\u3044\u307E\u3057\u305F","\u3066\u3057\u307E\u3063\u305F","\u3067\u3057\u307E\u3063\u305F","\u3066\u304F\u3060\u3055\u3044","\u3067\u304F\u3060\u3055\u3044","\u3089\u308C\u306A\u304B\u3063\u305F","\u308C\u306A\u304B\u3063\u305F","\u3055\u305B\u3089\u308C\u305F","\u3055\u305B\u3089\u308C\u308B","\u3055\u305B\u306A\u304B\u3063\u305F","\u305B\u306A\u304B\u3063\u305F","\u306A\u3051\u308C\u3070","\u306A\u304B\u3063\u305F","\u306A\u3044\u3067","\u306A\u304F\u3066","\u306A\u3044","\u306A\u304F","\u305A\u306B","\u3066\u3044\u307E\u3059","\u3067\u3044\u307E\u3059","\u3066\u3044\u307E\u3057\u305F","\u3067\u3044\u307E\u3057\u305F","\u3066\u3044\u308B","\u3067\u3044\u308B","\u3066\u3044\u305F","\u3067\u3044\u305F","\u3089\u308C\u307E\u3059","\u3089\u308C\u307E\u3057\u305F","\u3089\u308C\u308B","\u3089\u308C\u305F","\u308C\u307E\u3059","\u308C\u307E\u3057\u305F","\u308C\u308B","\u308C\u305F","\u3055\u305B\u308B","\u3055\u305B\u305F","\u305B\u308B","\u305B\u305F","\u307E\u3057\u305F","\u307E\u305B\u3093","\u307E\u3059","\u307E\u3057\u3087\u3046","\u305F\u3044","\u305F\u304B\u3063\u305F","\u304B\u3063\u305F\u3089","\u304B\u3063\u305F","\u304F\u306A\u304B\u3063\u305F","\u304F\u306A\u3044","\u304F\u3066","\u3057\u304F\u3066","\u3068\u3057\u305F","\u3068\u3057\u3066","\u306B\u306A\u3063\u305F","\u306B\u306A\u308B","\u3060\u3063\u305F","\u3067\u3057\u305F","\u3063\u3066\u3044\u308B","\u3063\u3066\u3044\u305F","\u3063\u3066\u304F\u3060\u3055\u3044","\u3063\u3066\u3057\u307E\u3063\u305F","\u3063\u3066\u3057\u307E\u3046","\u3063\u305F\u3089","\u3063\u305F","\u3063\u3066","\u3093\u3060\u3089","\u3093\u3060","\u3093\u3067","\u3044\u305F\u3089","\u3044\u305F","\u3044\u3066","\u3044\u3060\u3089","\u3044\u3060","\u3044\u3067","\u3057\u305F\u3089","\u3057\u305F","\u3057\u3066","\u305F\u3089","\u3060\u3089","\u308C\u3070","\u3051\u3070","\u3052\u3070","\u305B\u3070","\u3081\u3070","\u3079\u3070","\u306D\u3070","\u3088\u3046","\u308D\u3046","\u304F","\u305A","\u306C","\u305F","\u3060","\u3066","\u3067"];function jf(n,e=!0){if(!n)return"";let t="";for(let i=1;i<=n.length;i++){let s=n.slice(0,i);Bx.some(r=>s.endsWith(r))&&(t=s)}return t||(e?n:"")}function gu(n){if(!n||n.cat!=="kanji_reading"||!n.sentence||!n.target||n.sentence.includes(n.target))return null;let e=pf(n.sentence,n.target);if(e)return e;let t=n.target.match(/^([\u4e00-\u9fff々]+)/);if(!t)return null;let i=t[1],s=n.sentence.match(new RegExp(`${Fx(i)}[\u3041-\u3096\u30A1-\u30FA\u30FC]*`));if(!s||!s[0]||s[0]===n.target)return null;let r=s[0].slice(i.length),a=jf(r),o=`${i}${a}`;return!o||o===n.target?null:{stem:i,surface:o}}function Xf(n,e,t){return!n||!e||!t||e===t?n:n.endsWith(e)?`${n.slice(0,-e.length)}${t}`:n}function zx(n){let e=gu(n);if(!e||!Array.isArray(n.options)||typeof n.answer!="number")return n;let t=n.target.slice(e.stem.length),i=e.surface.slice(e.stem.length),s=n.options.map(o=>Xf(o,t,i)),r=n.options[n.answer]||"",a=s[n.answer]||r;return!a||a===r?{...n,_targetSurface:e.surface}:{...n,options:s,_targetSurface:e.surface,_baseTarget:n.target,_baseAnswer:r,explanation:`\u300C${e.surface}\u300D\u8BFB\u4F5C\u300C${a}\u300D\u3002\u539F\u5F62\u300C${n.target}\u300D\u8BFB\u4F5C\u300C${r}\u300D\u3002`,explanation_zh_TW:`\u300C${e.surface}\u300D\u8B80\u4F5C\u300C${a}\u300D\u3002\u539F\u5F62\u300C${n.target}\u300D\u8B80\u4F5C\u300C${r}\u300D\u3002`,explanation_ja:`\u300C${e.surface}\u300D\u306F\u300C${a}\u300D\u3068\u8AAD\u307F\u307E\u3059\u3002\u8F9E\u66F8\u5F62\u300C${n.target}\u300D\u306F\u300C${r}\u300D\u3067\u3059\u3002`,explanation_en:`Read \u300C${e.surface}\u300D as \u300C${a}\u300D. The dictionary form \u300C${n.target}\u300D is read \u300C${r}\u300D.`}}function gf(n,e){if(!n)return"";let t=xn().replace("-","_");return n[`${e}_${t}`]||n[e]||""}function Hx(n,e=""){return n?n.sentence?n.sentence:n.cat==="usage"&&(e||n.options?.[n.answer])||"":""}function ko(n,e,t="result_answer"){let i=Hx(n,e),s=gf(n,"translation"),r=gf(n,"explanation"),a=$f(n),o=en(e,a),c=en(i,a),l=s?`<div class="n2-translation">${i?`${C("n2_original")}${c}<br>`:""}${C("n2_translation")}${ke(s)}</div>`:"",u=r?`<div class="n2-expl">${ke(r)}</div>`:"";return`${C(t)}<b>${o}</b>${l}${u}`}function Ut(n){if(!n.meaning)return"";let e=xn();if(e==="zh-CN")return n.meaning;let t=n[`meaning_${e.replace("-","_")}`];if(t)return t;let i=Oe.meanings[e];return i&&i[n.rm]?i[n.rm]:n.meaning}function No(n){if(n==="games"){Dt=n,G.module=n,pt(G),St(h.gamesScreen);return}if(n==="grammar"){St(h.grammarScreen);return}if(n==="wordMatch"){Dt=n,G.module=n,pt(G),St(h.wordMatchScreen),au();return}if(n==="cultivate"){Dt=n,G.module="games",pt(G),St(h.cultivateScreen),hn(),Wx();return}if(n==="bladeKing"){Dt=n,G.module="games",pt(G);try{location.hash!=="#bladeKing"&&history.replaceState(null,"","#bladeKing")}catch{}St(h.bladeKingScreen),Lu();return}if(n==="songs"){Dt=n,G.module=n,pt(G),Wo(),St(h.songsScreen);return}Dt=n,G.module=n,pt(G),h.settingsTitle.setAttribute("data-i18n",nu[n]),h.settingsTitle.textContent=C(nu[n]),h.settingsKana.classList.toggle("hide",n!=="kana"),h.settingsWord.classList.toggle("hide",n!=="word"),h.settingsKanji.classList.toggle("hide",n!=="kanji"),h.settingsN2.classList.toggle("hide",n!=="n2"),h.settingsSentence.classList.toggle("hide",n!=="sentence"),vu(),St(h.settingsScreen)}function vu(){Ys(h.modeChecksKana,G.modesKana),Ys(h.modeChecksWord,G.modesWord),Ys(h.modeChecksKanji,G.modesKanji),Ys(h.n2CatChecks,G.n2Cats),Ys(h.kanaSetChecks,G.kanaSets);let n=G.jlptLevel||"n2";h.jlptLevelChecks.querySelectorAll('input[type="radio"]').forEach(i=>{i.checked=i.value===n});let e=G.jlptMode||"quiz";h.jlptModeChecks?.querySelectorAll('input[type="radio"]').forEach(i=>{i.checked=i.value===e});let t=G.sentenceMode||"progressive";h.sentenceModeChecks?.querySelectorAll('input[type="radio"]').forEach(i=>{i.checked=i.value===t}),h.kanaMode.value=G.kanaMode||"hira",h.sessionSize.value=G.sessionSize??20,h.hideMeaning.checked=G.hideMeaning||!1,h.wrongFirst.checked=G.wrongFirst||!1}function Ht(){G.modesKana=Dr(h.modeChecksKana),G.modesWord=Dr(h.modeChecksWord),G.modesKanji=Dr(h.modeChecksKanji),G.n2Cats=Dr(h.n2CatChecks);let n=h.jlptLevelChecks.querySelector('input[type="radio"]:checked');G.jlptLevel=n?n.value:G.jlptLevel||"n2";let e=h.jlptModeChecks?.querySelector('input[type="radio"]:checked');G.jlptMode=e?e.value:G.jlptMode||"quiz";let t=h.sentenceModeChecks?.querySelector('input[type="radio"]:checked');G.sentenceMode=t?t.value:G.sentenceMode||"progressive";let i=Dr(h.kanaSetChecks);switch(G.kanaSets=i.length?i:["seion"],i.length||Ys(h.kanaSetChecks,G.kanaSets),G.kanaMode=h.kanaMode.value,G.sessionSize=Lx(h.sessionSize.value,5,800,20),h.sessionSize.value=G.sessionSize,G.hideMeaning=h.hideMeaning.checked,G.wrongFirst=h.wrongFirst.checked,G.module=Dt,G.content=[Dt],Dt){case"kana":G.modes=G.modesKana.length?G.modesKana:["rm_mc","jp_mc"];break;case"word":G.modes=G.modesWord.length?G.modesWord:["rm_mc","jp_mc"];break;case"kanji":G.modes=G.modesKanji.length?G.modesKanji:["kanji_read","read_kanji"];break;case"n2":G.modes=["n2_exam"];break;case"sentence":G.modes=["sentence"];break;case"wordMatch":G.modes=["word_match"],G.content=["word","kanji"];break}pt(G)}function un(n){return G.kanaMode==="kata"&&n.kata||n.hira}function Kt(){h.d_total_start&&(h.d_total_start.textContent=ge.daily.total),h.d_ok_start&&(h.d_ok_start.textContent=ge.daily.ok),h.d_ng_start&&(h.d_ng_start.textContent=ge.daily.ng),h.d_rounds_start&&(h.d_rounds_start.textContent=ge.daily.rounds||0),h.s_round&&(h.s_round.textContent=`${C("round_prefix")}${ge.session.round||1}${C("round_suffix")}`),h.s_done.textContent=ge.session.done,h.s_size.textContent=ge.session.size,h.s_ok.textContent=ge.session.ok,h.s_ng.textContent=ge.session.ng,h.streak.textContent=ge.daily.streak,h.s_acc_display.textContent=Mo(ge.session.ok,ge.session.done);let n=ge.session.size>0?ge.session.done/ge.session.size*100:0;h.progressFill.style.width=`${n}%`,h.d_total&&(h.d_total.textContent=ge.daily.total),h.d_ok&&(h.d_ok.textContent=ge.daily.ok),h.d_ng&&(h.d_ng.textContent=ge.daily.ng),h.d_acc&&(h.d_acc.textContent=Mo(ge.daily.ok,ge.daily.total)),h.s_acc&&(h.s_acc.textContent=Mo(ge.session.ok,ge.session.done))}function Vx(n){if(typeof document>"u")return;let e=n===h.wordMatchScreen?C("word_match_invite_title"):C("title");document.title=e;let t=document.querySelector('meta[name="apple-mobile-web-app-title"]');t&&t.setAttribute("content",e);let i=document.querySelector('meta[property="og:title"]');i&&i.setAttribute("content",e)}function St(n){if(n!==h.bladeKingScreen)try{location.hash==="#bladeKing"&&history.replaceState(null,"",location.pathname+location.search)}catch{}h.moduleScreen.classList.add("hide"),h.gamesScreen&&h.gamesScreen.classList.add("hide"),h.settingsScreen.classList.add("hide"),h.quizScreen.classList.add("hide"),h.grammarScreen&&h.grammarScreen.classList.add("hide"),h.grammarTopicScreen&&h.grammarTopicScreen.classList.add("hide"),h.grammarPracticeScreen&&h.grammarPracticeScreen.classList.add("hide"),h.songsScreen&&h.songsScreen.classList.add("hide"),h.cultivateScreen&&h.cultivateScreen.classList.add("hide"),h.bladeKingScreen&&h.bladeKingScreen.classList.add("hide"),h.wordMatchScreen&&h.wordMatchScreen.classList.add("hide"),n!==h.bladeKingScreen&&Bp(),n.classList.remove("hide"),Vx(n)}var Kf="kana_cultivate_state_v1",Do=["cultivate_realm_0","cultivate_realm_1","cultivate_realm_2","cultivate_realm_3","cultivate_realm_4","cultivate_realm_5","cultivate_realm_6","cultivate_realm_7"],ei=[{key:"normal",label:"cultivate_q_normal",cls:"q-normal",min:2,max:6,weight:56},{key:"rare",label:"cultivate_q_rare",cls:"q-rare",min:6,max:13,weight:28},{key:"epic",label:"cultivate_q_epic",cls:"q-epic",min:13,max:24,weight:12},{key:"legend",label:"cultivate_q_legend",cls:"q-legend",min:24,max:42,weight:4}],vf=["cultivate_stat_vocab","cultivate_stat_listen","cultivate_stat_combo","cultivate_stat_focus"],yf=["\u8A00\u970A\u672D","\u304B\u306A\u7389","\u8A9E\u5F59\u6247","\u8074\u529B\u9234","\u9023\u6483\u7B46","\u96C6\u4E2D\u77F3","\u6587\u6CD5\u93E1","\u8A18\u61B6\u73E0"],Yl=[{jp:"\u3042\u308A\u304C\u3068\u3046",ask:"cultivate_q_meaning",answer:"\u8C22\u8C22",opts:["\u8C22\u8C22","\u65E9\u4E0A\u597D","\u5B66\u6821","\u732B"]},{jp:"\u6C34",ask:"cultivate_q_reading",answer:"\u307F\u305A",opts:["\u307F\u305A","\u306D\u3053","\u3084\u307E","\u305D\u3089"]},{jp:"\u5B66\u6821",ask:"cultivate_q_reading",answer:"\u304C\u3063\u3053\u3046",opts:["\u304C\u3063\u3053\u3046","\u3067\u3093\u3057\u3083","\u305B\u3093\u305B\u3044","\u307B\u3093"]},{jp:"\u304A\u306F\u3088\u3046",ask:"cultivate_q_meaning",answer:"\u65E9\u4E0A\u597D",opts:["\u65E9\u4E0A\u597D","\u665A\u4E0A\u597D","\u8C22\u8C22","\u518D\u89C1"]},{jp:"\u732B",ask:"cultivate_q_reading",answer:"\u306D\u3053",opts:["\u306D\u3053","\u3044\u306C","\u3068\u308A","\u3046\u307E"]},{jp:"\u5148\u751F",ask:"cultivate_q_reading",answer:"\u305B\u3093\u305B\u3044",opts:["\u305B\u3093\u305B\u3044","\u304C\u304F\u305B\u3044","\u304D\u3087\u3046\u3057\u3064","\u3057\u3085\u304F\u3060\u3044"]},{jp:"\u884C\u304D\u307E\u3059",ask:"cultivate_q_meaning",answer:"\u53BB",opts:["\u53BB","\u5403","\u770B","\u559D"]},{jp:"\u65E5\u672C\u8A9E",ask:"cultivate_q_reading",answer:"\u306B\u307B\u3093\u3054",opts:["\u306B\u307B\u3093\u3054","\u3048\u3044\u3054","\u3061\u3085\u3046\u3054\u304F\u3054","\u304B\u3093\u3058"]}];function Yf(n){return String(n||"").replace(/[ぁ-ゖ]/g,e=>String.fromCharCode(e.charCodeAt(0)+96))}function yu(){let n=Array.isArray(G.cultivateScripts)?G.cultivateScripts:["hira","kata","kanji"],e=[...new Set(n.filter(t=>t==="hira"||t==="kata"||t==="kanji"))];return e.length?e:["hira","kata","kanji"]}function Gx(){let n=yu();h.cultivateUseHira&&(h.cultivateUseHira.checked=n.includes("hira")),h.cultivateUseKata&&(h.cultivateUseKata.checked=n.includes("kata")),h.cultivateUseKanji&&(h.cultivateUseKanji.checked=n.includes("kanji")),h.cultivateSetupHint&&(h.cultivateSetupHint.textContent="")}function Wx(){Gx(),h.cultivateScreen&&h.cultivateScreen.classList.add("cultivate-setup-mode"),si()}function $x(){let n=[];if(h.cultivateUseHira?.checked&&n.push("hira"),h.cultivateUseKata?.checked&&n.push("kata"),h.cultivateUseKanji?.checked&&n.push("kanji"),!n.length){h.cultivateSetupHint&&(h.cultivateSetupHint.textContent=C("cultivate_select_one_script")),h.cultivateUseHira&&(h.cultivateUseHira.checked=!0);return}G.cultivateScripts=n,pt(G),h.cultivateScreen&&h.cultivateScreen.classList.remove("cultivate-setup-mode"),si(!0),Ee(zl)}function Io(){return{exp:0,realm:0,jade:0,stage:1,equip:null,drop:null,insight:null,trainingCount:0,winStreak:0,recentQuestions:[],log:[C("cultivate_log_start")]}}function hn(){if(Ci)return Ci;try{let n=localStorage.getItem(Kf);Ci=n?{...Io(),...JSON.parse(n)}:Io()}catch{Ci=Io()}return Ci}function Wr(){Ci&&localStorage.setItem(Kf,JSON.stringify(Ci))}function su(n=0){return 60+Math.max(0,n)*45+Math.max(0,n-2)*35}function xu(n=hn()){let e=12+(n.realm||0)*18,t=n.equip?.power||0;return e+t+Math.floor((n.jade||0)/25)}function wu(n=hn()){return 26+Math.max(0,(n.stage||1)-1)*18}function Fn(n){let e=hn();e.log=[String(n||""),...e.log||[]].filter(Boolean).slice(0,8)}function qx(){let n=ei.reduce((t,i)=>t+i.weight,0),e=Pe(n)??Math.floor(Math.random()*n);for(let t of ei){if(e<t.weight)return t;e-=t.weight}return ei[0]}function jx(n=0){let e=qx(),t=ei.indexOf(e);n>0&&t<ei.length-1&&(Pe(100)??0)<n&&(e=ei[t+1]);let i=vf[Pe(vf.length)??0],s=yf[Pe(yf.length)??0],r=e.min+(Pe(e.max-e.min+1)??0),a=r+Math.round(r*(ei.indexOf(e)*.45));return{id:Date.now()+"_"+(Pe(99999)??0),name:s,q:e.key,stat:i,value:r,power:a}}function Lo(n,e,t){let i=[n],s=new Set(i.map(String)),r=Zn(e.length)||is([...Array(e.length).keys()]);for(let a of r){let o=t(e[a]);if(!(!o||s.has(String(o)))&&(s.add(String(o)),i.push(o),i.length>=4))break}for(;i.length<4;)i.push(["\u3042","\u3044","\u3046","\u3048"][i.length]||"\u2014");return is(i)}function Jf(n){let e=hn();e.recentQuestions=[n,...(e.recentQuestions||[]).filter(t=>t!==n)].slice(0,30)}function Xx(n="train",e={}){let t=yu(),i=t.includes("hira")||t.includes("kata"),s=t.includes("kanji"),r=new Set(hn().recentQuestions||[]),a=(Oe.words||[]).filter(v=>v?.hira&&v?.meaning),o=(Oe.kanji||[]).filter(v=>v?.kanji&&v?.hira&&v?.meaning),c=s&&(!i||o.length&&(Pe(100)??0)<58),l=c?o:a;if(!l.length)return null;let u=l.filter(v=>!r.has(`${c?"k":"w"}:${v.rm||v.hira||v.kanji}`)),d=u.length>=8?u:l,f=d[Pe(d.length)??0],p=`${c?"k":"w"}:${f.rm||f.hira||f.kanji}`;Jf(p);let g;return c?(Pe(100)??0)<62?g={jp:f.kanji,speak:f.hira,ask:"cultivate_q_reading",answer:f.hira,opts:Lo(f.hira,o,m=>m.hira)}:g={jp:f.kanji,speak:f.hira,ask:"cultivate_q_meaning",answer:Ut(f)||f.meaning,opts:Lo(Ut(f)||f.meaning,o,m=>Ut(m)||m.meaning)}:g={jp:t.includes("kata")&&(!t.includes("hira")||(Pe(2)??0)===1)?f.kata||Yf(f.hira):f.hira,speak:f.hira,ask:"cultivate_q_meaning",answer:Ut(f)||f.meaning,opts:Lo(Ut(f)||f.meaning,a,m=>Ut(m)||m.meaning)},{...g,...e,kind:n,opts:is(g.opts.slice())}}function Zf(n="train",e={}){let t=Xx(n,e);if(t)return t;let i=yu(),s=Yl.filter(o=>rr(o.jp)?i.includes("kanji"):i.includes("hira")||i.includes("kata")),a={...s[Pe(s.length||Yl.length)??0]||Yl[0]};if(!rr(a.jp)){let o=i.filter(l=>l==="hira"||l==="kata");o.includes("kata")&&(!o.includes("hira")||(Pe(2)??0)===1)&&(a.jp=Yf(a.jp))}return Jf(`fallback:${a.jp}:${a.answer}`),{...a,...e,kind:n,opts:is(a.opts.slice())}}function Qf(n){return ei.find(e=>e.key===n?.q)||ei[0]}function xf(n){if(!n)return'<div class="cultivate-item empty">\u2014</div>';let e=Qf(n);return`<div class="cultivate-item ${e.cls}">
    <div class="ci-top"><b>${ke(n.name)}</b><span>${ke(C(e.label))}</span></div>
    <div class="ci-stat">${ke(C(n.stat))} +${n.value}</div>
    <div class="ci-power">${ke(C("cultivate_power"))} +${n.power}</div>
  </div>`}function Ao(n){let e=hn();e.exp+=n;let t=!1;for(;e.realm<Do.length-1&&e.exp>=su(e.realm);)e.exp-=su(e.realm),e.realm+=1,t=!0;t&&(Fn(C("cultivate_log_realm_up",C(Do[e.realm]))),Ee(Vl))}function Kx(){let n=hn();if(n.insight){Fn(C("cultivate_log_finish_current")),si(!0);return}let e=[{key:"cultivate_train_style_vocab",boost:15},{key:"cultivate_train_style_listen",boost:22},{key:"cultivate_train_style_focus",boost:30}],t=e[Pe(e.length)??0],i=6+(n.realm||0)*2+(Pe(6)??0),s=1+(Pe(3)??0),r=jx(t.boost);n.trainingCount=(n.trainingCount||0)+1,n.insight=Zf("train",{baseExp:i,baseJade:s,pendingDrop:r,styleKey:t.key}),Fn(C("cultivate_log_train_start",C(t.key),i,s)),Ee(zl),Wr(),si(!0)}function Yx(n){let e=hn(),t=e.insight;if(!t)return;let i=n===t.answer;if(t.kind==="battle"){let s=t.enemyPower||wu(e),r=t.playerPower||xu(e),a=t.roll||0,o=i?r+a+Math.ceil(s*.35):r+a-Math.ceil(s*.2);if(i&&o>=s){let c=t.rewardExp||22+e.stage*4,l=t.rewardJade||8+e.stage*2;e.stage+=1,e.winStreak=(e.winStreak||0)+1,e.jade+=l,Ao(c),Fn(C("cultivate_log_battle_win",o,s,c,l)),Ee(go)}else{e.winStreak=0;let c=i?10:5;Ao(c),Fn(i?C("cultivate_log_battle_not_enough",o,s,c):C("cultivate_log_battle_lose",t.answer,c)),Ee(yn)}}else if(i){let s=16+(e.realm||0)*3+(Pe(7)??0),r=4+(Pe(5)??0),a=(t.baseExp||0)+s,o=(t.baseJade||0)+r;e.jade+=o,Ao(a),t.pendingDrop&&(t.pendingDrop.power+=2+(Pe(4)??0),e.drop=t.pendingDrop),Fn(C("cultivate_log_train_success",a,o,e.drop?.name||"-",e.drop?C(Qf(e.drop).label):"-")),Ee(jt)}else{let s=t.kind==="train"?Math.max(4,t.baseExp||4):5,r=t.kind==="train"?Math.max(1,t.baseJade||1):0;r&&(e.jade+=r),Ao(s),t.kind==="train"&&t.pendingDrop&&(Pe(100)??0)<35&&(e.drop=t.pendingDrop),Fn(C("cultivate_log_train_fail",t.answer,s,r)),Ee(yn)}e.insight=null,Wr(),si(!0)}function Jx(){let n=hn();if(!n.drop)return;let e=n.equip;n.equip=n.drop,n.drop=null,Fn(e?C("cultivate_log_replace",n.equip.name,e.name):C("cultivate_log_equip",n.equip.name)),Ee(Hl),Wr(),si()}function Zx(){let n=hn();if(n.insight){Fn(C("cultivate_log_finish_current")),si(!0);return}let e=xu(n),t=wu(n),i=(Pe(21)??0)-8+Math.min(8,n.winStreak||0);n.insight=Zf("battle",{playerPower:e,enemyPower:t,roll:i,rewardExp:24+n.stage*5,rewardJade:8+n.stage*2}),Fn(C("cultivate_log_battle_start",e,t)),Ee(go),Wr(),si(!0)}function Qx(){confirm(C("cultivate_reset_confirm"))&&(Ci=Io(),Wr(),si())}function si(n=!1){let e=hn(),t=su(e.realm);h.cultivateRealm&&(h.cultivateRealm.textContent=C(Do[e.realm]||Do[0])),h.cultivateExpText&&(h.cultivateExpText.textContent=`${e.exp} / ${t}`),h.cultivateExpFill&&(h.cultivateExpFill.style.width=`${Math.max(0,Math.min(100,e.exp/t*100))}%`),h.cultivatePower&&(h.cultivatePower.textContent=xu(e)),h.cultivateJade&&(h.cultivateJade.textContent=e.jade||0),h.cultivateStage&&(h.cultivateStage.textContent=e.stage||1),h.cultivateEquip&&(h.cultivateEquip.outerHTML=xf(e.equip).replace("cultivate-item","cultivate-item").replace("<div",'<div id="cultivateEquip"')),h.cultivateEquip=U("cultivateEquip"),h.cultivateDrop&&(h.cultivateDrop.outerHTML=xf(e.drop).replace("cultivate-item","cultivate-item").replace("<div",'<div id="cultivateDrop"')),h.cultivateDrop=U("cultivateDrop"),h.btnCultivateEquip&&(h.btnCultivateEquip.disabled=!e.drop),h.cultivateEnemy&&(h.cultivateEnemy.textContent=C("cultivate_enemy_name",e.stage||1)),h.cultivateEnemyPower&&(h.cultivateEnemyPower.textContent=wu(e)),h.cultivateLog&&(h.cultivateLog.innerHTML=(e.log||[]).map(i=>`<div>${ke(i)}</div>`).join("")),ew(e),n&&h.cultivateScreen&&(h.cultivateScreen.classList.remove("cultivate-pulse"),h.cultivateScreen.offsetWidth,h.cultivateScreen.classList.add("cultivate-pulse"))}function ew(n=hn()){if(!h.cultivateInsightQ||!h.cultivateInsightOptions)return;let e=n.insight,t=h.cultivateInsight?.querySelector?.(".cultivate-insight-title");if(!e){t&&(t.textContent=C("cultivate_insight")),h.cultivateInsightQ.textContent=C("cultivate_insight_empty"),h.cultivateInsightOptions.innerHTML="";return}t&&(t.textContent=e.kind==="battle"?C("cultivate_battle_question"):C("cultivate_train_question"));let i=e.kind==="battle"?C("cultivate_battle_question_desc",e.playerPower||0,e.enemyPower||0):C("cultivate_train_question_desc",e.styleKey?C(e.styleKey):C("cultivate_train"));h.cultivateInsightQ.innerHTML=`${ke(i)}\uFF5C<button type="button" class="cultivate-word-speak" id="cultivateWordSpeak">${ke(e.jp)}</button> \u2014 ${ke(C(e.ask))}`;let s=U("cultivateWordSpeak");s&&(s.onclick=()=>Lt(e.speak||(e.ask==="cultivate_q_reading"?e.answer:e.jp))),h.cultivateInsightOptions.innerHTML="",e.opts.forEach(r=>{let a=document.createElement("button");a.type="button",a.className="btn cultivate-choice",a.textContent=r,a.onclick=()=>Yx(r),h.cultivateInsightOptions.appendChild(a)})}var ep=36,zr=3,ru=12,tp=300;function np(){let n=Array.isArray(G.wordMatchKana)?G.wordMatchKana:["hira","kata"],e=[...new Set(n.filter(t=>t==="hira"||t==="kata"))];return e.length?e:["hira"]}function tw(){let n=G.wordMatchDifficulty||"easy";return n==="hard"?3:n==="medium"?2:1}function nw(){let n=np();h.wmKanaHira&&(h.wmKanaHira.checked=n.includes("hira")),h.wmKanaKata&&(h.wmKanaKata.checked=n.includes("kata"));let e=["easy","medium","hard"].includes(G.wordMatchDifficulty)?G.wordMatchDifficulty:"easy";document.querySelectorAll('input[name="wmDifficulty"]').forEach(t=>{t.checked=t.value===e}),h.wmSetupHint&&(h.wmSetupHint.textContent="")}function au(){Ro++,Se=null,rs(),Yi(),ts(""),or(),nw(),h.wordMatchScreen?.classList.add("wm-setup-mode"),h.wmSetup?.classList.remove("hide"),h.wmMessage&&(h.wmMessage.textContent=""),cr()}function iw(){let n=[];h.wmKanaHira?.checked&&n.push("hira"),h.wmKanaKata?.checked&&n.push("kata"),n.length||(h.wmSetupHint&&(h.wmSetupHint.textContent=C("word_match_select_one_kana")),h.wmKanaHira&&(h.wmKanaHira.checked=!0),n.push("hira"));let e=document.querySelector('input[name="wmDifficulty"]:checked');G.wordMatchKana=n,G.wordMatchDifficulty=["easy","medium","hard"].includes(e?.value)?e.value:"easy",pt(G),h.wordMatchScreen?.classList.remove("wm-setup-mode"),h.wmSetup?.classList.add("hide"),Vo(!1)}function Mu(n=1){let e=Math.max(1,Number(n)||1),t=3,i=tw(),s=ru-t+1,r=(zr-i+1)*s;if(e<=r){let l=e-1,u=i+Math.floor(l/s),d=t+l%s;return{cols:u,rows:d}}let a=(e*9301+49297)%233280,o=1+a%zr,c=t+Math.floor(a/zr)%s;return{cols:o,rows:c}}function sw(){G.wordMatchLevelVersion!==eu&&(G.wordMatchLevel=1,G.wordMatchLevelVersion=eu,pt(G))}function ip(n){if(n?.guideMode)return 3;let e=n?.levelConfig||Mu(G.wordMatchLevel||1);return Math.min(ep,(e.cols||3)*(e.rows||12))}function rw(n){return Math.max(1,Math.min(zr,n?.levelConfig?.cols||(n?.guideMode?1:zr)))}function aw(n){return Math.max(1,Math.min(ru,n?.levelConfig?.rows||(n?.guideMode?3:ru)))}function ow(n){if(n?.guideMode)return C("word_match_guide_level");let e=n?.level||G.wordMatchLevel||1,t=n?.levelConfig||Mu(e);return C("word_match_level_label",e,t.cols,t.rows)}function sp(n){if(!n||n.guideMode||n.finished||(n.leftSlots||[]).length>0||(n.rightSlots||[]).length>0)return!1;n.finished=!0,n.busy=!0,rs();let e=n.level||1;return n.nextLevel=e+1,ts(C("word_match_level_clear",e),"start-count"),h.wmMessage&&(h.wmMessage.textContent=C("word_match_level_clear_hint")),setTimeout(()=>Vo(!0),1150),!0}async function cw(){return Array.isArray(Oe.kanji)&&Oe.kanji.length||(Oe.kanji=await ut("./data/kanji_words.json").catch(()=>[]),Oe.kanji.length&&iu()),Array.isArray(Oe.wordMatchExtra)||(Oe.wordMatchExtra=await ut("./data/word_match_extra.json").catch(()=>[])),(Oe.kanji?.length||0)+(Oe.wordMatchExtra?.length||0)>0}function Uo(){let n=new Set,e=[],t=(a,o,c=a?.kanji)=>{if(!a||!c||!a.hira||c===a.hira||!/^[一-龯々]+$/.test(c)||!/^[ぁ-ゖー]+$/.test(a.hira))return;let l=`${c}|${a.hira}`;n.has(l)||(n.add(l),e.push({...a,type:o,_wmBaseId:l,_wmKey:e.length+1,_wmReading:a.hira,_wmLabel:c}))},i=Oe.kanji||[],s=Oe.wordMatchExtra||[],r=i.length+s.length;return i.forEach((a,o)=>t({...a,_wmRank:o,_wmTotal:r},"kanji",a.kanji)),s.forEach((a,o)=>t({...a,_wmRank:i.length+o,_wmTotal:r},"wordMatchExtra",a.kanji)),e}function rp(n){if(!n)return n;let e=String(n.hira||n._wmReading||""),t=String(n.kata||""),i=np(),s=i.includes("hira")&&/^[ぁ-ゖー]+$/.test(e),a=i.includes("kata")&&/^[ァ-ヺー]+$/.test(t)&&(!s||i.includes("hira")&&Pe(2)===1);return{...n,_wmReading:a?t:e||t,_wmSpeak:e||t,_wmKanaKind:a?"kata":"hira"}}function lw(n=new Set){let e=Uo().filter(a=>!n.has(a._wmBaseId)),t=e.length?e:Uo();if(!t.length)return null;let i=Xl(t.length,1)?.[0],s=Number.isInteger(i)?i:Pe(t.length)??0,r=t[s];return rp({...r,_wmId:`wm_${Date.now()}_${Pe(4294967295)??0}`})}function uw(n){let e=new Set;return[...n?.leftSlots||[],...n?.rightSlots||[]].forEach(t=>{t?._wmBaseId&&e.add(t._wmBaseId)}),e}function bu(n){if(!n)return 10;let e=[...String(n._wmLabel||"")].length,t=[...String(n._wmReading||"")].length,i=Math.max(1,Number(n._wmTotal)||Uo().length||1),s=Math.max(0,Number(n._wmRank)||0),r=hf(e,t,s,i);if(r!==null)return r;let a=s/i,o=Math.min(18,e*3+Math.max(0,t-2)),c=Math.round(a*22);return 10+o+c}function hw(n){return Math.min(3,1+Math.floor(Math.max(0,n)/3)*.25)}function dw(n){let e=n?.goal;if(!e)return"-";let t=e.type==="pairs"?n.pairsCleared||0:e.type==="combo"?n.maxCombo||0:n.score||0,i=e.labelKey?C(e.labelKey,e.target):e.label||"";return`${e.done?"\u2713":""}${i} ${Math.min(t,e.target)}/${e.target}`}function fw(n,e){let t=e?._wmSpecial;return t?t==="time"?(n.bonusSeconds=(n.bonusSeconds||0)+10,C("word_match_special_seconds",10)):t==="hint"?(setTimeout(()=>_p(!0),180),C("word_match_special_hint")):t==="mult"?(n.nextMultiplier=Math.max(n.nextMultiplier||1,2),C("word_match_special_mult")):"":""}function ap(n){let e=n?.goal;return!e||e.done||(e.type==="pairs"?n.pairsCleared||0:e.type==="combo"?n.maxCombo||0:n.score||0)<e.target?"":(e.done=!0,n.bonusSeconds=(n.bonusSeconds||0)+15,n.nextMultiplier=Math.max(n.nextMultiplier||1,2),C("word_match_goal_done_bonus"))}function Su(n,e,t=""){let i=document.querySelector(`.wm-tile[data-id="${n}"]`),s=h.wordMatchScreen;if(!i||!s)return;let r=i.getBoundingClientRect(),a=s.getBoundingClientRect(),o=document.createElement("div");o.className=`wm-float ${t}`,o.textContent=e,o.style.left=`${r.left-a.left+r.width/2}px`,o.style.top=`${r.top-a.top+r.height/2}px`,s.appendChild(o);for(let c=0;c<9;c++){let l=document.createElement("i");l.className="wm-particle",l.style.left=o.style.left,l.style.top=o.style.top,l.style.setProperty("--dx",`${(Pe(80)??40)-40}px`),l.style.setProperty("--dy",`${-18-(Pe(44)??0)}px`),s.appendChild(l),setTimeout(()=>l.remove(),760)}setTimeout(()=>o.remove(),850)}function pw(n){let e=Number(n)||0;return e>=50?C("word_match_combo_master",e):e>=40?C("word_match_combo_godlike",e):e>=30?C("word_match_combo_legend",e):e>=25?C("word_match_combo_unstoppable",e):e>=20?C("word_match_combo_amazing",e):e>=15?C("word_match_combo_super",e):e>=10?C("word_match_combo_great",e):e>=7?C("word_match_combo_hot",e):e>=5?C("word_match_combo_nice",e):e>=3?C("word_match_combo_start",e):e>=2?C("word_match_combo_two",e):""}function mw(n,e=""){let t=h.wordMatchScreen;if(!t||!n||n<2)return;let i=pw(n);if(!i)return;let s=[2,3,5,7,10,15,20,25,30,40,50].includes(n)||n%10===0,r=document.createElement("div");r.className=`wm-combo-toast combo-${Math.min(5,Math.floor(n/5))}${s?" milestone":""}`,r.innerHTML=`<span>${ke(i)}</span><b>\xD7${n}</b>`,t.appendChild(r),setTimeout(()=>r.remove(),s?1250:900);let a=h.wmCombo?.closest?.("div");a&&(a.classList.remove("wm-combo-pop"),a.offsetWidth,a.classList.add("wm-combo-pop")),e&&Su(e,`${i} \xD7${n}`,s?"combo special":"combo"),s&&Ee(cn)}function Gr(n,e=30){let t=document.querySelector(`.wm-tile[data-id="${n}"]`),i=h.wordMatchScreen;if(!t||!i)return;let s=t.getBoundingClientRect(),r=i.getBoundingClientRect(),a=s.left-r.left+s.width/2,o=s.top-r.top+s.height/2,c=document.createElement("div");c.className="wm-bomb-flash",c.style.left=`${a}px`,c.style.top=`${o}px`,i.appendChild(c),setTimeout(()=>c.remove(),620);for(let l=0;l<e;l++){let u=document.createElement("i");u.className=`wm-particle wm-bomb-particle p${l%4}`,u.style.left=`${a}px`,u.style.top=`${o}px`;let d=Math.PI*2*l/e+((Pe(20)??0)-10)/100,f=34+(Pe(74)??0);u.style.setProperty("--dx",`${Math.cos(d)*f}px`),u.style.setProperty("--dy",`${Math.sin(d)*f}px`),i.appendChild(u),setTimeout(()=>u.remove(),860)}}function op(n=[]){let e=h.wordMatchScreen;e&&[...n].forEach(t=>{let i=document.querySelector(`.wm-tile[data-id="${t}"]`);if(!i)return;let s=i.getBoundingClientRect(),r=e.getBoundingClientRect(),a=s.left-r.left,o=s.top-r.top,c=i.classList.contains("reading")?"#22d3c5":"#ff9800",l=14;for(let u=0;u<l;u++){let d=document.createElement("i");d.className="wm-shard-particle";let f=a+(Pe(Math.max(2,Math.floor(s.width)))??s.width/2),p=o+(Pe(Math.max(2,Math.floor(s.height)))??s.height/2),g=(Pe(130)??65)-65,v=26+(Pe(82)??35),m=260+(Pe(360)??130);d.style.left=`${f}px`,d.style.top=`${p}px`,d.style.background=c,d.style.setProperty("--dx",`${g}px`),d.style.setProperty("--wind",`${(g>=0?1:-1)*v}px`),d.style.setProperty("--dy",`${m}px`),d.style.setProperty("--rot",`${(Pe(720)??360)-360}deg`),d.style.animationDelay=`${(Pe(8)??0)*.012}s`,e.appendChild(d),setTimeout(()=>d.remove(),2100)}})}function cp(n=""){let e=Se;!e||e.finished||(e.finished=!0,e.finishMessage=n||"",e.busy=!0,rs(),Yi(),G.wordMatchLevel=1,G.wordMatchLevelVersion=eu,pt(G),h.wmTime&&(h.wmTime.textContent="0:00"),h.wmMessage&&(h.wmMessage.textContent=e.finishMessage||`${C("word_match_timeup")} ${C("word_match_score")}\uFF1A${e.score||0}`),ts(C("word_match_game_over"),"gameover"),document.querySelectorAll("#wordMatchScreen .wm-tile").forEach(t=>t.classList.add("disabled")))}function ou(){if(!Se?.startedAt||!h.wmTime)return;let n=Math.max(0,Math.floor((Date.now()-Se.startedAt)/1e3)),e=tp+(Se.bonusSeconds||0),t=df(n,e),i=t!==null?t:Math.max(0,e-n);if(Pw(),h.wmTime.textContent=ss(i),h.wmTime.classList.toggle("wm-time-warn",i<=30),i<=10&&i>0&&Se.lastFinalTick!==i&&(Se.lastFinalTick=i,Ee(Xd,i)),i<=0){cp(C("word_match_game_over"));return}i<=10?ts(String(i),"final-count"):Rx()}function lp(){Zi&&clearInterval(Zi),ou(),Zi=setInterval(ou,250)}function rs(){Zi&&(clearInterval(Zi),Zi=null)}function ns(){return G.wordMatchMusicOn!==!1}function Tu(){return G.wordMatchSfxOn!==!1}function Eu(){return G.wordMatchVoiceOn!==!1}function Ee(n,...e){if(!(!Tu()||typeof n!="function"))return n(...e)}function Qs(n,e={}){if(!Eu()){try{e?.onEnd?.({ok:!1,reason:"muted"})}catch{}return!1}return Lt(n,e)}function Au(){ns()&&Bl()}function cr(){let n=ns(),e=Tu(),t=Eu();h.btnWordMatchMusic&&(h.btnWordMatchMusic.textContent=`${C("word_match_music_short")} ${n?"ON":"OFF"}`,h.btnWordMatchMusic.classList.toggle("active",n),h.btnWordMatchMusic.title=C("word_match_music_toggle")),h.btnWordMatchSfx&&(h.btnWordMatchSfx.textContent=`${C("word_match_sfx_short")} ${e?"ON":"OFF"}`,h.btnWordMatchSfx.classList.toggle("active",e),h.btnWordMatchSfx.title=C("word_match_sfx_toggle")),h.btnWordMatchVoice&&(h.btnWordMatchVoice.textContent=`${C("word_match_voice_short")} ${t?"ON":"OFF"}`,h.btnWordMatchVoice.classList.toggle("active",t),h.btnWordMatchVoice.title=C("word_match_voice_toggle"))}function wf(){cr()}function _w(){G.wordMatchMusicOn=!ns(),pt(G),G.wordMatchMusicOn&&Se&&!Se.finished?Bl():Yi(),cr()}function gw(){G.wordMatchSfxOn=!Tu(),pt(G),cr()}function vw(){G.wordMatchVoiceOn=!Eu(),pt(G),cr()}function yw(){let n=Se;if(!n||n.finished||n.guideMode||n.sharePaused)return null;let e=!!n.busy,t=!!Zi,i=ns(),s=Date.now();return n.sharePaused=!0,n.busy=!0,n.sharePause={wasBusy:e,wasTimerRunning:t,wasMusicOn:i,pauseStartedAt:s},rs(),i&&Yi(),ht(),n.sharePause}function xw(){let n=Se;if(!n?.sharePaused)return;let e=n.sharePause||{},t=Date.now()-(e.pauseStartedAt||Date.now());n.startedAt&&(n.startedAt+=Math.max(0,t)),n.sharePaused=!1,n.sharePause=null,n.busy=!!e.wasBusy,e.wasMusicOn&&!n.finished&&Au(),e.wasTimerRunning&&!n.finished&&lp(),ht()}async function ww(){yw();try{let n="https://quiz.ff18.com/?mode=wordMatch",e=C("word_match_invite_title"),t=Se?.score||0,i=G.wordMatchBest||0,s=`${e}
${C("word_match_invite_text")}
${C("word_match_score")} ${t} / ${C("word_match_best")} ${i}
${n}`,r=()=>{h.wmMessage&&(h.wmMessage.textContent=C("word_match_invite_copied"))},a=()=>{try{let l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.focus(),l.select(),l.setSelectionRange(0,l.value.length);let u=document.execCommand("copy");return l.remove(),u&&r(),u}catch{return!1}},o=async()=>a()?!0:navigator.clipboard?.writeText?(await navigator.clipboard.writeText(s),r(),!0):!1,c=a();try{if(navigator.share){await navigator.share({title:e,text:`${e}
${C("word_match_invite_text")}
${C("word_match_score")} ${t} / ${C("word_match_best")} ${i}`,url:n});return}if(c||await o())return}catch{if(c)return;try{if(await o())return}catch{}}h.wmMessage&&(h.wmMessage.textContent=s.replace(/\n/g," "))}finally{xw()}}function Cu(){let n=Se,e=h.wmTools||U("wmTools");if(h.wmLives){let a=Math.max(0,Math.min(5,n?.lives??5));h.wmLives.textContent="\u2665\uFE0F".repeat(a),h.wmLives.title=C("word_match_life_title",a),h.wmLives.classList.toggle("low",a<=2)}if(!e)return;e.innerHTML="";let t=!n||n.finished||n.busy,i=(a,o,c)=>{let l=document.createElement("button");l.className="wm-tool-btn",l.type="button",l.textContent=o,l.dataset.tool=a,l.dataset.index=String(c),l.disabled=t,a==="bomb"&&n?.bombArmed&&l.classList.add("active"),l.onclick=a==="bomb"?()=>up():()=>hp(),e.appendChild(l)},s=n?.powerups?.bomb||0,r=n?.powerups?.magnifier||0;for(let a=0;a<s;a++)i("bomb","\u{1F4A3}",a);for(let a=0;a<r;a++)i("magnifier","\u{1F50D}",a)}function up(){let n=Se;if(n?.guideMode){Ho("bomb");return}!n||n.finished||n.busy||(n.powerups?.bomb||0)<=0||(n.bombArmed=!n.bombArmed,h.wmMessage&&(h.wmMessage.textContent=n.bombArmed?C("word_match_bomb_hint"):C("word_match_hint")),Ee(Xt),Cu())}function hp(){let n=Se;if(n?.guideMode){Ho("mag");return}if(!n||n.finished||n.busy||(n.powerups?.magnifier||0)<=0)return;n.powerups.magnifier=Math.max(0,(n.powerups.magnifier||0)-1),n.bombArmed=!1;let e=new Set,t=new Map;Zn((n.leftSlots||[]).length).slice(0,3).forEach((r,a)=>{let o=n.leftSlots[r],c=(n.rightSlots||[]).find(l=>Oo(o,l));o?._wmId&&(e.add(o._wmId),t.set(o._wmId,a+1)),c?._wmId&&(e.add(c._wmId),t.set(c._wmId,a+1))}),n.hintIds=e,n.hintColors=t;let s=Date.now()+Math.random();n.hintToken=s,Ee(Xt),Cu(),ht(),setTimeout(()=>{!Se||Se.hintToken!==s||(Se.hintIds?.clear(),Se.hintColors?.clear(),ht())},5e3)}function Mw(n,e){let t=Se,i=e==="reading"?t?.leftSlots||[]:t?.rightSlots||[],s=i.findIndex(c=>c._wmId===n),r=new Set;if(s<0)return r;let a=Math.floor(s/3),o=s%3;for(let c=a-1;c<=a+1;c++)for(let l=o-1;l<=o+1;l++){if(c<0||l<0||l>=3)continue;let u=i[c*3+l];u?._wmBaseId&&r.add(u._wmBaseId)}return r}function bw(n,e,t=""){let i=Se;if(!i||i.finished||i.busy||!n?.size)return;let s=[...i.leftSlots||[],...i.rightSlots||[]].filter(c=>n.has(c._wmBaseId));if(!s.length)return;i.busy=!0,i.hintIds=new Set,i.hintColors=new Map,i.selectedReading=null,i.selectedWord=null,i.selectedAt=0,i.lastNudgeAt=0;let r=[];n.forEach(c=>{let l=(i.leftSlots||[]).find(u=>u._wmBaseId===c)||(i.rightSlots||[]).find(u=>u._wmBaseId===c);l&&r.push(l)});let a=r.reduce((c,l)=>c+Math.max(8,Math.round(bu(l)*.55)),0);i.lastGain=a,i.score+=a,i.pairsCleared=(i.pairsCleared||0)+r.length;let o=ap(i);mp(i.score),i.removingIds=new Set(s.map(c=>c._wmId)),op(i.removingIds),Ee(cn),Fo("wm-hit"),Gr(e||s[0]._wmId,t?42:26),Su(e||s[0]._wmId,`${t}+${a} \xD7${r.length}${o?" \u2605":""}`,"special"),ht(),setTimeout(()=>{i.leftSlots=(i.leftSlots||[]).filter(c=>!n.has(c._wmBaseId)),i.rightSlots=(i.rightSlots||[]).filter(c=>!n.has(c._wmBaseId)),i.removingIds.clear(),i.finiteLevel||Ru(i),!sp(i)&&(i.droppingIds=new Set([...i.leftSlots||[],...i.rightSlots||[]].map(c=>c._wmId)),Ee(mo),ht(),setTimeout(()=>{i.droppingIds.clear(),i.busy=!1,ht()},430))},430)}function Sw(n,e){let t=Se;if(!t||t.finished||t.busy||(t.powerups?.bomb||0)<=0)return!1;let i=Mw(n,e);return i.size?(t.powerups.bomb=Math.max(0,(t.powerups.bomb||0)-1),t.bombArmed=!1,t.hintIds=new Set,t.hintColors=new Map,t.selectedReading=null,t.selectedWord=null,bw(i,n,"\u{1F4A3}"),!0):!1}function Tw(n=ep,e=new Set){let t=Uo().filter(a=>!e.has(a._wmBaseId)),i=[];if(!t.length)return i;let s=Math.min(n,t.length);return(Xl(t.length,s)||Zn(t.length).slice(0,s)).forEach(a=>{let o=t[a];o&&i.push(rp({...o,_wmId:`wm_${Date.now()}_${Pe(4294967295)??0}`}))}),i}function Ru(n){if(!n)return;let e=ip(n);if(n.leftSlots=(n.leftSlots||[]).filter(Boolean).slice(0,e),n.rightSlots=(n.rightSlots||[]).filter(Boolean).slice(0,e),n.finiteLevel||n.guideMode)return;let t=uw(n);for(;n.leftSlots.length<e||n.rightSlots.length<e;){let i=lw(t);if(!i)break;t.add(i._wmBaseId),n.leftSlots.length<e&&n.leftSlots.unshift({...i}),n.rightSlots.length<e&&n.rightSlots.unshift({...i})}}function Jl(n,e,t){return{_wmBaseId:`guide_${n}`,_wmKey:9e3+n,_wmReading:e,_wmLabel:t,_wmRank:n,_wmTotal:3}}function dp(n=!0){rs(),or(),po(),lo(),Au(),we=0;let e=Jl(1,"\u306D\u3053","\u732B"),t=Jl(2,"\u307F\u305A","\u6C34"),i=Jl(3,"\u3084\u307E","\u5C71");return Se={guideMode:!0,leftSlots:[{...e,_wmId:"guide_l1"},{...t,_wmId:"guide_l2"},{...i,_wmId:"guide_l3"}],rightSlots:[{...e,_wmId:"guide_r1"},{...t,_wmId:"guide_r2"},{...i,_wmId:"guide_r3"}],selectedReading:null,selectedWord:null,score:0,lastGain:0,combo:0,maxCombo:0,pairsCleared:0,nextMultiplier:1,powerups:{bomb:1,magnifier:1},lives:5,bombArmed:!1,goal:{type:"pairs",target:2,labelKey:"word_match_goal_pairs",done:!1},finished:!1,busy:!1,removingIds:new Set,wrongIds:new Set,newIds:new Set,droppingIds:new Set,hintIds:new Set(["guide_l1"]),hintColors:new Map([["guide_l1",1]]),chainPendingIds:new Set,chainCount:0,chainDeadline:0,chainMultiplier:1,musicOn:ns(),guidePromptKey:"word_match_guide_prompt_0"},ht(),new Promise(s=>{Ql=s})}function Ew(){G.wordMatchGuideSeen=!0,G.wordMatchGuideVersion=pu,pt(G);let n=Ql;Ql=null,n&&n()}function Ji(n){let e=Se;e?.guideMode&&(e.guidePromptKey=n,e.guideNeedNext=!0,ht())}function Aw(n){if(!n?.guideMode)return!1;if(h.wmScore.textContent=n.score||0,h.wmLeft.textContent=G.wordMatchBest||0,h.wmCombo&&(h.wmCombo.textContent=n.combo||0),h.wmGoal&&(h.wmGoal.textContent=C("word_match_guide_level")),h.wmPower&&(h.wmPower.textContent=`\xD7${(n.nextMultiplier||1).toFixed((n.nextMultiplier||1)%1?1:0)}`),h.wmTime&&(h.wmTime.textContent=C("word_match_guide_level")),h.wmMessage){h.wmMessage.innerHTML=`<span>${C(n.guidePromptKey||"word_match_guide_prompt_0")}</span>${n.guideNeedNext?`<button class="btn primary wm-inline-next guide-glow" type="button" id="wmGuideInlineNext">${C("word_match_guide_next")}</button>`:""}`;let e=document.getElementById("wmGuideInlineNext");e&&(e.onclick=()=>Ho("next"))}return!0}function Ti(n,e=[]){n.guideMagnifierMode=!1,n.hintIds=new Set(e),n.hintColors=new Map(e.map(t=>[t,1]))}function Ho(n){let e=Se;if(!e?.guideMode||e.finished)return;let t=s=>{e.guidePromptKey=s,e.guideNeedNext=!1,e.guideMagnifierMode=!1},i=()=>{Ee(Xt),ht()};if(we===0){if(n!=="guide_l1")return i();Qs("\u306D\u3053"),e.selectedReading="guide_l1",t("word_match_guide_prompt_1"),Ti(e,["guide_r1"]),we=1}else if(we===1){if(n!=="guide_r1")return i();Ee(jt),Ee(cn),e.selectedReading=null,e.combo=1,e.chainPendingIds=new Set(["guide_l1","guide_r1"]),e.chainCount=1,t("word_match_guide_prompt_2"),Ti(e,["guide_l2"]),we=2}else if(we===2){if(n!=="guide_l2")return i();Qs("\u307F\u305A"),e.selectedReading="guide_l2",t("word_match_guide_prompt_3"),Ti(e,["guide_r2"]),we=3}else if(we===3){if(n!=="guide_r2")return i();Ee(jt),Ee(cn),e.selectedReading=null,e.combo=2,e.chainPendingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2"]),e.chainCount=2,Ji("word_match_guide_prompt_4"),we=4;return}else if(we===4){if(n!=="next")return i();e.chainCount=4,Ji("word_match_guide_prompt_5"),we=5;return}else if(we===5){if(n!=="next")return i();e.removingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2"]),e.score=180,e.lastGain=180,Ee(cn),Gr("guide_r2",46),Ji("word_match_guide_prompt_6"),we=6;return}else if(we===6){if(n!=="next")return i();e.removingIds.clear(),e.chainPendingIds.clear(),e.droppingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2"]),Ee(mo),t("word_match_guide_prompt_7"),Ti(e,["guide_l3"]),we=7}else if(we===7){if(n!=="guide_l3")return i();Qs("\u3084\u307E"),e.selectedReading="guide_l3",t("word_match_guide_prompt_7b"),Ti(e,["guide_r2"]),we=8}else if(we===8){if(n!=="guide_r2")return i();Ee(yn),e.lives=4,e.selectedReading=null,e.wrongIds=new Set(["guide_l3","guide_r2"]),Ji("word_match_guide_prompt_7c"),we=9;return}else if(we===9){if(n!=="next")return i();e.wrongIds.clear(),t("word_match_guide_prompt_8"),Ti(e,[]),we=10}else if(we===10){if(n!=="bomb")return i();Ee(Xt),e.bombArmed=!0,t("word_match_guide_prompt_8_pick"),Ti(e,["guide_l2"]),we=11}else if(we===11){if(n!=="guide_l2")return i();e.bombArmed=!1,e.powerups.bomb=0,e.removingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2","guide_l3","guide_r3"]),Ee(cn),Gr("guide_l2",60),Ji("word_match_guide_prompt_8b"),we=12;return}else if(we===12){if(n!=="next")return i();e.removingIds.clear(),t("word_match_guide_prompt_8c"),Ti(e,[]),we=13}else if(we===13){if(n!=="mag")return i();Ee(Xt),e.powerups.magnifier=0,e.guideMagnifierMode=!0,e.hintIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2","guide_l3","guide_r3"]),e.hintColors=new Map([["guide_l1",1],["guide_r1",1],["guide_l2",2],["guide_r2",2],["guide_l3",3],["guide_r3",3]]),Ji("word_match_guide_prompt_8d"),we=14;return}else if(we===14){if(n!=="next")return i();e.guideMagnifierMode=!1,Ji("word_match_guide_prompt_9"),we=15;return}else if(we===15){if(n!=="next")return i();Ew();return}ht()}function zt(n){h.wmGuidePrompt&&(h.wmGuidePrompt.textContent=C(n))}function Cw(n){return{l1:"\u306D\u3053",r1:"\u306D\u3053",l2:"\u307F\u305A",r2:"\u307F\u305A",l3:"\u3084\u307E",r3:"\u3084\u307E"}[n]||""}function fp(n=we){return[4,5,6,9,12,14,15].includes(n)}function pp(n=we){return{0:"l1",1:"r1",2:"l2",3:"r2",7:"l3",8:"r2",10:"bomb",11:"l2",13:"mag"}[n]||null}function Rw(n){let e=h.wmGuide;if(!e||(e.querySelectorAll(".wm-guide-pointer").forEach(r=>r.remove()),!n))return;let t=n.getBoundingClientRect(),i=document.createElement("div");i.className="wm-guide-pointer",i.textContent="\u{1F449}";let s=t.left<72;i.classList.toggle("from-right",s),i.style.left=`${s?Math.min(window.innerWidth-72,t.right+8):Math.max(8,t.left-64)}px`,i.style.top=`${Math.max(8,Math.min(window.innerHeight-72,t.top+t.height/2-34))}px`,e.appendChild(i)}function Mf(){let n=h.wmGuide;if(!n)return;let e=[...n.querySelectorAll(".wm-demo-tile")],t=[...n.querySelectorAll(".wm-demo-tool")];e.forEach(l=>{l.dataset.demo&&(l.dataset.id=l.dataset.demo),l.classList.remove("guide-glow","selected","paired","clearing","drop","hintshake","hint-color-1","hint-color-2","hint-color-3","disabled","wrong","chain-mark-1","chain-mark-2","chain-mark-3","chain-mark-4","chain-mark-5","chain-mark-6"),l.disabled=!1,l.style.removeProperty("--wm-chain-speed")}),t.forEach(l=>l.classList.remove("guide-glow","used","selected")),h.wmGuideStart&&h.wmGuideStart.classList.remove("guide-glow"),h.wmGuideScore&&(h.wmGuideScore.textContent=we>=6?"180":"0"),h.wmGuideCombo&&(h.wmGuideCombo.textContent=we>=4?"2":we>=2?"1":"0"),h.wmGuideHearts&&(h.wmGuideHearts.textContent=we>=9?"\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F":"\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F");let i=(l,u="chain-mark-1",d=".9s")=>l.forEach(f=>{let p=n.querySelector(`[data-demo="${f}"]`);p&&(p.classList.add("paired",u),p.style.setProperty("--wm-chain-speed",d))}),s=l=>l.forEach(u=>n.querySelector(`[data-demo="${u}"]`)?.classList.add("guide-glow")),r=l=>l.forEach(u=>n.querySelector(`[data-demo="${u}"]`)?.classList.add("selected")),a=()=>h.wmGuideStart?.classList.add("guide-glow");we===0?(zt("word_match_guide_prompt_0"),s(["l1"])):we===1?(zt("word_match_guide_prompt_1"),r(["l1"]),s(["r1"])):we===2?(zt("word_match_guide_prompt_2"),i(["l1","r1"]),s(["l2"])):we===3?(zt("word_match_guide_prompt_3"),i(["l1","r1"]),r(["l2"]),s(["r2"])):we===4?(zt("word_match_guide_prompt_4"),i(["l1","r1","l2","r2"],"chain-mark-2",".72s"),a()):we===5?(zt("word_match_guide_prompt_5"),i(["l1","r1","l2","r2"],"chain-mark-4",".24s"),a()):we===6?(zt("word_match_guide_prompt_6"),["l1","r1","l2","r2"].forEach(l=>n.querySelector(`[data-demo="${l}"]`)?.classList.add("clearing")),a()):we===7?(zt("word_match_guide_prompt_7"),s(["l3"])):we===8?(zt("word_match_guide_prompt_7b"),r(["l3"]),s(["r2"])):we===9?(zt("word_match_guide_prompt_7c"),n.querySelector('[data-demo="l3"]')?.classList.add("wrong"),n.querySelector('[data-demo="r2"]')?.classList.add("wrong"),a()):we===10?(zt("word_match_guide_prompt_8"),n.querySelector('[data-demo="bomb"]')?.classList.add("guide-glow")):we===11?(zt("word_match_guide_prompt_8_pick"),n.querySelector('[data-demo="bomb"]')?.classList.add("selected"),s(["l2"])):we===12?(zt("word_match_guide_prompt_8b"),n.querySelector('[data-demo="bomb"]')?.classList.add("used"),["l1","r1","l2","r2","l3","r3"].forEach(l=>n.querySelector(`[data-demo="${l}"]`)?.classList.add("clearing")),a()):we===13?(zt("word_match_guide_prompt_8c"),n.querySelector('[data-demo="mag"]')?.classList.add("guide-glow")):we===14?(zt("word_match_guide_prompt_8d"),n.querySelector('[data-demo="mag"]')?.classList.add("used"),["l1","r1","l2","r2","l3","r3"].forEach((l,u)=>{let d=n.querySelector(`[data-demo="${l}"]`);d&&d.classList.add("hintshake",`hint-color-${u%3+1}`)}),a()):(zt("word_match_guide_prompt_9"),a(),s(["l1","r1"])),h.wmGuideStart&&(h.wmGuideStart.textContent=C(we>=15?"word_match_guide_start":"word_match_guide_next"));let o=pp(),c=o?n.querySelector(`[data-demo="${o}"]`):fp()?h.wmGuideStart:null;requestAnimationFrame(()=>Rw(c))}function bf(n=null){let e=pp();if(e&&n!==e){Ee(Xt),Mf();return}if(!(!e&&n)){if(e&&n){let t=Cw(n),i=we===1&&n==="r1"||we===3&&n==="r2",s=we===8&&n==="r2";t&&!i&&Qs(t),i?(Ee(jt),Ee(cn)):s?Ee(yn):n==="bomb"?Ee(Xt):we===11&&n==="l2"?(Ee(cn),Gr("l2",42)):n==="mag"&&Ee(Xt)}if(!(fp()&&n)){if(we+=1,we>15){cu(!0);return}Mf()}}}function cu(n=!0){if(h.wmGuide&&(h.wmGuide.classList.add("hide"),h.wmGuide.setAttribute("aria-hidden","true"),n&&(G.wordMatchGuideSeen=!0,G.wordMatchGuideVersion=pu,pt(G)),Kl)){let e=Kl;Kl=null,e()}}async function Vo(n=!1){let e=++Ro;h.wordMatchScreen?.classList.remove("wm-setup-mode"),h.wmSetup?.classList.add("hide");let t=Se&&!Se.guideMode?Se:null,i=n&&t?.score||0,s=n&&t?.combo||0,r=n&&t?.maxCombo||0,a=n&&(t?.nextLevel||(t?.level||0)+1)||1,o=ns(),c=n&&o;if(po(),lo(),rs(),c||Yi(),ts(""),!n&&G.wordMatchGuideVersion!==pu)return await dp(!0),Vo(!0);sw(),h.wmMessage&&(h.wmMessage.textContent=C("loading")),await cw();let l=Math.max(1,Number(a)||1),u=Mu(l),d=u.cols*u.rows,f=Tw(d);if(!f.length){Se={leftSlots:[],rightSlots:[],selectedReading:null,selectedWord:null,score:0,busy:!1,removingIds:new Set,dropping:!1},h.wmReadings.innerHTML="",h.wmWords.innerHTML="",h.wmScore.textContent="0",h.wmLeft.textContent=G.wordMatchBest||0,h.wmTime&&(h.wmTime.textContent="0:00"),h.wmMessage.textContent=C("no_questions");return}Se={level:l,levelConfig:u,finiteLevel:!0,visiblePairs:d,leftSlots:f.map((v,m)=>({...v,_wmId:`${v._wmId}_l_${m}`})).slice(0,d),rightSlots:is(f.map((v,m)=>({...v,_wmId:`${v._wmId}_r_${m}`}))).slice(0,d),selectedReading:null,selectedWord:null,score:i,startedAt:0,lastGain:0,combo:s,maxCombo:Math.max(r,s),pairsCleared:0,bonusSeconds:0,nextMultiplier:1,powerups:{bomb:2,magnifier:3},lives:5,bombArmed:!1,goal:{type:"pairs",target:d,labelKey:"word_match_goal_pairs",done:!1},finished:!1,busy:!0,removingIds:new Set,wrongIds:new Set,newIds:new Set,droppingIds:new Set,selectedAt:0,lastNudgeAt:0,chainActive:!1,chainCount:0,chainDeadline:0,chainMultiplier:1,chainPendingPairs:[],chainPendingBaseIds:new Set,chainPendingIds:new Set,musicOn:ns(),dropping:!1};let p=Se;h.wmTime&&(h.wmTime.textContent=ss(tp)),ht(),wf(),Au();let g=["3","2","1",C("word_match_start")];for(let v of g){if(e!==Ro||Se!==p||!Se)return;ts(v,"start-count"),Ee(jd,v),Qs(v==="3"?"\u3055\u3093":v==="2"?"\u306B":v==="1"?"\u3044\u3061":"\u30B9\u30BF\u30FC\u30C8"),await new Promise(m=>setTimeout(m,v===C("word_match_start")?650:700))}e!==Ro||Se!==p||!Se||Se.finished||(or("start-count"),Se.busy=!1,Se.startedAt=Date.now(),ht(),lp(),wf())}function mp(n){n<=(G.wordMatchBest||0)||(G.wordMatchBest=n,pt(G))}function ht(){if(!h.wmReadings||!h.wmWords)return;if(!Se){if(h.wordMatchScreen?.classList.contains("wm-setup-mode"))return;Vo();return}let n=Se;n.guideMode||Ru(n);let e=rw(n),t=aw(n);if(h.wmReadings.style.setProperty("--wm-cols",e),h.wmWords.style.setProperty("--wm-cols",e),h.wmReadings.style.setProperty("--wm-rows",t),h.wmWords.style.setProperty("--wm-rows",t),h.wmScore.textContent=n.score||0,h.wmLeft.textContent=G.wordMatchBest||0,h.wmCombo&&(h.wmCombo.textContent=n.combo||0),h.wmGoal&&(h.wmGoal.textContent=n.finiteLevel?`${ow(n)} ${n.pairsCleared||0}/${n.visiblePairs||ip(n)}`:dw(n)),h.wmPower&&(h.wmPower.textContent=`\xD7${(n.nextMultiplier||1).toFixed((n.nextMultiplier||1)%1?1:0)}`),Cu(),cr(),ou(),h.wmWrong&&(h.wmWrong.textContent=""),n.guideMode)Aw(n);else if(n.finished)h.wmMessage.textContent=n.finishMessage||`${C("word_match_timeup")} ${C("word_match_score")}\uFF1A${n.score||0}`;else{let s=n.combo?` ${C("word_match_combo")} ${n.combo}`:"";h.wmMessage.textContent=n.lastGain?`${C("word_match_plus")}${n.lastGain}${s} \xB7 ${C("word_match_hint")}`:C("word_match_hint")}let i=(s,r)=>{let a=document.createElement("button"),o=r==="reading";a.type="button",a.className=`wm-tile ${o?"reading":"word"}`,a.dataset.id=s._wmId,a.dataset.base=s._wmBaseId,a.dataset.side=r,a.dataset.points=bu(s),a.title=`+${a.dataset.points}`;let c=o?s._wmReading:s._wmLabel;if(a.textContent=c,s._wmSpecial){a.classList.add("special",`special-${s._wmSpecial}`);let l=document.createElement("span");l.className="wm-special-badge",l.textContent=s._wmSpecial==="time"?C("word_match_special_seconds",10):s._wmSpecial==="hint"?"?":"\xD72",a.appendChild(l)}if([...c].length>=5&&a.classList.add("long"),[...c].length>=7&&a.classList.add("xlong"),(n.newIds?.has(s._wmId)||n.droppingIds?.has(s._wmId))&&a.classList.add("drop"),n.hintIds?.has(s._wmId)){a.classList.add("hintshake");let l=n.hintColors?.get(s._wmId);l&&a.classList.add(`hint-color-${l}`),n.guideMode&&!n.guideMagnifierMode&&a.classList.add("guide-target"),n.guideMode&&n.guideMagnifierMode&&a.classList.add("guide-pair-hint")}if(n.chainPendingIds?.has(s._wmId)){a.classList.add("paired",Cx(n.chainCount||1));let l=Math.max(0,(n.chainDeadline||0)-Date.now()),u=Math.max(.12,Math.min(1.35,.16+l/7e3));a.style.setProperty("--wm-chain-speed",`${u}s`),a.disabled=!0}return n.finished&&(a.classList.add("disabled"),a.disabled=!0),n.removingIds?.has(s._wmId)&&a.classList.add("clearing"),n.wrongIds?.has(s._wmId)&&a.classList.add("wrong"),(o&&n.selectedReading===s._wmId||!o&&n.selectedWord===s._wmId)&&(a.classList.add("selected"),n.guideMode&&a.classList.add("guide-selected")),a.onclick=()=>Iw(s._wmId,r),a};h.wmReadings.innerHTML="",h.wmWords.innerHTML="",n.leftSlots.forEach(s=>h.wmReadings.appendChild(i(s,"reading"))),n.rightSlots.forEach(s=>h.wmWords.appendChild(i(s,"word")))}function Fr(n){let e=Se;return[...e?.leftSlots||[],...e?.rightSlots||[]].find(t=>t._wmId===n)||null}function _p(n=!1){let e=Se;if(!e||e.finished)return;let t=null,i=[];if(e.selectedReading||e.selectedWord?(t=Fr(e.selectedReading||e.selectedWord),i=e.selectedReading?e.rightSlots:e.leftSlots):n&&(t=(e.leftSlots||[])[Pe((e.leftSlots||[]).length)??0],i=e.rightSlots||[]),!t)return;let s=(i||[]).find(r=>Oo(t,r));s&&(e.hintIds=new Set([t._wmId,s._wmId]),e.hintColors=new Map([[t._wmId,1],[s._wmId,1]]),Ee(Xt),ht(),setTimeout(()=>{Se&&(Se.hintIds?.clear(),Se.hintColors?.clear(),ht())},800))}function Pw(){let n=Se;if(!n||n.finished||n.busy)return;let e=n.selectedReading||n.selectedWord,t=!!n.selectedReading!=!!n.selectedWord;if(!e||!t){n.selectedAt=0,n.lastNudgeAt=0;return}let i=Date.now();n.selectedAt||(n.selectedAt=i),!(i-n.selectedAt<1e4)&&(i-(n.lastNudgeAt||n.selectedAt)<3e3||(n.lastNudgeAt=i,!((Pe(10)??9)>=3)&&_p(!1)))}function Oo(n,e){let t=ff(Number(n?._wmKey)||0,Number(e?._wmKey)||0);return t!==null?t:!!(n&&e&&n._wmBaseId===e._wmBaseId)}function Fo(n){let e=document.querySelector("#wordMatchScreen .word-match-board");e&&(e.classList.remove("wm-hit","wm-miss"),e.offsetWidth,e.classList.add(n),setTimeout(()=>e.classList.remove(n),360),h.wmScore&&(h.wmScore.classList.remove("wm-score-pop"),h.wmScore.offsetWidth,h.wmScore.classList.add("wm-score-pop"),setTimeout(()=>h.wmScore.classList.remove("wm-score-pop"),360)))}function Iw(n,e){let t=Se;if(!t||t.finished||t.busy||t.removingIds?.has(n))return;if(t.guideMode){Ho(n);return}let i=Fr(n);if(t.bombArmed&&i){Sw(n,e);return}let s=t.selectedReading,r=t.selectedWord,a=e==="reading"?s===n:r===n,o=e==="reading"?!!r&&s!==n:!!s&&r!==n,c=!!i&&!a;if(o){let l=Fr(e==="reading"?r:s);i&&l&&Oo(i,l)&&(c=!1)}if(c&&Qs(i._wmSpeak||i._wmReading),e==="reading"?t.selectedReading=t.selectedReading===n?null:n:t.selectedWord=t.selectedWord===n?null:n,t.hintIds=new Set,t.hintColors=new Map,t.selectedReading&&!t.selectedWord||!t.selectedReading&&t.selectedWord?(t.selectedAt=Date.now(),t.lastNudgeAt=t.selectedAt):!t.selectedReading&&!t.selectedWord&&(t.selectedAt=0,t.lastNudgeAt=0),t.selectedReading&&t.selectedWord){let l=Fr(t.selectedReading),u=Fr(t.selectedWord);if(l&&u&&Oo(l,u)){if(t.chainPendingBaseIds?.has(l._wmBaseId)){t.selectedReading=null,t.selectedWord=null,ht();return}let p=bu(l),g=Date.now(),v=t.selectedAt&&g-t.selectedAt<=3e3?10:0;t.combo=(t.combo||0)+1,t.maxCombo=Math.max(t.maxCombo||0,t.combo),t.pairsCleared=(t.pairsCleared||0)+1;let m=hw(t.combo),_=t.nextMultiplier||1;Px(),t.chainPendingPairs=Array.isArray(t.chainPendingPairs)?t.chainPendingPairs:[],t.chainPendingBaseIds=t.chainPendingBaseIds||new Set,t.chainPendingIds=t.chainPendingIds||new Set,t.chainPendingPairs.push({baseId:l._wmBaseId,leftId:l._wmId,rightId:u._wmId,baseGain:p,comboMult:m,powerMult:_,fastBonus:v,specialItem:l._wmSpecial?l:u}),t.chainPendingBaseIds.add(l._wmBaseId),t.chainPendingIds.add(l._wmId),t.chainPendingIds.add(u._wmId),t.nextMultiplier=1,t.lastGain=0,Ee(jt),mw(t.combo,u._wmId),Fo("wm-hit"),t.selectedReading=null,t.selectedWord=null,t.selectedAt=0,t.lastNudgeAt=0,ht(),zf(t)&&tu();return}let d=t.selectedReading,f=t.selectedWord;t.lastGain=0,t.combo=0,t.nextMultiplier=1,tu(),t.lives=Math.max(0,(t.lives??5)-1),Ee(yn),Fo("wm-miss"),t.wrongIds=new Set([d,f]),t.selectedReading=null,t.selectedWord=null,t.selectedAt=0,t.lastNudgeAt=0,ht(),setTimeout(()=>{if(Se){if(Se.wrongIds?.clear(),(Se.lives??0)<=0){cp(`${C("word_match_life_empty")} ${C("word_match_score")}\uFF1A${Se.score||0}`);return}ht()}},500);return}ht()}var gp="kana_quiz_song_lyrics_v1",zn=null,Co=0;function Go(){try{return JSON.parse(localStorage.getItem(gp)||"{}")}catch{return{}}}function vp(n){localStorage.setItem(gp,JSON.stringify(n||{}))}function Sf(n){return/[ぁ-ゖァ-ヺー]/.test(String(n||""))}function Lw(n){let e=mf(n);if(e)return e;let t=String(n||"").split(/\r?\n/).map(s=>s.trim()).filter(Boolean),i=[];for(let s=0;s<t.length;s++){let r=t[s],a=r.includes("	")?r.split("	"):r.split(/\s*\|\|\s*/);if(a.length>1){i.push({jp:(a[0]||"").trim(),note:a.slice(1).join(" ").trim()});continue}if(!Sf(r)){i.length&&!i[i.length-1].note&&(i[i.length-1].note=r);continue}let o="",c=t[s+1]||"";c&&!Sf(c)&&(o=c,s++),i.push({jp:r,note:o})}return i.filter(s=>s.jp)}function kw(n){return(n||[]).map(e=>e.note?`${e.jp}	${e.note}`:e.jp).join(`
`)}function Nw(n){let e=xn().replace("-","_");return n?.[`note_${e}`]||n?.note||""}function Pu(){if(!zn)return[];let n=Go();return Array.isArray(n[zn.id])?n[zn.id]:[]}function Dw(n,e=[]){let t=String(n||"");if(!t)return"";let i=Array.isArray(e)&&e.length>0,s=sr,r=fu;if(i){let u=new Map;[...e,...sr].forEach(d=>Ei(u,d.kanji,d.reading)),s=[...u.entries()].map(([d,f])=>({kanji:d,reading:f})).sort((d,f)=>f.kanji.length-d.kanji.length),r=s.map(mu).filter(Boolean).sort((d,f)=>f.stem.length-d.stem.length||f.baseTail.length-d.baseTail.length)}let a=s.filter(u=>t.includes(u.kanji)).sort((u,d)=>d.kanji.length-u.kanji.length),o=lf(t,a);if(o&&!rr(o))return o;let c=r.filter(u=>t.includes(u.stem)),l="";for(let u=0;u<t.length;){let d=a.find(g=>t.startsWith(g.kanji,u));if(d){l+=d.reading,u+=d.kanji.length;continue}let f=c.map(g=>Wf(t,u,g)).find(Boolean);if(f){l+=f.reading,u+=f.surface.length;continue}let p=Gf(t,u);if(p){l+=p.reading,u+=p.surface.length;continue}l+=t[u],u+=1}return l.replace(/\s+/g," ").trim()}function Uw(n){if(n?.note)return n.note;let e=xn();return e==="ja"?"\u7FFB\u8A33/\u30E1\u30E2\uFF1A\u672A\u5165\u529B\uFF08\u6B4C\u8A5E\u306E\u6B21\u306E\u884C\u3001\u307E\u305F\u306F Tab \u306E\u5F8C\u308D\u306B\u8FFD\u52A0\uFF09":e==="en"?"Translation/note: not entered. Add it on the next line or after a Tab.":e==="zh-TW"?"\u7FFB\u8B6F/\u89E3\u91CB\uFF1A\u672A\u586B\u5BEB\uFF08\u53EF\u653E\u5728\u6B4C\u8A5E\u4E0B\u4E00\u884C\uFF0C\u6216\u540C\u4E00\u884C Tab \u5F8C\u9762\uFF09":"\u7FFB\u8BD1/\u89E3\u91CA\uFF1A\u672A\u586B\u5199\uFF08\u53EF\u653E\u5728\u6B4C\u8BCD\u4E0B\u4E00\u884C\uFF0C\u6216\u540C\u4E00\u884C Tab \u540E\u9762\uFF09"}function Wo(){if(!h.songsList)return;h.songsList.innerHTML="";let n=Go();(Oe.songs||[]).forEach((e,t)=>{let i=Array.isArray(n[e.id])?n[e.id].length:0,s=document.createElement("div");s.className="song-card",s.innerHTML=`
      <div class="song-card-index">${t+1}</div>
      <div class="song-card-main">
        <div class="song-card-title">${ke(e.title)}</div>
        <div class="song-card-meta">${ke(e.artist||"")} ${e.year?`\xB7 ${ke(e.year)}`:""}</div>
      </div>
      <div class="song-card-lines">${i?C("song_lines_count",i):C("song_not_added")}</div>
    `,s.onclick=()=>Ow(e),h.songsList.appendChild(s)})}function Ow(n){if(zn=n,!h.songDetail)return;h.songDetail.classList.remove("hide"),h.songDetailTitle.textContent=n.title||"";let e=[n.artist,n.year,Nw(n)].filter(Boolean);h.songDetailMeta.textContent=e.join(" \xB7 "),h.songLyricsInput.value=kw(Pu()),$o(),setTimeout(()=>h.songDetail.scrollIntoView({behavior:"smooth",block:"start"}),0)}function Tf(){zn=null,h.songDetail&&h.songDetail.classList.add("hide")}function Fw(){if(!zn)return;let n=Go();n[zn.id]=Lw(h.songLyricsInput?.value||""),vp(n),Wo(),$o()}function Bw(){if(!zn||!confirm(C("song_clear_confirm")))return;let n=Go();delete n[zn.id],vp(n),h.songLyricsInput.value="",Wo(),$o()}function Ur(n,e,t=!1){if(!n)return;let i=Math.max(0,Math.min(100,Math.round((Number(e)||0)*100)));n.classList.toggle("speaking",!t),n.style.setProperty("--speak-progress",`${i}%`),n.innerHTML=t?"\u{1F50A}":`<span class="speaker-wave" aria-hidden="true">\u{1F50A}</span><span>${i}%</span>`,t&&n.style.removeProperty("--speak-progress")}function zw(n,e){let t=Pu()[n];if(!t?.jp)return;let i=++Co;Ur(e,0),Lt(t.jp,{onStart:()=>i===Co&&Ur(e,.03),onProgress:r=>i===Co&&Ur(e,r),onEnd:()=>i===Co&&Ur(e,1,!0)})||Ur(e,1,!0)}function $o(){if(!h.songLines)return;let n=Pu();if(!zn){h.songLines.innerHTML="";return}if(!n.length){h.songLines.innerHTML=`<div class="song-empty">${ke(C("song_no_lyrics"))}</div>`;return}h.songLines.innerHTML=n.map((e,t)=>`
    <div class="song-line">
      <button class="song-line-play" type="button" data-song-line="${t}" aria-label="${ke(C("song_line_play"))}">\u{1F50A}</button>
      <div class="song-line-body">
        <div class="song-line-jp">${en(e.jp)}</div>
        <div class="song-line-reading"><b>${ke(C("song_reading_label"))}</b>${ke(Dw(e.jp))}</div>
        <div class="song-line-note"><b>${ke(C("song_translation_label"))}</b>${ke(Uw(e))}</div>
      </div>
    </div>
  `).join("")}var Hr=0;function Ef(n=Hr){!h.btnSpeak||n!==Hr||(h.btnSpeak.classList.remove("speaking"),h.btnSpeak.style.removeProperty("--speak-progress"),h.btnSpeak.textContent=C("btn_speak"))}function Or(n=0){if(!h.btnSpeak)return;let e=Math.max(0,Math.min(100,Math.round((Number(n)||0)*100)));h.btnSpeak.classList.add("speaking"),h.btnSpeak.style.setProperty("--speak-progress",`${e}%`),h.btnSpeak.innerHTML=`<span class="speaker-wave" aria-hidden="true">\u{1F50A}</span><span>${ke(C("btn_speaking"))}</span><span class="speak-percent">${e}%</span>`}function Hw(){return $?$.mode==="n2_exam"||$.mode==="n2_study"||$.mode==="n2_progressive"?qf($.n2Q,$.mode==="n2_exam"?"speak":"full"):$.mode==="sentence_study"||$.mode==="sentence_quiz"?$.sentenceItem?.jp||"":Zs($.mode)&&$.source?un($.source):$.correct?un($.correct):"":""}function Af(){let n=Hw();if(!n)return;let e=++Hr;Or(0),Lt(n,{onQueued:()=>Or(0),onStart:()=>Or(.03),onProgress:i=>{e===Hr&&Or(i)},onEnd:()=>{e===Hr&&(Or(1),setTimeout(()=>Ef(e),220))}})||Ef(e)}var yp=[],er=null,$e=null;function Ai(n,e){if(!n)return"";let t=xn().replace("-","_");return n[`${e}_${t}`]??n[e]??""}function xp(){h.grammarTopics&&(h.grammarTopics.innerHTML="",yp.forEach(n=>{let e=document.createElement("div");e.className="grammar-topic-card",e.innerHTML=`
      <div class="grammar-topic-icon">${n.emoji||"\u{1F4D8}"}</div>
      <div class="grammar-topic-info">
        <div class="grammar-topic-title">${Ai(n,"title")}</div>
        <div class="grammar-topic-sub">${Ai(n,"subtitle")}</div>
      </div>
      <div class="grammar-topic-arrow">\u203A</div>
    `,e.onclick=()=>wp(n),h.grammarTopics.appendChild(e)}))}function wp(n){er=n,h.grammarTopicTitle.textContent=Ai(n,"title"),h.btnGrammarPractice&&h.btnGrammarPractice.classList.toggle("hide",!n.practice),h.grammarContent.innerHTML="";let e=xn().replace("-","_");(n.sections||[]).forEach(t=>{let i=document.createElement("div");switch(t.type){case"intro":i.className="g-intro",i.innerHTML=Ai(t,"text");break;case"heading":i.className="g-heading",i.innerHTML=Ai(t,"text");break;case"rule":i.className="g-rule",i.innerHTML=Ai(t,"text"),t.color&&(i.style.borderLeftColor=t.color);break;case"note":i.className="g-note",i.innerHTML=Ai(t,"text");break;case"verb_list":i.className="g-verb-list",(t.items||[]).forEach(r=>{let a=document.createElement("div");a.className="g-verb",a.innerHTML=`
            <span class="jp">${r.jp}</span>
            <span class="rm">${r.rm||""}</span>
            <span class="cn">${Ai(r,"cn")}</span>
          `,a.onclick=()=>Lt(r.jp.replace(/[（(].*?[)）]/g,"")),i.appendChild(a)});break;case"steps":i.className="g-steps",(t[`items_${e}`]||t.items||[]).forEach(r=>{let a=document.createElement("div");a.className="step",a.innerHTML=r,i.appendChild(a)});break;default:return}h.grammarContent.appendChild(i)}),St(h.grammarTopicScreen)}function is(n){let e=n.slice(),t=kr(e.length,0,e.length);if(t?.indices?.length===e.length)return t.indices.map(s=>e[s]);let i=Zn(e.length);return i.length===e.length?i.map(s=>e[s]):e}function Mp(){if(!er||!er.practice)return;let n=er.practice,e=is(n.items||[]),t=e;n.type==="scenario"&&(t=e.map(i=>{let s=i.options||[],r=is(s.map((c,l)=>l)),a=r.map(c=>s[c]),o=r.indexOf(i.answer);return{...i,options:a,answer:o}})),$e={practice:n,items:t,idx:0,ok:0,ng:0,answered:!1},h.gpTotal.textContent=$e.items.length,h.gpOk.textContent=0,h.gpNg.textContent=0,h.gpDone.textContent=0,h.gpProgressFill.style.width="0%",St(h.grammarPracticeScreen),Iu()}function Iu(){let{practice:n,items:e,idx:t}=$e;if(t>=e.length){let a=e.length,o=uf($e.ok,a)||"0%",c=Number.parseInt(o,10)||0,l=c>=90?"\u{1F3C6}":c>=70?"\u{1F389}":c>=50?"\u{1F44D}":"\u{1F4AA}";h.gpHint.textContent="",h.gpQ.textContent="",h.gpOpts.innerHTML="",h.gpResult.innerHTML=`<div class="gp-summary"><div style="font-size:2.6rem;margin-bottom:6px">${l}</div><div class="big">${o}</div><div class="sub">${C("gp_summary_sub",a,$e.ok,$e.ng)}</div></div>`,h.btnGpNext.textContent=C("gp_again");return}let i=e[t],s=xn(),r=n[`hint_${s.replace("-","_")}`]||n.hint||n.question||"";if(h.gpHint.textContent=r,h.gpResult.innerHTML="",h.btnGpNext.textContent=C("btn_next"),h.gpOpts.innerHTML="",$e.answered=!1,$e.selected=-1,h.btnGpSubmit&&(h.btnGpSubmit.classList.remove("hide"),h.btnGpSubmit.disabled=!0,h.btnGpSubmit.classList.remove("primary"),h.btnGpSubmit.textContent=C("gp_submit")),h.btnGpNext&&h.btnGpNext.classList.add("hide"),n.type==="scenario"){let a=i[`scene_${s.replace("-","_")}`]||i.scene;h.gpQ.textContent=a,(i.options||[]).forEach((o,c)=>{let l=document.createElement("div");l.className="gp-opt gp-opt-row",l.innerHTML=`
        <button class="gp-speak" type="button" aria-label="\u6717\u8BFB">\u{1F50A}</button>
        <span class="gp-opt-text">${o.jp}</span>
      `,l.querySelector(".gp-speak").onclick=u=>{u.stopPropagation(),Lt(o.jp.replace(/[（(].*?[)）]/g,""))},l.onclick=()=>Cf(c),h.gpOpts.appendChild(l)})}else h.gpQ.textContent=i.q,(n.labels||[]).forEach((a,o)=>{let c=document.createElement("div");c.className="gp-opt",c.textContent=a,c.onclick=()=>Cf(o),h.gpOpts.appendChild(c)}),setTimeout(()=>Lt(i.q.replace(/[（(].*?[)）]/g,"")),300)}function Cf(n){if(!$e||$e.answered)return;if($e.selected=n,h.gpOpts.querySelectorAll(".gp-opt").forEach((i,s)=>i.classList.toggle("selected",s===n)),$e.practice.type==="scenario"){let s=$e.items[$e.idx].options[n];s&&s.jp&&Lt(s.jp.replace(/[（(].*?[)）]/g,""))}h.btnGpSubmit&&(h.btnGpSubmit.disabled=!1,h.btnGpSubmit.classList.add("primary"))}function Vw(){!$e||$e.answered||$e.selected<0||(Gw($e.selected),h.btnGpSubmit&&h.btnGpSubmit.classList.add("hide"),h.btnGpNext&&h.btnGpNext.classList.remove("hide"))}function Gw(n,e){if($e.answered)return;$e.answered=!0;let t=$e.practice,i=$e.items[$e.idx],s=i.answer!==void 0?i.answer:i.a,r=Nr(n,s)??n===s;r?($e.ok++,jt()):($e.ng++,yn()),h.gpOpts.querySelectorAll(".gp-opt").forEach((u,d)=>{u.setAttribute("disabled","true"),d===s?u.classList.add("correct"):d===n&&u.classList.add("wrong")});let o=xn(),c=(u,d)=>u&&(u[`${d}_${o.replace("-","_")}`]||u[d])||"";if(t.type==="scenario"){let u=i.options[s],d=t[`labels_${o.replace("-","_")}`]||t.labels||[],f=d&&u.g!==void 0?d[u.g]:"",p=c(i,"note"),g=c(i,"usage"),v=p?`<div class="gp-note">\u26A0\uFE0F ${p}</div>`:"",m=g?`<div class="gp-usage">\u{1F4A1} ${g}</div>`:"";setTimeout(()=>Lt(u.jp.replace(/[（(].*?[)）]/g,"")),300);let _=r?`\u2705 ${C("gp_right")}<b>${u.jp}</b> \xB7 <span class="gp-tag">${f}</span>`:`\u274C ${C("gp_answer")}<b>${u.jp}</b> \xB7 <span class="gp-tag">${f}</span>`;h.gpResult.innerHTML=_+v+m}else{let u=t.labels[s],d=c(i,"cn");h.gpResult.innerHTML=r?`\u2705 ${C("gp_right")}<b>${i.q}</b> \u2192 <b>${u}</b>${d?`\uFF08${d}\uFF09`:""}`:`\u274C ${C("gp_wrong")}<b>${i.q}</b> \u2192 <b>${u}</b>${d?`\uFF08${d}\uFF09`:""}`}h.gpOk.textContent=$e.ok,h.gpNg.textContent=$e.ng,h.gpDone.textContent=$e.idx+1;let l=($e.idx+1)/$e.items.length*100;h.gpProgressFill.style.width=l+"%"}function Ww(){if($e){if(!$e.answered&&$e.idx<$e.items.length){h.gpResult.textContent=C("please_answer");return}if($e.idx>=$e.items.length){Mp();return}$e.idx++,Iu()}}function bp(n){return n==="n2_exam"}function $w(n){return n==="rm_in"||n==="jp_in"}function Sp(n){return!$||mt?!1:bp(n)||n==="sentence_quiz"?!0:!$w(n)&&Array.isArray($.choices)&&$.choices.length>0}function ii(){h.btnNew&&(Sp($?.mode)?(h.btnNew.textContent=C("btn_answer"),h.btnNew.disabled=!($.selectedChoiceIndex>=0)):(h.btnNew.textContent=C("btn_next"),h.btnNew.disabled=!1))}function Qn(n){!$||mt||($.selectedChoiceIndex=n,h.result.textContent="",[...h.opts.querySelectorAll(".opt")].forEach((e,t)=>{e.classList.toggle("selected",t===n)}),ii())}function tr(n,e){[...h.opts.querySelectorAll(".opt")].forEach((t,i)=>{t.classList.remove("selected"),t.classList.add("disabled"),i===e&&t.classList.add("correct"),i===n&&n!==e&&t.classList.add("wrong")})}function qw(){if(!$||mt)return;let n=$.selectedChoiceIndex;if(!(n>=0)){h.result.textContent=C("please_answer");return}bp($.mode)?gM(n,$.n2Q):$.mode==="sentence_quiz"?lM(n):vM(n)}function jw(){Sp($?.mode)?qw():Ip()}function Zl(){!h?.quizScreen||h.quizScreen.classList.contains("hide")||requestAnimationFrame(()=>{let n=h.quizScreen.querySelector(".quiz-header")||h.quizScreen,e=Math.max(0,n.getBoundingClientRect().top+window.scrollY-8);window.scrollTo({top:e,behavior:"smooth"})})}function Bo(n){if(n==="n2_exam"){h.inputWrap.classList.add("hide"),h.opts.classList.remove("hide"),ii();return}let e=n==="rm_in"||n==="jp_in",t=!e;h.inputWrap.classList.toggle("hide",!e),h.opts.classList.toggle("hide",!t),e&&(h.inp.value="",h.inp.placeholder=n==="rm_in"?C("input_kana"):C("input_romaji"),setTimeout(()=>h.inp.focus?.(),0)),ii()}var Xw={\u4E3A:"\u70BA",\u4E48:"\u9EBC",\u5417:"\u55CE",\u8FD9:"\u9019",\u4E2A:"\u500B",\u91CC:"\u88E1",\u70B9:"\u9EDE",\u8BED:"\u8A9E",\u6C14:"\u6C23",\u4F1A:"\u6703",\u53D8:"\u8B8A",\u8FC7:"\u904E",\u5F53:"\u7576",\u65F6:"\u6642",\u73B0:"\u73FE",\u4E60:"\u7FD2",\u793C:"\u79AE",\u8C8C:"\u8C8C",\u8BCD:"\u8A5E",\u52A8:"\u52D5",\u5C06:"\u5C07",\u6765:"\u4F86",\u4E0E:"\u8207",\u5173:"\u95DC",\u7CFB:"\u4FC2",\u5BF9:"\u5C0D",\u9519:"\u932F",\u8BEF:"\u8AA4",\u5E94:"\u61C9",\u8BE5:"\u8A72",\u5199:"\u5BEB",\u8BFB:"\u8B80",\u4E66:"\u66F8",\u5B66:"\u5B78",\u4E60:"\u7FD2",\u7535:"\u96FB",\u8F66:"\u8ECA",\u70B9:"\u9EDE",\u949F:"\u9418",\u949F:"\u9418",\u949F:"\u9418",\u6B22:"\u6B61",\u89C1:"\u898B",\u542C:"\u807D",\u8BF4:"\u8AAA",\u8BA9:"\u8B93",\u7ED9:"\u7D66",\u4ECE:"\u5F9E",\u8FB9:"\u908A",\u5F00:"\u958B",\u5173:"\u95DC",\u95E8:"\u9580",\u95F4:"\u9593",\u9898:"\u984C",\u8BCD:"\u8A5E",\u4E49:"\u7FA9",\u8BD1:"\u8B6F",\u7B80:"\u7C21",\u53D1:"\u767C",\u97F3:"\u97F3",\u7C7B:"\u985E",\u5904:"\u8655",\u8F83:"\u8F03",\u522B:"\u5225",\u8FD9:"\u9019",\u79CD:"\u7A2E",\u6001:"\u614B",\u6807:"\u6A19",\u8BB0:"\u8A18",\u5BBE:"\u8CD3",\u5B9E:"\u5BE6",\u9645:"\u969B",\u58F0:"\u8072",\u8FDB:"\u9032",\u8FDE:"\u9023",\u7EED:"\u7E8C",\u7ED3:"\u7D50",\u6784:"\u69CB",\u7EC4:"\u7D44",\u5355:"\u55AE",\u9009:"\u9078",\u62E9:"\u64C7",\u5C42:"\u5C64",\u663E:"\u986F",\u89C6:"\u8996",\u542C:"\u807D",\u56FD:"\u570B",\u533B:"\u91AB",\u5E08:"\u5E2B",\u5417:"\u55CE",\u95EE:"\u554F",\u96BE:"\u96E3",\u9759:"\u975C",\u513F:"\u5152",\u5C81:"\u6B72",\u5F20:"\u5F35",\u4E07:"\u842C",\u5706:"\u5713",\u5E01:"\u5E63",\u4E70:"\u8CB7",\u5356:"\u8CE3",\u8C01:"\u8AB0",\u54EA:"\u54EA",\u5E26:"\u5E36",\u573A:"\u5834",\u5904:"\u8655",\u5B9E:"\u5BE6",\u9A8C:"\u9A57",\u5907:"\u5099",\u590D:"\u8907",\u5174:"\u8208",\u8C22:"\u8B1D",\u4E1C:"\u6771",\u4E1C\u4EAC:"\u6771\u4EAC",\u53F0:"\u81FA"},Kw=[["\u4E3A\u4EC0\u4E48","\u70BA\u4EC0\u9EBC"],["\u8FD9\u91CC","\u9019\u88E1"],["\u8FD9\u4E2A","\u9019\u500B"],["\u8FD9\u79CD","\u9019\u7A2E"],["\u8BED\u6CD5","\u8A9E\u6CD5"],["\u8BED\u6C14","\u8A9E\u6C23"],["\u793C\u8C8C","\u79AE\u8C8C"],["\u52A8\u8BCD","\u52D5\u8A5E"],["\u540D\u8BCD","\u540D\u8A5E"],["\u5F62\u5BB9\u8BCD","\u5F62\u5BB9\u8A5E"],["\u73B0\u5728","\u73FE\u5728"],["\u5C06\u6765","\u5C07\u4F86"],["\u8FC7\u53BB","\u904E\u53BB"],["\u5B66\u4E60","\u5B78\u7FD2"],["\u8BF4\u660E","\u8AAA\u660E"],["\u53E5\u5B50","\u53E5\u5B50"],["\u4F8B\u53E5","\u4F8B\u53E5"],["\u4E2D\u6587","\u4E2D\u6587"],["\u610F\u601D","\u610F\u601D"],["\u539F\u53E5","\u539F\u53E5"],["\u8868\u8FBE","\u8868\u9054"],["\u4E0D\u80FD","\u4E0D\u80FD"],["\u53EF\u4EE5","\u53EF\u4EE5"],["\u5E94\u8BE5","\u61C9\u8A72"],["\u8FDE\u63A5","\u9023\u63A5"],["\u63A5\u7EED","\u63A5\u7E8C"],["\u5173\u7CFB","\u95DC\u4FC2"],["\u5BBE\u8BED","\u8CD3\u8A9E"],["\u5BF9\u8C61","\u5C0D\u8C61"],["\u72B6\u6001","\u72C0\u614B"],["\u4E60\u60EF","\u7FD2\u6163"],["\u9009\u62E9","\u9078\u64C7"],["\u9519\u8BEF","\u932F\u8AA4"],["\u542C\u8BF4","\u807D\u8AAA"],["\u53D1\u97F3","\u767C\u97F3"],["\u8BFB\u4E66","\u8B80\u66F8"],["\u7535\u5F71","\u96FB\u5F71"],["\u7535\u8F66","\u96FB\u8ECA"],["\u516C\u4EA4","\u516C\u8ECA"],["\u56FE\u4E66\u9986","\u5716\u66F8\u9928"],["\u661F\u671F","\u661F\u671F"],["\u4E3A\u4E86","\u70BA\u4E86"],["\u56E0\u4E3A","\u56E0\u70BA"],["\u6240\u4EE5","\u6240\u4EE5"],["\u867D\u7136","\u96D6\u7136"],["\u4F46\u662F","\u4F46\u662F"],["\u660E\u660E","\u660E\u660E"],["\u5982\u679C","\u5982\u679C"],["\u65F6\u5019","\u6642\u5019"],["\u4E4B\u524D","\u4E4B\u524D"],["\u4E4B\u540E","\u4E4B\u5F8C"],["\u91CC\u9762","\u88E1\u9762"],["\u5916\u9762","\u5916\u9762"],["\u524D\u9762","\u524D\u9762"],["\u540E\u9762","\u5F8C\u9762"],["\u8F66\u7AD9","\u8ECA\u7AD9"],["\u94B1\u5305","\u9322\u5305"],["\u94C5\u7B14","\u925B\u7B46"],["\u5F20\u7968","\u5F35\u7968"],["\u8FD9\u672C\u4E66","\u9019\u672C\u66F8"],["\u8FD9\u4E2A\u5B57","\u9019\u500B\u5B57"]];function qo(n){let e=String(n||"");return Kw.forEach(([t,i])=>{e=e.split(t).join(i)}),e.replace(/[\u4e00-\u9fff]/g,t=>Xw[t]||t)}var Yw={\u3067\u3059:"a polite judgment/copula, \u201Cis/are\u201D",\u3067\u3057\u305F:"a polite past judgment, \u201Cwas/were\u201D",\u3067\u306F:"a negative noun/na-adjective construction, as in \u201Cnot ...\u201D",\u3060:"a plain-form judgment/copula",\u307E\u3059:"polite non-past, future, or habitual verb forms",\u307E\u3057\u305F:"polite past verb forms, \u201Cdid ...\u201D",\u307E\u305B\u3093:"polite negative verb forms, \u201Cdo not ...\u201D",\u307E\u305B\u3093\u3067\u3057\u305F:"polite past negative verb forms, \u201Cdid not ...\u201D",\u3092:"marking the direct object of an action",\u306B:"marking a destination, time point, target, or place of existence",\u304C:"marking the subject or the target of a state, ability, like/dislike, etc.",\u306F:"marking the topic or contrast",\u3067:"marking the action location, means, range, or a te-form connection",\u3078:"marking the direction of movement",\u306E:"possession, modification, or nominalization",\u3082:"adding the meaning \u201Calso/too\u201D",\u3084:"listing examples, \u201C... and ... etc.\u201D",\u304B\u3089:"a starting point or reason; as a reason it sounds direct",\u307E\u3067:"an endpoint or limit, \u201Cuntil/up to ...\u201D",\u307E\u3067\u306B:"a deadline, \u201Cby/before ...\u201D",\u3088\u308A:"the comparison baseline, \u201Cthan ...\u201D",\u306E\u307B\u3046\u304C:"the preferred/stronger side in a comparison",\u307B\u3069:"degree; often used in \u201Cnot as ... as ...\u201D",\u3060\u3051:"limitation, \u201Conly ...\u201D",\u3057\u304B:"\u201Conly ...\u201D together with a negative predicate",\u3066\u3082:"concession, \u201Ceven if ...\u201D, or permission",\u3067\u3082:"concession \u201Ceven ...\u201D or a soft example \u201C... or something\u201D",\u306E\u306B:"contrast against expectation, \u201Calthough / even though ...\u201D",\u306E\u3067:"a reason/cause, usually more objective or softer",\u3060\u304B\u3089:"sentence connector, \u201Cso/therefore\u201D",\u3057\u304B\u3057:"sentence connector, \u201Cbut/however\u201D",\u3066:"the te-form, used to connect actions or attach following expressions",\u305F:"the ta-form, past or completed action",\u306A\u3044:"the nai-form, negation",\u306A\u3044\u3067:"doing the next action without doing the first one",\u306A\u304F\u3066\u3082:"\u201Ceven without ... / do not have to ...\u201D",\u306A\u304F\u3066\u306F:"obligation, \u201Cmust ...\u201D",\u306A\u3051\u308C\u3070:"condition \u201Cif not ...\u201D; often used for obligation",\u3070:"conditional, \u201Cif ... then ...\u201D",\u305F\u3089:"conditional, \u201Cif/when ...\u201D",\u306A\u3089:"topic-based condition, \u201Cif it is about ...\u201D",\u3068:"constant condition or quotation",\u3057:"listing reasons, \u201Cand ... and ...\u201D",\u305F\u308A:"listing sample actions, \u201Cdo things like ... and ...\u201D",\u306A\u304C\u3089:"simultaneous actions, \u201Cwhile ...\u201D",\u3066\u304B\u3089:"after doing the first action",\u524D\u306B:"before ...",\u5F8C\u3067:"after ...",\u9593:"a period of time",\u9593\u306B:"something happening within a period",\u3046\u3061\u306B:"doing something while a state still lasts",\u3068\u3053\u308D:"a stage of an action: about to / in the middle of / just did",\u3070\u304B\u308A:"just did something, or an excessive tendency",\u307E\u307E:"leaving a state unchanged",\u305F\u3081:"cause or purpose",\u305F\u3081\u306B:"purpose, \u201Cin order to / for ...\u201D",\u3088\u3046\u306B:"purpose/goal, \u201Cso that ... can ...\u201D, or \u201Clike ...\u201D",\u3053\u3068:"nominalizing an action or clause as \u201Cthe fact/act of ...\u201D",\u3082\u306E:"a thing, general truth, or emotional statement",\u3064\u3082\u308A:"intention/plan",\u3064\u3082\u308A\u3060:"intention/plan",\u4E88\u5B9A:"a schedule or plan",\u4E88\u5B9A\u3060:"a schedule or plan",\u306F\u305A:"what should be true by expectation",\u306F\u305A\u3060:"what should be true by expectation",\u3079\u304D:"should / ought to",\u3079\u304D\u3060:"should / ought to",\u3067\u3057\u3087\u3046:"probability or soft guess, \u201Cprobably / ... right?\u201D",\u3060\u308D\u3046:"plain-form guess, \u201Cprobably\u201D",\u304B\u3082\u3057\u308C\u306A\u3044:"possibility, \u201Cmight / may\u201D",\u3089\u3057\u3044:"hearsay or typical quality",\u3088\u3046:"appearance/guess, \u201Cseems/like\u201D",\u3088\u3046\u3060:"appearance/guess, \u201Cseems/like\u201D",\u307F\u305F\u3044:"casual appearance/comparison, \u201Clike/seems\u201D",\u307F\u305F\u3044\u3060:"casual appearance/comparison, \u201Clike/seems\u201D",\u305D\u3046:"appearance, \u201Clooks like ...\u201D, or hearsay",\u305D\u3046\u3060:"hearsay or appearance, depending on the form",\u305F\u3044:"the speaker\u2019s desire, \u201Cwant to ...\u201D",\u305F\u304C\u308B:"a third person\u2019s desire, \u201Cwants to ...\u201D",\u307B\u3057\u3044:"wanting an object",\u307B\u3057\u304C\u308B:"a third person wanting an object",\u3066\u3044\u308B:"an ongoing action or resulting state",\u3066\u3042\u308B:"a resulting state left by someone\u2019s action",\u3066\u304A\u304F:"doing something in advance / keeping a state",\u3066\u3057\u307E\u3046:"completion, regret, or doing something unintentionally",\u3066\u3044\u304F:"change continuing into the future or away from the speaker",\u3066\u304F\u308B:"change up to now or movement toward the speaker",\u3066\u3042\u3052:"doing something for someone else",\u3066\u304F\u308C:"someone doing something for me/us",\u3066\u3082\u3089\u3046:"having someone do something for me/us",\u3084\u3059\u3044:"easy to do",\u306B\u304F\u3044:"hard to do",\u3059\u304E\u308B:"doing/being too much",\u59CB\u3081:"starting to do something",\u51FA\u3057:"suddenly starting an action",\u7D9A\u3051:"continuing to do something",\u7D42\u308F\u308A:"finishing an action",\u304C\u3061:"a tendency to do/be something",\u3063\u307D\u3044:"having a certain tendency or feel",\u3055\u305B:"causative, making/letting someone do something",\u305B:"causative, making/letting someone do something",\u3089\u308C:"passive, potential, or honorific depending on context",\u308C:"passive, potential, or honorific depending on context",\u305B\u3089\u308C:"causative passive, being made to do something",\u3055\u305B\u3089\u308C:"causative passive, being made to do something",\u3068\u3044\u3046:"called / so-called / the content that ...",\u3063\u3066:"casual quotation or naming",\u3093\u3067\u3059:"explaining background/reason or adding explanatory tone","\u3093\u3067\u3059 \u304C":"giving background/reason first, then softening a request/topic with \u304C",\u307E\u3059\u304C:"a polite sentence plus \u304C, used for contrast or a soft lead-in",\u3067\u3057\u3087\u3046\u304C:"\u3067\u3057\u3087\u3046 plus \u304C: a guess followed by contrast",\u65B9:"method/way of doing something",\u3069\u3053:"asking where",\u3069\u308C:"asking which one among several things",\u3069\u306E:"modifying a noun to ask \u201Cwhich ...\u201D",\u3069\u3046:"asking state or method, \u201Chow\u201D",\u306A\u305C:"asking why",\u3044\u3064:"asking when",\u4F55:"asking what",\u8AB0:"asking who"},Jw={\u3067\u3059:"\u4E01\u5BE7\u306A\u5224\u65AD\u300C\u301C\u3067\u3059\u300D",\u3067\u3057\u305F:"\u904E\u53BB\u306E\u4E01\u5BE7\u306A\u5224\u65AD\u300C\u301C\u3067\u3057\u305F\u300D",\u3067\u306F:"\u540D\u8A5E\u30FB\u30CA\u5F62\u5BB9\u8A5E\u306E\u5426\u5B9A\u300C\u301C\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u300D",\u3060:"\u666E\u901A\u4F53\u306E\u5224\u65AD",\u307E\u3059:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u975E\u904E\u53BB\u30FB\u672A\u6765\u30FB\u7FD2\u6163",\u307E\u3057\u305F:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u904E\u53BB",\u307E\u305B\u3093:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u5426\u5B9A",\u307E\u305B\u3093\u3067\u3057\u305F:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u904E\u53BB\u5426\u5B9A",\u3092:"\u52D5\u4F5C\u306E\u76EE\u7684\u8A9E\u3092\u793A\u3059\u52A9\u8A5E",\u306B:"\u5230\u9054\u70B9\u30FB\u6642\u70B9\u30FB\u5BFE\u8C61\u30FB\u5B58\u5728\u5834\u6240\u3092\u793A\u3059\u52A9\u8A5E",\u304C:"\u4E3B\u8A9E\u3001\u307E\u305F\u306F\u72B6\u614B\u30FB\u80FD\u529B\u30FB\u597D\u60AA\u306E\u5BFE\u8C61\u3092\u793A\u3059\u52A9\u8A5E",\u306F:"\u4E3B\u984C\u30FB\u5BFE\u6BD4\u3092\u793A\u3059\u52A9\u8A5E",\u3067:"\u52D5\u4F5C\u306E\u5834\u6240\u30FB\u624B\u6BB5\u30FB\u7BC4\u56F2\u3001\u307E\u305F\u306F\u30C6\u5F62\u63A5\u7D9A",\u3078:"\u79FB\u52D5\u306E\u65B9\u5411",\u306E:"\u6240\u6709\u30FB\u4FEE\u98FE\u30FB\u540D\u8A5E\u5316",\u3082:"\u300C\u301C\u3082\u300D\u3068\u8FFD\u52A0\u3059\u308B\u8868\u73FE",\u3084:"\u4F8B\u3092\u4E26\u3079\u308B\u300C\u301C\u3084\u301C\u300D",\u304B\u3089:"\u8D77\u70B9\u307E\u305F\u306F\u7406\u7531\u3002\u7406\u7531\u3067\u306F\u76F4\u63A5\u7684\u306A\u97FF\u304D",\u307E\u3067:"\u7D42\u70B9\u30FB\u7BC4\u56F2\u300C\u301C\u307E\u3067\u300D",\u307E\u3067\u306B:"\u671F\u9650\u300C\u301C\u307E\u3067\u306B\u300D",\u3088\u308A:"\u6BD4\u8F03\u306E\u57FA\u6E96",\u306E\u307B\u3046\u304C:"\u6BD4\u8F03\u3067\u4E00\u65B9\u3092\u5F37\u8ABF\u3059\u308B\u8868\u73FE",\u307B\u3069:"\u7A0B\u5EA6\u3002\u300C\u301C\u307B\u3069\u301C\u306A\u3044\u300D\u306A\u3069",\u3060\u3051:"\u9650\u5B9A\u300C\u301C\u3060\u3051\u300D",\u3057\u304B:"\u5426\u5B9A\u3068\u547C\u5FDC\u3057\u3066\u300C\u301C\u3057\u304B\u301C\u306A\u3044\u300D",\u3066\u3082:"\u8B72\u6B69\u300C\u301C\u3066\u3082\u300D\u307E\u305F\u306F\u8A31\u53EF",\u3067\u3082:"\u8B72\u6B69\u300C\u301C\u3067\u3082\u300D\u307E\u305F\u306F\u8EFD\u3044\u4F8B\u793A",\u306E\u306B:"\u4E88\u60F3\u3068\u9055\u3046\u7D50\u679C\u3092\u8868\u3059\u9006\u63A5",\u306E\u3067:"\u539F\u56E0\u30FB\u7406\u7531\u3002\u6BD4\u8F03\u7684\u5BA2\u89B3\u7684\u3067\u67D4\u3089\u304B\u3044",\u3060\u304B\u3089:"\u6587\u982D\u306E\u63A5\u7D9A\u300C\u3060\u304B\u3089\u300D",\u3066:"\u52D5\u8A5E\u306E\u30C6\u5F62\u3002\u52D5\u4F5C\u306E\u63A5\u7D9A\u3084\u5F8C\u7D9A\u8868\u73FE\u306B\u4F7F\u3046",\u305F:"\u904E\u53BB\u30FB\u5B8C\u4E86\u3092\u8868\u3059\u30BF\u5F62",\u306A\u3044:"\u5426\u5B9A\u306E\u30CA\u30A4\u5F62",\u306A\u3044\u3067:"\u524D\u9805\u3092\u3057\u306A\u3044\u3067\u5F8C\u9805\u3092\u3059\u308B\u8868\u73FE",\u3070:"\u6761\u4EF6\u300C\u301C\u3070\u300D",\u305F\u3089:"\u6761\u4EF6\u300C\u301C\u305F\u3089\u300D",\u306A\u3089:"\u8A71\u984C\u3092\u53D7\u3051\u308B\u6761\u4EF6\u300C\u301C\u306A\u3089\u300D",\u3068:"\u6052\u5E38\u6761\u4EF6\u307E\u305F\u306F\u5F15\u7528",\u3057:"\u7406\u7531\u306E\u4E26\u5217",\u305F\u308A:"\u52D5\u4F5C\u306E\u4F8B\u793A",\u306A\u304C\u3089:"\u540C\u6642\u9032\u884C\u300C\u301C\u306A\u304C\u3089\u300D",\u3066\u304B\u3089:"\u524D\u9805\u3092\u3057\u3066\u304B\u3089",\u305F\u3081\u306B:"\u76EE\u7684\u300C\u301C\u306E\u305F\u3081\u306B\u300D",\u3088\u3046\u306B:"\u76EE\u7684\u30FB\u76EE\u6A19\u300C\u301C\u3088\u3046\u306B\u300D\u307E\u305F\u306F\u6BD4\u6CC1",\u3053\u3068:"\u52D5\u4F5C\u30FB\u7BC0\u3092\u540D\u8A5E\u5316\u3059\u308B\u8868\u73FE",\u3064\u3082\u308A:"\u4E88\u5B9A\u30FB\u610F\u5FD7",\u306F\u305A:"\u5F53\u7136\u305D\u3046\u306A\u308B\u306F\u305A\u3068\u3044\u3046\u5224\u65AD",\u3079\u304D:"\u5F53\u7136\u30FB\u7FA9\u52D9\u300C\u301C\u3079\u304D\u300D",\u3067\u3057\u3087\u3046:"\u63A8\u91CF",\u304B\u3082\u3057\u308C\u306A\u3044:"\u53EF\u80FD\u6027",\u3089\u3057\u3044:"\u4F1D\u805E\u307E\u305F\u306F\u5178\u578B\u7684\u6027\u8CEA",\u3088\u3046:"\u69D8\u614B\u30FB\u63A8\u91CF",\u307F\u305F\u3044:"\u53E3\u8A9E\u7684\u306A\u69D8\u614B\u30FB\u6BD4\u6CC1",\u305D\u3046:"\u69D8\u614B\u307E\u305F\u306F\u4F1D\u805E",\u305F\u3044:"\u8A71\u3057\u624B\u306E\u5E0C\u671B",\u305F\u304C\u308B:"\u7B2C\u4E09\u8005\u306E\u5E0C\u671B",\u307B\u3057\u3044:"\u7269\u304C\u307B\u3057\u3044\u6C17\u6301\u3061",\u3066\u3044\u308B:"\u9032\u884C\u4E2D\u307E\u305F\u306F\u7D50\u679C\u72B6\u614B",\u3066\u3042\u308B:"\u4EBA\u306E\u884C\u70BA\u306E\u7D50\u679C\u72B6\u614B",\u3066\u304A\u304F:"\u4E8B\u524D\u306B\u3059\u308B\u30FB\u72B6\u614B\u3092\u4FDD\u3064",\u3066\u3057\u307E\u3046:"\u5B8C\u4E86\u30FB\u5F8C\u6094\u30FB\u3046\u3063\u304B\u308A",\u3066\u3044\u304F:"\u672A\u6765\u3078\u7D9A\u304F\u5909\u5316\u3001\u307E\u305F\u306F\u8A71\u3057\u624B\u304B\u3089\u96E2\u308C\u308B\u52D5\u304D",\u3066\u304F\u308B:"\u73FE\u5728\u307E\u3067\u306E\u5909\u5316\u3001\u307E\u305F\u306F\u8A71\u3057\u624B\u3078\u8FD1\u3065\u304F\u52D5\u304D",\u3066\u3042\u3052:"\u76F8\u624B\u306E\u305F\u3081\u306B\u3059\u308B\u8868\u73FE",\u3066\u304F\u308C:"\u76F8\u624B\u304C\u81EA\u5206\u5074\u306E\u305F\u3081\u306B\u3059\u308B\u8868\u73FE",\u3066\u3082\u3089\u3046:"\u76F8\u624B\u306B\u3057\u3066\u3082\u3089\u3046\u8868\u73FE",\u3084\u3059\u3044:"\u3057\u3084\u3059\u3044",\u306B\u304F\u3044:"\u3057\u306B\u304F\u3044",\u3059\u304E\u308B:"\u7A0B\u5EA6\u304C\u904E\u304E\u308B",\u3055\u305B:"\u4F7F\u5F79",\u3089\u308C:"\u53D7\u8EAB\u30FB\u53EF\u80FD\u30FB\u5C0A\u656C",\u305B\u3089\u308C:"\u4F7F\u5F79\u53D7\u8EAB",\u3068\u3044\u3046:"\u540D\u79F0\u30FB\u5185\u5BB9\u3092\u8868\u3059\u300C\u301C\u3068\u3044\u3046\u300D",\u3063\u3066:"\u53E3\u8A9E\u306E\u5F15\u7528\u30FB\u540D\u79F0\u8AAC\u660E",\u3093\u3067\u3059:"\u80CC\u666F\u30FB\u7406\u7531\u3092\u8AAC\u660E\u3059\u308B\u8868\u73FE","\u3093\u3067\u3059 \u304C":"\u80CC\u666F\u3092\u8AAC\u660E\u3057\u3066\u304B\u3089\u300C\u304C\u300D\u3067\u67D4\u3089\u304B\u304F\u8A71\u984C\u3084\u4F9D\u983C\u3092\u51FA\u3059\u5F62",\u307E\u3059\u304C:"\u4E01\u5BE7\u6587\uFF0B\u300C\u304C\u300D\u306E\u9006\u63A5\u30FB\u524D\u7F6E\u304D",\u3067\u3057\u3087\u3046\u304C:"\u63A8\u91CF\u300C\u3067\u3057\u3087\u3046\u300D\uFF0B\u9006\u63A5\u300C\u304C\u300D",\u65B9:"\u3084\u308A\u65B9\u30FB\u65B9\u6CD5",\u3069\u3053:"\u5834\u6240\u3092\u5C0B\u306D\u308B\u8A9E",\u3069\u308C:"\u8907\u6570\u306E\u4E2D\u304B\u3089\u4E00\u3064\u3092\u5C0B\u306D\u308B\u8A9E",\u3069\u306E:"\u540D\u8A5E\u3092\u4FEE\u98FE\u3057\u3066\u300C\u3069\u306E\u301C\u300D\u3068\u5C0B\u306D\u308B\u8A9E",\u3069\u3046:"\u72B6\u614B\u30FB\u65B9\u6CD5\u3092\u5C0B\u306D\u308B\u8A9E",\u306A\u305C:"\u7406\u7531\u3092\u5C0B\u306D\u308B\u8A9E",\u3044\u3064:"\u6642\u3092\u5C0B\u306D\u308B\u8A9E",\u4F55:"\u4F55\u304B\u3092\u5C0B\u306D\u308B\u8A9E",\u8AB0:"\u8AB0\u304B\u3092\u5C0B\u306D\u308B\u8A9E"},Zw={"\u3067\u3059\u2192\u3067\u3057\u305F":"it changes from \u201Cis/are now or generally\u201D to \u201Cwas/were in the past\u201D","\u3067\u3057\u305F\u2192\u3067\u3059":"it changes from \u201Cwas/were in the past\u201D to \u201Cis/are now or generally\u201D","\u307E\u3059\u2192\u307E\u3057\u305F":"it changes from present/future/habitual action to past action","\u307E\u3057\u305F\u2192\u307E\u3059":"it changes from past action to present/future/habitual action","\u307E\u3059\u2192\u307E\u305B\u3093":"it changes from doing the action to not doing it","\u307E\u305B\u3093\u2192\u307E\u3059":"it changes from not doing the action to doing it","\u307E\u305B\u3093\u2192\u307E\u3057\u305F":"it changes from not doing the action to having done it","\u307E\u305B\u3093\u3067\u3057\u305F\u2192\u307E\u3057\u305F":"it changes from did not do it in the past to did it in the past","\u307E\u3057\u305F\u2192\u307E\u305B\u3093\u3067\u3057\u305F":"it changes from did it in the past to did not do it in the past","\u304B\u3089\u2192\u306E\u3067":"both can show reason, but \u306E\u3067 sounds more objective/soft and less direct","\u306E\u3067\u2192\u304B\u3089":"both can show reason, but \u304B\u3089 sounds more direct and subjective","\u306E\u306B\u2192\u3066\u3082":"it changes from \u201Calthough / contrary to expectation\u201D to \u201Ceven if\u201D, so the nuance changes","\u3066\u3082\u2192\u306E\u306B":"it changes from \u201Ceven if\u201D to \u201Calthough / contrary to expectation\u201D, emphasizing mismatch","\u305F\u3081\u306B\u2192\u3088\u3046\u306B":"it shifts from a purpose/objective to a goal-state \u201Cso that ... can ...\u201D; the connection differs","\u3088\u3046\u306B\u2192\u305F\u3081\u306B":"it shifts from \u201Cso that ... can ...\u201D to a direct purpose/objective; the connection differs","\u307E\u3067\u2192\u307E\u3067\u306B":"it changes from \u201Ccontinuing until ...\u201D to \u201Ccompleted by ...\u201D","\u307E\u3067\u306B\u2192\u307E\u3067":"it changes from \u201Ccompleted by ...\u201D to \u201Ccontinuing until ...\u201D","\u306F\u2192\u304C":"it changes the focus from topic/contrast to subject/new focus","\u304C\u2192\u306F":"it changes the focus from subject/new focus to topic/contrast","\u3092\u2192\u306F":"it turns the object into a topic/contrast, so the sentence focus changes","\u3092\u2192\u304C":"it turns the object into a subject/state target, changing the grammatical relation","\u306B\u2192\u3078":"both can mark movement, but \u3078 emphasizes direction while \u306B emphasizes arrival point","\u3078\u2192\u306B":"both can mark movement, but \u306B emphasizes arrival point while \u3078 emphasizes direction"},Qw={"\u3067\u3059\u2192\u3067\u3057\u305F":"\u300C\u73FE\u5728\u30FB\u4E00\u822C\u306E\u5224\u65AD\u300D\u304B\u3089\u300C\u904E\u53BB\u306E\u5224\u65AD\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u3067\u3057\u305F\u2192\u3067\u3059":"\u300C\u904E\u53BB\u306E\u5224\u65AD\u300D\u304B\u3089\u300C\u73FE\u5728\u30FB\u4E00\u822C\u306E\u5224\u65AD\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3059\u2192\u307E\u3057\u305F":"\u73FE\u5728\u30FB\u672A\u6765\u30FB\u7FD2\u6163\u306E\u52D5\u4F5C\u304B\u3089\u3001\u904E\u53BB\u306E\u52D5\u4F5C\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3057\u305F\u2192\u307E\u3059":"\u904E\u53BB\u306E\u52D5\u4F5C\u304B\u3089\u3001\u73FE\u5728\u30FB\u672A\u6765\u30FB\u7FD2\u6163\u306E\u52D5\u4F5C\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3059\u2192\u307E\u305B\u3093":"\u80AF\u5B9A\u304B\u3089\u5426\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u305B\u3093\u2192\u307E\u3059":"\u5426\u5B9A\u304B\u3089\u80AF\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u305B\u3093\u2192\u307E\u3057\u305F":"\u5426\u5B9A\u304B\u3089\u904E\u53BB\u306E\u80AF\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u305B\u3093\u3067\u3057\u305F\u2192\u307E\u3057\u305F":"\u904E\u53BB\u5426\u5B9A\u304B\u3089\u904E\u53BB\u80AF\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3057\u305F\u2192\u307E\u305B\u3093\u3067\u3057\u305F":"\u904E\u53BB\u80AF\u5B9A\u304B\u3089\u904E\u53BB\u5426\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u304B\u3089\u2192\u306E\u3067":"\u3069\u3061\u3089\u3082\u7406\u7531\u3092\u8868\u305B\u307E\u3059\u304C\u3001\u300C\u306E\u3067\u300D\u306F\u3088\u308A\u5BA2\u89B3\u7684\u30FB\u67D4\u3089\u304B\u3044\u97FF\u304D\u306B\u306A\u308A\u307E\u3059","\u306E\u3067\u2192\u304B\u3089":"\u3069\u3061\u3089\u3082\u7406\u7531\u3092\u8868\u305B\u307E\u3059\u304C\u3001\u300C\u304B\u3089\u300D\u306F\u3088\u308A\u76F4\u63A5\u7684\u30FB\u4E3B\u89B3\u7684\u306B\u306A\u308A\u307E\u3059","\u306E\u306B\u2192\u3066\u3082":"\u300C\u4E88\u60F3\u306B\u53CD\u3057\u3066\u300D\u304B\u3089\u300C\u305F\u3068\u3048\u301C\u3066\u3082\u300D\u306B\u5909\u308F\u308A\u3001\u30CB\u30E5\u30A2\u30F3\u30B9\u304C\u5909\u308F\u308A\u307E\u3059","\u3066\u3082\u2192\u306E\u306B":"\u300C\u305F\u3068\u3048\u301C\u3066\u3082\u300D\u304B\u3089\u300C\u4E88\u60F3\u306B\u53CD\u3057\u3066\u300D\u306B\u5909\u308F\u308A\u3001\u305A\u308C\u3092\u5F37\u8ABF\u3057\u307E\u3059","\u305F\u3081\u306B\u2192\u3088\u3046\u306B":"\u76F4\u63A5\u306E\u76EE\u7684\u304B\u3089\u300C\u301C\u3067\u304D\u308B\u3088\u3046\u306B\u300D\u3068\u3044\u3046\u76EE\u6A19\u72B6\u614B\u3078\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059","\u3088\u3046\u306B\u2192\u305F\u3081\u306B":"\u300C\u301C\u3067\u304D\u308B\u3088\u3046\u306B\u300D\u304B\u3089\u76F4\u63A5\u306E\u76EE\u7684\u3078\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059","\u307E\u3067\u2192\u307E\u3067\u306B":"\u300C\u301C\u307E\u3067\u7D9A\u304F\u300D\u304B\u3089\u300C\u301C\u307E\u3067\u306B\u5B8C\u4E86\u3059\u308B\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3067\u306B\u2192\u307E\u3067":"\u300C\u301C\u307E\u3067\u306B\u5B8C\u4E86\u3059\u308B\u300D\u304B\u3089\u300C\u301C\u307E\u3067\u7D9A\u304F\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u306F\u2192\u304C":"\u4E3B\u984C\u30FB\u5BFE\u6BD4\u304B\u3089\u3001\u4E3B\u8A9E\u30FB\u65B0\u60C5\u5831\u306E\u7126\u70B9\u306B\u5909\u308F\u308A\u307E\u3059","\u304C\u2192\u306F":"\u4E3B\u8A9E\u30FB\u7126\u70B9\u304B\u3089\u3001\u4E3B\u984C\u30FB\u5BFE\u6BD4\u306B\u5909\u308F\u308A\u307E\u3059","\u3092\u2192\u306F":"\u76EE\u7684\u8A9E\u304C\u4E3B\u984C\u30FB\u5BFE\u6BD4\u306B\u306A\u308A\u3001\u6587\u306E\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059","\u3092\u2192\u304C":"\u76EE\u7684\u8A9E\u304C\u4E3B\u8A9E\u30FB\u72B6\u614B\u5BFE\u8C61\u306B\u306A\u308A\u3001\u6587\u6CD5\u95A2\u4FC2\u304C\u5909\u308F\u308A\u307E\u3059","\u306B\u2192\u3078":"\u3069\u3061\u3089\u3082\u79FB\u52D5\u306B\u4F7F\u3048\u307E\u3059\u304C\u3001\u300C\u3078\u300D\u306F\u65B9\u5411\u3001\u300C\u306B\u300D\u306F\u5230\u9054\u70B9\u3092\u5F37\u8ABF\u3057\u307E\u3059","\u3078\u2192\u306B":"\u3069\u3061\u3089\u3082\u79FB\u52D5\u306B\u4F7F\u3048\u307E\u3059\u304C\u3001\u300C\u306B\u300D\u306F\u5230\u9054\u70B9\u3001\u300C\u3078\u300D\u306F\u65B9\u5411\u3092\u5F37\u8ABF\u3057\u307E\u3059"};function eM(n){return{...n,type:"sentence",rm:`sentence_${n.id}`,hira:n.jp}}function nr(n){let e=xn();return e==="en"?n.en||n.zh||"":e==="ja"?n.ja||n.zh||"":e==="zh-TW"?n.zh_TW||qo(n.zh||""):n.zh||""}function jo(){return Array.isArray(Oe.sentences)?Oe.sentences:[]}function tM(){let n=jo();if(!n.length)return null;let e=n.filter(s=>!Pi.has(s.id)),t=e.length?e:n;e.length||Pi.clear();let i=Eo(t.map(()=>1))??Pe(t.length);return t[i??0]}function nM(){let n=jo();if(!n.length)return null;let e=Number(G.sentenceProgress||0);return(!Number.isFinite(e)||e<0||e>=n.length)&&(e=0),{...n[e],_progress:{index:e,total:n.length,nextIndex:(e+1)%n.length}}}function iM(n){n?._progress&&(G.sentenceProgress=n._progress.nextIndex,pt(G))}function sM(){return(G.sentenceMode||"progressive")==="progressive"?nM():tM()}function rM(n,e){let t=jo(),i=e==="quiz_zh_jp"?g=>g.jp:g=>nr(g),s=[],r=new Set,a=g=>{let v=i(g);!g||!v||r.has(v)||(s.push(g),r.add(v))};a(n),t.filter(g=>g.id!==n.id).forEach(a);let o=kr(s.length,0,4);if(o)return{choices:o.indices.map(v=>s[v]),correctIndex:o.correctSlot};let c=s.slice(1),u=Zn(c.length).slice(0,3).map(g=>c[g]),d=[n,...u],p=Zn(d.length).map(g=>d[g]);return{choices:p,correctIndex:p.findIndex(g=>g.id===n.id)}}function Tp(n){let e=n?.pattern||"";return C("sentence_note_generic",e||C("mod_sentence"))}function Rf(n,e){let t=String(n||"").trim();if(e==="en")return Yw[t]||`the expression \u300C${t||"blank"}\u300D with its own meaning and connection rules`;if(e==="ja")return Jw[t]||`\u300C${t||"\u7A7A\u6B04"}\u300D\u56FA\u6709\u306E\u610F\u5473\u30FB\u63A5\u7D9A`;let i="\u56FA\u5B9A\u63A5\u7EED\u548C\u610F\u601D\uFF0C\u9700\u8981\u653E\u5728\u5408\u9002\u4F4D\u7F6E\u4F7F\u7528";return e==="zh-TW"?qo(i):i}function aM(n,e,t){let i=`${String(n||"").trim()}\u2192${String(e||"").trim()}`;return t==="en"?Zw[i]||"":t==="ja"&&Qw[i]||""}function Ep(n){let e=xn(),t=n?.example_zh||"";return e==="zh-TW"?n?.example_zh_TW||qo(t):e==="en"?n?.example_en||(t?`CN: ${t}`:""):e==="ja"?n?.example_ja||(t?`\u4E2D\u56FD\u8A9E\u8A33\uFF1A${t}`:""):t}function oM(n,e){let t=xn(),i=(f,p)=>String(f||"").replace(/原句中文是“[^”]*”/g,`\u539F\u53E5\u4E2D\u6587\u662F\u201C${p||""}\u201D`);if(t==="zh-CN")return i(e?.reason||"",n?.zh||"");if(t==="zh-TW")return e?.reason_zh_TW||qo(i(e?.reason||"",nr(n)));let s=String(e?.option||"").trim(),r=String(n?.pattern||"").trim(),a=s||(t==="ja"?"\u7A7A\u6B04":"blank"),o=Rf(s,t),c=Rf(r,t),l=Ep(e),u=aM(r,s,t),d=s==="\u306E\u3067\u304C"||s==="\u306E\u3068\u3044\u3046";return t==="ja"?d?`\u300C${a}\u300D\u306F\u81EA\u7136\u306A\u56FA\u5B9A\u6587\u578B\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u4E0A\u306E\u4F8B\u6587\u306F\u8FD1\u3044\u6B63\u3057\u3044\u5F62\u306E\u4F7F\u3044\u65B9\u3067\u3059\u3002${l?`\u610F\u5473\uFF1A${l}\u3002`:""}\u539F\u6587\u3067\u306F\u300C${r}\u300D\u304C\u5FC5\u8981\u3067\u3059\uFF1A${c}\u3002`:u?`\u300C${a}\u300D\u81EA\u4F53\u306B\u306F\u6B63\u3057\u3044\u4F7F\u3044\u65B9\u304C\u3042\u308A\u307E\u3059\u3002\u4E0A\u306E\u4F8B\u6587\u306F\u305D\u306E\u4F7F\u3044\u65B9\u3067\u3059\u3002${l?`\u610F\u5473\uFF1A${l}\u3002`:""}\u305F\u3060\u3057\u539F\u6587\u3067\u306F\u9078\u3079\u307E\u305B\u3093\u3002\u5165\u308C\u66FF\u3048\u308B\u3068\u3001${u}\u3002\u539F\u6587\u3067\u306F\u300C${r}\u300D\u304C\u5FC5\u8981\u3067\u3059\uFF1A${c}\u3002`:`\u3053\u3053\u3067\u306F\u300C${a}\u300D\u3092\u305D\u306E\u307E\u307E\u4F7F\u3048\u307E\u305B\u3093\u3002\u901A\u5E38\u306F\u300C${o}\u300D\u306B\u4F7F\u3044\u307E\u3059\u3002\u4E0A\u306E\u4F8B\u6587\u306F\u300C${a}\u300D\u306E\u81EA\u7136\u306A\u4F7F\u3044\u65B9\u3067\u3059\u3002${l?`\u610F\u5473\uFF1A${l}\u3002`:""}\u539F\u6587\u3067\u306F\u300C${r}\u300D\u304C\u5FC5\u8981\u3067\u3059\uFF1A${c}\u3002\u5165\u308C\u66FF\u3048\u308B\u3068\u63A5\u7D9A\u30FB\u6587\u6CD5\u95A2\u4FC2\u304C\u5408\u308F\u306A\u3044\u304B\u3001\u6587\u306E\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059\u3002`:d?`\u300C${a}\u300D is not a natural fixed pattern. The example above uses the closest correct form.${l?` Meaning: ${l}.`:""} The original sentence needs \u300C${r}\u300D: ${c}.`:u?`\u300C${a}\u300D itself has valid uses. The example above shows a natural use.${l?` Meaning: ${l}.`:""} But it is not the answer here. If rewritten this way, ${u}. The original sentence needs \u300C${r}\u300D: ${c}.`:`Do not use \u300C${a}\u300D directly here. It is normally used for: ${o}. The example above shows a natural use.${l?` Meaning: ${l}.`:""} The original sentence needs \u300C${r}\u300D: ${c}. Replacing it with \u300C${a}\u300D would break the connection/grammar or change the focus.`}function Ap(n){let e=Array.isArray(n?.why_not)?n.why_not.filter(t=>t?.option&&(t?.reason||t?.example_jp)):[];return e.length?`
    <div class="sentence-why">
      <div class="sentence-why-title">${C("sentence_why_not_label")}</div>
      ${e.map(t=>{let i=Ep(t),s=oM(n,t);return`
          <div class="sentence-why-item">
            <span class="sentence-why-opt">\u300C${ke(t.option)}\u300D</span>
            ${t.example_jp?`
              <div class="sentence-why-example">
                <div class="sentence-why-example-jp">${en(t.example_jp)}</div>
                ${i?`<div class="sentence-why-example-zh">${ke(i)}</div>`:""}
              </div>
            `:""}
            <span class="sentence-why-reason">${ke(s)}</span>
          </div>
        `}).join("")}
    </div>
  `:""}function lu(n,e="sentence_study_answer"){let t=en(n.jp),i=nr(n),s=n.pattern?`<div class="sentence-meta-row"><b>${C("sentence_pattern_label")}</b>${ke(n.pattern)}</div>`:"",r=n.level?`<div class="sentence-meta-row"><b>${C("sentence_level_label")}</b>${ke(n.level)}</div>`:"",a=Tp(n),o=a?`<div class="sentence-note">${ke(a)}</div>`:"",c=Ap(n);return`
    <div class="sentence-answer-label">${C(e)}</div>
    <div class="sentence-answer-jp">${t}</div>
    <div class="sentence-translation"><b>${C("sentence_translation_label")}</b>${ke(i)}</div>
    <div class="sentence-meta-grid">${s}${r}</div>
    ${o}
    ${c}
  `}function cM(){let n=$.sentenceItem,e=$.sentenceMode||G.sentenceMode||"progressive",t=$.mode==="sentence_study";mt||($.selectedChoiceIndex=-1),h.meaning.textContent="",h.meaning.onclick=null,h.result.textContent="",h.opts.innerHTML="";let i=n._progress?`<div class="n2-progress-badge">${C("sentence_progress_badge",n._progress.index+1,n._progress.total)}</div>`:`<div class="n2-progress-badge">${C("sentence_progress_badge",n.id,jo().length||800)}</div>`;if(t){h.q.innerHTML=`
      <span class="n2-cat-tag">${C("mod_sentence")}</span>
      ${i}
      <div class="sentence-study-card">
        <div class="sentence-jp">${en(n.jp)}</div>
        <div class="sentence-translation"><b>${C("sentence_translation_label")}</b>${ke(nr(n))}</div>
        <div class="sentence-meta-grid">
          <div class="sentence-meta-row"><b>${C("sentence_pattern_label")}</b>${ke(n.pattern||"\u2014")}</div>
          <div class="sentence-meta-row"><b>${C("sentence_level_label")}</b>${ke(n.level||"\u2014")}</div>
        </div>
        <div class="sentence-note">${ke(Tp(n))}</div>
        ${Ap(n)}
      </div>
    `,Bo("sentence_study");return}let s=e==="quiz_jp_zh";h.q.innerHTML=s?`<span class="n2-cat-tag">${C("mod_sentence")}</span><div class="n2-hint">${C("sentence_quiz_jp_zh")}</div><div class="sentence-jp sentence-quiz-jp">${en(n.jp)}</div>`:`<span class="n2-cat-tag">${C("mod_sentence")}</span><div class="n2-hint">${C("sentence_quiz_zh_jp")}</div><div class="sentence-zh-question">${ke(nr(n))}</div>`,$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt opt-sentence",o.innerHTML=s?`<div class="meaning-opt">${ke(nr(r))}</div>`:`<div class="jp">${en(r.jp)}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)}),Bo("sentence_quiz")}function lM(n){if(mt)return;mt=!0;let e=Nr(n,$.correctIndex)??n===$.correctIndex,t=$.sentenceItem;tr(n,$.correctIndex),ii(),Pi.add(t.id),e?jt():yn(),setTimeout(()=>Lt(t.jp),300),h.result.innerHTML=e?`\u2705 ${lu(t,"result_correct")}`:`\u274C ${lu(t,"result_wrong")}`;let i=Ir(ge,$,e);if(vn(ge),Kt(),i.finished){Ri();let s=Math.floor((Date.now()-ni)/1e3);setTimeout(()=>$r(s),1200)}}function Cp(){let n=G.n2Cats?.length?G.n2Cats:["kanji_reading","orthography","context_vocab","grammar"];return Hf.filter(e=>n.includes(e))}function Rp(n,e){return`${n}:${e.join(",")}`}function Pp(n,e,t){return`${Rp(n,e)}:${t}`}function uM(n){let e=kr(n,0,n);if(e?.indices?.length===n)return e.indices;let t=Zn(n);return t.length===n?t:Array.from({length:n},(i,s)=>s)}function hM(n,e,t){G.jlptProgressOrders||={};let i=Pp(n,e,t),s=G.jlptProgressOrders[i];return Array.isArray(s)&&s.length===t&&s.every(a=>Number.isInteger(a)&&a>=0&&a<t)&&new Set(s).size===t||(s=uM(t),G.jlptProgressOrders[i]=s,pt(G)),s}function dM(n,e){let t=Oe.jlptBanks[n]||Oe.n2Questions||[],i=new Set(e),s=new Map(Hf.map((r,a)=>[r,a]));return t.filter(r=>i.has(r.cat)).slice().sort((r,a)=>{let o=s.get(r.cat)??999,c=s.get(a.cat)??999;return o!==c?o-c:(+r.id||0)-(+a.id||0)})}function fM(){let n=G.jlptLevel||"n2",e=Cp(),t=dM(n,e);if(!t.length)return null;G.jlptProgress||={};let i=Rp(n,e),s=Pp(n,e,t.length),r=hM(n,e,t.length),a=Number(G.jlptProgress[i]||0);(!Number.isFinite(a)||a<0||a>=r.length)&&(a=0);let o=r[a]??a,c=uu(t[o]);return c._progress={key:i,orderKey:s,index:a,total:t.length,nextIndex:(a+1)%r.length},c}function pM(n){n?._progress&&(G.jlptProgress||={},G.jlptProgress[n._progress.key]=n._progress.nextIndex,n._progress.nextIndex===0&&n._progress.orderKey&&(G.jlptProgressOrders||={},delete G.jlptProgressOrders[n._progress.orderKey]),pt(G))}function mM(){let n=new Set(Cp()),e=G.jlptLevel||"n2",t=Oe.jlptBanks[e]||Oe.n2Questions||[],i=t.filter(s=>n.has(s.cat)&&!ti.has(`${e}_${s.id}`));if(!i.length){ti.clear();let s=t.filter(r=>n.has(r.cat));return s.length?uu(s[Eo(s.map(()=>1))??Pe(s.length)??0]):null}return uu(i[Eo(i.map(()=>1))??Pe(i.length)??0])}function uu(n){if(!n||!Array.isArray(n.options)||typeof n.answer!="number")return n;let e=kr(n.options.length,n.answer,n.options.length),t=e?.indices,i=e?.correctSlot;return t||(t=Zn(n.options.length),t.length!==n.options.length&&(t=n.options.map((s,r)=>r)),i=t.indexOf(n.answer)),zx({...n,options:t.map(s=>n.options[s]),answer:i})}function _M(){let n=$.n2Q,e=$.mode==="n2_study"||$.mode==="n2_progressive",t=$.mode==="n2_progressive";mt||($.selectedChoiceIndex=-1),h.meaning.textContent="",h.meaning.onclick=null,h.result.textContent="";let i=C(Nx[n.cat]||"n2_context_vocab")||n.cat,s=C(kx[n.cat]||"n2_q_context"),r="",a=n.sentence||"",o=$f(n),c=n._targetSurface||(n.target&&a.includes(n.target)?n.target:gu(n)?.surface)||"";if(a&&c&&a.includes(c)){let d=a.indexOf(c),f=a.slice(0,d),p=a.slice(d+c.length),g=n.cat!=="kanji_reading"||e||mt;r=[en(f,o),`<span class="n2-target">${g?en(c,o):ke(c)}</span>`,en(p,o)].join("")}else r=en(a,o);let l=t&&n._progress?`<div class="n2-progress-badge">${C("jlpt_progress_badge",n._progress.index+1,n._progress.total)}</div>`:"";h.q.innerHTML=`<span class="n2-cat-tag">${i}</span>${l}<div class="n2-hint">${s}</div><div class="n2-sentence">${r}</div>`;let u=n.cat==="usage";if(h.opts.innerHTML="",n.options.forEach((d,f)=>{let p=document.createElement("div");p.className=u?"opt opt-sentence":"opt",e&&p.classList.add(f===n.answer?"correct":"disabled");let v=e||n.cat!=="kanji_reading"&&n.cat!=="orthography"?en(d,o):ke(d);p.innerHTML=u?`<div class="jp">${v}</div>`:`<div class="jp">${f+1}. ${v}</div>`,p.onclick=e?null:()=>Qn(f),h.opts.appendChild(p)}),e){let d=n.options[n.answer];h.result.innerHTML=`\u{1F4D8} ${ko(n,d,"jlpt_study_answer")}`}Bo("n2_exam")}function gM(n,e){if(mt)return;mt=!0;let t=e||$.n2Q,i=Nr(n,t.answer)??n===t.answer,s=t.options[t.answer];tr(n,t.answer),ii(),ti.add(`${G.jlptLevel||"n2"}_${t.id}`),i?jt():yn(),setTimeout(()=>{let o=qf(t,"full");t.cat==="kanji_reading"&&(t._targetSurface||t.target)?o=t._targetSurface||t.target:t.cat==="orthography"&&(o=s),Lt(o)},300),i?h.result.innerHTML=`\u2705 ${ko(t,s,"result_correct")}`:h.result.innerHTML=`\u274C ${ko(t,s,"result_wrong")}`;let r={type:"n2",rm:`n2_${t.id}`,hira:`n2_${t.id}`},a=Ir(ge,{correct:r},i);if(vn(ge),Kt(),a.finished){Ri();let o=Math.floor((Date.now()-ni)/1e3);setTimeout(()=>$r(o),1200)}}function Vr(){if(!$){h.q.textContent=C("ready");return}if($.mode==="n2_exam"||$.mode==="n2_study"||$.mode==="n2_progressive"){_M();return}if($.mode==="sentence_study"||$.mode==="sentence_quiz"){cM();return}let n=$.correct,e=un(n),t=Ut(n),i=$.source?Ut($.source):"";mt||($.selectedChoiceIndex=-1);let s=h.hideMeaning.checked;if(Zs($.mode)?i?s?(h.meaning.textContent=C("meaning_hidden"),h.meaning.style.cursor="pointer",h.meaning.onclick=()=>{h.meaning.textContent=`${C("meaning_label")}${i}`,h.meaning.style.cursor="default",h.meaning.onclick=null}):(h.meaning.textContent=`${C("meaning_label")}${i}`,h.meaning.style.cursor="default",h.meaning.onclick=null):(h.meaning.textContent="",h.meaning.onclick=null):$.mode==="rm_mean"||$.mode==="kanji_mean"||$.mode==="mean_rm"?(h.meaning.textContent="",h.meaning.onclick=null):$.mode==="kanji_read"||$.mode==="read_kanji"?t?s?(h.meaning.textContent=C("meaning_hidden"),h.meaning.style.cursor="pointer",h.meaning.onclick=()=>{h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null}):(h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null):(h.meaning.textContent="",h.meaning.onclick=null):n.type==="word"&&t?s?(h.meaning.textContent=C("meaning_hidden"),h.meaning.style.cursor="pointer",h.meaning.onclick=()=>{h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null}):(h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null):(h.meaning.textContent="",h.meaning.onclick=null),h.result.textContent="",Zs($.mode)){let r=un($.source);h.q.innerHTML=`<span class="big">${r}</span>${C(`q_${$.mode}`)}`}else $.mode==="rm_mean"?h.q.innerHTML=`<span class="big">${e}</span>${C("q_what_meaning")}`:$.mode==="mean_rm"?h.q.innerHTML=`${C("q_how_read_meaning_pre")}${t}${C("q_how_read_meaning")}`:$.mode==="kanji_read"?h.q.innerHTML=`<span class="big">${ke(n.kanji)}</span>${C("q_how_read")}`:$.mode==="read_kanji"?h.q.innerHTML=`<span class="big">${e}</span>${C("q_kanji_of")}`:$.mode==="kanji_mean"?h.q.innerHTML=`<span class="big">${_u(n)}</span>${C("q_what_meaning")}`:$.mode==="rm_mc"||$.mode==="rm_in"?h.q.innerHTML=`<b>${n.rm}</b>${n.type==="word"?C("q_writing_of"):C("q_kana_of")}`:h.q.innerHTML=`<span class="big">${e}</span>${C("q_how_read")}`;Zs($.mode)?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${un(r)}</div><div class="meaning-opt">${Ut(r)}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)})):$.mode==="rm_mean"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="meaning-opt">${Ut(r)}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)})):$.mode==="mean_rm"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${un(r)}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)})):$.mode==="kanji_read"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${un(r)}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)})):$.mode==="read_kanji"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${ke(r.kanji)}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)})):$.mode==="kanji_mean"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="meaning-opt">${Ut(r)}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)})):$.mode==="rm_mc"||$.mode==="jp_mc"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=$.mode==="rm_mc"?`<div class="jp">${un(r)}</div>`:`<div class="rm">${r.rm}</div>`,o.onclick=()=>Qn(a),h.opts.appendChild(o)})):h.opts.innerHTML="",Bo($.mode)}function Ip(){if($&&!mt){h.result.textContent=C("please_answer");return}if(!ge.session.active&&ge.session.done>=ge.session.size&&ge.session.done>0){if(h.q.querySelector(".gp-summary"))Lp();else{Ri();let n=Math.floor((Date.now()-ni)/1e3);Dt==="n2"&&(G.jlptMode==="study"||G.jlptMode==="progressive")?Pf(n):Dt==="sentence"&&(G.sentenceMode==="study"||G.sentenceMode==="progressive")?If(n):$r(n)}return}if(Ht(),ge.session.active||(ge.session.size=G.sessionSize),Dt==="sentence"){let n=G.sentenceMode||"progressive",e=n==="study"||n==="progressive";if(e&&ge.session.done>=ge.session.size&&ge.session.done>0){ge.session.active=!1,ge.daily.rounds=ge.session.round,vn(ge),Kt(),Ri();let s=Math.floor((Date.now()-ni)/1e3);If(s);return}let t=sM();if(!t){h.q.textContent=C("no_questions");return}let i={mode:e?"sentence_study":"sentence_quiz",sentenceMode:n,sentenceItem:t,correct:eM(t),selectedChoiceIndex:-1};if(!e){let{choices:s,correctIndex:r}=rM(t,n);i.choices=s,i.correctIndex=r}$=i,mt=e,e&&ge.session.active&&(ge.session.done++,Pi.add(t.id),n==="progressive"&&iM(t)),Vr(),vn(ge),Kt(),Zl();return}if(Dt==="n2"){let n=G.jlptMode==="study"||G.jlptMode==="progressive",e=G.jlptMode==="progressive";if(n&&ge.session.done>=ge.session.size&&ge.session.done>0){ge.session.active=!1,ge.daily.rounds=ge.session.round,vn(ge),Kt(),Ri();let i=Math.floor((Date.now()-ni)/1e3);Pf(i);return}let t=e?fM():mM();if(!t){h.q.textContent=C("no_questions");return}$={mode:e?"n2_progressive":n?"n2_study":"n2_exam",n2Q:t,correct:{type:"n2",rm:`n2_${t.id}`,hira:`n2_${t.id}`}},mt=n,n&&ge.session.active&&(ge.session.done++,ti.add(`${G.jlptLevel||"n2"}_${t.id}`),e&&pM(t)),Vr(),vn(ge),Kt(),Zl();return}$=nf(Oe,G,ge),mt=!1,Vr(),vn(ge),Kt(),Zl()}function vM(n){if(mt)return;mt=!0;let e=Nr(n,$.correctIndex)??n===$.correctIndex,t=un($.correct),i=Ut($.correct);if(tr(n,$.correctIndex),ii(),e?jt():yn(),setTimeout(()=>Lt(t),300),Zs($.mode)){let r=un($.source),a=Ut($.source);h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${r}</b> \u2192 <b>${t}</b>\uFF08${i}\uFF09`:`\u274C ${C("result_wrong")}<b>${r}</b> \u2192 <b>${t}</b>\uFF08${i}\uFF09`,a&&(h.result.innerHTML+=`<div class="n2-expl">${C(`rel_${$.relationKind}`)}\uFF1A${a} \u2192 ${i}</div>`)}else if($.mode==="rm_mean"||$.mode==="mean_rm")h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${t}</b> = <b>${i}</b>`:`\u274C ${C("result_wrong")}<b>${t}</b> = <b>${i}</b>`;else if($.mode==="kanji_read"||$.mode==="read_kanji"||$.mode==="kanji_mean"){let r=_u($.correct);h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${r}</b>\uFF08${t}\uFF09= <b>${ke(i)}</b>`:`\u274C ${C("result_wrong")}<b>${r}</b>\uFF08${t}\uFF09= <b>${ke(i)}</b>`}else h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${$.correct.rm}</b> = <b>${t}</b>`:`\u274C ${C("result_wrong")}<b>${$.correct.rm}</b> = <b>${t}</b>`;let s=Ir(ge,$,e);if(vn(ge),Kt(),s.finished){Ri();let r=Math.floor((Date.now()-ni)/1e3);setTimeout(()=>$r(r),1200)}}function $r(n){let e=ge.session.done,t=ge.session.ok,i=ge.session.ng,s=e?Math.round(t/e*100):0,r=s>=90?"\u{1F3C6}":s>=70?"\u{1F389}":s>=50?"\u{1F44D}":"\u{1F4AA}";h.q.innerHTML=`<div class="gp-summary" style="padding:32px 8px 8px"><div style="font-size:3rem;margin-bottom:8px">${r}</div><div class="big">${s}%</div><div class="sub">${C("gp_summary_sub",e,t,i)}</div><div class="sub" style="margin-top:6px">${C("gp_summary_time")}${ss(n)}</div></div>`,h.meaning.textContent="",h.opts.innerHTML="",h.result.innerHTML="",h.inputWrap.classList.add("hide"),h.btnNew.textContent=C("btn_finish")}function Pf(n){let e=ge.session.done;h.q.innerHTML=`<div class="gp-summary" style="padding:32px 8px 8px"><div style="font-size:3rem;margin-bottom:8px">\u{1F4D8}</div><div class="big">${e}</div><div class="sub">${C("jlpt_study_done",e)}</div><div class="sub" style="margin-top:6px">${C("gp_summary_time")}${ss(n)}</div></div>`,h.meaning.textContent="",h.opts.innerHTML="",h.result.innerHTML="",h.inputWrap.classList.add("hide"),h.btnNew.textContent=C("btn_finish")}function If(n){let e=ge.session.done;h.q.innerHTML=`<div class="gp-summary" style="padding:32px 8px 8px"><div style="font-size:3rem;margin-bottom:8px">\u{1F4AC}</div><div class="big">${e}</div><div class="sub">${C("sentence_study_done",e)}</div><div class="sub" style="margin-top:6px">${C("gp_summary_time")}${ss(n)}</div></div>`,h.meaning.textContent="",h.opts.innerHTML="",h.result.innerHTML="",h.inputWrap.classList.add("hide"),h.btnNew.textContent=C("btn_finish")}function Lf(){if(!$||mt)return;let n=h.inp.value.trim();if(!n){h.result.textContent=C("please_input");return}mt=!0;let e=un($.correct),t=!1;$.mode==="rm_in"?t=n===$.correct.hira||n===$.correct.kata:$.mode==="jp_in"&&(t=ef(n)===$.correct.rm),t?jt():yn(),setTimeout(()=>Lt(e),300),h.result.innerHTML=t?`\u2705 ${C("result_correct")}<b>${$.correct.rm}</b> = <b>${e}</b>`:`\u274C ${C("result_wrong2")}<b>${$.correct.rm}</b> = <b>${e}</b>`;let i=Ir(ge,$,t);if(vn(ge),Kt(),i.finished){Ri();let s=Math.floor((Date.now()-ni)/1e3);setTimeout(()=>$r(s),1200)}}function yM(){if(!$)return;if($.mode==="n2_exam"||$.mode==="n2_study"||$.mode==="n2_progressive"){mt=!0;let t=$.n2Q,i=t.options[t.answer];tr(-1,t.answer),ii(),h.result.innerHTML=ko(t,i),ti.add(`${G.jlptLevel||"n2"}_${t.id}`);return}if($.mode==="sentence_quiz"||$.mode==="sentence_study"){mt=!0;let t=$.sentenceItem;$.mode==="sentence_quiz"&&(tr(-1,$.correctIndex),Pi.add(t.id)),ii(),h.result.innerHTML=lu(t,"result_answer"),Lt(t.jp);return}mt=!0;let n=un($.correct),e=Ut($.correct);if(Zs($.mode)){let t=un($.source);h.result.innerHTML=`${C("result_answer")}<b>${t}</b> \u2192 <b>${n}</b>${e?`\uFF08${e}\uFF09`:""}`}else $.mode==="kanji_read"||$.mode==="read_kanji"||$.mode==="kanji_mean"?h.result.innerHTML=`${C("result_answer")}<b>${_u($.correct)}</b>\uFF08${n}\uFF09${e?` = <b>${ke(e)}</b>`:""}`:h.result.innerHTML=`${C("result_answer")}<b>${$.correct.rm}</b> = <b>${n}</b>${e?`\uFF08${e}\uFF09`:""}`;tr(-1,$.correctIndex),ii(),Lt(n)}async function xM(){await Bf,po(),lo(),Ht(),Dt==="n2"&&ti.clear(),Dt==="sentence"&&Pi.clear(),sf(ge,G.sessionSize),vn(ge),Kt(),St(h.quizScreen),Ix(),h.btnNew.textContent=C("btn_next"),mt=!0,Ip()}function Lp(){Ri(),rs(),Yi(),St(h.moduleScreen),Kt()}async function wM(){try{if(h.btnRefreshApp.disabled=!0,h.btnRefreshApp.textContent=C("refreshing_app"),"serviceWorker"in navigator&&await(await navigator.serviceWorker.getRegistration())?.update(),"caches"in window){let n=await caches.keys();await Promise.all(n.map(e=>caches.delete(e)))}}catch(n){console.warn("refreshApp failed",n)}finally{location.reload()}}async function ut(n){let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`${n} load failed`);return await e.json()}function MM(n){af(n),To(),h.settingsScreen.classList.contains("hide")||(h.settingsTitle.textContent=C(nu[Dt])),Kt(),$&&Vr(),h.grammarScreen&&!h.grammarScreen.classList.contains("hide")&&xp(),h.grammarTopicScreen&&!h.grammarTopicScreen.classList.contains("hide")&&er&&wp(er),h.grammarPracticeScreen&&!h.grammarPracticeScreen.classList.contains("hide")&&$e&&Iu(),h.songsScreen&&!h.songsScreen.classList.contains("hide")&&(Wo(),$o()),h.wordMatchScreen&&!h.wordMatchScreen.classList.contains("hide")&&ht()}function bM(){document.querySelectorAll(".module-card").forEach(n=>{n.addEventListener("click",()=>{n.classList.contains("disabled")||n.dataset.module&&No(n.dataset.module)})}),document.querySelectorAll("[data-game]").forEach(n=>{n.addEventListener("click",()=>{n.classList.contains("disabled")||No(n.dataset.game)})}),h.btnBackToModules.onclick=()=>{Ht(),St(h.moduleScreen)},h.btnGrammarBack&&(h.btnGrammarBack.onclick=()=>St(h.moduleScreen)),h.btnGrammarTopicBack&&(h.btnGrammarTopicBack.onclick=()=>St(h.grammarScreen)),h.btnGrammarPractice&&(h.btnGrammarPractice.onclick=()=>Mp()),h.btnGrammarPracticeBack&&(h.btnGrammarPracticeBack.onclick=()=>St(h.grammarTopicScreen)),h.btnGpNext&&(h.btnGpNext.onclick=()=>Ww()),h.btnGpSubmit&&(h.btnGpSubmit.onclick=()=>Vw()),h.btnSongsBack&&(h.btnSongsBack.onclick=()=>{Tf(),St(h.moduleScreen)}),h.btnSongClose&&(h.btnSongClose.onclick=Tf),h.btnSongSave&&(h.btnSongSave.onclick=Fw),h.btnSongClear&&(h.btnSongClear.onclick=Bw),h.songLines&&h.songLines.addEventListener("click",n=>{let e=n.target.closest("[data-song-line]");e&&zw(Number(e.dataset.songLine),e)}),h.modeChecksKana.addEventListener("change",Ht),h.modeChecksWord.addEventListener("change",Ht),h.modeChecksKanji.addEventListener("change",Ht),h.n2CatChecks.addEventListener("change",Ht),h.jlptLevelChecks.addEventListener("change",()=>{Ht(),ti.clear()}),h.jlptModeChecks?.addEventListener("change",()=>{Ht(),ti.clear()}),h.sentenceModeChecks?.addEventListener("change",()=>{Ht(),Pi.clear()}),h.btnResetJlptProgress?.addEventListener("click",()=>{G.jlptProgress={},G.jlptProgressOrders={},pt(G),ti.clear(),alert(C("alert_reset_jlpt_progress"))}),h.btnResetSentenceProgress?.addEventListener("click",()=>{G.sentenceProgress=0,pt(G),Pi.clear(),alert(C("alert_reset_sentence_progress"))}),h.kanaSetChecks.addEventListener("change",Ht),h.kanaMode.addEventListener("change",()=>{Ht(),$&&Vr()}),h.sessionSize.addEventListener("change",Ht),h.sessionSize.addEventListener("blur",Ht),h.hideMeaning.addEventListener("change",Ht),h.wrongFirst.addEventListener("change",Ht),h.btnNew.onclick=jw,h.btnSpeak.onclick=Af,h.btnStartSession.onclick=xM,h.btnBack.onclick=Lp,h.btnGamesBack&&(h.btnGamesBack.onclick=()=>St(h.moduleScreen)),h.btnCultivateBack&&(h.btnCultivateBack.onclick=()=>St(h.gamesScreen||h.moduleScreen)),h.btnCultivateReset&&(h.btnCultivateReset.onclick=()=>Qx()),h.btnCultivateStart&&(h.btnCultivateStart.onclick=()=>$x()),[h.cultivateUseHira,h.cultivateUseKata,h.cultivateUseKanji].forEach(n=>{n&&(n.onchange=()=>{!h.cultivateUseHira?.checked&&!h.cultivateUseKata?.checked&&!h.cultivateUseKanji?.checked?(n.checked=!0,h.cultivateSetupHint&&(h.cultivateSetupHint.textContent=C("cultivate_select_one_script"))):h.cultivateSetupHint&&(h.cultivateSetupHint.textContent="")})}),h.btnCultivateTrain&&(h.btnCultivateTrain.onclick=()=>Kx()),h.btnCultivateChallenge&&(h.btnCultivateChallenge.onclick=()=>Zx()),h.btnCultivateEquip&&(h.btnCultivateEquip.onclick=()=>Jx()),h.btnBladeBack&&(h.btnBladeBack.onclick=()=>St(h.gamesScreen||h.moduleScreen)),h.btnBladeNew&&(h.btnBladeNew.onclick=()=>Lu()),h.btnWordMatchBack&&(h.btnWordMatchBack.onclick=()=>St(h.gamesScreen||h.moduleScreen)),h.btnWordMatchNew&&(h.btnWordMatchNew.onclick=()=>au()),h.btnWordMatchStart&&(h.btnWordMatchStart.onclick=()=>iw()),[h.wmKanaHira,h.wmKanaKata].forEach(n=>{n&&(n.onchange=()=>{!h.wmKanaHira?.checked&&!h.wmKanaKata?.checked?(n.checked=!0,h.wmSetupHint&&(h.wmSetupHint.textContent=C("word_match_select_one_kana"))):h.wmSetupHint&&(h.wmSetupHint.textContent="")})}),h.btnWordMatchMusic&&(h.btnWordMatchMusic.onclick=()=>_w()),h.btnWordMatchSfx&&(h.btnWordMatchSfx.onclick=()=>gw()),h.btnWordMatchVoice&&(h.btnWordMatchVoice.onclick=()=>vw()),h.btnWordMatchInvite&&(h.btnWordMatchInvite.onclick=()=>ww()),h.btnWordMatchGuide&&(h.btnWordMatchGuide.onclick=async()=>{await dp(!1),au()}),h.wmGuideClose&&(h.wmGuideClose.onclick=()=>cu(!0)),h.wmGuideStart&&(h.wmGuideStart.onclick=()=>bf()),h.wmGuide&&h.wmGuide.addEventListener("click",n=>{n.target===h.wmGuide&&cu(!0);let e=n.target?.closest?.("[data-demo]");e&&h.wmGuide.contains(e)&&bf(e.dataset.demo)}),h.btnWordMatchBomb&&(h.btnWordMatchBomb.onclick=()=>up()),h.btnWordMatchMagnifier&&(h.btnWordMatchMagnifier.onclick=()=>hp()),h.btnCheck.onclick=Lf,h.btnShow.onclick=yM,h.inp.addEventListener("keydown",n=>{n.key==="Enter"&&Lf()}),h.q.addEventListener("click",()=>{Af()}),h.btnResetSettings.onclick=()=>{G=Ud(),Dt="kana",vu(),alert(C("alert_reset_settings"))},h.btnResetDay.onclick=()=>{Od(ge),ge=ao(),Kt(),alert(C("alert_reset_today"))},h.btnRefreshApp&&(h.btnRefreshApp.onclick=wM),h.btnResetAllStats.onclick=()=>{confirm(C("confirm_clear_all"))&&(Fd(),ge=ao(),Kt(),alert(C("alert_clear_all")))},document.querySelectorAll(".lang-btn").forEach(n=>{n.addEventListener("click",()=>MM(n.dataset.lang))})}function SM(){try{let n=new URLSearchParams(window.location.search||""),e=(n.get("mode")||n.get("module")||"").trim(),t=(window.location.hash||"").replace(/^#/,"").trim();return e||t}catch{return""}}async function TM(){let n=SM();if(location.hash==="#bladeKing"||/^(bladeKing|blade-king|blade|knife)$/i.test(n)){No("bladeKing");return}/^(wordMatch|word-match|match|wm)$/i.test(n)&&No("wordMatch")}async function EM(){To(),vu(),Kt(),bM();try{Oe.kana=await ut("./data/kana.json"),Oe.words=await ut("./data/words.json"),Oe.wordRelations=await ut("./data/word_relations.json").catch(()=>[]),Oe.kanji=await ut("./data/kanji_words.json"),Oe.sentences=await ut("./data/sentences_800.json").catch(()=>[]),Oe.songs=await ut("./data/songs_20.json").catch(()=>[]),Oe.furiganaExtra=await ut("./data/furigana_extra.json").catch(()=>({})),yp=await ut("./data/grammar_topics.json").catch(()=>[]),xp();let n=await Promise.all([ut("./data/n2_q_reading.json").catch(()=>[]),ut("./data/n2_q_vocab.json").catch(()=>[]),ut("./data/n2_q_grammar.json").catch(()=>[]),ut("./data/n2_q_reading_ext.json").catch(()=>[]),ut("./data/n2_q_ortho_ext.json").catch(()=>[]),ut("./data/n2_q_context_ext.json").catch(()=>[]),ut("./data/n2_q_para_ext.json").catch(()=>[]),ut("./data/n2_q_usage_ext.json").catch(()=>[]),ut("./data/n2_q_grammar_ext1.json").catch(()=>[]),ut("./data/n2_q_grammar_ext2.json").catch(()=>[])]);Oe.n2Questions=n.flat(),Oe.jlptBanks.n2=Oe.n2Questions,iu(),await Bf;let e={n1:["n1_q_reading.json","n1_q_ortho_context.json","n1_q_context_para.json","n1_q_usage_grammar.json","n1_q_fill.json"],n3:["n3_q_reading.json","n3_q_ortho_context.json","n3_q_context_para.json","n3_q_usage_grammar.json","n3_q_fill.json"],n4:["n4_q_reading.json","n4_q_ortho_context.json","n4_q_context_para.json","n4_q_usage_grammar.json","n4_q_grammar.json"],n5:["n5_q_reading.json","n5_q_ortho_context.json","n5_q_context_para.json","n5_q_usage_grammar.json"]},t=async u=>(await Promise.all((e[u]||[]).map(f=>ut(`./data/${f}`).catch(()=>[])))).flat(),[i,s,r,a]=await Promise.all([t("n1"),t("n3"),t("n4"),t("n5")]);Oe.jlptBanks.n1=i,Oe.jlptBanks.n3=s,Oe.jlptBanks.n4=r,Oe.jlptBanks.n5=a,iu(),ut("./data/version.json").then(u=>{let d=document.getElementById("versionTag");d&&u&&u.version&&(d.textContent="v "+u.version)}).catch(()=>{});let[o,c,l]=await Promise.all([ut("./data/meanings_zh_TW.json?v=2026-06-21.5").catch(()=>({})),ut("./data/meanings_ja.json?v=2026-06-21.5").catch(()=>({})),ut("./data/meanings_en.json?v=2026-06-21.5").catch(()=>({}))]);Oe.meanings={"zh-TW":o,ja:c,en:l},window.__appDataReady=!0,window.dispatchEvent(new Event("app-data-ready")),await TM()}catch(n){console.error(n),alert(C("data_error"))}}EM();var Bn=null,kf=["\u{1F43A}","\u{1F42F}","\u{1F43B}","\u{1F98A}","\u{1F43C}","\u{1F435}","\u{1F430}","\u{1F438}","\u{1F42E}"],Nf=[{tier:-3,name:"\u5F3A\u529B\u5371\u9669",bg:"#7f1d1d",fg:"#fff",glow:"rgba(239,68,68,.55)",label:"-3",playerLoss:3,enemyHit:0},{tier:-2,name:"\u4E2D\u7B49\u5371\u9669",bg:"#dc2626",fg:"#fff",glow:"rgba(239,68,68,.45)",label:"-2",playerLoss:2,enemyHit:0},{tier:-1,name:"\u7A0D\u5FAE\u5371\u9669",bg:"#f97316",fg:"#fff",glow:"rgba(249,115,22,.42)",label:"-1",playerLoss:1,enemyHit:0},{tier:0,name:"\u5F39\u5F00",bg:"#64748b",fg:"#fff",glow:"rgba(148,163,184,.34)",label:"\u5F39",playerLoss:0,enemyHit:0},{tier:1,name:"\u7A0D\u5FAE\u53CD\u4F24",bg:"#14b8a6",fg:"#fff",glow:"rgba(20,184,166,.40)",label:"+1",playerLoss:0,enemyHit:1},{tier:2,name:"\u4E2D\u7B49\u53CD\u4F24",bg:"#2563eb",fg:"#fff",glow:"rgba(37,99,235,.44)",label:"+2",playerLoss:0,enemyHit:2},{tier:3,name:"\u5F3A\u529B\u53CD\u4F24",bg:"#8b5cf6",fg:"#fff",glow:"rgba(139,92,246,.50)",label:"+3",playerLoss:0,enemyHit:3}];function kp(n=""){let e=[...String(n)].length;return e<=1?0:e<=2?1:e<=3?2:e<=5?3:4}function AM(n="",e=null){let t=Pe(100)??50,i=Math.min(2,Math.floor(((e?.level||1)-1)/4)),s=t<13?-3:t<29?-2:t<46?-1:t<58?0:t<75?1:t<90?2:3;return kp(n)>=3&&s<3&&(Pe(100)??0)<35&&(s+=1),i&&s<3&&(Pe(100)??0)<i*12&&(s+=1),Math.max(-3,Math.min(3,s))}function Np(n=0){return Nf.find(e=>e.tier===n)||Nf[3]}function Dp(n=1){let e=[{color:"#a7f3d0",stroke:"#0f766e",glow:"#5eead4",name:"\u9752\u94DC\u53F6\u5203",scale:1,shape:"leaf"},{color:"#34d399",stroke:"#047857",glow:"#86efac",name:"\u7FE1\u7FE0\u53CC\u5203",scale:.92,shape:"wide"},{color:"#22d3ee",stroke:"#0e7490",glow:"#67e8f9",name:"\u51B0\u6676\u98DE\u5200",scale:.86,shape:"crystal"},{color:"#fbbf24",stroke:"#b45309",glow:"#fde68a",name:"\u91D1\u5149\u5F2F\u5203",scale:.8,shape:"curve"},{color:"#c084fc",stroke:"#6d28d9",glow:"#e9d5ff",name:"\u96F7\u5149\u7075\u5203",scale:.74,shape:"thunder"}];return e[(Math.max(1,n)-1)%e.length]}function Up(n){return n.correct?{bg:"#16a34a",fg:"#fff",glow:"rgba(34,197,94,.48)",label:"\u2713"}:n.kind==="beast"?{bg:n.color||"#64748b",fg:"#fff",glow:"rgba(99,102,241,.30)",label:`${n.knives||0}`}:Np(n.tier||0)}function zo(n,e=!1){return e?(n.r||44)+(n.range||0)*.55+(n.knives||0)*8+(n.level||1)*6:(n.r||28)+(n.range||0)*.58+(n.knives||0)*8+Math.max(0,-(n.tier||0))*18}function CM(n){return n.correct?1.08:n.kind==="beast"?Math.max(1.02,Math.min(1.38,(n.knives||2)/4.2)):Math.max(1,Math.min(1.34,1+Math.abs(n.tier||0)*.08+(n.grade||0)*.025))}function RM(n,e=0,t=0,i=2){if(n==="target")return 1;if(n==="beast")return Math.max(4,Math.min(14,i+2));let s=1+Math.abs(e||0)+Math.floor((t||0)/2);return Math.max(1,Math.min(12,s))}function PM(n=1){return Math.max(0,Math.ceil(n/5)-1)}function IM(n=0){return["#ef4444","#a855f7","#f59e0b","#22d3ee","#22c55e"][n%5]}function LM(){let n=[...(Oe.words||[]).filter(p=>p?.hira&&p?.meaning),...(Oe.kanji||[]).filter(p=>p?.kanji&&p?.hira&&p?.meaning)],e={hira:"\u306D\u3053",kata:"\u30CD\u30B3",kanji:"\u732B",meaning:"\u732B",rm:"neko"},t=new Set(wn?.recent||[]),i=n.filter(p=>!t.has(p.rm||p.hira||p.kanji)),s=(i.length?i:n)[Pe((i.length?i:n).length||1)??0]||e,r=s.rm||s.hira||s.kanji||Date.now();wn&&(wn.recent=[r,...(wn.recent||[]).filter(p=>p!==r)].slice(0,24));let o=s.kanji&&(Pe(100)??0)<45?s.kanji:s.hira,c=s.hira,l=Ut(s)||s.meaning||s.kanji||s.hira,u=n.length?n:[e],d=Lo(l,u,p=>Ut(p)||p.meaning||p.kanji||p.hira).slice(0,4),f=u.filter(p=>d.includes(Ut(p)||p.meaning||p.kanji||p.hira));return{item:s,prompt:o,speak:c,answer:l,opts:d,optionItems:f}}function Qi(n,e=!1){let t=Math.random()*Math.PI*2,i=e?520+Math.random()*620:900+Math.random()*1e3,s=e?n.question:null,r=e?n.question.item:(n.question.optionItems||[])[Pe((n.question.optionItems||[]).length||1)??0],a=e?n.question.answer:r?.kanji||r?.hira||n.question.opts.find(p=>p!==n.question.answer)||"\uFF1F",o=e?n.question.speak:r?.hira||a,c=e?"target":Math.random()<.42?"beast":"word",l=kp(a),u=e||c==="beast"?0:AM(a,n),d=2+Math.floor(Math.random()*Math.min(7,2+n.level)),f=e?1:RM(c,u,l,d);return{id:Date.now()+Math.random(),x:Math.max(90,Math.min((n.worldW||n.player.x*2)-90,n.player.x+Math.cos(t)*i)),y:Math.max(90,Math.min((n.worldH||n.player.y*2)-90,n.player.y+Math.sin(t)*i)),r:e?46:c==="beast"?50+d*3:48+l*2+Math.max(0,-u)*5+Math.max(0,u)*2,label:a,speak:o,correct:e,hp:f,maxHp:f,tier:u,speed:e?12:c==="beast"?10+Math.random()*12+n.level*1.2:18+Math.random()*14+n.level*1.4,kind:c,grade:l,animal:c==="beast"?kf[Pe(kf.length)??0]:"",knives:e?3:c==="beast"?d:Math.max(1,Math.abs(u)+1),range:e?52:c==="beast"?62+d*8:48+Math.max(1,Math.abs(u))*12,angle:Math.random()*Math.PI*2,spin:1.3+Math.random()*1.8,color:c==="beast"?["#64748b","#8b5cf6","#0ea5e9","#ef4444","#f97316"][Pe(5)??0]:null,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,wobble:Math.random()*6,hitCd:0}}function Op(n){for(n.question=LM(),n.entities=n.entities.filter(e=>!e.correct),n.entities.push(Qi(n,!0));n.entities.length<8;)n.entities.push(Qi(n,!1));Fp(n,720)}function Fp(n,e=430){let t=n.player;for(let i of n.entities||[]){if(i.correct)continue;let s=i.x-t.x,r=i.y-t.y;if((Math.hypot(s,r)||1)<e){let o=Math.atan2(r,s)+(Math.random()-.5)*.7;i.x=Math.max(90,Math.min((n.worldW||1400)-90,t.x+Math.cos(o)*e)),i.y=Math.max(90,Math.min((n.worldH||1600)-90,t.y+Math.sin(o)*e)),i.vx=0,i.vy=0,i.hitCd=.8}}}function Lu(){Bp(),h.bladeOverlay&&(h.bladeOverlay.classList.add("hide"),h.bladeOverlay.innerHTML="");let n=h.bladeCanvas;if(!n)return;let e=n.getBoundingClientRect();n.width=Math.max(320,Math.min(720,Math.floor(e.width||390))),n.height=Math.max(420,Math.min(960,Math.floor(e.height||720)));let t=wn={running:!0,start:Date.now(),last:performance.now(),score:0,level:1,hp:5,maxHp:5,knives:2,knifeLevel:1,range:82,speed:1.9,knifeSize:.72,nextUpgrade:5,angle:0,recent:[],worldW:Math.max(n.width*2.2,1400),worldH:Math.max(n.height*2,1600),camera:{x:0,y:0},player:{x:Math.max(n.width*1.1,700),y:Math.max(n.height,800),r:44,baseR:44,vx:0,vy:0},input:{active:!1,dx:0,dy:0},entities:[],particles:[],question:null,message:"",invuln:6,grace:6,safeUntil:Date.now()+6e3};Op(t),kM(n),ar(),Br=requestAnimationFrame(Hp)}function Bp(){Br&&cancelAnimationFrame(Br),Br=0,wn&&(wn.running=!1),Vp()}function kM(n){if(n.__bladeInputAttached)return;n.__bladeInputAttached=!0;let e=r=>{let a=r.touches?.[0]||r,o=n.getBoundingClientRect();return{x:a.clientX-o.left,y:a.clientY-o.top,w:o.width,h:o.height}},t=r=>{r.preventDefault?.();let a=e(r),o=wn;o&&(o.input.active=!0,o.input.sx=a.x,o.input.sy=a.y)},i=r=>{let a=wn;if(!a?.input.active)return;r.preventDefault?.();let o=e(r),c=o.x-a.input.sx,l=o.y-a.input.sy,u=Math.hypot(c,l)||1,d=Math.min(1,u/46);a.input.dx=c/u*d,a.input.dy=l/u*d},s=()=>{let r=wn;r&&(r.input.active=!1,r.input.dx=0,r.input.dy=0)};n.addEventListener("pointerdown",t),n.addEventListener("pointermove",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("touchstart",t,{passive:!1}),n.addEventListener("touchmove",i,{passive:!1}),n.addEventListener("touchend",s)}function ar(){let n=wn;n&&(h.bladeScore&&(h.bladeScore.textContent=n.score),h.bladeKnives&&(h.bladeKnives.textContent=n.knives),h.bladeLevel&&(h.bladeLevel.textContent=n.level),h.bladeTime&&(h.bladeTime.textContent=ss(Math.floor((Date.now()-n.start)/1e3))))}function es(n,e,t,i,s=16,r=180){for(let a=0;a<s;a++)n.particles.push({x:e,y:t,vx:(Math.random()-.5)*r,vy:(Math.random()-.85)*r,life:.75+Math.random()*.55,color:i,size:3+Math.random()*5})}function ir(n,e,t=220){let i=n.x-e.x,s=n.y-e.y,r=Math.hypot(i,s)||1;n.vx=i/r*t,n.vy=s/r*t,n.hitCd=.45}function hu(n){try{n?.speak&&Lt(n.speak)}catch{}}function ku(n){return Math.abs(n-.25)<.01?"1/4":Math.abs(n-1/3)<.04?"1/3":Math.abs(n-.5)<.01?"1/2":Number.isInteger(n)?String(n):n.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function zp(n,e=1){return n<=8?.25:n<=24?1/3:n<=48?.5:Math.min(3,Math.max(1,Math.ceil(n/70),Math.abs(e||1)))}function du(n,e="",t=1){if((n.safeUntil||0)>Date.now()){n.message="\u5B88\u62A4\u4E2D",n.messageT=.8;return}if((n.invuln||0)>0)return;t=Math.max(.25,Math.min(5,Number(t)||1)),n.invuln=.36+t*.18,n.hp=Math.max(0,(n.hp??5)-t),t>=1&&(n.knives=Math.max(1,n.knives-Math.floor(t)));let i=ku(t);n.message=e||`\u53D7\u4F24-${i}\u5FC3`,n.messageT=1.1+t*.12,n.shake=.24+t*.18,n.floatText={text:`-${i}\u2764`,x:n.player.x,y:n.player.y-80,life:1.05,color:"#ef4444"},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`-${i}\u2764`,x:n.player.x+38,y:n.player.y-48,life:1,color:"#fde047",size:34}),es(n,n.player.x,n.player.y,"#ef4444",22+Math.ceil(t*14),230+t*65),Ee(yn),Ee(Xt),n.hp<=0&&(n.running=!1,h.bladeOverlay&&(h.bladeOverlay.classList.remove("hide"),h.bladeOverlay.innerHTML=`<div><b>GAME OVER</b><span>${C("blade_score")} ${n.score}</span><button class="btn primary" id="btnBladeAgain">${C("blade_new")}</button></div>`,setTimeout(()=>{let s=U("btnBladeAgain");s&&(s.onclick=Lu)},0)))}function NM(n,e){try{Lt(n.question?.speak||n.question?.item?.hira||n.question?.prompt||"")}catch{}let t=24+n.knives*4+n.level*6+(e.grade||0)*8;if(n.score+=t,n.flash=.24,n.floatText={text:`+${t} \u98DE\u5200+1`,x:e.x,y:e.y,life:1.05,color:"#f59e0b"},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`+${t}`,x:e.x,y:e.y-32,life:1,color:"#facc15",size:30}),n.knives+=1,n.player.r=Math.min(82,(n.player.r||44)+3),n.knives>=(n.nextUpgrade||7)){n.level+=1,n.knifeLevel+=1,n.nextUpgrade=n.knives+5+Math.min(8,n.level),n.range=Math.max(112,n.range*.82),n.speed=Math.max(1.75,n.speed*.72),n.knifeSize=Math.max(.62,(n.knifeSize||1)*.86),n.flash=.42;let i=Dp(n.knifeLevel);n.floatText={text:`\u8FDB\u9636\uFF1A${i.name}`,x:n.player.x,y:n.player.y-112,life:1.25,color:i.color},Ee(Vl)}else n.range+=4,n.speed+=.045,n.knifeSize=Math.min(1.08,(n.knifeSize||1)+.015),Ee(jt),Ee(Hl),Ee(cn);es(n,e.x,e.y,"#fbbf24",38,310),n.entities=n.entities.filter(i=>i!==e),Op(n),ar()}function DM(n,e){let t=35+e.knives*14+n.level*5;n.score+=t,n.knives+=Math.max(1,Math.floor(e.knives/2)),n.message=`\u51FB\u8D25${e.animal} +${t}`,n.messageT=1.2,n.flash=.2,n.floatText={text:`+${t}`,x:e.x,y:e.y-20,life:1,color:"#22c55e"},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`-${e.knives}`,x:e.x+20,y:e.y-42,life:1,color:"#fde047",size:34}),es(n,e.x,e.y,"#22c55e",44,340),Ee(cn),Ee(go),Ee(jt),n.entities=n.entities.filter(i=>i!==e),n.entities.push(Qi(n,!1)),ar()}function UM(n,e,t=!1){if(e.hitCd)return!1;hu(e);let i=Np(e.tier||0);if((e.tier||0)<0){let r=Math.abs(e.tier||-1),a=zo({r:n.player.r,range:n.range,knives:n.knives,level:n.level},!0),o=zo(e),c=o>a?zp(o-a,r):0;return c=Math.max(0,Math.min(r,c)),ir(e,n.player,310+r*60),es(n,e.x,e.y,i.bg,18+r*10,220+r*70),n.entities=n.entities.filter(l=>l!==e),n.entities.push(Qi(n,!1)),c>0?(du(n,`${i.name}\uFF0C-${ku(c)}\u5FC3`,c),!0):(e.hp=Math.max(0,(e.hp??5)-1),n.message=e.hp<=0?"\u538B\u5236\u51FB\u7834\uFF01":"\u4F53\u578B\u538B\u5236\uFF0C\u654C\u65B9-1\u5FC3",n.messageT=.8,Ee(e.hp<=0?jt:Xt),e.hp<=0&&(n.score+=18+n.level*4,n.entities=n.entities.filter(l=>l!==e),n.entities.push(Qi(n,!1)),ar()),!1)}if((e.tier||0)===0)return ir(e,n.player,t?360:280),n.message="\u5F39\u5F00\uFF01",n.messageT=.6,es(n,e.x,e.y,"#cbd5e1",14,180),Ee(Xt),!1;let s=e.tier||1;if(e.hp-=s,ir(e,n.player,260+s*45),n.floatText={text:`\u5BF9\u65B9-${s}`,x:e.x,y:e.y-20,life:.8,color:i.bg},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`-${s}`,x:e.x+18,y:e.y-30,life:.9,color:"#fde047",size:28+s*3}),es(n,e.x,e.y,i.bg,20+s*10,230+s*55),Ee(s>=3?cn:Xt),e.hp<=0){let r=14+s*12+n.level*3;n.score+=r,s>=3&&(n.knives+=1),n.entities=n.entities.filter(a=>a!==e),n.entities.push(Qi(n,!1)),n.message=s>=3?`\u5F3A\u529B\u51FB\u7834 +${r}`:`\u51FB\u7834 +${r}`,n.messageT=.9,ar(),Ee(jt)}return!1}function Hp(n){let e=wn;if(!e||!h.bladeCanvas)return;let t=Math.min(.033,(n-e.last)/1e3||.016);e.last=n,e.running&&OM(e,t),FM(e),e.running&&(Br=requestAnimationFrame(Hp))}function OM(n,e){let t=h.bladeCanvas,i=n.player,s=Math.max(0,(i.r||44)-44)*1.15+Math.max(0,(n.range||82)-82)*.18,r=Math.max(230,360+(n.level||1)*8-s);i.x=Math.max(70,Math.min((n.worldW||t.width)-70,i.x+n.input.dx*r*e)),i.y=Math.max(90,Math.min((n.worldH||t.height)-70,i.y+n.input.dy*r*e)),n.camera=n.camera||{x:0,y:0},n.camera.x+=(i.x-t.width/2-n.camera.x)*Math.min(1,e*7),n.camera.y+=(i.y-t.height/2-n.camera.y)*Math.min(1,e*7),n.camera.x=Math.max(0,Math.min((n.worldW||t.width)-t.width,n.camera.x)),n.camera.y=Math.max(0,Math.min((n.worldH||t.height)-t.height,n.camera.y)),n.angle+=n.speed*e,n.invuln=Math.max(0,(n.invuln||0)-e),n.grace=Math.max(0,(n.grace||0)-e),(n.safeUntil||0)>Date.now()&&Fp(n,520);for(let a of n.entities){let o=i.x-a.x,c=i.y-a.y,l=Math.hypot(o,c)||1;if(a.hitCd=Math.max(0,(a.hitCd||0)-e),a.wobble+=e,a.angle=(a.angle||0)+(a.spin||1)*e,!a.correct){let f=n.grace>0?.18:a.kind==="beast"?.55:1;a.vx=(a.vx||0)*.92+o/l*a.speed*f*e*18,a.vy=(a.vy||0)*.92+c/l*a.speed*f*e*18,a.x+=a.vx*e,a.y+=a.vy*e}a.x=Math.max(30,Math.min((n.worldW||t.width)-30,a.x)),a.y=Math.max(30,Math.min((n.worldH||t.height)-30,a.y));let u=l<i.r+a.r,d=l<n.range+a.r;if(a.correct&&(u||d)){NM(n,a);return}if(!a.correct&&a.kind==="beast"&&n.grace<=0){if(l<n.range+a.range&&!a.hitCd){hu(a);let p=zo({r:i.r,range:n.range,knives:n.knives,level:n.level},!0),g=zo(a);if(p>=g*.92){if(a.hp=Math.max(0,(a.hp??5)-2),n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:"-2\u2764",x:a.x+20,y:a.y-42,life:1,color:"#fde047",size:30}),es(n,a.x,a.y,"#22c55e",24,260),Ee(Xt),a.hp<=0){DM(n,a);return}ir(a,i,260);return}let v=zp(g-p,a.knives||1);ir(a,i,300+v*60),du(n,`${a.animal}\u4F53\u578B\u538B\u5236\uFF0C-${ku(v)}\u5FC3`,v);return}if(u&&!a.hitCd){hu(a),ir(a,i,330),du(n,`\u649E\u5230${a.animal}\uFF0C\u6389\u4E00\u628A\u5200`);return}}if(!a.correct&&a.kind!=="beast"&&n.grace<=0){let f=l<n.range+(a.range||a.r);if((d||u||f)&&!a.hitCd&&UM(n,a,u))return}}for(;n.entities.length<8+Math.min(8,n.level);)n.entities.push(Qi(n,!1));n.particles.forEach(a=>{a.x+=a.vx*e,a.y+=a.vy*e,a.vx+=Math.sin((a.y+Date.now()/45)*.01)*14*e,a.vy+=160*e,a.life-=e}),n.floatText&&(n.floatText.y-=42*e,n.floatText.life-=e,n.floatText.life<=0&&(n.floatText=null)),n.shake=Math.max(0,(n.shake||0)-e),n.flash=Math.max(0,(n.flash||0)-e),n.messageT=Math.max(0,(n.messageT||0)-e),n.messageT||(n.message=""),n.damageTexts&&(n.damageTexts.forEach(a=>{a.y-=58*e,a.life-=e}),n.damageTexts=n.damageTexts.filter(a=>a.life>0)),n.particles=n.particles.filter(a=>a.life>0),ar()}function FM(n){$M(n)}function Vp(){if(Bn){try{for(let n of Bn.objects?.values?.()||[])n.group?.traverse?.(e=>{e.geometry&&e.geometry.dispose?.(),e.material&&(e.material.map&&e.material.map.dispose?.(),e.material.dispose?.())});Bn.renderer?.dispose?.()}catch{}Bn=null}}function BM(n,e={}){let t=e.fontSize||44,i=e.pad||18,s=document.createElement("canvas"),r=s.getContext("2d");r.font=`900 ${t}px system-ui, sans-serif`;let a=r.measureText(String(n||""));if(s.width=Math.max(96,Math.ceil(a.width+i*2)),s.height=Math.ceil(t+i*2),r.font=`900 ${t}px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",e.bg!==!1){r.fillStyle=e.bg||"rgba(255,255,255,.94)",r.strokeStyle=e.border||"#6366f1",r.lineWidth=6;let c=18,l=3,u=3,d=s.width-6,f=s.height-6;r.beginPath(),r.moveTo(l+c,u),r.arcTo(l+d,u,l+d,u+f,c),r.arcTo(l+d,u+f,l,u+f,c),r.arcTo(l,u+f,l,u,c),r.arcTo(l,u,l+d,u,c),r.closePath(),r.fill(),r.stroke()}r.lineWidth=e.strokeWidth||5,r.strokeStyle=e.stroke||"rgba(255,255,255,.85)",r.fillStyle=e.color||"#4f46e5",r.strokeText(String(n||""),s.width/2,s.height/2),r.fillText(String(n||""),s.width/2,s.height/2);let o=new Fs(s);return o.colorSpace=Yt,{tex:o,w:s.width,h:s.height}}function Nu(n,e={}){let{tex:t,w:i,h:s}=BM(n,e),r=new br({map:t,transparent:!0,depthTest:!1}),a=new Wa(r),o=e.scale||.72;return a.scale.set(i*o,s*o,1),a}function Gp(n,e,t=!1){let i=PM(n),s=t?"#ef4444":IM(i),r=t?5:Math.max(1,Math.min(5,Math.ceil(n-i*5))),a="\u2665".repeat(Math.max(0,r))+(!t&&e>5?` \xD7${i+1}`:"");return Nu(a,{bg:!1,color:s,stroke:"rgba(0,0,0,.85)",strokeWidth:7,fontSize:t?34:30,scale:t?.55:.48})}function zM(){let n=document.createElement("canvas");n.width=512,n.height=512;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,n.height);t.addColorStop(0,"#101336"),t.addColorStop(.48,"#1e2450"),t.addColorStop(1,"#334155"),e.fillStyle=t,e.fillRect(0,0,n.width,n.height);let i=e.createRadialGradient(390,72,8,390,72,118);i.addColorStop(0,"rgba(255,248,196,.95)"),i.addColorStop(.23,"rgba(250,204,21,.28)"),i.addColorStop(1,"rgba(250,204,21,0)"),e.fillStyle=i,e.beginPath(),e.arc(390,72,118,0,Math.PI*2),e.fill(),e.fillStyle="rgba(254,249,195,.92)",e.beginPath(),e.arc(390,72,34,0,Math.PI*2),e.fill(),e.fillStyle="rgba(15,23,42,.38)";for(let r=0;r<5;r++){let a=r*130-70;e.beginPath(),e.moveTo(a,300),e.lineTo(a+110,160+Math.sin(r)*30),e.lineTo(a+260,300),e.closePath(),e.fill()}for(let r=0;r<65;r++){let a=r*97%512,o=r*53%320;e.fillStyle=r%4===0?"rgba(244,114,182,.52)":"rgba(255,255,255,.28)",e.beginPath(),e.ellipse(a,o,r%4===0?4:1.5,r%4===0?2:1.5,r*.7,0,Math.PI*2),e.fill()}let s=new Fs(n);return s.colorSpace=Yt,s}function HM(){let n=document.createElement("canvas");n.width=512,n.height=512;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,512,512);t.addColorStop(0,"#334155"),t.addColorStop(.55,"#243244"),t.addColorStop(1,"#172033"),e.fillStyle=t,e.fillRect(0,0,512,512),e.globalAlpha=.22,e.strokeStyle="#93a4c7",e.lineWidth=2;for(let s=22;s<512;s+=92)for(let r=-30;r<512;r+=120){let a=(s/92|0)%2?42:0;e.beginPath();let o=r+a,c=s,l=88,u=42,d=13;e.moveTo(o+d,c),e.arcTo(o+l,c,o+l,c+u,d),e.arcTo(o+l,c+u,o,c+u,d),e.arcTo(o,c+u,o,c,d),e.arcTo(o,c,o+l,c,d),e.closePath(),e.stroke()}e.globalAlpha=.18;for(let s=0;s<46;s++){let r=s*83%512,a=s*137%512;e.fillStyle=s%2?"#f9a8d4":"#fde68a",e.beginPath(),e.ellipse(r,a,6,2.5,s*.8,0,Math.PI*2),e.fill()}e.globalAlpha=1;let i=new Fs(n);return i.colorSpace=Yt,i.wrapS=i.wrapT=xr,i.repeat.set(8,10),i}function VM(n){Vp();let e=h.bladeCanvas,t=new za({canvas:e,antialias:!1,alpha:!1,depth:!0,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1});t.setPixelRatio(1),t.setSize(e.width,e.height,!1),t.shadowMap.enabled=!1;let i=new Va;i.background=zM(),i.fog=new Ha(1515571,1e3,2400);let s=new $t(48,e.width/e.height,1,5e3),r=new Qa(16317180,1976635,2.15);i.add(r);let a=new eo(16775116,2.2);a.position.set(220,700,260),i.add(a);let o=HM(),c=new lt(new ji(n.worldW*1.75,n.worldH*1.75,1,1),new En({map:o,color:16777215,roughness:.96,metalness:0}));c.rotation.x=-Math.PI/2,c.position.set(n.worldW/2,-10,n.worldH/2),i.add(c);let l=new _n;i.add(l);let u=new Nn({color:988970,transparent:!0,opacity:.38,side:pn});for(let b=0;b<4;b++){let T=new on().setFromPoints([new N(-220,0,0),new N(0,190+b*22,0),new N(260,0,0)]);T.setIndex([0,1,2]),T.computeVertexNormals();let k=new lt(T,u);k.position.set(160+b*430,16,120),l.add(k)}let d=new lt(new Un(42,16,10),new Nn({color:16775103}));d.position.set(n.worldW*.72,360,80),l.add(d);let f=new lt(new Un(86,16,10),new Nn({color:16436245,transparent:!0,opacity:.12}));f.position.copy(d.position),l.add(f);let p=new En({color:10033947,roughness:.7,metalness:.02}),g=(b,T,k,E,R,B,M)=>{let y=new lt(new qi(T,k,E),p);y.position.set(R,B,M),b.add(y)},v=(b,T,k=1)=>{let E=new _n;return g(E,230*k,26*k,28*k,0,130*k,0),g(E,285*k,24*k,30*k,0,168*k,0),g(E,26*k,170*k,26*k,-78*k,42*k,0),g(E,26*k,170*k,26*k,78*k,42*k,0),g(E,210*k,20*k,24*k,0,76*k,0),E.position.set(b,0,T),E};l.add(v(250,260,.95)),l.add(v(n.worldW-260,n.worldH-320,.78));let m=new Nn({color:16436245,transparent:!0,opacity:.52});for(let b=0;b<18;b++){let T=new lt(new Un(12,10,8),m);T.position.set(b*227%n.worldW,32,b*149%n.worldH),l.add(T)}let _=new Nn({color:16361684,transparent:!0,opacity:.58,side:pn});for(let b=0;b<45;b++){let T=new lt(new ji(12,5),_);T.position.set(b*173%n.worldW,22+b%7*8,b*251%n.worldH),T.rotation.set(-Math.PI/2,0,b*.73),l.add(T)}Bn={renderer:t,scene:i,camera:s,objects:new Map,lastCanvasW:e.width,lastCanvasH:e.height}}function GM(n=!1,e={}){let t=new _n,i=n?5195493:new We(e.bg||"#64748b").getHex(),s=new lt(new Ka(n?34:30,n?58:52,8,16),new En({color:i,roughness:.55,metalness:.05}));s.position.y=n?58:50,t.add(s);let r=new lt(new Un(n?32:27,24,16),new En({color:n?16361684:16317180,roughness:.6}));if(r.position.y=n?118:104,t.add(r),n){for(let o of[-1,1]){let c=new lt(new Un(14,16,12),new En({color:16361684}));c.scale.set(.75,1.35,.55),c.position.set(o*22,148,0),t.add(c)}let a=new lt(new Un(11,16,8),new En({color:16478597}));a.scale.set(1.35,.72,.75),a.position.set(0,113,28),t.add(a)}else{let a=new lt(new Un(7,12,8),new En({color:1120295}));a.scale.set(1.6,.55,.3),a.position.set(0,100,25),t.add(a)}return t}function WM(n=8246268,e=1){let t=new Ya(9*e,56*e,4,1),i=new En({color:n,emissive:n,emissiveIntensity:.18,metalness:.35,roughness:.32}),s=new lt(t,i);return s.rotation.x=Math.PI/2,s}function Df(n,e=null,t=!1){let i=t?"player":e.id,s=Bn.objects.get(i),r=t?{bg:"#4f46e5"}:Up(e);if(!s){let a=new _n,o=GM(t,r);a.add(o);let c=new _n;a.add(c);let l=Nu(t?n.question?.prompt||"":e.label||"",{fontSize:t?38:30,border:t?"#6366f1":r.bg,color:t?"#4f46e5":r.bg,scale:t?.55:.42});a.add(l);let u=Gp(t?n.hp:e.hp,t?n.maxHp:e.maxHp,t);a.add(u),Bn.scene.add(a),s={group:a,unit:o,ring:c,label:l,hp:u,labelText:null,hpText:null,knives:0},Bn.objects.set(i,s)}return s}function Uf(n,e,t){n.labelText!==e&&(n.group.remove(n.label),n.label.material.map?.dispose?.(),n.label.material.dispose?.(),n.label=Nu(e,t),n.group.add(n.label),n.labelText=e)}function Of(n,e,t,i){let s=`${e}/${t}/${i}`;n.hpText!==s&&(n.group.remove(n.hp),n.hp.material.map?.dispose?.(),n.hp.material.dispose?.(),n.hp=Gp(e,t,i),n.group.add(n.hp),n.hpText=s)}function Ff(n,e,t,i,s,r=!1){if(n.knives!==e||n.knifeLevel!==i||n.knifeSize!==s||n.radius!==t){for(;n.ring.children.length;)n.ring.remove(n.ring.children[0]);let o=Dp(i||1),c=r?15680580:new We(o.color).getHex();for(let l=0;l<e;l++){let u=WM(c,r?.45:s||.75);n.ring.add(u)}n.knives=e,n.knifeLevel=i,n.knifeSize=s,n.radius=t}let a=Math.max(1,e);n.ring.children.forEach((o,c)=>{let l=c*Math.PI*2/a;o.position.set(Math.cos(l)*t,56,Math.sin(l)*t),o.rotation.y=-l})}function $M(n){let e=h.bladeCanvas;if(!e)return;Bn||VM(n);let t=Bn;(t.lastCanvasW!==e.width||t.lastCanvasH!==e.height)&&(t.renderer.setSize(e.width,e.height,!1),t.camera.aspect=e.width/e.height,t.camera.updateProjectionMatrix(),t.lastCanvasW=e.width,t.lastCanvasH=e.height);let i=n.player;t.camera.position.set(i.x,620,i.y+720),t.camera.lookAt(i.x,50,i.y);let s=new Set(["player"]),r=Df(n,null,!0);r.group.position.set(i.x,0,i.y);let a=Math.max(.72,Math.min(1.25,(i.r||44)/58));r.unit.scale.setScalar(a),Uf(r,n.question?.prompt||"",{fontSize:38,border:"#6366f1",color:"#4f46e5",scale:.55}),r.label.position.set(0,190,0),Of(r,n.hp,n.maxHp,!0),r.hp.position.set(0,225,0),Ff(r,n.knives,n.range,n.knifeLevel,n.knifeSize,!1),r.ring.rotation.y=n.angle;for(let o of n.entities){s.add(o.id);let c=Up(o),l=Df(n,o,!1);l.group.position.set(o.x,0,o.y);let u=CM(o);l.unit.scale.setScalar(u),Uf(l,o.label||"",{fontSize:30,border:c.bg,color:c.bg,scale:.42}),l.label.position.set(0,150*u,0),Of(l,o.hp,o.maxHp,!1),l.hp.position.set(0,184*u,0),Ff(l,o.knives||1,o.range||40,o.knifeLevel||1,.45,!0),l.ring.rotation.y=o.angle||0}for(let[o,c]of[...t.objects.entries()])s.has(o)||(t.scene.remove(c.group),t.objects.delete(o));t.renderer.render(t.scene,t.camera)}
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
