<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>

function generatePDFInvoice() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título y logo
    doc.setFontSize(16);
    doc.text("Winning Team", 20, 20);

    // Datos de la factura
    doc.setFontSize(12);
    doc.text("RNC: 430017922", 20, 30);
    doc.text("Empleado: Joselito Gonzalezzz", 20, 40);

    // Encabezado de tabla
    let startY = 50;
    doc.setFontSize(10);
    doc.text("Cantidad", 20, startY);
    doc.text("Descripción", 60, startY);
    doc.text("Precio Unitario", 120, startY);
    doc.text("Total", 160, startY);

    // Productos
    const items = [
        { quantity: 5, description: "Cerveza Grande Light", unitPrice: 180.00, total: 900.00 },
        { quantity: 2, description: "Cerveza Mediana", unitPrice: 150.00, total: 300.00 },
        { quantity: 5, description: "Jugo Mott Grande", unitPrice: 250.00, total: 1250.00 },
        { quantity: 1, description: "Ron Extra Viejo 700ml", unitPrice: 610.00, total: 610.00 },
    ];

    let totalWithoutDiscount = 3060.00;
    let discount = 150.00;
    let totalWithDiscount = 2910.00;
    let y = startY + 10;

    items.forEach(item => {
        doc.text(String(item.quantity), 20, y);
        doc.text(item.description, 60, y);
        doc.text(`RD$${item.unitPrice.toFixed(2)}`, 120, y, { align: "right" });
        doc.text(`RD$${item.total.toFixed(2)}`, 160, y, { align: "right" });
        y += 10;
    });

    // Totales
    doc.text("Total sin descuento", 120, y, { align: "right" });
    doc.text(`RD$${totalWithoutDiscount.toFixed(2)}`, 160, y, { align: "right" });
    y += 10;
    doc.text("Descuento", 120, y, { align: "right" });
    doc.text(`RD$${discount.toFixed(2)}`, 160, y, { align: "right" });
    y += 10;
    doc.text("Total con descuento", 120, y, { align: "right" });
    doc.text(`RD$${totalWithDiscount.toFixed(2)}`, 160, y, { align: "right" });

    // Método de Pago y razón del descuento
    y += 20;
    doc.text("Método de Pago: Tarjeta", 20, y);
    y += 10;
    doc.text("Razón del Descuento:", 20, y);
    y += 10;
    doc.text("Le debía 150 pesos en vdd él me arregló la maldita estufa de mi casa.", 20, y);

    // Guardar y abrir PDF
    doc.save("factura_winning_team.pdf");
}


<button onclick="generatePDFInvoice()">Generar e Imprimir Factura</button>

function generatePDFInvoice() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    // (Contenido del PDF aquí...)
    const pdfBlob = doc.output("blob");
    const pdfURL = URL.createObjectURL(pdfBlob);
    const pdfWindow = window.open(pdfURL);
    pdfWindow.print();
}
