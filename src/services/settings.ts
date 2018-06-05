export class SettingServices {
  private altBackground = false;

  setBackground(isAlt: boolean){
    this.altBackground = isAlt;
  }

  isAltBackground() {
    return this.altBackground;
  }
}