/**
 * Reverse blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace reverse {
    const rbits = hex`
    008040C020A060E0109050D030B070F0088848C828A868E8189858D838B878F8
    048444C424A464E4149454D434B474F40C8C4CCC2CAC6CEC1C9C5CDC3CBC7CFC
    028242C222A262E2129252D232B272F20A8A4ACA2AAA6AEA1A9A5ADA3ABA7AFA
    068646C626A666E6169656D636B676F60E8E4ECE2EAE6EEE1E9E5EDE3EBE7EFE
    018141C121A161E1119151D131B171F1098949C929A969E9199959D939B979F9
    058545C525A565E5159555D535B575F50D8D4DCD2DAD6DED1D9D5DDD3DBD7DFD
    038343C323A363E3139353D333B373F30B8B4BCB2BAB6BEB1B9B5BDB3BBB7BFB
    078747C727A767E7179757D737B777F70F8F4FCF2FAF6FEF1F9F5FDF3FBF7FFF`
    
    /**
     * Reverse buffer of bits
     * @param b buffer to be reversed
     */
    //% block
    export function rbuffer(b: Buffer): Buffer {
        let output = pins.createBuffer(b.length);
        for (let i = 0; i < b.length; i++) {
            let n = b[i]
            output[i] = rbit(n)
        }
        return output
    }

    /**
     * Reverse bit
     * @param value to be reversed
     */
    //% block
    export function rbit(value: number): number {
        return rbits[value] || 0x00;
    }
}
