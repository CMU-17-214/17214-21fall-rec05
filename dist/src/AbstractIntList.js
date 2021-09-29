"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractIntList = void 0;
/**
 * AbstractIntList -- a list of integers.
 *
 * @author Nora Shoemaker
 *
 */
class AbstractIntList {
    /**
     * Adds all of the elements of the IntegerList to the list.
     * Calls add() on each element of list. Can be overwritten
     * for more specific behavior.
     *
     * @param list IntegerList containing elements to be added to the list
     * @return true if the list changed as a result of the call
     */
    addAll(list) {
        let success = false;
        for (let i = 0; i < list.size(); i++) {
            success || (success = this.add(list.get(i)));
        }
        return success;
    }
}
exports.AbstractIntList = AbstractIntList;
//# sourceMappingURL=AbstractIntList.js.map