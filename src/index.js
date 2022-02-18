module.exports = function check(str, bracketsConfig) {
  let stack = []
  const map = new Map()
  
  for(item of bracketsConfig) {
    map.set(item[0],item[1])
  }
  
  for(let i = 0; i < str.length; i++){
    let currentTag = str[i];
    
    if(stack[stack.length - 1] !== currentTag){
      stack.push(map.get(currentTag))
      continue;
    }

    if (stack[stack.length - 1] === currentTag){
      stack.pop()
    }
  }
  if(stack.length == 0){
    return true
  }
  else {
    return false
  }
}
