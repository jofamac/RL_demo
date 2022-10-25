# initialise ####
# load packages
library(ggplot2); library(bbmle)
# set wd from script file path
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# source RL models
source("mod.1LR.r")

# load data frame
input <- list.files(path = "data/")
learning <- do.call("rbind", lapply(paste("data/",input,sep=""), read.csv, header=T))
# some variable recoding
learning$trial <- learning$loopTraining.thisN
learning <- learning[complete.cases(learning$trial),]
learning$trial <- learning$trial+1
learning$stim_left <- gsub(x = learning$stim_left,pattern = "images/",replacement = "")
learning$stim_left <- gsub(x = learning$stim_left,pattern = ".jpg",replacement = "")
learning$stim_right <- gsub(x = learning$stim_right,pattern = "images/",replacement = "")
learning$stim_right <- gsub(x = learning$stim_right,pattern = ".jpg",replacement = "")
learning$choice <- NA
learning$reward <- NA
for(n in 1:length(learning$trial)){
  if(learning$key.clicked_name[n]=="pic_left"){
    learning$choice[n] <- learning$stim_left[n]
  }else{
    learning$choice[n] <- learning$stim_right[n]
  }
  if(learning$reward[n]==learning$correct[n]){
    learning$reward[n] <- 1
  }else{
    learning$reward[n] <- 0
  }
}

learning$correct<- learning$key.corr
rw.mod <- learning[,c("trial","choice","reward","correct","is_valid")]

# fitting one participant
mle2(mod.1LR.fit,start=list(a=runif(1),b=runif(1)),method = "L-BFGS",lower=0,upper=30)

# plot
# correct choice
mean(rw.mod$correct)
ggplot(rw.mod, aes(x=trial, y=correct))+ theme_minimal()+ geom_line()

# values
colors <- c("round candy"="orange","squared candy"="red")
ggplot(rw.mod,aes(x=trial)) + theme_minimal()+
  geom_line(aes(y=round.1.value, color="round candy"))+
  geom_line(aes(y=squared.1.value, color="squared candy"))+
  scale_color_manual(values=colors)+labs(color="legend")+
  ylab("Choice values")

# choice probabilities
ggplot(rw.mod,aes(x=trial)) + theme_minimal()+
  geom_line(aes(y=round.choice.prob, color="round candy"))+
  geom_line(aes(y=squared.choice.prob, color="squared candy"))+
  scale_color_manual(values=colors)+labs(color="legend")+
  ylab("Choice probabilities")

