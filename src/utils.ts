/**
 * UUIDs must be of the form "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx", 
 * where x is one of [0-9, a-f] M is one of [1-5], and N is [8, 9, a, or b]
 * @returns valid uuid v4 RFC 4122 complied
 */
export function uuid() {
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;

        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-"
        }
        uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}