# Murkse script
# Jacobs study
#
# written by Johannes Falck
# contact: johannes.falck89@gmail.com
# last time script was modified
last_modified <- file.mtime(paste(rstudioapi::getActiveDocumentContext()$path))

mod.1LR.fit  <-  function(a,b){
  # Rescorla-Wagner Model
  # alpha: learning rate; high value means highly reward dependent
  # beta: inverse temperature; choice behavior, lower value is exploring, higher value exploiting behavior
  
  # character, initial values
  # murks1
  rw.mod$squared.1.value <<-  0.5 
  rw.mod$round.1.value <<- 0.5 
  
  # choice value
  rw.mod$chosen.value <<- NA
  rw.mod$unchosen.value <<- NA
  
  # choice probabilities
  rw.mod$squared.choice.prob <<- 0
  rw.mod$round.choice.prob <<- 0 
  rw.mod$choice.prob <<- 0
  
  for(n in 1:length(rw.mod$trial))
  { 
  # action selection####

    # choice probability
    rw.mod$squared.choice.prob[n] <<- exp(rw.mod$squared.1.value[n]*b)/(exp(rw.mod$squared.1.value[n]*b)+exp(rw.mod$round.1.value[n]*b))
    rw.mod$round.choice.prob[n] <<- exp(rw.mod$round.1.value[n]*b)/(exp(rw.mod$squared.1.value[n]*b)+exp(rw.mod$round.1.value[n]*b)) 
    
    # observed choice
    if(rw.mod$choice[n] == "squared") {
    # squared chosen
      rw.mod$choice.prob[n] <<- rw.mod$squared.choice.prob[n]
      rw.mod$chosen.value[n] <<- rw.mod$squared.1.value[n]
      rw.mod$unchosen.value[n] <<- rw.mod$round.1.value[n]
    }else{ 
    # round chosen
      rw.mod$choice.prob[n] <<- rw.mod$round.choice.prob[n]
      rw.mod$chosen.value[n] <<- rw.mod$round.1.value[n]
      rw.mod$unchosen.value[n] <<- rw.mod$squared.1.value[n]
      }
    
  # value update ####
    # squared chosen
    if (rw.mod$choice[n]=="squared"){
      
      # positive LR
      if(rw.mod$reward[n]-rw.mod$squared.1.value[n]>0){
        squared.update <<- rw.mod$squared.1.value[n] + a*(rw.mod$reward[n]-rw.mod$squared.1.value[n])
        rw.mod$scaled.rpe[n] <<- rw.mod$squared.1.value[n] - squared.update
        round.update <<- rw.mod$round.1.value[n]
      }else{
        # negative LR
        squared.update <<- rw.mod$squared.1.value[n] + a*(rw.mod$reward[n]-rw.mod$squared.1.value[n]) 
        rw.mod$scaled.rpe[n] <<- rw.mod$squared.1.value[n] - squared.update
        round.update <<- rw.mod$round.1.value[n]
      }
    }else{
      # round chosen
      # positive LR
      if(rw.mod$reward[n]-rw.mod$round.1.value[n]>0){
        round.update <<- rw.mod$round.1.value[n] + a*(rw.mod$reward[n]-rw.mod$round.1.value[n])
        rw.mod$scaled.rpe[n] <<- rw.mod$round.1.value[n] - round.update
        squared.update <<- rw.mod$squared.1.value[n]
      }else{
        # negative LR
        round.update <<- rw.mod$round.1.value[n] + a*(rw.mod$reward[n]-rw.mod$round.1.value[n])
        rw.mod$scaled.rpe[n] <<- rw.mod$round.1.value[n] - round.update
        squared.update <<- rw.mod$squared.1.value[n]}}
    
    # run value update for next trial until pre-last trial
    # current index position
    
    if(n<length(rw.mod$trial)){
        rw.mod$squared.1.value[n+1]<<-squared.update
        rw.mod$round.1.value[n+1]<<-round.update
        }
    
    # separate rewards for squared and round bandit
    if(rw.mod$choice[n]=="squared"){ 
      # rewards squared
      rw.mod$squared.reward[n] <<- rw.mod$reward[n] 
      rw.mod$round.reward[n] <<- 0 }
    else{ 
      # rewards round
      rw.mod$round.reward[n] <<- rw.mod$reward[n] 
      rw.mod$squared.reward[n] <<- 0
      }
  }
  p <- -sum(log(rw.mod$choice.prob))
  return(p)
}
