// Test helpers
export function clickButton(fixture, selector) {
  let button = fixture.debugElement.nativeElement.querySelector(selector);
  button.click();
}

export function fillInput(fixture, selector, value) {
  let input = fixture.debugElement.nativeElement.querySelector(selector);
  input.value = value;
}