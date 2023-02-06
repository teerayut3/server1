module.exports.getDate = getDate;
function getDate(){
     const dateOptions: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      }
       return new Date().toLocaleDateString('th-TH', dateOptions);
}