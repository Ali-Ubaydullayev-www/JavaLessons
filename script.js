let a = 'AASWAASEEE';
let noRepaet = () => {
    let b = '';
    let c = [];
    let sort = a.split('').sort();
    for (i = 0; i < a.length; i++) {
        if (b.search(a[i]) === -1) {
            c.push(a[i])
        }
        b = c.join('')
    }
    let bb = b.split('');
    let w = 0;
    let ww = [];
    for (j = 0; j < bb.length; j++) {
        for (q = 0; q < sort.length; q++) {
            if (bb[j] === sort[q]) {
                w++;
            }
        }
        ww.push(w, b[j])
        w = 0;
    }
    console.log(ww.join(""))
}
noRepaet();