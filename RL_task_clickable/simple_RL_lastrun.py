#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Thu Oct 27 08:47:14 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'simple_RL'  # from the Builder filename that created this script
expInfo = {'participant': '999', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/Johannes/Documents/phd/github/RL_demo/RL_task_clickable/simple_RL_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[2048, 1280], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Welcome"
WelcomeClock = core.Clock()
textWelcome = visual.TextStim(win=win, name='textWelcome',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
mouseWelcome = event.Mouse(win=win)
x, y = [None, None]
mouseWelcome.mouseClock = core.Clock()

# Initialize components for Routine "blank500"
blank500Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "training"
trainingClock = core.Clock()
pic_cue = visual.ImageStim(
    win=win,
    name='pic_cue', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.1), size=(0.39, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
pic_left = visual.ImageStim(
    win=win,
    name='pic_left', 
    image='sin', mask=None,
    ori=0, pos=(-0.2, -0.3), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
pic_right = visual.ImageStim(
    win=win,
    name='pic_right', 
    image='sin', mask=None,
    ori=0, pos=(0.2, -0.3), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
key = event.Mouse(win=win)
x, y = [None, None]
key.mouseClock = core.Clock()

# Initialize components for Routine "trainingFeedback"
trainingFeedbackClock = core.Clock()
textFeedback = visual.TextStim(win=win, name='textFeedback',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "blank500"
blank500Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "Goodbye"
GoodbyeClock = core.Clock()
textGoodbye = visual.TextStim(win=win, name='textGoodbye',
    text='Thank you for participating',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouseGoodbye = event.Mouse(win=win)
x, y = [None, None]
mouseGoodbye.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Welcome"-------
continueRoutine = True
# update component parameters for each repeat
textWelcome.setText('Welcome to the experiment\n\nCLICK to see the instructions')
# setup some python lists for storing info about the mouseWelcome
gotValidClick = False  # until a click is received
# keep track of which components have finished
WelcomeComponents = [textWelcome, mouseWelcome]
for thisComponent in WelcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
WelcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Welcome"-------
while continueRoutine:
    # get current time
    t = WelcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=WelcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textWelcome* updates
    if textWelcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textWelcome.frameNStart = frameN  # exact frame index
        textWelcome.tStart = t  # local t and not account for scr refresh
        textWelcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textWelcome, 'tStartRefresh')  # time at next scr refresh
        textWelcome.setAutoDraw(True)
    # *mouseWelcome* updates
    if mouseWelcome.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouseWelcome.frameNStart = frameN  # exact frame index
        mouseWelcome.tStart = t  # local t and not account for scr refresh
        mouseWelcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouseWelcome, 'tStartRefresh')  # time at next scr refresh
        mouseWelcome.status = STARTED
        mouseWelcome.mouseClock.reset()
        prevButtonState = mouseWelcome.getPressed()  # if button is down already this ISN'T a new click
    if mouseWelcome.status == STARTED:  # only update if started and not finished!
        buttons = mouseWelcome.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # abort routine on response
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in WelcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Welcome"-------
for thisComponent in WelcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textWelcome.started', textWelcome.tStartRefresh)
thisExp.addData('textWelcome.stopped', textWelcome.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouseWelcome.getPos()
buttons = mouseWelcome.getPressed()
thisExp.addData('mouseWelcome.x', x)
thisExp.addData('mouseWelcome.y', y)
thisExp.addData('mouseWelcome.leftButton', buttons[0])
thisExp.addData('mouseWelcome.midButton', buttons[1])
thisExp.addData('mouseWelcome.rightButton', buttons[2])
thisExp.addData('mouseWelcome.started', mouseWelcome.tStart)
thisExp.addData('mouseWelcome.stopped', mouseWelcome.tStop)
thisExp.nextEntry()
# the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
loopTraining = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('condition.xlsx'),
    seed=None, name='loopTraining')
thisExp.addLoop(loopTraining)  # add the loop to the experiment
thisLoopTraining = loopTraining.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisLoopTraining.rgb)
if thisLoopTraining != None:
    for paramName in thisLoopTraining:
        exec('{} = thisLoopTraining[paramName]'.format(paramName))

for thisLoopTraining in loopTraining:
    currentLoop = loopTraining
    # abbreviate parameter names if possible (e.g. rgb = thisLoopTraining.rgb)
    if thisLoopTraining != None:
        for paramName in thisLoopTraining:
            exec('{} = thisLoopTraining[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "blank500"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    blank500Components = [text]
    for thisComponent in blank500Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    blank500Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "blank500"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = blank500Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=blank500Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                text.tStop = t  # not accounting for scr refresh
                text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
                text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blank500Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "blank500"-------
    for thisComponent in blank500Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    loopTraining.addData('text.started', text.tStartRefresh)
    loopTraining.addData('text.stopped', text.tStopRefresh)
    
    # ------Prepare to start Routine "training"-------
    continueRoutine = True
    # update component parameters for each repeat
    pic_cue.setImage(cue)
    pic_left.setImage(stim_left)
    pic_right.setImage(stim_right)
    # setup some python lists for storing info about the key
    key.x = []
    key.y = []
    key.leftButton = []
    key.midButton = []
    key.rightButton = []
    key.time = []
    key.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    trainingComponents = [pic_cue, pic_left, pic_right, key]
    for thisComponent in trainingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trainingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "training"-------
    while continueRoutine:
        # get current time
        t = trainingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trainingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *pic_cue* updates
        if pic_cue.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            pic_cue.frameNStart = frameN  # exact frame index
            pic_cue.tStart = t  # local t and not account for scr refresh
            pic_cue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pic_cue, 'tStartRefresh')  # time at next scr refresh
            pic_cue.setAutoDraw(True)
        
        # *pic_left* updates
        if pic_left.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            pic_left.frameNStart = frameN  # exact frame index
            pic_left.tStart = t  # local t and not account for scr refresh
            pic_left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pic_left, 'tStartRefresh')  # time at next scr refresh
            pic_left.setAutoDraw(True)
        
        # *pic_right* updates
        if pic_right.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            pic_right.frameNStart = frameN  # exact frame index
            pic_right.tStart = t  # local t and not account for scr refresh
            pic_right.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(pic_right, 'tStartRefresh')  # time at next scr refresh
            pic_right.setAutoDraw(True)
        # *key* updates
        if key.status == NOT_STARTED and t >= 0-frameTolerance:
            # keep track of start time/frame for later
            key.frameNStart = frameN  # exact frame index
            key.tStart = t  # local t and not account for scr refresh
            key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key, 'tStartRefresh')  # time at next scr refresh
            key.status = STARTED
            key.mouseClock.reset()
            prevButtonState = key.getPressed()  # if button is down already this ISN'T a new click
        if key.status == STARTED:  # only update if started and not finished!
            buttons = key.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter([pic_left, pic_right])
                        clickableList = [pic_left, pic_right]
                    except:
                        clickableList = [[pic_left, pic_right]]
                    for obj in clickableList:
                        if obj.contains(key):
                            gotValidClick = True
                            key.clicked_name.append(obj.name)
                    x, y = key.getPos()
                    key.x.append(x)
                    key.y.append(y)
                    buttons = key.getPressed()
                    key.leftButton.append(buttons[0])
                    key.midButton.append(buttons[1])
                    key.rightButton.append(buttons[2])
                    key.time.append(key.mouseClock.getTime())
                    # abort routine on response
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trainingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "training"-------
    for thisComponent in trainingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    loopTraining.addData('pic_cue.started', pic_cue.tStartRefresh)
    loopTraining.addData('pic_cue.stopped', pic_cue.tStopRefresh)
    loopTraining.addData('pic_left.started', pic_left.tStartRefresh)
    loopTraining.addData('pic_left.stopped', pic_left.tStopRefresh)
    loopTraining.addData('pic_right.started', pic_right.tStartRefresh)
    loopTraining.addData('pic_right.stopped', pic_right.tStopRefresh)
    # store data for loopTraining (TrialHandler)
    if len(key.x): loopTraining.addData('key.x', key.x[0])
    if len(key.y): loopTraining.addData('key.y', key.y[0])
    if len(key.leftButton): loopTraining.addData('key.leftButton', key.leftButton[0])
    if len(key.midButton): loopTraining.addData('key.midButton', key.midButton[0])
    if len(key.rightButton): loopTraining.addData('key.rightButton', key.rightButton[0])
    if len(key.time): loopTraining.addData('key.time', key.time[0])
    if len(key.clicked_name): loopTraining.addData('key.clicked_name', key.clicked_name[0])
    loopTraining.addData('key.started', key.tStart)
    loopTraining.addData('key.stopped', key.tStop)
    # the Routine "training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "trainingFeedback"-------
    continueRoutine = True
    routineTimer.add(2.000000)
    # update component parameters for each repeat
    print(feedback)
    print(correct)
    print(key.clicked_name)
    print(key.getPressed)
    
    if(feedback == key.clicked_name):
        feedbackText= "+1"    
        feedbackTextColor="green"   
    else:
       feedbackText= "-1"
       feedbackTextColor="red"
    
    if(correct == key.clicked_name):
        key.corr= 1
    else:
        key.corr= 0
        
    print(key.corr)
    thisExp.addData("key.corr",key.corr)
    
    textFeedback.setColor(feedbackTextColor, colorSpace='rgb')
    textFeedback.setText(feedbackText)
    # keep track of which components have finished
    trainingFeedbackComponents = [textFeedback]
    for thisComponent in trainingFeedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trainingFeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trainingFeedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = trainingFeedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trainingFeedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *textFeedback* updates
        if textFeedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textFeedback.frameNStart = frameN  # exact frame index
            textFeedback.tStart = t  # local t and not account for scr refresh
            textFeedback.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textFeedback, 'tStartRefresh')  # time at next scr refresh
            textFeedback.setAutoDraw(True)
        if textFeedback.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > textFeedback.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                textFeedback.tStop = t  # not accounting for scr refresh
                textFeedback.frameNStop = frameN  # exact frame index
                win.timeOnFlip(textFeedback, 'tStopRefresh')  # time at next scr refresh
                textFeedback.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trainingFeedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trainingFeedback"-------
    for thisComponent in trainingFeedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    loopTraining.addData('textFeedback.started', textFeedback.tStartRefresh)
    loopTraining.addData('textFeedback.stopped', textFeedback.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'loopTraining'


# ------Prepare to start Routine "blank500"-------
continueRoutine = True
routineTimer.add(0.500000)
# update component parameters for each repeat
# keep track of which components have finished
blank500Components = [text]
for thisComponent in blank500Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
blank500Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "blank500"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = blank500Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=blank500Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    if text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
            # keep track of stop time/frame for later
            text.tStop = t  # not accounting for scr refresh
            text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
            text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in blank500Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "blank500"-------
for thisComponent in blank500Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)

# ------Prepare to start Routine "Goodbye"-------
continueRoutine = True
# update component parameters for each repeat
# setup some python lists for storing info about the mouseGoodbye
gotValidClick = False  # until a click is received
# keep track of which components have finished
GoodbyeComponents = [textGoodbye, mouseGoodbye]
for thisComponent in GoodbyeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GoodbyeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Goodbye"-------
while continueRoutine:
    # get current time
    t = GoodbyeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GoodbyeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textGoodbye* updates
    if textGoodbye.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textGoodbye.frameNStart = frameN  # exact frame index
        textGoodbye.tStart = t  # local t and not account for scr refresh
        textGoodbye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textGoodbye, 'tStartRefresh')  # time at next scr refresh
        textGoodbye.setAutoDraw(True)
    if textGoodbye.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > textGoodbye.tStartRefresh + 10-frameTolerance:
            # keep track of stop time/frame for later
            textGoodbye.tStop = t  # not accounting for scr refresh
            textGoodbye.frameNStop = frameN  # exact frame index
            win.timeOnFlip(textGoodbye, 'tStopRefresh')  # time at next scr refresh
            textGoodbye.setAutoDraw(False)
    # *mouseGoodbye* updates
    if mouseGoodbye.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouseGoodbye.frameNStart = frameN  # exact frame index
        mouseGoodbye.tStart = t  # local t and not account for scr refresh
        mouseGoodbye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouseGoodbye, 'tStartRefresh')  # time at next scr refresh
        mouseGoodbye.status = STARTED
        mouseGoodbye.mouseClock.reset()
        prevButtonState = mouseGoodbye.getPressed()  # if button is down already this ISN'T a new click
    if mouseGoodbye.status == STARTED:  # only update if started and not finished!
        buttons = mouseGoodbye.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # abort routine on response
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GoodbyeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Goodbye"-------
for thisComponent in GoodbyeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textGoodbye.started', textGoodbye.tStartRefresh)
thisExp.addData('textGoodbye.stopped', textGoodbye.tStopRefresh)
# store data for thisExp (ExperimentHandler)
x, y = mouseGoodbye.getPos()
buttons = mouseGoodbye.getPressed()
thisExp.addData('mouseGoodbye.x', x)
thisExp.addData('mouseGoodbye.y', y)
thisExp.addData('mouseGoodbye.leftButton', buttons[0])
thisExp.addData('mouseGoodbye.midButton', buttons[1])
thisExp.addData('mouseGoodbye.rightButton', buttons[2])
thisExp.addData('mouseGoodbye.started', mouseGoodbye.tStart)
thisExp.addData('mouseGoodbye.stopped', mouseGoodbye.tStop)
thisExp.nextEntry()
# the Routine "Goodbye" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
