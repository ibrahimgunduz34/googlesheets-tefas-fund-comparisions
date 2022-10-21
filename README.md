# Google Sheets TefasFundComparisions Fonksiyonu

**TefasFundComparisions** fonksiyonu TEFAS da islem goren yatirim fonlarina ait karsilastirma bilgilerini Google Sheets dokumanlariniza aktarmaniza olanak saglayan bir fonksiyondur.

## Nasil Kurulur ?

* Google Sheets dokumaninizda ust menusunde bulunan **Extensions**  (Eklentiler) menusunden App Script secenegine tiklayin.
* Acilan yeni penceredeki ust kisimdan projenize yeni bir isim verin
* sync-tefas.js dosyasinin icindeki betigi kopyalayip ekranin sag tarafindaki kodlama editorunun icine yapistirin
* Ustteki menude yeralan *Save Project* (Projeyi kaydet) butonuna basip yeni fonksiyonunuzu kaydedin.

## Nasil Kullanilir ?

Google Sheets dokumaninizin icindeki herhangibir hucrenin icine `=TefasFundComparisions()` fonksiyonunu yazin ve Enter tusuna basin.

Ayrica asagidaki bicimlerde de kullanarak bir veya daha fazla fonu filtreleyerek Google Sheets dokumaniniza aktarabilirsiniz.

* =TefasFundComparisions("MAC")
* =TefasFundComparisions("MAC", "TI3", "AES")

