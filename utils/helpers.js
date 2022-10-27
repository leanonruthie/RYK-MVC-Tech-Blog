// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// added hours and minutes as MM/DD/YYYY HH:mm in addition to existing Format date as MM/DD/YYYY 

module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };
  