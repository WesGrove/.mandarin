# Duolingo-Inspired CSS Style Guide

A modern, friendly CSS framework taking visual inspiration from Duolingo's approachable design language, optimized for markdown content and educational materials.

## Color Palette

### Primary Colors
```css
:root {
  /* Duolingo Green Family */
  --duo-green-primary: #58cc02;
  --duo-green-light: #89e219;
  --duo-green-dark: #3c8700;
  --duo-green-bg: #e8f5e8;
  
  /* Secondary Colors */
  --duo-blue: #1cb0f6;
  --duo-blue-light: #84d8ff;
  --duo-blue-dark: #0084c7;
  --duo-blue-bg: #e6f6ff;
  
  --duo-red: #ff4b4b;
  --duo-red-light: #ff7979;
  --duo-red-dark: #d63031;
  --duo-red-bg: #ffeaea;
  
  --duo-yellow: #ffc800;
  --duo-yellow-light: #ffd93d;
  --duo-yellow-dark: #e6ac00;
  --duo-yellow-bg: #fff8e1;
  
  /* Neutral Colors */
  --duo-gray-100: #f7f7f7;
  --duo-gray-200: #e5e5e5;
  --duo-gray-300: #afafaf;
  --duo-gray-400: #777777;
  --duo-gray-500: #4b4b4b;
  --duo-gray-900: #1f1f1f;
  
  --duo-white: #ffffff;
}
```

## Typography

### Font Stack
```css
body {
  font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--duo-gray-500);
  background-color: var(--duo-gray-100);
}
```

### Heading Hierarchy
```css
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  color: var(--duo-gray-900);
  margin-bottom: 0.75em;
  margin-top: 1.5em;
}

h1 {
  font-size: 2.5rem;
  color: var(--duo-green-primary);
  border-bottom: 3px solid var(--duo-green-light);
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 2rem;
  color: var(--duo-blue);
}

h3 {
  font-size: 1.5rem;
  color: var(--duo-gray-900);
}

h4 {
  font-size: 1.25rem;
  color: var(--duo-gray-500);
}
```

## Layout & Structure

### Container System
```css
.duo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.duo-content {
  background: var(--duo-white);
  border-radius: 16px;
  padding: 32px;
  margin: 24px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--duo-gray-200);
}
```

### Card Components
```css
.duo-card {
  background: var(--duo-white);
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
  border: 2px solid var(--duo-gray-200);
  transition: all 0.3s ease;
}

.duo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(88, 204, 2, 0.15);
  border-color: var(--duo-green-light);
}

.duo-card--success {
  border-color: var(--duo-green-primary);
  background: var(--duo-green-bg);
}

.duo-card--info {
  border-color: var(--duo-blue);
  background: var(--duo-blue-bg);
}

.duo-card--warning {
  border-color: var(--duo-yellow);
  background: var(--duo-yellow-bg);
}

.duo-card--error {
  border-color: var(--duo-red);
  background: var(--duo-red-bg);
}
```

## Markdown Elements

### Paragraphs & Text
```css
p {
  margin-bottom: 1.25em;
  font-size: 1rem;
  line-height: 1.7;
}

strong, b {
  font-weight: 700;
  color: var(--duo-gray-900);
}

em, i {
  font-style: italic;
  color: var(--duo-blue-dark);
}

mark {
  background: var(--duo-yellow-bg);
  color: var(--duo-gray-900);
  padding: 2px 4px;
  border-radius: 4px;
}
```

### Lists
```css
ul, ol {
  margin: 1em 0;
  padding-left: 1.5em;
}

li {
  margin-bottom: 0.5em;
  line-height: 1.6;
}

ul li::marker {
  color: var(--duo-green-primary);
  font-size: 1.2em;
}

ol li::marker {
  color: var(--duo-blue);
  font-weight: 700;
}
```

### Code & Pre-formatted Text
```css
code {
  background: var(--duo-gray-100);
  color: var(--duo-gray-900);
  padding: 2px 6px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  font-size: 0.9em;
  border: 1px solid var(--duo-gray-200);
}

pre {
  background: var(--duo-gray-900);
  color: var(--duo-white);
  padding: 20px;
  border-radius: 12px;
  overflow-x: auto;
  margin: 1.5em 0;
  border: 2px solid var(--duo-gray-300);
}

pre code {
  background: transparent;
  color: inherit;
  border: none;
  padding: 0;
}
```

### Blockquotes
```css
blockquote {
  background: var(--duo-blue-bg);
  border-left: 4px solid var(--duo-blue);
  padding: 16px 24px;
  margin: 1.5em 0;
  border-radius: 0 8px 8px 0;
  font-style: italic;
  position: relative;
}

blockquote::before {
  content: '"';
  font-size: 3rem;
  color: var(--duo-blue);
  position: absolute;
  top: -10px;
  left: 10px;
  font-family: Georgia, serif;
}

blockquote p {
  margin: 0;
  color: var(--duo-gray-900);
}
```

## Tables (Tabulator.info Inspired)

### Base Table Styling
```css
.duo-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--duo-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 2em 0;
}

.duo-table thead {
  background: var(--duo-green-primary);
  color: var(--duo-white);
}

.duo-table th {
  padding: 16px 20px;
  text-align: left;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--duo-green-dark);
}

.duo-table td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--duo-gray-200);
  transition: background-color 0.2s ease;
}

.duo-table tbody tr:hover {
  background: var(--duo-green-bg);
}

.duo-table tbody tr:last-child td {
  border-bottom: none;
}

/* Alternating row colors */
.duo-table tbody tr:nth-child(even) {
  background: var(--duo-gray-100);
}

.duo-table tbody tr:nth-child(even):hover {
  background: var(--duo-green-bg);
}
```

### Table Variants
```css
.duo-table--compact td,
.duo-table--compact th {
  padding: 8px 12px;
  font-size: 0.9rem;
}

.duo-table--striped tbody tr:nth-child(odd) {
  background: var(--duo-white);
}

.duo-table--bordered {
  border: 2px solid var(--duo-gray-200);
}

.duo-table--bordered th,
.duo-table--bordered td {
  border-right: 1px solid var(--duo-gray-200);
}

.duo-table--bordered th:last-child,
.duo-table--bordered td:last-child {
  border-right: none;
}
```

## Interactive Elements

### Links
```css
a {
  color: var(--duo-blue);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
}

a:hover {
  color: var(--duo-blue-dark);
  border-bottom-color: var(--duo-blue-light);
}

a:visited {
  color: var(--duo-gray-400);
}
```

### Buttons
```css
.duo-btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
}

.duo-btn--primary {
  background: var(--duo-green-primary);
  color: var(--duo-white);
  border-color: var(--duo-green-primary);
}

.duo-btn--primary:hover {
  background: var(--duo-green-dark);
  border-color: var(--duo-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(88, 204, 2, 0.3);
}

.duo-btn--secondary {
  background: var(--duo-white);
  color: var(--duo-green-primary);
  border-color: var(--duo-green-primary);
}

.duo-btn--secondary:hover {
  background: var(--duo-green-bg);
}
```

## Utility Classes

### Spacing
```css
.duo-mt-sm { margin-top: 0.5rem; }
.duo-mt-md { margin-top: 1rem; }
.duo-mt-lg { margin-top: 2rem; }
.duo-mt-xl { margin-top: 3rem; }

.duo-mb-sm { margin-bottom: 0.5rem; }
.duo-mb-md { margin-bottom: 1rem; }
.duo-mb-lg { margin-bottom: 2rem; }
.duo-mb-xl { margin-bottom: 3rem; }

.duo-p-sm { padding: 0.5rem; }
.duo-p-md { padding: 1rem; }
.duo-p-lg { padding: 2rem; }
.duo-p-xl { padding: 3rem; }
```

### Text Utilities
```css
.duo-text-center { text-align: center; }
.duo-text-left { text-align: left; }
.duo-text-right { text-align: right; }

.duo-text-success { color: var(--duo-green-primary); }
.duo-text-info { color: var(--duo-blue); }
.duo-text-warning { color: var(--duo-yellow-dark); }
.duo-text-error { color: var(--duo-red); }

.duo-text-sm { font-size: 0.875rem; }
.duo-text-lg { font-size: 1.125rem; }
.duo-text-xl { font-size: 1.25rem; }

.duo-font-bold { font-weight: 700; }
.duo-font-normal { font-weight: 400; }
```

### Background Utilities
```css
.duo-bg-success { background-color: var(--duo-green-bg); }
.duo-bg-info { background-color: var(--duo-blue-bg); }
.duo-bg-warning { background-color: var(--duo-yellow-bg); }
.duo-bg-error { background-color: var(--duo-red-bg); }
```

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 768px) {
  .duo-container {
    padding: 0 32px;
  }
  
  .duo-content {
    padding: 48px;
  }
  
  h1 { font-size: 3rem; }
  h2 { font-size: 2.25rem; }
}

@media (min-width: 1024px) {
  .duo-container {
    padding: 0 48px;
  }
  
  .duo-content {
    padding: 64px;
  }
}

/* Table Responsiveness */
@media (max-width: 767px) {
  .duo-table {
    font-size: 0.875rem;
  }
  
  .duo-table th,
  .duo-table td {
    padding: 12px 8px;
  }
}
```

## Animation & Transitions

### Smooth Interactions
```css
.duo-fade-in {
  animation: duoFadeIn 0.6s ease-out;
}

@keyframes duoFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.duo-bounce {
  animation: duoBounce 0.8s ease-out;
}

@keyframes duoBounce {
  0%, 20%, 60%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(-5px);
  }
}
```

## Usage Examples

### Basic Page Structure
```html
<div class="duo-container">
  <main class="duo-content">
    <h1>Welcome to Your Learning Journey</h1>
    <p>This is a paragraph with <strong>important information</strong> and <em>emphasized text</em>.</p>
    
    <div class="duo-card duo-card--success">
      <h3>Success Story</h3>
      <p>You've completed your daily goal!</p>
    </div>
  </main>
</div>
```

### Table Implementation
```html
<table class="duo-table">
  <thead>
    <tr>
      <th>Word</th>
      <th>Translation</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bonjour</td>
      <td>Hello</td>
      <td class="duo-text-success">Mastered</td>
    </tr>
  </tbody>
</table>
```

This CSS guideline provides a comprehensive foundation for creating educational content with Duolingo's friendly, approachable aesthetic while maintaining excellent readability and accessibility for digital books and linguistic references.