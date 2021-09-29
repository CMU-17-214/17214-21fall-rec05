"use strict";
/**
 *
 * DO NOT LOOK AT THIS FILE
 *
 * Assume it comes hidden as a library
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortedIntList = exports.SortedIntLinkedList = void 0;
class SortedIntLinkedList {
    constructor() {
        this.sortedList = [];
    }
    add(num) {
        this.sortedList.push(num);
        this.sortedList.sort();
        return true;
    }
    addAll(list) {
        let success = true;
        for (let i = 0; i < list.size(); ++i) {
            success && (success = this.add(list.get(i)));
        }
        return success;
    }
    get(index) {
        return this.sortedList[index];
    }
    remove(num) {
        let index = this.sortedList.indexOf(num);
        if (index !== -1)
            return false;
        this.sortedList.splice(index, 1);
        return true;
    }
    removeAll(list) {
        let success = true;
        for (let i = 0; i < list.size(); ++i) {
            success && (success = this.remove(list.get(i)));
        }
        return success;
    }
    size() {
        return this.sortedList.length;
    }
}
exports.SortedIntLinkedList = SortedIntLinkedList;
class SortedIntList {
    constructor() {
        this.sortedList = [];
    }
    add(num) {
        this.sortedList.push(num);
        this.sortedList.sort();
        return true;
    }
    addAll(list) {
        let success = true;
        for (let i = 0; i < list.size(); ++i) {
            success && (success = this.add(list.get(i)));
        }
        return success;
    }
    get(index) {
        return this.sortedList[index];
    }
    remove(num) {
        let index = this.sortedList.indexOf(num);
        if (index !== -1)
            return false;
        this.sortedList.splice(index, 1);
        return true;
    }
    removeAll(list) {
        let success = true;
        for (let i = 0; i < list.size(); ++i) {
            success && (success = this.remove(list.get(i)));
        }
        return success;
    }
    size() {
        return this.sortedList.length;
    }
}
exports.SortedIntList = SortedIntList;
//# sourceMappingURL=SortedIntListLibrary.js.map