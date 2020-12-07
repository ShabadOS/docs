---
title: Gurmukhi Utils
slug: /
---

Gurmukhi Utils is a library for converting, analyzing, and testing gurmukhi strings. [Try `gurmukhi-utils` in your browser.](https://npm.runkit.com/gurmukhi-utils)

## Usage

Gurmukhi Utils is available as the [`gurmukhi-utils` package](https://npmjs.org/package/gurmukhi-utils) on [npm](https://www.npmjs.com/).

Additionally, the package is available for web use via [unpkg CDN](https://unpkg.com/):

```
<script src="https://unpkg.com/gurmukhi-utils"></script>
```

## People

The original author and current lead maintainer of Gurmukhi Utils is Harjot Singh ([@harjot1singh](https://github.com/harjot1singh)).

"Thank you!" to [all the volunteers](https://github.com/shabados/gurmukhi-utils/graphs/contributors) who've already contributed to Gurmukhi Utils. Additional thanks to:

- Preetcharan S ([@NerdSingh](https://www.instagram.com/nerdsingh/)) and Basics of Sikhi for english pronunciation guidelines
- Dr. Gurpreet S Lehal (Punjabi University, Patiala) for his work in Gurmukhi-Hindi (Devanagri) and Gurmukhi-Shahmukhi (Urdu) transliteration

## API

### countSyllables(text) ⇒ <code>number</code>

Calculates the number of syllables according to Sanskrit prosody, Pingala, Matra/Meter/Morae

**Returns**: <code>number</code> - An integer adding up all the 1's (laghu/light/short) and 2's (guru/heavy/long).

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| text  | <code>String</code> | The string to analyze |

**Example**

```js
countSyllables('ਪ੍ਰਭੂ ਪ੍ਰੇਮੀ ਪੜ੍ਹ ਚੜ੍ਹ ਦ੍ਵੈਤ')
// expected output: 14
```

### firstLetters(line) ⇒ <code>String</code>

Generates the first letters for a unicode Gurmukhi,
Hindi transliteration, or English transliteration string.
Includes any end-word vishraams, and line-end characters.

**Returns**: <code>String</code> - The first letters of each word in the provided Gurmukhi line.

| Param | Type                | Description                                 |
| ----- | ------------------- | ------------------------------------------- |
| line  | <code>String</code> | The line to generate the first letters for. |

**Example** _(Gurmukhi first letters)_

```js
firstLetters('ਸਬਦਿ ਮਰੈ. ਸੋ ਮਰਿ ਰਹੈ; ਫਿਰਿ. ਮਰੈ ਨ, ਦੂਜੀ ਵਾਰ ॥') // => ਸਮ.ਸਮਰ;ਫ.ਮਨ,ਦਵ॥
```

**Example** _(Hindi first letters)_

```js
firstLetters('गुरमुखि लाधा मनमुखि गवाइआ ॥') // => गलमग॥
```

**Example** _(English first letters)_

```js
firstLetters('sabad marai. so mar rahai; fir. marai na, doojee vaar |') // => sm.smr;f.mn,dv|
```

### isGurmukhi(text, [exhaustive]) ⇒ <code>boolean</code>

Checks if first char in string is part of the Gurmukhi Unicode block.

**Returns**: <code>boolean</code> - True if Unicode Gurmukhi, false if other.

| Param        | Type                 | Description                                                |
| ------------ | -------------------- | ---------------------------------------------------------- |
| text         | <code>String</code>  | The text to check.                                         |
| [exhaustive] | <code>boolean</code> | If `true`, checks if the whole string is Unicode Gurmukhi. |

**Example**

```js
isGurmukhi('ਗੁਰਮੁਖੀ') // => true
isGurmukhi('gurmuKI') // => false
```

### stripAccents(text) ⇒ <code>String</code>

Removes accents from ASCII/Unicode Gumrukhi letters with their base letter.
Useful for generalising search queries.

**Returns**: <code>String</code> - A simplified version of the provided Gurmukhi string.

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| text  | <code>String</code> | The text to convert. |

**Example**

```js
stripAccents('ਜ਼ਫ਼ੈਸ਼ਸਓ') // => ਜਫੈਸਸੳ
stripAccents('Z^Svb') // => gKsvb
```

### stripEndings(text) ⇒ <code>String</code>

Strips line endings from any Gurmukhi or translation string.
Accepts both Unicode and ASCII input.
Useful for generating accurate first letters or modifying non-Gurbani for better display.
_Not_ designed for headings or Sirlekhs.

**Returns**: <code>String</code> - A ending-less version of the text.

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| text  | <code>String</code> | The text to stip endings from. |

**Example** _(Line ending phrases)_

```js
stripEndings('ਸੋ ਘਰੁ ਰਾਖੁ; ਵਡਾਈ ਤੋਇ ॥੧॥ ਰਹਾਉ ॥') // => ਸੋ ਘਰੁ ਰਾਖੁ; ਵਡਾਈ ਤੋਇ
stripEndings('ਹੁਕਮੁ ਪਛਾਣਿ; ਤਾ ਖਸਮੈ ਮਿਲਣਾ ॥੧॥ ਰਹਾਉ ਦੂਜਾ ॥') // => ਹੁਕਮੁ ਪਛਾਣਿ; ਤਾ ਖਸਮੈ ਮਿਲਣਾ
stripEndings('ਜਨ ਨਾਨਕ. ਗੁਰਮੁਖਿ ਜਾਤਾ ਰਾਮ ॥੪॥੬॥ ਛਕਾ ੧ ॥') // => ਜਨ ਨਾਨਕ. ਗੁਰਮੁਖਿ ਜਾਤਾ ਰਾਮ
```

**Example** _(English Translations)_

```js
stripEndings('O Nanak, Forever And Ever True. ||1||') // => O Nanak, Forever And Ever True.
stripEndings('lush greenery. ||1||Pause||') // => lush greenery.
stripEndings('always I live within the Khalsa. 519') // => always I live within the Khalsa.
stripEndings('without your reminiscence.(1) (3)') // => without your reminiscence.
```

**Example** _(Spanish Translations)_

```js
stripEndings('ofrece su ser en sacrificio a Ti. (4-2-9)') // => ofrece su ser en sacrificio a Ti.
```

### stripVishraams(text, options) ⇒ <code>String</code>

Removes the specified vishraams from a string.

**Returns**: <code>String</code> - A vishraam-less Gurmukhi string.

| Param   | Type                | Description                               |
| ------- | ------------------- | ----------------------------------------- |
| text    | <code>String</code> | The text to remove vishraams from.        |
| options | <code>Object</code> | The vishraams to remove. Defaults to all. |

**Example** _(Text only, default options)_

```js
stripVishraams('ਸਬਦਿ ਮਰੈ. ਸੋ ਮਰਿ ਰਹੈ;') // => 'ਸਬਦਿ ਮਰੈ ਸੋ ਮਰਿ ਰਹੈ
stripVishraams('sbid mrY. so mir rhY; iPir.') // => sbid mrY so mir rhY iPir
```

**Example** _(Heavy vishraams only)_

```js
stripVishraams('sbid mrY. so mir rhY; iPir.', { heavy: true }) // => sbid mrY. so mir rhY iPir.
```

**Example** _(Medium vishrams only)_

```js
stripVishraams('Anhd sbd vjwey,', { medium: true }) // => Anhd sbd vjwey
```

**Example** _(Light vishrams only)_

```js
stripVishraams('sbid mrY. so mir rhY; iPir.', { light: true }) // => sbid mrY so mir rhY; iPir
```

### toAscii(text) ⇒ <code>String</code>

Converts Gurmukhi unicode text to ASCII, used GurmukhiAkhar font.

**Returns**: <code>String</code> - An ASCII representation of the provided unicode Gurmukhi string.

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| text  | <code>String</code> | The unicode text to convert. |

**Example**

```js
toAscii('ਹਮਾ ਸਾਇਲਿ ਲੁਤਫ਼ਿ ਹਕ ਪਰਵਰਸ਼ ॥') // => hmw swieil luqi& hk prvrS ]
toAscii('ਸੁ ਬੈਠਿ ਇਕੰਤ੍ਰ ॥੫੭੮॥') // => su bYiT iekMqR ]578]
```

### toEnglish(line) ⇒ <code>String</code>

Transliterates a line from Unicode Gurmukhi to english.
Currently supports the `,`, `;`, `.` vishraam characters.

**Returns**: <code>String</code> - The English transliteration of the provided Gurmukhi line.

| Param | Type                | Description                                 |
| ----- | ------------------- | ------------------------------------------- |
| line  | <code>String</code> | The Gurmukhi Unicode line to transliterate. |

**Example**

```js
toEnglish('ਹੁਕਮੀ ਹੁਕਮੁ ਚਲਾਏ ਰਾਹੁ ॥') // => hukamee hukam chalaae raahu ||
```

**Example**

```js
toEnglish('ਭਾਂਡਾ ਭਾਉ ਅੰਮ੍ਰਿਤੁ ਤਿਤੁ ਢਾਲਿ ॥') // => bhaa(n)ddaa bhaou anmrit tit dtaal ||
```

### toHindi(text) ⇒ <code>String</code>

Transliterates Unicode Gurmukhi text to Hindi (Devanagari script).

**Returns**: <code>String</code> - A Hindi transliteration of the provided Unicode Gurmukhi string.

| Param | Type                | Description                           |
| ----- | ------------------- | ------------------------------------- |
| text  | <code>String</code> | The Unicode Gurmukhi text to convert. |

**Example**

```js
toHindi('ਕੁਲ ਜਨ ਮਧੇ ਮਿਲੵੋਿ ਸਾਰਗ ਪਾਨ ਰੇ ॥') // => कुल जन मधे मिल्यो सारग पान रे ॥
toHindi('ਸੁ ਬੈਠਿ ਇਕੰਤ੍ਰ ॥੫੭੮॥') // => सु बैठ इकंत्र ॥५७८॥
```

### toShahmukhi(text) ⇒ <code>String</code>

Transliterates Unicode Gurmukhi text to the Shahmukhi script.

**Returns**: <code>String</code> - A Shahmukhi transliteration of the provided Unicode Gurmukhi string.

| Param | Type                | Description                           |
| ----- | ------------------- | ------------------------------------- |
| text  | <code>String</code> | The Unicode Gurmukhi text to convert. |

**Example**

```js
toShahmukhi('ਹਮਾ ਸਾਇਲਿ ਲੁਤਫ਼ਿ ਹਕ ਪਰਵਰਸ਼ ॥') // => هما ساِال لُتف هک پرورش ۔۔
toShahmukhi('ਸੁ ਬੈਠਿ ਇਕੰਤ੍ਰ ॥੫੭੮॥') // => سُ بَےٹھ ِاکںتر ۔۔۵۷۸۔۔
```

### toSyllabicSymbols(text) ⇒ <code>String</code>

Represents text in syllables according to Sanskrit prosody, Pingala, Matra/Meter/Morae

**Returns**: <code>String</code> - A syllabic representation of 1's (laghu/light/short) and 2's (guru/heavy/long).

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| text  | <code>String</code> | The string to convert |

**Example**

```js
toSyllabicSymbols('ਪ੍ਰਭੂ ਪ੍ਰੇਮੀ ਪੜ੍ਹ ਚੜ੍ਹ ਦ੍ਵੈਤ')
// expected output: '12 22 11 11 21'
```

### toUnicode(text) ⇒ <code>String</code>

Converts ASCII text used in the GurmukhiAkhar font to Unicode.

**Returns**: <code>String</code> - A unicode representation of the provided ASCII Gurmukhi string.

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| text  | <code>String</code> | The ASCII text to convert. |

**Example**

```js
toUnicode('kul jn mDy imil´o swrg pwn ry ]') // => ਕੁਲ ਜਨ ਮਧੇ ਮਿਲੵੋਿ ਸਾਰਗ ਪਾਨ ਰੇ ॥
toUnicode('su bYiT iekMqR ]578]') // => ਸੁ ਬੈਠਿ ਇਕੰਤ੍ਰ ॥੫੭੮॥
```
