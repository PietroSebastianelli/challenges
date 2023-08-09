/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
        const vowels = ['a','e','i','o','u','A','E','I','O','U'];
        const letterList = s.split('');
        const n = letterList.length;
        let vowelIndices = [];

        for (let i = 0; i < n; i++)
        {
            if(vowels.includes(letterList[i]))
                vowelIndices.push(i)
        }

        const m = vowelIndices.length;
        let i1,i2,tmp;

        for (let j = 0; j < m/2; j++)
        {
            i1 = vowelIndices[j];
            i2 = vowelIndices[m-1-j];
            tmp = letterList[i1];
            letterList[i1] = letterList[i2];
            letterList[i2] = tmp;         
        }
        return letterList.join('')


};

