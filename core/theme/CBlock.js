require("google-closure-library");

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview CBlock theme.
 * @author johndlee05@gmail.com (John Draken-Scott Lee)
 */
'use strict';

goog.provide('Blockly.Themes.CBlock');

goog.require('Blockly.Theme');

Blockly.Themes.CBlock = Blockly.Theme.defineTheme('cblock', {
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#fffc67',
    'toolboxBackgroundColour': '#fdd800',
    'toolboxForegroundColour': '#fffff',
    'flyoutBackgroundColour': '#252526',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 1,
    'scrollbarColour': '#797979',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 0.4,
    'cursorColour': '#fffc67',
  }
});
