import {ToolbarAction} from './toolbar-action';

export class ToolbarOptions {
  backEnabled: boolean;
  title: string;
  actions: ToolbarAction[];
  hideButtons: boolean;


  constructor(backEnabled: boolean, title: string, actions: ToolbarAction[], hideButtons: boolean) {
    this.backEnabled = backEnabled;
    this.title = title;
    this.actions = actions;
    this.hideButtons = hideButtons;
  }

}
