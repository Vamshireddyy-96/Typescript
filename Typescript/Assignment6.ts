/*6)Create a class which will have three method one for setting value of class variable, 
second will perform following operation. If starting alphabet of the string is an vowel then 
you have to count all consonant and if it is consonant then you have to count all vowel.
*/
class vowels{
  
    public string: string = "";

    public setString(string: string): void {
        this.string = string;
    }
    public countVowelOrConsonant(): void {
        const vowels = "aeiouAEIOU";
        let count = 0;
        if (vowels.indexOf(this.string[0]) !== -1) {
            for (let i = 0; i < this.string.length; i++) {
                if (vowels.indexOf(this.string[i]) === -1) {
                    count++;
                }
            }
        } else {
            for (let i = 0; i < this.string.length; i++) {
                if (vowels.indexOf(this.string[i]) !== -1) {
                    count++;
                }
            }
        }
        console.log(`Count: ${count}`);
    }
}



