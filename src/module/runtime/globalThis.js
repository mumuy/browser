let globalObject = {};

if(typeof globalThis !== 'undefined'){
    globalObject =  globalThis;
}else if(typeof self !== 'undefined'){
    globalObject =  self;
}else if(typeof window !== 'undefined'){
    globalObject =  window;
}else if(typeof global !== 'undefined'){
    globalObject =  global;
}

export default globalObject;