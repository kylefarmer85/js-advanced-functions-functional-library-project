const fi = (function() {
  return {
    libraryMethod: function() {
      console.log('Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0')
    },

    each: function(collection, callback) {
      const arr = Array.isArray(collection) ? collection : Object.values(collection)
      for(let i = 0; i < arr.length; i++){
        callback(arr[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const arr = Array.isArray(collection) ? collection : Object.values(collection)
      let newArr = []
      for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i]))
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      let arr = Array.isArray(collection) ? [...collection] : Object.values(collection)
      let output = acc ? acc : arr.shift()
      for(let i = 0; i < arr.length; i++){
        output = callback(output, arr[i], arr)
      }
      return output
    },
    
    find: function(collection, predicate) {
      const arr = Array.isArray(collection) ? collection : Object.values(collection)
      for(let i = 0;i < arr.length; i++){
        if (predicate(arr[i])) {
          return arr[i]
        }
      }
    },

    filter: function(collection, predicate){
      const arr = Array.isArray(collection) ? collection : Object.values(collection)
      let newArr = []
      for(let i = 0;i < arr.length; i++){
        if (predicate(arr[i])){
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    size: function(collection){
      const arr = Array.isArray(collection) ? collection : Object.values(collection)
      let size = 0
      for(let i = 0;i < arr.length; i++){
        size++
      }
      return size
    },

    first: function(array, n = 1){
      let newArr = []
      for(let i = 0; i <= (n - 1); i++){
        newArr.push(array[i])
      }
      return newArr.length > 1 ? newArr : newArr[0]
    },

    last: function(array, n = 1){
      let newArr = []
      for(let i = 1; i <= n; i++){
        newArr.push(array[array.length - i])
      }
      return newArr.length > 1 ? newArr.reverse() : newArr[0]
    },

    compact: function(array){
      let newArr = []
      for(let i = 0; i < array.length; i++){
        if (array[i]){
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        if (callback(a) < callback(b)) {
          return -1
        } else if (callback(a) > callback(b)) {
          return 1
        } else {
          return 0
        }
      })
    },

    flatten: function(array, shallow){
      return shallow === true ? array.flat() : array.flat(Infinity)
    },

    uniq: function(array, isSorted, callback = item => item){
      let newArr = []
      for(let i = 0; i < array.length; i++){
        if(!newArr.some(item => callback(item) === callback(array[i]))){
          newArr.push(array[i])
        }
      }
      return newArr
    },

    keys: function(object){
      let arr = []
      for(let k in object){
        arr.push(k)
      }
      return arr
    },

    values: function(object){
      let arr = []
      for(let k in object){
        arr.push(object[k])
      }
      return arr
    },

    functions: function(object){
      let arr = []
      for(let k in object){
        if(typeof object[k] === 'function'){
          arr.push(k)
        }
      }
      return arr
    }
  }
})()

fi.libraryMethod()
