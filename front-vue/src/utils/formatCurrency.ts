export const formatCurrency = (value: string): string => {
  const formattedNumber = Number(value) / 100;
  const withNumbersAfterComma = formattedNumber.toFixed(2);
  const toBRLFormat = withNumbersAfterComma.replace(".", ",");

  return `R$ ${toBRLFormat}`;
};
