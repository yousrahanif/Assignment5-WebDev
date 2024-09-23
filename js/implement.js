function getIdByFunction(id){
    return document.getElementById(id)
}

function getInputValue(id){
    return parseFloat(document.getElementById(id).innerText);
}
function colorSwap(originalBtn, btn, addColor, removeColor){
    btn.classList.remove(addColor)
    btn.classList.add(removeColor)
    originalBtn.classList.add(addColor)
    originalBtn.classList.remove(removeColor)
}


const historyTab=getIdByFunction('btn-history')
const donationTab= getIdByFunction('btn-donation')
historyTab.addEventListener('click', function(){
//     donationTab.classList.remove('bg-blue-300')
//     donationTab.classList.add('bg-base-100')
//    historyTab.classList.add('bg-blue-300')
//    historyTab.classList.remove('bg-base-100')
colorSwap(historyTab,donationTab, 'bg-blue-300', 'bg-gray-100')
  
})

donationTab.addEventListener('click', function(){
    colorSwap(donationTab,historyTab,'bg-blue-300', 'bg-gray-100')
})

