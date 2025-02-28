function decript(num, txt) {
    let nmx = String(num);
    while (nmx.length > 1) {
        let buf = 0;
        for (let i = 0; i < nmx.length; i++) {
            buf += parseInt(nmx.charAt(i), 10);
        }
        nmx = String(buf);
    }
    let buf = '';
    for (let i = 0; i < txt.length; i++) {
        let x;
        if (parseInt(nmx, 10) & 1) {
            x = txt.charCodeAt(i) - 47 - parseInt(nmx, 10);
            if (x < 32) {
                x += 223;
            }
        } else {
            x = txt.charCodeAt(i) + 47 + parseInt(nmx, 10);
            if (x > 254) {
                x -= 223;
            }
        }
        buf += String.fromCharCode(x);
    }
    return buf;
}
