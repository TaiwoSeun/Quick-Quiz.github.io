     var ul = document.getElementById('ul');
     var btn = document.getElementById('button');
     var scoreCard = document.getElementById('scoreCard');
     var quizBox = document.getElementById('questionBox');
 var op1 = document.getElementById('op1');
 var op3 = document.getElementById('op2');
 var op3 = document.getElementById('op3');
 var op4 = document.getElementById('op4');


        var app={
                   questions:[
                            {q:'Who was the best player in 2002 fifa world cup?',options:['Oliver Khan','Delima Ronaldo','Zinedine Zidane','Roberto Carlos'],answer:2},

                            {q:'what is the name of the capital city of lesotho?',options:['Maseru','Leribe','Mafeteng','Teyateyaneng'],answer:1},

                            {q:'who holds chelsea\'s highest goal scoring record?',options:['Didier Drogba','Kerry Dixon','Ron Harris','Frank Lamapard'],answer:4},

                            {q:'which state is the biggest by landmass in Nigeria?',options:['Oyo','Niger','Katsina','Kano'],answer:2},
                            
                            {q:'Which football stadium is the biggest',options:['Camp Nou','Maracana','Rungrado','Melbroune'],answer:3}
                            ],
                    index:0,
                    load:function(){
                            if(this.index <= this.questions.length-1){
                            quizBox.innerHTML = this.index+1+". "+this.questions[this.index].q;
                            op1.innerHTML = this.questions[this.index].options[0];
                            op2.innerHTML = this.questions[this.index].options[1];
                            op3.innerHTML = this.questions[this.index].options[2];
                            op4.innerHTML = this.questions[this.index].options[3];
                            this.scoreCard();
                            }
                            else{
                                quizBox.innerHTML = "Game Over... Kindly reload the page to play more"
                                op1.style.display = "none";
                                op2.style.display = "none";
                                op3.style.display = "none";
                                op4.style.display = "none";
                                btn.style.display = "none";
                            }
                    },
                    next:function(){
                        this.index++;
                        this.load();
                    },
                    check:function(ele){
                            var id = ele.id.split('');
                            if(id[id.length-1]==this.questions[this.index].answer){
                                this.score++;
                                ele.className = "correct";
                                ele.innerHTML = "Correct";
                                this.scoreCard();
                            }
                            else{
                                    ele.className = "wrong";
                                    ele.innerHTML = "Wrong";
                            }
                    },
                    notClickAble:function(){
                        for(let i=0; i<ul.children.length; i++){
                                ul.children[i].style.pointerEvents = "none";
                        }
                    },

                    ClickAble:function(){
                        for(let i=0; i<ul.children.length; i++){
                                ul.children[i].style.pointerEvents = "auto";
                                ul.children[i].className = ''
                        }
                    },
                    score:0,
                    scoreCard:function(){
                        scoreCard.innerHTML = this.score+"/"+this.questions.length;
                    }        
        }
        window.onload = app.load(); 
        function button(ele){
                app.check(ele);
                app.notClickAble();
        }
        function next(){
                app.next();
                app.ClickAble();
        }
