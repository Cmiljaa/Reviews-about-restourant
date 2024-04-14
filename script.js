class Recensions{
    constructor(reviews){
        this.reviews = reviews;
        this.img =  document.querySelector('img');
        this.name = document.querySelector('#name');
        this.job = document.querySelector('#job');
        this.recension = document.querySelector('#recension');
        this.index = 0;
        this.set();
        this.eventListeners();
    }

    set(){
        this.img.src = this.reviews[this.index].imgsrc;
        this.name.innerHTML = this.reviews[this.index].name;
        this.job.innerHTML = this.reviews[this.index].job;
        this.recension.innerHTML = this.reviews[this.index].recension;
    } 

    eventListeners(){

    document.querySelector('#lbtn').addEventListener('click', () =>{
        this.index--;
        this.index =  (this.index < 0) ? this.reviews.length-1 : this.index;
        this.set(this.index);
    })

    document.querySelector('#rbtn').addEventListener('click', () =>{
        this.index++;
        this.index = (this.index > this.reviews.length-1) ? 0 : this.index;
        this.set(this.index);
    })
    }
}