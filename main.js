let words = ['non', 'olma', 'aziza', 'Gul', 'mashina'];
let palindromes = [];
let notPalindromes = [];

// Palindromni tekshiruvchi funksiya
function isPalindrome(word) {
    // So'zni pastki registrga o'tkazamiz va uni teskarisiga o'giramiz
    let reversed = word.toLowerCase().split('').reverse().join('');
    // Agar teskarisi ham bir xil bo'lsa, bu palindrom
    return word.toLowerCase() === reversed;
}

// Har bir so'z uchun palindrom tekshiruvi
for (let word of words) {
    if (isPalindrome(word)) {
        palindromes.push(word);
    } else {
        notPalindromes.push(word);
    }
}

console.log("Palindromlar:", palindromes);
console.log("Palindrom bo'lmaganlar:", notPalindromes);
