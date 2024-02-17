
#define ledVerde 10
#define botaoVerde 9

#define ledVermelho 2
#define botaoVermelho 3

int varBotaoVerdeApertado=0;
int varBotaoVerdeLiberado=0;

int varBotaoVermelhoApertado=0;
int varBotaoVermelhoLiberado=0;

void setup() {
  pinMode(ledVerde, OUTPUT);
  pinMode(botaoVerde, INPUT);

  pinMode(ledVermelho, OUTPUT);
  pinMode(botaoVermelho, INPUT);

  acenderLedVerde();
  apagarLedVermelho();
}

void acenderLedVerde(){
  if(digitalRead(ledVerde)==LOW){
    digitalWrite(ledVerde,HIGH);
  }
}

void apagarLedVerde(){
  if(digitalRead(ledVerde)==HIGH){
    digitalWrite(ledVerde,LOW);
  }
}

void acenderLedVermelho(){
  if(digitalRead(ledVermelho)==LOW){
    digitalWrite(ledVermelho,HIGH);
  }
}

void apagarLedVermelho(){
  if(digitalRead(ledVermelho)==HIGH){
    digitalWrite(ledVermelho,LOW);
  }
}

void loop() {
  if (digitalRead(botaoVerde)==HIGH){
    varBotaoVerdeApertado=1;
    varBotaoVerdeLiberado=0;
    
    varBotaoVermelhoApertado=0;
    varBotaoVermelhoLiberado=0;
  }else{
    varBotaoVerdeLiberado=1;
  }

  if ((varBotaoVerdeApertado==1)and(varBotaoVerdeLiberado==1)and(digitalRead(ledVerde)==LOW)){
    varBotaoVerdeApertado=0;
    varBotaoVerdeLiberado=0;
    acenderLedVerde();
    apagarLedVermelho();
  }


  if (digitalRead(botaoVermelho)==HIGH){
    varBotaoVermelhoApertado=1;
    varBotaoVermelhoLiberado=0;

    varBotaoVerdeApertado=0;
    varBotaoVerdeLiberado=0;
  }else{
    varBotaoVermelhoLiberado=1;
  }

  if ((varBotaoVermelhoApertado==1)and(varBotaoVermelhoLiberado==1)and(digitalRead(ledVermelho)==LOW)){
    varBotaoVermelhoApertado=0;
    varBotaoVermelhoLiberado=0;
    acenderLedVermelho();
    apagarLedVerde();
  }

}

