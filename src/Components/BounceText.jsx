/* BounceText
   Splits a string into letters so each one springs up on its own, then
   jumps again when hovered. It carries data-scroll-reveal, so your existing
   observeElements() adds the "reveal" class when it scrolls into view.

   Props
   - text   the words to animate
   - as     element to render (h1, h2, h3, span ...) - default span
   - delay  extra ms before the first letter starts - default 0 */
export default function BounceText({ text, as: Tag = 'span', className = '', delay = 0 }) {
  let letterIndex = 0;

  return (
    <Tag className={`bounce ${className}`.trim()} data-scroll-reveal>
      {/* Screen readers read this; the animated letters below are hidden from them */}
      <span className="sr-only">{text}</span>

      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} aria-hidden="true">
          {wordIndex > 0 && ' '}
          {/* Each word stays in one piece so lines never break mid-word */}
          <span className="bounce-word">
            {[...word].map((char, i) => (
              <span
                key={i}
                className="bounce-char"
                style={{ '--d': `${delay + letterIndex++ * 45}ms` }}
              >
                {char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </Tag>
  );
}