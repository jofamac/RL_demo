/****************** 
 * Simple_Rl Test *
 ******************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'simple_RL';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(Instruction1RoutineBegin());
flowScheduler.add(Instruction1RoutineEachFrame());
flowScheduler.add(Instruction1RoutineEnd());
flowScheduler.add(Instruction2RoutineBegin());
flowScheduler.add(Instruction2RoutineEachFrame());
flowScheduler.add(Instruction2RoutineEnd());
const loopTrainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopTrainingLoopBegin(loopTrainingLoopScheduler));
flowScheduler.add(loopTrainingLoopScheduler);
flowScheduler.add(loopTrainingLoopEnd);
flowScheduler.add(blank500RoutineBegin());
flowScheduler.add(blank500RoutineEachFrame());
flowScheduler.add(blank500RoutineEnd());
flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/ball_green.png', 'path': 'images/ball_green.png'},
    {'name': 'images/c2.jpg', 'path': 'images/c2.jpg'},
    {'name': 'images/c1.jpg', 'path': 'images/c1.jpg'},
    {'name': 'images/ball_red.png', 'path': 'images/ball_red.png'},
    {'name': 'condition.xlsx', 'path': 'condition.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var textWelcome;
var mouseWelcome;
var Instruction1Clock;
var textInstructions1;
var mouseInstructions1;
var Instruction2Clock;
var textInstructions2;
var mouseInstructions2;
var blank500Clock;
var text;
var trainingClock;
var pic_cue;
var pic_left;
var pic_right;
var key;
var trainingFeedbackClock;
var textFeedback;
var GoodbyeClock;
var textGoodbye;
var mouseGoodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  textWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcome',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  mouseWelcome = new core.Mouse({
    win: psychoJS.window,
  });
  mouseWelcome.mouseClock = new util.Clock();
  // Initialize components for Routine "Instruction1"
  Instruction1Clock = new util.Clock();
  textInstructions1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstructions1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  mouseInstructions1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseInstructions1.mouseClock = new util.Clock();
  // Initialize components for Routine "Instruction2"
  Instruction2Clock = new util.Clock();
  textInstructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstructions2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouseInstructions2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseInstructions2.mouseClock = new util.Clock();
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "training"
  trainingClock = new util.Clock();
  pic_cue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pic_cue', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.1], size : [0.9, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  pic_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pic_left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.2), (- 0.3)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  pic_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pic_right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.2, (- 0.3)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  key = new core.Mouse({
    win: psychoJS.window,
  });
  key.mouseClock = new util.Clock();
  // Initialize components for Routine "trainingFeedback"
  trainingFeedbackClock = new util.Clock();
  textFeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'textFeedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  textGoodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'textGoodbye',
    text: 'Thank you for participating',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouseGoodbye = new core.Mouse({
    win: psychoJS.window,
  });
  mouseGoodbye.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Welcome'-------
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textWelcome.setText('Welcome to the experiment\n\nCLICK to see the instructions');
    // setup some python lists for storing info about the mouseWelcome
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(textWelcome);
    WelcomeComponents.push(mouseWelcome);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function WelcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Welcome'-------
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcome* updates
    if (t >= 0.0 && textWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcome.tStart = t;  // (not accounting for frame time here)
      textWelcome.frameNStart = frameN;  // exact frame index
      
      textWelcome.setAutoDraw(true);
    }

    // *mouseWelcome* updates
    if (t >= 0.0 && mouseWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseWelcome.tStart = t;  // (not accounting for frame time here)
      mouseWelcome.frameNStart = frameN;  // exact frame index
      
      mouseWelcome.status = PsychoJS.Status.STARTED;
      mouseWelcome.mouseClock.reset();
      prevButtonState = mouseWelcome.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseWelcome.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseWelcome.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function WelcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Welcome'-------
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouseWelcome.getPos();
    _mouseButtons = mouseWelcome.getPressed();
    psychoJS.experiment.addData('mouseWelcome.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseWelcome.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseWelcome.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseWelcome.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseWelcome.rightButton', _mouseButtons[2]);
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instruction1Components;
function Instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instruction1'-------
    t = 0;
    Instruction1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textInstructions1.setText('At each trial, you will see a scene, for example a mountain or a beach.\n\nAfter that you can catch a green ball or a red ball. Every scene belongs to a different ball. You can find out by the reward you receive at each trial.\n\nCLICK to continue');
    // setup some python lists for storing info about the mouseInstructions1
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instruction1Components = [];
    Instruction1Components.push(textInstructions1);
    Instruction1Components.push(mouseInstructions1);
    
    for (const thisComponent of Instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instruction1'-------
    // get current time
    t = Instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstructions1* updates
    if (t >= 0.0 && textInstructions1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstructions1.tStart = t;  // (not accounting for frame time here)
      textInstructions1.frameNStart = frameN;  // exact frame index
      
      textInstructions1.setAutoDraw(true);
    }

    // *mouseInstructions1* updates
    if (t >= 0.0 && mouseInstructions1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseInstructions1.tStart = t;  // (not accounting for frame time here)
      mouseInstructions1.frameNStart = frameN;  // exact frame index
      
      mouseInstructions1.status = PsychoJS.Status.STARTED;
      mouseInstructions1.mouseClock.reset();
      prevButtonState = mouseInstructions1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseInstructions1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseInstructions1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instruction1'-------
    for (const thisComponent of Instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouseInstructions1.getPos();
    _mouseButtons = mouseInstructions1.getPressed();
    psychoJS.experiment.addData('mouseInstructions1.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseInstructions1.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseInstructions1.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseInstructions1.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseInstructions1.rightButton', _mouseButtons[2]);
    // the Routine "Instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Instruction2Components;
function Instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instruction2'-------
    t = 0;
    Instruction2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textInstructions2.setText('For example, if you get more rewards for catching a red ball when the mountain is shown, you know that the red ball belongs to the mountain scene. Always catch the same ball once you know where it belongs to.\n\nPlease CLICK to continue with a training');
    // setup some python lists for storing info about the mouseInstructions2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instruction2Components = [];
    Instruction2Components.push(textInstructions2);
    Instruction2Components.push(mouseInstructions2);
    
    for (const thisComponent of Instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instruction2'-------
    // get current time
    t = Instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstructions2* updates
    if (t >= 0.0 && textInstructions2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstructions2.tStart = t;  // (not accounting for frame time here)
      textInstructions2.frameNStart = frameN;  // exact frame index
      
      textInstructions2.setAutoDraw(true);
    }

    // *mouseInstructions2* updates
    if (t >= 0.0 && mouseInstructions2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseInstructions2.tStart = t;  // (not accounting for frame time here)
      mouseInstructions2.frameNStart = frameN;  // exact frame index
      
      mouseInstructions2.status = PsychoJS.Status.STARTED;
      mouseInstructions2.mouseClock.reset();
      prevButtonState = mouseInstructions2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseInstructions2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseInstructions2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instruction2'-------
    for (const thisComponent of Instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouseInstructions2.getPos();
    _mouseButtons = mouseInstructions2.getPressed();
    psychoJS.experiment.addData('mouseInstructions2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseInstructions2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseInstructions2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseInstructions2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseInstructions2.rightButton', _mouseButtons[2]);
    // the Routine "Instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var loopTraining;
var currentLoop;
function loopTrainingLoopBegin(loopTrainingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loopTraining = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition.xlsx',
      seed: undefined, name: 'loopTraining'
    });
    psychoJS.experiment.addLoop(loopTraining); // add the loop to the experiment
    currentLoop = loopTraining;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoopTraining of loopTraining) {
      const snapshot = loopTraining.getSnapshot();
      loopTrainingLoopScheduler.add(importConditions(snapshot));
      loopTrainingLoopScheduler.add(blank500RoutineBegin(snapshot));
      loopTrainingLoopScheduler.add(blank500RoutineEachFrame());
      loopTrainingLoopScheduler.add(blank500RoutineEnd());
      loopTrainingLoopScheduler.add(trainingRoutineBegin(snapshot));
      loopTrainingLoopScheduler.add(trainingRoutineEachFrame());
      loopTrainingLoopScheduler.add(trainingRoutineEnd());
      loopTrainingLoopScheduler.add(trainingFeedbackRoutineBegin(snapshot));
      loopTrainingLoopScheduler.add(trainingFeedbackRoutineEachFrame());
      loopTrainingLoopScheduler.add(trainingFeedbackRoutineEnd());
      loopTrainingLoopScheduler.add(endLoopIteration(loopTrainingLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loopTrainingLoopEnd() {
  psychoJS.experiment.removeLoop(loopTraining);

  return Scheduler.Event.NEXT;
}


var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blank500'-------
    t = 0;
    blank500Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(text);
    
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank500RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blank500'-------
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd() {
  return async function () {
    //------Ending Routine 'blank500'-------
    for (const thisComponent of blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trainingComponents;
function trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'training'-------
    t = 0;
    trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    pic_cue.setImage(cue);
    pic_left.setImage(stim_left);
    pic_right.setImage(stim_right);
    // setup some python lists for storing info about the key
    // current position of the mouse:
    key.x = [];
    key.y = [];
    key.leftButton = [];
    key.midButton = [];
    key.rightButton = [];
    key.time = [];
    key.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trainingComponents = [];
    trainingComponents.push(pic_cue);
    trainingComponents.push(pic_left);
    trainingComponents.push(pic_right);
    trainingComponents.push(key);
    
    for (const thisComponent of trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trainingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'training'-------
    // get current time
    t = trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pic_cue* updates
    if (t >= 0 && pic_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pic_cue.tStart = t;  // (not accounting for frame time here)
      pic_cue.frameNStart = frameN;  // exact frame index
      
      pic_cue.setAutoDraw(true);
    }

    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pic_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pic_cue.setAutoDraw(false);
    }
    
    // *pic_left* updates
    if (t >= 1 && pic_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pic_left.tStart = t;  // (not accounting for frame time here)
      pic_left.frameNStart = frameN;  // exact frame index
      
      pic_left.setAutoDraw(true);
    }

    frameRemains = 1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pic_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pic_left.setAutoDraw(false);
    }
    
    // *pic_right* updates
    if (t >= 1 && pic_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pic_right.tStart = t;  // (not accounting for frame time here)
      pic_right.frameNStart = frameN;  // exact frame index
      
      pic_right.setAutoDraw(true);
    }

    frameRemains = 1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pic_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pic_right.setAutoDraw(false);
    }
    // *key* updates
    if (t >= 1 && key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key.tStart = t;  // (not accounting for frame time here)
      key.frameNStart = frameN;  // exact frame index
      
      key.status = PsychoJS.Status.STARTED;
      key.mouseClock.reset();
      prevButtonState = key.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key.status = PsychoJS.Status.FINISHED;
  }
    if (key.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = key.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = key.getPos();
          key.x.push(_mouseXYs[0]);
          key.y.push(_mouseXYs[1]);
          key.leftButton.push(_mouseButtons[0]);
          key.midButton.push(_mouseButtons[1]);
          key.rightButton.push(_mouseButtons[2]);
          key.time.push(key.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [pic_left, pic_right]) {
            if (obj.contains(key)) {
              gotValidClick = true;
              key.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainingRoutineEnd() {
  return async function () {
    //------Ending Routine 'training'-------
    for (const thisComponent of trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (key.x) {  psychoJS.experiment.addData('key.x', key.x[0])};
    if (key.y) {  psychoJS.experiment.addData('key.y', key.y[0])};
    if (key.leftButton) {  psychoJS.experiment.addData('key.leftButton', key.leftButton[0])};
    if (key.midButton) {  psychoJS.experiment.addData('key.midButton', key.midButton[0])};
    if (key.rightButton) {  psychoJS.experiment.addData('key.rightButton', key.rightButton[0])};
    if (key.time) {  psychoJS.experiment.addData('key.time', key.time[0])};
    if (key.clicked_name) {  psychoJS.experiment.addData('key.clicked_name', key.clicked_name[0])};
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_js;
var correct_js;
var feedbackText;
var feedbackTextColor;
var trainingFeedbackComponents;
function trainingFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trainingFeedback'-------
    t = 0;
    trainingFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    console.log(feedback);
    
    feedback_js = feedback.join(", ");
    //feedback_js = feedback.replace(/[']/g, "");
    console.log(feedback_js);
    console.log(correct);
    
    correct_js = correct.join(", ");
    //correct_js = correct..replace(/[']/g, "");
    console.log(correct_js);
    
    console.log(key.clicked_name);
    key.clicked_name_js = key.clicked_name.join(", ");
    key.clicked_name_js = "\""+ key.clicked_name_js +"\""
    console.log(key.clicked_name_js);
    
    if ((correct_js === key.clicked_name_js)) {
        key.corr = 1;
    } else {
        key.corr = 0;
    }
    console.log(key.corr);
    psychoJS.experiment.addData("key.corr", key.corr);
    if ((feedback_js === key.clicked_name_js)) {
        feedbackText = "Correct!";
        feedbackTextColor = "green";
    } else {
        feedbackText = "Wrong!";
        feedbackTextColor = "red";
    }
    
    textFeedback.setColor(new util.Color(feedbackTextColor));
    textFeedback.setText(feedbackText);
    // keep track of which components have finished
    trainingFeedbackComponents = [];
    trainingFeedbackComponents.push(textFeedback);
    
    for (const thisComponent of trainingFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trainingFeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trainingFeedback'-------
    // get current time
    t = trainingFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textFeedback* updates
    if (t >= 0.0 && textFeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textFeedback.tStart = t;  // (not accounting for frame time here)
      textFeedback.frameNStart = frameN;  // exact frame index
      
      textFeedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textFeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textFeedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainingFeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'trainingFeedback'-------
    for (const thisComponent of trainingFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Goodbye'-------
    t = 0;
    GoodbyeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouseGoodbye
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(textGoodbye);
    GoodbyeComponents.push(mouseGoodbye);
    
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Goodbye'-------
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textGoodbye* updates
    if (t >= 0.0 && textGoodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textGoodbye.tStart = t;  // (not accounting for frame time here)
      textGoodbye.frameNStart = frameN;  // exact frame index
      
      textGoodbye.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textGoodbye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textGoodbye.setAutoDraw(false);
    }
    // *mouseGoodbye* updates
    if (t >= 0.0 && mouseGoodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseGoodbye.tStart = t;  // (not accounting for frame time here)
      mouseGoodbye.frameNStart = frameN;  // exact frame index
      
      mouseGoodbye.status = PsychoJS.Status.STARTED;
      mouseGoodbye.mouseClock.reset();
      prevButtonState = mouseGoodbye.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseGoodbye.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseGoodbye.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GoodbyeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Goodbye'-------
    for (const thisComponent of GoodbyeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouseGoodbye.getPos();
    _mouseButtons = mouseGoodbye.getPressed();
    psychoJS.experiment.addData('mouseGoodbye.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseGoodbye.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseGoodbye.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseGoodbye.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseGoodbye.rightButton', _mouseButtons[2]);
    // the Routine "Goodbye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
