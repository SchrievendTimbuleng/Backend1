//Members.js
const membersData = [
    { id: 1, nim: '12345', nama: 'Lukas Jonathan', nomorTelp: '08979520945' },
    { id: 2, nim: '12345', nama: 'Tengker Joshua', nomorTelp: '082192471841' },
    { id: 3, nim: '12345', nama: 'Manoppo Timothi', nomorTelp: '0895275012000' },
    { id: 4, nim: '12345', nama: 'Timbuleng Schrievend', nomorTelp: '089626368687' },
    { id: 4, nim: '12345', nama: 'Timbuleng Schrievend', nomorTelp: '081237829023' },
  ];
  
  function getMembers() {
    return membersData;
  }
  
  module.exports = {
    getMembers
  };