function copyNumber(num) {
    let textArea = document.createElement("textarea");
    textArea.value = num;
    
    document.body.appendChild(textArea);
    
    textArea.select();
    
    document.execCommand("copy");
    
    document.body.removeChild(textArea);
}

