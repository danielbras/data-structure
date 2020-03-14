class ArrayList{
    constructor() {
        this.arrayList = [];
    }

    add(data) {
        let auxArray = [data];
        for(let i = 0; i < this.size(); i++) {
            auxArray[i+1] = this.arrayList[i];
        }
        this.arrayList = auxArray;
    }

    append(data) {
        this.arrayList[this.size()] = data;
    }

    addAt(index, data) {
        if(index >= this.size()) {
            this.append(data);
        } else if(index == 0) {
            this.add(data);
        } else {
            let auxArray = [];
            for (let i = 0, j = 0; j < this.size(); i++, j++) {
                if(index == i) {
                    auxArray[i] = data;
                    auxArray[++i] = this.arrayList[j];
                } else 
                    auxArray[i] = this.arrayList[j];
            }
            this.arrayList = auxArray;
        }
    }

    removeBeginning() {
        if(this.isEmpty()) {
            throw new Error();
        }
        let auxArray = [];
        for(let i = 0; i < this.size() - 1; i++) {
            auxArray[i] = this.arrayList[i+1];
        }
        this.arrayList = auxArray;
    }

    removeEnd() {
        if(this.isEmpty()) {
            throw new Error();
        }
        let auxArray = [];
        for(let i = 0; i < this.size() - 1; i++) {
            auxArray[i] = this.arrayList[i];
        }
        this.arrayList = auxArray;
    }

    isEmpty() {
        return this.arrayList[0] === undefined;
    }

    size() {
        return this.arrayList.length;
    }

    search(data) {
        for (let i = 0; i < this.size(); i++) {
            if(this.arrayList[i] === data) {
                return true;
            }
        }
        return false;
    }

    toString() {
        let string = "";
        for (let i = 0; i < this.size(); i++) {
            string += this.arrayList[i] + (this.arrayList[i+1] === undefined ? "" : "->");
        }
        return string;
    }

}

export default ArrayList;