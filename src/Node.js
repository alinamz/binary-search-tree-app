// todo переименовать в BstNode
export default class BstNode {
    constructor(value) {
        if (value == null) {
            console.error('Value must be not null');
        }
        this.left = null;
        this.right = null;
        this.value = value;
    }

    add(value) {
        if (value === this.value) {
            console.warn(`Value ${value} already in the tree`);
            return;
        }

        if (value > this.value) {
            if (!this.right) {
                this.right = new BstNode(value)
                return;
            }
            this.right.add(value)
        } else {
            if (!this.left) {
                this.left = new BstNode(value)
                return;
            }
            this.left.add(value)
        }
    }
}
