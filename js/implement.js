//common functions

function getIdByFunction(id){
    return document.getElementById(id)
}

function getInputValue(id){
    return parseFloat(document.getElementById(id).value);
}
function getOtherValue(id){
    return parseFloat(document.getElementById(id).innerText);
}
function colorSwap(originalBtn, btn, addColor, removeColor){
    btn.classList.remove(addColor)
    btn.classList.add(removeColor)
    originalBtn.classList.add(addColor)
    originalBtn.classList.remove(removeColor)
}

function validationFunction(getId, haveId, totalId, titleId){
    let title = document.getElementById(titleId).innerText;
 let getValue = document.getElementById(getId).value.trim();
 if(isNaN(getValue) ||getValue==="" || parseFloat(getValue) < 0){
    alert('Enter Valid input');
    return
    }
    if(parseFloat(getValue) === 0){
        alert("0 Dollar? REALLY")
        return

    }
    getValue = parseFloat(getValue);

    let haveValue = getOtherValue(haveId);
    let totalValue = getOtherValue(totalId);

     if (getValue <=totalValue){
        document.getElementById('my_modal_4').showModal()

       
        haveValue+=getValue
        totalValue-=getValue
        document.getElementById(haveId).innerText = haveValue.toFixed(2);
        document.getElementById(totalId).innerText = totalValue.toFixed(2);
        const historyItem=document.createElement('div')
        historyItem.className="border border-solid border-black p-4 m-4 flex justify-center bg-green-100"
        historyItem.innerHTML=`
            <div>
                <p class="text-2xl"> ${getValue.toFixed(2)} Dollar is Donated for ${title}</p>
                <p class="text-2xl">Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} (EST)</p>
            </div>
        `
       
    document.getElementById('history-container').append(historyItem)
    document.getElementById(getId).value = '';
    }
    else{
        alert('Not Enough Money')
        return;
    }

}

const historyTab=getIdByFunction('btn-history')
const donationTab= getIdByFunction('btn-donation')
historyTab.addEventListener('click', function(){
//     donationTab.classList.remove('bg-green-300')
//     donationTab.classList.add('bg-base-100')
//    historyTab.classList.add('bg-green-300')
//    historyTab.classList.remove('bg-base-100')
colorSwap(historyTab,donationTab, 'bg-green-300', 'bg-gray-100')
document.getElementById('container').classList.add('hidden')
document.getElementById('history-container').classList.remove('hidden')


})

donationTab.addEventListener('click', function(){
    colorSwap(donationTab,historyTab,'bg-green-300', 'bg-gray-100')
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('container').classList.remove('hidden')

})

let currentValue=getOtherValue('total')
let noakhaliHave=getOtherValue('noaHave')


// const noakhaliSubmit=getIdByFunction('btn-noa')
// noakhaliSubmit.addEventListener('click', function(){

//     let noakhaliGet=getInputValue('noaGet')


//    if(noakhaliGet<0 || isNaN(noakhaliGet)){
//     alert('Enter Valid input')
//     return
//    }
//    else if(noakhaliGet <=currentValue){
//         noakhaliHave+=noakhaliGet
//         currentValue-=noakhaliGet
//     }
   
//     else{
//         alert('Not Enough Money')
//         return;
//     }
//     document.getElementById('total').innerText=currentValue.toFixed(2)
//     document.getElementById('noaHave').innerText=noakhaliHave.toFixed(2)

   
// })



const noakhaliSubmit=getIdByFunction('btn-noa')
noakhaliSubmit.addEventListener('click', function(){

   validationFunction('noaGet', 'noaHave', 'total','noaTitle')
   
})

document.getElementById('btn-feni').addEventListener('click', function(){

    validationFunction('feniGet','feniHave','total','feniTitle')

})

document.getElementById('btn-quota').addEventListener('click', function(){

    validationFunction('quotaGet','quotaHave','total','quotaTitle')

})

// const blogId=getIdByFunction('blog')
// blogId.addEventListener('click', function(){

//    getIdByFunction('home').classList.remove('hidden')
//    blogId.classList.add('hidden')
//    getIdByFunction('body').classList.add('hidden')
//    getIdByFunction('homeBody').classList.add('hidden')

// })

// const homeId=getIdByFunction('home')
// homeId.addEventListener('click', function(){


//     getIdByFunction('home').classList.add('hidden')
//     blogId.classList.remove('hidden');
//     getIdByFunction('body').classList.remove('hidden')

//     getIdByFunction('homeBody').classList.remove('hidden')


// })
