// class HashTable {
//     constructor(size = 10) {
//         this.table = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for(let i =0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.table.length;
//     }

//     set(key, value) {
//         let index = this._hash(key);
//         if(!this.table[index]) this.table[index] = [];
//         this.table[index].push([key, value]);
//     }

//     get(key) {
//         let index = this._hash(key);
//         if(!this.table[index]) return undefined;
        
//         for(let pair of this.table[index]) {
//             if(pair[0] === key) return pair[1];
//         }
//         return undefined;
//     }

//     delete(key) {
//         let index = this._hash(key);
//         if(!this.table[index]) return false;

//         this.table[index] = this.table.filter(pair => pair[0] !== key);
//         return true;
//     }
// }


// let hashtable = new HashTable(5);
// hashtable.set("name", "Mahmoud")
// hashtable.set("name", "Mahmoud Ramadan")
// hashtable.set("age", 22)

// console.log(hashtable.table)
// console.log(hashtable.get("name"))


// console.log(firstUniqueChar("programming")); // "r"
// console.log(firstUniqueChar("aabbcc"));      // null

function firstUniqueChar(word) {
    let charFrequency = new Map();

    for(let i=0; i < word.length; i++) {
        if(charFrequency.has(word[i])) charFrequency.set(word[i], charFrequency.get(word[i]) + 1);
        else charFrequency.set(word[i], 1);
    }

    
    for(pair of charFrequency) {
        if(pair[1] === 1) return pair[0];
    }

    return null;
}

console.log(firstUniqueChar("programming")); // "r"
