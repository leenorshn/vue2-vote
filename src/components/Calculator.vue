<template>
  <div class="calculator">
        <h4>Calculator</h4>
    <div class="display">{{current ||'0'}}</div>
    <div @click="clear" class="btn oper">C</div>
    <div @click="sign" class="btn oper">+/-</div>
    <div @click="percent" class="btn oper">%</div>
    <div @click="divide" class="btn operator">/</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="times" class="btn operator">X</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="append('0')" class="btn zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="equal" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      current:'123',
      operator:null,
      operatorClick:false,
      previous:''
    }
  },
  methods:{
    clear(){
      this.current='';
    },
    sign(){
      this.current=this.current.charAt(0)==='-'?this.current.slice(1):`-${this.current}`;
    },
    percent(){
      this.current=`${parseFloat(this.current)/100}`;
    },
    append(number){
      if(this.operatorClick){
        this.current='';
        this.operatorClick=false
      }
      this.current=`${this.current}${number}`;
    },
    dot(){
      if(this.current.indexOf('.')===-1){
        this.append('.');
      }
    },
    setPrevious(){
      this.previous=this.current;
      this.operatorClick=true;
    },
    divide(){
      this.operator=(a,b)=>a/b;
      this.setPrevious();
    },
    minus(){
      this.operator=(a,b)=>a-b;
      this.setPrevious();
    },
    times(){
      this.operator=(a,b)=>a*b;
      this.setPrevious();
    },
    add(){
      this.operator=(a,b)=>a+b;
      this.setPrevious();
    },
    equal(){
      this.current=`${this.operator(parseFloat(this.previous),parseFloat(this.current))}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  width: 500px;
  margin: 0 auto;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1/5;
  background-color: midnightblue;
  padding-top: 20px;
  padding-bottom:20px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
}
.zero{
  grid-column: 1/3;
}
.btn{
  background-color: #eee;
  border: 0.5px solid #000;
  margin:4px;
  border-radius: 4px;
}
.operator{
  background-color:orange;
  color:white;
}
.oper{
  background-color:white;
  
}
h4{
  font-size:16px;
}
</style>
