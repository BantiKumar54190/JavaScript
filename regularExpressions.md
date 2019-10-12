# Regular Expressions 

> Regular expressions allow you to search patterns within haystacks of text. 
>Different languages have their own Regular expression processing engines.
> So, a regex written in JavaScript may not be exactly equal to the one written in PHP.

___

[Tokens](https://regex101.com/r/Ojh6ZI/1/)

A token is the smallest unit of a regular expression. It matches everything except line terminators.

- Line terminator for Windows - Carriage Return Line Feed (CRLF) `\r\n`
- Line terminator for Macintosh - Carriage Return (CR) `\r`
- Line terminator for Linux - Line Feed (LF) `\n`

___

[Digits](https://regex101.com/r/BZI5F6/2)

- Digits can be written as `\d` which will match exactly one digit between 0 to 9.
- To not match any digit we simply write `\D`.
___

[Whitespace](https://regex101.com/r/M5I1dW/2)

- Whitespaces can be matched using `\s` which will match any of these characters `\r\n\t\f\v`.
- To not match any whitespace we simply write `\S`.
___

[Character classes](https://regex101.com/r/9T03L8/1)

- Character classes give us more flexibility when compared to tokens.
- Using character classes we can escape certain characters which are ambiguous to the Regex Engine.
- Character classes provide an option to specify a list of characters where each character can be an option.

___

[Anchors](https://regex101.com/r/G7A22u/1)

- Anchors provide a way to specify a line that starts with certain pattern and ends with certain pattern.
- `^` signifies the start of the pattern in the line.
- `$` signifies the end of the pattern in the line.

___

[Negation](https://regex101.com/r/tEWr9H/1)

- Negation provides a way to negate the pattern and select everything else.
- `^` (Caret) when used inside of a character class before a token acts as negation of that token.
- E.g: `[^a+]+`
___

[Alternation](https://regex101.com/r/j29kef/1)

- Alternation provides a way to specify a logical **OR** between the pattern specified.
- Regex alternation can be written as:
`pattern1|pattern2|...|patternN`

___

[Quantifiers](https://regex101.com/r/Nd6e2b/1)

- Quantifiers allow you to specify a pattern repeating `n` number of times.
- Quantifiers are suffixed after a pattern.
- Quantifiers are written in curly braces specifying a lower and an upper bound.
- For.ex -> `[a-z]{1,2}`
- The upper bound of the quantifier is optional.
- For.ex -> `[a-z]{1,}` specifies the pattern with fixed lower bound and optional upper bound.
- If we don't specify lower bound then we are specifying exactly that many characters.
`[a-z]{2}` -> In this case it will match a pair 
- There exists a special category of quantifiers which need not be written with curly braces which include.
    1. `?` -> Indicating exactly `0` or `1` occurence of the pattern.
    2. `*` -> Indicating exactly `0` or more occurences of the pattern.
    3. `+` -> Indicating exactly `1` or more occurences of the pattern.

___

[Word Boundaries](https://regex101.com/r/Z7N2Z6/1)

- There exists scenarios where our pattern is **overlapping** within other substrings often resulting in erroneous matches, to avoid we use word boundaries to demarcate the pattern to avoid any ambiguity.

- This can be visualized as ->
`word1 pattern word2` where `word1 ` and ` word2` specifies the word boundaries.

- In regular expressions, word boundaries are denoted by the token `\b`.
Syntax -> `\b<Pattern>\b` (Where <pattern> is our pattern)

- To negate word boundaries and select everyhting else we use the token `\B`.
