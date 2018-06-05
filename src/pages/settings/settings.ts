import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingServices } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(
    private settingService: SettingServices
  ) {}
  onToggle(toggle: Toggle) {
    this.settingService.setBackground(toggle.checked);
  }

  checkAltBackground() {
    return this.settingService.isAltBackground();
  }
}
