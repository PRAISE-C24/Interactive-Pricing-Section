
//Dom elements
const range = document.querySelector('#range');
const checkBox = document.querySelector('#switch');
const pageViews = document.querySelector('.pageviews');
const cost =document.querySelector('.cost');

//key component
let amount;
let pageView;
let billing = 'monthly';

//checking for range
function calRange(num){
    if(num <= 20){
        amount = 8;
        pageView= '10k pageviews';
    }else if(num > 20 && num <= 40){
        amount = 12;
        pageView= '50k pageviews';
    }else if(num > 40 && num <= 60){
        amount = 16;
        pageView= '100k pageviews';
    }else if(num > 60 && num <= 80){
        amount = 24;
        pageView= '500k pageviews';
    }else if(num > 80) {
        amount = 36;
        pageView= '1m pageviews';
    }
}

//discount function
function discount(num){
    discountAmount = num - (num/100) * 25
 cost.textContent = `\$${discountAmount}.00`;  
}

//checking for billing
checkBox.addEventListener('change', (e) => {
    if(e.target.checked){
        billing = 'yearly'
    }else{ billing = 'monthly'}
})

//setting cost, page view and range background
range.addEventListener('input', () => {
    const input = range.value;

    let color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${input}%, hsl(224, 65%, 95%)  ${input}%)`
    range.style.background = color;

    calRange(input)
    pageViews.textContent = pageView;

    if(billing == 'monthly'){
        cost.textContent = `\$${amount}.00`;  
    }else{ discount(amount)}
})