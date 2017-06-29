// Test helpers
export function clickButton(fixture, selector) {
  let button = fixture.debugElement.nativeElement.querySelector(selector);
  button.click();
}