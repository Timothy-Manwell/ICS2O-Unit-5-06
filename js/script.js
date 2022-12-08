// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-06/sw.js", {
    scope: "/ICS2O-Unit-5-06/",
  })
}

function myButtonClicked() {
  let text = ""
  let counter = 0
  const integerA = parseInt(document.getElementById("integer-A").value)
  const integerB = parseInt(document.getElementById("integer-B").value)

  while (counter <= integerA) {
    text = text + "Your number is: " + integerB
    counter++
    integerB++
  }
  document.getElementById("answer").innerHTML = text
}
