export class main{
    url="download.jpg"
    selectFile(event){
        if(event.target.files){
            var reader =new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (event: any) => {
                this.url = event.target.result
            }
        }
    }
}