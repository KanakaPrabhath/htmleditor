/**
 * Development utility to reset the editor state
 * Run this in the browser console: resetEditor()
 */

window.resetEditor = function() {
  // Clear localStorage
  localStorage.clear();
  
  // Reload the page
  window.location.reload();
  
  console.log('Editor reset complete!');
};

console.log('Reset utility loaded. Run resetEditor() to clear all data and reload.');
