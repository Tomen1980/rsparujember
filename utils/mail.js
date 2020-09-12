const ppid = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
 
    <div class="card" style="width: 500px; " >
        <div class="card-header" >
          PPID
        </div>
        <div class="card-body">
            <div class="alert alert-success" role="alert">
                Berhasil mengirim pada Rs Paru Paru
              </div>
          <p class="card-text">Terimakasih Telah mengirim laporan kepada kami,Secepatnya akan kami respon pelaporan anda!</p>
          <div class="card" style="width: 18rem;">
            <img src="data:image/png;base64,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" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Dengan anda mengirim PPID anda membantu menjunjung tinggi kejujuran dan wilayah bebas korupsi</p>
              <p>Lalu Bukti bukti yang terkumpulkan silahkan dikirim email ke simrspj@gmail.com dengan format dan langkah langkah dibawah</p>
            </div>
          </div>
          <a href="" class="btn btn-primary">Kunjungi Website</a>
        </div>
      </div>
</body>
</html>
`
const krisan = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
 
    <div class="card" style="width: 500px; " >
        <div class="card-header" >
         Kritik & Saran
        </div>
        <div class="card-body">
            <div class="alert alert-success" role="alert">
                Berhasil mengirim pada Rs Paru Paru
              </div>
          <p class="card-text">Terimakasih Telah mengirim kritik & saran kepada kami,Secepatnya akan kami respon pelaporan anda!</p>
          <div class="card" style="width: 18rem;">
          <img src="">
            <div class="card-body">
              <p class="card-text">Dengan anda mengirim kritik & saran anda membantu RS Paru Jember agar semakin maju dan berkembang dalam segala aspek</p>
            </div>
          </div>
          <a href="" class="btn btn-primary">Kunjungi Website</a>
        </div>
      </div>
</body>
</html>
`

module.exports = {
  ppid,
  krisan
}