"use strict";
/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DelegationSortedIntList_totalAdded, _DelegationSortedIntList_delegate;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegationSortedIntList = void 0;
const SortedIntListLibrary_1 = require("./hidden/SortedIntListLibrary");
// HINT: Take a look at the UML diagram to see what DelegationSortedIntList
//       should implement.
class DelegationSortedIntList {
    constructor() {
        // the number of attempted element insertions
        _DelegationSortedIntList_totalAdded.set(this, 0);
        _DelegationSortedIntList_delegate.set(this, new SortedIntListLibrary_1.SortedIntList());
    }
    add(num) {
        var _a;
        let result = __classPrivateFieldGet(this, _DelegationSortedIntList_delegate, "f").add(num);
        if (result)
            __classPrivateFieldSet(this, _DelegationSortedIntList_totalAdded, (_a = __classPrivateFieldGet(this, _DelegationSortedIntList_totalAdded, "f"), _a++, _a), "f");
        return result;
    }
    addAll(list) {
        throw new Error("Method not implemented.");
    }
    get(index) {
        throw new Error("Method not implemented.");
    }
    remove(num) {
        throw new Error("Method not implemented.");
    }
    removeAll(list) {
        throw new Error("Method not implemented.");
    }
    size() {
        throw new Error("Method not implemented.");
    }
    /**
     * Gets the total number of attempted int insertions to the list since it.
     * was created.
     *
     * @return total number of integers added to the list.
     */
    getTotalAdded() {
        return __classPrivateFieldGet(this, _DelegationSortedIntList_totalAdded, "f");
    }
}
exports.DelegationSortedIntList = DelegationSortedIntList;
_DelegationSortedIntList_totalAdded = new WeakMap(), _DelegationSortedIntList_delegate = new WeakMap();
//# sourceMappingURL=DelegationSortedIntList.js.map