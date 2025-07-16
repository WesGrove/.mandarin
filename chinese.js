// Flashcard Data
        const flashcardData = {
            basics: {
                strokes: [
                    { character: '一', stroke: 'Horizontal (横 héng)', order: 'Left to right →', example: '一 (yī) - one' },
                    { character: '丨', stroke: 'Vertical (竖 shù)', order: 'Top to bottom ↓', example: '十 (shí) - ten' },
                    { character: '丿', stroke: 'Left-falling (撇 piě)', order: 'Top-right to bottom-left ↙', example: '人 (rén) - person' },
                    { character: '丶', stroke: 'Dot (点 diǎn)', order: 'Top to bottom', example: '我 (wǒ) - I/me' },
                    { character: '㇏', stroke: 'Right-falling (捺 nà)', order: 'Top-left to bottom-right ↘', example: '大 (dà) - big' }
                ],
                radicals: [
                    { character: '人', pinyin: 'rén', meaning: 'person', examples: '你, 他, 们' },
                    { character: '水', pinyin: 'shuǐ', meaning: 'water', examples: '河, 海, 湖' },
                    { character: '火', pinyin: 'huǒ', meaning: 'fire', examples: '热, 烧, 灯' },
                    { character: '木', pinyin: 'mù', meaning: 'tree', examples: '林, 森, 枝' },
                    { character: '心', pinyin: 'xīn', meaning: 'heart', examples: '想, 思, 念' }
                ],
                structure: [
                    { character: '好', structure: 'Left-Right (左右)', components: '女 + 子', meaning: 'good' },
                    { character: '明', structure: 'Left-Right (左右)', components: '日 + 月', meaning: 'bright' },
                    { character: '安', structure: 'Top-Bottom (上下)', components: '宀 + 女', meaning: 'peace' },
                    { character: '国', structure: 'Enclosure (包围)', components: '囗 + 玉', meaning: 'country' }
                ]
            },
            hsk1: {
                pronouns: [
                    { character: '我', pinyin: 'wǒ', meaning: 'I, me' },
                    { character: '你', pinyin: 'nǐ', meaning: 'you' },
                    { character: '他', pinyin: 'tā', meaning: 'he, him' },
                    { character: '她', pinyin: 'tā', meaning: 'she, her' },
                    { character: '我们', pinyin: 'wǒmen', meaning: 'we, us' }
                ],
                numbers: [
                    { character: '一', pinyin: 'yī', meaning: 'one' },
                    { character: '二', pinyin: 'èr', meaning: 'two' },
                    { character: '三', pinyin: 'sān', meaning: 'three' },
                    { character: '四', pinyin: 'sì', meaning: 'four' },
                    { character: '五', pinyin: 'wǔ', meaning: 'five' }
                ],
                nouns: [
                    { character: '家', pinyin: 'jiā', meaning: 'home, family' },
                    { character: '学校', pinyin: 'xuéxiào', meaning: 'school' },
                    { character: '朋友', pinyin: 'péngyou', meaning: 'friend' },
                    { character: '老师', pinyin: 'lǎoshī', meaning: 'teacher' },
                    { character: '学生', pinyin: 'xuésheng', meaning: 'student' }
                ],
                verbs: [
                    { character: '是', pinyin: 'shì', meaning: 'to be (am, is, are)' },
                    { character: '有', pinyin: 'yǒu', meaning: 'to have' },
                    { character: '看', pinyin: 'kàn', meaning: 'to look, to see' },
                    { character: '吃', pinyin: 'chī', meaning: 'to eat' },
                    { character: '喝', pinyin: 'hē', meaning: 'to drink' }
                ],
                adjectives: [
                    { character: '好', pinyin: 'hǎo', meaning: 'good' },
                    { character: '大', pinyin: 'dà', meaning: 'big' },
                    { character: '小', pinyin: 'xiǎo', meaning: 'small' },
                    { character: '多', pinyin: 'duō', meaning: 'many, much' },
                    { character: '少', pinyin: 'shǎo', meaning: 'few, little' }
                ]
            },
            hsk2: {
                adverbs: [
                    { character: '非常', pinyin: 'fēicháng', meaning: 'very' },
                    { character: '已经', pinyin: 'yǐjīng', meaning: 'already' },
                    { character: '一起', pinyin: 'yìqǐ', meaning: 'together' },
                    { character: '再', pinyin: 'zài', meaning: 'again' },
                    { character: '就', pinyin: 'jiù', meaning: 'at once' }
                ],
                conjunctions: [
                    { character: '因为', pinyin: 'yīnwèi', meaning: 'because' },
                    { character: '所以', pinyin: 'suǒyǐ', meaning: 'so' },
                    { character: '但是', pinyin: 'dànshì', meaning: 'but' },
                    { character: '和', pinyin: 'hé', meaning: 'and' }
                ],
                verbs: [
                    { character: '找', pinyin: 'zhǎo', meaning: 'to find, to look for' },
                    { character: '给', pinyin: 'gěi', meaning: 'to give' },
                    { character: '等', pinyin: 'děng', meaning: 'to wait' },
                    { character: '让', pinyin: 'ràng', meaning: 'to let' },
                    { character: '送', pinyin: 'sòng', meaning: 'to send, to deliver' }
                ]
            }
        };
        
// Add this right after your flashcardData declaration
function setupTiltEffects() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && (node.classList.contains('flashcard') || 
                    node.querySelector('.flashcard'))) {
                    addTiltEffect(node.classList.contains('flashcard') ? node : node.querySelector('.flashcard'));
                }
            });
        });
    });

    // Observe all flashcard containers
    document.querySelectorAll('.flashcard-container').forEach(container => {
        observer.observe(container, { childList: true, subtree: true });
    });

    // Initialize existing flashcards
    document.querySelectorAll('.flashcard').forEach(card => {
        addTiltEffect(card);
    });
}

function addTiltEffect(card) {
    if (card._tiltEnabled) return;
    card._tiltEnabled = true;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;
        
        card.style.setProperty('--rotate-x', `${rotateX}deg`);
        card.style.setProperty('--rotate-y', `${rotateY}deg`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotate-x', '0deg');
        card.style.setProperty('--rotate-y', '0deg');
    });
}

// Initialize the tilt effects when the page loads
document.addEventListener('DOMContentLoaded', setupTiltEffects);

// Also call it after your updateFlashcard function
function updateFlashcard(section) {
    // ... (your existing updateFlashcard code)
    
    // Initialize tilt effects for the new card
    setTimeout(() => {
        const card = document.querySelector(`#${section}-flashcards .flashcard`);
        if (card) addTiltEffect(card);
    }, 10);
}

// Current state for each section
const flashcardState = {
    basics: { current: 0, category: 'strokes' },
    hsk1: { current: 0, category: 'pronouns' },
    hsk2: { current: 0, category: 'adverbs' }
};

// Navigation functionality
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.closest('.nav-section').dataset.section;
        const subsection = e.target.dataset.subsection;
        showContent(`${section}-${subsection}`);
    });
});

// Show content function
function showContent(contentId) {
    document.querySelectorAll('.section-content').forEach(content => {
        content.classList.remove('active');
    });
    const targetContent = document.getElementById(contentId);
    if (targetContent) {
        targetContent.classList.add('active');
    } else {
        document.getElementById('home').classList.add('active');
    }
}

// Flashcard navigation
function setupFlashcardNavigation(section) {
    const prevBtn = document.getElementById(`${section}-prev`);
    const nextBtn = document.getElementById(`${section}-next`);
    const categorySelect = document.getElementById(`${section}-category`);

    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => navigateFlashcard(section, -1));
    nextBtn.addEventListener('click', () => navigateFlashcard(section, 1));
    
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            flashcardState[section].category = e.target.value;
            flashcardState[section].current = 0;
            updateFlashcard(section);
        });
    }
}

function navigateFlashcard(section, direction) {
    const state = flashcardState[section];
    const category = state.category;
    const cards = flashcardData[section][category];
    
    if (!cards) return;

    state.current += direction;
    
    if (state.current < 0) state.current = cards.length - 1;
    if (state.current >= cards.length) state.current = 0;
    
    updateFlashcard(section);
}

function updateFlashcard(section) {
    const state = flashcardState[section];
    const category = state.category;
    const cards = flashcardData[section][category];
    
    if (!cards || cards.length === 0) return;
    
    const card = cards[state.current];
    const container = document.querySelector(`#${section}-flashcards .flashcard-container`);
    
    if (!container) return;

    let flashcardHTML = '';
    
    if (section === 'basics') {
        if (category === 'strokes') {
            flashcardHTML = `
                <div class="flashcard active" data-category="${category}">
                    <div class="card-header" style="background-color: #9b59b6;">基础 Basics</div>
                    <div class="character-display">${card.character}</div>
                    <div class="info-section">
                        <div class="info-label">Stroke Type:</div>
                        <div class="info-content">${card.stroke}</div>
                    </div>
                    <div class="info-section">
                        <div class="info-label">Stroke Order:</div>
                        <div class="info-content">${card.order}</div>
                    </div>
                    <div class="info-section">
                        <div class="info-label">Example:</div>
                        <div class="info-content">${card.example}</div>
                    </div>
                </div>
            `;
        } else if (category === 'radicals') {
            flashcardHTML = `
                <div class="flashcard active" data-category="${category}">
                    <div class="card-header" style="background-color: #9b59b6;">基础 Basics</div>
                    <div class="character-display">${card.character}</div>
                    <div class="info-section">
                        <div class="info-label">Pinyin:</div>
                        <div class="info-content">${card.pinyin}</div>
                    </div>
                    <div class="info-section">
                        <div class="info-label">Meaning:</div>
                        <div class="info-content">${card.meaning}</div>
                    </div>
                    <div class="info-section">
                        <div class="info-label">Examples:</div>
                        <div class="info-content">${card.examples}</div>
                    </div>
                </div>
            `;
        } else if (category === 'structure') {
            flashcardHTML = `
                <div class="flashcard active" data-category="${category}">
                    <div class="card-header" style="background-color: #9b59b6;">基础 Basics</div>
                    <div class="character-display">${card.character}</div>
                    <div class="info-section">
                        <div class="info-label">Structure:</div>
                        <div class="info-content">${card.structure}</div>
                    </div>
                    <div class="info-section">
                        <div class="info-label">Components:</div>
                        <div class="info-content">${card.components}</div>
                    </div>
                    <div class="info-section">
                        <div class="info-label">Meaning:</div>
                        <div class="info-content">${card.meaning}</div>
                    </div>
                </div>
            `;
        }
    } else {
        const colors = {
            hsk1: '#e74c3c',
            hsk2: '#e67e22',
            hsk3: '#f39c12',
            hsk4: '#27ae60',
            hsk5: '#3498db',
            hsk6: '#34495e'
        };
        
        flashcardHTML = `
            <div class="flashcard active" data-category="${category}">
                <div class="card-header" style="background-color: ${colors[section]};">HSK ${section.slice(-1)}</div>
                <div class="character-display">${card.character}</div>
                <div class="info-section">
                    <div class="info-label">Pinyin:</div>
                    <div class="info-content">${card.pinyin}</div>
                </div>
                <div class="info-section">
                    <div class="info-label">Meaning:</div>
                    <div class="info-content">${card.meaning}</div>
                </div>
                <div class="info-section">
                    <div class="info-label">Category:</div>
                    <div class="info-content">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = flashcardHTML;
    
    // Update progress
    const progress = document.getElementById(`${section}-progress`);
    if (progress) {
        progress.textContent = `${state.current + 1} / ${cards.length}`;
    }
}

// Initialize flashcard navigation
setupFlashcardNavigation('basics');
setupFlashcardNavigation('hsk1');
setupFlashcardNavigation('hsk2');

// Initialize first flashcards
updateFlashcard('basics');
updateFlashcard('hsk1');
updateFlashcard('hsk2');