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
var _DelegationSortedIntList_totalAdded;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegationSortedIntList = void 0;
// HINT: Take a look at the UML diagram to see what DelegationSortedIntList
//       should implement.
class DelegationSortedIntList {
    constructor() {
        // the number of attempted element insertions
        _DelegationSortedIntList_totalAdded.set(this, 0
        /**
         * Gets the total number of attempted int insertions to the list since it.
         * was created.
         *
         * @return total number of integers added to the list.
         */
        );
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
_DelegationSortedIntList_totalAdded = new WeakMap();
//# sourceMappingURL=DelegationSortedIntList.js.map