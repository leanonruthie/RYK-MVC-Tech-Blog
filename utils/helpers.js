// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY HH:mm
      return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };
  