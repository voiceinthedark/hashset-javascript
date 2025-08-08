// @ts-check

/**
 * @class Node
 * @classdesc A node that holds data and pointer to next node
 * */
class Node {
  /** @type {string} */
  #key
  /** @type {any} */
  #value;
  /** @type {Node | null | undefined} */
  #nextNode;
  /** @type {number} */
  #hashKey;

  /**@constructor
   * @param {string} key 
   * @param {any} val 
   * @param {Node | null | undefined} next 
   * @param {number} hash 
   * */
  constructor(key, val, next, hash) {
    this.#key = key
    this.#value = val ?? null;
    this.#nextNode = next ?? null;
    this.#hashKey = hash;
  }

  /**
   * @method to set the hashKey of the node
   * @param {number} val 
   * */
  set hashKey(val){
    this.#hashKey = val
  }

  /**
   * @method to get the hashkey of the node
   * @returns {number}
   * */
  get hashKey(){
    return this.#hashKey
  }

  /** @method to return the key of the node
   * @returns {string}
   * */
  get key(){
    return this.#key
  }

  /**
   * @method to return the value of the node
   * @returns {any}
   * */
  get value() {
    return this.#value;
  }
  /**
   * @method to set the value of the node
   * @param {any} val 
   * */
  set value(val) {
    this.#value = val;
  }

  /**
   * @method to get the next node
   * @returns {Node | null | undefined }
   * */
  get nextNode() {
    return this.#nextNode
  }

  /**
   * @method to set the next node
   * @param {Node | null |undefined} val 
   * */
  set nextNode(val) {
    this.#nextNode = val;
  }
}

/** @module Node */
export default Node;
