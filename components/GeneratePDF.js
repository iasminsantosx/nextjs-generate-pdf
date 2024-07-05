import jsPDF from 'jspdf'
import 'jspdf-autotable'

const  addCenteredText = (doc, text, y) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const textWidth = doc.getTextWidth(text);
  const x = (pageWidth - textWidth) / 2;
  doc.text(x, y, text);
}

const addTextToRightMargin = (doc, text, margin, y) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
  const x = pageWidth - margin - textWidth;
  doc.text(x, y, text);
}
export default function GeneratePDF({ person }) {

  function generate() {
    const doc = new jsPDF()

    addCenteredText(doc, 'RELATÓRIO DE PROJETO DE DOSAGEM SUPERPAVE', 20);
    addCenteredText(doc, '', 20);
    addCenteredText(doc, 'NOME DO PROJETO: Dosagem Superpave - Turma de Pavimentação', 50);
    addCenteredText(doc, 'DATA DE INÍCIO DO PROJETO: 20/04/2021', 60);
    addCenteredText(doc, 'RESPONSÁVEL PELO PROJETO: Turma de Pavimentação', 90);
    addCenteredText(doc, 'LABORATORIO RESPONSÁVEL: LEP', 110);
    addTextToRightMargin(doc, 'Do you like that?',20,140);
    doc.save('persons.pdf')
  }

  return (
    <div>
      <button onClick={generate} type="primary">Download PDF</button> 
    </div>
  )
}