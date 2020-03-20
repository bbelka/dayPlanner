# dayPlanner


## Purpose

The purpose of this project was, in the process of scripting a planner app, utilize the concepts that we've been learning in class to effectively create the logic that drive the app.

## The process

* Most of the html and css were given for this assignment, as well as an animation of the primary funcitons of the app.

* Utilizing these tools and Boostrap layout tools, I created the desired layout and formatted it utilizing the provided css.

* Most of the project was writing the script to drive the app.

* At first, this proved challenging but that was because I was not thinking of possibly the easiest way to relate two seperate div's: traversing.

* I utilized the jQuery library to relate the input field to it's corresponding save button, as well as the latter to the former.

* I utilized moment.js to access time and refresh the color coding of the time periods on an ongoing basis.
  * The date at the top is loaded only on load but is refereced from moment.

* The user-input items are stored to local storage and indexed by the time period into which they were entered.
  * They are stored via the save button function but also on a keyup, so they are continually updated.
  * The previously entered data is recalled from local stogare when the page is reopened.

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

