var sm=0,Ku=1,rm=2;var Sd=1,am=2,Wn=3,_i=0,Jt=1,qn=2,fi=0,Es=1,Yu=2,Ju=3,Zu=4,om=5,Bi=100,cm=101,lm=102,um=103,hm=104,dm=200,fm=201,pm=202,mm=203,Gc=204,Wc=205,_m=206,gm=207,vm=208,ym=209,xm=210,wm=211,Mm=212,bm=213,Sm=214,Tm=0,Em=1,Am=2,Ta=3,Cm=4,Rm=5,Pm=6,Im=7,Td=0,Lm=1,km=2,pi=0,Nm=1,Dm=2,Um=3,Om=4,Fm=5,Bm=6,zm=7;var Ed=300,Ps=301,Is=302,$c=303,qc=304,co=306,jc=1e3,Hi=1001,Xc=1002,pn=1003,Hm=1004;var Yr=1005;var Sn=1006,sc=1007;var Vi=1008;var gi=1009,Vm=1010,Gm=1011,Ea=1012,Ad=1013,Ls=1014,di=1015,lo=1016,Cd=1017,Rd=1018,ks=1020,Wm=35902,$m=1021,qm=1022,In=1023,jm=1024,Xm=1025,As=1026,Ns=1027,Km=1028,Pd=1029,Ym=1030,Id=1031,Ld=1033,rc=33776,ac=33777,oc=33778,cc=33779,Qu=35840,eh=35841,th=35842,nh=35843,ih=36196,sh=37492,rh=37496,ah=37808,oh=37809,ch=37810,lh=37811,uh=37812,hh=37813,dh=37814,fh=37815,ph=37816,mh=37817,_h=37818,gh=37819,vh=37820,yh=37821,lc=36492,xh=36494,wh=36495,Jm=36283,Mh=36284,bh=36285,Sh=36286;var Aa=2300,Kc=2301,uc=2302,Th=2400,Eh=2401,Ah=2402;var Zm=3200,Qm=3201,kd=0,e_=1,hi="",fn="srgb",wi="srgb-linear",Ul="display-p3",uo="display-p3-linear",Ca="linear",ct="srgb",Ra="rec709",Pa="p3";var ss=7680;var Ch=519,t_=512,n_=513,i_=514,Nd=515,s_=516,r_=517,a_=518,o_=519,Yc=35044;var Rh="300 es",jn=2e3,Ia=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hc=Math.PI/180,Jc=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function c_(n,e){return(n%e+e)%e}function dc(n,e,t){return(1-t)*n+t*e}function Pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],_=s[6],S=s[1],b=s[4],T=s[7],O=s[2],E=s[5],R=s[8];return r[0]=a*v+o*S+c*O,r[3]=a*m+o*b+c*E,r[6]=a*_+o*T+c*R,r[1]=l*v+u*S+d*O,r[4]=l*m+u*b+d*E,r[7]=l*_+u*T+d*R,r[2]=f*v+p*S+g*O,r[5]=f*m+p*b+g*E,r[8]=f*_+p*T+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,p=l*r-a*c,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fc=new He;function Dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l_(){let n=La("canvas");return n.style.display="block",n}var Ph={};function Ol(n){n in Ph||(Ph[n]=!0,console.warn(n))}function u_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ih=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lh=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jr={[wi]:{transfer:Ca,primaries:Ra,toReference:n=>n,fromReference:n=>n},[fn]:{transfer:ct,primaries:Ra,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[uo]:{transfer:Ca,primaries:Pa,toReference:n=>n.applyMatrix3(Lh),fromReference:n=>n.applyMatrix3(Ih)},[Ul]:{transfer:ct,primaries:Pa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Lh),fromReference:n=>n.applyMatrix3(Ih).convertLinearToSRGB()}},h_=new Set([wi,uo]),st={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!h_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Jr[e].toReference,s=Jr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Jr[n].primaries},getTransfer:function(n){return n===hi?Ca:Jr[n].transfer}};function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rs,Zc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=La("canvas")),rs.width=e.width,rs.height=e.height;let i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cs(t[i]/255)*255):t[i]=Cs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},d_=0,ka=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mc(s[a].image)):r.push(mc(s[a]))}else r=mc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var f_=0,an=class n extends vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Hi,s=Hi,r=Sn,a=Vi,o=In,c=gi,l=n.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=mi(),this.name="",this.source=new ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jc:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jc:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ed;an.DEFAULT_ANISOTROPY=1;var It=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,T=(p+1)/2,O=(_+1)/2,E=(u+f)/4,R=(d+v)/4,z=(g+m)/4;return b>T&&b>O?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=R/i):T>O?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=E/s,r=z/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=R/r,s=z/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new an(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ka(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Qc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Na=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==p||u!==g){let m=1-o,_=c*f+l*p+u*g+d*v,S=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){let O=Math.sqrt(b),E=Math.atan2(O,_*S);m=Math.sin(m*E)/O,o=Math.sin(o*E)/O}let T=o*S;if(c=c*m+f*T,l=l*m+p*T,u=u*m+g*T,d=d*m+v*T,m===1-o){let O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-o*p,e[t+2]=l*g+u*p+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new k,kh=new yi,Wi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Qr.subVectors(this.max,lr),as.subVectors(e.a,lr),os.subVectors(e.b,lr),cs.subVectors(e.c,lr),ri.subVectors(os,as),ai.subVectors(cs,os),Li.subVectors(as,cs);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Li.z,Li.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Li.z,0,-Li.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Li.y,Li.x,0];return!gc(t,as,os,cs,Qr)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,as,os,cs,Qr))?!1:(ea.crossVectors(ri,ai),t=[ea.x,ea.y,ea.z],gc(t,as,os,cs,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bn=[new k,new k,new k,new k,new k,new k,new k,new k],wn=new k,Zr=new Wi,as=new k,os=new k,cs=new k,ri=new k,ai=new k,Li=new k,lr=new k,Qr=new k,ea=new k,ki=new k;function gc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ki.fromArray(n,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=e.dot(ki),l=t.dot(ki),u=i.dot(ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var p_=new Wi,ur=new k,vc=new k,Ds=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):p_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(vc)),this.expandByPoint(ur.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new k,yc=new k,ta=new k,oi=new k,xc=new k,na=new k,wc=new k,Da=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yc.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(yc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=oi.dot(this.direction),c=-oi.dot(ta),l=oi.lengthSq(),u=Math.abs(1-a*a),d,f,p,g;if(u>0)if(d=a*c-o,f=a*o-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yc).addScaledVector(ta,f),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);let i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){xc.subVectors(t,e),na.subVectors(i,e),wc.crossVectors(xc,na);let a=this.direction.dot(wc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);let c=o*this.direction.dot(na.crossVectors(oi,na));if(c<0)return null;let l=o*this.direction.dot(xc.cross(oi));if(l<0||c+l>a)return null;let u=-o*oi.dot(wc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class n{constructor(e,t,i,s,r,a,o,c,l,u,d,f,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,d,f,p,g,v,m)}set(e,t,i,s,r,a,o,c,l,u,d,f,p,g,v,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=d,_[14]=f,_[3]=p,_[7]=g,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,v=l*d;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,v=l*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,p=a*d,g=o*u,v=o*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m_,e,__)}lookAt(e,t,i){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ci.crossVectors(i,nn),ci.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ci.crossVectors(i,nn)),ci.normalize(),ia.crossVectors(nn,ci),s[0]=ci.x,s[4]=ia.x,s[8]=nn.x,s[1]=ci.y,s[5]=ia.y,s[9]=nn.y,s[2]=ci.z,s[6]=ia.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],_=i[14],S=i[3],b=i[7],T=i[11],O=i[15],E=s[0],R=s[4],z=s[8],M=s[12],y=s[1],L=s[5],H=s[9],B=s[13],j=s[2],K=s[6],q=s[10],ee=s[14],U=s[3],Z=s[7],re=s[11],ve=s[15];return r[0]=a*E+o*y+c*j+l*U,r[4]=a*R+o*L+c*K+l*Z,r[8]=a*z+o*H+c*q+l*re,r[12]=a*M+o*B+c*ee+l*ve,r[1]=u*E+d*y+f*j+p*U,r[5]=u*R+d*L+f*K+p*Z,r[9]=u*z+d*H+f*q+p*re,r[13]=u*M+d*B+f*ee+p*ve,r[2]=g*E+v*y+m*j+_*U,r[6]=g*R+v*L+m*K+_*Z,r[10]=g*z+v*H+m*q+_*re,r[14]=g*M+v*B+m*ee+_*ve,r[3]=S*E+b*y+T*j+O*U,r[7]=S*R+b*L+T*K+O*Z,r[11]=S*z+b*H+T*q+O*re,r[15]=S*M+b*B+T*ee+O*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],_=e[15];return g*(+r*c*d-s*l*d-r*o*f+i*l*f+s*o*p-i*c*p)+v*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*u-r*c*u)+m*(+t*l*d-t*o*p-r*a*d+i*a*p+r*o*u-i*l*u)+_*(-s*o*u-t*c*d+t*o*f+s*a*d-i*a*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],_=e[15],S=d*m*l-v*f*l+v*c*p-o*m*p-d*c*_+o*f*_,b=g*f*l-u*m*l-g*c*p+a*m*p+u*c*_-a*f*_,T=u*v*l-g*d*l+g*o*p-a*v*p-u*o*_+a*d*_,O=g*d*c-u*v*c-g*o*f+a*v*f+u*o*m-a*d*m,E=t*S+i*b+s*T+r*O;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=S*R,e[1]=(v*f*r-d*m*r-v*s*p+i*m*p+d*s*_-i*f*_)*R,e[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*_+i*c*_)*R,e[3]=(d*c*r-o*f*r-d*s*l+i*f*l+o*s*p-i*c*p)*R,e[4]=b*R,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*_+t*f*_)*R,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*_-t*c*_)*R,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*p+t*c*p)*R,e[8]=T*R,e[9]=(g*d*r-u*v*r-g*i*p+t*v*p+u*i*_-t*d*_)*R,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*_+t*o*_)*R,e[11]=(u*o*r-a*d*r-u*i*l+t*d*l+a*i*p-t*o*p)*R,e[12]=O*R,e[13]=(u*v*s-g*d*s+g*i*f-t*v*f-u*i*m+t*d*m)*R,e[14]=(g*o*s-a*v*s-g*i*c+t*v*c+a*i*m-t*o*m)*R,e[15]=(a*d*s-u*o*s+u*i*c-t*d*c-a*i*f+t*o*f)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,p=r*u,g=r*d,v=a*u,m=a*d,_=o*d,S=c*l,b=c*u,T=c*d,O=i.x,E=i.y,R=i.z;return s[0]=(1-(v+_))*O,s[1]=(p+T)*O,s[2]=(g-b)*O,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(f+_))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+b)*R,s[9]=(m-S)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),a=ls.set(s[4],s[5],s[6]).length(),o=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);let l=1/r,u=1/a,d=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=jn){let c=this.elements,l=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(o===jn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ia)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=jn){let c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(a-r),f=(t+e)*l,p=(i+s)*u,g,v;if(o===jn)g=(a+r)*d,v=-2*d;else if(o===Ia)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ls=new k,Mn=new ft,m_=new k(0,0,0),__=new k(1,1,1),ci=new k,ia=new k,nn=new k,Nh=new ft,Dh=new yi,Ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Ua=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},g_=0,Uh=new k,us=new yi,Hn=new ft,sa=new k,hr=new k,v_=new k,y_=new yi,Oh=new k(1,0,0),Fh=new k(0,1,0),Bh=new k(0,0,1),zh={type:"added"},x_={type:"removed"},hs={type:"childadded",child:null},Mc={type:"childremoved",child:null},Nt=class n extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Ln,i=new yi,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sa.copy(e):sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(hr,sa,this.up):Hn.lookAt(sa,hr,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Hn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,v_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new k,Vn=new k,bc=new k,Gn=new k,ds=new k,fs=new k,Hh=new k,Sc=new k,Tc=new k,Ec=new k,Gi=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),Vn.subVectors(i,t),bc.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(Vn),c=bn.dot(bc),l=Vn.dot(Vn),u=Vn.dot(bc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),Vn.subVectors(e,t),bn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,i),fs.subVectors(r,i),Sc.subVectors(e,i);let c=ds.dot(Sc),l=fs.dot(Sc);if(c<=0&&l<=0)return t.copy(i);Tc.subVectors(e,s);let u=ds.dot(Tc),d=fs.dot(Tc);if(u>=0&&d<=u)return t.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ds,a);Ec.subVectors(e,r);let p=ds.dot(Ec),g=fs.dot(Ec);if(g>=0&&p<=g)return t.copy(r);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(fs,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Hh.subVectors(r,s),o=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(Hh,o);let _=1/(m+v+f);return a=v*_,o=f*_,t.copy(i).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Ac(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=c_(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ac(a,r,e+1/3),this.g=Ac(a,r,e),this.b=Ac(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let i=Ud[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return st.fromWorkingColorSpace(Bt.copy(this),e),Math.round(kt(Bt.r*255,0,255))*65536+Math.round(kt(Bt.g*255,0,255))*256+Math.round(kt(Bt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Bt.copy(this),t);let i=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=fn){st.fromWorkingColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,s=Bt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(ra);let i=dc(li.h,ra.h,t),s=dc(li.s,ra.s,t),r=dc(li.l,ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Oe;Oe.NAMES=Ud;var w_=0,Kn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Es,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==Wc&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Us=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new k,aa=new pe,rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ol("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}};var Oa=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fa=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},M_=0,dn=new ft,Cc=new Nt,ps=new k,sn=new Wi,dr=new Wi,Pt=new k,qt=class n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?Fa:Oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(sn.min,dr.min),sn.expandByPoint(Pt),Pt.addVectors(sn.max,dr.max),sn.expandByPoint(Pt)):(sn.expandByPoint(dr.min),sn.expandByPoint(dr.max))}sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Pt.fromBufferAttribute(o,l),c&&(ps.fromBufferAttribute(e,l),Pt.add(ps)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<i.count;z++)o[z]=new k,c[z]=new k;let l=new k,u=new k,d=new k,f=new pe,p=new pe,g=new pe,v=new k,m=new k;function _(z,M,y){l.fromBufferAttribute(i,z),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(l),d.sub(l),p.sub(f),g.sub(f);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[z].add(v),o[M].add(v),o[y].add(v),c[z].add(m),c[M].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let z=0,M=S.length;z<M;++z){let y=S[z],L=y.start,H=y.count;for(let B=L,j=L+H;B<j;B+=3)_(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new k,T=new k,O=new k,E=new k;function R(z){O.fromBufferAttribute(s,z),E.copy(O);let M=o[z];b.copy(M),b.sub(O.multiplyScalar(O.dot(M))).normalize(),T.crossVectors(E,M);let L=T.dot(c[z])<0?-1:1;a.setXYZW(z,b.x,b.y,b.z,L)}for(let z=0,M=S.length;z<M;++z){let y=S[z],L=y.start,H=y.count;for(let B=L,j=L+H;B<j;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,u=new k,d=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let _=0;_<u;_++)f[g++]=l[p++]}return new rn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vh=new ft,Ni=new Da,oa=new Ds,Gh=new k,ms=new k,_s=new k,gs=new k,Rc=new k,ca=new k,la=new pe,ua=new pe,ha=new pe,Wh=new k,$h=new k,qh=new k,da=new k,fa=new k,wt=class extends Nt{constructor(e=new qt,t=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(Rc.fromBufferAttribute(d,e),a?ca.addScaledVector(Rc,u):ca.addScaledVector(Rc.sub(t),u))}t.add(ca)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(oa.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(oa,Gh)===null||Ni.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],_=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,O=b;T<O;T+=3){let E=o.getX(T),R=o.getX(T+1),z=o.getX(T+2);s=pa(this,_,e,i,l,u,d,E,R,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,_=v;m<_;m+=3){let S=o.getX(m),b=o.getX(m+1),T=o.getX(m+2);s=pa(this,a,e,i,l,u,d,S,b,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],_=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,O=b;T<O;T+=3){let E=T,R=T+1,z=T+2;s=pa(this,_,e,i,l,u,d,E,R,z),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,_=v;m<_;m+=3){let S=m,b=m+1,T=m+2;s=pa(this,a,e,i,l,u,d,S,b,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function b_(n,e,t,i,s,r,a,o){let c;if(e.side===Jt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===_i,o),c===null)return null;fa.copy(o),fa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(fa);return l<t.near||l>t.far?null:{distance:l,point:fa.clone(),object:n}}function pa(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,ms),n.getVertexPosition(c,_s),n.getVertexPosition(l,gs);let u=b_(n,e,t,i,ms,_s,gs,da);if(u){s&&(la.fromBufferAttribute(s,o),ua.fromBufferAttribute(s,c),ha.fromBufferAttribute(s,l),u.uv=Gi.getInterpolation(da,ms,_s,gs,la,ua,ha,new pe)),r&&(la.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,c),ha.fromBufferAttribute(r,l),u.uv1=Gi.getInterpolation(da,ms,_s,gs,la,ua,ha,new pe)),a&&(Wh.fromBufferAttribute(a,o),$h.fromBufferAttribute(a,c),qh.fromBufferAttribute(a,l),u.normal=Gi.getInterpolation(da,ms,_s,gs,Wh,$h,qh,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new k,materialIndex:0};Gi.getNormal(ms,_s,gs,d.normal),u.face=d}return u}var $i=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(d,2));function g(v,m,_,S,b,T,O,E,R,z,M){let y=T/R,L=O/z,H=T/2,B=O/2,j=E/2,K=R+1,q=z+1,ee=0,U=0,Z=new k;for(let re=0;re<q;re++){let ve=re*L-B;for(let Ae=0;Ae<K;Ae++){let Ke=Ae*y-H;Z[v]=Ke*S,Z[m]=ve*b,Z[_]=j,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[_]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(Ae/R),d.push(1-re/z),ee+=1}}for(let re=0;re<z;re++)for(let ve=0;ve<R;ve++){let Ae=f+ve+K*re,Ke=f+ve+K*(re+1),Y=f+(ve+1)+K*(re+1),se=f+(ve+1)+K*re;c.push(Ae,Ke,se),c.push(Ke,Y,se),U+=6}o.addGroup(p,U,M),p+=U,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=Os(n[t]);for(let s in i)e[s]=i[s]}return e}function S_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Od(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var T_={clone:Os,merge:Wt},E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=A_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=S_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ba=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new k,jh=new pe,Xh=new pe,$t=class extends Ba{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Xh),t.subVectors(Xh,jh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,ys=1,tl=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(vs,ys,e,t);s.layers=this.layers,this.add(s);let r=new $t(vs,ys,e,t);r.layers=this.layers,this.add(r);let a=new $t(vs,ys,e,t);a.layers=this.layers,this.add(a);let o=new $t(vs,ys,e,t);o.layers=this.layers,this.add(o);let c=new $t(vs,ys,e,t);c.layers=this.layers,this.add(c);let l=new $t(vs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},za=class extends an{constructor(e,t,i,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nl=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $i(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:fi});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Sn),new tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Pc=new k,C_=new k,R_=new He,$n=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Pc.subVectors(i,t).cross(C_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Pc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||R_.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new Ds,ma=new k,wr=class{constructor(e=new $n,t=new $n,i=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],_=s[12],S=s[13],b=s[14],T=s[15];if(i[0].setComponents(c-r,f-l,m-p,T-_).normalize(),i[1].setComponents(c+r,f+l,m+p,T+_).normalize(),i[2].setComponents(c+a,f+u,m+g,T+S).normalize(),i[3].setComponents(c-a,f-u,m-g,T-S).normalize(),i[4].setComponents(c-o,f-d,m-v,T-b).normalize(),t===jn)i[5].setComponents(c+o,f+d,m+v,T+b).normalize();else if(t===Ia)i[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function P_(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let u=c.array,d=c._updateRange,f=c.updateRanges;if(n.bindBuffer(l,o),d.count===-1&&f.length===0&&n.bufferSubData(l,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){let v=f[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Fs=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,p=[],g=[],v=[],m=[];for(let _=0;_<u;_++){let S=_*f-a;for(let b=0;b<l;b++){let T=b*d-r;g.push(T,-S,0),v.push(0,0,1),m.push(b/o),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){let b=S+l*_,T=S+l*(_+1),O=S+1+l*(_+1),E=S+1+l*_;p.push(b,T,E),p.push(T,O,E)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O_=`#ifdef USE_AOMAP
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
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
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
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W_=`#ifdef USE_IRIDESCENCE
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
#endif`,$_=`#ifdef USE_BUMPMAP
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`
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
}`,lg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mg=`uniform bool receiveShadow;
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
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
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
#endif`,Rg=`struct PhysicalMaterial {
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
}`,Pg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m0=`float getShadowMask() {
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
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,O0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,B0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`uniform float scale;
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,$0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,Q0=`#define PHONG
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
}`,ev=`#define STANDARD
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
}`,tv=`#define STANDARD
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
}`,nv=`#define TOON
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
}`,iv=`#define TOON
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
}`,sv=`uniform float size;
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
}`,rv=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,ov=`uniform vec3 color;
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
}`,cv=`uniform float rotation;
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
}`,lv=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:I_,alphahash_pars_fragment:L_,alphamap_fragment:k_,alphamap_pars_fragment:N_,alphatest_fragment:D_,alphatest_pars_fragment:U_,aomap_fragment:O_,aomap_pars_fragment:F_,batching_pars_vertex:B_,batching_vertex:z_,begin_vertex:H_,beginnormal_vertex:V_,bsdfs:G_,iridescence_fragment:W_,bumpmap_pars_fragment:$_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:K_,color_fragment:Y_,color_pars_fragment:J_,color_pars_vertex:Z_,color_vertex:Q_,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:sg,emissivemap_fragment:rg,emissivemap_pars_fragment:ag,colorspace_fragment:og,colorspace_pars_fragment:cg,envmap_fragment:lg,envmap_common_pars_fragment:ug,envmap_pars_fragment:hg,envmap_pars_vertex:dg,envmap_physical_pars_fragment:bg,envmap_vertex:fg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:_g,fog_pars_fragment:gg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:yg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:wg,lights_pars_begin:Mg,lights_toon_fragment:Sg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Cg,lights_physical_pars_fragment:Rg,lights_fragment_begin:Pg,lights_fragment_maps:Ig,lights_fragment_end:Lg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ug,map_fragment:Og,map_pars_fragment:Fg,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Gg,morphcolor_vertex:Wg,morphnormal_vertex:$g,morphtarget_pars_vertex:qg,morphtarget_vertex:jg,normal_fragment_begin:Xg,normal_fragment_maps:Kg,normal_pars_fragment:Yg,normal_pars_vertex:Jg,normal_vertex:Zg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:s0,packing:r0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:c0,dithering_pars_fragment:l0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:d0,shadowmap_pars_vertex:f0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:_0,skinning_pars_vertex:g0,skinning_vertex:v0,skinnormal_vertex:y0,specularmap_fragment:x0,specularmap_pars_fragment:w0,tonemapping_fragment:M0,tonemapping_pars_fragment:b0,transmission_fragment:S0,transmission_pars_fragment:T0,uv_pars_fragment:E0,uv_pars_vertex:A0,uv_vertex:C0,worldpos_vertex:R0,background_vert:P0,background_frag:I0,backgroundCube_vert:L0,backgroundCube_frag:k0,cube_vert:N0,cube_frag:D0,depth_vert:U0,depth_frag:O0,distanceRGBA_vert:F0,distanceRGBA_frag:B0,equirect_vert:z0,equirect_frag:H0,linedashed_vert:V0,linedashed_frag:G0,meshbasic_vert:W0,meshbasic_frag:$0,meshlambert_vert:q0,meshlambert_frag:j0,meshmatcap_vert:X0,meshmatcap_frag:K0,meshnormal_vert:Y0,meshnormal_frag:J0,meshphong_vert:Z0,meshphong_frag:Q0,meshphysical_vert:ev,meshphysical_frag:tv,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:sv,points_frag:rv,shadow_vert:av,shadow_frag:ov,sprite_vert:cv,sprite_frag:lv},le={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Rn={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Rn.physical={uniforms:Wt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var _a={r:0,b:0,g:0},Ui=new Ln,uv=new ft;function hv(n,e,t,i,s,r,a){let o=new Oe(0),c=r===!0?0:1,l,u,d=null,f=0,p=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function v(S){let b=!1,T=g(S);T===null?_(o,c):T&&T.isColor&&(_(T,1),b=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,b){let T=g(b);T&&(T.isCubeTexture||T.mapping===co)?(u===void 0&&(u=new wt(new $i(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Os(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ui.copy(b.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(Ui)),u.material.toneMapped=st.getTransfer(T.colorSpace)!==ct,(d!==T||f!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new wt(new Fs(2,2),new kn({name:"BackgroundMaterial",uniforms:Os(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,f=T.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function _(S,b){S.getRGB(_a,Od(n)),i.buffers.color.setClear(_a.r,_a.g,_a.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),c=b,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,_(o,c)},render:v,addToRenderList:m}}function dv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(y,L,H,B,j){let K=!1,q=d(B,H,L);r!==q&&(r=q,l(r.object)),K=p(y,B,H,j),K&&g(y,B,H,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,T(y,L,H,B),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,L,H){let B=H.wireframe===!0,j=i[y.id];j===void 0&&(j={},i[y.id]=j);let K=j[L.id];K===void 0&&(K={},j[L.id]=K);let q=K[B];return q===void 0&&(q=f(c()),K[B]=q),q}function f(y){let L=[],H=[],B=[];for(let j=0;j<t;j++)L[j]=0,H[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,L,H,B){let j=r.attributes,K=L.attributes,q=0,ee=H.getAttributes();for(let U in ee)if(ee[U].location>=0){let re=j[U],ve=K[U];if(ve===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(y,L,H,B){let j={},K=L.attributes,q=0,ee=H.getAttributes();for(let U in ee)if(ee[U].location>=0){let re=K[U];re===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));let ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),j[U]=ve,q++}r.attributes=j,r.attributesNum=q,r.index=B}function v(){let y=r.newAttributes;for(let L=0,H=y.length;L<H;L++)y[L]=0}function m(y){_(y,0)}function _(y,L){let H=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;H[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),j[y]!==L&&(n.vertexAttribDivisor(y,L),j[y]=L)}function S(){let y=r.newAttributes,L=r.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==y[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function b(y,L,H,B,j,K,q){q===!0?n.vertexAttribIPointer(y,L,H,j,K):n.vertexAttribPointer(y,L,H,B,j,K)}function T(y,L,H,B){v();let j=B.attributes,K=H.getAttributes(),q=L.defaultAttributeValues;for(let ee in K){let U=K[ee];if(U.location>=0){let Z=j[ee];if(Z===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let re=Z.normalized,ve=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;let Ke=Ae.buffer,Y=Ae.type,se=Ae.bytesPerElement,xe=Y===n.INT||Y===n.UNSIGNED_INT||Z.gpuType===Ad;if(Z.isInterleavedBufferAttribute){let de=Z.data,qe=de.stride,Ve=Z.offset;if(de.isInstancedInterleavedBuffer){for(let Qe=0;Qe<U.locationSize;Qe++)_(U.location+Qe,de.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Qe=0;Qe<U.locationSize;Qe++)m(U.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Qe=0;Qe<U.locationSize;Qe++)b(U.location+Qe,ve/U.locationSize,Y,re,qe*se,(Ve+ve/U.locationSize*Qe)*se,xe)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<U.locationSize;de++)_(U.location+de,Z.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<U.locationSize;de++)m(U.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let de=0;de<U.locationSize;de++)b(U.location+de,ve/U.locationSize,Y,re,ve*se,ve/U.locationSize*de*se,xe)}}else if(q!==void 0){let re=q[ee];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(U.location,re);break;case 3:n.vertexAttrib3fv(U.location,re);break;case 4:n.vertexAttrib4fv(U.location,re);break;default:n.vertexAttrib1fv(U.location,re)}}}}S()}function O(){z();for(let y in i){let L=i[y];for(let H in L){let B=L[H];for(let j in B)u(B[j].object),delete B[j];delete L[H]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;let L=i[y.id];for(let H in L){let B=L[H];for(let j in B)u(B[j].object),delete B[j];delete L[H]}delete i[y.id]}function R(y){for(let L in i){let H=i[L];if(H[y.id]===void 0)continue;let B=H[y.id];for(let j in B)u(B[j].object),delete B[j];delete H[y.id]}}function z(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function fv(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(l[p],u[p]);else{f.multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}}function c(l,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<f.length;v++)t.update(g,i,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function pv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==In&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let R=E===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==di&&!R)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:T,maxSamples:O}}function mv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new $n,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,_=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:i,b=S*4,T=_.clippingState||null;c.value=T,T=u(g,f,b,p);for(let O=0;O!==b;++O)T[O]=t[O];_.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let _=p+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let b=0,T=p;b!==v;++b,T+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function _v(n){let e=new WeakMap;function t(a,o){return o===$c?a.mapping=Ps:o===qc&&(a.mapping=Is),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===$c||o===qc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new nl(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ha=class extends Ba{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ts=4,Kh=[.125,.215,.35,.446,.526,.582],zi=20,Ic=new Ha,Yh=new Oe,Lc=null,kc=0,Nc=0,Dc=!1,Fi=(1+Math.sqrt(5))/2,xs=1/Fi,Jh=[new k(-Fi,xs,0),new k(Fi,xs,0),new k(-xs,0,Fi),new k(xs,0,Fi),new k(0,Fi,-xs),new k(0,Fi,xs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Lc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,kc,Nc),this._renderer.xr.enabled=Dc,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:lo,format:In,colorSpace:wi,depthBuffer:!1},s=Zh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gv(r)),this._blurMaterial=vv(r,e,t)}return s}_compileMaterial(e){let t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ic)}_sceneToCubeUV(e,t,i,s){let o=new $t(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Yh),u.toneMapping=pi,u.autoClear=!1;let p=new Us({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new wt(new $i,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Yh),v=!0);for(let _=0;_<6;_++){let S=_%3;S===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):S===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));let b=this._cubeSize;ga(s,S*b,_>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ps||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ga(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ic)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jh[(s-r-1)%Jh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new wt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let _=[],S=0;for(let R=0;R<zi;++R){let z=R/v,M=Math.exp(-z*z/2);_.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<_.length;R++)_[R]=_[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let T=this._sizeLods[s],O=3*T*(s>b-Ts?s-b+Ts:0),E=4*(this._cubeSize-T);ga(t,O,E,3*T,2*T),c.setRenderTarget(t),c.render(d,Ic)}};function gv(n){let e=[],t=[],i=[],s=n,r=n-Ts+1+Kh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Ts?c=Kh[a-n+Ts-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,_=1,S=new Float32Array(v*g*p),b=new Float32Array(m*g*p),T=new Float32Array(_*g*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,z=E>2?0:-1,M=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];S.set(M,v*g*E),b.set(f,m*g*E);let y=[E,E,E,E,E,E];T.set(y,_*g*E)}let O=new qt;O.setAttribute("position",new rn(S,v)),O.setAttribute("uv",new rn(b,m)),O.setAttribute("faceIndex",new rn(T,_)),e.push(O),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zh(n,e,t){let i=new Xn(n,e,t);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vv(n,e,t){let i=new Float32Array(zi),s=new k(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Qh(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ed(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function yv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===$c||c===qc,u=c===Ps||c===Is;if(l||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Va(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Va(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function xv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ol("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function wv(n,e,t,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,_=v.length;m<_;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let v=p[g];for(let m=0,_=v.length;m<_;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,g=d.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let b=0,T=S.length;b<T;b+=3){let O=S[b+0],E=S[b+1],R=S[b+2];f.push(O,E,E,R,R,O)}}else if(g!==void 0){let S=g.array;v=g.version;for(let b=0,T=S.length/3-1;b<T;b+=3){let O=b+0,E=b+1,R=b+2;f.push(O,E,E,R,R,O)}}else return;let m=new(Dd(f)?Fa:Oa)(f,1);m.version=v;let _=r.get(d);_&&e.remove(_),r.set(d,m)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Mv(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*a,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(f[m]/a,p[m]);else{v.multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_];t.update(m,i,1)}}function d(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f.length;_++)l(f[_]/a,p[_],v[_]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let _=0;for(let S=0;S<g;S++)_+=p[S];for(let S=0;S<v.length;S++)t.update(_,i,v[S])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Sv(n,e,t){let i=new WeakMap,s=new It;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let T=o.attributes.position.count*b,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let E=new Float32Array(T*O*4*d),R=new Na(E,T,O,d);R.type=di,R.needsUpdate=!0;let z=b*4;for(let y=0;y<d;y++){let L=m[y],H=_[y],B=S[y],j=T*O*4*y;for(let K=0;K<L.count;K++){let q=K*z;p===!0&&(s.fromBufferAttribute(L,K),E[j+q+0]=s.x,E[j+q+1]=s.y,E[j+q+2]=s.z,E[j+q+3]=0),g===!0&&(s.fromBufferAttribute(H,K),E[j+q+4]=s.x,E[j+q+5]=s.y,E[j+q+6]=s.z,E[j+q+7]=0),v===!0&&(s.fromBufferAttribute(B,K),E[j+q+8]=s.x,E[j+q+9]=s.y,E[j+q+10]=s.z,E[j+q+11]=B.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new pe(T,O)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Tv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Ga=class extends an{constructor(e,t,i,s,r,a,o,c,l,u=As){if(u!==As&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===As&&(i=Ls),i===void 0&&u===Ns&&(i=ks),super(null,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bd=new an,zd=new Ga(1,1);zd.compareFunction=Nd;var Hd=new Na,Vd=new el,Gd=new za,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function zs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ho(n,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ev(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),At(t,i)}}function Iv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),At(t,i)}}function Lv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),At(t,i)}}function kv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Ov(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Hv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?zd:Bd;t.setTexture2D(e||r,s)}function Vv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vd,s)}function Gv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gd,s)}function Wv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hd,s)}function $v(n){switch(n){case 5126:return Ev;case 35664:return Av;case 35665:return Cv;case 35666:return Rv;case 35674:return Pv;case 35675:return Iv;case 35676:return Lv;case 5124:case 35670:return kv;case 35667:case 35671:return Nv;case 35668:case 35672:return Dv;case 35669:case 35673:return Uv;case 5125:return Ov;case 36294:return Fv;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}function qv(n,e){n.uniform1fv(this.addr,e)}function jv(n,e){let t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function Xv(n,e){let t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function Kv(n,e){let t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function Yv(n,e){let t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jv(n,e){let t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zv(n,e){let t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qv(n,e){n.uniform1iv(this.addr,e)}function ey(n,e){n.uniform2iv(this.addr,e)}function ty(n,e){n.uniform3iv(this.addr,e)}function ny(n,e){n.uniform4iv(this.addr,e)}function iy(n,e){n.uniform1uiv(this.addr,e)}function sy(n,e){n.uniform2uiv(this.addr,e)}function ry(n,e){n.uniform3uiv(this.addr,e)}function ay(n,e){n.uniform4uiv(this.addr,e)}function oy(n,e,t){let i=this.cache,s=e.length,r=ho(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bd,r[a])}function cy(n,e,t){let i=this.cache,s=e.length,r=ho(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vd,r[a])}function ly(n,e,t){let i=this.cache,s=e.length,r=ho(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gd,r[a])}function uy(n,e,t){let i=this.cache,s=e.length,r=ho(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hd,r[a])}function hy(n){switch(n){case 5126:return qv;case 35664:return jv;case 35665:return Xv;case 35666:return Kv;case 35674:return Yv;case 35675:return Jv;case 35676:return Zv;case 5124:case 35670:return Qv;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return uy}}var il=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$v(t.type)}},sl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hy(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function ad(n,e){n.seq.push(e),n.map[e.id]=e}function dy(n,e,t){let i=n.name,s=i.length;for(Uc.lastIndex=0;;){let r=Uc.exec(i),a=Uc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ad(t,l===void 0?new il(o,n,e):new sl(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new rl(o),ad(t,d)),t=d}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);dy(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function od(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var fy=37297,py=0;function my(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function _y(n){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n),i;switch(e===t?i="":e===Pa&&t===Ra?i="LinearDisplayP3ToLinearSRGB":e===Ra&&t===Pa&&(i="LinearSRGBToLinearDisplayP3"),n){case wi:case uo:return[i,"LinearTransferOETF"];case fn:case Ul:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+my(n.getShaderSource(e),a)}else return s}function gy(n,e){let t=_y(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vy(n,e){let t;switch(e){case Nm:t="Linear";break;case Dm:t="Reinhard";break;case Um:t="OptimizedCineon";break;case Om:t="ACESFilmic";break;case Bm:t="AgX";break;case zm:t="Neutral";break;case Fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function xy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function gr(n){return n!==""}function ld(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var My=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(My,Sy)}var by=new Map;function Sy(n,e){let t=ze[e];if(t===void 0){let i=by.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}var Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(Ty,Ey)}function Ey(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Ay(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===am?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ps:case Is:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ry(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Is&&(e="ENVMAP_MODE_REFRACTION"),e}function Py(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case Lm:e="ENVMAP_BLENDING_MIX";break;case km:e="ENVMAP_BLENDING_ADD";break}return e}function Iy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ly(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ay(t),l=Cy(t),u=Ry(t),d=Py(t),f=Iy(t),p=yy(t),g=xy(r),v=s.createProgram(),m,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),_.length>0&&(_+=`
`)):(m=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),_=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?ze.tonemapping_pars_fragment:"",t.toneMapping!==pi?vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,gy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=al(a),a=ld(a,t),a=ud(a,t),o=al(o),o=ld(o,t),o=ud(o,t),a=hd(a),o=hd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let b=S+m+a,T=S+_+o,O=od(s,s.VERTEX_SHADER,b),E=od(s,s.FRAGMENT_SHADER,T);s.attachShader(v,O),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(O).trim(),j=s.getShaderInfoLog(E).trim(),K=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,O,E);else{let ee=cd(s,O,"vertex"),U=cd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ee+`
`+U)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||j==="")&&(q=!1);q&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:_}})}s.deleteShader(O),s.deleteShader(E),z=new Rs(s,v),M=wy(s,v)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,fy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=E,this}var ky=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cl(e),t.set(e,i)),i}},cl=class{constructor(e){this.id=ky++,this.code=e,this.usedTimes=0}};function Ny(n,e,t,i,s,r,a){let o=new Ua,c=new ol,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,H,B){let j=H.fog,K=B.geometry,q=M.isMeshStandardMaterial?H.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),U=ee&&ee.mapping===co?ee.image.height:null,Z=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=re!==void 0?re.length:0,Ae=0;K.morphAttributes.position!==void 0&&(Ae=1),K.morphAttributes.normal!==void 0&&(Ae=2),K.morphAttributes.color!==void 0&&(Ae=3);let Ke,Y,se,xe;if(Z){let rt=Rn[Z];Ke=rt.vertexShader,Y=rt.fragmentShader}else Ke=M.vertexShader,Y=M.fragmentShader,c.update(M),se=c.getVertexShaderID(M),xe=c.getFragmentShaderID(M);let de=n.getRenderTarget(),qe=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,Qe=!!M.map,I=!!M.matcap,Ze=!!ee,Ye=!!M.aoMap,dt=!!M.lightMap,Ie=!!M.bumpMap,et=!!M.normalMap,je=!!M.displacementMap,Be=!!M.emissiveMap,Mt=!!M.metalnessMap,A=!!M.roughnessMap,x=M.anisotropy>0,X=M.clearcoat>0,te=M.dispersion>0,ne=M.iridescence>0,ie=M.sheen>0,Ce=M.transmission>0,ue=x&&!!M.anisotropyMap,he=X&&!!M.clearcoatMap,Ge=X&&!!M.clearcoatNormalMap,ae=X&&!!M.clearcoatRoughnessMap,be=ne&&!!M.iridescenceMap,Xe=ne&&!!M.iridescenceThicknessMap,De=ie&&!!M.sheenColorMap,fe=ie&&!!M.sheenRoughnessMap,We=!!M.specularMap,Je=!!M.specularColorMap,yt=!!M.specularIntensityMap,P=Ce&&!!M.transmissionMap,me=Ce&&!!M.thicknessMap,J=!!M.gradientMap,Q=!!M.alphaMap,ce=M.alphaTest>0,Ue=!!M.alphaHash,tt=!!M.extensions,xt=pi;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(xt=n.toneMapping);let Ct={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:Y,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:qe,instancingColor:qe&&B.instanceColor!==null,instancingMorph:qe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:wi,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:I,envMap:Ze,envMapMode:Ze&&ee.mapping,envMapCubeUVHeight:U,aoMap:Ye,lightMap:dt,bumpMap:Ie,normalMap:et,displacementMap:f&&je,emissiveMap:Be,normalMapObjectSpace:et&&M.normalMapType===e_,normalMapTangentSpace:et&&M.normalMapType===kd,metalnessMap:Mt,roughnessMap:A,anisotropy:x,anisotropyMap:ue,clearcoat:X,clearcoatMap:he,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ae,dispersion:te,iridescence:ne,iridescenceMap:be,iridescenceThicknessMap:Xe,sheen:ie,sheenColorMap:De,sheenRoughnessMap:fe,specularMap:We,specularColorMap:Je,specularIntensityMap:yt,transmission:Ce,transmissionMap:P,thicknessMap:me,gradientMap:J,opaque:M.transparent===!1&&M.blending===Es&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:Ue,combine:M.combine,mapUv:Qe&&v(M.map.channel),aoMapUv:Ye&&v(M.aoMap.channel),lightMapUv:dt&&v(M.lightMap.channel),bumpMapUv:Ie&&v(M.bumpMap.channel),normalMapUv:et&&v(M.normalMap.channel),displacementMapUv:je&&v(M.displacementMap.channel),emissiveMapUv:Be&&v(M.emissiveMap.channel),metalnessMapUv:Mt&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:ue&&v(M.anisotropyMap.channel),clearcoatMapUv:he&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(M.sheenRoughnessMap.channel),specularMapUv:We&&v(M.specularMap.channel),specularColorMapUv:Je&&v(M.specularColorMap.channel),specularIntensityMapUv:yt&&v(M.specularIntensityMap.channel),transmissionMapUv:P&&v(M.transmissionMap.channel),thicknessMapUv:me&&v(M.thicknessMap.channel),alphaMapUv:Q&&v(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(et||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(Qe||Q),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:tt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function _(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(y,M),b(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),M.push(o.mask)}function T(M){let y=g[M.type],L;if(y){let H=Rn[y];L=T_.clone(H.uniforms)}else L=M.uniforms;return L}function O(M,y){let L;for(let H=0,B=u.length;H<B;H++){let j=u[H];if(j.cacheKey===y){L=j,++L.usedTimes;break}}return L===void 0&&(L=new Ly(n,y,M,r),u.push(L)),L}function E(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function R(M){c.remove(M)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:T,acquireProgram:O,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:z}}function Dy(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Uy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,p,g,v,m){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=v,_.group=m),e++,_}function o(d,f,p,g,v,m){let _=a(d,f,p,g,v,m);p.transmission>0?i.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(d,f,p,g,v,m){let _=a(d,f,p,g,v,m);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function l(d,f){t.length>1&&t.sort(d||Uy),i.length>1&&i.sort(f||fd),s.length>1&&s.sort(f||fd)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Oy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new pd,n.set(i,[a])):s>=r.length?(a=new pd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Oe};break;case"SpotLight":t={position:new k,direction:new k,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function By(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var zy=0;function Hy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vy(n){let e=new Fy,t=By(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);let s=new k,r=new ft,a=new ft;function o(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,_=0,S=0,b=0,T=0,O=0,E=0,R=0;l.sort(Hy);for(let M=0,y=l.length;M<y;M++){let L=l[M],H=L.color,B=L.intensity,j=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*B,d+=H.g*B,f+=H.b*B;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],B);R++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ee=L.shadow,U=t.get(L);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,S++}i.directional[p]=q,p++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(B),q.distance=j,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[v]=q;let ee=L.shadow;if(L.map&&(i.spotLightMap[O]=L.map,O++,ee.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[v]=ee.matrix,L.castShadow){let U=t.get(L);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=K,T++}v++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(H).multiplyScalar(B),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let ee=L.shadow,U=t.get(L);U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,U.shadowCameraNear=ee.camera.near,U.shadowCameraFar=ee.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=L.shadow.matrix,b++}i.point[g]=q,g++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(B),q.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[_]=q,_++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let z=i.hash;(z.directionalLength!==p||z.pointLength!==g||z.spotLength!==v||z.rectAreaLength!==m||z.hemiLength!==_||z.numDirectionalShadows!==S||z.numPointShadows!==b||z.numSpotShadows!==T||z.numSpotMaps!==O||z.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=T+O-E,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,z.directionalLength=p,z.pointLength=g,z.spotLength=v,z.rectAreaLength=m,z.hemiLength=_,z.numDirectionalShadows=S,z.numPointShadows=b,z.numSpotShadows=T,z.numSpotMaps=O,z.numLightProbes=R,i.version=zy++)}function c(l,u){let d=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let _=0,S=l.length;_<S;_++){let b=l[_];if(b.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(b.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let T=i.rectArea[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let T=i.hemi[v];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function md(n){let e=new Vy(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Gy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new md(n),e.set(s,[o])):r>=a.length?(o=new md(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ll=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$y=`uniform sampler2D shadow_pass;
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
}`;function qy(n,e,t){let i=new wr,s=new pe,r=new pe,a=new It,o=new ll({depthPacking:Qm}),c=new ul,l={},u=t.maxTextureSize,d={[_i]:Jt,[Jt]:_i,[qn]:qn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Wy,fragmentShader:$y}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let _=this.type;this.render=function(E,R,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(fi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=_!==Wn&&this.type===Wn,j=_===Wn&&this.type!==Wn;for(let K=0,q=E.length;K<q;K++){let ee=E[K],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let Z=U.getFrameExtents();if(s.multiply(Z),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,U.mapSize.y=r.y)),U.map===null||B===!0||j===!0){let ve=this.type!==Wn?{minFilter:pn,magFilter:pn}:{};U.map!==null&&U.map.dispose(),U.map=new Xn(s.x,s.y,ve),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();let re=U.getViewportCount();for(let ve=0;ve<re;ve++){let Ae=U.getViewport(ve);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),H.viewport(a),U.updateMatrices(ee,ve),i=U.getFrustum(),T(R,z,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===Wn&&S(U,z),U.needsUpdate=!1}_=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,L)};function S(E,R){let z=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,z,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,z,p,v,null)}function b(E,R,z,M){let y=null,L=z.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)y=L;else if(y=z.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=y.uuid,B=R.uuid,j=l[H];j===void 0&&(j={},l[H]=j);let K=j[B];K===void 0&&(K=y.clone(),j[B]=K,R.addEventListener("dispose",O)),y=K}if(y.visible=R.visible,y.wireframe=R.wireframe,M===Wn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=n.properties.get(y);H.light=z}return y}function T(E,R,z,M,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Wn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld);let B=e.update(E),j=E.material;if(Array.isArray(j)){let K=B.groups;for(let q=0,ee=K.length;q<ee;q++){let U=K[q],Z=j[U.materialIndex];if(Z&&Z.visible){let re=b(E,Z,M,y);E.onBeforeShadow(n,E,R,z,B,re,U),n.renderBufferDirect(z,null,B,re,E,U),E.onAfterShadow(n,E,R,z,B,re,U)}}}else if(j.visible){let K=b(E,j,M,y);E.onBeforeShadow(n,E,R,z,B,K,null),n.renderBufferDirect(z,null,B,K,E,null),E.onAfterShadow(n,E,R,z,B,K,null)}}let H=E.children;for(let B=0,j=H.length;B<j;B++)T(H[B],R,z,M,y)}function O(E){E.target.removeEventListener("dispose",O);for(let z in l){let M=l[z],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function jy(n){function e(){let P=!1,me=new It,J=null,Q=new It(0,0,0,0);return{setMask:function(ce){J!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),J=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Ue,tt,xt,Ct){Ct===!0&&(ce*=xt,Ue*=xt,tt*=xt),me.set(ce,Ue,tt,xt),Q.equals(me)===!1&&(n.clearColor(ce,Ue,tt,xt),Q.copy(me))},reset:function(){P=!1,J=null,Q.set(-1,0,0,0)}}}function t(){let P=!1,me=null,J=null,Q=null;return{setTest:function(ce){ce?xe(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ce){me!==ce&&!P&&(n.depthMask(ce),me=ce)},setFunc:function(ce){if(J!==ce){switch(ce){case Tm:n.depthFunc(n.NEVER);break;case Em:n.depthFunc(n.ALWAYS);break;case Am:n.depthFunc(n.LESS);break;case Ta:n.depthFunc(n.LEQUAL);break;case Cm:n.depthFunc(n.EQUAL);break;case Rm:n.depthFunc(n.GEQUAL);break;case Pm:n.depthFunc(n.GREATER);break;case Im:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ce}},setLocked:function(ce){P=ce},setClear:function(ce){Q!==ce&&(n.clearDepth(ce),Q=ce)},reset:function(){P=!1,me=null,J=null,Q=null}}}function i(){let P=!1,me=null,J=null,Q=null,ce=null,Ue=null,tt=null,xt=null,Ct=null;return{setTest:function(rt){P||(rt?xe(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(rt){me!==rt&&!P&&(n.stencilMask(rt),me=rt)},setFunc:function(rt,An,Cn){(J!==rt||Q!==An||ce!==Cn)&&(n.stencilFunc(rt,An,Cn),J=rt,Q=An,ce=Cn)},setOp:function(rt,An,Cn){(Ue!==rt||tt!==An||xt!==Cn)&&(n.stencilOp(rt,An,Cn),Ue=rt,tt=An,xt=Cn)},setLocked:function(rt){P=rt},setClear:function(rt){Ct!==rt&&(n.clearStencil(rt),Ct=rt)},reset:function(){P=!1,me=null,J=null,Q=null,ce=null,Ue=null,tt=null,xt=null,Ct=null}}}let s=new e,r=new t,a=new i,o=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,g=!1,v=null,m=null,_=null,S=null,b=null,T=null,O=null,E=new Oe(0,0,0),R=0,z=!1,M=null,y=null,L=null,H=null,B=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,q=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=q>=1):ee.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=q>=2);let U=null,Z={},re=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Ae=new It().fromArray(re),Ke=new It().fromArray(ve);function Y(P,me,J,Q){let ce=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(P,Ue),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<J;tt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(me+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ue}let se={};se[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),r.setFunc(Ta),Ie(!1),et(Ku),xe(n.CULL_FACE),Ye(fi);function xe(P){l[P]!==!0&&(n.enable(P),l[P]=!0)}function de(P){l[P]!==!1&&(n.disable(P),l[P]=!1)}function qe(P,me){return u[P]!==me?(n.bindFramebuffer(P,me),u[P]=me,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ve(P,me){let J=f,Q=!1;if(P){J=d.get(me),J===void 0&&(J=[],d.set(me,J));let ce=P.textures;if(J.length!==ce.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,tt=ce.length;Ue<tt;Ue++)J[Ue]=n.COLOR_ATTACHMENT0+Ue;J.length=ce.length,Q=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Q=!0);Q&&n.drawBuffers(J)}function Qe(P){return p!==P?(n.useProgram(P),p=P,!0):!1}let I={[Bi]:n.FUNC_ADD,[cm]:n.FUNC_SUBTRACT,[lm]:n.FUNC_REVERSE_SUBTRACT};I[um]=n.MIN,I[hm]=n.MAX;let Ze={[dm]:n.ZERO,[fm]:n.ONE,[pm]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[xm]:n.SRC_ALPHA_SATURATE,[vm]:n.DST_COLOR,[_m]:n.DST_ALPHA,[mm]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[ym]:n.ONE_MINUS_DST_COLOR,[gm]:n.ONE_MINUS_DST_ALPHA,[wm]:n.CONSTANT_COLOR,[Mm]:n.ONE_MINUS_CONSTANT_COLOR,[bm]:n.CONSTANT_ALPHA,[Sm]:n.ONE_MINUS_CONSTANT_ALPHA};function Ye(P,me,J,Q,ce,Ue,tt,xt,Ct,rt){if(P===fi){g===!0&&(de(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),P!==om){if(P!==v||rt!==z){if((m!==Bi||b!==Bi)&&(n.blendEquation(n.FUNC_ADD),m=Bi,b=Bi),rt)switch(P){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFunc(n.ONE,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,S=null,T=null,O=null,E.set(0,0,0),R=0,v=P,z=rt}return}ce=ce||me,Ue=Ue||J,tt=tt||Q,(me!==m||ce!==b)&&(n.blendEquationSeparate(I[me],I[ce]),m=me,b=ce),(J!==_||Q!==S||Ue!==T||tt!==O)&&(n.blendFuncSeparate(Ze[J],Ze[Q],Ze[Ue],Ze[tt]),_=J,S=Q,T=Ue,O=tt),(xt.equals(E)===!1||Ct!==R)&&(n.blendColor(xt.r,xt.g,xt.b,Ct),E.copy(xt),R=Ct),v=P,z=!1}function dt(P,me){P.side===qn?de(n.CULL_FACE):xe(n.CULL_FACE);let J=P.side===Jt;me&&(J=!J),Ie(J),P.blending===Es&&P.transparent===!1?Ye(fi):Ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);let Q=P.stencilWrite;a.setTest(Q),Q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){M!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),M=P)}function et(P){P!==sm?(xe(n.CULL_FACE),P!==y&&(P===Ku?n.cullFace(n.BACK):P===rm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),y=P}function je(P){P!==L&&(K&&n.lineWidth(P),L=P)}function Be(P,me,J){P?(xe(n.POLYGON_OFFSET_FILL),(H!==me||B!==J)&&(n.polygonOffset(me,J),H=me,B=J)):de(n.POLYGON_OFFSET_FILL)}function Mt(P){P?xe(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function A(P){P===void 0&&(P=n.TEXTURE0+j-1),U!==P&&(n.activeTexture(P),U=P)}function x(P,me,J){J===void 0&&(U===null?J=n.TEXTURE0+j-1:J=U);let Q=Z[J];Q===void 0&&(Q={type:void 0,texture:void 0},Z[J]=Q),(Q.type!==P||Q.texture!==me)&&(U!==J&&(n.activeTexture(J),U=J),n.bindTexture(P,me||se[P]),Q.type=P,Q.texture=me)}function X(){let P=Z[U];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(P){Ae.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ae.copy(P))}function fe(P){Ke.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ke.copy(P))}function We(P,me){let J=c.get(me);J===void 0&&(J=new WeakMap,c.set(me,J));let Q=J.get(P);Q===void 0&&(Q=n.getUniformBlockIndex(me,P.name),J.set(P,Q))}function Je(P,me){let Q=c.get(me).get(P);o.get(me)!==Q&&(n.uniformBlockBinding(me,Q,P.__bindingPointIndex),o.set(me,Q))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},U=null,Z={},u={},d=new WeakMap,f=[],p=null,g=!1,v=null,m=null,_=null,S=null,b=null,T=null,O=null,E=new Oe(0,0,0),R=0,z=!1,M=null,y=null,L=null,H=null,B=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:de,bindFramebuffer:qe,drawBuffers:Ve,useProgram:Qe,setBlending:Ye,setMaterial:dt,setFlipSided:Ie,setCullFace:et,setLineWidth:je,setPolygonOffset:Be,setScissorTest:Mt,activeTexture:A,bindTexture:x,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:be,texImage3D:Xe,updateUBOMapping:We,uniformBlockBinding:Je,texStorage2D:Ge,texStorage3D:ae,texSubImage2D:ie,texSubImage3D:Ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:De,viewport:fe,reset:yt}}function Xy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):La("canvas")}function v(A,x,X){let te=1,ne=Mt(A);if((ne.width>X||ne.height>X)&&(te=X/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ie=Math.floor(te*ne.width),Ce=Math.floor(te*ne.height);d===void 0&&(d=g(ie,Ce));let ue=x?g(ie,Ce):d;return ue.width=ie,ue.height=Ce,ue.getContext("2d").drawImage(A,0,0,ie,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ie+"x"+Ce+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==pn&&A.minFilter!==Sn}function _(A){n.generateMipmap(A)}function S(A,x,X,te,ne=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=x;if(x===n.RED&&(X===n.FLOAT&&(ie=n.R32F),X===n.HALF_FLOAT&&(ie=n.R16F),X===n.UNSIGNED_BYTE&&(ie=n.R8)),x===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ie=n.R8UI),X===n.UNSIGNED_SHORT&&(ie=n.R16UI),X===n.UNSIGNED_INT&&(ie=n.R32UI),X===n.BYTE&&(ie=n.R8I),X===n.SHORT&&(ie=n.R16I),X===n.INT&&(ie=n.R32I)),x===n.RG&&(X===n.FLOAT&&(ie=n.RG32F),X===n.HALF_FLOAT&&(ie=n.RG16F),X===n.UNSIGNED_BYTE&&(ie=n.RG8)),x===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ie=n.RG8UI),X===n.UNSIGNED_SHORT&&(ie=n.RG16UI),X===n.UNSIGNED_INT&&(ie=n.RG32UI),X===n.BYTE&&(ie=n.RG8I),X===n.SHORT&&(ie=n.RG16I),X===n.INT&&(ie=n.RG32I)),x===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),x===n.RGBA){let Ce=ne?Ca:st.getTransfer(te);X===n.FLOAT&&(ie=n.RGBA32F),X===n.HALF_FLOAT&&(ie=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ie=Ce===ct?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(A,x){let X;return A?x===null||x===Ls||x===ks?X=n.DEPTH24_STENCIL8:x===di?X=n.DEPTH32F_STENCIL8:x===Ea&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ls||x===ks?X=n.DEPTH_COMPONENT24:x===di?X=n.DEPTH_COMPONENT32F:x===Ea&&(X=n.DEPTH_COMPONENT16),X}function T(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==pn&&A.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function O(A){let x=A.target;x.removeEventListener("dispose",O),R(x),x.isVideoTexture&&u.delete(x)}function E(A){let x=A.target;x.removeEventListener("dispose",E),M(x)}function R(A){let x=i.get(A);if(x.__webglInit===void 0)return;let X=A.source,te=f.get(X);if(te){let ne=te[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&z(A),Object.keys(te).length===0&&f.delete(X)}i.remove(A)}function z(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let X=A.source,te=f.get(X);delete te[x.__cacheKey],a.memory.textures--}function M(A){let x=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ne=0;ne<x.__webglFramebuffer[te].length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[te][ne]);else n.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)n.deleteFramebuffer(x.__webglFramebuffer[te]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=A.textures;for(let te=0,ne=X.length;te<ne;te++){let ie=i.get(X[te]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(X[te])}i.remove(A)}let y=0;function L(){y=0}function H(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function B(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function j(A,x){let X=i.get(A);if(A.isVideoTexture&&je(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(X,A,x);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+x)}function K(A,x){let X=i.get(A);if(A.version>0&&X.__version!==A.version){Ke(X,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+x)}function q(A,x){let X=i.get(A);if(A.version>0&&X.__version!==A.version){Ke(X,A,x);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+x)}function ee(A,x){let X=i.get(A);if(A.version>0&&X.__version!==A.version){Y(X,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+x)}let U={[jc]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[Xc]:n.MIRRORED_REPEAT},Z={[pn]:n.NEAREST,[Hm]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[sc]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},re={[t_]:n.NEVER,[o_]:n.ALWAYS,[n_]:n.LESS,[Nd]:n.LEQUAL,[i_]:n.EQUAL,[a_]:n.GEQUAL,[s_]:n.GREATER,[r_]:n.NOTEQUAL};function ve(A,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===sc||x.magFilter===Yr||x.magFilter===Vi||x.minFilter===Sn||x.minFilter===sc||x.minFilter===Yr||x.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,U[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,U[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,U[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Z[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Z[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==Yr&&x.minFilter!==Vi||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(A,x){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",O));let te=x.source,ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));let ie=B(x);if(ie!==A.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[ie].usedTimes++;let Ce=ne[A.__cacheKey];Ce!==void 0&&(ne[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&z(x)),A.__cacheKey=ie,A.__webglTexture=ne[ie].texture}return X}function Ke(A,x,X){let te=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=n.TEXTURE_3D);let ne=Ae(A,x),ie=x.source;t.bindTexture(te,A.__webglTexture,n.TEXTURE0+X);let Ce=i.get(ie);if(ie.version!==Ce.__version||ne===!0){t.activeTexture(n.TEXTURE0+X);let ue=st.getPrimaries(st.workingColorSpace),he=x.colorSpace===hi?null:st.getPrimaries(x.colorSpace),Ge=x.colorSpace===hi||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ae=v(x.image,!1,s.maxTextureSize);ae=Be(x,ae);let be=r.convert(x.format,x.colorSpace),Xe=r.convert(x.type),De=S(x.internalFormat,be,Xe,x.colorSpace,x.isVideoTexture);ve(te,x);let fe,We=x.mipmaps,Je=x.isVideoTexture!==!0,yt=Ce.__version===void 0||ne===!0,P=ie.dataReady,me=T(x,ae);if(x.isDepthTexture)De=b(x.format===Ns,x.type),yt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,be,Xe,null));else if(x.isDataTexture)if(We.length>0){Je&&yt&&t.texStorage2D(n.TEXTURE_2D,me,De,We[0].width,We[0].height);for(let J=0,Q=We.length;J<Q;J++)fe=We[J],Je?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,be,Xe,fe.data):t.texImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,be,Xe,fe.data);x.generateMipmaps=!1}else Je?(yt&&t.texStorage2D(n.TEXTURE_2D,me,De,ae.width,ae.height),P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,be,Xe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,De,ae.width,ae.height,0,be,Xe,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Je&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,De,We[0].width,We[0].height,ae.depth);for(let J=0,Q=We.length;J<Q;J++)if(fe=We[J],x.format!==In)if(be!==null)if(Je){if(P)if(x.layerUpdates.size>0){for(let ce of x.layerUpdates){let Ue=fe.width*fe.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ce,fe.width,fe.height,1,be,fe.data.slice(Ue*ce,Ue*(ce+1)),0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ae.depth,be,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,De,fe.width,fe.height,ae.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ae.depth,be,Xe,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,De,fe.width,fe.height,ae.depth,0,be,Xe,fe.data)}else{Je&&yt&&t.texStorage2D(n.TEXTURE_2D,me,De,We[0].width,We[0].height);for(let J=0,Q=We.length;J<Q;J++)fe=We[J],x.format!==In?be!==null?Je?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,be,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,be,Xe,fe.data):t.texImage2D(n.TEXTURE_2D,J,De,fe.width,fe.height,0,be,Xe,fe.data)}else if(x.isDataArrayTexture)if(Je){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,De,ae.width,ae.height,ae.depth),P)if(x.layerUpdates.size>0){let J;switch(Xe){case n.UNSIGNED_BYTE:switch(be){case n.ALPHA:J=1;break;case n.LUMINANCE:J=1;break;case n.LUMINANCE_ALPHA:J=2;break;case n.RGB:J=3;break;case n.RGBA:J=4;break;default:throw new Error(`Unknown texel size for format ${be}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:J=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}let Q=ae.width*ae.height*J;for(let ce of x.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ae.width,ae.height,1,be,Xe,ae.data.slice(Q*ce,Q*(ce+1)));x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,Xe,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,be,Xe,ae.data);else if(x.isData3DTexture)Je?(yt&&t.texStorage3D(n.TEXTURE_3D,me,De,ae.width,ae.height,ae.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,Xe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,be,Xe,ae.data);else if(x.isFramebufferTexture){if(yt)if(Je)t.texStorage2D(n.TEXTURE_2D,me,De,ae.width,ae.height);else{let J=ae.width,Q=ae.height;for(let ce=0;ce<me;ce++)t.texImage2D(n.TEXTURE_2D,ce,De,J,Q,0,be,Xe,null),J>>=1,Q>>=1}}else if(We.length>0){if(Je&&yt){let J=Mt(We[0]);t.texStorage2D(n.TEXTURE_2D,me,De,J.width,J.height)}for(let J=0,Q=We.length;J<Q;J++)fe=We[J],Je?P&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,be,Xe,fe):t.texImage2D(n.TEXTURE_2D,J,De,be,Xe,fe);x.generateMipmaps=!1}else if(Je){if(yt){let J=Mt(ae);t.texStorage2D(n.TEXTURE_2D,me,De,J.width,J.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Xe,ae)}else t.texImage2D(n.TEXTURE_2D,0,De,be,Xe,ae);m(x)&&_(te),Ce.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Y(A,x,X){if(x.image.length!==6)return;let te=Ae(A,x),ne=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+X);let ie=i.get(ne);if(ne.version!==ie.__version||te===!0){t.activeTexture(n.TEXTURE0+X);let Ce=st.getPrimaries(st.workingColorSpace),ue=x.colorSpace===hi?null:st.getPrimaries(x.colorSpace),he=x.colorSpace===hi||Ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Ge=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,be=[];for(let Q=0;Q<6;Q++)!Ge&&!ae?be[Q]=v(x.image[Q],!0,s.maxCubemapSize):be[Q]=ae?x.image[Q].image:x.image[Q],be[Q]=Be(x,be[Q]);let Xe=be[0],De=r.convert(x.format,x.colorSpace),fe=r.convert(x.type),We=S(x.internalFormat,De,fe,x.colorSpace),Je=x.isVideoTexture!==!0,yt=ie.__version===void 0||te===!0,P=ne.dataReady,me=T(x,Xe);ve(n.TEXTURE_CUBE_MAP,x);let J;if(Ge){Je&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,We,Xe.width,Xe.height);for(let Q=0;Q<6;Q++){J=be[Q].mipmaps;for(let ce=0;ce<J.length;ce++){let Ue=J[ce];x.format!==In?De!==null?Je?P&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,De,fe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,We,Ue.width,Ue.height,0,De,fe,Ue.data)}}}else{if(J=x.mipmaps,Je&&yt){J.length>0&&me++;let Q=Mt(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be[Q].width,be[Q].height,De,fe,be[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,be[Q].width,be[Q].height,0,De,fe,be[Q].data);for(let ce=0;ce<J.length;ce++){let tt=J[ce].image[Q].image;Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,tt.width,tt.height,De,fe,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,We,tt.width,tt.height,0,De,fe,tt.data)}}else{Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,fe,be[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,De,fe,be[Q]);for(let ce=0;ce<J.length;ce++){let Ue=J[ce];Je?P&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,De,fe,Ue.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,We,De,fe,Ue.image[Q])}}}m(x)&&_(n.TEXTURE_CUBE_MAP),ie.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function se(A,x,X,te,ne,ie){let Ce=r.convert(X.format,X.colorSpace),ue=r.convert(X.type),he=S(X.internalFormat,Ce,ue,X.colorSpace);if(!i.get(x).__hasExternalTextures){let ae=Math.max(1,x.width>>ie),be=Math.max(1,x.height>>ie);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,he,ae,be,x.depth,0,Ce,ue,null):t.texImage2D(ne,ie,he,ae,be,0,Ce,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0,Ie(x)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(A,x,X){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let te=x.depthTexture,ne=te&&te.isDepthTexture?te.type:null,ie=b(x.stencilBuffer,ne),Ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Ie(x);et(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ie,x.width,x.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ie,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ie,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,A)}else{let te=x.textures;for(let ne=0;ne<te.length;ne++){let ie=te[ne],Ce=r.convert(ie.format,ie.colorSpace),ue=r.convert(ie.type),he=S(ie.internalFormat,Ce,ue,ie.colorSpace),Ge=Ie(x);X&&et(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,he,x.width,x.height):et(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,he,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,he,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);let te=i.get(x.depthTexture).__webglTexture,ne=Ie(x);if(x.depthTexture.format===As)et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(x.depthTexture.format===Ns)et(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function qe(A){let x=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");de(x.__webglFramebuffer,A)}else if(X){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=n.createRenderbuffer(),xe(x.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),xe(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(A,x,X){let te=i.get(A);x!==void 0&&se(te.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&qe(A)}function Qe(A){let x=A.texture,X=i.get(A),te=i.get(x);A.addEventListener("dispose",E);let ne=A.textures,ie=A.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=x.version,a.memory.textures++),ie){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let he=0;he<x.mipmaps.length;he++)X.__webglFramebuffer[ue][he]=n.createFramebuffer()}else X.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)X.__webglFramebuffer[ue]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ue=0,he=ne.length;ue<he;ue++){let Ge=i.get(ne[ue]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&et(A)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){let he=ne[ue];X.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);let Ge=r.convert(he.format,he.colorSpace),ae=r.convert(he.type),be=S(he.internalFormat,Ge,ae,he.colorSpace,A.isXRRenderTarget===!0),Xe=Ie(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,be,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ve(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)se(X.__webglFramebuffer[ue][he],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else se(X.__webglFramebuffer[ue],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(x)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ue=0,he=ne.length;ue<he;ue++){let Ge=ne[ue],ae=i.get(Ge);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ve(n.TEXTURE_2D,Ge),se(X.__webglFramebuffer,A,Ge,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ge)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),ve(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)se(X.__webglFramebuffer[he],A,x,n.COLOR_ATTACHMENT0,ue,he);else se(X.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,ue,0);m(x)&&_(ue),t.unbindTexture()}A.depthBuffer&&qe(A)}function I(A){let x=A.textures;for(let X=0,te=x.length;X<te;X++){let ne=x[X];if(m(ne)){let ie=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(ne).__webglTexture;t.bindTexture(ie,Ce),_(ie),t.unbindTexture()}}}let Ze=[],Ye=[];function dt(A){if(A.samples>0){if(et(A)===!1){let x=A.textures,X=A.width,te=A.height,ne=n.COLOR_BUFFER_BIT,ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(A),ue=x.length>1;if(ue)for(let he=0;he<x.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let he=0;he<x.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[he]);let Ge=i.get(x[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ne,n.NEAREST),c===!0&&(Ze.length=0,Ye.length=0,Ze.push(n.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(ie),Ye.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let he=0;he<x.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[he]);let Ge=i.get(x[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ie(A){return Math.min(s.maxSamples,A.samples)}function et(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function je(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Be(A,x){let X=A.colorSpace,te=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==wi&&X!==hi&&(st.getTransfer(X)===ct?(te!==In||ne!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=ee,this.rebindTextures=Ve,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=et}function Ky(n,e){function t(i,s=hi){let r,a=st.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===Cd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vm)return n.BYTE;if(i===Gm)return n.SHORT;if(i===Ea)return n.UNSIGNED_SHORT;if(i===Ad)return n.INT;if(i===Ls)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===lo)return n.HALF_FLOAT;if(i===$m)return n.ALPHA;if(i===qm)return n.RGB;if(i===In)return n.RGBA;if(i===jm)return n.LUMINANCE;if(i===Xm)return n.LUMINANCE_ALPHA;if(i===As)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===Km)return n.RED;if(i===Pd)return n.RED_INTEGER;if(i===Ym)return n.RG;if(i===Id)return n.RG_INTEGER;if(i===Ld)return n.RGBA_INTEGER;if(i===rc||i===ac||i===oc||i===cc)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qu||i===eh||i===th||i===nh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ih||i===sh||i===rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ih||i===sh)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ah||i===oh||i===ch||i===lh||i===uh||i===hh||i===dh||i===fh||i===ph||i===mh||i===_h||i===gh||i===vh||i===yh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ah)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ch)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_h)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yh)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===xh||i===wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jm||i===Mh||i===bh||i===Sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var hl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mn=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yy={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),_=this._getHandJoint(l,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
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

}`,dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new an,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new kn({vertexShader:Jy,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}},fl=class extends vi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,v=new dl,m=t.getContextAttributes(),_=null,S=null,b=[],T=[],O=new pe,E=null,R=new $t;R.layers.enable(1),R.viewport=new It;let z=new $t;z.layers.enable(2),z.viewport=new It;let M=[R,z],y=new hl;y.layers.enable(1),y.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=b[Y];return se===void 0&&(se=new vr,b[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=b[Y];return se===void 0&&(se=new vr,b[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=b[Y];return se===void 0&&(se=new vr,b[Y]=se),se.getHandSpace()};function B(Y){let se=T.indexOf(Y.inputSource);if(se===-1)return;let xe=b[se];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<b.length;Y++){let se=T[Y];se!==null&&(T[Y]=null,b[Y].disconnect(se))}L=null,H=null,v.reset(),e.setRenderTarget(_),p=null,f=null,d=null,s=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",j),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xn(p.framebufferWidth,p.framebufferHeight,{format:In,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,xe=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Ns:As,xe=m.stencil?ks:Ls);let qe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xn(f.textureWidth,f.textureHeight,{format:In,type:gi,depthTexture:new Ga(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function K(Y){for(let se=0;se<Y.removed.length;se++){let xe=Y.removed[se],de=T.indexOf(xe);de>=0&&(T[de]=null,b[de].disconnect(xe))}for(let se=0;se<Y.added.length;se++){let xe=Y.added[se],de=T.indexOf(xe);if(de===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=T.length){T.push(xe),de=Ve;break}else if(T[Ve]===null){T[Ve]=xe,de=Ve;break}if(de===-1)break}let qe=b[de];qe&&qe.connect(xe)}}let q=new k,ee=new k;function U(Y,se,xe){q.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);let de=q.distanceTo(ee),qe=se.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,Qe=qe[14]/(qe[10]-1),I=qe[14]/(qe[10]+1),Ze=(qe[9]+1)/qe[5],Ye=(qe[9]-1)/qe[5],dt=(qe[8]-1)/qe[0],Ie=(Ve[8]+1)/Ve[0],et=Qe*dt,je=Qe*Ie,Be=de/(-dt+Ie),Mt=Be*-dt;se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Mt),Y.translateZ(Be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let A=Qe+Be,x=I+Be,X=et-Mt,te=je+(de-Mt),ne=Ze*I/x*A,ie=Ye*I/x*A;Y.projectionMatrix.makePerspective(X,te,ne,ie,A,x),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Z(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),y.near=z.near=R.near=Y.near,y.far=z.far=R.far=Y.far,(L!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,H=y.far,R.near=L,R.far=H,z.near=L,z.far=H,R.updateProjectionMatrix(),z.updateProjectionMatrix(),Y.updateProjectionMatrix());let se=Y.parent,xe=y.cameras;Z(y,se);for(let de=0;de<xe.length;de++)Z(xe[de],se);xe.length===2?U(y,R,z):y.projectionMatrix.copy(R.projectionMatrix),re(Y,y,se)};function re(Y,se,xe){xe===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ve=null;function Ae(Y,se){if(u=se.getViewerPose(l||a),g=se,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let de=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Ve=0;Ve<xe.length;Ve++){let Qe=xe[Ve],I=null;if(p!==null)I=p.getViewport(Qe);else{let Ye=d.getViewSubImage(f,Qe);I=Ye.viewport,Ve===0&&(e.setRenderTargetTextures(S,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(S))}let Ze=M[Ve];Ze===void 0&&(Ze=new $t,Ze.layers.enable(Ve),Ze.viewport=new It,M[Ve]=Ze),Ze.matrix.fromArray(Qe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Qe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(I.x,I.y,I.width,I.height),Ve===0&&(y.matrix.copy(Ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(Ze)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){let Ve=d.getDepthInformation(xe[0]);Ve&&Ve.isValid&&Ve.texture&&v.init(e,Ve,s.renderState)}}for(let xe=0;xe<b.length;xe++){let de=T[xe],qe=b[xe];de!==null&&qe!==void 0&&qe.update(de,se,l||a)}ve&&ve(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let Ke=new Fd;Ke.setAnimationLoop(Ae),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}},Oi=new Ln,Qy=new ft;function ex(n,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function i(m,_){_.color.getRGB(m.fogColor.value,Od(n)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function s(m,_,S,b,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(m,_):_.isMeshToonMaterial?(r(m,_),d(m,_)):_.isMeshPhongMaterial?(r(m,_),u(m,_)):_.isMeshStandardMaterial?(r(m,_),f(m,_),_.isMeshPhysicalMaterial&&p(m,_,T)):_.isMeshMatcapMaterial?(r(m,_),g(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),v(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?c(m,_,S,b):_.isSpriteMaterial?l(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Jt&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Jt&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let S=e.get(_),b=S.envMap,T=S.envMapRotation;b&&(m.envMap.value=b,Oi.copy(T),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(Oi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function c(m,_,S,b){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*S,m.scale.value=b*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function l(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function f(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function p(m,_,S){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jt&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,_){_.matcap&&(m.matcap.value=_.matcap)}function v(m,_){let S=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tx(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let T=b.program;i.uniformBlockBinding(S,T)}function l(S,b){let T=s[S.id];T===void 0&&(g(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",m));let O=b.program;i.updateUBOMapping(S,O);let E=e.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){let b=d();S.__bindingPointIndex=b;let T=n.createBuffer(),O=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,O,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=s[S.id],T=S.uniforms,O=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,R=T.length;E<R;E++){let z=Array.isArray(T[E])?T[E]:[T[E]];for(let M=0,y=z.length;M<y;M++){let L=z[M];if(p(L,E,M,O)===!0){let H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value],j=0;for(let K=0;K<B.length;K++){let q=B[K],ee=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+j,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,b,T,O){let E=S.value,R=b+"_"+T;if(O[R]===void 0)return typeof E=="number"||typeof E=="boolean"?O[R]=E:O[R]=E.clone(),!0;{let z=O[R];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return O[R]=E,!0}else if(z.equals(E)===!1)return z.copy(E),!0}return!1}function g(S){let b=S.uniforms,T=0,O=16;for(let R=0,z=b.length;R<z;R++){let M=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,L=M.length;y<L;y++){let H=M[y],B=Array.isArray(H.value)?H.value:[H.value];for(let j=0,K=B.length;j<K;j++){let q=B[j],ee=v(q),U=T%O;U!==0&&O-U<ee.boundary&&(T+=O-U),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=ee.storage}}}let E=T%O;return E>0&&(T+=O-E),S.__size=T,S.__cache={},this}function v(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function _(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:_}}var Wa=class{constructor(e={}){let{canvas:t=l_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,_=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=pi,this.toneMappingExposure=1;let b=this,T=!1,O=0,E=0,R=null,z=-1,M=null,y=new It,L=new It,H=null,B=new Oe(0),j=0,K=t.width,q=t.height,ee=1,U=null,Z=null,re=new It(0,0,K,q),ve=new It(0,0,K,q),Ae=!1,Ke=new wr,Y=!1,se=!1,xe=new ft,de=new k,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function Qe(){return R===null?ee:1}let I=i;function Ze(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r165"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",Q,!1),I===null){let N="webgl2";if(I=Ze(N,w),I===null)throw Ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ye,dt,Ie,et,je,Be,Mt,A,x,X,te,ne,ie,Ce,ue,he,Ge,ae,be,Xe,De,fe,We,Je;function yt(){Ye=new xv(I),Ye.init(),fe=new Ky(I,Ye),dt=new pv(I,Ye,e,fe),Ie=new jy(I),et=new bv(I),je=new Dy,Be=new Xy(I,Ye,Ie,je,dt,fe,et),Mt=new _v(b),A=new yv(b),x=new P_(I),We=new dv(I,x),X=new wv(I,x,et,We),te=new Tv(I,X,x,et),be=new Sv(I,dt,Be),he=new mv(je),ne=new Ny(b,Mt,A,Ye,dt,We,he),ie=new ex(b,je),Ce=new Oy,ue=new Gy(Ye),ae=new hv(b,Mt,A,Ie,te,f,c),Ge=new qy(b,te,dt),Je=new tx(I,et,dt,Ie),Xe=new fv(I,Ye,et),De=new Mv(I,Ye,et),et.programs=ne.programs,b.capabilities=dt,b.extensions=Ye,b.properties=je,b.renderLists=Ce,b.shadowMap=Ge,b.state=Ie,b.info=et}yt();let P=new fl(b,I);this.xr=P,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(K,q,!1))},this.getSize=function(w){return w.set(K,q)},this.setSize=function(w,N,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,q=N,t.width=Math.floor(w*ee),t.height=Math.floor(N*ee),V===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(K*ee,q*ee).floor()},this.setDrawingBufferSize=function(w,N,V){K=w,q=N,ee=V,t.width=Math.floor(w*V),t.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,N,V,W){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,N,V,W),Ie.viewport(y.copy(re).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,N,V,W){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,N,V,W),Ie.scissor(L.copy(ve).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Ie.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(w=!0,N=!0,V=!0){let W=0;if(w){let F=!1;if(R!==null){let oe=R.texture.format;F=oe===Ld||oe===Id||oe===Pd}if(F){let oe=R.texture.type,_e=oe===gi||oe===Ls||oe===Ea||oe===ks||oe===Cd||oe===Rd,ye=ae.getClearColor(),Me=ae.getClearAlpha(),Le=ye.r,Ne=ye.g,Re=ye.b;_e?(p[0]=Le,p[1]=Ne,p[2]=Re,p[3]=Me,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Le,g[1]=Ne,g[2]=Re,g[3]=Me,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}N&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ce.dispose(),ue.dispose(),je.dispose(),Mt.dispose(),A.dispose(),te.dispose(),We.dispose(),Je.dispose(),ne.dispose(),P.dispose(),P.removeEventListener("sessionstart",An),P.removeEventListener("sessionend",Cn),Pi.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=et.autoReset,N=Ge.enabled,V=Ge.autoUpdate,W=Ge.needsUpdate,F=Ge.type;yt(),et.autoReset=w,Ge.enabled=N,Ge.autoUpdate=V,Ge.needsUpdate=W,Ge.type=F}function Q(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let N=w.target;N.removeEventListener("dispose",ce),Ue(N)}function Ue(w){tt(w),je.remove(w)}function tt(w){let N=je.get(w).programs;N!==void 0&&(N.forEach(function(V){ne.releaseProgram(V)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,W,F,oe){N===null&&(N=qe);let _e=F.isMesh&&F.matrixWorld.determinant()<0,ye=em(w,N,V,W,F);Ie.setMaterial(W,_e);let Me=V.index,Le=1;if(W.wireframe===!0){if(Me=X.getWireframeAttribute(V),Me===void 0)return;Le=2}let Ne=V.drawRange,Re=V.attributes.position,nt=Ne.start*Le,_t=(Ne.start+Ne.count)*Le;oe!==null&&(nt=Math.max(nt,oe.start*Le),_t=Math.min(_t,(oe.start+oe.count)*Le)),Me!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Me.count)):Re!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,Re.count));let gt=_t-nt;if(gt<0||gt===1/0)return;We.setup(F,W,ye,V,Me);let tn,it=Xe;if(Me!==null&&(tn=x.get(Me),it=De,it.setIndex(tn)),F.isMesh)W.wireframe===!0?(Ie.setLineWidth(W.wireframeLinewidth*Qe()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(F.isLine){let Te=W.linewidth;Te===void 0&&(Te=1),Ie.setLineWidth(Te*Qe()),F.isLineSegments?it.setMode(I.LINES):F.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else F.isPoints?it.setMode(I.POINTS):F.isSprite&&it.setMode(I.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)it.renderInstances(nt,gt,F.count);else if(V.isInstancedBufferGeometry){let Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vt=Math.min(V.instanceCount,Te);it.renderInstances(nt,gt,Vt)}else it.render(nt,gt)};function xt(w,N,V){w.transparent===!0&&w.side===qn&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Xr(w,N,V),w.side=_i,w.needsUpdate=!0,Xr(w,N,V),w.side=qn):Xr(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),m=ue.get(V),m.init(N),S.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let W=new Set;return w.traverse(function(F){let oe=F.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){let ye=oe[_e];xt(ye,V,F),W.add(ye)}else xt(oe,V,F),W.add(oe)}),S.pop(),m=null,W},this.compileAsync=function(w,N,V=null){let W=this.compile(w,N,V);return new Promise(F=>{function oe(){if(W.forEach(function(_e){je.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){F(w);return}setTimeout(oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ct=null;function rt(w){Ct&&Ct(w)}function An(){Pi.stop()}function Cn(){Pi.start()}let Pi=new Fd;Pi.setAnimationLoop(rt),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(w){Ct=w,P.setAnimationLoop(w),w===null?Pi.stop():Pi.start()},P.addEventListener("sessionstart",An),P.addEventListener("sessionend",Cn),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(N),N=P.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,N,R),m=ue.get(w,S.length),m.init(N),S.push(m),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ke.setFromProjectionMatrix(xe),se=this.localClippingEnabled,Y=he.init(this.clippingPlanes,se),v=Ce.get(w,_.length),v.init(),_.push(v),P.enabled===!0&&P.isPresenting===!0){let oe=b.xr.getDepthSensingMesh();oe!==null&&ec(oe,N,-1/0,b.sortObjects)}ec(w,N,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(U,Z),Ve=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,Ve&&ae.addToRenderList(v,w),this.info.render.frame++,Y===!0&&he.beginShadows();let V=m.state.shadowsArray;Ge.render(V,w,N),Y===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=v.opaque,F=v.transmissive;if(m.setupLights(),N.isArrayCamera){let oe=N.cameras;if(F.length>0)for(let _e=0,ye=oe.length;_e<ye;_e++){let Me=oe[_e];Wu(W,F,w,Me)}Ve&&ae.render(w);for(let _e=0,ye=oe.length;_e<ye;_e++){let Me=oe[_e];Gu(v,w,Me,Me.viewport)}}else F.length>0&&Wu(W,F,w,N),Ve&&ae.render(w),Gu(v,w,N);R!==null&&(Be.updateMultisampleRenderTarget(R),Be.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(b,w,N),We.resetDefaultState(),z=-1,M=null,S.pop(),S.length>0?(m=S[S.length-1],Y===!0&&he.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function ec(w,N,V,W){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ke.intersectsSprite(w)){W&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let _e=te.update(w),ye=w.material;ye.visible&&v.push(w,_e,ye,V,de.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ke.intersectsObject(w))){let _e=te.update(w),ye=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),de.copy(_e.boundingSphere.center)),de.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(ye)){let Me=_e.groups;for(let Le=0,Ne=Me.length;Le<Ne;Le++){let Re=Me[Le],nt=ye[Re.materialIndex];nt&&nt.visible&&v.push(w,_e,nt,V,de.z,Re)}}else ye.visible&&v.push(w,_e,ye,V,de.z,null)}}let oe=w.children;for(let _e=0,ye=oe.length;_e<ye;_e++)ec(oe[_e],N,V,W)}function Gu(w,N,V,W){let F=w.opaque,oe=w.transmissive,_e=w.transparent;m.setupLightsView(V),Y===!0&&he.setGlobalState(b.clippingPlanes,V),W&&Ie.viewport(y.copy(W)),F.length>0&&jr(F,N,V),oe.length>0&&jr(oe,N,V),_e.length>0&&jr(_e,N,V),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Wu(w,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Xn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?lo:gi,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let oe=m.state.transmissionRenderTarget[W.id],_e=W.viewport||y;oe.setSize(_e.z,_e.w);let ye=b.getRenderTarget();b.setRenderTarget(oe),b.getClearColor(B),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),Ve?ae.render(V):b.clear();let Me=b.toneMapping;b.toneMapping=pi;let Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Y===!0&&he.setGlobalState(b.clippingPlanes,W),jr(w,V,W),Be.updateMultisampleRenderTarget(oe),Be.updateRenderTargetMipmap(oe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Re=0,nt=N.length;Re<nt;Re++){let _t=N[Re],gt=_t.object,tn=_t.geometry,it=_t.material,Te=_t.group;if(it.side===qn&&gt.layers.test(W.layers)){let Vt=it.side;it.side=Jt,it.needsUpdate=!0,$u(gt,V,W,tn,it,Te),it.side=Vt,it.needsUpdate=!0,Ne=!0}}Ne===!0&&(Be.updateMultisampleRenderTarget(oe),Be.updateRenderTargetMipmap(oe))}b.setRenderTarget(ye),b.setClearColor(B,j),Le!==void 0&&(W.viewport=Le),b.toneMapping=Me}function jr(w,N,V){let W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,oe=w.length;F<oe;F++){let _e=w[F],ye=_e.object,Me=_e.geometry,Le=W===null?_e.material:W,Ne=_e.group;ye.layers.test(V.layers)&&$u(ye,N,V,Me,Le,Ne)}}function $u(w,N,V,W,F,oe){w.onBeforeRender(b,N,V,W,F,oe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(b,N,V,W,w,oe),F.transparent===!0&&F.side===qn&&F.forceSinglePass===!1?(F.side=Jt,F.needsUpdate=!0,b.renderBufferDirect(V,N,W,F,w,oe),F.side=_i,F.needsUpdate=!0,b.renderBufferDirect(V,N,W,F,w,oe),F.side=qn):b.renderBufferDirect(V,N,W,F,w,oe),w.onAfterRender(b,N,V,W,F,oe)}function Xr(w,N,V){N.isScene!==!0&&(N=qe);let W=je.get(w),F=m.state.lights,oe=m.state.shadowsArray,_e=F.state.version,ye=ne.getParameters(w,F.state,oe,N,V),Me=ne.getProgramCacheKey(ye),Le=W.programs;W.environment=w.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(w.isMeshStandardMaterial?A:Mt).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",ce),Le=new Map,W.programs=Le);let Ne=Le.get(Me);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===_e)return ju(w,ye),Ne}else ye.uniforms=ne.getUniforms(w),w.onBuild(V,ye,b),w.onBeforeCompile(ye,b),Ne=ne.acquireProgram(ye,Me),Le.set(Me,Ne),W.uniforms=ye.uniforms;let Re=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=he.uniform),ju(w,ye),W.needsLights=nm(w),W.lightsStateVersion=_e,W.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function qu(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Rs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ju(w,N){let V=je.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function em(w,N,V,W,F){N.isScene!==!0&&(N=qe),Be.resetTextureUnits();let oe=N.fog,_e=W.isMeshStandardMaterial?N.environment:null,ye=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wi,Me=(W.isMeshStandardMaterial?A:Mt).get(W.envMap||_e),Le=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color,gt=pi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=b.toneMapping);let tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,it=tn!==void 0?tn.length:0,Te=je.get(W),Vt=m.state.lights;if(Y===!0&&(se===!0||w!==M)){let hn=w===M&&W.id===z;he.setState(W,w,hn)}let at=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Vt.state.version||Te.outputColorSpace!==ye||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Me||W.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==he.numPlanes||Te.numIntersection!==he.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ne||Te.morphTargets!==Re||Te.morphNormals!==nt||Te.morphColors!==_t||Te.toneMapping!==gt||Te.morphTargetsCount!==it)&&(at=!0):(at=!0,Te.__version=W.version);let Fn=Te.currentProgram;at===!0&&(Fn=Xr(W,N,F));let Kr=!1,Ii=!1,tc=!1,Rt=Fn.getUniforms(),si=Te.uniforms;if(Ie.useProgram(Fn.program)&&(Kr=!0,Ii=!0,tc=!0),W.id!==z&&(z=W.id,Ii=!0),Kr||M!==w){Rt.setValue(I,"projectionMatrix",w.projectionMatrix),Rt.setValue(I,"viewMatrix",w.matrixWorldInverse);let hn=Rt.map.cameraPosition;hn!==void 0&&hn.setValue(I,de.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ii=!0,tc=!0)}if(F.isSkinnedMesh){Rt.setOptional(I,F,"bindMatrix"),Rt.setOptional(I,F,"bindMatrixInverse");let hn=F.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Rt.setValue(I,"boneTexture",hn.boneTexture,Be))}F.isBatchedMesh&&(Rt.setOptional(I,F,"batchingTexture"),Rt.setValue(I,"batchingTexture",F._matricesTexture,Be),Rt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",F._colorsTexture,Be));let nc=V.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0)&&be.update(F,V,Fn),(Ii||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,Rt.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(si.envMap.value=Me,si.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(si.envMapIntensity.value=N.environmentIntensity),Ii&&(Rt.setValue(I,"toneMappingExposure",b.toneMappingExposure),Te.needsLights&&tm(si,tc),oe&&W.fog===!0&&ie.refreshFogUniforms(si,oe),ie.refreshMaterialUniforms(si,W,ee,q,m.state.transmissionRenderTarget[w.id]),Rs.upload(I,qu(Te),si,Be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Rs.upload(I,qu(Te),si,Be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Rt.setValue(I,"center",F.center),Rt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(I,"normalMatrix",F.normalMatrix),Rt.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let hn=W.uniformsGroups;for(let ic=0,im=hn.length;ic<im;ic++){let Xu=hn[ic];Je.update(Xu,Fn),Je.bind(Xu,Fn)}}return Fn}function tm(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function nm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,V){je.get(w.texture).__webglTexture=N,je.get(w.depthTexture).__webglTexture=V;let W=je.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let V=je.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){R=w,O=N,E=V;let W=!0,F=null,oe=!1,_e=!1;if(w){let Me=je.get(w);Me.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Me.__webglFramebuffer===void 0?Be.setupRenderTarget(w):Me.__hasExternalTextures&&Be.rebindTextures(w,je.get(w.texture).__webglTexture,je.get(w.depthTexture).__webglTexture);let Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(_e=!0);let Ne=je.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?F=Ne[N][V]:F=Ne[N],oe=!0):w.samples>0&&Be.useMultisampledRTT(w)===!1?F=je.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[V]:F=Ne,y.copy(w.viewport),L.copy(w.scissor),H=w.scissorTest}else y.copy(re).multiplyScalar(ee).floor(),L.copy(ve).multiplyScalar(ee).floor(),H=Ae;if(Ie.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&Ie.drawBuffers(w,F),Ie.viewport(y),Ie.scissor(L),Ie.setScissorTest(H),oe){let Me=je.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,V)}else if(_e){let Me=je.get(w.texture),Le=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Le)}z=-1},this.readRenderTargetPixels=function(w,N,V,W,F,oe,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Ie.bindFramebuffer(I.FRAMEBUFFER,ye);try{let Me=w.texture,Le=Me.format,Ne=Me.type;if(!dt.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-W&&V>=0&&V<=w.height-F&&I.readPixels(N,V,W,F,fe.convert(Le),fe.convert(Ne),oe)}finally{let Me=R!==null?je.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,W,F,oe,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Ie.bindFramebuffer(I.FRAMEBUFFER,ye);try{let Me=w.texture,Le=Me.format,Ne=Me.type;if(!dt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-W&&V>=0&&V<=w.height-F){let Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),I.readPixels(N,V,W,F,fe.convert(Le),fe.convert(Ne),0),I.flush();let nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await u_(I,nt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe)}finally{I.deleteBuffer(Re),I.deleteSync(nt)}return oe}}finally{let Me=R!==null?je.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-V),F=Math.floor(w.image.width*W),oe=Math.floor(w.image.height*W),_e=N!==null?N.x:0,ye=N!==null?N.y:0;Be.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,_e,ye,F,oe),Ie.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,W=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let oe,_e,ye,Me,Le,Ne;V!==null?(oe=V.max.x-V.min.x,_e=V.max.y-V.min.y,ye=V.min.x,Me=V.min.y):(oe=w.image.width,_e=w.image.height,ye=0,Me=0),W!==null?(Le=W.x,Ne=W.y):(Le=0,Ne=0);let Re=fe.convert(N.format),nt=fe.convert(N.type);Be.setTexture2D(N,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let _t=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tn=I.getParameter(I.UNPACK_SKIP_PIXELS),it=I.getParameter(I.UNPACK_SKIP_ROWS),Te=I.getParameter(I.UNPACK_SKIP_IMAGES),Vt=w.isCompressedTexture?w.mipmaps[F]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Me),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Le,Ne,oe,_e,Re,nt,Vt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Le,Ne,Vt.width,Vt.height,Re,Vt.data):I.texSubImage2D(I.TEXTURE_2D,F,Le,Ne,Re,nt,Vt),I.pixelStorei(I.UNPACK_ROW_LENGTH,_t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,it),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te),F===0&&N.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,W=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0);let oe,_e,ye,Me,Le,Ne,Re,nt,_t,gt=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(oe=V.max.x-V.min.x,_e=V.max.y-V.min.y,ye=V.max.z-V.min.z,Me=V.min.x,Le=V.min.y,Ne=V.min.z):(oe=gt.width,_e=gt.height,ye=gt.depth,Me=0,Le=0,Ne=0),W!==null?(Re=W.x,nt=W.y,_t=W.z):(Re=0,nt=0,_t=0);let tn=fe.convert(N.format),it=fe.convert(N.type),Te;if(N.isData3DTexture)Be.setTexture3D(N,0),Te=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Be.setTexture2DArray(N,0),Te=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let Vt=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fn=I.getParameter(I.UNPACK_SKIP_PIXELS),Kr=I.getParameter(I.UNPACK_SKIP_ROWS),Ii=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Te,F,Re,nt,_t,oe,_e,ye,tn,it,gt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,F,Re,nt,_t,oe,_e,ye,tn,gt.data):I.texSubImage3D(Te,F,Re,nt,_t,oe,_e,ye,tn,it,gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ii),F===0&&N.generateMipmaps&&I.generateMipmap(Te),Ie.unbindTexture()},this.initRenderTarget=function(w){je.get(w).__webglFramebuffer===void 0&&Be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Be.setTextureCube(w,0):w.isData3DTexture?Be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Be.setTexture2DArray(w,0):Be.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){O=0,E=0,R=null,Ie.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ul?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===uo?"display-p3":"srgb"}};var $a=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qa=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ol("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new k,ja=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mr=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,fr=new k,Ms=new k,bs=new k,Ss=new pe,pr=new pe,Wd=new ft,va=new k,mr=new k,ya=new k,_d=new pe,Oc=new pe,gd=new pe,Xa=class extends Nt{constructor(e=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pl(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new ja(i,3,0,!1)),ws.setAttribute("uv",new ja(i,2,3,!1))}this.geometry=ws,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;xa(va.set(-.5,-.5,0),bs,a,Ms,s,r),xa(mr.set(.5,-.5,0),bs,a,Ms,s,r),xa(ya.set(.5,.5,0),bs,a,Ms,s,r),_d.set(0,0),Oc.set(1,0),gd.set(1,1);let o=e.ray.intersectTriangle(va,mr,ya,!1,fr);if(o===null&&(xa(mr.set(-.5,.5,0),bs,a,Ms,s,r),Oc.set(0,1),o=e.ray.intersectTriangle(va,ya,mr,!1,fr),o===null))return;let c=e.ray.origin.distanceTo(fr);c<e.near||c>e.far||t.push({distance:c,point:fr.clone(),uv:Gi.getInterpolation(fr,va,mr,ya,_d,Oc,gd,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xa(n,e,t,i,s,r){Ss.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(pr.x=r*Ss.x-s*Ss.y,pr.y=s*Ss.x+r*Ss.y):pr.copy(Ss),n.copy(e),n.x+=pr.x,n.y+=pr.y,n.applyMatrix4(Wd)}var br=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ka=new k,Ya=new k,vd=new ft,_r=new Da,wa=new Ds,Fc=new k,yd=new k,Sr=class extends Nt{constructor(e=new qt,t=new br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ka.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ka.distanceTo(Ya);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;vd.copy(s).invert(),_r.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let _=u.getX(v),S=u.getX(v+1),b=Ma(this,e,_r,c,_,S);b&&t.push(b)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),_=Ma(this,e,_r,c,v,m);_&&t.push(_)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){let _=Ma(this,e,_r,c,v,v+1);_&&t.push(_)}if(this.isLineLoop){let v=Ma(this,e,_r,c,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ma(n,e,t,i,s,r){let a=n.geometry.attributes.position;if(Ka.fromBufferAttribute(a,s),Ya.fromBufferAttribute(a,r),t.distanceSqToSegment(Ka,Ya,Fc,yd)>i)return;Fc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fc);if(!(c<e.near||c>e.far))return{distance:c,point:yd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}var Ja=class extends an{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let u=i[s],f=i[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new pe:new k);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new k,s=[],r=[],a=[],o=new k,c=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Tr=class extends _n{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*d+this.aX,l=f*d+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ml=class extends Tr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bl(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+d)+(c-o)/d;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var ba=new k,Bc=new Bl,zc=new Bl,Hc=new Bl,_l=class extends _n{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(ba.subVectors(s[0],s[1]).add(s[0]),l=ba);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Bc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,v,m),zc.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,v,m),Hc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),zc.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Hc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Bc.calc(c),zc.calc(c),Hc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function nx(n,e){let t=1-n;return t*t*e}function ix(n,e){return 2*(1-n)*n*e}function sx(n,e){return n*n*e}function yr(n,e,t,i){return nx(n,e)+ix(n,t)+sx(n,i)}function rx(n,e){let t=1-n;return t*t*t*e}function ax(n,e){let t=1-n;return 3*t*t*n*e}function ox(n,e){return 3*(1-n)*n*n*e}function cx(n,e){return n*n*n*e}function xr(n,e,t,i,s){return rx(n,e)+ax(n,t)+ox(n,i)+cx(n,s)}var Za=class extends _n{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gl=class extends _n{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y),xr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends _n{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends _n{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends _n{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends _n{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y),yr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(xd(o,c.x,l.x,u.x,d.x),xd(o,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},wd=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:_l,CubicBezierCurve:Za,CubicBezierCurve3:gl,EllipseCurve:Tr,LineCurve:Qa,LineCurve3:vl,QuadraticBezierCurve:eo,QuadraticBezierCurve3:yl,SplineCurve:to}),xl=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wd[s.type]().fromJSON(s))}return this}},wl=class extends xl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Qa(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new eo(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Za(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new to(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Tr(e,t,i,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ml=class n extends qt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=kt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,d=new k,f=new pe,p=new k,g=new k,v=new k,m=0,_=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,_=e[S+1].y-e[S].y,p.x=_*1,p.y=-m,p.z=_*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,_=e[S+1].y-e[S].y,p.x=_*1,p.y=-m,p.z=_*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let S=0;S<=t;S++){let b=i+S*u*s,T=Math.sin(b),O=Math.cos(b);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*T,d.y=e[E].y,d.z=e[E].x*O,a.push(d.x,d.y,d.z),f.x=S/t,f.y=E/(e.length-1),o.push(f.x,f.y);let R=c[3*E+0]*T,z=c[3*E+1],M=c[3*E+0]*O;l.push(R,z,M)}}for(let S=0;S<t;S++)for(let b=0;b<e.length-1;b++){let T=b+S*e.length,O=T,E=T+e.length,R=T+e.length+1,z=T+1;r.push(O,E,z),r.push(R,z,E)}this.setIndex(r),this.setAttribute("position",new Tt(a,3)),this.setAttribute("uv",new Tt(o,2)),this.setAttribute("normal",new Tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},no=class n extends Ml{constructor(e=1,t=1,i=4,s=8){let r=new wl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}};var bl=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],g=0,v=[],m=i/2,_=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function S(){let T=new k,O=new k,E=0,R=(t-e)/i;for(let z=0;z<=r;z++){let M=[],y=z/r,L=y*(t-e)+e;for(let H=0;H<=s;H++){let B=H/s,j=B*c+o,K=Math.sin(j),q=Math.cos(j);O.x=L*K,O.y=-y*i+m,O.z=L*q,d.push(O.x,O.y,O.z),T.set(K,R,q).normalize(),f.push(T.x,T.y,T.z),p.push(B,1-y),M.push(g++)}v.push(M)}for(let z=0;z<s;z++)for(let M=0;M<r;M++){let y=v[M][z],L=v[M+1][z],H=v[M+1][z+1],B=v[M][z+1];u.push(y,L,B),u.push(L,H,B),E+=6}l.addGroup(_,E,0),_+=E}function b(T){let O=g,E=new pe,R=new k,z=0,M=T===!0?e:t,y=T===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let L=g;for(let H=0;H<=s;H++){let j=H/s*c+o,K=Math.cos(j),q=Math.sin(j);R.x=M*q,R.y=m*y,R.z=M*K,d.push(R.x,R.y,R.z),f.push(0,y,0),E.x=K*.5+.5,E.y=q*.5*y+.5,p.push(E.x,E.y),g++}for(let H=0;H<s;H++){let B=O+H,j=L+H;T===!0?u.push(j,j+1,B):u.push(j+1,j,B),z+=3}l.addGroup(_,z,T===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},io=class n extends bl{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xi=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new k,f=new k,p=[],g=[],v=[],m=[];for(let _=0;_<=i;_++){let S=[],b=_/i,T=0;_===0&&a===0?T=.5/t:_===i&&c===Math.PI&&(T=-.5/t);for(let O=0;O<=t;O++){let E=O/t;d.x=-e*Math.cos(s+E*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(s+E*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(E+T,1-b),S.push(l++)}u.push(S)}for(let _=0;_<i;_++)for(let S=0;S<t;S++){let b=u[_][S+1],T=u[_][S],O=u[_+1][S],E=u[_+1][S+1];(_!==0||a>0)&&p.push(b,T,E),(_!==i-1||c<Math.PI)&&p.push(T,O,E)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tn=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Sa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Bs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sl=class extends Bs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eh:r=e,o=2*t-i;break;case Ah:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Eh:a=e,c=2*i-t;break;case Ah:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,_=-f*m+2*f*v-f*g,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,T=p*m-p*v;for(let O=0;O!==o;++O)r[O]=_*a[u+O]+S*a[l+O]+b*a[c+O]+T*a[d+O];return r}},Tl=class extends Bs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*u;return r}},El=class extends Bs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},En=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case Kc:t=this.InterpolantFactoryMethodLinear;break;case uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&lx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Kc;var qi=class extends En{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Aa;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends En{};Al.prototype.ValueTypeName="color";var Cl=class extends En{};Cl.prototype.ValueTypeName="number";var Rl=class extends Bs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)yi.slerpFlat(r,0,a,l-o,a,l,c);return r}},so=class extends En{InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends En{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Aa;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends En{};Pl.prototype.ValueTypeName="vector";var Il=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},ux=new Il,Ll=class{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var ro=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ao=class extends ro{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vc=new ft,Md=new k,bd=new k,kl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Nl=class extends kl{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zl="\\[\\]\\.:\\/",hx=new RegExp("["+zl+"]","g"),Hl="[^"+zl+"]",dx="[^"+zl.replace("\\.","")+"]",fx=/((?:WC+[\/:])*)/.source.replace("WC",Hl),px=/(WCOD+)?/.source.replace("WCOD",dx),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),gx=new RegExp("^"+fx+px+mx+_x+"$"),vx=["material","materials","bones","map"],Dl=class{constructor(e,t,i){let s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(e){let t=gx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);vx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Dl;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"165"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="165");var Vl="kana_quiz_settings_v2",Gl="kana_quiz_stats_v2",vt={module:"kana",content:["kana"],modes:["rm_mc","jp_mc"],modesKana:["rm_mc","jp_mc"],modesWord:["rm_mc","jp_mc"],modesKanji:["kanji_read","read_kanji"],modesN2:["kanji_read","read_kanji"],sentenceMode:"progressive",sentenceProgress:0,n2Cats:["kanji_reading","orthography","context_vocab","paraphrase","grammar"],jlptLevel:"n2",jlptMode:"quiz",jlptProgress:{},jlptProgressOrders:{},kanaMode:"hira",sessionSize:20,kanaSets:["seion"],hideMeaning:!1,wrongFirst:!1,wordMatchBest:0,wordMatchMusicOn:!0,wordMatchSfxOn:!0,wordMatchVoiceOn:!0,wordMatchKana:["hira","kata"],wordMatchDifficulty:"easy",cultivateScripts:["hira","kata","kanji"]};function $d(){let n=localStorage.getItem(Vl);if(!n)return structuredClone(vt);try{let e=JSON.parse(n);return{...structuredClone(vt),...e,module:e.module||"kana",content:Array.isArray(e.content)?e.content:vt.content,modes:Array.isArray(e.modes)?e.modes:vt.modes,modesKana:Array.isArray(e.modesKana)?e.modesKana:vt.modesKana,modesWord:Array.isArray(e.modesWord)?e.modesWord:vt.modesWord,modesKanji:Array.isArray(e.modesKanji)?e.modesKanji:vt.modesKanji,modesN2:Array.isArray(e.modesN2)?e.modesN2:vt.modesN2,sentenceMode:["progressive","study","quiz_jp_zh","quiz_zh_jp"].includes(e.sentenceMode)?e.sentenceMode:vt.sentenceMode,sentenceProgress:Number.isInteger(+e.sentenceProgress)&&+e.sentenceProgress>=0?+e.sentenceProgress:vt.sentenceProgress,n2Cats:Array.isArray(e.n2Cats)?e.n2Cats:vt.n2Cats,jlptLevel:["n1","n2","n3","n4","n5"].includes(e.jlptLevel)?e.jlptLevel:vt.jlptLevel,jlptMode:["quiz","study","progressive"].includes(e.jlptMode)?e.jlptMode:vt.jlptMode,jlptProgress:e.jlptProgress&&typeof e.jlptProgress=="object"&&!Array.isArray(e.jlptProgress)?e.jlptProgress:{},jlptProgressOrders:e.jlptProgressOrders&&typeof e.jlptProgressOrders=="object"&&!Array.isArray(e.jlptProgressOrders)?e.jlptProgressOrders:{},kanaSets:Array.isArray(e.kanaSets)?e.kanaSets:vt.kanaSets,kanaMode:e.kanaMode==="kata"?"kata":"hira",sessionSize:Number.isFinite(+e.sessionSize)?+e.sessionSize:vt.sessionSize,hideMeaning:e.hideMeaning===!0,wrongFirst:e.wrongFirst===!0,wordMatchBest:Number.isFinite(+e.wordMatchBest)?Math.max(0,+e.wordMatchBest):vt.wordMatchBest,wordMatchMusicOn:e.wordMatchMusicOn!==!1,wordMatchSfxOn:e.wordMatchSfxOn!==!1,wordMatchVoiceOn:e.wordMatchVoiceOn!==!1,wordMatchKana:Array.isArray(e.wordMatchKana)&&e.wordMatchKana.some(t=>t==="hira"||t==="kata")?[...new Set(e.wordMatchKana.filter(t=>t==="hira"||t==="kata"))]:vt.wordMatchKana,wordMatchDifficulty:["easy","medium","hard"].includes(e.wordMatchDifficulty)?e.wordMatchDifficulty:vt.wordMatchDifficulty,cultivateScripts:Array.isArray(e.cultivateScripts)&&e.cultivateScripts.some(t=>t==="hira"||t==="kata"||t==="kanji")?[...new Set(e.cultivateScripts.filter(t=>t==="hira"||t==="kata"||t==="kanji"))]:vt.cultivateScripts}}catch{return structuredClone(vt)}}function pt(n){localStorage.setItem(Vl,JSON.stringify(n))}function qd(){return localStorage.setItem(Vl,JSON.stringify(vt)),structuredClone(vt)}function fo(){let n=new Date,e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function po(){let n=localStorage.getItem(Gl),e={day:fo(),daily:{total:0,ok:0,ng:0,streak:0,rounds:0},session:{active:!1,size:20,done:0,ok:0,ng:0,round:0},wrong:{}};if(!n)return e;try{let t=JSON.parse(n);return t.day!==fo()&&(t.day=fo(),t.daily={total:0,ok:0,ng:0,streak:0,rounds:0}),t.daily||=e.daily,t.daily.rounds??=0,t.session||=e.session,t.session.round??=0,t.wrong||={},t}catch{return e}}function gn(n){localStorage.setItem(Gl,JSON.stringify(n))}function jd(n){n.day=fo(),n.daily={total:0,ok:0,ng:0,streak:0,rounds:0},gn(n)}function Xd(){localStorage.removeItem(Gl)}var mo=[],Wl=!1,Kd=!1,_o=0,Er=null,Ar=null,Hs=null,Yd=!1,Mi=null;function xx(n){let e=new TextEncoder().encode(String(n||"")),t=2166136261;for(let i of e)t^=i,t=Math.imul(t,16777619)>>>0;return`${t.toString(16).padStart(8,"0")}_${e.length}`}async function Zd(){if(Yd)return Hs;Yd=!0;try{let n=await fetch("./assets/tts/ja/manifest.json?v=2026-06-19.13",{cache:"force-cache"});if(!n.ok)throw new Error(`manifest ${n.status}`);let e=await n.json(),t=Array.isArray(e?.items)?e.items:[];Hs=new Set(t)}catch{Hs=new Set}return Hs}Zd();function Qd(){if(Mi){try{Mi.pause(),Mi.src="",Mi.load?.()}catch{}Mi=null}}function wx(n,e={}){let t=String(n||"").trim();if(!t||!Hs)return!1;let i=xx(t);if(!Hs.has(i))return!1;Qd();let s=++_o;Vs(),"speechSynthesis"in window&&speechSynthesis.cancel();let r=new Audio(`./assets/tts/ja/${i}.m4a`);Mi=r,r.preload="auto",r.volume=1;let a=!1,o=()=>s===_o&&Mi===r,c=(l,u="")=>{o()&&(Vs(),Zt(e,"onProgress",1),Mi=null,Zt(e,"onEnd",{ok:l,reason:u,prebuilt:!0}))};return r.onplay=()=>{o()&&(a=!0,Zt(e,"onStart",{text:t,estimatedMs:Math.max(800,(r.duration||1)*1e3),prebuilt:!0}),Zt(e,"onProgress",.03))},r.ontimeupdate=()=>{!o()||!r.duration||Zt(e,"onProgress",Math.min(.98,r.currentTime/r.duration))},r.onended=()=>c(!0),r.onerror=()=>c(!1,"prebuilt-error"),Zt(e,"onQueued",{text:t,estimatedMs:0,prebuilt:!0}),r.play().catch(()=>{a||c(!1,"prebuilt-play-blocked")}),!0}var Mx=["nanami","keita","online","natural","microsoft","edge","haruka","ichiro","ayumi"];function Jd(){mo=speechSynthesis.getVoices(),mo.length>0&&(Wl=!0)}"speechSynthesis"in window&&(Jd(),speechSynthesis.onvoiceschanged=Jd);function go(){if(Zd(),!("speechSynthesis"in window)||Kd)return;speechSynthesis.cancel();let n=new SpeechSynthesisUtterance("");n.volume=0,speechSynthesis.speak(n),Kd=!0}function bx(){if(!("speechSynthesis"in window))return[];let n=speechSynthesis.getVoices();return n.length&&(mo=n,Wl=!0),Wl?mo:n}function Sx(n){if(!(n.lang||"").toLowerCase().startsWith("ja"))return-1;let t=`${n.name||""} ${n.voiceURI||""}`.toLowerCase(),i=10;return Mx.forEach((s,r)=>{t.includes(s)&&(i+=100-r*6)}),n.localService===!1&&(i+=8),n.default&&(i+=2),i}function Tx(){return bx().map(e=>({voice:e,score:Sx(e)})).filter(e=>e.score>=0).sort((e,t)=>t.score-e.score)[0]?.voice||null}function Vs(){Er&&(clearInterval(Er),Er=null),Ar&&(clearTimeout(Ar),Ar=null)}function Zt(n,e,t){try{n?.[e]?.(t)}catch{}}function Ex(n,e=1){let t=String(n||"").replace(/\s+/g,"").length;return Math.max(900,Math.min(18e3,t*150/Math.max(.5,e)+700))}function Lt(n,e={}){if(wx(n,e))return!0;if(!("speechSynthesis"in window))return Zt(e,"onError",{reason:"unsupported"}),Zt(e,"onEnd",{ok:!1,reason:"unsupported"}),!1;let t=String(n||"").trim();if(!t)return Zt(e,"onEnd",{ok:!1,reason:"empty"}),!1;let i=++_o;Vs(),Qd(),speechSynthesis.cancel();let s=new SpeechSynthesisUtterance(t),r=Tx();r&&(s.voice=r),s.lang=r?.lang||"ja-JP",s.rate=r&&/online|natural|nanami|keita/i.test(`${r.name} ${r.voiceURI}`)?1:.9,s.volume=1;let a=0,o=0,c=!1,l=Ex(t,s.rate),u=()=>i===_o,d=p=>{if(!u()||c)return;let g=Math.max(o,Math.min(1,Number(p)||0));o=g,Zt(e,"onProgress",g)},f=(p,g="")=>{!u()||c||(Vs(),d(1),c=!0,Zt(e,"onEnd",{ok:p,reason:g}))};return s.onstart=()=>{u()&&(a=Date.now(),Zt(e,"onStart",{text:t,estimatedMs:l}),d(.03),Vs(),Er=setInterval(()=>{if(!u()||c)return;let p=Date.now()-a;d(Math.min(.96,p/l))},120),Ar=setTimeout(()=>f(!0,"timeout"),l+2500))},s.onboundary=p=>{!u()||c||typeof p.charIndex=="number"&&t.length>0&&d(Math.min(.98,p.charIndex/t.length))},s.onend=()=>f(!0),s.onerror=p=>f(!1,p?.error||"error"),Zt(e,"onQueued",{text:t,estimatedMs:l}),speechSynthesis.speak(s),setTimeout(()=>{!u()||c||a||(a=Date.now(),Zt(e,"onStart",{text:t,estimatedMs:l}),d(.03),Vs(),Er=setInterval(()=>{!u()||c||d(Math.min(.96,(Date.now()-a)/l))},120),Ar=setTimeout(()=>f(!0,"timeout"),l+2500))},120),!0}var Cr=null,Rr=null,Pr=null;function jt(){return Cr||(Cr=new(window.AudioContext||window.webkitAudioContext)),Cr.state==="suspended"&&Cr.resume(),Cr}function xo(){let n=jt();return Rr||(Rr=n.createGain(),Rr.gain.value=1,Rr.connect(n.destination)),Rr}function Nn(){let n=jt();return Pr||(Pr=n.createGain(),Pr.gain.value=1,Pr.connect(n.destination)),Pr}function wo(){jt(),xo(),Nn()}var ef=0;function nf(){let n=Date.now();return n-ef<100?!1:(ef=n,!0)}function Xt(){if(nf())try{let n=jt(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(Nn()),e.frequency.value=880,e.type="sine",t.gain.setValueAtTime(.3,n.currentTime),t.gain.exponentialRampToValueAtTime(.01,n.currentTime+.1),e.start(n.currentTime),e.stop(n.currentTime+.1);let i=n.createOscillator(),s=n.createGain();i.connect(s),s.connect(Nn()),i.frequency.value=1046,i.type="sine",s.gain.setValueAtTime(.3,n.currentTime+.12),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.25),i.start(n.currentTime+.12),i.stop(n.currentTime+.25)}catch{}}function vn(){if(nf())try{let n=jt(),e=n.createOscillator(),t=n.createGain();e.connect(t),t.connect(Nn()),e.frequency.value=220,e.type="sine",t.gain.setValueAtTime(.3,n.currentTime),t.gain.exponentialRampToValueAtTime(.01,n.currentTime+.2),e.start(n.currentTime),e.stop(n.currentTime+.2)}catch{}}var Ax=new URL("../assets/audio/word-match-bg.mp3",import.meta.url).href,Dt=null,$l=null,yo=0;function vo(n,e,t,i,s,r="sine",a=.035){let o=n.createOscillator(),c=n.createGain();o.type=r,o.frequency.setValueAtTime(t,i),c.gain.setValueAtTime(1e-4,i),c.gain.exponentialRampToValueAtTime(a,i+.025),c.gain.exponentialRampToValueAtTime(1e-4,i+s),o.connect(c),c.connect(e),o.start(i),o.stop(i+s+.03)}function Cx(n,e,t,i=.035,s=.018){let r=Math.max(1,Math.floor(n.sampleRate*i)),a=n.createBuffer(1,r,n.sampleRate),o=a.getChannelData(0),c=1234567;for(let f=0;f<r;f++)c=c*1664525+1013904223>>>0,o[f]=(c/4294967295*2-1)*(1-f/r);let l=n.createBufferSource();l.buffer=a;let u=n.createBiquadFilter();u.type="highpass",u.frequency.value=5e3;let d=n.createGain();d.gain.setValueAtTime(s,t),d.gain.exponentialRampToValueAtTime(1e-4,t+i),l.connect(u),u.connect(d),d.connect(e),l.start(t),l.stop(t+i)}function tf(){try{let n=jt(),e=n.createGain(),t=n.createDelay(),i=n.createGain(),s=n.createGain();e.gain.value=.18,t.delayTime.value=.28,i.gain.value=.22,s.gain.value=.18,t.connect(i),i.connect(t),t.connect(s),e.connect(xo()),e.connect(t),s.connect(xo());let a=60/92,o=24,c=o*4*a,l=n.currentTime+.05,u=[261.63,311.13,392,466.16,523.25,622.25,783.99,932.33],d=[130.81,155.56,196,174.61],f=g=>{for(let v=0;v<o;v++){let m=g+v*4*a,_=v>=16?1:0;vo(n,e,d[v%d.length],m,a*1.7,"triangle",.028+_*.006),vo(n,e,d[(v+2)%d.length]*2,m+a*2,a*1.25,"sine",.018);for(let S=0;S<8;S++){let b=m+S*a/2,T=u[(S*2+v+(_?2:0))%u.length];vo(n,e,T,b,a*.22,S%2?"triangle":"sine",_?.026:.021),(S%2===1||_)&&Cx(n,e,b+a*.08,.028,_?.014:.009)}v%4===3&&vo(n,e,u[6],m+a*3.25,a*.45,"square",.012)}};f(l);let p=setInterval(()=>{if(!Dt)return;let g=n.currentTime;for(;Dt.nextStart<g+8;)f(Dt.nextStart),Dt.nextStart+=c},1e3);Dt={master:e,interval:p,nextStart:l+c}}catch{}}async function Rx(n){return $l||($l=fetch(Ax,{cache:"force-cache"}).then(e=>{if(!e.ok)throw new Error("music load failed");return e.arrayBuffer()}).then(e=>n.decodeAudioData(e))),$l}function Px(n,e){if(Dt)return;let t=n.createBufferSource(),i=n.createGain();t.buffer=e,t.loop=!0,i.gain.setValueAtTime(1e-4,n.currentTime),i.gain.exponentialRampToValueAtTime(.16,n.currentTime+.28),t.connect(i),i.connect(xo()),t.start(n.currentTime+.02),Dt={type:"buffer",source:t,gain:i}}function ql(){if(Dt)return;let n=++yo;try{let e=jt();Rx(e).then(t=>{n===yo&&Px(e,t)}).catch(()=>{n===yo&&!Dt&&tf()})}catch{tf()}}function Xi(){yo++;try{if(!Dt)return;if(Dt.type==="buffer"){let t=jt(),{source:i,gain:s}=Dt;s.gain.cancelScheduledValues(t.currentTime),s.gain.setValueAtTime(Math.max(s.gain.value||1e-4,1e-4),t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.22),setTimeout(()=>{try{i.stop()}catch{}try{i.disconnect()}catch{}try{s.disconnect()}catch{}},260),Dt=null;return}clearInterval(Dt.interval);let n=jt(),e=Dt.master;e.gain.cancelScheduledValues(n.currentTime),e.gain.setValueAtTime(e.gain.value,n.currentTime),e.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.25),setTimeout(()=>{try{e.disconnect()}catch{}},320),Dt=null}catch{Dt=null}}function on(){try{let n=jt(),e=n.currentTime,t=n.createGain();t.gain.setValueAtTime(.48,e),t.gain.exponentialRampToValueAtTime(.001,e+.62),t.connect(Nn()),[784,1046,1397,1760,2093].forEach((l,u)=>{let d=n.createOscillator(),f=n.createGain();d.type=u%2?"triangle":"square",d.frequency.setValueAtTime(l,e+u*.025),d.frequency.exponentialRampToValueAtTime(l*.42,e+.34+u*.02),f.gain.setValueAtTime(.13,e+u*.018),f.gain.exponentialRampToValueAtTime(.001,e+.34+u*.025),d.connect(f),f.connect(t),d.start(e+u*.018),d.stop(e+.4+u*.025)});let i=Math.floor(n.sampleRate*.3),s=n.createBuffer(1,i,n.sampleRate),r=s.getChannelData(0),a=24681357;for(let l=0;l<i;l++)a=a*1664525+1013904223>>>0,r[l]=(a/4294967295*2-1)*(1-l/i);let o=n.createBufferSource(),c=n.createBiquadFilter();c.type="highpass",c.frequency.value=1800,o.buffer=s,o.connect(c),c.connect(t),o.start(e),o.stop(e+.3),setTimeout(()=>{try{t.disconnect()}catch{}},720)}catch{}}function Mo(){try{let n=jt(),e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="triangle",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(90,e+.16),i.gain.setValueAtTime(.16,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(i),i.connect(Nn()),t.start(e),t.stop(e+.2)}catch{}}function Kt(){try{let n=jt(),e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(520,e),t.frequency.setValueAtTime(620,e+.07),i.gain.setValueAtTime(.08,e),i.gain.exponentialRampToValueAtTime(.001,e+.14),t.connect(i),i.connect(Nn()),t.start(e),t.stop(e+.15)}catch{}}function sf(n){try{let e=jt(),t=e.currentTime,i=Number(n),s=!Number.isFinite(i),r=s?1046:i===1?880:i===2?740:622,a=e.createOscillator(),o=e.createGain();a.type=s?"square":"triangle",a.frequency.setValueAtTime(r,t),s&&a.frequency.exponentialRampToValueAtTime(r*1.5,t+.18),o.gain.setValueAtTime(s?.34:.25,t),o.gain.exponentialRampToValueAtTime(.001,t+(s?.34:.22)),a.connect(o),o.connect(Nn()),a.start(t),a.stop(t+(s?.36:.24))}catch{}}function rf(n=10){try{let e=jt(),t=e.currentTime,i=Math.max(0,Math.min(10,Number(n)||0)),s=(11-i)/10,r=e.createGain();r.gain.setValueAtTime(.18+s*.22,t),r.gain.exponentialRampToValueAtTime(.001,t+.16+s*.05),r.connect(Nn());let a=e.createOscillator();if(a.type=i<=3?"square":"triangle",a.frequency.setValueAtTime(620+s*620,t),a.frequency.exponentialRampToValueAtTime(760+s*900,t+.06),a.connect(r),a.start(t),a.stop(t+.18),i<=5){let o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(180+s*120,t+.045),o.frequency.exponentialRampToValueAtTime(90+s*80,t+.18),o.connect(r),o.start(t+.045),o.stop(t+.2)}setTimeout(()=>{try{r.disconnect()}catch{}},260)}catch{}}function bo(n,e=.18,t="sine"){try{let i=jt(),s=Nn(),r=i.currentTime;n.forEach(([a,o,c,l=1])=>{let u=i.createOscillator(),d=i.createGain();u.type=t,u.frequency.setValueAtTime(a,r+o),d.gain.setValueAtTime(.001,r+o),d.gain.exponentialRampToValueAtTime(Math.max(.002,e*l),r+o+.015),d.gain.exponentialRampToValueAtTime(.001,r+o+c),u.connect(d),d.connect(s),u.start(r+o),u.stop(r+o+c+.02)})}catch{}}function jl(){bo([[392,0,.1],[523,.09,.12],[659,.18,.18]],.16,"triangle")}function So(){bo([[196,0,.16,1.2],[294,.07,.14],[392,.14,.2]],.22,"sawtooth")}function Xl(){bo([[740,0,.08],[988,.08,.1],[1318,.17,.22]],.18,"sine")}function Kl(){bo([[523,0,.1],[659,.08,.1],[784,.16,.12],[1046,.28,.35,1.3]],.22,"square")}var Ix=null,To=null,Gs=!1,Yl=new TextEncoder,Lx=new TextDecoder;function Eo(){try{let n=new Uint32Array(1);return crypto.getRandomValues(n),n[0]>>>0}catch{let n=typeof performance<"u"&&performance.now?performance.now():0;return Date.now()>>>0^Math.trunc(n*1e3)>>>0}}function Jl(n){let e=Number(n)>>>0;return e?Eo()%e:null}function af(n){let e=Number(n)>>>0,t=Array.from({length:e},(i,s)=>s);for(let i=e-1;i>0;i-=1){let s=Eo()%(i+1);[t[i],t[s]]=[t[s],t[i]]}return t}function bi(){return Ix?.exports||null}function Zl(n){let e=bi();if(!e?.alloc||!To)return null;let t=e.alloc(n.length);return new Uint8Array(To.buffer,t,n.length).set(n),{ptr:t,len:n.length}}function Ir(n){let e=bi();if(!n||!e?.free_result||!To)return"";let t=new Uint8Array(To.buffer),i=t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24,s=t.slice(n+4,n+4+i);return e.free_result(n),Lx.decode(s)}function of(n){let e=bi();if(!Gs||!e?.normalize_romaji||!e?.dealloc)return null;let t=Yl.encode(String(n||"")),i=Zl(t);if(!i)return null;try{let s=e.normalize_romaji(i.ptr,i.len);return Ir(s)}finally{e.dealloc(i.ptr,i.len)}}function cf(n,e){let t=bi();if(!Gs||!t?.record_result)return null;let i=n?.daily||{},s=n?.session||{},r=t.record_result(i.total>>>0,i.ok>>>0,i.ng>>>0,i.streak>>>0,s.active?1:0,s.done>>>0,s.ok>>>0,s.ng>>>0,s.size>>>0,s.round>>>0,e?1:0),o=Ir(r).split(",").map(c=>Number.parseInt(c,10));return o.length!==10||o.some(c=>!Number.isFinite(c))?null:{daily:{total:o[0],ok:o[1],ng:o[2],streak:o[3]},session:{active:o[4]===1,done:o[5],ok:o[6],ng:o[7],round:o[9]},finished:o[8]===1}}function lf(n,e){let t=bi();if(!Gs||!t?.pct_value)return null;let i=t.pct_value(n>>>0,e>>>0);return Ir(i)}function Ao(n,e=Eo()){let t=bi();if(!Gs||!t?.weighted_pick||!t?.dealloc)return null;let i=(n||[]).map(a=>Math.max(0,Number(a)||0)).join(","),s=Yl.encode(i),r=Zl(s);if(!r)return null;try{let a=t.weighted_pick(r.ptr,r.len,e>>>0);return Number.isInteger(a)&&a>=0&&a<n.length?a:null}finally{t.dealloc(r.ptr,r.len)}}function Ql(n,e,t=Eo()){let i=bi();if(!Gs||!i?.ranked_indices||!i?.dealloc)return null;let s=(n||[]).map(o=>Number.isFinite(Number(o))?Math.trunc(Number(o)):0).join(","),r=Yl.encode(s),a=Zl(r);if(!a)return null;try{let o=i.ranked_indices(a.ptr,a.len,e>>>0,t>>>0),c=Ir(o);if(!c)return[];let l=c.split(",").filter(Boolean).map(u=>Number.parseInt(u,10));return l.every(u=>Number.isInteger(u)&&u>=0&&u<n.length)?l:null}finally{i.dealloc(a.ptr,a.len)}}function uf(n,e){let t=bi();if(!Gs||!t?.start_session)return null;let i=t.start_session(n>>>0,e>>>0),r=Ir(i).split(",").map(a=>Number.parseInt(a,10));return r.length!==6||r.some(a=>!Number.isFinite(a))?null:{active:r[0]===1,size:r[1],done:r[2],ok:r[3],ng:r[4],round:r[5]}}var kx={si:"shi",ti:"chi",tu:"tsu",hu:"fu",nn:"n"};function hf(n){let e=of(n);if(e!==null)return e;let t=n.trim().toLowerCase();return kx[t]||t}function Ro(n,e){return lf(n,e)??(e?`${Math.round(n/e*100)}%`:"0%")}function Co(n){return`${n.type}:${n.rm}:${n.hira}`}function Nx(n,e){let t=e.kanaSets?.length?e.kanaSets:["seion"],i=new Set(t),s=n.kana.filter(l=>i.has(l.set||"seion")).map(l=>({...l,type:"kana"})),r=n.words.map(l=>({...l,type:"word"})),a=(n.kanji||[]).map(l=>({...l,type:"kanji"})),o=(n.n2||[]).map(l=>({...l,type:"n2"})),c=n.wordRelations||[];return{kana:s,word:r,kanji:a,n2:o,wordRelations:c,all:[...s,...r,...a,...o]}}function $s(n){if(!n.length)return;let e=Ao(n.map(()=>1))??Jl(n.length);return n[e??0]}function Yn(n){let e=n.slice(),t=Ql(e.map(()=>1),e.length);if(t?.length===e.length)return t.map(s=>e[s]);let i=af(e.length);return i.length===e.length?i.map(s=>e[s]):e}function Dx(n){let e=n.modes?.length?n.modes:["rm_mc","jp_mc"];return $s(e)}var df={word_synonym:"synonym",word_near:"near",word_antonym:"antonym"};function eu(n,e){return n?typeof n=="string"?e.get(n)||null:{...n,type:"word"}:null}function Ws(n,e,t=i=>i.item.rm){let i=[],s=new Set;for(let a of n){let o=t(a);!o||s.has(o)||(i.push(a),s.add(o))}let r=Ql(i.map(a=>a.score),e);return r?r.map(a=>i[a].item):i.slice().sort((a,o)=>o.score-a.score).slice(0,e).map(a=>a.item)}function Ux(n,e){let t=df[n];if(!t)return null;let i=new Map(e.word.map(u=>[u.rm,u])),s=(e.wordRelations||[]).filter(u=>u.kind===t).map(u=>({raw:u,source:eu(u.source,i),target:eu(u.target,i),distractors:(u.distractors||[]).map(d=>eu(d,i)).filter(Boolean)})).filter(u=>u.source&&u.target);if(!s.length)return null;let r=$s(s),a=new Set([r.source.rm,r.target.rm]),o=[];for(let u of Yn(r.distractors)){if(o.length>=3)break;a.has(u.rm)||(o.push(u),a.add(u.rm))}let c=Yn(e.word.filter(u=>!a.has(u.rm)));for(let u of c){if(o.length>=3)break;o.push(u),a.add(u.rm)}let l=Yn([r.target,...o]);return{mode:n,relationKind:t,source:r.source,correct:r.target,choices:l,correctIndex:l.findIndex(u=>u.rm===r.target.rm)}}function ff(n,e,t){let i=Nx(n,e),s=e.content.includes("kana"),r=e.content.includes("word"),a=e.content.includes("kanji"),o=e.content.includes("n2"),c=e.wrongFirst===!0,l,u=[];s&&i.kana.length&&u.push(i.kana),r&&i.word.length&&u.push(i.word),a&&i.kanji.length&&u.push(i.kanji),o&&i.n2.length&&u.push(i.n2),u.length>0?l=u[Ao(u.map(()=>1))??Jl(u.length)??0]:l=i.all;let d=[];for(let H of l){let B=t.wrong[Co(H)]||0;if(d.push(H),B>0){let j=c?Math.min(12,B*3):Math.min(4,B);for(let K=0;K<j;K++)d.push(H)}}if(!d.length)return null;let f=["kanji_read","read_kanji","kanji_mean"],p=["rm_mean","mean_rm"],g=Object.keys(df),v=["rm_mc","jp_mc","rm_in","jp_in"],m=Dx(e);if(g.includes(m)){let H=Ux(m,i);if(H)return H;m="rm_mean"}let _=i.kana.length>0&&s,S=i.word.length>0&&r,b=i.kanji.length>0&&a,T=i.n2.length>0&&o,O=b||T;f.includes(m)&&!O&&(m=S?$s(p):"jp_mc"),p.includes(m)&&!S&&!O&&(m="jp_mc"),m==="mean_rm"&&!S&&O&&(m=$s(f)),v.includes(m)&&!_&&!S&&O&&(m=$s(f));let E=d;if(p.includes(m)&&(E=d.filter(H=>H.type==="word"),E.length||(E=i.word.length?i.word:d)),f.includes(m)&&(E=d.filter(H=>H.type==="kanji"||H.type==="n2"),!E.length)){let H=[...i.kanji,...i.n2];E=H.length?H:d}let R=E.map(H=>{let B=t.wrong[Co(H)]||0;return 1+(c&&B>0?Math.min(12,B*3):B>0?Math.min(4,B):0)}),z=Ao(R),M=z===null?$s(E):E[z],y={mode:m,correct:M},L=[...i.kanji,...i.n2];if(m==="rm_mc"||m==="jp_mc"){let H=M.hira.length,B=M.type==="kana",j=B?i.kana.filter(Ae=>Ae.hira.length===H):i.word,K=B?i.kana:[...i.word,...i.kana],q=j.filter(Ae=>Ae.rm!==M.rm);q.length<3&&(q=K.filter(Ae=>Ae.rm!==M.rm));let ee=M.hira[0],U=Ae=>{let Ke=0,Y=Math.abs(Ae.hira.length-H);return Y===0?Ke+=10:Y===1&&(Ke+=5),Ae.hira[0]===ee&&(Ke+=8),Ke},Z=q.map(Ae=>({item:Ae,score:U(Ae)}));Z.sort((Ae,Ke)=>Ke.score-Ae.score);let re=Ws(Z,3,Ae=>Ae.item.rm),ve=Yn([M,...re]);y.choices=ve,y.correctIndex=ve.findIndex(Ae=>Ae.rm===M.rm)}if(m==="rm_mean"){let H=i.word.filter(U=>U.rm!==M.rm),B=(M.meaning||"").length,j=U=>{let Z=0,re=Math.abs((U.meaning||"").length-B);return re===0?Z+=10:re===1&&(Z+=5),Z},K=H.map(U=>({item:U,score:j(U)}));K.sort((U,Z)=>Z.score-U.score);let q=Ws(K,3,U=>U.item.rm),ee=Yn([M,...q]);y.choices=ee,y.correctIndex=ee.findIndex(U=>U.rm===M.rm)}if(m==="mean_rm"){let H=i.word.filter(Z=>Z.rm!==M.rm),B=M.hira.length,j=M.hira[0],K=Z=>{let re=0,ve=Math.abs(Z.hira.length-B);return ve===0?re+=10:ve===1&&(re+=5),Z.hira[0]===j&&(re+=8),re},q=H.map(Z=>({item:Z,score:K(Z)}));q.sort((Z,re)=>re.score-Z.score);let ee=Ws(q,3,Z=>Z.item.rm),U=Yn([M,...ee]);y.choices=U,y.correctIndex=U.findIndex(Z=>Z.rm===M.rm)}if(m==="kanji_read"){let H=L.filter(Z=>Z.rm!==M.rm&&Z.hira!==M.hira),B=M.hira.length,j=M.hira[0],K=Z=>{let re=0,ve=Math.abs(Z.hira.length-B);return ve===0?re+=10:ve===1&&(re+=5),Z.hira[0]===j&&(re+=8),re},q=H.map(Z=>({item:Z,score:K(Z)}));q.sort((Z,re)=>re.score-Z.score);let ee=Ws(q,3,Z=>Z.item.hira),U=Yn([M,...ee]);y.choices=U,y.correctIndex=U.findIndex(Z=>Z.rm===M.rm)}if(m==="read_kanji"){let H=L.filter(U=>U.rm!==M.rm&&U.kanji!==M.kanji),B=M.kanji.length,j=U=>{let Z=0,re=Math.abs(U.kanji.length-B);return re===0?Z+=10:re===1&&(Z+=5),Z},K=H.map(U=>({item:U,score:j(U)}));K.sort((U,Z)=>Z.score-U.score);let q=Ws(K,3,U=>U.item.kanji),ee=Yn([M,...q]);y.choices=ee,y.correctIndex=ee.findIndex(U=>U.rm===M.rm)}if(m==="kanji_mean"){let H=L.filter(U=>U.rm!==M.rm&&U.meaning!==M.meaning),B=(M.meaning||"").length,j=U=>{let Z=0,re=Math.abs((U.meaning||"").length-B);return re===0?Z+=10:re===1&&(Z+=5),Z},K=H.map(U=>({item:U,score:j(U)}));K.sort((U,Z)=>Z.score-U.score);let q=Ws(K,3,U=>U.item.meaning),ee=Yn([M,...q]);y.choices=ee,y.correctIndex=ee.findIndex(U=>U.rm===M.rm)}return y}function pf(n,e){n.session=uf(n.daily.rounds||0,e)||{active:!0,size:e,done:0,ok:0,ng:0,round:(n.daily.rounds||0)+1}}function Lr(n,e,t){let i=cf(n,t);if(i){if(n.daily.total=i.daily.total,n.daily.ok=i.daily.ok,n.daily.ng=i.daily.ng,n.daily.streak=i.daily.streak,n.session.active=i.session.active,n.session.done=i.session.done,n.session.ok=i.session.ok,n.session.ng=i.session.ng,n.session.round=i.session.round,!t){let s=Co(e.correct);n.wrong[s]=(n.wrong[s]||0)+1}return i.finished&&(n.daily.rounds=n.session.round),{finished:i.finished}}if(n.daily.total++,t?(n.daily.ok++,n.daily.streak++):(n.daily.ng++,n.daily.streak=0),n.session.active&&(n.session.done++,t?n.session.ok++:n.session.ng++),!t){let s=Co(e.correct);n.wrong[s]=(n.wrong[s]||0)+1}return n.session.active&&n.session.done>=n.session.size?(n.session.active=!1,n.daily.rounds=n.session.round,{finished:!0}):{finished:!1}}var Po={"zh-CN":{title:"\u65E5\u672C\u8BED\u540C\u5B66\u4F1A",subtitle:"\u9009\u62E9\u7EC3\u4E60\u6A21\u5757",mod_kana:"50\u97F3\u57FA\u7840",mod_kana_desc:"\u6E05\u97F3\u30FB\u6D4A\u97F3\u30FB\u62D7\u97F3",mod_word:"\u65E5\u5E38\u77ED\u8BCD",mod_word_desc:"\u8BCD\u6C47\u30FB\u540C\u8FD1\u53CD\u4E49\u8BCD",mod_games_icon:"\u6E38",mod_games:"\u6E38\u620F",mod_games_desc:"\u6D88\u9664\u30FB\u4FEE\u884C",games_title:"\u9009\u62E9\u6E38\u620F",mod_word_match_icon:"\u6D88",mod_word_match:"\u77ED\u8BCD\u6D88\u9664",mod_word_match_desc:"3\u5BF9\u6301\u7EED\u6D88\u9664",mod_cultivate_game:"\u65E5\u8BED\u4FEE\u884C",mod_cultivate_game_desc:"\u4FEE\u70BC\u30FB\u88C5\u5907\u30FB\u6311\u6218",mod_blade_game:"\u77ED\u8BCD\u5200\u738B",mod_blade_game_desc:"\u65CB\u8F6C\u98DE\u5200\u30FB\u78B0\u5BF9\u8BCD",blade_new:"\u91CD\u5F00",blade_score:"\u5F97\u5206",blade_knives:"\u98DE\u5200",blade_level:"\u7B49\u7EA7",blade_time:"\u65F6\u95F4",blade_help:"\u62D6\u52A8\u79FB\u52A8\u3002\u5934\u9876\u4F1A\u51FA\u77ED\u8BCD\uFF0C\u649E\u5230\u5BF9\u5E94\u7B54\u6848\u624D\u80FD\u51FB\u8D25\u76EE\u6807\u5E76\u589E\u52A0\u98DE\u5200\uFF1B\u649E\u9519\u4F1A\u6389\u5200\u3002",cultivate_title:"\u65E5\u8BED\u4FEE\u884C",cultivate_reset:"\u91CD\u7F6E",cultivate_train:"\u4FEE\u70BC\u4E00\u6B21",cultivate_challenge:"\u6311\u6218\u8BCD\u5996",cultivate_power:"\u6218\u529B",cultivate_jade:"\u7075\u7389",cultivate_stage:"\u5173\u5361",cultivate_equipment:"\u88C5\u5907",cultivate_current_equip:"\u5F53\u524D\u88C5\u5907",cultivate_new_drop:"\u65B0\u6389\u843D",cultivate_wear:"\u7A7F\u6234",cultivate_battle:"\u8BCD\u5996\u6311\u6218",cultivate_insight:"\u609F\u9053\u95EE\u7B54",cultivate_insight_empty:"\u4FEE\u70BC\u540E\u4F1A\u51FA\u73B0\u609F\u9053\u9898\u3002",cultivate_q_meaning:"\u9009\u62E9\u610F\u601D",cultivate_q_reading:"\u9009\u62E9\u8BFB\u97F3",cultivate_reset_confirm:"\u786E\u5B9A\u91CD\u7F6E\u65E5\u8BED\u4FEE\u884C\u8FDB\u5EA6\uFF1F",cultivate_enemy_name:"\u7B2C{0}\u5173 \u8BCD\u5996",cultivate_realm_0:"\u5047\u540D\u5C0F\u5996",cultivate_realm_1:"\u4E94\u5341\u97F3\u7AE5\u5B50",cultivate_realm_2:"N5\u4FEE\u58EB",cultivate_realm_3:"N4\u6CD5\u5E08",cultivate_realm_4:"N3\u771F\u4EBA",cultivate_realm_5:"N2\u5B97\u5E08",cultivate_realm_6:"N1\u5927\u80FD",cultivate_realm_7:"\u65E5\u672C\u8BED\u5927\u5E08",cultivate_q_normal:"\u666E\u901A",cultivate_q_rare:"\u7A00\u6709",cultivate_q_epic:"\u53F2\u8BD7",cultivate_q_legend:"\u4F20\u8BF4",cultivate_stat_vocab:"\u8BED\u6C47",cultivate_stat_listen:"\u542C\u529B",cultivate_stat_combo:"\u8FDE\u51FB",cultivate_stat_focus:"\u4E13\u6CE8",cultivate_kanji:"\u6C49\u5B57",cultivate_setup_title:"\u4FEE\u884C\u5185\u5BB9",cultivate_setup_sub:"\u8FDB\u5165\u524D\u9009\u62E9\u4F1A\u51FA\u73B0\u7684\u9898\u76EE\u7C7B\u578B\uFF0C\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u3002",cultivate_start:"\u5F00\u59CB\u4FEE\u884C",cultivate_select_one_script:"\u81F3\u5C11\u9009\u62E9\u5E73\u5047\u540D\u3001\u7247\u5047\u540D\u3001\u6C49\u5B57\u4E2D\u7684\u4E00\u4E2A\u3002",cultivate_log_start:"\u5F00\u59CB\u4FEE\u884C\u3002\u70B9\u51FB\u4FEE\u70BC\u83B7\u5F97\u7ECF\u9A8C\u3001\u7075\u7389\u548C\u88C5\u5907\u3002",cultivate_log_train:"\u4FEE\u70BC +{0}\u7ECF\u9A8C +{1}\u7075\u7389\uFF0C\u83B7\u5F97{3}\u88C5\u5907\u300C{2}\u300D\u3002",cultivate_log_equip:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\u3002",cultivate_log_replace:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\uFF0C\u66FF\u6362\u300C{1}\u300D\u3002",cultivate_log_realm_up:"\u5883\u754C\u7A81\u7834\uFF1A{0}\uFF01",cultivate_log_win:"\u6311\u6218\u80DC\u5229\uFF01+{0}\u7ECF\u9A8C +{1}\u7075\u7389\u3002",cultivate_log_lose:"\u6311\u6218\u5931\u8D25\uFF0C\u4F46\u83B7\u5F97 +{0}\u7ECF\u9A8C\u3002",cultivate_log_insight_ok:"\u609F\u9053\u6210\u529F\uFF01+{0}\u7ECF\u9A8C +{1}\u7075\u7389\uFF0C\u88C5\u5907\u6218\u529B+2\u3002",cultivate_log_insight_ng:"\u609F\u9053\u5931\u8D25\u3002\u6B63\u786E\u7B54\u6848\uFF1A{0}\u3002",cultivate_log_finish_current:"\u5148\u5B8C\u6210\u5F53\u524D\u609F\u9053/\u6311\u6218\uFF0C\u518D\u8FDB\u884C\u4E0B\u4E00\u6B65\u3002",cultivate_train_style_vocab:"\u8BED\u6C47\u4FEE\u70BC",cultivate_train_style_listen:"\u542C\u529B\u4FEE\u70BC",cultivate_train_style_focus:"\u4E13\u6CE8\u51A5\u60F3",cultivate_log_train_start:"\u5F00\u59CB{0}\uFF1A\u5B8C\u6210\u609F\u9053\u53EF\u83B7\u5F97\u57FA\u7840 +{1}\u7ECF\u9A8C +{2}\u7075\u7389\uFF0C\u5E76\u51B3\u5B9A\u88C5\u5907\u54C1\u8D28\u3002",cultivate_train_question:"\u4FEE\u70BC\u609F\u9053",cultivate_train_question_desc:"{0}\u8FDB\u884C\u4E2D",cultivate_battle_question:"\u8BCD\u5996\u653B\u9632",cultivate_battle_question_desc:"\u6211\u65B9{0} vs \u8BCD\u5996{1}",cultivate_log_train_success:"\u4FEE\u70BC\u6210\u529F\uFF01+{0}\u7ECF\u9A8C +{1}\u7075\u7389\uFF0C\u83B7\u5F97{3}\u88C5\u5907\u300C{2}\u300D\u3002",cultivate_log_train_fail:"\u4FEE\u70BC\u8D70\u706B\u3002\u6B63\u786E\u7B54\u6848\uFF1A{0}\u3002\u4ECD\u83B7\u5F97 +{1}\u7ECF\u9A8C +{2}\u7075\u7389\u3002",cultivate_log_battle_start:"\u8BCD\u5996\u73B0\u8EAB\uFF01\u6211\u65B9\u6218\u529B{0}\uFF0C\u8BCD\u5996\u6218\u529B{1}\u3002\u7B54\u5BF9\u624D\u80FD\u51FA\u62DB\u3002",cultivate_log_battle_win:"\u7834\u62DB\u6210\u529F\uFF01\u6700\u7EC8\u6218\u529B{0}/{1}\uFF0C\u6311\u6218\u80DC\u5229\uFF01+{2}\u7ECF\u9A8C +{3}\u7075\u7389\u3002",cultivate_log_battle_not_enough:"\u7B54\u5BF9\u4F46\u6218\u529B\u4E0D\u8DB3\uFF1A{0}/{1}\u3002\u83B7\u5F97 +{2}\u7ECF\u9A8C\uFF0C\u5148\u4FEE\u70BC\u6216\u6362\u88C5\u5907\u3002",cultivate_log_battle_lose:"\u88AB\u8BCD\u5996\u8BC6\u7834\u3002\u6B63\u786E\u7B54\u6848\uFF1A{0}\u3002\u83B7\u5F97 +{1}\u7ECF\u9A8C\u3002",mod_kanji:"\u6C49\u5B57\u77ED\u8BCD",mod_kanji_desc:"\u6C49\u5B57\u8BFB\u5199\u8BAD\u7EC3",mod_n2:"\u65E5\u672C\u8BED\u6D4B\u8BD5",mod_n2_desc:"N1-N5 \u6A21\u62DF\u7EC3\u4E60",mod_grammar:"\u8BED\u6CD5\u5B66\u4E60",mod_grammar_icon:"\u8BED\u6CD5",mod_grammar_desc:"\u52A8\u8BCD\u5206\u7EC4\u30FB\u53E5\u578B",mod_sentence:"800\u53E5\u5E38\u7528\u53E5",mod_sentence_icon:"800",mod_sentence_desc:"\u5E38\u7528\u53E5\u5F0F\u30FB\u53D1\u97F3\u5B66\u4E60",mod_songs:"\u65E5\u6587\u6B4C\u66F2",mod_songs_icon:"\u6B4C",mod_songs_desc:"\u672C\u5730\u6B4C\u8BCD\u30FB\u9010\u884C\u5B66\u4E60",songs_title:"\u65E5\u6587\u6B4C\u66F2",songs_intro_title:"\u672C\u5730\u6B4C\u8BCD\u5B66\u4E60",songs_intro:"\u9009\u62E9\u6B4C\u66F2\u540E\u7C98\u8D34\u4F60\u81EA\u5DF1\u7684\u65E5\u6587\u6B4C\u8BCD\uFF0C\u5185\u5BB9\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF1B\u6BCF\u884C\u4F1A\u81EA\u52A8\u6807\u8BFB\u97F3\u5E76\u53EF\u5355\u72EC\u64AD\u653E\u3002",song_close:"\u6536\u8D77",song_local_notice:"\u4E0D\u4F1A\u5185\u7F6E\u6216\u4E0A\u4F20\u5B8C\u6574\u6B4C\u8BCD\uFF1B\u4F60\u7C98\u8D34\u7684\u6B4C\u8BCD\u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u672C\u5730\u3002",song_paste_label:"\u7C98\u8D34\u65E5\u6587\u6B4C\u8BCD",song_paste_placeholder:"\u6BCF\u884C\u4E00\u53E5\u65E5\u6587\u6B4C\u8BCD\u3002\u53EF\u9009\uFF1A\u65E5\u6587\u6B4C\u8BCD<Tab>\u81EA\u5DF1\u7684\u89E3\u91CA\u3002",song_save:"\u4FDD\u5B58\u5E76\u751F\u6210\u8BFB\u97F3",song_clear:"\u6E05\u7A7A\u672C\u6B4C\u6B4C\u8BCD",song_clear_confirm:"\u786E\u5B9A\u6E05\u7A7A\u8FD9\u9996\u6B4C\u5728\u672C\u673A\u4FDD\u5B58\u7684\u6B4C\u8BCD\uFF1F",song_no_lyrics:"\u8FD8\u6CA1\u6709\u6B4C\u8BCD\u3002\u8BF7\u7C98\u8D34\u4F60\u81EA\u5DF1\u62E5\u6709\u7684\u65E5\u6587\u6B4C\u8BCD\u540E\u4FDD\u5B58\u3002",song_line_play:"\u64AD\u653E\u8FD9\u4E00\u884C",song_lines_count:"{0} \u884C",song_not_added:"\u672A\u6DFB\u52A0",song_reading_label:"\u8BFB\u97F3\uFF1A",song_translation_label:"\u7FFB\u8BD1/\u89E3\u91CA\uFF1A",grammar_practice_btn:"\u5F00\u59CB\u7EC3\u4E60",grammar_practice_title:"\u7EC3\u4E60",gp_submit:"\u63D0\u4EA4",gp_right:"\u6B63\u786E\uFF1A",gp_answer:"\u7B54\u6848\uFF1A",gp_wrong:"\u9519\u4E86\u3002",gp_again:"\u518D\u6765\u4E00\u6B21",gp_summary_sub:"\u5171 {0} \u9898 \xB7 \u6B63\u786E {1} \xB7 \u9519\u8BEF {2}",gp_summary_time:"\u7528\u65F6 ",jlpt_level_label:"\u7B49\u7EA7",jlpt_mode_label:"\u5B66\u4E60\u65B9\u5F0F",jlpt_mode_quiz:"\u6D4B\u8BD5\u6A21\u5F0F",jlpt_mode_study:"\u7B54\u6848\u5B66\u4E60",jlpt_mode_progressive:"\u5FAA\u5E8F\u5B66\u4E60",jlpt_study_answer:"\u5B66\u4E60\uFF1A",jlpt_study_done:"\u5DF2\u5B66\u4E60 {0} \u9898",jlpt_progress_badge:"\u5B66\u4E60\u8FDB\u5EA6 {0} / {1}",jlpt_reset_progress:"\u91CD\u7F6E\u5B66\u4E60\u8FDB\u5EA6",sentence_mode_label:"\u5B66\u4E60\u65B9\u5F0F",sentence_mode_progressive:"\u5FAA\u5E8F\u5B66\u4E60",sentence_mode_study:"\u968F\u673A\u5B66\u4E60",sentence_mode_quiz_jp_zh:"\u65E5\u6587\u2192\u9009\u4E2D\u6587",sentence_mode_quiz_zh_jp:"\u4E2D\u6587\u2192\u9009\u65E5\u6587",sentence_reset_progress:"\u91CD\u7F6E800\u53E5\u8FDB\u5EA6",sentence_progress_badge:"800\u53E5\u8FDB\u5EA6 {0} / {1}",sentence_pattern_label:"\u53E5\u5F0F\uFF1A",sentence_level_label:"\u7B49\u7EA7\uFF1A",sentence_translation_label:"\u8BD1\u6587\uFF1A",sentence_note_label:"\u8BF4\u660E\uFF1A",sentence_note_generic:"\u5B66\u4E60\u91CD\u70B9\uFF1A\u672C\u53E5\u7684\u5173\u952E\u8868\u8FBE\u662F\u300C{0}\u300D\u3002\u8BF7\u7ED3\u5408\u8BD1\u6587\u7406\u89E3\u6574\u53E5\uFF0C\u5E76\u6CE8\u610F\u5B83\u524D\u540E\u7684\u63A5\u7EED\u3002",sentence_why_not_label:"\u4E3A\u4EC0\u4E48\u4E0D\u7528\u5176\u4ED6\u5F62\u5F0F\uFF1A",sentence_quiz_jp_zh:"\u9009\u62E9\u8FD9\u53E5\u65E5\u6587\u7684\u4E2D\u6587\u610F\u601D",sentence_quiz_zh_jp:"\u9009\u62E9\u8FD9\u53E5\u4E2D\u6587\u5BF9\u5E94\u7684\u65E5\u6587",sentence_study_answer:"\u5B66\u4E60\uFF1A",sentence_study_done:"\u5DF2\u5B66\u4E60 {0} \u53E5",no_questions:"\u6CA1\u6709\u53EF\u7528\u9898\u76EE",n2_cat_label:"\u9898\u76EE\u7C7B\u578B\uFF08\u53EF\u591A\u9009\uFF09",n2_kanji_reading:"\u6C49\u5B57\u8BFB\u97F3",n2_orthography:"\u6C49\u5B57\u5199\u6CD5",n2_context_vocab:"\u8BED\u5883\u8BCD\u6C47",n2_paraphrase:"\u8FD1\u4E49\u66FF\u6362",n2_usage:"\u7528\u6CD5",n2_grammar:"\u8BED\u6CD5",n2_q_reading:"\u4E0B\u5212\u7EBF\u8BCD\u7684\u8BFB\u97F3\u662F\uFF1F",n2_q_ortho:"\u4E0B\u5212\u7EBF\u8BCD\u7684\u6C49\u5B57\u5199\u6CD5\u662F\uFF1F",n2_q_context:"\u9009\u62E9\u6700\u5408\u9002\u7684\u8BCD\u586B\u5165\u62EC\u53F7",n2_q_para:"\u4E0B\u5212\u7EBF\u8BCD\u7684\u8FD1\u4E49\u8868\u8FBE\u662F\uFF1F",n2_q_usage:"\u54EA\u4E2A\u53E5\u5B50\u7528\u6CD5\u6B63\u786E\uFF1F",n2_q_grammar:"\u9009\u62E9\u6700\u5408\u9002\u7684\u8BED\u6CD5\u586B\u5165\u7A7A\u683C",content_label:"\u5185\u5BB9\uFF08\u53EF\u591A\u9009\uFF09",content_kana:"50\u97F3",content_word:"\u65E5\u5E38\u77ED\u8BCD",content_kanji:"\u6C49\u5B57\u77ED\u8BCD",content_wrong:"\u9519\u9898\u4F18\u5148",group_kana_title:"50\u97F3\u8BBE\u7F6E",group_word_title:"\u65E5\u5E38\u77ED\u8BCD\u8BBE\u7F6E",group_kanji_title:"\u6C49\u5B57\u77ED\u8BCD\u8BBE\u7F6E",mode_type:"\u9898\u578B",set_label:"\u96C6\u5408",kana_mode_label:"\u5047\u540D\u6A21\u5F0F",session_size_label:"\u672C\u6B21\u9898\u6570",other_options:"\u5176\u4ED6\u9009\u9879",kana_hira:"\u5E73\u5047\u540D",kana_kata:"\u7247\u5047\u540D",mode_rm_mc:"\u7F57\u9A6C\u97F3\u2192\u9009\u5047\u540D",mode_jp_mc:"\u5047\u540D\u2192\u9009\u7F57\u9A6C\u97F3",mode_rm_in:"\u7F57\u9A6C\u97F3\u8F93\u5165",mode_jp_in:"\u5047\u540D\u8F93\u5165",mode_rm_mean:"\u8BFB\u97F3\u2192\u9009\u610F\u601D",mode_mean_rm:"\u610F\u601D\u2192\u9009\u8BFB\u97F3",word_relation_label:"\u8BCD\u4E49\u5173\u7CFB",mode_word_synonym:"\u540C\u4E49\u8BCD",mode_word_near:"\u8FD1\u4E49\u8BCD",mode_word_antonym:"\u53CD\u4E49\u8BCD",mode_kanji_read:"\u6C49\u5B57\u2192\u9009\u8BFB\u97F3",mode_read_kanji:"\u8BFB\u97F3\u2192\u9009\u6C49\u5B57",mode_kanji_mean:"\u6C49\u5B57\u2192\u9009\u610F\u601D",set_seion:"\u6E05\u97F3",set_dakuon:"\u6D4A\u97F3",set_handakuon:"\u534A\u6D4A\u97F3",set_yoon:"\u62D7\u97F3",start_btn:"\u5F00\u59CB\u7EC3\u4E60",word_match_new:"\u6362\u4E00\u5C40",word_match_invite:"\u9080\u8BF7\u597D\u53CB",word_match_guide_btn:"\u65B0\u624B\u6559\u5B66",word_match_setup_title:"\u5F00\u59CB\u524D\u8BBE\u7F6E",word_match_kana_label:"\u5DE6\u8FB9\u5047\u540D\u663E\u793A",word_match_hira:"\u5E73\u5047\u540D",word_match_kata:"\u7247\u5047\u540D",word_match_difficulty:"\u96BE\u5EA6",word_match_easy:"\u5BB9\u6613\uFF1A\u4ECE1\u5217\xD73\u884C\u5F00\u59CB",word_match_medium:"\u4E2D\u7B49\uFF1A\u4ECE2\u5217\xD73\u884C\u5F00\u59CB",word_match_hard:"\u96BE\uFF1A\u4ECE3\u5217\xD73\u884C\u5F00\u59CB",word_match_start_game:"\u5F00\u59CB\u6E38\u620F",word_match_select_one_kana:"\u81F3\u5C11\u9009\u62E9\u4E00\u79CD\u5047\u540D\u3002",word_match_guide_level:"\u65B0\u624B\u6559\u5B66",word_match_guide_title:"\u77ED\u8BCD\u6D88\u9664\u65B0\u624B\u6559\u5B66",word_match_guide_prompt_0:"\u5148\u70B9\u5DE6\u8FB9\u53D1\u5149\u7684\u5047\u540D\uFF1A\u306D\u3053\u3002",word_match_guide_prompt_1:"\u518D\u70B9\u53F3\u8FB9\u5BF9\u5E94\u7684\u6C49\u5B57\uFF1A\u732B\u3002",word_match_guide_prompt_2:"\u7B2C1\u5BF9\u4F1A\u5148\u88AB\u5708\u4F4F\uFF0C\u4E0D\u9A6C\u4E0A\u6D88\u9664\uFF1B\u7EE7\u7EED\u70B9\u4E0B\u4E00\u5BF9\u5047\u540D\u3002",word_match_guide_prompt_3:"\u9009\u4E2D\u540E\uFF0C\u518D\u70B9\u5BF9\u5E94\u6C49\u5B57\uFF1A\u6C34\u3002",word_match_guide_prompt_4:"\u73B0\u5728\u67092\u5BF9\u88AB\u5708\u4F4F\uFF0C\u989C\u8272\u53D8\u4E86\uFF0C\u8FDE\u9501\u500D\u7387\u63D0\u9AD8\u3002\u70B9\u53D1\u5149\u7684\u201C\u4E0B\u4E00\u6B65\u201D\u6F14\u793A\u65F6\u95F4\u53D8\u5C11\u3002",word_match_guide_prompt_5:"\u65F6\u95F4\u8D8A\u5C11\uFF0C\u5708\u4F4F\u7684\u8BCD\u5757\u4F1A\u52A8\u5F97\u8D8A\u5FEB\u3002\u7EE7\u7EED\u70B9\u201C\u4E0B\u4E00\u6B65\u201D\u770B\u7ED3\u7B97\u3002",word_match_guide_prompt_6:"\u8FDE\u9501\u7ED3\u675F\u540E\uFF0C\u6240\u6709\u5708\u4F4F\u7684\u8BCD\u5757\u4E00\u8D77\u7206\u70B8\u6D88\u9664\u5E76\u6389\u843D\u8865\u4F4D\u3002",word_match_guide_prompt_7:"\u73B0\u5728\u6F14\u793A\u9009\u9519\uFF1A\u5148\u70B9\u53D1\u5149\u7684 \u3084\u307E\u3002",word_match_guide_prompt_7b:"\u518D\u6545\u610F\u70B9\u9519\u8BEF\u7684 \u6C34\uFF0C\u770B\u6263\u5FC3\u53CD\u9988\u3002",word_match_guide_prompt_7c:"\u9009\u9519\u4F1A\u9707\u52A8\u5E76\u6263\u4E00\u9897\u5FC3\u3002\u70B9\u4E0B\u4E00\u6B65\u7EE7\u7EED\u9053\u5177\u3002",word_match_guide_prompt_8:"\u65B0\u624B\u6559\u5B66\uFF1A\u73B0\u5728\u70B9\u53D1\u5149\u7684\u70B8\u5F39\u3002",word_match_guide_prompt_8_pick:"\u70B8\u5F39\u5DF2\u9009\u4E2D\u3002\u73B0\u5728\u70B9\u53D1\u5149\u7684\u4E2D\u5FC3\u5757\uFF0C\u50CF\u6B63\u5F0F\u6E38\u620F\u4E00\u6837\u9009\u62E9\u7206\u70B8\u70B9\u3002",word_match_guide_prompt_8b:"\u70B8\u5F39\u4F1A\u7206\u70B8\u6D88\u9664\u4E00\u7247\u3002\u70B9\u4E0B\u4E00\u6B65\u6F14\u793A\u653E\u5927\u955C\u3002",word_match_guide_prompt_8c:"\u73B0\u5728\u70B9\u53D1\u5149\u7684\u653E\u5927\u955C\u3002",word_match_guide_prompt_8d:"\u653E\u5927\u955C\u4F1A\u628A3\u7EC4\u914D\u5BF9\u6807\u6210 \u2460\u2461\u2462\uFF1A\u540C\u6570\u5B57\u540C\u989C\u8272\u5C31\u662F\u4E00\u7EC4\uFF0C\u6301\u7EED5\u79D2\u3002\u70B9\u4E0B\u4E00\u6B65\u5F00\u59CB\u6B63\u5F0F\u6E38\u620F\u3002",word_match_guide_prompt_9:"\u73B0\u5728\u8FDB\u5165\u6B63\u5F0F\u6E38\u620F\u3002",word_match_guide_tool_prompt:"\u9053\u5177\u7A0D\u540E\u4F1A\u4EAE\u8D77\u3002",word_match_guide_next:"\u4E0B\u4E00\u6B65",word_match_guide_basic:"\u5DE6\u8FB9\u662F\u5047\u540D\u8BFB\u97F3\uFF0C\u53F3\u8FB9\u662F\u5BF9\u5E94\u6C49\u5B57/\u8BCD\u4E49\uFF1B\u70B9\u4E00\u5DE6\u4E00\u53F3\uFF0C\u914D\u5BF9\u6B63\u786E\u5C31\u5148\u5708\u4F4F\u3002",word_match_guide_chain:"\u7B2C1\u5BF9\u67098\u79D2\u7EE7\u7EED\u627E\u4E0B\u4E00\u5BF9\uFF1B\u6BCF\u591A\u4E00\u5BF9\u65F6\u95F4\u5C110.5\u79D2\u3002\u5708\u4F4F\u7684\u5757\u4F1A\u8D8A\u52A8\u8D8A\u5FEB\uFF0C\u8D85\u65F6\u540E\u4E00\u8D77\u6D88\u9664\u5E76\u9AD8\u500D\u7387\u7ED3\u7B97\u3002",word_match_guide_wrong:"\u9009\u9519\u4F1A\u4E2D\u65AD\u5F53\u524D\u8FDE\u9501\u5E76\u6263\u4E00\u9897\u5FC3\uFF1B5\u9897\u5FC3\u6263\u5B8C\u5C31 GAME OVER\u3002",word_match_guide_tools:"\u70B8\u5F39\u70B9\u4E2D\u5FC3\u70B83\xD73\uFF1B\u653E\u5927\u955C\u4F1A\u75283\u79CD\u989C\u8272\u63D0\u793A3\u7EC4\u914D\u5BF9\uFF0C\u6301\u7EED5\u79D2\u3002",word_match_guide_score:"\u5206\u6570\u6309\u8BCD\u957F\u3001\u5E38\u7528\u5EA6\u3001Combo\u3001\u500D\u7387\u548C\u8FDE\u9501\u6570\u91CF\u8BA1\u7B97\uFF1B5\u5206\u949F\u5185\u5C3D\u91CF\u51B2\u9AD8\u5206\u3002",word_match_guide_start:"\u77E5\u9053\u4E86\uFF0C\u5F00\u59CB",word_match_goal:"\u5173\u5361",word_match_level_label:"\u7B2C{0}\u5173 {1}\u5217\xD7{2}\u5C42",word_match_level_clear:"\u7B2C{0}\u5173\u901A\u8FC7\uFF01",word_match_level_clear_hint:"\u8FC7\u5173\uFF01\u51C6\u5907\u4E0B\u4E00\u5173\u2026\u2026",word_match_power:"\u500D\u7387",word_match_goal_pairs:"\u6D88\u9664{0}\u5BF9",word_match_goal_score:"\u5F97\u5206{0}",word_match_goal_combo:"\u8FDE\u51FB{0}",word_match_goal_done_bonus:"\u76EE\u6807\u5B8C\u6210 +15\u79D2 \u4E0B\u6B21\xD72",word_match_life_title:"\u5269\u4F59\u751F\u547D {0}/5",word_match_life_empty:"\u751F\u547D\u7528\u5B8C",word_match_bomb_hint:"\u{1F4A3} \u9009\u62E9\u4E2D\u5FC3\u5757\uFF0C\u70B8\u6389\u5468\u56F43\xD73",word_match_invite_title:"\u77ED\u8BCD\u6D88\u9664 - \u65E5\u6587\u914D\u5BF9\u6D88\u6D88\u4E50",word_match_invite_text:"\u6765\u6311\u6218\u8FD9\u4E2A\u65E5\u6587\u77ED\u8BCD\u914D\u5BF9\u6E38\u620F\uFF1A\u8FDE\u9501\u6D88\u9664\u3001\u9053\u5177\u3001\u5173\u5361\uFF0C\u4E00\u8FB9\u73A9\u4E00\u8FB9\u8BB0\u5355\u8BCD\uFF01",word_match_invite_copied:"\u6E38\u620F\u9080\u8BF7\u94FE\u63A5\u5DF2\u590D\u5236",word_match_music_toggle:"\u80CC\u666F\u97F3\u4E50",word_match_sfx_toggle:"\u6E38\u620F\u97F3\u6548",word_match_voice_toggle:"\u8BFB\u97F3\u8BED\u97F3",word_match_music_short:"\u97F3\u4E50",word_match_sfx_short:"\u97F3\u6548",word_match_voice_short:"\u8BFB\u97F3",word_match_special_seconds:"+{0}\u79D2",word_match_special_hint:"\u63D0\u793A",word_match_special_mult:"\u4E0B\u6B21\xD72",word_match_start:"\u5F00\u59CB",word_match_game_over:"GAME OVER",word_match_chain_tip:"\u7B2C1\u5BF9\u5708\u4F4F\u540E\uFF0C8\u79D2\u5185\u7EE7\u7EED\u914D\u5BF9\u53EF\u8FDE\u9501\u52A0\u500D",word_match_score:"\u5F97\u5206",word_match_best:"\u6700\u9AD8",word_match_time:"\u65F6\u95F4",word_match_timeup:"\u65F6\u95F4\u5230\uFF01",word_match_plus:"+",word_match_combo:"\u8FDE\u51FB",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"\u8BFB\u97F3",word_match_word:"\u6C49\u5B57",word_match_hint:"\u5DE6\u8FB9\u8BFB\u97F3\uFF0C\u53F3\u8FB9\u6C49\u5B57\u3002\u914D\u5BF9\u6B63\u786E\u4F1A\u5148\u5708\u4F4F\uFF0C\u7EE7\u7EED\u8FDE\u9501\u6216\u8D85\u65F6\u540E\u4E00\u8D77\u6D88\u9664\u3002",word_match_complete:"\u5B8C\u6210\uFF01\u5168\u90E8\u6D88\u9664\u3002",hide_meaning:"\u9690\u85CF\u4E2D\u6587\u91CA\u4E49",reset_settings:"\u590D\u4F4D\u8BBE\u7F6E",reset_today:"\u91CD\u7F6E\u4ECA\u65E5",clear_all:"\u6E05\u7A7A\u5168\u90E8",refresh_app:"\u5237\u65B0/\u66F4\u65B0",refreshing_app:"\u6B63\u5728\u5237\u65B0...",today_label:"\u4ECA\u65E5\uFF1A",today_unit:" \u9898",correct_label:"\u6B63\u786E\uFF1A",wrong_label:"\u9519\u8BEF\uFF1A",done_label:"\u5B8C\u6210\uFF1A",rounds_unit:" \u8F6E",round_prefix:"\u7B2C",round_suffix:"\u8F6E",btn_back:"\u9000\u51FA",btn_next:"\u4E0B\u4E00\u9898",btn_speak:"\u64AD\u653E\u53D1\u97F3",btn_speaking:"\u64AD\u653E\u4E2D",btn_check:"\u63D0\u4EA4",btn_answer:"\u7B54\u9898",btn_show:"\u663E\u793A\u7B54\u6848",btn_finish:"\u7ED3\u675F",q_what_meaning:" \u662F\u4EC0\u4E48\u610F\u601D\uFF1F",q_how_read_meaning:"\u300D\u600E\u4E48\u8BFB\uFF1F",q_how_read_meaning_pre:"\u300C",q_how_read:" \u600E\u4E48\u8BFB\uFF1F",q_kanji_of:" \u7684\u6C49\u5B57\u662F\uFF1F",q_kana_of:" \u7684\u5047\u540D\u662F\uFF1F",q_writing_of:" \u7684\u5199\u6CD5\u662F\uFF1F",q_word_synonym:" \u7684\u540C\u4E49\u8BCD\u662F\uFF1F",q_word_near:" \u7684\u8FD1\u4E49\u8BCD\u662F\uFF1F",q_word_antonym:" \u7684\u53CD\u4E49\u8BCD\u662F\uFF1F",rel_synonym:"\u540C\u4E49",rel_near:"\u8FD1\u4E49",rel_antonym:"\u53CD\u4E49",input_kana:"\u8F93\u5165\u5047\u540D",input_romaji:"\u8F93\u5165\u7F57\u9A6C\u97F3",input_placeholder:"\u8F93\u5165\u7B54\u6848",result_correct:"\u6B63\u786E\uFF1A",result_wrong:"\u9519\u4E86\u3002\u6B63\u786E\uFF1A",result_wrong2:"\u4E0D\u5BF9\u3002\u6B63\u786E\uFF1A",result_answer:"\u7B54\u6848\uFF1A",n2_original:"\u539F\u6587\uFF1A",n2_translation:"\u8BD1\u6587\uFF1A",meaning_label:"\u91CA\u4E49\uFF1A",meaning_hidden:"\u91CA\u4E49\uFF1A***",alert_reset_settings:"\u5DF2\u590D\u4F4D\u8BBE\u7F6E",alert_reset_today:"\u5DF2\u91CD\u7F6E\u4ECA\u65E5\u7EDF\u8BA1",alert_clear_all:"\u5DF2\u6E05\u7A7A\u5168\u90E8\u6570\u636E",alert_reset_jlpt_progress:"\u5DF2\u91CD\u7F6E JLPT \u5B66\u4E60\u8FDB\u5EA6",alert_reset_sentence_progress:"\u5DF2\u91CD\u7F6E 800 \u53E5\u5B66\u4E60\u8FDB\u5EA6",confirm_clear_all:"\u786E\u5B9A\u6E05\u7A7A\u5168\u90E8\u7EDF\u8BA1\u548C\u9519\u9898\u8BB0\u5F55\uFF1F",please_answer:"\u8BF7\u5148\u7B54\u9898\uFF01",please_input:"\u8BF7\u8F93\u5165\u7B54\u6848",ready:"\u51C6\u5907\u5F00\u59CB...",finish_done:"\u5B8C\u6210\uFF01\u7528\u65F6 ",finish_acc:"\uFF0C\u6B63\u786E\u7387 ",data_error:"\u52A0\u8F7D\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u786E\u4FDD\u901A\u8FC7 HTTP \u670D\u52A1\u5668\u8BBF\u95EE\uFF08\u5982 GitHub Pages \u6216\u672C\u5730\u670D\u52A1\u5668\uFF09"},"zh-TW":{title:"\u65E5\u672C\u8A9E\u540C\u5B78\u6703",subtitle:"\u9078\u64C7\u7DF4\u7FD2\u6A21\u7D44",mod_kana:"50\u97F3\u57FA\u790E",mod_kana_desc:"\u6E05\u97F3\u30FB\u6FC1\u97F3\u30FB\u62D7\u97F3",mod_word:"\u65E5\u5E38\u77ED\u8A5E",mod_word_desc:"\u8A5E\u5F59\u30FB\u540C\u8FD1\u53CD\u7FA9\u8A5E",mod_games_icon:"\u904A",mod_games:"\u904A\u6232",mod_games_desc:"\u6D88\u9664\u30FB\u4FEE\u884C",games_title:"\u9078\u64C7\u904A\u6232",mod_word_match_icon:"\u6D88",mod_word_match:"\u77ED\u8A5E\u6D88\u9664",mod_word_match_desc:"3\u5C0D\u6301\u7E8C\u6D88\u9664",mod_cultivate_game:"\u65E5\u8A9E\u4FEE\u884C",mod_cultivate_game_desc:"\u4FEE\u7149\u30FB\u88DD\u5099\u30FB\u6311\u6230",mod_blade_game:"\u77ED\u8A5E\u5200\u738B",mod_blade_game_desc:"\u65CB\u8F49\u98DB\u5200\u30FB\u78B0\u5C0D\u8A5E",blade_new:"\u91CD\u958B",blade_score:"\u5F97\u5206",blade_knives:"\u98DB\u5200",blade_level:"\u7B49\u7D1A",blade_time:"\u6642\u9593",blade_help:"\u62D6\u52D5\u79FB\u52D5\u3002\u982D\u9802\u6703\u51FA\u77ED\u8A5E\uFF0C\u649E\u5230\u5C0D\u61C9\u7B54\u6848\u624D\u80FD\u64CA\u6557\u76EE\u6A19\u4E26\u589E\u52A0\u98DB\u5200\uFF1B\u649E\u932F\u6703\u6389\u5200\u3002",cultivate_title:"\u65E5\u8A9E\u4FEE\u884C",cultivate_reset:"\u91CD\u7F6E",cultivate_train:"\u4FEE\u7149\u4E00\u6B21",cultivate_challenge:"\u6311\u6230\u8A5E\u5996",cultivate_power:"\u6230\u529B",cultivate_jade:"\u9748\u7389",cultivate_stage:"\u95DC\u5361",cultivate_equipment:"\u88DD\u5099",cultivate_current_equip:"\u76EE\u524D\u88DD\u5099",cultivate_new_drop:"\u65B0\u6389\u843D",cultivate_wear:"\u7A7F\u6234",cultivate_battle:"\u8A5E\u5996\u6311\u6230",cultivate_insight:"\u609F\u9053\u554F\u7B54",cultivate_insight_empty:"\u4FEE\u7149\u5F8C\u6703\u51FA\u73FE\u609F\u9053\u984C\u3002",cultivate_q_meaning:"\u9078\u64C7\u610F\u601D",cultivate_q_reading:"\u9078\u64C7\u8B80\u97F3",cultivate_reset_confirm:"\u78BA\u5B9A\u91CD\u7F6E\u65E5\u8A9E\u4FEE\u884C\u9032\u5EA6\uFF1F",cultivate_enemy_name:"\u7B2C{0}\u95DC \u8A5E\u5996",cultivate_realm_0:"\u5047\u540D\u5C0F\u5996",cultivate_realm_1:"\u4E94\u5341\u97F3\u7AE5\u5B50",cultivate_realm_2:"N5\u4FEE\u58EB",cultivate_realm_3:"N4\u6CD5\u5E2B",cultivate_realm_4:"N3\u771F\u4EBA",cultivate_realm_5:"N2\u5B97\u5E2B",cultivate_realm_6:"N1\u5927\u80FD",cultivate_realm_7:"\u65E5\u672C\u8A9E\u5927\u5E2B",cultivate_q_normal:"\u666E\u901A",cultivate_q_rare:"\u7A00\u6709",cultivate_q_epic:"\u53F2\u8A69",cultivate_q_legend:"\u50B3\u8AAA",cultivate_stat_vocab:"\u8A9E\u5F59",cultivate_stat_listen:"\u807D\u529B",cultivate_stat_combo:"\u9023\u64CA",cultivate_stat_focus:"\u5C08\u6CE8",cultivate_kanji:"\u6F22\u5B57",cultivate_setup_title:"\u4FEE\u884C\u5167\u5BB9",cultivate_setup_sub:"\u9032\u5165\u524D\u9078\u64C7\u6703\u51FA\u73FE\u7684\u984C\u76EE\u985E\u578B\uFF0C\u81F3\u5C11\u9078\u64C7\u4E00\u500B\u3002",cultivate_start:"\u958B\u59CB\u4FEE\u884C",cultivate_select_one_script:"\u81F3\u5C11\u9078\u64C7\u5E73\u5047\u540D\u3001\u7247\u5047\u540D\u3001\u6F22\u5B57\u4E2D\u7684\u4E00\u500B\u3002",cultivate_log_start:"\u958B\u59CB\u4FEE\u884C\u3002\u9EDE\u64CA\u4FEE\u7149\u7372\u5F97\u7D93\u9A57\u3001\u9748\u7389\u548C\u88DD\u5099\u3002",cultivate_log_train:"\u4FEE\u7149 +{0}\u7D93\u9A57 +{1}\u9748\u7389\uFF0C\u7372\u5F97{3}\u88DD\u5099\u300C{2}\u300D\u3002",cultivate_log_equip:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\u3002",cultivate_log_replace:"\u5DF2\u7A7F\u6234\u300C{0}\u300D\uFF0C\u66FF\u63DB\u300C{1}\u300D\u3002",cultivate_log_realm_up:"\u5883\u754C\u7A81\u7834\uFF1A{0}\uFF01",cultivate_log_win:"\u6311\u6230\u52DD\u5229\uFF01+{0}\u7D93\u9A57 +{1}\u9748\u7389\u3002",cultivate_log_lose:"\u6311\u6230\u5931\u6557\uFF0C\u4F46\u7372\u5F97 +{0}\u7D93\u9A57\u3002",cultivate_log_insight_ok:"\u609F\u9053\u6210\u529F\uFF01+{0}\u7D93\u9A57 +{1}\u9748\u7389\uFF0C\u88DD\u5099\u6230\u529B+2\u3002",cultivate_log_insight_ng:"\u609F\u9053\u5931\u6557\u3002\u6B63\u78BA\u7B54\u6848\uFF1A{0}\u3002",cultivate_log_finish_current:"\u5148\u5B8C\u6210\u76EE\u524D\u609F\u9053/\u6311\u6230\uFF0C\u518D\u9032\u884C\u4E0B\u4E00\u6B65\u3002",cultivate_train_style_vocab:"\u8A9E\u5F59\u4FEE\u7149",cultivate_train_style_listen:"\u807D\u529B\u4FEE\u7149",cultivate_train_style_focus:"\u5C08\u6CE8\u51A5\u60F3",cultivate_log_train_start:"\u958B\u59CB{0}\uFF1A\u5B8C\u6210\u609F\u9053\u53EF\u7372\u5F97\u57FA\u790E +{1}\u7D93\u9A57 +{2}\u9748\u7389\uFF0C\u4E26\u6C7A\u5B9A\u88DD\u5099\u54C1\u8CEA\u3002",cultivate_train_question:"\u4FEE\u7149\u609F\u9053",cultivate_train_question_desc:"{0}\u9032\u884C\u4E2D",cultivate_battle_question:"\u8A5E\u5996\u653B\u9632",cultivate_battle_question_desc:"\u6211\u65B9{0} vs \u8A5E\u5996{1}",cultivate_log_train_success:"\u4FEE\u7149\u6210\u529F\uFF01+{0}\u7D93\u9A57 +{1}\u9748\u7389\uFF0C\u7372\u5F97{3}\u88DD\u5099\u300C{2}\u300D\u3002",cultivate_log_train_fail:"\u4FEE\u7149\u8D70\u706B\u3002\u6B63\u78BA\u7B54\u6848\uFF1A{0}\u3002\u4ECD\u7372\u5F97 +{1}\u7D93\u9A57 +{2}\u9748\u7389\u3002",cultivate_log_battle_start:"\u8A5E\u5996\u73FE\u8EAB\uFF01\u6211\u65B9\u6230\u529B{0}\uFF0C\u8A5E\u5996\u6230\u529B{1}\u3002\u7B54\u5C0D\u624D\u80FD\u51FA\u62DB\u3002",cultivate_log_battle_win:"\u7834\u62DB\u6210\u529F\uFF01\u6700\u7D42\u6230\u529B{0}/{1}\uFF0C\u6311\u6230\u52DD\u5229\uFF01+{2}\u7D93\u9A57 +{3}\u9748\u7389\u3002",cultivate_log_battle_not_enough:"\u7B54\u5C0D\u4F46\u6230\u529B\u4E0D\u8DB3\uFF1A{0}/{1}\u3002\u7372\u5F97 +{2}\u7D93\u9A57\uFF0C\u5148\u4FEE\u7149\u6216\u63DB\u88DD\u5099\u3002",cultivate_log_battle_lose:"\u88AB\u8A5E\u5996\u8B58\u7834\u3002\u6B63\u78BA\u7B54\u6848\uFF1A{0}\u3002\u7372\u5F97 +{1}\u7D93\u9A57\u3002",mod_kanji:"\u6F22\u5B57\u77ED\u8A5E",mod_kanji_desc:"\u6F22\u5B57\u8B80\u5BEB\u8A13\u7DF4",mod_n2:"\u65E5\u672C\u8A9E\u6E2C\u8A66",mod_n2_desc:"N1-N5 \u6A21\u64EC\u7DF4\u7FD2",mod_grammar:"\u8A9E\u6CD5\u5B78\u7FD2",mod_grammar_icon:"\u8A9E\u6CD5",mod_grammar_desc:"\u52D5\u8A5E\u5206\u7D44\u30FB\u53E5\u578B",mod_sentence:"800\u53E5\u5E38\u7528\u53E5",mod_sentence_icon:"800",mod_sentence_desc:"\u5E38\u7528\u53E5\u578B\u30FB\u767C\u97F3\u5B78\u7FD2",mod_songs:"\u65E5\u6587\u6B4C\u66F2",mod_songs_icon:"\u6B4C",mod_songs_desc:"\u672C\u5730\u6B4C\u8A5E\u30FB\u9010\u884C\u5B78\u7FD2",songs_title:"\u65E5\u6587\u6B4C\u66F2",songs_intro_title:"\u672C\u5730\u6B4C\u8A5E\u5B78\u7FD2",songs_intro:"\u9078\u64C7\u6B4C\u66F2\u5F8C\u8CBC\u4E0A\u4F60\u81EA\u5DF1\u7684\u65E5\u6587\u6B4C\u8A5E\uFF0C\u5167\u5BB9\u53EA\u4FDD\u5B58\u5728\u672C\u6A5F\uFF1B\u6BCF\u884C\u6703\u81EA\u52D5\u6A19\u8B80\u97F3\u4E26\u53EF\u55AE\u7368\u64AD\u653E\u3002",song_close:"\u6536\u8D77",song_local_notice:"\u4E0D\u6703\u5167\u7F6E\u6216\u4E0A\u50B3\u5B8C\u6574\u6B4C\u8A5E\uFF1B\u4F60\u8CBC\u4E0A\u7684\u6B4C\u8A5E\u50C5\u4FDD\u5B58\u5728\u76EE\u524D\u700F\u89BD\u5668\u672C\u5730\u3002",song_paste_label:"\u8CBC\u4E0A\u65E5\u6587\u6B4C\u8A5E",song_paste_placeholder:"\u6BCF\u884C\u4E00\u53E5\u65E5\u6587\u6B4C\u8A5E\u3002\u53EF\u9078\uFF1A\u65E5\u6587\u6B4C\u8A5E<Tab>\u81EA\u5DF1\u7684\u89E3\u91CB\u3002",song_save:"\u4FDD\u5B58\u4E26\u751F\u6210\u8B80\u97F3",song_clear:"\u6E05\u7A7A\u672C\u6B4C\u6B4C\u8A5E",song_clear_confirm:"\u78BA\u5B9A\u6E05\u7A7A\u9019\u9996\u6B4C\u5728\u672C\u6A5F\u4FDD\u5B58\u7684\u6B4C\u8A5E\uFF1F",song_no_lyrics:"\u9084\u6C92\u6709\u6B4C\u8A5E\u3002\u8ACB\u8CBC\u4E0A\u4F60\u81EA\u5DF1\u64C1\u6709\u7684\u65E5\u6587\u6B4C\u8A5E\u5F8C\u4FDD\u5B58\u3002",song_line_play:"\u64AD\u653E\u9019\u4E00\u884C",song_lines_count:"{0} \u884C",song_not_added:"\u672A\u6DFB\u52A0",song_reading_label:"\u8B80\u97F3\uFF1A",song_translation_label:"\u7FFB\u8B6F/\u89E3\u91CB\uFF1A",grammar_practice_btn:"\u958B\u59CB\u7DF4\u7FD2",grammar_practice_title:"\u7DF4\u7FD2",gp_submit:"\u63D0\u4EA4",gp_right:"\u6B63\u78BA\uFF1A",gp_answer:"\u7B54\u6848\uFF1A",gp_wrong:"\u932F\u4E86\u3002",gp_again:"\u518D\u4F86\u4E00\u6B21",gp_summary_sub:"\u5171 {0} \u984C \xB7 \u6B63\u78BA {1} \xB7 \u932F\u8AA4 {2}",gp_summary_time:"\u7528\u6642 ",jlpt_level_label:"\u7B49\u7D1A",jlpt_mode_label:"\u5B78\u7FD2\u65B9\u5F0F",jlpt_mode_quiz:"\u6E2C\u8A66\u6A21\u5F0F",jlpt_mode_study:"\u7B54\u6848\u5B78\u7FD2",jlpt_mode_progressive:"\u5FAA\u5E8F\u5B78\u7FD2",jlpt_study_answer:"\u5B78\u7FD2\uFF1A",jlpt_study_done:"\u5DF2\u5B78\u7FD2 {0} \u984C",jlpt_progress_badge:"\u5B78\u7FD2\u9032\u5EA6 {0} / {1}",jlpt_reset_progress:"\u91CD\u7F6E\u5B78\u7FD2\u9032\u5EA6",sentence_mode_label:"\u5B78\u7FD2\u65B9\u5F0F",sentence_mode_progressive:"\u5FAA\u5E8F\u5B78\u7FD2",sentence_mode_study:"\u96A8\u6A5F\u5B78\u7FD2",sentence_mode_quiz_jp_zh:"\u65E5\u6587\u2192\u9078\u4E2D\u6587",sentence_mode_quiz_zh_jp:"\u4E2D\u6587\u2192\u9078\u65E5\u6587",sentence_reset_progress:"\u91CD\u7F6E800\u53E5\u9032\u5EA6",sentence_progress_badge:"800\u53E5\u9032\u5EA6 {0} / {1}",sentence_pattern_label:"\u53E5\u578B\uFF1A",sentence_level_label:"\u7B49\u7D1A\uFF1A",sentence_translation_label:"\u8B6F\u6587\uFF1A",sentence_note_label:"\u8AAA\u660E\uFF1A",sentence_note_generic:"\u5B78\u7FD2\u91CD\u9EDE\uFF1A\u672C\u53E5\u7684\u95DC\u9375\u8868\u9054\u662F\u300C{0}\u300D\u3002\u8ACB\u7D50\u5408\u8B6F\u6587\u7406\u89E3\u6574\u53E5\uFF0C\u4E26\u6CE8\u610F\u5B83\u524D\u5F8C\u7684\u63A5\u7E8C\u3002",sentence_why_not_label:"\u70BA\u4EC0\u9EBC\u4E0D\u7528\u5176\u4ED6\u5F62\u5F0F\uFF1A",sentence_quiz_jp_zh:"\u9078\u64C7\u9019\u53E5\u65E5\u6587\u7684\u4E2D\u6587\u610F\u601D",sentence_quiz_zh_jp:"\u9078\u64C7\u9019\u53E5\u4E2D\u6587\u5C0D\u61C9\u7684\u65E5\u6587",sentence_study_answer:"\u5B78\u7FD2\uFF1A",sentence_study_done:"\u5DF2\u5B78\u7FD2 {0} \u53E5",no_questions:"\u6C92\u6709\u53EF\u7528\u984C\u76EE",n2_cat_label:"\u984C\u76EE\u985E\u578B\uFF08\u53EF\u591A\u9078\uFF09",n2_kanji_reading:"\u6F22\u5B57\u8B80\u97F3",n2_orthography:"\u6F22\u5B57\u5BEB\u6CD5",n2_context_vocab:"\u8A9E\u5883\u8A5E\u5F59",n2_paraphrase:"\u8FD1\u7FA9\u66FF\u63DB",n2_usage:"\u7528\u6CD5",n2_grammar:"\u6587\u6CD5",n2_q_reading:"\u756B\u7DDA\u8A5E\u7684\u8B80\u97F3\u662F\uFF1F",n2_q_ortho:"\u756B\u7DDA\u8A5E\u7684\u6F22\u5B57\u5BEB\u6CD5\u662F\uFF1F",n2_q_context:"\u9078\u64C7\u6700\u5408\u9069\u7684\u8A5E\u586B\u5165\u62EC\u865F",n2_q_para:"\u756B\u7DDA\u8A5E\u7684\u8FD1\u7FA9\u8868\u9054\u662F\uFF1F",n2_q_usage:"\u54EA\u500B\u53E5\u5B50\u7528\u6CD5\u6B63\u78BA\uFF1F",n2_q_grammar:"\u9078\u64C7\u6700\u5408\u9069\u7684\u8A9E\u6CD5\u586B\u5165\u7A7A\u683C",content_label:"\u5167\u5BB9\uFF08\u53EF\u591A\u9078\uFF09",content_kana:"50\u97F3",content_word:"\u65E5\u5E38\u77ED\u8A5E",content_kanji:"\u6F22\u5B57\u77ED\u8A5E",content_wrong:"\u932F\u984C\u512A\u5148",group_kana_title:"50\u97F3\u8A2D\u7F6E",group_word_title:"\u65E5\u5E38\u77ED\u8A5E\u8A2D\u7F6E",group_kanji_title:"\u6F22\u5B57\u77ED\u8A5E\u8A2D\u7F6E",mode_type:"\u984C\u578B",set_label:"\u96C6\u5408",kana_mode_label:"\u5047\u540D\u6A21\u5F0F",session_size_label:"\u672C\u6B21\u984C\u6578",other_options:"\u5176\u4ED6\u9078\u9805",kana_hira:"\u5E73\u5047\u540D",kana_kata:"\u7247\u5047\u540D",mode_rm_mc:"\u7F85\u99AC\u97F3\u2192\u9078\u5047\u540D",mode_jp_mc:"\u5047\u540D\u2192\u9078\u7F85\u99AC\u97F3",mode_rm_in:"\u7F85\u99AC\u97F3\u8F38\u5165",mode_jp_in:"\u5047\u540D\u8F38\u5165",mode_rm_mean:"\u8B80\u97F3\u2192\u9078\u610F\u601D",mode_mean_rm:"\u610F\u601D\u2192\u9078\u8B80\u97F3",word_relation_label:"\u8A5E\u7FA9\u95DC\u4FC2",mode_word_synonym:"\u540C\u7FA9\u8A5E",mode_word_near:"\u8FD1\u7FA9\u8A5E",mode_word_antonym:"\u53CD\u7FA9\u8A5E",mode_kanji_read:"\u6F22\u5B57\u2192\u9078\u8B80\u97F3",mode_read_kanji:"\u8B80\u97F3\u2192\u9078\u6F22\u5B57",mode_kanji_mean:"\u6F22\u5B57\u2192\u9078\u610F\u601D",set_seion:"\u6E05\u97F3",set_dakuon:"\u6FC1\u97F3",set_handakuon:"\u534A\u6FC1\u97F3",set_yoon:"\u62D7\u97F3",start_btn:"\u958B\u59CB\u7DF4\u7FD2",word_match_new:"\u63DB\u4E00\u5C40",word_match_invite:"\u9080\u8ACB\u597D\u53CB",word_match_guide_btn:"\u65B0\u624B\u6559\u5B78",word_match_setup_title:"\u958B\u59CB\u524D\u8A2D\u5B9A",word_match_kana_label:"\u5DE6\u908A\u5047\u540D\u986F\u793A",word_match_hira:"\u5E73\u5047\u540D",word_match_kata:"\u7247\u5047\u540D",word_match_difficulty:"\u96E3\u5EA6",word_match_easy:"\u5BB9\u6613\uFF1A\u5F9E1\u5217\xD73\u884C\u958B\u59CB",word_match_medium:"\u4E2D\u7B49\uFF1A\u5F9E2\u5217\xD73\u884C\u958B\u59CB",word_match_hard:"\u96E3\uFF1A\u5F9E3\u5217\xD73\u884C\u958B\u59CB",word_match_start_game:"\u958B\u59CB\u904A\u6232",word_match_select_one_kana:"\u81F3\u5C11\u9078\u64C7\u4E00\u7A2E\u5047\u540D\u3002",word_match_guide_level:"\u65B0\u624B\u6559\u5B78",word_match_guide_title:"\u77ED\u8A5E\u6D88\u9664\u65B0\u624B\u6559\u5B78",word_match_guide_prompt_0:"\u5148\u9EDE\u5DE6\u908A\u767C\u5149\u7684\u5047\u540D\uFF1A\u306D\u3053\u3002",word_match_guide_prompt_1:"\u518D\u9EDE\u53F3\u908A\u5C0D\u61C9\u7684\u6F22\u5B57\uFF1A\u732B\u3002",word_match_guide_prompt_2:"\u7B2C1\u5C0D\u6703\u5148\u88AB\u5708\u4F4F\uFF0C\u4E0D\u99AC\u4E0A\u6D88\u9664\uFF1B\u7E7C\u7E8C\u9EDE\u4E0B\u4E00\u5C0D\u5047\u540D\u3002",word_match_guide_prompt_3:"\u9078\u4E2D\u5F8C\uFF0C\u518D\u9EDE\u5C0D\u61C9\u6F22\u5B57\uFF1A\u6C34\u3002",word_match_guide_prompt_4:"\u73FE\u5728\u67092\u5C0D\u88AB\u5708\u4F4F\uFF0C\u984F\u8272\u8B8A\u4E86\uFF0C\u9023\u9396\u500D\u7387\u63D0\u9AD8\u3002\u9EDE\u767C\u5149\u7684\u300C\u4E0B\u4E00\u6B65\u300D\u6F14\u793A\u6642\u9593\u8B8A\u5C11\u3002",word_match_guide_prompt_5:"\u6642\u9593\u8D8A\u5C11\uFF0C\u5708\u4F4F\u7684\u8A5E\u584A\u6703\u52D5\u5F97\u8D8A\u5FEB\u3002\u7E7C\u7E8C\u9EDE\u300C\u4E0B\u4E00\u6B65\u300D\u770B\u7D50\u7B97\u3002",word_match_guide_prompt_6:"\u9023\u9396\u7D50\u675F\u5F8C\uFF0C\u6240\u6709\u5708\u4F4F\u7684\u8A5E\u584A\u4E00\u8D77\u7206\u70B8\u6D88\u9664\u4E26\u6389\u843D\u88DC\u4F4D\u3002",word_match_guide_prompt_7:"\u73FE\u5728\u6F14\u793A\u9078\u932F\uFF1A\u5148\u9EDE\u767C\u5149\u7684 \u3084\u307E\u3002",word_match_guide_prompt_7b:"\u518D\u6545\u610F\u9EDE\u932F\u8AA4\u7684 \u6C34\uFF0C\u770B\u6263\u5FC3\u53CD\u994B\u3002",word_match_guide_prompt_7c:"\u9078\u932F\u6703\u9707\u52D5\u4E26\u6263\u4E00\u9846\u5FC3\u3002\u9EDE\u4E0B\u4E00\u6B65\u7E7C\u7E8C\u9053\u5177\u3002",word_match_guide_prompt_8:"\u65B0\u624B\u6559\u5B78\uFF1A\u73FE\u5728\u9EDE\u767C\u5149\u7684\u70B8\u5F48\u3002",word_match_guide_prompt_8_pick:"\u70B8\u5F48\u5DF2\u9078\u4E2D\u3002\u73FE\u5728\u9EDE\u767C\u5149\u7684\u4E2D\u5FC3\u584A\uFF0C\u50CF\u6B63\u5F0F\u904A\u6232\u4E00\u6A23\u9078\u64C7\u7206\u70B8\u9EDE\u3002",word_match_guide_prompt_8b:"\u70B8\u5F48\u6703\u7206\u70B8\u6D88\u9664\u4E00\u7247\u3002\u9EDE\u4E0B\u4E00\u6B65\u6F14\u793A\u653E\u5927\u93E1\u3002",word_match_guide_prompt_8c:"\u73FE\u5728\u9EDE\u767C\u5149\u7684\u653E\u5927\u93E1\u3002",word_match_guide_prompt_8d:"\u653E\u5927\u93E1\u6703\u628A3\u7D44\u914D\u5C0D\u6A19\u6210 \u2460\u2461\u2462\uFF1A\u540C\u6578\u5B57\u540C\u984F\u8272\u5C31\u662F\u4E00\u7D44\uFF0C\u6301\u7E8C5\u79D2\u3002\u9EDE\u4E0B\u4E00\u6B65\u958B\u59CB\u6B63\u5F0F\u904A\u6232\u3002",word_match_guide_prompt_9:"\u73FE\u5728\u9032\u5165\u6B63\u5F0F\u904A\u6232\u3002",word_match_guide_tool_prompt:"\u9053\u5177\u7A0D\u5F8C\u6703\u4EAE\u8D77\u3002",word_match_guide_next:"\u4E0B\u4E00\u6B65",word_match_guide_basic:"\u5DE6\u908A\u662F\u5047\u540D\u8B80\u97F3\uFF0C\u53F3\u908A\u662F\u5C0D\u61C9\u6F22\u5B57/\u8A5E\u7FA9\uFF1B\u9EDE\u4E00\u5DE6\u4E00\u53F3\uFF0C\u914D\u5C0D\u6B63\u78BA\u5C31\u5148\u5708\u4F4F\u3002",word_match_guide_chain:"\u7B2C1\u5C0D\u67098\u79D2\u7E7C\u7E8C\u627E\u4E0B\u4E00\u5C0D\uFF1B\u6BCF\u591A\u4E00\u5C0D\u6642\u9593\u5C110.5\u79D2\u3002\u5708\u4F4F\u7684\u584A\u6703\u8D8A\u52D5\u8D8A\u5FEB\uFF0C\u8D85\u6642\u5F8C\u4E00\u8D77\u6D88\u9664\u4E26\u9AD8\u500D\u7387\u7D50\u7B97\u3002",word_match_guide_wrong:"\u9078\u932F\u6703\u4E2D\u65B7\u76EE\u524D\u9023\u9396\u4E26\u6263\u4E00\u9846\u5FC3\uFF1B5\u9846\u5FC3\u6263\u5B8C\u5C31 GAME OVER\u3002",word_match_guide_tools:"\u70B8\u5F48\u9EDE\u4E2D\u5FC3\u70B83\xD73\uFF1B\u653E\u5927\u93E1\u6703\u75283\u7A2E\u984F\u8272\u63D0\u793A3\u7D44\u914D\u5C0D\uFF0C\u6301\u7E8C5\u79D2\u3002",word_match_guide_score:"\u5206\u6578\u6309\u8A5E\u9577\u3001\u5E38\u7528\u5EA6\u3001Combo\u3001\u500D\u7387\u548C\u9023\u9396\u6578\u91CF\u8A08\u7B97\uFF1B5\u5206\u9418\u5167\u76E1\u91CF\u885D\u9AD8\u5206\u3002",word_match_guide_start:"\u77E5\u9053\u4E86\uFF0C\u958B\u59CB",word_match_goal:"\u95DC\u5361",word_match_level_label:"\u7B2C{0}\u95DC {1}\u5217\xD7{2}\u5C64",word_match_level_clear:"\u7B2C{0}\u95DC\u901A\u904E\uFF01",word_match_level_clear_hint:"\u904E\u95DC\uFF01\u6E96\u5099\u4E0B\u4E00\u95DC\u2026\u2026",word_match_power:"\u500D\u7387",word_match_goal_pairs:"\u6D88\u9664{0}\u5C0D",word_match_goal_score:"\u5F97\u5206{0}",word_match_goal_combo:"\u9023\u64CA{0}",word_match_goal_done_bonus:"\u76EE\u6A19\u5B8C\u6210 +15\u79D2 \u4E0B\u6B21\xD72",word_match_life_title:"\u5269\u9918\u751F\u547D {0}/5",word_match_life_empty:"\u751F\u547D\u7528\u5B8C",word_match_bomb_hint:"\u{1F4A3} \u9078\u64C7\u4E2D\u5FC3\u584A\uFF0C\u70B8\u6389\u5468\u570D3\xD73",word_match_invite_title:"\u77ED\u8A5E\u6D88\u9664 - \u65E5\u6587\u914D\u5C0D\u6D88\u6D88\u6A02",word_match_invite_text:"\u4F86\u6311\u6230\u9019\u500B\u65E5\u6587\u77ED\u8A5E\u914D\u5C0D\u904A\u6232\uFF1A\u9023\u9396\u6D88\u9664\u3001\u9053\u5177\u3001\u95DC\u5361\uFF0C\u4E00\u908A\u73A9\u4E00\u908A\u8A18\u55AE\u5B57\uFF01",word_match_invite_copied:"\u904A\u6232\u9080\u8ACB\u9023\u7D50\u5DF2\u8907\u88FD",word_match_music_toggle:"\u80CC\u666F\u97F3\u6A02",word_match_sfx_toggle:"\u904A\u6232\u97F3\u6548",word_match_voice_toggle:"\u8B80\u97F3\u8A9E\u97F3",word_match_music_short:"\u97F3\u6A02",word_match_sfx_short:"\u97F3\u6548",word_match_voice_short:"\u8B80\u97F3",word_match_special_seconds:"+{0}\u79D2",word_match_special_hint:"\u63D0\u793A",word_match_special_mult:"\u4E0B\u6B21\xD72",word_match_start:"\u958B\u59CB",word_match_game_over:"GAME OVER",word_match_chain_tip:"\u7B2C1\u5C0D\u5708\u4F4F\u5F8C\uFF0C8\u79D2\u5167\u7E7C\u7E8C\u914D\u5C0D\u53EF\u9023\u9396\u52A0\u500D",word_match_score:"\u5F97\u5206",word_match_best:"\u6700\u9AD8",word_match_time:"\u6642\u9593",word_match_timeup:"\u6642\u9593\u5230\uFF01",word_match_plus:"+",word_match_combo:"\u9023\u64CA",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"\u8B80\u97F3",word_match_word:"\u6F22\u5B57",word_match_hint:"\u5DE6\u908A\u8B80\u97F3\uFF0C\u53F3\u908A\u6F22\u5B57\u3002\u914D\u5C0D\u6B63\u78BA\u6703\u5148\u5708\u4F4F\uFF0C\u7E7C\u7E8C\u9023\u9396\u6216\u8D85\u6642\u5F8C\u4E00\u8D77\u6D88\u9664\u3002",word_match_complete:"\u5B8C\u6210\uFF01\u5168\u90E8\u6D88\u9664\u3002",hide_meaning:"\u96B1\u85CF\u4E2D\u6587\u91CB\u7FA9",reset_settings:"\u5FA9\u4F4D\u8A2D\u7F6E",reset_today:"\u91CD\u7F6E\u4ECA\u65E5",clear_all:"\u6E05\u7A7A\u5168\u90E8",refresh_app:"\u5237\u65B0/\u66F4\u65B0",refreshing_app:"\u6B63\u5728\u5237\u65B0...",today_label:"\u4ECA\u65E5\uFF1A",today_unit:" \u984C",correct_label:"\u6B63\u78BA\uFF1A",wrong_label:"\u932F\u8AA4\uFF1A",done_label:"\u5B8C\u6210\uFF1A",rounds_unit:" \u8F2A",round_prefix:"\u7B2C",round_suffix:"\u8F2A",btn_back:"\u9000\u51FA",btn_next:"\u4E0B\u4E00\u984C",btn_speak:"\u64AD\u653E\u767C\u97F3",btn_speaking:"\u64AD\u653E\u4E2D",btn_check:"\u63D0\u4EA4",btn_answer:"\u7B54\u984C",btn_show:"\u986F\u793A\u7B54\u6848",btn_finish:"\u7D50\u675F",q_what_meaning:" \u662F\u4EC0\u9EBC\u610F\u601D\uFF1F",q_how_read_meaning:"\u300D\u600E\u9EBC\u8B80\uFF1F",q_how_read_meaning_pre:"\u300C",q_how_read:" \u600E\u9EBC\u8B80\uFF1F",q_kanji_of:" \u7684\u6F22\u5B57\u662F\uFF1F",q_kana_of:" \u7684\u5047\u540D\u662F\uFF1F",q_writing_of:" \u7684\u5BEB\u6CD5\u662F\uFF1F",q_word_synonym:" \u7684\u540C\u7FA9\u8A5E\u662F\uFF1F",q_word_near:" \u7684\u8FD1\u7FA9\u8A5E\u662F\uFF1F",q_word_antonym:" \u7684\u53CD\u7FA9\u8A5E\u662F\uFF1F",rel_synonym:"\u540C\u7FA9",rel_near:"\u8FD1\u7FA9",rel_antonym:"\u53CD\u7FA9",input_kana:"\u8F38\u5165\u5047\u540D",input_romaji:"\u8F38\u5165\u7F85\u99AC\u97F3",input_placeholder:"\u8F38\u5165\u7B54\u6848",result_correct:"\u6B63\u78BA\uFF1A",result_wrong:"\u932F\u4E86\u3002\u6B63\u78BA\uFF1A",result_wrong2:"\u4E0D\u5C0D\u3002\u6B63\u78BA\uFF1A",n2_original:"\u539F\u6587\uFF1A",n2_translation:"\u8B6F\u6587\uFF1A",result_answer:"\u7B54\u6848\uFF1A",meaning_label:"\u91CB\u7FA9\uFF1A",meaning_hidden:"\u91CB\u7FA9\uFF1A***",alert_reset_settings:"\u5DF2\u5FA9\u4F4D\u8A2D\u7F6E",alert_reset_today:"\u5DF2\u91CD\u7F6E\u4ECA\u65E5\u7D71\u8A08",alert_clear_all:"\u5DF2\u6E05\u7A7A\u5168\u90E8\u6578\u64DA",alert_reset_jlpt_progress:"\u5DF2\u91CD\u7F6E JLPT \u5B78\u7FD2\u9032\u5EA6",alert_reset_sentence_progress:"\u5DF2\u91CD\u7F6E 800 \u53E5\u5B78\u7FD2\u9032\u5EA6",confirm_clear_all:"\u78BA\u5B9A\u6E05\u7A7A\u5168\u90E8\u7D71\u8A08\u548C\u932F\u984C\u8A18\u9304\uFF1F",please_answer:"\u8ACB\u5148\u7B54\u984C\uFF01",please_input:"\u8ACB\u8F38\u5165\u7B54\u6848",ready:"\u6E96\u5099\u958B\u59CB...",finish_done:"\u5B8C\u6210\uFF01\u7528\u6642 ",finish_acc:"\uFF0C\u6B63\u78BA\u7387 ",data_error:"\u8F09\u5165\u8CC7\u6599\u5931\u6557\uFF0C\u8ACB\u78BA\u4FDD\u900F\u904E HTTP \u4F3A\u670D\u5668\u5B58\u53D6\uFF08\u5982 GitHub Pages \u6216\u672C\u5730\u4F3A\u670D\u5668\uFF09"},ja:{title:"\u65E5\u672C\u8A9E\u30AF\u30E9\u30B9\u30E1\u30FC\u30C8",subtitle:"\u7DF4\u7FD2\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u9078\u629E",mod_kana:"50\u97F3\u57FA\u790E",mod_kana_desc:"\u6E05\u97F3\u30FB\u6FC1\u97F3\u30FB\u62D7\u97F3",mod_word:"\u65E5\u5E38\u5358\u8A9E",mod_word_desc:"\u8A9E\u5F59\u30FB\u985E\u7FA9\u8A9E\u30FB\u53CD\u5BFE\u8A9E",mod_games_icon:"\u904A",mod_games:"\u30B2\u30FC\u30E0",mod_games_desc:"\u6D88\u3057\u30FB\u4FEE\u884C",games_title:"\u30B2\u30FC\u30E0\u3092\u9078\u3076",mod_word_match_icon:"\u6D88",mod_word_match:"\u5358\u8A9E\u6D88\u3057",mod_word_match_desc:"3\u7D44\u3067\u7D9A\u304F\u6D88\u3057\u30B2\u30FC\u30E0",mod_cultivate_game:"\u65E5\u672C\u8A9E\u4FEE\u884C",mod_cultivate_game_desc:"\u4FEE\u884C\u30FB\u88C5\u5099\u30FB\u6311\u6226",mod_blade_game:"\u77ED\u8A9E\u5200\u738B",mod_blade_game_desc:"\u56DE\u8EE2\u30CA\u30A4\u30D5\u30FB\u6B63\u89E3\u306B\u5F53\u305F\u308B",blade_new:"\u30EA\u30B9\u30BF\u30FC\u30C8",blade_score:"\u30B9\u30B3\u30A2",blade_knives:"\u30CA\u30A4\u30D5",blade_level:"\u30EC\u30D9\u30EB",blade_time:"\u6642\u9593",blade_help:"\u30C9\u30E9\u30C3\u30B0\u3067\u79FB\u52D5\u3002\u982D\u4E0A\u306E\u77ED\u8A9E\u306B\u5BFE\u5FDC\u3059\u308B\u7B54\u3048\u306B\u5F53\u305F\u308B\u3068\u6483\u7834\u3057\u3066\u30CA\u30A4\u30D5\u5897\u52A0\u3002\u9593\u9055\u3046\u3068\u30CA\u30A4\u30D5\u3092\u5931\u3044\u307E\u3059\u3002",cultivate_title:"\u65E5\u672C\u8A9E\u4FEE\u884C",cultivate_reset:"\u30EA\u30BB\u30C3\u30C8",cultivate_train:"\u4FEE\u884C\u3059\u308B",cultivate_challenge:"\u8A9E\u5F59\u5996\u602A\u306B\u6311\u6226",cultivate_power:"\u6226\u529B",cultivate_jade:"\u970A\u7389",cultivate_stage:"\u30B9\u30C6\u30FC\u30B8",cultivate_equipment:"\u88C5\u5099",cultivate_current_equip:"\u73FE\u5728\u306E\u88C5\u5099",cultivate_new_drop:"\u65B0\u30C9\u30ED\u30C3\u30D7",cultivate_wear:"\u88C5\u5099\u3059\u308B",cultivate_battle:"\u8A9E\u5F59\u5996\u602A\u30D0\u30C8\u30EB",cultivate_insight:"\u609F\u9053\u30AF\u30A4\u30BA",cultivate_insight_empty:"\u4FEE\u884C\u3059\u308B\u3068\u609F\u9053\u30AF\u30A4\u30BA\u304C\u51FA\u307E\u3059\u3002",cultivate_q_meaning:"\u610F\u5473\u3092\u9078\u3076",cultivate_q_reading:"\u8AAD\u307F\u3092\u9078\u3076",cultivate_reset_confirm:"\u65E5\u672C\u8A9E\u4FEE\u884C\u306E\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3059\u304B\uFF1F",cultivate_enemy_name:"\u7B2C{0}\u95A2 \u8A9E\u5F59\u5996\u602A",cultivate_realm_0:"\u304B\u306A\u5C0F\u5996",cultivate_realm_1:"\u4E94\u5341\u97F3\u7AE5\u5B50",cultivate_realm_2:"N5\u4FEE\u58EB",cultivate_realm_3:"N4\u6CD5\u5E2B",cultivate_realm_4:"N3\u771F\u4EBA",cultivate_realm_5:"N2\u5B97\u5E2B",cultivate_realm_6:"N1\u5927\u80FD",cultivate_realm_7:"\u65E5\u672C\u8A9E\u30DE\u30B9\u30BF\u30FC",cultivate_q_normal:"\u666E\u901A",cultivate_q_rare:"\u30EC\u30A2",cultivate_q_epic:"\u30A8\u30D4\u30C3\u30AF",cultivate_q_legend:"\u4F1D\u8AAC",cultivate_stat_vocab:"\u8A9E\u5F59",cultivate_stat_listen:"\u8074\u529B",cultivate_stat_combo:"\u9023\u6483",cultivate_stat_focus:"\u96C6\u4E2D",cultivate_kanji:"\u6F22\u5B57",cultivate_setup_title:"\u4FEE\u884C\u5185\u5BB9",cultivate_setup_sub:"\u958B\u59CB\u524D\u306B\u51FA\u984C\u30BF\u30A4\u30D7\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u5C11\u306A\u304F\u3068\u30821\u3064\u5FC5\u8981\u3067\u3059\u3002",cultivate_start:"\u4FEE\u884C\u958B\u59CB",cultivate_select_one_script:"\u3072\u3089\u304C\u306A\u3001\u30AB\u30BF\u30AB\u30CA\u3001\u6F22\u5B57\u304B\u3089\u5C11\u306A\u304F\u3068\u30821\u3064\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",cultivate_log_start:"\u4FEE\u884C\u958B\u59CB\u3002\u4FEE\u884C\u3067\u7D4C\u9A13\u3001\u970A\u7389\u3001\u88C5\u5099\u3092\u7372\u5F97\u3002",cultivate_log_train:"\u4FEE\u884C +{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3001{3}\u88C5\u5099\u300C{2}\u300D\u3092\u7372\u5F97\u3002",cultivate_log_equip:"\u300C{0}\u300D\u3092\u88C5\u5099\u3057\u307E\u3057\u305F\u3002",cultivate_log_replace:"\u300C{0}\u300D\u3092\u88C5\u5099\u3057\u3001\u300C{1}\u300D\u3092\u4EA4\u63DB\u3057\u307E\u3057\u305F\u3002",cultivate_log_realm_up:"\u5883\u754C\u7A81\u7834\uFF1A{0}\uFF01",cultivate_log_win:"\u52DD\u5229\uFF01+{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3002",cultivate_log_lose:"\u6557\u5317\u3002\u3067\u3082 +{0}\u7D4C\u9A13\u3002",cultivate_log_insight_ok:"\u609F\u9053\u6210\u529F\uFF01+{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3001\u88C5\u5099\u6226\u529B+2\u3002",cultivate_log_insight_ng:"\u609F\u9053\u5931\u6557\u3002\u6B63\u89E3\uFF1A{0}\u3002",cultivate_log_finish_current:"\u5148\u306B\u73FE\u5728\u306E\u609F\u9053/\u6311\u6226\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044\u3002",cultivate_train_style_vocab:"\u8A9E\u5F59\u4FEE\u884C",cultivate_train_style_listen:"\u8074\u89E3\u4FEE\u884C",cultivate_train_style_focus:"\u96C6\u4E2D\u7791\u60F3",cultivate_log_train_start:"{0}\u958B\u59CB\uFF1A\u609F\u9053\u306B\u6210\u529F\u3059\u308B\u3068\u57FA\u672C +{1}\u7D4C\u9A13 +{2}\u970A\u7389\u3001\u88C5\u5099\u54C1\u8CEA\u3082\u6C7A\u307E\u308A\u307E\u3059\u3002",cultivate_train_question:"\u4FEE\u884C\u609F\u9053",cultivate_train_question_desc:"{0}\u4E2D",cultivate_battle_question:"\u8A00\u970A\u5996\u602A\u30D0\u30C8\u30EB",cultivate_battle_question_desc:"\u81EA\u5206{0} vs \u6575{1}",cultivate_log_train_success:"\u4FEE\u884C\u6210\u529F\uFF01+{0}\u7D4C\u9A13 +{1}\u970A\u7389\u3001{3}\u88C5\u5099\u300C{2}\u300D\u3092\u7372\u5F97\u3002",cultivate_log_train_fail:"\u4FEE\u884C\u5931\u6557\u3002\u6B63\u89E3\uFF1A{0}\u3002\u305D\u308C\u3067\u3082 +{1}\u7D4C\u9A13 +{2}\u970A\u7389\u3002",cultivate_log_battle_start:"\u8A00\u970A\u5996\u602A\u51FA\u73FE\uFF01\u81EA\u5206\u306E\u6226\u529B{0}\u3001\u6575\u306E\u6226\u529B{1}\u3002\u6B63\u89E3\u3067\u653B\u6483\u3002",cultivate_log_battle_win:"\u7834\u62DB\u6210\u529F\uFF01\u6700\u7D42\u6226\u529B{0}/{1}\u3001\u52DD\u5229\uFF01+{2}\u7D4C\u9A13 +{3}\u970A\u7389\u3002",cultivate_log_battle_not_enough:"\u6B63\u89E3\u3057\u305F\u304C\u6226\u529B\u4E0D\u8DB3\uFF1A{0}/{1}\u3002+{2}\u7D4C\u9A13\u3002\u5148\u306B\u4FEE\u884C\u304B\u88C5\u5099\u5909\u66F4\u3092\u3002",cultivate_log_battle_lose:"\u6575\u306B\u898B\u7834\u3089\u308C\u305F\u3002\u6B63\u89E3\uFF1A{0}\u3002+{1}\u7D4C\u9A13\u3002",mod_kanji:"\u6F22\u5B57\u5358\u8A9E",mod_kanji_desc:"\u6F22\u5B57\u306E\u8AAD\u307F\u66F8\u304D",mod_n2:"JLPT\u5BFE\u7B56",mod_n2_desc:"N1-N5 \u6A21\u64EC\u7DF4\u7FD2",mod_grammar:"\u6587\u6CD5\u5B66\u7FD2",mod_grammar_icon:"\u6587\u6CD5",mod_grammar_desc:"\u52D5\u8A5E\u30B0\u30EB\u30FC\u30D7\u30FB\u6587\u578B",mod_sentence:"800\u5E38\u7528\u6587",mod_sentence_icon:"800",mod_sentence_desc:"\u6587\u578B\u30FB\u767A\u97F3\u5B66\u7FD2",mod_songs:"\u65E5\u672C\u8A9E\u306E\u6B4C",mod_songs_icon:"\u6B4C",mod_songs_desc:"\u30ED\u30FC\u30AB\u30EB\u6B4C\u8A5E\u30FB\u4E00\u884C\u305A\u3064\u5B66\u7FD2",songs_title:"\u65E5\u672C\u8A9E\u306E\u6B4C",songs_intro_title:"\u30ED\u30FC\u30AB\u30EB\u6B4C\u8A5E\u5B66\u7FD2",songs_intro:"\u66F2\u3092\u9078\u3093\u3067\u81EA\u5206\u306E\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3092\u8CBC\u308A\u4ED8\u3051\u307E\u3059\u3002\u5185\u5BB9\u306F\u3053\u306E\u7AEF\u672B\u3060\u3051\u306B\u4FDD\u5B58\u3055\u308C\u3001\u5404\u884C\u306B\u8AAD\u307F\u4EEE\u540D\u3092\u4ED8\u3051\u3066\u4E00\u884C\u305A\u3064\u518D\u751F\u3067\u304D\u307E\u3059\u3002",song_close:"\u9589\u3058\u308B",song_local_notice:"\u5B8C\u5168\u306A\u6B4C\u8A5E\u306F\u5185\u8535\u30FB\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u307E\u305B\u3093\u3002\u8CBC\u308A\u4ED8\u3051\u305F\u6B4C\u8A5E\u306F\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u5185\u3060\u3051\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002",song_paste_label:"\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3092\u8CBC\u308A\u4ED8\u3051",song_paste_placeholder:"\u4E00\u884C\u306B\u4E00\u3064\u306E\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3002\u4EFB\u610F\uFF1A\u6B4C\u8A5E<Tab>\u81EA\u5206\u7528\u30E1\u30E2\u3002",song_save:"\u4FDD\u5B58\u3057\u3066\u8AAD\u307F\u3092\u751F\u6210",song_clear:"\u3053\u306E\u66F2\u306E\u6B4C\u8A5E\u3092\u6D88\u53BB",song_clear_confirm:"\u3053\u306E\u66F2\u306E\u30ED\u30FC\u30AB\u30EB\u4FDD\u5B58\u6B4C\u8A5E\u3092\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F",song_no_lyrics:"\u307E\u3060\u6B4C\u8A5E\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u81EA\u5206\u3067\u6301\u3063\u3066\u3044\u308B\u65E5\u672C\u8A9E\u6B4C\u8A5E\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u4FDD\u5B58\u3057\u3066\u304F\u3060\u3055\u3044\u3002",song_line_play:"\u3053\u306E\u884C\u3092\u518D\u751F",song_lines_count:"{0} \u884C",song_not_added:"\u672A\u8FFD\u52A0",song_reading_label:"\u8AAD\u307F\uFF1A",song_translation_label:"\u7FFB\u8A33/\u30E1\u30E2\uFF1A",grammar_practice_btn:"\u7DF4\u7FD2\u958B\u59CB",grammar_practice_title:"\u7DF4\u7FD2",gp_submit:"\u9001\u4FE1",gp_right:"\u6B63\u89E3\uFF1A",gp_answer:"\u7B54\u3048\uFF1A",gp_wrong:"\u4E0D\u6B63\u89E3\u3002",gp_again:"\u3082\u3046\u4E00\u5EA6",gp_summary_sub:"\u8A08 {0} \u554F \xB7 \u6B63\u89E3 {1} \xB7 \u4E0D\u6B63\u89E3 {2}",gp_summary_time:"\u6642\u9593 ",jlpt_level_label:"\u30EC\u30D9\u30EB",jlpt_mode_label:"\u5B66\u7FD2\u65B9\u6CD5",jlpt_mode_quiz:"\u30C6\u30B9\u30C8\u30E2\u30FC\u30C9",jlpt_mode_study:"\u7B54\u3048\u5B66\u7FD2",jlpt_mode_progressive:"\u9806\u756A\u306B\u5B66\u7FD2",jlpt_study_answer:"\u5B66\u7FD2\uFF1A",jlpt_study_done:"{0}\u554F\u3092\u5B66\u7FD2\u3057\u307E\u3057\u305F",jlpt_progress_badge:"\u5B66\u7FD2\u9032\u5EA6 {0} / {1}",jlpt_reset_progress:"\u5B66\u7FD2\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8",sentence_mode_label:"\u5B66\u7FD2\u65B9\u6CD5",sentence_mode_progressive:"\u9806\u756A\u306B\u5B66\u7FD2",sentence_mode_study:"\u30E9\u30F3\u30C0\u30E0\u5B66\u7FD2",sentence_mode_quiz_jp_zh:"\u65E5\u672C\u8A9E\u2192\u4E2D\u56FD\u8A9E\u3092\u9078\u629E",sentence_mode_quiz_zh_jp:"\u4E2D\u56FD\u8A9E\u2192\u65E5\u672C\u8A9E\u3092\u9078\u629E",sentence_reset_progress:"800\u6587\u306E\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8",sentence_progress_badge:"800\u6587\u9032\u5EA6 {0} / {1}",sentence_pattern_label:"\u6587\u578B\uFF1A",sentence_level_label:"\u30EC\u30D9\u30EB\uFF1A",sentence_translation_label:"\u8A33\u6587\uFF1A",sentence_note_label:"\u8AAC\u660E\uFF1A",sentence_note_generic:"\u5B66\u7FD2\u30DD\u30A4\u30F3\u30C8\uFF1A\u3053\u306E\u6587\u306E\u30AD\u30FC\u30D5\u30EC\u30FC\u30BA\u306F\u300C{0}\u300D\u3067\u3059\u3002\u8A33\u6587\u3068\u5408\u308F\u305B\u3066\u6587\u5168\u4F53\u3092\u7406\u89E3\u3057\u3001\u524D\u5F8C\u306E\u63A5\u7D9A\u306B\u6CE8\u610F\u3057\u307E\u3057\u3087\u3046\u3002",sentence_why_not_label:"\u4ED6\u306E\u5F62\u3092\u4F7F\u308F\u306A\u3044\u7406\u7531\uFF1A",sentence_quiz_jp_zh:"\u3053\u306E\u65E5\u672C\u8A9E\u6587\u306E\u4E2D\u56FD\u8A9E\u8A33\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044",sentence_quiz_zh_jp:"\u3053\u306E\u4E2D\u56FD\u8A9E\u306B\u5408\u3046\u65E5\u672C\u8A9E\u6587\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044",sentence_study_answer:"\u5B66\u7FD2\uFF1A",sentence_study_done:"{0}\u6587\u3092\u5B66\u7FD2\u3057\u307E\u3057\u305F",no_questions:"\u5229\u7528\u3067\u304D\u308B\u554F\u984C\u304C\u3042\u308A\u307E\u305B\u3093",n2_cat_label:"\u554F\u984C\u30BF\u30A4\u30D7\uFF08\u8907\u6570\u9078\u629E\u53EF\uFF09",n2_kanji_reading:"\u6F22\u5B57\u8AAD\u307F",n2_orthography:"\u8868\u8A18",n2_context_vocab:"\u6587\u8108\u898F\u5B9A",n2_paraphrase:"\u8A00\u3044\u63DB\u3048",n2_usage:"\u7528\u6CD5",n2_grammar:"\u6587\u6CD5",n2_q_reading:"\u4E0B\u7DDA\u306E\u8A00\u8449\u306E\u8AAD\u307F\u306F\uFF1F",n2_q_ortho:"\u4E0B\u7DDA\u306E\u8A00\u8449\u306E\u6F22\u5B57\u306F\uFF1F",n2_q_context:"\uFF08\u3000\u3000\uFF09\u306B\u5165\u308B\u6700\u3082\u9069\u5207\u306A\u8A00\u8449\u306F\uFF1F",n2_q_para:"\u4E0B\u7DDA\u306E\u8A00\u8449\u306B\u8FD1\u3044\u610F\u5473\u306F\uFF1F",n2_q_usage:"\u6B63\u3057\u3044\u4F7F\u3044\u65B9\u306F\u3069\u308C\uFF1F",n2_q_grammar:"\uFF08\u3000\u3000\uFF09\u306B\u5165\u308B\u6700\u3082\u9069\u5207\u306A\u3082\u306E\u306F\uFF1F",content_label:"\u5185\u5BB9\uFF08\u8907\u6570\u9078\u629E\u53EF\uFF09",content_kana:"50\u97F3",content_word:"\u65E5\u5E38\u5358\u8A9E",content_kanji:"\u6F22\u5B57\u5358\u8A9E",content_wrong:"\u9593\u9055\u3044\u512A\u5148",group_kana_title:"50\u97F3\u8A2D\u5B9A",group_word_title:"\u65E5\u5E38\u5358\u8A9E\u8A2D\u5B9A",group_kanji_title:"\u6F22\u5B57\u5358\u8A9E\u8A2D\u5B9A",mode_type:"\u554F\u984C\u30BF\u30A4\u30D7",set_label:"\u30BB\u30C3\u30C8",kana_mode_label:"\u4EEE\u540D\u30E2\u30FC\u30C9",session_size_label:"\u554F\u984C\u6570",other_options:"\u305D\u306E\u4ED6",kana_hira:"\u3072\u3089\u304C\u306A",kana_kata:"\u30AB\u30BF\u30AB\u30CA",mode_rm_mc:"\u30ED\u30FC\u30DE\u5B57\u2192\u4EEE\u540D\u9078\u629E",mode_jp_mc:"\u4EEE\u540D\u2192\u30ED\u30FC\u30DE\u5B57\u9078\u629E",mode_rm_in:"\u30ED\u30FC\u30DE\u5B57\u5165\u529B",mode_jp_in:"\u4EEE\u540D\u5165\u529B",mode_rm_mean:"\u8AAD\u307F\u2192\u610F\u5473\u9078\u629E",mode_mean_rm:"\u610F\u5473\u2192\u8AAD\u307F\u9078\u629E",word_relation_label:"\u8A9E\u5F59\u95A2\u4FC2",mode_word_synonym:"\u985E\u7FA9\u8A9E",mode_word_near:"\u8FD1\u3044\u610F\u5473",mode_word_antonym:"\u53CD\u5BFE\u8A9E",mode_kanji_read:"\u6F22\u5B57\u2192\u8AAD\u307F\u9078\u629E",mode_read_kanji:"\u8AAD\u307F\u2192\u6F22\u5B57\u9078\u629E",mode_kanji_mean:"\u6F22\u5B57\u2192\u610F\u5473\u9078\u629E",set_seion:"\u6E05\u97F3",set_dakuon:"\u6FC1\u97F3",set_handakuon:"\u534A\u6FC1\u97F3",set_yoon:"\u62D7\u97F3",start_btn:"\u7DF4\u7FD2\u958B\u59CB",word_match_new:"\u65B0\u3057\u3044\u5C40",word_match_invite:"\u53CB\u3060\u3061\u62DB\u5F85",word_match_guide_btn:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",word_match_setup_title:"\u958B\u59CB\u524D\u8A2D\u5B9A",word_match_kana_label:"\u5DE6\u5074\u306E\u4EEE\u540D\u8868\u793A",word_match_hira:"\u3072\u3089\u304C\u306A",word_match_kata:"\u30AB\u30BF\u30AB\u30CA",word_match_difficulty:"\u96E3\u6613\u5EA6",word_match_easy:"\u304B\u3093\u305F\u3093\uFF1A1\u5217\xD73\u6BB5\u304B\u3089",word_match_medium:"\u3075\u3064\u3046\uFF1A2\u5217\xD73\u6BB5\u304B\u3089",word_match_hard:"\u3080\u305A\u304B\u3057\u3044\uFF1A3\u5217\xD73\u6BB5\u304B\u3089",word_match_start_game:"\u30B2\u30FC\u30E0\u958B\u59CB",word_match_select_one_kana:"\u4EEE\u540D\u3092\u5C11\u306A\u304F\u3068\u30821\u3064\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002",word_match_guide_level:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",word_match_guide_title:"\u5358\u8A9E\u6D88\u3057\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",word_match_guide_prompt_0:"\u5DE6\u306E\u5149\u308B\u304B\u306A\uFF1A\u306D\u3053 \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_1:"\u6B21\u306B\u53F3\u306E\u5BFE\u5FDC\u3059\u308B\u6F22\u5B57\uFF1A\u732B \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_2:"1\u7D44\u76EE\u306F\u3059\u3050\u6D88\u3048\u305A\u3001\u307E\u305A\u56F2\u307E\u308C\u307E\u3059\u3002\u6B21\u306E\u8AAD\u307F\u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_3:"\u9078\u3093\u3060\u3089\u5BFE\u5FDC\u3059\u308B\u6F22\u5B57\uFF1A\u6C34 \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_4:"2\u7D44\u304C\u56F2\u307E\u308C\u307E\u3057\u305F\u3002\u8272\u304C\u5909\u308F\u308A\u3001\u30C1\u30A7\u30FC\u30F3\u500D\u7387\u304C\u4E0A\u304C\u308A\u307E\u3059\u3002\u5149\u308B\u300C\u6B21\u3078\u300D\u3092\u62BC\u3057\u3066\u6642\u9593\u6E1B\u5C11\u3092\u898B\u307E\u3059\u3002",word_match_guide_prompt_5:"\u6B8B\u308A\u6642\u9593\u304C\u5C11\u306A\u3044\u307B\u3069\u3001\u56F2\u307E\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u306F\u901F\u304F\u52D5\u304D\u307E\u3059\u3002\u6B21\u3078\u3067\u7CBE\u7B97\u3092\u898B\u307E\u3059\u3002",word_match_guide_prompt_6:"\u30C1\u30A7\u30FC\u30F3\u7D42\u4E86\u3067\u56F2\u307E\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u304C\u307E\u3068\u3081\u3066\u7206\u767A\u3057\u3001\u88DC\u5145\u3055\u308C\u307E\u3059\u3002",word_match_guide_prompt_7:"\u30DF\u30B9\u306E\u4F53\u9A13\uFF1A\u307E\u305A\u5149\u308B \u3084\u307E \u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_7b:"\u6B21\u306B\u308F\u3056\u3068\u9055\u3046 \u6C34 \u3092\u30BF\u30C3\u30D7\u3057\u3066\u30E9\u30A4\u30D5\u6E1B\u5C11\u3092\u898B\u307E\u3059\u3002",word_match_guide_prompt_7c:"\u30DF\u30B9\u3059\u308B\u3068\u63FA\u308C\u3066\u30E9\u30A4\u30D5\u304C1\u3064\u6E1B\u308A\u307E\u3059\u3002\u6B21\u3078\u3067\u9053\u5177\u3078\u3002",word_match_guide_prompt_8:"\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\uFF1A\u5149\u308B\u7206\u5F3E\u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_8_pick:"\u7206\u5F3E\u3092\u9078\u3073\u307E\u3057\u305F\u3002\u6B63\u5F0F\u30B2\u30FC\u30E0\u3068\u540C\u3058\u3088\u3046\u306B\u3001\u5149\u308B\u4E2D\u5FC3\u30D6\u30ED\u30C3\u30AF\u3092\u30BF\u30C3\u30D7\u3057\u3066\u7206\u767A\u70B9\u3092\u9078\u3073\u307E\u3059\u3002",word_match_guide_prompt_8b:"\u7206\u5F3E\u306F\u5E83\u304F\u7206\u767A\u6D88\u53BB\u3057\u307E\u3059\u3002\u6B21\u3078\u3067\u866B\u773C\u93E1\u3078\u3002",word_match_guide_prompt_8c:"\u5149\u308B\u866B\u773C\u93E1\u3092\u30BF\u30C3\u30D7\u3002",word_match_guide_prompt_8d:"\u866B\u773C\u93E1\u306F3\u7D44\u306E\u30DA\u30A2\u3092\u2460\u2461\u2462\u3067\u8868\u793A\u3057\u307E\u3059\u3002\u540C\u3058\u6570\u5B57\u30FB\u540C\u3058\u8272\u304C1\u7D44\u3067\u30015\u79D2\u7D9A\u304D\u307E\u3059\u3002\u6B21\u3078\u3067\u672C\u756A\u958B\u59CB\u3002",word_match_guide_prompt_9:"\u672C\u756A\u30B2\u30FC\u30E0\u3078\u9032\u307F\u307E\u3059\u3002",word_match_guide_tool_prompt:"\u9053\u5177\u306F\u5F8C\u3067\u5149\u308A\u307E\u3059\u3002",word_match_guide_next:"\u6B21\u3078",word_match_guide_basic:"\u5DE6\u306F\u304B\u306A\u8AAD\u307F\u3001\u53F3\u306F\u5BFE\u5FDC\u3059\u308B\u6F22\u5B57/\u8A9E\u3002\u5DE6\u3068\u53F3\u30921\u3064\u305A\u3064\u9078\u3073\u3001\u6B63\u89E3\u3059\u308B\u3068\u307E\u305A\u56F2\u307E\u308C\u307E\u3059\u3002",word_match_guide_chain:"1\u7D44\u76EE\u306F8\u79D2\u4EE5\u5185\u306B\u6B21\u306E\u7D44\u3078\u30021\u7D44\u5897\u3048\u308B\u3054\u3068\u306B0.5\u79D2\u77ED\u304F\u306A\u308A\u307E\u3059\u3002\u56F2\u307E\u308C\u305F\u30D6\u30ED\u30C3\u30AF\u306F\u3060\u3093\u3060\u3093\u901F\u304F\u52D5\u304D\u3001\u6642\u9593\u5207\u308C\u3067\u307E\u3068\u3081\u3066\u6D88\u3048\u3066\u9AD8\u500D\u7387\u306B\u306A\u308A\u307E\u3059\u3002",word_match_guide_wrong:"\u9593\u9055\u3048\u308B\u3068\u73FE\u5728\u306E\u30C1\u30A7\u30FC\u30F3\u304C\u5207\u308C\u3066\u30E9\u30A4\u30D5\u30921\u3064\u5931\u3044\u307E\u3059\u30025\u3064\u5931\u3046\u3068 GAME OVER\u3002",word_match_guide_tools:"\u7206\u5F3E\u306F\u4E2D\u5FC3\u304B\u30893\xD73\u3092\u6D88\u3057\u307E\u3059\u3002\u866B\u773C\u93E1\u306F3\u7D44\u30923\u8272\u30675\u79D2\u9593\u30D2\u30F3\u30C8\u8868\u793A\u3057\u307E\u3059\u3002",word_match_guide_score:"\u5F97\u70B9\u306F\u9577\u3055\u3001\u4F7F\u7528\u983B\u5EA6\u3001Combo\u3001\u500D\u7387\u3001\u30C1\u30A7\u30FC\u30F3\u6570\u3067\u6C7A\u307E\u308A\u307E\u3059\u30025\u5206\u3067\u30CF\u30A4\u30B9\u30B3\u30A2\u3092\u72D9\u3044\u307E\u3057\u3087\u3046\u3002",word_match_guide_start:"\u308F\u304B\u3063\u305F\u3001\u958B\u59CB",word_match_goal:"\u30B9\u30C6\u30FC\u30B8",word_match_level_label:"\u7B2C{0}\u9762 {1}\u5217\xD7{2}\u6BB5",word_match_level_clear:"\u7B2C{0}\u9762\u30AF\u30EA\u30A2\uFF01",word_match_level_clear_hint:"\u30AF\u30EA\u30A2\uFF01\u6B21\u306E\u30B9\u30C6\u30FC\u30B8\u3078\u2026\u2026",word_match_power:"\u500D\u7387",word_match_goal_pairs:"{0}\u7D44\u6D88\u3059",word_match_goal_score:"{0}\u70B9",word_match_goal_combo:"{0}\u9023\u7D9A",word_match_goal_done_bonus:"\u76EE\u6A19\u9054\u6210 +15\u79D2 \u6B21\u56DE\xD72",word_match_life_title:"\u6B8B\u308A\u30E9\u30A4\u30D5 {0}/5",word_match_life_empty:"\u30E9\u30A4\u30D5\u5207\u308C",word_match_bomb_hint:"\u{1F4A3} \u4E2D\u5FC3\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u9078\u3076\u3068\u5468\u56F23\xD73\u3092\u6D88\u3057\u307E\u3059",word_match_invite_title:"\u77ED\u8A5E\u6D88\u3057 - \u65E5\u672C\u8A9E\u30DE\u30C3\u30C1\u30D1\u30BA\u30EB",word_match_invite_text:"\u65E5\u672C\u8A9E\u306E\u77ED\u8A5E\u30DE\u30C3\u30C1\u30D1\u30BA\u30EB\u306B\u6311\u6226\uFF01\u30C1\u30A7\u30FC\u30F3\u3001\u30A2\u30A4\u30C6\u30E0\u3001\u30B9\u30C6\u30FC\u30B8\u3092\u904A\u3073\u306A\u304C\u3089\u5358\u8A9E\u3092\u899A\u3048\u3088\u3046\u3002",word_match_invite_copied:"\u30B2\u30FC\u30E0\u62DB\u5F85\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",word_match_music_toggle:"BGM",word_match_sfx_toggle:"\u52B9\u679C\u97F3",word_match_voice_toggle:"\u8AAD\u307F\u4E0A\u3052",word_match_music_short:"BGM",word_match_sfx_short:"\u52B9\u679C",word_match_voice_short:"\u8AAD\u97F3",word_match_special_seconds:"+{0}\u79D2",word_match_special_hint:"\u30D2\u30F3\u30C8",word_match_special_mult:"\u6B21\u56DE\xD72",word_match_start:"\u30B9\u30BF\u30FC\u30C8",word_match_game_over:"GAME OVER",word_match_chain_tip:"1\u7D44\u76EE\u3092\u56F2\u3093\u3060\u5F8C\u30018\u79D2\u4EE5\u5185\u306B\u7D9A\u3051\u308B\u3068\u30C1\u30A7\u30FC\u30F3\u500D\u7387\u30A2\u30C3\u30D7",word_match_score:"\u5F97\u70B9",word_match_best:"\u6700\u9AD8",word_match_time:"\u6642\u9593",word_match_timeup:"\u6642\u9593\u5207\u308C\uFF01",word_match_plus:"+",word_match_combo:"\u9023\u7D9A",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"\u8AAD\u307F",word_match_word:"\u6F22\u5B57",word_match_hint:"\u5DE6\u306F\u8AAD\u307F\u3001\u53F3\u306F\u6F22\u5B57\u3002\u6B63\u89E3\u3059\u308B\u3068\u307E\u305A\u56F2\u307E\u308C\u3001\u30C1\u30A7\u30FC\u30F3\u7D99\u7D9A\u307E\u305F\u306F\u6642\u9593\u5207\u308C\u3067\u307E\u3068\u3081\u3066\u6D88\u3048\u307E\u3059\u3002",word_match_complete:"\u5B8C\u4E86\uFF01\u3059\u3079\u3066\u6D88\u3048\u307E\u3057\u305F\u3002",hide_meaning:"\u610F\u5473\u3092\u96A0\u3059",reset_settings:"\u8A2D\u5B9A\u30EA\u30BB\u30C3\u30C8",reset_today:"\u4ECA\u65E5\u30EA\u30BB\u30C3\u30C8",clear_all:"\u5168\u6D88\u53BB",refresh_app:"\u66F4\u65B0/\u518D\u8AAD\u307F\u8FBC\u307F",refreshing_app:"\u66F4\u65B0\u4E2D...",today_label:"\u4ECA\u65E5\uFF1A",today_unit:" \u554F",correct_label:"\u6B63\u89E3\uFF1A",wrong_label:"\u4E0D\u6B63\u89E3\uFF1A",done_label:"\u5B8C\u4E86\uFF1A",rounds_unit:" \u56DE",round_prefix:"\u7B2C",round_suffix:"\u56DE",btn_back:"\u623B\u308B",btn_next:"\u6B21\u3078",btn_speak:"\u767A\u97F3\u518D\u751F",btn_speaking:"\u518D\u751F\u4E2D",btn_check:"\u9001\u4FE1",btn_answer:"\u89E3\u7B54",btn_show:"\u7B54\u3048\u3092\u898B\u308B",btn_finish:"\u7D42\u4E86",q_what_meaning:" \u306F\u3069\u3046\u3044\u3046\u610F\u5473\uFF1F",q_how_read_meaning:"\u300D\u306E\u8AAD\u307F\u306F\uFF1F",q_how_read_meaning_pre:"\u300C",q_how_read:" \u306E\u8AAD\u307F\u306F\uFF1F",q_kanji_of:" \u306E\u6F22\u5B57\u306F\uFF1F",q_kana_of:" \u306E\u4EEE\u540D\u306F\uFF1F",q_writing_of:" \u306E\u66F8\u304D\u65B9\u306F\uFF1F",q_word_synonym:" \u306E\u985E\u7FA9\u8A9E\u306F\uFF1F",q_word_near:" \u306B\u8FD1\u3044\u610F\u5473\u306E\u8A9E\u306F\uFF1F",q_word_antonym:" \u306E\u53CD\u5BFE\u8A9E\u306F\uFF1F",rel_synonym:"\u985E\u7FA9",rel_near:"\u8FD1\u7FA9",rel_antonym:"\u53CD\u5BFE",input_kana:"\u4EEE\u540D\u3092\u5165\u529B",input_romaji:"\u30ED\u30FC\u30DE\u5B57\u3092\u5165\u529B",input_placeholder:"\u7B54\u3048\u3092\u5165\u529B",result_correct:"\u6B63\u89E3\uFF1A",result_wrong:"\u4E0D\u6B63\u89E3\u3002\u6B63\u89E3\uFF1A",result_wrong2:"\u9055\u3044\u307E\u3059\u3002\u6B63\u89E3\uFF1A",n2_original:"\u539F\u6587\uFF1A",n2_translation:"\u8A33\u6587\uFF1A",result_answer:"\u7B54\u3048\uFF1A",meaning_label:"\u610F\u5473\uFF1A",meaning_hidden:"\u610F\u5473\uFF1A***",alert_reset_settings:"\u8A2D\u5B9A\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",alert_reset_today:"\u4ECA\u65E5\u306E\u7D71\u8A08\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",alert_clear_all:"\u5168\u30C7\u30FC\u30BF\u3092\u6D88\u53BB\u3057\u307E\u3057\u305F",alert_reset_jlpt_progress:"JLPT\u5B66\u7FD2\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",alert_reset_sentence_progress:"800\u6587\u306E\u5B66\u7FD2\u9032\u5EA6\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3057\u305F",confirm_clear_all:"\u5168\u3066\u306E\u7D71\u8A08\u3068\u9593\u9055\u3044\u8A18\u9332\u3092\u6D88\u53BB\u3057\u307E\u3059\u304B\uFF1F",please_answer:"\u5148\u306B\u7B54\u3048\u3066\u304F\u3060\u3055\u3044\uFF01",please_input:"\u7B54\u3048\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",ready:"\u6E96\u5099\u4E2D...",finish_done:"\u5B8C\u4E86\uFF01\u6240\u8981\u6642\u9593 ",finish_acc:"\u3001\u6B63\u89E3\u7387 ",data_error:"\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002HTTP\u30B5\u30FC\u30D0\u30FC\u7D4C\u7531\u3067\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u304F\u3060\u3055\u3044"},en:{title:"Nihongo Class",subtitle:"Choose a practice module",mod_kana:"50 Kana",mod_kana_desc:"Seion, Dakuon, Yoon",mod_word:"Daily Words",mod_word_desc:"Vocab, synonyms & antonyms",mod_games_icon:"Game",mod_games:"Games",mod_games_desc:"Match\u30FBTraining",games_title:"Choose a game",mod_word_match_icon:"\u6D88",mod_word_match:"Word Match",mod_word_match_desc:"Endless 3-pair clear",mod_cultivate_game:"Japanese Cultivation",mod_cultivate_game_desc:"Train\u30FBGear\u30FBBattle",mod_blade_game:"Word Blade King",mod_blade_game_desc:"Spinning blades, match words",blade_new:"Restart",blade_score:"Score",blade_knives:"Blades",blade_level:"Level",blade_time:"Time",blade_help:"Drag to move. Match the word above your head with the correct answer to defeat targets and gain blades; wrong hits lose blades.",cultivate_title:"Japanese Cultivation",cultivate_reset:"Reset",cultivate_train:"Train once",cultivate_challenge:"Challenge Word Demon",cultivate_power:"Power",cultivate_jade:"Jade",cultivate_stage:"Stage",cultivate_equipment:"Equipment",cultivate_current_equip:"Current gear",cultivate_new_drop:"New drop",cultivate_wear:"Equip",cultivate_battle:"Word Demon Battle",cultivate_insight:"Insight Quiz",cultivate_insight_empty:"Train to reveal an insight quiz.",cultivate_q_meaning:"Choose the meaning",cultivate_q_reading:"Choose the reading",cultivate_reset_confirm:"Reset Japanese Cultivation progress?",cultivate_enemy_name:"Stage {0} Word Demon",cultivate_realm_0:"Kana Imp",cultivate_realm_1:"Gojuon Adept",cultivate_realm_2:"N5 Cultivator",cultivate_realm_3:"N4 Mage",cultivate_realm_4:"N3 Sage",cultivate_realm_5:"N2 Master",cultivate_realm_6:"N1 Archmaster",cultivate_realm_7:"Japanese Master",cultivate_q_normal:"Normal",cultivate_q_rare:"Rare",cultivate_q_epic:"Epic",cultivate_q_legend:"Legendary",cultivate_stat_vocab:"Vocabulary",cultivate_stat_listen:"Listening",cultivate_stat_combo:"Combo",cultivate_stat_focus:"Focus",cultivate_kanji:"Kanji",cultivate_setup_title:"Training Content",cultivate_setup_sub:"Choose which question types can appear. Select at least one.",cultivate_start:"Start Training",cultivate_select_one_script:"Select at least one: Hiragana, Katakana, or Kanji.",cultivate_log_start:"Cultivation begins. Train to gain EXP, jade, and gear.",cultivate_log_train:"Training +{0} EXP +{1} jade, got {3} gear \u201C{2}\u201D.",cultivate_log_equip:"Equipped \u201C{0}\u201D.",cultivate_log_replace:"Equipped \u201C{0}\u201D, replacing \u201C{1}\u201D.",cultivate_log_realm_up:"Realm breakthrough: {0}!",cultivate_log_win:"Victory! +{0} EXP +{1} jade.",cultivate_log_lose:"Defeated, but gained +{0} EXP.",cultivate_log_insight_ok:"Insight success! +{0} EXP +{1} jade, gear power +2.",cultivate_log_insight_ng:"Insight failed. Answer: {0}.",cultivate_log_finish_current:"Finish the current insight/challenge first.",cultivate_train_style_vocab:"vocabulary training",cultivate_train_style_listen:"listening training",cultivate_train_style_focus:"focus meditation",cultivate_log_train_start:"Started {0}: answer the insight to earn base +{1} EXP +{2} jade and determine gear quality.",cultivate_train_question:"Training Insight",cultivate_train_question_desc:"{0} in progress",cultivate_battle_question:"Word Demon Battle",cultivate_battle_question_desc:"You {0} vs Demon {1}",cultivate_log_train_success:"Training success! +{0} EXP +{1} jade, gained {3} gear \u201C{2}\u201D.",cultivate_log_train_fail:"Training failed. Answer: {0}. Still gained +{1} EXP +{2} jade.",cultivate_log_battle_start:"Word demon appeared! Your power {0}, demon power {1}. Answer correctly to attack.",cultivate_log_battle_win:"Breakthrough! Final power {0}/{1}, victory! +{2} EXP +{3} jade.",cultivate_log_battle_not_enough:"Correct but not strong enough: {0}/{1}. Gained +{2} EXP. Train or equip first.",cultivate_log_battle_lose:"The demon saw through you. Answer: {0}. Gained +{1} EXP.",mod_kanji:"Kanji Words",mod_kanji_desc:"Kanji reading & writing",mod_n2:"JLPT Exam",mod_n2_desc:"N1-N5 Mock Practice",mod_grammar:"Grammar",mod_grammar_icon:"Grammar",mod_grammar_desc:"Verb groups, patterns",mod_sentence:"800 Common Sentences",mod_sentence_icon:"800",mod_sentence_desc:"Patterns & pronunciation",mod_songs:"Japanese Songs",mod_songs_icon:"Song",mod_songs_desc:"Local lyrics, line study",songs_title:"Japanese Songs",songs_intro_title:"Local lyrics study",songs_intro:"Choose a song and paste your own Japanese lyrics. They stay in this browser only; each line gets furigana and can be played separately.",song_close:"Close",song_local_notice:"Full lyrics are not built in or uploaded. Pasted lyrics are saved only in this browser.",song_paste_label:"Paste Japanese lyrics",song_paste_placeholder:"One Japanese lyric line per row. Optional: lyric<Tab>your note.",song_save:"Save & add readings",song_clear:"Clear this song",song_clear_confirm:"Clear the locally saved lyrics for this song?",song_no_lyrics:"No lyrics yet. Paste Japanese lyrics you own, then save.",song_line_play:"Play this line",song_lines_count:"{0} lines",song_not_added:"Not added",song_reading_label:"Reading: ",song_translation_label:"Translation/note: ",grammar_practice_btn:"Start Practice",grammar_practice_title:"Practice",gp_submit:"Submit",gp_right:"Right: ",gp_answer:"Answer: ",gp_wrong:"Wrong. ",gp_again:"Try again",gp_summary_sub:"Total {0} \xB7 Correct {1} \xB7 Wrong {2}",gp_summary_time:"Time ",jlpt_level_label:"Level",jlpt_mode_label:"Study Type",jlpt_mode_quiz:"Quiz Mode",jlpt_mode_study:"Answer Study",jlpt_mode_progressive:"Progressive Study",jlpt_study_answer:"Study: ",jlpt_study_done:"Studied {0} questions",jlpt_progress_badge:"Progress {0} / {1}",jlpt_reset_progress:"Reset Study Progress",sentence_mode_label:"Study mode",sentence_mode_progressive:"Progressive study",sentence_mode_study:"Random study",sentence_mode_quiz_jp_zh:"Japanese\u2192Chinese",sentence_mode_quiz_zh_jp:"Chinese\u2192Japanese",sentence_reset_progress:"Reset 800-sentence progress",sentence_progress_badge:"800-sentence progress {0} / {1}",sentence_pattern_label:"Pattern: ",sentence_level_label:"Level: ",sentence_translation_label:"Translation: ",sentence_note_label:"Note: ",sentence_note_generic:"Study point: the key expression in this sentence is \u201C{0}\u201D. Read it with the translation and notice how it connects to the surrounding words.",sentence_why_not_label:"Why not the other forms:",sentence_quiz_jp_zh:"Choose the Chinese meaning of this Japanese sentence",sentence_quiz_zh_jp:"Choose the Japanese sentence for this Chinese meaning",sentence_study_answer:"Study: ",sentence_study_done:"Studied {0} sentences",no_questions:"No questions available",n2_cat_label:"Question Types (multi-select)",n2_kanji_reading:"Kanji Reading",n2_orthography:"Orthography",n2_context_vocab:"Contextual Vocab",n2_paraphrase:"Paraphrase",n2_usage:"Usage",n2_grammar:"Grammar",n2_q_reading:"What is the reading of the underlined word?",n2_q_ortho:"What is the kanji for the underlined word?",n2_q_context:"Choose the best word for the blank",n2_q_para:"Which is closest in meaning?",n2_q_usage:"Which sentence uses the word correctly?",n2_q_grammar:"Choose the best grammar for the blank",content_label:"Content (multi-select)",content_kana:"50 Kana",content_word:"Daily Words",content_kanji:"Kanji Words",content_wrong:"Wrong First",group_kana_title:"Kana Settings",group_word_title:"Daily Words Settings",group_kanji_title:"Kanji Words Settings",mode_type:"Mode",set_label:"Set",kana_mode_label:"Kana Mode",session_size_label:"Questions",other_options:"Options",kana_hira:"Hiragana",kana_kata:"Katakana",mode_rm_mc:"Romaji \u2192 Kana",mode_jp_mc:"Kana \u2192 Romaji",mode_rm_in:"Romaji Input",mode_jp_in:"Kana Input",mode_rm_mean:"Reading \u2192 Meaning",mode_mean_rm:"Meaning \u2192 Reading",word_relation_label:"Word Relations",mode_word_synonym:"Synonyms",mode_word_near:"Near Synonyms",mode_word_antonym:"Antonyms",mode_kanji_read:"Kanji \u2192 Reading",mode_read_kanji:"Reading \u2192 Kanji",mode_kanji_mean:"Kanji \u2192 Meaning",set_seion:"Seion",set_dakuon:"Dakuon",set_handakuon:"Handakuon",set_yoon:"Y\u014Don",start_btn:"Start Practice",word_match_new:"New round",word_match_invite:"Invite",word_match_guide_btn:"Tutorial",word_match_setup_title:"Before start",word_match_kana_label:"Left kana display",word_match_hira:"Hiragana",word_match_kata:"Katakana",word_match_difficulty:"Difficulty",word_match_easy:"Easy: starts at 1 column \xD7 3 rows",word_match_medium:"Medium: starts at 2 columns \xD7 3 rows",word_match_hard:"Hard: starts at 3 columns \xD7 3 rows",word_match_start_game:"Start game",word_match_select_one_kana:"Select at least one kana type.",word_match_guide_level:"Tutorial",word_match_guide_title:"Word Match tutorial",word_match_guide_prompt_0:"Tap the glowing kana on the left: \u306D\u3053.",word_match_guide_prompt_1:"Now tap the matching kanji on the right: \u732B.",word_match_guide_prompt_2:"The 1st pair is marked, not cleared yet. Continue with another kana.",word_match_guide_prompt_3:"After selecting it, tap the matching kanji: \u6C34.",word_match_guide_prompt_4:"Two pairs are marked. The color changed and chain multiplier is higher. Tap the glowing Next button to see time pressure.",word_match_guide_prompt_5:"As time runs down, marked tiles move faster. Tap Next to see scoring.",word_match_guide_prompt_6:"When the chain ends, all marked tiles burst together and refill.",word_match_guide_prompt_7:"Now try a wrong match: tap the glowing \u3084\u307E first.",word_match_guide_prompt_7b:"Now intentionally tap the wrong \u6C34 and watch the heart penalty.",word_match_guide_prompt_7c:"Wrong matches shake and cost one heart. Tap Next for tools.",word_match_guide_prompt_8:"Tutorial: tap the glowing bomb.",word_match_guide_prompt_8_pick:"Bomb armed. Now tap the glowing center tile, just like the real game, to choose the blast point.",word_match_guide_prompt_8b:"Bombs burst a wide area. Tap Next for magnifier.",word_match_guide_prompt_8c:"Tap the glowing magnifier.",word_match_guide_prompt_8d:"Magnifier marks 3 pairs as \u2460\u2461\u2462: same number and same color mean one pair, lasting 5 seconds. Tap Next to start.",word_match_guide_prompt_9:"Now start the real game.",word_match_guide_tool_prompt:"Tools will light up later.",word_match_guide_next:"Next",word_match_guide_basic:"Left side is kana reading; right side is the matching kanji/word. Pick one from each side. Correct pairs are marked first.",word_match_guide_chain:"After the 1st pair you have 8 seconds to find another; each extra pair shortens the window by 0.5s. Marked tiles move faster, then clear together for a high chain score.",word_match_guide_wrong:"A wrong match breaks the current chain and costs one heart. Lose all 5 hearts and it is GAME OVER.",word_match_guide_tools:"Bomb clears a 3\xD73 area from the center tile. Magnifier highlights 3 matching pairs in 3 colors for 5 seconds.",word_match_guide_score:"Score depends on word length, frequency, Combo, power multiplier, and chain size. Aim for a high score within 5 minutes.",word_match_guide_start:"Got it",word_match_goal:"Level",word_match_level_label:"Level {0} {1} cols \xD7 {2} rows",word_match_level_clear:"Level {0} clear!",word_match_level_clear_hint:"Cleared! Preparing next level...",word_match_power:"Power",word_match_goal_pairs:"Clear {0} pairs",word_match_goal_score:"Score {0}",word_match_goal_combo:"Combo {0}",word_match_goal_done_bonus:"Goal complete +15s Next \xD72",word_match_life_title:"Lives left {0}/5",word_match_life_empty:"No lives left",word_match_bomb_hint:"\u{1F4A3} Choose a center tile to clear the surrounding 3\xD73",word_match_invite_title:"Word Match - Japanese puzzle game",word_match_invite_text:"Try this Japanese word matching puzzle with chains, tools, and levels!",word_match_invite_copied:"Game invite link copied",word_match_music_toggle:"Background music",word_match_sfx_toggle:"Game sound effects",word_match_voice_toggle:"Reading voice",word_match_music_short:"Music",word_match_sfx_short:"SFX",word_match_voice_short:"Voice",word_match_special_seconds:"+{0}s",word_match_special_hint:"Hint",word_match_special_mult:"Next \xD72",word_match_start:"START",word_match_game_over:"GAME OVER",word_match_chain_tip:"First pair marked. Continue within 8s for chain multiplier",word_match_score:"Score",word_match_best:"Best",word_match_time:"Time",word_match_timeup:"Time up!",word_match_plus:"+",word_match_combo:"Combo",word_match_combo_two:"DOUBLE!",word_match_combo_start:"TRIPLE!",word_match_combo_nice:"NICE COMBO!",word_match_combo_hot:"HOT STREAK!",word_match_combo_great:"GREAT!",word_match_combo_super:"SUPER!",word_match_combo_amazing:"AMAZING!",word_match_combo_unstoppable:"UNSTOPPABLE!",word_match_combo_legend:"LEGEND!",word_match_combo_godlike:"GODLIKE!",word_match_combo_master:"JAPANESE MASTER!",word_match_reading:"Reading",word_match_word:"Kanji",word_match_hint:"Left is reading, right is kanji. Correct pairs are marked first, then clear together when the chain ends.",word_match_complete:"Complete! All cleared.",hide_meaning:"Hide Meanings",reset_settings:"Reset Settings",reset_today:"Reset Today",clear_all:"Clear All",refresh_app:"Refresh/Update",refreshing_app:"Refreshing...",today_label:"Today: ",today_unit:" Q",correct_label:"Correct: ",wrong_label:"Wrong: ",done_label:"Done: ",rounds_unit:" rounds",round_prefix:"Round ",round_suffix:"",btn_back:"Exit",btn_next:"Next",btn_speak:"Play Audio",btn_speaking:"Playing",btn_check:"Submit",btn_answer:"Answer",btn_show:"Show Answer",btn_finish:"Finish",q_what_meaning:" \u2014 what does it mean?",q_how_read_meaning:'" \u2014 how to read?',q_how_read_meaning_pre:'"',q_how_read:" \u2014 how to read?",q_kanji_of:" \u2014 which kanji?",q_kana_of:" \u2014 which kana?",q_writing_of:" \u2014 how to write?",q_word_synonym:" \u2014 synonym?",q_word_near:" \u2014 near synonym?",q_word_antonym:" \u2014 antonym?",rel_synonym:"Synonym",rel_near:"Near synonym",rel_antonym:"Antonym",input_kana:"Type kana",input_romaji:"Type romaji",input_placeholder:"Type answer",result_correct:"Correct: ",result_wrong:"Wrong. Answer: ",result_wrong2:"Wrong. Answer: ",n2_original:"Original: ",n2_translation:"Translation: ",result_answer:"Answer: ",meaning_label:"Meaning: ",meaning_hidden:"Meaning: ***",alert_reset_settings:"Settings reset",alert_reset_today:"Today's stats reset",alert_clear_all:"All data cleared",alert_reset_jlpt_progress:"JLPT study progress reset",alert_reset_sentence_progress:"800-sentence study progress reset",confirm_clear_all:"Clear all stats and wrong records?",please_answer:"Please answer first!",please_input:"Please type an answer",ready:"Ready...",finish_done:"Done! Time: ",finish_acc:", Accuracy: ",data_error:"Failed to load data. Please access via HTTP server (e.g. GitHub Pages or local server)"}},mf="kana_quiz_lang",Io=localStorage.getItem(mf)||"zh-CN";function C(n,...e){let i=(Po[Io]||Po["zh-CN"])[n]??Po["zh-CN"][n]??n;return e.forEach((s,r)=>{i=i.replace(`{${r}}`,s)}),i}function yn(){return Io}function _f(n){Po[n]&&(Io=n,localStorage.setItem(mf,n),Lo())}function Lo(){document.querySelectorAll("[data-i18n]").forEach(n=>{let e=n.getAttribute("data-i18n");if(n.tagName==="OPTION")n.textContent=C(e);else if(!(n.tagName==="INPUT"&&n.type==="checkbox"))if(n.tagName==="LABEL"){let t=n.querySelector("input");if(t){let i=C(e);n.textContent="",n.appendChild(t),n.append(" "+i)}else n.textContent=C(e)}else n.textContent=C(e)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(n=>{n.setAttribute("placeholder",C(n.getAttribute("data-i18n-placeholder")))}),document.title=C("title"),document.querySelectorAll(".lang-btn").forEach(n=>{n.classList.toggle("active",n.dataset.lang===Io)})}var gf=null,qs=null,Qt=!1,js=new TextEncoder,Ox=new TextDecoder;function kr(){try{let n=new Uint32Array(1);return crypto.getRandomValues(n),n[0]>>>0}catch{let n=typeof performance<"u"&&performance.now?performance.now():0;return Date.now()>>>0^Math.trunc(n*1e3)>>>0}}function Pe(n){let e=Number(n)>>>0;return e?kr()%e:null}function Jn(n){let e=Number(n)>>>0,t=Array.from({length:e},(i,s)=>s);for(let i=e-1;i>0;i-=1){let s=kr()%(i+1);[t[i],t[s]]=[t[s],t[i]]}return t}function cn(){return gf?.exports||null}function Xs(n){let e=cn();if(!e?.alloc||!qs)return null;let t=e.alloc(n.length);return new Uint8Array(qs.buffer,t,n.length).set(n),{ptr:t,len:n.length}}function Ks(n){let e=cn();if(!n||!e?.free_result||!qs)return"";let t=new Uint8Array(qs.buffer),i=t[n]|t[n+1]<<8|t[n+2]<<16|t[n+3]<<24,s=t.slice(n+4,n+4+i);return e.free_result(n),Ox.decode(s)}async function vf(n="./wasm/furigana_engine.wasm"){if(!("WebAssembly"in window))return!1;try{let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`WASM load failed: ${e.status}`);let t=await e.arrayBuffer(),{instance:i}=await WebAssembly.instantiate(t,{});return gf=i,qs=i.exports.memory,Qt=!!(qs&&i.exports.kana_reading&&i.exports.choice_indices&&i.exports.normalize_romaji&&i.exports.record_result&&i.exports.weighted_pick&&i.exports.pct_value&&i.exports.ranked_indices&&i.exports.start_session&&i.exports.inflected_surface&&i.exports.parse_song_lyrics),Qt}catch(e){return console.warn("WASM furigana engine unavailable; using JS fallback",e),Qt=!1,!1}}function yf(n,e){let t=cn();if(!Qt||!t?.kana_reading||!t?.dealloc)return null;let i=(e||[]).filter(c=>c?.kanji&&c?.reading).map(c=>`${c.kanji}	${c.reading}`).join(`
`),s=js.encode(String(n||"")),r=js.encode(i),a=Xs(s),o=Xs(r);if(!a||!o)return null;try{let c=t.kana_reading(a.ptr,a.len,o.ptr,o.len);return Ks(c)}finally{t.dealloc(a.ptr,a.len),t.dealloc(o.ptr,o.len)}}function Nr(n,e,t,i=kr()){let s=cn();if(!Qt||!s?.choice_indices)return null;let r=s.choice_indices(n>>>0,e>>>0,t>>>0,i>>>0),a=Ks(r);if(!a||!a.includes("|"))return null;let[o,c]=a.split("|"),l=o.split(",").filter(Boolean).map(d=>Number.parseInt(d,10)),u=Number.parseInt(c,10);return!l.length||!Number.isFinite(u)||u<0||u>=l.length||l.some(d=>!Number.isInteger(d)||d<0||d>=n)?null:{indices:l,correctSlot:u}}function Dr(n,e){let t=cn();return!Qt||!t?.is_correct_choice?null:t.is_correct_choice(Number(n)|0,Number(e)|0)===1}function xf(n,e){let t=cn();if(!Qt||!t?.pct_value)return null;let i=t.pct_value(n>>>0,e>>>0);return Ks(i)}function ko(n,e=kr()){let t=cn();if(!Qt||!t?.weighted_pick||!t?.dealloc)return null;let i=(n||[]).map(a=>Math.max(0,Number(a)||0)).join(","),s=js.encode(i),r=Xs(s);if(!r)return null;try{let a=t.weighted_pick(r.ptr,r.len,e>>>0);return Number.isInteger(a)&&a>=0&&a<n.length?a:null}finally{t.dealloc(r.ptr,r.len)}}function wf(n,e,t,i){let s=cn();if(!Qt||!s?.word_match_score)return null;let r=s.word_match_score(n>>>0,e>>>0,t>>>0,i>>>0);return Number.isFinite(r)?Number(r):null}function Mf(n,e){let t=cn();if(!Qt||!t?.word_match_remaining)return null;let i=t.word_match_remaining(n>>>0,e>>>0);return Number.isFinite(i)?Number(i):null}function bf(n,e){let t=cn();return!Qt||!t?.word_match_is_match?null:t.word_match_is_match(n>>>0,e>>>0)===1}function tu(n,e,t=kr()){let i=cn();if(!Qt||!i?.word_match_indices)return null;let s=i.word_match_indices(n>>>0,e>>>0,t>>>0),r=Ks(s);if(!r)return[];let a=r.split(",").filter(Boolean).map(o=>Number.parseInt(o,10));return a.every(o=>Number.isInteger(o)&&o>=0&&o<n)?a:null}function Sf(n,e){let t=cn();if(!Qt||!t?.inflected_surface||!t?.dealloc)return null;let i=js.encode(String(n||"")),s=js.encode(String(e||"")),r=Xs(i),a=Xs(s);if(!r||!a)return null;try{let o=t.inflected_surface(r.ptr,r.len,a.ptr,a.len),c=Ks(o);if(!c||!c.includes("|"))return null;let[l,u]=c.split("|");return l&&u?{stem:l,surface:u}:null}finally{t.dealloc(r.ptr,r.len),t.dealloc(a.ptr,a.len)}}function Tf(n){let e=cn();if(!Qt||!e?.parse_song_lyrics||!e?.dealloc)return null;let t=js.encode(String(n||"")),i=Xs(t);if(!i)return null;try{let s=e.parse_song_lyrics(i.ptr,i.len),r=Ks(s);return r?r.split(`
`).filter(Boolean).map(a=>{let[o,...c]=a.split("	");return{jp:(o||"").trim(),note:c.join(" ").trim()}}).filter(a=>a.jp):[]}finally{e.dealloc(i.ptr,i.len)}}var Kf=vf("./wasm/furigana_engine.wasm").catch(()=>!1),D=n=>document.getElementById(n),h={moduleScreen:D("moduleScreen"),gamesScreen:D("gamesScreen"),cultivateScreen:D("cultivateScreen"),bladeKingScreen:D("bladeKingScreen"),settingsScreen:D("settingsScreen"),quizScreen:D("quizScreen"),grammarScreen:D("grammarScreen"),grammarTopicScreen:D("grammarTopicScreen"),songsScreen:D("songsScreen"),wordMatchScreen:D("wordMatchScreen"),grammarTopics:D("grammarTopics"),grammarContent:D("grammarContent"),grammarTopicTitle:D("grammarTopicTitle"),btnGrammarBack:D("btnGrammarBack"),btnGrammarTopicBack:D("btnGrammarTopicBack"),btnGrammarPractice:D("btnGrammarPractice"),grammarPracticeScreen:D("grammarPracticeScreen"),btnGrammarPracticeBack:D("btnGrammarPracticeBack"),gpHint:D("gpHint"),gpQ:D("gpQ"),gpOpts:D("gpOpts"),gpResult:D("gpResult"),btnGpNext:D("btnGpNext"),btnGpSubmit:D("btnGpSubmit"),gpProgressFill:D("gpProgressFill"),gpDone:D("gpDone"),gpTotal:D("gpTotal"),gpOk:D("gpOk"),gpNg:D("gpNg"),songsList:D("songsList"),songDetail:D("songDetail"),songDetailTitle:D("songDetailTitle"),songDetailMeta:D("songDetailMeta"),songLyricsInput:D("songLyricsInput"),songLines:D("songLines"),btnSongsBack:D("btnSongsBack"),btnSongClose:D("btnSongClose"),btnSongSave:D("btnSongSave"),btnSongClear:D("btnSongClear"),settingsTitle:D("settingsTitle"),btnBackToModules:D("btnBackToModules"),settingsKana:D("settingsKana"),settingsWord:D("settingsWord"),settingsKanji:D("settingsKanji"),settingsN2:D("settingsN2"),settingsSentence:D("settingsSentence"),q:D("q"),meaning:D("meaning"),opts:D("opts"),inputWrap:D("inputWrap"),inp:D("inp"),result:D("result"),modeChecksKana:D("modeChecksKana"),modeChecksWord:D("modeChecksWord"),modeChecksKanji:D("modeChecksKanji"),modeChecks:D("modeChecks"),n2CatChecks:D("n2CatChecks"),jlptLevelChecks:D("jlptLevelChecks"),jlptModeChecks:D("jlptModeChecks"),btnResetJlptProgress:D("btnResetJlptProgress"),sentenceModeChecks:D("sentenceModeChecks"),btnResetSentenceProgress:D("btnResetSentenceProgress"),kanaSetChecks:D("kanaSetChecks"),kanaMode:D("kanaMode"),sessionSize:D("sessionSize"),hideMeaning:D("hideMeaning"),wrongFirst:D("wrongFirst"),btnNew:D("btnNew"),btnSpeak:D("btnSpeak"),btnCheck:D("btnCheck"),btnShow:D("btnShow"),btnStartSession:D("btnStartSession"),btnBack:D("btnBack"),btnResetSettings:D("btnResetSettings"),btnResetDay:D("btnResetDay"),btnRefreshApp:D("btnRefreshApp"),btnResetAllStats:D("btnResetAllStats"),btnGamesBack:D("btnGamesBack"),btnCultivateBack:D("btnCultivateBack"),btnCultivateReset:D("btnCultivateReset"),cultivateSetup:D("cultivateSetup"),cultivateUseHira:D("cultivateUseHira"),cultivateUseKata:D("cultivateUseKata"),cultivateUseKanji:D("cultivateUseKanji"),btnCultivateStart:D("btnCultivateStart"),cultivateSetupHint:D("cultivateSetupHint"),btnCultivateTrain:D("btnCultivateTrain"),btnCultivateChallenge:D("btnCultivateChallenge"),btnCultivateEquip:D("btnCultivateEquip"),cultivateRealm:D("cultivateRealm"),cultivateExpText:D("cultivateExpText"),cultivateExpFill:D("cultivateExpFill"),cultivatePower:D("cultivatePower"),cultivateJade:D("cultivateJade"),cultivateStage:D("cultivateStage"),cultivateEquip:D("cultivateEquip"),cultivateDrop:D("cultivateDrop"),cultivateInsight:D("cultivateInsight"),cultivateInsightQ:D("cultivateInsightQ"),cultivateInsightOptions:D("cultivateInsightOptions"),cultivateEnemy:D("cultivateEnemy"),cultivateEnemyPower:D("cultivateEnemyPower"),cultivateLog:D("cultivateLog"),btnBladeBack:D("btnBladeBack"),btnBladeNew:D("btnBladeNew"),bladeCanvas:D("bladeCanvas"),bladeOverlay:D("bladeOverlay"),bladeScore:D("bladeScore"),bladeKnives:D("bladeKnives"),bladeLevel:D("bladeLevel"),bladeTime:D("bladeTime"),btnWordMatchBack:D("btnWordMatchBack"),btnWordMatchNew:D("btnWordMatchNew"),btnWordMatchMusic:D("btnWordMatchMusic"),btnWordMatchSfx:D("btnWordMatchSfx"),btnWordMatchVoice:D("btnWordMatchVoice"),btnWordMatchInvite:D("btnWordMatchInvite"),btnWordMatchGuide:D("btnWordMatchGuide"),btnWordMatchBomb:D("btnWordMatchBomb"),btnWordMatchMagnifier:D("btnWordMatchMagnifier"),wmSetup:D("wmSetup"),wmKanaHira:D("wmKanaHira"),wmKanaKata:D("wmKanaKata"),btnWordMatchStart:D("btnWordMatchStart"),wmSetupHint:D("wmSetupHint"),wmScore:D("wmScore"),wmLeft:D("wmLeft"),wmWrong:D("wmWrong"),wmTime:D("wmTime"),wmCombo:D("wmCombo"),wmGoal:D("wmGoal"),wmPower:D("wmPower"),wmTools:D("wmTools"),wmLives:D("wmLives"),wmReadings:D("wmReadings"),wmWords:D("wmWords"),wmMessage:D("wmMessage"),wmOverlay:D("wmOverlay"),wmGuide:D("wmGuide"),wmGuideClose:D("wmGuideClose"),wmGuideStart:D("wmGuideStart"),wmGuidePrompt:D("wmGuidePrompt"),wmGuideScore:D("wmGuideScore"),wmGuideCombo:D("wmGuideCombo"),wmGuideHearts:D("wmGuideHearts"),wmGuideToolLabel:D("wmGuideToolLabel"),s_done:D("s_done"),s_size:D("s_size"),s_ok:D("s_ok"),s_ng:D("s_ng"),streak:D("streak"),progressFill:D("progressFill"),timer:D("timer"),s_acc_display:D("s_acc_display"),d_total_start:D("d_total_start"),d_ok_start:D("d_ok_start"),d_ng_start:D("d_ng_start"),d_rounds_start:D("d_rounds_start"),s_round:D("s_round"),d_total:D("d_total"),d_ok:D("d_ok"),d_ng:D("d_ng"),d_acc:D("d_acc"),s_acc:D("s_acc"),tips:D("tips")},G=$d(),ge=po(),Fe={kana:[],words:[],wordRelations:[],kanji:[],sentences:[],songs:[],n2Questions:[],jlptBanks:{},meanings:{},furiganaExtra:{}},$=null,mt=!1,Ut=G.module||"kana",sr=[],wu=[],ei=new Set,Ri=new Set,Se=null,Ai=null,xn=null,zr=0,Js=null,ti=null,Yi=null,Uo=0,nu=null,we=0,au=null,Mu=3,ou=4;function Qi(n="",e=""){h.wmOverlay&&(h.wmOverlay.textContent=n,h.wmOverlay.className=`wm-overlay${n?"":" hide"}${e?" "+e:""}`,h.wmOverlay.setAttribute("aria-hidden",n?"false":"true"))}function or(n=""){h.wmOverlay&&(!n||h.wmOverlay.classList.contains(n))&&Qi("")}function Ef(n){n&&(n.chainActive=!1,n.chainDeadline=0,n.chainMultiplier=1,n.chainCount=0,n.chainPendingPairs=[],n.chainPendingBaseIds=new Set,n.chainPendingIds=new Set,or("chain"))}function Fx(n){return`chain-mark-${Math.min(6,Math.max(1,Number(n)||1))}`}function Bx(){let n=Se;if(!n||!n.chainActive||n.finished)return!1;if(n.busy)return!0;let e=(n.chainDeadline||0)-Date.now();if(e<=0)return cu(),!1;let t=Math.max(.12,Math.min(1.35,.16+e/7e3));return document.querySelectorAll("#wordMatchScreen .wm-tile.paired").forEach(i=>i.style.setProperty("--wm-chain-speed",`${t}s`)),or("chain"),!0}function zx(){let n=Se;if(!n)return 1;let e=n.chainActive&&Date.now()<=(n.chainDeadline||0);n.chainCount=e?(n.chainCount||1)+1:1,n.chainMultiplier=Math.min(64,2**Math.max(0,n.chainCount-1)),n.chainActive=!0;let t=Math.max(0,8500-n.chainCount*500);return n.chainDeadline=Date.now()+t,n.chainMultiplier}function Yf(n){if(!n||n.guideMode)return!1;let e=new Set([...n.leftSlots||[],...n.rightSlots||[]].map(i=>i._wmBaseId));if(!e.size)return!1;let t=n.chainPendingBaseIds||new Set;return[...e].every(i=>t.has(i))}function cu(){let n=Se;if(!n)return;let e=Array.isArray(n.chainPendingPairs)?n.chainPendingPairs.slice():[];if(!e.length){Ef(n),ut();return}let t=new Set,i=new Set,s=Yf(n),r=0,a="";e.forEach((l,u)=>{i.add(l.baseId),t.add(l.leftId),t.add(l.rightId);let d=Math.min(64,2**u);r+=Math.round((l.baseGain||10)*(l.comboMult||1)*(l.powerMult||1)*d)+(l.fastBonus||0);let f=bw(n,l.specialItem);f&&(a=a?`${a} ${f}`:f)}),s&&(r*=2),n.busy=!0,n.lastGain=r,n.score+=r;let o=_p(n);Tp(n.score),n.removingIds=t,gp(t),n.selectedReading=null,n.selectedWord=null,n.selectedAt=0,n.lastNudgeAt=0,or("chain"),Ee(on),Wo("wm-hit");let c=e[e.length-1]?.rightId||e[0]?.leftId;Wr(c,Math.min(70,22+e.length*12)),Lu(c,`+${r}${e.length>1?" \xD7"+e.length:""}${s?" ALL\xD72":""}${a?" "+a:""}${o?" \u2605":""}`,e.length>1||a||o?"special":""),ut(),setTimeout(()=>{n.leftSlots=(n.leftSlots||[]).filter(l=>!i.has(l._wmBaseId)),n.rightSlots=(n.rightSlots||[]).filter(l=>!i.has(l._wmBaseId)),n.removingIds.clear(),Ef(n),n.finiteLevel||Ou(n),!pp(n)&&(n.droppingIds=new Set([...n.leftSlots||[],...n.rightSlots||[]].map(l=>l._wmId)),Ee(Mo),ut(),setTimeout(()=>{Se&&(n.droppingIds.clear(),n.busy=!1,ut())},430))},430)}function ns(n){let e=Math.floor(n/60),t=n%60;return`${e}:${t.toString().padStart(2,"0")}`}function Hx(){ti=Date.now(),Js&&clearInterval(Js),Js=setInterval(()=>{let n=Math.floor((Date.now()-ti)/1e3);h.timer.textContent=ns(n)},1e3),h.timer.textContent="0:00"}function Ci(){Js&&(clearInterval(Js),Js=null)}function Ur(n){return[...n.querySelectorAll('input[type="checkbox"]:checked')].map(e=>e.value)}function Ys(n,e){let t=new Set(e);n.querySelectorAll('input[type="checkbox"]').forEach(i=>{i.checked=t.has(i.value)})}function Vx(n,e,t,i){let s=parseInt(n,10);return Number.isFinite(s)?Math.max(e,Math.min(t,s)):i}var lu={kana:"mod_kana",word:"mod_word",kanji:"mod_kanji",n2:"mod_n2",sentence:"mod_sentence",songs:"mod_songs",wordMatch:"mod_word_match"},Gx={kanji_reading:"n2_q_reading",orthography:"n2_q_ortho",context_vocab:"n2_q_context",paraphrase:"n2_q_para",usage:"n2_q_usage",grammar:"n2_q_grammar"},Wx={kanji_reading:"n2_kanji_reading",orthography:"n2_orthography",context_vocab:"n2_context_vocab",paraphrase:"n2_paraphrase",usage:"n2_usage",grammar:"n2_grammar"},Jf=["kanji_reading","orthography","context_vocab","paraphrase","usage","grammar"],$x=["word_synonym","word_near","word_antonym"],qx=[["\u81EA\u5206","\u3058\u3076\u3093"],["\u7121\u4E8B","\u3076\u3058"],["\u53CB\u4EBA","\u3086\u3046\u3058\u3093"],["\u5BB6\u65CF","\u304B\u305E\u304F"],["\u5834\u5408","\u3070\u3042\u3044"],["\u7406\u7531","\u308A\u3086\u3046"],["\u65B9\u6CD5","\u307B\u3046\u307B\u3046"],["\u7D50\u679C","\u3051\u3063\u304B"],["\u5FC5\u8981","\u3072\u3064\u3088\u3046"],["\u91CD\u8981","\u3058\u3085\u3046\u3088\u3046"],["\u554F\u984C","\u3082\u3093\u3060\u3044"],["\u610F\u5473","\u3044\u307F"],["\u8A00\u8449","\u3053\u3068\u3070"],["\u6642\u9593","\u3058\u304B\u3093"],["\u4ED5\u4E8B","\u3057\u3054\u3068"],["\u4F1A\u8B70","\u304B\u3044\u304E"],["\u4E88\u5B9A","\u3088\u3066\u3044"],["\u8CC7\u6599","\u3057\u308A\u3087\u3046"],["\u8AAC\u660E","\u305B\u3064\u3081\u3044"],["\u78BA\u8A8D","\u304B\u304F\u306B\u3093"],["\u9023\u7D61","\u308C\u3093\u3089\u304F"],["\u96FB\u8A71","\u3067\u3093\u308F"],["\u90E8\u5C4B","\u3078\u3084"],["\u6599\u7406","\u308A\u3087\u3046\u308A"],["\u98DF\u4E8B","\u3057\u3087\u304F\u3058"],["\u5929\u6C17","\u3066\u3093\u304D"],["\u65C5\u884C","\u308A\u3087\u3053\u3046"],["\u5199\u771F","\u3057\u3083\u3057\u3093"],["\u6620\u753B","\u3048\u3044\u304C"],["\u97F3\u697D","\u304A\u3093\u304C\u304F"],["\u65B0\u805E","\u3057\u3093\u3076\u3093"],["\u56F3\u66F8\u9928","\u3068\u3057\u3087\u304B\u3093"],["\u75C5\u9662","\u3073\u3087\u3046\u3044\u3093"],["\u9280\u884C","\u304E\u3093\u3053\u3046"],["\u5E97\u54E1","\u3066\u3093\u3044\u3093"],["\u99C5\u54E1","\u3048\u304D\u3044\u3093"],["\u65E5\u672C","\u306B\u307B\u3093"],["\u65E5\u672C\u8A9E","\u306B\u307B\u3093\u3054"],["\u4E2D\u56FD","\u3061\u3085\u3046\u3054\u304F"],["\u97D3\u56FD","\u304B\u3093\u3053\u304F"],["\u82F1\u8A9E","\u3048\u3044\u3054"],["\u6771\u4EAC","\u3068\u3046\u304D\u3087\u3046"],["\u5927\u962A","\u304A\u304A\u3055\u304B"],["\u4EAC\u90FD","\u304D\u3087\u3046\u3068"],["\u5FD8\u308C\u308B","\u308F\u3059\u308C\u308B"],["\u899A\u3048\u308B","\u304A\u307C\u3048\u308B"],["\u6559\u3048\u308B","\u304A\u3057\u3048\u308B"],["\u4F1D\u3048\u308B","\u3064\u305F\u3048\u308B"],["\u8003\u3048\u308B","\u304B\u3093\u304C\u3048\u308B"],["\u7B54\u3048\u308B","\u3053\u305F\u3048\u308B"],["\u5909\u3048\u308B","\u304B\u3048\u308B"],["\u5E30\u308B","\u304B\u3048\u308B"],["\u59CB\u3081\u308B","\u306F\u3058\u3081\u308B"],["\u7D9A\u3051\u308B","\u3064\u3065\u3051\u308B"],["\u7D42\u308F\u308B","\u304A\u308F\u308B"],["\u623B\u308B","\u3082\u3069\u308B"],["\u9032\u3080","\u3059\u3059\u3080"],["\u901A\u3046","\u304B\u3088\u3046"],["\u9045\u308C\u308B","\u304A\u304F\u308C\u308B"],["\u6B8B\u308B","\u306E\u3053\u308B"],["\u63A2\u3059","\u3055\u304C\u3059"],["\u898B\u3064\u3051\u308B","\u307F\u3064\u3051\u308B"],["\u5C4A\u304F","\u3068\u3069\u304F"],["\u9810\u3051\u308B","\u3042\u305A\u3051\u308B"],["\u8A8D\u3081\u308B","\u307F\u3068\u3081\u308B"],["\u8FF0\u3079\u308B","\u306E\u3079\u308B"],["\u9078\u3076","\u3048\u3089\u3076"],["\u6C7A\u3081\u308B","\u304D\u3081\u308B"],["\u4F7F\u3046","\u3064\u304B\u3046"],["\u4F5C\u308B","\u3064\u304F\u308B"],["\u6301\u3064","\u3082\u3064"],["\u5F85\u3064","\u307E\u3064"],["\u8CB7\u3046","\u304B\u3046"],["\u58F2\u308B","\u3046\u308B"],["\u8AAD\u3080","\u3088\u3080"],["\u66F8\u304F","\u304B\u304F"],["\u805E\u304F","\u304D\u304F"],["\u8A71\u3059","\u306F\u306A\u3059"],["\u8A00\u3046","\u3044\u3046"],["\u898B\u308B","\u307F\u308B"],["\u6765\u308B","\u304F\u308B"],["\u884C\u304F","\u3044\u304F"],["\u98DF\u3079\u308B","\u305F\u3079\u308B"],["\u98F2\u3080","\u306E\u3080"],["\u5165\u308B","\u306F\u3044\u308B"],["\u51FA\u308B","\u3067\u308B"],["\u6FC0\u3057\u3044","\u306F\u3052\u3057\u3044"],["\u7D20\u6674\u3089\u3057\u3044","\u3059\u3070\u3089\u3057\u3044"],["\u65B0\u3057\u3044","\u3042\u305F\u3089\u3057\u3044"],["\u53E4\u3044","\u3075\u308B\u3044"],["\u9AD8\u3044","\u305F\u304B\u3044"],["\u5B89\u3044","\u3084\u3059\u3044"],["\u8FD1\u3044","\u3061\u304B\u3044"],["\u9060\u3044","\u3068\u304A\u3044"],["\u65E9\u3044","\u306F\u3084\u3044"],["\u901F\u3044","\u306F\u3084\u3044"],["\u9045\u3044","\u304A\u305D\u3044"]];function Zs(n){return $x.includes(n)}function ke(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function rr(n){return/[\u4e00-\u9fff々]/.test(String(n||""))}function Zf(n){return/[ァ-ヺー]/.test(String(n||""))}function jx(n){return String(n||"").replace(/[ァ-ヶ]/g,e=>String.fromCharCode(e.charCodeAt(0)-96))}function Qf(n,e){let t=n.slice(e).match(/^[ァ-ヺー]+/);if(!t)return null;let i=t[0];return!i||/^ー+$/.test(i)?null:{surface:i,reading:jx(i)}}function Oo(n,e,t=""){return!n||!e||!rr(n)&&!Zf(n)?ke(n||""):`<ruby${t?` class="${t}"`:""}>${ke(n)}<rt>${ke(e)}</rt></ruby>`}function Ti(n,e,t){!e||!t||!rr(e)||e.length>18||t.length>32||/^[ぁ-ゖァ-ヺー]+$/.test(t)&&(n.has(e)||n.set(e,t))}function bu(n){let e=n.kanji.match(/^([\u4e00-\u9fff々]+)([ぁ-ゖァ-ヺー]+)$/);if(!e||!n.reading.endsWith(e[2]))return null;let t=n.reading.slice(0,-e[2].length);return t?{stem:e[1],baseTail:e[2],readingStem:t}:null}function ep(n,e,t){if(!t||!n.startsWith(t.stem,e))return null;let s=n.slice(e+t.stem.length).match(/^[ぁ-ゖァ-ヺー]+/)?.[0]||"",r=ip(s,!1);return!r||r===t.baseTail?null:{surface:`${t.stem}${r}`,reading:`${t.readingStem}${r}`}}function tp(n){let e=[];if(!n||!Array.isArray(n.options)||typeof n.answer!="number")return e;let t=n.options[n.answer]||"";return n.cat==="kanji_reading"?(n.target&&t&&e.push({kanji:n.target,reading:t}),n._targetSurface&&t&&e.push({kanji:n._targetSurface,reading:t})):n.cat==="orthography"&&n.target&&t&&e.push({kanji:t,reading:n.target}),e}function uu(){let n=new Map;(Fe.kanji||[]).forEach(e=>{Ti(n,e.kanji,e.hira)}),qx.forEach(([e,t])=>Ti(n,e,t)),Object.entries(Fe.furiganaExtra||{}).forEach(([e,t])=>{Ti(n,e,t)}),Object.values(Fe.jlptBanks||{}).flat().forEach(e=>{if(!e||!Array.isArray(e.options)||typeof e.answer!="number")return;let t=e.options[e.answer]||"";if(e.cat==="kanji_reading"){Ti(n,e.target,t);let i=Tu(e);if(i&&e.target){let s=i.stem,r=e.target.slice(s.length),a=i.surface.slice(s.length);Ti(n,i.surface,sp(t,r,a))}}else e.cat==="orthography"&&Ti(n,t,e.target)}),sr=[...n.entries()].map(([e,t])=>({kanji:e,reading:t})).sort((e,t)=>t.kanji.length-e.kanji.length),wu=sr.map(bu).filter(Boolean).sort((e,t)=>t.stem.length-e.stem.length||t.baseTail.length-e.baseTail.length)}function en(n,e=[],t={}){let i=String(n||"");if(!i)return"";if(!rr(i)&&!Zf(i))return ke(i);let s=Array.isArray(t.skip)?t.skip.filter(Boolean):[],r=Array.isArray(e)&&e.length>0,a=sr,o=wu;if(r){let d=new Map;[...e,...sr].forEach(f=>Ti(d,f.kanji,f.reading)),a=[...d.entries()].map(([f,p])=>({kanji:f,reading:p})).sort((f,p)=>p.kanji.length-f.kanji.length),o=a.map(bu).filter(Boolean).sort((f,p)=>p.stem.length-f.stem.length||p.baseTail.length-f.baseTail.length)}let c=a.filter(d=>i.includes(d.kanji)).sort((d,f)=>f.kanji.length-d.kanji.length),l=o.filter(d=>i.includes(d.stem)),u="";for(let d=0;d<i.length;){let f=s.find(g=>g&&i.startsWith(g,d));if(f){u+=ke(f),d+=f.length;continue}let p=c.find(g=>i.startsWith(g.kanji,d));if(p)u+=Oo(p.kanji,p.reading),d+=p.kanji.length;else{let g=l.map(v=>ep(i,d,v)).find(Boolean);if(g)u+=Oo(g.surface,g.reading),d+=g.surface.length;else{let v=Qf(i,d);v?(u+=Oo(v.surface,v.reading,"kata-ruby"),d+=v.surface.length):(u+=ke(i[d]),d+=1)}}}return u}function Su(n){return n?.kanji?n.hira?Oo(n.kanji,n.hira):en(n.kanji):""}function np(n,e="speak"){if(!n)return"";if(n.cat==="usage")return e==="full"&&n.options[n.answer]||"";let t=n.sentence||"",i=n.options[n.answer]||"",s=/[（(][\s　_＿]+[)）]|＿+|_{2,}/g,r=s.test(t);if(s.lastIndex=0,r){let a=e==="full"?i:"B";t=t.replace(s,a)}else e==="full"&&n.cat==="orthography"&&n.target&&i&&(t=t.replace(n.target,i));return t}function Xx(n){return String(n).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var Kx=["\u307E\u305B\u3093\u3067\u3057\u305F","\u3066\u3057\u307E\u3044\u307E\u3057\u305F","\u3067\u3057\u307E\u3044\u307E\u3057\u305F","\u3066\u3057\u307E\u3063\u305F","\u3067\u3057\u307E\u3063\u305F","\u3066\u304F\u3060\u3055\u3044","\u3067\u304F\u3060\u3055\u3044","\u3089\u308C\u306A\u304B\u3063\u305F","\u308C\u306A\u304B\u3063\u305F","\u3055\u305B\u3089\u308C\u305F","\u3055\u305B\u3089\u308C\u308B","\u3055\u305B\u306A\u304B\u3063\u305F","\u305B\u306A\u304B\u3063\u305F","\u306A\u3051\u308C\u3070","\u306A\u304B\u3063\u305F","\u306A\u3044\u3067","\u306A\u304F\u3066","\u306A\u3044","\u306A\u304F","\u305A\u306B","\u3066\u3044\u307E\u3059","\u3067\u3044\u307E\u3059","\u3066\u3044\u307E\u3057\u305F","\u3067\u3044\u307E\u3057\u305F","\u3066\u3044\u308B","\u3067\u3044\u308B","\u3066\u3044\u305F","\u3067\u3044\u305F","\u3089\u308C\u307E\u3059","\u3089\u308C\u307E\u3057\u305F","\u3089\u308C\u308B","\u3089\u308C\u305F","\u308C\u307E\u3059","\u308C\u307E\u3057\u305F","\u308C\u308B","\u308C\u305F","\u3055\u305B\u308B","\u3055\u305B\u305F","\u305B\u308B","\u305B\u305F","\u307E\u3057\u305F","\u307E\u305B\u3093","\u307E\u3059","\u307E\u3057\u3087\u3046","\u305F\u3044","\u305F\u304B\u3063\u305F","\u304B\u3063\u305F\u3089","\u304B\u3063\u305F","\u304F\u306A\u304B\u3063\u305F","\u304F\u306A\u3044","\u304F\u3066","\u3057\u304F\u3066","\u3068\u3057\u305F","\u3068\u3057\u3066","\u306B\u306A\u3063\u305F","\u306B\u306A\u308B","\u3060\u3063\u305F","\u3067\u3057\u305F","\u3063\u3066\u3044\u308B","\u3063\u3066\u3044\u305F","\u3063\u3066\u304F\u3060\u3055\u3044","\u3063\u3066\u3057\u307E\u3063\u305F","\u3063\u3066\u3057\u307E\u3046","\u3063\u305F\u3089","\u3063\u305F","\u3063\u3066","\u3093\u3060\u3089","\u3093\u3060","\u3093\u3067","\u3044\u305F\u3089","\u3044\u305F","\u3044\u3066","\u3044\u3060\u3089","\u3044\u3060","\u3044\u3067","\u3057\u305F\u3089","\u3057\u305F","\u3057\u3066","\u305F\u3089","\u3060\u3089","\u308C\u3070","\u3051\u3070","\u3052\u3070","\u305B\u3070","\u3081\u3070","\u3079\u3070","\u306D\u3070","\u3088\u3046","\u308D\u3046","\u304F","\u305A","\u306C","\u305F","\u3060","\u3066","\u3067"];function ip(n,e=!0){if(!n)return"";let t="";for(let i=1;i<=n.length;i++){let s=n.slice(0,i);Kx.some(r=>s.endsWith(r))&&(t=s)}return t||(e?n:"")}function Tu(n){if(!n||n.cat!=="kanji_reading"||!n.sentence||!n.target||n.sentence.includes(n.target))return null;let e=Sf(n.sentence,n.target);if(e)return e;let t=n.target.match(/^([\u4e00-\u9fff々]+)/);if(!t)return null;let i=t[1],s=n.sentence.match(new RegExp(`${Xx(i)}[\u3041-\u3096\u30A1-\u30FA\u30FC]*`));if(!s||!s[0]||s[0]===n.target)return null;let r=s[0].slice(i.length),a=ip(r),o=`${i}${a}`;return!o||o===n.target?null:{stem:i,surface:o}}function sp(n,e,t){return!n||!e||!t||e===t?n:n.endsWith(e)?`${n.slice(0,-e.length)}${t}`:n}function Yx(n){let e=Tu(n);if(!e||!Array.isArray(n.options)||typeof n.answer!="number")return n;let t=n.target.slice(e.stem.length),i=e.surface.slice(e.stem.length),s=n.options.map(o=>sp(o,t,i)),r=n.options[n.answer]||"",a=s[n.answer]||r;return!a||a===r?{...n,_targetSurface:e.surface}:{...n,options:s,_targetSurface:e.surface,_baseTarget:n.target,_baseAnswer:r,explanation:`\u300C${e.surface}\u300D\u8BFB\u4F5C\u300C${a}\u300D\u3002\u539F\u5F62\u300C${n.target}\u300D\u8BFB\u4F5C\u300C${r}\u300D\u3002`,explanation_zh_TW:`\u300C${e.surface}\u300D\u8B80\u4F5C\u300C${a}\u300D\u3002\u539F\u5F62\u300C${n.target}\u300D\u8B80\u4F5C\u300C${r}\u300D\u3002`,explanation_ja:`\u300C${e.surface}\u300D\u306F\u300C${a}\u300D\u3068\u8AAD\u307F\u307E\u3059\u3002\u8F9E\u66F8\u5F62\u300C${n.target}\u300D\u306F\u300C${r}\u300D\u3067\u3059\u3002`,explanation_en:`Read \u300C${e.surface}\u300D as \u300C${a}\u300D. The dictionary form \u300C${n.target}\u300D is read \u300C${r}\u300D.`}}function Af(n,e){if(!n)return"";let t=yn().replace("-","_");return n[`${e}_${t}`]||n[e]||""}function Jx(n,e=""){return n?n.sentence?n.sentence:n.cat==="usage"&&(e||n.options?.[n.answer])||"":""}function zo(n,e,t="result_answer"){let i=Jx(n,e),s=Af(n,"translation"),r=Af(n,"explanation"),a=tp(n),o=en(e,a),c=en(i,a),l=s?`<div class="n2-translation">${i?`${C("n2_original")}${c}<br>`:""}${C("n2_translation")}${ke(s)}</div>`:"",u=r?`<div class="n2-expl">${ke(r)}</div>`:"";return`${C(t)}<b>${o}</b>${l}${u}`}function Ot(n){if(!n.meaning)return"";let e=yn();if(e==="zh-CN")return n.meaning;let t=n[`meaning_${e.replace("-","_")}`];if(t)return t;let i=Fe.meanings[e];return i&&i[n.rm]?i[n.rm]:n.meaning}function hu(n){if(n==="games"){Ut=n,G.module=n,pt(G),St(h.gamesScreen);return}if(n==="grammar"){St(h.grammarScreen);return}if(n==="wordMatch"){Ut=n,G.module=n,pt(G),St(h.wordMatchScreen),pu();return}if(n==="cultivate"){Ut=n,G.module="games",pt(G),St(h.cultivateScreen),un(),ew();return}if(n==="bladeKing"){Ut=n,G.module="games",pt(G),St(h.bladeKingScreen),zu();return}if(n==="songs"){Ut=n,G.module=n,pt(G),Yo(),St(h.songsScreen);return}Ut=n,G.module=n,pt(G),h.settingsTitle.setAttribute("data-i18n",lu[n]),h.settingsTitle.textContent=C(lu[n]),h.settingsKana.classList.toggle("hide",n!=="kana"),h.settingsWord.classList.toggle("hide",n!=="word"),h.settingsKanji.classList.toggle("hide",n!=="kanji"),h.settingsN2.classList.toggle("hide",n!=="n2"),h.settingsSentence.classList.toggle("hide",n!=="sentence"),Eu(),St(h.settingsScreen)}function Eu(){Ys(h.modeChecksKana,G.modesKana),Ys(h.modeChecksWord,G.modesWord),Ys(h.modeChecksKanji,G.modesKanji),Ys(h.n2CatChecks,G.n2Cats),Ys(h.kanaSetChecks,G.kanaSets);let n=G.jlptLevel||"n2";h.jlptLevelChecks.querySelectorAll('input[type="radio"]').forEach(i=>{i.checked=i.value===n});let e=G.jlptMode||"quiz";h.jlptModeChecks?.querySelectorAll('input[type="radio"]').forEach(i=>{i.checked=i.value===e});let t=G.sentenceMode||"progressive";h.sentenceModeChecks?.querySelectorAll('input[type="radio"]').forEach(i=>{i.checked=i.value===t}),h.kanaMode.value=G.kanaMode||"hira",h.sessionSize.value=G.sessionSize??20,h.hideMeaning.checked=G.hideMeaning||!1,h.wrongFirst.checked=G.wrongFirst||!1}function Ht(){G.modesKana=Ur(h.modeChecksKana),G.modesWord=Ur(h.modeChecksWord),G.modesKanji=Ur(h.modeChecksKanji),G.n2Cats=Ur(h.n2CatChecks);let n=h.jlptLevelChecks.querySelector('input[type="radio"]:checked');G.jlptLevel=n?n.value:G.jlptLevel||"n2";let e=h.jlptModeChecks?.querySelector('input[type="radio"]:checked');G.jlptMode=e?e.value:G.jlptMode||"quiz";let t=h.sentenceModeChecks?.querySelector('input[type="radio"]:checked');G.sentenceMode=t?t.value:G.sentenceMode||"progressive";let i=Ur(h.kanaSetChecks);switch(G.kanaSets=i.length?i:["seion"],i.length||Ys(h.kanaSetChecks,G.kanaSets),G.kanaMode=h.kanaMode.value,G.sessionSize=Vx(h.sessionSize.value,5,800,20),h.sessionSize.value=G.sessionSize,G.hideMeaning=h.hideMeaning.checked,G.wrongFirst=h.wrongFirst.checked,G.module=Ut,G.content=[Ut],Ut){case"kana":G.modes=G.modesKana.length?G.modesKana:["rm_mc","jp_mc"];break;case"word":G.modes=G.modesWord.length?G.modesWord:["rm_mc","jp_mc"];break;case"kanji":G.modes=G.modesKanji.length?G.modesKanji:["kanji_read","read_kanji"];break;case"n2":G.modes=["n2_exam"];break;case"sentence":G.modes=["sentence"];break;case"wordMatch":G.modes=["word_match"],G.content=["word","kanji"];break}pt(G)}function ln(n){return G.kanaMode==="kata"&&n.kata||n.hira}function Yt(){h.d_total_start&&(h.d_total_start.textContent=ge.daily.total),h.d_ok_start&&(h.d_ok_start.textContent=ge.daily.ok),h.d_ng_start&&(h.d_ng_start.textContent=ge.daily.ng),h.d_rounds_start&&(h.d_rounds_start.textContent=ge.daily.rounds||0),h.s_round&&(h.s_round.textContent=`${C("round_prefix")}${ge.session.round||1}${C("round_suffix")}`),h.s_done.textContent=ge.session.done,h.s_size.textContent=ge.session.size,h.s_ok.textContent=ge.session.ok,h.s_ng.textContent=ge.session.ng,h.streak.textContent=ge.daily.streak,h.s_acc_display.textContent=Ro(ge.session.ok,ge.session.done);let n=ge.session.size>0?ge.session.done/ge.session.size*100:0;h.progressFill.style.width=`${n}%`,h.d_total&&(h.d_total.textContent=ge.daily.total),h.d_ok&&(h.d_ok.textContent=ge.daily.ok),h.d_ng&&(h.d_ng.textContent=ge.daily.ng),h.d_acc&&(h.d_acc.textContent=Ro(ge.daily.ok,ge.daily.total)),h.s_acc&&(h.s_acc.textContent=Ro(ge.session.ok,ge.session.done))}function Zx(n){if(typeof document>"u")return;let e=n===h.wordMatchScreen?C("word_match_invite_title"):C("title");document.title=e;let t=document.querySelector('meta[name="apple-mobile-web-app-title"]');t&&t.setAttribute("content",e);let i=document.querySelector('meta[property="og:title"]');i&&i.setAttribute("content",e)}function St(n){h.moduleScreen.classList.add("hide"),h.gamesScreen&&h.gamesScreen.classList.add("hide"),h.settingsScreen.classList.add("hide"),h.quizScreen.classList.add("hide"),h.grammarScreen&&h.grammarScreen.classList.add("hide"),h.grammarTopicScreen&&h.grammarTopicScreen.classList.add("hide"),h.grammarPracticeScreen&&h.grammarPracticeScreen.classList.add("hide"),h.songsScreen&&h.songsScreen.classList.add("hide"),h.cultivateScreen&&h.cultivateScreen.classList.add("hide"),h.bladeKingScreen&&h.bladeKingScreen.classList.add("hide"),h.wordMatchScreen&&h.wordMatchScreen.classList.add("hide"),n!==h.bladeKingScreen&&Kp(),n.classList.remove("hide"),Zx(n)}var rp="kana_cultivate_state_v1",Ho=["cultivate_realm_0","cultivate_realm_1","cultivate_realm_2","cultivate_realm_3","cultivate_realm_4","cultivate_realm_5","cultivate_realm_6","cultivate_realm_7"],Qn=[{key:"normal",label:"cultivate_q_normal",cls:"q-normal",min:2,max:6,weight:56},{key:"rare",label:"cultivate_q_rare",cls:"q-rare",min:6,max:13,weight:28},{key:"epic",label:"cultivate_q_epic",cls:"q-epic",min:13,max:24,weight:12},{key:"legend",label:"cultivate_q_legend",cls:"q-legend",min:24,max:42,weight:4}],Cf=["cultivate_stat_vocab","cultivate_stat_listen","cultivate_stat_combo","cultivate_stat_focus"],Rf=["\u8A00\u970A\u672D","\u304B\u306A\u7389","\u8A9E\u5F59\u6247","\u8074\u529B\u9234","\u9023\u6483\u7B46","\u96C6\u4E2D\u77F3","\u6587\u6CD5\u93E1","\u8A18\u61B6\u73E0"],iu=[{jp:"\u3042\u308A\u304C\u3068\u3046",ask:"cultivate_q_meaning",answer:"\u8C22\u8C22",opts:["\u8C22\u8C22","\u65E9\u4E0A\u597D","\u5B66\u6821","\u732B"]},{jp:"\u6C34",ask:"cultivate_q_reading",answer:"\u307F\u305A",opts:["\u307F\u305A","\u306D\u3053","\u3084\u307E","\u305D\u3089"]},{jp:"\u5B66\u6821",ask:"cultivate_q_reading",answer:"\u304C\u3063\u3053\u3046",opts:["\u304C\u3063\u3053\u3046","\u3067\u3093\u3057\u3083","\u305B\u3093\u305B\u3044","\u307B\u3093"]},{jp:"\u304A\u306F\u3088\u3046",ask:"cultivate_q_meaning",answer:"\u65E9\u4E0A\u597D",opts:["\u65E9\u4E0A\u597D","\u665A\u4E0A\u597D","\u8C22\u8C22","\u518D\u89C1"]},{jp:"\u732B",ask:"cultivate_q_reading",answer:"\u306D\u3053",opts:["\u306D\u3053","\u3044\u306C","\u3068\u308A","\u3046\u307E"]},{jp:"\u5148\u751F",ask:"cultivate_q_reading",answer:"\u305B\u3093\u305B\u3044",opts:["\u305B\u3093\u305B\u3044","\u304C\u304F\u305B\u3044","\u304D\u3087\u3046\u3057\u3064","\u3057\u3085\u304F\u3060\u3044"]},{jp:"\u884C\u304D\u307E\u3059",ask:"cultivate_q_meaning",answer:"\u53BB",opts:["\u53BB","\u5403","\u770B","\u559D"]},{jp:"\u65E5\u672C\u8A9E",ask:"cultivate_q_reading",answer:"\u306B\u307B\u3093\u3054",opts:["\u306B\u307B\u3093\u3054","\u3048\u3044\u3054","\u3061\u3085\u3046\u3054\u304F\u3054","\u304B\u3093\u3058"]}];function ap(n){return String(n||"").replace(/[ぁ-ゖ]/g,e=>String.fromCharCode(e.charCodeAt(0)+96))}function Au(){let n=Array.isArray(G.cultivateScripts)?G.cultivateScripts:["hira","kata","kanji"],e=[...new Set(n.filter(t=>t==="hira"||t==="kata"||t==="kanji"))];return e.length?e:["hira","kata","kanji"]}function Qx(){let n=Au();h.cultivateUseHira&&(h.cultivateUseHira.checked=n.includes("hira")),h.cultivateUseKata&&(h.cultivateUseKata.checked=n.includes("kata")),h.cultivateUseKanji&&(h.cultivateUseKanji.checked=n.includes("kanji")),h.cultivateSetupHint&&(h.cultivateSetupHint.textContent="")}function ew(){Qx(),h.cultivateScreen&&h.cultivateScreen.classList.add("cultivate-setup-mode"),ii()}function tw(){let n=[];if(h.cultivateUseHira?.checked&&n.push("hira"),h.cultivateUseKata?.checked&&n.push("kata"),h.cultivateUseKanji?.checked&&n.push("kanji"),!n.length){h.cultivateSetupHint&&(h.cultivateSetupHint.textContent=C("cultivate_select_one_script")),h.cultivateUseHira&&(h.cultivateUseHira.checked=!0);return}G.cultivateScripts=n,pt(G),h.cultivateScreen&&h.cultivateScreen.classList.remove("cultivate-setup-mode"),ii(!0),Ee(jl)}function Fo(){return{exp:0,realm:0,jade:0,stage:1,equip:null,drop:null,insight:null,trainingCount:0,winStreak:0,recentQuestions:[],log:[C("cultivate_log_start")]}}function un(){if(Ai)return Ai;try{let n=localStorage.getItem(rp);Ai=n?{...Fo(),...JSON.parse(n)}:Fo()}catch{Ai=Fo()}return Ai}function $r(){Ai&&localStorage.setItem(rp,JSON.stringify(Ai))}function du(n=0){return 60+Math.max(0,n)*45+Math.max(0,n-2)*35}function Cu(n=un()){let e=12+(n.realm||0)*18,t=n.equip?.power||0;return e+t+Math.floor((n.jade||0)/25)}function Ru(n=un()){return 26+Math.max(0,(n.stage||1)-1)*18}function Dn(n){let e=un();e.log=[String(n||""),...e.log||[]].filter(Boolean).slice(0,8)}function nw(){let n=Qn.reduce((t,i)=>t+i.weight,0),e=Pe(n)??Math.floor(Math.random()*n);for(let t of Qn){if(e<t.weight)return t;e-=t.weight}return Qn[0]}function iw(n=0){let e=nw(),t=Qn.indexOf(e);n>0&&t<Qn.length-1&&(Pe(100)??0)<n&&(e=Qn[t+1]);let i=Cf[Pe(Cf.length)??0],s=Rf[Pe(Rf.length)??0],r=e.min+(Pe(e.max-e.min+1)??0),a=r+Math.round(r*(Qn.indexOf(e)*.45));return{id:Date.now()+"_"+(Pe(99999)??0),name:s,q:e.key,stat:i,value:r,power:a}}function Bo(n,e,t){let i=[n],s=new Set(i.map(String)),r=Jn(e.length)||ts([...Array(e.length).keys()]);for(let a of r){let o=t(e[a]);if(!(!o||s.has(String(o)))&&(s.add(String(o)),i.push(o),i.length>=4))break}for(;i.length<4;)i.push(["\u3042","\u3044","\u3046","\u3048"][i.length]||"\u2014");return ts(i)}function op(n){let e=un();e.recentQuestions=[n,...(e.recentQuestions||[]).filter(t=>t!==n)].slice(0,30)}function sw(n="train",e={}){let t=Au(),i=t.includes("hira")||t.includes("kata"),s=t.includes("kanji"),r=new Set(un().recentQuestions||[]),a=(Fe.words||[]).filter(v=>v?.hira&&v?.meaning),o=(Fe.kanji||[]).filter(v=>v?.kanji&&v?.hira&&v?.meaning),c=s&&(!i||o.length&&(Pe(100)??0)<58),l=c?o:a;if(!l.length)return null;let u=l.filter(v=>!r.has(`${c?"k":"w"}:${v.rm||v.hira||v.kanji}`)),d=u.length>=8?u:l,f=d[Pe(d.length)??0],p=`${c?"k":"w"}:${f.rm||f.hira||f.kanji}`;op(p);let g;return c?(Pe(100)??0)<62?g={jp:f.kanji,speak:f.hira,ask:"cultivate_q_reading",answer:f.hira,opts:Bo(f.hira,o,m=>m.hira)}:g={jp:f.kanji,speak:f.hira,ask:"cultivate_q_meaning",answer:Ot(f)||f.meaning,opts:Bo(Ot(f)||f.meaning,o,m=>Ot(m)||m.meaning)}:g={jp:t.includes("kata")&&(!t.includes("hira")||(Pe(2)??0)===1)?f.kata||ap(f.hira):f.hira,speak:f.hira,ask:"cultivate_q_meaning",answer:Ot(f)||f.meaning,opts:Bo(Ot(f)||f.meaning,a,m=>Ot(m)||m.meaning)},{...g,...e,kind:n,opts:ts(g.opts.slice())}}function cp(n="train",e={}){let t=sw(n,e);if(t)return t;let i=Au(),s=iu.filter(o=>rr(o.jp)?i.includes("kanji"):i.includes("hira")||i.includes("kata")),a={...s[Pe(s.length||iu.length)??0]||iu[0]};if(!rr(a.jp)){let o=i.filter(l=>l==="hira"||l==="kata");o.includes("kata")&&(!o.includes("hira")||(Pe(2)??0)===1)&&(a.jp=ap(a.jp))}return op(`fallback:${a.jp}:${a.answer}`),{...a,...e,kind:n,opts:ts(a.opts.slice())}}function lp(n){return Qn.find(e=>e.key===n?.q)||Qn[0]}function Pf(n){if(!n)return'<div class="cultivate-item empty">\u2014</div>';let e=lp(n);return`<div class="cultivate-item ${e.cls}">
    <div class="ci-top"><b>${ke(n.name)}</b><span>${ke(C(e.label))}</span></div>
    <div class="ci-stat">${ke(C(n.stat))} +${n.value}</div>
    <div class="ci-power">${ke(C("cultivate_power"))} +${n.power}</div>
  </div>`}function No(n){let e=un();e.exp+=n;let t=!1;for(;e.realm<Ho.length-1&&e.exp>=du(e.realm);)e.exp-=du(e.realm),e.realm+=1,t=!0;t&&(Dn(C("cultivate_log_realm_up",C(Ho[e.realm]))),Ee(Kl))}function rw(){let n=un();if(n.insight){Dn(C("cultivate_log_finish_current")),ii(!0);return}let e=[{key:"cultivate_train_style_vocab",boost:15},{key:"cultivate_train_style_listen",boost:22},{key:"cultivate_train_style_focus",boost:30}],t=e[Pe(e.length)??0],i=6+(n.realm||0)*2+(Pe(6)??0),s=1+(Pe(3)??0),r=iw(t.boost);n.trainingCount=(n.trainingCount||0)+1,n.insight=cp("train",{baseExp:i,baseJade:s,pendingDrop:r,styleKey:t.key}),Dn(C("cultivate_log_train_start",C(t.key),i,s)),Ee(jl),$r(),ii(!0)}function aw(n){let e=un(),t=e.insight;if(!t)return;let i=n===t.answer;if(t.kind==="battle"){let s=t.enemyPower||Ru(e),r=t.playerPower||Cu(e),a=t.roll||0,o=i?r+a+Math.ceil(s*.35):r+a-Math.ceil(s*.2);if(i&&o>=s){let c=t.rewardExp||22+e.stage*4,l=t.rewardJade||8+e.stage*2;e.stage+=1,e.winStreak=(e.winStreak||0)+1,e.jade+=l,No(c),Dn(C("cultivate_log_battle_win",o,s,c,l)),Ee(So)}else{e.winStreak=0;let c=i?10:5;No(c),Dn(i?C("cultivate_log_battle_not_enough",o,s,c):C("cultivate_log_battle_lose",t.answer,c)),Ee(vn)}}else if(i){let s=16+(e.realm||0)*3+(Pe(7)??0),r=4+(Pe(5)??0),a=(t.baseExp||0)+s,o=(t.baseJade||0)+r;e.jade+=o,No(a),t.pendingDrop&&(t.pendingDrop.power+=2+(Pe(4)??0),e.drop=t.pendingDrop),Dn(C("cultivate_log_train_success",a,o,e.drop?.name||"-",e.drop?C(lp(e.drop).label):"-")),Ee(Xt)}else{let s=t.kind==="train"?Math.max(4,t.baseExp||4):5,r=t.kind==="train"?Math.max(1,t.baseJade||1):0;r&&(e.jade+=r),No(s),t.kind==="train"&&t.pendingDrop&&(Pe(100)??0)<35&&(e.drop=t.pendingDrop),Dn(C("cultivate_log_train_fail",t.answer,s,r)),Ee(vn)}e.insight=null,$r(),ii(!0)}function ow(){let n=un();if(!n.drop)return;let e=n.equip;n.equip=n.drop,n.drop=null,Dn(e?C("cultivate_log_replace",n.equip.name,e.name):C("cultivate_log_equip",n.equip.name)),Ee(Xl),$r(),ii()}function cw(){let n=un();if(n.insight){Dn(C("cultivate_log_finish_current")),ii(!0);return}let e=Cu(n),t=Ru(n),i=(Pe(21)??0)-8+Math.min(8,n.winStreak||0);n.insight=cp("battle",{playerPower:e,enemyPower:t,roll:i,rewardExp:24+n.stage*5,rewardJade:8+n.stage*2}),Dn(C("cultivate_log_battle_start",e,t)),Ee(So),$r(),ii(!0)}function lw(){confirm(C("cultivate_reset_confirm"))&&(Ai=Fo(),$r(),ii())}function ii(n=!1){let e=un(),t=du(e.realm);h.cultivateRealm&&(h.cultivateRealm.textContent=C(Ho[e.realm]||Ho[0])),h.cultivateExpText&&(h.cultivateExpText.textContent=`${e.exp} / ${t}`),h.cultivateExpFill&&(h.cultivateExpFill.style.width=`${Math.max(0,Math.min(100,e.exp/t*100))}%`),h.cultivatePower&&(h.cultivatePower.textContent=Cu(e)),h.cultivateJade&&(h.cultivateJade.textContent=e.jade||0),h.cultivateStage&&(h.cultivateStage.textContent=e.stage||1),h.cultivateEquip&&(h.cultivateEquip.outerHTML=Pf(e.equip).replace("cultivate-item","cultivate-item").replace("<div",'<div id="cultivateEquip"')),h.cultivateEquip=D("cultivateEquip"),h.cultivateDrop&&(h.cultivateDrop.outerHTML=Pf(e.drop).replace("cultivate-item","cultivate-item").replace("<div",'<div id="cultivateDrop"')),h.cultivateDrop=D("cultivateDrop"),h.btnCultivateEquip&&(h.btnCultivateEquip.disabled=!e.drop),h.cultivateEnemy&&(h.cultivateEnemy.textContent=C("cultivate_enemy_name",e.stage||1)),h.cultivateEnemyPower&&(h.cultivateEnemyPower.textContent=Ru(e)),h.cultivateLog&&(h.cultivateLog.innerHTML=(e.log||[]).map(i=>`<div>${ke(i)}</div>`).join("")),uw(e),n&&h.cultivateScreen&&(h.cultivateScreen.classList.remove("cultivate-pulse"),h.cultivateScreen.offsetWidth,h.cultivateScreen.classList.add("cultivate-pulse"))}function uw(n=un()){if(!h.cultivateInsightQ||!h.cultivateInsightOptions)return;let e=n.insight,t=h.cultivateInsight?.querySelector?.(".cultivate-insight-title");if(!e){t&&(t.textContent=C("cultivate_insight")),h.cultivateInsightQ.textContent=C("cultivate_insight_empty"),h.cultivateInsightOptions.innerHTML="";return}t&&(t.textContent=e.kind==="battle"?C("cultivate_battle_question"):C("cultivate_train_question"));let i=e.kind==="battle"?C("cultivate_battle_question_desc",e.playerPower||0,e.enemyPower||0):C("cultivate_train_question_desc",e.styleKey?C(e.styleKey):C("cultivate_train"));h.cultivateInsightQ.innerHTML=`${ke(i)}\uFF5C<button type="button" class="cultivate-word-speak" id="cultivateWordSpeak">${ke(e.jp)}</button> \u2014 ${ke(C(e.ask))}`;let s=D("cultivateWordSpeak");s&&(s.onclick=()=>Lt(e.speak||(e.ask==="cultivate_q_reading"?e.answer:e.jp))),h.cultivateInsightOptions.innerHTML="",e.opts.forEach(r=>{let a=document.createElement("button");a.type="button",a.className="btn cultivate-choice",a.textContent=r,a.onclick=()=>aw(r),h.cultivateInsightOptions.appendChild(a)})}var up=36,Hr=3,fu=12,hp=300;function dp(){let n=Array.isArray(G.wordMatchKana)?G.wordMatchKana:["hira","kata"],e=[...new Set(n.filter(t=>t==="hira"||t==="kata"))];return e.length?e:["hira"]}function hw(){let n=G.wordMatchDifficulty||"easy";return n==="hard"?3:n==="medium"?2:1}function dw(){let n=dp();h.wmKanaHira&&(h.wmKanaHira.checked=n.includes("hira")),h.wmKanaKata&&(h.wmKanaKata.checked=n.includes("kata"));let e=["easy","medium","hard"].includes(G.wordMatchDifficulty)?G.wordMatchDifficulty:"easy";document.querySelectorAll('input[name="wmDifficulty"]').forEach(t=>{t.checked=t.value===e}),h.wmSetupHint&&(h.wmSetupHint.textContent="")}function pu(){Uo++,Se=null,is(),Xi(),Qi(""),or(),dw(),h.wordMatchScreen?.classList.add("wm-setup-mode"),h.wmSetup?.classList.remove("hide"),h.wmMessage&&(h.wmMessage.textContent=""),cr()}function fw(){let n=[];h.wmKanaHira?.checked&&n.push("hira"),h.wmKanaKata?.checked&&n.push("kata"),n.length||(h.wmSetupHint&&(h.wmSetupHint.textContent=C("word_match_select_one_kana")),h.wmKanaHira&&(h.wmKanaHira.checked=!0),n.push("hira"));let e=document.querySelector('input[name="wmDifficulty"]:checked');G.wordMatchKana=n,G.wordMatchDifficulty=["easy","medium","hard"].includes(e?.value)?e.value:"easy",pt(G),h.wordMatchScreen?.classList.remove("wm-setup-mode"),h.wmSetup?.classList.add("hide"),Xo(!1)}function Pu(n=1){let e=Math.max(1,Number(n)||1),t=3,i=hw(),s=fu-t+1,r=(Hr-i+1)*s;if(e<=r){let l=e-1,u=i+Math.floor(l/s),d=t+l%s;return{cols:u,rows:d}}let a=(e*9301+49297)%233280,o=1+a%Hr,c=t+Math.floor(a/Hr)%s;return{cols:o,rows:c}}function pw(){G.wordMatchLevelVersion!==ou&&(G.wordMatchLevel=1,G.wordMatchLevelVersion=ou,pt(G))}function fp(n){if(n?.guideMode)return 3;let e=n?.levelConfig||Pu(G.wordMatchLevel||1);return Math.min(up,(e.cols||3)*(e.rows||12))}function mw(n){return Math.max(1,Math.min(Hr,n?.levelConfig?.cols||(n?.guideMode?1:Hr)))}function _w(n){return Math.max(1,Math.min(fu,n?.levelConfig?.rows||(n?.guideMode?3:fu)))}function gw(n){if(n?.guideMode)return C("word_match_guide_level");let e=n?.level||G.wordMatchLevel||1,t=n?.levelConfig||Pu(e);return C("word_match_level_label",e,t.cols,t.rows)}function pp(n){if(!n||n.guideMode||n.finished||(n.leftSlots||[]).length>0||(n.rightSlots||[]).length>0)return!1;n.finished=!0,n.busy=!0,is();let e=n.level||1;return n.nextLevel=e+1,Qi(C("word_match_level_clear",e),"start-count"),h.wmMessage&&(h.wmMessage.textContent=C("word_match_level_clear_hint")),setTimeout(()=>Xo(!0),1150),!0}async function vw(){return Array.isArray(Fe.kanji)&&Fe.kanji.length||(Fe.kanji=await lt("./data/kanji_words.json").catch(()=>[]),Fe.kanji.length&&uu()),Array.isArray(Fe.wordMatchExtra)||(Fe.wordMatchExtra=await lt("./data/word_match_extra.json").catch(()=>[])),(Fe.kanji?.length||0)+(Fe.wordMatchExtra?.length||0)>0}function Vo(){let n=new Set,e=[],t=(a,o,c=a?.kanji)=>{if(!a||!c||!a.hira||c===a.hira||!/^[一-龯々]+$/.test(c)||!/^[ぁ-ゖー]+$/.test(a.hira))return;let l=`${c}|${a.hira}`;n.has(l)||(n.add(l),e.push({...a,type:o,_wmBaseId:l,_wmKey:e.length+1,_wmReading:a.hira,_wmLabel:c}))},i=Fe.kanji||[],s=Fe.wordMatchExtra||[],r=i.length+s.length;return i.forEach((a,o)=>t({...a,_wmRank:o,_wmTotal:r},"kanji",a.kanji)),s.forEach((a,o)=>t({...a,_wmRank:i.length+o,_wmTotal:r},"wordMatchExtra",a.kanji)),e}function mp(n){if(!n)return n;let e=String(n.hira||n._wmReading||""),t=String(n.kata||""),i=dp(),s=i.includes("hira")&&/^[ぁ-ゖー]+$/.test(e),a=i.includes("kata")&&/^[ァ-ヺー]+$/.test(t)&&(!s||i.includes("hira")&&Pe(2)===1);return{...n,_wmReading:a?t:e||t,_wmSpeak:e||t,_wmKanaKind:a?"kata":"hira"}}function yw(n=new Set){let e=Vo().filter(a=>!n.has(a._wmBaseId)),t=e.length?e:Vo();if(!t.length)return null;let i=tu(t.length,1)?.[0],s=Number.isInteger(i)?i:Pe(t.length)??0,r=t[s];return mp({...r,_wmId:`wm_${Date.now()}_${Pe(4294967295)??0}`})}function xw(n){let e=new Set;return[...n?.leftSlots||[],...n?.rightSlots||[]].forEach(t=>{t?._wmBaseId&&e.add(t._wmBaseId)}),e}function Iu(n){if(!n)return 10;let e=[...String(n._wmLabel||"")].length,t=[...String(n._wmReading||"")].length,i=Math.max(1,Number(n._wmTotal)||Vo().length||1),s=Math.max(0,Number(n._wmRank)||0),r=wf(e,t,s,i);if(r!==null)return r;let a=s/i,o=Math.min(18,e*3+Math.max(0,t-2)),c=Math.round(a*22);return 10+o+c}function ww(n){return Math.min(3,1+Math.floor(Math.max(0,n)/3)*.25)}function Mw(n){let e=n?.goal;if(!e)return"-";let t=e.type==="pairs"?n.pairsCleared||0:e.type==="combo"?n.maxCombo||0:n.score||0,i=e.labelKey?C(e.labelKey,e.target):e.label||"";return`${e.done?"\u2713":""}${i} ${Math.min(t,e.target)}/${e.target}`}function bw(n,e){let t=e?._wmSpecial;return t?t==="time"?(n.bonusSeconds=(n.bonusSeconds||0)+10,C("word_match_special_seconds",10)):t==="hint"?(setTimeout(()=>Ep(!0),180),C("word_match_special_hint")):t==="mult"?(n.nextMultiplier=Math.max(n.nextMultiplier||1,2),C("word_match_special_mult")):"":""}function _p(n){let e=n?.goal;return!e||e.done||(e.type==="pairs"?n.pairsCleared||0:e.type==="combo"?n.maxCombo||0:n.score||0)<e.target?"":(e.done=!0,n.bonusSeconds=(n.bonusSeconds||0)+15,n.nextMultiplier=Math.max(n.nextMultiplier||1,2),C("word_match_goal_done_bonus"))}function Lu(n,e,t=""){let i=document.querySelector(`.wm-tile[data-id="${n}"]`),s=h.wordMatchScreen;if(!i||!s)return;let r=i.getBoundingClientRect(),a=s.getBoundingClientRect(),o=document.createElement("div");o.className=`wm-float ${t}`,o.textContent=e,o.style.left=`${r.left-a.left+r.width/2}px`,o.style.top=`${r.top-a.top+r.height/2}px`,s.appendChild(o);for(let c=0;c<9;c++){let l=document.createElement("i");l.className="wm-particle",l.style.left=o.style.left,l.style.top=o.style.top,l.style.setProperty("--dx",`${(Pe(80)??40)-40}px`),l.style.setProperty("--dy",`${-18-(Pe(44)??0)}px`),s.appendChild(l),setTimeout(()=>l.remove(),760)}setTimeout(()=>o.remove(),850)}function Sw(n){let e=Number(n)||0;return e>=50?C("word_match_combo_master",e):e>=40?C("word_match_combo_godlike",e):e>=30?C("word_match_combo_legend",e):e>=25?C("word_match_combo_unstoppable",e):e>=20?C("word_match_combo_amazing",e):e>=15?C("word_match_combo_super",e):e>=10?C("word_match_combo_great",e):e>=7?C("word_match_combo_hot",e):e>=5?C("word_match_combo_nice",e):e>=3?C("word_match_combo_start",e):e>=2?C("word_match_combo_two",e):""}function Tw(n,e=""){let t=h.wordMatchScreen;if(!t||!n||n<2)return;let i=Sw(n);if(!i)return;let s=[2,3,5,7,10,15,20,25,30,40,50].includes(n)||n%10===0,r=document.createElement("div");r.className=`wm-combo-toast combo-${Math.min(5,Math.floor(n/5))}${s?" milestone":""}`,r.innerHTML=`<span>${ke(i)}</span><b>\xD7${n}</b>`,t.appendChild(r),setTimeout(()=>r.remove(),s?1250:900);let a=h.wmCombo?.closest?.("div");a&&(a.classList.remove("wm-combo-pop"),a.offsetWidth,a.classList.add("wm-combo-pop")),e&&Lu(e,`${i} \xD7${n}`,s?"combo special":"combo"),s&&Ee(on)}function Wr(n,e=30){let t=document.querySelector(`.wm-tile[data-id="${n}"]`),i=h.wordMatchScreen;if(!t||!i)return;let s=t.getBoundingClientRect(),r=i.getBoundingClientRect(),a=s.left-r.left+s.width/2,o=s.top-r.top+s.height/2,c=document.createElement("div");c.className="wm-bomb-flash",c.style.left=`${a}px`,c.style.top=`${o}px`,i.appendChild(c),setTimeout(()=>c.remove(),620);for(let l=0;l<e;l++){let u=document.createElement("i");u.className=`wm-particle wm-bomb-particle p${l%4}`,u.style.left=`${a}px`,u.style.top=`${o}px`;let d=Math.PI*2*l/e+((Pe(20)??0)-10)/100,f=34+(Pe(74)??0);u.style.setProperty("--dx",`${Math.cos(d)*f}px`),u.style.setProperty("--dy",`${Math.sin(d)*f}px`),i.appendChild(u),setTimeout(()=>u.remove(),860)}}function gp(n=[]){let e=h.wordMatchScreen;e&&[...n].forEach(t=>{let i=document.querySelector(`.wm-tile[data-id="${t}"]`);if(!i)return;let s=i.getBoundingClientRect(),r=e.getBoundingClientRect(),a=s.left-r.left,o=s.top-r.top,c=i.classList.contains("reading")?"#22d3c5":"#ff9800",l=14;for(let u=0;u<l;u++){let d=document.createElement("i");d.className="wm-shard-particle";let f=a+(Pe(Math.max(2,Math.floor(s.width)))??s.width/2),p=o+(Pe(Math.max(2,Math.floor(s.height)))??s.height/2),g=(Pe(130)??65)-65,v=26+(Pe(82)??35),m=260+(Pe(360)??130);d.style.left=`${f}px`,d.style.top=`${p}px`,d.style.background=c,d.style.setProperty("--dx",`${g}px`),d.style.setProperty("--wind",`${(g>=0?1:-1)*v}px`),d.style.setProperty("--dy",`${m}px`),d.style.setProperty("--rot",`${(Pe(720)??360)-360}deg`),d.style.animationDelay=`${(Pe(8)??0)*.012}s`,e.appendChild(d),setTimeout(()=>d.remove(),2100)}})}function vp(n=""){let e=Se;!e||e.finished||(e.finished=!0,e.finishMessage=n||"",e.busy=!0,is(),Xi(),G.wordMatchLevel=1,G.wordMatchLevelVersion=ou,pt(G),h.wmTime&&(h.wmTime.textContent="0:00"),h.wmMessage&&(h.wmMessage.textContent=e.finishMessage||`${C("word_match_timeup")} ${C("word_match_score")}\uFF1A${e.score||0}`),Qi(C("word_match_game_over"),"gameover"),document.querySelectorAll("#wordMatchScreen .wm-tile").forEach(t=>t.classList.add("disabled")))}function mu(){if(!Se?.startedAt||!h.wmTime)return;let n=Math.max(0,Math.floor((Date.now()-Se.startedAt)/1e3)),e=hp+(Se.bonusSeconds||0),t=Mf(n,e),i=t!==null?t:Math.max(0,e-n);if(zw(),h.wmTime.textContent=ns(i),h.wmTime.classList.toggle("wm-time-warn",i<=30),i<=10&&i>0&&Se.lastFinalTick!==i&&(Se.lastFinalTick=i,Ee(rf,i)),i<=0){vp(C("word_match_game_over"));return}i<=10?Qi(String(i),"final-count"):Bx()}function yp(){Yi&&clearInterval(Yi),mu(),Yi=setInterval(mu,250)}function is(){Yi&&(clearInterval(Yi),Yi=null)}function es(){return G.wordMatchMusicOn!==!1}function ku(){return G.wordMatchSfxOn!==!1}function Nu(){return G.wordMatchVoiceOn!==!1}function Ee(n,...e){if(!(!ku()||typeof n!="function"))return n(...e)}function Qs(n,e={}){if(!Nu()){try{e?.onEnd?.({ok:!1,reason:"muted"})}catch{}return!1}return Lt(n,e)}function Du(){es()&&ql()}function cr(){let n=es(),e=ku(),t=Nu();h.btnWordMatchMusic&&(h.btnWordMatchMusic.textContent=`${C("word_match_music_short")} ${n?"ON":"OFF"}`,h.btnWordMatchMusic.classList.toggle("active",n),h.btnWordMatchMusic.title=C("word_match_music_toggle")),h.btnWordMatchSfx&&(h.btnWordMatchSfx.textContent=`${C("word_match_sfx_short")} ${e?"ON":"OFF"}`,h.btnWordMatchSfx.classList.toggle("active",e),h.btnWordMatchSfx.title=C("word_match_sfx_toggle")),h.btnWordMatchVoice&&(h.btnWordMatchVoice.textContent=`${C("word_match_voice_short")} ${t?"ON":"OFF"}`,h.btnWordMatchVoice.classList.toggle("active",t),h.btnWordMatchVoice.title=C("word_match_voice_toggle"))}function If(){cr()}function Ew(){G.wordMatchMusicOn=!es(),pt(G),G.wordMatchMusicOn&&Se&&!Se.finished?ql():Xi(),cr()}function Aw(){G.wordMatchSfxOn=!ku(),pt(G),cr()}function Cw(){G.wordMatchVoiceOn=!Nu(),pt(G),cr()}function Rw(){let n=Se;if(!n||n.finished||n.guideMode||n.sharePaused)return null;let e=!!n.busy,t=!!Yi,i=es(),s=Date.now();return n.sharePaused=!0,n.busy=!0,n.sharePause={wasBusy:e,wasTimerRunning:t,wasMusicOn:i,pauseStartedAt:s},is(),i&&Xi(),ut(),n.sharePause}function Pw(){let n=Se;if(!n?.sharePaused)return;let e=n.sharePause||{},t=Date.now()-(e.pauseStartedAt||Date.now());n.startedAt&&(n.startedAt+=Math.max(0,t)),n.sharePaused=!1,n.sharePause=null,n.busy=!!e.wasBusy,e.wasMusicOn&&!n.finished&&Du(),e.wasTimerRunning&&!n.finished&&yp(),ut()}async function Iw(){Rw();try{let n="https://quiz.ff18.com/?mode=wordMatch",e=C("word_match_invite_title"),t=Se?.score||0,i=G.wordMatchBest||0,s=`${e}
${C("word_match_invite_text")}
${C("word_match_score")} ${t} / ${C("word_match_best")} ${i}
${n}`,r=()=>{h.wmMessage&&(h.wmMessage.textContent=C("word_match_invite_copied"))},a=()=>{try{let l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.focus(),l.select(),l.setSelectionRange(0,l.value.length);let u=document.execCommand("copy");return l.remove(),u&&r(),u}catch{return!1}},o=async()=>a()?!0:navigator.clipboard?.writeText?(await navigator.clipboard.writeText(s),r(),!0):!1,c=a();try{if(navigator.share){await navigator.share({title:e,text:`${e}
${C("word_match_invite_text")}
${C("word_match_score")} ${t} / ${C("word_match_best")} ${i}`,url:n});return}if(c||await o())return}catch{if(c)return;try{if(await o())return}catch{}}h.wmMessage&&(h.wmMessage.textContent=s.replace(/\n/g," "))}finally{Pw()}}function Uu(){let n=Se,e=h.wmTools||D("wmTools");if(h.wmLives){let a=Math.max(0,Math.min(5,n?.lives??5));h.wmLives.textContent="\u2665\uFE0F".repeat(a),h.wmLives.title=C("word_match_life_title",a),h.wmLives.classList.toggle("low",a<=2)}if(!e)return;e.innerHTML="";let t=!n||n.finished||n.busy,i=(a,o,c)=>{let l=document.createElement("button");l.className="wm-tool-btn",l.type="button",l.textContent=o,l.dataset.tool=a,l.dataset.index=String(c),l.disabled=t,a==="bomb"&&n?.bombArmed&&l.classList.add("active"),l.onclick=a==="bomb"?()=>xp():()=>wp(),e.appendChild(l)},s=n?.powerups?.bomb||0,r=n?.powerups?.magnifier||0;for(let a=0;a<s;a++)i("bomb","\u{1F4A3}",a);for(let a=0;a<r;a++)i("magnifier","\u{1F50D}",a)}function xp(){let n=Se;if(n?.guideMode){jo("bomb");return}!n||n.finished||n.busy||(n.powerups?.bomb||0)<=0||(n.bombArmed=!n.bombArmed,h.wmMessage&&(h.wmMessage.textContent=n.bombArmed?C("word_match_bomb_hint"):C("word_match_hint")),Ee(Kt),Uu())}function wp(){let n=Se;if(n?.guideMode){jo("mag");return}if(!n||n.finished||n.busy||(n.powerups?.magnifier||0)<=0)return;n.powerups.magnifier=Math.max(0,(n.powerups.magnifier||0)-1),n.bombArmed=!1;let e=new Set,t=new Map;Jn((n.leftSlots||[]).length).slice(0,3).forEach((r,a)=>{let o=n.leftSlots[r],c=(n.rightSlots||[]).find(l=>Go(o,l));o?._wmId&&(e.add(o._wmId),t.set(o._wmId,a+1)),c?._wmId&&(e.add(c._wmId),t.set(c._wmId,a+1))}),n.hintIds=e,n.hintColors=t;let s=Date.now()+Math.random();n.hintToken=s,Ee(Kt),Uu(),ut(),setTimeout(()=>{!Se||Se.hintToken!==s||(Se.hintIds?.clear(),Se.hintColors?.clear(),ut())},5e3)}function Lw(n,e){let t=Se,i=e==="reading"?t?.leftSlots||[]:t?.rightSlots||[],s=i.findIndex(c=>c._wmId===n),r=new Set;if(s<0)return r;let a=Math.floor(s/3),o=s%3;for(let c=a-1;c<=a+1;c++)for(let l=o-1;l<=o+1;l++){if(c<0||l<0||l>=3)continue;let u=i[c*3+l];u?._wmBaseId&&r.add(u._wmBaseId)}return r}function kw(n,e,t=""){let i=Se;if(!i||i.finished||i.busy||!n?.size)return;let s=[...i.leftSlots||[],...i.rightSlots||[]].filter(c=>n.has(c._wmBaseId));if(!s.length)return;i.busy=!0,i.hintIds=new Set,i.hintColors=new Map,i.selectedReading=null,i.selectedWord=null,i.selectedAt=0,i.lastNudgeAt=0;let r=[];n.forEach(c=>{let l=(i.leftSlots||[]).find(u=>u._wmBaseId===c)||(i.rightSlots||[]).find(u=>u._wmBaseId===c);l&&r.push(l)});let a=r.reduce((c,l)=>c+Math.max(8,Math.round(Iu(l)*.55)),0);i.lastGain=a,i.score+=a,i.pairsCleared=(i.pairsCleared||0)+r.length;let o=_p(i);Tp(i.score),i.removingIds=new Set(s.map(c=>c._wmId)),gp(i.removingIds),Ee(on),Wo("wm-hit"),Wr(e||s[0]._wmId,t?42:26),Lu(e||s[0]._wmId,`${t}+${a} \xD7${r.length}${o?" \u2605":""}`,"special"),ut(),setTimeout(()=>{i.leftSlots=(i.leftSlots||[]).filter(c=>!n.has(c._wmBaseId)),i.rightSlots=(i.rightSlots||[]).filter(c=>!n.has(c._wmBaseId)),i.removingIds.clear(),i.finiteLevel||Ou(i),!pp(i)&&(i.droppingIds=new Set([...i.leftSlots||[],...i.rightSlots||[]].map(c=>c._wmId)),Ee(Mo),ut(),setTimeout(()=>{i.droppingIds.clear(),i.busy=!1,ut()},430))},430)}function Nw(n,e){let t=Se;if(!t||t.finished||t.busy||(t.powerups?.bomb||0)<=0)return!1;let i=Lw(n,e);return i.size?(t.powerups.bomb=Math.max(0,(t.powerups.bomb||0)-1),t.bombArmed=!1,t.hintIds=new Set,t.hintColors=new Map,t.selectedReading=null,t.selectedWord=null,kw(i,n,"\u{1F4A3}"),!0):!1}function Dw(n=up,e=new Set){let t=Vo().filter(a=>!e.has(a._wmBaseId)),i=[];if(!t.length)return i;let s=Math.min(n,t.length);return(tu(t.length,s)||Jn(t.length).slice(0,s)).forEach(a=>{let o=t[a];o&&i.push(mp({...o,_wmId:`wm_${Date.now()}_${Pe(4294967295)??0}`}))}),i}function Ou(n){if(!n)return;let e=fp(n);if(n.leftSlots=(n.leftSlots||[]).filter(Boolean).slice(0,e),n.rightSlots=(n.rightSlots||[]).filter(Boolean).slice(0,e),n.finiteLevel||n.guideMode)return;let t=xw(n);for(;n.leftSlots.length<e||n.rightSlots.length<e;){let i=yw(t);if(!i)break;t.add(i._wmBaseId),n.leftSlots.length<e&&n.leftSlots.unshift({...i}),n.rightSlots.length<e&&n.rightSlots.unshift({...i})}}function su(n,e,t){return{_wmBaseId:`guide_${n}`,_wmKey:9e3+n,_wmReading:e,_wmLabel:t,_wmRank:n,_wmTotal:3}}function Mp(n=!0){is(),or(),wo(),go(),Du(),we=0;let e=su(1,"\u306D\u3053","\u732B"),t=su(2,"\u307F\u305A","\u6C34"),i=su(3,"\u3084\u307E","\u5C71");return Se={guideMode:!0,leftSlots:[{...e,_wmId:"guide_l1"},{...t,_wmId:"guide_l2"},{...i,_wmId:"guide_l3"}],rightSlots:[{...e,_wmId:"guide_r1"},{...t,_wmId:"guide_r2"},{...i,_wmId:"guide_r3"}],selectedReading:null,selectedWord:null,score:0,lastGain:0,combo:0,maxCombo:0,pairsCleared:0,nextMultiplier:1,powerups:{bomb:1,magnifier:1},lives:5,bombArmed:!1,goal:{type:"pairs",target:2,labelKey:"word_match_goal_pairs",done:!1},finished:!1,busy:!1,removingIds:new Set,wrongIds:new Set,newIds:new Set,droppingIds:new Set,hintIds:new Set(["guide_l1"]),hintColors:new Map([["guide_l1",1]]),chainPendingIds:new Set,chainCount:0,chainDeadline:0,chainMultiplier:1,musicOn:es(),guidePromptKey:"word_match_guide_prompt_0"},ut(),new Promise(s=>{au=s})}function Uw(){G.wordMatchGuideSeen=!0,G.wordMatchGuideVersion=Mu,pt(G);let n=au;au=null,n&&n()}function Ki(n){let e=Se;e?.guideMode&&(e.guidePromptKey=n,e.guideNeedNext=!0,ut())}function Ow(n){if(!n?.guideMode)return!1;if(h.wmScore.textContent=n.score||0,h.wmLeft.textContent=G.wordMatchBest||0,h.wmCombo&&(h.wmCombo.textContent=n.combo||0),h.wmGoal&&(h.wmGoal.textContent=C("word_match_guide_level")),h.wmPower&&(h.wmPower.textContent=`\xD7${(n.nextMultiplier||1).toFixed((n.nextMultiplier||1)%1?1:0)}`),h.wmTime&&(h.wmTime.textContent=C("word_match_guide_level")),h.wmMessage){h.wmMessage.innerHTML=`<span>${C(n.guidePromptKey||"word_match_guide_prompt_0")}</span>${n.guideNeedNext?`<button class="btn primary wm-inline-next guide-glow" type="button" id="wmGuideInlineNext">${C("word_match_guide_next")}</button>`:""}`;let e=document.getElementById("wmGuideInlineNext");e&&(e.onclick=()=>jo("next"))}return!0}function Si(n,e=[]){n.guideMagnifierMode=!1,n.hintIds=new Set(e),n.hintColors=new Map(e.map(t=>[t,1]))}function jo(n){let e=Se;if(!e?.guideMode||e.finished)return;let t=s=>{e.guidePromptKey=s,e.guideNeedNext=!1,e.guideMagnifierMode=!1},i=()=>{Ee(Kt),ut()};if(we===0){if(n!=="guide_l1")return i();Qs("\u306D\u3053"),e.selectedReading="guide_l1",t("word_match_guide_prompt_1"),Si(e,["guide_r1"]),we=1}else if(we===1){if(n!=="guide_r1")return i();Ee(Xt),Ee(on),e.selectedReading=null,e.combo=1,e.chainPendingIds=new Set(["guide_l1","guide_r1"]),e.chainCount=1,t("word_match_guide_prompt_2"),Si(e,["guide_l2"]),we=2}else if(we===2){if(n!=="guide_l2")return i();Qs("\u307F\u305A"),e.selectedReading="guide_l2",t("word_match_guide_prompt_3"),Si(e,["guide_r2"]),we=3}else if(we===3){if(n!=="guide_r2")return i();Ee(Xt),Ee(on),e.selectedReading=null,e.combo=2,e.chainPendingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2"]),e.chainCount=2,Ki("word_match_guide_prompt_4"),we=4;return}else if(we===4){if(n!=="next")return i();e.chainCount=4,Ki("word_match_guide_prompt_5"),we=5;return}else if(we===5){if(n!=="next")return i();e.removingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2"]),e.score=180,e.lastGain=180,Ee(on),Wr("guide_r2",46),Ki("word_match_guide_prompt_6"),we=6;return}else if(we===6){if(n!=="next")return i();e.removingIds.clear(),e.chainPendingIds.clear(),e.droppingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2"]),Ee(Mo),t("word_match_guide_prompt_7"),Si(e,["guide_l3"]),we=7}else if(we===7){if(n!=="guide_l3")return i();Qs("\u3084\u307E"),e.selectedReading="guide_l3",t("word_match_guide_prompt_7b"),Si(e,["guide_r2"]),we=8}else if(we===8){if(n!=="guide_r2")return i();Ee(vn),e.lives=4,e.selectedReading=null,e.wrongIds=new Set(["guide_l3","guide_r2"]),Ki("word_match_guide_prompt_7c"),we=9;return}else if(we===9){if(n!=="next")return i();e.wrongIds.clear(),t("word_match_guide_prompt_8"),Si(e,[]),we=10}else if(we===10){if(n!=="bomb")return i();Ee(Kt),e.bombArmed=!0,t("word_match_guide_prompt_8_pick"),Si(e,["guide_l2"]),we=11}else if(we===11){if(n!=="guide_l2")return i();e.bombArmed=!1,e.powerups.bomb=0,e.removingIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2","guide_l3","guide_r3"]),Ee(on),Wr("guide_l2",60),Ki("word_match_guide_prompt_8b"),we=12;return}else if(we===12){if(n!=="next")return i();e.removingIds.clear(),t("word_match_guide_prompt_8c"),Si(e,[]),we=13}else if(we===13){if(n!=="mag")return i();Ee(Kt),e.powerups.magnifier=0,e.guideMagnifierMode=!0,e.hintIds=new Set(["guide_l1","guide_r1","guide_l2","guide_r2","guide_l3","guide_r3"]),e.hintColors=new Map([["guide_l1",1],["guide_r1",1],["guide_l2",2],["guide_r2",2],["guide_l3",3],["guide_r3",3]]),Ki("word_match_guide_prompt_8d"),we=14;return}else if(we===14){if(n!=="next")return i();e.guideMagnifierMode=!1,Ki("word_match_guide_prompt_9"),we=15;return}else if(we===15){if(n!=="next")return i();Uw();return}ut()}function zt(n){h.wmGuidePrompt&&(h.wmGuidePrompt.textContent=C(n))}function Fw(n){return{l1:"\u306D\u3053",r1:"\u306D\u3053",l2:"\u307F\u305A",r2:"\u307F\u305A",l3:"\u3084\u307E",r3:"\u3084\u307E"}[n]||""}function bp(n=we){return[4,5,6,9,12,14,15].includes(n)}function Sp(n=we){return{0:"l1",1:"r1",2:"l2",3:"r2",7:"l3",8:"r2",10:"bomb",11:"l2",13:"mag"}[n]||null}function Bw(n){let e=h.wmGuide;if(!e||(e.querySelectorAll(".wm-guide-pointer").forEach(r=>r.remove()),!n))return;let t=n.getBoundingClientRect(),i=document.createElement("div");i.className="wm-guide-pointer",i.textContent="\u{1F449}";let s=t.left<72;i.classList.toggle("from-right",s),i.style.left=`${s?Math.min(window.innerWidth-72,t.right+8):Math.max(8,t.left-64)}px`,i.style.top=`${Math.max(8,Math.min(window.innerHeight-72,t.top+t.height/2-34))}px`,e.appendChild(i)}function Lf(){let n=h.wmGuide;if(!n)return;let e=[...n.querySelectorAll(".wm-demo-tile")],t=[...n.querySelectorAll(".wm-demo-tool")];e.forEach(l=>{l.dataset.demo&&(l.dataset.id=l.dataset.demo),l.classList.remove("guide-glow","selected","paired","clearing","drop","hintshake","hint-color-1","hint-color-2","hint-color-3","disabled","wrong","chain-mark-1","chain-mark-2","chain-mark-3","chain-mark-4","chain-mark-5","chain-mark-6"),l.disabled=!1,l.style.removeProperty("--wm-chain-speed")}),t.forEach(l=>l.classList.remove("guide-glow","used","selected")),h.wmGuideStart&&h.wmGuideStart.classList.remove("guide-glow"),h.wmGuideScore&&(h.wmGuideScore.textContent=we>=6?"180":"0"),h.wmGuideCombo&&(h.wmGuideCombo.textContent=we>=4?"2":we>=2?"1":"0"),h.wmGuideHearts&&(h.wmGuideHearts.textContent=we>=9?"\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F":"\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F\u2665\uFE0F");let i=(l,u="chain-mark-1",d=".9s")=>l.forEach(f=>{let p=n.querySelector(`[data-demo="${f}"]`);p&&(p.classList.add("paired",u),p.style.setProperty("--wm-chain-speed",d))}),s=l=>l.forEach(u=>n.querySelector(`[data-demo="${u}"]`)?.classList.add("guide-glow")),r=l=>l.forEach(u=>n.querySelector(`[data-demo="${u}"]`)?.classList.add("selected")),a=()=>h.wmGuideStart?.classList.add("guide-glow");we===0?(zt("word_match_guide_prompt_0"),s(["l1"])):we===1?(zt("word_match_guide_prompt_1"),r(["l1"]),s(["r1"])):we===2?(zt("word_match_guide_prompt_2"),i(["l1","r1"]),s(["l2"])):we===3?(zt("word_match_guide_prompt_3"),i(["l1","r1"]),r(["l2"]),s(["r2"])):we===4?(zt("word_match_guide_prompt_4"),i(["l1","r1","l2","r2"],"chain-mark-2",".72s"),a()):we===5?(zt("word_match_guide_prompt_5"),i(["l1","r1","l2","r2"],"chain-mark-4",".24s"),a()):we===6?(zt("word_match_guide_prompt_6"),["l1","r1","l2","r2"].forEach(l=>n.querySelector(`[data-demo="${l}"]`)?.classList.add("clearing")),a()):we===7?(zt("word_match_guide_prompt_7"),s(["l3"])):we===8?(zt("word_match_guide_prompt_7b"),r(["l3"]),s(["r2"])):we===9?(zt("word_match_guide_prompt_7c"),n.querySelector('[data-demo="l3"]')?.classList.add("wrong"),n.querySelector('[data-demo="r2"]')?.classList.add("wrong"),a()):we===10?(zt("word_match_guide_prompt_8"),n.querySelector('[data-demo="bomb"]')?.classList.add("guide-glow")):we===11?(zt("word_match_guide_prompt_8_pick"),n.querySelector('[data-demo="bomb"]')?.classList.add("selected"),s(["l2"])):we===12?(zt("word_match_guide_prompt_8b"),n.querySelector('[data-demo="bomb"]')?.classList.add("used"),["l1","r1","l2","r2","l3","r3"].forEach(l=>n.querySelector(`[data-demo="${l}"]`)?.classList.add("clearing")),a()):we===13?(zt("word_match_guide_prompt_8c"),n.querySelector('[data-demo="mag"]')?.classList.add("guide-glow")):we===14?(zt("word_match_guide_prompt_8d"),n.querySelector('[data-demo="mag"]')?.classList.add("used"),["l1","r1","l2","r2","l3","r3"].forEach((l,u)=>{let d=n.querySelector(`[data-demo="${l}"]`);d&&d.classList.add("hintshake",`hint-color-${u%3+1}`)}),a()):(zt("word_match_guide_prompt_9"),a(),s(["l1","r1"])),h.wmGuideStart&&(h.wmGuideStart.textContent=C(we>=15?"word_match_guide_start":"word_match_guide_next"));let o=Sp(),c=o?n.querySelector(`[data-demo="${o}"]`):bp()?h.wmGuideStart:null;requestAnimationFrame(()=>Bw(c))}function kf(n=null){let e=Sp();if(e&&n!==e){Ee(Kt),Lf();return}if(!(!e&&n)){if(e&&n){let t=Fw(n),i=we===1&&n==="r1"||we===3&&n==="r2",s=we===8&&n==="r2";t&&!i&&Qs(t),i?(Ee(Xt),Ee(on)):s?Ee(vn):n==="bomb"?Ee(Kt):we===11&&n==="l2"?(Ee(on),Wr("l2",42)):n==="mag"&&Ee(Kt)}if(!(bp()&&n)){if(we+=1,we>15){_u(!0);return}Lf()}}}function _u(n=!0){if(h.wmGuide&&(h.wmGuide.classList.add("hide"),h.wmGuide.setAttribute("aria-hidden","true"),n&&(G.wordMatchGuideSeen=!0,G.wordMatchGuideVersion=Mu,pt(G)),nu)){let e=nu;nu=null,e()}}async function Xo(n=!1){let e=++Uo;h.wordMatchScreen?.classList.remove("wm-setup-mode"),h.wmSetup?.classList.add("hide");let t=Se&&!Se.guideMode?Se:null,i=n&&t?.score||0,s=n&&t?.combo||0,r=n&&t?.maxCombo||0,a=n&&(t?.nextLevel||(t?.level||0)+1)||1,o=es(),c=n&&o;if(wo(),go(),is(),c||Xi(),Qi(""),!n&&G.wordMatchGuideVersion!==Mu)return await Mp(!0),Xo(!0);pw(),h.wmMessage&&(h.wmMessage.textContent=C("loading")),await vw();let l=Math.max(1,Number(a)||1),u=Pu(l),d=u.cols*u.rows,f=Dw(d);if(!f.length){Se={leftSlots:[],rightSlots:[],selectedReading:null,selectedWord:null,score:0,busy:!1,removingIds:new Set,dropping:!1},h.wmReadings.innerHTML="",h.wmWords.innerHTML="",h.wmScore.textContent="0",h.wmLeft.textContent=G.wordMatchBest||0,h.wmTime&&(h.wmTime.textContent="0:00"),h.wmMessage.textContent=C("no_questions");return}Se={level:l,levelConfig:u,finiteLevel:!0,visiblePairs:d,leftSlots:f.map((v,m)=>({...v,_wmId:`${v._wmId}_l_${m}`})).slice(0,d),rightSlots:ts(f.map((v,m)=>({...v,_wmId:`${v._wmId}_r_${m}`}))).slice(0,d),selectedReading:null,selectedWord:null,score:i,startedAt:0,lastGain:0,combo:s,maxCombo:Math.max(r,s),pairsCleared:0,bonusSeconds:0,nextMultiplier:1,powerups:{bomb:2,magnifier:3},lives:5,bombArmed:!1,goal:{type:"pairs",target:d,labelKey:"word_match_goal_pairs",done:!1},finished:!1,busy:!0,removingIds:new Set,wrongIds:new Set,newIds:new Set,droppingIds:new Set,selectedAt:0,lastNudgeAt:0,chainActive:!1,chainCount:0,chainDeadline:0,chainMultiplier:1,chainPendingPairs:[],chainPendingBaseIds:new Set,chainPendingIds:new Set,musicOn:es(),dropping:!1};let p=Se;h.wmTime&&(h.wmTime.textContent=ns(hp)),ut(),If(),Du();let g=["3","2","1",C("word_match_start")];for(let v of g){if(e!==Uo||Se!==p||!Se)return;Qi(v,"start-count"),Ee(sf,v),Qs(v==="3"?"\u3055\u3093":v==="2"?"\u306B":v==="1"?"\u3044\u3061":"\u30B9\u30BF\u30FC\u30C8"),await new Promise(m=>setTimeout(m,v===C("word_match_start")?650:700))}e!==Uo||Se!==p||!Se||Se.finished||(or("start-count"),Se.busy=!1,Se.startedAt=Date.now(),ut(),yp(),If())}function Tp(n){n<=(G.wordMatchBest||0)||(G.wordMatchBest=n,pt(G))}function ut(){if(!h.wmReadings||!h.wmWords)return;if(!Se){if(h.wordMatchScreen?.classList.contains("wm-setup-mode"))return;Xo();return}let n=Se;n.guideMode||Ou(n);let e=mw(n),t=_w(n);if(h.wmReadings.style.setProperty("--wm-cols",e),h.wmWords.style.setProperty("--wm-cols",e),h.wmReadings.style.setProperty("--wm-rows",t),h.wmWords.style.setProperty("--wm-rows",t),h.wmScore.textContent=n.score||0,h.wmLeft.textContent=G.wordMatchBest||0,h.wmCombo&&(h.wmCombo.textContent=n.combo||0),h.wmGoal&&(h.wmGoal.textContent=n.finiteLevel?`${gw(n)} ${n.pairsCleared||0}/${n.visiblePairs||fp(n)}`:Mw(n)),h.wmPower&&(h.wmPower.textContent=`\xD7${(n.nextMultiplier||1).toFixed((n.nextMultiplier||1)%1?1:0)}`),Uu(),cr(),mu(),h.wmWrong&&(h.wmWrong.textContent=""),n.guideMode)Ow(n);else if(n.finished)h.wmMessage.textContent=n.finishMessage||`${C("word_match_timeup")} ${C("word_match_score")}\uFF1A${n.score||0}`;else{let s=n.combo?` ${C("word_match_combo")} ${n.combo}`:"";h.wmMessage.textContent=n.lastGain?`${C("word_match_plus")}${n.lastGain}${s} \xB7 ${C("word_match_hint")}`:C("word_match_hint")}let i=(s,r)=>{let a=document.createElement("button"),o=r==="reading";a.type="button",a.className=`wm-tile ${o?"reading":"word"}`,a.dataset.id=s._wmId,a.dataset.base=s._wmBaseId,a.dataset.side=r,a.dataset.points=Iu(s),a.title=`+${a.dataset.points}`;let c=o?s._wmReading:s._wmLabel;if(a.textContent=c,s._wmSpecial){a.classList.add("special",`special-${s._wmSpecial}`);let l=document.createElement("span");l.className="wm-special-badge",l.textContent=s._wmSpecial==="time"?C("word_match_special_seconds",10):s._wmSpecial==="hint"?"?":"\xD72",a.appendChild(l)}if([...c].length>=5&&a.classList.add("long"),[...c].length>=7&&a.classList.add("xlong"),(n.newIds?.has(s._wmId)||n.droppingIds?.has(s._wmId))&&a.classList.add("drop"),n.hintIds?.has(s._wmId)){a.classList.add("hintshake");let l=n.hintColors?.get(s._wmId);l&&a.classList.add(`hint-color-${l}`),n.guideMode&&!n.guideMagnifierMode&&a.classList.add("guide-target"),n.guideMode&&n.guideMagnifierMode&&a.classList.add("guide-pair-hint")}if(n.chainPendingIds?.has(s._wmId)){a.classList.add("paired",Fx(n.chainCount||1));let l=Math.max(0,(n.chainDeadline||0)-Date.now()),u=Math.max(.12,Math.min(1.35,.16+l/7e3));a.style.setProperty("--wm-chain-speed",`${u}s`),a.disabled=!0}return n.finished&&(a.classList.add("disabled"),a.disabled=!0),n.removingIds?.has(s._wmId)&&a.classList.add("clearing"),n.wrongIds?.has(s._wmId)&&a.classList.add("wrong"),(o&&n.selectedReading===s._wmId||!o&&n.selectedWord===s._wmId)&&(a.classList.add("selected"),n.guideMode&&a.classList.add("guide-selected")),a.onclick=()=>Hw(s._wmId,r),a};h.wmReadings.innerHTML="",h.wmWords.innerHTML="",n.leftSlots.forEach(s=>h.wmReadings.appendChild(i(s,"reading"))),n.rightSlots.forEach(s=>h.wmWords.appendChild(i(s,"word")))}function Br(n){let e=Se;return[...e?.leftSlots||[],...e?.rightSlots||[]].find(t=>t._wmId===n)||null}function Ep(n=!1){let e=Se;if(!e||e.finished)return;let t=null,i=[];if(e.selectedReading||e.selectedWord?(t=Br(e.selectedReading||e.selectedWord),i=e.selectedReading?e.rightSlots:e.leftSlots):n&&(t=(e.leftSlots||[])[Pe((e.leftSlots||[]).length)??0],i=e.rightSlots||[]),!t)return;let s=(i||[]).find(r=>Go(t,r));s&&(e.hintIds=new Set([t._wmId,s._wmId]),e.hintColors=new Map([[t._wmId,1],[s._wmId,1]]),Ee(Kt),ut(),setTimeout(()=>{Se&&(Se.hintIds?.clear(),Se.hintColors?.clear(),ut())},800))}function zw(){let n=Se;if(!n||n.finished||n.busy)return;let e=n.selectedReading||n.selectedWord,t=!!n.selectedReading!=!!n.selectedWord;if(!e||!t){n.selectedAt=0,n.lastNudgeAt=0;return}let i=Date.now();n.selectedAt||(n.selectedAt=i),!(i-n.selectedAt<1e4)&&(i-(n.lastNudgeAt||n.selectedAt)<3e3||(n.lastNudgeAt=i,!((Pe(10)??9)>=3)&&Ep(!1)))}function Go(n,e){let t=bf(Number(n?._wmKey)||0,Number(e?._wmKey)||0);return t!==null?t:!!(n&&e&&n._wmBaseId===e._wmBaseId)}function Wo(n){let e=document.querySelector("#wordMatchScreen .word-match-board");e&&(e.classList.remove("wm-hit","wm-miss"),e.offsetWidth,e.classList.add(n),setTimeout(()=>e.classList.remove(n),360),h.wmScore&&(h.wmScore.classList.remove("wm-score-pop"),h.wmScore.offsetWidth,h.wmScore.classList.add("wm-score-pop"),setTimeout(()=>h.wmScore.classList.remove("wm-score-pop"),360)))}function Hw(n,e){let t=Se;if(!t||t.finished||t.busy||t.removingIds?.has(n))return;if(t.guideMode){jo(n);return}let i=Br(n);if(t.bombArmed&&i){Nw(n,e);return}let s=t.selectedReading,r=t.selectedWord,a=e==="reading"?s===n:r===n,o=e==="reading"?!!r&&s!==n:!!s&&r!==n,c=!!i&&!a;if(o){let l=Br(e==="reading"?r:s);i&&l&&Go(i,l)&&(c=!1)}if(c&&Qs(i._wmSpeak||i._wmReading),e==="reading"?t.selectedReading=t.selectedReading===n?null:n:t.selectedWord=t.selectedWord===n?null:n,t.hintIds=new Set,t.hintColors=new Map,t.selectedReading&&!t.selectedWord||!t.selectedReading&&t.selectedWord?(t.selectedAt=Date.now(),t.lastNudgeAt=t.selectedAt):!t.selectedReading&&!t.selectedWord&&(t.selectedAt=0,t.lastNudgeAt=0),t.selectedReading&&t.selectedWord){let l=Br(t.selectedReading),u=Br(t.selectedWord);if(l&&u&&Go(l,u)){if(t.chainPendingBaseIds?.has(l._wmBaseId)){t.selectedReading=null,t.selectedWord=null,ut();return}let p=Iu(l),g=Date.now(),v=t.selectedAt&&g-t.selectedAt<=3e3?10:0;t.combo=(t.combo||0)+1,t.maxCombo=Math.max(t.maxCombo||0,t.combo),t.pairsCleared=(t.pairsCleared||0)+1;let m=ww(t.combo),_=t.nextMultiplier||1;zx(),t.chainPendingPairs=Array.isArray(t.chainPendingPairs)?t.chainPendingPairs:[],t.chainPendingBaseIds=t.chainPendingBaseIds||new Set,t.chainPendingIds=t.chainPendingIds||new Set,t.chainPendingPairs.push({baseId:l._wmBaseId,leftId:l._wmId,rightId:u._wmId,baseGain:p,comboMult:m,powerMult:_,fastBonus:v,specialItem:l._wmSpecial?l:u}),t.chainPendingBaseIds.add(l._wmBaseId),t.chainPendingIds.add(l._wmId),t.chainPendingIds.add(u._wmId),t.nextMultiplier=1,t.lastGain=0,Ee(Xt),Tw(t.combo,u._wmId),Wo("wm-hit"),t.selectedReading=null,t.selectedWord=null,t.selectedAt=0,t.lastNudgeAt=0,ut(),Yf(t)&&cu();return}let d=t.selectedReading,f=t.selectedWord;t.lastGain=0,t.combo=0,t.nextMultiplier=1,cu(),t.lives=Math.max(0,(t.lives??5)-1),Ee(vn),Wo("wm-miss"),t.wrongIds=new Set([d,f]),t.selectedReading=null,t.selectedWord=null,t.selectedAt=0,t.lastNudgeAt=0,ut(),setTimeout(()=>{if(Se){if(Se.wrongIds?.clear(),(Se.lives??0)<=0){vp(`${C("word_match_life_empty")} ${C("word_match_score")}\uFF1A${Se.score||0}`);return}ut()}},500);return}ut()}var Ap="kana_quiz_song_lyrics_v1",On=null,Do=0;function Ko(){try{return JSON.parse(localStorage.getItem(Ap)||"{}")}catch{return{}}}function Cp(n){localStorage.setItem(Ap,JSON.stringify(n||{}))}function Nf(n){return/[ぁ-ゖァ-ヺー]/.test(String(n||""))}function Vw(n){let e=Tf(n);if(e)return e;let t=String(n||"").split(/\r?\n/).map(s=>s.trim()).filter(Boolean),i=[];for(let s=0;s<t.length;s++){let r=t[s],a=r.includes("	")?r.split("	"):r.split(/\s*\|\|\s*/);if(a.length>1){i.push({jp:(a[0]||"").trim(),note:a.slice(1).join(" ").trim()});continue}if(!Nf(r)){i.length&&!i[i.length-1].note&&(i[i.length-1].note=r);continue}let o="",c=t[s+1]||"";c&&!Nf(c)&&(o=c,s++),i.push({jp:r,note:o})}return i.filter(s=>s.jp)}function Gw(n){return(n||[]).map(e=>e.note?`${e.jp}	${e.note}`:e.jp).join(`
`)}function Ww(n){let e=yn().replace("-","_");return n?.[`note_${e}`]||n?.note||""}function Fu(){if(!On)return[];let n=Ko();return Array.isArray(n[On.id])?n[On.id]:[]}function $w(n,e=[]){let t=String(n||"");if(!t)return"";let i=Array.isArray(e)&&e.length>0,s=sr,r=wu;if(i){let u=new Map;[...e,...sr].forEach(d=>Ti(u,d.kanji,d.reading)),s=[...u.entries()].map(([d,f])=>({kanji:d,reading:f})).sort((d,f)=>f.kanji.length-d.kanji.length),r=s.map(bu).filter(Boolean).sort((d,f)=>f.stem.length-d.stem.length||f.baseTail.length-d.baseTail.length)}let a=s.filter(u=>t.includes(u.kanji)).sort((u,d)=>d.kanji.length-u.kanji.length),o=yf(t,a);if(o&&!rr(o))return o;let c=r.filter(u=>t.includes(u.stem)),l="";for(let u=0;u<t.length;){let d=a.find(g=>t.startsWith(g.kanji,u));if(d){l+=d.reading,u+=d.kanji.length;continue}let f=c.map(g=>ep(t,u,g)).find(Boolean);if(f){l+=f.reading,u+=f.surface.length;continue}let p=Qf(t,u);if(p){l+=p.reading,u+=p.surface.length;continue}l+=t[u],u+=1}return l.replace(/\s+/g," ").trim()}function qw(n){if(n?.note)return n.note;let e=yn();return e==="ja"?"\u7FFB\u8A33/\u30E1\u30E2\uFF1A\u672A\u5165\u529B\uFF08\u6B4C\u8A5E\u306E\u6B21\u306E\u884C\u3001\u307E\u305F\u306F Tab \u306E\u5F8C\u308D\u306B\u8FFD\u52A0\uFF09":e==="en"?"Translation/note: not entered. Add it on the next line or after a Tab.":e==="zh-TW"?"\u7FFB\u8B6F/\u89E3\u91CB\uFF1A\u672A\u586B\u5BEB\uFF08\u53EF\u653E\u5728\u6B4C\u8A5E\u4E0B\u4E00\u884C\uFF0C\u6216\u540C\u4E00\u884C Tab \u5F8C\u9762\uFF09":"\u7FFB\u8BD1/\u89E3\u91CA\uFF1A\u672A\u586B\u5199\uFF08\u53EF\u653E\u5728\u6B4C\u8BCD\u4E0B\u4E00\u884C\uFF0C\u6216\u540C\u4E00\u884C Tab \u540E\u9762\uFF09"}function Yo(){if(!h.songsList)return;h.songsList.innerHTML="";let n=Ko();(Fe.songs||[]).forEach((e,t)=>{let i=Array.isArray(n[e.id])?n[e.id].length:0,s=document.createElement("div");s.className="song-card",s.innerHTML=`
      <div class="song-card-index">${t+1}</div>
      <div class="song-card-main">
        <div class="song-card-title">${ke(e.title)}</div>
        <div class="song-card-meta">${ke(e.artist||"")} ${e.year?`\xB7 ${ke(e.year)}`:""}</div>
      </div>
      <div class="song-card-lines">${i?C("song_lines_count",i):C("song_not_added")}</div>
    `,s.onclick=()=>jw(e),h.songsList.appendChild(s)})}function jw(n){if(On=n,!h.songDetail)return;h.songDetail.classList.remove("hide"),h.songDetailTitle.textContent=n.title||"";let e=[n.artist,n.year,Ww(n)].filter(Boolean);h.songDetailMeta.textContent=e.join(" \xB7 "),h.songLyricsInput.value=Gw(Fu()),Jo(),setTimeout(()=>h.songDetail.scrollIntoView({behavior:"smooth",block:"start"}),0)}function Df(){On=null,h.songDetail&&h.songDetail.classList.add("hide")}function Xw(){if(!On)return;let n=Ko();n[On.id]=Vw(h.songLyricsInput?.value||""),Cp(n),Yo(),Jo()}function Kw(){if(!On||!confirm(C("song_clear_confirm")))return;let n=Ko();delete n[On.id],Cp(n),h.songLyricsInput.value="",Yo(),Jo()}function Or(n,e,t=!1){if(!n)return;let i=Math.max(0,Math.min(100,Math.round((Number(e)||0)*100)));n.classList.toggle("speaking",!t),n.style.setProperty("--speak-progress",`${i}%`),n.innerHTML=t?"\u{1F50A}":`<span class="speaker-wave" aria-hidden="true">\u{1F50A}</span><span>${i}%</span>`,t&&n.style.removeProperty("--speak-progress")}function Yw(n,e){let t=Fu()[n];if(!t?.jp)return;let i=++Do;Or(e,0),Lt(t.jp,{onStart:()=>i===Do&&Or(e,.03),onProgress:r=>i===Do&&Or(e,r),onEnd:()=>i===Do&&Or(e,1,!0)})||Or(e,1,!0)}function Jo(){if(!h.songLines)return;let n=Fu();if(!On){h.songLines.innerHTML="";return}if(!n.length){h.songLines.innerHTML=`<div class="song-empty">${ke(C("song_no_lyrics"))}</div>`;return}h.songLines.innerHTML=n.map((e,t)=>`
    <div class="song-line">
      <button class="song-line-play" type="button" data-song-line="${t}" aria-label="${ke(C("song_line_play"))}">\u{1F50A}</button>
      <div class="song-line-body">
        <div class="song-line-jp">${en(e.jp)}</div>
        <div class="song-line-reading"><b>${ke(C("song_reading_label"))}</b>${ke($w(e.jp))}</div>
        <div class="song-line-note"><b>${ke(C("song_translation_label"))}</b>${ke(qw(e))}</div>
      </div>
    </div>
  `).join("")}var Vr=0;function Uf(n=Vr){!h.btnSpeak||n!==Vr||(h.btnSpeak.classList.remove("speaking"),h.btnSpeak.style.removeProperty("--speak-progress"),h.btnSpeak.textContent=C("btn_speak"))}function Fr(n=0){if(!h.btnSpeak)return;let e=Math.max(0,Math.min(100,Math.round((Number(n)||0)*100)));h.btnSpeak.classList.add("speaking"),h.btnSpeak.style.setProperty("--speak-progress",`${e}%`),h.btnSpeak.innerHTML=`<span class="speaker-wave" aria-hidden="true">\u{1F50A}</span><span>${ke(C("btn_speaking"))}</span><span class="speak-percent">${e}%</span>`}function Jw(){return $?$.mode==="n2_exam"||$.mode==="n2_study"||$.mode==="n2_progressive"?np($.n2Q,$.mode==="n2_exam"?"speak":"full"):$.mode==="sentence_study"||$.mode==="sentence_quiz"?$.sentenceItem?.jp||"":Zs($.mode)&&$.source?ln($.source):$.correct?ln($.correct):"":""}function Of(){let n=Jw();if(!n)return;let e=++Vr;Fr(0),Lt(n,{onQueued:()=>Fr(0),onStart:()=>Fr(.03),onProgress:i=>{e===Vr&&Fr(i)},onEnd:()=>{e===Vr&&(Fr(1),setTimeout(()=>Uf(e),220))}})||Uf(e)}var Rp=[],er=null,$e=null;function Ei(n,e){if(!n)return"";let t=yn().replace("-","_");return n[`${e}_${t}`]??n[e]??""}function Pp(){h.grammarTopics&&(h.grammarTopics.innerHTML="",Rp.forEach(n=>{let e=document.createElement("div");e.className="grammar-topic-card",e.innerHTML=`
      <div class="grammar-topic-icon">${n.emoji||"\u{1F4D8}"}</div>
      <div class="grammar-topic-info">
        <div class="grammar-topic-title">${Ei(n,"title")}</div>
        <div class="grammar-topic-sub">${Ei(n,"subtitle")}</div>
      </div>
      <div class="grammar-topic-arrow">\u203A</div>
    `,e.onclick=()=>Ip(n),h.grammarTopics.appendChild(e)}))}function Ip(n){er=n,h.grammarTopicTitle.textContent=Ei(n,"title"),h.btnGrammarPractice&&h.btnGrammarPractice.classList.toggle("hide",!n.practice),h.grammarContent.innerHTML="";let e=yn().replace("-","_");(n.sections||[]).forEach(t=>{let i=document.createElement("div");switch(t.type){case"intro":i.className="g-intro",i.innerHTML=Ei(t,"text");break;case"heading":i.className="g-heading",i.innerHTML=Ei(t,"text");break;case"rule":i.className="g-rule",i.innerHTML=Ei(t,"text"),t.color&&(i.style.borderLeftColor=t.color);break;case"note":i.className="g-note",i.innerHTML=Ei(t,"text");break;case"verb_list":i.className="g-verb-list",(t.items||[]).forEach(r=>{let a=document.createElement("div");a.className="g-verb",a.innerHTML=`
            <span class="jp">${r.jp}</span>
            <span class="rm">${r.rm||""}</span>
            <span class="cn">${Ei(r,"cn")}</span>
          `,a.onclick=()=>Lt(r.jp.replace(/[（(].*?[)）]/g,"")),i.appendChild(a)});break;case"steps":i.className="g-steps",(t[`items_${e}`]||t.items||[]).forEach(r=>{let a=document.createElement("div");a.className="step",a.innerHTML=r,i.appendChild(a)});break;default:return}h.grammarContent.appendChild(i)}),St(h.grammarTopicScreen)}function ts(n){let e=n.slice(),t=Nr(e.length,0,e.length);if(t?.indices?.length===e.length)return t.indices.map(s=>e[s]);let i=Jn(e.length);return i.length===e.length?i.map(s=>e[s]):e}function Lp(){if(!er||!er.practice)return;let n=er.practice,e=ts(n.items||[]),t=e;n.type==="scenario"&&(t=e.map(i=>{let s=i.options||[],r=ts(s.map((c,l)=>l)),a=r.map(c=>s[c]),o=r.indexOf(i.answer);return{...i,options:a,answer:o}})),$e={practice:n,items:t,idx:0,ok:0,ng:0,answered:!1},h.gpTotal.textContent=$e.items.length,h.gpOk.textContent=0,h.gpNg.textContent=0,h.gpDone.textContent=0,h.gpProgressFill.style.width="0%",St(h.grammarPracticeScreen),Bu()}function Bu(){let{practice:n,items:e,idx:t}=$e;if(t>=e.length){let a=e.length,o=xf($e.ok,a)||"0%",c=Number.parseInt(o,10)||0,l=c>=90?"\u{1F3C6}":c>=70?"\u{1F389}":c>=50?"\u{1F44D}":"\u{1F4AA}";h.gpHint.textContent="",h.gpQ.textContent="",h.gpOpts.innerHTML="",h.gpResult.innerHTML=`<div class="gp-summary"><div style="font-size:2.6rem;margin-bottom:6px">${l}</div><div class="big">${o}</div><div class="sub">${C("gp_summary_sub",a,$e.ok,$e.ng)}</div></div>`,h.btnGpNext.textContent=C("gp_again");return}let i=e[t],s=yn(),r=n[`hint_${s.replace("-","_")}`]||n.hint||n.question||"";if(h.gpHint.textContent=r,h.gpResult.innerHTML="",h.btnGpNext.textContent=C("btn_next"),h.gpOpts.innerHTML="",$e.answered=!1,$e.selected=-1,h.btnGpSubmit&&(h.btnGpSubmit.classList.remove("hide"),h.btnGpSubmit.disabled=!0,h.btnGpSubmit.classList.remove("primary"),h.btnGpSubmit.textContent=C("gp_submit")),h.btnGpNext&&h.btnGpNext.classList.add("hide"),n.type==="scenario"){let a=i[`scene_${s.replace("-","_")}`]||i.scene;h.gpQ.textContent=a,(i.options||[]).forEach((o,c)=>{let l=document.createElement("div");l.className="gp-opt gp-opt-row",l.innerHTML=`
        <button class="gp-speak" type="button" aria-label="\u6717\u8BFB">\u{1F50A}</button>
        <span class="gp-opt-text">${o.jp}</span>
      `,l.querySelector(".gp-speak").onclick=u=>{u.stopPropagation(),Lt(o.jp.replace(/[（(].*?[)）]/g,""))},l.onclick=()=>Ff(c),h.gpOpts.appendChild(l)})}else h.gpQ.textContent=i.q,(n.labels||[]).forEach((a,o)=>{let c=document.createElement("div");c.className="gp-opt",c.textContent=a,c.onclick=()=>Ff(o),h.gpOpts.appendChild(c)}),setTimeout(()=>Lt(i.q.replace(/[（(].*?[)）]/g,"")),300)}function Ff(n){if(!$e||$e.answered)return;if($e.selected=n,h.gpOpts.querySelectorAll(".gp-opt").forEach((i,s)=>i.classList.toggle("selected",s===n)),$e.practice.type==="scenario"){let s=$e.items[$e.idx].options[n];s&&s.jp&&Lt(s.jp.replace(/[（(].*?[)）]/g,""))}h.btnGpSubmit&&(h.btnGpSubmit.disabled=!1,h.btnGpSubmit.classList.add("primary"))}function Zw(){!$e||$e.answered||$e.selected<0||(Qw($e.selected),h.btnGpSubmit&&h.btnGpSubmit.classList.add("hide"),h.btnGpNext&&h.btnGpNext.classList.remove("hide"))}function Qw(n,e){if($e.answered)return;$e.answered=!0;let t=$e.practice,i=$e.items[$e.idx],s=i.answer!==void 0?i.answer:i.a,r=Dr(n,s)??n===s;r?($e.ok++,Xt()):($e.ng++,vn()),h.gpOpts.querySelectorAll(".gp-opt").forEach((u,d)=>{u.setAttribute("disabled","true"),d===s?u.classList.add("correct"):d===n&&u.classList.add("wrong")});let o=yn(),c=(u,d)=>u&&(u[`${d}_${o.replace("-","_")}`]||u[d])||"";if(t.type==="scenario"){let u=i.options[s],d=t[`labels_${o.replace("-","_")}`]||t.labels||[],f=d&&u.g!==void 0?d[u.g]:"",p=c(i,"note"),g=c(i,"usage"),v=p?`<div class="gp-note">\u26A0\uFE0F ${p}</div>`:"",m=g?`<div class="gp-usage">\u{1F4A1} ${g}</div>`:"";setTimeout(()=>Lt(u.jp.replace(/[（(].*?[)）]/g,"")),300);let _=r?`\u2705 ${C("gp_right")}<b>${u.jp}</b> \xB7 <span class="gp-tag">${f}</span>`:`\u274C ${C("gp_answer")}<b>${u.jp}</b> \xB7 <span class="gp-tag">${f}</span>`;h.gpResult.innerHTML=_+v+m}else{let u=t.labels[s],d=c(i,"cn");h.gpResult.innerHTML=r?`\u2705 ${C("gp_right")}<b>${i.q}</b> \u2192 <b>${u}</b>${d?`\uFF08${d}\uFF09`:""}`:`\u274C ${C("gp_wrong")}<b>${i.q}</b> \u2192 <b>${u}</b>${d?`\uFF08${d}\uFF09`:""}`}h.gpOk.textContent=$e.ok,h.gpNg.textContent=$e.ng,h.gpDone.textContent=$e.idx+1;let l=($e.idx+1)/$e.items.length*100;h.gpProgressFill.style.width=l+"%"}function eM(){if($e){if(!$e.answered&&$e.idx<$e.items.length){h.gpResult.textContent=C("please_answer");return}if($e.idx>=$e.items.length){Lp();return}$e.idx++,Bu()}}function kp(n){return n==="n2_exam"}function tM(n){return n==="rm_in"||n==="jp_in"}function Np(n){return!$||mt?!1:kp(n)||n==="sentence_quiz"?!0:!tM(n)&&Array.isArray($.choices)&&$.choices.length>0}function ni(){h.btnNew&&(Np($?.mode)?(h.btnNew.textContent=C("btn_answer"),h.btnNew.disabled=!($.selectedChoiceIndex>=0)):(h.btnNew.textContent=C("btn_next"),h.btnNew.disabled=!1))}function Zn(n){!$||mt||($.selectedChoiceIndex=n,h.result.textContent="",[...h.opts.querySelectorAll(".opt")].forEach((e,t)=>{e.classList.toggle("selected",t===n)}),ni())}function tr(n,e){[...h.opts.querySelectorAll(".opt")].forEach((t,i)=>{t.classList.remove("selected"),t.classList.add("disabled"),i===e&&t.classList.add("correct"),i===n&&n!==e&&t.classList.add("wrong")})}function nM(){if(!$||mt)return;let n=$.selectedChoiceIndex;if(!(n>=0)){h.result.textContent=C("please_answer");return}kp($.mode)?AM(n,$.n2Q):$.mode==="sentence_quiz"?yM(n):CM(n)}function iM(){Np($?.mode)?nM():Hp()}function ru(){!h?.quizScreen||h.quizScreen.classList.contains("hide")||requestAnimationFrame(()=>{let n=h.quizScreen.querySelector(".quiz-header")||h.quizScreen,e=Math.max(0,n.getBoundingClientRect().top+window.scrollY-8);window.scrollTo({top:e,behavior:"smooth"})})}function $o(n){if(n==="n2_exam"){h.inputWrap.classList.add("hide"),h.opts.classList.remove("hide"),ni();return}let e=n==="rm_in"||n==="jp_in",t=!e;h.inputWrap.classList.toggle("hide",!e),h.opts.classList.toggle("hide",!t),e&&(h.inp.value="",h.inp.placeholder=n==="rm_in"?C("input_kana"):C("input_romaji"),setTimeout(()=>h.inp.focus?.(),0)),ni()}var sM={\u4E3A:"\u70BA",\u4E48:"\u9EBC",\u5417:"\u55CE",\u8FD9:"\u9019",\u4E2A:"\u500B",\u91CC:"\u88E1",\u70B9:"\u9EDE",\u8BED:"\u8A9E",\u6C14:"\u6C23",\u4F1A:"\u6703",\u53D8:"\u8B8A",\u8FC7:"\u904E",\u5F53:"\u7576",\u65F6:"\u6642",\u73B0:"\u73FE",\u4E60:"\u7FD2",\u793C:"\u79AE",\u8C8C:"\u8C8C",\u8BCD:"\u8A5E",\u52A8:"\u52D5",\u5C06:"\u5C07",\u6765:"\u4F86",\u4E0E:"\u8207",\u5173:"\u95DC",\u7CFB:"\u4FC2",\u5BF9:"\u5C0D",\u9519:"\u932F",\u8BEF:"\u8AA4",\u5E94:"\u61C9",\u8BE5:"\u8A72",\u5199:"\u5BEB",\u8BFB:"\u8B80",\u4E66:"\u66F8",\u5B66:"\u5B78",\u4E60:"\u7FD2",\u7535:"\u96FB",\u8F66:"\u8ECA",\u70B9:"\u9EDE",\u949F:"\u9418",\u949F:"\u9418",\u949F:"\u9418",\u6B22:"\u6B61",\u89C1:"\u898B",\u542C:"\u807D",\u8BF4:"\u8AAA",\u8BA9:"\u8B93",\u7ED9:"\u7D66",\u4ECE:"\u5F9E",\u8FB9:"\u908A",\u5F00:"\u958B",\u5173:"\u95DC",\u95E8:"\u9580",\u95F4:"\u9593",\u9898:"\u984C",\u8BCD:"\u8A5E",\u4E49:"\u7FA9",\u8BD1:"\u8B6F",\u7B80:"\u7C21",\u53D1:"\u767C",\u97F3:"\u97F3",\u7C7B:"\u985E",\u5904:"\u8655",\u8F83:"\u8F03",\u522B:"\u5225",\u8FD9:"\u9019",\u79CD:"\u7A2E",\u6001:"\u614B",\u6807:"\u6A19",\u8BB0:"\u8A18",\u5BBE:"\u8CD3",\u5B9E:"\u5BE6",\u9645:"\u969B",\u58F0:"\u8072",\u8FDB:"\u9032",\u8FDE:"\u9023",\u7EED:"\u7E8C",\u7ED3:"\u7D50",\u6784:"\u69CB",\u7EC4:"\u7D44",\u5355:"\u55AE",\u9009:"\u9078",\u62E9:"\u64C7",\u5C42:"\u5C64",\u663E:"\u986F",\u89C6:"\u8996",\u542C:"\u807D",\u56FD:"\u570B",\u533B:"\u91AB",\u5E08:"\u5E2B",\u5417:"\u55CE",\u95EE:"\u554F",\u96BE:"\u96E3",\u9759:"\u975C",\u513F:"\u5152",\u5C81:"\u6B72",\u5F20:"\u5F35",\u4E07:"\u842C",\u5706:"\u5713",\u5E01:"\u5E63",\u4E70:"\u8CB7",\u5356:"\u8CE3",\u8C01:"\u8AB0",\u54EA:"\u54EA",\u5E26:"\u5E36",\u573A:"\u5834",\u5904:"\u8655",\u5B9E:"\u5BE6",\u9A8C:"\u9A57",\u5907:"\u5099",\u590D:"\u8907",\u5174:"\u8208",\u8C22:"\u8B1D",\u4E1C:"\u6771",\u4E1C\u4EAC:"\u6771\u4EAC",\u53F0:"\u81FA"},rM=[["\u4E3A\u4EC0\u4E48","\u70BA\u4EC0\u9EBC"],["\u8FD9\u91CC","\u9019\u88E1"],["\u8FD9\u4E2A","\u9019\u500B"],["\u8FD9\u79CD","\u9019\u7A2E"],["\u8BED\u6CD5","\u8A9E\u6CD5"],["\u8BED\u6C14","\u8A9E\u6C23"],["\u793C\u8C8C","\u79AE\u8C8C"],["\u52A8\u8BCD","\u52D5\u8A5E"],["\u540D\u8BCD","\u540D\u8A5E"],["\u5F62\u5BB9\u8BCD","\u5F62\u5BB9\u8A5E"],["\u73B0\u5728","\u73FE\u5728"],["\u5C06\u6765","\u5C07\u4F86"],["\u8FC7\u53BB","\u904E\u53BB"],["\u5B66\u4E60","\u5B78\u7FD2"],["\u8BF4\u660E","\u8AAA\u660E"],["\u53E5\u5B50","\u53E5\u5B50"],["\u4F8B\u53E5","\u4F8B\u53E5"],["\u4E2D\u6587","\u4E2D\u6587"],["\u610F\u601D","\u610F\u601D"],["\u539F\u53E5","\u539F\u53E5"],["\u8868\u8FBE","\u8868\u9054"],["\u4E0D\u80FD","\u4E0D\u80FD"],["\u53EF\u4EE5","\u53EF\u4EE5"],["\u5E94\u8BE5","\u61C9\u8A72"],["\u8FDE\u63A5","\u9023\u63A5"],["\u63A5\u7EED","\u63A5\u7E8C"],["\u5173\u7CFB","\u95DC\u4FC2"],["\u5BBE\u8BED","\u8CD3\u8A9E"],["\u5BF9\u8C61","\u5C0D\u8C61"],["\u72B6\u6001","\u72C0\u614B"],["\u4E60\u60EF","\u7FD2\u6163"],["\u9009\u62E9","\u9078\u64C7"],["\u9519\u8BEF","\u932F\u8AA4"],["\u542C\u8BF4","\u807D\u8AAA"],["\u53D1\u97F3","\u767C\u97F3"],["\u8BFB\u4E66","\u8B80\u66F8"],["\u7535\u5F71","\u96FB\u5F71"],["\u7535\u8F66","\u96FB\u8ECA"],["\u516C\u4EA4","\u516C\u8ECA"],["\u56FE\u4E66\u9986","\u5716\u66F8\u9928"],["\u661F\u671F","\u661F\u671F"],["\u4E3A\u4E86","\u70BA\u4E86"],["\u56E0\u4E3A","\u56E0\u70BA"],["\u6240\u4EE5","\u6240\u4EE5"],["\u867D\u7136","\u96D6\u7136"],["\u4F46\u662F","\u4F46\u662F"],["\u660E\u660E","\u660E\u660E"],["\u5982\u679C","\u5982\u679C"],["\u65F6\u5019","\u6642\u5019"],["\u4E4B\u524D","\u4E4B\u524D"],["\u4E4B\u540E","\u4E4B\u5F8C"],["\u91CC\u9762","\u88E1\u9762"],["\u5916\u9762","\u5916\u9762"],["\u524D\u9762","\u524D\u9762"],["\u540E\u9762","\u5F8C\u9762"],["\u8F66\u7AD9","\u8ECA\u7AD9"],["\u94B1\u5305","\u9322\u5305"],["\u94C5\u7B14","\u925B\u7B46"],["\u5F20\u7968","\u5F35\u7968"],["\u8FD9\u672C\u4E66","\u9019\u672C\u66F8"],["\u8FD9\u4E2A\u5B57","\u9019\u500B\u5B57"]];function Zo(n){let e=String(n||"");return rM.forEach(([t,i])=>{e=e.split(t).join(i)}),e.replace(/[\u4e00-\u9fff]/g,t=>sM[t]||t)}var aM={\u3067\u3059:"a polite judgment/copula, \u201Cis/are\u201D",\u3067\u3057\u305F:"a polite past judgment, \u201Cwas/were\u201D",\u3067\u306F:"a negative noun/na-adjective construction, as in \u201Cnot ...\u201D",\u3060:"a plain-form judgment/copula",\u307E\u3059:"polite non-past, future, or habitual verb forms",\u307E\u3057\u305F:"polite past verb forms, \u201Cdid ...\u201D",\u307E\u305B\u3093:"polite negative verb forms, \u201Cdo not ...\u201D",\u307E\u305B\u3093\u3067\u3057\u305F:"polite past negative verb forms, \u201Cdid not ...\u201D",\u3092:"marking the direct object of an action",\u306B:"marking a destination, time point, target, or place of existence",\u304C:"marking the subject or the target of a state, ability, like/dislike, etc.",\u306F:"marking the topic or contrast",\u3067:"marking the action location, means, range, or a te-form connection",\u3078:"marking the direction of movement",\u306E:"possession, modification, or nominalization",\u3082:"adding the meaning \u201Calso/too\u201D",\u3084:"listing examples, \u201C... and ... etc.\u201D",\u304B\u3089:"a starting point or reason; as a reason it sounds direct",\u307E\u3067:"an endpoint or limit, \u201Cuntil/up to ...\u201D",\u307E\u3067\u306B:"a deadline, \u201Cby/before ...\u201D",\u3088\u308A:"the comparison baseline, \u201Cthan ...\u201D",\u306E\u307B\u3046\u304C:"the preferred/stronger side in a comparison",\u307B\u3069:"degree; often used in \u201Cnot as ... as ...\u201D",\u3060\u3051:"limitation, \u201Conly ...\u201D",\u3057\u304B:"\u201Conly ...\u201D together with a negative predicate",\u3066\u3082:"concession, \u201Ceven if ...\u201D, or permission",\u3067\u3082:"concession \u201Ceven ...\u201D or a soft example \u201C... or something\u201D",\u306E\u306B:"contrast against expectation, \u201Calthough / even though ...\u201D",\u306E\u3067:"a reason/cause, usually more objective or softer",\u3060\u304B\u3089:"sentence connector, \u201Cso/therefore\u201D",\u3057\u304B\u3057:"sentence connector, \u201Cbut/however\u201D",\u3066:"the te-form, used to connect actions or attach following expressions",\u305F:"the ta-form, past or completed action",\u306A\u3044:"the nai-form, negation",\u306A\u3044\u3067:"doing the next action without doing the first one",\u306A\u304F\u3066\u3082:"\u201Ceven without ... / do not have to ...\u201D",\u306A\u304F\u3066\u306F:"obligation, \u201Cmust ...\u201D",\u306A\u3051\u308C\u3070:"condition \u201Cif not ...\u201D; often used for obligation",\u3070:"conditional, \u201Cif ... then ...\u201D",\u305F\u3089:"conditional, \u201Cif/when ...\u201D",\u306A\u3089:"topic-based condition, \u201Cif it is about ...\u201D",\u3068:"constant condition or quotation",\u3057:"listing reasons, \u201Cand ... and ...\u201D",\u305F\u308A:"listing sample actions, \u201Cdo things like ... and ...\u201D",\u306A\u304C\u3089:"simultaneous actions, \u201Cwhile ...\u201D",\u3066\u304B\u3089:"after doing the first action",\u524D\u306B:"before ...",\u5F8C\u3067:"after ...",\u9593:"a period of time",\u9593\u306B:"something happening within a period",\u3046\u3061\u306B:"doing something while a state still lasts",\u3068\u3053\u308D:"a stage of an action: about to / in the middle of / just did",\u3070\u304B\u308A:"just did something, or an excessive tendency",\u307E\u307E:"leaving a state unchanged",\u305F\u3081:"cause or purpose",\u305F\u3081\u306B:"purpose, \u201Cin order to / for ...\u201D",\u3088\u3046\u306B:"purpose/goal, \u201Cso that ... can ...\u201D, or \u201Clike ...\u201D",\u3053\u3068:"nominalizing an action or clause as \u201Cthe fact/act of ...\u201D",\u3082\u306E:"a thing, general truth, or emotional statement",\u3064\u3082\u308A:"intention/plan",\u3064\u3082\u308A\u3060:"intention/plan",\u4E88\u5B9A:"a schedule or plan",\u4E88\u5B9A\u3060:"a schedule or plan",\u306F\u305A:"what should be true by expectation",\u306F\u305A\u3060:"what should be true by expectation",\u3079\u304D:"should / ought to",\u3079\u304D\u3060:"should / ought to",\u3067\u3057\u3087\u3046:"probability or soft guess, \u201Cprobably / ... right?\u201D",\u3060\u308D\u3046:"plain-form guess, \u201Cprobably\u201D",\u304B\u3082\u3057\u308C\u306A\u3044:"possibility, \u201Cmight / may\u201D",\u3089\u3057\u3044:"hearsay or typical quality",\u3088\u3046:"appearance/guess, \u201Cseems/like\u201D",\u3088\u3046\u3060:"appearance/guess, \u201Cseems/like\u201D",\u307F\u305F\u3044:"casual appearance/comparison, \u201Clike/seems\u201D",\u307F\u305F\u3044\u3060:"casual appearance/comparison, \u201Clike/seems\u201D",\u305D\u3046:"appearance, \u201Clooks like ...\u201D, or hearsay",\u305D\u3046\u3060:"hearsay or appearance, depending on the form",\u305F\u3044:"the speaker\u2019s desire, \u201Cwant to ...\u201D",\u305F\u304C\u308B:"a third person\u2019s desire, \u201Cwants to ...\u201D",\u307B\u3057\u3044:"wanting an object",\u307B\u3057\u304C\u308B:"a third person wanting an object",\u3066\u3044\u308B:"an ongoing action or resulting state",\u3066\u3042\u308B:"a resulting state left by someone\u2019s action",\u3066\u304A\u304F:"doing something in advance / keeping a state",\u3066\u3057\u307E\u3046:"completion, regret, or doing something unintentionally",\u3066\u3044\u304F:"change continuing into the future or away from the speaker",\u3066\u304F\u308B:"change up to now or movement toward the speaker",\u3066\u3042\u3052:"doing something for someone else",\u3066\u304F\u308C:"someone doing something for me/us",\u3066\u3082\u3089\u3046:"having someone do something for me/us",\u3084\u3059\u3044:"easy to do",\u306B\u304F\u3044:"hard to do",\u3059\u304E\u308B:"doing/being too much",\u59CB\u3081:"starting to do something",\u51FA\u3057:"suddenly starting an action",\u7D9A\u3051:"continuing to do something",\u7D42\u308F\u308A:"finishing an action",\u304C\u3061:"a tendency to do/be something",\u3063\u307D\u3044:"having a certain tendency or feel",\u3055\u305B:"causative, making/letting someone do something",\u305B:"causative, making/letting someone do something",\u3089\u308C:"passive, potential, or honorific depending on context",\u308C:"passive, potential, or honorific depending on context",\u305B\u3089\u308C:"causative passive, being made to do something",\u3055\u305B\u3089\u308C:"causative passive, being made to do something",\u3068\u3044\u3046:"called / so-called / the content that ...",\u3063\u3066:"casual quotation or naming",\u3093\u3067\u3059:"explaining background/reason or adding explanatory tone","\u3093\u3067\u3059 \u304C":"giving background/reason first, then softening a request/topic with \u304C",\u307E\u3059\u304C:"a polite sentence plus \u304C, used for contrast or a soft lead-in",\u3067\u3057\u3087\u3046\u304C:"\u3067\u3057\u3087\u3046 plus \u304C: a guess followed by contrast",\u65B9:"method/way of doing something",\u3069\u3053:"asking where",\u3069\u308C:"asking which one among several things",\u3069\u306E:"modifying a noun to ask \u201Cwhich ...\u201D",\u3069\u3046:"asking state or method, \u201Chow\u201D",\u306A\u305C:"asking why",\u3044\u3064:"asking when",\u4F55:"asking what",\u8AB0:"asking who"},oM={\u3067\u3059:"\u4E01\u5BE7\u306A\u5224\u65AD\u300C\u301C\u3067\u3059\u300D",\u3067\u3057\u305F:"\u904E\u53BB\u306E\u4E01\u5BE7\u306A\u5224\u65AD\u300C\u301C\u3067\u3057\u305F\u300D",\u3067\u306F:"\u540D\u8A5E\u30FB\u30CA\u5F62\u5BB9\u8A5E\u306E\u5426\u5B9A\u300C\u301C\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u300D",\u3060:"\u666E\u901A\u4F53\u306E\u5224\u65AD",\u307E\u3059:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u975E\u904E\u53BB\u30FB\u672A\u6765\u30FB\u7FD2\u6163",\u307E\u3057\u305F:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u904E\u53BB",\u307E\u305B\u3093:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u5426\u5B9A",\u307E\u305B\u3093\u3067\u3057\u305F:"\u52D5\u8A5E\u306E\u4E01\u5BE7\u306A\u904E\u53BB\u5426\u5B9A",\u3092:"\u52D5\u4F5C\u306E\u76EE\u7684\u8A9E\u3092\u793A\u3059\u52A9\u8A5E",\u306B:"\u5230\u9054\u70B9\u30FB\u6642\u70B9\u30FB\u5BFE\u8C61\u30FB\u5B58\u5728\u5834\u6240\u3092\u793A\u3059\u52A9\u8A5E",\u304C:"\u4E3B\u8A9E\u3001\u307E\u305F\u306F\u72B6\u614B\u30FB\u80FD\u529B\u30FB\u597D\u60AA\u306E\u5BFE\u8C61\u3092\u793A\u3059\u52A9\u8A5E",\u306F:"\u4E3B\u984C\u30FB\u5BFE\u6BD4\u3092\u793A\u3059\u52A9\u8A5E",\u3067:"\u52D5\u4F5C\u306E\u5834\u6240\u30FB\u624B\u6BB5\u30FB\u7BC4\u56F2\u3001\u307E\u305F\u306F\u30C6\u5F62\u63A5\u7D9A",\u3078:"\u79FB\u52D5\u306E\u65B9\u5411",\u306E:"\u6240\u6709\u30FB\u4FEE\u98FE\u30FB\u540D\u8A5E\u5316",\u3082:"\u300C\u301C\u3082\u300D\u3068\u8FFD\u52A0\u3059\u308B\u8868\u73FE",\u3084:"\u4F8B\u3092\u4E26\u3079\u308B\u300C\u301C\u3084\u301C\u300D",\u304B\u3089:"\u8D77\u70B9\u307E\u305F\u306F\u7406\u7531\u3002\u7406\u7531\u3067\u306F\u76F4\u63A5\u7684\u306A\u97FF\u304D",\u307E\u3067:"\u7D42\u70B9\u30FB\u7BC4\u56F2\u300C\u301C\u307E\u3067\u300D",\u307E\u3067\u306B:"\u671F\u9650\u300C\u301C\u307E\u3067\u306B\u300D",\u3088\u308A:"\u6BD4\u8F03\u306E\u57FA\u6E96",\u306E\u307B\u3046\u304C:"\u6BD4\u8F03\u3067\u4E00\u65B9\u3092\u5F37\u8ABF\u3059\u308B\u8868\u73FE",\u307B\u3069:"\u7A0B\u5EA6\u3002\u300C\u301C\u307B\u3069\u301C\u306A\u3044\u300D\u306A\u3069",\u3060\u3051:"\u9650\u5B9A\u300C\u301C\u3060\u3051\u300D",\u3057\u304B:"\u5426\u5B9A\u3068\u547C\u5FDC\u3057\u3066\u300C\u301C\u3057\u304B\u301C\u306A\u3044\u300D",\u3066\u3082:"\u8B72\u6B69\u300C\u301C\u3066\u3082\u300D\u307E\u305F\u306F\u8A31\u53EF",\u3067\u3082:"\u8B72\u6B69\u300C\u301C\u3067\u3082\u300D\u307E\u305F\u306F\u8EFD\u3044\u4F8B\u793A",\u306E\u306B:"\u4E88\u60F3\u3068\u9055\u3046\u7D50\u679C\u3092\u8868\u3059\u9006\u63A5",\u306E\u3067:"\u539F\u56E0\u30FB\u7406\u7531\u3002\u6BD4\u8F03\u7684\u5BA2\u89B3\u7684\u3067\u67D4\u3089\u304B\u3044",\u3060\u304B\u3089:"\u6587\u982D\u306E\u63A5\u7D9A\u300C\u3060\u304B\u3089\u300D",\u3066:"\u52D5\u8A5E\u306E\u30C6\u5F62\u3002\u52D5\u4F5C\u306E\u63A5\u7D9A\u3084\u5F8C\u7D9A\u8868\u73FE\u306B\u4F7F\u3046",\u305F:"\u904E\u53BB\u30FB\u5B8C\u4E86\u3092\u8868\u3059\u30BF\u5F62",\u306A\u3044:"\u5426\u5B9A\u306E\u30CA\u30A4\u5F62",\u306A\u3044\u3067:"\u524D\u9805\u3092\u3057\u306A\u3044\u3067\u5F8C\u9805\u3092\u3059\u308B\u8868\u73FE",\u3070:"\u6761\u4EF6\u300C\u301C\u3070\u300D",\u305F\u3089:"\u6761\u4EF6\u300C\u301C\u305F\u3089\u300D",\u306A\u3089:"\u8A71\u984C\u3092\u53D7\u3051\u308B\u6761\u4EF6\u300C\u301C\u306A\u3089\u300D",\u3068:"\u6052\u5E38\u6761\u4EF6\u307E\u305F\u306F\u5F15\u7528",\u3057:"\u7406\u7531\u306E\u4E26\u5217",\u305F\u308A:"\u52D5\u4F5C\u306E\u4F8B\u793A",\u306A\u304C\u3089:"\u540C\u6642\u9032\u884C\u300C\u301C\u306A\u304C\u3089\u300D",\u3066\u304B\u3089:"\u524D\u9805\u3092\u3057\u3066\u304B\u3089",\u305F\u3081\u306B:"\u76EE\u7684\u300C\u301C\u306E\u305F\u3081\u306B\u300D",\u3088\u3046\u306B:"\u76EE\u7684\u30FB\u76EE\u6A19\u300C\u301C\u3088\u3046\u306B\u300D\u307E\u305F\u306F\u6BD4\u6CC1",\u3053\u3068:"\u52D5\u4F5C\u30FB\u7BC0\u3092\u540D\u8A5E\u5316\u3059\u308B\u8868\u73FE",\u3064\u3082\u308A:"\u4E88\u5B9A\u30FB\u610F\u5FD7",\u306F\u305A:"\u5F53\u7136\u305D\u3046\u306A\u308B\u306F\u305A\u3068\u3044\u3046\u5224\u65AD",\u3079\u304D:"\u5F53\u7136\u30FB\u7FA9\u52D9\u300C\u301C\u3079\u304D\u300D",\u3067\u3057\u3087\u3046:"\u63A8\u91CF",\u304B\u3082\u3057\u308C\u306A\u3044:"\u53EF\u80FD\u6027",\u3089\u3057\u3044:"\u4F1D\u805E\u307E\u305F\u306F\u5178\u578B\u7684\u6027\u8CEA",\u3088\u3046:"\u69D8\u614B\u30FB\u63A8\u91CF",\u307F\u305F\u3044:"\u53E3\u8A9E\u7684\u306A\u69D8\u614B\u30FB\u6BD4\u6CC1",\u305D\u3046:"\u69D8\u614B\u307E\u305F\u306F\u4F1D\u805E",\u305F\u3044:"\u8A71\u3057\u624B\u306E\u5E0C\u671B",\u305F\u304C\u308B:"\u7B2C\u4E09\u8005\u306E\u5E0C\u671B",\u307B\u3057\u3044:"\u7269\u304C\u307B\u3057\u3044\u6C17\u6301\u3061",\u3066\u3044\u308B:"\u9032\u884C\u4E2D\u307E\u305F\u306F\u7D50\u679C\u72B6\u614B",\u3066\u3042\u308B:"\u4EBA\u306E\u884C\u70BA\u306E\u7D50\u679C\u72B6\u614B",\u3066\u304A\u304F:"\u4E8B\u524D\u306B\u3059\u308B\u30FB\u72B6\u614B\u3092\u4FDD\u3064",\u3066\u3057\u307E\u3046:"\u5B8C\u4E86\u30FB\u5F8C\u6094\u30FB\u3046\u3063\u304B\u308A",\u3066\u3044\u304F:"\u672A\u6765\u3078\u7D9A\u304F\u5909\u5316\u3001\u307E\u305F\u306F\u8A71\u3057\u624B\u304B\u3089\u96E2\u308C\u308B\u52D5\u304D",\u3066\u304F\u308B:"\u73FE\u5728\u307E\u3067\u306E\u5909\u5316\u3001\u307E\u305F\u306F\u8A71\u3057\u624B\u3078\u8FD1\u3065\u304F\u52D5\u304D",\u3066\u3042\u3052:"\u76F8\u624B\u306E\u305F\u3081\u306B\u3059\u308B\u8868\u73FE",\u3066\u304F\u308C:"\u76F8\u624B\u304C\u81EA\u5206\u5074\u306E\u305F\u3081\u306B\u3059\u308B\u8868\u73FE",\u3066\u3082\u3089\u3046:"\u76F8\u624B\u306B\u3057\u3066\u3082\u3089\u3046\u8868\u73FE",\u3084\u3059\u3044:"\u3057\u3084\u3059\u3044",\u306B\u304F\u3044:"\u3057\u306B\u304F\u3044",\u3059\u304E\u308B:"\u7A0B\u5EA6\u304C\u904E\u304E\u308B",\u3055\u305B:"\u4F7F\u5F79",\u3089\u308C:"\u53D7\u8EAB\u30FB\u53EF\u80FD\u30FB\u5C0A\u656C",\u305B\u3089\u308C:"\u4F7F\u5F79\u53D7\u8EAB",\u3068\u3044\u3046:"\u540D\u79F0\u30FB\u5185\u5BB9\u3092\u8868\u3059\u300C\u301C\u3068\u3044\u3046\u300D",\u3063\u3066:"\u53E3\u8A9E\u306E\u5F15\u7528\u30FB\u540D\u79F0\u8AAC\u660E",\u3093\u3067\u3059:"\u80CC\u666F\u30FB\u7406\u7531\u3092\u8AAC\u660E\u3059\u308B\u8868\u73FE","\u3093\u3067\u3059 \u304C":"\u80CC\u666F\u3092\u8AAC\u660E\u3057\u3066\u304B\u3089\u300C\u304C\u300D\u3067\u67D4\u3089\u304B\u304F\u8A71\u984C\u3084\u4F9D\u983C\u3092\u51FA\u3059\u5F62",\u307E\u3059\u304C:"\u4E01\u5BE7\u6587\uFF0B\u300C\u304C\u300D\u306E\u9006\u63A5\u30FB\u524D\u7F6E\u304D",\u3067\u3057\u3087\u3046\u304C:"\u63A8\u91CF\u300C\u3067\u3057\u3087\u3046\u300D\uFF0B\u9006\u63A5\u300C\u304C\u300D",\u65B9:"\u3084\u308A\u65B9\u30FB\u65B9\u6CD5",\u3069\u3053:"\u5834\u6240\u3092\u5C0B\u306D\u308B\u8A9E",\u3069\u308C:"\u8907\u6570\u306E\u4E2D\u304B\u3089\u4E00\u3064\u3092\u5C0B\u306D\u308B\u8A9E",\u3069\u306E:"\u540D\u8A5E\u3092\u4FEE\u98FE\u3057\u3066\u300C\u3069\u306E\u301C\u300D\u3068\u5C0B\u306D\u308B\u8A9E",\u3069\u3046:"\u72B6\u614B\u30FB\u65B9\u6CD5\u3092\u5C0B\u306D\u308B\u8A9E",\u306A\u305C:"\u7406\u7531\u3092\u5C0B\u306D\u308B\u8A9E",\u3044\u3064:"\u6642\u3092\u5C0B\u306D\u308B\u8A9E",\u4F55:"\u4F55\u304B\u3092\u5C0B\u306D\u308B\u8A9E",\u8AB0:"\u8AB0\u304B\u3092\u5C0B\u306D\u308B\u8A9E"},cM={"\u3067\u3059\u2192\u3067\u3057\u305F":"it changes from \u201Cis/are now or generally\u201D to \u201Cwas/were in the past\u201D","\u3067\u3057\u305F\u2192\u3067\u3059":"it changes from \u201Cwas/were in the past\u201D to \u201Cis/are now or generally\u201D","\u307E\u3059\u2192\u307E\u3057\u305F":"it changes from present/future/habitual action to past action","\u307E\u3057\u305F\u2192\u307E\u3059":"it changes from past action to present/future/habitual action","\u307E\u3059\u2192\u307E\u305B\u3093":"it changes from doing the action to not doing it","\u307E\u305B\u3093\u2192\u307E\u3059":"it changes from not doing the action to doing it","\u307E\u305B\u3093\u2192\u307E\u3057\u305F":"it changes from not doing the action to having done it","\u307E\u305B\u3093\u3067\u3057\u305F\u2192\u307E\u3057\u305F":"it changes from did not do it in the past to did it in the past","\u307E\u3057\u305F\u2192\u307E\u305B\u3093\u3067\u3057\u305F":"it changes from did it in the past to did not do it in the past","\u304B\u3089\u2192\u306E\u3067":"both can show reason, but \u306E\u3067 sounds more objective/soft and less direct","\u306E\u3067\u2192\u304B\u3089":"both can show reason, but \u304B\u3089 sounds more direct and subjective","\u306E\u306B\u2192\u3066\u3082":"it changes from \u201Calthough / contrary to expectation\u201D to \u201Ceven if\u201D, so the nuance changes","\u3066\u3082\u2192\u306E\u306B":"it changes from \u201Ceven if\u201D to \u201Calthough / contrary to expectation\u201D, emphasizing mismatch","\u305F\u3081\u306B\u2192\u3088\u3046\u306B":"it shifts from a purpose/objective to a goal-state \u201Cso that ... can ...\u201D; the connection differs","\u3088\u3046\u306B\u2192\u305F\u3081\u306B":"it shifts from \u201Cso that ... can ...\u201D to a direct purpose/objective; the connection differs","\u307E\u3067\u2192\u307E\u3067\u306B":"it changes from \u201Ccontinuing until ...\u201D to \u201Ccompleted by ...\u201D","\u307E\u3067\u306B\u2192\u307E\u3067":"it changes from \u201Ccompleted by ...\u201D to \u201Ccontinuing until ...\u201D","\u306F\u2192\u304C":"it changes the focus from topic/contrast to subject/new focus","\u304C\u2192\u306F":"it changes the focus from subject/new focus to topic/contrast","\u3092\u2192\u306F":"it turns the object into a topic/contrast, so the sentence focus changes","\u3092\u2192\u304C":"it turns the object into a subject/state target, changing the grammatical relation","\u306B\u2192\u3078":"both can mark movement, but \u3078 emphasizes direction while \u306B emphasizes arrival point","\u3078\u2192\u306B":"both can mark movement, but \u306B emphasizes arrival point while \u3078 emphasizes direction"},lM={"\u3067\u3059\u2192\u3067\u3057\u305F":"\u300C\u73FE\u5728\u30FB\u4E00\u822C\u306E\u5224\u65AD\u300D\u304B\u3089\u300C\u904E\u53BB\u306E\u5224\u65AD\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u3067\u3057\u305F\u2192\u3067\u3059":"\u300C\u904E\u53BB\u306E\u5224\u65AD\u300D\u304B\u3089\u300C\u73FE\u5728\u30FB\u4E00\u822C\u306E\u5224\u65AD\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3059\u2192\u307E\u3057\u305F":"\u73FE\u5728\u30FB\u672A\u6765\u30FB\u7FD2\u6163\u306E\u52D5\u4F5C\u304B\u3089\u3001\u904E\u53BB\u306E\u52D5\u4F5C\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3057\u305F\u2192\u307E\u3059":"\u904E\u53BB\u306E\u52D5\u4F5C\u304B\u3089\u3001\u73FE\u5728\u30FB\u672A\u6765\u30FB\u7FD2\u6163\u306E\u52D5\u4F5C\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3059\u2192\u307E\u305B\u3093":"\u80AF\u5B9A\u304B\u3089\u5426\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u305B\u3093\u2192\u307E\u3059":"\u5426\u5B9A\u304B\u3089\u80AF\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u305B\u3093\u2192\u307E\u3057\u305F":"\u5426\u5B9A\u304B\u3089\u904E\u53BB\u306E\u80AF\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u305B\u3093\u3067\u3057\u305F\u2192\u307E\u3057\u305F":"\u904E\u53BB\u5426\u5B9A\u304B\u3089\u904E\u53BB\u80AF\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3057\u305F\u2192\u307E\u305B\u3093\u3067\u3057\u305F":"\u904E\u53BB\u80AF\u5B9A\u304B\u3089\u904E\u53BB\u5426\u5B9A\u306B\u5909\u308F\u308A\u307E\u3059","\u304B\u3089\u2192\u306E\u3067":"\u3069\u3061\u3089\u3082\u7406\u7531\u3092\u8868\u305B\u307E\u3059\u304C\u3001\u300C\u306E\u3067\u300D\u306F\u3088\u308A\u5BA2\u89B3\u7684\u30FB\u67D4\u3089\u304B\u3044\u97FF\u304D\u306B\u306A\u308A\u307E\u3059","\u306E\u3067\u2192\u304B\u3089":"\u3069\u3061\u3089\u3082\u7406\u7531\u3092\u8868\u305B\u307E\u3059\u304C\u3001\u300C\u304B\u3089\u300D\u306F\u3088\u308A\u76F4\u63A5\u7684\u30FB\u4E3B\u89B3\u7684\u306B\u306A\u308A\u307E\u3059","\u306E\u306B\u2192\u3066\u3082":"\u300C\u4E88\u60F3\u306B\u53CD\u3057\u3066\u300D\u304B\u3089\u300C\u305F\u3068\u3048\u301C\u3066\u3082\u300D\u306B\u5909\u308F\u308A\u3001\u30CB\u30E5\u30A2\u30F3\u30B9\u304C\u5909\u308F\u308A\u307E\u3059","\u3066\u3082\u2192\u306E\u306B":"\u300C\u305F\u3068\u3048\u301C\u3066\u3082\u300D\u304B\u3089\u300C\u4E88\u60F3\u306B\u53CD\u3057\u3066\u300D\u306B\u5909\u308F\u308A\u3001\u305A\u308C\u3092\u5F37\u8ABF\u3057\u307E\u3059","\u305F\u3081\u306B\u2192\u3088\u3046\u306B":"\u76F4\u63A5\u306E\u76EE\u7684\u304B\u3089\u300C\u301C\u3067\u304D\u308B\u3088\u3046\u306B\u300D\u3068\u3044\u3046\u76EE\u6A19\u72B6\u614B\u3078\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059","\u3088\u3046\u306B\u2192\u305F\u3081\u306B":"\u300C\u301C\u3067\u304D\u308B\u3088\u3046\u306B\u300D\u304B\u3089\u76F4\u63A5\u306E\u76EE\u7684\u3078\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059","\u307E\u3067\u2192\u307E\u3067\u306B":"\u300C\u301C\u307E\u3067\u7D9A\u304F\u300D\u304B\u3089\u300C\u301C\u307E\u3067\u306B\u5B8C\u4E86\u3059\u308B\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u307E\u3067\u306B\u2192\u307E\u3067":"\u300C\u301C\u307E\u3067\u306B\u5B8C\u4E86\u3059\u308B\u300D\u304B\u3089\u300C\u301C\u307E\u3067\u7D9A\u304F\u300D\u306B\u5909\u308F\u308A\u307E\u3059","\u306F\u2192\u304C":"\u4E3B\u984C\u30FB\u5BFE\u6BD4\u304B\u3089\u3001\u4E3B\u8A9E\u30FB\u65B0\u60C5\u5831\u306E\u7126\u70B9\u306B\u5909\u308F\u308A\u307E\u3059","\u304C\u2192\u306F":"\u4E3B\u8A9E\u30FB\u7126\u70B9\u304B\u3089\u3001\u4E3B\u984C\u30FB\u5BFE\u6BD4\u306B\u5909\u308F\u308A\u307E\u3059","\u3092\u2192\u306F":"\u76EE\u7684\u8A9E\u304C\u4E3B\u984C\u30FB\u5BFE\u6BD4\u306B\u306A\u308A\u3001\u6587\u306E\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059","\u3092\u2192\u304C":"\u76EE\u7684\u8A9E\u304C\u4E3B\u8A9E\u30FB\u72B6\u614B\u5BFE\u8C61\u306B\u306A\u308A\u3001\u6587\u6CD5\u95A2\u4FC2\u304C\u5909\u308F\u308A\u307E\u3059","\u306B\u2192\u3078":"\u3069\u3061\u3089\u3082\u79FB\u52D5\u306B\u4F7F\u3048\u307E\u3059\u304C\u3001\u300C\u3078\u300D\u306F\u65B9\u5411\u3001\u300C\u306B\u300D\u306F\u5230\u9054\u70B9\u3092\u5F37\u8ABF\u3057\u307E\u3059","\u3078\u2192\u306B":"\u3069\u3061\u3089\u3082\u79FB\u52D5\u306B\u4F7F\u3048\u307E\u3059\u304C\u3001\u300C\u306B\u300D\u306F\u5230\u9054\u70B9\u3001\u300C\u3078\u300D\u306F\u65B9\u5411\u3092\u5F37\u8ABF\u3057\u307E\u3059"};function uM(n){return{...n,type:"sentence",rm:`sentence_${n.id}`,hira:n.jp}}function nr(n){let e=yn();return e==="en"?n.en||n.zh||"":e==="ja"?n.ja||n.zh||"":e==="zh-TW"?n.zh_TW||Zo(n.zh||""):n.zh||""}function Qo(){return Array.isArray(Fe.sentences)?Fe.sentences:[]}function hM(){let n=Qo();if(!n.length)return null;let e=n.filter(s=>!Ri.has(s.id)),t=e.length?e:n;e.length||Ri.clear();let i=ko(t.map(()=>1))??Pe(t.length);return t[i??0]}function dM(){let n=Qo();if(!n.length)return null;let e=Number(G.sentenceProgress||0);return(!Number.isFinite(e)||e<0||e>=n.length)&&(e=0),{...n[e],_progress:{index:e,total:n.length,nextIndex:(e+1)%n.length}}}function fM(n){n?._progress&&(G.sentenceProgress=n._progress.nextIndex,pt(G))}function pM(){return(G.sentenceMode||"progressive")==="progressive"?dM():hM()}function mM(n,e){let t=Qo(),i=e==="quiz_zh_jp"?g=>g.jp:g=>nr(g),s=[],r=new Set,a=g=>{let v=i(g);!g||!v||r.has(v)||(s.push(g),r.add(v))};a(n),t.filter(g=>g.id!==n.id).forEach(a);let o=Nr(s.length,0,4);if(o)return{choices:o.indices.map(v=>s[v]),correctIndex:o.correctSlot};let c=s.slice(1),u=Jn(c.length).slice(0,3).map(g=>c[g]),d=[n,...u],p=Jn(d.length).map(g=>d[g]);return{choices:p,correctIndex:p.findIndex(g=>g.id===n.id)}}function Dp(n){let e=n?.pattern||"";return C("sentence_note_generic",e||C("mod_sentence"))}function Bf(n,e){let t=String(n||"").trim();if(e==="en")return aM[t]||`the expression \u300C${t||"blank"}\u300D with its own meaning and connection rules`;if(e==="ja")return oM[t]||`\u300C${t||"\u7A7A\u6B04"}\u300D\u56FA\u6709\u306E\u610F\u5473\u30FB\u63A5\u7D9A`;let i="\u56FA\u5B9A\u63A5\u7EED\u548C\u610F\u601D\uFF0C\u9700\u8981\u653E\u5728\u5408\u9002\u4F4D\u7F6E\u4F7F\u7528";return e==="zh-TW"?Zo(i):i}function _M(n,e,t){let i=`${String(n||"").trim()}\u2192${String(e||"").trim()}`;return t==="en"?cM[i]||"":t==="ja"&&lM[i]||""}function Up(n){let e=yn(),t=n?.example_zh||"";return e==="zh-TW"?n?.example_zh_TW||Zo(t):e==="en"?n?.example_en||(t?`CN: ${t}`:""):e==="ja"?n?.example_ja||(t?`\u4E2D\u56FD\u8A9E\u8A33\uFF1A${t}`:""):t}function gM(n,e){let t=yn(),i=(f,p)=>String(f||"").replace(/原句中文是“[^”]*”/g,`\u539F\u53E5\u4E2D\u6587\u662F\u201C${p||""}\u201D`);if(t==="zh-CN")return i(e?.reason||"",n?.zh||"");if(t==="zh-TW")return e?.reason_zh_TW||Zo(i(e?.reason||"",nr(n)));let s=String(e?.option||"").trim(),r=String(n?.pattern||"").trim(),a=s||(t==="ja"?"\u7A7A\u6B04":"blank"),o=Bf(s,t),c=Bf(r,t),l=Up(e),u=_M(r,s,t),d=s==="\u306E\u3067\u304C"||s==="\u306E\u3068\u3044\u3046";return t==="ja"?d?`\u300C${a}\u300D\u306F\u81EA\u7136\u306A\u56FA\u5B9A\u6587\u578B\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u4E0A\u306E\u4F8B\u6587\u306F\u8FD1\u3044\u6B63\u3057\u3044\u5F62\u306E\u4F7F\u3044\u65B9\u3067\u3059\u3002${l?`\u610F\u5473\uFF1A${l}\u3002`:""}\u539F\u6587\u3067\u306F\u300C${r}\u300D\u304C\u5FC5\u8981\u3067\u3059\uFF1A${c}\u3002`:u?`\u300C${a}\u300D\u81EA\u4F53\u306B\u306F\u6B63\u3057\u3044\u4F7F\u3044\u65B9\u304C\u3042\u308A\u307E\u3059\u3002\u4E0A\u306E\u4F8B\u6587\u306F\u305D\u306E\u4F7F\u3044\u65B9\u3067\u3059\u3002${l?`\u610F\u5473\uFF1A${l}\u3002`:""}\u305F\u3060\u3057\u539F\u6587\u3067\u306F\u9078\u3079\u307E\u305B\u3093\u3002\u5165\u308C\u66FF\u3048\u308B\u3068\u3001${u}\u3002\u539F\u6587\u3067\u306F\u300C${r}\u300D\u304C\u5FC5\u8981\u3067\u3059\uFF1A${c}\u3002`:`\u3053\u3053\u3067\u306F\u300C${a}\u300D\u3092\u305D\u306E\u307E\u307E\u4F7F\u3048\u307E\u305B\u3093\u3002\u901A\u5E38\u306F\u300C${o}\u300D\u306B\u4F7F\u3044\u307E\u3059\u3002\u4E0A\u306E\u4F8B\u6587\u306F\u300C${a}\u300D\u306E\u81EA\u7136\u306A\u4F7F\u3044\u65B9\u3067\u3059\u3002${l?`\u610F\u5473\uFF1A${l}\u3002`:""}\u539F\u6587\u3067\u306F\u300C${r}\u300D\u304C\u5FC5\u8981\u3067\u3059\uFF1A${c}\u3002\u5165\u308C\u66FF\u3048\u308B\u3068\u63A5\u7D9A\u30FB\u6587\u6CD5\u95A2\u4FC2\u304C\u5408\u308F\u306A\u3044\u304B\u3001\u6587\u306E\u7126\u70B9\u304C\u5909\u308F\u308A\u307E\u3059\u3002`:d?`\u300C${a}\u300D is not a natural fixed pattern. The example above uses the closest correct form.${l?` Meaning: ${l}.`:""} The original sentence needs \u300C${r}\u300D: ${c}.`:u?`\u300C${a}\u300D itself has valid uses. The example above shows a natural use.${l?` Meaning: ${l}.`:""} But it is not the answer here. If rewritten this way, ${u}. The original sentence needs \u300C${r}\u300D: ${c}.`:`Do not use \u300C${a}\u300D directly here. It is normally used for: ${o}. The example above shows a natural use.${l?` Meaning: ${l}.`:""} The original sentence needs \u300C${r}\u300D: ${c}. Replacing it with \u300C${a}\u300D would break the connection/grammar or change the focus.`}function Op(n){let e=Array.isArray(n?.why_not)?n.why_not.filter(t=>t?.option&&(t?.reason||t?.example_jp)):[];return e.length?`
    <div class="sentence-why">
      <div class="sentence-why-title">${C("sentence_why_not_label")}</div>
      ${e.map(t=>{let i=Up(t),s=gM(n,t);return`
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
  `:""}function gu(n,e="sentence_study_answer"){let t=en(n.jp),i=nr(n),s=n.pattern?`<div class="sentence-meta-row"><b>${C("sentence_pattern_label")}</b>${ke(n.pattern)}</div>`:"",r=n.level?`<div class="sentence-meta-row"><b>${C("sentence_level_label")}</b>${ke(n.level)}</div>`:"",a=Dp(n),o=a?`<div class="sentence-note">${ke(a)}</div>`:"",c=Op(n);return`
    <div class="sentence-answer-label">${C(e)}</div>
    <div class="sentence-answer-jp">${t}</div>
    <div class="sentence-translation"><b>${C("sentence_translation_label")}</b>${ke(i)}</div>
    <div class="sentence-meta-grid">${s}${r}</div>
    ${o}
    ${c}
  `}function vM(){let n=$.sentenceItem,e=$.sentenceMode||G.sentenceMode||"progressive",t=$.mode==="sentence_study";mt||($.selectedChoiceIndex=-1),h.meaning.textContent="",h.meaning.onclick=null,h.result.textContent="",h.opts.innerHTML="";let i=n._progress?`<div class="n2-progress-badge">${C("sentence_progress_badge",n._progress.index+1,n._progress.total)}</div>`:`<div class="n2-progress-badge">${C("sentence_progress_badge",n.id,Qo().length||800)}</div>`;if(t){h.q.innerHTML=`
      <span class="n2-cat-tag">${C("mod_sentence")}</span>
      ${i}
      <div class="sentence-study-card">
        <div class="sentence-jp">${en(n.jp)}</div>
        <div class="sentence-translation"><b>${C("sentence_translation_label")}</b>${ke(nr(n))}</div>
        <div class="sentence-meta-grid">
          <div class="sentence-meta-row"><b>${C("sentence_pattern_label")}</b>${ke(n.pattern||"\u2014")}</div>
          <div class="sentence-meta-row"><b>${C("sentence_level_label")}</b>${ke(n.level||"\u2014")}</div>
        </div>
        <div class="sentence-note">${ke(Dp(n))}</div>
        ${Op(n)}
      </div>
    `,$o("sentence_study");return}let s=e==="quiz_jp_zh";h.q.innerHTML=s?`<span class="n2-cat-tag">${C("mod_sentence")}</span><div class="n2-hint">${C("sentence_quiz_jp_zh")}</div><div class="sentence-jp sentence-quiz-jp">${en(n.jp)}</div>`:`<span class="n2-cat-tag">${C("mod_sentence")}</span><div class="n2-hint">${C("sentence_quiz_zh_jp")}</div><div class="sentence-zh-question">${ke(nr(n))}</div>`,$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt opt-sentence",o.innerHTML=s?`<div class="meaning-opt">${ke(nr(r))}</div>`:`<div class="jp">${en(r.jp)}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)}),$o("sentence_quiz")}function yM(n){if(mt)return;mt=!0;let e=Dr(n,$.correctIndex)??n===$.correctIndex,t=$.sentenceItem;tr(n,$.correctIndex),ni(),Ri.add(t.id),e?Xt():vn(),setTimeout(()=>Lt(t.jp),300),h.result.innerHTML=e?`\u2705 ${gu(t,"result_correct")}`:`\u274C ${gu(t,"result_wrong")}`;let i=Lr(ge,$,e);if(gn(ge),Yt(),i.finished){Ci();let s=Math.floor((Date.now()-ti)/1e3);setTimeout(()=>qr(s),1200)}}function Fp(){let n=G.n2Cats?.length?G.n2Cats:["kanji_reading","orthography","context_vocab","grammar"];return Jf.filter(e=>n.includes(e))}function Bp(n,e){return`${n}:${e.join(",")}`}function zp(n,e,t){return`${Bp(n,e)}:${t}`}function xM(n){let e=Nr(n,0,n);if(e?.indices?.length===n)return e.indices;let t=Jn(n);return t.length===n?t:Array.from({length:n},(i,s)=>s)}function wM(n,e,t){G.jlptProgressOrders||={};let i=zp(n,e,t),s=G.jlptProgressOrders[i];return Array.isArray(s)&&s.length===t&&s.every(a=>Number.isInteger(a)&&a>=0&&a<t)&&new Set(s).size===t||(s=xM(t),G.jlptProgressOrders[i]=s,pt(G)),s}function MM(n,e){let t=Fe.jlptBanks[n]||Fe.n2Questions||[],i=new Set(e),s=new Map(Jf.map((r,a)=>[r,a]));return t.filter(r=>i.has(r.cat)).slice().sort((r,a)=>{let o=s.get(r.cat)??999,c=s.get(a.cat)??999;return o!==c?o-c:(+r.id||0)-(+a.id||0)})}function bM(){let n=G.jlptLevel||"n2",e=Fp(),t=MM(n,e);if(!t.length)return null;G.jlptProgress||={};let i=Bp(n,e),s=zp(n,e,t.length),r=wM(n,e,t.length),a=Number(G.jlptProgress[i]||0);(!Number.isFinite(a)||a<0||a>=r.length)&&(a=0);let o=r[a]??a,c=vu(t[o]);return c._progress={key:i,orderKey:s,index:a,total:t.length,nextIndex:(a+1)%r.length},c}function SM(n){n?._progress&&(G.jlptProgress||={},G.jlptProgress[n._progress.key]=n._progress.nextIndex,n._progress.nextIndex===0&&n._progress.orderKey&&(G.jlptProgressOrders||={},delete G.jlptProgressOrders[n._progress.orderKey]),pt(G))}function TM(){let n=new Set(Fp()),e=G.jlptLevel||"n2",t=Fe.jlptBanks[e]||Fe.n2Questions||[],i=t.filter(s=>n.has(s.cat)&&!ei.has(`${e}_${s.id}`));if(!i.length){ei.clear();let s=t.filter(r=>n.has(r.cat));return s.length?vu(s[ko(s.map(()=>1))??Pe(s.length)??0]):null}return vu(i[ko(i.map(()=>1))??Pe(i.length)??0])}function vu(n){if(!n||!Array.isArray(n.options)||typeof n.answer!="number")return n;let e=Nr(n.options.length,n.answer,n.options.length),t=e?.indices,i=e?.correctSlot;return t||(t=Jn(n.options.length),t.length!==n.options.length&&(t=n.options.map((s,r)=>r)),i=t.indexOf(n.answer)),Yx({...n,options:t.map(s=>n.options[s]),answer:i})}function EM(){let n=$.n2Q,e=$.mode==="n2_study"||$.mode==="n2_progressive",t=$.mode==="n2_progressive";mt||($.selectedChoiceIndex=-1),h.meaning.textContent="",h.meaning.onclick=null,h.result.textContent="";let i=C(Wx[n.cat]||"n2_context_vocab")||n.cat,s=C(Gx[n.cat]||"n2_q_context"),r="",a=n.sentence||"",o=tp(n),c=n._targetSurface||(n.target&&a.includes(n.target)?n.target:Tu(n)?.surface)||"";if(a&&c&&a.includes(c)){let d=a.indexOf(c),f=a.slice(0,d),p=a.slice(d+c.length),g=n.cat!=="kanji_reading"||e||mt;r=[en(f,o),`<span class="n2-target">${g?en(c,o):ke(c)}</span>`,en(p,o)].join("")}else r=en(a,o);let l=t&&n._progress?`<div class="n2-progress-badge">${C("jlpt_progress_badge",n._progress.index+1,n._progress.total)}</div>`:"";h.q.innerHTML=`<span class="n2-cat-tag">${i}</span>${l}<div class="n2-hint">${s}</div><div class="n2-sentence">${r}</div>`;let u=n.cat==="usage";if(h.opts.innerHTML="",n.options.forEach((d,f)=>{let p=document.createElement("div");p.className=u?"opt opt-sentence":"opt",e&&p.classList.add(f===n.answer?"correct":"disabled");let v=e||n.cat!=="kanji_reading"&&n.cat!=="orthography"?en(d,o):ke(d);p.innerHTML=u?`<div class="jp">${v}</div>`:`<div class="jp">${f+1}. ${v}</div>`,p.onclick=e?null:()=>Zn(f),h.opts.appendChild(p)}),e){let d=n.options[n.answer];h.result.innerHTML=`\u{1F4D8} ${zo(n,d,"jlpt_study_answer")}`}$o("n2_exam")}function AM(n,e){if(mt)return;mt=!0;let t=e||$.n2Q,i=Dr(n,t.answer)??n===t.answer,s=t.options[t.answer];tr(n,t.answer),ni(),ei.add(`${G.jlptLevel||"n2"}_${t.id}`),i?Xt():vn(),setTimeout(()=>{let o=np(t,"full");t.cat==="kanji_reading"&&(t._targetSurface||t.target)?o=t._targetSurface||t.target:t.cat==="orthography"&&(o=s),Lt(o)},300),i?h.result.innerHTML=`\u2705 ${zo(t,s,"result_correct")}`:h.result.innerHTML=`\u274C ${zo(t,s,"result_wrong")}`;let r={type:"n2",rm:`n2_${t.id}`,hira:`n2_${t.id}`},a=Lr(ge,{correct:r},i);if(gn(ge),Yt(),a.finished){Ci();let o=Math.floor((Date.now()-ti)/1e3);setTimeout(()=>qr(o),1200)}}function Gr(){if(!$){h.q.textContent=C("ready");return}if($.mode==="n2_exam"||$.mode==="n2_study"||$.mode==="n2_progressive"){EM();return}if($.mode==="sentence_study"||$.mode==="sentence_quiz"){vM();return}let n=$.correct,e=ln(n),t=Ot(n),i=$.source?Ot($.source):"";mt||($.selectedChoiceIndex=-1);let s=h.hideMeaning.checked;if(Zs($.mode)?i?s?(h.meaning.textContent=C("meaning_hidden"),h.meaning.style.cursor="pointer",h.meaning.onclick=()=>{h.meaning.textContent=`${C("meaning_label")}${i}`,h.meaning.style.cursor="default",h.meaning.onclick=null}):(h.meaning.textContent=`${C("meaning_label")}${i}`,h.meaning.style.cursor="default",h.meaning.onclick=null):(h.meaning.textContent="",h.meaning.onclick=null):$.mode==="rm_mean"||$.mode==="kanji_mean"||$.mode==="mean_rm"?(h.meaning.textContent="",h.meaning.onclick=null):$.mode==="kanji_read"||$.mode==="read_kanji"?t?s?(h.meaning.textContent=C("meaning_hidden"),h.meaning.style.cursor="pointer",h.meaning.onclick=()=>{h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null}):(h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null):(h.meaning.textContent="",h.meaning.onclick=null):n.type==="word"&&t?s?(h.meaning.textContent=C("meaning_hidden"),h.meaning.style.cursor="pointer",h.meaning.onclick=()=>{h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null}):(h.meaning.textContent=`${C("meaning_label")}${t}`,h.meaning.style.cursor="default",h.meaning.onclick=null):(h.meaning.textContent="",h.meaning.onclick=null),h.result.textContent="",Zs($.mode)){let r=ln($.source);h.q.innerHTML=`<span class="big">${r}</span>${C(`q_${$.mode}`)}`}else $.mode==="rm_mean"?h.q.innerHTML=`<span class="big">${e}</span>${C("q_what_meaning")}`:$.mode==="mean_rm"?h.q.innerHTML=`${C("q_how_read_meaning_pre")}${t}${C("q_how_read_meaning")}`:$.mode==="kanji_read"?h.q.innerHTML=`<span class="big">${ke(n.kanji)}</span>${C("q_how_read")}`:$.mode==="read_kanji"?h.q.innerHTML=`<span class="big">${e}</span>${C("q_kanji_of")}`:$.mode==="kanji_mean"?h.q.innerHTML=`<span class="big">${Su(n)}</span>${C("q_what_meaning")}`:$.mode==="rm_mc"||$.mode==="rm_in"?h.q.innerHTML=`<b>${n.rm}</b>${n.type==="word"?C("q_writing_of"):C("q_kana_of")}`:h.q.innerHTML=`<span class="big">${e}</span>${C("q_how_read")}`;Zs($.mode)?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${ln(r)}</div><div class="meaning-opt">${Ot(r)}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)})):$.mode==="rm_mean"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="meaning-opt">${Ot(r)}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)})):$.mode==="mean_rm"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${ln(r)}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)})):$.mode==="kanji_read"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${ln(r)}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)})):$.mode==="read_kanji"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="jp">${ke(r.kanji)}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)})):$.mode==="kanji_mean"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=`<div class="meaning-opt">${Ot(r)}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)})):$.mode==="rm_mc"||$.mode==="jp_mc"?(h.opts.innerHTML="",$.choices.forEach((r,a)=>{let o=document.createElement("div");o.className="opt",o.innerHTML=$.mode==="rm_mc"?`<div class="jp">${ln(r)}</div>`:`<div class="rm">${r.rm}</div>`,o.onclick=()=>Zn(a),h.opts.appendChild(o)})):h.opts.innerHTML="",$o($.mode)}function Hp(){if($&&!mt){h.result.textContent=C("please_answer");return}if(!ge.session.active&&ge.session.done>=ge.session.size&&ge.session.done>0){if(h.q.querySelector(".gp-summary"))Vp();else{Ci();let n=Math.floor((Date.now()-ti)/1e3);Ut==="n2"&&(G.jlptMode==="study"||G.jlptMode==="progressive")?zf(n):Ut==="sentence"&&(G.sentenceMode==="study"||G.sentenceMode==="progressive")?Hf(n):qr(n)}return}if(Ht(),ge.session.active||(ge.session.size=G.sessionSize),Ut==="sentence"){let n=G.sentenceMode||"progressive",e=n==="study"||n==="progressive";if(e&&ge.session.done>=ge.session.size&&ge.session.done>0){ge.session.active=!1,ge.daily.rounds=ge.session.round,gn(ge),Yt(),Ci();let s=Math.floor((Date.now()-ti)/1e3);Hf(s);return}let t=pM();if(!t){h.q.textContent=C("no_questions");return}let i={mode:e?"sentence_study":"sentence_quiz",sentenceMode:n,sentenceItem:t,correct:uM(t),selectedChoiceIndex:-1};if(!e){let{choices:s,correctIndex:r}=mM(t,n);i.choices=s,i.correctIndex=r}$=i,mt=e,e&&ge.session.active&&(ge.session.done++,Ri.add(t.id),n==="progressive"&&fM(t)),Gr(),gn(ge),Yt(),ru();return}if(Ut==="n2"){let n=G.jlptMode==="study"||G.jlptMode==="progressive",e=G.jlptMode==="progressive";if(n&&ge.session.done>=ge.session.size&&ge.session.done>0){ge.session.active=!1,ge.daily.rounds=ge.session.round,gn(ge),Yt(),Ci();let i=Math.floor((Date.now()-ti)/1e3);zf(i);return}let t=e?bM():TM();if(!t){h.q.textContent=C("no_questions");return}$={mode:e?"n2_progressive":n?"n2_study":"n2_exam",n2Q:t,correct:{type:"n2",rm:`n2_${t.id}`,hira:`n2_${t.id}`}},mt=n,n&&ge.session.active&&(ge.session.done++,ei.add(`${G.jlptLevel||"n2"}_${t.id}`),e&&SM(t)),Gr(),gn(ge),Yt(),ru();return}$=ff(Fe,G,ge),mt=!1,Gr(),gn(ge),Yt(),ru()}function CM(n){if(mt)return;mt=!0;let e=Dr(n,$.correctIndex)??n===$.correctIndex,t=ln($.correct),i=Ot($.correct);if(tr(n,$.correctIndex),ni(),e?Xt():vn(),setTimeout(()=>Lt(t),300),Zs($.mode)){let r=ln($.source),a=Ot($.source);h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${r}</b> \u2192 <b>${t}</b>\uFF08${i}\uFF09`:`\u274C ${C("result_wrong")}<b>${r}</b> \u2192 <b>${t}</b>\uFF08${i}\uFF09`,a&&(h.result.innerHTML+=`<div class="n2-expl">${C(`rel_${$.relationKind}`)}\uFF1A${a} \u2192 ${i}</div>`)}else if($.mode==="rm_mean"||$.mode==="mean_rm")h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${t}</b> = <b>${i}</b>`:`\u274C ${C("result_wrong")}<b>${t}</b> = <b>${i}</b>`;else if($.mode==="kanji_read"||$.mode==="read_kanji"||$.mode==="kanji_mean"){let r=Su($.correct);h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${r}</b>\uFF08${t}\uFF09= <b>${ke(i)}</b>`:`\u274C ${C("result_wrong")}<b>${r}</b>\uFF08${t}\uFF09= <b>${ke(i)}</b>`}else h.result.innerHTML=e?`\u2705 ${C("result_correct")}<b>${$.correct.rm}</b> = <b>${t}</b>`:`\u274C ${C("result_wrong")}<b>${$.correct.rm}</b> = <b>${t}</b>`;let s=Lr(ge,$,e);if(gn(ge),Yt(),s.finished){Ci();let r=Math.floor((Date.now()-ti)/1e3);setTimeout(()=>qr(r),1200)}}function qr(n){let e=ge.session.done,t=ge.session.ok,i=ge.session.ng,s=e?Math.round(t/e*100):0,r=s>=90?"\u{1F3C6}":s>=70?"\u{1F389}":s>=50?"\u{1F44D}":"\u{1F4AA}";h.q.innerHTML=`<div class="gp-summary" style="padding:32px 8px 8px"><div style="font-size:3rem;margin-bottom:8px">${r}</div><div class="big">${s}%</div><div class="sub">${C("gp_summary_sub",e,t,i)}</div><div class="sub" style="margin-top:6px">${C("gp_summary_time")}${ns(n)}</div></div>`,h.meaning.textContent="",h.opts.innerHTML="",h.result.innerHTML="",h.inputWrap.classList.add("hide"),h.btnNew.textContent=C("btn_finish")}function zf(n){let e=ge.session.done;h.q.innerHTML=`<div class="gp-summary" style="padding:32px 8px 8px"><div style="font-size:3rem;margin-bottom:8px">\u{1F4D8}</div><div class="big">${e}</div><div class="sub">${C("jlpt_study_done",e)}</div><div class="sub" style="margin-top:6px">${C("gp_summary_time")}${ns(n)}</div></div>`,h.meaning.textContent="",h.opts.innerHTML="",h.result.innerHTML="",h.inputWrap.classList.add("hide"),h.btnNew.textContent=C("btn_finish")}function Hf(n){let e=ge.session.done;h.q.innerHTML=`<div class="gp-summary" style="padding:32px 8px 8px"><div style="font-size:3rem;margin-bottom:8px">\u{1F4AC}</div><div class="big">${e}</div><div class="sub">${C("sentence_study_done",e)}</div><div class="sub" style="margin-top:6px">${C("gp_summary_time")}${ns(n)}</div></div>`,h.meaning.textContent="",h.opts.innerHTML="",h.result.innerHTML="",h.inputWrap.classList.add("hide"),h.btnNew.textContent=C("btn_finish")}function Vf(){if(!$||mt)return;let n=h.inp.value.trim();if(!n){h.result.textContent=C("please_input");return}mt=!0;let e=ln($.correct),t=!1;$.mode==="rm_in"?t=n===$.correct.hira||n===$.correct.kata:$.mode==="jp_in"&&(t=hf(n)===$.correct.rm),t?Xt():vn(),setTimeout(()=>Lt(e),300),h.result.innerHTML=t?`\u2705 ${C("result_correct")}<b>${$.correct.rm}</b> = <b>${e}</b>`:`\u274C ${C("result_wrong2")}<b>${$.correct.rm}</b> = <b>${e}</b>`;let i=Lr(ge,$,t);if(gn(ge),Yt(),i.finished){Ci();let s=Math.floor((Date.now()-ti)/1e3);setTimeout(()=>qr(s),1200)}}function RM(){if(!$)return;if($.mode==="n2_exam"||$.mode==="n2_study"||$.mode==="n2_progressive"){mt=!0;let t=$.n2Q,i=t.options[t.answer];tr(-1,t.answer),ni(),h.result.innerHTML=zo(t,i),ei.add(`${G.jlptLevel||"n2"}_${t.id}`);return}if($.mode==="sentence_quiz"||$.mode==="sentence_study"){mt=!0;let t=$.sentenceItem;$.mode==="sentence_quiz"&&(tr(-1,$.correctIndex),Ri.add(t.id)),ni(),h.result.innerHTML=gu(t,"result_answer"),Lt(t.jp);return}mt=!0;let n=ln($.correct),e=Ot($.correct);if(Zs($.mode)){let t=ln($.source);h.result.innerHTML=`${C("result_answer")}<b>${t}</b> \u2192 <b>${n}</b>${e?`\uFF08${e}\uFF09`:""}`}else $.mode==="kanji_read"||$.mode==="read_kanji"||$.mode==="kanji_mean"?h.result.innerHTML=`${C("result_answer")}<b>${Su($.correct)}</b>\uFF08${n}\uFF09${e?` = <b>${ke(e)}</b>`:""}`:h.result.innerHTML=`${C("result_answer")}<b>${$.correct.rm}</b> = <b>${n}</b>${e?`\uFF08${e}\uFF09`:""}`;tr(-1,$.correctIndex),ni(),Lt(n)}async function PM(){await Kf,wo(),go(),Ht(),Ut==="n2"&&ei.clear(),Ut==="sentence"&&Ri.clear(),pf(ge,G.sessionSize),gn(ge),Yt(),St(h.quizScreen),Hx(),h.btnNew.textContent=C("btn_next"),mt=!0,Hp()}function Vp(){Ci(),is(),Xi(),St(h.moduleScreen),Yt()}async function IM(){try{if(h.btnRefreshApp.disabled=!0,h.btnRefreshApp.textContent=C("refreshing_app"),"serviceWorker"in navigator&&await(await navigator.serviceWorker.getRegistration())?.update(),"caches"in window){let n=await caches.keys();await Promise.all(n.map(e=>caches.delete(e)))}}catch(n){console.warn("refreshApp failed",n)}finally{location.reload()}}async function lt(n){let e=await fetch(n,{cache:"no-store"});if(!e.ok)throw new Error(`${n} load failed`);return await e.json()}function LM(n){_f(n),Lo(),h.settingsScreen.classList.contains("hide")||(h.settingsTitle.textContent=C(lu[Ut])),Yt(),$&&Gr(),h.grammarScreen&&!h.grammarScreen.classList.contains("hide")&&Pp(),h.grammarTopicScreen&&!h.grammarTopicScreen.classList.contains("hide")&&er&&Ip(er),h.grammarPracticeScreen&&!h.grammarPracticeScreen.classList.contains("hide")&&$e&&Bu(),h.songsScreen&&!h.songsScreen.classList.contains("hide")&&(Yo(),Jo()),h.wordMatchScreen&&!h.wordMatchScreen.classList.contains("hide")&&ut()}function kM(){document.querySelectorAll(".module-card").forEach(n=>{n.addEventListener("click",()=>{n.classList.contains("disabled")||n.dataset.module&&hu(n.dataset.module)})}),document.querySelectorAll("[data-game]").forEach(n=>{n.addEventListener("click",()=>{n.classList.contains("disabled")||hu(n.dataset.game)})}),h.btnBackToModules.onclick=()=>{Ht(),St(h.moduleScreen)},h.btnGrammarBack&&(h.btnGrammarBack.onclick=()=>St(h.moduleScreen)),h.btnGrammarTopicBack&&(h.btnGrammarTopicBack.onclick=()=>St(h.grammarScreen)),h.btnGrammarPractice&&(h.btnGrammarPractice.onclick=()=>Lp()),h.btnGrammarPracticeBack&&(h.btnGrammarPracticeBack.onclick=()=>St(h.grammarTopicScreen)),h.btnGpNext&&(h.btnGpNext.onclick=()=>eM()),h.btnGpSubmit&&(h.btnGpSubmit.onclick=()=>Zw()),h.btnSongsBack&&(h.btnSongsBack.onclick=()=>{Df(),St(h.moduleScreen)}),h.btnSongClose&&(h.btnSongClose.onclick=Df),h.btnSongSave&&(h.btnSongSave.onclick=Xw),h.btnSongClear&&(h.btnSongClear.onclick=Kw),h.songLines&&h.songLines.addEventListener("click",n=>{let e=n.target.closest("[data-song-line]");e&&Yw(Number(e.dataset.songLine),e)}),h.modeChecksKana.addEventListener("change",Ht),h.modeChecksWord.addEventListener("change",Ht),h.modeChecksKanji.addEventListener("change",Ht),h.n2CatChecks.addEventListener("change",Ht),h.jlptLevelChecks.addEventListener("change",()=>{Ht(),ei.clear()}),h.jlptModeChecks?.addEventListener("change",()=>{Ht(),ei.clear()}),h.sentenceModeChecks?.addEventListener("change",()=>{Ht(),Ri.clear()}),h.btnResetJlptProgress?.addEventListener("click",()=>{G.jlptProgress={},G.jlptProgressOrders={},pt(G),ei.clear(),alert(C("alert_reset_jlpt_progress"))}),h.btnResetSentenceProgress?.addEventListener("click",()=>{G.sentenceProgress=0,pt(G),Ri.clear(),alert(C("alert_reset_sentence_progress"))}),h.kanaSetChecks.addEventListener("change",Ht),h.kanaMode.addEventListener("change",()=>{Ht(),$&&Gr()}),h.sessionSize.addEventListener("change",Ht),h.sessionSize.addEventListener("blur",Ht),h.hideMeaning.addEventListener("change",Ht),h.wrongFirst.addEventListener("change",Ht),h.btnNew.onclick=iM,h.btnSpeak.onclick=Of,h.btnStartSession.onclick=PM,h.btnBack.onclick=Vp,h.btnGamesBack&&(h.btnGamesBack.onclick=()=>St(h.moduleScreen)),h.btnCultivateBack&&(h.btnCultivateBack.onclick=()=>St(h.gamesScreen||h.moduleScreen)),h.btnCultivateReset&&(h.btnCultivateReset.onclick=()=>lw()),h.btnCultivateStart&&(h.btnCultivateStart.onclick=()=>tw()),[h.cultivateUseHira,h.cultivateUseKata,h.cultivateUseKanji].forEach(n=>{n&&(n.onchange=()=>{!h.cultivateUseHira?.checked&&!h.cultivateUseKata?.checked&&!h.cultivateUseKanji?.checked?(n.checked=!0,h.cultivateSetupHint&&(h.cultivateSetupHint.textContent=C("cultivate_select_one_script"))):h.cultivateSetupHint&&(h.cultivateSetupHint.textContent="")})}),h.btnCultivateTrain&&(h.btnCultivateTrain.onclick=()=>rw()),h.btnCultivateChallenge&&(h.btnCultivateChallenge.onclick=()=>cw()),h.btnCultivateEquip&&(h.btnCultivateEquip.onclick=()=>ow()),h.btnBladeBack&&(h.btnBladeBack.onclick=()=>St(h.gamesScreen||h.moduleScreen)),h.btnBladeNew&&(h.btnBladeNew.onclick=()=>zu()),h.btnWordMatchBack&&(h.btnWordMatchBack.onclick=()=>St(h.gamesScreen||h.moduleScreen)),h.btnWordMatchNew&&(h.btnWordMatchNew.onclick=()=>pu()),h.btnWordMatchStart&&(h.btnWordMatchStart.onclick=()=>fw()),[h.wmKanaHira,h.wmKanaKata].forEach(n=>{n&&(n.onchange=()=>{!h.wmKanaHira?.checked&&!h.wmKanaKata?.checked?(n.checked=!0,h.wmSetupHint&&(h.wmSetupHint.textContent=C("word_match_select_one_kana"))):h.wmSetupHint&&(h.wmSetupHint.textContent="")})}),h.btnWordMatchMusic&&(h.btnWordMatchMusic.onclick=()=>Ew()),h.btnWordMatchSfx&&(h.btnWordMatchSfx.onclick=()=>Aw()),h.btnWordMatchVoice&&(h.btnWordMatchVoice.onclick=()=>Cw()),h.btnWordMatchInvite&&(h.btnWordMatchInvite.onclick=()=>Iw()),h.btnWordMatchGuide&&(h.btnWordMatchGuide.onclick=async()=>{await Mp(!1),pu()}),h.wmGuideClose&&(h.wmGuideClose.onclick=()=>_u(!0)),h.wmGuideStart&&(h.wmGuideStart.onclick=()=>kf()),h.wmGuide&&h.wmGuide.addEventListener("click",n=>{n.target===h.wmGuide&&_u(!0);let e=n.target?.closest?.("[data-demo]");e&&h.wmGuide.contains(e)&&kf(e.dataset.demo)}),h.btnWordMatchBomb&&(h.btnWordMatchBomb.onclick=()=>xp()),h.btnWordMatchMagnifier&&(h.btnWordMatchMagnifier.onclick=()=>wp()),h.btnCheck.onclick=Vf,h.btnShow.onclick=RM,h.inp.addEventListener("keydown",n=>{n.key==="Enter"&&Vf()}),h.q.addEventListener("click",()=>{Of()}),h.btnResetSettings.onclick=()=>{G=qd(),Ut="kana",Eu(),alert(C("alert_reset_settings"))},h.btnResetDay.onclick=()=>{jd(ge),ge=po(),Yt(),alert(C("alert_reset_today"))},h.btnRefreshApp&&(h.btnRefreshApp.onclick=IM),h.btnResetAllStats.onclick=()=>{confirm(C("confirm_clear_all"))&&(Xd(),ge=po(),Yt(),alert(C("alert_clear_all")))},document.querySelectorAll(".lang-btn").forEach(n=>{n.addEventListener("click",()=>LM(n.dataset.lang))})}function NM(){try{let n=new URLSearchParams(window.location.search||""),e=(n.get("mode")||n.get("module")||"").trim(),t=(window.location.hash||"").replace(/^#/,"").trim();return e||t}catch{return""}}async function DM(){let n=NM();/^(wordMatch|word-match|match|wm)$/i.test(n)&&hu("wordMatch")}async function UM(){Lo(),Eu(),Yt(),kM();try{Fe.kana=await lt("./data/kana.json"),Fe.words=await lt("./data/words.json"),Fe.wordRelations=await lt("./data/word_relations.json").catch(()=>[]),Fe.kanji=await lt("./data/kanji_words.json"),Fe.sentences=await lt("./data/sentences_800.json").catch(()=>[]),Fe.songs=await lt("./data/songs_20.json").catch(()=>[]),Fe.furiganaExtra=await lt("./data/furigana_extra.json").catch(()=>({})),Rp=await lt("./data/grammar_topics.json").catch(()=>[]),Pp();let n=await Promise.all([lt("./data/n2_q_reading.json").catch(()=>[]),lt("./data/n2_q_vocab.json").catch(()=>[]),lt("./data/n2_q_grammar.json").catch(()=>[]),lt("./data/n2_q_reading_ext.json").catch(()=>[]),lt("./data/n2_q_ortho_ext.json").catch(()=>[]),lt("./data/n2_q_context_ext.json").catch(()=>[]),lt("./data/n2_q_para_ext.json").catch(()=>[]),lt("./data/n2_q_usage_ext.json").catch(()=>[]),lt("./data/n2_q_grammar_ext1.json").catch(()=>[]),lt("./data/n2_q_grammar_ext2.json").catch(()=>[])]);Fe.n2Questions=n.flat(),Fe.jlptBanks.n2=Fe.n2Questions,uu(),await Kf;let e={n1:["n1_q_reading.json","n1_q_ortho_context.json","n1_q_context_para.json","n1_q_usage_grammar.json","n1_q_fill.json"],n3:["n3_q_reading.json","n3_q_ortho_context.json","n3_q_context_para.json","n3_q_usage_grammar.json","n3_q_fill.json"],n4:["n4_q_reading.json","n4_q_ortho_context.json","n4_q_context_para.json","n4_q_usage_grammar.json","n4_q_grammar.json"],n5:["n5_q_reading.json","n5_q_ortho_context.json","n5_q_context_para.json","n5_q_usage_grammar.json"]},t=async u=>(await Promise.all((e[u]||[]).map(f=>lt(`./data/${f}`).catch(()=>[])))).flat(),[i,s,r,a]=await Promise.all([t("n1"),t("n3"),t("n4"),t("n5")]);Fe.jlptBanks.n1=i,Fe.jlptBanks.n3=s,Fe.jlptBanks.n4=r,Fe.jlptBanks.n5=a,uu(),lt("./data/version.json").then(u=>{let d=document.getElementById("versionTag");d&&u&&u.version&&(d.textContent="v "+u.version)}).catch(()=>{});let[o,c,l]=await Promise.all([lt("./data/meanings_zh_TW.json?v=2026-06-20.25").catch(()=>({})),lt("./data/meanings_ja.json?v=2026-06-20.25").catch(()=>({})),lt("./data/meanings_en.json?v=2026-06-20.25").catch(()=>({}))]);Fe.meanings={"zh-TW":o,ja:c,en:l},window.__appDataReady=!0,window.dispatchEvent(new Event("app-data-ready")),await DM()}catch(n){console.error(n),alert(C("data_error"))}}UM();var Un=null,Gf=["\u{1F43A}","\u{1F42F}","\u{1F43B}","\u{1F98A}","\u{1F43C}","\u{1F435}","\u{1F430}","\u{1F438}","\u{1F42E}"],Wf=[{tier:-3,name:"\u5F3A\u529B\u5371\u9669",bg:"#7f1d1d",fg:"#fff",glow:"rgba(239,68,68,.55)",label:"-3",playerLoss:3,enemyHit:0},{tier:-2,name:"\u4E2D\u7B49\u5371\u9669",bg:"#dc2626",fg:"#fff",glow:"rgba(239,68,68,.45)",label:"-2",playerLoss:2,enemyHit:0},{tier:-1,name:"\u7A0D\u5FAE\u5371\u9669",bg:"#f97316",fg:"#fff",glow:"rgba(249,115,22,.42)",label:"-1",playerLoss:1,enemyHit:0},{tier:0,name:"\u5F39\u5F00",bg:"#64748b",fg:"#fff",glow:"rgba(148,163,184,.34)",label:"\u5F39",playerLoss:0,enemyHit:0},{tier:1,name:"\u7A0D\u5FAE\u53CD\u4F24",bg:"#14b8a6",fg:"#fff",glow:"rgba(20,184,166,.40)",label:"+1",playerLoss:0,enemyHit:1},{tier:2,name:"\u4E2D\u7B49\u53CD\u4F24",bg:"#2563eb",fg:"#fff",glow:"rgba(37,99,235,.44)",label:"+2",playerLoss:0,enemyHit:2},{tier:3,name:"\u5F3A\u529B\u53CD\u4F24",bg:"#8b5cf6",fg:"#fff",glow:"rgba(139,92,246,.50)",label:"+3",playerLoss:0,enemyHit:3}];function Gp(n=""){let e=[...String(n)].length;return e<=1?0:e<=2?1:e<=3?2:e<=5?3:4}function OM(n="",e=null){let t=Pe(100)??50,i=Math.min(2,Math.floor(((e?.level||1)-1)/4)),s=t<13?-3:t<29?-2:t<46?-1:t<58?0:t<75?1:t<90?2:3;return Gp(n)>=3&&s<3&&(Pe(100)??0)<35&&(s+=1),i&&s<3&&(Pe(100)??0)<i*12&&(s+=1),Math.max(-3,Math.min(3,s))}function Wp(n=0){return Wf.find(e=>e.tier===n)||Wf[3]}function $p(n=1){let e=[{color:"#a7f3d0",stroke:"#0f766e",glow:"#5eead4",name:"\u9752\u94DC\u53F6\u5203",scale:1,shape:"leaf"},{color:"#34d399",stroke:"#047857",glow:"#86efac",name:"\u7FE1\u7FE0\u53CC\u5203",scale:.92,shape:"wide"},{color:"#22d3ee",stroke:"#0e7490",glow:"#67e8f9",name:"\u51B0\u6676\u98DE\u5200",scale:.86,shape:"crystal"},{color:"#fbbf24",stroke:"#b45309",glow:"#fde68a",name:"\u91D1\u5149\u5F2F\u5203",scale:.8,shape:"curve"},{color:"#c084fc",stroke:"#6d28d9",glow:"#e9d5ff",name:"\u96F7\u5149\u7075\u5203",scale:.74,shape:"thunder"}];return e[(Math.max(1,n)-1)%e.length]}function qp(n){return n.correct?{bg:"#16a34a",fg:"#fff",glow:"rgba(34,197,94,.48)",label:"\u2713"}:n.kind==="beast"?{bg:n.color||"#64748b",fg:"#fff",glow:"rgba(99,102,241,.30)",label:`${n.knives||0}`}:Wp(n.tier||0)}function qo(n,e=!1){return e?(n.r||44)+(n.range||0)*.55+(n.knives||0)*8+(n.level||1)*6:(n.r||28)+(n.range||0)*.58+(n.knives||0)*8+Math.max(0,-(n.tier||0))*18}function FM(n){return n.correct?1.08:n.kind==="beast"?Math.max(1.02,Math.min(1.38,(n.knives||2)/4.2)):Math.max(1,Math.min(1.34,1+Math.abs(n.tier||0)*.08+(n.grade||0)*.025))}function BM(n,e=0,t=0,i=2){if(n==="target")return 1;if(n==="beast")return Math.max(4,Math.min(14,i+2));let s=1+Math.abs(e||0)+Math.floor((t||0)/2);return Math.max(1,Math.min(12,s))}function zM(n=1){return Math.max(0,Math.ceil(n/5)-1)}function HM(n=0){return["#ef4444","#a855f7","#f59e0b","#22d3ee","#22c55e"][n%5]}function VM(){let n=[...(Fe.words||[]).filter(p=>p?.hira&&p?.meaning),...(Fe.kanji||[]).filter(p=>p?.kanji&&p?.hira&&p?.meaning)],e={hira:"\u306D\u3053",kata:"\u30CD\u30B3",kanji:"\u732B",meaning:"\u732B",rm:"neko"},t=new Set(xn?.recent||[]),i=n.filter(p=>!t.has(p.rm||p.hira||p.kanji)),s=(i.length?i:n)[Pe((i.length?i:n).length||1)??0]||e,r=s.rm||s.hira||s.kanji||Date.now();xn&&(xn.recent=[r,...(xn.recent||[]).filter(p=>p!==r)].slice(0,24));let o=s.kanji&&(Pe(100)??0)<45?s.kanji:s.hira,c=s.hira,l=Ot(s)||s.meaning||s.kanji||s.hira,u=n.length?n:[e],d=Bo(l,u,p=>Ot(p)||p.meaning||p.kanji||p.hira).slice(0,4),f=u.filter(p=>d.includes(Ot(p)||p.meaning||p.kanji||p.hira));return{item:s,prompt:o,speak:c,answer:l,opts:d,optionItems:f}}function Ji(n,e=!1){let t=Math.random()*Math.PI*2,i=e?520+Math.random()*620:900+Math.random()*1e3,s=e?n.question:null,r=e?n.question.item:(n.question.optionItems||[])[Pe((n.question.optionItems||[]).length||1)??0],a=e?n.question.answer:r?.kanji||r?.hira||n.question.opts.find(p=>p!==n.question.answer)||"\uFF1F",o=e?n.question.speak:r?.hira||a,c=e?"target":Math.random()<.42?"beast":"word",l=Gp(a),u=e||c==="beast"?0:OM(a,n),d=2+Math.floor(Math.random()*Math.min(7,2+n.level)),f=e?1:BM(c,u,l,d);return{id:Date.now()+Math.random(),x:Math.max(90,Math.min((n.worldW||n.player.x*2)-90,n.player.x+Math.cos(t)*i)),y:Math.max(90,Math.min((n.worldH||n.player.y*2)-90,n.player.y+Math.sin(t)*i)),r:e?46:c==="beast"?50+d*3:48+l*2+Math.max(0,-u)*5+Math.max(0,u)*2,label:a,speak:o,correct:e,hp:f,maxHp:f,tier:u,speed:e?12:c==="beast"?10+Math.random()*12+n.level*1.2:18+Math.random()*14+n.level*1.4,kind:c,grade:l,animal:c==="beast"?Gf[Pe(Gf.length)??0]:"",knives:e?3:c==="beast"?d:Math.max(1,Math.abs(u)+1),range:e?52:c==="beast"?62+d*8:48+Math.max(1,Math.abs(u))*12,angle:Math.random()*Math.PI*2,spin:1.3+Math.random()*1.8,color:c==="beast"?["#64748b","#8b5cf6","#0ea5e9","#ef4444","#f97316"][Pe(5)??0]:null,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,wobble:Math.random()*6,hitCd:0}}function jp(n){for(n.question=VM(),n.entities=n.entities.filter(e=>!e.correct),n.entities.push(Ji(n,!0));n.entities.length<8;)n.entities.push(Ji(n,!1));Xp(n,720)}function Xp(n,e=430){let t=n.player;for(let i of n.entities||[]){if(i.correct)continue;let s=i.x-t.x,r=i.y-t.y;if((Math.hypot(s,r)||1)<e){let o=Math.atan2(r,s)+(Math.random()-.5)*.7;i.x=Math.max(90,Math.min((n.worldW||1400)-90,t.x+Math.cos(o)*e)),i.y=Math.max(90,Math.min((n.worldH||1600)-90,t.y+Math.sin(o)*e)),i.vx=0,i.vy=0,i.hitCd=.8}}}function zu(){Kp(),h.bladeOverlay&&(h.bladeOverlay.classList.add("hide"),h.bladeOverlay.innerHTML="");let n=h.bladeCanvas;if(!n)return;let e=n.getBoundingClientRect(),t=Math.max(1,window.devicePixelRatio||1);n.width=Math.max(320,Math.floor(e.width*t)),n.height=Math.max(420,Math.floor(e.height*t));let i=xn={running:!0,start:Date.now(),last:performance.now(),score:0,level:1,hp:5,maxHp:5,knives:2,knifeLevel:1,range:82,speed:1.9,knifeSize:.72,nextUpgrade:5,angle:0,recent:[],worldW:Math.max(n.width*2.2,1400),worldH:Math.max(n.height*2,1600),camera:{x:0,y:0},player:{x:Math.max(n.width*1.1,700),y:Math.max(n.height,800),r:44,baseR:44,vx:0,vy:0},input:{active:!1,dx:0,dy:0},entities:[],particles:[],question:null,message:"",invuln:6,grace:6,safeUntil:Date.now()+6e3};jp(i),GM(n),ar(),zr=requestAnimationFrame(Jp)}function Kp(){zr&&cancelAnimationFrame(zr),zr=0,xn&&(xn.running=!1),Zp()}function GM(n){if(n.__bladeInputAttached)return;n.__bladeInputAttached=!0;let e=r=>{let a=r.touches?.[0]||r,o=n.getBoundingClientRect();return{x:a.clientX-o.left,y:a.clientY-o.top,w:o.width,h:o.height}},t=r=>{r.preventDefault?.();let a=e(r),o=xn;o&&(o.input.active=!0,o.input.sx=a.x,o.input.sy=a.y)},i=r=>{let a=xn;if(!a?.input.active)return;r.preventDefault?.();let o=e(r),c=o.x-a.input.sx,l=o.y-a.input.sy,u=Math.hypot(c,l)||1,d=Math.min(1,u/46);a.input.dx=c/u*d,a.input.dy=l/u*d},s=()=>{let r=xn;r&&(r.input.active=!1,r.input.dx=0,r.input.dy=0)};n.addEventListener("pointerdown",t),n.addEventListener("pointermove",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("touchstart",t,{passive:!1}),n.addEventListener("touchmove",i,{passive:!1}),n.addEventListener("touchend",s)}function ar(){let n=xn;n&&(h.bladeScore&&(h.bladeScore.textContent=n.score),h.bladeKnives&&(h.bladeKnives.textContent=n.knives),h.bladeLevel&&(h.bladeLevel.textContent=n.level),h.bladeTime&&(h.bladeTime.textContent=ns(Math.floor((Date.now()-n.start)/1e3))))}function Zi(n,e,t,i,s=16,r=180){for(let a=0;a<s;a++)n.particles.push({x:e,y:t,vx:(Math.random()-.5)*r,vy:(Math.random()-.85)*r,life:.75+Math.random()*.55,color:i,size:3+Math.random()*5})}function ir(n,e,t=220){let i=n.x-e.x,s=n.y-e.y,r=Math.hypot(i,s)||1;n.vx=i/r*t,n.vy=s/r*t,n.hitCd=.45}function yu(n){try{n?.speak&&Lt(n.speak)}catch{}}function Hu(n){return Math.abs(n-.25)<.01?"1/4":Math.abs(n-1/3)<.04?"1/3":Math.abs(n-.5)<.01?"1/2":Number.isInteger(n)?String(n):n.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function Yp(n,e=1){return n<=8?.25:n<=24?1/3:n<=48?.5:Math.min(3,Math.max(1,Math.ceil(n/70),Math.abs(e||1)))}function xu(n,e="",t=1){if((n.safeUntil||0)>Date.now()){n.message="\u5B88\u62A4\u4E2D",n.messageT=.8;return}if((n.invuln||0)>0)return;t=Math.max(.25,Math.min(5,Number(t)||1)),n.invuln=.36+t*.18,n.hp=Math.max(0,(n.hp??5)-t),t>=1&&(n.knives=Math.max(1,n.knives-Math.floor(t)));let i=Hu(t);n.message=e||`\u53D7\u4F24-${i}\u5FC3`,n.messageT=1.1+t*.12,n.shake=.24+t*.18,n.floatText={text:`-${i}\u2764`,x:n.player.x,y:n.player.y-80,life:1.05,color:"#ef4444"},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`-${i}\u2764`,x:n.player.x+38,y:n.player.y-48,life:1,color:"#fde047",size:34}),Zi(n,n.player.x,n.player.y,"#ef4444",22+Math.ceil(t*14),230+t*65),Ee(vn),Ee(Kt),n.hp<=0&&(n.running=!1,h.bladeOverlay&&(h.bladeOverlay.classList.remove("hide"),h.bladeOverlay.innerHTML=`<div><b>GAME OVER</b><span>${C("blade_score")} ${n.score}</span><button class="btn primary" id="btnBladeAgain">${C("blade_new")}</button></div>`,setTimeout(()=>{let s=D("btnBladeAgain");s&&(s.onclick=zu)},0)))}function WM(n,e){try{Lt(n.question?.speak||n.question?.item?.hira||n.question?.prompt||"")}catch{}let t=24+n.knives*4+n.level*6+(e.grade||0)*8;if(n.score+=t,n.flash=.24,n.floatText={text:`+${t} \u98DE\u5200+1`,x:e.x,y:e.y,life:1.05,color:"#f59e0b"},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`+${t}`,x:e.x,y:e.y-32,life:1,color:"#facc15",size:30}),n.knives+=1,n.player.r=Math.min(82,(n.player.r||44)+3),n.knives>=(n.nextUpgrade||7)){n.level+=1,n.knifeLevel+=1,n.nextUpgrade=n.knives+5+Math.min(8,n.level),n.range=Math.max(112,n.range*.82),n.speed=Math.max(1.75,n.speed*.72),n.knifeSize=Math.max(.62,(n.knifeSize||1)*.86),n.flash=.42;let i=$p(n.knifeLevel);n.floatText={text:`\u8FDB\u9636\uFF1A${i.name}`,x:n.player.x,y:n.player.y-112,life:1.25,color:i.color},Ee(Kl)}else n.range+=4,n.speed+=.045,n.knifeSize=Math.min(1.08,(n.knifeSize||1)+.015),Ee(Xt),Ee(Xl),Ee(on);Zi(n,e.x,e.y,"#fbbf24",38,310),n.entities=n.entities.filter(i=>i!==e),jp(n),ar()}function $M(n,e){let t=35+e.knives*14+n.level*5;n.score+=t,n.knives+=Math.max(1,Math.floor(e.knives/2)),n.message=`\u51FB\u8D25${e.animal} +${t}`,n.messageT=1.2,n.flash=.2,n.floatText={text:`+${t}`,x:e.x,y:e.y-20,life:1,color:"#22c55e"},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`-${e.knives}`,x:e.x+20,y:e.y-42,life:1,color:"#fde047",size:34}),Zi(n,e.x,e.y,"#22c55e",44,340),Ee(on),Ee(So),Ee(Xt),n.entities=n.entities.filter(i=>i!==e),n.entities.push(Ji(n,!1)),ar()}function qM(n,e,t=!1){if(e.hitCd)return!1;yu(e);let i=Wp(e.tier||0);if((e.tier||0)<0){let r=Math.abs(e.tier||-1),a=qo({r:n.player.r,range:n.range,knives:n.knives,level:n.level},!0),o=qo(e),c=o>a?Yp(o-a,r):0;return c=Math.max(0,Math.min(r,c)),ir(e,n.player,310+r*60),Zi(n,e.x,e.y,i.bg,18+r*10,220+r*70),n.entities=n.entities.filter(l=>l!==e),n.entities.push(Ji(n,!1)),c>0?(xu(n,`${i.name}\uFF0C-${Hu(c)}\u5FC3`,c),!0):(e.hp=Math.max(0,(e.hp??5)-1),n.message=e.hp<=0?"\u538B\u5236\u51FB\u7834\uFF01":"\u4F53\u578B\u538B\u5236\uFF0C\u654C\u65B9-1\u5FC3",n.messageT=.8,Ee(e.hp<=0?Xt:Kt),e.hp<=0&&(n.score+=18+n.level*4,n.entities=n.entities.filter(l=>l!==e),n.entities.push(Ji(n,!1)),ar()),!1)}if((e.tier||0)===0)return ir(e,n.player,t?360:280),n.message="\u5F39\u5F00\uFF01",n.messageT=.6,Zi(n,e.x,e.y,"#cbd5e1",14,180),Ee(Kt),!1;let s=e.tier||1;if(e.hp-=s,ir(e,n.player,260+s*45),n.floatText={text:`\u5BF9\u65B9-${s}`,x:e.x,y:e.y-20,life:.8,color:i.bg},n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:`-${s}`,x:e.x+18,y:e.y-30,life:.9,color:"#fde047",size:28+s*3}),Zi(n,e.x,e.y,i.bg,20+s*10,230+s*55),Ee(s>=3?on:Kt),e.hp<=0){let r=14+s*12+n.level*3;n.score+=r,s>=3&&(n.knives+=1),n.entities=n.entities.filter(a=>a!==e),n.entities.push(Ji(n,!1)),n.message=s>=3?`\u5F3A\u529B\u51FB\u7834 +${r}`:`\u51FB\u7834 +${r}`,n.messageT=.9,ar(),Ee(Xt)}return!1}function Jp(n){let e=xn;if(!e||!h.bladeCanvas)return;let t=Math.min(.033,(n-e.last)/1e3||.016);e.last=n,e.running&&jM(e,t),XM(e),e.running&&(zr=requestAnimationFrame(Jp))}function jM(n,e){let t=h.bladeCanvas,i=n.player,s=Math.max(0,(i.r||44)-44)*1.15+Math.max(0,(n.range||82)-82)*.18,r=Math.max(230,360+(n.level||1)*8-s);i.x=Math.max(70,Math.min((n.worldW||t.width)-70,i.x+n.input.dx*r*e)),i.y=Math.max(90,Math.min((n.worldH||t.height)-70,i.y+n.input.dy*r*e)),n.camera=n.camera||{x:0,y:0},n.camera.x+=(i.x-t.width/2-n.camera.x)*Math.min(1,e*7),n.camera.y+=(i.y-t.height/2-n.camera.y)*Math.min(1,e*7),n.camera.x=Math.max(0,Math.min((n.worldW||t.width)-t.width,n.camera.x)),n.camera.y=Math.max(0,Math.min((n.worldH||t.height)-t.height,n.camera.y)),n.angle+=n.speed*e,n.invuln=Math.max(0,(n.invuln||0)-e),n.grace=Math.max(0,(n.grace||0)-e),(n.safeUntil||0)>Date.now()&&Xp(n,520);for(let a of n.entities){let o=i.x-a.x,c=i.y-a.y,l=Math.hypot(o,c)||1;if(a.hitCd=Math.max(0,(a.hitCd||0)-e),a.wobble+=e,a.angle=(a.angle||0)+(a.spin||1)*e,!a.correct){let f=n.grace>0?.18:a.kind==="beast"?.55:1;a.vx=(a.vx||0)*.92+o/l*a.speed*f*e*18,a.vy=(a.vy||0)*.92+c/l*a.speed*f*e*18,a.x+=a.vx*e,a.y+=a.vy*e}a.x=Math.max(30,Math.min((n.worldW||t.width)-30,a.x)),a.y=Math.max(30,Math.min((n.worldH||t.height)-30,a.y));let u=l<i.r+a.r,d=l<n.range+a.r;if(a.correct&&(u||d)){WM(n,a);return}if(!a.correct&&a.kind==="beast"&&n.grace<=0){if(l<n.range+a.range&&!a.hitCd){yu(a);let p=qo({r:i.r,range:n.range,knives:n.knives,level:n.level},!0),g=qo(a);if(p>=g*.92){if(a.hp=Math.max(0,(a.hp??5)-2),n.damageTexts=n.damageTexts||[],n.damageTexts.push({text:"-2\u2764",x:a.x+20,y:a.y-42,life:1,color:"#fde047",size:30}),Zi(n,a.x,a.y,"#22c55e",24,260),Ee(Kt),a.hp<=0){$M(n,a);return}ir(a,i,260);return}let v=Yp(g-p,a.knives||1);ir(a,i,300+v*60),xu(n,`${a.animal}\u4F53\u578B\u538B\u5236\uFF0C-${Hu(v)}\u5FC3`,v);return}if(u&&!a.hitCd){yu(a),ir(a,i,330),xu(n,`\u649E\u5230${a.animal}\uFF0C\u6389\u4E00\u628A\u5200`);return}}if(!a.correct&&a.kind!=="beast"&&n.grace<=0){let f=l<n.range+(a.range||a.r);if((d||u||f)&&!a.hitCd&&qM(n,a,u))return}}for(;n.entities.length<8+Math.min(8,n.level);)n.entities.push(Ji(n,!1));n.particles.forEach(a=>{a.x+=a.vx*e,a.y+=a.vy*e,a.vx+=Math.sin((a.y+Date.now()/45)*.01)*14*e,a.vy+=160*e,a.life-=e}),n.floatText&&(n.floatText.y-=42*e,n.floatText.life-=e,n.floatText.life<=0&&(n.floatText=null)),n.shake=Math.max(0,(n.shake||0)-e),n.flash=Math.max(0,(n.flash||0)-e),n.messageT=Math.max(0,(n.messageT||0)-e),n.messageT||(n.message=""),n.damageTexts&&(n.damageTexts.forEach(a=>{a.y-=58*e,a.life-=e}),n.damageTexts=n.damageTexts.filter(a=>a.life>0)),n.particles=n.particles.filter(a=>a.life>0),ar()}function XM(n){QM(n)}function Zp(){if(Un){try{for(let n of Un.objects?.values?.()||[])n.group?.traverse?.(e=>{e.geometry&&e.geometry.dispose?.(),e.material&&(e.material.map&&e.material.map.dispose?.(),e.material.dispose?.())});Un.renderer?.dispose?.()}catch{}Un=null}}function KM(n,e={}){let t=e.fontSize||44,i=e.pad||18,s=document.createElement("canvas"),r=s.getContext("2d");r.font=`900 ${t}px system-ui, sans-serif`;let a=r.measureText(String(n||""));if(s.width=Math.max(96,Math.ceil(a.width+i*2)),s.height=Math.ceil(t+i*2),r.font=`900 ${t}px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",e.bg!==!1){r.fillStyle=e.bg||"rgba(255,255,255,.94)",r.strokeStyle=e.border||"#6366f1",r.lineWidth=6;let c=18,l=3,u=3,d=s.width-6,f=s.height-6;r.beginPath(),r.moveTo(l+c,u),r.arcTo(l+d,u,l+d,u+f,c),r.arcTo(l+d,u+f,l,u+f,c),r.arcTo(l,u+f,l,u,c),r.arcTo(l,u,l+d,u,c),r.closePath(),r.fill(),r.stroke()}r.lineWidth=e.strokeWidth||5,r.strokeStyle=e.stroke||"rgba(255,255,255,.85)",r.fillStyle=e.color||"#4f46e5",r.strokeText(String(n||""),s.width/2,s.height/2),r.fillText(String(n||""),s.width/2,s.height/2);let o=new Ja(s);return o.colorSpace=fn,{tex:o,w:s.width,h:s.height}}function Vu(n,e={}){let{tex:t,w:i,h:s}=KM(n,e),r=new Mr({map:t,transparent:!0,depthTest:!1}),a=new Xa(r),o=e.scale||.72;return a.scale.set(i*o,s*o,1),a}function Qp(n,e,t=!1){let i=zM(n),s=t?"#ef4444":HM(i),r=t?5:Math.max(1,Math.min(5,Math.ceil(n-i*5))),a="\u2665".repeat(Math.max(0,r))+(!t&&e>5?` \xD7${i+1}`:"");return Vu(a,{bg:!1,color:s,stroke:"rgba(0,0,0,.85)",strokeWidth:7,fontSize:t?34:30,scale:t?.55:.48})}function YM(n){Zp();let e=h.bladeCanvas,t=new Wa({canvas:e,antialias:!0,alpha:!1});t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.setSize(e.width,e.height,!1),t.shadowMap.enabled=!0;let i=new qa;i.background=new Oe(1448500),i.fog=new $a(1448500,650,1900);let s=new $t(48,e.width/e.height,1,5e3),r=new ao(13095678,1976635,1.9);i.add(r);let a=new oo(16775116,2.4);a.position.set(220,700,260),a.castShadow=!0,i.add(a);let o=new wt(new xi(58,32,16),new Us({color:16775103}));o.position.set(n.worldW*.38,420,-n.worldH*.25),i.add(o);let c=new wt(new Fs(n.worldW*1.6,n.worldH*1.6,1,1),new Tn({color:2503753,roughness:.92,metalness:0}));c.rotation.x=-Math.PI/2,c.position.set(n.worldW/2,-8,n.worldH/2),c.receiveShadow=!0,i.add(c);let l=new br({color:5988244,transparent:!0,opacity:.23}),u=new mn;for(let v=-400;v<n.worldW+400;v+=180){let m=new qt().setFromPoints([new k(v,0,-400),new k(v,0,n.worldH+400)]);u.add(new Sr(m,l))}for(let v=-400;v<n.worldH+400;v+=180){let m=new qt().setFromPoints([new k(-400,0,v),new k(n.worldW+400,0,v)]);u.add(new Sr(m,l))}i.add(u);let d=new Tn({color:8330525,roughness:.65}),f=(v,m,_,S,b,T,O)=>{let E=new wt(new $i(m,_,S),d);E.position.set(b,T,O),E.castShadow=!0,v.add(E)},p=new mn;f(p,230,26,28,0,130,0),f(p,280,24,30,0,168,0),f(p,26,170,26,-78,42,0),f(p,26,170,26,78,42,0),f(p,210,20,24,0,76,0),p.position.set(260,0,260),i.add(p),Un={renderer:t,scene:i,camera:s,objects:new Map,lastCanvasW:e.width,lastCanvasH:e.height}}function JM(n=!1,e={}){let t=new mn,i=n?5195493:new Oe(e.bg||"#64748b").getHex(),s=new wt(new no(n?34:30,n?58:52,8,16),new Tn({color:i,roughness:.55,metalness:.05}));s.position.y=n?58:50,s.castShadow=!0,t.add(s);let r=new wt(new xi(n?32:27,24,16),new Tn({color:n?16361684:16317180,roughness:.6}));if(r.position.y=n?118:104,r.castShadow=!0,t.add(r),n){for(let o of[-1,1]){let c=new wt(new xi(14,16,12),new Tn({color:16361684}));c.scale.set(.75,1.35,.55),c.position.set(o*22,148,0),t.add(c)}let a=new wt(new xi(11,16,8),new Tn({color:16478597}));a.scale.set(1.35,.72,.75),a.position.set(0,113,28),t.add(a)}else{let a=new wt(new xi(7,12,8),new Tn({color:1120295}));a.scale.set(1.6,.55,.3),a.position.set(0,100,25),t.add(a)}return t}function ZM(n=8246268,e=1){let t=new io(9*e,56*e,4,1),i=new Tn({color:n,emissive:n,emissiveIntensity:.18,metalness:.35,roughness:.32}),s=new wt(t,i);return s.castShadow=!0,s.rotation.x=Math.PI/2,s}function $f(n,e=null,t=!1){let i=t?"player":e.id,s=Un.objects.get(i),r=t?{bg:"#4f46e5"}:qp(e);if(!s){let a=new mn,o=JM(t,r);a.add(o);let c=new mn;a.add(c);let l=Vu(t?n.question?.prompt||"":e.label||"",{fontSize:t?38:30,border:t?"#6366f1":r.bg,color:t?"#4f46e5":r.bg,scale:t?.55:.42});a.add(l);let u=Qp(t?n.hp:e.hp,t?n.maxHp:e.maxHp,t);a.add(u),Un.scene.add(a),s={group:a,unit:o,ring:c,label:l,hp:u,labelText:null,hpText:null,knives:0},Un.objects.set(i,s)}return s}function qf(n,e,t){n.labelText!==e&&(n.group.remove(n.label),n.label.material.map?.dispose?.(),n.label.material.dispose?.(),n.label=Vu(e,t),n.group.add(n.label),n.labelText=e)}function jf(n,e,t,i){let s=`${e}/${t}/${i}`;n.hpText!==s&&(n.group.remove(n.hp),n.hp.material.map?.dispose?.(),n.hp.material.dispose?.(),n.hp=Qp(e,t,i),n.group.add(n.hp),n.hpText=s)}function Xf(n,e,t,i,s,r=!1){if(n.knives!==e||n.knifeLevel!==i||n.knifeSize!==s||n.radius!==t){for(;n.ring.children.length;)n.ring.remove(n.ring.children[0]);let o=$p(i||1),c=r?15680580:new Oe(o.color).getHex();for(let l=0;l<e;l++){let u=ZM(c,r?.45:s||.75);n.ring.add(u)}n.knives=e,n.knifeLevel=i,n.knifeSize=s,n.radius=t}let a=Math.max(1,e);n.ring.children.forEach((o,c)=>{let l=c*Math.PI*2/a;o.position.set(Math.cos(l)*t,56,Math.sin(l)*t),o.rotation.y=-l})}function QM(n){let e=h.bladeCanvas;if(!e)return;Un||YM(n);let t=Un;(t.lastCanvasW!==e.width||t.lastCanvasH!==e.height)&&(t.renderer.setSize(e.width,e.height,!1),t.camera.aspect=e.width/e.height,t.camera.updateProjectionMatrix(),t.lastCanvasW=e.width,t.lastCanvasH=e.height);let i=n.player;t.camera.position.set(i.x,620,i.y+720),t.camera.lookAt(i.x,50,i.y);let s=new Set(["player"]),r=$f(n,null,!0);r.group.position.set(i.x,0,i.y);let a=Math.max(.72,Math.min(1.25,(i.r||44)/58));r.unit.scale.setScalar(a),qf(r,n.question?.prompt||"",{fontSize:38,border:"#6366f1",color:"#4f46e5",scale:.55}),r.label.position.set(0,190,0),jf(r,n.hp,n.maxHp,!0),r.hp.position.set(0,225,0),Xf(r,n.knives,n.range,n.knifeLevel,n.knifeSize,!1),r.ring.rotation.y=n.angle;for(let o of n.entities){s.add(o.id);let c=qp(o),l=$f(n,o,!1);l.group.position.set(o.x,0,o.y);let u=FM(o);l.unit.scale.setScalar(u),qf(l,o.label||"",{fontSize:30,border:c.bg,color:c.bg,scale:.42}),l.label.position.set(0,150*u,0),jf(l,o.hp,o.maxHp,!1),l.hp.position.set(0,184*u,0),Xf(l,o.knives||1,o.range||40,o.knifeLevel||1,.45,!0),l.ring.rotation.y=o.angle||0}for(let[o,c]of[...t.objects.entries()])s.has(o)||(t.scene.remove(c.group),t.objects.delete(o));t.renderer.render(t.scene,t.camera)}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
