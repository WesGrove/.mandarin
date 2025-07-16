# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chinese language learning web application that provides interactive flashcards and comprehensive tables for studying Chinese characters from basic strokes through HSK levels 1-6. The application features a single-page design with navigation between different learning sections.

## Architecture

### File Structure
- `index.html` - Landing/home page 
- `chinese.html` - Main application with all learning content (264KB+)
- `chinese.css` - Styling with 3D tilt effects and glossy card animations
- `chinese.js` - JavaScript functionality for flashcard navigation and interactivity
- `README.md` - Project todos and feature roadmap

### Core Components

**Navigation System**: Color-coded sections (Basics: purple, HSK1: red, HSK2: orange, etc.) with dropdown menus for Tables vs Flashcards subsections.

**Flashcard System**: Interactive 3D cards with tilt effects, glossy animations, and mouse-tracking. Each card displays Chinese characters with pinyin, meanings, and contextual information. Cards are organized by categories within each level.

**Data Structure**: Flashcard content is stored in `flashcardData` object in `chinese.js` with nested structure: `section -> category -> array of cards`. State management tracks current card position and selected category for each section.

**Visual Effects**: 
- 3D CSS transforms with mouse-tracking tilt effects
- Glossy shine animations on hover
- Color-coded themes for each HSK level
- Responsive card layouts with smooth transitions

## Current Features

- **Basics Section**: Basic strokes, common radicals, character structure
- **HSK 1**: Personal pronouns, numbers, common nouns, basic verbs, adjectives  
- **HSK 2**: Adverbs, conjunctions, verbs
- **Tables**: Reference tables for tones, consonants/initials, vowels/finals, vocabulary
- **Flashcards**: Interactive learning cards with navigation and category selection

## Development Notes

This is a static HTML/CSS/JS application with no build process, package management, or testing framework. All code is client-side and can be opened directly in a browser.

The application uses modern JavaScript features including CSS custom properties for dynamic styling, MutationObserver for DOM changes, and ES6+ syntax.

## Planned Features (from README)

- Audio support with multiple voice options
- Cultural immersion section with modern Chinese content
- Visual mnemonics that fade between characters and imagery
- Index section covering Chinese learning terminology
- Concise summaries for each learning component