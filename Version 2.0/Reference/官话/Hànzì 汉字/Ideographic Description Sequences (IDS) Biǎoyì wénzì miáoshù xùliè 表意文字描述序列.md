High-level guide to the **⿰ ⿱ ⿲ ⿳ ⿴ ⿵ ⿶ ⿷ ⿸ ⿹ ⿺ ⿻** operators used in Mainland Chinese standards.

---

## 1. What these symbols are
- **Unicode IDS operators** (U+2FF0–U+2FFB).  
- They **encode the *layout template*** of a Hanzi: how two or more parts fit together inside the em-square.  
- They **do not encode** stroke order, sound, or meaning—only **relative position**.

---

## 2. The 12 operators and what they mean

| Operator | Glyph | Pronunciation hint | Layout description |
|----------|-------|--------------------|--------------------|
| ⿰ | LEFT–RIGHT | “two-column” | A ◁▷ B |
| ⿱ | TOP–BOTTOM | “two-row” | A △ B |
| ⿲ | LEFT–MIDDLE–RIGHT | “three-column” | A ◁◇▷ C |
| ⿳ | TOP–MIDDLE–BOTTOM | “three-row” | A △◇ B |
| ⿴ | FULL SURROUND | “box outside, content inside” | A ▢ B |
| ⿵ | SURROUND FROM TOP | “冂-shape hat” | A ⌒ B |
| ⿶ | SURROUND FROM BOTTOM | “U-shape base” | A ∪ B |
| ⿷ | SURROUND FROM LEFT | “匚-shape wall” | A ⊏ B |
| ⿸ | SURROUND FROM TOP-LEFT | “厂-shape roof” | A ┐ B |
| ⿹ | SURROUND FROM TOP-RIGHT | “勹-shape hook” | A ┌ B |
| ⿺ | SURROUND FROM BOTTOM-LEFT | “辶-shape tail” | A └ B |
| ⿻ | OVERLAY / CROSS | “X overlapped” | A ✚ B |

---

## 3. Reading direction
- Operators are **prefix**: the symbol comes first, then the parts.  
  Example: 好 = ⿰女子  
  1. ⿰ says “left-right”.  
  2. First child is 女 (left), second child is 子 (right).

---

## 4. Nesting rules
- Any part can itself be an IDS expression, allowing **recursive trees**.  
  Example: 树 = ⿰木⿱又寸  
  - Outermost ⿰: left 木, right block.  
  - Right block = ⿱又寸 (top 又, bottom 寸).

---

## 5. The “Whole” (Undecomposed) Case
- **There is no IDS operator for “whole”.**  
- When a glyph is **atomic or intentionally left undecomposed**, the IDS string simply omits any operator.  
  Example:  
  - 人 → no operator; treated as a single leaf.  
  - 日 → officially listed as “日” without ⿴口一, even though informal decompositions exist.  

Think of the *absence* of an operator as the **default / base case**: the entire glyph stands for itself.

---

## 6. Mainland Chinese norms
- **GB 18030** requires fonts to contain the 12 IDS characters, but the **IDS itself is informative**, not enforceable.  
- **《通用规范汉字表》** (2013) does **not** mandate IDS, but the accompanying **Unihan data** and **教育部 stroke-order files** use IDS for decomposition.  
- **教育类出版物** (textbooks, children’s dictionaries) are **encouraged** to print IDS strings under each head entry to help decomposition literacy.

---

## 7. Quick reference card (copy-paste)

```
⿰  ⿱  ⿲  ⿳  ⿴  ⿵  ⿶  ⿷  ⿸  ⿹  ⿺  ⿻
```

Use them in plain text, CSS `content`, or SVG `<tspan>` to show the template without drawing a picture.