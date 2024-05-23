const contacts = require('./contacts')

const main = async ( ) => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama Anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan email Anda : ');
    const noHP = await contacts.tulisPertanyaan('Masukkan No HP Anda : ');
    
    contacts.simpanContact(nama, email, noHP);
};

main();