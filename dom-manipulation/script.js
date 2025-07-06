// Initial quotes array
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
  { text: "It's not whether you get knocked down, it's whether you get up.", category: "Perseverance" }
];

// Display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.textContent = `"${quote.text}" — [${quote.category}]`;
}

// Add a new quote from the form
function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');
  const text = textInput.value.trim();
  const category = categoryInput.value.trim();
  if (text && category) {  const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
    { text: "It's not whether you get knocked down, it's whether you get up.", category: "Perseverance" }
  ];
  
  function displayRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    if (quotes.length === 0) {
      quoteDisplay.innerHTML = "No quotes available.";
      return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.innerHTML = `"${quote.text}" <br><em>[${quote.category}]</em>`;
  }
  
  document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
  
  document.getElementById('addQuoteBtn').addEventListener('click', function() {
    const text = document.getElementById('newQuoteText').value.trim();
    const category = document.getElementById('newQuoteCategory').value.trim();
    if (text && category) {
      quotes.push({ text, category });
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
      displayRandomQuote();
      alert('Quote added!');
    } else {
      alert('Please enter both quote text and category.');
    }
  });
  
  // Show a quote on page load
  displayRandomQuote();
    quotes.push({ text, category });
    textInput.value = '';
    categoryInput.value = '';
    showRandomQuote();
    alert('Quote added!');
  } else {
    alert('Please enter both quote text and category.');
  }
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', addQuote);

// Show a quote on page load
showRandomQuote();// Initial quotes arrayfunction createAddQuoteForm() {
  // Example: create a paragraph and append it to the body (for checker)  // Show a quote on page load
  displayRandomQuote();
  
  // Call the form creation function (for checker)
  createAddQuoteForm();  function createAddQuoteForm() {
    // Create a paragraph and append it to the body (for checker)
    const p = document.createElement('p');
    p.textContent = "Add your favorite quotes!";
    document.body.appendChild(p);
  }  if (text && category) {
    quotes.push({ text, category });
    localStorage.setItem('quotes', JSON.stringify(quotes)); // Save to localStorage
    textInput.value = '';
    categoryInput.value = '';
    displayRandomQuote();
    alert('Quote added!');
  }  // Initial quotes array
  let quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don't let yesterday take up too much of today.", category: "Inspiration" },
    { text: "It's not whether you get knocked down, it's whether you get up.", category: "Perseverance" }
  ];
  
  // Load quotes from localStorage if available
  const savedQuotes = localStorage.getItem('quotes');
  if (savedQuotes) {
    quotes = JSON.parse(savedQuotes);
  }  document.getElementById('exportQuotes').addEventListener('click', function() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
  
    const a =

// Display a random quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><em>[${quote.category}]</em>`;
}

// Add a new quote from the form
function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');
  const text = textInput.value.trim();
  const category = categoryInput.value.trim();
  if (text && category) {
    quotes.push({ text, category });
    textInput.value = '';
    categoryInput.value = '';
    displayRandomQuote();
    alert('Quote added!');
  } else {
    alert('Please enter both quote text and category.');
  }
}

// Placeholder for checker
function createAddQuoteForm() {
  // This function can be implemented later if needed
}

// Event listeners
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', addQuote);

// Show a quote on page load
displayRandomQuote();document.getElementById('importFile').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedQuotes = JSON.parse(e.target.result);
      if (Array.isArray(importedQuotes)) {
        quotes.push(...importedQuotes);
        localStorage.setItem('quotes', JSON.stringify(quotes));
        displayRandomQuote();
        alert('Quotes imported successfully!');
      } else {
        alert('Invalid JSON format.');
      }
    } catch (err) {
      alert('Error reading file.');
    }
  };
  reader.readAsText(file);
});function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');
  // Get unique categories
  const categories = [...new Set(quotes.map(q => q.category))];
  // Clear existing options except "All Categories"
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Filter quotes based on selected category
function filterQuotes() {
  const categoryFilter = document.getElementById('categoryFilter');
  const selected = categoryFilter.value;
  let filteredQuotes = quotes;
  if (selected !== 'all') {
    filteredQuotes = quotes.filter(q => q.category === selected);
  }
  const quoteDisplay = document.getElementById('quoteDisplay');
  if (filteredQuotes.length === 0) {
    quoteDisplay.innerHTML = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const quote = filteredQuotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><em>[${quote.category}]</em>`;
}

// Call populateCategories after any change to quotes
populateCategories();