import { browser, by, element } from 'protractor';

export class RCUIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rcui-root h1')).getText();
  }
}
