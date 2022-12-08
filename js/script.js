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
  const integerA = parseInt(document.getElementById("integer-A").value)
  const integerB = parseInt(document.getElementById("integer-B").value)

  while (integerA <= integerB || integerB <= integerA) {
    text = text + "Your number is: " + integerB
    integerB++
  }
  document.getElementById("answer").innerHTML = text
}
