const formateDate = ( originalDate: string ): string => {
  const date: string = new Date(originalDate.split('T')[0]).toLocaleDateString();
  return date;
} 

export default formateDate;