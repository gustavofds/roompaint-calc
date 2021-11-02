const renderPaintStr = (paintNeeded, bucketSize) => {
  if (paintNeeded === 0) return '';

  const pluralStr = paintNeeded > 1 ? 's' : '';

  return `<li>${paintNeeded} lata${pluralStr} de ${bucketSize}</li>`;
};

const renderResults = (data) => {
  document.getElementsByTagName('body')[0].innerHTML = `
  <h3>Resultados:</h3>
  <p>Área útil a ser pintada: ${data.totalPaintableArea.toFixed(2)} m²</p>
  <p>Latas de tinta necessárias:</p>
  <ul>    
    ${renderPaintStr(data.paintNeeded.gal18, '18 L')}
    ${renderPaintStr(data.paintNeeded.gal3d6, '3,6 L')}
    ${renderPaintStr(data.paintNeeded.gal2d5, '2,5 L')}
    ${renderPaintStr(data.paintNeeded.gal0d5, '0,5 L')}
  </ul>
  `;
};

export default renderResults;
