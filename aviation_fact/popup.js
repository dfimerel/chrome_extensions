document.addEventListener('DOMContentLoaded', () => {
    const factElement = document.getElementById('fact');
    const newFactButton = document.getElementById('newFact');
  
    fetch('facts.json')
      .then(response => response.json())
      .then(data => {
        const facts = data.aviation_facts;
  
        function showRandomFact() {
          const randomIndex = Math.floor(Math.random() * facts.length);
          factElement.textContent = facts[randomIndex];
        }
  
        newFactButton.addEventListener('click', showRandomFact);
        showRandomFact();
      })
      .catch(error => {
        factElement.textContent = 'Error loading facts.';
        console.error('Error fetching facts:', error);
      });
  });
  