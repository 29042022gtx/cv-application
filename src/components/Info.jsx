function Info({ title, content }) {
  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>{title}: </div>
      <div style={{ minHeight: '1em' }}>{content}</div>
    </div>
  );
}

export { Info };
