import * as actions from '../actions/format'
import keybindings from '../shortcutHandler'

// Here I include the mark item in the menu

export default {
  id: 'formatMenuItem',
  label: 'Format',
  submenu: [{
    id: 'MarkMenuItem',
    label: 'Mark',
    type: 'checkbox',
    accelerator: keybindings.getAccelerator('formatMark'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'mark')
  }, {
    id: 'strongMenuItem',
    label: 'Strong',
    type: 'checkbox',
    accelerator: keybindings.getAccelerator('formatStrong'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'strong')
    }
  }, {
    id: 'emphasisMenuItem',
    label: 'Emphasis',
    type: 'checkbox',
    accelerator: keybindings.getAccelerator('formatEmphasis'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'em')
    }
  }, {
    id: 'inlineCodeMenuItem',
    label: 'Inline Code',
    type: 'checkbox',
    accelerator: keybindings.getAccelerator('formatInlineCode'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'inline_code')
    }
  }, {
    type: 'separator'
  }, {
    id: 'strikeMenuItem',
    label: 'Strike',
    type: 'checkbox',
    accelerator: keybindings.getAccelerator('formatStrike'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'del')
    }
  }, {
    id: 'hyperlinkMenuItem',
    label: 'Hyperlink',
    type: 'checkbox',
    accelerator: keybindings.getAccelerator('formatHyperlink'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'link')
    }
  }, {
    id: 'imageMenuItem',
    label: 'Image',
    type: 'checkbox',
    accelerator: keybindings.getAccelerator('formatImage'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'image')
    }
  }, {
    type: 'separator'
  }, {
    label: 'Clear Format',
    accelerator: keybindings.getAccelerator('formatClearFormat'),
    click (menuItem, browserWindow) {
      actions.format(browserWindow, 'clear')
    }
  }]
}
