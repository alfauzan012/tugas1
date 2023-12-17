function klikForm () {

    objPesan = {
        namaDepan : document.getElementById("f-name").value,
        namaBelakang : document.getElementById("l-name").value,
        email : document.getElementById("email").value,
        subjek : document.getElementById("subjek").value,
        pesan : document.getElementById("pesan").value,

    }

    const message = [
      
    ];

    message.push(objPesan);
    // console.log(message)

    const arrPesan = message.map((pesan)=>{
        return "Nama Depan : " + pesan.namaDepan + "<br>" + "<br>" + "Nama Belakang : " + pesan.namaBelakang + "<br>" + "<br>" + "Email : " + pesan.email + "<br>" + "<br>" + "Subjek : " + pesan.subjek + "<br>" + "<br>" + "Pesan : " + pesan.pesan
    })
    

    alert("Pesan Berhasil Terkirim atas nama " + objPesan.namaBelakang);

    document.getElementById("popup").style.visibility = "visible"
    document.getElementById("popup").innerHTML = arrPesan
    
    setTimeout(()=> (document.getElementById("popup").style.visibility = "hidden"), 3000)
    setTimeout(()=> (window.location = "contact.html"), 3000)


    
}