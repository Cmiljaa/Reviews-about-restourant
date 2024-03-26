let people = [
    {
        name: 'John Smith',
        imgsrc: '../img/1.png',
        job: 'MMA fighter',
        recension: 'The food at this restaurant was absolutely amazing! The ambiance was cozy and inviting, and the staff were very friendly and attentive. I highly recommend trying their signature dish, it was delicious!'
    },
    {
        name: 'Alice Wonderland',
        imgsrc: '../img/2.png',
        job: 'Teacher',
        recension: 'I was disappointed with my experience at this restaurant. The service was slow, and the food was mediocre at best. I expected better quality for the price.'
    },
    {
        name: 'Bob Miller',
        imgsrc: '../img/3.png',
        job: 'Construction Worker',
        recension: "What a gem of a restaurant! The flavors were bold and satisfying, and each dish was beautifully presented. The staff were knowledgeable and provided excellent recommendations. I can't wait to come back!"
    },
    {
        name: 'David Copperfield',
        imgsrc: '../img/4.png',
        job: 'Boxer',
        recension: "I had a wonderful dining experience at this restaurant. The atmosphere was lively, and the food exceeded my expectations. I particularly enjoyed the fresh seafood options. I will definitely be returning!"
    },
    {
        name: 'Eva Smith',
        imgsrc: '../img/5.png',
        job: 'Ex lawyer',
        recension: "This restaurant is a hidden gem! The food was fresh and flavorful, and the portion sizes were generous. The staff were attentive and made sure we had everything we needed. <br> I will definitely be recommending this place to friends and family."
    },
    {
        name: 'Emily Bronte',
        imgsrc: '../img/6.png',
        job: 'Writer',
        recension: "I was blown away by the creativity and execution of the dishes at this restaurant. Each bite was a burst of flavor, and the presentation was stunning. The staff were friendly <br> and knowledgeable about the menu. I can't wait to come back and try more!"
    },
    {
        name: 'Dragan Janković',
        imgsrc: '../img/7.png',
        job: 'Web Developer',
        recension: "This restaurant never disappoints! The food is consistently delicious, and the staff are always friendly and welcoming. It's one of my go-to spots for a great meal."
    }
];

const set = (index) => {
    document.querySelector('img').src = people[index].imgsrc;
    document.querySelector('#name').innerHTML = people[index].name;
    document.querySelector('#job').innerHTML = people[index].job;
    document.querySelector('#recension').innerHTML = people[index].recension;
}

let index = 0;
let lbutton = document.querySelector('#lbtn');
let rbutton = document.querySelector('#rbtn');

window.onload = set(index);

lbutton.addEventListener('click', () => {
    index--;
    if(index < 0)
        index = people.length-1;
    set(index);
})

rbutton.addEventListener('click', () => {
    index++;
    if(index > people.length-1)
        index = 0;
    set(index);
})