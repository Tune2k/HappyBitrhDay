// Thay đổi nội dung búc thư ở đây
var letterContent ="Chúc mừng sinh nhật em nhé! Cảm ơn em vì đã từng là một phần quan trọng trong những ngày tháng trước đây của anh. Dù bây giờ mỗi người có con đường riêng, nhưng anh vẫn luôn nhớ những kỷ niệm đáng yêu và vui vẻ mà tụi mình đã chia sẻ. Chúc em tuổi mới thật nhiều niềm vui, sức khỏe, và luôn hạnh phúc với những gì em chọn. Hãy tận hưởng ngày đặc biệt của mình thật vui vẻ nhé! Anh chỉ muốn chúc mừng sinh nhật em thôi đừng suy nghĩ nhiều nha.😊"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})