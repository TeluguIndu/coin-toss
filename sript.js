document.getElementById('tossButton').addEventListener('click', function() {
    // Generate a random number: 0 or 1
    const toss = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    // Display the result
    document.getElementById('result').innerText = `Result: ${toss}`;
});
