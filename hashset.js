// @ts-check
import LinkedList from "./linkedlist.js"

/**
 * @class Hashset
 * @classdesc A hashset class
 * */
class Hashset {
  #capacity = 16;
  #load_factor;
  #size;
  #buckets; // the buckets of the hashset
  /**
   * @constructor
   * @description hashset takes a capacity (default 16) and a load_factor (default 0.8)
   * @param {number} [capacity=16] 
   * @param {number} [load_factor=0.8] 
   * */
  constructor(capacity = 16, load_factor = 0.8) {
    this.#capacity = capacity // starts at 16
    this.#load_factor = load_factor
    this.#size = 0 // initially at 0 size
    this.#buckets = new Array(this.#capacity);
  }

  /**
   * @typedef {LinkedList} #buckets[hash]
   * */

  /**
   * @method to return the capacity of the hashmap
   * @returns {number}
   * */
  get capacity() {
    return this.#capacity
  }

  /**
   * @method to return the load factor of the hashmap (percentage to grow the hashmap)
   * @returns {number}
   * */
  get load_factor() {
    return this.#load_factor
  }

  /**
   * @method to return the size of the hashmap
   * @returns {number}
   * */
  get size() {
    return this.#size
  }

  /**
   * @method to return the hash key
   * @param {string} key 
   * */
  hash(key) {
    let hashCode = 0
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode %= this.#capacity;
    }
    return hashCode;
  }

  /**
   * @method to add a key into the hashset
   * @param {any} key 
   * */
  add(key){
    // TODO: implement the add method

  }

  /**
   * @method to get the value from the key, null if not found
   * @param {string} key
   * @returns {any}
   * */
  get(key) {
    try {
      if (!key) {
        throw new Error('Key cannot be empty')
      }
      const hash = this.hash(key);
      // console.log(`hash: ${hash}`)
      // console.log(`buckets of hash: ${this.#buckets[hash]}`)
      if (!this.#buckets[hash])
        return null;
      const node = this.#buckets[hash].get(key);
      return node?.value
    } catch (error) {
      console.error(error.message)
    }
  }

  /**
   * @method to check whether a key exists in the hashmap
   * @param {string} key 
   * @returns {boolean}
   * */
  has(key) {
    const hash = this.hash(key);
    if (!this.#buckets[hash])
      return false
    if (!this.#buckets[hash].contains(key))
      return false
    return true
  }

  /**
   * @method to remove a key from the hashmap returns true on success
   * @param {string} key 
   * @returns {boolean}
   * */
  remove(key) {
    if (key === undefined || !this.has(key))
      return false
    // get the index of the key
    const hash = this.hash(key)
    let idx = this.#buckets[hash].find(key)
    if(idx === null) return false
    this.#buckets[hash].removeAt(idx)
    if(this.#buckets[hash].size === 0){
      this.#buckets[hash] = null
    }
    this.#size--
    return true
  }

  /**
   * @method to return the length of the hashmap
   * @returns {number}
   * */
  length() {
    return this.#size
  }

  /**
   * @method to clear the hashmap of every element
   * */
  clear() {
    this.#buckets = new Array(this.#capacity)
    this.#size = 0
  }

  /**
   * @method to return the keys of the hashmap as an array
   * @returns {Array<string>}
   * */
  keys() {
    let array = []
    for (let i = 0; i < this.#capacity; i++) {
      if (this.#buckets[i]) {
        array.push(this.#buckets[i].keys())
      }
    }
    // flatten the arrays
    return array.flat(2);
  }
}

/** @module Hashset */
export default Hashset;
